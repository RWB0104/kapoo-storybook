const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CE-CKgcX.js","./WaveSky-DvKn9DGW.js","./jsx-runtime-BnHmloXs.js","./jsx-runtime-BEh3FTX5.js","./index-BCzbi48b.js","./util-CbDYoOyb.js","./utils-jAU0Cazi.js","./Sky-DJn9zHdm.js","./Sky-DarZIQjS.css","./Wave-CteqosSf.js"])))=>i.map(i=>d[i]);
import{j as o}from"./jsx-runtime-BnHmloXs.js";import{a as ee,g as se}from"./index-BCzbi48b.js";import{g as le,S as E,a as L}from"./storybook-CWpip0ZO.js";import{S as j}from"./StorybookContainer-CXD7EHC6.js";import{S as b}from"./StorybookTemplate-h4nRBuW0.js";import{_ as ie}from"./iframe-cf8M1eQ0.js";import{r as re}from"./_interop_require_wildcard-BpaVepTj.js";import{c as ue}from"./utils-jAU0Cazi.js";import{W as de}from"./Wave-CteqosSf.js";import{I as ce}from"./Img-DCZBSmGJ.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-OaFZzyAw.js";import"./head-manager-context.shared-runtime-BqQs_gVk.js";import"./router-context.shared-runtime-C2cXhtTv.js";import"./use-merged-ref-CA1Bo7Ed.js";import"./image-context-CF_m7TLE.js";import"./createLucideIcon-MTmt1UxL.js";function me(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var N={},A={},D;function pe(){return D||(D=1,function(r){"use client";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"LoadableContext",{enumerable:!0,get:function(){return n}});const n=re()._(ee()).default.createContext(null)}(A)),A}var I;function fe(){return I||(I=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return ae}});const u=re()._(ee()),n=pe();function m(a){return a&&a.default?a.default:a}const p=[],T=[];let P=!1;function w(a){let s=a(),t={loading:!0,loaded:null,error:null};return t.promise=s.then(l=>(t.loading=!1,t.loaded=l,l)).catch(l=>{throw t.loading=!1,t.error=l,l}),t}function te(a,s){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},s),l=null;function _(){if(!l){const i=new oe(a,t);l={getCurrentValue:i.getCurrentValue.bind(i),subscribe:i.subscribe.bind(i),retry:i.retry.bind(i),promise:i.promise.bind(i)}}return l.promise()}if(typeof window>"u"&&p.push(_),!P&&typeof window<"u"){const i=t.webpack&&typeof me.resolveWeak=="function"?t.webpack():t.modules;i&&T.push(h=>{for(const d of i)if(h.includes(d))return _()})}function ne(){_();const i=u.default.useContext(n.LoadableContext);i&&Array.isArray(t.modules)&&t.modules.forEach(h=>{i(h)})}function R(i,h){ne();const d=u.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return u.default.useImperativeHandle(h,()=>({retry:l.retry}),[]),u.default.useMemo(()=>d.loading||d.error?u.default.createElement(t.loading,{isLoading:d.loading,pastDelay:d.pastDelay,timedOut:d.timedOut,error:d.error,retry:l.retry}):d.loaded?u.default.createElement(m(d.loaded),i):null,[i,d])}return R.preload=()=>_(),R.displayName="LoadableComponent",u.default.forwardRef(R)}class oe{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:s,_opts:t}=this;s.loading&&(typeof t.delay=="number"&&(t.delay===0?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),typeof t.timeout=="number"&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(l=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(s){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...s},this._callbacks.forEach(t=>t())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(s){return this._callbacks.add(s),()=>{this._callbacks.delete(s)}}constructor(s,t){this._loadFn=s,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function y(a){return te(w,a)}function F(a,s){let t=[];for(;a.length;){let l=a.pop();t.push(l(s))}return Promise.all(t).then(()=>{if(a.length)return F(a,s)})}y.preloadAll=()=>new Promise((a,s)=>{F(p).then(a,s)}),y.preloadReady=a=>(a===void 0&&(a=[]),new Promise(s=>{const t=()=>(P=!0,s());F(T,a).then(t,t)})),typeof window<"u"&&(window.__NEXT_PRELOADREADY=y.preloadReady);const ae=y}(N)),N}var he=fe();const be=se(he);function M(r){return{default:(r==null?void 0:r.default)||r}}function ye(r,e){const u=be;(e==null?void 0:e.ssr)===!1&&delete e.ssr;let n={loading:({error:T,isLoading:P,pastDelay:w})=>null};r instanceof Promise?n.loader=()=>r:typeof r=="function"?n.loader=r:typeof r=="object"&&(n={...n,...r}),n={...n,...e};const m=n.loader,p=()=>m!=null?m().then(M):Promise.resolve(M(()=>null));return n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),u({...n,loader:p})}const _e=ye(()=>ie(()=>import("./index-CE-CKgcX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),{loadableGenerated:{modules:["src/molecule/Footer/Footer.tsx -> ../WaveSky"]},ssr:!1});function c({hour:r,mainColor:e,bodyColor:u,className:n,children:m,...p}){return o.jsxs("footer",{className:ue("mt-3",n),"data-component":"Footer",...p,children:[o.jsxs("div",{className:"relative flex h-72 flex-col overflow-hidden",children:[o.jsx(_e,{hour:r}),o.jsx("div",{className:"animate-boat absolute -bottom-5 left-[10%]",children:o.jsx(ce,{alt:"ship",height:100,src:"https://github.com/user-attachments/assets/e2a11c89-57af-4944-9068-bf237369f8b3",width:100})}),o.jsx("div",{className:"absolute bottom-0 w-full",children:o.jsx(de,{fillColor:e,height:30,width:"100%"})})]}),o.jsx("div",{style:{background:u??e},children:o.jsx("div",{className:"w-full",children:m})})]})}c.__docgenInfo={description:`푸터 molecule 컴포넌트 반환 메서드

@param {FooterProps} param0: FooterProps

@returns {React.JSX.Element}`,methods:[],displayName:"Footer",props:{hour:{required:!1,tsType:{name:"Hour"},description:"시간대"},mainColor:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"기본 색상"},bodyColor:{required:!1,tsType:{name:"CSSProperties['background']",raw:"CSSProperties['background']"},description:"바디 색상"}},composes:["DetailedHTMLProps"]};const f="Footer",v=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],q=["#1E3A5F","#4F6D7A","#3A7CA5","#A0C8D7","#006F72","#00A9A5","#007F92","#76A3B8","#A3D8D1","#3E8E8E"],De={argTypes:{bodyColor:{control:"color",table:{category:f,subcategory:E.PROP}},children:L("children",f),className:L("className",f),hour:{control:"select",options:v,table:{category:f,subcategory:E.PROP,type:{summary:v.join(" | ")}}},id:L("id",f),mainColor:{control:"color",table:{category:f,subcategory:E.PROP}}},component:c,parameters:le("푸터 컴포넌트",["페이지 하단에 위치하는 푸터 컴포넌트입니다.","","`Wave` 컴포넌트를 활용한 하늘 표현이 포함되어 있습니다."]),tags:["autodocs"],title:"molecule/Footer"},g={},C={render:r=>o.jsxs(j,{children:[o.jsx(b,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:v.map(e=>o.jsx(c,{hour:e,...r,children:o.jsxs("div",{className:"p-2 text-center",children:[e,"h"]})},e))}),o.jsx(b,{subtitle:"각 색상별 하단 웨이브 색",title:"MainColor",children:q.map(e=>o.jsx(c,{mainColor:e,...r,children:o.jsx("div",{className:"p-2 text-center",children:e})},e))})]})},x={argTypes:{hour:{control:{disable:!0}}},render:r=>o.jsx(j,{children:o.jsx(b,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:v.map(e=>o.jsx(c,{hour:e,...r,children:o.jsxs("div",{className:"p-2 text-center",children:[e,"h"]})},e))})})},S={argTypes:{mainColor:{control:{disable:!0}}},render:r=>o.jsx(j,{children:o.jsx(b,{subtitle:"각 메인 색상별 하단 웨이브 색",title:"MainColor",children:q.map(e=>o.jsx(c,{mainColor:e,...r,children:o.jsx("div",{className:"p-2 text-center",children:e})},e))})})},k={argTypes:{bodyColor:{control:{disable:!0}}},render:r=>o.jsx(j,{children:o.jsx(b,{subtitle:"각 바디 색상별 하단 웨이브 색",title:"MainColor",children:q.map(e=>o.jsx(c,{bodyColor:`linear-gradient(180deg,${e},#4364f7,#0052d4)`,mainColor:e,...r,children:o.jsx("div",{className:"p-2 text-center",children:`linear-gradient(180deg,${e},#4364f7,#0052d4)`})},e))})})};var O,H,V;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(V=(H=g.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var W,G,$;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 시간대별 컴포넌트" title="Hour">
                {hours.map(hour => <Footer hour={hour} key={hour} {...props}>
                        <div className="p-2 text-center">
                            {hour}h
                        </div>
                    </Footer>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="각 색상별 하단 웨이브 색" title="MainColor">
                {colors.map(color => <Footer key={color} mainColor={color} {...props}>
                        <div className="p-2 text-center">
                            {color}
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...($=(G=C.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var B,X,Y;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  argTypes: {
    hour: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 시간대별 컴포넌트" title="Hour">
                {hours.map(hour => <Footer hour={hour} key={hour} {...props}>
                        <div className="p-2 text-center">
                            {hour}h
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,J,K;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  argTypes: {
    mainColor: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 메인 색상별 하단 웨이브 색" title="MainColor">
                {colors.map(color => <Footer key={color} mainColor={color} {...props}>
                        <div className="p-2 text-center">
                            {color}
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,z;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  argTypes: {
    bodyColor: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 바디 색상별 하단 웨이브 색" title="MainColor">
                {colors.map(color => <Footer bodyColor={\`linear-gradient(180deg,\${color},#4364f7,#0052d4)\`} key={color} mainColor={color} {...props}>
                        <div className="p-2 text-center">
                            {\`linear-gradient(180deg,\${color},#4364f7,#0052d4)\`}
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(z=(U=k.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const Ie=["Playground","All","Hour","MainColor","BodyColor"];export{C as All,k as BodyColor,x as Hour,S as MainColor,g as Playground,Ie as __namedExportsOrder,De as default};
