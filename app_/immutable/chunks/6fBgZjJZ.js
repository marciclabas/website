var jn=Array.isArray,en=Array.prototype.indexOf,Bn=Array.from,Un=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,ln=Object.getOwnPropertyDescriptors,Vn=Object.prototype,Gn=Array.prototype,an=Object.getPrototypeOf;function Kn(t){return typeof t=="function"}const $n=()=>{};function Zn(t){return t()}function sn(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,V=8,ft=16,D=32,G=64,Z=128,C=256,z=512,p=1024,R=2048,N=4096,L=8192,M=16384,un=32768,At=65536,zn=1<<17,on=1<<19,xt=1<<20,yt=Symbol("$state"),Jn=Symbol("legacy props"),Wn=Symbol("");function Dt(t){return t===this.v}function fn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!fn(t,this.v)}function _n(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function cn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function pn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function tr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function nr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function dn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function rr(){tt=!0}const er=1,lr=2,ar=4,sr=8,ur=16,or=1,ir=2,fr=4,_r=8,cr=16,vr=1,pr=2,En="[",yn="[!",wn="]",It={},hr=Symbol();function _t(t,n){var r={f:0,v:t,reactions:null,equals:Dt,rv:0,wv:0};return r}function dr(t){return St(_t(t))}function mn(t,n=!1){var e;const r=_t(t);return n||(r.equals=Rt),tt&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function Er(t,n=!1){return St(mn(t,n))}function St(t){return o!==null&&!x&&o.f&y&&(g===null?Nn([t]):g.push(t)),t}function yr(t,n){return ct(t,nn(()=>at(t))),n}function ct(t,n){return o!==null&&!x&&nt()&&o.f&(y|ft)&&(g===null||!g.includes(t))&&dn(),Tn(t,n)}function Tn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Zt(),Ot(t,R),nt()&&f!==null&&f.f&p&&!(f.f&(D|G))&&(A===null?bn([t]):A.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;i&R||!e&&s===f||(w(s,n),i&(p|C)&&(i&y?Ot(s,N):lt(s)))}}function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function wr(t){O=t}let m;function H(t){if(t===null)throw kt(),It;return m=t}function mr(){return H(b(m))}function Tr(t){if(O){if(b(m)!==null)throw kt(),It;m=t}}function gr(t=1){if(O){for(var n=t,r=m;n--;)r=b(r);m=r}}function Ar(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===wn){if(t===0)return n;t-=1}else(r===En||r===yn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var wt,gn,Ct,Nt;function xr(){if(wt===void 0){wt=window,gn=document;var t=Element.prototype,n=Node.prototype;Ct=Et(n,"firstChild").get,Nt=Et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function ut(t){return Ct.call(t)}function b(t){return Nt.call(t)}function Dr(t,n){if(!O)return ut(t);var r=ut(m);if(r===null)r=m.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),H(e),e}return H(r),r}function Rr(t,n){if(!O){var r=ut(t);return r instanceof Comment&&r.data===""?b(r):r}return m}function Ir(t,n=1,r=!1){let e=O?m:t;for(var l;n--;)l=e,e=b(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=st();return e===null?l==null||l.after(s):e.before(s),H(s),s}return H(e),e}function Sr(t){t.textContent=""}function bt(t){var n=y|R;f===null?n|=C:f.f|=xt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:u,deps:null,equals:Dt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function Or(t){const n=bt(t);return n.equals=Rt,n}function Pt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?vt(e):k(e)}}}function An(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ft(t){var n,r=f;X(An(t));try{Pt(t),n=Jt(t)}finally{X(r)}return n}function Lt(t){var n=Ft(t),r=(S||t.f&C)&&t.deps!==null?N:p;w(t,r),t.equals(n)||(t.v=n,t.wv=Zt())}function vt(t){Pt(t),U(t,0),w(t,M),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Mt(t){f===null&&o===null&&vn(),o!==null&&o.f&C&&cn(),ht&&_n()}function xn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var l=(t&G)!==0,a=f,s={ctx:u,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r){var i=P;try{mt(!0),et(s),s.f|=un}catch(T){throw k(s),T}finally{mt(i)}}else n!==null&&lt(s);var _=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(xt|Z))===0;if(!_&&!l&&e&&(a!==null&&xn(s,a),o!==null&&o.f&y)){var c=o;(c.children??(c.children=[])).push(s)}return s}function kr(t){const n=q(V,null,!1);return w(n,p),n.teardown=t,n}function Cr(t){Mt();var n=f!==null&&(f.f&D)!==0&&u!==null&&!u.m;if(n){var r=u;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:o})}else{var e=qt(t);return e}}function Nr(t){return Mt(),pt(t)}function br(t){const n=q(G,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function qt(t){return q(gt,t,!1)}function Pr(t,n){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=pt(()=>{t(),!e.ran&&(e.ran=!0,ct(r.l.r2,!0),nn(n))})}function Fr(){var t=u;pt(()=>{if(at(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,N),Y(r)&&et(r),n.ran=!1}t.l.r2.v=!1}})}function pt(t){return q(V,t,!0)}function Lr(t,n=[],r=bt){const e=n.map(r);return Dn(()=>t(...e.map(at)))}function Dn(t,n=0){return q(V|ft|n,t,!0)}function Mr(t,n=!0){return q(V|D,t,!0,n)}function Yt(t){var n=t.teardown;if(n!==null){const r=ht,e=o;Tt(!0),W(null);try{n.call(null)}finally{Tt(r),W(e)}}}function Ht(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)vt(n[r])}}function jt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function Rn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&on)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:b(e);e.remove(),e=a}r=!0}jt(t,n&&!r),Ht(t),U(t,0),w(t,M);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Yt(t);var i=t.parent;i!==null&&i.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];Ut(t,r,!0),Sn(r,()=>{k(t),n&&n()})}function Sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ut(t,n,r){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&At)!==0||(e.f&D)!==0;Ut(e,n,a?r:!1),e=l}}}function qr(t){Vt(t,!0)}function Vt(t,n){if(t.f&L){t.f^=L,t.f&p||(t.f^=p),Y(t)&&(w(t,R),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&At)!==0||(r.f&D)!==0;Vt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let J=!1,ot=[];function Gt(){J=!1;const t=ot.slice();ot=[],sn(t)}function Yr(t){J||(J=!0,queueMicrotask(Gt)),ot.push(t)}function On(){J&&Gt()}function kn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Kt=0,Cn=1;let K=!1,$=Kt,j=!1,B=null,P=!1,ht=!1;function mt(t){P=t}function Tt(t){ht=t}let I=[],F=0;let o=null,x=!1;function W(t){o=t}let f=null;function X(t){f=t}let g=null;function Nn(t){g=t}let h=null,E=0,A=null;function bn(t){A=t}let $t=1,Q=0,S=!1,u=null;function Zt(){return++$t}function nt(){return!tt||u!==null&&u.l===null}function Y(t){var c;var n=t.f;if(n&R)return!0;if(n&N){var r=t.deps,e=(n&C)!==0;if(r!==null){var l,a,s=(n&z)!==0,i=e&&f!==null&&!S,_=r.length;if(s||i){for(l=0;l<_;l++)a=r[l],(s||!((c=a==null?void 0:a.reactions)!=null&&c.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);s&&(t.f^=z)}for(l=0;l<_;l++)if(a=r[l],Y(a)&&Lt(a),a.wv>t.wv)return!0}(!e||f!==null&&!S)&&w(t,p)}return!1}function Pn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function Fn(t){return(t.f&M)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(K){if(r===null&&(K=!1),Fn(n))throw t;return}r!==null&&(K=!0);{Pn(t,n);return}}function zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];a.f&y?zt(a,n,r+1):n===a&&(r===0?w(a,R):a.f&p&&w(a,N),lt(a))}}function Jt(t){var dt;var n=h,r=E,e=A,l=o,a=S,s=g,i=u,_=x,c=t.f;h=null,E=0,A=null,o=c&(D|G)?null:t,S=!P&&(c&C)!==0,g=null,u=t.ctx,x=!1,Q++;try{var T=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(U(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!S)for(d=E;d<v.length;d++)((dt=v[d]).reactions??(dt.reactions=[])).push(t)}else v!==null&&E<v.length&&(U(t,E),v.length=E);if(nt()&&A!==null&&!(t.f&(y|N|R)))for(d=0;d<A.length;d++)zt(A[d],t);return l!==null&&Q++,T}finally{h=n,E=r,A=e,o=l,S=a,g=s,u=i,x=_}}function Ln(t,n){let r=n.reactions;if(r!==null){var e=en.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(w(n,N),n.f&(C|z)||(n.f^=z),U(n,0))}function U(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Ln(t,r[e])}function et(t){var n=t.f;if(!(n&M)){w(t,p);var r=f,e=u;f=t;try{n&ft?Rn(t):jt(t),Ht(t),Yt(t);var l=Jt(t);t.teardown=typeof l=="function"?l:null,t.wv=$t;var a=t.deps,s}catch(i){rt(i,t,r,e||t.ctx)}finally{f=r}}}function Wt(){if(F>1e3){F=0;try{pn()}catch(t){if(B!==null)rt(t,B,null);else throw t}}F++}function Xt(t){var n=t.length;if(n!==0){Wt();var r=P;P=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var a=[];Qt(l,a),Mn(a)}}finally{P=r}}}function Mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(M|L)))try{Y(e)&&(et(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function qn(){if(j=!1,F>1001)return;const t=I;I=[],Xt(t),j||(F=0,B=null)}function lt(t){$===Kt&&(j||(j=!0,queueMicrotask(qn))),B=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|D)){if(!(r&p))return;n.f^=p}}I.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,a=(l&D)!==0,s=a&&(l&p)!==0,i=r.next;if(!s&&!(l&L))if(l&V){if(a)r.f^=p;else try{Y(r)&&et(r)}catch(v){rt(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&gt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=i}for(var T=0;T<e.length;T++)_=e[T],n.push(_),Qt(_,n)}function tn(t){var n=$,r=I;try{Wt();const l=[];$=Cn,I=l,j=!1,Xt(r);var e=t==null?void 0:t();return On(),(I.length>0||l.length>0)&&tn(),F=0,B=null,e}finally{$=n,I=r}}async function Hr(){await Promise.resolve(),tn()}function at(t){var T;var n=t.f,r=(n&y)!==0;if(r&&n&M){var e=Ft(t);return vt(t),e}if(o!==null&&!x){g!==null&&g.includes(t)&&hn();var l=o.deps;t.rv<Q&&(t.rv=Q,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var a=t,s=a.parent,i=a;s!==null;)if(s.f&y){var _=s;i=_,s=_.parent}else{var c=s;(T=c.deriveds)!=null&&T.includes(i)||(c.deriveds??(c.deriveds=[])).push(i);break}return r&&(a=t,Y(a)&&Lt(a)),t.v}function nn(t){var n=x;try{return x=!0,t()}finally{x=n}}const Yn=-7169;function w(t,n){t.f=t.f&Yn|n}function jr(t){return rn().get(t)}function Br(t,n){return rn().set(t,n),n}function rn(t){return u===null&&kn(),u.c??(u.c=new Map(Hn(u)||void 0))}function Hn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Ur(t,n=1){var r=at(t),e=n===1?r++:r--;return ct(t,r),e}function Vr(t,n=!1,r){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(u.l={s:null,u:null,r1:[],r2:_t(!1)})}function Gr(t){const n=u;if(n!==null){const s=n.e;if(s!==null){var r=f,e=o;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];X(a.effect),W(a.reaction),qt(a.fn)}}finally{X(r),W(e)}}u=n.p,n.m=!0}return{}}function Kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=an(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=ln(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{Vr as $,jn as A,st as B,Bn as C,f as D,At as E,Tn as F,Ut as G,It as H,L as I,Sr as J,Sn as K,Or as L,wn as M,o as N,Yr as O,er as P,lr as Q,mn as R,_t as S,ar as T,hr as U,sr as V,ur as W,xr as X,En as Y,Xn as Z,br as _,mr as a,Gr as a0,on as a1,rr as a2,Lr as a3,Dr as a4,Ir as a5,Tr as a6,ct as a7,Er as a8,gr as a9,ln as aA,$n as aB,gn as aC,qt as aD,pt as aE,tn as aF,Un as aG,Hr as aH,dr as aI,W as aJ,kr as aK,vr as aL,pr as aM,jr as aN,Br as aO,fn as aP,Pr as aa,Fr as ab,Rr as ac,yr as ad,Ur as ae,yt as af,Vn as ag,Gn as ah,tr as ai,Et as aj,nr as ak,an as al,Qn as am,zn as an,fr as ao,Rt as ap,D as aq,G as ar,X as as,or as at,ir as au,_r as av,Jn as aw,cr as ax,Kn as ay,Wn as az,Dn as b,Mr as c,m as d,kt as e,ut as f,b as g,O as h,k as i,Cr as j,u as k,nn as l,sn as m,at as n,Kr as o,In as p,bt as q,Zn as r,H as s,yn as t,Nr as u,Ar as v,wr as w,qr as x,kn as y,tt as z};
