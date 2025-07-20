import{j as s}from"./jsx-runtime-BnHmloXs.js";import{r as i}from"./index-BzsBhNef.js";import"./github-CZ9b3_v3.js";import{g as W,S as a}from"./storybook-CWpip0ZO.js";import{S as p}from"./StorybookTemplate-h4nRBuW0.js";import{C as o}from"./ContentCard-CH7z3Cpe.js";import"./jsx-runtime-BEh3FTX5.js";import"./link-k0xUX2an.js";import"./segment-CIEV7OGa.js";import"./add-base-path-zrht_gGq.js";import"./router-context.shared-runtime-teXhwerE.js";import"./use-merged-ref-b3ysbXhA.js";import"./Img-B_mh2clp.js";import"./utils-jAU0Cazi.js";import"./index-6NmxKIG3.js";import"./image-context-Da6Wcnuc.js";import"./AspectRatio-DDDRmAbl.js";import"./index-llW7FSMo.js";import"./index-DU-vGjmk.js";import"./index-89FpGcWz.js";import"./ContentTag-B6wAOjq6.js";import"./index-D_ldaswd.js";const n="ContentCard",xe={argTypes:{category:{description:"카테고리",table:{category:n,subcategory:a.PROP},type:{name:"string",required:!0}},description:{description:"설명",table:{category:n,subcategory:a.PROP},type:{name:"string",required:!0}},href:{description:"링크",table:{category:n,subcategory:a.PROP},type:{name:"string",required:!0}},loading:{description:"로딩 여부 (로딩 여부가 true일 경우, 나머지 프로퍼티는 optional 처리됨)",table:{category:n,subcategory:a.PROP},type:{name:"boolean",required:!0}},tags:{description:"태그",table:{category:n,subcategory:a.PROP,type:{summary:"string[]"}},type:{name:"array",required:!0,value:{name:"string"}}},thumbnail:{description:"썸네일",table:{category:n,subcategory:a.PROP},type:{name:"string",required:!0}},timestamp:{description:"날짜",table:{category:n,subcategory:a.PROP},type:{name:"number",required:!0}},title:{description:"타이틀",table:{category:n,subcategory:a.PROP},type:{name:"string",required:!0}},type:{control:"select",description:"타입",options:["posts","projects"],table:{category:n,subcategory:a.PROP},type:{name:"string",required:!0}}},args:{category:"React",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim exercitationem, blanditiis amet doloribus doloremque, ratione recusandae nobis tenetur assumenda officiis ipsam molestias provident ullam inventore et itaque molestiae autem.",href:"/",tags:["React","Next.js","Storybook","TypeScript"],thumbnail:"https://placehold.co/600/FFF/31343C?font=raleway&text=Thumb",timestamp:1704132245e3,title:"Lorem Ipsum",type:"posts"},component:o,parameters:W("컨텐츠 카드 컴포넌트",["블로그의 컨텐츠를 표현하는 카드 컴포넌트입니다.","마크다운의 메타 정보를 토대로 컨텐츠의 정보를 표현합니다."]),tags:["autodocs"],title:"organism/ContentCard"},X=["posts","projects"],Y=["React","TypeScript","NextJS","CS"],Z=["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eaque aliquid rerum earum, consectetur labore est voluptas dolore inventore blanditiis! Minima soluta fuga placeat esse inventore recusandae commodi impedit nesciunt.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore laboriosam nulla, delectus ullam tempore, similique impedit laudantium ratione dolores repellat ex facilis, quidem fuga. Nostrum suscipit magni autem ratione.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sunt cupiditate quam est aperiam, omnis debitis minus consequatur placeat molestiae, et officia dolorem. Voluptatibus error animi nesciunt, amet dolore modi.","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quis pariatur deserunt dolore. Minima, eligendi! Soluta quaerat consectetur reiciendis sunt quisquam facilis cupiditate ipsam officiis doloremque. Quia laudantium modi sit!"],ee=[4,10,6,2],te=["https://placehold.co/600/6A5ACD/FFFFFF?font=raleway&text=1","https://placehold.co/600/FF6347/2F4F4F?font=raleway&text=2","https://placehold.co/600/32CD32/FFFFFF?font=raleway&text=3","https://placehold.co/600/FF7F50/2C3E50?font=raleway&text=4"],re=[Date.now(),Date.now()-864e5*13,Date.now()-864e5*183,Date.now()-864e5*724],m={},l={argTypes:{category:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 카테고리가 적용된 예시",title:"Category",children:Y.map(e=>i.createElement(o,{...t,category:e,key:e}))})},c={argTypes:{description:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 설명이 적용된 예시",title:"Description",children:Z.map(e=>i.createElement(o,{...t,description:e,key:e}))})},u={argTypes:{type:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"타입이 적용된 예시",title:"Type",children:X.map((e,r)=>i.createElement(o,{...t,href:`/page/${r+1}`,key:e,type:e}))})},d={argTypes:{href:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 링크가 적용된 예시 (Actions 탭 참조)",title:"Href",children:Array.from({length:4}).map((e,r)=>i.createElement(o,{...t,href:`/page/${r+1}`,key:r}))})},y={argTypes:{tags:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 태그가 적용된 예시",title:"Tag",children:ee.map(e=>i.createElement(o,{...t,key:e,tags:Array.from({length:e}).map((r,U)=>`태그 ${U+1}`)}))})},g={argTypes:{thumbnail:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 썸네일이 적용된 예시",title:"Thumbnail",children:te.map(e=>i.createElement(o,{...t,key:e,thumbnail:e}))})},b={argTypes:{timestamp:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 작성일이 적용된 예시. 경과된 시간에 따라 경과일을 병기함",title:"Timestamp",children:re.map(e=>i.createElement(o,{...t,key:e,timestamp:e}))})},T={argTypes:{title:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 제목이 적용된 예시",title:"Title",children:Array.from({length:4}).map((e,r)=>i.createElement(o,{...t,key:r,title:`Lorem Ipsum ${r+1}`}))})},h={argTypes:{loading:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"로딩 중인 컴포넌트 예시",title:"Loading",children:Array.from({length:4}).map((e,r)=>i.createElement(o,{...t,key:r,title:`Lorem Ipsum ${r+1}`,loading:!0}))})};var C,f,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,P,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    category: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="다양한 카테고리가 적용된 예시" title="Category">
            {categories.map(category => <ContentCard {...props} category={category} key={category} />)}
        </StorybookTemplate>
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var x,F,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  argTypes: {
    description: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="다양한 설명이 적용된 예시" title="Description">
            {descriptions.map(description => <ContentCard {...props} description={description} key={description} />)}
        </StorybookTemplate>
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var L,A,E;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    type: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="타입이 적용된 예시" title="Type">
            {types.map((type, href) => <ContentCard {...props} href={\`/page/\${href + 1}\`} key={type} type={type} />)}
        </StorybookTemplate>
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var R,D,O;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  argTypes: {
    href: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="다양한 링크가 적용된 예시 (Actions 탭 참조)" title="Href">
            {Array.from({
      length: 4
    }).map((i, href) => <ContentCard {...props} href={\`/page/\${href + 1}\`} key={href} />)}
        </StorybookTemplate>
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var $,w,v;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  argTypes: {
    tags: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="다양한 태그가 적용된 예시" title="Tag">
            {tags.map(tag => <ContentCard {...props} key={tag} tags={Array.from({
      length: tag
    }).map((i, j) => \`태그 \${j + 1}\`)} />)}
        </StorybookTemplate>
}`,...(v=(w=y.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var I,H,M;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    thumbnail: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="다양한 썸네일이 적용된 예시" title="Thumbnail">
            {thumbnails.map(thumbnail => <ContentCard {...props} key={thumbnail} thumbnail={thumbnail} />)}
        </StorybookTemplate>
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,_,J;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    timestamp: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="다양한 작성일이 적용된 예시. 경과된 시간에 따라 경과일을 병기함" title="Timestamp">
            {timestamps.map(timestamp => <ContentCard {...props} key={timestamp} timestamp={timestamp} />)}
        </StorybookTemplate>
}`,...(J=(_=b.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Q,V,z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  argTypes: {
    title: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="다양한 제목이 적용된 예시" title="Title">
            {Array.from({
      length: 4
    }).map((i, title) => <ContentCard {...props} key={title} title={\`Lorem Ipsum \${title + 1}\`} />)}
        </StorybookTemplate>
}`,...(z=(V=T.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,G,K;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  argTypes: {
    loading: {
      control: {
        disable: true
      }
    }
  },
  render: (props: ContentCardProps) => <StorybookTemplate subtitle="로딩 중인 컴포넌트 예시" title="Loading">
            {Array.from({
      length: 4
    }).map((i, title) => <ContentCard {...props} key={title} title={\`Lorem Ipsum \${title + 1}\`} loading />)}
        </StorybookTemplate>
}`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const Fe=["Playground","Category","Description","Type","Href","Tag","Thumbnail","Timestamp","Title","Loading"];export{l as Category,c as Description,d as Href,h as Loading,m as Playground,y as Tag,g as Thumbnail,b as Timestamp,T as Title,u as Type,Fe as __namedExportsOrder,xe as default};
