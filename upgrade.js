/* 4EV upgrade. Load AFTER analytics.js:  <script src="analytics.js"></script><script src="upgrade.js"></script> */
(()=>{
const DISCORD="vinniewashere",DISCORD_ID=""; /* paste your numeric Discord user ID in DISCORD_ID for a direct DM link */
const E=el,H=h=>{const d=E("div");d.innerHTML=h.trim();return d.firstChild},
ls=(k,v)=>{try{if(v===undefined)return localStorage.getItem(k);v===null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){return null}},
RT=document.documentElement,dm=DISCORD_ID?"https://discord.com/users/"+DISCORD_ID:"https://discord.com/app";
const prefs=()=>{RT.dataset.theme=ls("4ev_theme2")||"ember";RT.classList.toggle("calm",ls("4ev_calm")==="1");RT.classList.toggle("compact",ls("4ev_compact")==="1")};prefs();

/* ---------- styles ---------- */
document.querySelectorAll("head style,head link[href*=Rajdhani]").forEach(n=>n.remove());
const lk=document.createElement("link");lk.rel="stylesheet";lk.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap";document.head.append(lk);
const st=document.createElement("style");st.textContent=`
:root{--bg:#080808;--panel:#0e0e0f;--line:#262628;--text:#f4f4f5;--mute:#9a9aa2;--dim:#6b6b73;--ok:#4ade80;--bad:#f87171;--warn:#fbbf24;--gold:#f7684c;--gold-hi:#ff8a6b;--gold-lo:#7a2e1f;--ink:#1c0903;--g1:#ff8a6b;--g2:#f7684c;--g3:#d9482e;--head:"Inter",system-ui,-apple-system,sans-serif;--body:"Inter",system-ui,-apple-system,sans-serif;--mono:"JetBrains Mono",ui-monospace,Menlo,monospace;box-sizing:border-box}
html[data-theme=aurora]{--gold:#8b5cf6;--gold-hi:#a78bfa;--gold-lo:#3b2a82;--ink:#fff;--g1:#67e8f9;--g2:#8b5cf6;--g3:#ec4899}
html[data-theme=matrix]{--gold:#22c55e;--gold-hi:#86efac;--gold-lo:#14532d;--ink:#04140a;--g1:#86efac;--g2:#22c55e;--g3:#15803d}
html[data-theme=royal]{--gold:#f5b942;--gold-hi:#ffe08a;--gold-lo:#7a5a10;--ink:#1a1403;--g1:#ffe08a;--g2:#f5b942;--g3:#d9971a}
*,*::before,*::after{box-sizing:inherit}html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}html,body{margin:0}
body{background:var(--bg);background-image:radial-gradient(rgba(255,255,255,.06) 1px,transparent 1px);background-size:24px 24px;color:var(--text);font:400 16px/1.6 var(--body);overflow-x:hidden;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--head);margin:0;letter-spacing:-.03em}button,input,select,textarea{font:inherit;color:inherit}
:focus-visible{outline:2px solid var(--gold);outline-offset:2px}.hidden{display:none!important}
#fx,#spot,#intro{display:none!important}#bar{position:fixed;top:0;left:0;height:2px;width:0;z-index:120;background:var(--gold)}
section,footer{position:relative;z-index:1}section[id]{scroll-margin-top:84px}
#site{transition:opacity .4s}body.pre #site{opacity:0}
.top{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;gap:12px;padding:calc(12px + env(safe-area-inset-top,0px)) 20px 12px;background:rgba(8,8,8,.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:10px;font:700 20px var(--head);letter-spacing:-.02em;margin-right:auto}.brand::before{content:"";width:24px;height:24px;border-radius:50% 50% 42% 42%;background:var(--gold);flex:none}
.tl{display:flex;gap:24px;margin-right:8px}.tl a{color:var(--mute);text-decoration:none;font:600 12px var(--mono);letter-spacing:.1em;text-transform:uppercase}.tl a:hover{color:var(--gold-hi)}
.hb,.hb2{display:none;width:44px;height:44px;place-items:center;background:#141414;border:1px solid #2a2a2d;border-radius:12px;font-size:20px;line-height:1;cursor:pointer;flex:none}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;background:var(--gold);color:var(--ink);font:700 14px var(--mono);border:1px solid var(--gold);border-radius:12px;padding:12px 22px;min-height:46px;cursor:pointer;transition:filter .2s,transform .15s,border-color .2s}
.btn:hover{filter:brightness(1.1)}.btn:active{transform:scale(.98)}.btn:disabled{opacity:.5;cursor:default}
.btn.ghost{background:#141414;color:var(--text);border-color:#2c2c2f}.btn.ghost:hover{border-color:var(--gold);color:var(--gold-hi);filter:none}
.btn.sm{padding:8px 16px;min-height:40px;font-size:13px}.btn.dg{background:#ef4444;border-color:#ef4444;color:#fff}.btn.dg2{background:transparent;border-color:rgba(248,113,113,.5);color:#fca5a5}
.hero{position:relative;text-align:center;padding:calc(120px + env(safe-area-inset-top,0px)) 22px 80px;overflow:hidden}
.glow{position:absolute;left:50%;top:70px;width:min(620px,110vw);aspect-ratio:1;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--gold) 26%,transparent),transparent 65%);pointer-events:none}
.hero-in{position:relative;max-width:900px;margin:0 auto}
.emb{width:112px;height:112px;border-radius:50% 50% 44% 44%;margin:0 auto 34px;display:grid;place-items:center;font-size:48px;background:linear-gradient(160deg,var(--g1),var(--g2) 55%,var(--g3));box-shadow:0 0 70px color-mix(in srgb,var(--gold) 45%,transparent)}
.eb{display:block;font:700 12px var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:16px}.eb2{text-align:center;line-height:1.8}
.hero h1{font-size:clamp(38px,9.5vw,76px);line-height:1.04;font-weight:700;color:#fff;margin:0 auto 20px}.hero h1 em{font:italic 400 1em Georgia,"Times New Roman",serif;color:var(--gold-hi);letter-spacing:0}
.tag{font:700 13px var(--mono);letter-spacing:.2em;color:var(--gold)}.words{min-height:1.7em;color:var(--mute);font:500 14px var(--mono);margin:12px 0 30px;transition:opacity .4s}
.cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.mq{overflow:hidden;border-block:1px solid var(--line);background:#0a0a0a;padding:14px 0;position:relative;z-index:1}.mq div{display:flex;gap:40px;width:max-content;animation:mq 40s linear infinite;font:600 12px var(--mono);letter-spacing:.2em;color:var(--dim);white-space:nowrap}
@keyframes mq{to{transform:translateX(-50%)}}@keyframes pulse{50%{opacity:.45}}@keyframes up{from{opacity:0;transform:translateY(14px)}}@keyframes slide{from{opacity:0;transform:translateY(10px)}}@keyframes shake{25%{transform:translateX(-8px)}50%{transform:translateX(8px)}75%{transform:translateX(-4px)}}@keyframes flash{0%{box-shadow:0 0 0 0 rgba(248,113,113,.8)}100%{box-shadow:0 0 0 20px transparent}}@keyframes pop{from{opacity:0;transform:translateY(-10px)}}
.wrap{max-width:1120px;margin:0 auto;padding:84px 22px}
.sec h2{font-size:clamp(30px,6vw,46px);line-height:1.08;font-weight:700;margin-bottom:12px}.lead{color:var(--mute);margin:0 0 40px;max-width:640px;font-size:17px}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}
.stat{background:var(--panel)!important;border:0!important;border-radius:0!important;padding:26px 20px!important}.stat b{display:block;font:700 44px/1.1 var(--head);letter-spacing:-.03em}.stat span{font:500 12px var(--mono);color:var(--mute);text-transform:uppercase;letter-spacing:.1em}
.feats{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}
.feats .card{background:var(--panel);border:0;border-radius:0;padding:28px}.feats .card:hover{background:#121213}
.ico{display:grid;place-items:center;width:46px;height:46px;font-size:24px;border:1px solid var(--line);border-radius:12px;background:#141414;margin-bottom:16px}
.card{position:relative;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:22px;min-width:0;transition:border-color .2s}.card:hover{border-color:#3a3a3e}
.card h3{font-size:20px;color:var(--text);font-weight:600}.card p{margin:6px 0 0;color:var(--mute)}
.card h3.s{font:600 11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:6px}
.big{display:block;font:700 34px/1.15 var(--head);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}
.rv{opacity:0;transform:translateY(20px);transition:opacity .55s,transform .55s}.rv.in{opacity:1;transform:none}
.tabs{display:flex;gap:8px;flex-wrap:wrap}.term{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#0a0a0b;margin-top:20px}
.term .th{display:flex;gap:7px;align-items:center;padding:13px 16px;border-bottom:1px solid var(--line);font:600 12px var(--mono);color:var(--mute)}.term .th i{width:11px;height:11px;border-radius:50%;background:#2a2a2d}
.term .tbd{padding:20px;display:flex;flex-wrap:wrap;gap:10px}.term code{font:500 13px var(--mono);color:var(--gold-hi);background:#141414;border:1px solid var(--line);border-radius:8px;padding:7px 12px}
.ladder{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}.ladder .card{border:0;border-radius:0;text-align:left;background:var(--panel)}.ladder b{display:block;font:700 20px var(--head);margin:4px 0}.ladder .meta{font:500 12px var(--mono)}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}.steps .card{border:0;border-radius:0}.steps .n{font:700 52px/1 var(--mono);color:var(--gold)}
.fq{border:1px solid var(--line);border-radius:12px;background:var(--panel);margin:0 0 10px;padding:0 20px}.fq summary{cursor:pointer;padding:16px 0;font-weight:600;list-style:none;display:flex;justify-content:space-between;gap:12px}.fq summary::-webkit-details-marker{display:none}.fq summary::after{content:"+";color:var(--gold);font:700 20px var(--mono)}.fq[open] summary::after{content:"–"}.fq p{margin:0 0 16px;color:var(--mute)}
.dmc{display:flex;gap:18px;align-items:center;flex-wrap:wrap}.dmc .ava{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;font:700 28px var(--head);background:var(--gold);color:var(--ink);flex:none}
footer{text-align:center;color:var(--mute);padding:56px 20px 70px;border-top:1px solid var(--line)}footer .fl{display:flex;gap:22px;justify-content:center;flex-wrap:wrap;margin-top:16px;font:600 12px var(--mono);letter-spacing:.1em;text-transform:uppercase}footer a{color:var(--mute);text-decoration:none}footer a:hover{color:var(--gold-hi)}
.play{display:grid;grid-template-columns:1.4fr 1fr;gap:18px}.chat{height:340px;overflow-y:auto;display:flex;flex-direction:column;gap:10px}
.cm{display:flex;gap:10px;animation:slide .25s both}.cm .av{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#1b1b1d;flex:none}.cm .tx{background:#151516;border:1px solid var(--line);border-radius:10px;padding:7px 12px;word-break:break-word}
.cm.bad .tx{animation:shake .4s,flash 1s;text-decoration:line-through;opacity:.45}.cm.bot .av{background:var(--gold)}.cm.bot .tx{border-color:var(--gold);color:var(--gold-hi)}
.row{display:flex;gap:8px;margin-top:12px}.row input{flex:1;min-width:0}.chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.chip{background:#141414;border:1px solid #2a2a2d;border-radius:99px;padding:8px 16px;min-height:38px;cursor:pointer;font:600 13px var(--mono);color:var(--mute);transition:.2s}.chip:hover{color:var(--text);border-color:#4a4a4f}.chip.on{background:color-mix(in srgb,var(--gold) 15%,#0e0e0f);border-color:var(--gold);color:var(--gold-hi)}
.le{font:500 12px var(--mono);color:var(--gold-hi);padding:6px 0;border-bottom:1px solid var(--line)}#dlog{max-height:190px;overflow:auto;margin-top:6px}
.xb{height:8px;border-radius:9px;background:#1a1a1c;overflow:hidden;margin-top:10px}.xb i{display:block;height:100%;width:10%;background:linear-gradient(90deg,var(--g1),var(--g2));transition:width .4s}
label{display:block;font:600 12px var(--mono);letter-spacing:.06em;color:var(--mute);margin:16px 0 6px}
input,select,textarea{width:100%;background:#080808;border:1px solid #2a2a2d;border-radius:10px;padding:11px 14px;min-height:46px;font-size:16px;color:var(--text)}textarea{resize:vertical}
input:focus,select:focus,textarea:focus{border-color:var(--gold);outline:none}input[type=range]{padding:0;min-height:28px;accent-color:var(--gold);background:none;border:0;margin-top:12px}
.err{color:var(--bad);min-height:20px;margin-top:10px;font-size:14px}.ok{color:var(--ok);margin-top:10px}.meta{font-size:13px;color:var(--mute)}.meta b{color:var(--text)}
.modal{position:fixed;inset:0;z-index:150;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.8);backdrop-filter:blur(6px)}.mcard{width:100%;max-width:400px;background:#0c0c0d;border:1px solid var(--line);border-radius:18px;padding:26px 22px;animation:up .4s both;max-height:90dvh;overflow:auto}.logo{font:700 44px/1 var(--head);color:var(--gold)}
.pill{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:99px;border:1px solid var(--line);font:700 12px var(--mono);background:#101011;white-space:nowrap}
.dot{width:9px;height:9px;border-radius:50%;background:var(--bad);flex:none}.dot.on{background:var(--ok);box-shadow:0 0 10px var(--ok);animation:pulse 1.6s infinite}
.note{border-left:3px solid var(--gold);padding:14px 18px;background:#101011;border-radius:0 10px 10px 0;color:var(--mute);margin:20px 0}
table{width:100%;border-collapse:collapse}td,th{padding:12px 14px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top;font-size:14px}th{font:600 11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--dim)}.sc{overflow-x:auto;-webkit-overflow-scrolling:touch}.sc table{min-width:560px}
.lvl-info{color:var(--gold-hi)}.lvl-warning{color:var(--warn)}.lvl-error{color:var(--bad)}.cmds{display:grid;gap:12px}.bar{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}.bar>*{flex:1 1 150px;width:auto}.form{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:4px 16px}
.msg{display:flex;gap:12px;padding:12px 4px;border-bottom:1px solid var(--line)}.msg.nw{animation:pop .7s}.msg img{width:40px;height:40px;border-radius:50%;flex:none;background:#000;border:1px solid var(--line)}.msg p{margin:2px 0 0;white-space:pre-wrap;word-break:break-word}.msg.del p{text-decoration:line-through;opacity:.5}.tg{font-size:11px;border:1px solid var(--line);border-radius:6px;padding:0 6px;margin-left:6px}
#app{display:grid;grid-template-columns:264px minmax(0,1fr);min-height:100dvh;position:relative;z-index:1}
#nav{background:#0a0a0b;border-right:1px solid var(--line);padding:20px 14px;display:flex;flex-direction:column;gap:2px;position:sticky;top:0;height:100dvh;overflow-y:auto}
#nav .bn{display:flex;align-items:center;gap:10px;font:700 22px var(--head);padding:2px 10px 10px}#nav .bn::before{content:"";width:22px;height:22px;border-radius:50% 50% 42% 42%;background:var(--gold)}
.ng{font:700 11px var(--mono);letter-spacing:.2em;text-transform:uppercase;color:var(--dim);padding:20px 12px 6px}
.nb{display:flex;align-items:center;gap:12px;width:100%;background:none;border:0;border-left:2px solid transparent;border-radius:0 10px 10px 0;text-align:left;padding:10px 12px;min-height:44px;color:var(--mute);cursor:pointer;font-weight:500;font-size:15px;transition:.15s}.nb span:first-child{width:22px;text-align:center;flex:none}
.nb:hover{color:var(--text);background:#121213}.nb.on{color:var(--gold-hi);background:color-mix(in srgb,var(--gold) 10%,transparent);border-left-color:var(--gold)}nav .lo:hover{color:var(--bad)}.sp{flex:1;min-height:12px}
.uc{display:flex;gap:10px;align-items:center;padding:12px;border:1px solid var(--line);border-radius:12px;margin:10px 0 6px;min-width:0}.uc>div{min-width:0}.uc .meta{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.uc b{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px}
.uca{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font:700 16px var(--head);background:var(--gold);color:var(--ink);flex:none}
main{padding:0 36px 90px;min-width:0;width:100%;max-width:1320px;margin:0 auto}
.tb{position:sticky;top:0;z-index:30;display:flex;align-items:center;gap:12px;padding:calc(14px + env(safe-area-inset-top,0px)) 0 14px;margin-bottom:24px;background:rgba(8,8,8,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}.tb .sp2{flex:1}.gr{min-width:0}.gr b{font:600 20px var(--head);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jx{display:none}
.ph{font-size:clamp(30px,6vw,44px);font-weight:700;margin:0 0 6px}.lead2{color:var(--mute);margin:0 0 26px;max-width:640px}#view>*{animation:up .45s both}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:18px}
.kp{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin-bottom:14px}.kp .big{font-size:28px}.g2{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:14px;margin-bottom:14px}.wide{grid-column:1/-1}.g2 .card{min-width:0}
.fd{display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px}.av2{width:30px;height:30px;border-radius:50%;background:#000;flex:none}.tg2{display:inline-block;margin:3px;padding:3px 10px;border-radius:99px;border:1px solid var(--line)}
.set{display:grid;grid-template-columns:190px minmax(0,1fr);gap:34px;align-items:start}.idx{position:sticky;top:96px;display:flex;flex-direction:column;gap:4px}.idx button{background:none;border:0;border-left:2px solid var(--line);text-align:left;padding:8px 14px;color:var(--mute);cursor:pointer;font-weight:600}.idx button:hover{color:var(--gold-hi);border-color:var(--gold)}
.col{display:grid;gap:20px}.col .card{scroll-margin-top:96px}.col h3.h{font-size:24px;color:var(--text)}
.sr{display:grid;grid-template-columns:1fr auto;gap:8px 16px;padding:18px 0;border-bottom:1px solid var(--line);align-items:center}.sr input[type=range]{grid-column:1/-1;margin:0}.vn{width:92px;text-align:right;font:700 16px var(--mono)}
.sr2{display:flex;justify-content:space-between;gap:16px;align-items:center;padding:16px 0;border-bottom:1px solid var(--line)}.sr2:last-child{border:0}
.sw{position:relative;width:48px;height:27px;border-radius:99px;background:#1b1b1d;border:1px solid var(--line);cursor:pointer;flex:none;transition:.25s;padding:0;min-height:0}.sw::after{content:"";position:absolute;top:2px;left:2px;width:21px;height:21px;border-radius:50%;background:#9a9aa2;transition:.25s}.sw.on{background:var(--gold);border-color:var(--gold)}.sw.on::after{left:23px;background:#fff}
.seg{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.pv{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-top:16px}.pv div{border:1px solid var(--line);border-radius:12px;padding:12px 14px}.pv b{display:block;font:700 22px var(--head);color:var(--gold-hi)}
.themes{display:flex;gap:12px;flex-wrap:wrap;margin:12px 0 6px}.themes button{width:92px;border:2px solid var(--line);border-radius:14px;background:#0a0a0b;color:var(--text);padding:8px;cursor:pointer;font-weight:600;font-size:12px}.themes button i{display:block;height:28px;border-radius:8px;margin-bottom:6px}.themes button.on{border-color:var(--gold)}
.sbar{position:fixed;left:50%;bottom:24px;transform:translate(-50%,160px);z-index:70;display:flex;gap:12px;align-items:center;padding:12px 14px 12px 22px;border:1px solid var(--gold);border-radius:16px;background:rgba(12,12,13,.96);backdrop-filter:blur(14px);box-shadow:0 10px 50px rgba(0,0,0,.7);transition:transform .4s cubic-bezier(.2,.8,.2,1);max-width:calc(100vw - 24px)}.sbar.show{transform:translate(-50%,0)}
#toasts{position:fixed;right:18px;bottom:18px;z-index:200;display:grid;gap:8px}.toast{background:#0c0c0d;border:1px solid var(--line);border-left:4px solid var(--ok);padding:12px 16px;border-radius:12px;box-shadow:0 8px 40px rgba(0,0,0,.6);animation:up .35s both;transition:opacity .4s;max-width:320px}.toast.bad{border-left-color:var(--bad)}
.pal{align-items:start;padding-top:12vh}.pal .mcard{max-width:520px;padding:14px}.pal input{margin-bottom:8px}.pal .it{display:flex;gap:12px;padding:11px 12px;border-radius:10px;cursor:pointer;align-items:center}.pal .it.on,.pal .it:hover{background:#18181a}
kbd{font:700 11px var(--mono);border:1px solid var(--line);border-radius:6px;padding:2px 7px;color:var(--mute)}.scrim{display:none}
@media(max-width:900px){.set{grid-template-columns:1fr}.idx{position:static;flex-direction:row;overflow-x:auto}.idx button{border-left:0;border-bottom:2px solid var(--line);white-space:nowrap}}
@media(max-width:860px){
.hb,.hb2{display:grid}.top{gap:10px}.tl{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:0;margin:0;background:#0a0a0a;border-bottom:1px solid var(--line);padding:4px 20px 12px}.top.open .tl{display:flex}.tl a{padding:15px 0;border-bottom:1px solid var(--line);font-size:13px}.tl a:last-child{border:0}
.wrap{padding:64px 18px}.hero{padding-top:calc(104px + env(safe-area-inset-top,0px));padding-bottom:60px}.emb{width:96px;height:96px;font-size:40px;margin-bottom:26px}.play{grid-template-columns:1fr}.feats .card{padding:24px}.lead{font-size:16px;margin-bottom:30px}
#app{display:block}#nav{position:fixed;z-index:140;top:0;left:0;bottom:0;width:min(86vw,330px);height:auto;transform:translateX(-102%);transition:transform .3s cubic-bezier(.2,.8,.2,1);padding-top:calc(18px + env(safe-area-inset-top,0px));padding-bottom:calc(18px + env(safe-area-inset-bottom,0px))}#nav.open{transform:none;box-shadow:0 0 90px rgba(0,0,0,.9)}
.scrim{display:block;position:fixed;inset:0;z-index:130;background:rgba(0,0,0,.65);opacity:0;pointer-events:none;transition:opacity .3s}.scrim.show{opacity:1;pointer-events:auto}
main{padding:0 16px 56px}.tb{margin:0 -16px 20px;padding-left:16px;padding-right:16px;gap:8px}.gr b{font-size:17px}.gr .meta{display:none}.jt,kbd{display:none}.jx{display:inline;font-size:18px}#jb{padding:8px 12px}
.sbar{bottom:calc(16px + env(safe-area-inset-bottom,0px))}#toasts{bottom:calc(16px + env(safe-area-inset-bottom,0px));left:16px;right:16px}.toast{max-width:none}.card{padding:18px}.kp{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.kp .big{font-size:24px}.vn{width:80px}}
`;
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
ST.length=0;
endIntro();
sb.auth.onAuthStateChange((ev,s)=>{setUc(s);if(ev==="SIGNED_OUT"&&user){user=null;labels();cleanup();show("site");toast("Your session ended. Please sign in again.",1)}});

/* ---------- landing page ---------- */
const sec=(id,eb,title,lead,...body)=>{const s=E("section",{class:"wrap sec",id},E("span",{class:"eb rv"},eb),E("h2",{class:"rv"},title),lead?E("p",{class:"lead rv"},lead):"",...body);s.querySelectorAll(".rv").forEach(n=>io.observe(n));return s};
const top=$(".top"),tl=E("div",{class:"tl"},...[["Features","#features"],["Commands","#commands"],["Try it","#play"],["Ranks","#ranks"],["FAQ","#faq"],["Contact","#contact"]].map(x=>E("a",{href:x[1]},x[0])));top.insertBefore(tl,$("#ob"));
const hb=E("button",{class:"hb",type:"button","aria-label":"Menu"},"☰");hb.onclick=()=>top.classList.toggle("open");tl.addEventListener("click",()=>top.classList.remove("open"));top.append(hb);
const hi=$(".hero-in");hi.insertBefore(E("div",{class:"emb"},"⚔️"),hi.firstChild);hi.insertBefore(E("div",{class:"eb eb2"},"Discord bot · Clan wars · XP · Moderation"),$(".hero-in h1"));$(".hero-in h1").innerHTML="The bot that <em>really</em> runs your clan.";$(".tag").textContent="4EV · FOREVER VICTORY";
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
const hb2=E("button",{class:"hb2",type:"button","aria-label":"Menu"},"☰"),scrim=E("div",{class:"scrim"});document.body.append(scrim);
const drawer=o=>{nv.classList.toggle("open",o);scrim.classList.toggle("show",o)};hb2.onclick=()=>drawer(!nv.classList.contains("open"));scrim.onclick=()=>drawer(false);nv.addEventListener("click",e=>{if(e.target.closest(".nb"))drawer(false)});
const g=new Date().getHours(),pillT=E("span",{},"Checking..."),pillD=E("span",{class:"dot"}),pill=E("span",{class:"pill"},pillD,pillT),jb=E("button",{id:"jb",class:"btn ghost sm",type:"button"},E("span",{class:"jx"},"⌕"),E("span",{class:"jt"},"Jump "),E("kbd",{style:"margin-left:8px"},"Ctrl K"));
$("main").insertBefore(E("div",{class:"tb"},hb2,E("div",{class:"gr"},E("b",{style:"font:700 24px var(--head)"},(g<5?"Late night":g<12?"Good morning":g<18?"Good afternoon":"Good evening")+" 👋"),E("div",{class:"meta"},new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"}))),E("div",{class:"sp2"}),pill,jb),$("#view"));
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
 const th=E("div",{class:"themes"},...[["ember","Coral","linear-gradient(90deg,#ff8a6b,#f7684c,#d9482e)"],["aurora","Aurora","linear-gradient(90deg,#22d3ee,#8b5cf6,#ec4899)"],["matrix","Matrix","linear-gradient(90deg,#4ade80,#22d3ee,#a3e635)"],["royal","Royal","linear-gradient(90deg,#ffe08a,#f5b942,#e08a1e)"]].map(t=>{const b=E("button",{type:"button",class:(ls("4ev_theme2")||"ember")===t[0]?"on":""},H('<i style="background:'+t[2]+'"></i>'),t[1]);b.onclick=()=>{ls("4ev_theme2",t[0]);prefs();[...th.children].forEach(x=>x.classList.toggle("on",x===b));toast("Theme: "+t[1])};return b}));
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
  cd("s4","Look & feel","Saved on this device only.",E("b",{},"Theme"),th,swr("Compact spacing","Tighter cards and margins.",ls("4ev_compact")==="1",v=>{ls("4ev_compact",v?"1":null);prefs()})),
  cd("s5","Account & security","Signed in as "+user.email+" · role: "+((rr&&rr.role)||"owner")+" · last sign-in "+lt,E("div",{style:"display:grid;gap:10px;max-width:420px;margin-top:10px"},E("b",{},"Change password"),pw1,pw2,pb,pm),E("div",{style:"display:flex;gap:10px;flex-wrap:wrap;margin-top:26px;padding-top:22px;border-top:1px solid var(--line)"},Object.assign(E("button",{class:"btn dg2 btn",type:"button"},"Sign out"),{onclick:()=>out(0)}),Object.assign(E("button",{class:"btn dg2 btn",type:"button"},"Sign out everywhere"),{onclick:()=>out(1)}))))),bar]}
vSettings=vSettings2;
setTimeout(()=>$$(".rv").forEach(n=>n.classList.add("in")),3500);
})();
