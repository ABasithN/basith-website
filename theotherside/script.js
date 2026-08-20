const state={
  side:null, role:null, expIndex:0, channel:"email", step:0, scores:0,
  history:{email:[],whatsapp:[],slack:[]}, waiting:null, noticeOpen:false
};

const experiences=[
 {name:"THE BRIEF",scenes:[
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Re: Q4 Campaign Brief",body:"Hi Abdul,\n\nWe've gone through the brief and have a couple of questions before we start developing routes.\n\nThe ask around 'premium but accessible' could take us in a few directions. It would be useful to understand which side of that spectrum you're leaning towards.\n\nAlso, given the number of deliverables, we'd recommend adding another week to the current timeline.\n\nLet us know.\n\nPriya"},task:"The agency has decoded your brief. What do you send back?",choices:[["The timeline cannot move.","The timeline cannot move.","pressure"],["Fair point. Let's discuss the scope.","Fair point. Let's discuss the scope.","scope"],["The brief is clear. Please proceed.","The brief is clear. Please proceed.","proceed"]]},
  {ch:"whatsapp",inbound:{from:"Priya • Agency",body:"Hey, quick one. When you say 'premium but accessible', do you mean more design-led or more mass? 😅"},task:"They're asking you to clarify your own brief.",choices:[["More design-led.","More design-led.","design"],["You guys are the experts. Surprise me.","You guys are the experts. Surprise me.","vague"],["Somewhere in the middle.","Somewhere in the middle.","middle"]]},
  {ch:"slack",inbound:{from:"Priya • Account",body:"Client clarified: 'somewhere in the middle'. We'll need to translate that into something useful."},task:"You're looking at the agency's internal Teams channel. What do you do?",choices:[["Reply: 'Happy to jump on a call.'","Happy to jump on a call.","help"],["Say: 'You know what I mean.'","You know what I mean.","annoy"],["Say nothing.","","silent"]]},
  {ch:"email",inbound:{from:"Agency Creative Team",subject:"Re: Q4 Campaign Brief | Routes",body:"Hi,\n\nSharing three routes. Route 02 is the one we'd recommend.\n\nWe've kept the platform broad enough to flex across social, OOH and film.\n\nWould love your thoughts.\n\nBest,\nAman"},task:"Three routes. One recommendation. What do you do?",choices:[["I like Route 02. Let's develop it.","I like Route 02. Let's develop it.","approve"],["Can we combine Route 01 and Route 02?","Can we combine Route 01 and Route 02?","combine"],["Not quite there. Can we see two more routes?","Not quite there. Can we see two more routes?","reject"]]},
  {ch:"whatsapp",inbound:{from:"Aman • Creative Director",body:"Okay. We'll develop Route 02. Just flagging that combining the other route might mean we need a little more time."},task:"The agency has warned you about the timeline. Your move.",choices:[["Sure, but we still need the original deadline.","Sure, but we still need the original deadline.","deadline"],["Take the time you need. I'd rather get it right.","Take the time you need. I'd rather get it right.","kind"],["We really can't move the date.","We really can't move the date.","pressure"]]},
  {ch:"slack",inbound:{from:"Aman • Creative",body:"Client feedback: combine Route 01 + 02. Deadline unchanged."},task:"You can see the agency working around your request.",choices:[["Happy to jump on a call if useful.","Happy to jump on a call if useful.","help"],["Should be straightforward, no?","Should be straightforward, no?","wince"],["Say nothing.","","silent"]]},
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Re: Q4 Campaign Brief | Final Route",body:"Hi,\n\nWe've made the changes and attached the latest route. We believe this is ready to move into production.\n\nPlease confirm approval so we can lock the production schedule.\n\nThanks,\nPriya"},task:"They're asking for final approval.",choices:[["Approved. Great work.","Approved. Great work.","approve"],["Looks good. One tiny thought...","Looks good. One tiny thought...","tiny"],["Can we get one more option before we lock?","Can we get one more option before we lock?","again"]]},
  {ch:"whatsapp",inbound:{from:"Priya • Agency",body:"Hey! Saw your 'one tiny thought'. What did you have in mind?"},task:"The words 'one tiny thought' have consequences.",choices:[["Actually, let's leave it. Approved.","Actually, let's leave it. Approved.","save"],["Can we make the headline bigger?","Can we make the headline bigger?","font"],["Can we make the whole thing feel more premium?","Can we make the whole thing feel more premium?","premium"]]}
 ]},
 {name:"THE SCOPE",scenes:[
  {ch:"email",inbound:{from:"Agency Account Director",subject:"Re: Retainer | Scope & Resourcing",body:"Hi,\n\nOver the last two months, the account has moved from 10 social assets a month to 28, plus video, influencer support and weekend requests.\n\nWe'd recommend revisiting the current retainer so we can resource the account appropriately.\n\nHappy to discuss.\n\nVikram"},task:"The agency is asking for a retainer upgrade. What do you say?",choices:[["I don't think the scope has materially increased.","I don't think the scope has materially increased.","deny"],["Let's review the scope together.","Let's review the scope together.","review"],["Send me the revised retainer.","Send me the revised retainer.","upgrade"]]},
  {ch:"whatsapp",inbound:{from:"Vikram • Agency",body:"Just to clarify, we're not trying to make this difficult. We're struggling to keep the current team sustainable with the extra work."},task:"They're making the case in WhatsApp. Your move.",choices:[["Understood. Let's look at the numbers.","Understood. Let's look at the numbers.","numbers"],["We all have to stretch sometimes.","We all have to stretch sometimes.","stretch"],["Let's park the retainer discussion for now.","Let's park the retainer discussion for now.","park"]]},
  {ch:"slack",inbound:{from:"Vikram • Account",body:"Client wants to park the retainer conversation. Team is already stretched."},task:"You can see the agency's internal conversation.",choices:[["Reply: 'I'll make time for the review.'","I'll make time for the review.","review"],["Reply: 'Let's just make it work for now.'","Let's just make it work for now.","work"],["Say nothing.","","silent"]]},
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Re: Retainer | Scope & Resourcing",body:"Hi,\n\nWe've attached a simple view of the current scope versus the original retainer.\n\nThe biggest change is not any single deliverable, but the volume of iterations and turnaround times.\n\nWould Thursday work for a review?\n\nThanks,\nVikram"},task:"They've made the case. What do you send?",choices:[["Thursday works. Let's review it.","Thursday works. Let's review it.","meeting"],["Can you simplify this?","Can you simplify this?","simple"],["I still don't think we need an upgrade.","I still don't think we need an upgrade.","deny"]]},
  {ch:"whatsapp",inbound:{from:"Vikram • Agency",body:"Thanks. I'll send a one-page summary before Thursday so we can make the conversation easier."},task:"They've tried to make the discussion easier.",choices:[["Sounds good.","Sounds good.","good"],["Please also include what happens if we don't upgrade.","Please also include what happens if we don't upgrade.","consequence"],["Let's not make this too formal.","Let's not make this too formal.","informal"]]},
  {ch:"slack",inbound:{from:"Vikram • Account",body:"Client asked us to include the 'if we don't upgrade' scenario."},task:"The agency is now preparing for the negotiation.",choices:[["Give them the honest version.","Give them the honest version.","honest"],["Keep it positive.","Keep it positive.","positive"],["Say nothing.","","silent"]]},
  {ch:"email",inbound:{from:"Agency Account Director",subject:"Re: Retainer | Thursday Review",body:"Hi,\n\nSharing the one-page summary ahead of Thursday.\n\nThe current team can continue under the existing retainer, but the level of responsiveness and iteration will need to be adjusted.\n\nIf the expanded scope is the expectation, we'd recommend the upgraded retainer.\n\nThanks,\nVikram"},task:"The choice is now pretty clear. What do you send?",choices:[["Let's discuss the upgrade.","Let's discuss the upgrade.","upgrade"],["Let's keep the existing retainer and adjust expectations.","Let's keep the existing retainer and adjust expectations.","expectations"],["I'll come back after Thursday.","I'll come back after Thursday.","delay"]]}
 ]},
 {name:"THE CAMPAIGN",scenes:[
  {ch:"email",inbound:{from:"Brand Team",subject:"Campaign Brief | Q4 Launch",body:"Hi team,\n\nWe'd like to launch a campaign around the new product in October.\n\nThe brief is attached. We'd love something that feels culturally relevant, premium and disruptive, but still accessible.\n\nPlease share first routes by tomorrow EOD.\n\nThanks,\nNeha"},task:"You are the agency. The brief has landed. What do you send back?",choices:[["Thanks. We'll review and come back with questions.","Thanks. We'll review and come back with questions.","questions"],["Got it. We'll share routes tomorrow EOD.","Got it. We'll share routes tomorrow EOD.","promise"],["Can we get on a call before we start?","Can we get on a call before we start?","call"]]},
  {ch:"whatsapp",inbound:{from:"Neha • Client",body:"Hey, just checking you saw the brief. Leadership is quite excited about this one."},task:"The client is already chasing. Your move.",choices:[["We're on it. Will keep you posted.","We're on it. Will keep you posted.","calm"],["Yes. We're still working through the brief.","Yes. We're still working through the brief.","honest"],["We'll share something by lunch.","We'll share something by lunch.","rush"]]},
  {ch:"slack",inbound:{from:"Priya • Creative Director",body:"Client is excited. Brief says premium + disruptive + accessible. Also wants routes tomorrow."},task:"You're inside the agency's Mycoresoft Teams workspace.",choices:[["Reply: 'Let's not chase the brief. Let's find the idea.'","Let's not chase the brief. Let's find the idea.","idea"],["Reply: 'Tomorrow EOD is tight.'","Tomorrow EOD is tight.","tight"],["Say nothing and let the team work.","","silent"]]},
  {ch:"email",inbound:{from:"Brand Team",subject:"Re: Q4 Launch | One more thing",body:"Hi team,\n\nOne more thing from leadership. They'd like to see an additional route that feels more premium.\n\nThis doesn't need to change the existing brief. Just another option alongside the others.\n\nThanks,\nNeha"},task:"The client has added 'one more thing'. What do you reply?",choices:[["We'll add it to the routes.","We'll add it to the routes.","yes"],["That changes the scope. Can we discuss timing?","That changes the scope. Can we discuss timing?","scope"],["We can show an exploratory direction, but not a full route.","We can show an exploratory direction, but not a full route.","boundary"]]},
  {ch:"whatsapp",inbound:{from:"Neha • Client",body:"It's really just one more route. Shouldn't take too long, right? 🙃"},task:"A familiar sentence. How do you respond?",choices:[["We'll make it work.","We'll make it work.","work"],["It may affect the timeline.","It may affect the timeline.","timeline"],["Let's jump on a call.","Let's jump on a call.","call"]]},
  {ch:"slack",inbound:{from:"Aman • Creative",body:"Client wants another premium route. Timeline unchanged."},task:"The team is looking at you for a response.",choices:[["Let's protect the idea and flag the timing.","Let's protect the idea and flag the timing.","protect"],["Let's just make it happen.","Let's just make it happen.","happen"],["Say nothing.","","silent"]]},
  {ch:"email",inbound:{from:"Brand Team",subject:"Re: Q4 Launch | Feedback",body:"Hi team,\n\nThanks for the routes. Leadership likes Route 02, but they feel it could be more disruptive.\n\nCould you push the idea further while keeping the same strategic platform?\n\nWould love a revised version tomorrow morning.\n\nThanks,\nNeha"},task:"You've received the classic 'push it further'. What do you send?",choices:[["We'll push the idea while protecting the platform.","We'll push the idea while protecting the platform.","smart"],["Could you clarify what 'more disruptive' means?","Could you clarify what 'more disruptive' means?","clarify"],["We'll send a stronger version tomorrow morning.","We'll send a stronger version tomorrow morning.","rush"]]},
  {ch:"whatsapp",inbound:{from:"Neha • Client",body:"Amazing. Also, can we make the logo feel a little more prominent? Not too much though."},task:"The logo has entered the chat.",choices:[["We'll look at the balance.","We'll look at the balance.","balance"],["How prominent is prominent?","How prominent is prominent?","clarify"],["Sure. We'll make it bigger.","Sure. We'll make it bigger.","logo"]]}
 ]}
];

const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const names={email:"MAIL",whatsapp:"WHATSUP",slack:"MYCORESOFT TEAMS"};
const roleCopy={agency:"Well, you're the client now.",client:"Well, you're the agency now."};

function start(side){
  state.side=side;
  state.role=side==="agency"?"client":"agency";
  $("#landing").classList.add("hidden");
  $("#reveal").classList.remove("hidden");
  $("#role-title").textContent=roleCopy[side];
}
document.querySelectorAll("[data-side]").forEach(btn=>btn.addEventListener("click",()=>start(btn.dataset.side)));
$("#startBtn").addEventListener("click",startExperience);

function startExperience(){
  state.expIndex=Math.floor(Math.random()*experiences.length);
  state.step=0;state.scores=0;state.channel="email";
  state.history={email:[],whatsapp:[],slack:[]};
  $("#reveal").classList.add("hidden");$("#ending").classList.add("hidden");$("#experience").classList.remove("hidden");
  $("#exp-name").textContent=" · "+experiences[state.expIndex].name;
  renderChannels(); showScene();
}
function renderChannels(){
  $("#email").innerHTML='<div class="mail-ui"><div class="ui-head"><div class="avatar">M</div><div><strong>Mail</strong><small>Inbox</small></div></div><div class="mail-body"><div class="mail-list" id="mailList"></div><div class="thread" id="mailThread"></div></div></div>';
  $("#whatsapp").innerHTML='<div class="wa-ui"><div class="ui-head"><div class="avatar">W</div><div><strong>WhatisUp</strong><small>online</small></div></div><div class="wa-body" id="waBody"></div></div>';
  $("#slack").innerHTML='<div class="slack-ui"><div class="ui-head"><div class="avatar">M</div><div><strong>Mycoresoft Teams</strong><small>your workspace</small></div></div><div class="slack-body"><div class="teams-list" id="teamsList"></div><div class="slack-chat" id="slackChat"></div></div></div>';
  renderHistory();
}
function renderHistory(){
  const h=state.history;
  $("#mailList").innerHTML=h.email.slice().reverse().map((m,i)=>'<div class="mail-row '+(i===0?'active':'')+'"><b>'+esc(m.subject||"Re: Campaign")+'</b><span>'+esc(m.from||"You")+' · '+(i===0?"Just now":"Earlier")+'</span></div>').join("");
  const latest=h.email[h.email.length-1];
  $("#mailThread").innerHTML=(latest?'<h3>'+esc(latest.subject||"Inbox")+'</h3>':"<h3>Inbox</h3>")+h.email.slice().reverse().map(m=>'<article class="mail-msg '+(m.kind==="you"?"sent":"")+'"><div class="mail-meta"><b>'+esc(m.from)+'</b><span>'+(m.kind==="you"?"Just now":"Today")+'</span></div><div class="body">'+esc(m.body)+'</div></article>').join("")+'<div class="composer">Thread replies appear here as you send them.</div>';
  $("#waBody").innerHTML=h.whatsapp.map(m=>'<div class="bubble '+(m.kind==="you"?"you":"agency")+'">'+esc(m.body)+'<small>'+(m.kind==="you"?"✓✓":"Now")+'</small></div>').join("");
  const rooms=["#brand-x-agency","#creative","#account","#production","#random","#general"];
  $("#teamsList").innerHTML='<b>MYCORESOFT TEAMS</b><div class="team-section">FAVOURITES</div>'+rooms.map((r,i)=>'<div class="team-room '+(i===0?'active':'')+'">'+r+'</div>').join("")+'<div class="team-section">DIRECT MESSAGES</div><div class="team-room">Priya</div><div class="team-room">Aman</div><div class="team-room">Neha</div>';
  $("#slackChat").innerHTML=h.slack.map(m=>'<div class="slack-msg '+(m.kind==="you"?"you":"")+'"><div class="who">'+esc(m.from)+' <span>'+(m.kind==="you"?"Now":"Today")+'</span></div><div class="text">'+esc(m.body)+'</div></div>').join("");
  ["email","whatsapp","slack"].forEach(ch=>{$("#"+ch).classList.toggle("active",state.channel===ch);$("#"+ch).classList.remove("attention")});
  document.querySelectorAll(".rail-btn").forEach(b=>{b.classList.toggle("active",b.dataset.channel===state.channel);b.classList.remove("attention")});
}
function addInbound(ch,msg){state.history[ch].push({kind:"in",...msg})}
function addOutbound(ch,text){if(text)state.history[ch].push({kind:"you",from:"You",body:text,subject:ch==="email"?"Re: "+(state.history.email[state.history.email.length-1]?.subject||"Campaign"):""})}

function showScene(){
  const scene=experiences[state.expIndex].scenes[state.step];
  state.channel=scene.ch;
  addInbound(scene.ch,scene.inbound);
  renderHistory();
  updateClock();
  task(scene.task,scene.choices);
}
function task(text,choices){
  $("#taskText").textContent=text;
  $("#choices").innerHTML="";
  choices.forEach(([label,send,effect])=>{
    const b=document.createElement("button");b.type="button";b.className="choice";b.textContent=label;
    b.addEventListener("click",()=>choose(send,effect));$("#choices").appendChild(b);
  });
  $("#taskCard").classList.remove("hidden");
}
function choose(send,effect){
  $("#taskCard").classList.add("hidden");
  addOutbound(state.channel,send);
  renderHistory();
  typeSend(state.channel,send,()=>nextAfterChoice(effect));
}
function typeSend(ch,text,done){
  if(!text){setTimeout(done,180);return}
  const target=ch==="email"?$("#mailThread"):ch==="whatsapp"?$("#waBody"):$("#slackChat");
  const ghost=document.createElement("div");
  ghost.className=ch==="email"?"mail-msg sent":ch==="whatsapp"?"bubble you":"slack-msg you";
  ghost.innerHTML=ch==="email"?'<div class="mail-meta"><b>You</b><span>Sending…</span></div><div class="body"></div>':ch==="whatsapp"?'<span></span><small>Sending…</small>':'<div class="who">You <span>Sending…</span></div><div class="text"></div>';
  target.appendChild(ghost);target.scrollTop=target.scrollHeight;
  const el=ghost.querySelector(ch==="email"?".body":ch==="whatsapp"?"span":".text");
  let i=0;const timer=setInterval(()=>{el.textContent=text.slice(0,i++);if(i>text.length){clearInterval(timer);setTimeout(()=>{ghost.remove();renderHistory();done()},180)}},Math.max(10,Math.min(24,420/Math.max(text.length,1))));
}
function nextAfterChoice(effect){
  state.scores+=effect==="silent"?0:1;
  state.step++;
  if(state.step>=experiences[state.expIndex].scenes.length){finish();return}
  setTimeout(()=>showNotice(experiences[state.expIndex].scenes[state.step]),effect==="silent"?500:850);
}
function showNotice(scene){
  state.waiting=scene;
  highlight(scene.ch);
  $("#noticeApp").textContent=names[scene.ch];
  $("#noticeTitle").textContent=scene.inbound.subject||scene.inbound.from;
  $("#noticeBody").textContent=scene.inbound.body.split("\n")[0];
  $("#notice").classList.remove("hidden");
  state.noticeOpen=false;
}
$("#noticeOpen").addEventListener("click",()=>{
  if(!state.waiting)return;
  const scene=state.waiting;
  $("#notice").classList.add("hidden");
  clearHighlight();
  state.waiting=null;
  state.channel=scene.ch;
  showScene();
});
function highlight(ch){
  document.querySelectorAll(".rail-btn").forEach(b=>b.classList.toggle("attention",b.dataset.channel===ch));
  document.querySelectorAll(".channel").forEach(c=>c.classList.remove("attention"));
  $("#"+ch).classList.add("attention");
}
function clearHighlight(){document.querySelectorAll(".rail-btn,.channel").forEach(x=>x.classList.remove("attention"))}
document.querySelectorAll(".rail-btn").forEach(b=>b.addEventListener("click",()=>{if(!state.noticeOpen){state.channel=b.dataset.channel;renderHistory()}}));

function updateClock(){
  const mins=state.step*37+4,h=10+Math.floor(mins/60),m=mins%60;
  $("#clock").textContent=`${h>12?h-12:h}:${String(m).padStart(2,"0")} ${h>=12?"PM":"AM"}`;
}
function finish(){
  $("#experience").classList.add("hidden");$("#ending").classList.remove("hidden");
  $("#endTitle").textContent=state.role==="client"?"Well, you're the client.":"Well, you're the agency.";
  $("#endCopy").textContent="You now know what the other side feels like. Maybe tomorrow's feedback will be slightly kinder.";
  $("#score").innerHTML=`<div>Decisions made: ${state.scores}</div><div>Channels survived: 3</div>`;
}
function home(){
  $("#experience").classList.add("hidden");$("#ending").classList.add("hidden");$("#escapeConfirm").classList.add("hidden");$("#reveal").classList.add("hidden");$("#landing").classList.remove("hidden");
  state.waiting=null;state.history={email:[],whatsapp:[],slack:[]};
}
$("#escapeBtn").addEventListener("click",()=>$("#escapeConfirm").classList.remove("hidden"));
$("#stayBtn").addEventListener("click",()=>$("#escapeConfirm").classList.add("hidden"));
$("#confirmEscape").addEventListener("click",home);
$("#againBtn").addEventListener("click",()=>{state.expIndex=(state.expIndex+1)%experiences.length;$("#ending").classList.add("hidden");$("#reveal").classList.remove("hidden");$("#role-title").textContent=roleCopy[state.side]});
$("#switchBtn").addEventListener("click",()=>{const side=state.side==="agency"?"client":"agency";start(side)});
$("#homeBtn").addEventListener("click",home);
