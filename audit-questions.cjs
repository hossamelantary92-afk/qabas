'use strict';
// Qabas offline data audit. Run: node audit-questions.cjs
// Warnings are not scholarly verification: source references require checking.
const fs=require('node:fs'),vm=require('node:vm');
const s=fs.readFileSync('app.js','utf8');
function extract(from,to,key){const a=s.indexOf(from),b=s.indexOf(to,a+from.length);if(a<0||b<0)throw Error('Missing '+key);return vm.runInNewContext(s.slice(a,b)+'\n'+key+';',{},{timeout:1000})}
const questions=extract('const RAW=[','const QUESTIONS=','RAW');
const old=extract('const DISTRACT=','const hints=','DISTRACT');
const extra=extract('const EXTRA_DISTRACT=','const DISTRACT=','EXTRA_DISTRACT');
const held=new Set(['c09','r04']);
const normalize=x=>String(x).normalize('NFKC').replace(/[\u064b-\u065f\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^\u0621-\u064a\d\s]/g,' ').replace(/\s+/g,' ').trim();
const stops=new Set('من ما في هو هي الى عن عند على كان الذي التي الذين سؤال اكمل الايه الحديث صح خطا ورد ذكر النبي الصحابي القائل الله الرحمن سوره كتاب اي اين ماذا كم اسمه اسم قال قالت بعد قبل قوله تعالى'.split(' '));
const tokens=t=>new Set(normalize(t).split(' ').map(w=>w.replace(/^ال/,'')).filter(w=>w.length>2&&!stops.has(w)));
const errs=[],ids=new Set(),texts=new Map(),topics={},generic=[],ambiguous=[];
for(const r of questions){
  if(!Array.isArray(r)||r.length!==7){errs.push('Malformed question '+JSON.stringify(r));continue}
  const [id,topic,level,question,answer,source,explanation]=r;
  topics[topic]=(topics[topic]||0)+1;
  if(ids.has(id))errs.push('Repeated id: '+id);ids.add(id);
  const txt=normalize(question);
  if(texts.has(txt))errs.push('Repeated normalized wording: '+texts.get(txt)+', '+id);
  texts.set(txt,id);
  if([id,topic,question,answer,source,explanation].some(v=>typeof v!=='string'||!v.trim()))errs.push('Empty field: '+id);
  if(![1,2,3].includes(level))errs.push('Invalid level: '+id);
  const d=old[id]||extra[id];
  if(!d||d.length!==3||new Set([answer,...d].map(normalize)).size!==4)errs.push('Invalid choices: '+id);
  if(source.length<12||/كتب التراجم|كتب الفقه|التراث|الجغرافيا|المعالم|كتب السيرة|كتب المناسك|المراجع التاريخية|الموقع الجغرافي/.test(source))generic.push(id);
  if(/يحتاج مراجعة|موضع خلاف|اختلف العلماء|بحسب بعض الروايات|رواية ضعيفة|درجة الحديث|مختلف في صحته|خلاف فقهي/.test(source+' '+explanation))ambiguous.push(id);
}
const similar=[];
for(let i=0;i<questions.length;i++)for(let j=i+1;j<questions.length;j++){
  const a=questions[i],b=questions[j];if(held.has(a[0])||held.has(b[0]))continue;
  const at=tokens(a[3]),bt=tokens(b[3]),overlap=[...at].filter(w=>bt.has(w)).length;
  const sim=overlap/(at.size+bt.size-overlap||1);
  const answerSame=normalize(a[4])===normalize(b[4]);
  if((answerSame&&overlap>=2&&sim>=.5)||(overlap>=4&&sim>=.82))similar.push({ids:[a[0],b[0]],similarity:+sim.toFixed(2),same_answer:answerSame});
}
similar.sort((x,y)=>y.similarity-x.similarity);
const report={records:questions.length,active:questions.filter(x=>!held.has(x[0])).length,held:[...held],topics,errors:errs,possible_semantic_overlaps:similar,generic_sources_to_review:generic,disputed_sources_to_review:ambiguous,note:'Automatic screening; not independent verification of all Quran, hadith, history and fiqh sources.'};
console.log(JSON.stringify(report,null,2));
if(errs.length)process.exitCode=1;