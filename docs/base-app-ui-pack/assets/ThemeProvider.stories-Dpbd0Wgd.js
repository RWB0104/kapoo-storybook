import{j as t}from"./jsx-runtime-BnHmloXs.js";import{r as a}from"./index-D0o6aRj1.js";import{g as p,a as g}from"./storybook-CWpip0ZO.js";import{t as h,P as l}from"./theme-BtfOoVWW.js";import"./jsx-runtime-BEh3FTX5.js";function c({children:d}){const{themeState:o,setThemeState:s}=h();return a.useLayoutEffect(()=>{const r=localStorage.getItem("theme");(r==="light"||r==="dark")&&s(r)},[s]),a.useLayoutEffect(()=>{document.body.classList.remove("light","dark"),document.body.classList.add(o)},[o]),t.jsx(t.Fragment,{children:d})}c.__docgenInfo={description:`테마 프로바이더 organism 컴포넌트 반환 메서드

@param {ThemeProviderProps} param0: ThemeProviderProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ThemeProvider"};const u="ThemeProvider",S={argTypes:{children:g("children",u)},component:c,parameters:p("테마 프로바이더 컴포넌트",["테마를 관리하기 위한 프로바이더 컴포넌트입니다.","`ThemeStore`가 내장되어 있습니다."]),tags:["autodocs"],title:"organism/ThemeProvider"},e={args:{children:t.jsx(l,{})}};var m,n,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <Previewless />
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const x=["Playground"];export{e as Playground,x as __namedExportsOrder,S as default};
