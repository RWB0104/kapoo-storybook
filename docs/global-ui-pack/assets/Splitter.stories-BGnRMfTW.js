import{j as r}from"./jsx-runtime-Byrd6LBQ.js";import{r as o}from"./iframe-DHWoFZr2.js";import{g as L,S as i}from"./storybook-CWpip0ZO.js";import{S as P}from"./StorybookTemplate-D3bnewOl.js";import{c as n}from"./utils-jAU0Cazi.js";import{c as R}from"./createLucideIcon-UXDuXpn7.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]],G=R("GripHorizontal",$);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],I=R("GripVertical",V);function t({direction:e="horizontal",defaultFirstSize:C="50%",firstChildren:M,lastChildren:E}){const[s,O]=o.useState(C),[a,S]=o.useState(!1),v=o.useRef(null),p=o.useCallback(x=>{const y=v.current;if(!y||!a)return;let f;if(e==="horizontal"){const{left:g,width:h}=y.getBoundingClientRect();f=(x.clientX-g)/h*100}else{const{top:g,height:h}=y.getBoundingClientRect();f=(x.clientY-g)/h*100}const q=Math.max(10,Math.min(90,f));O(`${q}%`)},[e,a]),m=o.useCallback(()=>{S(!1)},[]),_=()=>{S(!0)};return o.useEffect(()=>(document.addEventListener("mousemove",p),document.addEventListener("mouseup",m),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",m)}),[p,m]),r.jsxs("div",{className:n("flex size-full overflow-hidden",{"flex-col":e==="vertical"}),"data-component":"Splitter",ref:v,children:[r.jsx("div",{className:n({"transition-[width] duration-300 ease-in-out":!a,"transition-none":a}),"data-component":"Splitter-first",style:{height:e==="vertical"?s:void 0,width:e==="horizontal"?s:void 0},children:M}),r.jsxs("div",{className:n("group flex transform-[background] border-gray-200 duration-300 select-none hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-600",{"h-4 cursor-row-resize justify-center border-t":e==="vertical","w-4 cursor-col-resize items-center border-r":e==="horizontal"}),"data-component":"Splitter-bar",onMouseDown:_,children:[e==="horizontal"&&r.jsx(I,{className:"stroke-gray-400 duration-300 group-hover:stroke-gray-800 group-hover:dark:stroke-gray-600 dark:stroke-gray-600",size:14}),e==="vertical"&&r.jsx(G,{className:"stroke-gray-400 duration-300 group-hover:stroke-gray-800 group-hover:dark:stroke-gray-600 dark:stroke-gray-600",size:14})]}),r.jsx("div",{className:n({"transition-all duration-300 ease-in-out":!a,"transition-none":a}),style:{height:e==="vertical"?`calc(100% - ${s})`:void 0,width:e==="horizontal"?`calc(100% - ${s})`:void 0},children:E})]})}t.__docgenInfo={description:`스플리터 molecule 컴포넌트 반환 메서드

@param {SplitterProps} param0: SplitterProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Splitter",props:{direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`방향

@default horizontal`,defaultValue:{value:"'horizontal'",computed:!1}},defaultFirstSize:{required:!1,tsType:{name:"literal",value:"`${number}%`"},description:`기본 처음 DOM 사이즈

@default 50%`,defaultValue:{value:"'50%'",computed:!1}},firstChildren:{required:!0,tsType:{name:"ReactNode"},description:"처음 DOM"},lastChildren:{required:!0,tsType:{name:"ReactNode"},description:"마지막 DOM"}}};const c="Splitter",A={argTypes:{defaultFirstSize:{table:{category:c,subcategory:i.PROP}},direction:{table:{category:c,subcategory:i.PROP}},firstChildren:{control:{disable:!0},table:{category:c,subcategory:i.PROP}},lastChildren:{control:{disable:!0},table:{category:c,subcategory:i.PROP}}},args:{firstChildren:r.jsx("div",{className:"flex h-96 items-center justify-center p-4",children:"First Dom"}),lastChildren:r.jsx("div",{className:"flex h-96 items-center justify-center p-4",children:"Last Dom"})},component:t,parameters:L("react-query 프로바이더 컴포넌트",["[@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/overview)를 사용하기 위한 프로바이더 컴포넌트입니다.","단순 로직을 위한 컴포넌트로, 별도의 디자인이 존재하지 않습니다."]),tags:["autodocs"],title:"molecule/Splitter"},l={},u={argTypes:{direction:{control:{disable:!0}}},render:e=>r.jsxs(P,{subtitle:"다양한 방향이 적용된 컴포넌트 예시",title:"Direction",container:!0,children:[r.jsx(t,{...e}),r.jsx(t,{direction:"vertical",...e})]})},d={argTypes:{defaultFirstSize:{control:{disable:!0}}},render:e=>r.jsxs(P,{subtitle:"다양한 비율이 적용된 컴포넌트 예시",title:"DefaultFirstSize",container:!0,children:[r.jsx(t,{...e,defaultFirstSize:"20%"}),r.jsx(t,{...e,defaultFirstSize:"40%"}),r.jsx(t,{...e}),r.jsx(t,{...e,defaultFirstSize:"60%"}),r.jsx(t,{...e,defaultFirstSize:"80%"})]})};var k,z,b;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var j,D,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  argTypes: {
    direction: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 방향이 적용된 컴포넌트 예시" title="Direction" container>
            <Splitter {...props} />
            <Splitter direction="vertical" {...props} />
        </StorybookTemplate>
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var N,T,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    defaultFirstSize: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 비율이 적용된 컴포넌트 예시" title="DefaultFirstSize" container>
            <Splitter {...props} defaultFirstSize="20%" />
            <Splitter {...props} defaultFirstSize="40%" />
            <Splitter {...props} />
            <Splitter {...props} defaultFirstSize="60%" />
            <Splitter {...props} defaultFirstSize="80%" />
        </StorybookTemplate>
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const K=["Playground","Direction","DefaultFirstSize"];export{d as DefaultFirstSize,u as Direction,l as Playground,K as __namedExportsOrder,A as default};
