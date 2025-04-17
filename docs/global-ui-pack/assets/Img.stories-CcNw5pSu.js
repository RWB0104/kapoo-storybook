import{j as t}from"./jsx-runtime-BnHmloXs.js";import{r as F}from"./index-r57MSJFk.js";import{g as R,a}from"./storybook-CWpip0ZO.js";import{P as j}from"./index-Dj4igp42.js";import{S as A}from"./StorybookTemplate-h4nRBuW0.js";import{I as i}from"./Img-BlzfjOOi.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-LHXsjL4R.js";import"./index-DmhnNIJ0.js";import"./index-Bx25MwHp.js";import"./router-context.shared-runtime-DTbBUFFY.js";import"./image-context-B4sHuKDm.js";import"./use-merged-ref-Cp_uXRvQ.js";import"./utils-jAU0Cazi.js";import"./createLucideIcon-rzbM5Zb5.js";var b="AspectRatio",u=F.forwardRef((e,g)=>{const{ratio:h=1/1,style:x,...y}=e;return t.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/h}%`},"data-radix-aspect-ratio-wrapper":"",children:t.jsx(j.div,{...y,ref:g,style:{...x,position:"absolute",top:0,right:0,bottom:0,left:0}})})});u.displayName=b;var v=u;const l=v,s="Img",O={argTypes:{children:a("children",s),className:a("className",s),id:a("id",s)},component:i,parameters:R("이미지 컴포넌트",["`next/image`의 `Image` 컴포넌트를 확장한 이미지 컴포넌트입니다.","이미지 로드 간 로딩 혹은 오류 상태일 경우, 관련 아이콘을 표현합니다."]),tags:["autodocs"],title:"molecule/Img"},r={args:{alt:"image",fill:!0,src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest"}},o={render:e=>t.jsxs(A,{subtitle:"기본 컴포넌트 예시",title:"Default",children:[t.jsx(l,{ratio:1,children:t.jsx(i,{...e,alt:"",src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest",fill:!0})}),t.jsx(l,{ratio:1,children:t.jsx(i,{...e,alt:"",src:"https://placehold.co/",fill:!0})})]})};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    alt: 'image',
    fill: true,
    src: 'https://placehold.co/600/FFF/31343C?font=raleway&text=Jest'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,d,f;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="기본 컴포넌트 예시" title="Default">
            <AspectRatio ratio={1}>
                <Img {...props} alt="" src="https://placehold.co/600/FFF/31343C?font=raleway&text=Jest" fill />
            </AspectRatio>

            <AspectRatio ratio={1}>
                <Img {...props} alt="" src="https://placehold.co/" fill />
            </AspectRatio>
        </StorybookTemplate>
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const q=["Playground","Default"];export{o as Default,r as Playground,q as __namedExportsOrder,O as default};
