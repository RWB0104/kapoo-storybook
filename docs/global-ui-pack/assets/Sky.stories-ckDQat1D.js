import{j as e}from"./jsx-runtime-CcAjkvR0.js";import"./iframe-aPIFiJaF.js";import{g,a as n,S as y}from"./storybook-CWpip0ZO.js";import{S as h}from"./StorybookTemplate-DgDGKC7c.js";import{S as d}from"./Sky-Cv76CagS.js";import"./utils-jAU0Cazi.js";import"./util-DkkZxc2e.js";const a="Sky",t=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],T={argTypes:{className:n("className",a),hour:{control:"select",options:t,table:{category:a,subcategory:y.PROP,type:{summary:t.join(" | ")}}},id:n("id",a)},component:d,parameters:g("하늘 그라데이션 컴포넌트",["시간별 하늘을 묘사한 그라데이션 컴포넌트입니다.","0시 부터 23시까지 한시간 단위의 하늘을 표현할 수 있습니다.","","기본적으로 현재 시간을 따르며, 원할 경우 직접 시간을 지정하여 원하는 하늘을 표현할 수도 있습니다."]),tags:["autodocs"],title:"atom/Sky"},r={args:{className:"h-96"}},o={argTypes:{hour:{control:{disable:!0}}},render:()=>e.jsx(h,{subtitle:"각 시간별 컴포넌트",title:"Hour",children:t.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"flex h-60 w-full",children:e.jsx(d,{hour:s})}),e.jsxs("p",{children:[s,"h"]})]},s))})};var m,l,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    className: 'h-96'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,i,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    hour: {
      control: {
        disable: true
      }
    }
  },
  render: () => <StorybookTemplate subtitle="각 시간별 컴포넌트" title="Hour">
            {hours.map(hour => <div className="flex flex-col items-center gap-2" key={hour}>
                    <div className="flex h-60 w-full">
                        <Sky hour={hour} />
                    </div>

                    <p>{hour}h</p>
                </div>)}
        </StorybookTemplate>
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const v=["Playground","Hour"];export{o as Hour,r as Playground,v as __namedExportsOrder,T as default};
