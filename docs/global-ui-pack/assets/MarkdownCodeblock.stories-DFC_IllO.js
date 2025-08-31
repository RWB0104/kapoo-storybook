import{j as e}from"./jsx-runtime-D0140-Ba.js";import"./iframe-DQo0Yy5t.js";import{g as N,S as c,a as m}from"./storybook-CWpip0ZO.js";import{S as x}from"./StorybookTemplate-B6hF5noc.js";import{M as t}from"./MarkdownCodeblock-BYea2fTP.js";import"./Button-yu0B-YSS.js";import"./utils-jAU0Cazi.js";import"./Typography-CRgk4Z7u.js";import"./createLucideIcon-CVKzNqGz.js";import"./check-DZhIC42w.js";import"./copy-4Lmwnhwg.js";const r="MarkdownCodeblock",i=["light","dark"],I={argTypes:{children:m("children",r),className:m("className",r),id:m("id",r),languageName:{table:{category:r,subcategory:c.PROP}},theme:{control:"select",options:i,table:{category:r,subcategory:c.PROP,type:{summary:i.join(" | ")}}}},component:t,parameters:N("react-query 프로바이더 컴포넌트",["[@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/overview)를 사용하기 위한 프로바이더 컴포넌트입니다.","단순 로직을 위한 컴포넌트로, 별도의 디자인이 존재하지 않습니다."]),tags:["autodocs"],title:"organism/MarkdownCodeblock"},o=`
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
`.trim(),s={args:{children:o,languageName:"typescript"}},n={args:{children:o,languageName:"typescript"},argTypes:{languageName:{control:{disable:!0}}},render:a=>e.jsxs(x,{container:!0,subtitle:"다양한 언어가 적용된 컴포넌트 예시",title:"Language",children:[e.jsx(t,{...a,languageName:"typescript",children:o}),e.jsx(t,{...a,languageName:"sql",children:M}),e.jsx(t,{...a,languageName:"txt",children:w}),e.jsx(t,{...a,languageName:"html",children:T}),e.jsx(t,{...a,languageName:"bash",children:j})]})},l={args:{children:o,languageName:"typescript"},argTypes:{theme:{control:{disable:!0}}},render:a=>e.jsxs(x,{container:!0,subtitle:"각 테마가 적용된 컴포넌트 예시",title:"Theme",children:[e.jsx(t,{...a,theme:"light",children:o}),e.jsx(t,{...a,theme:"dark",children:o})]})};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: tsxCode,
    languageName: 'typescript'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: tsxCode,
    languageName: 'typescript'
  },
  argTypes: {
    languageName: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="다양한 언어가 적용된 컴포넌트 예시" title="Language">
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
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,C,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: tsxCode,
    languageName: 'typescript'
  },
  argTypes: {
    theme: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="각 테마가 적용된 컴포넌트 예시" title="Theme">
            <MarkdownCodeblock {...props} theme="light">
                {tsxCode}
            </MarkdownCodeblock>

            <MarkdownCodeblock {...props} theme="dark">
                {tsxCode}
            </MarkdownCodeblock>
        </StorybookTemplate>
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const U=["Playground","LanguageName","Theme"];export{n as LanguageName,s as Playground,l as Theme,U as __namedExportsOrder,I as default};
