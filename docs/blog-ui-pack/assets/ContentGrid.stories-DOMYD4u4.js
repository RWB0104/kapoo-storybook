import{j as a}from"./iframe-DQTKD2Ya.js";import{g as T,S as i,a as p}from"./storybook-CWpip0ZO.js";import{S}from"./StorybookTemplate-De9YffhR.js";import{p as x}from"./mock-CRV2Mvdb.js";import{t as C}from"./util-DseDwWqP.js";import{C as n}from"./ContentGrid-rx1jvDSF.js";import"./utils-jAU0Cazi.js";import"./ContentCard-caYfs8KF.js";import"./Img-B_odpchK.js";import"./use-merged-ref-DpMEaqX3.js";import"./AspectRatio-Bl2pI5NT.js";import"./index-BSwVlo9H.js";import"./index-DMLXDpjL.js";import"./link-zzcRv0lf.js";import"./ContentTag-TCBXSo1y.js";import"./index-D_ldaswd.js";const t="ContentGrid",z={args:{list:C(x)},argTypes:{className:p("className",t),id:p("id",t),list:{control:{disable:!0},table:{category:t,subcategory:i.PROP}},loading:{table:{category:t,subcategory:i.PROP},type:"boolean"}},component:n,parameters:T("컨텐츠 그리드 컴포넌트",["카드 정보 리스트를 받아 그리드로 표현하는 컴포넌트입니다."]),tags:["autodocs"],title:"organism/ContentGrid"},r={},e={args:{list:void 0},render:s=>a.jsx(S,{container:!0,subtitle:"빈 리스트 컴포넌트 예시",title:"Empty",children:a.jsx(n,{...s})})},o={args:{list:void 0},argTypes:{loading:{control:{disable:!0}}},render:s=>a.jsx(S,{container:!0,subtitle:"로딩 상태의 컴포넌트 예시",title:"Loading",children:a.jsx(n,{...s,loading:!0})})};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,g,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    list: undefined
  },
  render: props => <StorybookTemplate container subtitle="빈 리스트 컴포넌트 예시" title="Empty">
            <ContentGrid {...props} />
        </StorybookTemplate>
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,b,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    list: undefined
  },
  argTypes: {
    loading: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="로딩 상태의 컴포넌트 예시" title="Loading">
            <ContentGrid {...props} loading />
        </StorybookTemplate>
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const B=["Playground","Empty","Loading"];export{e as Empty,o as Loading,r as Playground,B as __namedExportsOrder,z as default};
