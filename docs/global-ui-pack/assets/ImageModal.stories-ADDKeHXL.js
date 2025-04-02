import{j as t}from"./jsx-runtime-BnHmloXs.js";import{r as v}from"./index-r57MSJFk.js";import{a as O}from"./index-CtjQfPVU.js";import{g as X,S as a,a as l}from"./storybook-CWpip0ZO.js";import{B as G}from"./Button-Dh0nduKR.js";import{S as i}from"./StorybookTemplate-h4nRBuW0.js";import{I}from"./Img-C7u5DSiX.js";import{I as C}from"./ImageModal-DEETcJW7.js";import"./jsx-runtime-BEh3FTX5.js";import"./v4-CtRu48qb.js";import"./index-Bx25MwHp.js";import"./utils-jAU0Cazi.js";import"./router-context.shared-runtime-DTbBUFFY.js";import"./index-DmhnNIJ0.js";import"./image-context-B4sHuKDm.js";import"./use-merged-ref-Cp_uXRvQ.js";import"./createLucideIcon-rzbM5Zb5.js";import"./ZoomPanner-kPnVijaB.js";import"./x-CXFpmgSz.js";const r="GoogleAnalyticsProvider",U=["https://wallpapercat.com/w/full/2/c/8/5825739.jpg","https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg","https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3","https://i.redd.it/d2hd73xxwvaa1.jpg","https://www.lifewire.com/thmb/LpYMzRCsv3Cv6xXiC7Z7lF23tpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/passage_wallpaper_by_trenchmaker-d4pp3zd-5919d0673df78cf5fa42884c.jpg"],ee={argTypes:{children:l("children",r),className:l("className",r),dimType:{table:{category:r,subcategory:a.PROP,type:{summary:"blur | modal | none"}}},id:l("id",r),onClose:{table:{category:r,subcategory:a.EV}},open:{table:{category:r,subcategory:a.PROP}},src:{table:{category:r,subcategory:a.PROP}}},component:C,parameters:X("이미지 모달 컴포넌트",["이미지에 특화된 이미지 모달 컴포넌트입니다. 원하는 이미지를 모달로 표현하여 사용자에게 높은 이미지 접근성을 제공합니다.","또한 내부적으로 `ZoomPanner` 컴포넌트를 포함하고 있어, 사진의 뷰포트를 원하는대로 조작할 수 있습니다.","`dimType`을 조작하여 원하는 모달의 포커싱을 지정할 수 있습니다."]),tags:["autodocs"],title:"organism/ImageModal"};function o(e){const[s,d]=v.useState(!1),_=()=>{d(!0)},D=()=>{var u;(u=e.onClose)==null||u.call(e),d(!1)};return t.jsxs("div",{className:"flex flex-col gap-4","data-component":"Template",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(I,{alt:"thumbnail",className:"rounded-lg object-cover backdrop-blur",src:e.src??"",fill:!0})}),t.jsx(G,{onClick:_,children:"View"}),t.jsx(C,{...e,open:s,onClose:D})]})}const m={args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:o},p={argTypes:{src:{control:{disable:!0}}},render:e=>t.jsx(i,{subtitle:"다양한 이미지 소스 예시",title:"Src",children:U.map(s=>v.createElement(o,{...e,key:s,src:s}))})},c={argTypes:{dimType:{control:{disable:!0}}},args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:e=>t.jsxs(i,{subtitle:"다양한 Dimmer 타입 예시",title:"DimType",children:[t.jsx(o,{...e}),t.jsx(o,{...e,dimType:"modal"}),t.jsx(o,{...e,dimType:"none"})]})},n={args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:e=>t.jsx(i,{subtitle:"다양한 Dimmer 타입 예시",title:"DimType",children:t.jsx(o,{...e,onClose:O("onClose")})})};var g,y,h;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  render: Template
}`,...(h=(y=m.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,f,T;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(f=p.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var j,x,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(x=c.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var S,k,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  render: props => <StorybookTemplate subtitle="다양한 Dimmer 타입 예시" title="DimType">
            <Template {...props} onClose={action('onClose')} />
        </StorybookTemplate>
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const te=["Playground","Src","DimType","OnClose"];export{c as DimType,n as OnClose,m as Playground,p as Src,te as __namedExportsOrder,ee as default};
