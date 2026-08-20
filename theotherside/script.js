const state={side:null,role:null,expIndex:0,channel:"email",history:{email:[],whatsapp:[],slack:[]},scores:0,step:0,waiting:null};

const experiences=[
 {name:"THE BRIEF", scenes:[
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Campaign Brief: Q4 Launch",body:"Hi,\n\nSharing the brief for the Q4 launch. We need something fresh, premium, social-first and culturally relevant.\n\nAudience: everyone.\nObjective: awareness.\nTone: bold but not too bold.\n\nWould love first routes by tomorrow EOD.\n\nThanks,\nPriya"},task:"The brief has landed. What do you send back?",choices:[
   ["Looks good. Take a first stab and let's react.","Thanks, team. Looks good. Take a first stab and let's react.","open"],
   ["Can we make the thinking more disruptive?","Can we make the thinking more disruptive?","push"],
   ["Let's get on a call. There are a few things to unpack.","Let's get on a call. There are a few things to unpack.","call"]]},
  {ch:"whatsapp",inbound:{from:"Priya • Agency",body:"Quick one. When you say 'more disruptive', what does that actually mean? 😅"},task:"They are asking you to define disruptive. Your move.",choices:[
   ["Something the category hasn't done before.","Something the category hasn't done before.","big"],
   ["You guys are the creative experts. Surprise me.","You guys are the creative experts. Surprise me.","vague"],
   ["Let's keep it simple. Just make people stop scrolling.","Let's keep it simple. Just make people stop scrolling.","social"]]},
  {ch:"slack",inbound:{from:"Priya • Account",body:"Client feedback: wants it disruptive."},task:"You're looking at the agency's internal channel. What do you do?",choices:[
   ["React with a thumbs up and leave them to it.","👍","light"],
   ["Add: 'Don't overthink it. You know what I mean.'","Don't overthink it. You know what I mean.","annoy"],
   ["Ask them to show you more options.","Can we see a few more options?","more"]]},
  {ch:"email",inbound:{from:"Agency Creative Team",subject:"Re: Campaign Brief: Routes",body:"Hi,\n\nWe've developed three routes. Route 02 is the one we'd recommend.\n\nWe've kept the platform broad enough to flex across social, OOH and film.\n\nWould love your thoughts.\n\nBest,\nAman"},task:"Three routes. One recommendation. What do you do?",choices:[
   ["I like Route 02. Let's develop it.","I like Route 02. Let's develop it.","approve"],
   ["Can we combine Route 01 and Route 02?","Can we combine Route 01 and Route 02?","combine"],
   ["Not quite there. Can we see two more routes?","Not quite there. Can we see two more routes?","reject"]]},
  {ch:"whatsapp",inbound:{from:"Aman • Creative Director",body:"Okay. We'll develop Route 02. Just flagging that combining the other route might mean we need a little more time."},task:"The agency is warning you about the timeline. What do you say?",choices:[
   ["Sure, but we still need the original deadline.","Sure, but we still need the original deadline.","deadline"],
   ["Take the time you need. I'd rather get it right.","Take the time you need. I'd rather get it right.","kind"],
   ["We really can't move the date.","We really can't move the date.","pressure"]]},
  {ch:"slack",inbound:{from:"Aman • Creative",body:"New client feedback: combine Route 01 + 02. Deadline unchanged."},task:"You can see what the team is saying after your feedback.",choices:[
   ["Say nothing.","","silent"],
   ["Reply: 'Happy to jump on a call if useful.'","Happy to jump on a call if useful.","help"],
   ["Reply: 'Should be straightforward, no?'","Should be straightforward, no?","wince"]]},
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Re: Campaign Brief: Final Route",body:"Hi,\n\nWe've made the changes and attached the latest route. We believe this is ready to move into production.\n\nPlease confirm approval so we can lock the production schedule.\n\nThanks,\nPriya"},task:"They've asked for final approval. What do you send?",choices:[
   ["Approved. Great work.","Approved. Great work.","approve"],
   ["Looks good. One tiny thought...","Looks good. One tiny thought...","tiny"],
   ["Can we get one more option before we lock?","Can we get one more option before we lock?","again"]]},
  {ch:"whatsapp",inbound:{from:"Priya • Agency",body:"Hey! Saw your 'one tiny thought'. What did you have in mind?"},task:"The words 'one tiny thought' have consequences.",choices:[
   ["Actually, let's leave it. Approved.","Actually, let's leave it. Approved.","save"],
   ["Can we make the headline bigger?","Can we make the headline bigger?","font"],
   ["Can we make the whole thing feel more premium?","Can we make the whole thing feel more premium?","premium"]]}
 ]},
 {name:"THE DEADLINE", scenes:[
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Urgent: Need social film by EOD",body:"Hi,\n\nNeed a quick turnaround on a social film. New product announcement. We'd ideally like first cut by 5 PM today.\n\nBrief attached below. It's pretty straightforward.\n\nThanks,\nNeha"},task:"You need to get the agency moving. What do you send?",choices:[
   ["Can you make 5 PM work?","Can you make 5 PM work?","rush"],
   ["Let's prioritise quality over speed.","Let's prioritise quality over speed.","quality"],
   ["Sure. Just keep me posted.","Sure. Just keep me posted.","easy"]]},
  {ch:"whatsapp",inbound:{from:"Neha • Agency",body:"Quick question. Is the product pack locked? We're seeing two versions in the folder."},task:"A small problem has appeared. How do you respond?",choices:[
   ["Use the latest one. I'll confirm internally.","Use the latest one. I'll confirm internally.","latest"],
   ["Can you hold? I'll get back to you.","Can you hold? I'll get back to you.","hold"],
   ["It's the same product. Just use whichever looks better.","It's the same product. Just use whichever looks better.","chaos"]]},
  {ch:"slack",inbound:{from:"Neha • Account",body:"Client wants first cut by 5. Pack still isn't locked."},task:"The agency is now trying to solve your problem internally.",choices:[
   ["Jump in: 'Let's not lose time on this.'","Let's not lose time on this.","push"],
   ["Say: 'I'll get the pack locked now.'","I'll get the pack locked now.","help"],
   ["Stay quiet.","","silent"]]},
  {ch:"email",inbound:{from:"Agency Creative Team",subject:"Re: Urgent: First Cut",body:"Hi,\n\nSharing V1. This is a rough first cut so we can keep the timeline moving.\n\nPlease send consolidated feedback if possible.\n\nBest,\nRohan"},task:"First cut is in. What do you send back?",choices:[
   ["This is a good start. A few notes below.","This is a good start. A few notes below.","notes"],
   ["Can we make it more premium?","Can we make it more premium?","premium"],
   ["I don't think this is there yet. Can we try another direction?","I don't think this is there yet. Can we try another direction?","restart"]]},
  {ch:"whatsapp",inbound:{from:"Rohan • Creative",body:"Got it. Just flagging that a new direction today would put the 5 PM delivery at risk."},task:"It's 3:41 PM. The deadline is still 5 PM.",choices:[
   ["Then let's keep V1 and polish it.","Then let's keep V1 and polish it.","practical"],
   ["We still need another direction.","We still need another direction.","unreal"],
   ["What would you recommend?","What would you recommend?","expert"]]},
  {ch:"slack",inbound:{from:"Rohan • Creative",body:"Client wants another direction. Delivery still 5 PM."},task:"The agency is in crisis mode. What do you do?",choices:[
   ["Offer to move the deadline.","Let's move the deadline if needed.","move"],
   ["Tell them to make it happen.","Make it happen. We'll figure it out.","makeit"],
   ["Ask for the best possible version by 5.","Give me the strongest version you can by 5.","best"]]},
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Re: Urgent: First Cut",body:"Hi,\n\nWe've incorporated the feedback and are sharing the final cut.\n\nGiven the timeline, we've had to make a few compromises, but this is the strongest version we could get through today.\n\nPlease confirm.\n\nThanks,\nNeha"},task:"5 PM is here. Final approval.",choices:[
   ["Approved. Ship it.","Approved. Ship it.","ship"],
   ["Looks good. One small change...","Looks good. One small change...","small"],
   ["Can we hold this until tomorrow?","Can we hold this until tomorrow?","tomorrow"]]}
 ]},
 {name:"THE CAMPAIGN", scenes:[
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Campaign: Approved to Produce",body:"Hi,\n\nConfirming we're approved to move into production on Route 01.\n\nProduction schedule attached. We're locking talent and locations today.\n\nThanks,\nVikram"},task:"It's approved and moving into production. What do you send?",choices:[
   ["Approved. Go ahead.","Approved. Go ahead.","go"],
   ["Can we revisit one thing before production?","Can we revisit one thing before production?","revisit"],
   ["Let's have a quick call before we lock.","Let's have a quick call before we lock.","call"]]},
  {ch:"whatsapp",inbound:{from:"Vikram • Agency",body:"All good. We've locked production. Talent is confirmed for Thursday."},task:"Everything is locked. Surely nothing can go wrong.",choices:[
   ["Great. Thanks.","Great. Thanks.","great"],
   ["Actually, I've had another thought.","Actually, I've had another thought.","thought"],
   ["Can we see the latest casting options again?","Can we see the latest casting options again?","casting"]]},
  {ch:"slack",inbound:{from:"Vikram • Account",body:"Client has had another thought. Production is locked."},task:"You can now see the internal reaction.",choices:[
   ["Say: 'It's genuinely a small thing.'","It's genuinely a small thing.","small"],
   ["Say nothing.","","silent"],
   ["Ask if the change is still possible.","Is the change still possible?","possible"]]},
  {ch:"email",inbound:{from:"Agency Production",subject:"Re: Production: Route 01",body:"Hi,\n\nWe can accommodate the change, but it will require a talent and location adjustment.\n\nThis will add cost and may affect the Thursday schedule.\n\nPlease confirm how you'd like to proceed.\n\nBest,\nMaya"},task:"A small change has become a production problem. What do you send?",choices:[
   ["Let's keep production as planned.","Let's keep production as planned.","keep"],
   ["Can we absorb the change without moving the date?","Can we absorb the change without moving the date?","absorb"],
   ["Let's make the change. I'll get the additional approval.","Let's make the change. I'll get the additional approval.","cost"]]},
  {ch:"whatsapp",inbound:{from:"Maya • Agency",body:"Okay. We'll make it work. Just need written confirmation today."},task:"They're asking for written confirmation. What do you do?",choices:[
   ["Done. Confirmed.","Done. Confirmed.","confirm"],
   ["Let me just check internally first.","Let me just check internally first.","check"],
   ["Actually, let's not overcomplicate it. Keep the original.","Actually, let's not overcomplicate it. Keep the original.","undo"]]},
  {ch:"slack",inbound:{from:"Maya • Production",body:"Waiting on written confirmation. Talent hold expires in 20 mins."},task:"The agency is waiting. Your decision now affects production.",choices:[
   ["Confirm immediately.","Confirmed. Go ahead.","fast"],
   ["Ask them to hold for another 30 minutes.","Can you hold for another 30 minutes?","hold"],
   ["Say nothing.","","silent"]]},
  {ch:"email",inbound:{from:"Agency Account Team",subject:"Re: Production: Route 01",body:"Hi,\n\nThanks for confirming. We're proceeding.\n\nOne final note: because of the change, the original production cost has increased slightly. Finance will share the revised estimate separately.\n\nThanks,\nVikram"},task:"The campaign is moving. There's a revised cost. What do you send?",choices:[
   ["Understood. Send the estimate.","Understood. Send the estimate.","cost"],
   ["Can you see if there's any way to reduce it?","Can you see if there's any way to reduce it?","reduce"],
   ["This is more than expected. Let's revisit the change.","This is more than expected. Let's revisit the change.","revisit"]]}
 ]}
];

const $=s=>document.querySelector(s);
const esc=s=>String(s||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const roleText={agency:["You're the client now.","Try not to make it personal."],client:["You're the agency now.","Good luck with the brief."]};

function start(side){
 state.side=side; state.role=side==="agency"?"client":"agency";
 $("#landing").classList.add("hidden"); $("#reveal").classList.remove("hidden");
 $("#role-title").textContent=roleText[side][0]; $("#role-sub").textContent=roleText[side][1];
}
document.querySelectorAll("[data-side]").forEach(b=>b.onclick=()=>start(b.dataset.side));
$("#startBtn").onclick=()=>{state.expIndex=Math.floor(Math.random()*experiences.length);startExperience()};
function startExperience(){
 state.step=0;state.scores=0;state.history={email:[],whatsapp:[],slack:[]};state.channel=experiences[state.expIndex].scenes[0].ch;
 $("#reveal").classList.add("hidden");$("#ending").classList.add("hidden");$("#experience").classList.remove("hidden");
 $("#exp-name").textContent=" · "+experiences[state.expIndex].name;
 renderChannels(); showScene();
}
function addInbound(ch,msg){
 state.history[ch].push({kind:"in",...msg});
}
function addOutbound(ch,text){
 if(!text)return;
 state.history[ch].push({kind:"you",body:text,from:"You"});
}
function renderChannels(){
 $("#email").innerHTML=`<div class="mail-ui"><div class="ui-head"><div class="avatar">M</div><div><strong>Mail</strong><small>Inbox</small></div></div><div class="mail-body"><div class="mail-list" id="mailList"></div><div class="thread" id="mailThread"></div></div></div>`;
 $("#whatsapp").innerHTML=`<div class="wa-ui"><div class="ui-head"><div class="avatar">A</div><div><strong>Agency</strong><small>online</small></div></div><div class="wa-body" id="waBody"></div></div>`;
 $("#slack").innerHTML=`<div class="slack-ui"><div class="ui-head"><div class="avatar">#</div><div><strong>Slack</strong><small>#brand-x-agency</small></div></div><div class="slack-body"><div class="slack-list"><b>CHANNELS</b>#brand-x-agency<br><br>#creative<br>#account</div><div class="slack-chat" id="slackChat"></div></div></div>`;
 renderHistory();
}
function renderHistory(){
 const h=state.history;
 $("#mailList").innerHTML=h.email.map((m,i)=>`<div class="mail-row ${i===h.email.length-1?"active":""}"><b>${esc(m.subject||"Re: Campaign")}</b><span>${esc(m.from||"You")} · ${i===h.email.length-1?"Just now":"Earlier"}</span></div>`).join("");
 $("#mailThread").innerHTML=`<h3>${esc((h.email[h.email.length-1]||{}).subject||"Inbox")}</h3>`+h.email.slice().reverse().map(m=>`<article class="mail-msg ${m.kind==="you"?"sent":""}"><div class="mail-meta"><b>${esc(m.from)}</b><span>${m.kind==="you"?"Just now":"Today"}</span></div><div class="body">${esc(m.body)}</div></article>`).join("")+`<div class="composer">Thread replies appear here as you send them.</div>`;
 $("#waBody").innerHTML=h.whatsapp.map(m=>`<div class="bubble ${m.kind==="you"?"you":"agency"}">${esc(m.body)}<small>${m.kind==="you"?"✓✓":"Now"}</small></div>`).join("");
 $("#slackChat").innerHTML=h.slack.map(m=>`<div class="slack-msg ${m.kind==="you"?"you":""}"><div class="who">${esc(m.from)} <span>${m.kind==="you"?"Now":"Today"}</span></div><div class="text">${esc(m.body)}</div></div>`).join("");
 ["email","whatsapp","slack"].forEach(ch=>{$("#"+ch).classList.toggle("active",state.channel===ch);$("#"+ch).classList.toggle("attention",state.channel===ch);});
 document.querySelectorAll(".rail-btn").forEach(b=>b.classList.toggle("active",b.dataset.channel===state.channel));
}
function agencyView(scene,idx){
 const ch=scene.ch;
 const sets={
  email:[
   {from:"Brand Marketing Team",subject:"Brief: Q4 Launch",body:"Hi team,\n\nSharing the Q4 launch brief. We need a strong social-first idea with broad appeal.\n\nWould love to see first routes tomorrow EOD.\n\nThanks,\nMeera"},
   {from:"Brand Marketing Team",subject:"Re: Campaign Routes",body:"Hi team,\n\nWe've reviewed the routes. Route 02 is closest, but we're not fully there yet.\n\nCan you push the thinking further without making it too niche?\n\nThanks,\nMeera"},
   {from:"Brand Marketing Team",subject:"Re: Campaign Routes",body:"Hi,\n\nThe latest route is looking good. Before we lock production, we'd like to revisit one element.\n\nPlease see the note below.\n\nThanks,\nMeera"}
  ],
  whatsapp:[
   {from:"Meera • Brand",body:"Quick one. When you say this is the strongest route, what makes it different from what everyone else is doing?"},
   {from:"Meera • Brand",body:"Can we make the headline a little bigger? It needs to land faster on mobile."},
   {from:"Meera • Brand",body:"Actually, one tiny thought before we lock this. Can we make it feel more premium?"}
  ],
  slack:[
   {from:"Account • Agency",body:"Client feedback: they want it more disruptive, but still broad and easy to understand."},
   {from:"Creative Director • Agency",body:"Client has asked for another route. Production timing stays the same."},
   {from:"Account • Agency",body:"Client wants one final change before approval. Production is already being scheduled."}
  ]
 };
 const msg=sets[ch][Math.min(idx,sets[ch].length-1)];
 const taskByChannel={
  email:["The client has sent a brief. What do you send back?","The client likes the direction but wants more. How do you respond?","You're nearly at approval. What do you send?"],
  whatsapp:["The client is challenging the thinking. Your move.","The client has a small visual request. How do you respond?","The client has one more thought. What do you do?"],
  slack:["The feedback is vague but urgent. What do you tell the team?","The deadline hasn't moved. How do you handle it internally?","The team is under pressure. What do you do next?"]
 };
 const choicesByChannel={
  email:[[["We'll explore a stronger route and come back with options.","We'll explore a stronger route and come back with options.","professional"],["Can you clarify what 'more disruptive' means?","Can you clarify what 'more disruptive' means?","clarify"],["Let's get on a call so we can align quickly.","Let's get on a call so we can align quickly.","call"]],[["We'll push the thinking while keeping the idea broad.","We'll push the thinking while keeping the idea broad.","push"],["Can you share a couple of references for what you mean?","Can you share a couple of references for what you mean?","reference"],["We'll show you two alternate routes.","We'll show you two alternate routes.","more"]],[["Absolutely. We'll make the final change and keep production moving.","Absolutely. We'll make the final change and keep production moving.","yes"],["Can we jump on a quick call before we lock it?","Can we jump on a quick call before we lock it?","call"],["We'll send a final recommendation with the rationale.","We'll send a final recommendation with the rationale.","rationale"]]],
  whatsapp:[[["The idea is designed to interrupt the category. That's the role of the creative.","The idea is designed to interrupt the category. That's the role of the creative.","defend"],["Fair point. We'll sharpen the distinction.","Fair point. We'll sharpen the distinction.","sharpen"],["We'll show you what changes when we push it further.","We'll show you what changes when we push it further.","show"]],[["Sure. We'll make the mobile hierarchy clearer.","Sure. We'll make the mobile hierarchy clearer.","mobile"],["We'll keep the current size if the composition starts feeling cramped.","We'll keep the current size if the composition starts feeling cramped.","design"],["We'll send two versions so you can compare.","We'll send two versions so you can compare.","compare"]],[["We'll leave it as is and move to approval.","We'll leave it as is and move to approval.","close"],["Let's make the premium cues more obvious without overdoing it.","Let's make the premium cues more obvious without overdoing it.","premium"],["We'll take another look and tell you honestly if it improves the work.","We'll take another look and tell you honestly if it improves the work.","honest"]]],
  slack:[[["Let's translate the feedback into a sharper creative problem for the team.","Let's translate the feedback into a sharper creative problem for the team.","brief"],["Ask the client for a clearer definition before changing the work.","Ask the client for a clearer definition before changing the work.","clarify"],["Tell the team to push it and trust the instinct.","Tell the team to push it and trust the instinct.","trust"]],[["Let's protect the core idea and simplify the execution.","Let's protect the core idea and simplify the execution.","protect"],["We'll need to flag the timing risk to account.","We'll need to flag the timing risk to account.","risk"],["Let's make the strongest version we can by the deadline.","Let's make the strongest version we can by the deadline.","best"]],[["I'll manage the client expectation. You focus on the work.","I'll manage the client expectation. You focus on the work.","manage"],["Let's show the team exactly what needs changing.","Let's show the team exactly what needs changing.","specific"],["Let's push back on the change if it weakens the idea.","Let's push back on the change if it weakens the idea.","pushback"]]]
 };
 const mapIndex=ch==="email"? (idx===0?0:idx<5?1:2) : ch==="whatsapp"?(idx===1?0:idx===4?1:2):(idx===2?0:idx===5?1:2);
 return {ch,inbound:msg,task:taskByChannel[ch][mapIndex],choices:choicesByChannel[ch][mapIndex]};
}

function showScene(){
 let scene=experiences[state.expIndex].scenes[state.step];
 if(state.role==="agency") scene=agencyView(scene,state.step);
 state.channel=scene.ch;
 addInbound(scene.ch,scene.inbound);
 renderHistory(); updateClock();
 task(scene.task,scene.choices);
}
function task(text,choices){
 $("#taskText").textContent=text;$("#choices").innerHTML="";
 choices.forEach(([label,send,effect])=>{const b=document.createElement("button");b.className="choice";b.textContent=label;b.onclick=()=>choose(label,send,effect);$("#choices").appendChild(b)});
 $("#taskCard").classList.remove("hidden");
}
function choose(label,send,effect){
 $("#taskCard").classList.add("hidden");
 typeSend(state.channel,send,()=>{
   addOutbound(state.channel,send);
   renderHistory();
   state.scores+=effect==="silent"?0:1;
   nextAfterChoice(effect);
 });
}
function typeSend(ch,text,done){
 const target=ch==="email"?$("#mailThread"):ch==="whatsapp"?$("#waBody"):$("#slackChat");
 const ghost=document.createElement("div");ghost.className=ch==="email"?"mail-msg sent":ch==="whatsapp"?"bubble you":"slack-msg you";
 ghost.innerHTML=ch==="email"?`<div class="mail-meta"><b>You</b><span>Sending…</span></div><div class="body"></div>`:ch==="whatsapp"?`<span></span><small>Sending…</small>`:`<div class="who">You <span>Sending…</span></div><div class="text"></div>`;
 target.appendChild(ghost);target.scrollTop=target.scrollHeight;
 const el=ghost.querySelector(ch==="email"?".body":ch==="whatsapp"?"span":".text");
 let i=0;const timer=setInterval(()=>{el.textContent=text.slice(0,i++);if(i>text.length){clearInterval(timer);setTimeout(()=>{ghost.remove();renderHistory();done()},180)}},Math.min(18,500/Math.max(text.length,1)));
}
function nextAfterChoice(effect){
 state.step++;
 if(state.step>=experiences[state.expIndex].scenes.length){finish();return}
 const next=experiences[state.expIndex].scenes[state.step];
 const prev=state.channel;
 setTimeout(()=>{
   showNotice(next.ch,next.inbound);
 },effect==="silent"?500:900);
}
function showNotice(ch,msg){
 state.waiting={ch,msg}; highlight(ch);
 const names={email:"MAIL",whatsapp:"WHATSAPP",slack:"SLACK"};
 $("#noticeApp").textContent=names[ch];$("#noticeTitle").textContent=msg.subject||msg.from;$("#noticeBody").textContent=msg.body.slice(0,100)+(msg.body.length>100?"…":"");
 $("#notice").classList.remove("hidden");
}
$("#noticeOpen").onclick=()=>{const w=state.waiting;$("#notice").classList.add("hidden");state.channel=w.ch;clearHighlight();showScene()};
function highlight(ch){
 document.querySelectorAll(".rail-btn").forEach(b=>b.classList.toggle("attention",b.dataset.channel===ch));
 document.querySelectorAll(".channel").forEach(c=>c.classList.remove("attention"));
 $("#"+ch).classList.add("attention");
}
function clearHighlight(){document.querySelectorAll(".rail-btn,.channel").forEach(x=>x.classList.remove("attention"))}
document.querySelectorAll(".rail-btn").forEach(b=>b.onclick=()=>{state.channel=b.dataset.channel;renderHistory()});
function updateClock(){const mins=state.step*37+4;const h=10+Math.floor(mins/60);const m=mins%60;$("#clock").textContent=`${h>12?h-12:h}:${String(m).padStart(2,"0")} ${h>=12?"PM":"AM"}`}
function finish(){
 $("#experience").classList.add("hidden");$("#ending").classList.remove("hidden");
 $("#endTitle").textContent=state.role==="client"?"You survived being the client.":"You survived being the agency.";
 const lines=state.role==="client"?["Brief changes survived: "+state.scores,"Tiny thoughts deployed: "+Math.max(1,state.scores-2),"Agency patience remaining: "+Math.max(12,100-state.scores*9)+"%"]:["Briefs interpreted: "+state.scores,"Feedback rounds survived: "+Math.max(1,state.scores-1),"Agency patience remaining: "+Math.max(8,94-state.scores*10)+"%"];
 $("#score").innerHTML=lines.map(x=>`<div>${esc(x)}</div>`).join("");$("#endCopy").textContent="You now know what the other side feels like. Maybe tomorrow's feedback will be slightly kinder.";
}
$("#againBtn").onclick=()=>{state.expIndex=(state.expIndex+1)%experiences.length;$("#ending").classList.add("hidden");$("#reveal").classList.remove("hidden");$("#role-title").textContent=roleText[state.side][0];$("#role-sub").textContent=roleText[state.side][1]};
$("#switchBtn").onclick=()=>{state.side=state.side==="agency"?"client":"agency";start(state.side)};
