/* 4EV upgrade. Load AFTER analytics.js:  <script src="analytics.js"></script><script src="upgrade.js"></script> */
(()=>{
const DISCORD="vinniewashere",DISCORD_ID=""; /* paste your numeric Discord user ID in DISCORD_ID for a direct DM link */
const E=el,H=h=>{const d=E("div");d.innerHTML=h.trim();return d.firstChild},
ls=(k,v)=>{try{if(v===undefined)return localStorage.getItem(k);v===null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){return null}},
RT=document.documentElement,dm=DISCORD_ID?"https://discord.com/users/"+DISCORD_ID:"https://discord.com/app";
const prefs=()=>{RT.dataset.theme=ls("4ev_theme")||"aurora";RT.classList.toggle("calm",ls("4ev_calm")==="1");RT.classList.toggle("compact",ls("4ev_compact")==="1")};prefs();

/* ---------- styles ---------- */
const lk=document.createElement("link");lk.rel="stylesheet";lk.href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&display=swap";document.head.append(lk);
const st=document.createElement("style");st.textContent=`
:root{--g1:#22d3ee;--g2:#8b5cf6;--g3:#ec4899;--n1:rgba(124,58,237,.42);--n2:rgba(34,211,238,.28);--n3:rgba(236,72,153,.32);--mono:"JetBrains Mono",ui-monospace,Menlo,monospace}
html[data-theme=ember]{--gold:#ff7a45;--gold-hi:#ffb08a;--gold-lo:#c2410c;--g1:#fbbf24;--g2:#ff7a45;--g3:#ef4444;--n1:rgba(234,88,12,.4);--n2:rgba(251,191,36,.24);--n3:rgba(239,68,68,.3)}
html[data-theme=matrix]{--gold:#22c55e;--gold-hi:#86efac;--gold-lo:#15803d;--g1:#4ade80;--g2:#22d3ee;--g3:#a3e635;--n1:rgba(22,163,74,.36);--n2:rgba(34,211,238,.24);--n3:rgba(132,204,22,.26)}
html[data-theme=royal]{--gold:#f5b942;--gold-hi:#ffe08a;--gold-lo:#b8860b;--g1:#ffe08a;--g2:#f5b942;--g3:#e08a1e;--n1:rgba(245,185,66,.28);--n2:rgba(255,224,138,.14);--n3:rgba(224,138,30,.24)}
html[data-theme=royal] .btn{color:#1a1403}
body{padding-top:0}body::before{background:radial-gradient(40% 40% at 20% 30%,var(--n1),transparent 70%),radial-gradient(35% 35% at 80% 20%,var(--n2),transparent 70%),radial-gradient(45% 45% at 60% 85%,var(--n3),transparent 70%)}
html.calm #fx,html.calm body::before,html.calm #spot{display:none!important}
.il span,.hero h1{background-image:linear-gradient(90deg,var(--g1),var(--g2),var(--g3),var(--g1))}
.is,.tag,.sec h2{background-image:linear-gradient(90deg,var(--g1),var(--g3))}
.btn{background-image:linear-gradient(120deg,var(--g1),var(--g2),var(--g3))}.btn.ghost{background-image:none}.btn.dg{background-image:linear-gradient(120deg,#ef4444,#b91c1c);color:#fff}
.card{background:rgba(10,8,24,.78);border:1px solid var(--line);border-radius:18px;padding:22px;transition:border-color .25s,transform .25s}
.card:hover{border-color:rgba(139,92,246,.45)}
input,select,textarea{font-size:16px}textarea{width:100%;background:#000;border:1px solid var(--line);border-radius:10px;padding:11px 12px;color:var(--text);font:inherit;font-size:16px;resize:vertical}
section[id]{scroll-margin-top:76px}
.eb{display:block;text-align:center;font:700 12px var(--mono);letter-spacing:.24em;text-transform:uppercase;color:var(--gold-hi);margin-bottom:14px}
.wrap{padding:110px 22px}.sec h2{margin-bottom:14px}.lead{margin-bottom:56px;font-size:16px}
.tl{display:flex;gap:26px}.tl a{color:var(--mute);text-decoration:none;font:700 12px var(--mono);letter-spacing:.1em;text-transform:uppercase}.tl a:hover{color:var(--gold-hi)}
.feats{gap:1px;background:var(--line);border:1px solid var(--line);border-radius:20px;overflow:hidden}.feats .card{border:0;border-radius:0;background:#07060f;padding:30px}.feats .card:hover{background:#0c0a1c}
.term{border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#05040d;max-width:860px;margin:22px auto 0}.term .th{display:flex;gap:7px;align-items:center;padding:13px 16px;border-bottom:1px solid var(--line);font:600 12px var(--mono);color:var(--mute)}.term .th i{width:11px;height:11px;border-radius:50%;background:#2a2252}
.term .tbd{padding:22px;display:flex;flex-wrap:wrap;gap:10px}.term code{font:500 14px var(--mono);color:#d8d3ff;background:rgba(139,92,246,.12);border:1px solid rgba(139,92,246,.28);border-radius:8px;padding:7px 12px}.tabs{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.ladder{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}.ladder .card{text-align:center;padding:22px 14px;border-color:rgba(139,92,246,calc(.12 + var(--i)*.5))}.ladder b{display:block;font:700 22px var(--head);color:var(--gold-hi)}.ladder .meta{font:500 12px var(--mono)}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}.steps .n{font:700 64px/1 var(--head);color:transparent;-webkit-text-stroke:1px var(--gold);opacity:.7}
.fq{border:1px solid var(--line);border-radius:14px;background:rgba(10,8,24,.78);margin:0 0 10px;padding:0 20px}.fq summary{cursor:pointer;padding:16px 0;font-weight:700;list-style:none;display:flex;justify-content:space-between;gap:12px}.fq summary::after{content:"+";color:var(--gold-hi);font:700 20px var(--mono)}.fq[open] summary::after{content:"–"}.fq p{margin:0 0 16px;color:var(--mute)}
.dmc{display:flex;gap:18px;align-items:center;flex-wrap:wrap;max-width:640px;margin:0 auto}.dmc .ava{width:68px;height:68px;border-radius:50%;display:grid;place-items:center;font:700 32px var(--head);background:linear-gradient(135deg,var(--g1),var(--g2),var(--g3));color:#fff;flex:none}
footer{padding:60px 20px 80px}footer .fl{display:flex;gap:22px;justify-content:center;flex-wrap:wrap;margin-top:14px;font:700 12px var(--mono);letter-spacing:.1em;text-transform:uppercase}footer a{color:var(--mute);text-decoration:none}footer a:hover{color:var(--gold-hi)}
/* app shell */
#app{grid-template-columns:268px 1fr;min-height:100dvh}
nav{height:100dvh;padding:18px 14px;gap:3px;background:rgba(6,5,16,.86);backdrop-filter:blur(16px);overflow-y:auto}
nav .bn{font-size:34px;padding:0 10px 4px}.ng{font:700 11px var(--mono);letter-spacing:.22em;text-transform:uppercase;color:#6f6b99;padding:20px 12px 6px}
.nb{border-radius:12px;font-weight:600}.nb.on{background:linear-gradient(90deg,rgba(139,92,246,.2),transparent);border-color:transparent;box-shadow:inset 3px 0 0 var(--gold)}
.uc{display:flex;gap:10px;align-items:center;padding:12px;border:1px solid var(--line);border-radius:14px;margin:10px 0 6px;min-width:0}.uc>div{min-width:0}.uc .meta{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uc b{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px}
.uca{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font:700 18px var(--head);background:linear-gradient(135deg,var(--g1),var(--g2));color:#fff;flex:none}
nav .lo:hover{color:var(--bad);border-color:rgba(248,113,113,.4)}
main{padding:0 40px 90px;max-width:1400px!important;margin:0 auto;width:100%}
.tb{position:sticky;top:0;z-index:20;display:flex;align-items:center;gap:12px;padding:calc(16px + env(safe-area-inset-top,0px)) 0 16px;margin-bottom:26px;backdrop-filter:blur(14px);background:linear-gradient(rgba(3,2,10,.88),rgba(3,2,10,.6));border-bottom:1px solid rgba(139,92,246,.14)}.tb .sp2{flex:1}
.ph{font-size:clamp(36px,5vw,52px);margin-bottom:6px}.lead2{margin:0 0 28px;max-width:660px;font-size:16px}
#view>*{margin-bottom:6px}.grid{gap:18px}.note{padding:16px 20px;margin:20px 0}td,th{padding:14px}
.kp,.g2{gap:18px!important}.chip.on{color:#fff}
.set{display:grid;grid-template-columns:190px 1fr;gap:34px;align-items:start}.idx{position:sticky;top:96px;display:flex;flex-direction:column;gap:4px}.idx button{background:none;border:0;border-left:2px solid var(--line);text-align:left;padding:8px 14px;color:var(--mute);cursor:pointer;font-weight:600}.idx button:hover{color:var(--gold-hi);border-color:var(--gold)}
.col{display:grid;gap:22px}.col .card{scroll-margin-top:96px}.col h3.h{font-size:26px;color:var(--gold-hi);margin-bottom:2px}
.sr{display:grid;grid-template-columns:1fr auto;gap:8px 16px;padding:18px 0;border-bottom:1px solid var(--line);align-items:center}.sr:last-of-type{border:0}.sr input[type=range]{grid-column:1/-1;margin:0}.vn{width:92px;text-align:right;font:700 18px var(--mono)}
.sr2{display:flex;justify-content:space-between;gap:16px;align-items:center;padding:16px 0;border-bottom:1px solid var(--line)}.sr2:last-child{border:0}
.sw{position:relative;width:48px;height:27px;border-radius:99px;background:#1b1736;border:1px solid var(--line);cursor:pointer;flex:none;transition:.25s;padding:0}.sw::after{content:"";position:absolute;top:2px;left:2px;width:21px;height:21px;border-radius:50%;background:#9a97b8;transition:.25s}.sw.on{background:linear-gradient(90deg,var(--g1),var(--g2));border-color:transparent}.sw.on::after{left:23px;background:#fff}
.seg{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.pv{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-top:16px}.pv div{border:1px solid var(--line);border-radius:12px;padding:12px 14px}.pv b{display:block;font:700 24px var(--head);color:var(--gold-hi)}
.themes{display:flex;gap:12px;flex-wrap:wrap;margin:12px 0 6px}.themes button{width:92px;border:2px solid var(--line);border-radius:14px;background:#080614;color:var(--text);padding:8px;cursor:pointer;font-weight:600;font-size:12px}.themes button i{display:block;height:28px;border-radius:8px;margin-bottom:6px}.themes button.on{border-color:var(--gold);box-shadow:0 0 18px rgba(139,92,246,.35)}
.sbar{position:fixed;left:50%;bottom:24px;transform:translate(-50%,160px);z-index:70;display:flex;gap:12px;align-items:center;padding:12px 14px 12px 22px;border:1px solid var(--gold-lo);border-radius:16px;background:rgba(10,8,26,.94);backdrop-filter:blur(14px);box-shadow:0 10px 50px rgba(0,0,0,.6);transition:transform .4s cubic-bezier(.2,.8,.2,1);max-width:calc(100vw - 24px)}.sbar.show{transform:translate(-50%,0)}
.btn.dg2{background:none;border:1px solid rgba(248,113,113,.5);color:#fca5a5}
#toasts{position:fixed;right:18px;bottom:18px;z-index:200;display:grid;gap:8px}.toast{background:#0b0919;border:1px solid var(--gold-lo);border-left:4px solid var(--ok);padding:12px 16px;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,.5);animation:up .35s both;transition:opacity .4s;max-width:320px}.toast.bad{border-left-color:var(--bad)}
.pal{align-items:start;padding-top:12vh}.pal .mcard{max-width:520px;padding:14px}.pal input{margin-bottom:8px}.pal .it{display:flex;gap:12px;padding:11px 12px;border-radius:10px;cursor:pointer;align-items:center}.pal .it.on,.pal .it:hover{background:rgba(139,92,246,.18)}
kbd{font:700 11px var(--mono);border:1px solid var(--line);border-radius:6px;padding:2px 7px;color:var(--mute)}
@media(hover:none){.btn{transform:none!important}#spot{display:none!important}}
@media(max-width:900px){.set{grid-template-columns:1fr}.idx{position:static;flex-direction:row;overflow-x:auto}.idx button{border-left:0;border-bottom:2px solid var(--line);white-space:nowrap}}
@media(max-width:800px){.wrap{padding:76px 18px}#app{padding-bottom:calc(78px + env(safe-area-inset-bottom,0px))}
nav{height:auto;flex-direction:row;overflow-x:auto;overflow-y:hidden;justify-content:flex-start!important;padding:6px 6px calc(6px + env(safe-area-inset-bottom,0px));gap:2px;scrollbar-width:none}nav::-webkit-scrollbar{display:none}
.nb{flex:0 0 64px!important;flex-direction:column;gap:2px;padding:6px 0!important;min-height:54px;justify-content:center;font-size:19px!important}.nb .lbl{display:block!important;font-size:10px;font-weight:600}.nb.on{box-shadow:inset 0 3px 0 var(--gold);background:rgba(139,92,246,.12)}.ng,.uc,nav .sp{display:none!important}
main{padding:0 16px 40px}.tb .gr .meta{display:none}.sbar{bottom:calc(86px + env(safe-area-inset-bottom,0px))}.toast{max-width:260px}#toasts{bottom:calc(86px + env(safe-area-inset-bottom,0px))}}`;
document.head.append(st);

/* ---------- helpers ---------- */
function toast(t,bad){let c=$("#toasts");if(!c){c=E("div",{id:"toasts"});document.body.append(c)}const n=E("div",{class:"toast"+(bad?" bad":"")},t);c.append(n);setTimeout(()=>{n.style.opacity=0;setTimeout(()=>n.remove(),400)},3400)}
async function copy(t,m){try{await navigator.clipboard.writeText(t);toast(m||"Copied")}catch(e){prompt("Copy this:",t)}}
function overlay(cls){const m=E("div",{class:"modal "+(cls||""),role:"dialog"}),close=()=>{m.remove();removeEventListener("keydown",kd)},kd=e=>{if(e.key==="Escape")close()};addEventListener("keydown",kd);m.onclick=e=>{if(e.target===m)close()};document.body.append(m);m.close=close;return m}
function ask(title,body,okText,onOk,danger){const m=overlay(),no=E("button",{class:"btn ghost",type:"button",style:"flex:1"},"Cancel"),ok=E("button",{class:"btn"+(danger?" dg":""),type:"button",style:"flex:1"},okText);
 no.onclick=m.close;ok.onclick=async()=>{ok.disabled=true;await onOk();m.close()};
 m.append(E("div",{class:"mcard"},E("h2",{style:"font-size:30px;color:var(--gold-hi)"},title),E("p",{style:"color:var(--mute);margin:10px 0 24px"},body),E("div",{style:"display:flex;gap:10px"},no,ok)));no.focus()}
const out=all=>ask(all?"Sign out everywhere?":"Sign out?",all?"This signs you out on every device and browser. You'll need your email and password to get back in.":"You'll leave the control room and need your email and password to come back.",all?"Sign out everywhere":"Sign out",async()=>{user=null;try{await sb.auth.signOut(all?{scope:"global"}:undefined)}catch(e){}$("#pw").value="";labels();cleanup();show("site");toast("Signed out")},1);

/* ---------- login fixes ---------- */
$("#lf").onsubmit=async e=>{e.preventDefault();const b=$("#lf button[type=submit]"),le=$("#le");le.textContent="";b.disabled=true;b.textContent="Signing in...";
 try{const{data,error}=await sb.auth.signInWithPassword({email:$("#em").value.trim(),password:$("#pw").value});
  if(error)le.textContent=error.status===429?"Too many attempts. Wait a minute and try again.":/invalid|credentials/i.test(error.message)?"Wrong email or password.":error.message;else await enter(data.session,true)}
 catch(x){le.textContent="Can't reach the server. Check your connection."}b.disabled=false;b.textContent="Sign in"};
const sh=E("button",{type:"button",class:"btn ghost sm",style:"margin-top:8px;width:100%"},"Show password");sh.onclick=()=>{const p=$("#pw"),v=p.type==="password";p.type=v?"text":"password";sh.textContent=v?"Hide password":"Show password"};$("#pw").after(sh);
$("#lm").addEventListener("click",e=>{if(e.target.id==="lm")$("#lm").classList.add("hidden")});addEventListener("keydown",e=>{if(e.key==="Escape")$("#lm").classList.add("hidden")});

/* ---------- small bug fixes ---------- */
if(innerWidth<800&&ST.length>140)ST.length=140;
try{if(sessionStorage.getItem("4ev_seen")||ls("4ev_skipintro")==="1")endIntro();else sessionStorage.setItem("4ev_seen","1")}catch(e){}
sb.auth.onAuthStateChange((ev,s)=>{setUc(s);if(ev==="SIGNED_OUT"&&user){user=null;labels();cleanup();show("site");toast("Your session ended. Please sign in again.",1)}});

/* ---------- landing page ---------- */
const sec=(id,eb,title,lead,...body)=>{const s=E("section",{class:"wrap sec",id},E("span",{class:"eb rv"},eb),E("h2",{class:"rv"},title),lead?E("p",{class:"lead rv"},lead):"",...body);s.querySelectorAll(".rv").forEach(n=>io.observe(n));return s};
const top=$(".top"),tl=E("nav",{class:"tl"},...[["Features","#features"],["Commands","#commands"],["Try it","#play"],["Ranks","#ranks"],["FAQ","#faq"],["Contact","#contact"]].map(x=>E("a",{href:x[1]},x[0])));top.insertBefore(tl,$("#ob"));
/* commands */
const tb2=E("div",{class:"tabs"}),tm=E("div",{class:"term rv"});
const showC=i=>{[...tb2.children].forEach((b,j)=>b.classList.toggle("on",i===j));tm.replaceChildren(E("div",{class:"th"},E("i"),E("i"),E("i"),E("span",{style:"margin-left:8px"},"4EV · "+CMDS[i][0])),E("div",{class:"tbd"},...CMDS[i][1].split(", ").map(t=>E("code",{},t))))};
CMDS.forEach((c,i)=>{const b=E("button",{class:"chip",type:"button"},c[0].replace(/ \(.*\)/,""));b.onclick=()=>showC(i);tb2.append(b)});showC(0);
$("#features").after(sec("commands","Commands","Everything is one slash away.","Pick a category to see every command the bot ships with.",tb2,tm));
/* ranks + steps + faq + contact */
const lad=E("div",{class:"ladder"},...[...TT].reverse().map((t,i,a)=>{const n=t[0],tot=n<=1?0:100*(n-1)+75*(n-1)*(n-2),c=E("div",{class:"card rv"},E("div",{class:"meta"},n?"LEVEL "+n+"+":"START"),E("b",{},t[1]),E("div",{class:"meta"},tot.toLocaleString()+" XP"));c.style.setProperty("--i",i/(a.length-1));return c}));
const stp=E("div",{class:"steps"},...[["01","Add the bot","Invite 4EV to your Discord server and set up the channels you want."],["02","Earn XP","Members chat, react and join voice. Weekends give 2x and staff can run events."],["03","Run the clan","Post wars and LFG sign-ups while tickets and protection work in the background."]].map(s=>E("div",{class:"card rv"},E("div",{class:"n"},s[0]),E("h3",{style:"margin-top:8px;color:var(--gold-hi)"},s[1]),E("p",{style:"color:var(--mute)"},s[2]))));
const fq=E("div",{style:"max-width:760px;margin:0 auto"},...[["Is the control room public?","No. The landing page is public, but the dashboard needs an owner account. Sign-ups are disabled."],["Does the AutoMod demo touch Discord?","No. It runs in your browser with the bot's default rules and sends nothing anywhere."],["How fast do dashboard settings apply?","The bot picks them up within about a minute."],["Are tickets and DMs saved?","No. Ticket channels and DMs are never collected by message sync."],["How do XP events work?","Weekends are 2x. Staff can also start x2 to x10 XP events, or set one from Settings."],["I found a bug or need help","Message "+DISCORD+" on Discord. The Support page in the dashboard can write the message for you."]].map(q=>H('<details class="fq rv"><summary>'+q[0]+"</summary><p>"+q[1]+"</p></details>")));
fq.querySelectorAll(".rv").forEach(n=>io.observe(n));
const dmCard=()=>E("div",{class:"card dmc rv"},E("div",{class:"ava"},DISCORD[0].toUpperCase()),E("div",{style:"flex:1;min-width:200px"},E("h3",{style:"font-size:28px;color:var(--gold-hi)"},DISCORD),E("p",{style:"color:var(--mute);margin:2px 0 0"},"Discord · bugs, ideas, clan questions")),
 E("div",{style:"display:flex;gap:10px;flex-wrap:wrap"},Object.assign(E("button",{class:"btn sm",type:"button"},"Copy username"),{onclick:()=>copy(DISCORD,"Copied "+DISCORD)}),E("a",{class:"btn ghost sm",href:dm,target:"_blank",rel:"noopener"},DISCORD_ID?"Open DM":"Open Discord")));
const ct=sec("contact","Contact","Talk to the owner.","Questions, bugs or ideas? Send a Discord DM.",dmCard());ct.querySelectorAll(".rv").forEach(n=>io.observe(n));
let a=$("#play");[sec("ranks","Rank up","Climb from Rookie to 4EV Immortal.","Real XP thresholds from the bot's level system.",lad),sec("how","How it works","Three steps.","",stp),sec("faq","FAQ","Quick answers.","",fq),ct].forEach(s=>{a.after(s);a=s});
$("footer").replaceChildren(E("b",{class:"brand"},"4EV"),E("div",{style:"margin-top:6px"},"Forever Victory · private clan control room"),E("div",{class:"fl"},...[["Features","#features"],["Commands","#commands"],["Ranks","#ranks"],["FAQ","#faq"],["Contact","#contact"]].map(x=>E("a",{href:x[1]},x[0]))),E("div",{class:"meta",style:"margin-top:18px"},"Discord: "+DISCORD));

/* ---------- app shell: grouped nav, user chip, top bar ---------- */
const nv=$("#nav"),sp=nv.querySelector(".sp"),B=k=>nv.querySelector('.nb[data-v="'+k+'"]');
async function goU(k){cur=k;cleanup();const m=$("#view");m.replaceChildren(E("p",{class:"lead2"},"Loading..."));try{m.replaceChildren(...await{support:vSupport}[k]())}catch(e){m.replaceChildren(E("p",{class:"err"},"Could not load: "+e.message))}scrollTo(0,0)}
const sbtn=E("button",{class:"nb","data-v":"support"},E("span",{},"💬"),E("span",{class:"lbl"},"Support"));sbtn.onclick=()=>{$$(".nb").forEach(x=>x.classList.toggle("on",x===sbtn));goU("support")};nv.insertBefore(sbtn,sp);
[["Monitor",["overview","activity","messages"]],["Community",["members","channels","pings"]],["Control",["settings","moderation","clan","commands","logs"]],["Help",["support"]]].forEach(([t,ks])=>{nv.insertBefore(E("div",{class:"ng"},t),sp);ks.forEach(k=>B(k)&&nv.insertBefore(B(k),sp))});
const uca=E("div",{class:"uca"},"?"),ucn=E("b",{},"Not signed in");function setUc(s){const e=s?s.user.email:"";ucn.textContent=e||"Not signed in";uca.textContent=(e[0]||"?").toUpperCase()}
lo.classList.add("lo");lo.onclick=()=>out(0);nv.insertBefore(E("div",{class:"uc"},uca,E("div",{},ucn,E("div",{class:"meta"},"Owner"))),lo);sb.auth.getSession().then(({data})=>setUc(data.session));
const g=new Date().getHours(),pillT=E("span",{},"Checking..."),pillD=E("span",{class:"dot"}),pill=E("span",{class:"pill"},pillD,pillT),jb=E("button",{class:"btn ghost sm",type:"button"},"Jump ",E("kbd",{style:"margin-left:8px"},"Ctrl K"));
$("main").insertBefore(E("div",{class:"tb"},E("div",{class:"gr"},E("b",{style:"font:700 24px var(--head)"},(g<5?"Late night":g<12?"Good morning":g<18?"Good afternoon":"Good evening")+" 👋"),E("div",{class:"meta"},new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"}))),E("div",{class:"sp2"}),pill,jb),$("#view"));
async function pt(){if($("#app").classList.contains("hidden"))return;try{const s=await status();pillD.className="dot"+(s.on?" on":"");pillT.textContent=s.on?"Bot online":"Bot offline"}catch(e){}}pt();setInterval(pt,30000);
/* command palette */
function pal(){if($(".pal")||$("#app").classList.contains("hidden"))return;const items=[...$$("#nav .nb[data-v]")].map(b=>({t:b.querySelector(".lbl").textContent,i:b.firstChild.textContent,f:()=>b.click()})).concat([{t:"Copy Discord username",i:"📋",f:()=>copy(DISCORD,"Copied "+DISCORD)},{t:"Sign out",i:"🚪",f:()=>out(0)},{t:"Back to public site",i:"🏠",f:()=>{cleanup();show("site")}}]);
 const m=overlay("pal"),q=E("input",{placeholder:"Jump to a page or action...",autocomplete:"off"}),l=E("div");let sel=0,cur2=items;
 const draw=()=>l.replaceChildren(...cur2.map((x,i)=>{const r=E("div",{class:"it"+(i===sel?" on":"")},E("span",{},x.i),x.t);r.onclick=()=>{m.close();x.f()};return r}));
 q.oninput=()=>{const s=q.value.toLowerCase();cur2=items.filter(x=>x.t.toLowerCase().includes(s));sel=0;draw()};
 q.onkeydown=e=>{if(e.key==="ArrowDown"){sel=Math.min(cur2.length-1,sel+1);draw();e.preventDefault()}else if(e.key==="ArrowUp"){sel=Math.max(0,sel-1);draw();e.preventDefault()}else if(e.key==="Enter"&&cur2[sel]){m.close();cur2[sel].f()}};
 m.append(E("div",{class:"mcard"},q,l));draw();q.focus()}
jb.onclick=pal;addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();pal()}else if(e.key==="/"&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();pal()}});

/* ---------- support page ---------- */
async function vSupport(){
 const topic=E("select",{},...["Bug or error","Feature idea","Settings help","Clan / bot question","Something else"].map(t=>E("option",{},t))),tx=E("textarea",{rows:"5",placeholder:"What's going on? Include the page and what you clicked."}),
 send=E("button",{class:"btn",type:"button"},"Copy message & open Discord");
 send.onclick=()=>{if(!tx.value.trim())return toast("Write a message first",1);copy("[4EV dashboard] "+topic.value+": "+tx.value.trim(),"Copied. Paste it into the DM.");open(dm,"_blank","noopener")};
 const faq=[["Settings didn't apply","The bot reads settings about once a minute. Check Overview: if the bot shows offline, restart it on Wispbyte."],["Messages page is empty","Turn on 'Save server messages' in Settings and make sure message sync shows Working on Overview."],["I can't sign in","Only the owner account works. Use Show password to check typos; after several wrong tries wait a minute."],["Where do I ban or kick people?","Use the /mod commands in Discord. The Moderation page is a placeholder until a command queue exists."]];
 return[...head("Support","Get help or reach the owner on Discord."),
 E("div",{class:"g2",style:"display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:18px"},
  E("div",{class:"card"},E("span",{class:"eb",style:"text-align:left"},"Discord"),dmCard(),E("p",{class:"meta",style:"margin-top:14px"},DISCORD_ID?"Open DM takes you straight to the conversation.":"Open Discord launches the app. Copy the username, then search it in Discord. (Add your numeric ID in upgrade.js for a one-tap DM link.)")),
  E("div",{class:"card"},E("span",{class:"eb",style:"text-align:left"},"Message composer"),E("label",{},"Topic"),topic,E("label",{},"Message"),tx,E("div",{style:"margin-top:14px"},send)),
  E("div",{class:"card"},E("span",{class:"eb",style:"text-align:left"},"Quick answers"),...faq.map(q=>H('<details class="fq"><summary>'+q[0]+"</summary><p>"+q[1]+"</p></details>"))),
  E("div",{class:"card"},E("span",{class:"eb",style:"text-align:left"},"Shortcuts"),E("table",{},...[["Jump to any page",["Ctrl","K"]],["Same, anywhere",["/"]],["Close dialogs",["Esc"]]].map(r=>E("tr",{},E("td",{},r[0]),E("td",{style:"text-align:right"},...r[1].map(k=>E("kbd",{style:"margin-left:4px"},k))))))))]}

/* ---------- settings ---------- */
const tot=n=>n<=1?0:100*(n-1)+75*(n-1)*(n-2),nf=n=>Math.ceil(n).toLocaleString();
const XD=[["Message XP · minimum","Lowest XP one chat message can earn",100],["Message XP · maximum","Highest XP one chat message can earn",100],["Reaction XP · minimum","Lowest XP for a reaction",50],["Reaction XP · maximum","Highest XP for a reaction",50],["Voice XP per minute · members","Earned each minute in voice chat",500],["Voice XP per minute · staff","Staff earn this each minute in voice",500]];
async function vSettings2(){
 const gt=async k=>{const{data,error}=await sb.from("bot_settings").select("value").eq("key",k).maybeSingle();if(error)throw error;return(data&&data.value)||{}},x0=await gt("xp"),m0=await gt("messages"),
 {data:rr}=await sb.from("dashboard_users").select("role").eq("user_id",user.id).maybeSingle();
 const X={xp_event:x0.xp_event??1},M={enabled:m0.enabled!==false,collect_bots:!!m0.collect_bots,retention_days:m0.retention_days??30};XP.forEach((a,i)=>X[a[0]]=x0[a[0]]??a[2]);
 let o=JSON.stringify([X,M]);const bar=E("div",{class:"sbar"}),pv=E("div",{class:"pv"}),er=E("div",{class:"err"}),bad=()=>X.message_xp_min>X.message_xp_max||X.reaction_xp_min>X.reaction_xp_max;
 const upd=()=>{const ev=X.xp_event||1,av=(X.message_xp_min+X.message_xp_max)/2*ev;
  pv.replaceChildren(...[["Avg XP / message",av.toFixed(1)],["Msgs to level 10",av?nf(tot(10)/av):"never"],["Msgs to level 25",av?nf(tot(25)/av):"never"],["1h of voice (member)",nf(X.vc_xp_normal*60*ev)+" XP"]].map(r=>E("div",{},E("div",{class:"meta"},r[0]),E("b",{},r[1]))));
  er.textContent=bad()?"A minimum can't be higher than its maximum.":"";bar.classList.toggle("show",JSON.stringify([X,M])!==o)};
 const rows=XD.map((d,i)=>{const k=XP[i][0],cap=Math.max(d[2],X[k]),rg=E("input",{type:"range",min:"0",max:String(cap),value:String(X[k])}),nb=E("input",{type:"number",min:"0",max:"100000",class:"vn",value:String(X[k])});
  const set=v=>{v=Math.max(0,parseInt(v,10)||0);X[k]=v;rg.value=Math.min(v,cap);nb.value=v;upd()};rg.oninput=()=>set(rg.value);nb.onchange=()=>set(nb.value);
  return E("div",{class:"sr"},E("div",{},E("b",{},d[0]),E("div",{class:"meta"},d[1])),nb,rg)});
 const evc=[...Array(10)].map((_,i)=>{const b=E("button",{class:"chip",type:"button"},i?i+1+"x":"Off");b.onclick=()=>{X.xp_event=i+1;pe();upd()};return b}),evn=E("p",{class:"meta",style:"margin:10px 0 0"}),pe=()=>{evc.forEach((b,i)=>b.classList.toggle("on",i+1===X.xp_event));evn.textContent=X.xp_event>=5?"High multiplier: everyone levels very quickly while this is on.":X.xp_event>1?"XP event active for everyone.":"No event running. Weekends are still 2x."};
 const sw=(on,fn)=>{const b=E("button",{class:"sw"+(on?" on":""),type:"button",role:"switch","aria-checked":String(!!on)});b.onclick=()=>{const v=!b.classList.contains("on");b.classList.toggle("on",v);b.setAttribute("aria-checked",String(v));fn(v)};return b},
 swr=(t,d,on,fn)=>E("div",{class:"sr2"},E("div",{},E("b",{},t),E("div",{class:"meta"},d)),sw(on,fn));
 const RO=[[7,"7 days"],[14,"14 days"],[30,"30 days"],[90,"90 days"],[365,"1 year"],[0,"Forever"]];if(!RO.some(r=>r[0]===M.retention_days))RO.push([M.retention_days,M.retention_days+" days"]);
 const rc=RO.map(r=>{const b=E("button",{class:"chip",type:"button"},r[1]);b.onclick=()=>{M.retention_days=r[0];pr();upd()};return b}),rn=E("p",{class:"meta",style:"margin:10px 0 0"}),pr=()=>{rc.forEach((b,i)=>b.classList.toggle("on",RO[i][0]===M.retention_days));rn.textContent=M.retention_days===0?"Messages are kept forever. The free Supabase database has limited storage, so check it now and then.":"Older messages are deleted automatically."};
 const th=E("div",{class:"themes"},...[["aurora","Aurora","linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899)"],["ember","Ember","linear-gradient(90deg,#fbbf24,#ff7a45,#ef4444)"],["matrix","Matrix","linear-gradient(90deg,#4ade80,#22d3ee,#a3e635)"],["royal","Royal","linear-gradient(90deg,#ffe08a,#f5b942,#e08a1e)"]].map(t=>{const b=E("button",{type:"button",class:(ls("4ev_theme")||"aurora")===t[0]?"on":""},H('<i style="background:'+t[2]+'"></i>'),t[1]);b.onclick=()=>{ls("4ev_theme",t[0]);prefs();[...th.children].forEach(x=>x.classList.toggle("on",x===b));toast("Theme: "+t[1])};return b}));
 const pw1=E("input",{type:"password",placeholder:"New password (8+ characters)",autocomplete:"new-password"}),pw2=E("input",{type:"password",placeholder:"Repeat new password",autocomplete:"new-password"}),pm=E("div",{role:"status",style:"margin-top:10px"}),pb=E("button",{class:"btn sm",type:"button",style:"margin-top:14px"},"Update password");
 pb.onclick=async()=>{pm.className="err";if(pw1.value.length<8)return pm.textContent="Use at least 8 characters.";if(pw1.value!==pw2.value)return pm.textContent="The passwords don't match.";pb.disabled=true;const{error}=await sb.auth.updateUser({password:pw1.value});pb.disabled=false;if(error)return pm.textContent=error.message;pm.textContent="";pw1.value=pw2.value="";toast("Password updated")};
 const dis=E("button",{class:"btn ghost sm",type:"button"},"Discard"),sv=E("button",{class:"btn sm",type:"button"},"Save changes");dis.onclick=()=>render("settings");
 sv.onclick=async()=>{if(bad())return toast("Fix the highlighted values first",1);sv.disabled=true;try{const put=async(k,v)=>{const{error}=await sb.from("bot_settings").upsert({key:k,value:v,updated_by:user.id,updated_at:new Date().toISOString()});if(error)throw error};M.retention_days=Math.min(365,Math.max(0,M.retention_days));await put("xp",{...X});await put("messages",{...M});o=JSON.stringify([X,M]);bar.classList.remove("show");toast("Saved. The bot applies it within about a minute.")}catch(e){toast("Save failed: "+e.message,1)}sv.disabled=false};
 bar.append(E("span",{},"You have unsaved changes"),dis,sv);
 const cd=(id,t,d,...k)=>{const c=E("div",{class:"card",id},E("h3",{class:"h"},t),E("p",{class:"meta",style:"margin:0 0 6px"},d),...k);return c};
 const sg=(l,v)=>E("button",{type:"button",onclick:()=>$("#"+v).scrollIntoView({behavior:"smooth",block:"start"})},l);
 const lt=user.last_sign_in_at?new Date(user.last_sign_in_at).toLocaleString():"-";
 pe();pr();upd();
 return[...head("Settings","Tune XP, message collection, the look of this dashboard and your account."),
 E("div",{class:"set"},E("div",{class:"idx"},sg("XP rates","s1"),sg("XP event","s2"),sg("Messages","s3"),sg("Look & feel","s4"),sg("Account","s5")),
 E("div",{class:"col"},
  cd("s1","XP rates","How much XP each activity earns.",...rows,er,E("h3",{class:"s",style:"margin-top:16px"},"What this means"),pv),
  cd("s2","XP event","Boost everyone's XP right now.",E("div",{class:"seg"},...evc),evn),
  cd("s3","Message collection","What the Server Messages and analytics pages can see.",swr("Save server messages","Turn off to stop collecting completely.",M.enabled,v=>{M.enabled=v;upd()}),swr("Include bot messages","Also store messages sent by bots.",M.collect_bots,v=>{M.collect_bots=v;upd()}),E("div",{style:"padding-top:16px"},E("b",{},"Keep messages for"),E("div",{class:"seg"},...rc),rn)),
  cd("s4","Look & feel","Saved on this device only.",E("b",{},"Theme"),th,swr("Calm mode","Turns off the animated background (saves battery).",ls("4ev_calm")==="1",v=>{ls("4ev_calm",v?"1":null);prefs()}),swr("Compact spacing","Tighter cards and margins.",ls("4ev_compact")==="1",v=>{ls("4ev_compact",v?"1":null);prefs()}),swr("Skip intro animation","Go straight to the site when it loads.",ls("4ev_skipintro")==="1",v=>ls("4ev_skipintro",v?"1":null))),
  cd("s5","Account & security","Signed in as "+user.email+" · role: "+((rr&&rr.role)||"owner")+" · last sign-in "+lt,E("div",{style:"display:grid;gap:10px;max-width:420px;margin-top:10px"},E("b",{},"Change password"),pw1,pw2,pb,pm),E("div",{style:"display:flex;gap:10px;flex-wrap:wrap;margin-top:26px;padding-top:22px;border-top:1px solid var(--line)"},Object.assign(E("button",{class:"btn dg2 btn",type:"button"},"Sign out"),{onclick:()=>out(0)}),Object.assign(E("button",{class:"btn dg2 btn",type:"button"},"Sign out everywhere"),{onclick:()=>out(1)}))))),bar]}
vSettings=vSettings2;
})();
