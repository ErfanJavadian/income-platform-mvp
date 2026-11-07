const studios=[
{id:"video",name:"Video & Film Studio",short:"Video & Film",symbol:"▣",accent:"#b4a6ff",tint:"#b4a6ff20",glow:"#9d8cff",desc:"Turn raw footage and bold ideas into polished visual stories.",agents:[
["Cinematic Video Editor","Shape raw footage into a compelling, story-led edit.","✂",["Timeline editing","Pacing & storytelling","Transitions"],["Rough cut","Cinematic edit","Social cutdown"]],
["3D Animation Agent","Develop motion concepts, scenes and 3D animation plans.","◈",["3D scene planning","Character motion","Animation briefs"],["Scene concept","Product animation","Animation storyboard"]],
["VFX Specialist","Plan visual effects, compositing and shot enhancements.","✧",["VFX breakdown","Compositing plan","Effects direction"],["VFX shot plan","Green-screen workflow","Effects brief"]],
["Color Grading Agent","Create a consistent visual mood with professional color direction.","◉",["Look development","Color references","Shot matching"],["Cinematic look","Color palette","Shot matching"]],
["Motion Graphics Agent","Design title sequences, animated graphics and visual explainers.","▤",["Title design","Kinetic typography","Graphic sequences"],["Title sequence","Animated explainer","Lower thirds"]],
["Sound Designer","Build an immersive soundscape with effects and audio direction.","♫",["Soundscape design","Foley planning","Audio layering"],["Sound map","Foley list","Audio polish plan"]],
["Voiceover Agent","Prepare voiceover scripts, direction and narration workflows.","◖",["Narration scripts","Voice direction","Timing notes"],["Voiceover script","Tone direction","Narration plan"]],
["Trailer Creator","Craft high-impact trailers, teasers and launch videos.","▶",["Trailer structure","Hook development","Music cues"],["Movie trailer","Product teaser","Launch trailer"]],
["Video Scriptwriter","Write visual-first scripts, shot lists and storyboards.","✎",["Scriptwriting","Shot lists","Storyboards"],["Ad script","YouTube script","Shot list"]],
["Short-form Video Agent","Adapt ideas into engaging vertical videos for social platforms.","▯",["Hooks & pacing","Vertical formats","Caption planning"],["Reel concept","TikTok structure","Shorts repurpose"]]]},
{id:"design",name:"Design Studio",short:"Design",symbol:"✳",accent:"#ffb77c",tint:"#ffb77c20",glow:"#ffad70",desc:"Create standout visuals, brand systems and digital experiences.",agents:[
["Brand Identity Designer","Build a coherent visual identity for a product or business.","✳",["Brand direction","Visual systems","Guidelines"],["Brand concept","Visual identity","Brand guide"]],
["Logo Designer","Explore distinctive logo concepts and visual directions.","◒",["Logo concepts","Symbol exploration","Typography"],["Logo brief","Concept directions","Logo critique"]],
["UI/UX Designer","Shape intuitive user journeys, wireframes and interface systems.","▦",["User flows","Wireframes","Design systems"],["App flow","Landing page UX","Dashboard layout"]],
["Social Media Designer","Create consistent visual concepts for social content.","▧",["Post systems","Carousel concepts","Templates"],["Carousel brief","Post series","Story templates"]],
["Poster Designer","Develop bold campaign posters and event artwork.","▣",["Composition","Typography","Art direction"],["Event poster","Film poster","Campaign key art"]],
["Thumbnail Designer","Design high-contrast thumbnail concepts built for clarity.","▣",["Visual hierarchy","Title treatment","Concept testing"],["YouTube thumbnail","Podcast cover","Video cover"]],
["Image Retouching Agent","Plan precise image cleanup, retouching and enhancement.","◉",["Retouching notes","Image cleanup","Visual consistency"],["Portrait retouch","Product cleanup","Photo enhancement"]],
["3D Product Designer","Develop 3D product visualization concepts and render briefs.","⬡",["Product form","Materials & lighting","Render direction"],["Product render brief","Packaging mockup","3D concept"]]]},
{id:"business",name:"Business Studio",short:"Business",symbol:"↗",accent:"#79d9b6",tint:"#79d9b620",glow:"#67d4ad",desc:"Research opportunities, validate ideas and build smarter businesses.",agents:[
["Business Strategist","Turn a business challenge into a clear strategic direction.","⌘",["Business analysis","Positioning","Roadmaps"],["Business plan","Growth strategy","Offer positioning"]],
["Market Research Agent","Map customer needs, market signals and emerging opportunities.","⌕",["Market sizing","Customer segments","Research synthesis"],["Market overview","Customer profile","Opportunity scan"]],
["Startup Builder","Move an early idea toward a testable startup concept.","↗",["Idea validation","MVP planning","Launch roadmap"],["Validate an idea","MVP scope","Launch checklist"]],
["Business Model Designer","Explore practical business models and revenue streams.","▤",["Revenue models","Pricing logic","Unit economics"],["Business model","Pricing options","Revenue map"]],
["Competitor Analyst","Compare alternatives and identify meaningful differentiation.","◎",["Competitor mapping","Positioning gaps","Feature comparison"],["Competitor snapshot","SWOT analysis","Differentiation"]],
["Product Manager","Translate product goals into requirements and prioritized plans.","◫",["Product requirements","Prioritization","Roadmaps"],["PRD draft","Feature roadmap","User stories"]],
["Customer Research Agent","Understand customer pain points, motivations and feedback.","♧",["Interview guides","Survey design","Insight synthesis"],["Interview plan","Survey questions","Persona draft"]],
["Growth Strategist","Find and prioritize experiments that can drive sustainable growth.","⌁",["Growth loops","Experiment design","Metrics"],["Growth audit","Experiment backlog","Activation plan"]]]},
{id:"development",name:"Development Studio",short:"Development",symbol:"⌘",accent:"#7ebaff",tint:"#7ebaff20",glow:"#70b2ff",desc:"Plan, build, review and improve digital products and software.",agents:[
["Website Developer","Plan and build responsive websites and landing pages.","〈/〉",["Frontend planning","Responsive UI","Web structure"],["Landing page","Business website","Portfolio site"]],
["Frontend Developer","Build polished interfaces and reusable frontend components.","▣",["Component design","Accessibility","UI implementation"],["UI component","Responsive section","Frontend review"]],
["Backend Developer","Design application logic, services and secure integrations.","⌘",["API design","Data flow","Server logic"],["API blueprint","Service architecture","Backend review"]],
["Mobile App Developer","Shape mobile app architecture, flows and feature plans.","▯",["App architecture","Mobile UX","Feature planning"],["App concept","Screen flow","MVP feature list"]],
["Database Architect","Model reliable data structures and query strategies.","▤",["Schema design","Data modeling","Query planning"],["Database schema","ERD brief","Data audit"]],
["API Integration Agent","Plan integrations between services and external APIs.","⇄",["API mapping","Auth flows","Integration plans"],["Integration blueprint","Webhook plan","API documentation"]],
["Bug Fixer","Investigate errors and create clear, testable debugging steps.","⚒",["Bug triage","Root-cause analysis","Test cases"],["Debug a problem","Error analysis","Test plan"]],
["Code Reviewer","Review code for maintainability, quality and common risks.","⌕",["Code quality","Security review","Refactoring"],["Code review","Refactor plan","Quality checklist"]]]},
{id:"marketing",name:"Marketing & Sales Studio",short:"Marketing & Sales",symbol:"◉",accent:"#f29ac8",tint:"#f29ac820",glow:"#ec8fc1",desc:"Reach the right audience with sharper messaging and focused campaigns.",agents:[
["Marketing Strategist","Build a focused marketing plan around your audience and goals.","◉",["Positioning","Channel strategy","Campaign planning"],["Marketing plan","Channel mix","Campaign brief"]],
["SEO Specialist","Plan search visibility through keywords, content and technical priorities.","⌕",["Keyword research","On-page SEO","Content gaps"],["SEO audit brief","Keyword map","Content cluster"]],
["Conversion Copywriter","Write clear persuasive copy for pages, campaigns and offers.","✎",["Landing page copy","Value propositions","CTAs"],["Landing page","Product description","Ad copy"]],
["Social Media Manager","Plan channel strategy, publishing rhythms and community content.","▧",["Content calendars","Platform strategy","Community"],["Monthly calendar","Channel plan","Post ideas"]],
["Email Marketing Agent","Design lifecycle email sequences and campaign messaging.","✉",["Email sequences","Segmentation","Subject lines"],["Welcome flow","Launch emails","Newsletter"]],
["Lead Generation Agent","Define ideal customers and ethical prospecting workflows.","◎",["ICP definition","Lead qualification","Outreach"],["Ideal customer profile","Lead criteria","Outreach plan"]],
["Ad Campaign Manager","Structure paid campaign concepts, audiences and creative tests.","↗",["Campaign structure","Audience hypotheses","Creative testing"],["Campaign brief","Ad variations","Testing plan"]],
["Sales Funnel Builder","Map customer journeys from first touch to conversion.","⌁",["Funnel mapping","Offer design","Conversion steps"],["Funnel blueprint","Lead magnet","Follow-up flow"]]]},
{id:"audio",name:"Audio & Music Studio",short:"Audio & Music",symbol:"♫",accent:"#e9d27b",tint:"#e9d27b20",glow:"#dfc568",desc:"Shape voice, music and sound into a polished listening experience.",agents:[
["Music Producer","Develop musical direction, arrangement and production briefs.","♫",["Arrangement","Genre direction","Production notes"],["Track concept","Music brief","Arrangement plan"]],
["Audio Editor","Plan clean edits, timing and professional audio workflows.","◖",["Dialogue editing","Timing","Audio cleanup"],["Podcast edit","Dialogue cleanup","Audio workflow"]],
["Voice Generator","Prepare voice scripts and text-to-speech direction.","◗",["Voice direction","Pronunciation","Script timing"],["Narration","Character voice brief","Voice script"]],
["Podcast Producer","Structure episodes and production workflows for podcasts.","🎙",["Episode structure","Show notes","Production"],["Episode outline","Podcast launch","Show notes"]],
["Sound Effects Creator","Design sound effect concepts and asset lists for media.","✧",["SFX concepts","Foley","Layering"],["SFX list","Scene sound map","Foley brief"]],
["Audio Restoration Agent","Diagnose noise and create audio restoration workflows.","◉",["Noise diagnosis","Restoration","Quality checks"],["Noise cleanup plan","Audio diagnosis","Restoration brief"]],
["Music Composer","Create musical concepts, themes and composition directions.","♬",["Themes","Mood & tempo","Composition"],["Theme concept","Background score","Music direction"]],
["Dubbing Agent","Prepare dubbing scripts, timing and localization workflows.","◫",["Dialogue adaptation","Timing","Localization"],["Dub script","Scene timing","Localization brief"]]]}];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
let activeStudio = "all", currentAgent = null;
let projects = JSON.parse(localStorage.getItem("agentStudioProjects") || "[]");
const studioMeta = id => studios.find(s => s.id === id);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const totalAgents = studios.reduce((n,s)=>n+s.agents.length,0);

function updateCounts(){
  $("#project-count").textContent = projects.length;
  $("#prepared-count").textContent = projects.length;
  const mobileCount=$("#project-count-mobile");if(mobileCount)mobileCount.textContent=projects.length;
  const heroCount=$("#hero-project-count");if(heroCount)heroCount.textContent=projects.length;
  localStorage.setItem("agentStudioProjects", JSON.stringify(projects));
}
function renderStudioRail(){
  $("#studio-nav").innerHTML = studios.map(s => `
    <button class="rail-link studio-link ${activeStudio===s.id?"is-active":""}" data-studio="${s.id}">
      <span class="rail-dot" style="--dot:${s.accent}"></span><span>${s.short}</span><small>${s.agents.length}</small>
    </button>`).join("");
  $$("[data-studio]").forEach(b=>b.addEventListener("click",()=>selectStudio(b.dataset.studio)));
}
function renderStudios(){
  $("#studio-grid").innerHTML = studios.map((s,i)=>`
    <button class="studio-card studio-${s.id}" data-studio-card="${s.id}" style="--accent:${s.accent};--wash:${s.tint}">
      <div class="studio-card-top"><span class="studio-icon">${s.symbol}</span><span class="studio-index">0${i+1}</span></div>
      <h3>${s.short}</h3><p>${s.desc}</p>
      <div class="studio-card-bottom"><span>${s.agents.length} specialists</span><span class="card-arrow">↗</span></div>
    </button>`).join("");
  $$("[data-studio-card]").forEach(b=>b.addEventListener("click",()=>selectStudio(b.dataset.studioCard,true)));
}
function renderAgents(){
  let list=studios.flatMap(s=>s.agents.map((a,i)=>({a,s,i})));
  if(activeStudio!=="all") list=list.filter(x=>x.s.id===activeStudio);
  const q=$("#search").value.trim().toLowerCase();
  if(q) list=list.filter(x=>(x.a[0]+" "+x.a[1]+" "+x.s.name+" "+x.a[3].join(" ")).toLowerCase().includes(q));
  $("#agent-count-label").textContent=list.length+" specialists";
  $("#agents-title").textContent=activeStudio==="all"?"Popular specialists":studioMeta(activeStudio).short+" specialists";
  $("#agents-subtitle").textContent=q?'Results matching "'+escapeHTML(q)+'"':"A focused set of skills, ready to shape your next project.";
  $("#agent-grid").innerHTML=list.slice(0,12).map(({a,s,i})=>`
    <article class="agent-card" style="--accent:${s.accent};--wash:${s.tint}">
      <div class="agent-card-head"><span class="agent-symbol">${a[2]}</span><span class="agent-category">${s.short}</span></div>
      <h3>${a[0]}</h3><p>${a[1]}</p>
      <div class="agent-tags">${a[3].slice(0,2).map(t=>'<span>'+escapeHTML(t)+'</span>').join("")}</div>
      <button class="agent-open" data-agent="${s.id}:${i}">Open workspace <span>↗</span></button>
    </article>`).join("") || '<div class="empty-state"><span>⌕</span><h3>No specialists found</h3><p>Try another keyword or clear your search.</p><button class="text-button" id="clear-search">Clear search</button></div>';
  $$("[data-agent]").forEach(b=>b.addEventListener("click",()=>{const [id,i]=b.dataset.agent.split(":");openAgent(studioMeta(id),Number(i));}));
  const clear=$("#clear-search");if(clear)clear.onclick=()=>{$("#search").value="";renderAgents();};
}
function selectStudio(id,scroll=false){
  activeStudio=id;renderStudioRail();renderAgents();
  $("#crumb").textContent=id==="all"?"Overview":studioMeta(id).short+" Studio";
  if(scroll)$("#agents-section").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderProjects(){
  const host=$("#project-list");
  if(!projects.length){host.innerHTML='<div class="empty-projects"><div class="empty-illustration">↗</div><h3>Your project space is clear.</h3><p>Open a specialist, write a brief and save it here. Your briefs stay in this browser preview.</p><button class="button button-dark" id="discover-from-empty">Explore specialists <span>↗</span></button></div>';const b=$("#discover-from-empty");if(b)b.onclick=()=>showView("overview");return;}
  host.innerHTML=projects.map(p=>`
    <article class="project-row"><div class="project-file">▤</div><div class="project-info"><strong>${escapeHTML(p.title||p.agent)}</strong><span>${escapeHTML(p.studio)} · ${escapeHTML(p.date)}</span><p>${escapeHTML(p.brief)}</p></div><span class="project-state">Brief saved</span></article>`).join("");
}
function showView(view){
  $$(".rail-link[data-view]").forEach(b=>b.classList.toggle("is-active",b.dataset.view===view));
  $("#overview-view").hidden=view!=="overview";$("#projects-view").hidden=view!=="projects";
  $("#crumb").textContent=view==="projects"?"Projects & tasks":"Overview";
  if(view==="projects"){renderProjects();$("#page-title").textContent="Your projects";$("#page-description").textContent="A home for the ideas and briefs you have prepared.";}
  else{$("#page-title").textContent="Your workspace";$("#page-description").textContent="A considered space to turn ambitious ideas into meaningful work.";}
  window.scrollTo({top:0,behavior:"smooth"});
}
function openAgent(s,i){
  const a=s.agents[i];currentAgent={s,a};
  $("#modal-studio").textContent=s.short.toUpperCase()+" STUDIO";
  $("#modal-title").textContent=a[0];$("#modal-desc").textContent=a[1];
  $("#emblem").textContent=a[2];$("#emblem").style.setProperty("--accent",s.accent);$("#emblem").style.setProperty("--wash",s.tint);
  $("#task-chips").innerHTML=a[4].map(t=>'<button class="task-chip">'+escapeHTML(t)+'</button>').join("");
  $$(".task-chip").forEach(b=>b.onclick=()=>{b.classList.toggle("selected");if(!$("#brief").value.trim())$("#brief").value="I need help with: "+b.textContent+".\n\nGoal:\nAudience:\nReferences or constraints:\nExpected deliverable:";});
  $("#capabilities").innerHTML=a[3].map(c=>'<li>'+escapeHTML(c)+'</li>').join("");
  $("#brief").value="";$("#files").value="";$("#file-name").textContent="Choose files";$("#confirmation").hidden=true;
  $("#modal").classList.add("open");$("#modal").setAttribute("aria-hidden","false");document.body.classList.add("modal-open");$("#brief").focus();
}
function closeModal(){$("#modal").classList.remove("open");$("#modal").setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");}
function notify(message){const t=$("#toast");t.textContent=message;t.classList.add("show");clearTimeout(notify.timer);notify.timer=setTimeout(()=>t.classList.remove("show"),2600);}
function saveBrief(){
  const brief=$("#brief").value.trim();if(!brief){notify("Add a project brief before saving.");$("#brief").focus();return;}
  const files=[...$("#files").files].map(f=>f.name);
  projects.unshift({id:Date.now(),agent:currentAgent.a[0],title:currentAgent.a[0]+" — "+(brief.split("\n")[0].slice(0,52)),studio:currentAgent.s.short,brief,date:new Date().toLocaleDateString(),files});
  updateCounts();renderProjects();$("#confirmation").hidden=false;notify("Your brief has been saved in this browser.");
}
function init(){
  $("#studio-count").textContent=String(studios.length).padStart(2,"0");
  $("#agent-count").textContent=String(totalAgents).padStart(2,"0");
  $("#catalog-total").textContent=totalAgents+" specialists";
  renderStudioRail();renderStudios();renderAgents();updateCounts();renderProjects();
  $$("[data-view]").forEach(b=>b.onclick=()=>showView(b.dataset.view));
  $("#search").oninput=()=>{activeStudio="all";renderStudioRail();renderAgents();};
  $("#top-search").oninput=e=>{$("#search").value=e.target.value;activeStudio="all";renderStudioRail();renderAgents();};
  $("#browse").onclick=()=>$("#studios").scrollIntoView({behavior:"smooth"});
  $("#view-all").onclick=()=>{selectStudio("all");$("#search").value="";renderAgents();};
  $("#close").onclick=closeModal;$("#modal").onclick=e=>{if(e.target===$("#modal"))closeModal();};
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#top-search").focus();}});
  $("#prepare").onclick=saveBrief;
  $("#files").onchange=e=>$("#file-name").textContent=e.target.files.length?[...e.target.files].map(f=>f.name).join(", "):"Choose files";
  $("#mobile-menu").onclick=()=>$("#sidebar").classList.toggle("is-open");
  $("#sidebar-close").onclick=()=>$("#sidebar").classList.remove("is-open");
  $("#workspace-switcher").onclick=()=>notify("Personal workspace");
  $("#activity-button").onclick=()=>notify("You're all caught up.");
  $("#runtime-button").onclick=()=>notify("Local Runtime is not connected in this preview.");
  $("#create-project").onclick=()=>{openAgent(studioMeta("business"),2);};
  $("#hero-new-project").onclick=()=>{openAgent(studioMeta("business"),2);};
  $("#project-nav-shortcut").onclick=()=>showView("projects");
  $("#view-all").onclick=()=>{activeStudio="all";$("#search").value="";renderStudioRail();renderAgents();};
  $("#back-to-overview").onclick=()=>openAgent(studioMeta("business"),2);
  $("#back-to-overview").onclick=()=>showView("overview");
  document.addEventListener("click",e=>{if(innerWidth<900&&!e.target.closest("#sidebar")&&!e.target.closest("#mobile-menu"))$("#sidebar").classList.remove("is-open");});
}
init();
