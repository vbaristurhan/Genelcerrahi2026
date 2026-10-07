// Source-faithful graphs may offer different numbers of decisions in each domain.
// Every domain contributes at most 25; every case contributes at most 100.
export function buildDomainReport(session,rubric,AREAS){
 if(!session.finished_at&&!session.finishedAt)throw Error('Sonuç yalnız sınav tamamlandıktan sonra açılır');
 const cases=rubric.cases.map(c=>{
  const rows=(session.log||[]).filter(r=>r.caseId===c.id),rated=new Map(),seen=new Set();
  const decisions=rows.map((r,index)=>{
   if(!r.feedback||!Array.isArray(r.assessments)||!r.assessments.length)throw Error('Eksik karar haritası');
   const key=JSON.stringify([r.clinical,r.question]);const repeated=seen.has(key);seen.add(key);
   const grading=[];
   for(const x of r.assessments){if(!AREAS[x.slot]||!Number.isFinite(x.points)||x.points<0||x.points>20||grading.some(a=>a.area===x.slot))throw Error('Geçersiz alan puanı');if(!repeated){const a=rated.get(x.slot)||[];a.push(x.points);rated.set(x.slot,a);grading.push({area:x.slot,points:x.points});}}
   return {nodeId:r.nodeId,clinical:r.clinical,question:r.question,choice:r.choice,feedback:r.feedback,outcome:r.outcome||'',time:r.time,learningGoal:r.learningGoal||'',grading,repeated,contribution:0};
  });
  const areas=Object.entries(AREAS).map(([id,title])=>{const values=rated.get(id)||[];return{id,title,maximum:25,score:values.length?values.reduce((s,p)=>s+p,0)/values.length/20*25:0,decisionCount:values.length};});
  for(const d of decisions){for(const g of d.grading){d.contribution+=g.points/20*25/rated.get(g.area).length;}if(d.repeated)d.feedback+=' Aynı bilgiyle tekrarlanan karar yeniden puan kazandırmadı.';}
  const missingSlots=Object.keys(AREAS).filter(a=>!rated.has(a));
  const interrupted=session.reason!=='completed'&&(session.node_id?String(session.node_id).startsWith(c.id==='breast'?'breast':c.id):false);
  return {id:c.id,title:c.title,score:areas.reduce((s,a)=>s+a.score,0),maximum:100,complete:missingSlots.length===0&&!interrupted,areas,decisions,missingSlots};
 });
 const total=cases.reduce((s,c)=>s+c.score,0)/cases.length;
 const goals=cases.flatMap(c=>c.decisions).filter(d=>d.learningGoal&&!d.repeated).sort((a,b)=>Math.min(...a.grading.map(g=>g.points))-Math.min(...b.grading.map(g=>g.points))).map(d=>d.learningGoal);
 return {version:rubric.version,scoringMode:'domain-mean-v1',name:session.name,candidateId:session.candidate_id||session.code,sessionId:session.id,reason:session.reason,finishedAt:session.finished_at||session.finishedAt,total,displayTotal:total.toFixed(1),cases,areas:Object.entries(AREAS).map(([id,title])=>({id,title,maximum:25,score:cases.reduce((s,c)=>s+c.areas.find(a=>a.id===id).score,0)/cases.length})),learningGoals:[...new Set(goals)].slice(0,3),incomplete:session.reason!=='completed'||cases.some(c=>!c.complete)};
}
export function auditDomainCase(c,nodes,AREAS){
 let minimum=Infinity,maximum=-Infinity,pathCount=0;const reachable=new Set();
 function walk(id,sums,counts,seen,stack){
  if(!id){if(Object.keys(AREAS).some(a=>!counts[a]))throw Error('Terminal alan eksik: '+c.id);const score=Object.keys(AREAS).reduce((s,a)=>s+sums[a]/counts[a]/20*25,0);minimum=Math.min(minimum,score);maximum=Math.max(maximum,score);pathCount++;return;}
  if(stack.has(id))throw Error('Döngü');const n=nodes[id];if(!n||n.caseId!==c.id)throw Error('Düğüm eksik');reachable.add(id);if(n.options.length!==4)throw Error('Dört seçenek gerekli');
  const key=JSON.stringify([n.clinical,n.title]);const repeated=seen.has(key),nextSeen=new Set(seen).add(key),nextStack=new Set(stack).add(id);
  for(const o of n.options){if(!o.feedback||!o.assessments?.length)throw Error('Açıklama/puan eksik');const nextS={...sums},nextC={...counts};for(const x of o.assessments){if(!AREAS[x.slot]||!Number.isFinite(x.points)||x.points<0||x.points>20)throw Error('Alan puanı geçersiz');if(!repeated){nextS[x.slot]=(nextS[x.slot]||0)+x.points;nextC[x.slot]=(nextC[x.slot]||0)+1;}}walk(o.next,nextS,nextC,nextSeen,nextStack);}
 }
 walk(c.first,{}, {},new Set(),new Set());if(Math.abs(maximum-100)>1e-8)throw Error('Tam puanlı yol yok: '+c.id+' '+maximum);return{caseId:c.id,minimum,maximum,pathCount,reachableNodes:reachable.size};
}
