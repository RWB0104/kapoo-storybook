import{r as o,j as s}from"./iframe-C1J0eTZE.js";import{t as m}from"./theme-CRNqRJoq.js";function n({children:a}){const{themeState:t,setThemeState:r}=m();return o.useLayoutEffect(()=>{const e=localStorage.getItem("theme");(e==="light"||e==="dark")&&r(e)},[r]),o.useLayoutEffect(()=>{document.body.classList.remove("light","dark"),document.body.classList.add(t)},[t]),s.jsx(s.Fragment,{children:a})}n.__docgenInfo={description:`테마 프로바이더 organism 컴포넌트 반환 메서드

@param {ThemeProviderProps} param0: ThemeProviderProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ThemeProvider"};export{n as T};
