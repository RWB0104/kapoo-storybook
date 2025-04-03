import{r as i}from"./index-CKMdfnwt.js";import{g as y,S as P}from"./storybook-CWpip0ZO.js";import{p as w}from"./mock-DZdywvmX.js";import{j as m}from"./jsx-runtime-BnHmloXs.js";import{u as k}from"./index-CXRgFPsP.js";import{C as B}from"./ContentCategory-BQTFtQPY.js";import{C as M}from"./ContentForm-hUttLIhe.js";import{C as h}from"./ContentInfiniteGrid-Dk6rrSFM.js";import"./ContentGrid-B4g1dgrr.js";import"./utils-jAU0Cazi.js";import"./ContentCard-DLOKfBrY.js";import"./Typography-DWNEGRWX.js";import"./segment-CIEV7OGa.js";import"./jsx-runtime-BEh3FTX5.js";import"./add-base-path-zrht_gGq.js";import"./image-context-D2k8NOzF.js";import"./Img-BWjKDNi_.js";import"./index-BY638psU.js";import"./AspectRatio-BFN4TI0r.js";import"./index-iac_OhyL.js";import"./index-BZRNBTKr.js";import"./index-CFv-dCm1.js";import"./index-C-LDafp8.js";import"./Button-sT75gSpY.js";import"./hooks-B1ldGSeW.js";const j=i.memo(B),S=i.memo(h);function C({list:t}){const c=k(),x=Number.parseInt(c.get("page")??"1",10),r=c.getAll("category"),a=c.get("keyword")??void 0,d=i.useCallback(n=>t==null?void 0:t.filter(({meta:o,summary:s})=>{let e=o.publish;return n!==!0&&r.length>0&&(e=e&&r.includes(o.category)),a!==void 0&&(e=e&&s.toLowerCase().includes(a.toLowerCase())),e}),[t,r,a]),l=i.useMemo(()=>{var n;return(n=d(!0))==null?void 0:n.reduce((o,s)=>{const e=o[s.meta.category]??0;return o[s.meta.category]=e+1,o},{})},[d]);return m.jsxs("div",{className:"flex w-full flex-col gap-10","data-component":"ContentBox",children:[m.jsx(M,{defaultValue:a}),l&&m.jsx(j,{categories:l,selected:r}),m.jsx(S,{list:d(),page:x,pageSize:6})]})}C.__docgenInfo={description:`컨텐츠 박스 organism 컴포넌트 반환 메서드

@param {ContentBoxProps} param0: ContentBoxProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentBox",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailProps",elements:[{name:"MarkdownHeaderProps"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>[]"},description:"리스트"}}};const b="ContentBox",$={argTypes:{list:{table:{category:b,subcategory:P.PROP}}},args:{list:w},component:C,parameters:y("컨텐츠 박스 컴포넌트",["컨텐츠 컴포넌트 전반을 관리하는 박스 컴포넌트입니다.","내부에서 URL 파라미터를 관리하여 각 하위 컴포넌트에 전달해줍니다."],{nextjs:{appDirectory:!0}}),tags:["autodocs"],title:"organism/ContentBox"},p={};var g,u,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(f=(u=p.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ee=["Playground"];export{p as Playground,ee as __namedExportsOrder,$ as default};
