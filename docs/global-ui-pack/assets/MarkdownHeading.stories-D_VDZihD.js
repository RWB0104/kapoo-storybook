import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-BCzbi48b.js";import{g as v,S as g,a as s}from"./storybook-CWpip0ZO.js";import{S as x}from"./StorybookTemplate-h4nRBuW0.js";import{T as f}from"./Typography-CShdIKPt.js";import{M as u}from"./MarkdownHeading-C16UDl3W.js";import"./jsx-runtime-BEh3FTX5.js";import"./utils-jAU0Cazi.js";import"./link-QJ7wAcNy.js";import"./router-context.shared-runtime-DQLB8Fwf.js";import"./add-base-path-DjVCTWNf.js";import"./use-merged-ref-CA1Bo7Ed.js";const t="MarkdownHeading",q={argTypes:{children:s("children",t),className:s("className",t),id:s("id",t),level:{control:"select",table:{category:t,subcategory:g.PROP,type:{summary:[1,2,3,4,5,6].join(" | ")}}}},args:{children:"Lorem Ipsum"},component:u,parameters:v("마크다운 헤딩 태그 컴포넌트",["마크다운 변환에 사용되는 헤딩 태그 컴포넌트입니다. `h1` 부터 `h6`까지의 헤딩 태그를 구현합니다.","`Link` 컴포넌트로 감싸져있어, `#` 링크를 사용하기 용이하도록 구성되어있습니다."]),tags:["autodocs"],title:"atom/MarkdownHeading"};function o({...r}){return e.jsxs("div",{children:[e.jsxs(u,{...r,children:["heading - h",r.level]}),e.jsx(f,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rerum officiis quibusdam tempora, labore itaque iste quis consectetur odit vero. Quia, reprehenderit corrupti in dolor facilis laboriosam animi ex sequi!"})]})}const l={args:{level:1}},a={argTypes:{level:{control:{disable:!0}}},render:r=>e.jsx(x,{subtitle:"다양한 레벨이 적용된 컴포넌트 예시",title:"Level",container:!0,children:e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx(o,{...r,level:1}),e.jsx(o,{...r,level:2}),e.jsx(o,{...r,level:3}),e.jsx(o,{...r,level:4}),e.jsx(o,{...r,level:5}),e.jsx(o,{...r,level:6})]})})};var n,i,m;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    level: 1
  }
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    level: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 레벨이 적용된 컴포넌트 예시" title="Level" container>
            <div className="flex w-full flex-col gap-4">
                <Component {...props} level={1} />
                <Component {...props} level={2} />
                <Component {...props} level={3} />
                <Component {...props} level={4} />
                <Component {...props} level={5} />
                <Component {...props} level={6} />
            </div>
        </StorybookTemplate>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const M=["Playground","Level"];export{a as Level,l as Playground,M as __namedExportsOrder,q as default};
