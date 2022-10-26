(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function D(){}function Je(t){return t()}function Ie(){return Object.create(null)}function Y(t){t.forEach(Je)}function Ke(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function lt(t){return Object.keys(t).length===0}function p(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function I(){return w(" ")}function X(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ut(t){return Array.from(t.childNodes)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ae(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}let W;function G(t){W=t}function ht(){if(!W)throw new Error("Function called outside component initialization");return W}function ie(){const t=ht();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=ft(e,n,{cancelable:r});return s.slice().forEach(o=>{o.call(t,i)}),!i.defaultPrevented}return!0}}const z=[],Ce=[],Z=[],Se=[],dt=Promise.resolve();let fe=!1;function pt(){fe||(fe=!0,dt.then(Ye))}function he(t){Z.push(t)}const oe=new Set;let Q=0;function Ye(){const t=W;do{for(;Q<z.length;){const e=z[Q];Q++,G(e),mt(e.$$)}for(G(null),z.length=0,Q=0;Ce.length;)Ce.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];oe.has(n)||(oe.add(n),n())}Z.length=0}while(z.length);for(;Se.length;)Se.pop()();fe=!1,oe.clear(),G(t)}function mt(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(he)}}const ee=new Set;let O;function gt(){O={r:0,c:[],p:O}}function _t(){O.r||Y(O.c),O=O.p}function $(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(ee.has(t))return;ee.add(t),O.c.push(()=>{ee.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function q(t){t&&t.c()}function H(t,e,n,r){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),r||he(()=>{const o=t.$$.on_mount.map(Je).filter(Ke);t.$$.on_destroy?t.$$.on_destroy.push(...o):Y(o),t.$$.on_mount=[]}),i.forEach(he)}function x(t,e){const n=t.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(z.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,r,s,i,o,c=[-1]){const a=W;G(t);const l=t.$$={fragment:null,ctx:[],props:i,update:D,not_equal:s,bound:Ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Ie(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};o&&o(l.root);let m=!1;if(l.ctx=n?n(t,e.props||{},(u,h,...d)=>{const f=d.length?d[0]:h;return l.ctx&&s(l.ctx[u],l.ctx[u]=f)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](f),m&&bt(t,u)),h}):[],l.update(),m=!0,Y(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const u=ut(e.target);l.fragment&&l.fragment.l(u),u.forEach(A)}else l.fragment&&l.fragment.c();e.intro&&$(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),Ye()}G(a)}class U{$destroy(){x(this,1),this.$destroy=D}$on(e,n){if(!Ke(n))return D;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function yt(t){let e,n,r,s,i,o;return{c(){e=y("div"),n=y("h1"),n.textContent="1A2B Game",r=I(),s=y("button"),s.textContent="Start",v(e,"class","page")},m(c,a){C(c,e,a),p(e,n),p(e,r),p(e,s),i||(o=X(s,"click",t[0]),i=!0)},p:D,i:D,o:D,d(c){c&&A(e),i=!1,o()}}}function Et(t){const e=ie();return[()=>{e("start")}]}class vt extends U{constructor(e){super(),F(this,e,Et,yt,R,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,m=i>>2,u=(i&3)<<4|c>>4;let h=(c&15)<<2|l>>6,d=l&63;a||(d=64,o||(h=64)),r.push(n[m],n[u],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xe(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||u==null)throw Error();const h=i<<2|c>>4;if(r.push(h),l!==64){const d=c<<4&240|l>>2;if(r.push(d),u!==64){const f=l<<6&192|u;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Dt=function(t){const e=Xe(t);return qe.encodeByteArray(e,!0)},Qe=function(t){return Dt(t).replace(/\./g,"")},It=function(t){try{return qe.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function At(){return typeof indexedDB=="object"}function Ct(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function St(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=()=>St().__FIREBASE_DEFAULTS__,$t=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&It(t[1]);return e&&JSON.parse(e)},Ze=()=>{try{return Tt()||$t()||Nt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ot=t=>{var e,n;return(n=(e=Ze())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kt=t=>{const e=Ot(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bt=()=>{var t;return(t=Ze())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="FirebaseError";class j extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pt,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,et.prototype.create)}}class et{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Mt(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new j(s,c,r)}}function Mt(t,e){return t.replace(Rt,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rt=/\{\$([^}]+)}/g;function de(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Te(i)&&Te(o)){if(!de(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Te(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class J{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ft(e))try{this.getOrInitializeService({instanceIdentifier:N})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=N){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=N){return this.instances.has(e)}getOptions(e=N){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xt(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=N){return this.component?this.component.multipleInstances?e:N:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xt(t){return t===N?void 0:t}function Ft(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ht(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const jt={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Vt=b.INFO,zt={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Gt=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zt[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wt{constructor(e){this.name=e,this._logLevel=Vt,this._logHandler=Gt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const Jt=(t,e)=>e.some(n=>t instanceof n);let $e,Ne;function Kt(){return $e||($e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yt(){return Ne||(Ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tt=new WeakMap,pe=new WeakMap,nt=new WeakMap,ae=new WeakMap,we=new WeakMap;function Xt(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(S(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tt.set(n,t)}).catch(()=>{}),we.set(e,t),e}function qt(t){if(pe.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pe.set(t,e)}let me={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qt(t){me=t(me)}function Zt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ce(this),e,...n);return nt.set(r,e.sort?e.sort():[e]),S(r)}:Yt().includes(t)?function(...e){return t.apply(ce(this),e),S(tt.get(this))}:function(...e){return S(t.apply(ce(this),e))}}function en(t){return typeof t=="function"?Zt(t):(t instanceof IDBTransaction&&qt(t),Jt(t,Kt())?new Proxy(t,me):t)}function S(t){if(t instanceof IDBRequest)return Xt(t);if(ae.has(t))return ae.get(t);const e=en(t);return e!==t&&(ae.set(t,e),we.set(e,t)),e}const ce=t=>we.get(t);function tn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=S(o);return r&&o.addEventListener("upgradeneeded",a=>{r(S(o.result),a.oldVersion,a.newVersion,S(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const nn=["get","getKey","getAll","getAllKeys","count"],rn=["put","add","delete","clear"],le=new Map;function Oe(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(le.get(e))return le.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nn.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return le.set(e,i),i}Qt(t=>({...t,get:(e,n,r)=>Oe(e,n)||t.get(e,n,r),has:(e,n)=>!!Oe(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(on(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function on(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ge="@firebase/app",ke="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new Wt("@firebase/app"),an="@firebase/app-compat",cn="@firebase/analytics-compat",ln="@firebase/analytics",un="@firebase/app-check-compat",fn="@firebase/app-check",hn="@firebase/auth",dn="@firebase/auth-compat",pn="@firebase/database",mn="@firebase/database-compat",gn="@firebase/functions",_n="@firebase/functions-compat",bn="@firebase/installations",yn="@firebase/installations-compat",En="@firebase/messaging",vn="@firebase/messaging-compat",wn="@firebase/performance",Dn="@firebase/performance-compat",In="@firebase/remote-config",An="@firebase/remote-config-compat",Cn="@firebase/storage",Sn="@firebase/storage-compat",Tn="@firebase/firestore",$n="@firebase/firestore-compat",Nn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="[DEFAULT]",On={[ge]:"fire-core",[an]:"fire-core-compat",[ln]:"fire-analytics",[cn]:"fire-analytics-compat",[fn]:"fire-app-check",[un]:"fire-app-check-compat",[hn]:"fire-auth",[dn]:"fire-auth-compat",[pn]:"fire-rtdb",[mn]:"fire-rtdb-compat",[gn]:"fire-fn",[_n]:"fire-fn-compat",[bn]:"fire-iid",[yn]:"fire-iid-compat",[En]:"fire-fcm",[vn]:"fire-fcm-compat",[wn]:"fire-perf",[Dn]:"fire-perf-compat",[In]:"fire-rc",[An]:"fire-rc-compat",[Cn]:"fire-gcs",[Sn]:"fire-gcs-compat",[Tn]:"fire-fst",[$n]:"fire-fst-compat","fire-js":"fire-js",[Nn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Map,be=new Map;function kn(t,e){try{t.container.addComponent(e)}catch(n){L.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function re(t){const e=t.name;if(be.has(e))return L.debug(`There were multiple attempts to register component ${e}.`),!1;be.set(e,t);for(const n of ne.values())kn(n,t);return!0}function Bn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},T=new et("app","Firebase",Ln);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new J("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw T.create("app-deleted",{appName:this._name})}}function rt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_e,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw T.create("bad-app-name",{appName:String(s)});if(n||(n=Bt()),!n)throw T.create("no-options");const i=ne.get(s);if(i){if(de(n,i.options)&&de(r,i.config))return i;throw T.create("duplicate-app",{appName:s})}const o=new Ut(s);for(const a of be.values())o.addComponent(a);const c=new Pn(n,r,o);return ne.set(s,c),c}function Mn(t=_e){const e=ne.get(t);if(!e&&t===_e)return rt();if(!e)throw T.create("no-app",{appName:t});return e}function P(t,e,n){var r;let s=(r=On[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),L.warn(c.join(" "));return}re(new J(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="firebase-heartbeat-database",Hn=1,K="firebase-heartbeat-store";let ue=null;function st(){return ue||(ue=tn(Rn,Hn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(K)}}}).catch(t=>{throw T.create("idb-open",{originalErrorMessage:t.message})})),ue}async function xn(t){var e;try{return(await st()).transaction(K).objectStore(K).get(it(t))}catch(n){if(n instanceof j)L.warn(n.message);else{const r=T.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});L.warn(r.message)}}}async function Be(t,e){var n;try{const s=(await st()).transaction(K,"readwrite");return await s.objectStore(K).put(e,it(t)),s.done}catch(r){if(r instanceof j)L.warn(r.message);else{const s=T.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});L.warn(s.message)}}}function it(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1024,Un=30*24*60*60*1e3;class jn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Le();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Un}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Le(),{heartbeatsToSend:n,unsentEntries:r}=Vn(this._heartbeatsCache.heartbeats),s=Qe(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Le(){return new Date().toISOString().substring(0,10)}function Vn(t,e=Fn){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pe(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pe(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return At()?Ct().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xn(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Be(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Be(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pe(t){return Qe(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){re(new J("platform-logger",e=>new sn(e),"PRIVATE")),re(new J("heartbeat",e=>new jn(e),"PRIVATE")),P(ge,ke,t),P(ge,ke,"esm2017"),P("fire-js","")}Gn("");var Wn="firebase",Jn="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */P(Wn,Jn,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="type.googleapis.com/google.protobuf.Int64Value",Yn="type.googleapis.com/google.protobuf.UInt64Value";function ot(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function ye(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>ye(e));if(typeof t=="function"||typeof t=="object")return ot(t,e=>ye(e));throw new Error("Data cannot be encoded in JSON: "+t)}function se(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Kn:case Yn:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>se(e)):typeof t=="function"||typeof t=="object"?ot(t,e=>se(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends j{constructor(e,n,r){super(`${De}/${e}`,n||""),this.details=r}}function Xn(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function qn(t,e){let n=Xn(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Me[o])return new M("internal","internal");n=Me[o],r=o}const c=i.message;typeof c=="string"&&(r=c),s=i.details,s!==void 0&&(s=se(s))}}catch{}return n==="ok"?null:new M(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||n.get().then(s=>this.messaging=s,()=>{}),this.appCheck||r.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="us-central1";function Zn(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new M("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class er{constructor(e,n,r,s,i=Ee,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Qn(n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin,this.region=Ee}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function tr(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function nr(t,e,n){return r=>sr(t,e,r,n||{})}async function rr(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}function sr(t,e,n,r){const s=t._url(e);return ir(t,s,n,r)}async function ir(t,e,n,r){n=ye(n);const s={data:n},i={},o=await t.contextProvider.getContext();o.authToken&&(i.Authorization="Bearer "+o.authToken),o.messagingToken&&(i["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(i["X-Firebase-AppCheck"]=o.appCheckToken);const c=r.timeout||7e4,a=Zn(c),l=await Promise.race([rr(e,s,i,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!l)throw new M("cancelled","Firebase Functions instance was deleted.");const m=qn(l.status,l.json);if(m)throw m;if(!l.json)throw new M("internal","Response is not valid JSON object.");let u=l.json.data;if(typeof u>"u"&&(u=l.json.result),typeof u>"u")throw new M("internal","Response is missing data field.");return{data:se(u)}}const Re="@firebase/functions",He="0.8.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="auth-internal",ar="app-check-internal",cr="messaging-internal";function lr(t,e){const n=(r,{instanceIdentifier:s})=>{const i=r.getProvider("app").getImmediate(),o=r.getProvider(or),c=r.getProvider(cr),a=r.getProvider(ar);return new er(i,o,c,a,s,t)};re(new J(De,n,"PUBLIC").setMultipleInstances(!0)),P(Re,He,e),P(Re,He,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t=Mn(),e=Ee){const r=Bn(ve(t),De).getImmediate({identifier:e}),s=kt("functions");return s&&fr(r,...s),r}function fr(t,e,n){tr(ve(t),e,n)}function at(t,e,n){return nr(ve(t),e,n)}lr(fetch.bind(self));const hr={apiKey:"AIzaSyD6-AnwenaRqEINQ6WE4TXoPfiSf7Dsh-o",authDomain:"pyshen-1a2b-96e49.firebaseapp.com",projectId:"pyshen-1a2b-96e49",storageBucket:"pyshen-1a2b-96e49.appspot.com",messagingSenderId:"1003010496912",appId:"1:1003010496912:web:3856ae5fe16ce908d77b15"},dr=rt(hr),ct=ur(dr),pr=at(ct,"newGame"),mr=at(ct,"verifyAnswer");function xe(t,e,n){const r=t.slice();return r[4]=e[n],r[6]=n,r}function Fe(t){let e,n=t[6]+4+"",r,s,i,o;function c(){return t[2](t[6])}return{c(){e=y("button"),r=w(n),s=I(),e.value=t[6]+4,v(e,"class","svelte-14x291p"),Ae(e,"active",t[0]===t[6]+4)},m(a,l){C(a,e,l),p(e,r),p(e,s),i||(o=X(e,"click",c),i=!0)},p(a,l){t=a,l&1&&Ae(e,"active",t[0]===t[6]+4)},d(a){a&&A(e),i=!1,o()}}}function gr(t){let e,n,r,s,i,o,c,a,l,m,u=Array(7),h=[];for(let d=0;d<u.length;d+=1)h[d]=Fe(xe(t,u,d));return{c(){e=y("div"),n=y("h1"),r=w("Difficuly: "),s=w(t[0]),i=I(),o=y("span");for(let d=0;d<h.length;d+=1)h[d].c();c=I(),a=y("button"),a.textContent="New Game",v(o,"class","button-row svelte-14x291p"),v(e,"class","page")},m(d,f){C(d,e,f),p(e,n),p(n,r),p(n,s),p(e,i),p(e,o);for(let g=0;g<h.length;g+=1)h[g].m(o,null);p(e,c),p(e,a),l||(m=X(a,"click",t[1]),l=!0)},p(d,[f]){if(f&1&&k(s,d[0]),f&1){u=Array(7);let g;for(g=0;g<u.length;g+=1){const E=xe(d,u,g);h[g]?h[g].p(E,f):(h[g]=Fe(E),h[g].c(),h[g].m(o,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=u.length}},i:D,o:D,d(d){d&&A(e),te(h,d),l=!1,m()}}}function _r(t,e,n){let r=4;const s=ie();return[r,()=>{pr({length:r,shuffle_n:20}).then(c=>{const a=c.data;s("newGame",{gameID:a,length:r})}).catch(c=>{alert(c)})},c=>{n(0,r=c+4)}]}class br extends U{constructor(e){super(),F(this,e,_r,gr,R,{})}}function Ue(t,e,n){const r=t.slice();return r[3]=e[n],r}function je(t){let e,n=t[3].submit+"",r,s,i=t[3].condition+"",o,c;return{c(){e=y("div"),r=w(n),s=w(":"),o=w(i),c=I(),v(e,"class","record")},m(a,l){C(a,e,l),p(e,r),p(e,s),p(e,o),p(e,c)},p(a,l){l&1&&n!==(n=a[3].submit+"")&&k(r,n),l&1&&i!==(i=a[3].condition+"")&&k(o,i)},d(a){a&&A(e)}}}function yr(t){let e,n,r=t[1].join("")+"",s,i,o,c=t[0],a=[];for(let l=0;l<c.length;l+=1)a[l]=je(Ue(t,c,l));return{c(){e=y("div"),n=y("h1"),s=w(r),i=I(),o=y("div");for(let l=0;l<a.length;l+=1)a[l].c();v(n,"class","reveal"),v(o,"class","log-block svelte-r9z7ul"),v(e,"class","page svelte-r9z7ul")},m(l,m){C(l,e,m),p(e,n),p(n,s),p(e,i),p(e,o);for(let u=0;u<a.length;u+=1)a[u].m(o,null)},p(l,[m]){if(m&2&&r!==(r=l[1].join("")+"")&&k(s,r),m&1){c=l[0];let u;for(u=0;u<c.length;u+=1){const h=Ue(l,c,u);a[u]?a[u].p(h,m):(a[u]=je(h),a[u].c(),a[u].m(o,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=c.length}},i:D,o:D,d(l){l&&A(e),te(a,l)}}}function Er(t,e,n){let{gameDifficulty:r}=e,{log:s}=e,i=new Array(r).fill("?");return t.$$set=o=>{"gameDifficulty"in o&&n(2,r=o.gameDifficulty),"log"in o&&n(0,s=o.log)},t.$$.update=()=>{if(t.$$.dirty&1){for(let o of s)if(o.A_index.length>0)for(let c of o.A_index)n(1,i[c]=o.submit[c],i)}},[s,i,r]}class vr extends U{constructor(e){super(),F(this,e,Er,yr,R,{gameDifficulty:2,log:0})}}function Ve(t,e,n){const r=t.slice();return r[9]=e[n],r[11]=n,r}function ze(t,e,n){const r=t.slice();return r[12]=e[n],r}function Ge(t){let e,n=t[12]+"",r;return{c(){e=y("div"),r=w(n),v(e,"class","digit svelte-hkce98")},m(s,i){C(s,e,i),p(e,r)},p(s,i){i&2&&n!==(n=s[12]+"")&&k(r,n)},d(s){s&&A(e)}}}function We(t){let e,n,r,s,i,o;function c(){return t[5](t[11])}return{c(){e=y("button"),n=w(t[11]),r=I(),e.value=t[11],e.disabled=s=t[1].includes(t[11]),v(e,"class","svelte-hkce98")},m(a,l){C(a,e,l),p(e,n),p(e,r),i||(o=X(e,"click",c),i=!0)},p(a,l){t=a,l&2&&s!==(s=t[1].includes(t[11]))&&(e.disabled=s)},d(a){a&&A(e),i=!1,o()}}}function wr(t){let e,n,r,s,i,o,c,a,l,m=t[1],u=[];for(let f=0;f<m.length;f+=1)u[f]=Ge(ze(t,m,f));let h=Array(10),d=[];for(let f=0;f<h.length;f+=1)d[f]=We(Ve(t,h,f));return a=new vr({props:{gameDifficulty:t[0],log:t[2]}}),{c(){e=y("div"),n=y("div"),r=y("div");for(let f=0;f<u.length;f+=1)u[f].c();s=I(),i=y("div");for(let f=0;f<d.length;f+=1)d[f].c();o=I(),c=y("div"),q(a.$$.fragment),v(r,"class","submit svelte-hkce98"),v(i,"class","keyboard svelte-hkce98"),v(n,"class","control svelte-hkce98"),v(c,"class","logger svelte-hkce98"),v(e,"class","page svelte-hkce98")},m(f,g){C(f,e,g),p(e,n),p(n,r);for(let E=0;E<u.length;E+=1)u[E].m(r,null);p(n,s),p(n,i);for(let E=0;E<d.length;E+=1)d[E].m(i,null);p(e,o),p(e,c),H(a,c,null),l=!0},p(f,[g]){if(g&2){m=f[1];let _;for(_=0;_<m.length;_+=1){const V=ze(f,m,_);u[_]?u[_].p(V,g):(u[_]=Ge(V),u[_].c(),u[_].m(r,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=m.length}if(g&10){h=Array(10);let _;for(_=0;_<h.length;_+=1){const V=Ve(f,h,_);d[_]?d[_].p(V,g):(d[_]=We(V),d[_].c(),d[_].m(i,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=h.length}const E={};g&1&&(E.gameDifficulty=f[0]),g&4&&(E.log=f[2]),a.$set(E)},i(f){l||($(a.$$.fragment,f),l=!0)},o(f){B(a.$$.fragment,f),l=!1},d(f){f&&A(e),te(u,f),te(d,f),x(a)}}}function Dr(t,e,n){let{gameID:r}=e,{gameDifficulty:s}=e,i=[],o=[];const c=h=>{n(1,i=[...i,h]),i.length===s&&(a(),setTimeout(()=>{n(1,i.length=0,i)},500))},a=()=>{const h=i.join("");mr({id:r,submit:h}).then(d=>{let f=d.data;if(typeof f=="string")throw f;const g=f.condition,E=f.A_index;n(2,o=[...o,{submit:h,condition:g,A_index:E}]),g==="4A"&&setTimeout(()=>{m(h)},500)}).catch(d=>{alert(d)})},l=ie(),m=h=>{l("win",{attempts:o.length,answer:h})},u=h=>{c(h)};return t.$$set=h=>{"gameID"in h&&n(4,r=h.gameID),"gameDifficulty"in h&&n(0,s=h.gameDifficulty)},[s,i,o,c,r,u]}class Ir extends U{constructor(e){super(),F(this,e,Dr,wr,R,{gameID:4,gameDifficulty:0})}}function Ar(t){let e,n,r,s,i,o,c,a,l,m,u,h,d,f,g;return{c(){e=y("div"),n=y("h1"),n.textContent="You Win!",r=I(),s=y("h2"),i=w("The answer is: "),o=w(t[0]),c=I(),a=y("h2"),l=w("You've tried: "),m=w(t[1]),u=w(" time(s)"),h=I(),d=y("button"),d.textContent="Play Again",v(e,"class","page")},m(E,_){C(E,e,_),p(e,n),p(e,r),p(e,s),p(s,i),p(s,o),p(e,c),p(e,a),p(a,l),p(a,m),p(a,u),p(e,h),p(e,d),f||(g=X(d,"click",t[2]),f=!0)},p(E,[_]){_&1&&k(o,E[0]),_&2&&k(m,E[1])},i:D,o:D,d(E){E&&A(e),f=!1,g()}}}function Cr(t,e,n){let{answer:r}=e,{attempts:s}=e;const i=ie(),o=()=>{i("again")};return t.$$set=c=>{"answer"in c&&n(0,r=c.answer),"attempts"in c&&n(1,s=c.attempts)},[r,s,o]}class Sr extends U{constructor(e){super(),F(this,e,Cr,Ar,R,{answer:0,attempts:1})}}function Tr(t){let e,n;return e=new Sr({props:{answer:t[6],attempts:t[5]}}),e.$on("again",t[10]),{c(){q(e.$$.fragment)},m(r,s){H(e,r,s),n=!0},p(r,s){const i={};s&64&&(i.answer=r[6]),s&32&&(i.attempts=r[5]),e.$set(i)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){B(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function $r(t){let e,n;return e=new Ir({props:{gameID:t[3],gameDifficulty:t[4]}}),e.$on("win",t[9]),{c(){q(e.$$.fragment)},m(r,s){H(e,r,s),n=!0},p(r,s){const i={};s&8&&(i.gameID=r[3]),s&16&&(i.gameDifficulty=r[4]),e.$set(i)},i(r){n||($(e.$$.fragment,r),n=!0)},o(r){B(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function Nr(t){let e,n;return e=new br({}),e.$on("newGame",t[8]),{c(){q(e.$$.fragment)},m(r,s){H(e,r,s),n=!0},p:D,i(r){n||($(e.$$.fragment,r),n=!0)},o(r){B(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function Or(t){let e,n;return e=new vt({}),e.$on("start",t[7]),{c(){q(e.$$.fragment)},m(r,s){H(e,r,s),n=!0},p:D,i(r){n||($(e.$$.fragment,r),n=!0)},o(r){B(e.$$.fragment,r),n=!1},d(r){x(e,r)}}}function kr(t){let e,n,r,s;const i=[Or,Nr,$r,Tr],o=[];function c(a,l){return a[0]?0:a[1]?1:a[2]?2:3}return n=c(t),r=o[n]=i[n](t),{c(){e=y("div"),r.c(),v(e,"class","main svelte-pg4311")},m(a,l){C(a,e,l),o[n].m(e,null),s=!0},p(a,[l]){let m=n;n=c(a),n===m?o[n].p(a,l):(gt(),B(o[m],1,1,()=>{o[m]=null}),_t(),r=o[n],r?r.p(a,l):(r=o[n]=i[n](a),r.c()),$(r,1),r.m(e,null))},i(a){s||($(r),s=!0)},o(a){B(r),s=!1},d(a){a&&A(e),o[n].d()}}}function Br(t,e,n){let r=!0,s=!1,i=!1,o,c,a,l;return[r,s,i,o,c,a,l,()=>{n(0,r=!1),n(1,s=!0)},f=>{n(3,o=f.detail.gameID),n(4,c=f.detail.length),n(1,s=!1),n(2,i=!0)},f=>{n(5,a=f.detail.attempts),n(6,l=f.detail.answer),n(2,i=!1)},()=>{n(0,r=!0)}]}class Lr extends U{constructor(e){super(),F(this,e,Br,kr,R,{})}}new Lr({target:document.getElementById("app")});
