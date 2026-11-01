const form=document.querySelector("#profile-form");
const results=document.querySelector("#results");
const cards=document.querySelector("#path-cards");
const plan=document.querySelector("#action-plan");
const startOver=document.querySelector("#start-over");
const skillInputs=[...document.querySelectorAll('input[name="skills"]')];

const paths=[
{id:"content",name:"Short-form content support",tag:"Creative service",desc:"Help a small business turn its existing ideas, products and FAQs into useful social posts.",offer:"A starter pack of 3 caption ideas and 2 simple post designs for one clearly defined business.",skills:["Writing","Design","Video editing"],interests:["Content and social media","Helping businesses"],difficulty:"Beginner to intermediate",cost:"Can start at $0",time:"7-day sample-and-outreach sprint",tasks:["Choose one type of business you understand (for example, cafés or local shops).","Create two sample posts for a fictional business. Do not use another business’s content without permission.","Put your samples in a simple shareable folder and write one sentence about the result you offer.","Find five relevant businesses and note one genuine improvement idea for each.","Send a short, personal message with one sample. Ask if they would like to discuss a small paid trial; agree on scope before doing the work."],tools:["Canva free plan","Google Docs","Your phone"]},
{id:"research",name:"Online research service",tag:"Research service",desc:"Collect and organise useful public information for creators, job seekers or small teams.",offer:"A focused, well-sourced research list — for example, 20 relevant podcast guests or competitor examples.",skills:["Research","Writing","Organization"],interests:["Research and information","Helping businesses","Anything practical"],difficulty:"Beginner-friendly",cost:"Can start at $0",time:"5-day sample portfolio sprint",tasks:["Choose one audience and a specific question they need answered.","Create a sample list of 10 entries with working source links and a clear structure.","Check the accuracy of every entry and explain why the information is useful.","Find five people or businesses who might need this kind of research.","Share the sample and ask what would make it more useful before offering a paid, clearly scoped project."],tools:["Google Search","Google Sheets","Google Docs"]},
{id:"assistant",name:"Virtual assistant",tag:"Support service",desc:"Help an independent professional or small business with simple, repeatable admin tasks.",offer:"A small starter package such as spreadsheet cleanup, public-information research or organising a task list.",skills:["Organization","Communication","Research"],interests:["Helping businesses","Anything practical"],difficulty:"Beginner-friendly",cost:"Can start at $0",time:"7-day customer discovery sprint",tasks:["Choose one task you can do reliably and describe its outcome in one sentence.","Create a sample using fictional information — never use private customer data.","Make a list of 10 small businesses or independent professionals who may need help.","Send five thoughtful messages that mention a specific, relevant task you can take off their plate.","Ask for feedback and offer a small paid pilot only if they express interest. Agree on scope and access permissions first."],tools:["Google Docs or Sheets","Email","A phone"]},
{id:"digital",name:"Simple digital resources",tag:"Digital product",desc:"Create a focused checklist, template or tracker that solves one small problem for a defined audience.",offer:"A practical one-page checklist or editable planner designed around one specific user problem.",skills:["Writing","Design","Organization"],interests:["Digital products","Content and social media"],difficulty:"Intermediate: distribution takes work",cost:"Prototype at $0",time:"Validate demand before building",tasks:["Identify one recurring problem for a specific group of people.","Talk to five people in that audience before creating the product.","Draft a one-page solution using a free document tool.","Show the draft and ask what is confusing or missing.","Only consider selling after you see real interest; check platform fees, payout access and local rules first."],tools:["Google Docs","Canva free plan","Relevant online communities"]},
{id:"tutoring",name:"Beginner tutoring or practice",tag:"Knowledge service",desc:"Help someone practise a subject or language you genuinely know well.",offer:"A 30-minute beginner practice session with one clear learning outcome.",skills:["Communication","Writing"],interests:["Teaching and explaining"],difficulty:"Depends on subject knowledge",cost:"Can start at $0",time:"Validate with a small pilot",tasks:["Choose a subject you can teach accurately and confidently.","Define one achievable outcome for a short beginner session.","Prepare a simple lesson and a practice exercise.","Ask three to five people in a relevant community what support they need.","Offer a short introductory session and request honest feedback."],tools:["A free video-call option","Google Docs","A simple worksheet"]}
];

function syncNoneChoice(event){
 const selected=event.target;
 if(selected.value==="None yet"&&selected.checked){skillInputs.forEach(input=>{if(input!==selected)input.checked=false;});}
 if(selected.value!=="None yet"&&selected.checked){const none=skillInputs.find(input=>input.value==="None yet");if(none)none.checked=false;}
}
skillInputs.forEach(input=>input.addEventListener("change",syncNoneChoice));

function getProfile(){
 const data=new FormData(form);
 return {country:String(data.get("country")||"").trim(),language:data.get("language"),skills:data.getAll("skills"),interest:data.get("interest"),hours:data.get("hours"),experience:data.get("experience"),device:data.get("device"),budget:data.get("budget"),goal:data.get("goal")};
}
function scorePath(path,profile){
 let score=0;
 const skillMatches=profile.skills.filter(skill=>skill!=="None yet"&&path.skills.includes(skill)).length;
 score+=Math.min(skillMatches,2)*3;
 if(path.interests.includes(profile.interest))score+=3;
 if(profile.experience==="Beginner"&&path.difficulty.toLowerCase().includes("beginner"))score+=2;
 if(profile.device==="Phone"&&["content","research","assistant"].includes(path.id))score+=2;
 if(Number(profile.hours)>=2)score+=1;
 if(profile.budget==="0"&&path.cost.toLowerCase().includes("$0"))score+=1;
 if(profile.skills.includes("None yet")&&["research","assistant"].includes(path.id))score+=1;
 return score;
}
function make(tag,className,text){
 const node=document.createElement(tag);
 if(className)node.className=className;
 if(text!==undefined)node.textContent=text;
 return node;
}
function renderPath(path,index){
 const article=make("article","path-card");
 const top=make("div","path-card-top");
 top.append(make("span","path-number","0"+(index+1)),make("span","tag",index===0?"BEST STARTING MATCH":path.tag));
 const heading=make("h3","",path.name);
 const desc=make("p","",path.desc);
 const offerTitle=make("h4","","A first offer to test");
 const offer=make("p","",path.offer);
 const meta=make("div","meta-row");
 [path.difficulty,path.cost,path.time].forEach(value=>meta.append(make("span","",value)));
 const button=make("button",index===0?"primary-button":"secondary-button","Build my action plan");
 button.type="button";
 button.addEventListener("click",()=>showPlan(path,button));
 article.append(top,heading,desc,offerTitle,offer,meta,button);
 return article;
}
function showPlan(path,sourceButton){
 plan.hidden=false;
 plan.replaceChildren();
 const eyebrow=make("div","eyebrow","YOUR FIRST-CUSTOMER PLAN");
 const heading=make("h2","",path.name);
 const intro=make("p","","Keep the first experiment small. The goal is to learn whether someone needs this — not to build a perfect business.");
 const offer=make("div","offer-box");
 offer.append(make("strong","","YOUR STARTER OFFER"),make("p","",path.offer));
 const list=make("div","checklist");
 path.tasks.forEach((task,index)=>{
  const label=make("label","task");
  const input=document.createElement("input");
  input.type="checkbox";
  input.dataset.task=path.id+"-"+index;
  const key="pathfinder-"+input.dataset.task;
  try{input.checked=localStorage.getItem(key)==="true";}catch(error){}
  input.addEventListener("change",()=>{try{localStorage.setItem(key,String(input.checked));}catch(error){}});
  label.append(input,make("span","",task));
  list.append(label);
 });
 const toolsTitle=make("h3","","Free tools to consider");
 const tools=make("p","",path.tools.join(" · "));
 const closeNote=make("p","plan-note","Before contacting anyone, respect their privacy, follow platform rules and agree clearly on the work and payment terms.");
 plan.append(eyebrow,heading,intro,offer,list,toolsTitle,tools,closeNote);
 plan.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
}
form.addEventListener("submit",event=>{
 event.preventDefault();
 if(!form.reportValidity())return;
 const profile=getProfile();
 const ranked=paths.map((path,originalIndex)=>({path,score:scorePath(path,profile),originalIndex})).sort((a,b)=>b.score-a.score||a.originalIndex-b.originalIndex).slice(0,3);
 cards.replaceChildren(...ranked.map((item,index)=>renderPath(item.path,index)));
 plan.hidden=true;
 results.hidden=false;
 results.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
});
startOver.addEventListener("click",()=>{
 results.hidden=true;
 plan.hidden=true;
 document.querySelector("#start").scrollIntoView({behavior:"smooth",block:"start"});
});


// Visual enhancements are intentionally isolated from the product logic.
(()=>{
 const loader=document.getElementById("site-loader");
 const finishLoading=()=>{if(loader)loader.classList.add("is-hidden");};
 window.addEventListener("load",()=>window.setTimeout(finishLoading,900),{once:true});
 window.setTimeout(finishLoading,2800);
 const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 if(reduceMotion)return;
 const revealTargets=document.querySelectorAll(".section-heading,.step-card,.start-intro,.form-card,.expectations");
 if(!("IntersectionObserver" in window)){revealTargets.forEach(node=>node.classList.add("is-visible"));return;}
 document.documentElement.classList.add("motion-ready");
 revealTargets.forEach(node=>node.classList.add("reveal-on-scroll"));
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
  });
 },{threshold:.12,rootMargin:"0px 0px -24px 0px"});
 revealTargets.forEach(node=>observer.observe(node));
})();


// Consistent reveal choreography and tactile button feedback (kept separate from matching logic).
(()=> {
 const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const revealGroups=[
  ...document.querySelectorAll(".hero-content,.hero-product,.section-heading,.step-card,.start-intro,.form-card,.expectations,.footer")
 ];
 const staggerGroups=[...document.querySelectorAll(".steps-grid,.reassurance-list,.form-grid,.skill-options")];
 staggerGroups.forEach(group=>[...group.children].forEach((child,index)=>{
  child.classList.add("reveal-child");
  child.style.setProperty("--reveal-delay",(Math.min(index,6)*75)+"ms");
 }));
 if(!reduce){
  document.documentElement.classList.add("motion-ready");
  revealGroups.forEach(node=>node.classList.add("reveal-on-scroll"));
  if("IntersectionObserver" in window){
   const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("is-visible");io.unobserve(entry.target);}
   }),{threshold:.08,rootMargin:"0px 0px -35px 0px"});
   revealGroups.forEach(node=>io.observe(node));
  }else revealGroups.forEach(node=>node.classList.add("is-visible"));
 }
 document.addEventListener("click",event=>{
  const button=event.target.closest("button,a.button,a.nav-button");
  if(!button||reduce)return;
  const rect=button.getBoundingClientRect();
  const dot=document.createElement("span");
  dot.className="ripple-dot";
  dot.style.left=(event.clientX?event.clientX-rect.left:rect.width/2)+"px";
  dot.style.top=(event.clientY?event.clientY-rect.top:rect.height/2)+"px";
  button.append(dot);
  window.setTimeout(()=>dot.remove(),650);
 });
 const formEl=document.querySelector("#profile-form");
 if(formEl){
  formEl.addEventListener("submit",()=>{
   window.setTimeout(()=>{
    const result=document.querySelector("#results");
    if(result&&!result.hidden){
     result.classList.remove("result-refresh");
     void result.offsetWidth;
     result.classList.add("result-refresh");
    }
   },40);
  });
 }
})();
