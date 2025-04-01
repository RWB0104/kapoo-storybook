import{j as t}from"./jsx-runtime-BnHmloXs.js";import{r as j}from"./index-r57MSJFk.js";import{g as S,a as c}from"./storybook-CWpip0ZO.js";import{P as R}from"./index-Dj4igp42.js";import{S as _}from"./StorybookTemplate-h4nRBuW0.js";import{n as A}from"./image-CPWeUWp0.js";import{c as b}from"./utils-jAU0Cazi.js";import{c as I}from"./createLucideIcon-rzbM5Zb5.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-LHXsjL4R.js";import"./index-DmhnNIJ0.js";import"./index-Bx25MwHp.js";import"./router-context.shared-runtime-DTbBUFFY.js";import"./image-context-B4sHuKDm.js";import"./use-merged-ref-Cp_uXRvQ.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],w=I("ImageOff",v);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],E=I("Image",P);var J="AspectRatio",k=j.forwardRef((e,o)=>{const{ratio:a=1/1,style:r,...n}=e;return t.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/a}%`},"data-radix-aspect-ratio-wrapper":"",children:t.jsx(R.div,{...n,ref:o,style:{...r,position:"absolute",top:0,right:0,bottom:0,left:0}})})});k.displayName=J;var z=k;const d=z;function F({className:e,...o}){return t.jsx("div",{className:b("animate-pulse rounded-md bg-skeleton",e),...o})}F.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};function l({style:e,...o}){const[a,r]=j.useState("loading"),n=()=>{r("error")},N=({currentTarget:p})=>{console.log(p.complete),p.complete&&r("success")};return t.jsxs(t.Fragment,{children:[t.jsx(A,{"data-component":"Img","data-status":a,style:{...e,opacity:a==="success"?1:0,transition:"0.3s"},onError:n,onLoad:N,...o}),a==="loading"&&t.jsx(F,{className:"size-full",children:t.jsx(E,{className:"text-primary size-full opacity-10"})}),a==="error"&&t.jsx(w,{className:"text-primary size-full opacity-10"})]})}l.__docgenInfo={description:`이미지 molecule 컴포넌트 반환 메서드

@param {ImgProps} param0: ImgProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Img"};const m="Img",U={argTypes:{children:c("children",m),className:c("className",m),id:c("id",m)},component:l,parameters:S("이미지 컴포넌트",["`next/image`의 `Image` 컴포넌트를 확장한 이미지 컴포넌트입니다.","이미지 로드 간 로딩 혹은 오류 상태일 경우, 관련 아이콘을 표현합니다."]),tags:["autodocs"],title:"molecule/Img"},s={args:{alt:"image",fill:!0,src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest"}},i={render:e=>t.jsxs(_,{subtitle:"기본 컴포넌트 예시",title:"Default",children:[t.jsx(d,{ratio:1,children:t.jsx(l,{...e,alt:"",src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest",fill:!0})}),t.jsx(d,{ratio:1,children:t.jsx(l,{...e,alt:"",src:"https://placehold.co/",fill:!0})})]})};var g,u,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    alt: 'image',
    fill: true,
    src: 'https://placehold.co/600/FFF/31343C?font=raleway&text=Jest'
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,x,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="기본 컴포넌트 예시" title="Default">
            <AspectRatio ratio={1}>
                <Img {...props} alt="" src="https://placehold.co/600/FFF/31343C?font=raleway&text=Jest" fill />
            </AspectRatio>

            <AspectRatio ratio={1}>
                <Img {...props} alt="" src="https://placehold.co/" fill />
            </AspectRatio>
        </StorybookTemplate>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const W=["Playground","Default"];export{i as Default,s as Playground,W as __namedExportsOrder,U as default};
