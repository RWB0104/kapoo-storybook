import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-BCzbi48b.js";import{g as f,S as n,a as l}from"./storybook-CWpip0ZO.js";import{S as y}from"./StorybookTemplate-h4nRBuW0.js";import{c as b}from"./utils-jAU0Cazi.js";import"./jsx-runtime-BEh3FTX5.js";function c({className:a,...o}){return e.jsx("svg",{className:b("bi bi-google",a),"data-component":"GoogleIcon",fill:"currentColor",height:"100%",viewBox:"0 0 16 16",width:"100%",xmlns:"http://www.w3.org/2000/svg",...o,children:e.jsx("path",{d:"M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"})})}c.__docgenInfo={description:`Google 아이콘 컴포넌트 반환 메서드

@param {GoogleIconProps} param0: GoogleIconProps

@returns {React.JSX.Element} JSX

@see https://icons.getbootstrap.com/icons/google/`,methods:[],displayName:"GoogleIcon"};const s="GoogleIcon",P={argTypes:{className:l("className",s),fill:{description:"채우기 색상",table:{category:s,subcategory:n.PROP}},height:{description:"높이",table:{category:s,subcategory:n.PROP}},id:l("id",s),width:{description:"너비",table:{category:s,subcategory:n.PROP}}},component:c,parameters:f("Google 아이콘 컴포넌트",["Google 아이콘을 구현한 SVG 아이콘입니다.","[Bootstrap Icon](https://icons.getbootstrap.com/icons/google/)을 참조해주세요."]),tags:["autodocs"],title:"icon/GoogleIcon"},x=["#4285F4","#EA4335","#FBBC05","#34A853","#A142F4","#F442B0","#00B8D4","#FF6D00","#C51162","#0F9D58","#F4B400","#DB4437"],t={},r={render:a=>e.jsx(y,{subtitle:"다양한 색상이 적용된 아이콘",title:"Fill",children:x.map(o=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 p-4",children:[e.jsx(c,{...a,fill:o}),e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("div",{className:"size-5 rounded border",style:{backgroundColor:o}}),e.jsx("div",{children:o})]})]},o))})};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="다양한 색상이 적용된 아이콘" title="Fill">
            {fills.map(fill => <div className="flex flex-col items-center justify-center gap-4 p-4" key={fill}>
                    <GoogleIcon {...props} fill={fill} />

                    <div className="flex items-center justify-center gap-2">
                        <div className="size-5 rounded border" style={{
          backgroundColor: fill
        }} />
                        <div>{fill}</div>
                    </div>
                </div>)}
        </StorybookTemplate>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const S=["Playground","Fill"];export{r as Fill,t as Playground,S as __namedExportsOrder,P as default};
