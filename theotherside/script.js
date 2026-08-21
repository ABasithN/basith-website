
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let scenarios = null;
let side = null;
let scenario = null;
let step = 0;
let pending = null;
let history = { mail: [], wa: [], teams: [] };

const names = { mail: "MAIL", wa: "WHATISUP", teams: "MYCORESOFT TEAMS" };

const clean = s => String(s ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[c]));

function show(id){
  ["landing","reveal","situations","experience","end"].forEach(x => {
    const el = $("#"+x);
    if(el) el.classList.toggle("hidden", x !== id);
  });
}

function clearRun(){
  scenario = null;
  step = 0;
  pending = null;
  history = { mail: [], wa: [], teams: [] };
  $("#attention")?.classList.add("hidden");
  $("#decision")?.classList.add("hidden");
}

function switchApp(app){
  $$(".app").forEach(x => x.classList.toggle("active", x.id === app));
  $$("[data-app]").forEach(x => x.classList.toggle("active", x.dataset.app === app));
}

function renderHistory(){
  $("#mailThread").innerHTML = history.mail.map(m =>
    `<div class="mailmsg ${m.you ? "you":""}">
      <div class="meta">${m.you ? "YOU" : (side === "client" ? "AGENCY" : "CLIENT")}</div>
      <div>${clean(m.text)}</div>
    </div>`).join("");

  $("#waBody").innerHTML = history.wa.map(m =>
    `<div class="bubble ${m.you ? "you":""}">${clean(m.text)}</div>`).join("");

  $("#teamBody").innerHTML = history.teams.map(m =>
    `<div class="teampost ${m.you ? "you":""}">
      <b>${clean(m.name)}</b><div>${clean(m.text)}</div>
    </div>`).join("");

  ["mailThread","waBody","teamBody"].forEach(id => {
    const el = $("#"+id);
    if(el) el.scrollTop = el.scrollHeight;
  });

  if($("#mailList")){
    $("#mailList").innerHTML = history.mail.length
      ? `<div class="mailrow"><b>${clean(scenario?.subject || "Current thread")}</b><small>${history.mail.length} messages</small></div>`
      : `<div class="mailrow"><b>${clean(scenario?.subject || "Inbox")}</b></div>`;
  }
}

function addIncoming(stepData){
  const app = stepData[0];
  if(app === "mail"){
    history.mail.push({text: stepData[1], you:false});
  } else if(app === "wa"){
    history.wa.push({text: stepData[1], you:false});
  } else if(app === "teams"){
    const posts = Array.isArray(stepData[2]) ? stepData[2] : [];
    posts.forEach(p => history.teams.push({name:p[0], text:p[1], you:false}));
  }
  renderHistory();
}

function addSent(app,text){
  if(app === "mail") history.mail.push({text,you:true});
  else if(app === "wa") history.wa.push({text,you:true});
  else history.teams.push({name:"YOU",text,you:true});
  renderHistory();
}

function typeAndSend(app,text){
  return new Promise(resolve => {
    const composer = app === "mail" ? $("#mailTyping")
      : app === "wa" ? $("#waComposer")
      : $("#teamComposer");

    if(composer){
      composer.classList.remove("hidden");
      composer.textContent = `Typing: ${text}`;
    }

    setTimeout(() => {
      addSent(app,text);
      if(composer){
        composer.textContent = app === "mail" ? "" :
          app === "wa" ? "Message" : "Start a post";
        if(app === "mail") composer.classList.add("hidden");
      }
      resolve();
    }, 1200);
  });
}

/* Convert the scenario's four-field/extended Teams arrays into one consistent shape. */
function stepInfo(s){
  return {
    app: s[0],
    incoming: s[1],
    prompt: s[0] === "teams" ? s[3] : s[2],
    choices: s[0] === "teams" ? s[4] : s[3],
    teamsPosts: s[0] === "teams" && Array.isArray(s[2]) ? s[2] : null
  };
}

function branchReply(info,index){
  const choice = info.choices[index] || "";
  if(side === "client"){
    return [
      `Thanks. I'll take that direction. ${choice}\n\nWhat I need from you now is a recommendation that helps me make the decision internally, rather than another round of ambiguity.`,
      `Okay, let's go with that. ${choice}\n\nPlease build the next step around this direction. If there is a trade-off, show it to me clearly so I can defend the decision internally.`,
      `Let's take that route. ${choice}\n\nI know that changes the conversation slightly, so please call out what it affects before we move into another round of work.`
    ][index] || `Let's take that route. ${choice}`;
  }

  return [
    `Let's take that direction. ${choice}\n\nBefore we create more work, let's make sure this is solving the actual client problem and not just reacting to the latest comment.`,
    `I'll take that route. ${choice}\n\nLet's make the implication explicit so account, strategy and creative are all solving the same thing.`,
    `That's the direction I'd recommend. ${choice}\n\nLet's be clear about the trade-off rather than quietly absorbing it into the next round.`
  ][index] || `Let's take that direction. ${choice}`;
}

function showNotification(stepData, after){
  const info = stepInfo(stepData);
  switchApp(info.app);
  const attention = $("#attention");
  const open = $("#openAttention");
  $("#attentionApp").textContent = names[info.app];
  $("#attentionText").textContent =
    info.app === "mail" ? "A new email just arrived."
    : info.app === "wa" ? "New message on WhatisUp."
    : "Someone posted in Teams.";

  // Store the complete action as state. Do not depend on a transient closure
  // being recreated by a channel switch or later render.
  pending = { stepData, after, opened:false };
  attention.classList.remove("hidden");
  attention.classList.add("flash");
  setTimeout(() => attention.classList.remove("flash"), 2500);
  open.disabled = false;
  open.textContent = "OPEN";
  open.focus({preventScroll:true});
}

function openPendingNotification(){
  if(!pending || pending.opened) return false;
  const action = pending;
  pending.opened = true;
  const button = $("#openAttention");
  if(button) button.disabled = true;
  $("#attention").classList.add("hidden");
  addIncoming(action.stepData);
  action.after();
  pending = null;
  return true;
}

function showDecision(stepData){
  const info = stepInfo(stepData);
  $("#decisionText").textContent = info.prompt;
  $("#choices").innerHTML = info.choices.map((choice,i) =>
    `<button type="button" class="choice" data-i="${i}">${clean(choice)}</button>`
  ).join("");
  $("#decision").classList.remove("hidden");
}

async function choose(index){
  if(!scenario) return;
  const current = scenario.steps[step];
  const info = stepInfo(current);

  $("#decision").classList.add("hidden");

  const reply = branchReply(info,index);
  await typeAndSend(info.app,reply);

  step++;

  if(step < scenario.steps.length){
    const next = scenario.steps[step];
    setTimeout(() => showNotification(next, () => showDecision(next)), 1100);
  } else {
    setTimeout(() => finishScenario(), 1300);
  }
}

function finishScenario(){
  $("#endTitle").textContent = scenario.end || "You made it through.";
  $("#endCopy").textContent = "That was one way to handle it. There are other ways to make the same workday worse.";
  show("end");
}

function renderJourneys(){
  $("#cards").innerHTML = scenarios[side].map((s,i) =>
    `<button type="button" class="card" data-id="${clean(s.id)}">
      <span class="eyebrow">0${i+1}</span>
      <h3>${clean(s.title)}</h3>
      <p>${clean(s.desc)}</p>
    </button>`).join("");
}

function startScenario(sc){
  /* A new journey is the deliberate point where history is cleared.
     Notifications and channel changes NEVER call clearRun(). */
  clearRun();
  scenario = sc;

  $("#scenarioName").textContent =
    `${side === "client" ? "CLIENT" : "AGENCY"} · ${sc.title.toUpperCase()}`;
  $("#mailSubject").textContent = sc.subject || "";
  $("#waTitle").textContent = "Current agency";
  $("#org").textContent = side === "client" ? "YOUR WORKPLACE" : "YOUR AGENCY";

  const rooms = side === "client"
    ? ["#marketing","#brand","#leadership","#creative","#random"]
    : ["#account","#creative","#strategy","#production","#leadership","#random"];
  $("#rooms").innerHTML = rooms.map(x => `<div>${x}</div>`).join("");

  renderHistory();
  switchApp("mail");
  show("experience");

  setTimeout(() => showNotification(sc.steps[0], () => showDecision(sc.steps[0])), 550);
}

/* Event delegation keeps the UI resilient and prevents duplicate handlers. */
$("#openAttention")?.addEventListener("keydown", e => {
  if((e.key === "Enter" || e.key === " ") && !e.defaultPrevented){
    e.preventDefault();
    openPendingNotification();
  }
});

document.addEventListener("click", e => {
  const role = e.target.closest("[data-side]");
  if(role){
    side = role.dataset.side;
    clearRun();
    $("#revealTitle").textContent =
      side === "agency" ? "Well, you're the client now." : "Well, you're the agency now.";
    $("#revealCopy").textContent =
      side === "agency" ? "Try not to make it personal." : "Good luck with the brief.";
    show("reveal");
    return;
  }

  const enter = e.target.closest("#enter");
  if(enter){
    renderJourneys();
    show("situations");
    return;
  }

  const home = e.target.closest("[data-home]");
  if(home){
    clearRun();
    show("landing");
    return;
  }

  const card = e.target.closest("#cards [data-id]");
  if(card && scenarios?.[side]){
    const sc = scenarios[side].find(x => x.id === card.dataset.id);
    if(sc) startScenario(sc);
    return;
  }

  const app = e.target.closest("[data-app]");
  if(app){
    switchApp(app.dataset.app);
    return;
  }

  const open = e.target.closest("#openAttention");
  if(open){
    openPendingNotification();
    return;
  }

  const attention = e.target.closest("#attention");
  if(attention){
    openPendingNotification();
    return;
  }

  const choice = e.target.closest("#choices .choice");
  if(choice){
    choose(Number(choice.dataset.i));
    return;
  }

  const another = e.target.closest("#another");
  if(another){
    renderJourneys();
    show("situations");
    return;
  }

  const stay = e.target.closest("#stay");
  if(stay){
    $("#modal").classList.add("hidden");
    return;
  }

  const escape = e.target.closest("#escape");
  if(escape){
    $("#modal").classList.remove("hidden");
    return;
  }

  const confirm = e.target.closest("#confirm");
  if(confirm){
    $("#modal").classList.add("hidden");
    clearRun();
    show("landing");
  }
});

fetch("scenarios.json")
  .then(r => {
    if(!r.ok) throw new Error(`scenarios.json returned ${r.status}`);
    return r.json();
  })
  .then(data => { scenarios = data; })
  .catch(err => console.error("Scenario data failed to load:", err));
