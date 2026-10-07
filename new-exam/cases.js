const DEMO_BANK={
 "version":"approved-eight-cases-v1",
 "status":"content-mapping-in-progress",
 "legacyBankEnabled":false,
 "areas":{"assessment":25,"investigation":25,"treatment":25,"followup":25},
 "cases":[
  {"id":"breast","title":"Meme polikliniği vakası","setting":"outpatient"},
  {"id":"colorectal","title":"Rektal kanama ve rektum kanseri","setting":"outpatient"},
  {"id":"gallstones","title":"Safra taşı hastalığı","setting":"outpatient"},
  {"id":"inguinal-hernia","title":"Kasık fıtığı","setting":"outpatient"},
  {"id":"appendicitis","title":"Akut apandisit","setting":"emergency"},
  {"id":"gastric-perforation","title":"Mide perforasyonu","setting":"emergency"},
  {"id":"penetrating-trauma","title":"Delici-kesici alet yaralanması","setting":"emergency"},
  {"id":"road-traffic-trauma","title":"Trafik kazası","setting":"emergency"}
 ],
 "results":{"scale":100,"caseWeight":"equal","visibleToCandidate":"after-finish","personalReport":true,"outcomePenalty":false}
}
;
DEMO_BANK.first=null;DEMO_BANK.nodes={};
