import{j as o}from"./jsx-runtime-BnHmloXs.js";import{r as m}from"./index-BzsBhNef.js";import{t as a}from"./theme-D_5m8He_.js";function n({children:s}){const{themeState:t,setThemeState:r}=a();return m.useLayoutEffect(()=>{const e=localStorage.getItem("theme");(e==="light"||e==="dark")&&r(e)},[r]),m.useLayoutEffect(()=>{document.body.classList.remove("light","dark"),document.body.classList.add(t)},[t]),o.jsx(o.Fragment,{children:s})}n.__docgenInfo={description:`테마 프로바이더 organism 컴포넌트 반환 메서드

@param {ThemeProviderProps} param0: ThemeProviderProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ThemeProvider"};export{n as T};
