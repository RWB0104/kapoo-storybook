import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-r57MSJFk.js";import{g as L,S as d,a as p}from"./storybook-CWpip0ZO.js";import{S as j}from"./StorybookTemplate-h4nRBuW0.js";import{L as w}from"./link-B6xMkqIL.js";import{c as a}from"./utils-jAU0Cazi.js";import{T as c}from"./Typography-DMH6rXmA.js";import{M}from"./menu-Barl41Kb.js";import"./jsx-runtime-BEh3FTX5.js";import"./router-context.shared-runtime-DTbBUFFY.js";import"./add-base-path-B3GOeE0G.js";import"./use-merged-ref-Cp_uXRvQ.js";import"./createLucideIcon-rzbM5Zb5.js";function s({color:r,list:v,className:k,...f}){return e.jsxs("div",{className:a("rounded border overflow-hidden",k),"data-component":"MarkdownTocTemplate",...f,children:[e.jsxs("div",{className:a({"bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200":r==="blue","bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200":r==="green"},"flex items-center gap-2 px-4 py-2"),children:[e.jsx(M,{size:20}),e.jsx(c,{variant:"large",children:"Table of Contents"})]}),e.jsx("ul",{children:v.map(({idx:i,level:o,text:m})=>e.jsx("li",{className:a("px-4 py-1 duration-150",{"bg-blue-100 dark:bg-blue-900":o===1&&r==="blue","bg-green-100 dark:bg-green-900":o===1&&r==="green","hover:bg-blue-50 dark:hover:bg-blue-950":r==="blue","hover:bg-green-50 dark:hover:bg-green-950":r==="green"}),children:e.jsx(w,{href:`#${m.replaceAll(" ","-")}`,children:e.jsx("div",{className:a({"ml-10":o===6,"ml-2":o===2,"ml-4":o===3,"ml-6":o===4,"ml-8":o===5}),children:e.jsxs(c,{className:a({"font-bold":o===1}),variant:"small",children:[i," ",m]})})})},i))})]})}s.__docgenInfo={description:`마크다운 TOC template 컴포넌트 반환 메서드

@param {MarkdownTocTemplateProps} param0: MarkdownTocTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"MarkdownTocTemplate",props:{color:{required:!0,tsType:{name:"union",raw:"'blue' | 'green'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'green'"}]},description:"마크다운 타입"},list:{required:!0,tsType:{name:"Array",elements:[{name:"MarkdownTocItem"}],raw:"MarkdownTocItem[]"},description:"마크다운 TOC 리스트"}},composes:["DetailedHTMLProps"]};const t="MarkdownTocTemplate",h=[{idx:"1.",level:1,text:"Typography Lv1"},{idx:"1.1.",level:2,text:"Typography Lv2"},{idx:"1.1.1.",level:3,text:"Typography Lv3"},{idx:"1.1.1.1.",level:4,text:"Typography Lv4"},{idx:"1.1.1.1.1.",level:5,text:"Typography Lv5"},{idx:"1.1.1.1.1.1.",level:6,text:"Typography Lv6"},{idx:"2.",level:1,text:"Typography Lv1"},{idx:"2.1.",level:2,text:"Typography Lv2"},{idx:"2.1.1.",level:3,text:"Typography Lv3"},{idx:"2.1.1.1.",level:4,text:"Typography Lv4"},{idx:"2.1.1.1.1.",level:5,text:"Typography Lv5"},{idx:"2.1.1.1.1.1.",level:6,text:"Typography Lv6"}],z={argTypes:{children:p("children",t),className:p("className",t),color:{table:{category:t,subcategory:d.PROP}},id:p("id",t),list:{control:{disable:!0},table:{category:t,subcategory:d.PROP}}},component:s,parameters:L("마크다운 TOC 템플릿 컴포넌트",["마크다운 TOC를 표현하기 위한 컴포넌트입니다.","TOC 항목을 클릭하여 해당 목록으로 포커싱됩니다."]),tags:["autodocs"],title:"template/MarkdownTocTemplate"},l={args:{color:"blue",list:h}},n={argTypes:{color:{control:{disable:!0}}},args:{list:h},render:r=>e.jsxs(j,{subtitle:"다양한 색상이 적용된 컴포넌트 예시",title:"Color",container:!0,children:[e.jsx(s,{...r,color:"blue"}),e.jsx(s,{...r,color:"green"})]})};var g,u,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    list
  }
}`,...(T=(u=l.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var y,b,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    color: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list
  },
  render: props => <StorybookTemplate subtitle="다양한 색상이 적용된 컴포넌트 예시" title="Color" container>
            <MarkdownTocTemplate {...props} color="blue" />
            <MarkdownTocTemplate {...props} color="green" />
        </StorybookTemplate>
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const D=["Playground","Color"];export{n as Color,l as Playground,D as __namedExportsOrder,z as default};
