import{j as a}from"./jsx-runtime-CcAjkvR0.js";import"./iframe-aPIFiJaF.js";import{g as l,a as o}from"./storybook-CWpip0ZO.js";import{S as g}from"./StorybookTemplate-DgDGKC7c.js";import{M as s}from"./MarkdownCode-rcXm7VMn.js";import"./hooks-BRI0tcZ-.js";import"./util-DkkZxc2e.js";import"./Typography-egxCLMRY.js";import"./utils-jAU0Cazi.js";import"./MarkdownCodeblock-Coo71xiN.js";import"./Button-CQ8gVpHK.js";import"./index-DNBoslVS.js";import"./createLucideIcon-UdJRz3In.js";import"./check-hiueeg29.js";import"./copy-DMiZ28Qf.js";const t="MarkdownCode",L={argTypes:{children:o("children",t),className:o("className",t),id:o("id",t)},component:s,parameters:l("마크다운 코드 컴포넌트",["마크다운의 코드 라인 및 코드 블럭 변환 시 사용되는 컴포넌트입니다.","변환되는 코드의 종류를 인식하여 `Typography` 혹은 `MarkdownCodeblock`으로 적용합니다."]),tags:["autodocs"],title:"organism/MarkdownCode"},e={args:{children:"const var = 'test'"}},r={render:()=>a.jsxs(g,{container:!0,subtitle:"언어별 컴포넌트 예시. className에 language-{lang} 형식으로 지정될 경우, 해당 언어의 코드 블럭이 적용됨",title:"Language",children:[a.jsx("div",{children:a.jsx(s,{children:"<MarkdownCode>const var = 'test'</MarkdownCode>"})}),a.jsx(s,{className:"language-tsx",children:`<MarkdownCode className="language-typescript">const var = 'test'</MarkdownCode>`})]})};var n,d,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "const var = 'test'"
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <StorybookTemplate container subtitle="언어별 컴포넌트 예시. className에 language-{lang} 형식으로 지정될 경우, 해당 언어의 코드 블럭이 적용됨" title="Language">
            <div>
                <MarkdownCode>{"<MarkdownCode>const var = 'test'</MarkdownCode>"}</MarkdownCode>
            </div>

            <MarkdownCode className="language-tsx">
                {'<MarkdownCode className="language-typescript">const var = \\'test\\'</MarkdownCode>'}
            </MarkdownCode>
        </StorybookTemplate>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const P=["Playground","Language"];export{r as Language,e as Playground,P as __namedExportsOrder,L as default};
