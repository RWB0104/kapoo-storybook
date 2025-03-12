import{j as e}from"./jsx-runtime-BnHmloXs.js";import{r as s}from"./index-XLJyvO9z.js";import{a as A}from"./index-CtjQfPVU.js";import{n as I}from"./image-DyuacEGA.js";import{g as B,S as u,a as T}from"./storybook-hTxjENzG.js";import{B as m}from"./Button-BXKyNyrb.js";import{S as j}from"./StorybookTemplate-h4nRBuW0.js";import{T as F}from"./Tile-CLVcBFIU.js";import{c as J}from"./utils-jAU0Cazi.js";import{Z as Y}from"./ZoomPanner-B12NORzI.js";import{X as Z}from"./x-CK67zZcB.js";import{c as v}from"./createLucideIcon-COKISR50.js";import"./jsx-runtime-BEh3FTX5.js";import"./v4-CtRu48qb.js";import"./image-context-D6sKUxp1.js";import"./index-CJNmP7Ls.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M5 12h14",key:"1ays0h"}]],K=v("Minus",$);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],W=v("Plus",Q);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ae=v("RefreshCw",ee);function x({src:a,open:o,dimType:l="blur",onClose:t,onZoomChange:b,onZoomIn:n,onZoomOut:d,onReset:p,...L}){const[r,G]=s.useState(),O=s.useCallback(()=>{t==null||t()},[t]),U=s.useCallback(()=>{r.zoomIn(),n==null||n()},[r,n]),R=s.useCallback(()=>{r.zoomOut(),d==null||d()},[r,d]),H=s.useCallback(()=>{r.reset(),p==null||p()},[r,p]);return s.useEffect(()=>{const k=V=>{V.key==="Escape"&&(t==null||t())};return window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}},[t]),s.useLayoutEffect(()=>{o===!0&&(r==null||r.reset())},[o,r]),o===!0?e.jsxs("div",{className:J("fixed left-0 top-0 z-30 size-full",{"backdrop-blur-sm bg-black/80":l==="blur","bg-black/80":l==="modal"}),"data-component":"ImageModal",...L,children:[e.jsx("div",{className:"absolute right-4 top-4 z-10",children:e.jsx(m,{size:"icon",variant:"link",onClick:O,children:e.jsx(Z,{color:"white"})})}),e.jsx(Y,{controller:G,onZoomChange:b,children:e.jsx("div",{className:"flex size-full items-center justify-center",children:e.jsx("div",{className:"relative size-4/5",children:e.jsx(I,{alt:a,className:"object-contain drop-shadow-lg",src:a,fill:!0})})})}),e.jsxs("div",{className:"dark absolute bottom-4 right-4 z-10 flex flex-col gap-2",children:[e.jsx(m,{size:"icon",variant:"default",onClick:U,children:e.jsx(W,{})}),e.jsx(m,{size:"icon",variant:"default",onClick:R,children:e.jsx(K,{})}),e.jsx(m,{size:"icon",variant:"default",onClick:H,children:e.jsx(ae,{})})]})]}):null}x.__docgenInfo={description:`이미지 모달 organism 컴포넌트 반환 메서드

@param {ImageModalProps} param0: ImageModalProps

@returns {React.JSX.Element | null} JSX`,methods:[],displayName:"ImageModal",props:{src:{required:!0,tsType:{name:"string"},description:"이미지 src"},open:{required:!1,tsType:{name:"boolean"},description:"열림 여부"},dimType:{required:!1,tsType:{name:"union",raw:"'blur' | 'modal' | 'none'",elements:[{name:"literal",value:"'blur'"},{name:"literal",value:"'modal'"},{name:"literal",value:"'none'"}]},description:`딤 타입

@default blur

- blur: 블러 처리
- modal: 어두운 뒷배경 처리
- none: 아무 동작 없음`,defaultValue:{value:"'blur'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"닫기 이벤트 메서드"},onZoomChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(zoom: number) => void",signature:{arguments:[{type:{name:"number"},name:"zoom"}],return:{name:"void"}}},description:"줌 변경 이벤트 메서드"},onZoomIn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"줌 인 이벤트 메서드"},onZoomOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"줌 아웃 이벤트 메서드"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"리셋 이벤트 메서드"}},composes:["DetailedHTMLProps"]};const i="GoogleAnalyticsProvider",te=["https://wallpapercat.com/w/full/2/c/8/5825739.jpg","https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg","https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3","https://i.redd.it/d2hd73xxwvaa1.jpg","https://www.lifewire.com/thmb/LpYMzRCsv3Cv6xXiC7Z7lF23tpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/passage_wallpaper_by_trenchmaker-d4pp3zd-5919d0673df78cf5fa42884c.jpg"],Te={argTypes:{children:T("children",i),className:T("className",i),dimType:{table:{category:i,subcategory:u.PROP,type:{summary:"blur | modal | none"}}},id:T("id",i),onClose:{table:{category:i,subcategory:u.EV}},open:{table:{category:i,subcategory:u.PROP}},src:{table:{category:i,subcategory:u.PROP}}},component:x,parameters:B("이미지 모달 컴포넌트",["이미지에 특화된 이미지 모달 컴포넌트입니다. 원하는 이미지를 모달로 표현하여 사용자에게 높은 이미지 접근성을 제공합니다.","또한 내부적으로 `ZoomPanner` 컴포넌트를 포함하고 있어, 사진의 뷰포트를 원하는대로 조작할 수 있습니다.","`dimType`을 조작하여 원하는 모달의 포커싱을 지정할 수 있습니다."]),tags:["autodocs"],title:"organism/ImageModal"};function c(a){const[o,l]=s.useState(!1),t=()=>{l(!0)},b=()=>{var n;(n=a.onClose)==null||n.call(a),l(!1)};return e.jsxs("div",{className:"flex flex-col gap-4","data-component":"Template",children:[e.jsx(F,{children:e.jsx(I,{alt:"thumbnail",className:"rounded-lg object-cover backdrop-blur",src:a.src,fill:!0})}),e.jsx(m,{onClick:t,children:"View"}),e.jsx(x,{...a,open:o,onClose:b})]})}const g={args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:c},f={argTypes:{src:{control:{disable:!0}}},render:a=>e.jsx(j,{subtitle:"다양한 이미지 소스 예시",title:"Src",children:te.map(o=>s.createElement(c,{...a,key:o,src:o}))})},h={argTypes:{dimType:{control:{disable:!0}}},args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:a=>e.jsxs(j,{subtitle:"다양한 Dimmer 타입 예시",title:"DimType",children:[e.jsx(c,{...a}),e.jsx(c,{...a,dimType:"modal"}),e.jsx(c,{...a,dimType:"none"})]})},y={args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:a=>e.jsx(j,{subtitle:"다양한 Dimmer 타입 예시",title:"DimType",children:e.jsx(c,{...a,onClose:A("onClose")})})};var w,P,S;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  render: Template
}`,...(S=(P=g.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var _,z,C;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    src: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 이미지 소스 예시" title="Src">
            {images.map(image => <Template {...props} key={image} src={image} />)}
        </StorybookTemplate>
}`,...(C=(z=f.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var M,N,D;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  argTypes: {
    dimType: {
      control: {
        disable: true
      }
    }
  },
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  render: props => <StorybookTemplate subtitle="다양한 Dimmer 타입 예시" title="DimType">
            <Template {...props} />
            <Template {...props} dimType="modal" />
            <Template {...props} dimType="none" />
        </StorybookTemplate>
}`,...(D=(N=h.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,X,q;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  render: props => <StorybookTemplate subtitle="다양한 Dimmer 타입 예시" title="DimType">
            <Template {...props} onClose={action('onClose')} />
        </StorybookTemplate>
}`,...(q=(X=y.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const je=["Playground","Src","DimType","OnClose"];export{h as DimType,y as OnClose,g as Playground,f as Src,je as __namedExportsOrder,Te as default};
