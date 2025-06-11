import{j as o}from"./jsx-runtime-BnHmloXs.js";import"./index-BCzbi48b.js";import{g as S,a,S as b}from"./storybook-CWpip0ZO.js";import{S as g}from"./StorybookContainer-CXD7EHC6.js";import{S as h}from"./StorybookTemplate-h4nRBuW0.js";import{W as d}from"./WaveSky-D72bMuXw.js";import"./jsx-runtime-BEh3FTX5.js";import"./util-CbDYoOyb.js";import"./utils-jAU0Cazi.js";import"./Sky-DJn9zHdm.js";import"./Wave-7XHgqrXr.js";const r="Footer",s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],E={argTypes:{children:a("children",r),className:a("className",r),hour:{control:"select",options:s,table:{category:r,subcategory:b.PROP,type:{summary:s.join(" | ")}}},id:a("id",r)},component:d,parameters:S("WaveSky 컴포넌트",["`Wave`와 `Sky` 컴포넌트의 원활한 색상 조합을 위해 결합한 컴포넌트입니다."]),tags:["autodocs"],title:"molecule/WaveSky"},e={},t={argTypes:{hour:{control:{disable:!0}}},render:y=>o.jsx(g,{children:o.jsx(h,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:s.map(n=>o.jsx("div",{className:"mb-10 h-30",children:o.jsx(d,{hour:n,...y})},n))})})};var m,p,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    hour: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 시간대별 컴포넌트" title="Hour">
                {hours.map(hour => <div className="mb-10 h-30" key={hour}>
                        <WaveSky hour={hour} {...props} />
                    </div>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const O=["Playground","Hour"];export{t as Hour,e as Playground,O as __namedExportsOrder,E as default};
