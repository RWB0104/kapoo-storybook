import{j as e}from"./jsx-runtime-BnHmloXs.js";import{n as k}from"./image-CPWeUWp0.js";import{r}from"./index-r57MSJFk.js";import{B as d}from"./Button-Dh0nduKR.js";import{c as j}from"./utils-jAU0Cazi.js";import{Z as w}from"./ZoomPanner-kPnVijaB.js";import{X as M}from"./x-CXFpmgSz.js";import{c as o}from"./createLucideIcon-rzbM5Zb5.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M5 12h14",key:"1ays0h"}]],N=o("Minus",z);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],q=o("Plus",_);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],T=o("RefreshCw",E);function L({src:u="",open:n,dimType:c="blur",onClose:t,onZoomChange:p,onZoomIn:s,onZoomOut:i,onReset:l,...f}){const[a,h]=r.useState(),v=r.useCallback(()=>{t==null||t()},[t]),y=r.useCallback(()=>{a.zoomIn(),s==null||s()},[a,s]),g=r.useCallback(()=>{a.zoomOut(),i==null||i()},[a,i]),b=r.useCallback(()=>{a.reset(),l==null||l()},[a,l]);return r.useLayoutEffect(()=>{document.body.style.overflow=n===!0?"hidden":""},[n]),r.useEffect(()=>{const m=x=>{x.key==="Escape"&&(t==null||t())};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[t]),r.useLayoutEffect(()=>{n===!0&&(a==null||a.reset())},[n,a]),n===!0?e.jsxs("div",{className:j("fixed left-0 top-0 z-50 size-full",{"backdrop-blur-sm bg-black/80":c==="blur","bg-black/80":c==="modal"}),"data-component":"ImageModal",...f,children:[e.jsx("div",{className:"absolute right-4 top-4 z-10",children:e.jsx(d,{size:"icon",variant:"link",onClick:v,children:e.jsx(M,{color:"white"})})}),e.jsx(w,{controller:h,onZoomChange:p,children:e.jsx("div",{className:"flex size-full items-center justify-center",children:e.jsx("div",{className:"relative size-4/5",children:e.jsx(k,{alt:u,className:"object-contain drop-shadow-lg",src:u,fill:!0})})})}),e.jsxs("div",{className:"dark absolute bottom-4 right-4 z-10 flex flex-col gap-2",children:[e.jsx(d,{size:"icon",variant:"default",onClick:y,children:e.jsx(q,{})}),e.jsx(d,{size:"icon",variant:"default",onClick:g,children:e.jsx(N,{})}),e.jsx(d,{size:"icon",variant:"default",onClick:b,children:e.jsx(T,{})})]})]}):null}L.__docgenInfo={description:`이미지 모달 organism 컴포넌트 반환 메서드

@param {ImageModalProps} param0: ImageModalProps

@returns {React.JSX.Element | null} JSX`,methods:[],displayName:"ImageModal",props:{src:{required:!1,tsType:{name:"string"},description:"이미지 src",defaultValue:{value:"''",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"열림 여부"},dimType:{required:!1,tsType:{name:"union",raw:"'blur' | 'modal' | 'none'",elements:[{name:"literal",value:"'blur'"},{name:"literal",value:"'modal'"},{name:"literal",value:"'none'"}]},description:`딤 타입

@default blur

- blur: 블러 처리
- modal: 어두운 뒷배경 처리
- none: 아무 동작 없음`,defaultValue:{value:"'blur'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"닫기 이벤트 메서드"},onZoomChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(zoom: number) => void",signature:{arguments:[{type:{name:"number"},name:"zoom"}],return:{name:"void"}}},description:"줌 변경 이벤트 메서드"},onZoomIn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"줌 인 이벤트 메서드"},onZoomOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"줌 아웃 이벤트 메서드"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"리셋 이벤트 메서드"}},composes:["DetailedHTMLProps"]};export{L as I};
