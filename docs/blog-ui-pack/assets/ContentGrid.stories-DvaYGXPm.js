import{j as a}from"./jsx-runtime-BnHmloXs.js";import"./index-CKMdfnwt.js";import{g as T,S as i,a as p}from"./storybook-CWpip0ZO.js";import{S}from"./StorybookTemplate-h4nRBuW0.js";import{p as x}from"./mock-B9o5BwoK.js";import{t as C}from"./util-CRaRbDSx.js";import{C as n}from"./ContentGrid-CmnBzN0w.js";import"./jsx-runtime-BEh3FTX5.js";import"./utils-jAU0Cazi.js";import"./ContentCard-BP_drmpG.js";import"./link-DlSupBxQ.js";import"./segment-CIEV7OGa.js";import"./add-base-path-zrht_gGq.js";import"./router-context.shared-runtime-Cv5SBY9_.js";import"./use-merged-ref-CTvqUzqe.js";import"./Img-4q12Fo_9.js";import"./index-BY638psU.js";import"./image-context-W3FUK0Wx.js";import"./AspectRatio-CsdoW76c.js";import"./index-Bo4N8-Op.js";import"./index-BZRNBTKr.js";import"./index-Bb5hAbjD.js";import"./ContentTag-B6wAOjq6.js";import"./index-D_ldaswd.js";const t="ContentGrid",Q={argTypes:{className:p("className",t),id:p("id",t),list:{control:{disable:!0},table:{category:t,subcategory:i.PROP}},loading:{table:{category:t,subcategory:i.PROP},type:"boolean"}},args:{list:C(x)},component:n,parameters:T("컨텐츠 그리드 컴포넌트",["카드 정보 리스트를 받아 그리드로 표현하는 컴포넌트입니다."]),tags:["autodocs"],title:"organism/ContentGrid"},r={},o={args:{list:void 0},render:s=>a.jsx(S,{subtitle:"빈 리스트 컴포넌트 예시",title:"Empty",container:!0,children:a.jsx(n,{...s})})},e={argTypes:{loading:{control:{disable:!0}}},args:{list:void 0},render:s=>a.jsx(S,{subtitle:"로딩 상태의 컴포넌트 예시",title:"Loading",container:!0,children:a.jsx(n,{...s,loading:!0})})};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,g,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const U=["Playground","Empty","Loading"];export{o as Empty,e as Loading,r as Playground,U as __namedExportsOrder,Q as default};
