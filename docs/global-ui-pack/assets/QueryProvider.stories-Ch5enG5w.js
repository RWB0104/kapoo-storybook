var Ce=t=>{throw TypeError(t)};var ve=(t,e,s)=>e.has(t)||Ce("Cannot "+s);var i=(t,e,s)=>(ve(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>e.has(t)?Ce("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),o=(t,e,s,r)=>(ve(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),w=(t,e,s)=>(ve(t,e,"access private method"),s);var de=(t,e,s,r)=>({set _(n){o(t,e,n,s)},get _(){return i(t,e,r)}});import{j as we}from"./jsx-runtime-BnHmloXs.js";import{r as Oe}from"./index-XLJyvO9z.js";import{g as Ze,S as et,a as tt}from"./storybook-hTxjENzG.js";import{P as st}from"./Previewless-RlpCezBo.js";import"./jsx-runtime-BEh3FTX5.js";var me=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ge=typeof window>"u"||"Deno"in globalThis;function A(){}function rt(t,e){return typeof t=="function"?t(e):t}function it(t){return typeof t=="number"&&t>=0&&t!==1/0}function nt(t,e){return Math.max(t+(e||0)-Date.now(),0)}function qe(t,e){return typeof t=="function"?t(e):t}function at(t,e){return typeof t=="function"?t(e):t}function Qe(t,e){const{type:s="all",exact:r,fetchStatus:n,predicate:u,queryKey:h,stale:a}=t;if(h){if(r){if(e.queryHash!==Se(h,e.options))return!1}else if(!oe(e.queryKey,h))return!1}if(s!=="all"){const f=e.isActive();if(s==="active"&&!f||s==="inactive"&&f)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||n&&n!==e.state.fetchStatus||u&&!u(e))}function Ee(t,e){const{exact:s,status:r,predicate:n,mutationKey:u}=t;if(u){if(!e.options.mutationKey)return!1;if(s){if(ue(e.options.mutationKey)!==ue(u))return!1}else if(!oe(e.options.mutationKey,u))return!1}return!(r&&e.state.status!==r||n&&!n(e))}function Se(t,e){return((e==null?void 0:e.queryKeyHashFn)||ue)(t)}function ue(t){return JSON.stringify(t,(e,s)=>Pe(s)?Object.keys(s).sort().reduce((r,n)=>(r[n]=s[n],r),{}):s)}function oe(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(s=>!oe(t[s],e[s])):!1}function Be(t,e){if(t===e)return t;const s=Me(t)&&Me(e);if(s||Pe(t)&&Pe(e)){const r=s?t:Object.keys(t),n=r.length,u=s?e:Object.keys(e),h=u.length,a=s?[]:{};let f=0;for(let P=0;P<h;P++){const m=s?P:u[P];(!s&&r.includes(m)||s)&&t[m]===void 0&&e[m]===void 0?(a[m]=void 0,f++):(a[m]=Be(t[m],e[m]),a[m]===t[m]&&t[m]!==void 0&&f++)}return n===h&&f===n?t:a}return e}function Me(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Pe(t){if(!De(t))return!1;const e=t.constructor;if(e===void 0)return!0;const s=e.prototype;return!(!De(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function De(t){return Object.prototype.toString.call(t)==="[object Object]"}function ut(t){return new Promise(e=>{setTimeout(e,t)})}function ot(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?Be(t,e):e}function ht(t,e,s=0){const r=[...t,e];return s&&r.length>s?r.slice(1):r}function ct(t,e,s=0){const r=[e,...t];return s&&r.length>s?r.slice(0,-1):r}var Fe=Symbol();function ze(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Fe?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var $,G,Y,je,lt=(je=class extends me{constructor(){super();l(this,$);l(this,G);l(this,Y);o(this,Y,e=>{if(!ge&&window.addEventListener){const s=()=>e();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){i(this,G)||this.setEventListener(i(this,Y))}onUnsubscribe(){var e;this.hasListeners()||((e=i(this,G))==null||e.call(this),o(this,G,void 0))}setEventListener(e){var s;o(this,Y,e),(s=i(this,G))==null||s.call(this),o(this,G,e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(e){i(this,$)!==e&&(o(this,$,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(s=>{s(e)})}isFocused(){var e;return typeof i(this,$)=="boolean"?i(this,$):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},$=new WeakMap,G=new WeakMap,Y=new WeakMap,je),Je=new lt,Z,N,ee,xe,dt=(xe=class extends me{constructor(){super();l(this,Z,!0);l(this,N);l(this,ee);o(this,ee,e=>{if(!ge&&window.addEventListener){const s=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",r)}}})}onSubscribe(){i(this,N)||this.setEventListener(i(this,ee))}onUnsubscribe(){var e;this.hasListeners()||((e=i(this,N))==null||e.call(this),o(this,N,void 0))}setEventListener(e){var s;o(this,ee,e),(s=i(this,N))==null||s.call(this),o(this,N,e(this.setOnline.bind(this)))}setOnline(e){i(this,Z)!==e&&(o(this,Z,e),this.listeners.forEach(r=>{r(e)}))}isOnline(){return i(this,Z)}},Z=new WeakMap,N=new WeakMap,ee=new WeakMap,xe),pe=new dt;function ft(){let t,e;const s=new Promise((n,u)=>{t=n,e=u});s.status="pending",s.catch(()=>{});function r(n){Object.assign(s,n),delete s.resolve,delete s.reject}return s.resolve=n=>{r({status:"fulfilled",value:n}),t(n)},s.reject=n=>{r({status:"rejected",reason:n}),e(n)},s}function yt(t){return Math.min(1e3*2**t,3e4)}function $e(t){return(t??"online")==="online"?pe.isOnline():!0}var Ve=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function be(t){return t instanceof Ve}function Xe(t){let e=!1,s=0,r=!1,n;const u=ft(),h=c=>{var p;r||(y(new Ve(c)),(p=t.abort)==null||p.call(t))},a=()=>{e=!0},f=()=>{e=!1},P=()=>Je.isFocused()&&(t.networkMode==="always"||pe.isOnline())&&t.canRun(),m=()=>$e(t.networkMode)&&t.canRun(),d=c=>{var p;r||(r=!0,(p=t.onSuccess)==null||p.call(t,c),n==null||n(),u.resolve(c))},y=c=>{var p;r||(r=!0,(p=t.onError)==null||p.call(t,c),n==null||n(),u.reject(c))},q=()=>new Promise(c=>{var p;n=Q=>{(r||P())&&c(Q)},(p=t.onPause)==null||p.call(t)}).then(()=>{var c;n=void 0,r||(c=t.onContinue)==null||c.call(t)}),S=()=>{if(r)return;let c;const p=s===0?t.initialPromise:void 0;try{c=p??t.fn()}catch(Q){c=Promise.reject(Q)}Promise.resolve(c).then(d).catch(Q=>{var x;if(r)return;const D=t.retry??(ge?0:3),v=t.retryDelay??yt,E=typeof v=="function"?v(s,Q):v,j=D===!0||typeof D=="number"&&s<D||typeof D=="function"&&D(s,Q);if(e||!j){y(Q);return}s++,(x=t.onFail)==null||x.call(t,s,Q),ut(E).then(()=>P()?void 0:q()).then(()=>{e?y(Q):S()})})};return{promise:u,cancel:h,continue:()=>(n==null||n(),u),cancelRetry:a,continueRetry:f,canStart:m,start:()=>(m()?S():q().then(S),u)}}function pt(){let t=[],e=0,s=a=>{a()},r=a=>{a()},n=a=>setTimeout(a,0);const u=a=>{e?t.push(a):n(()=>{s(a)})},h=()=>{const a=t;t=[],a.length&&n(()=>{r(()=>{a.forEach(f=>{s(f)})})})};return{batch:a=>{let f;e++;try{f=a()}finally{e--,e||h()}return f},batchCalls:a=>(...f)=>{u(()=>{a(...f)})},schedule:u,setNotifyFunction:a=>{s=a},setBatchNotifyFunction:a=>{r=a},setScheduler:a=>{n=a}}}var C=pt(),V,Ue,We=(Ue=class{constructor(){l(this,V)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),it(this.gcTime)&&o(this,V,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ge?1/0:5*60*1e3))}clearGcTimeout(){i(this,V)&&(clearTimeout(i(this,V)),o(this,V,void 0))}},V=new WeakMap,Ue),te,se,M,O,he,X,R,k,Ie,mt=(Ie=class extends We{constructor(e){super();l(this,R);l(this,te);l(this,se);l(this,M);l(this,O);l(this,he);l(this,X);o(this,X,!1),o(this,he,e.defaultOptions),this.setOptions(e.options),this.observers=[],o(this,M,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,o(this,te,vt(this.options)),this.state=e.state??i(this,te),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=i(this,O))==null?void 0:e.promise}setOptions(e){this.options={...i(this,he),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&i(this,M).remove(this)}setData(e,s){const r=ot(this.state.data,e,this.options);return w(this,R,k).call(this,{data:r,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),r}setState(e,s){w(this,R,k).call(this,{type:"setState",state:e,setStateOptions:s})}cancel(e){var r,n;const s=(r=i(this,O))==null?void 0:r.promise;return(n=i(this,O))==null||n.cancel(e),s?s.then(A).catch(A):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(i(this,te))}isActive(){return this.observers.some(e=>at(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Fe||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!nt(this.state.dataUpdatedAt,e)}onFocus(){var s;const e=this.observers.find(r=>r.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(s=i(this,O))==null||s.continue()}onOnline(){var s;const e=this.observers.find(r=>r.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(s=i(this,O))==null||s.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),i(this,M).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(s=>s!==e),this.observers.length||(i(this,O)&&(i(this,X)?i(this,O).cancel({revert:!0}):i(this,O).cancelRetry()),this.scheduleGc()),i(this,M).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||w(this,R,k).call(this,{type:"invalidate"})}fetch(e,s){var f,P,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(i(this,O))return i(this,O).continueRetry(),i(this,O).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(y=>y.options.queryFn);d&&this.setOptions(d.options)}const r=new AbortController,n=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(o(this,X,!0),r.signal)})},u=()=>{const d=ze(this.options,s),y={queryKey:this.queryKey,meta:this.meta};return n(y),o(this,X,!1),this.options.persister?this.options.persister(d,y,this):d(y)},h={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:u};n(h),(f=this.options.behavior)==null||f.onFetch(h,this),o(this,se,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((P=h.fetchOptions)==null?void 0:P.meta))&&w(this,R,k).call(this,{type:"fetch",meta:(m=h.fetchOptions)==null?void 0:m.meta});const a=d=>{var y,q,S,c;be(d)&&d.silent||w(this,R,k).call(this,{type:"error",error:d}),be(d)||((q=(y=i(this,M).config).onError)==null||q.call(y,d,this),(c=(S=i(this,M).config).onSettled)==null||c.call(S,this.state.data,d,this)),this.scheduleGc()};return o(this,O,Xe({initialPromise:s==null?void 0:s.initialPromise,fn:h.fetchFn,abort:r.abort.bind(r),onSuccess:d=>{var y,q,S,c;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(p){a(p);return}(q=(y=i(this,M).config).onSuccess)==null||q.call(y,d,this),(c=(S=i(this,M).config).onSettled)==null||c.call(S,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,y)=>{w(this,R,k).call(this,{type:"failed",failureCount:d,error:y})},onPause:()=>{w(this,R,k).call(this,{type:"pause"})},onContinue:()=>{w(this,R,k).call(this,{type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0})),i(this,O).start()}},te=new WeakMap,se=new WeakMap,M=new WeakMap,O=new WeakMap,he=new WeakMap,X=new WeakMap,R=new WeakSet,k=function(e){const s=r=>{switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...gt(r.data,this.options),fetchMeta:e.meta??null};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=e.error;return be(n)&&n.revert&&i(this,se)?{...i(this,se),fetchStatus:"idle"}:{...r,error:n,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=s(this.state),C.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),i(this,M).notify({query:this,type:"updated",action:e})})},Ie);function gt(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:$e(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function vt(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,s=e!==void 0,r=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var U,Ke,bt=(Ke=class extends me{constructor(e={}){super();l(this,U);this.config=e,o(this,U,new Map)}build(e,s,r){const n=s.queryKey,u=s.queryHash??Se(n,s);let h=this.get(u);return h||(h=new mt({cache:this,queryKey:n,queryHash:u,options:e.defaultQueryOptions(s),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(h)),h}add(e){i(this,U).has(e.queryHash)||(i(this,U).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=i(this,U).get(e.queryHash);s&&(e.destroy(),s===e&&i(this,U).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){C.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return i(this,U).get(e)}getAll(){return[...i(this,U).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(r=>Qe(s,r))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(r=>Qe(e,r)):s}notify(e){C.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){C.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){C.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},U=new WeakMap,Ke),I,F,W,K,H,ke,Pt=(ke=class extends We{constructor(e){super();l(this,K);l(this,I);l(this,F);l(this,W);this.mutationId=e.mutationId,o(this,F,e.mutationCache),o(this,I,[]),this.state=e.state||wt(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){i(this,I).includes(e)||(i(this,I).push(e),this.clearGcTimeout(),i(this,F).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){o(this,I,i(this,I).filter(s=>s!==e)),this.scheduleGc(),i(this,F).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){i(this,I).length||(this.state.status==="pending"?this.scheduleGc():i(this,F).remove(this))}continue(){var e;return((e=i(this,W))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var n,u,h,a,f,P,m,d,y,q,S,c,p,Q,D,v,E,j,x,le;o(this,W,Xe({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(b,J)=>{w(this,K,H).call(this,{type:"failed",failureCount:b,error:J})},onPause:()=>{w(this,K,H).call(this,{type:"pause"})},onContinue:()=>{w(this,K,H).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>i(this,F).canRun(this)}));const s=this.state.status==="pending",r=!i(this,W).canStart();try{if(!s){w(this,K,H).call(this,{type:"pending",variables:e,isPaused:r}),await((u=(n=i(this,F).config).onMutate)==null?void 0:u.call(n,e,this));const J=await((a=(h=this.options).onMutate)==null?void 0:a.call(h,e));J!==this.state.context&&w(this,K,H).call(this,{type:"pending",context:J,variables:e,isPaused:r})}const b=await i(this,W).start();return await((P=(f=i(this,F).config).onSuccess)==null?void 0:P.call(f,b,e,this.state.context,this)),await((d=(m=this.options).onSuccess)==null?void 0:d.call(m,b,e,this.state.context)),await((q=(y=i(this,F).config).onSettled)==null?void 0:q.call(y,b,null,this.state.variables,this.state.context,this)),await((c=(S=this.options).onSettled)==null?void 0:c.call(S,b,null,e,this.state.context)),w(this,K,H).call(this,{type:"success",data:b}),b}catch(b){try{throw await((Q=(p=i(this,F).config).onError)==null?void 0:Q.call(p,b,e,this.state.context,this)),await((v=(D=this.options).onError)==null?void 0:v.call(D,b,e,this.state.context)),await((j=(E=i(this,F).config).onSettled)==null?void 0:j.call(E,void 0,b,this.state.variables,this.state.context,this)),await((le=(x=this.options).onSettled)==null?void 0:le.call(x,void 0,b,e,this.state.context)),b}finally{w(this,K,H).call(this,{type:"error",error:b})}}finally{i(this,F).runNext(this)}}},I=new WeakMap,F=new WeakMap,W=new WeakMap,K=new WeakSet,H=function(e){const s=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=s(this.state),C.batch(()=>{i(this,I).forEach(r=>{r.onMutationUpdate(e)}),i(this,F).notify({mutation:this,type:"updated",action:e})})},ke);function wt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var L,T,ce,Le,Ot=(Le=class extends me{constructor(e={}){super();l(this,L);l(this,T);l(this,ce);this.config=e,o(this,L,new Set),o(this,T,new Map),o(this,ce,0)}build(e,s,r){const n=new Pt({mutationCache:this,mutationId:++de(this,ce)._,options:e.defaultMutationOptions(s),state:r});return this.add(n),n}add(e){i(this,L).add(e);const s=fe(e);if(typeof s=="string"){const r=i(this,T).get(s);r?r.push(e):i(this,T).set(s,[e])}this.notify({type:"added",mutation:e})}remove(e){if(i(this,L).delete(e)){const s=fe(e);if(typeof s=="string"){const r=i(this,T).get(s);if(r)if(r.length>1){const n=r.indexOf(e);n!==-1&&r.splice(n,1)}else r[0]===e&&i(this,T).delete(s)}}this.notify({type:"removed",mutation:e})}canRun(e){const s=fe(e);if(typeof s=="string"){const r=i(this,T).get(s),n=r==null?void 0:r.find(u=>u.state.status==="pending");return!n||n===e}else return!0}runNext(e){var r;const s=fe(e);if(typeof s=="string"){const n=(r=i(this,T).get(s))==null?void 0:r.find(u=>u!==e&&u.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}else return Promise.resolve()}clear(){C.batch(()=>{i(this,L).forEach(e=>{this.notify({type:"removed",mutation:e})}),i(this,L).clear(),i(this,T).clear()})}getAll(){return Array.from(i(this,L))}find(e){const s={exact:!0,...e};return this.getAll().find(r=>Ee(s,r))}findAll(e={}){return this.getAll().filter(s=>Ee(e,s))}notify(e){C.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){const e=this.getAll().filter(s=>s.state.isPaused);return C.batch(()=>Promise.all(e.map(s=>s.continue().catch(A))))}},L=new WeakMap,T=new WeakMap,ce=new WeakMap,Le);function fe(t){var e;return(e=t.options.scope)==null?void 0:e.id}function Ae(t){return{onFetch:(e,s)=>{var m,d,y,q,S;const r=e.options,n=(y=(d=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:d.fetchMore)==null?void 0:y.direction,u=((q=e.state.data)==null?void 0:q.pages)||[],h=((S=e.state.data)==null?void 0:S.pageParams)||[];let a={pages:[],pageParams:[]},f=0;const P=async()=>{let c=!1;const p=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>(e.signal.aborted?c=!0:e.signal.addEventListener("abort",()=>{c=!0}),e.signal)})},Q=ze(e.options,e.fetchOptions),D=async(v,E,j)=>{if(c)return Promise.reject();if(E==null&&v.pages.length)return Promise.resolve(v);const x={queryKey:e.queryKey,pageParam:E,direction:j?"backward":"forward",meta:e.options.meta};p(x);const le=await Q(x),{maxPages:b}=e.options,J=j?ct:ht;return{pages:J(v.pages,le,b),pageParams:J(v.pageParams,E,b)}};if(n&&u.length){const v=n==="backward",E=v?St:Re,j={pages:u,pageParams:h},x=E(r,j);a=await D(j,x,v)}else{const v=t??u.length;do{const E=f===0?h[0]??r.initialPageParam:Re(r,a);if(f>0&&E==null)break;a=await D(a,E),f++}while(f<v)}return a};e.options.persister?e.fetchFn=()=>{var c,p;return(p=(c=e.options).persister)==null?void 0:p.call(c,P,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s)}:e.fetchFn=P}}}function Re(t,{pages:e,pageParams:s}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,s[r],s):void 0}function St(t,{pages:e,pageParams:s}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,s[0],s):void 0}var g,_,B,re,ie,z,ne,ae,He,Ft=(He=class{constructor(t={}){l(this,g);l(this,_);l(this,B);l(this,re);l(this,ie);l(this,z);l(this,ne);l(this,ae);o(this,g,t.queryCache||new bt),o(this,_,t.mutationCache||new Ot),o(this,B,t.defaultOptions||{}),o(this,re,new Map),o(this,ie,new Map),o(this,z,0)}mount(){de(this,z)._++,i(this,z)===1&&(o(this,ne,Je.subscribe(async t=>{t&&(await this.resumePausedMutations(),i(this,g).onFocus())})),o(this,ae,pe.subscribe(async t=>{t&&(await this.resumePausedMutations(),i(this,g).onOnline())})))}unmount(){var t,e;de(this,z)._--,i(this,z)===0&&((t=i(this,ne))==null||t.call(this),o(this,ne,void 0),(e=i(this,ae))==null||e.call(this),o(this,ae,void 0))}isFetching(t){return i(this,g).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return i(this,_).findAll({...t,status:"pending"}).length}getQueryData(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=i(this,g).get(e.queryHash))==null?void 0:s.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),s=i(this,g).build(this,e),r=s.state.data;return r===void 0?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime(qe(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(t){return i(this,g).findAll(t).map(({queryKey:e,state:s})=>{const r=s.data;return[e,r]})}setQueryData(t,e,s){const r=this.defaultQueryOptions({queryKey:t}),n=i(this,g).get(r.queryHash),u=n==null?void 0:n.state.data,h=rt(e,u);if(h!==void 0)return i(this,g).build(this,r).setData(h,{...s,manual:!0})}setQueriesData(t,e,s){return C.batch(()=>i(this,g).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,s)]))}getQueryState(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=i(this,g).get(e.queryHash))==null?void 0:s.state}removeQueries(t){const e=i(this,g);C.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=i(this,g),r={type:"active",...t};return C.batch(()=>(s.findAll(t).forEach(n=>{n.reset()}),this.refetchQueries(r,e)))}cancelQueries(t,e={}){const s={revert:!0,...e},r=C.batch(()=>i(this,g).findAll(t).map(n=>n.cancel(s)));return Promise.all(r).then(A).catch(A)}invalidateQueries(t,e={}){return C.batch(()=>{if(i(this,g).findAll(t).forEach(r=>{r.invalidate()}),(t==null?void 0:t.refetchType)==="none")return Promise.resolve();const s={...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"};return this.refetchQueries(s,e)})}refetchQueries(t,e={}){const s={...e,cancelRefetch:e.cancelRefetch??!0},r=C.batch(()=>i(this,g).findAll(t).filter(n=>!n.isDisabled()).map(n=>{let u=n.fetch(void 0,s);return s.throwOnError||(u=u.catch(A)),n.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(A)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=i(this,g).build(this,e);return s.isStaleByTime(qe(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(A).catch(A)}fetchInfiniteQuery(t){return t.behavior=Ae(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(A).catch(A)}ensureInfiniteQueryData(t){return t.behavior=Ae(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return pe.isOnline()?i(this,_).resumePausedMutations():Promise.resolve()}getQueryCache(){return i(this,g)}getMutationCache(){return i(this,_)}getDefaultOptions(){return i(this,B)}setDefaultOptions(t){o(this,B,t)}setQueryDefaults(t,e){i(this,re).set(ue(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...i(this,re).values()],s={};return e.forEach(r=>{oe(t,r.queryKey)&&Object.assign(s,r.defaultOptions)}),s}setMutationDefaults(t,e){i(this,ie).set(ue(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...i(this,ie).values()];let s={};return e.forEach(r=>{oe(t,r.mutationKey)&&(s={...s,...r.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...i(this,B).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Se(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Fe&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...i(this,B).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){i(this,g).clear(),i(this,_).clear()}},g=new WeakMap,_=new WeakMap,B=new WeakMap,re=new WeakMap,ie=new WeakMap,z=new WeakMap,ne=new WeakMap,ae=new WeakMap,He),Ct=Oe.createContext(void 0),qt=({client:t,children:e})=>(Oe.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),we.jsx(Ct.Provider,{value:t,children:e}));function Ye({client:t,children:e}){const s=Oe.useMemo(()=>t??new Ft({defaultOptions:{queries:{staleTime:36e5}}}),[t]);return we.jsx(qt,{client:s,children:e})}Ye.__docgenInfo={description:`react-query 프로바이더 organism 컴포넌트 반환 메서드

@returns {React.JSX.Element} JSX`,methods:[],displayName:"QueryProvider",props:{client:{required:!1,tsType:{name:"QueryClient"},description:"기본 react-query 객체"}},composes:["PropsWithChildren"]};const Te="QueryProvider",Tt={argTypes:{children:tt("children",Te),client:{control:{disable:!0},table:{category:Te,subcategory:et.PROP}}},component:Ye,parameters:Ze("react-query 프로바이더 컴포넌트",["[@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/overview)를 사용하기 위한 프로바이더 컴포넌트입니다.","단순 로직을 위한 컴포넌트로, 별도의 디자인이 존재하지 않습니다."]),tags:["autodocs"],title:"organism/QueryProvider"},ye={render:()=>we.jsx(st,{})};var Ge,Ne,_e;ye.parameters={...ye.parameters,docs:{...(Ge=ye.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <Previewless />
}`,...(_e=(Ne=ye.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};const jt=["Playground"];export{ye as Playground,jt as __namedExportsOrder,Tt as default};
