import{j as e}from"./jsx-runtime-CcAjkvR0.js";import"./iframe-aPIFiJaF.js";import{g as b,S as a,a as i}from"./storybook-CWpip0ZO.js";import{S as f}from"./StorybookTemplate-DgDGKC7c.js";import{G as u}from"./GithubIcon-Bel5tYVU.js";import"./utils-jAU0Cazi.js";const t="GithubIcon",P={argTypes:{className:i("className",t),fill:{description:"채우기 색상",table:{category:t,subcategory:a.PROP}},height:{description:"높이",table:{category:t,subcategory:a.PROP}},id:i("id",t),width:{description:"너비",table:{category:t,subcategory:a.PROP}}},component:u,parameters:b("Github 아이콘 컴포넌트",["Github 아이콘을 구현한 SVG 아이콘입니다.","[Bootstrap Icon](https://icons.getbootstrap.com/icons/github/)을 참조해주세요."]),tags:["autodocs"],title:"icon/GithubIcon"},y=["#181717","#2DA44E","#F6C915","#1E90FF","#FF6F61","#6F42C1","#F0F6FC","#FF8C00","#00CED1","#D2691E","#A52A2A","#708090"],r={},o={render:g=>e.jsx(f,{subtitle:"다양한 색상이 적용된 아이콘",title:"Fill",children:y.map(s=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4 p-4",children:[e.jsx(u,{...g,fill:s}),e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("div",{className:"size-5 rounded border",style:{backgroundColor:s}}),e.jsx("div",{children:s})]})]},s))})};var c,l,n;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="다양한 색상이 적용된 아이콘" title="Fill">
            {fills.map(fill => <div className="flex flex-col items-center justify-center gap-4 p-4" key={fill}>
                    <GithubIcon {...props} fill={fill} />

                    <div className="flex items-center justify-center gap-2">
                        <div className="size-5 rounded border" style={{
          backgroundColor: fill
        }} />
                        <div>{fill}</div>
                    </div>
                </div>)}
        </StorybookTemplate>
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const S=["Playground","Fill"];export{o as Fill,r as Playground,S as __namedExportsOrder,P as default};
