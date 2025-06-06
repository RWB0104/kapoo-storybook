import{j as a}from"./jsx-runtime-BnHmloXs.js";import{a as j}from"./index-CtjQfPVU.js";import"./index-BCzbi48b.js";import{g as C,S as l,a as p}from"./storybook-CWpip0ZO.js";import{S as i}from"./StorybookTemplate-h4nRBuW0.js";import{M as r}from"./MarkdownImg-Chs5i1LR.js";import"./jsx-runtime-BEh3FTX5.js";import"./v4-CtRu48qb.js";import"./Typography-DMH6rXmA.js";import"./utils-jAU0Cazi.js";const t="MarkdownImg",V={argTypes:{alt:{description:"이미지 설명",table:{category:t,subcategory:l.PROP}},className:p("className",t),id:p("id",t),onImageClick:{control:{disable:!0},description:"이미지 클릭 메서드",table:{category:t,subcategory:l.PROP}},src:{description:"이미지 URL",table:{category:t,subcategory:l.PROP}}},component:r,parameters:C("react-query 프로바이더 컴포넌트",["[@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/overview)를 사용하기 위한 프로바이더 컴포넌트입니다.","단순 로직을 위한 컴포넌트로, 별도의 디자인이 존재하지 않습니다."]),tags:["autodocs"],title:"molecule/MarkdownImg"},s={args:{alt:"alt 테스트",src:"https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png"}},c={argTypes:{src:{control:{disable:!0}}},render:e=>a.jsxs(i,{subtitle:"다양한 소스가 적용된 예시",title:"Src",children:[a.jsx(r,{...e,src:"https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png"}),a.jsx(r,{...e,src:"https://blog.kakaocdn.net/dn/bKSgNg/btrU00xCcb6/FUFVkyxZ0k36DKf4AhCS70/img.png"}),a.jsx(r,{...e,src:"https://velog.velcdn.com/images/sj_yun/post/a63a7617-5c05-4616-b532-ab9b5ad7bbf5/image.png"}),a.jsx(r,{...e,src:"https://pluginicons.craft-cdn.com/scssqTY8srJEesn2VFiUV73mUCyRIZsfXfDj2eOY.svg?1528091210"})]})},o={argTypes:{alt:{control:{disable:!0}}},args:{src:"https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png"},render:e=>a.jsxs(i,{subtitle:"다양한 설명이 적용된 예시. null을 지정할 경우 설명이 생략됨",title:"Alt",children:[a.jsx(r,{...e,alt:"Storybook Page"}),a.jsx(r,{...e,alt:"null"})]})},n={args:{src:"https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png"},render:e=>a.jsx(i,{subtitle:"이미지 클릭 이벤트가 적용된 예시 (Actions 탭 참조)",title:"OnImageClick",container:!0,children:a.jsx(r,{...e,onImageClick:j("onImageClick")})})};var m,g,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    alt: 'alt 테스트',
    src: 'https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png'
  }
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var b,u,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    src: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 소스가 적용된 예시" title="Src">
            <MarkdownImg {...props} src="https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png" />
            <MarkdownImg {...props} src="https://blog.kakaocdn.net/dn/bKSgNg/btrU00xCcb6/FUFVkyxZ0k36DKf4AhCS70/img.png" />
            <MarkdownImg {...props} src="https://velog.velcdn.com/images/sj_yun/post/a63a7617-5c05-4616-b532-ab9b5ad7bbf5/image.png" />
            <MarkdownImg {...props} src="https://pluginicons.craft-cdn.com/scssqTY8srJEesn2VFiUV73mUCyRIZsfXfDj2eOY.svg?1528091210" />
        </StorybookTemplate>
}`,...(f=(u=c.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var k,y,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    alt: {
      control: {
        disable: true
      }
    }
  },
  args: {
    src: 'https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png'
  },
  render: props => <StorybookTemplate subtitle="다양한 설명이 적용된 예시. null을 지정할 경우 설명이 생략됨" title="Alt">
            <MarkdownImg {...props} alt="Storybook Page" />
            <MarkdownImg {...props} alt="null" />
        </StorybookTemplate>
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var I,h,x;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.palms.blog/official/image/9a76cb37-15fa-4b8c-9d18-c92c50574e9c.png'
  },
  render: props => <StorybookTemplate subtitle="이미지 클릭 이벤트가 적용된 예시 (Actions 탭 참조)" title="OnImageClick" container>
            <MarkdownImg {...props} onImageClick={action('onImageClick')} />
        </StorybookTemplate>
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const q=["Playground","Src","Alt","OnImageClick"];export{o as Alt,n as OnImageClick,s as Playground,c as Src,q as __namedExportsOrder,V as default};
