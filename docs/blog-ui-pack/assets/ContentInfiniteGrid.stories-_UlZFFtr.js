import{j as o}from"./jsx-runtime-BnHmloXs.js";import{r as h}from"./index-CKMdfnwt.js";import{g as _,S as x,a as k}from"./storybook-hTxjENzG.js";import{S as P}from"./StorybookTemplate-h4nRBuW0.js";import{u as O,a as A}from"./index-DcJyIQtw.js";import{u as J}from"./hooks-B1ldGSeW.js";import{C as X}from"./ContentGrid-B8prpxdf.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-C-LDafp8.js";import"./segment-CIEV7OGa.js";import"./index-XRK3aHGe.js";import"./ContentCard-t38BKrvI.js";import"./Typography-6a8fAOxr.js";import"./index-BY638psU.js";import"./add-base-path-Br4_xqsT.js";function G({className:t,...e}){return o.jsx("div",{className:`flex flex-col gap-16 ${t??""}`,"data-component":"StorybookContainer",...e})}G.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};function R({disabled:t,onEnd:e,children:c,...g}){const[f,n]=h.useState(null);return J(f,a=>{a.isIntersecting&&(e==null||e())},{rootMargin:"0px 0px 20px 0px"}),o.jsxs("div",{"data-component":"InfiniteScroll",...g,children:[c,c!==void 0&&t!==!0?o.jsx("div",{className:"w-full",ref:n}):null]})}R.__docgenInfo={description:`무한 스크롤 organism 컴포넌트 반환 메서드

@param {InfiniteScrollProps} param0: InfiniteScrollProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"InfiniteScroll",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"스크롤이 마지막에 도달할 경우의 이벤트 핸들러"}},composes:["DetailedHTMLProps"]};function p({list:t,pageSize:e=6,loading:c,...g}){const f=O(),n=A(),a=Number.parseInt(n.get("page")??"1",10),y=n.getAll("category"),b=n.get("keyword")??void 0,i=h.useMemo(()=>t==null?void 0:t.filter(({meta:r,summary:S})=>{let s=r.publish;return y.length>0&&(s=s&&y.includes(r.category)),b!==void 0&&(s=s&&S.includes(b.toLowerCase())),s}).map(({meta:r,url:S})=>({category:r.category,description:r.excerpt,href:S,tags:r.tag,thumbnail:r.coverImage,timestamp:r.date,title:r.title,type:r.type})),[t,y,b]),I=h.useMemo(()=>i==null?void 0:i.slice(0,a*e),[e,i,a]),$=()=>{const r=new URLSearchParams(window.location.search);r.set("page",`${a+1}`),f.replace(`${window.location.pathname}?${r.toString()}`,{scroll:!1})},D=(I??[]).length>=(i??[]).length;return o.jsx(R,{"data-component":"ContentInfiniteGrid",disabled:D,onEnd:$,...g,children:o.jsx(X,{list:I,loading:c})})}p.__docgenInfo={description:`컨텐츠 무한 스크롤 그리드 organism 컴포넌트

@param {ContentInfiniteGridProps} param0: ContentInfiniteGridProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentInfiniteGrid",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailProps",elements:[{name:"MarkdownHeaderProps"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>[]"},description:"리스트"},pageSize:{required:!1,tsType:{name:"number"},description:`페이지 크기

@default 6`,defaultValue:{value:"6",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"로딩 여부"}},composes:["Omit"]};const l="ContentInfiniteGrid",ne={argTypes:{className:k("className",l),id:k("id",l),list:{control:{disable:!0},table:{category:l,subcategory:x.PROP}},loading:{control:"boolean",table:{category:l,subcategory:x.PROP}},pageSize:{control:"number",table:{category:l,subcategory:x.PROP}}},component:p,parameters:_("컨텐츠 무한 스크롤 그리드 컴포넌트",["카드 정보를 받아 무한 스크롤이 적용된 그리드로 표현합니다.","무한 스크롤은 `@kapoo/global-ui-pack` 패키지의 `InfiniteScroll` 컴포넌트를 통해 구현합니다.","리스트의 필터링 및 페이징 코드와 같은 비즈니스 로직이 적용되어 있습니다.","`pageSize` 프로퍼티로 한 페이지의 사이즈를 조절할 수 있으며, 기본 사이즈는 `6`입니다."],{nextjs:{appDirectory:!0}}),tags:["autodocs"],title:"organism/ContentInfiniteGrid"},M=Array.from({length:40}).map((t,e)=>({body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam facilis dolorum inventore officia neque, rerum voluptatem quaerat consequuntur, fugiat aspernatur, labore debitis? Officia tenetur at est itaque quam quasi sunt?",filename:`2000-01-01-test-file-${e+1}`,meta:{category:e%2===0?"React":"CS",comment:!0,coverImage:`https://placehold.co/600/FFF/31343C?font=raleway&text=Thumb ${e+1}`,date:Date.now()+e*864e5,excerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus exercitationem molestiae quidem eaque asperiores voluptatem nam et, laudantium nisi corporis officiis sit sed repellendus voluptas excepturi ipsum laboriosam. Amet.",publish:!0,tag:["tag",`test ${e+1}`],title:`Lorem Ipsum ${e+1}`,type:"posts"},summary:[`Lorem Ipsum ${e+1}`,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus exercitationem molestiae quidem eaque asperiores voluptatem nam et, laudantium nisi corporis officiis sit sed repellendus voluptas excepturi ipsum laboriosam. Amet.","React"].join("|||"),toc:[],url:`/test/${e+1}`})),m={args:{list:M}},d={argTypes:{pageSize:{control:{disable:!0}}},args:{list:M},render:t=>o.jsxs(G,{children:[o.jsx(P,{subtitle:"페이지 사이즈가 6인 예시",title:"PageSize - 6 (Default)",container:!0,children:o.jsx("div",{className:"h-96 overflow-auto",children:o.jsx(p,{...t})})}),o.jsx(P,{subtitle:"페이지 사이즈가 12인 예시",title:"PageSize - 12",container:!0,children:o.jsx("div",{className:"h-96 overflow-auto",children:o.jsx(p,{...t,pageSize:12})})})]})},u={argTypes:{loading:{control:{disable:!0}}},render:t=>o.jsx(P,{subtitle:"로딩 상태가 적용된 예시",title:"Loading",container:!0,children:o.jsx(p,{...t,loading:!0})})};var v,w,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    list
  }
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,q,N;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var z,L,j;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(L=u.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const ae=["Playground","PageSize","Loading"];export{u as Loading,d as PageSize,m as Playground,ae as __namedExportsOrder,ne as default};
