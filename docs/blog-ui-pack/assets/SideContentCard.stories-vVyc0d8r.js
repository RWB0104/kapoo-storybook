import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-CKMdfnwt.js";import{g as I,S as a}from"./storybook-CWpip0ZO.js";import{S as c}from"./StorybookTemplate-h4nRBuW0.js";import{L as N,T as m,n as R}from"./Typography-DPKB2Aff.js";import{c as u}from"./utils-jAU0Cazi.js";import{C as _,a as z}from"./circle-arrow-right-CXU6_5U5.js";import"./jsx-runtime-BEh3FTX5.js";import"./segment-CIEV7OGa.js";import"./index-BY638psU.js";import"./add-base-path-Br4_xqsT.js";function r({title:t,thumbnail:P,direction:o="left",...D}){return e.jsx(N,{"data-component":"SideContentCard",...D,children:e.jsxs("div",{className:"group relative size-full overflow-hidden rounded shadow",children:[e.jsxs("div",{className:u("flex relative z-10 text-white bg-black/50 size-full rounded items-center gap-6 p-6",{"flex-row-reverse":o==="right"}),children:[e.jsxs("div",{className:"shrink-0",children:[o==="left"&&e.jsx(_,{size:40}),o==="right"&&e.jsx(z,{size:40})]}),e.jsxs("div",{className:u("flex flex-col gap-1",{"items-end":o==="right"}),children:[e.jsxs(m,{className:"text-amber-400",variant:"small",children:[o==="left"&&"이전 게시글",o==="right"&&"다음 게시글"]}),e.jsx(m,{children:t})]})]}),e.jsx(R,{alt:t,className:"duration-300 group-hover:scale-110",objectFit:"cover",src:P,fill:!0})]})})}r.__docgenInfo={description:`사이드 컨텐츠 카드 molecule 컴포넌트 반환 메서드

@param {SideContentCardProps} param0: SideContentCardProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"SideContentCard",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},thumbnail:{required:!0,tsType:{name:"string"},description:"썸네일"},direction:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`방향

@default left`,defaultValue:{value:"'left'",computed:!1}}},composes:["LinkProps"]};const s="SideContentCard",M={argTypes:{direction:{table:{category:s,subcategory:a.PROP}},href:{description:"링크",table:{category:s,subcategory:a.PROP}},thumbnail:{table:{category:s,subcategory:a.PROP}},title:{table:{category:s,subcategory:a.PROP}}},args:{href:"#",thumbnail:"https://placehold.co/600/32CD32/FFFFFF?font=raleway&text=Lorem Ipsum",title:"Lorem Ipsum"},component:r,parameters:I("GA4 프로바이더 컴포넌트",["Google Analytics 4 프로바이더 컴포넌트입니다.","해당 컴포넌트는 로직 중심의 컴포넌트로, 별도의 디자인이 없어 미리보기가 지원되지 않습니다."]),tags:["autodocs"],title:"molecule/SideContentCard"},n={},l={argTypes:{direction:{control:{disable:!0}}},render:t=>e.jsxs(c,{subtitle:"왼쪽/오른쪽 방향이 적용된 컴포넌트",title:"Direction",children:[e.jsx(r,{...t}),e.jsx(r,{...t,direction:"right"})]})},i={argTypes:{thumbnail:{control:{disable:!0}}},render:t=>e.jsxs(c,{subtitle:"다양한 썸네일이 적용된 컴포넌트",title:"Thumbnail",children:[e.jsx(r,{...t,thumbnail:"https://placehold.co/600/32CD32/FFFFFF?font=raleway&text=Lorem Ipsum"}),e.jsx(r,{...t,thumbnail:"https://placehold.co/600/FFFFFF/32CD32?font=raleway&text=Lorem+Ipsum"}),e.jsx(r,{...t,thumbnail:"https://placehold.co/600/32CD32/000000?font=raleway&text=Lorem+Ipsum"})]})},d={argTypes:{title:{control:{disable:!0}}},render:t=>e.jsxs(c,{subtitle:"다양한 제목이 적용된 컴포넌트",title:"Title",children:[e.jsx(r,{...t,title:"Lorem Ipsum"}),e.jsx(r,{...t,title:"Storybook"}),e.jsx(r,{...t,title:"Next.js"})]})},p={argTypes:{href:{control:{disable:!0}}},render:t=>e.jsxs(c,{subtitle:"다양한 링크가 적용된 컴포넌트",title:"Href",children:[e.jsx(r,{...t,href:"/1"}),e.jsx(r,{...t,href:"/2"}),e.jsx(r,{...t,href:"/3"})]})};var h,b,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,C,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    direction: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="왼쪽/오른쪽 방향이 적용된 컴포넌트" title="Direction">
            <SideContentCard {...props} />
            <SideContentCard {...props} direction="right" />
        </StorybookTemplate>
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,S,F;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    thumbnail: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 썸네일이 적용된 컴포넌트" title="Thumbnail">
            <SideContentCard {...props} thumbnail="https://placehold.co/600/32CD32/FFFFFF?font=raleway&text=Lorem Ipsum" />
            <SideContentCard {...props} thumbnail="https://placehold.co/600/FFFFFF/32CD32?font=raleway&text=Lorem+Ipsum" />
            <SideContentCard {...props} thumbnail="https://placehold.co/600/32CD32/000000?font=raleway&text=Lorem+Ipsum" />
        </StorybookTemplate>
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var T,j,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    title: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 제목이 적용된 컴포넌트" title="Title">
            <SideContentCard {...props} title="Lorem Ipsum" />
            <SideContentCard {...props} title="Storybook" />
            <SideContentCard {...props} title="Next.js" />
        </StorybookTemplate>
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var v,w,L;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    href: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 링크가 적용된 컴포넌트" title="Href">
            <SideContentCard {...props} href="/1" />
            <SideContentCard {...props} href="/2" />
            <SideContentCard {...props} href="/3" />
        </StorybookTemplate>
}`,...(L=(w=p.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const Q=["Playground","Direction","Thumbnail","Title","Href"];export{l as Direction,p as Href,n as Playground,i as Thumbnail,d as Title,Q as __namedExportsOrder,M as default};
