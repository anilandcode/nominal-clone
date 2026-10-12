const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./e5vNhAqg.js","./DYClljiz.js","./BcaMY1Iz.js","./BfsisZwU.js","./yi-kIxl6.js","./entry.DrECRBKp.css","./DXQVZ2KW.js","./AlertBanner.DZFT0pVu.css","./DkcSQHDq.js","./D2jQiTPD.js","./DC_RnCQE.js","./Cb7RTzMq.js","./DzE4A8EI.js","./BIWLOdp6.js","./CF2FtZqh.js","./Cjdu7iAy.js","./DJRyUYr-.js","./CMJCOH9Y.js","./CCfhJXTu.js","./Ce67hNxG.js","./BQDqA7gB.js","./Header.kTKOD6_f.css","./DZ4hod7-.js","./CyoNV6YF.js","./ImageHandler.CFnY2e67.css","./Footer.Dr4lD0Hl.css"])))=>i.map(i=>d[i]);
import{_ as j}from"./BfsisZwU.js";import J from"./CMJCOH9Y.js";import{d as x,H as Y,N as ee,X as te,O as ne,o as h,b as g,y as v,aA as P,aB as oe,e as U,q as A,s as D,R as L,$ as V,M as b,g as ae,f as se,h as z,j as re,T as G,K as $,k as ie,W as ce,l as E,u as p,c as W,w as F,A as le,B as ue,p as de,m as R,D as q,t as I,aC as pe,v as _e,ae as me,a as f,ak as fe,ai as he,_ as ve,aD as Q}from"./BcaMY1Iz.js";import ge from"./CCfhJXTu.js";import K from"./Ce67hNxG.js";import{l as ye,s as we,y as be,w as T,i as ke,x as xe}from"./BQDqA7gB.js";import{u as Ce}from"./CF2FtZqh.js";import{u as H}from"./Cjdu7iAy.js";const Se={id:"page-transition"},$e=x({__name:"PageTransition",setup(t){const{$lenis:e}=Y();function o(){document.documentElement.classList.remove(P)}ee(()=>{document.documentElement.classList.contains(P)&&(e.value?.scrollTo(0,{immediate:!0}),e.value?.stop(),oe("#page-transition",{type:"hide",onComplete:()=>{o(),e.value?.start()}}))});const s=te().beforeEach(o);return ne(s),(a,d)=>{const l=J;return h(),g("div",Se,[v(l,{class:"logo"})])}}}),Ie=Object.assign(U($e,[["__scopeId","data-v-f1c300d4"]]),{__name:"PageTransition"}),O="https://nominal.so";function S(t){let e=(t??"").split(/[?#]/)[0]??"";return e.startsWith("/")||(e=`/${e}`),e=e.replace(/\/+$/,""),e===""?"/":e}function He(t){if(!t?.length)return null;for(let e=t.length-1;e>=0;e--){const o=t[e];if(!(!o?.text||!o.link)&&(o.link.page?.slug||o.link.url))return o}return null}function Ae(t,e){const o=a=>a.toLowerCase().replace(/^www\./,""),s=new Set;for(const a of[e,O])try{s.add(o(new URL(a).hostname))}catch{}return s.has(o(t))}function Le(t,e,o=O){if(!t||t.linkPageModule&&t.pageModule)return!1;if(t.page?.slug)return S(t.page.slug)===S(e);if(!t.url)return!1;let s=null;for(const a of[o,O])try{s=new URL(t.url,a);break}catch{}return!s||s.protocol!=="http:"&&s.protocol!=="https:"||s.hash||!Ae(s.hostname,o)?!1:S(s.pathname)===S(e)}const Re="hs-chat-open",B=new WeakSet;let N=!1;function Oe(){const t=A("hs-chat-ready",()=>!1),e=A("hs-chat-open",()=>!1),o=a=>{t.value=a.widget.status().loaded,!B.has(a)&&(B.add(a),a.on("widgetLoaded",()=>{t.value=!0}),e.value=!1,a.on("widgetClosed",()=>{e.value=!1}))};window.HubSpotConversations&&o(window.HubSpotConversations),N||(N=!0,window.hsConversationsOnReady=window.hsConversationsOnReady??[],window.hsConversationsOnReady.push(()=>{window.HubSpotConversations&&o(window.HubSpotConversations)})),D(e,a=>{document.documentElement.classList.toggle(Re,a)},{immediate:!0});const s=()=>{const a=window.HubSpotConversations;a&&(a.widget.open(),e.value=!0)};return{ready:L(t),isOpen:L(e),openChat:s}}function De(){const t=(r,c)=>{document.documentElement.style.setProperty(`--${r}`,`${c}px`),s.value[r]=c},e=(r="variable",c)=>{t(r,c.offsetHeight),a.value=r,d.value=c,l?.observe(c)},o=r=>s.value[r],s=A("heightState",()=>({})),a=b(""),d=b(null);let l;return l=new ResizeObserver(r=>{for(const c of r)c.contentRect&&t(a.value,c.borderBoxSize[0].blockSize)}),V(()=>{l&&d.value&&l.unobserve(d.value)}),{addDynamicEl:e,dynamicHeights:L(s),getHeight:o}}const k=`
_key,
_type,
text,
link != null => {
   ${ye}
},
showAsComplexItem =>{
   showAsComplexItem,
   icon{
      ${we}
   },
   oneLinerText
}
`,X=`
_type,
_key,
label,
'hasChildren': count(navItems) > 0,
'hasSubGroups': count(navItems[_type == 'navSubGroup']) > 0,
'hasComplex': count(navItems[_type == 'navItem' && showAsComplexItem == true]) > 0,
'children': navItems[] {
   _type == 'navItem' => {
      ${k}
   },
   _type == 'navSubGroup' => {
      _type,
      _key,
      label,
      'children': navItems[] {
         ${k}
      }
   },
}`,Ee=T`
*[_type == 'header' && _id == 'header'][0] {
   _type,
   _rev,
   _id,
   navItems[] {
      _type == 'navItem' => {
         ${k}
      },
      _type == 'navGroup' => {
         ${X}
      },
   },
   ctaItems[] {
      ${k}
   },
   "alertBanner": *[_type == 'alertBanner' && _id == 'alertBanner' && @.active == true][0] {
      _type,
      _id,
      active,
      text,
      link {
         ${be}
      }
   }
}`,Te=T`*[_type == 'footer' && _id == 'footer'][0] {  
   _type,
   _id,
   _rev,
   footerNav[] {
      _type == 'navGroupFooter' => {
         ${X}
      }
   },
   legalNav[] {
      _type == 'navItem' => {
         ${k}
      }
   },
   badges[]{
      ${ke}
   }
}`,Pe=T`{
   "header": ${Ee},
   "footer": ${Te}
}`;function ze(t){return t.runWithContext(()=>{const e=se().enabled.value;return(e?z("preview"):z()).fetch(Pe,{preview:e,t:xe(Date.now())})})}function Be(){return ae("sanity-layout",ze,{dedupe:"defer"})}const Ne=x({__name:"StickyCta",async setup(t){let e,o;const s=re(),a=Oe(),{siteUrl:d}=G().public,{addDynamicEl:l}=De(),r=$("bar"),{data:c}=([e,o]=ie(()=>Be()),e=await e,o(),e),_=I(()=>He(c.value?.header?.ctaItems)),m=I(()=>Le(_.value?.link,s.path,d)),w=I(()=>_.value!==null&&!m.value);return ce({htmlAttrs:{class:{"has-sticky-cta":w}}}),E(()=>{r.value&&l("sticky-cta-height",r.value)}),(C,u)=>{const n=ge,i=K;return p(_)?(h(),g("div",{key:0,ref_key:"bar",ref:r,class:q(["sticky-cta",{"is-hidden":p(m)}])},[(h(),W(n,de({key:p(s).path},p(_).link,{class:"sticky-cta-link"}),{default:F(()=>[le(ue(p(_).text),1)]),_:1},16)),p(a).ready.value?(h(),g("button",{key:0,type:"button",class:"sticky-cta-chat","aria-label":"Chat with us",onClick:u[0]||(u[0]=y=>p(a).openChat())},[v(i,{class:"icon","aria-hidden":"true"})])):R("",!0)],2)):R("",!0)}}}),Me=Object.assign(Ne,{__name:"StickyCta"}),je=["aria-expanded"],Ue={id:"ask-ai-panel",class:"ask-ai-panel",role:"dialog","aria-label":"Ask AI about Nominal"},M="askaiwidget-script-loader",Ve="https://cdn.askaiwidget.com/widget.js",Ge=x({__name:"AskAi",setup(t){const{allowed:e}=pe(),{askaiwidgetId:o}=G().public,s=Ce(),a=$("root"),d=$("trigger"),l=$("vendorHost"),r=b(!1),c=b(!1),_=()=>{r.value=!r.value},m=({refocus:u=!1}={})=>{r.value&&(r.value=!1,u&&d.value?.focus())},w=async()=>{const u=l.value;if(!u||!o||u.querySelector(`#${M}`))return;const n=document.createElement("script");n.id=M,n.async=!0,n.src=Ve,n.dataset.widgetId=o,n.dataset.mode="inline";const i=new Promise(y=>{n.onload=()=>y(!0),n.onerror=()=>y(!1)});u.appendChild(n),await i&&(await customElements.whenDefined("ask-ai-widget"),c.value=u.querySelector("ask-ai-widget")!==null)},C=()=>{m(),c.value=!1,l.value?.replaceChildren()};return E(()=>{D([e,()=>s.value.mobile===!0],([u,n])=>{u&&!n?w():C()},{immediate:!0})}),H(document,"click",u=>{r.value&&(a.value?.contains(u.target)||m())}),H(document,"keydown",u=>{u.key==="Escape"&&m({refocus:!0})}),H(document,"visibilitychange",()=>{document.hidden&&m()}),(u,n)=>{const i=K;return _e((h(),g("div",{ref_key:"root",ref:a,class:q(["ask-ai",{open:p(r)}])},[f("button",{ref_key:"trigger",ref:d,type:"button",class:"ask-ai-trigger","aria-expanded":p(r),"aria-controls":"ask-ai-panel",onClick:_},[v(i,{class:"icon","aria-hidden":"true"}),n[0]||(n[0]=f("span",null,"Ask AI about Nominal",-1))],8,je),f("div",Ue,[f("div",{ref_key:"vendorHost",ref:l,class:"ask-ai-vendor"},null,512)])],2)),[[me,p(c)]])}}}),We=Object.assign(U(Ge,[["__scopeId","data-v-385a0f3d"]]),{__name:"AskAi"}),Fe=x({__name:"DevHubspotLauncher",setup(t){const e=b(!1),o=new Map,s=n=>{o.get(n)?.forEach(i=>i())},a=(n,i)=>{e.value!==n&&(e.value=n,console.log(`[HubSpot mock] ${i} → widget ${n?"open":"closed"}`),n||s("widgetClosed"))},d=()=>a(!e.value,"launcher clicked"),l={__devMock:!0,widget:{open:()=>a(!0,"widget.open()"),close:()=>a(!1,"widget.close()"),status:()=>({loaded:!0})},on:(n,i)=>{o.has(n)||o.set(n,new Set),o.get(n).add(i)},off:(n,i)=>{o.get(n)?.delete(i)}};D(e,n=>{document.documentElement.classList.toggle("hs-messages-widget-open",n)});const r=n=>{const i=window.HubSpotConversations,y=i?.__devMock?null:i?.widget.status();if(y&&(y.loaded||y.pending)){console.warn(`[HubSpot mock] real widget loaded or loading; not shimming (${n})`);return}window.HubSpotConversations!==l&&(window.HubSpotConversations=l,window.hsConversationsOnReady?.forEach(Z=>Z()),console.log(`[HubSpot mock] API shim installed (${n}${i?`, replacing ${i.__devMock?"previous mock":"real API with no chatflow here"}`:""})`))};E(()=>{r("mount"),window.hsConversationsOnReady=window.hsConversationsOnReady??[],window.hsConversationsOnReady.push(()=>r("vendor script loaded"))}),V(()=>{document.documentElement.classList.remove("hs-messages-widget-open"),window.HubSpotConversations===l&&delete window.HubSpotConversations});const c=I(()=>({width:e.value?"min(100%, 376px)":"100px",height:e.value?"min(100%, 530px)":"96px",zIndex:"2147483647",position:"fixed",bottom:"0px",right:"0px"})),_={position:"absolute",right:"20px",bottom:"20px",width:"60px",height:"60px",borderRadius:"50%",border:"0",background:"#1a1a1a",color:"#fff",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},m={position:"absolute",inset:"0",background:"#fff",borderRadius:"8px 8px 0 0",boxShadow:"0 4px 24px rgba(0, 0, 0, 0.2)",display:"flex",flexDirection:"column",fontFamily:"system-ui, sans-serif",fontSize:"14px",color:"#33475b"},w={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px",background:"#1a1a1a",color:"#fff",fontWeight:"600"},C={border:"0",background:"transparent",color:"inherit",fontSize:"16px",cursor:"pointer"},u={margin:"0",padding:"16px"};return(n,i)=>(h(),g("div",{id:"hubspot-messages-iframe-container",class:"widget-align-right",style:fe(p(c))},[p(e)?(h(),g("div",{key:0,style:m},[f("div",{style:w},[i[0]||(i[0]=f("span",null,"HubSpot chat (dev mock)",-1)),f("button",{type:"button",style:C,onClick:d},"✕")]),f("p",{style:u}," Nothing here works. This exists to compare layout with the sticky CTA bar. ")])):(h(),g("button",{key:1,type:"button","aria-label":"Open chat (dev mock)",style:_,onClick:d},[...i[1]||(i[1]=[f("svg",{viewBox:"0 0 24 24",width:"28",height:"28","aria-hidden":"true"},[f("path",{fill:"currentColor",d:"M12 3C6.48 3 2 6.58 2 11c0 2.1 1 4 2.68 5.42L4 21l4.6-2.03c1.06.3 2.2.47 3.4.47 5.52 0 10-3.58 10-8s-4.48-8-10-8Z"})],-1)])]))],4))}}),qe=Object.assign(Fe,{__name:"DevHubspotLauncher"}),Qe=Q(()=>j(()=>import("./e5vNhAqg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url).then(t=>t.default||t)),Ke=Q(()=>j(()=>import("./DZ4hod7-.js"),__vite__mapDeps([22,17,2,3,4,5,9,10,11,12,13,14,15,23,24,18,19,20,25]),import.meta.url).then(t=>t.default||t)),Xe=x({__name:"default",setup(t){return(o,s)=>{const a=Ie,d=Qe,l=Ke,r=Me,c=We,_=qe,m=ve;return h(),g("div",null,[v(a),v(d),f("main",null,[he(o.$slots,"default")]),v(l),v(r),v(m,null,{default:F(()=>[v(c),p(!1)?(h(),W(_,{key:0})):R("",!0)]),_:1})])}}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));export{st as _,Be as a,De as u};
