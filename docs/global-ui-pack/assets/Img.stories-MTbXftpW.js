import{j as t}from"./jsx-runtime-D0140-Ba.js";import{r as F}from"./iframe-DQo0Yy5t.js";import{P as R}from"./index-BXfqB6iL.js";import{g as j,a as o}from"./storybook-CWpip0ZO.js";import{S as A}from"./StorybookTemplate-B6hF5noc.js";import{I as l}from"./Img-WAGtlwFQ.js";import"./index-CVIRL0D4.js";import"./utils-jAU0Cazi.js";import"./use-merged-ref-DvDBs2PO.js";import"./createLucideIcon-CVKzNqGz.js";var b="AspectRatio",u=F.forwardRef((e,g)=>{const{ratio:h=1/1,style:x,...y}=e;return t.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/h}%`},"data-radix-aspect-ratio-wrapper":"",children:t.jsx(R.div,{...y,ref:g,style:{...x,position:"absolute",top:0,right:0,bottom:0,left:0}})})});u.displayName=b;var v=u;const i=v,s="Img",k={argTypes:{children:o("children",s),className:o("className",s),id:o("id",s)},component:l,parameters:j("이미지 컴포넌트",["`next/image`의 `Image` 컴포넌트를 확장한 이미지 컴포넌트입니다.","이미지 로드 간 로딩 혹은 오류 상태일 경우, 관련 아이콘을 표현합니다."]),tags:["autodocs"],title:"molecule/Img"},r={args:{alt:"image",fill:!0,src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest"}},a={render:e=>t.jsxs(A,{subtitle:"기본 컴포넌트 예시",title:"Default",children:[t.jsx(i,{ratio:1,children:t.jsx(l,{...e,alt:"",fill:!0,src:"https://placehold.co/600/FFF/31343C?font=raleway&text=Jest"})}),t.jsx(i,{ratio:1,children:t.jsx(l,{...e,alt:"",fill:!0,src:"https://placehold.co/"})})]})};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    alt: 'image',
    fill: true,
    src: 'https://placehold.co/600/FFF/31343C?font=raleway&text=Jest'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,d,f;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="기본 컴포넌트 예시" title="Default">
            <AspectRatio ratio={1}>
                <Img {...props} alt="" fill src="https://placehold.co/600/FFF/31343C?font=raleway&text=Jest" />
            </AspectRatio>

            <AspectRatio ratio={1}>
                <Img {...props} alt="" fill src="https://placehold.co/" />
            </AspectRatio>
        </StorybookTemplate>
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const _=["Playground","Default"];export{a as Default,r as Playground,_ as __namedExportsOrder,k as default};
