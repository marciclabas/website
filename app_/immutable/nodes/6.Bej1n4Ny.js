import{b as f,t as g}from"../chunks/P0D73kJ1.js";import"../chunks/BcXinCc6.js";import{Y as _,$ as a,a0 as o,a1 as t,Z as b,_ as P,n as w}from"../chunks/AEA45JGj.js";import{e as x,i as y}from"../chunks/BDUNuXOz.js";import{s as A}from"../chunks/B9LvbRtn.js";import{s as d}from"../chunks/BtkkF44h.js";import{a as p}from"../chunks/5qifIxlA.js";import{b as l}from"../chunks/DpIkpiWp.js";var G=g('<div class="project-preview svelte-19nfm82"><img class="project-image svelte-19nfm82"> <div class="project-info svelte-19nfm82"><h2 class="project-title svelte-19nfm82"> </h2> <p class="project-description svelte-19nfm82"> </p> <a class="view-more-button svelte-19nfm82">View Project</a></div></div>');function T(v,e){_(e,!0);const i=e.image.startsWith("/")?`${l}${e.image}`:e.image;var s=G(),r=a(s);p(r,"src",i);var n=o(r,2),c=a(n),h=a(c,!0);t(c);var m=o(c,2),j=a(m,!0);t(m);var u=o(m,2);t(n),t(s),b(()=>{p(r,"alt",e.title),d(h,e.title),d(j,e.description),p(u,"href",`${l}/projects/${e.id}`)}),f(v,s),P()}const C=[{title:"Moveread",description:"An AI-powered scoresheet digitation service for chess tournaments.",image:"/media/projects/moveread-screenshot.png",id:"moveread"},{title:"RepoGPT",description:"A Chrome Extension to create custom GPTs from GitHub repos.",image:"/media/projects/repogpt-screenshot.png",id:"repogpt"}];var E=g('<div class="projects-container svelte-dvv9y5"><h1 class="projects-title svelte-dvv9y5">Projects</h1> <div class="projects-wrapper svelte-dvv9y5"></div></div>');function V(v){var e=E(),i=o(a(e),2);x(i,5,()=>C,y,(s,r)=>{T(s,A(()=>w(r)))}),t(i),t(e),f(v,e)}export{V as component};
