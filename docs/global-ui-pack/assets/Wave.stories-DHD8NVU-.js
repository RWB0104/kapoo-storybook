import{j as r}from"./jsx-runtime-BnHmloXs.js";import{r as n}from"./index-BCzbi48b.js";import{g as h,S as p}from"./storybook-CWpip0ZO.js";import{S as j}from"./StorybookContainer-CXD7EHC6.js";import{S as i}from"./StorybookTemplate-h4nRBuW0.js";import{W as A}from"./Wave-CteqosSf.js";import"./jsx-runtime-BEh3FTX5.js";import"./utils-jAU0Cazi.js";const c=["#FADADD","#A7C7E7","#A8D5BA","#D1A1D0","#F9E59E","#F5C3B6","#A3D9A5","#F1E2A3","#C7A7D8","#F7B7A3"],d="Wave",R={argTypes:{disabled:{table:{category:d,subcategory:p.PROP}},fillColor:{control:{type:"color"},table:{category:d,subcategory:p.PROP}}},component:A,parameters:h("웨이브 애니메이션 컴포넌트",["파도를 묘사한 애니메이션 태그입니다.","SVG와 SCSS를 활용하여 렌더링 환경에 독립적입니다.","","`fillColor`를 통해 원하는 색상으로 변경하거나, `disabled`로 애니메이션을 비활성화할 수 있습니다."]),tags:["autodocs"],title:"atom/Wave"};function m({color:o,...e}){return r.jsxs("div",{className:"flex flex-col items-center gap-4",children:[r.jsx(A,{className:"w-full",...e,fillColor:o}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"size-4 rounded-sm",style:{backgroundColor:o}}),r.jsx("p",{className:"text-sm",children:o})]})]},o)}const t={},l={parameters:{controls:{disable:!0}},render:o=>r.jsxs(j,{children:[r.jsx(i,{subtitle:"색상별 컴포넌트",title:"Fill Color",children:c.map(e=>n.createElement(m,{...o,color:e,key:e}))}),r.jsx(i,{subtitle:"비활성화된 색상별 컴포넌트",title:"Disabled with Fill Color",children:c.map(e=>n.createElement(m,{...o,color:e,key:e,disabled:!0}))})]})},s={argTypes:{fillColor:{control:{disable:!0}}},render:o=>r.jsx(i,{subtitle:"색상별 컴포넌트",title:"Fill Color",children:c.map(e=>n.createElement(m,{...o,color:e,key:e}))})},a={argTypes:{disabled:{control:{disable:!0}}},args:{disabled:!0},render:o=>r.jsx(i,{subtitle:"비활성화된 색상별 컴포넌트",title:"Disabled with Fill Color",children:c.map(e=>n.createElement(m,{...o,color:e,key:e}))})};var b,u,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var C,g,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="색상별 컴포넌트" title="Fill Color">
                {colors.map(color => <Component {...props} color={color} key={color} />)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="비활성화된 색상별 컴포넌트" title="Disabled with Fill Color">
                {colors.map(color => <Component {...props} color={color} key={color} disabled />)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(S=(g=l.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var k,x,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    fillColor: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="색상별 컴포넌트" title="Fill Color">
            {colors.map(color => <Component {...props} color={color} key={color} />)}
        </StorybookTemplate>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var F,D,T;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  argTypes: {
    disabled: {
      control: {
        disable: true
      }
    }
  },
  args: {
    disabled: true
  },
  render: props => <StorybookTemplate subtitle="비활성화된 색상별 컴포넌트" title="Disabled with Fill Color">
            {colors.map(color => <Component {...props} color={color} key={color} />)}
        </StorybookTemplate>
}`,...(T=(D=a.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const _=["Playground","All","FillColor","Disabled"];export{l as All,a as Disabled,s as FillColor,t as Playground,_ as __namedExportsOrder,R as default};
