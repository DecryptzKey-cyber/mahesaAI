const f={};function M(e){f.context=e}function z(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const ee=(e,t)=>e===t,te=Symbol("solid-track"),$={equals:ee};let V=G;const b=1,C=2,K={owned:null,cleanups:null,context:null,owner:null};var h=null;let x=null,a=null,d=null,y=null,H=0;function q(e,t){const n=a,s=h,i=e.length===0,l=i?K:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=i?e:()=>e(()=>w(()=>k(l)));h=l,a=null;try{return S(o,!0)}finally{a=n,h=s}}function ne(e,t){t=t?Object.assign({},$,t):$;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Y(n,i));return[W.bind(n),s]}function U(e,t,n){const s=O(e,t,!1,b);v(s)}function se(e,t,n){V=oe;const s=O(e,t,!1,b);s.user=!0,y?y.push(s):v(s)}function B(e,t,n){n=n?Object.assign({},$,n):$;const s=O(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,v(s),W.bind(s)}function w(e){if(a===null)return e();const t=a;a=null;try{return e()}finally{a=t}}function ye(e,t,n){const s=Array.isArray(e);let i,l=n&&n.defer;return o=>{let r;if(s){r=Array(e.length);for(let c=0;c<e.length;c++)r[c]=e[c]()}else r=e();if(l){l=!1;return}const u=w(()=>t(r,i,o));return i=r,u}}function we(e){se(()=>w(e))}function ie(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function be(){return h}function xe(e,t){const n=h,s=a;h=e,a=null;try{return S(t,!0)}catch(i){D(i)}finally{h=n,a=s}}function W(){const e=x;if(this.sources&&(this.state||e))if(this.state===b||e)v(this);else{const t=d;d=null,S(()=>N(this),!1),d=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function Y(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],o=x&&x.running;o&&x.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?d.push(l):y.push(l),l.observers&&X(l)),o||(l.state=b)}if(d.length>1e6)throw d=[],new Error},!1)),t}function v(e){if(!e.fn)return;k(e);const t=h,n=a,s=H;a=h=e,le(e,e.value,s),a=n,h=t}function le(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=b,e.owned&&e.owned.forEach(k),e.owned=null),e.updatedAt=n+1,D(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Y(e,s):e.value=s,e.updatedAt=n)}function O(e,t,n,s=b,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==K&&(h.owned?h.owned.push(l):h.owned=[l]),l}function m(e){const t=x;if(e.state===0||t)return;if(e.state===C||t)return N(e);if(e.suspense&&w(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===b||t)v(e);else if(e.state===C||t){const i=d;d=null,S(()=>N(e,n[0]),!1),d=i}}function S(e,t){if(d)return e();let n=!1;t||(d=[]),y?n=!0:y=[],H++;try{const s=e();return re(n),s}catch(s){n||(y=null),d=null,D(s)}}function re(e){if(d&&(G(d),d=null),e)return;const t=y;y=null,t.length&&S(()=>V(t),!1)}function G(e){for(let t=0;t<e.length;t++)m(e[t])}function oe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:m(s)}for(f.context&&M(),t=0;t<n;t++)m(e[t])}function N(e,t){const n=x;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===b||n?i!==t&&(!i.updatedAt||i.updatedAt<H)&&m(i):(i.state===C||n)&&N(i,t))}}function X(e){const t=x;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=C,s.pure?d.push(s):y.push(s),s.observers&&X(s))}}function k(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)k(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function fe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function D(e){throw e=fe(e),e}const P=Symbol("fallback");function _(e){for(let t=0;t<e.length;t++)e[t]()}function ue(e,t,n={}){let s=[],i=[],l=[],o=[],r=0,u;return ie(()=>_(l)),()=>{const c=e()||[];return c[te],w(()=>{if(c.length===0)return r!==0&&(_(l),l=[],s=[],i=[],r=0,o=[]),n.fallback&&(s=[P],i[0]=q(p=>(l[0]=p,n.fallback())),r=1),i;for(s[0]===P&&(l[0](),l=[],s=[],i=[],r=0),u=0;u<c.length;u++)u<s.length&&s[u]!==c[u]?o[u](()=>c[u]):u>=s.length&&(i[u]=q(g));for(;u<s.length;u++)l[u]();return r=o.length=l.length=c.length,s=c.slice(0),i=i.slice(0,r)});function g(p){l[u]=p;const[E,T]=ne(c[u]);return o[u]=T,t(E,u)}}}let J=!1;function ce(){J=!0}function Ae(e,t){if(J&&f.context){const n=f.context;M(z());const s=w(()=>e(t||{}));return M(n),s}return w(()=>e(t||{}))}function Se(e){const t="fallback"in e&&{fallback:()=>e.fallback};return B(ue(()=>e.each,e.children,t||void 0))}function Ee(e){let t=!1;const n=e.keyed,s=B(()=>e.when,void 0,{equals:(i,l)=>t?i===l:!i==!l});return B(()=>{const i=s();if(i){const l=e.children,o=typeof l=="function"&&l.length>0;return t=n||o,o?w(()=>l(i)):l}return e.fallback},void 0,void 0)}function ae(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,u=t[i-1].nextSibling,c=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const g=l<s?r?n[r-1].nextSibling:n[l-r]:u;for(;r<l;)e.insertBefore(n[r++],g)}else if(l===r)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const g=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],g),t[i]=n[l]}else{if(!c){c=new Map;let p=r;for(;p<l;)c.set(n[p],p++)}const g=c.get(t[o]);if(g!=null)if(r<g&&g<l){let p=o,E=1,T;for(;++p<i&&p<l&&!((T=c.get(t[p]))==null||T!==g+E);)E++;if(E>g-r){const Z=t[o];for(;r<g;)e.insertBefore(n[r++],Z)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const j="_$DX_DELEGATE";function he(e,t,n,s={}){let i;return q(l=>{i=l,t===document?e():de(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function ve(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Te(e,t=window.document){const n=t[j]||(t[j]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,Q))}}function $e(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ce(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function me(e,t){!f.context&&(e.innerHTML=t)}function Ne(e,t,n){return w(()=>e(t,n))}function de(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);U(i=>L(e,t(),i,n),s)}function ge(e,t,n={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=globalThis._$HY.load,f.gather=i=>R(t,i),f.registry=new Map,f.context={id:n.renderId||"",count:0},R(t,n.renderId);const s=he(e,t,[...t.childNodes],n);return f.context=null,s}function Le(e){let t,n;if(!f.context||!(t=f.registry.get(n=pe()))){if(f.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e.cloneNode(!0)}return f.completed&&f.completed.add(t),f.registry.delete(n),t}function He(e){let t=e,n=0,s=[];if(f.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function ke(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=f;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;Q(s),t.shift()}}),f.events.queued=!0)}function Q(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),f.registry&&!f.done&&(f.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,s,i){for(f.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(f.context)return n;if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=A(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(f.context)return n;n=A(e,n,s)}else{if(l==="function")return U(()=>{let r=t();for(;typeof r=="function";)r=r();n=L(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(I(r,t,n,i))return U(()=>n=L(e,r,n,s,!0)),()=>n;if(f.context){if(!r.length)return n;for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=A(e,n,s),o)return n}else u?n.length===0?F(e,r,s):ae(e,n,r):(n&&A(e),F(e,r));n=r}else if(t instanceof Node){if(f.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=A(e,n,s,t);A(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function I(e,t,n,s){let i=!1;for(let l=0,o=t.length;l<o;l++){let r=t[l],u=n&&n[l];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=I(e,r,u)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=I(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||i}else e.push(r),i=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function F(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function A(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(i,r):e.insertBefore(i,n):u&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}function R(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],l=i.getAttribute("data-hk");(!t||l.startsWith(t))&&!f.registry.has(l)&&f.registry.set(l,i)}}function pe(){const e=f.context;return`${e.id}${e.count++}`}const Me=(...e)=>(ce(),ge(...e));export{Se as I,Ee as S,se as a,ye as b,ne as c,B as d,we as e,Le as f,be as g,Te as h,He as i,de as j,Ce as k,Ae as l,ke as m,U as n,ie as o,$e as p,me as q,xe as r,f as s,ve as t,Ne as u,he as v,Me as w};