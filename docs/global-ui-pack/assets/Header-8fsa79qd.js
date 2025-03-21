import{c as p}from"./createLucideIcon-rzbM5Zb5.js";import{j as e}from"./jsx-runtime-BnHmloXs.js";import{n as c}from"./image-CPWeUWp0.js";import{L as l}from"./link-B6xMkqIL.js";import{c as m}from"./utils-jAU0Cazi.js";import{T as u}from"./Typography-GqS5NS2G.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],H=p("Menu",f);function x({logo:r,title:n,link:s="/",transparent:i,menu:t,children:a,className:o,...d}){return e.jsxs("header",{className:m("sticky flex items-center gap-4 px-8 py-4 top-0 left-0",{"bg-background":i!==!0,"text-white":i===!0},o),"data-component":"Header",...d,children:[t,e.jsxs(l,{className:"inline-flex items-center gap-2",href:s,children:[r===void 0?null:e.jsx("div",{children:e.jsx(c,{alt:r,height:24,src:r,width:24})}),n===void 0?null:e.jsx("div",{children:e.jsx(u,{variant:"h4",children:n})})]}),a]})}x.__docgenInfo={description:`헤더 molecule 컴포넌트 반환 메서드

@param {HeaderProps} param0: HeaderProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Header",props:{logo:{required:!1,tsType:{name:"string"},description:"로고"},title:{required:!1,tsType:{name:"string"},description:"타이틀"},link:{required:!1,tsType:{name:"string"},description:"링크",defaultValue:{value:"'/'",computed:!1}},transparent:{required:!1,tsType:{name:"boolean"},description:"투명 여부"},menu:{required:!1,tsType:{name:"ReactNode"},description:"메뉴 노드"}},composes:["DetailedHTMLProps"]};export{x as H,H as M};
