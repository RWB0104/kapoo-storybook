import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-r57MSJFk.js";import{g as j,S as l,a as n}from"./storybook-CWpip0ZO.js";import{c as v}from"./utils-jAU0Cazi.js";import{T as o}from"./Typography-YaEN9hhd.js";import"./jsx-runtime-BEh3FTX5.js";function x({title:T,subtitle:t,className:h,children:f,...y}){return e.jsxs("div",{className:v("flex w-full flex-col gap-8",h),"data-component":"TitleTemplate",...y,children:[e.jsxs("div",{className:"flex w-full flex-col items-center justify-center gap-2 text-center",children:[e.jsx(o,{className:"text-3xl font-bold",children:T}),e.jsx("div",{className:"border-b-muted w-full max-w-xl border-b"}),e.jsx("div",{className:"flex flex-col items-center",children:t!==void 0&&(Array.isArray(t)?t:[t]).map(i=>e.jsx(o,{variant:"muted",children:i},i))})]}),f]})}x.__docgenInfo={description:`타이틀 template 컴포넌트 반환 메서드

@param {TitleTemplateProps} param0: TitleTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"TitleTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},subtitle:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"부제목"}},composes:["DetailedHTMLProps"]};const r="TitleTemplate",L={argTypes:{children:n("children",r),className:n("className",r),id:n("id",r),subtitle:{control:"text",table:{category:r,subcategory:l.PROP,type:{summary:"string | string[]"}}},title:{table:{category:r,subcategory:l.PROP}}},component:x,parameters:j("타이틀 템플릿 컴포넌트",["간단한 제목과 부제목을 표현하기 위한 타이틀 템플릿입니다.","`subtitle`에 배열을 제공하여 줄바꿈을 표시할 수 있습니다."]),tags:["autodocs"],title:"template/TitleTemplate"},s={args:{children:e.jsx("div",{children:e.jsx("p",{children:"children component"})}),title:"Lorem Ipsum"}},a={args:{children:e.jsx("div",{children:e.jsx("p",{children:"children component"})}),title:"Lorem Ipsum"}};var m,c,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <div>
                <p>children component</p>
            </div>,
    title: 'Lorem Ipsum'
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <div>
                <p>children component</p>
            </div>,
    title: 'Lorem Ipsum'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const A=["Playground","Title"];export{s as Playground,a as Title,A as __namedExportsOrder,L as default};
