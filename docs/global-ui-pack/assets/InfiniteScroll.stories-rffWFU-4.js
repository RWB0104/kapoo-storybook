import{j as e}from"./jsx-runtime-BnHmloXs.js";import{a as k}from"./index-CtjQfPVU.js";import{r as v}from"./index-BCzbi48b.js";import{g as E,S as x,a as d}from"./storybook-Dtpa3Gtc.js";import{B as T}from"./Button-D4HyC5G3.js";import{S as P}from"./StorybookContainer-CXD7EHC6.js";import{S as f}from"./StorybookTemplate-h4nRBuW0.js";import{I as C}from"./Img-Kf0-sg0N.js";import{a as D}from"./hooks-DgEjKMm1.js";import{c as w}from"./createLucideIcon-MTmt1UxL.js";import"./jsx-runtime-BEh3FTX5.js";import"./v4-CtRu48qb.js";import"./index-rHsZ_YsY.js";import"./utils-jAU0Cazi.js";import"./router-context.shared-runtime-DQLB8Fwf.js";import"./index-OaFZzyAw.js";import"./image-context-ChR2kffi.js";import"./use-merged-ref-CA1Bo7Ed.js";import"./util-CbDYoOyb.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],_=w("EllipsisVertical",B);function u({disabled:r,onEnd:s,children:a,...c}){const[t,N]=v.useState(null);return D(t,I=>{I.isIntersecting&&(s==null||s())},{rootMargin:"0px 0px 100px 0px"}),e.jsxs("div",{"data-component":"InfiniteScroll",...c,children:[a,a!==void 0&&r!==!0?e.jsx("div",{className:"w-full",ref:N}):null]})}u.__docgenInfo={description:`무한 스크롤 organism 컴포넌트 반환 메서드

@param {InfiniteScrollProps} param0: InfiniteScrollProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"InfiniteScroll",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"스크롤이 마지막에 도달할 경우의 이벤트 핸들러"}},composes:["DetailedHTMLProps"]};const o="InfiniteScroll",Z={argTypes:{children:d("children",o),className:d("className",o),disabled:{table:{category:o,subcategory:x.PROP}},id:d("id",o),onEnd:{table:{category:o,subcategory:x.EV,type:{detail:"() => void",summary:"InfiniteScrollEndHandler"}}}},component:u,parameters:E("무한스크롤 컴포넌트",["무한스크롤 기능을 제공하는 컴포넌트입니다.","스크롤이 컴포넌트 끝에 도달할 경우, `onEnd` 메서드를 통해 원하는 동작을 수행할 수 있습니다.","`disabled`를 통해 무한스크롤을 막을 수 있습니다."]),tags:["autodocs"],title:"organism/InfiniteScroll"},l=10,m=Array.from({length:2*l}).map((r,s)=>s+1);function p(r){const[s,a]=v.useState(1),c=()=>{k("onEnd")(),a(t=>t*l<m.length?t+1:t)};return e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(u,{...r,onEnd:c,children:e.jsx("div",{className:"flex flex-col gap-4",children:m.slice(0,s*l).map(t=>e.jsxs("div",{className:"flex gap-4 rounded-lg border p-4",children:[e.jsx("div",{className:"aspect-square h-full max-w-32 rounded",children:e.jsx(C,{alt:"image",className:"object-cover",src:`https://placehold.co/480x200/FFB4B9/31343C?font=raleway&text=${t}`,fill:!0})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-lg font-bold",children:["[ID ",t,"] title"]}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),e.jsx(T,{size:"icon",variant:"ghost",children:e.jsx(_,{})})]}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint placeat, accusamus vero corrupti nemo reprehenderit debitis voluptates hic ut minus dicta magnam velit fugiat ipsa, necessitatibus exercitationem? Earum, consequatur molestias!"})]})]},t))})})}),e.jsxs("div",{children:[e.jsxs("p",{children:["페이지 ",s," / ",m.length/l]}),e.jsxs("p",{children:["InfiniteScroll ",r.disabled===!0?"비":"","활성화 됨"]})]})]})}const i={render:p},n={argTypes:{disabled:{control:{disable:!0}}},render:r=>e.jsxs(P,{children:[e.jsx(f,{subtitle:"비교를 위한 기본 컴포넌트",title:"Basic",container:!0,children:e.jsx(p,{...r})}),e.jsx(f,{subtitle:"무한 스크롤이 비활성화된 기본 컴포넌트",title:"Disabled",container:!0,children:e.jsx(p,{...r,disabled:!0})})]})};var g,b,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Component
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,S,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const ee=["Playground","Disabled"];export{n as Disabled,i as Playground,ee as __namedExportsOrder,Z as default};
