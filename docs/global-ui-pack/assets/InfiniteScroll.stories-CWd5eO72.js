import{j as e}from"./jsx-runtime-BnHmloXs.js";import{a as E}from"./index-CtjQfPVU.js";import{n as T}from"./image-C6gtp6Oj.js";import{r as u}from"./index-XLJyvO9z.js";import{g as k,S as f,a as d}from"./storybook-hTxjENzG.js";import{B as P}from"./Button-BXKyNyrb.js";import{S as C}from"./StorybookContainer-CXD7EHC6.js";import{S as g}from"./StorybookTemplate-h4nRBuW0.js";import{T as _}from"./Tile-CLVcBFIU.js";import{c as w}from"./createLucideIcon-COKISR50.js";import"./jsx-runtime-BEh3FTX5.js";import"./v4-CtRu48qb.js";import"./router-context.shared-runtime-a1mlPyA1.js";import"./index-CJNmP7Ls.js";import"./image-context-Be2CajuN.js";import"./use-merged-ref-CEcA4Cog.js";import"./utils-jAU0Cazi.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],B=w("EllipsisVertical",D);function L(t,s,o){u.useEffect(()=>{const n=new IntersectionObserver(r=>{r.forEach(s)},o);if(t!==null)if(typeof t=="string"){const r=document.querySelector(t);r&&n.observe(r)}else n.observe(t);return()=>{n.disconnect()}},[t,s,o])}function x({disabled:t,onEnd:s,children:o,...n}){const[r,N]=u.useState(null);return L(r,I=>{I.isIntersecting&&(s==null||s())},{rootMargin:"0px 0px 20px 0px"}),e.jsxs("div",{"data-component":"InfiniteScroll",...n,children:[o,o!==void 0&&t!==!0?e.jsx("div",{className:"w-full",ref:N}):null]})}x.__docgenInfo={description:`무한 스크롤 organism 컴포넌트 반환 메서드

@param {InfiniteScrollProps} param0: InfiniteScrollProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"InfiniteScroll",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"스크롤이 마지막에 도달할 경우의 이벤트 핸들러"}},composes:["DetailedHTMLProps"]};const i="InfiniteScroll",Y={argTypes:{children:d("children",i),className:d("className",i),disabled:{table:{category:i,subcategory:f.PROP}},id:d("id",i),onEnd:{table:{category:i,subcategory:f.EV,type:{detail:"() => void",summary:"InfiniteScrollEndHandler"}}}},component:x,parameters:k("무한스크롤 컴포넌트",["무한스크롤 기능을 제공하는 컴포넌트입니다.","스크롤이 컴포넌트 끝에 도달할 경우, `onEnd` 메서드를 통해 원하는 동작을 수행할 수 있습니다.","`disabled`를 통해 무한스크롤을 막을 수 있습니다."]),tags:["autodocs"],title:"organism/InfiniteScroll"},c=10,m=Array.from({length:2*c}).map((t,s)=>s+1);function p(t){const[s,o]=u.useState(1),n=()=>{E("onEnd")(),o(r=>r*c<m.length?r+1:r)};return e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(x,{...t,onEnd:n,children:e.jsx("div",{className:"flex flex-col gap-4",children:m.slice(0,s*c).map(r=>e.jsxs("div",{className:"flex gap-4 rounded-lg border p-4",children:[e.jsx(_,{className:"h-full max-w-32 rounded",children:e.jsx(T,{alt:"image",className:"object-cover",src:`https://placehold.co/480x200/FFB4B9/31343C?font=raleway&text=${r}`,fill:!0})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-lg font-bold",children:["[ID ",r,"] title"]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),e.jsx(P,{size:"icon",variant:"ghost",children:e.jsx(B,{})})]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint placeat, accusamus vero corrupti nemo reprehenderit debitis voluptates hic ut minus dicta magnam velit fugiat ipsa, necessitatibus exercitationem? Earum, consequatur molestias!"})]})]},r))})})}),e.jsxs("div",{children:[e.jsxs("p",{children:["페이지 ",s," / ",m.length/c]}),e.jsxs("p",{children:["InfiniteScroll ",t.disabled===!0?"비":"","활성화 됨"]})]})]})}const a={render:p},l={argTypes:{disabled:{control:{disable:!0}}},render:t=>e.jsxs(C,{children:[e.jsx(g,{subtitle:"비교를 위한 기본 컴포넌트",title:"Basic",container:!0,children:e.jsx(p,{...t})}),e.jsx(g,{subtitle:"무한 스크롤이 비활성화된 기본 컴포넌트",title:"Disabled",container:!0,children:e.jsx(p,{...t,disabled:!0})})]})};var b,y,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Component
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,j,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    disabled: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="비교를 위한 기본 컴포넌트" title="Basic" container>
                <Component {...props} />
            </StorybookTemplate>

            <StorybookTemplate subtitle="무한 스크롤이 비활성화된 기본 컴포넌트" title="Disabled" container>
                <Component {...props} disabled />
            </StorybookTemplate>
        </StorybookContainer>
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const Z=["Playground","Disabled"];export{l as Disabled,a as Playground,Z as __namedExportsOrder,Y as default};
