import{j as a}from"./iframe-DIrS4rnj.js";import{g as T,S as i,a as p}from"./storybook-CWpip0ZO.js";import{S}from"./StorybookTemplate-D0mmKJO6.js";import{p as x}from"./mock-BVmjSeFh.js";import{t as C}from"./util-DseDwWqP.js";import{C as n}from"./ContentGrid-y02eAUpx.js";import"./utils-jAU0Cazi.js";import"./ContentCard-CJ_sm63s.js";import"./link-BUWyp33c.js";import"./use-merged-ref-etEBFTTl.js";import"./Img-BqvSmBQe.js";import"./AspectRatio-BtWwDo06.js";import"./index-DGlsa-Ho.js";import"./index-BBQLOLHq.js";import"./index-DhvoB8oL.js";import"./ContentTag-B0VAIFg4.js";import"./index-D_ldaswd.js";const t="ContentGrid",B={argTypes:{className:p("className",t),id:p("id",t),list:{control:{disable:!0},table:{category:t,subcategory:i.PROP}},loading:{table:{category:t,subcategory:i.PROP},type:"boolean"}},args:{list:C(x)},component:n,parameters:T("컨텐츠 그리드 컴포넌트",["카드 정보 리스트를 받아 그리드로 표현하는 컴포넌트입니다."]),tags:["autodocs"],title:"organism/ContentGrid"},r={},e={args:{list:void 0},render:s=>a.jsx(S,{subtitle:"빈 리스트 컴포넌트 예시",title:"Empty",container:!0,children:a.jsx(n,{...s})})},o={argTypes:{loading:{control:{disable:!0}}},args:{list:void 0},render:s=>a.jsx(S,{subtitle:"로딩 상태의 컴포넌트 예시",title:"Loading",container:!0,children:a.jsx(n,{...s,loading:!0})})};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,g,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    list: undefined
  },
  render: props => <StorybookTemplate subtitle="빈 리스트 컴포넌트 예시" title="Empty" container>
            <ContentGrid {...props} />
        </StorybookTemplate>
}`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,b,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const D=["Playground","Empty","Loading"];export{e as Empty,o as Loading,r as Playground,D as __namedExportsOrder,B as default};
