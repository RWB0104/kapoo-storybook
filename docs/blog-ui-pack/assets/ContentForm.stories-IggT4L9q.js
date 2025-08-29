import{j as e}from"./iframe-Y6OdIcWN.js";import{g as x,S as u,a as c}from"./storybook-CWpip0ZO.js";import{S as i}from"./StorybookTemplate-BCm3RXy1.js";import{C as o}from"./ContentForm-CKGPHU9d.js";import"./index-DaJs8JGH.js";import"./utils-jAU0Cazi.js";import"./index-Bzuta-Zn.js";import"./index-CzK0c087.js";import"./index-D_ldaswd.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,r="ContentForm",v={argTypes:{className:c("className",r),defaultValue:{control:"text",table:{category:r,subcategory:u.PROP}},id:c("id",r),onChange:{control:{disable:!0},table:{category:r,subcategory:u.EV,type:{detail:"(e: React.FormEvent<HTMLFormElement>) => void",summary:"React.FormEventHandler<HTMLFormElement>"}}},onSubmit:{control:{disable:!0},table:{category:r,subcategory:u.EV,type:{detail:"(data: ContentFormParams, e?: React.BaseSyntheticEvent) => void",summary:"SubmitHandler<HTMLFormElement>"}}}},component:o,parameters:x("컨텐츠 폼 컴포넌트",["컨텐츠 폼 컴포넌트입니다.","키워드를 입력하여 원하는 키워드에 맞는 컨텐츠를 필터링합니다."],{nextjs:{appDirectory:!0}}),tags:["autodocs"],title:"organism/ContentForm"},a={args:{onChange:l("onChange"),onSubmit:l("onSubmit")}},n={argTypes:{defaultValue:{control:{disable:!0}}},render:t=>e.jsxs(i,{subtitle:"기본 파라미터 값이 적용된 예시",title:"DefaultValue",children:[e.jsx(o,{...t,defaultValue:"test"}),e.jsx(o,{...t,defaultValue:"react"}),e.jsx(o,{...t,defaultValue:"typescript"})]})},s={render:t=>e.jsx(i,{subtitle:"변경 이벤트가 적용된 예시 (Actions 탭 참조)",title:"OnChange",children:e.jsx(o,{...t,onChange:l("onChange")})})},m={render:t=>e.jsx(i,{subtitle:"서브밋 이벤트가 적용된 예시 (Actions 탭 참조)",title:"OnSubmit",children:e.jsx(o,{...t,onSubmit:l("onSubmit")})})};var p,d,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onChange: action('onChange'),
    onSubmit: action('onSubmit')
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,S,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    defaultValue: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="기본 파라미터 값이 적용된 예시" title="DefaultValue">
            <ContentForm {...props} defaultValue="test" />
            <ContentForm {...props} defaultValue="react" />
            <ContentForm {...props} defaultValue="typescript" />
        </StorybookTemplate>
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,f,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="변경 이벤트가 적용된 예시 (Actions 탭 참조)" title="OnChange">
            <ContentForm {...props} onChange={action('onChange')} />
        </StorybookTemplate>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,O,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="서브밋 이벤트가 적용된 예시 (Actions 탭 참조)" title="OnSubmit">
            <ContentForm {...props} onSubmit={action('onSubmit')} />
        </StorybookTemplate>
}`,...(V=(O=m.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const H=["Playground","DefaultValue","OnChange","OnSubmit"];export{n as DefaultValue,s as OnChange,m as OnSubmit,a as Playground,H as __namedExportsOrder,v as default};
