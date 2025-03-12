import{j as r}from"./jsx-runtime-BnHmloXs.js";import{r as P}from"./index-D0o6aRj1.js";import{g as _,S as x,a as k}from"./storybook-hTxjENzG.js";import{S as h}from"./ContentCard-B9rvYITY.js";import{u as O,a as A}from"./index-KWMf7Mex.js";import{u as J}from"./hooks-CGa2Drq3.js";import{C as X}from"./ContentGrid-CPpdwSTK.js";import"./jsx-runtime-BEh3FTX5.js";import"./add-base-path-DO53KZED.js";import"./index-C8V3Szb0.js";import"./index-C-LDafp8.js";function G({className:t,...e}){return r.jsx("div",{className:`flex flex-col gap-16 ${t??""}`,"data-component":"StorybookContainer",...e})}G.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};function R({disabled:t,onEnd:e,children:p,...f}){const[y,a]=P.useState(null);return J(y,m=>{m.isIntersecting&&(e==null||e())},{rootMargin:"0px 0px 20px 0px"}),r.jsxs("div",{"data-component":"InfiniteScroll",...f,children:[p,p!==null&&t!==!0?r.jsx("div",{className:"w-full",ref:a}):null]})}R.__docgenInfo={description:`무한 스크롤 organism 컴포넌트 반환 메서드

@param {InfiniteScrollProps} param0: InfiniteScrollProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"InfiniteScroll",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"스크롤이 마지막에 도달할 경우의 이벤트 핸들러"}},composes:["DetailedHTMLProps"]};function c({list:t,pageSize:e=6,loading:p,...f}){const y=O(),a=A(),m=Number.parseInt(a.get("page")??"1",10),b=a.getAll("category"),S=a.get("keyword")??void 0,n=P.useMemo(()=>t==null?void 0:t.filter(({meta:o,summary:i})=>{let s=o.publish;return b.length>0&&(s=s&&b.includes(o.category)),S!==void 0&&(s=s&&i.includes(S.toLowerCase())),s}).map(({meta:o,url:i})=>({category:o.category,description:o.excerpt,href:i,tags:o.tag,thumbnail:o.coverImage,timestamp:o.date,title:o.title,type:o.type})),[t,b,S]),I=P.useMemo(()=>n==null?void 0:n.slice(0,m*e),[e,n,m]),$=()=>{const o=new URLSearchParams(window.location.search),i=Number.parseInt(o.get("page")??"1",10);o.set("page",`${i+1}`),y.replace(`${window.location.pathname}?${o.toString()}`,{scroll:!1})},D=(I??[]).length>=(n??[]).length;return r.jsx(R,{"data-component":"ContentInfiniteGrid",disabled:D,onEnd:$,...f,children:r.jsx(X,{list:I,loading:p})})}c.__docgenInfo={description:`컨텐츠 무한 스크롤 그리드 organism 컴포넌트

@param {ContentInfiniteGridProps} param0: ContentInfiniteGridProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentInfiniteGrid",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailProps",elements:[{name:"MarkdownHeaderProps"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>[]"},description:"리스트"},pageSize:{required:!1,tsType:{name:"number"},description:`페이지 크기

@default 6`,defaultValue:{value:"6",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"로딩 여부"}},composes:["Omit"]};const l="ContentInfiniteGrid",ee={argTypes:{className:k("className",l),id:k("id",l),list:{control:{disable:!0},table:{category:l,subcategory:x.PROP}},loading:{control:"boolean",table:{category:l,subcategory:x.PROP}},pageSize:{control:"number",table:{category:l,subcategory:x.PROP}}},component:c,parameters:_("컨텐츠 무한 스크롤 그리드 컴포넌트",["카드 정보를 받아 무한 스크롤이 적용된 그리드로 표현합니다.","무한 스크롤은 `@kapoo/global-ui-pack` 패키지의 `InfiniteScroll` 컴포넌트를 통해 구현합니다.","리스트의 필터링 및 페이징 코드와 같은 비즈니스 로직이 적용되어 있습니다.","`pageSize` 프로퍼티로 한 페이지의 사이즈를 조절할 수 있으며, 기본 사이즈는 `6`입니다."],{nextjs:{appDirectory:!0}}),tags:["autodocs"],title:"organism/ContentInfiniteGrid"},M=Array.from({length:40}).map((t,e)=>({body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam facilis dolorum inventore officia neque, rerum voluptatem quaerat consequuntur, fugiat aspernatur, labore debitis? Officia tenetur at est itaque quam quasi sunt?",filename:`2000-01-01-test-file-${e+1}`,meta:{category:e%2===0?"React":"CS",comment:!0,coverImage:`https://placehold.co/600/FFF/31343C?font=raleway&text=Thumb ${e+1}`,date:Date.now()+e*864e5,excerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus exercitationem molestiae quidem eaque asperiores voluptatem nam et, laudantium nisi corporis officiis sit sed repellendus voluptas excepturi ipsum laboriosam. Amet.",publish:!0,tag:["tag",`test ${e+1}`],title:`Lorem Ipsum ${e+1}`,type:"posts"},summary:[`Lorem Ipsum ${e+1}`,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus exercitationem molestiae quidem eaque asperiores voluptatem nam et, laudantium nisi corporis officiis sit sed repellendus voluptas excepturi ipsum laboriosam. Amet.","React"].join("|||"),toc:[],url:`/test/${e+1}`})),u={args:{list:M}},d={argTypes:{pageSize:{control:{disable:!0}}},args:{list:M},render:t=>r.jsxs(G,{children:[r.jsx(h,{subtitle:"페이지 사이즈가 6인 예시",title:"PageSize - 6 (Default)",container:!0,children:r.jsx("div",{className:"h-96 overflow-auto",children:r.jsx(c,{...t})})}),r.jsx(h,{subtitle:"페이지 사이즈가 12인 예시",title:"PageSize - 12",container:!0,children:r.jsx("div",{className:"h-96 overflow-auto",children:r.jsx(c,{...t,pageSize:12})})})]})},g={argTypes:{loading:{control:{disable:!0}}},render:t=>r.jsx(h,{subtitle:"로딩 상태가 적용된 예시",title:"Loading",container:!0,children:r.jsx(c,{...t,loading:!0})})};var v,w,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    list
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,q,N;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  argTypes: {
    pageSize: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="페이지 사이즈가 6인 예시" title="PageSize - 6 (Default)" container>
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="페이지 사이즈가 12인 예시" title="PageSize - 12" container>
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} pageSize={12} />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var z,L,j;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: {
    loading: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="로딩 상태가 적용된 예시" title="Loading" container>
            <ContentInfiniteGrid {...props} loading />
        </StorybookTemplate>
}`,...(j=(L=g.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const te=["Playground","PageSize","Loading"];export{g as Loading,d as PageSize,u as Playground,te as __namedExportsOrder,ee as default};
