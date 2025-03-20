import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-XLJyvO9z.js";import{g as h,S as j,a as m}from"./storybook-hTxjENzG.js";import{S as b}from"./StorybookTemplate-h4nRBuW0.js";import{T as y}from"./Typography-GqS5NS2G.js";import{L as k}from"./link-ZCoEH7YG.js";import{c as t}from"./utils-jAU0Cazi.js";import"./jsx-runtime-BEh3FTX5.js";import"./router-context.shared-runtime-a1mlPyA1.js";import"./add-base-path-CiU-iR_T.js";import"./use-merged-ref-CEcA4Cog.js";function d({level:r,className:a,...o}){const c=String(o.children).replaceAll(" ","-");return e.jsxs(k,{className:"mt-10","data-component":"MarkdownHeading",href:`#${c}`,id:c,children:[r===1&&e.jsx("h1",{className:t("text-4xl font-bold",a),...o}),r===2&&e.jsx("h2",{className:t("text-3xl font-bold",a),...o}),r===3&&e.jsx("h3",{className:t("text-2xl font-bold",a),...o}),r===4&&e.jsx("h4",{className:t("text-xl font-bold",a),...o}),r===5&&e.jsx("h5",{className:t("text-lg font-bold",a),...o}),r===6&&e.jsx("h6",{className:t("font-bold",a),...o})]})}d.__docgenInfo={description:`마크다운 헤딩 태그 atom 컴포넌트 반환 메서드

@param {MarkdownHeadingProps} param0: MarkdownHeadingProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"MarkdownHeading",props:{level:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"레벨"}},composes:["DetailedHTMLProps"]};const l="MarkdownHeading",A={argTypes:{children:m("children",l),className:m("className",l),id:m("id",l),level:{control:"select",table:{category:l,subcategory:j.PROP,type:{summary:[1,2,3,4,5,6].join(" | ")}}}},args:{children:"Lorem Ipsum"},component:d,parameters:h("마크다운 헤딩 태그 컴포넌트",["마크다운 변환에 사용되는 헤딩 태그 컴포넌트입니다. `h1` 부터 `h6`까지의 헤딩 태그를 구현합니다.","`Link` 컴포넌트로 감싸져있어, `#` 링크를 사용하기 용이하도록 구성되어있습니다."]),tags:["autodocs"],title:"atom/MarkdownHeading"};function n({...r}){return e.jsxs("div",{children:[e.jsxs(d,{...r,children:["heading - h",r.level]}),e.jsx(y,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rerum officiis quibusdam tempora, labore itaque iste quis consectetur odit vero. Quia, reprehenderit corrupti in dolor facilis laboriosam animi ex sequi!"})]})}const s={args:{level:1}},i={argTypes:{level:{control:{disable:!0}}},render:r=>e.jsx(b,{subtitle:"다양한 레벨이 적용된 컴포넌트 예시",title:"Level",container:!0,children:e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx(n,{...r,level:1}),e.jsx(n,{...r,level:2}),e.jsx(n,{...r,level:3}),e.jsx(n,{...r,level:4}),e.jsx(n,{...r,level:5}),e.jsx(n,{...r,level:6})]})})};var p,u,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    level: 1
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,v,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const E=["Playground","Level"];export{i as Level,s as Playground,E as __namedExportsOrder,A as default};
