import{af as A,ag as Z,ah as $,S as h,ai as H,a7 as w,aj as x,U as _,n as b,D as q,ak as V,al as J,A as Q,am as W,an as X,ao as z,ap as k,l as C,ae as K,aq as ee,ar as re,as as U,at as ne,z as ie,au as te,av as ae,aw as G,q as F,L as se,ax as fe,R as ue,ay as D}from"./6fBgZjJZ.js";function I(e,r=null,f){if(typeof e!="object"||e===null||A in e)return e;const u=J(e);if(u!==Z&&u!==$)return e;var t=new Map,v=Q(e),P=h(0);v&&t.set("length",h(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&H();var s=t.get(n);return s===void 0?(s=h(i.value),t.set(n,s)):w(s,I(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,h(_));else{if(v&&typeof n=="string"){var s=t.get("length"),a=Number(n);Number.isInteger(a)&&a<s.v&&w(s,a)}w(i,_),M(P)}return!0},get(l,n,i){var c;if(n===A)return e;var s=t.get(n),a=n in l;if(s===void 0&&(!a||(c=x(l,n))!=null&&c.writable)&&(s=h(I(a?l[n]:_,g)),t.set(n,s)),s!==void 0){var d=b(s);return d===_?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var s=t.get(n);s&&(i.value=b(s))}else if(i===void 0){var a=t.get(n),d=a==null?void 0:a.v;if(a!==void 0&&d!==_)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===A)return!0;var i=t.get(n),s=i!==void 0&&i.v!==_||Reflect.has(l,n);if(i!==void 0||q!==null&&(!s||(d=x(l,n))!=null&&d.writable)){i===void 0&&(i=h(s?I(l[n],g):_),t.set(n,i));var a=b(i);if(a===_)return!1}return s},set(l,n,i,s){var m;var a=t.get(n),d=n in l;if(v&&n==="length")for(var c=i;c<a.v;c+=1){var y=t.get(c+"");y!==void 0?w(y,_):c in l&&(y=h(_),t.set(c+"",y))}a===void 0?(!d||(m=x(l,n))!=null&&m.writable)&&(a=h(void 0),w(a,I(i,g)),t.set(n,a)):(d=a.v!==_,w(a,I(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(s,i),!d){if(v&&typeof n=="string"){var O=t.get("length"),S=Number(n);Number.isInteger(S)&&S>=O.v&&w(O,S+1)}M(P)}return!0},ownKeys(l){b(P);var n=Reflect.ownKeys(l).filter(a=>{var d=t.get(a);return d===void 0||d.v!==_});for(var[i,s]of t)s.v!==_&&!(i in l)&&n.push(i);return n},setPrototypeOf(){V()}})}function M(e,r=1){w(e,e.v+r)}let N=!1;function le(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=ve({get[r](){return e.props[r]}},r,z)),e.special[r](f),K(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),K(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:h(0)},de)}const oe={get(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,f){let u=e.props.length;for(;u--;){let t=e.props[u];D(t)&&(t=t());const v=x(t,r);if(v&&v.set)return v.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=x(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===A||r===G)return!1;for(let f of e.props)if(D(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){D(f)&&(f=f());for(const u in f)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},oe)}function Y(e){for(var r=q,f=q;r!==null&&!(r.f&(ee|re));)r=r.parent;try{return U(r),e()}finally{U(f)}}function ve(e,r,f,u){var B;var t=(f&ne)!==0,v=!ie||(f&te)!==0,P=(f&ae)!==0,g=(f&fe)!==0,l=!1,n;P?[n,l]=le(()=>e[r]):n=e[r];var i=A in e||G in e,s=P&&(((B=x(e,r))==null?void 0:B.set)??(i&&r in e&&(o=>e[r]=o)))||void 0,a=u,d=!0,c=!1,y=()=>(c=!0,d&&(d=!1,g?a=C(u):a=u),a);n===void 0&&u!==void 0&&(s&&v&&W(),n=y(),s&&s(n));var p;if(v)p=()=>{var o=e[r];return o===void 0?y():(d=!0,c=!1,o)};else{var O=Y(()=>(t?F:se)(()=>e[r]));O.f|=X,p=()=>{var o=b(O);return o!==void 0&&(a=void 0),o===void 0?a:o}}if(!(f&z))return p;if(s){var S=e.$$legacy;return function(o,R){return arguments.length>0?((!v||!R||S||l)&&s(R?p():o),o):p()}}var m=!1,j=!1,L=ue(n),E=Y(()=>F(()=>{var o=p(),R=b(L);return m?(m=!1,j=!0,R):(j=!1,L.v=o)}));return t||(E.equals=k),function(o,R){if(arguments.length>0){const T=R?b(E):v&&P?I(o):o;return E.equals(T)||(m=!0,w(L,T),c&&a!==void 0&&(a=T),C(()=>b(E))),o}return b(E)}}export{I as a,ce as l,ve as p,pe as s};
