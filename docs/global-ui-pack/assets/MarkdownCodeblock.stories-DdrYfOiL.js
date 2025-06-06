import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-BCzbi48b.js";import{g as N,S as c,a as l}from"./storybook-CWpip0ZO.js";import{S as x}from"./StorybookTemplate-h4nRBuW0.js";import{M as t}from"./MarkdownCodeblock-DUNKAS6M.js";import"./jsx-runtime-BEh3FTX5.js";import"./Button-D4HyC5G3.js";import"./index-rHsZ_YsY.js";import"./utils-jAU0Cazi.js";import"./Typography-DMH6rXmA.js";import"./createLucideIcon-MTmt1UxL.js";import"./check-CHjvA39V.js";import"./copy-BAH1Uu0W.js";import"./iframe-CwI3fLlV.js";const r="MarkdownCodeblock",i=["light","dark"],F={argTypes:{children:l("children",r),className:l("className",r),id:l("id",r),languageName:{table:{category:r,subcategory:c.PROP}},theme:{control:"select",options:i,table:{category:r,subcategory:c.PROP,type:{summary:i.join(" | ")}}}},component:t,parameters:N("react-query 프로바이더 컴포넌트",["[@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/overview)를 사용하기 위한 프로바이더 컴포넌트입니다.","단순 로직을 위한 컴포넌트로, 별도의 디자인이 존재하지 않습니다."]),tags:["autodocs"],title:"organism/MarkdownCodeblock"},o=`
// 한글 주석
function sum(a: number, b: number): number
{
    return a + b;
}
`.trim(),M="SELECT * FROM ACCOUNT WHERE YEAR(REG_TIME) = 2025;",w="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi exercitationem deserunt recusandae atque placeat, odio totam! Maiores tempora ipsum accusantium velit cum, molestias unde eius culpa dolores, pariatur neque.",T=`
<html>
    <head>
        <title>Lorem Ipsum</title>
    </head>

    <body>
        <h1>Lorem Ipsum</h1>

        <section id="section-1" class="main">
            <img src="https://placehold.co/600" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi exercitationem deserunt recusandae atque placeat, odio totam! Maiores tempora ipsum accusantium velit cum, molestias unde eius culpa dolores, pariatur neque.</p>
        </section>
    </body>
</html>
`.trim(),j=`
# npm
npm install -D eslint

# yarn
yarn add -D eslint

# pnpm
pnpm add -D eslint
`.trim(),s={args:{children:o,languageName:"typescript"}},n={argTypes:{languageName:{control:{disable:!0}}},args:{children:o,languageName:"typescript"},render:a=>e.jsxs(x,{subtitle:"다양한 언어가 적용된 컴포넌트 예시",title:"Language",container:!0,children:[e.jsx(t,{...a,languageName:"typescript",children:o}),e.jsx(t,{...a,languageName:"sql",children:M}),e.jsx(t,{...a,languageName:"txt",children:w}),e.jsx(t,{...a,languageName:"html",children:T}),e.jsx(t,{...a,languageName:"bash",children:j})]})},m={argTypes:{theme:{control:{disable:!0}}},args:{children:o,languageName:"typescript"},render:a=>e.jsxs(x,{subtitle:"각 테마가 적용된 컴포넌트 예시",title:"Theme",container:!0,children:[e.jsx(t,{...a,theme:"light",children:o}),e.jsx(t,{...a,theme:"dark",children:o})]})};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: tsxCode,
    languageName: 'typescript'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    languageName: {
      control: {
        disable: true
      }
    }
  },
  args: {
    children: tsxCode,
    languageName: 'typescript'
  },
  render: props => <StorybookTemplate subtitle="다양한 언어가 적용된 컴포넌트 예시" title="Language" container>
            <MarkdownCodeblock {...props} languageName="typescript">
                {tsxCode}
            </MarkdownCodeblock>

            <MarkdownCodeblock {...props} languageName="sql">
                {sqlCode}
            </MarkdownCodeblock>

            <MarkdownCodeblock {...props} languageName="txt">
                {txtCode}
            </MarkdownCodeblock>

            <MarkdownCodeblock {...props} languageName="html">
                {htmlCode}
            </MarkdownCodeblock>

            <MarkdownCodeblock {...props} languageName="bash">
                {bashCode}
            </MarkdownCodeblock>
        </StorybookTemplate>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,C,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    theme: {
      control: {
        disable: true
      }
    }
  },
  args: {
    children: tsxCode,
    languageName: 'typescript'
  },
  render: props => <StorybookTemplate subtitle="각 테마가 적용된 컴포넌트 예시" title="Theme" container>
            <MarkdownCodeblock {...props} theme="light">
                {tsxCode}
            </MarkdownCodeblock>

            <MarkdownCodeblock {...props} theme="dark">
                {tsxCode}
            </MarkdownCodeblock>
        </StorybookTemplate>
}`,...(y=(C=m.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const G=["Playground","LanguageName","Theme"];export{n as LanguageName,s as Playground,m as Theme,G as __namedExportsOrder,F as default};
