import{j as o}from"./jsx-runtime-BnHmloXs.js";import"./index-BCzbi48b.js";import{g as R,S as u,a as b}from"./storybook-CWpip0ZO.js";import{S as m}from"./StorybookContainer-CXD7EHC6.js";import{S as n}from"./StorybookTemplate-h4nRBuW0.js";import{c as W}from"./utils-jAU0Cazi.js";import{W as O}from"./Wave-7XHgqrXr.js";import{I as _}from"./Img-CEu-9Tn1.js";import{W as $}from"./WaveSky-D72bMuXw.js";import"./jsx-runtime-BEh3FTX5.js";import"./router-context.shared-runtime-DQLB8Fwf.js";import"./index-OaFZzyAw.js";import"./image-context-ChR2kffi.js";import"./use-merged-ref-CA1Bo7Ed.js";import"./createLucideIcon-MTmt1UxL.js";import"./util-CbDYoOyb.js";import"./Sky-DJn9zHdm.js";function t({hour:r,mainColor:e,bodyColor:H,className:w,children:E,...D}){return o.jsxs("footer",{className:W("mt-3",w),"data-component":"Footer",...D,children:[o.jsxs("div",{className:"relative flex flex-col h-72 overflow-hidden",children:[o.jsx($,{hour:r}),o.jsx("div",{className:"-bottom-5 left-[10%] absolute animate-boat",children:o.jsx(_,{alt:"ship",height:100,src:"https://github.com/user-attachments/assets/e2a11c89-57af-4944-9068-bf237369f8b3",width:100})}),o.jsx("div",{className:"bottom-0 absolute w-full",children:o.jsx(O,{fillColor:e,height:30,width:"100%"})})]}),o.jsx("div",{style:{background:H??e},children:o.jsx("div",{className:"w-full",children:E})})]})}t.__docgenInfo={description:`푸터 molecule 컴포넌트 반환 메서드

@param {FooterProps} param0: FooterProps

@returns {React.JSX.Element}`,methods:[],displayName:"Footer",props:{hour:{required:!1,tsType:{name:"Hour"},description:"시간대"},mainColor:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"기본 색상"},bodyColor:{required:!1,tsType:{name:"CSSProperties['background']",raw:"CSSProperties['background']"},description:"바디 색상"}},composes:["DetailedHTMLProps"]};const a="Footer",p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],y=["#1E3A5F","#4F6D7A","#3A7CA5","#A0C8D7","#006F72","#00A9A5","#007F92","#76A3B8","#A3D8D1","#3E8E8E"],to={argTypes:{bodyColor:{control:"color",table:{category:a,subcategory:u.PROP}},children:b("children",a),className:b("className",a),hour:{control:"select",options:p,table:{category:a,subcategory:u.PROP,type:{summary:p.join(" | ")}}},id:b("id",a),mainColor:{control:"color",table:{category:a,subcategory:u.PROP}}},component:t,parameters:R("푸터 컴포넌트",["페이지 하단에 위치하는 푸터 컴포넌트입니다.","","`Wave` 컴포넌트를 활용한 하늘 표현이 포함되어 있습니다."]),tags:["autodocs"],title:"molecule/Footer"},s={},l={render:r=>o.jsxs(m,{children:[o.jsx(n,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:p.map(e=>o.jsx(t,{hour:e,...r,children:o.jsxs("div",{className:"p-2 text-center",children:[e,"h"]})},e))}),o.jsx(n,{subtitle:"각 색상별 하단 웨이브 색",title:"MainColor",children:y.map(e=>o.jsx(t,{mainColor:e,...r,children:o.jsx("div",{className:"p-2 text-center",children:e})},e))})]})},i={argTypes:{hour:{control:{disable:!0}}},render:r=>o.jsx(m,{children:o.jsx(n,{subtitle:"각 시간대별 컴포넌트",title:"Hour",children:p.map(e=>o.jsx(t,{hour:e,...r,children:o.jsxs("div",{className:"p-2 text-center",children:[e,"h"]})},e))})})},c={argTypes:{mainColor:{control:{disable:!0}}},render:r=>o.jsx(m,{children:o.jsx(n,{subtitle:"각 메인 색상별 하단 웨이브 색",title:"MainColor",children:y.map(e=>o.jsx(t,{mainColor:e,...r,children:o.jsx("div",{className:"p-2 text-center",children:e})},e))})})},d={argTypes:{bodyColor:{control:{disable:!0}}},render:r=>o.jsx(m,{children:o.jsx(n,{subtitle:"각 바디 색상별 하단 웨이브 색",title:"MainColor",children:y.map(e=>o.jsx(t,{bodyColor:`linear-gradient(180deg,${e},#4364f7,#0052d4)`,mainColor:e,...r,children:o.jsx("div",{className:"p-2 text-center",children:`linear-gradient(180deg,${e},#4364f7,#0052d4)`})},e))})})};var h,g,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,S,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,f,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,F,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,A,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const ao=["Playground","All","Hour","MainColor","BodyColor"];export{l as All,d as BodyColor,i as Hour,c as MainColor,s as Playground,ao as __namedExportsOrder,to as default};
