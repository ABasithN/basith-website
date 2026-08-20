const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let scenarios, side=null, role=null, scenario=null, step=0, pending=null, history={mail:[],wa:[],teams:{}};

async function boot(){scenarios=await fetch('scenarios.json').then(r=>r.json());}
function show(id){['landing','reveal','situations','experience','modal'].forEach(x=>$('#'+x).classList.toggle('hidden',x!==id));}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function app(ch){$$('.app').forEach(x=>x.classList.toggle('active',x.id===ch));$$('[data-app]').forEach(x=>x.classList.toggle('active',x.dataset.app===ch));}
function addMail(text,you=false){history.mail.push({text,you});renderMail();}
function renderMail(){$('#mailThread').innerHTML=history.mail.map(m=>`<div class="mailmsg ${m.you?'you':''}"><div class="meta">${m.you?'You':role==='client'?'Agency':'Client'} · just now</div>${esc(m.text)}</div>`).join('');let el=$('#mailThread');el.scrollTop=el.scrollHeight;}
function addWA(text,you=false){history.wa.push({text,you});$('#waBody').innerHTML=history.wa.map(m=>`<div class="bubble ${m.you?'you':''}">${esc(m.text)}</div>`).join('');$('#waBody').scrollTop=999999;}
function addTeams(posts){const room=side==='agency'?'#marketing':'#creative';history.teams[room]=(history.teams[room]||[]).concat(posts.map(p=>({name:p[0],text:p[1]})));renderTeams(room);}
function addTeamYou(text){const room=side==='agency'?'#marketing':'#creative';history.teams[room]=(history.teams[room]||[]).concat([{name:'You',text}]);renderTeams(room);}
function renderTeams(room){$('#teamTitle').textContent=room;$('#teamBody').innerHTML=(history.teams[room]||[]).map(p=>`<div class="teampost ${p.name==='You'?'you':''}"><b>${esc(p.name)}</b><div>${esc(p.text)}</div></div>`).join('');}
function renderRooms(){let rooms=side==='agency'?['#marketing','#brand','#product','#leadership','#social','#general']:['#creative','#account','#strategy','#production','#leadership','#random'];$('#rooms').innerHTML=rooms.map(r=>`<div>${r}</div>`).join('');$('#org').textContent=side==='agency'?'YOUR COMPANY':'YOUR AGENCY';}
function typing(ch,text){let el=ch==='mail'?$('#mailTyping'):ch==='wa'?$('#waComposer'):$('#teamComposer');el.classList.remove('hidden');el.textContent=ch==='mail'?'Replying…':text;}
function send(ch,text){return new Promise(res=>{typing(ch,text);setTimeout(()=>{if(ch==='mail'){addMail(text,true);$('#mailTyping').classList.add('hidden')}else if(ch==='wa'){addWA(text,true);$('#waComposer').textContent='Message'}else{addTeamYou(text);$('#teamComposer').textContent='Start a post'}res()},700)})}
function incoming(st){app(st[0]); if(st[0]==='mail'){addMail(st[1])} else if(st[0]==='wa'){addWA(st[1])} else {addTeams(st[2]||[['System',st[1]]])}}
function notify(st,after){const names={mail:'MAIL',wa:'WHATSUP',teams:'MYCORESOFT TEAMS'};$('#attentionApp').textContent=names[st[0]];$('#attentionText').textContent=st[0]==='mail'?'A new email just came in.':st[0]==='wa'?'New message on WhatisUp.':'Someone posted in your Teams.';$('#attention').classList.remove('hidden');pending=()=>{incoming(st);after()};}
function decision(st){$('#decisionText').textContent=st[2]||st[3];let choices=st[3]||st[2];$('#choices').innerHTML=choices.map((x,i)=>`<button class="choice" data-i="${i}">${esc(x)}</button>`).join('');$('#decision').classList.remove('hidden');}
async function choose(i){let st=scenario.steps[step];let choices=st[3]||st[2], text=choices[i];$('#decision').classList.add('hidden');await send(st[0],text);step++;if(step<scenario.steps.length){setTimeout(()=>notify(scenario.steps[step],()=>decision(scenario.steps[step])),1100)}else{setTimeout(finish,1200)}}
function finish(){alert('Workday complete. No winners. Just fewer emails. Choose another experience from Escape Back.');$('#decision').classList.add('hidden');}
function start(sc){scenario=sc;step=0;history={mail:[],wa:[],teams:{}};$('#scenarioName').textContent=sc.title.toUpperCase();$('#mailSubject').textContent=sc.subject;$('#waTitle').textContent='Current agency';renderRooms();app('mail');show('experience');setTimeout(()=>notify(sc.steps[0],()=>decision(sc.steps[0])),500);}
function renderCards(){let arr=scenarios[side];$('#cards').innerHTML=arr.map((s,i)=>`<button class="scenario" data-id="${s.id}"><em>0${i+1}</em><h3>${s.title}</h3><p>${s.desc}</p></button>`).join('');}
$$('[data-side]').forEach(b=>b.onclick=()=>{side=b.dataset.side;role=side==='agency'?'client':'agency';$('#revealTitle').textContent=role==='client'?"Well, you're the client now.":"Well, you're the agency now.";$('#revealCopy').textContent=role==='client'?'Try not to make it personal.':'Good luck with the brief.';show('reveal')});
$('#enter').onclick=()=>{renderCards();show('situations')};
$('#cards').onclick=e=>{let b=e.target.closest('[data-id]');if(b)start(scenarios[side].find(s=>s.id===b.dataset.id));};
$('#openAttention').onclick=()=>{let f=pending;pending=null;$('#attention').classList.add('hidden');if(f)f();};
$('#choices').onclick=e=>{let b=e.target.closest('.choice');if(b)choose(+b.dataset.i)};
$$('[data-app]').forEach(b=>b.onclick=()=>app(b.dataset.app));
$$('[data-home]').forEach(b=>b.onclick=()=>show('landing'));
$('#escape').onclick=()=>$('#modal').classList.remove('hidden');
$('#stay').onclick=()=>$('#modal').classList.add('hidden');
$('#confirm').onclick=()=>{$('#modal').classList.add('hidden');show('landing')};
boot();