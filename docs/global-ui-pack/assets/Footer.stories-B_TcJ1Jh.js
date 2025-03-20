import{j as o}from"./jsx-runtime-BnHmloXs.js";import"./index-XLJyvO9z.js";import{g as M,S as d,a as m}from"./storybook-hTxjENzG.js";import{S as h}from"./StorybookContainer-CXD7EHC6.js";import{S as c}from"./StorybookTemplate-h4nRBuW0.js";import{n as D}from"./image-C6gtp6Oj.js";import{g as R}from"./util-DwZTi0oS.js";import{c as _}from"./utils-jAU0Cazi.js";import{S as O}from"./Sky-BFlALrmu.js";import{W as y}from"./Wave-5ZQo67V-.js";import"./jsx-runtime-BEh3FTX5.js";import"./router-context.shared-runtime-a1mlPyA1.js";import"./index-CJNmP7Ls.js";import"./image-context-Be2CajuN.js";import"./use-merged-ref-CEcA4Cog.js";const W="_cloud_102r0_1",x={cloud:W,"hour-0":"_hour-0_102r0_1","hour-1":"_hour-1_102r0_4","hour-2":"_hour-2_102r0_7","hour-3":"_hour-3_102r0_10","hour-4":"_hour-4_102r0_13","hour-5":"_hour-5_102r0_16","hour-6":"_hour-6_102r0_19","hour-7":"_hour-7_102r0_22","hour-8":"_hour-8_102r0_25","hour-9":"_hour-9_102r0_28","hour-10":"_hour-10_102r0_31","hour-11":"_hour-11_102r0_34","hour-12":"_hour-12_102r0_37","hour-13":"_hour-13_102r0_40","hour-14":"_hour-14_102r0_43","hour-15":"_hour-15_102r0_46","hour-16":"_hour-16_102r0_49","hour-17":"_hour-17_102r0_52","hour-18":"_hour-18_102r0_55","hour-19":"_hour-19_102r0_58","hour-20":"_hour-20_102r0_61","hour-21":"_hour-21_102r0_64","hour-22":"_hour-22_102r0_67","hour-23":"_hour-23_102r0_70"};function t({hour:e,mainColor:r,className:H,children:w,...E}){const p=e??R();return o.jsxs("footer",{className:_("mt-3",H),"data-component":"Footer",...E,children:[o.jsxs("div",{className:"relative flex h-96 flex-col overflow-hidden",children:[o.jsx("div",{className:_("w-full",x.cloud,x[`hour-${p}`]),children:o.jsx(y,{fillColor:"inherit",height:30,width:"100%"})}),o.jsx(O,{className:"size-full",hour:p}),o.jsx("div",{className:"animate-yay absolute -bottom-5 left-[10%]",children:o.jsx(D,{alt:"ship",height:100,src:"https://cdn-icons-png.freepik.com/512/6643/6643562.png",width:100})}),o.jsx("div",{className:"absolute bottom-0 w-full",children:o.jsx(y,{fillColor:r,height:30,width:"100%"})})]}),o.jsx("div",{children:w})]})}t.__docgenInfo={description:`푸터 molecule 컴포넌트 반환 메서드

@param {FooterProps} param0: FooterProps

@returns {React.JSX.Element}`,methods:[],displayName:"Footer",props:{hour:{required:!1,tsType:{name:"Hour"},description:"시간대"},mainColor:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"기본 색상"}},composes:["DetailedHTMLProps"]};const s="Footer",u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],P=["#1E3A5F","#4F6D7A","#3A7CA5","#A0C8D7","#006F72","#00A9A5","#007F92","#76A3B8","#A3D8D1","#3E8E8E"],oo={argTypes:{children:m("children",s),className:m("className",s),hour:{control:"select",options:u,table:{category:s,subcategory:d.PROP,type:{summary:u.join(" | ")}}},id:m("id",s),mainColor:{control:"color",table:{category:s,subcategory:d.PROP}}},component:t,parameters:M("푸터 컴포넌트",["페이지 하단에 위치하는 푸터 컴포넌트입니다.","","`Wave` 컴포넌트를 활용한 하늘 표현이 포함되어 있습니다."]),tags:["autodocs"],title:"molecule/Footer"},n={},a={render:e=>o.jsxs(h,{children:[o.jsx(c,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:u.map(r=>o.jsx(t,{hour:r,...e,children:o.jsxs("div",{className:"p-2 text-center",children:[r,"h"]})},r))}),o.jsx(c,{subtitle:"각 색상별 하단 웨이브 색",title:"MainColor",children:P.map(r=>o.jsx(t,{mainColor:r,...e,children:o.jsx("div",{className:"p-2 text-center",children:r})},r))})]})},l={argTypes:{hour:{control:{disable:!0}}},render:e=>o.jsx(h,{children:o.jsx(c,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:u.map(r=>o.jsx(t,{hour:r,...e,children:o.jsxs("div",{className:"p-2 text-center",children:[r,"h"]})},r))})})},i={argTypes:{mainColor:{control:{disable:!0}}},render:e=>o.jsx(h,{children:o.jsx(c,{subtitle:"각 색상별 하단 웨이브 색",title:"MainColor",children:P.map(r=>o.jsx(t,{mainColor:r,...e,children:o.jsx("div",{className:"p-2 text-center",children:r})},r))})})};var b,g,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var C,j,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 시간대별 컴포넌트" title="Hour">
                {hours.map(hour => <Footer hour={hour} key={hour} {...props}>
                        <div className="p-2 text-center">
                            {hour}h
                        </div>
                    </Footer>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="각 색상별 하단 웨이브 색" title="MainColor">
                {colors.map(color => <Footer key={color} mainColor={color} {...props}>
                        <div className="p-2 text-center">
                            {color}
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(f=(j=a.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var k,v,F;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    hour: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 시간대별 컴포넌트" title="Hour">
                {hours.map(hour => <Footer hour={hour} key={hour} {...props}>
                        <div className="p-2 text-center">
                            {hour}h
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var N,T,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    mainColor: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 색상별 하단 웨이브 색" title="MainColor">
                {colors.map(color => <Footer key={color} mainColor={color} {...props}>
                        <div className="p-2 text-center">
                            {color}
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const ro=["Playground","All","Hour","MainColor"];export{a as All,l as Hour,i as MainColor,n as Playground,ro as __namedExportsOrder,oo as default};
