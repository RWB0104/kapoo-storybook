import{j as t}from"./jsx-runtime-Byrd6LBQ.js";import{r as F}from"./iframe-DHWoFZr2.js";import{g as R,a as o}from"./storybook-CWpip0ZO.js";import{P as j}from"./index-vhg6LxV2.js";import{S as A}from"./StorybookTemplate-D3bnewOl.js";import{I as l}from"./Img-C4PLFodq.js";import"./index-CbHFjbNU.js";import"./index-BHDOP_q-.js";import"./use-merged-ref-BTEKxBLR.js";import"./utils-jAU0Cazi.js";import"./createLucideIcon-UXDuXpn7.js";var b="AspectRatio",u=F.forwardRef((e,g)=>{const{ratio:h=1/1,style:x,...y}=e;return t.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/h}%`},"data-radix-aspect-ratio-wrapper":"",children:t.jsx(j.div,{...y,ref:g,style:{...x,position:"absolute",top:0,right:0,bottom:0,left:0}})})});u.displayName=b;var v=u;const i=v,s="Img",_={argTypes:{children:o("children",s),className:o("className",s),id:o("id",s)},component:l,parameters:R("이미지 컴포넌트",["`next/image`의 `Image` 컴포넌트를 확장한 이미지 컴포넌트입니다.","이미지 로드 간 로딩 혹은 오류 상태일 경우, 관련 아이콘을 표현합니다."]),tags:["autodocs"],title:"molecule/Img"},r={args:{alt:"image",fill:!0,src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest"}},a={render:e=>t.jsxs(A,{subtitle:"기본 컴포넌트 예시",title:"Default",children:[t.jsx(i,{ratio:1,children:t.jsx(l,{...e,alt:"",src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest",fill:!0})}),t.jsx(i,{ratio:1,children:t.jsx(l,{...e,alt:"",src:"https://placehold.co/",fill:!0})})]})};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    alt: 'image',
    fill: true,
    src: 'https://placehold.co/600/FFF/31343C?font=raleway&text=Jest'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,d,f;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="기본 컴포넌트 예시" title="Default">
            <AspectRatio ratio={1}>
                <Img {...props} alt="" src="https://placehold.co/600/FFF/31343C?font=raleway&text=Jest" fill />
            </AspectRatio>

            <AspectRatio ratio={1}>
                <Img {...props} alt="" src="https://placehold.co/" fill />
            </AspectRatio>
        </StorybookTemplate>
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const $=["Playground","Default"];export{a as Default,r as Playground,$ as __namedExportsOrder,_ as default};
