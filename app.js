const form = document.querySelector("#profile-form");
const results = document.querySelector("#results");
const cards = document.querySelector("#path-cards");
const plan = document.querySelector("#action-plan");
const startOver = document.querySelector("#start-over");

const paths = [
  {id:"assistant",name:"Virtual assistant",tag:"Service business",desc:"Help a solo founder or small business with simple, repeatable admin tasks.",offer:"A 2-hour starter support package: inbox sorting, spreadsheet cleanup, or appointment research.",skills:["Organization","Communication","Research"],interests:["Helping businesses","Anything practical"],difficulty:"Beginner-friendly",cost:"Can start at $0",time:"Try a 7-day customer search",tasks:["Choose one small task you can reliably do.","Create a one-page sample using fictional data.","Find 10 small businesses or independent professionals.","Send 5 thoughtful, personal messages offering a specific result.","Ask for feedback; offer a small paid pilot only if they are interested."],tools:["Google Docs or Sheets","Canva free plan","Email or business social profiles"]},
  {id:"content",name:"Short-form content support",tag:"Creative service",desc:"Help a local business turn its existing ideas, FAQs, or products into useful social posts.",offer:"A starter pack of 3 caption ideas and 2 simple post designs for one business.",skills:["Writing","Design","Video editing"],interests:["Content and social media","Helping businesses"],difficulty:"Beginner to intermediate",cost:"Can start at $0",time:"Try a 7-day sample-and-outreach sprint",tasks:["Pick one business category you understand.","Create 2 sample posts for a fictional business.","Put the samples in a simple shareable folder.","Contact 5 relevant businesses with one useful observation.","Ask whether they would like a small trial pack; agree on scope before doing paid work."],tools:["Canva free plan","Google Docs","A phone camera"]},
  {id:"research",name:"Online research service",tag:"Research service",desc:"Collect and organize useful public information for creators, job seekers, or small teams.",offer:"A clearly scoped research list, such as 20 relevant podcast guests or competitor examples.",skills:["Research","Writing","Organization"],interests:["Research and information","Helping businesses","Anything practical"],difficulty:"Beginner-friendly",cost:"Can start at $0",time:"Try a 5-day portfolio sprint",tasks:["Choose one research topic and audience.","Build a sample list with 10 entries and source links.","Explain what makes the list useful and how you checked it.","Find 5 people or businesses who might need that information.","Share the sample and ask what would make it more useful."],tools:["Google Search","Google Sheets","Google Docs"]},
  {id:"digital",name:"Simple digital resources",tag:"Digital product",desc:"Create a focused checklist, template, or tracker that solves one small problem.",offer:"A practical checklist or editable planner for a clearly defined audience.",skills:["Writing","Design","Organization"],interests:["Digital products","Content and social media"],difficulty:"Intermediate: distribution is the hard part",cost:"Can prototype at $0",time:"Validate demand before building",tasks:["Choose one specific problem you have seen more than once.","Talk to 5 people in the target audience before creating anything.","Draft a one-page solution in a free document tool.","Show the draft and ask what is missing.","Only consider selling after people show real interest; check platform fees and local rules."],tools:["Google Docs","Canva free plan","A relevant online community"]},
  {id:"tutoring",name:"Beginner tutoring or practice",tag:"Knowledge service",desc:"Help someone practise a subject or language you genuinely know well.",offer:"A 30-minute beginner practice session with a clear learning outcome.",skills:["Communication","Writing"],interests:["Teaching and explaining"],difficulty:"Depends on your subject knowledge",cost:"Can start at $0",time:"Validate with a small pilot",tasks:["Choose a subject you can teach accurately.","Define one beginner-level outcome for a short session.","Prepare a simple lesson and practice exercise.","Ask 3–5 people in relevant communities what support they need.","Offer a short introductory session and request honest feedback."],tools:["Google Meet or another free call option","Google Docs","A simple practice worksheet"]}
];

function scorePath(path, profile) {
  let score = 0;
  if (profile.skills.some(skill => path.skills.includes(skill))) score += 3;
  if (path.interests.includes(profile.interest)) score += 3;
  if (profile.experience === "Beginner" && path.difficulty.includes("Beginner")) score += 2;
  if (profile.device === "Phone" && ["content","research","assistant"].includes(path.id)) score += 1;
  if (Number(profile.hours) >= 2) score += 1;
  if (profile.skills.includes("None yet") && path.id === "research") score += 1;
  return score;
}

function getProfile() {
  const data = new FormData(form);
  return {
    country: data.get("country").trim(),
    language: data.get("language"),
    skills: data.getAll("skills"),
    interest: data.get("interest"),
    hours: data.get("hours"),
    experience: data.get("experience"),
    device: data.get("device"),
    budget: data.get("budget"),
    goal: data.get("goal")
  };
}

function renderPath(path, index) {
  const article = document.createElement("article");
  article.className = "path-card";
  const title = document.createElement("div");
  title.className = "path-card-top";
  title.innerHTML = '<span class="path-number">0' + (index + 1) + '</span><span class="tag"></span>';
  title.querySelector(".tag").textContent = path.tag;
  const heading = document.createElement("h3");
  heading.textContent = path.name;
  const desc = document.createElement("p");
  desc.className = "muted";
  desc.textContent = path.desc;
  const meta = document.createElement("div");
  meta.className = "meta-row";
  [path.difficulty, path.cost, path.time].forEach(text => {
    const item = document.createElement("span"); item.textContent = text; meta.append(item);
  });
  const offerTitle = document.createElement("h4"); offerTitle.textContent = "A first offer to test";
  const offer = document.createElement("p"); offer.textContent = path.offer;
  const button = document.createElement("button");
  button.className = index === 0 ? "primary-button small-button" : "secondary-button";
  button.type = "button"; button.textContent = "Build my action plan";
  button.addEventListener("click", () => showPlan(path));
  article.append(title, heading, desc, meta, offerTitle, offer, button);
  return article;
}

function showPlan(path) {
  plan.hidden = false;
  plan.innerHTML = "";
  const eyebrow = document.createElement("p"); eyebrow.className = "eyebrow"; eyebrow.textContent = "YOUR FIRST-CUSTOMER PLAN";
  const heading = document.createElement("h2"); heading.textContent = path.name;
  const intro = document.createElement("p"); intro.className = "muted"; intro.textContent = "Keep the first test small. The goal is to learn whether someone needs this—not to build a perfect business.";
  const offer = document.createElement("div"); offer.className = "offer-box";
  const strong = document.createElement("strong"); strong.textContent = "Your starter offer";
  const offerText = document.createElement("p"); offerText.textContent = path.offer; offer.append(strong, offerText);
  const list = document.createElement("div"); list.className = "checklist";
  path.tasks.forEach((task, i) => {
    const label = document.createElement("label"); label.className = "task";
    const input = document.createElement("input"); input.type = "checkbox"; input.dataset.task = path.id + "-" + i;
    input.checked = localStorage.getItem("pathfinder-" + input.dataset.task) === "true";
    input.addEventListener("change", () => localStorage.setItem("pathfinder-" + input.dataset.task, String(input.checked)));
    const span = document.createElement("span"); span.textContent = task;
    label.append(input, span); list.append(label);
  });
  const toolsTitle = document.createElement("h3"); toolsTitle.textContent = "Free tools to consider";
  const tools = document.createElement("p"); tools.className = "muted"; tools.textContent = path.tools.join(" · ");
  plan.append(eyebrow, heading, intro, offer, list, toolsTitle, tools);
  plan.scrollIntoView({behavior:"smooth",block:"start"});
}

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const profile = getProfile();
  const ranked = [...paths].map(path => ({path,score:scorePath(path,profile)})).sort((a,b)=>b.score-a.score).slice(0,3);
  cards.innerHTML = "";
  ranked.forEach((item,index)=>cards.append(renderPath(item.path,index)));
  plan.hidden = true;
  results.hidden = false;
  results.scrollIntoView({behavior:"smooth",block:"start"});
});

startOver.addEventListener("click", () => {
  results.hidden = true;
  plan.hidden = true;
  form.scrollIntoView({behavior:"smooth",block:"start"});
});
