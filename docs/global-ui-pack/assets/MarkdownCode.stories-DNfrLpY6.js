import{j as a}from"./jsx-runtime-BnHmloXs.js";import"./index-r57MSJFk.js";import{g as l,a as o}from"./storybook-CWpip0ZO.js";import{S as g}from"./StorybookTemplate-h4nRBuW0.js";import{M as s}from"./MarkdownCode-BwDlviA4.js";import"./jsx-runtime-BEh3FTX5.js";import"./hooks-8hacZ9vh.js";import"./util-B8Xjs9R8.js";import"./Typography-DMH6rXmA.js";import"./utils-jAU0Cazi.js";import"./MarkdownCodeblock-BtxZsQ6k.js";import"./Button-C31f9ra3.js";import"./index-Bx25MwHp.js";import"./createLucideIcon-rzbM5Zb5.js";import"./check-B03ReYeA.js";import"./copy-BXYibgbH.js";import"./iframe-BPan0Opl.js";const t="MarkdownCode",E={argTypes:{children:o("children",t),className:o("className",t),id:o("id",t)},component:s,parameters:l("마크다운 코드 컴포넌트",["마크다운의 코드 라인 및 코드 블럭 변환 시 사용되는 컴포넌트입니다.","변환되는 코드의 종류를 인식하여 `Typography` 혹은 `MarkdownCodeblock`으로 적용합니다."]),tags:["autodocs"],title:"organism/MarkdownCode"},e={args:{children:"const var = 'test'"}},r={render:()=>a.jsxs(g,{subtitle:"언어별 컴포넌트 예시. className에 language-{lang} 형식으로 지정될 경우, 해당 언어의 코드 블럭이 적용됨",title:"Language",container:!0,children:[a.jsx("div",{children:a.jsx(s,{children:"<MarkdownCode>const var = 'test'</MarkdownCode>"})}),a.jsx(s,{className:"language-tsx",children:`<MarkdownCode className="language-typescript">const var = 'test'</MarkdownCode>`})]})};var n,d,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'const var = \\'test\\''
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <StorybookTemplate subtitle="언어별 컴포넌트 예시. className에 language-{lang} 형식으로 지정될 경우, 해당 언어의 코드 블럭이 적용됨" title="Language" container>
            <div>
                <MarkdownCode>
                    {'<MarkdownCode>const var = \\'test\\'</MarkdownCode>'}
                </MarkdownCode>
            </div>

            <MarkdownCode className="language-tsx">
                {'<MarkdownCode className="language-typescript">const var = \\'test\\'</MarkdownCode>'}
            </MarkdownCode>
        </StorybookTemplate>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const _=["Playground","Language"];export{r as Language,e as Playground,_ as __namedExportsOrder,E as default};
