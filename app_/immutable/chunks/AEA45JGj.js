var jn=Array.isArray,en=Array.prototype.indexOf,Bn=Array.from,Un=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,an=Object.getOwnPropertyDescriptors,Vn=Object.prototype,Gn=Array.prototype,ln=Object.getPrototypeOf;function Kn(t){return typeof t=="function"}const $n=()=>{};function Zn(t){return t()}function sn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,V=8,ft=16,R=32,G=64,Z=128,N=256,z=512,p=1024,I=2048,C=4096,L=8192,M=16384,un=32768,At=65536,zn=1<<17,on=1<<19,xt=1<<20,yt=Symbol("$state"),Jn=Symbol("legacy props"),Qn=Symbol("");function Rt(t){return t===this.v}function fn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!fn(t,this.v)}function _n(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function cn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function pn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Xn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function tr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function nr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function dn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function rr(){tt=!0}const er=1,ar=2,lr=4,sr=8,ur=16,or=1,ir=2,fr=4,_r=8,cr=16,vr=4,pr=1,hr=2,En="[",yn="[!",wn="]",St={},dr=Symbol();function _t(t,n){var r={f:0,v:t,reactions:null,equals:Rt,rv:0,wv:0};return r}function Er(t){return Dt(_t(t))}function mn(t,n=!1){var e;const r=_t(t);return n||(r.equals=It),tt&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function yr(t,n=!1){return Dt(mn(t,n))}function Dt(t){return o!==null&&!x&&o.f&y&&(g===null?Cn([t]):g.push(t)),t}function wr(t,n){return ct(t,nn(()=>lt(t))),n}function ct(t,n){return o!==null&&!x&&nt()&&o.f&(y|ft)&&(g===null||!g.includes(t))&&dn(),Tn(t,n)}function Tn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Zt(),Ot(t,I),nt()&&f!==null&&f.f&p&&!(f.f&(R|G))&&(A===null?bn([t]):A.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),a=r.length,l=0;l<a;l++){var s=r[l],i=s.f;i&I||!e&&s===f||(w(s,n),i&(p|N)&&(i&y?Ot(s,C):at(s)))}}function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function mr(t){O=t}let m;function H(t){if(t===null)throw kt(),St;return m=t}function Tr(){return H(b(m))}function gr(t){if(O){if(b(m)!==null)throw kt(),St;m=t}}function Ar(t=1){if(O){for(var n=t,r=m;n--;)r=b(r);m=r}}function xr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===wn){if(t===0)return n;t-=1}else(r===En||r===yn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var wt,gn,Nt,Ct;function Rr(){if(wt===void 0){wt=window,gn=document;var t=Element.prototype,n=Node.prototype;Nt=Et(n,"firstChild").get,Ct=Et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function ut(t){return Nt.call(t)}function b(t){return Ct.call(t)}function Ir(t,n){if(!O)return ut(t);var r=ut(m);if(r===null)r=m.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),H(e),e}return H(r),r}function Sr(t,n){if(!O){var r=ut(t);return r instanceof Comment&&r.data===""?b(r):r}return m}function Dr(t,n=1,r=!1){let e=O?m:t;for(var a;n--;)a=e,e=b(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=st();return e===null?a==null||a.after(s):e.before(s),H(s),s}return H(e),e}function Or(t){t.textContent=""}function bt(t){var n=y|I;f===null?n|=N:f.f|=xt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:u,deps:null,equals:Rt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function kr(t){const n=bt(t);return n.equals=It,n}function Pt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?vt(e):k(e)}}}function An(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ft(t){var n,r=f;W(An(t));try{Pt(t),n=Jt(t)}finally{W(r)}return n}function Lt(t){var n=Ft(t),r=(D||t.f&N)&&t.deps!==null?C:p;w(t,r),t.equals(n)||(t.v=n,t.wv=Zt())}function vt(t){Pt(t),U(t,0),w(t,M),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Mt(t){f===null&&o===null&&vn(),o!==null&&o.f&N&&cn(),ht&&_n()}function xn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var a=(t&G)!==0,l=f,s={ctx:u,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=P;try{mt(!0),et(s),s.f|=un}catch(T){throw k(s),T}finally{mt(i)}}else n!==null&&at(s);var _=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(xt|Z))===0;if(!_&&!a&&e&&(l!==null&&xn(s,l),o!==null&&o.f&y)){var c=o;(c.children??(c.children=[])).push(s)}return s}function Nr(t){const n=q(V,null,!1);return w(n,p),n.teardown=t,n}function Cr(t){Mt();var n=f!==null&&(f.f&R)!==0&&u!==null&&!u.m;if(n){var r=u;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:o})}else{var e=qt(t);return e}}function br(t){return Mt(),pt(t)}function Pr(t){const n=q(G,t,!0);return(r={})=>new Promise(e=>{r.outro?Sn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function qt(t){return q(gt,t,!1)}function Fr(t,n){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=pt(()=>{t(),!e.ran&&(e.ran=!0,ct(r.l.r2,!0),nn(n))})}function Lr(){var t=u;pt(()=>{if(lt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,C),Y(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function pt(t){return q(V,t,!0)}function Mr(t,n=[],r=bt){const e=n.map(r);return Rn(()=>t(...e.map(lt)))}function Rn(t,n=0){return q(V|ft|n,t,!0)}function qr(t,n=!0){return q(V|R,t,!0,n)}function Yt(t){var n=t.teardown;if(n!==null){const r=ht,e=o;Tt(!0),Q(null);try{n.call(null)}finally{Tt(r),Q(e)}}}function Ht(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)vt(n[r])}}function jt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function In(t){for(var n=t.first;n!==null;){var r=n.next;n.f&R||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&on)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:b(e);e.remove(),e=l}r=!0}jt(t,n&&!r),Ht(t),U(t,0),w(t,M);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Yt(t);var i=t.parent;i!==null&&i.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Sn(t,n){var r=[];Ut(t,r,!0),Dn(r,()=>{k(t),n&&n()})}function Dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Ut(t,n,r){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&At)!==0||(e.f&R)!==0;Ut(e,n,l?r:!1),e=a}}}function Yr(t){Vt(t,!0)}function Vt(t,n){if(t.f&L){t.f^=L,t.f&p||(t.f^=p),Y(t)&&(w(t,I),at(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&At)!==0||(r.f&R)!==0;Vt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let J=!1,ot=[];function Gt(){J=!1;const t=ot.slice();ot=[],sn(t)}function Hr(t){J||(J=!0,queueMicrotask(Gt)),ot.push(t)}function On(){J&&Gt()}function kn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Kt=0,Nn=1;let K=!1,$=Kt,j=!1,B=null,P=!1,ht=!1;function mt(t){P=t}function Tt(t){ht=t}let S=[],F=0;let o=null,x=!1;function Q(t){o=t}let f=null;function W(t){f=t}let g=null;function Cn(t){g=t}let h=null,E=0,A=null;function bn(t){A=t}let $t=1,X=0,D=!1,u=null;function Zt(){return++$t}function nt(){return!tt||u!==null&&u.l===null}function Y(t){var c;var n=t.f;if(n&I)return!0;if(n&C){var r=t.deps,e=(n&N)!==0;if(r!==null){var a,l,s=(n&z)!==0,i=e&&f!==null&&!D,_=r.length;if(s||i){for(a=0;a<_;a++)l=r[a],(s||!((c=l==null?void 0:l.reactions)!=null&&c.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);s&&(t.f^=z)}for(a=0;a<_;a++)if(l=r[a],Y(l)&&Lt(l),l.wv>t.wv)return!0}(!e||f!==null&&!D)&&w(t,p)}return!1}function Pn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function Fn(t){return(t.f&M)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(K){if(r===null&&(K=!1),Fn(n))throw t;return}r!==null&&(K=!0);{Pn(t,n);return}}function zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];l.f&y?zt(l,n,r+1):n===l&&(r===0?w(l,I):l.f&p&&w(l,C),at(l))}}function Jt(t){var dt;var n=h,r=E,e=A,a=o,l=D,s=g,i=u,_=x,c=t.f;h=null,E=0,A=null,o=c&(R|G)?null:t,D=!P&&(c&N)!==0,g=null,u=t.ctx,x=!1,X++;try{var T=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(U(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!D)for(d=E;d<v.length;d++)((dt=v[d]).reactions??(dt.reactions=[])).push(t)}else v!==null&&E<v.length&&(U(t,E),v.length=E);if(nt()&&A!==null&&!(t.f&(y|C|I)))for(d=0;d<A.length;d++)zt(A[d],t);return a!==null&&X++,T}finally{h=n,E=r,A=e,o=a,D=l,g=s,u=i,x=_}}function Ln(t,n){let r=n.reactions;if(r!==null){var e=en.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(w(n,C),n.f&(N|z)||(n.f^=z),U(n,0))}function U(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Ln(t,r[e])}function et(t){var n=t.f;if(!(n&M)){w(t,p);var r=f,e=u;f=t;try{n&ft?In(t):jt(t),Ht(t),Yt(t);var a=Jt(t);t.teardown=typeof a=="function"?a:null,t.wv=$t;var l=t.deps,s}catch(i){rt(i,t,r,e||t.ctx)}finally{f=r}}}function Qt(){if(F>1e3){F=0;try{pn()}catch(t){if(B!==null)rt(t,B,null);else throw t}}F++}function Wt(t){var n=t.length;if(n!==0){Qt();var r=P;P=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&p||(a.f^=p);var l=[];Xt(a,l),Mn(l)}}finally{P=r}}}function Mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(M|L)))try{Y(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bt(e):e.fn=null))}catch(a){rt(a,e,null,e.ctx)}}}function qn(){if(j=!1,F>1001)return;const t=S;S=[],Wt(t),j||(F=0,B=null)}function at(t){$===Kt&&(j||(j=!0,queueMicrotask(qn))),B=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|R)){if(!(r&p))return;n.f^=p}}S.push(n)}function Xt(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,l=(a&R)!==0,s=l&&(a&p)!==0,i=r.next;if(!s&&!(a&L))if(a&V){if(l)r.f^=p;else try{Y(r)&&et(r)}catch(v){rt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else a&gt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=i}for(var T=0;T<e.length;T++)_=e[T],n.push(_),Xt(_,n)}function tn(t){var n=$,r=S;try{Qt();const a=[];$=Nn,S=a,j=!1,Wt(r);var e=t==null?void 0:t();return On(),(S.length>0||a.length>0)&&tn(),F=0,B=null,e}finally{$=n,S=r}}async function jr(){await Promise.resolve(),tn()}function lt(t){var T;var n=t.f,r=(n&y)!==0;if(r&&n&M){var e=Ft(t);return vt(t),e}if(o!==null&&!x){g!==null&&g.includes(t)&&hn();var a=o.deps;t.rv<X&&(t.rv=X,h===null&&a!==null&&a[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var l=t,s=l.parent,i=l;s!==null;)if(s.f&y){var _=s;i=_,s=_.parent}else{var c=s;(T=c.deriveds)!=null&&T.includes(i)||(c.deriveds??(c.deriveds=[])).push(i);break}return r&&(l=t,Y(l)&&Lt(l)),t.v}function nn(t){var n=x;try{return x=!0,t()}finally{x=n}}const Yn=-7169;function w(t,n){t.f=t.f&Yn|n}function Br(t){return rn().get(t)}function Ur(t,n){return rn().set(t,n),n}function rn(t){return u===null&&kn(),u.c??(u.c=new Map(Hn(u)||void 0))}function Hn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Vr(t,n=1){var r=lt(t),e=n===1?r++:r--;return ct(t,r),e}function Gr(t,n=!1,r){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(u.l={s:null,u:null,r1:[],r2:_t(!1)})}function Kr(t){const n=u;if(n!==null){const s=n.e;if(s!==null){var r=f,e=o;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];W(l.effect),Q(l.reaction),qt(l.fn)}}finally{W(r),Q(e)}}u=n.p,n.m=!0}return{}}function $r(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=ln(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=an(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{Ir as $,jn as A,st as B,lr as C,Bn as D,At as E,Hr as F,f as G,St as H,L as I,er as J,Tn as K,ar as L,Ut as M,Or as N,Dn as O,kr as P,wn as Q,o as R,sr as S,mn as T,dr as U,_t as V,ur as W,rr as X,Gr as Y,Mr as Z,Kr as _,Tr as a,Dr as a0,gr as a1,ct as a2,yr as a3,Ar as a4,Fr as a5,Lr as a6,Sr as a7,wr as a8,Vr as a9,an as aA,qt as aB,pt as aC,tn as aD,Un as aE,jr as aF,Er as aG,Q as aH,Nr as aI,pr as aJ,hr as aK,$n as aL,ft as aM,un as aN,vr as aO,gn as aP,Br as aQ,Ur as aR,fn as aS,on as aa,En as ab,Rr as ac,Wn as ad,Pr as ae,yt as af,Vn as ag,Gn as ah,tr as ai,Et as aj,nr as ak,ln as al,Xn as am,zn as an,fr as ao,It as ap,R as aq,G as ar,W as as,or as at,ir as au,_r as av,Jn as aw,cr as ax,Kn as ay,Qn as az,Rn as b,qr as c,m as d,kt as e,ut as f,b as g,O as h,k as i,Cr as j,u as k,nn as l,sn as m,lt as n,$r as o,Sn as p,bt as q,Zn as r,H as s,yn as t,br as u,xr as v,mr as w,Yr as x,kn as y,tt as z};
