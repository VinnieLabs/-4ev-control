/* 4EV analytics add-on. Load AFTER the main script: <script src="analytics.js"></script> */
(()=>{
const E=el,P={},RG=[["24h",864e5],["7d",7*864e5],["30d",30*864e5],["90d",90*864e5],["All",0]],
CL=["#67e8f9","#a78bfa","#f472b6","#4ade80","#fbbf24","#fb923c","#60a5fa","#e879f9"],
SW=new Set("the and for that this with you your are was but not have has had they them what when who how can will just its it's i'm don't dont like get got all out one too yeah lol yes his her she him our about from there then than were would could should been also very really only into some more any now here why let's lets can't cant doesn't still even much make well".split(" ")),
DN=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
let RANGE=7*864e5,LR=-1,DATA=[],LOADED=0,CAPPED=false,ST=null,uid=0;
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
H=h=>{const d=E("div");d.innerHTML=h.trim();return d.firstChild},
fm=n=>n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e4?(n/1e3).toFixed(1)+"k":Math.round(n).toLocaleString(),
pc=(a,b)=>b?(a/b*100).toFixed(1)+"%":"0%",
ago=t=>{const s=(Date.now()-t)/1e3;return s<60?"just now":s<3600?Math.floor(s/60)+"m ago":s<86400?Math.floor(s/3600)+"h ago":Math.floor(s/86400)+"d ago"},
fmt=ms=>ms<6e4?Math.round(ms/1e3)+"s":ms<36e5?Math.round(ms/6e4)+"m":ms<864e5?(ms/36e5).toFixed(1)+"h":(ms/864e5).toFixed(1)+"d",
hl=h=>(h%12||12)+(h<12?"a":"p"),am=a=>a.indexOf(Math.max(...a)),
av=u=>esc(u||"data:,");
const css=document.createElement("style");
css.textContent=`main{max-width:1400px!important}.kp{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:14px}.kp .big{font-size:30px}.g2{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:14px;margin-bottom:14px}.wide{grid-column:1/-1}.g2 .card{min-width:0}.fd{display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px}.av2{width:30px;height:30px;border-radius:50%;background:#000;flex:none}.tg2{display:inline-block;margin:3px;padding:3px 10px;border-radius:99px;border:1px solid var(--line)}@media(max-width:800px){nav{overflow-x:auto;justify-content:flex-start!important}.nb{flex:0 0 54px!important}}`;
document.head.append(css);

async function load(){
 const now=Date.now(),since=RANGE?new Date(now-RANGE*2).toISOString():null;let all=[],before=null;CAPPED=false;
 for(let i=0;i<15;i++){
  let q=sb.from("messages").select("id,channel_id,channel_name,author_id,username,display_name,avatar_url,content,has_attachments,created_at,edited_at,deleted_at").order("created_at",{ascending:false}).limit(1000);
  if(since)q=q.gte("created_at",since);if(before)q=q.lt("created_at",before);
  const{data,error}=await q;if(error)throw error;all=all.concat(data);
  if(data.length<1000)break;before=data[data.length-1].created_at;if(i===14)CAPPED=true}
 DATA=all;LOADED=now;LR=RANGE}

function analyze(){
 const now=Date.now(),cut=RANGE?now-RANGE:0,R=[],PV=[];
 for(const m of DATA){m._t=+new Date(m.created_at);(m._t>=cut?R:PV).push(m)}
 const off=new Date().getTimezoneOffset()*6e4,step=RANGE&&RANGE<=2*864e5?36e5:864e5,
 a={R,n:R.length,pv:new Set(PV.map(m=>m.author_id)),pn:PV.length,off,step,au:new Map,ch:new Map,hr:Array(24).fill(0),wd:Array(7).fill(0),hm:Array.from({length:7},()=>Array(24).fill(0)),wo:new Map,em:new Map,len:Array(7).fill(0),tl:new Map,day:new Map,att:0,lnk:0,q:0,cap:0,ed:0,del:0,chars:0,emn:0,long:null,
 pg:{ev:0,he:0,ur:0,ro:0,u:new Map,r:new Map,bc:new Map,by:new Map}};
 a.pu=a.pv.size;
 const LB=[10,25,50,100,200,500];
 for(const m of R){
  const t=m._t,d=new Date(t),h=d.getHours(),w=(d.getDay()+6)%7,c=m.content||"",id=m.author_id,nm=m.display_name||m.username||"?";
  let u=a.au.get(id);if(!u)a.au.set(id,u={id,nm,av:m.avatar_url,n:0,len:0,days:new Set,last:0,first:Infinity,chs:new Map,hr:Array(24).fill(0),pg:0,pr:0});
  u.n++;u.len+=c.length;u.days.add(d.toDateString());u.last=Math.max(u.last,t);u.first=Math.min(u.first,t);u.chs.set(m.channel_name,(u.chs.get(m.channel_name)||0)+1);u.hr[h]++;
  let k=a.ch.get(m.channel_id);if(!k)a.ch.set(m.channel_id,k={id:m.channel_id,nm:m.channel_name,n:0,au:new Map,last:0,hr:Array(24).fill(0),len:0,pg:0});
  k.n++;k.au.set(id,1);k.last=Math.max(k.last,t);k.hr[h]++;k.len+=c.length;
  a.hr[h]++;a.wd[w]++;a.hm[w][h]++;a.chars+=c.length;
  a.len[LB.findIndex(x=>c.length<=x)<0?6:LB.findIndex(x=>c.length<=x)]++;
  const b=Math.floor((t-off)/step)*step+off;let o=a.tl.get(b);if(!o)a.tl.set(b,o={n:0,u:new Set});o.n++;o.u.add(id);
  const dk=d.toDateString();let dd=a.day.get(dk);if(!dd)a.day.set(dk,dd={n:0,u:new Set,t});dd.n++;dd.u.add(id);
  if(m.has_attachments)a.att++;if(/https?:\/\//i.test(c))a.lnk++;if(c.includes("?"))a.q++;
  const L=c.replace(/[^a-z]/gi,"");if(c.length>=10&&L&&L.replace(/[^A-Z]/g,"").length/L.length>=.7)a.cap++;
  if(m.edited_at)a.ed++;if(m.deleted_at)a.del++;
  if(!a.long||c.length>a.long.c.length)a.long={c,nm,t};
  let pn=0;const P_=a.pg;
  if(/@everyone/.test(c)){P_.ev++;pn++}if(/@here/.test(c)){P_.he++;pn++}
  for(const x of c.matchAll(/<@!?(\d+)>/g)){P_.ur++;pn++;P_.u.set(x[1],(P_.u.get(x[1])||0)+1)}
  for(const x of c.matchAll(/<@&(\d+)>/g)){P_.ro++;pn++;P_.r.set(x[1],(P_.r.get(x[1])||0)+1)}
  if(pn){P_.bc.set(m.channel_name,(P_.bc.get(m.channel_name)||0)+pn);P_.by.set(id,(P_.by.get(id)||0)+pn);u.pg+=pn;k.pg+=pn}
  const cl=c.replace(/https?:\/\/\S+|<[@#][!&]?\d+>|<a?:\w+:\d+>/g," ").toLowerCase();
  for(const x of cl.match(/[\p{L}']{3,}/gu)||[])if(!SW.has(x))a.wo.set(x,(a.wo.get(x)||0)+1);
  for(const x of c.match(/\p{Extended_Pictographic}|<a?:\w+:\d+>/gu)||[]){a.emn++;const y=x[0]==="<"?":"+x.split(":")[1]+":":x;a.em.set(y,(a.em.get(y)||0)+1)}
 }
 for(const[id,n]of a.pg.u){const u=a.au.get(id);if(u)u.pr+=n}
 const ts=R.map(m=>m._t).sort((x,y)=>x-y),gp=[],pk=new Map;
 for(let i=1;i<ts.length;i++)gp.push(ts[i]-ts[i-1]);
 for(const t of ts){const k=Math.floor(t/6e4);pk.set(k,(pk.get(k)||0)+1)}
 gp.sort((x,y)=>x-y);a.med=gp.length?gp[gp.length>>1]:0;a.sil=gp.length?gp[gp.length-1]:0;a.pk=ts.length?Math.max(...pk.values()):0;
 a.span=ts.length?Math.max(1,Math.min(RANGE?RANGE/36e5:1e9,(now-ts[0])/36e5)):1;
 a.us=[...a.au.values()].sort((x,y)=>y.n-x.n);a.cs=[...a.ch.values()].sort((x,y)=>y.n-x.n);
 return a}

/* ---------- chart helpers ---------- */
const svg=(w,h,i)=>H(`<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:auto;display:block;overflow:visible">${i}</svg>`),
card=(t,n,cls,sub)=>E("div",{class:"card "+(cls||"")},E("h3",{class:"s"},t),sub?E("div",{class:"meta"},sub):"",n),
kpi=(l,v,d,sub)=>E("div",{class:"card"},E("h3",{class:"s"},l),E("b",{class:"big"},String(v)),d!=null?E("div",{class:"meta",style:"color:"+(d>=0?"var(--ok)":"var(--bad)")},(d>=0?"▲ ":"▼ ")+Math.abs(d).toFixed(0)+"% vs previous"):sub?E("div",{class:"meta"},sub):"");
function line(sr,lb){
 const W=700,Hh=220,p=34,mx=Math.max(1,...sr.flatMap(s=>s.d)),n=lb.length,X=i=>p+(n<2?0:i/(n-1))*(W-p-8),Y=v=>Hh-24-v/mx*(Hh-44);let g="";
 for(let i=0;i<=4;i++){const v=mx*i/4;g+=`<line x1="${p}" x2="${W}" y1="${Y(v)}" y2="${Y(v)}" stroke="#2a2252" stroke-dasharray="3 4"/><text x="0" y="${Y(v)+4}" fill="#9a97b8" font-size="11">${fm(v)}</text>`}
 const st=Math.ceil(n/8);lb.forEach((l,i)=>{if(i%st===0)g+=`<text x="${X(i)}" y="${Hh-4}" fill="#9a97b8" font-size="11" text-anchor="middle">${esc(l)}</text>`});
 sr.forEach(s=>{const id="g"+(++uid),pts=s.d.map((v,i)=>X(i)+","+Y(v)).join(" ");
  g+=`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s.c}" stop-opacity=".4"/><stop offset="1" stop-color="${s.c}" stop-opacity="0"/></linearGradient></defs><polygon points="${X(0)},${Y(0)} ${pts} ${X(n-1)},${Y(0)}" fill="url(#${id})"/><polyline points="${pts}" fill="none" stroke="${s.c}" stroke-width="2.5" stroke-linejoin="round"/>`;
  s.d.forEach((v,i)=>g+=`<circle cx="${X(i)}" cy="${Y(v)}" r="${n>50?2:4}" fill="${s.c}"><title>${esc(lb[i])}: ${v} ${s.n}</title></circle>`)});
 g+=sr.map((s,i)=>`<text x="${p+8+i*110}" y="10" fill="${s.c}" font-size="12">● ${s.n}</text>`).join("");
 return svg(W,Hh,g)}
function bars(v,lb,c){
 const W=700,Hh=190,mx=Math.max(1,...v),bw=(W-10)/v.length;let g="";
 v.forEach((x,i)=>{const h=x/mx*(Hh-40);g+=`<rect x="${i*bw+bw*.12+4}" y="${Hh-22-h}" width="${bw*.76}" height="${Math.max(h,1)}" rx="3" fill="${x===mx&&x>0?"#f472b6":c}" opacity=".9"><title>${esc(lb[i])}: ${x}</title></rect>`;
  if(v.length<=12||i%2===0)g+=`<text x="${i*bw+bw/2+4}" y="${Hh-6}" fill="#9a97b8" font-size="10.5" text-anchor="middle">${esc(lb[i])}</text>`});
 return svg(W,Hh,g)}
function donut(it){
 const T=it.reduce((s,x)=>s+x.v,0)||1,R=70,r=44;let a0=-Math.PI/2,g="";
 it.forEach((x,i)=>{const a1=a0+x.v/T*Math.PI*2-.0001,lg=a1-a0>Math.PI?1:0,Q=(q,a)=>(100+q*Math.cos(a))+","+(100+q*Math.sin(a));
  g+=`<path d="M${Q(R,a0)} A${R} ${R} 0 ${lg} 1 ${Q(R,a1)} L${Q(r,a1)} A${r} ${r} 0 ${lg} 0 ${Q(r,a0)}Z" fill="${CL[i%8]}"><title>${esc(x.l)}: ${x.v} (${pc(x.v,T)})</title></path>`;a0=a1});
 const w=E("div",{style:"display:flex;gap:18px;align-items:center;flex-wrap:wrap"});
 w.append(H(`<svg viewBox="0 0 200 200" style="width:170px;flex:none">${g}<text x="100" y="108" fill="#ecebff" text-anchor="middle" font-size="26" font-weight="700">${fm(T)}</text></svg>`));
 w.append(E("div",{style:"flex:1;min-width:150px;font-size:13px"},...it.map((x,i)=>H(`<div style="display:flex;gap:8px;align-items:center;padding:3px 0"><i style="width:10px;height:10px;border-radius:3px;background:${CL[i%8]};flex:none"></i><span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(x.l)}</span><b>${pc(x.v,T)}</b></div>`))));
 return w}
const top7=(rows,lf)=>{const t=rows.slice(0,7).map(x=>({l:lf(x),v:x.n??x.v}));const o=rows.slice(7).reduce((s,x)=>s+(x.n??x.v),0);if(o)t.push({l:"Other",v:o});return t};
function rank(rows){
 const mx=Math.max(1,...rows.map(r=>r.v));
 return E("div",{},...rows.map((r,i)=>H(`<div style="display:flex;gap:10px;align-items:center;margin:8px 0"><span style="width:20px;color:var(--mute);font-size:12px">${i+1}</span>${r.av!==undefined?`<img class="av2" style="width:26px;height:26px" src="${av(r.av)}" alt="" referrerpolicy="no-referrer">`:""}<div style="flex:1;min-width:0"><div style="display:flex;justify-content:space-between;gap:8px;font-size:13px"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(r.l)}</span><span><b>${fm(r.v)}</b> <span style="color:var(--mute)">${r.p||""}</span></span></div><div class="xb" style="height:6px;margin-top:4px"><i style="width:${r.v/mx*100}%"></i></div></div></div>`)))}
function heat(hm,rl,lw){
 const mx=Math.max(1,...hm.flat()),Hh=hm.length*22+22;let g="";
 hm.forEach((r,y)=>{g+=`<text x="0" y="${y*22+15}" fill="#9a97b8" font-size="11">${esc(rl[y])}</text>`;r.forEach((v,x)=>g+=`<rect x="${lw+x*27}" y="${y*22}" width="24" height="19" rx="4" fill="#8b5cf6" opacity="${.07+v/mx*.93}"><title>${esc(rl[y])} ${hl(x)}: ${v}</title></rect>`)});
 for(let x=0;x<24;x+=3)g+=`<text x="${lw+x*27+12}" y="${Hh-4}" fill="#9a97b8" font-size="10.5" text-anchor="middle">${hl(x)}</text>`;
 return svg(lw+24*27,Hh,g)}
function bubble(us){
 const L=us.slice(0,60);if(L.length<2)return E("p",{class:"lead2"},"Needs at least 2 members.");
 const W=700,Hh=330,p=48,xs=L.map(u=>Math.log10(u.n+1)),ys=L.map(u=>u.len/u.n),mxx=Math.max(...xs)*1.05,mxy=Math.max(...ys)*1.1||1,md=a=>[...a].sort((x,y)=>x-y)[a.length>>1],
 X=v=>p+v/mxx*(W-p-20),Y=v=>Hh-36-v/mxy*(Hh-56),mxd=Math.max(...L.map(u=>u.days.size));
 let g=`<line x1="${X(md(xs))}" x2="${X(md(xs))}" y1="8" y2="${Hh-36}" stroke="#6b5fb5"/><line x1="${p}" x2="${W}" y1="${Y(md(ys))}" y2="${Y(md(ys))}" stroke="#6b5fb5"/>`;
 [["Thoughtful posters",p+8,20],["Power talkers",W-120,20],["Lurkers",p+8,Hh-44],["Rapid-fire chatters",W-150,Hh-44]].forEach(q=>g+=`<text x="${q[1]}" y="${q[2]}" fill="#c7bfff" font-size="12" font-style="italic" font-weight="700">${q[0]}</text>`);
 [...L].reverse().forEach(u=>{const i=L.indexOf(u);g+=`<circle cx="${X(xs[i])}" cy="${Y(ys[i])}" r="${6+u.days.size/mxd*15}" fill="${CL[i%8]}" fill-opacity=".62" stroke="${CL[i%8]}"><title>${esc(u.nm)}: ${u.n} msgs, avg ${Math.round(ys[i])} chars, ${u.days.size} active days</title></circle>`});
 L.slice(0,6).forEach((u,i)=>g+=`<text x="${X(xs[i])+8}" y="${Y(ys[i])-9}" fill="#ecebff" font-size="11" font-weight="700">${esc(u.nm.slice(0,14))}</text>`);
 g+=`<text x="${W/2}" y="${Hh-6}" fill="#9a97b8" font-size="11" text-anchor="middle">Messages sent (log scale) →</text><text x="12" y="${Hh/2}" fill="#9a97b8" font-size="11" transform="rotate(-90 12 ${Hh/2})" text-anchor="middle">Avg message length →</text>`;
 return E("div",{},svg(W,Hh,g),E("div",{class:"meta"},"Bubble size = number of active days. Lines mark the median member."))}
function table(cols,rows){
 let k=1,d=-1;const t=E("table",{}),draw=()=>{const s=[...rows].sort((x,y)=>{const a=cols[k][2](x),b=cols[k][2](y);return(a>b?1:a<b?-1:0)*d});
  t.replaceChildren(E("tr",{},...cols.map((c,i)=>{const h=E("th",{style:"cursor:pointer;white-space:nowrap"},c[0]+(i===k?(d<0?" ▼":" ▲"):""));h.onclick=()=>{d=i===k?-d:-1;k=i;draw()};return h})),
   ...s.slice(0,300).map(r=>E("tr",{},...cols.map(c=>{const v=c[1](r);return E("td",{},v instanceof Node?v:String(v))}))))};
 draw();return E("div",{class:"sc"},t)}
const nm=(a,id)=>(a.au.get(id)||{}).nm||"User …"+String(id).slice(-4);

/* ---------- cards ---------- */
const pBot=()=>{const d=(ST&&ST.d)||{};return E("div",{class:"kp"},
 E("div",{class:"card"},E("h3",{class:"s"},"Bot status"),E("div",{class:"pill"},E("span",{class:"dot"+(ST&&ST.on?" on":"")}),ST&&ST.on?"Online":"Offline")),
 kpi("Servers",d.guild_count??"-"),kpi("Server members",d.member_count??"-"),kpi("Latency",d.latency_ms!=null?d.latency_ms+" ms":"-"),
 E("div",{class:"card"},E("h3",{class:"s"},"Message sync"),E("div",{class:"pill"},E("span",{class:"dot"+(ST&&ST.sync?" on":"")}),ST&&ST.sync?"Working":"Not syncing")))};
const pKpi=a=>{
 const us=a.us,k=Math.max(1,Math.ceil(us.length*.1)),top=us.slice(0,k).reduce((s,u)=>s+u.n,0),dl=(c,p)=>RANGE&&p>0?(c-p)/p*100:null,pg=a.pg,tp=pg.ev+pg.he+pg.ur+pg.ro,
 bd=[...a.day.entries()].sort((x,y)=>y[1].n-x[1].n)[0],nw=RANGE?us.filter(u=>!a.pv.has(u.id)).length:null;
 return E("div",{class:"kp"},...[
 ["Messages",fm(a.n),dl(a.n,a.pn)],["Unique chatters",us.length,dl(us.length,a.pu)],["Active channels",a.ch.size],["Msgs / hour",(a.n/a.span).toFixed(1)],["Msgs per chatter",(a.n/Math.max(1,us.length)).toFixed(1)],
 ["Avg length",Math.round(a.chars/Math.max(1,a.n))+" ch"],["Attachments",pc(a.att,a.n)],["Links",pc(a.lnk,a.n)],["Questions",pc(a.q,a.n)],["ALL CAPS",pc(a.cap,a.n)],["Edited",pc(a.ed,a.n)],["Deleted",pc(a.del,a.n)],
 ["Total pings",tp],["@everyone / @here",pg.ev+" / "+pg.he],["Emojis used",fm(a.emn)],["Peak hour",hl(am(a.hr))],["Busiest weekday",DN[am(a.wd)]],["Busiest day",bd?bd[1].n+" msgs":"-",null,bd?bd[0].slice(4,10):""],
 ["Peak msgs / min",a.pk],["Median gap",fmt(a.med)],["Longest silence",fmt(a.sil)],["Top 10% share",pc(top,a.n)],["New chatters",nw??"-"],["Returning",nw==null?"-":us.length-nw]
 ].map(x=>kpi(...x)))};
const pTl=a=>{
 const ks=[...a.tl.keys()].sort((x,y)=>x-y),lb=[],d1=[],d2=[];
 for(let b=ks[0];b<=ks[ks.length-1]&&lb.length<800;b+=a.step){const o=a.tl.get(Math.floor((b-a.off)/a.step)*a.step+a.off),d=new Date(b);
  lb.push((a.step===36e5?hl(d.getHours())+" ":"")+(d.getMonth()+1)+"/"+d.getDate());d1.push(o?o.n:0);d2.push(o?o.u.size:0)}
 return card("Messages over time",line([{n:"messages",d:d1,c:"#67e8f9"},{n:"unique chatters",d:d2,c:"#f472b6"}],lb),"wide","Per "+(a.step===36e5?"hour":"day"))};
const pDaily=a=>{const ds=[...a.day.values()].sort((x,y)=>x.t-y.t);return card("Daily active chatters",line([{n:"chatters",d:ds.map(x=>x.u.size),c:"#4ade80"},{n:"messages",d:ds.map(x=>x.n),c:"#a78bfa"}],ds.map(x=>{const d=new Date(x.t);return(d.getMonth()+1)+"/"+d.getDate()})),"wide")};
const pHr=a=>card("Activity by hour of day",bars(a.hr,a.hr.map((_,i)=>hl(i)),"#8b5cf6"),"","Your local time · pink = peak"),
 pWk=a=>card("Activity by weekday",bars(a.wd,DN,"#22d3ee"),"","pink = busiest"),
 pHeat=a=>card("Weekday × hour heatmap",heat(a.hm,DN,34),"wide","Darker = more messages"),
 pTop=a=>card("Top chatters",rank(a.us.slice(0,15).map(u=>({l:u.nm,v:u.n,av:u.av,p:pc(u.n,a.n)})))),
 pChan=a=>card("Channel share",donut(top7(a.cs,c=>"#"+c.nm))),
 pChRank=a=>card("Busiest channels",rank(a.cs.slice(0,15).map(c=>({l:"#"+c.nm,v:c.n,p:pc(c.n,a.n)})))),
 pLen=a=>card("Message length",bars(a.len,["≤10","11-25","26-50","51-100","101-200","201-500","500+"],"#fbbf24"),"","Characters per message"),
 pMix=a=>card("Content mix (% of messages)",rank([["Attachments",a.att],["Links",a.lnk],["Questions",a.q],["ALL CAPS",a.cap],["Edited",a.ed],["Deleted",a.del]].map(x=>({l:x[0],v:x[1],p:pc(x[1],a.n)}))));
const pAct=a=>{
 const n=Date.now(),us=a.us.filter(u=>n-u.last<36e5).sort((x,y)=>y.last-x.last),c=m=>us.filter(u=>n-u.last<m*6e4).length;
 return card("Active right now",E("div",{},E("div",{style:"display:flex;gap:22px;margin:6px 0 12px"},...[["last 5 min",c(5)],["last 15 min",c(15)],["last hour",us.length]].map(x=>E("div",{},E("b",{class:"big"},String(x[1])),E("div",{class:"meta"},x[0])))),
  E("div",{},...us.slice(0,30).map(u=>H(`<img class="av2" style="display:inline-block;margin:2px" src="${av(u.av)}" title="${esc(u.nm)} · ${ago(u.last)}" referrerpolicy="no-referrer">`)))))};
const pFeed=a=>card("Live feed",E("div",{},...a.R.slice(0,14).map(m=>H(`<div class="fd"><img class="av2" src="${av(m.avatar_url)}" referrerpolicy="no-referrer"><div style="min-width:0"><div class="meta"><b>${esc(m.display_name||m.username)}</b> · #${esc(m.channel_name)} · ${ago(m._t)}</div><div style="word-break:break-word">${esc((m.content||(m.has_attachments?"[attachment]":"")).slice(0,160))}</div></div></div>`))));
const chips=(map,n,big)=>{const r=[...map.entries()].sort((x,y)=>y[1]-x[1]).slice(0,n),mx=r.length?r[0][1]:1;return E("div",{},...r.map(x=>H(`<span class="tg2" style="font-size:${12+(big?x[1]/mx*10:0)}px">${esc(x[0])} <b>${x[1]}</b></span>`)))};
const pWords=a=>card("Top words",chips(a.wo,40,1)),pEmo=a=>card("Top emojis",chips(a.em,24,1));
const pRec=a=>{
 const c=(f)=>[...a.us].sort(f)[0],mp=c((x,y)=>y.pr-x.pr),mg=c((x,y)=>y.pg-x.pg),lg=a.long,bd=[...a.day.entries()].sort((x,y)=>y[1].u.size-x[1].u.size)[0],lw=c((x,y)=>y.len/y.n-x.len/x.n);
 const rows=[["Longest message",lg?lg.c.length+" chars by "+lg.nm:"-"],["Quietest hour",hl(a.hr.indexOf(Math.min(...a.hr)))],["Most chatters in a day",bd?bd[1].u.size+" ("+bd[0].slice(4,10)+")":"-"],["Wordiest member",lw?lw.nm+" ("+Math.round(lw.len/lw.n)+" ch avg)":"-"],["Most pinged",mp&&mp.pr?mp.nm+" ("+mp.pr+")":"-"],["Biggest pinger",mg&&mg.pg?mg.nm+" ("+mg.pg+")":"-"],["Top channel",a.cs[0]?"#"+a.cs[0].nm+" ("+pc(a.cs[0].n,a.n)+")":"-"],["Top chatter",a.us[0]?a.us[0].nm+" ("+pc(a.us[0].n,a.n)+")":"-"]];
 return card("Records",E("table",{},...rows.map(r=>E("tr",{},E("td",{style:"color:var(--mute)"},r[0]),E("td",{},r[1])))))};
const ucell=u=>H(`<span style="display:flex;gap:8px;align-items:center"><img class="av2" style="width:24px;height:24px" src="${av(u.av)}" referrerpolicy="no-referrer">${esc(u.nm)}</span>`);
const G=(...c)=>E("div",{class:"g2"},...c),EMPTY=()=>[E("div",{class:"note"},"No messages in this range yet. Try a longer range, or check that message sync is on in Settings.")];

/* ---------- pages ---------- */
function pingPage(a){
 const g=a.pg,tp=g.ev+g.he+g.ur+g.ro,nmr=id=>"Role …"+String(id).slice(-4),
 rk=(m,f,av_)=>rank([...m.entries()].sort((x,y)=>y[1]-x[1]).slice(0,12).map(([k,v])=>({l:f(k),v,p:pc(v,tp),...(av_?{av:(a.au.get(k)||{}).av||""}:{})})));
 if(!tp)return[E("div",{class:"note"},"No pings in this range. Pings are detected from user mentions, role mentions, @everyone and @here in saved messages.")];
 return[E("div",{class:"kp"},kpi("Total pings",tp),kpi("@everyone",g.ev),kpi("@here",g.he),kpi("User pings",g.ur),kpi("Role pings",g.ro),kpi("Pings / 100 msgs",(tp/Math.max(1,a.n)*100).toFixed(1))),
 G(card("Ping types",donut([{l:"User",v:g.ur},{l:"Role",v:g.ro},{l:"@everyone",v:g.ev},{l:"@here",v:g.he}].filter(x=>x.v))),
 card("Channels with most pings",rk(g.bc,k=>"#"+k)),card("Most pinged members",rk(g.u,k=>nm(a,k),1)),card("Biggest pingers",rk(g.by,k=>nm(a,k),1)),
 card("Most pinged roles",g.r.size?rk(g.r,nmr):E("p",{class:"lead2"},"No role pings."),"","Role names aren't stored, so roles show by ID tail")) ]}
P.overview=page("Overview","Everything happening in your server, in one place. Times are your local time.",a=>a.n?[pBot(),pKpi(a),G(pTl(a),pHr(a),pWk(a),pHeat(a),pTop(a),pChan(a),card("Member map",bubble(a.us),"wide","Who talks a lot vs. who writes long"),pAct(a),pFeed(a),pChRank(a),pLen(a),pMix(a),pWords(a),pEmo(a),pRec(a))]:[pBot(),...EMPTY()]);
P.activity=page("Activity","When your server is alive.",a=>a.n?[pKpi(a),G(pTl(a),pDaily(a),pHr(a),pWk(a),pHeat(a),pLen(a),pMix(a))]:EMPTY());
P.members=page("Members","Every chatter, sortable. Click a column to sort.",(a,box)=>{
 if(!a.n)return EMPTY();
 const pk=u=>am(u.hr),tc=u=>[...u.chs.entries()].sort((x,y)=>y[1]-x[1])[0][0],
 cols=[["Member",ucell,u=>u.nm.toLowerCase()],["Messages",u=>u.n,u=>u.n],["Share",u=>pc(u.n,a.n),u=>u.n],["Active days",u=>u.days.size,u=>u.days.size],["Avg len",u=>Math.round(u.len/u.n),u=>u.len/u.n],["Top channel",u=>"#"+tc(u),u=>tc(u)],["Peak hour",u=>hl(pk(u)),u=>pk(u)],["Pings sent",u=>u.pg,u=>u.pg],["Pinged",u=>u.pr,u=>u.pr],["Last seen",u=>ago(u.last),u=>u.last]],
 q=E("input",{type:"search",placeholder:"Search member",style:"margin-bottom:12px"}),tb=E("div",{}),fill=()=>{const s=q.value.toLowerCase();tb.replaceChildren(table(cols,a.us.filter(u=>u.nm.toLowerCase().includes(s))))};
 q.oninput=fill;fill();return[pKpi(a),G(card("Member map",bubble(a.us),"wide","Who talks a lot vs. who writes long"),pTop(a),card("Members by share",donut(top7(a.us,u=>u.nm)))),E("div",{class:"card",style:"margin-top:14px"},E("h3",{class:"s"},"All members ("+a.us.length+")"),q,tb)]});
P.channels=page("Channels","Where the talking happens.",a=>{
 if(!a.n)return EMPTY();
 const pk=c=>am(c.hr),cols=[["Channel",c=>"#"+c.nm,c=>c.nm],["Messages",c=>c.n,c=>c.n],["Share",c=>pc(c.n,a.n),c=>c.n],["Chatters",c=>c.au.size,c=>c.au.size],["Avg len",c=>Math.round(c.len/c.n),c=>c.len/c.n],["Pings",c=>c.pg,c=>c.pg],["Peak hour",c=>hl(pk(c)),c=>pk(c)],["Last message",c=>ago(c.last),c=>c.last]],t8=a.cs.slice(0,10);
 return[G(pChan(a),pChRank(a),card("Channel × hour heatmap",heat(t8.map(c=>c.hr),t8.map(c=>"#"+c.nm.slice(0,13)),100),"wide","Top 10 channels"),card("All channels",table(cols,a.cs),"wide"))]});
P.pings=page("Pings","Mentions, @everyone, @here and role pings.",a=>pingPage(a));

/* ---------- page factory ---------- */
const dl=(n,rows)=>{const c=rows.map(r=>r.map(v=>'"'+String(v??"").replace(/"/g,'""')+'"').join(",")).join("\n"),x=E("a",{href:URL.createObjectURL(new Blob([c],{type:"text/csv"})),download:n});document.body.append(x);x.click();x.remove()};
function page(t,l,fn){return async()=>{
 const box=E("div"),dot=E("span",{class:"dot"}),pill=E("span",{class:"pill"},dot,"Live"),info=E("span",{class:"meta"}),bs=[];let tm,S=null;
 const draw=()=>{S=analyze();info.textContent=fm(DATA.length)+" messages loaded"+(CAPPED?" (capped at 15,000)":"");box.replaceChildren(...fn(S,box))},
 reload=async()=>{box.replaceChildren(E("p",{class:"lead2"},"Crunching the numbers..."));try{await load();try{ST=await status()}catch(e){}draw()}catch(e){box.replaceChildren(E("p",{class:"err"},"Could not load: "+e.message))}};
 RG.forEach(([n,ms])=>{const b=E("button",{class:"chip"+(ms===RANGE?" on":""),type:"button"},n);b.onclick=()=>{RANGE=ms;bs.forEach(x=>x.classList.toggle("on",x===b));reload()};bs.push(b)});
 const rf=E("button",{class:"chip",type:"button"},"↻ Refresh"),e1=E("button",{class:"chip",type:"button"},"⬇ Messages CSV"),e2=E("button",{class:"chip",type:"button"},"⬇ Members CSV");
 rf.onclick=reload;
 e1.onclick=()=>S&&dl("4ev-messages.csv",[["time","channel","user","content"],...S.R.map(m=>[m.created_at,m.channel_name,m.username,m.content])]);
 e2.onclick=()=>S&&dl("4ev-members.csv",[["member","messages","active_days","avg_len","pings_sent","pinged","last_seen"],...S.us.map(u=>[u.nm,u.n,u.days.size,Math.round(u.len/u.n),u.pg,u.pr,new Date(u.last).toISOString()])]);
 rt=sb.channel("an"+Date.now()).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages"},p=>{const m=p.new;if(m&&m.id&&!DATA.some(x=>x.id===m.id)){DATA.unshift(m);clearTimeout(tm);tm=setTimeout(draw,4000)}}).subscribe(s=>{dot.className="dot"+(s==="SUBSCRIBED"?" on":"")});
 poll=setInterval(()=>{if(S)draw()},60000);
 if(LR===RANGE&&Date.now()-LOADED<45000)draw();else reload();
 return[...head(t,l),E("div",{class:"chips",style:"margin:0 0 16px;align-items:center"},...bs,rf,e1,e2,pill,info),box]}}

/* ---------- wire into the existing site ---------- */
vOverview=P.overview;
async function go(k){cur=k;cleanup();const m=$("#view");m.replaceChildren(E("p",{class:"lead2"},"Loading..."));try{m.replaceChildren(...await P[k]())}catch(e){m.replaceChildren(E("p",{class:"err"},"Could not load this page: "+e.message))}}
[["activity","📈","Activity"],["members","👥","Members"],["channels","#️⃣","Channels"],["pings","🔔","Pings"]].forEach(n=>{
 const b=E("button",{class:"nb","data-v":n[0]},E("span",{},n[1]),E("span",{class:"lbl"},n[2]));
 b.onclick=()=>{$$(".nb").forEach(x=>x.classList.toggle("on",x===b));go(n[0])};
 $("#nav").insertBefore(b,$("#nav .sp"))});
})();
