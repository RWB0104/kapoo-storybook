import{j as s}from"./jsx-runtime-BnHmloXs.js";import{r as i}from"./index-CKMdfnwt.js";import{g as B,S as o}from"./storybook-CWpip0ZO.js";import{S as p}from"./StorybookTemplate-h4nRBuW0.js";import{C as a}from"./ContentCard-B_KEKQur.js";import"./jsx-runtime-BEh3FTX5.js";import"./Img-CXPgRZe5.js";import"./segment-CIEV7OGa.js";import"./image-context-2QRquZaF.js";import"./utils-jAU0Cazi.js";import"./index-BY638psU.js";import"./AspectRatio-D0SRQiay.js";import"./index-CkT7GGG_.js";import"./index-BZRNBTKr.js";const n="ContentCard",ue={argTypes:{category:{description:"카테고리",table:{category:n,subcategory:o.PROP},type:{name:"string",required:!0}},description:{description:"설명",table:{category:n,subcategory:o.PROP},type:{name:"string",required:!0}},href:{description:"링크",table:{category:n,subcategory:o.PROP},type:{name:"string",required:!0}},loading:{description:"로딩 여부 (로딩 여부가 true일 경우, 나머지 프로퍼티는 optional 처리됨)",table:{category:n,subcategory:o.PROP},type:{name:"boolean",required:!0}},tags:{description:"태그",table:{category:n,subcategory:o.PROP,type:{summary:"string[]"}},type:{name:"array",required:!0,value:{name:"string"}}},thumbnail:{description:"썸네일",table:{category:n,subcategory:o.PROP},type:{name:"string",required:!0}},timestamp:{description:"날짜",table:{category:n,subcategory:o.PROP},type:{name:"number",required:!0}},title:{description:"타이틀",table:{category:n,subcategory:o.PROP},type:{name:"string",required:!0}}},args:{category:"React",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim exercitationem, blanditiis amet doloribus doloremque, ratione recusandae nobis tenetur assumenda officiis ipsam molestias provident ullam inventore et itaque molestiae autem.",href:"/",tags:["React","Next.js","Storybook","TypeScript"],thumbnail:"https://placehold.co/600/FFF/31343C?font=raleway&text=Thumb",timestamp:1704132245e3,title:"Lorem Ipsum"},component:a,parameters:B("컨텐츠 카드 컴포넌트",["블로그의 컨텐츠를 표현하는 카드 컴포넌트입니다.","마크다운의 메타 정보를 토대로 컨텐츠의 정보를 표현합니다."]),tags:["autodocs"],title:"organism/ContentCard"},G=["React","TypeScript","NextJS","CS"],K=["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eaque aliquid rerum earum, consectetur labore est voluptas dolore inventore blanditiis! Minima soluta fuga placeat esse inventore recusandae commodi impedit nesciunt.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore laboriosam nulla, delectus ullam tempore, similique impedit laudantium ratione dolores repellat ex facilis, quidem fuga. Nostrum suscipit magni autem ratione.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sunt cupiditate quam est aperiam, omnis debitis minus consequatur placeat molestiae, et officia dolorem. Voluptatibus error animi nesciunt, amet dolore modi.","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quis pariatur deserunt dolore. Minima, eligendi! Soluta quaerat consectetur reiciendis sunt quisquam facilis cupiditate ipsam officiis doloremque. Quia laudantium modi sit!"],U=[4,10,6,2],W=["https://placehold.co/600/6A5ACD/FFFFFF?font=raleway&text=1","https://placehold.co/600/FF6347/2F4F4F?font=raleway&text=2","https://placehold.co/600/32CD32/FFFFFF?font=raleway&text=3","https://placehold.co/600/FF7F50/2C3E50?font=raleway&text=4"],X=[Date.now(),Date.now()-864e5*13,Date.now()-864e5*183,Date.now()-864e5*724],m={},l={argTypes:{category:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 카테고리가 적용된 예시",title:"Category",children:G.map(e=>i.createElement(a,{...t,category:e,key:e}))})},c={argTypes:{description:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 설명이 적용된 예시",title:"Description",children:K.map(e=>i.createElement(a,{...t,description:e,key:e}))})},u={argTypes:{href:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 링크가 적용된 예시 (Actions 탭 참조)",title:"Href",children:Array.from({length:4}).map((e,r)=>i.createElement(a,{...t,href:`/page/${r+1}`,key:r}))})},d={argTypes:{tags:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 태그가 적용된 예시",title:"Tag",children:U.map(e=>i.createElement(a,{...t,key:e,tags:Array.from({length:e}).map((r,z)=>`태그 ${z+1}`)}))})},g={argTypes:{thumbnail:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 썸네일이 적용된 예시",title:"Thumbnail",children:W.map(e=>i.createElement(a,{...t,key:e,thumbnail:e}))})},y={argTypes:{timestamp:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 작성일이 적용된 예시. 경과된 시간에 따라 경과일을 병기함",title:"Timestamp",children:X.map(e=>i.createElement(a,{...t,key:e,timestamp:e}))})},b={argTypes:{title:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"다양한 제목이 적용된 예시",title:"Title",children:Array.from({length:4}).map((e,r)=>i.createElement(a,{...t,key:r,title:`Lorem Ipsum ${r+1}`}))})},T={argTypes:{loading:{control:{disable:!0}}},render:t=>s.jsx(p,{subtitle:"로딩 중인 컴포넌트 예시",title:"Loading",children:Array.from({length:4}).map((e,r)=>i.createElement(a,{...t,key:r,title:`Lorem Ipsum ${r+1}`,loading:!0}))})};var C,h,f;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(f=(h=m.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,k,P;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(k=l.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var F,q,x;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(q=c.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var L,j,A;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(j=u.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var E,R,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var w,O,$;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(O=g.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var v,I,H;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(H=(I=y.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var M,N,_;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var J,Q,V;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(V=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const de=["Playground","Category","Description","Href","Tag","Thumbnail","Timestamp","Title","Loading"];export{l as Category,c as Description,u as Href,T as Loading,m as Playground,d as Tag,g as Thumbnail,y as Timestamp,b as Title,de as __namedExportsOrder,ue as default};
