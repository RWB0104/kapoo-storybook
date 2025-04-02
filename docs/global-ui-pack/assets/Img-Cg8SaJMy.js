import{j as e}from"./jsx-runtime-BnHmloXs.js";import{n as l}from"./image-CPWeUWp0.js";import{r as d}from"./index-r57MSJFk.js";import{c as p}from"./utils-jAU0Cazi.js";import{c as n}from"./createLucideIcon-rzbM5Zb5.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],x=n("ImageOff",y);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],u=n("Image",g);function r({className:t,...o}){return e.jsx("div",{className:p("animate-pulse rounded-md bg-skeleton",t),...o})}r.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};function f({style:t,...o}){const[a,s]=d.useState("loading"),m=()=>{s("error")},c=({currentTarget:i})=>{i.complete&&s("success")};return e.jsxs(e.Fragment,{children:[e.jsx(l,{"data-component":"Img","data-status":a,style:{...t,opacity:a==="success"?1:0,transition:"0.3s"},onError:m,onLoad:c,...o}),a==="loading"&&e.jsx(r,{className:"size-full",children:e.jsx(u,{className:"text-primary size-full opacity-10"})}),a==="error"&&e.jsx(x,{className:"text-primary size-full opacity-10"})]})}f.__docgenInfo={description:`이미지 molecule 컴포넌트 반환 메서드

@param {ImgProps} param0: ImgProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Img"};export{f as I};
