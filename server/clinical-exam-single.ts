// Single-file Supabase Edge Function. No secrets embedded.
const AREAS = Object.freeze({assessment:'İlk değerlendirme ve tanısal yaklaşım',investigation:'Tetkik seçimi ve yorumlama',treatment:'Tedavi ve zamanlama',followup:'İzlem ve güvenli sonlandırma'});
function validateRubric(rubric) {
 if(!rubric?.version || !Array.isArray(rubric.cases) || !rubric.cases.length) throw Error('Puanlama haritası tamamlanmamış');
 const ids=new Set();
 for(const c of rubric.cases){if(ids.has(c.id))throw Error('Tekrarlanan vaka');ids.add(c.id);for(const a of Object.keys(AREAS)){const slots=c.slots.filter(s=>s.area===a);if(!slots.length || Math.abs(slots.reduce((n,s)=>n+s.weight,0)-25)>1e-8)throw Error('Alan ağırlığı 25 olmalı: '+c.id+'/'+a);}const slotIds=c.slots.map(s=>s.id);if(new Set(slotIds).size!==slotIds.length || c.slots.some(s=>!AREAS[s.area]||!(s.weight>0)))throw Error('Geçersiz değerlendirme alanı');}
 return rubric;
}
function buildReport(session,rubric){
 validateRubric(rubric);
 if(!session.finished_at && !session.finishedAt) throw Error('Sonuç yalnız sınav tamamlandıktan sonra açılır');
 const cases=rubric.cases.map(c=>{
  const rows=(session.log||[]).filter(r=>r.caseId===c.id);const earned=new Map();
  const decisions=rows.map(r=>{
   if(!Array.isArray(r.assessments)||!r.assessments.length||!r.feedback)throw Error('Karar puan haritası veya açıklaması eksik');
   let contribution=0;
   for(const x of r.assessments){const slot=c.slots.find(s=>s.id===x.slot);if(!slot||!Number.isFinite(x.points)||x.points<0||x.points>20||earned.has(x.slot))throw Error('Geçersiz veya mükerrer puan kaydı');const value=x.points/20*slot.weight;earned.set(x.slot,value);contribution+=value;}
   return {nodeId:r.nodeId,clinical:r.clinical,question:r.question,choice:r.choice,feedback:r.feedback,outcome:r.outcome||'',contribution,time:r.time,learningGoal:r.learningGoal||''};
  });
  const areas=Object.entries(AREAS).map(([id,title])=>({id,title,maximum:25,score:c.slots.filter(s=>s.area===id).reduce((n,s)=>n+(earned.get(s.id)||0),0)}));
  return {id:c.id,title:c.title,score:areas.reduce((n,a)=>n+a.score,0),maximum:100,complete:earned.size===c.slots.length,areas,decisions,missingSlots:c.slots.filter(s=>!earned.has(s.id)).map(s=>s.id)};
 });
 const total=cases.reduce((n,c)=>n+c.score,0)/cases.length;
 const goals=cases.flatMap(c=>c.decisions).filter(d=>d.learningGoal).sort((a,b)=>a.contribution-b.contribution).map(d=>d.learningGoal);
 return {version:rubric.version,name:session.name,candidateId:session.candidate_id||session.code,sessionId:session.id,reason:session.reason,finishedAt:session.finished_at||session.finishedAt,total,displayTotal:total.toFixed(1),cases,areas:Object.entries(AREAS).map(([id,title])=>({id,title,score:cases.reduce((n,c)=>n+c.areas.find(a=>a.id===id).score,0)/cases.length,maximum:25})),learningGoals:[...new Set(goals)].slice(0,3),incomplete:cases.some(c=>!c.complete)};
}
// Explore the actual graph, including each choice's effect on later reachable nodes.
function auditCase(c,nodes){
 validateRubric({version:'audit',cases:[c]});let count=0,min=Infinity,max=-Infinity;const memo=new Map();
 function walk(id,used,stack){
  if(!id){if(used.size!==c.slots.length)throw Error('Terminal yolunda değerlendirme alanı eksik');return {min:0,max:0,count:1};}
  if(stack.has(id))throw Error('Döngü: '+id);const n=nodes[id];if(!n||n.caseId!==c.id)throw Error('Geçersiz vaka düğümü: '+id);
  const key=id+'|'+[...used].sort().join(',');if(memo.has(key))return memo.get(key);
  if(!n.options?.length)throw Error('Seçenek yok');let lo=Infinity,hi=-Infinity,paths=0;const nextStack=new Set(stack).add(id);
  for(const o of n.options){const nextUsed=new Set(used);let value=0;if(!o.feedback||!o.assessments?.length)throw Error('Seçenek açıklaması/puanı eksik');for(const x of o.assessments){const slot=c.slots.find(s=>s.id===x.slot);if(!slot||nextUsed.has(x.slot)||!Number.isFinite(x.points)||x.points<0||x.points>20)throw Error('Geçersiz yol puanı');nextUsed.add(x.slot);value+=x.points/20*slot.weight;}const tail=walk(o.next||null,nextUsed,nextStack);lo=Math.min(lo,value+tail.min);hi=Math.max(hi,value+tail.max);paths+=tail.count;}
  const result={min:lo,max:hi,count:paths};memo.set(key,result);return result;
 }
 const result=walk(c.first,new Set(),new Set());if(Math.abs(result.max-100)>1e-8)throw Error('Tam puanlı yol yok: '+result.max);return {caseId:c.id,minimum:result.min,maximum:result.max,pathCount:result.count};
}

// Deploy as clinical-exam. Candidate endpoints authenticate with hashed high-entropy codes/session tokens.
// Admin endpoints separately validate Supabase Auth and membership in exam_admins.
const env=(name:string)=>{const v=Deno.env.get(name);if(!v)throw Error('Missing server setting: '+name);return v};
const URL_BASE=env('SUPABASE_URL');
const SERVER_KEY=Deno.env.get('EXAM_SERVER_KEY')||env('SUPABASE_SERVICE_ROLE_KEY');
const SITE_ORIGIN='https://vbaristurhan.github.io';
const FIRST_NODE='breast-1';
const hash=async(v:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v)))).map(x=>x.toString(16).padStart(2,'0')).join('');
const random=()=>Array.from(crypto.getRandomValues(new Uint8Array(24))).map(x=>x.toString(16).padStart(2,'0')).join('');
async function db(path:string,method='GET',body?:unknown){const r=await fetch(URL_BASE+'/rest/v1/'+path,{method,headers:{apikey:SERVER_KEY,Authorization:'Bearer '+SERVER_KEY,'Content-Type':'application/json',Prefer:'return=representation'},body:body===undefined?undefined:JSON.stringify(body)});const d=await r.json().catch(()=>null);if(!r.ok)throw Error(d?.message||'Database operation failed');return d}
async function admin(req:Request){const bearer=req.headers.get('Authorization');if(!bearer?.startsWith('Bearer '))throw Error('Eğitici girişi gerekli');const r=await fetch(URL_BASE+'/auth/v1/user',{headers:{Authorization:bearer,apikey:SERVER_KEY}});const user=await r.json();if(!r.ok||!user.id)throw Error('Eğitici oturumu geçersiz');const rows=await db('exam_admins?user_id=eq.'+encodeURIComponent(user.id)+'&select=user_id');if(!rows.length)throw Error('Eğitici yetkisi bulunmuyor');return user}
function events(input:unknown){if(!Array.isArray(input))return [];return input.slice(0,500).filter(e=>e&&typeof e.id==='string'&&/^[\w-]{1,64}$/.test(e.id)&&typeof e.type==='string').map(e=>({id:e.id,type:e.type.slice(0,100),detail:String(e.detail||'').slice(0,300),time:String(e.time||'').slice(0,40)}))}
function report(s:any){try{return {report:buildReport(s,s.rubric)}}catch{return {report:null,reportError:'Bu oturumun değerlendirme haritası tamamlanmamış; güvenilir puan üretilemiyor.'}}}
async function candidateView(s:any){let node=null;if(s.node_id&&!s.finished_at){const rows=await db('exam_bank?id=eq.'+encodeURIComponent(s.node_id)+'&select=payload');const n=rows[0]?.payload;if(!n)throw Error('Vaka aşaması bulunamadı');node={id:n.id,caseId:n.caseId,caseNumber:n.caseNumber,stage:n.stage,rescue:n.rescue,title:n.title,opening:n.opening,clinical:n.clinical,options:n.options.map((o:any)=>({id:o.id,text:o.text}))};for(let i=node.options.length-1;i>0;i--){const j=crypto.getRandomValues(new Uint32Array(1))[0]%(i+1);[node.options[i],node.options[j]]=[node.options[j],node.options[i]]}}return{id:s.id,name:s.name,code:s.candidate_id,deadline:new Date(s.deadline).getTime(),node,finished:!!s.finished_at,reason:s.reason,previousOutcome:s.log?.at(-1)?.outcome||null,...(s.finished_at?report(s):{})}}
Deno.serve(async(req:Request)=>{const origin=req.headers.get('Origin');const headers={'Access-Control-Allow-Origin':SITE_ORIGIN,'Access-Control-Allow-Headers':'authorization,apikey,content-type','Access-Control-Allow-Methods':'POST, OPTIONS','Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin'};const reply=(d:unknown,status=200)=>new Response(JSON.stringify(d),{status,headers});if(origin&&origin!==SITE_ORIGIN)return reply({error:'Origin rejected'},403);if(req.method==='OPTIONS')return new Response(null,{status:204,headers});if(req.method!=='POST')return reply({error:'Method not allowed'},405);
try{const raw=await req.text();if(raw.length>200000)return reply({error:'Request too large'},413);const b=JSON.parse(raw),action=b.action;
if(String(action).startsWith('admin-')){await admin(req);
 if(action==='admin-create'){const name=String(b.name||'').trim(),candidateId=String(b.candidateId||'').trim();if(!name||!candidateId||name.length>80||candidateId.length>60)throw Error('Ad soyad ve aday ID gerekli');const code=random(),days=Number(b.days)||7;await db('exam_codes','POST',{code_hash:await hash(code),candidate_name:name,candidate_id:candidateId,expires_at:new Date(Date.now()+Math.max(1,Math.min(30,days))*86400000).toISOString()});return reply({code,name,candidateId})}
 if(action==='admin-list'){const rows=await db('exam_sessions?select=id,name,candidate_id,started_at,deadline,finished_at,reason,log,events,rubric&order=started_at.desc&limit=200');return reply({sessions:rows.map((s:any)=>{const result=s.finished_at?report(s).report:null;return{id:s.id,name:s.name,candidateId:s.candidate_id,startedAt:s.started_at,finishedAt:s.finished_at,expired:!s.finished_at&&Date.parse(s.deadline)<Date.now(),reason:s.reason,average:result?.total??null,critical:0,eventCount:s.events.length}})})}
 if(action==='admin-detail'){if(!/^[a-f0-9-]{36}$/i.test(String(b.id)))throw Error('Invalid session ID');const rows=await db('exam_sessions?id=eq.'+b.id+'&select=id,name,candidate_id,started_at,deadline,finished_at,reason,log,events,rubric');if(!rows.length)throw Error('Oturum bulunamadı');const s=rows[0];return reply({...s,...report(s),scores:[]})}
 throw Error('Unknown admin action')}
if(action==='start'){const code=String(b.code||'').trim();if(!/^[a-f0-9]{48}$/i.test(code))throw Error('Geçersiz aday kodu');const token=random();const settings=await db('exam_settings?id=eq.active&select=rubric');validateRubric(settings[0]?.rubric);const s=await db('rpc/exam_start','POST',{p_code:await hash(code),p_token:await hash(token),p_first:FIRST_NODE});return reply({...await candidateView(s),token})}
if(!['state','answer','events','finish'].includes(action))throw Error('Geçersiz işlem');const token=String(b.token||'');if(!/^[a-f0-9]{48}$/i.test(token))throw Error('Oturum anahtarı geçersiz');const s=await db('rpc/exam_action','POST',{p_token:await hash(token),p_action:action,p_node:b.nodeId||null,p_option:b.optionId||null,p_reason:b.reason||null,p_events:events(b.events)});return reply(await candidateView(s));
}catch(e){console.error('Clinical exam request failed:',e.message);return reply({error:e.message?.startsWith('Missing')?'Sunucu ayarları tamamlanmamış':e.message||'İşlem tamamlanamadı'},400)}});
