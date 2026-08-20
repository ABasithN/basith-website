const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let scenarios = null;
let side = null;
let scenario = null;
let step = 0;
let pending = null;
let history = {mail: [], wa: [], teams: []};
const names = {mail:'MAIL', wa:'WHATISUP', teams:'MYCORESOFT TEAMS'};
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function reset(){
  scenario = null; step = 0; pending = null;
  history = {mail:[], wa:[], teams:[]};
  ['attention','decision','modal'].forEach(id => $('#'+id)?.classList.add('hidden'));
}
function hideAll(){
  $('#landing')?.classList.add('hidden');
  $('#reveal')?.classList.add('hidden');
  $('#situations')?.classList.add('hidden');
  $('#experience')?.classList.add('hidden');
  $('#end')?.classList.add('hidden');
}
function show(id){hideAll(); $('#'+id)?.classList.remove('hidden');}
function app(c){
  $$('.app').forEach(x=>x.classList.toggle('active',x.id===c));
  $$('[data-app]').forEach(x=>x.classList.toggle('active',x.dataset.app===c));
}
function render(){
  $('#mailThread').innerHTML = [...history.mail].reverse().map(m=>`<div class="mailmsg ${m.you?'you':''}"><div class="meta">${m.you?'YOU':side==='client'?'AGENCY':'CLIENT'}</div>${esc(m.text)}</div>`).join('');
  $('#waBody').innerHTML = history.wa.map(m=>`<div class="bubble ${m.you?'you':''}">${esc(m.text)}</div>`).join('');
  $('#teamBody').innerHTML = history.teams.map(m=>`<div class="teampost ${m.you?'you':''}"><b>${esc(m.name)}</b><div>${esc(m.text)}</div></div>`).join('');
  ['mailThread','waBody','teamBody'].forEach(id=>{const el=$('#'+id); if(el) el.scrollTop=el.scrollHeight;});
}
function incoming(s){
  app(s[0]);
  if(s[0]==='mail') history.mail.push({text:s[1]});
  else if(s[0]==='wa') history.wa.push({text:s[1]});
  else (s[2]||[]).forEach(p=>history.teams.push({name:p[0],text:p[1]}));
  render();
}
function detailedReply(choice, index){
  const c = choice.replace(/^\s+|\s+$/g,'');
  const clientReplies = [
    `Thanks. I think that is the direction I want to take. ${c} I don't want this to become another round of generic feedback, so please use that as the steer and come back with a recommendation that helps us make the decision.`,
    `Let me be a little more specific than the original note. ${c} We're still working through some of this internally, but this is the strongest direction I can give you right now. Please build from it rather than waiting for a perfect brief.`,
    `I know that is not the most beautifully formed brief. ${c} But that is honestly where we are internally. Use your experience to challenge the thinking if you need to, and show me what you think the brand should be doing.`
  ];
  const agencyReplies = [
    `Understood. ${c} We'll use that as the working direction, but we'll also keep an eye on the underlying business problem so the work doesn't become a literal translation of the feedback.`,
    `I'll take that route. ${c} I'll make sure account, strategy and creative are aligned on what this means before we create another round. If there is a trade-off, we'll flag it rather than quietly absorbing it.`,
    `That's the direction I'd recommend too. ${c} We'll be clear about what it changes, what it protects and where we think you should push further. We'd rather bring you a point of view than another menu of safe options.`
  ];
  return (side==='client'?clientReplies:agencyReplies)[index] || (side==='client'?clientReplies[0]:agencyReplies[0]);
}
function replyReaction(choice,index){
  const reactions = side==='client' ? [
    'The agency replies: “That gives us something useful to work with. We can build from there.”',
    'The agency replies: “Fair. We will work with the uncertainty rather than pretending the brief is clearer than it is.”',
    'The agency replies: “Okay. Then let us bring you a point of view instead of waiting for a perfect brief.”'
  ] : [
    'The client replies: “Okay. That is a clearer way of putting it. I can take that internally.”',
    'The client replies: “That makes sense. I would rather see a strong recommendation than ten options.”',
    'The client replies: “Fair. Just make sure the recommendation is something I can defend internally.”'
  ];
  return reactions[index] || reactions[0];
}
function typeAndSend(c,text){
  return new Promise(resolve=>{
    const el = c==='mail'?$('#mailTyping'):c==='wa'?$('#waComposer'):$('#teamComposer');
    if(el){el.classList.remove('hidden'); el.textContent=`Typing: ${text}`;}
    setTimeout(()=>{
      if(c==='mail') history.mail.push({text,you:true});
      else if(c==='wa') history.wa.push({text,you:true});
      else history.teams.push({name:'YOU',text,you:true});
      render();
      if(el){el.textContent=c==='mail'?'':c==='wa'?'Message':'Start a post'; if(c!=='mail') el.classList.remove('hidden');}
      resolve();
    },1100);
  });
}
function notify(s, after){
  app(s[0]);
  $('#attentionApp').textContent=names[s[0]];
  $('#attentionText').textContent=s[0]==='mail'?'A new email just arrived.':s[0]==='wa'?'A new message on WhatisUp.':'Someone posted in Teams.';
  $('#attention').classList.remove('hidden');
  pending=()=>{incoming(s); after();};
}
function decide(s){
  $('#decisionText').textContent=s[2];
  $('#choices').innerHTML=s[3].map((x,i)=>`<button type="button" class="choice" data-i="${i}">${esc(x)}</button>`).join('');
  $('#decision').classList.remove('hidden');
}
async function choose(i){
  const s=scenario.steps[step];
  $('#decision').classList.add('hidden');
  const choice=s[3][i];
  const reply=detailedReply(choice,i);
  await typeAndSend(s[0],reply);
  if(step<scenario.steps.length-1){
    const next=scenario.steps[++step];
    const nextMessage = `${next[1]}\n\n${replyReaction(choice,i)}`;
    const decorated=[next[0],nextMessage,next[2],next[3],next[4]];
    setTimeout(()=>notify(decorated,()=>decide(decorated)),1200);
  } else {
    setTimeout(()=>finish(),1500);
  }
}
function finish(){
  $('#endTitle').textContent=scenario.end || 'You made it through.';
  $('#endCopy').textContent='That was one way of handling it. There are several others.';
  $('#end').classList.remove('hidden');
  setTimeout(()=>{
    reset();
    renderJourneys();
    show('situations');
  },2600);
}
function renderJourneys(){
  $('#roleLabel').textContent=side==='client'?'CLIENT':'AGENCY';
  $('#cards').innerHTML=scenarios[side].map((s,i)=>`<button type="button" class="scenario" data-id="${esc(s.id)}"><em>0${i+1}</em><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></button>`).join('');
}
function start(sc){
  reset(); scenario=sc;
  $('#persistentRole').textContent=side==='client'?'CLIENT':'AGENCY';
  $('#scenarioName').textContent=sc.title.toUpperCase();
  $('#mailSubject').textContent=sc.subject;
  $('#mailSub').textContent=side==='client'?'AGENCY':'CLIENT';
  $('#waTitle').textContent=side==='client'?'Current agency':'Account team';
  $('#org').textContent=side==='client'?'YOUR WORKPLACE':'YOUR AGENCY';
  $('#rooms').innerHTML=(side==='client'?['#marketing','#brand','#leadership','#creative','#random']:['#account','#creative','#strategy','#production','#leadership','#random']).map(x=>`<div>${x}</div>`).join('');
  app('mail'); show('experience');
  setTimeout(()=>notify(sc.steps[0],()=>decide(sc.steps[0])),650);
}
function home(){reset();show('landing');}

document.addEventListener('click',e=>{
  const role=e.target.closest('[data-side]');
  if(role){
    side=role.dataset.side; reset();
    $('#revealTitle').textContent=side==='agency'?"Well, you're the client now.":"Well, you're the agency now.";
    $('#revealCopy').textContent=side==='agency'?'Try not to make it personal.':'Good luck with the brief.';
    $('#revealRole').textContent=side==='agency'?'CLIENT':'AGENCY';
    show('reveal'); return;
  }
  if(e.target.closest('#enter')){renderJourneys();show('situations');return;}
  const card=e.target.closest('#cards [data-id]');
  if(card){start(scenarios[side].find(s=>s.id===card.dataset.id));return;}
  const choice=e.target.closest('.choice');
  if(choice){choose(Number(choice.dataset.i));return;}
  const ap=e.target.closest('[data-app]');
  if(ap){app(ap.dataset.app);return;}
  if(e.target.closest('#openAttention')){const f=pending;pending=null;$('#attention').classList.add('hidden');if(f)f();return;}
  if(e.target.closest('[data-home]')||e.target.closest('#confirm')){home();return;}
  if(e.target.closest('#escape')){$('#modal').classList.remove('hidden');return;}
  if(e.target.closest('#stay')){$('#modal').classList.add('hidden');return;}
  if(e.target.closest('#another')){renderJourneys();show('situations');return;}
});

fetch('scenarios.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(`scenarios.json ${r.status}`);return r.json();}).then(x=>{scenarios=x;}).catch(err=>{console.error(err);const p=$('.hero p');if(p)p.textContent='The experience could not load its scenarios. Please refresh.';});
