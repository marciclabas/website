import{e as y,b as C,t as $}from"../chunks/P0D73kJ1.js";import"../chunks/BcXinCc6.js";import{Y as I,Z as T,_ as Y,$ as a,a0 as s,a1 as e,a2 as j,a3 as E,n as Z}from"../chunks/AEA45JGj.js";import{s as q}from"../chunks/DNSltunA.js";import{i as z}from"../chunks/IkDDaerP.js";import{I as t}from"../chunks/CXRXIfnD.js";var A=$('<div class="contact-container svelte-1jsrvbj"><h1 class="svelte-1jsrvbj">Contact</h1> <div class="email-section svelte-1jsrvbj"><div class="email-box svelte-1jsrvbj"><span class="email-text svelte-1jsrvbj"></span> <button class="copy-button svelte-1jsrvbj" aria-label="Copy email"><!></button></div> <div>Copied! <div class="popover-arrow svelte-1jsrvbj"></div></div></div> <p class="find-me-title svelte-1jsrvbj">You can also find me here:</p> <div class="social-links svelte-1jsrvbj"><a href="https://github.com/marciclabas" target="_blank" class="social-link svelte-1jsrvbj"><!></a> <a href="https://www.instagram.com/marcel.claramunt" target="_blank" class="social-link svelte-1jsrvbj"><!></a> <a href="https://www.linkedin.com/in/marcel-claramunt" target="_blank" class="social-link svelte-1jsrvbj"><!></a></div></div>');function K(h,f){I(f,!1);let m="marcel@marcelc.uk",i=E(!1);function u(){navigator.clipboard.writeText(m).then(()=>{j(i,!0),setTimeout(()=>j(i,!1),700)})}z();var l=A(),r=s(a(l),2),o=a(r),d=a(o);d.textContent=m;var v=s(d,2),_=a(v);t(_,{icon:"lucide:copy",width:"28",height:"28"}),e(v),e(o);var g=s(o,2);e(r);var p=s(r,4),n=a(p),k=a(n);t(k,{icon:"mdi:github"}),e(n);var c=s(n,2),w=a(c);t(w,{icon:"mdi:instagram"}),e(c);var b=s(c,2),x=a(b);t(x,{icon:"mdi:linkedin"}),e(b),e(p),e(l),T(()=>q(g,`${`copied-popover ${Z(i)?"":"hidden"}`??""} svelte-1jsrvbj`)),y("click",v,u),C(h,l),Y()}export{K as component};
