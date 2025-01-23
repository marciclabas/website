import{k as Y,b as A,t as O}from"../chunks/DgiPPmIb.js";import{E as aa,aM as ea,aN as ta,aC as ra,m as ia,y as q,az as sa,Q as na,n as P,aO as oa,aI as V,at as B,G as la,a3 as ca,q as _,a4 as va,a1 as h,a0 as y,a5 as D,a2 as w,_ as G,a8 as fa,Z as da,$ as ua,aP as pa}from"../chunks/1lb48adb.js";import{a as _a,s as U,b as ha}from"../chunks/BXcLzbSR.js";import{s as ma}from"../chunks/BNjBaBkJ.js";import{o as ba}from"../chunks/BBSExq8H.js";import"../chunks/CoP2xwvO.js";import{i as H}from"../chunks/BaM7NXhH.js";import{e as K,i as Q}from"../chunks/CkesIKIL.js";import{a as F}from"../chunks/z1-7Smx-.js";import{I as z}from"../chunks/DhO4Qrhb.js";import{b as M}from"../chunks/C-_hnOkE.js";const ga=()=>performance.now(),x={tick:e=>requestAnimationFrame(e),now:()=>ga(),tasks:new Set};function J(){const e=x.now();x.tasks.forEach(a=>{a.c(e)||(x.tasks.delete(a),a.f())}),x.tasks.size!==0&&x.tick(J)}function $a(e){let a;return x.tasks.size===0&&x.tick(J),{promise:new Promise(t=>{x.tasks.add(a={c:e,f:t})}),abort(){x.tasks.delete(a)}}}function I(e,a){e.dispatchEvent(new CustomEvent(a))}function ya(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const a=e.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Z(e){const a={},t=e.split(";");for(const s of t){const[v,l]=s.split(":");if(!v||l===void 0)break;const c=ya(v.trim());a[c]=l.trim()}return a}const wa=e=>e;function xa(e,a,t,s){var v=(e&oa)!==0,l="both",c,p=a.inert,E=a.style.overflow,i,n;function m(){var f=la,o=q;V(null),B(null);try{return c??(c=t()(a,(s==null?void 0:s())??{},{direction:l}))}finally{V(f),B(o)}}var b={is_global:v,in(){a.inert=p,I(a,"introstart"),i=W(a,m(),n,1,()=>{I(a,"introend"),i==null||i.abort(),i=c=void 0,a.style.overflow=E})},out(f){a.inert=!0,I(a,"outrostart"),n=W(a,m(),i,0,()=>{I(a,"outroend"),f==null||f()})},stop:()=>{i==null||i.abort(),n==null||n.abort()}},u=q;if((u.transitions??(u.transitions=[])).push(b),_a){var d=v;if(!d){for(var r=u.parent;r&&r.f&aa;)for(;(r=r.parent)&&!(r.f&ea););d=!r||(r.f&ta)!==0}d&&ra(()=>{ia(()=>b.in())})}}function W(e,a,t,s,v){var l=s===1;if(sa(a)){var c,p=!1;return na(()=>{if(!p){var f=a({direction:l?"in":"out"});c=W(e,f,t,s,v)}}),{abort:()=>{p=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(t==null||t.deactivate(),!(a!=null&&a.duration))return v(),{abort:P,deactivate:P,reset:P,t:()=>s};const{delay:E=0,css:i,tick:n,easing:m=wa}=a;var b=[];if(l&&t===void 0&&(n&&n(0,1),i)){var u=Z(i(0,1));b.push(u,u)}var d=()=>1-s,r=e.animate(b,{duration:E});return r.onfinish=()=>{var f=(t==null?void 0:t.t())??1-s;t==null||t.abort();var o=s-f,C=a.duration*Math.abs(o),g=[];if(C>0){var j=!1;if(i)for(var R=Math.ceil(C/16.666666666666668),k=0;k<=R;k+=1){var $=f+o*m(k/R),N=Z(i($,1-$));g.push(N),j||(j=N.overflow==="hidden")}j&&(e.style.overflow="hidden"),d=()=>{var T=r.currentTime;return f+o*m(T/C)},n&&$a(()=>{if(r.playState!=="running")return!1;var T=d();return n(T,1-T),!0})}r=e.animate(g,{duration:C,fill:"forwards"}),r.onfinish=()=>{d=()=>s,n==null||n(s,1-s),v()}},{abort:()=>{r&&(r.cancel(),r.effect=null,r.onfinish=P)},deactivate:()=>{v=P},reset:()=>{s===0&&(n==null||n(1,0))},t:()=>d()}}const Ca=!0,Ga=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ca},Symbol.toStringTag,{value:"Module"}));function ka(e){const a=e-1;return a*a*a+1}function Fa(e,{delay:a=0,duration:t=400,easing:s=ka,axis:v="y"}={}){const l=getComputedStyle(e),c=+l.opacity,p=v==="y"?"height":"width",E=parseFloat(l[p]),i=v==="y"?["top","bottom"]:["left","right"],n=i.map(o=>`${o[0].toUpperCase()}${o.slice(1)}`),m=parseFloat(l[`padding${n[0]}`]),b=parseFloat(l[`padding${n[1]}`]),u=parseFloat(l[`margin${n[0]}`]),d=parseFloat(l[`margin${n[1]}`]),r=parseFloat(l[`border${n[0]}Width`]),f=parseFloat(l[`border${n[1]}Width`]);return{delay:a,duration:t,easing:s,css:o=>`overflow: hidden;opacity: ${Math.min(o*20,1)*c};${p}: ${o*E}px;padding-${i[0]}: ${o*m}px;padding-${i[1]}: ${o*b}px;margin-${i[0]}: ${o*u}px;margin-${i[1]}: ${o*d}px;border-${i[0]}-width: ${o*r}px;border-${i[1]}-width: ${o*f}px;min-${p}: 0`}}function S(e,a){ca(a,!_(a))}var Ma=O('<a class="svelte-n5pt3h"> <!></a>'),Ea=O('<a class="svelte-n5pt3h"> <!></a>'),Ta=O('<div class="mobile-nav-overlay svelte-n5pt3h"></div> <nav class="mobile-nav svelte-n5pt3h"><button class="close-menu svelte-n5pt3h" aria-label="Close menu"><!></button> <!> <a class="hire-button svelte-n5pt3h">Hire Me</a></nav>',1),Aa=O('<header class="header svelte-n5pt3h"><a class="logo svelte-n5pt3h"><img alt="Marcel Claramunt Logo" class="svelte-n5pt3h"> <span class="svelte-n5pt3h">Marcel Claramunt</span></a> <nav class="nav desktop-nav svelte-n5pt3h"><!> <a class="hire-button svelte-n5pt3h">Hire Me</a></nav> <button class="menu-button svelte-n5pt3h" aria-label="Open menu"><!></button> <!></header>');function Oa(e){let a=va(!1);const t=[{label:"Home",href:`${M}/`},{label:"Projects",href:`${M}/projects`},{label:"CV",href:`${M}/cv`},{label:"Contact",href:`${M}/contact`},{label:"Writing",href:"https://medium.com/@marcelclaramunt",external:!0}];var s=Aa(),v=y(s);F(v,"href",`${M}/`);var l=y(v);F(l,"src",`${M}/favicon.svg`),D(2),w(v);var c=h(v,2),p=y(c);K(p,1,()=>t,Q,(u,d)=>{var r=Ma(),f=y(r),o=h(f);{var C=g=>{z(g,{icon:"lucide:external-link",inline:!0})};H(o,g=>{_(d).external&&g(C)})}w(r),G(()=>{F(r,"href",_(d).href),F(r,"target",_(d).external?"_blank":"_self"),U(f,`${_(d).label??""} `)}),A(u,r)});var E=h(p,2);F(E,"href",`${M}/hire`),w(c);var i=h(c,2);i.__click=[S,a];var n=y(i);z(n,{icon:"lucide:menu",width:"32",height:"32"}),w(i);var m=h(i,2);{var b=u=>{var d=Ta(),r=fa(d);r.__click=[S,a];var f=h(r,2),o=y(f);o.__click=[S,a];var C=y(o);z(C,{icon:"lucide:x",width:"32",height:"32"}),w(o);var g=h(o,2);K(g,1,()=>t,Q,(R,k)=>{var $=Ea();$.__click=[S,a];var N=y($),T=h(N);{var X=L=>{z(L,{icon:"lucide:external-link",inline:!0})};H(T,L=>{_(k).external&&L(X)})}w($),G(()=>{F($,"href",_(k).href),F($,"target",_(k).external?"_blank":"_self"),U(N,`${_(k).label??""} `)}),A(R,$)});var j=h(g,2);F(j,"href",`${M}/hire`),j.__click=[S,a],w(f),xa(3,f,()=>Fa,()=>({duration:300,axis:"x"})),A(u,d)};H(m,u=>{_(a)&&u(b)})}w(s),A(e,s)}Y(["click"]);var ja=O('<meta name="description" content="Marcel Claramunt - Coder, Musician, Athlete. Personal website and portfolio.">'),Na=O('<div class="container svelte-1v7ctuj"><!> <!> <div class="footer svelte-1v7ctuj">© 2025 Marcel Claramunt. All Rights Reserved.</div></div>');function Ua(e,a){da(a,!0),ba(l=>{if(document.startViewTransition)return new Promise(c=>{document.startViewTransition(async()=>{c(),await l.complete})})});var t=Na();ha(l=>{var c=ja();pa.title="Marcel Claramunt",A(l,c)});var s=y(t);Oa(s);var v=h(s,2);ma(v,()=>a.children),D(2),w(t),A(e,t),ua()}export{Ua as component,Ga as universal};
