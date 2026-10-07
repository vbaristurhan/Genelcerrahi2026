export const AREAS = Object.freeze({assessment:'İlk değerlendirme ve tanısal yaklaşım',investigation:'Tetkik seçimi ve yorumlama',treatment:'Tedavi ve zamanlama',followup:'İzlem ve güvenli sonlandırma'});
export function validateRubric(rubric) {
 if(!rubric?.version || !Array.isArray(rubric.cases) || !rubric.cases.length) throw Error('Puanlama haritası tamamlanmamış');
 const ids=new Set();
 for(const c of rubric.cases){if(ids.has(c.id))throw Error('Tekrarlanan vaka');ids.add(c.id);for(const a of Object.keys(AREAS)){const slots=c.slots.filter(s=>s.area===a);if(!slots.length || Math.abs(slots.reduce((n,s)=>n+s.weight,0)-25)>1e-8)throw Error('Alan ağırlığı 25 olmalı: '+c.id+'/'+a);}const slotIds=c.slots.map(s=>s.id);if(new Set(slotIds).size!==slotIds.length || c.slots.some(s=>!AREAS[s.area]||!(s.weight>0)))throw Error('Geçersiz değerlendirme alanı');}
 return rubric;
}
export function buildReport(session,rubric){
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
export function auditCase(c,nodes){
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
