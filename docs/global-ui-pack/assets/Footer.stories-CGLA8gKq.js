import{j as o}from"./jsx-runtime-BnHmloXs.js";import"./index-r57MSJFk.js";import{g as B,S as p,a as h}from"./storybook-CWpip0ZO.js";import{S as m}from"./StorybookContainer-CXD7EHC6.js";import{S as a}from"./StorybookTemplate-h4nRBuW0.js";import{g as q}from"./util-B8Xjs9R8.js";import{c as y}from"./utils-jAU0Cazi.js";import{S as I}from"./Sky-BFlALrmu.js";import{W as g}from"./Wave-7XHgqrXr.js";import{I as L}from"./Img-DqW4-Mzg.js";import"./jsx-runtime-BEh3FTX5.js";import"./router-context.shared-runtime-DTbBUFFY.js";import"./index-DmhnNIJ0.js";import"./image-context-B4sHuKDm.js";import"./use-merged-ref-Cp_uXRvQ.js";import"./createLucideIcon-rzbM5Zb5.js";const W="_cloud_102r0_1",x={cloud:W,"hour-0":"_hour-0_102r0_1","hour-1":"_hour-1_102r0_4","hour-2":"_hour-2_102r0_7","hour-3":"_hour-3_102r0_10","hour-4":"_hour-4_102r0_13","hour-5":"_hour-5_102r0_16","hour-6":"_hour-6_102r0_19","hour-7":"_hour-7_102r0_22","hour-8":"_hour-8_102r0_25","hour-9":"_hour-9_102r0_28","hour-10":"_hour-10_102r0_31","hour-11":"_hour-11_102r0_34","hour-12":"_hour-12_102r0_37","hour-13":"_hour-13_102r0_40","hour-14":"_hour-14_102r0_43","hour-15":"_hour-15_102r0_46","hour-16":"_hour-16_102r0_49","hour-17":"_hour-17_102r0_52","hour-18":"_hour-18_102r0_55","hour-19":"_hour-19_102r0_58","hour-20":"_hour-20_102r0_61","hour-21":"_hour-21_102r0_64","hour-22":"_hour-22_102r0_67","hour-23":"_hour-23_102r0_70"};function t({hour:e,mainColor:r,bodyColor:D,className:O,children:R,...$}){const b=e??q();return o.jsxs("footer",{className:y("mt-3",O),"data-component":"Footer",...$,children:[o.jsxs("div",{className:"relative flex flex-col h-72 overflow-hidden",children:[o.jsx("div",{className:y("w-full",x.cloud,x[`hour-${b}`]),children:o.jsx(g,{fillColor:"inherit",height:30,width:"100%"})}),o.jsx(I,{className:"size-full",hour:b}),o.jsx("div",{className:"-bottom-5 left-[10%] absolute animate-boat",children:o.jsx(L,{alt:"ship",height:100,src:"https://github.com/user-attachments/assets/e2a11c89-57af-4944-9068-bf237369f8b3",width:100})}),o.jsx("div",{className:"bottom-0 absolute w-full",children:o.jsx(g,{fillColor:r,height:30,width:"100%"})})]}),o.jsxs("div",{style:{background:D??r},children:[o.jsx("div",{className:"w-full",children:R}),o.jsx("div",{className:"w-full",children:o.jsx("svg",{viewBox:"0 0 1440 320",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M0,160 C240,200 480,120 720,160 C960,200 1200,100 1440,160 L1440,320 L0,320 Z",fill:"#F4E2D8",fillOpacity:"1"})})})]})]})}t.__docgenInfo={description:`푸터 molecule 컴포넌트 반환 메서드

@param {FooterProps} param0: FooterProps

@returns {React.JSX.Element}`,methods:[],displayName:"Footer",props:{hour:{required:!1,tsType:{name:"Hour"},description:"시간대"},mainColor:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"기본 색상"},bodyColor:{required:!1,tsType:{name:"CSSProperties['background']",raw:"CSSProperties['background']"},description:"바디 색상"}},composes:["DetailedHTMLProps"]};const s="Footer",d=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],_=["#1E3A5F","#4F6D7A","#3A7CA5","#A0C8D7","#006F72","#00A9A5","#007F92","#76A3B8","#A3D8D1","#3E8E8E"],no={argTypes:{bodyColor:{control:"color",table:{category:s,subcategory:p.PROP}},children:h("children",s),className:h("className",s),hour:{control:"select",options:d,table:{category:s,subcategory:p.PROP,type:{summary:d.join(" | ")}}},id:h("id",s),mainColor:{control:"color",table:{category:s,subcategory:p.PROP}}},component:t,parameters:B("푸터 컴포넌트",["페이지 하단에 위치하는 푸터 컴포넌트입니다.","","`Wave` 컴포넌트를 활용한 하늘 표현이 포함되어 있습니다."]),tags:["autodocs"],title:"molecule/Footer"},n={},l={render:e=>o.jsxs(m,{children:[o.jsx(a,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:d.map(r=>o.jsx(t,{hour:r,...e,children:o.jsxs("div",{className:"p-2 text-center",children:[r,"h"]})},r))}),o.jsx(a,{subtitle:"각 색상별 하단 웨이브 색",title:"MainColor",children:_.map(r=>o.jsx(t,{mainColor:r,...e,children:o.jsx("div",{className:"p-2 text-center",children:r})},r))})]})},i={argTypes:{hour:{control:{disable:!0}}},render:e=>o.jsx(m,{children:o.jsx(a,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:d.map(r=>o.jsx(t,{hour:r,...e,children:o.jsxs("div",{className:"p-2 text-center",children:[r,"h"]})},r))})})},c={argTypes:{mainColor:{control:{disable:!0}}},render:e=>o.jsx(m,{children:o.jsx(a,{subtitle:"각 메인 색상별 하단 웨이브 색",title:"MainColor",children:_.map(r=>o.jsx(t,{mainColor:r,...e,children:o.jsx("div",{className:"p-2 text-center",children:r})},r))})})},u={argTypes:{bodyColor:{control:{disable:!0}}},render:e=>o.jsx(m,{children:o.jsx(a,{subtitle:"각 바디 색상별 하단 웨이브 색",title:"MainColor",children:_.map(r=>o.jsx(t,{bodyColor:`linear-gradient(180deg,${r},#4364f7,#0052d4)`,mainColor:r,...e,children:o.jsx("div",{className:"p-2 text-center",children:`linear-gradient(180deg,${r},#4364f7,#0052d4)`})},r))})})};var C,S,f;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,k,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,F,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,w,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {
    mainColor: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 메인 색상별 하단 웨이브 색" title="MainColor">
                {colors.map(color => <Footer key={color} mainColor={color} {...props}>
                        <div className="p-2 text-center">
                            {color}
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var H,M,E;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  argTypes: {
    bodyColor: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 바디 색상별 하단 웨이브 색" title="MainColor">
                {colors.map(color => <Footer bodyColor={\`linear-gradient(180deg,\${color},#4364f7,#0052d4)\`} key={color} mainColor={color} {...props}>
                        <div className="p-2 text-center">
                            {\`linear-gradient(180deg,\${color},#4364f7,#0052d4)\`}
                        </div>
                    </Footer>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(E=(M=u.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const lo=["Playground","All","Hour","MainColor","BodyColor"];export{l as All,u as BodyColor,i as Hour,c as MainColor,n as Playground,lo as __namedExportsOrder,no as default};
