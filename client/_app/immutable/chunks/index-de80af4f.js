function w(){}const Q=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(U)}function I(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function zt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Lt(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Ht(t,e,n,i,s,l){if(s){const r=V(e,n,i,l);t.p(r,s)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Gt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Jt(t,e,n){return t.set(n),e}const X=typeof window<"u";let Y=X?()=>window.performance.now():()=>Date.now(),W=X?t=>requestAnimationFrame(t):w;const x=new Set;function Z(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&W(Z)}function tt(t){let e;return x.size===0&&W(Z),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let q=!1;function mt(){q=!0}function pt(){q=!1}function yt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:yt(1,s,a=>e[n[a]].claim_order,u))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[c],_)}}function bt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=nt("style");return xt(et(t),e),e.sheet}function xt(t,e){bt(t.head||t,e)}function wt(t,e){if(q){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){q&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function vt(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Ut(){return G(" ")}function Vt(){return G("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t){return function(e){e.target===this&&t.call(this,e)}}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t,e){for(const n in e)kt(t,n,e[n])}function Nt(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,s=!1){St(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function rt(t,e,n,i){return it(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function te(t,e,n){return rt(t,e,n,nt)}function ee(t,e,n){return rt(t,e,n,Et)}function jt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function ne(t){return jt(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e){t.value=e==null?"":e}function se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}const D=new Map;let O=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:$t(e),rules:{}};return D.set(t,n),n}function B(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);u+=m*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,f=`__svelte_${At(_)}_${o}`,a=et(t),{stylesheet:h,rules:d}=D.get(a)||Ct(a,t);d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,O+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),O-=s,O||Mt())}function Mt(){W(()=>{O||(D.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),D.clear())})}let j;function N(t){j=t}function T(){if(!j)throw new Error("Function called outside component initialization");return j}function ce(t){T().$$.on_mount.push(t)}function le(t){T().$$.after_update.push(t)}function oe(){const t=T();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=st(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function ue(t,e){return T().$$.context.set(t,e),e}function ae(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],K=[],P=[],F=[],ct=Promise.resolve();let H=!1;function lt(){H||(H=!0,ct.then(ot))}function fe(){return lt(),ct}function A(t){P.push(t)}function _e(t){F.push(t)}const z=new Set;let M=0;function ot(){const t=j;do{for(;M<k.length;){const e=k[M];M++,N(e),Pt(e.$$)}for(N(null),k.length=0,M=0;K.length;)K.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];z.has(n)||(z.add(n),n())}P.length=0}while(k.length);for(;F.length;)F.pop()();H=!1,z.clear(),N(t)}function Pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let E;function ut(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function S(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const R=new Set;let y;function de(){y={r:0,c:[],p:y}}function he(){y.r||v(y.c),y=y.p}function Rt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function me(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),y.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function pe(t,e,n){let i=e(t,n),s=!1,l,r,o=0;function c(){l&&L(t,l)}function u(){const{delay:f=0,duration:a=300,easing:h=Q,tick:d=w,css:p}=i||at;p&&(l=B(t,0,1,a,f,h,p,o++)),d(0,1);const m=Y()+f,g=m+a;r&&r.abort(),s=!0,A(()=>S(t,!0,"start")),r=tt(b=>{if(s){if(b>=g)return d(1,0),S(t,!0,"end"),c(),s=!1;if(b>=m){const $=h((b-m)/a);d($,1-$)}}return s})}let _=!1;return{start(){_||(_=!0,L(t),I(i)?(i=i(),ut().then(u)):u())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function ye(t,e,n,i){let s=e(t,n),l=i?0:1,r=null,o=null,c=null;function u(){c&&L(t,c)}function _(a,h){const d=a.b-l;return h*=Math.abs(d),{a:l,b:a.b,d,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:d=300,easing:p=Q,tick:m=w,css:g}=s||at,b={start:Y()+h,b:a};a||(b.group=y,y.r+=1),r||o?o=b:(g&&(u(),c=B(t,l,a,d,h,p,g)),a&&m(0,1),r=_(b,d),A(()=>S(t,a,"start")),tt($=>{if(o&&$>o.start&&(r=_(o,d),o=null,S(t,r.b,"start"),g&&(u(),c=B(t,l,r.b,r.duration,0,p,s.css))),r){if($>=r.end)m(l=r.b,1-l),S(t,r.b,"end"),o||(r.b?u():--r.group.r||v(r.group.c)),r=null;else if($>=r.start){const ft=$-r.start;l=r.a+r.d*p(ft/r.duration),m(l,1-l)}}return!!(r||o)}))}return{run(a){I(s)?ut().then(()=>{s=s(),f(a)}):f(a)},end(){u(),r=o=null}}}function ge(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function be(t){return typeof t=="object"&&t!==null?t:{}}function $e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function xe(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:s,on_mount:l,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||A(()=>{const c=l.map(U).filter(I);r?r.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(A)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(k.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,s,l,r,o=[-1]){const c=j;N(t);const u=t.$$={fragment:null,ctx:null,props:l,update:w,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...h)=>{const d=h.length?h[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),_&&qt(t,f)),a}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const f=Nt(e.target);u.fragment&&u.fragment.l(f),f.forEach(vt)}else u.fragment&&u.fragment.c();e.intro&&Rt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),pt(),ot()}N(c)}class Ee{$destroy(){Ot(this,1),this.$destroy=w}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{pe as $,be as A,Ot as B,_t as C,fe as D,w as E,zt as F,wt as G,Xt as H,Qt as I,Bt as J,Jt as K,Lt as L,Ht as M,It as N,Ft as O,Et as P,ee as Q,Zt as R,Ee as S,Gt as T,Wt as U,ae as V,oe as W,Q as X,re as Y,Yt as Z,A as _,Ut as a,ye as a0,v as a1,K as a2,$e as a3,_e as a4,ht as a5,Kt as b,ne as c,he as d,Vt as e,Rt as f,de as g,vt as h,ve as i,ue as j,le as k,nt as l,te as m,Nt as n,ce as o,kt as p,se as q,G as r,Tt as s,me as t,jt as u,ie as v,xe as w,we as x,Dt as y,ge as z};
