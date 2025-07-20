import{j as a}from"./jsx-runtime-BnHmloXs.js";import"./index-BzsBhNef.js";import"./github-DwK5x3zr.js";import{g as T,S as i,a as p}from"./storybook-CWpip0ZO.js";import{S}from"./StorybookTemplate-h4nRBuW0.js";import{p as x}from"./mock-CEMZcZ_7.js";import{t as C}from"./util-DseDwWqP.js";import{C as n}from"./ContentGrid-CVBfgyPI.js";import"./jsx-runtime-BEh3FTX5.js";import"./hooks-mNTcibNE.js";import"./utils-jAU0Cazi.js";import"./ContentCard-sLoo7zEa.js";import"./link-k0xUX2an.js";import"./segment-CIEV7OGa.js";import"./add-base-path-zrht_gGq.js";import"./router-context.shared-runtime-teXhwerE.js";import"./use-merged-ref-b3ysbXhA.js";import"./Img-B_mh2clp.js";import"./index-6NmxKIG3.js";import"./image-context-Da6Wcnuc.js";import"./AspectRatio-DDDRmAbl.js";import"./index-llW7FSMo.js";import"./index-DU-vGjmk.js";import"./index-89FpGcWz.js";import"./ContentTag-B6wAOjq6.js";import"./index-D_ldaswd.js";const t="ContentGrid",V={argTypes:{className:p("className",t),id:p("id",t),list:{control:{disable:!0},table:{category:t,subcategory:i.PROP}},loading:{table:{category:t,subcategory:i.PROP},type:"boolean"}},args:{list:C(x)},component:n,parameters:T("컨텐츠 그리드 컴포넌트",["카드 정보 리스트를 받아 그리드로 표현하는 컴포넌트입니다."]),tags:["autodocs"],title:"organism/ContentGrid"},r={},o={args:{list:void 0},render:s=>a.jsx(S,{subtitle:"빈 리스트 컴포넌트 예시",title:"Empty",container:!0,children:a.jsx(n,{...s})})},e={argTypes:{loading:{control:{disable:!0}}},args:{list:void 0},render:s=>a.jsx(S,{subtitle:"로딩 상태의 컴포넌트 예시",title:"Loading",container:!0,children:a.jsx(n,{...s,loading:!0})})};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,g,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    list: undefined
  },
  render: props => <StorybookTemplate subtitle="빈 리스트 컴포넌트 예시" title="Empty" container>
            <ContentGrid {...props} />
        </StorybookTemplate>
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,b,f;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    loading: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list: undefined
  },
  render: props => <StorybookTemplate subtitle="로딩 상태의 컴포넌트 예시" title="Loading" container>
            <ContentGrid {...props} loading />
        </StorybookTemplate>
}`,...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const W=["Playground","Empty","Loading"];export{o as Empty,e as Loading,r as Playground,W as __namedExportsOrder,V as default};
