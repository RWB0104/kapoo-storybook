import{j as e}from"./jsx-runtime-BnHmloXs.js";import{r as t}from"./index-BCzbi48b.js";import{B as o}from"./Button-D4HyC5G3.js";import{c as k}from"./utils-jAU0Cazi.js";import{I as j}from"./Img-CEu-9Tn1.js";import{Z as w}from"./ZoomPanner-PsB7xtNi.js";import{X as z}from"./x-DPvQ5qpK.js";import{c as m}from"./createLucideIcon-MTmt1UxL.js";import{M}from"./minus-DrqvyWN8.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],E=m("Plus",q);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],T=m("RefreshCw",N);function I({src:d="",open:n,dimType:u="blur",onClose:r,onZoomChange:p,onZoomIn:s,onZoomOut:i,onReset:l,...f}){const[a,v]=t.useState(),h=t.useCallback(()=>{r==null||r()},[r]),g=t.useCallback(()=>{a.zoomIn(),s==null||s()},[a,s]),y=t.useCallback(()=>{a.zoomOut(),i==null||i()},[a,i]),b=t.useCallback(()=>{a.reset(),l==null||l()},[a,l]);return t.useLayoutEffect(()=>{document.body.style.overflow=n===!0?"hidden":""},[n]),t.useEffect(()=>{const c=x=>{x.key==="Escape"&&(r==null||r())};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[r]),t.useLayoutEffect(()=>{n===!0&&(a==null||a.reset())},[n,a]),n===!0?e.jsxs("div",{className:k("fixed left-0 top-0 z-50 size-full",{"backdrop-blur-sm bg-black/80":u==="blur","bg-black/80":u==="modal"}),"data-component":"ImageModal",...f,children:[e.jsx("div",{className:"absolute right-4 top-4 z-10",children:e.jsx(o,{size:"icon",variant:"link",onClick:h,children:e.jsx(z,{color:"white"})})}),e.jsx(w,{controller:v,onZoomChange:p,children:e.jsx("div",{className:"flex size-full items-center justify-center",children:e.jsx("div",{className:"relative size-4/5",children:e.jsx(j,{alt:d,className:"object-contain drop-shadow-lg",src:d,fill:!0})})})}),e.jsxs("div",{className:"dark absolute bottom-4 right-4 z-10 flex flex-col gap-2",children:[e.jsx(o,{size:"icon",variant:"default",onClick:g,children:e.jsx(E,{})}),e.jsx(o,{size:"icon",variant:"default",onClick:y,children:e.jsx(M,{})}),e.jsx(o,{size:"icon",variant:"default",onClick:b,children:e.jsx(T,{})})]})]}):null}I.__docgenInfo={description:`이미지 모달 organism 컴포넌트 반환 메서드

@param {ImageModalProps} param0: ImageModalProps

@returns {React.JSX.Element | null} JSX`,methods:[],displayName:"ImageModal",props:{src:{required:!1,tsType:{name:"string"},description:"이미지 src",defaultValue:{value:"''",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"열림 여부"},dimType:{required:!1,tsType:{name:"union",raw:"'blur' | 'modal' | 'none'",elements:[{name:"literal",value:"'blur'"},{name:"literal",value:"'modal'"},{name:"literal",value:"'none'"}]},description:`딤 타입

@default blur

- blur: 블러 처리
- modal: 어두운 뒷배경 처리
- none: 아무 동작 없음`,defaultValue:{value:"'blur'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"닫기 이벤트 메서드"},onZoomChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(zoom: number) => void",signature:{arguments:[{type:{name:"number"},name:"zoom"}],return:{name:"void"}}},description:"줌 변경 이벤트 메서드"},onZoomIn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"줌 인 이벤트 메서드"},onZoomOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"줌 아웃 이벤트 메서드"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"리셋 이벤트 메서드"}},composes:["DetailedHTMLProps"]};export{I};
