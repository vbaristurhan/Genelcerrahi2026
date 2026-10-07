-- Run once in your own Supabase SQL Editor. No secret key is needed in this file.
create table if not exists public.exam_admins (user_id uuid primary key references auth.users(id));
create table if not exists public.exam_bank (id text primary key, payload jsonb not null);
create table if not exists public.exam_codes (code_hash text primary key, candidate_name text not null, candidate_id text not null, expires_at timestamptz not null, consumed_at timestamptz);
create table if not exists public.exam_sessions (
 id uuid primary key default gen_random_uuid(), token_hash text unique not null,
 name text not null, candidate_id text not null, node_id text, deadline timestamptz not null,
 started_at timestamptz not null default now(), finished_at timestamptz, reason text,
 log jsonb not null default '[]', events jsonb not null default '[]'
);
alter table public.exam_admins enable row level security;
alter table public.exam_bank enable row level security;
alter table public.exam_codes enable row level security;
alter table public.exam_sessions enable row level security;
revoke all on public.exam_admins,public.exam_bank,public.exam_codes,public.exam_sessions from anon,authenticated;
-- No client-facing RLS policy: only the authorized Edge Function can use these tables.

-- Versioned rubric is snapshotted per session; later edits never regrade silently.
create table if not exists public.exam_settings(id text primary key, rubric jsonb not null);
alter table public.exam_settings enable row level security;
revoke all on public.exam_settings from anon,authenticated;
alter table public.exam_sessions add column if not exists rubric jsonb;

create or replace function public.exam_start(p_code text,p_token text,p_first text)
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare c public.exam_codes%rowtype; s public.exam_sessions%rowtype;
begin
 select * into c from public.exam_codes where code_hash=p_code for update;
 if not found or c.consumed_at is not null or c.expires_at<=now() then raise exception 'Geçersiz, süresi dolmuş veya kullanılmış aday kodu'; end if;
 if not exists(select 1 from public.exam_bank where id=p_first) then raise exception 'Vaka bankası kurulmamış'; end if;
 update public.exam_codes set consumed_at=now() where code_hash=p_code;
 insert into public.exam_sessions(token_hash,name,candidate_id,node_id,deadline,rubric)
 values(p_token,c.candidate_name,c.candidate_id,p_first,now()+interval '60 minutes',(select rubric from public.exam_settings where id='active')) returning * into s;
 return to_jsonb(s);
end $$;

create or replace function public.exam_action(p_token text,p_action text,p_node text default null,p_option text default null,p_reason text default null,p_events jsonb default '[]')
returns jsonb language plpgsql security definer set search_path=public,pg_temp as $$
declare s public.exam_sessions%rowtype; n jsonb; o jsonb; dest text; e jsonb; combined jsonb;
begin
 select * into s from public.exam_sessions where token_hash=p_token for update;
 if not found then raise exception 'Oturum bulunamadı'; end if;
 if s.finished_at is null and s.deadline<=now() then
  update public.exam_sessions set finished_at=now(),reason='timeout' where id=s.id returning * into s;
 end if;
 if jsonb_typeof(p_events)='array' then
  -- Deduplicate event UUIDs and preserve the first received copy; cap audit payload.
  combined:=s.events;
  for e in select value from jsonb_array_elements(p_events) loop
   if jsonb_array_length(combined)>=2000 then exit; end if;
   if e ? 'id' and not exists(select 1 from jsonb_array_elements(combined) v where v->>'id'=e->>'id') then combined:=combined||jsonb_build_array(e||jsonb_build_object('receivedAt',now()));end if;
  end loop;
  update public.exam_sessions set events=combined where id=s.id returning * into s;
 end if;
 if s.finished_at is not null then return to_jsonb(s);end if;
 if p_action='answer' then
  -- A duplicate or stale request cannot score twice; return current authoritative state.
  if s.node_id is distinct from p_node then return to_jsonb(s);end if;
  select payload into n from public.exam_bank where id=s.node_id;
  select value into o from jsonb_array_elements(n->'options') where value->>'id'=p_option;
  if o is null then raise exception 'Geçersiz seçenek'; end if;
  dest:=o->>'next';
  update public.exam_sessions set node_id=dest,
    log=log||jsonb_build_array(jsonb_build_object('nodeId',p_node,'caseId',n->>'caseId','caseTitle',n->>'caseTitle','stage',n->'stage','rescue',n->'rescue','choice',o->>'text','optionId',p_option,'points',(o->>'points')::int,'critical',(o->>'critical')::boolean,'explanation',n->>'explanation','clinical',n->>'clinical','question',n->>'title','assessments',o->'assessments','feedback',o->>'feedback','outcome',o->>'outcome','learningGoal',o->>'learningGoal','time',now())),
    finished_at=case when dest is null then now() else null end,
    reason=case when dest is null then 'completed' else null end
   where id=s.id returning * into s;
 elsif p_action='finish' then
  update public.exam_sessions set finished_at=now(),reason='candidate' where id=s.id returning * into s;
 elsif p_action not in ('state','events') then raise exception 'Geçersiz işlem';
 end if;
 return to_jsonb(s);
end $$;
revoke all on function public.exam_start(text,text,text) from public,anon,authenticated;
revoke all on function public.exam_action(text,text,text,text,text,jsonb) from public,anon,authenticated;
grant execute on function public.exam_start(text,text,text) to service_role;
grant execute on function public.exam_action(text,text,text,text,text,jsonb) to service_role;
