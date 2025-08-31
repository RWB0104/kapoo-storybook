import{j as t}from"./jsx-runtime-D0140-Ba.js";import{r as w}from"./iframe-DQo0Yy5t.js";import{B as D}from"./Button-yu0B-YSS.js";import{g as I,S as a,a as l}from"./storybook-CWpip0ZO.js";import{S as i}from"./StorybookTemplate-B6hF5noc.js";import{I as U}from"./Img-WAGtlwFQ.js";import{I as C}from"./ImageModal-BMcWPf1g.js";import"./utils-jAU0Cazi.js";import"./use-merged-ref-DvDBs2PO.js";import"./createLucideIcon-CVKzNqGz.js";import"./ZoomPanner-CqdmHqqt.js";import"./x-DhMyvnvE.js";import"./minus-aJ4lTGIf.js";const{action:X}=__STORYBOOK_MODULE_ACTIONS__,r="GoogleAnalyticsProvider",G=["https://wallpapercat.com/w/full/2/c/8/5825739.jpg","https://t3.ftcdn.net/jpg/05/58/61/32/360_F_558613274_Z1zbjnHZKjpnTvvsjfZzYXk2TIeUl54a.jpg","https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3","https://i.redd.it/d2hd73xxwvaa1.jpg","https://www.lifewire.com/thmb/LpYMzRCsv3Cv6xXiC7Z7lF23tpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/passage_wallpaper_by_trenchmaker-d4pp3zd-5919d0673df78cf5fa42884c.jpg"],V={argTypes:{children:l("children",r),className:l("className",r),dimType:{table:{category:r,subcategory:a.PROP,type:{summary:"blur | modal | none"}}},id:l("id",r),onClose:{table:{category:r,subcategory:a.EV}},open:{table:{category:r,subcategory:a.PROP}},src:{table:{category:r,subcategory:a.PROP}}},component:C,parameters:I("이미지 모달 컴포넌트",["이미지에 특화된 이미지 모달 컴포넌트입니다. 원하는 이미지를 모달로 표현하여 사용자에게 높은 이미지 접근성을 제공합니다.","또한 내부적으로 `ZoomPanner` 컴포넌트를 포함하고 있어, 사진의 뷰포트를 원하는대로 조작할 수 있습니다.","`dimType`을 조작하여 원하는 모달의 포커싱을 지정할 수 있습니다."]),tags:["autodocs"],title:"organism/ImageModal"};function s(e){const[o,d]=w.useState(!1),v=()=>{d(!0)},O=()=>{var u;(u=e.onClose)==null||u.call(e),d(!1)};return t.jsxs("div",{className:"flex flex-col gap-4","data-component":"Template",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(U,{alt:"thumbnail",className:"rounded-lg object-cover backdrop-blur",fill:!0,src:e.src??""})}),t.jsx(D,{onClick:v,children:"View"}),t.jsx(C,{...e,onClose:O,open:o})]})}const m={args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:s},c={argTypes:{src:{control:{disable:!0}}},render:e=>t.jsx(i,{subtitle:"다양한 이미지 소스 예시",title:"Src",children:G.map(o=>w.createElement(s,{...e,key:o,src:o}))})},n={args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},argTypes:{dimType:{control:{disable:!0}}},render:e=>t.jsxs(i,{subtitle:"다양한 Dimmer 타입 예시",title:"DimType",children:[t.jsx(s,{...e}),t.jsx(s,{...e,dimType:"modal"}),t.jsx(s,{...e,dimType:"none"})]})},p={args:{src:"https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg"},render:e=>t.jsx(i,{subtitle:"다양한 Dimmer 타입 예시",title:"DimType",children:t.jsx(s,{...e,onClose:X("onClose")})})};var g,y,h;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  render: Template
}`,...(h=(y=m.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,b,f;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,x,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  argTypes: {
    dimType: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 Dimmer 타입 예시" title="DimType">
            <Template {...props} />
            <Template {...props} dimType="modal" />
            <Template {...props} dimType="none" />
        </StorybookTemplate>
}`,...(P=(x=n.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var S,k,_;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg'
  },
  render: props => <StorybookTemplate subtitle="다양한 Dimmer 타입 예시" title="DimType">
            <Template {...props} onClose={action('onClose')} />
        </StorybookTemplate>
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const H=["Playground","Src","DimType","OnClose"];export{n as DimType,p as OnClose,m as Playground,c as Src,H as __namedExportsOrder,V as default};
