import{j as a}from"./jsx-runtime-BnHmloXs.js";import{a as f}from"./index-CXRgFPsP.js";import{r as g}from"./index-CKMdfnwt.js";import{u as I}from"./hooks-B1ldGSeW.js";import{C as S}from"./ContentGrid-B4g1dgrr.js";function d({disabled:t,onEnd:n,children:o,...s}){const[i,l]=g.useState(null);return I(i,r=>{r.isIntersecting&&(n==null||n())},{rootMargin:"0px 0px 20px 0px"}),a.jsxs("div",{"data-component":"InfiniteScroll",...s,children:[o,o!==void 0&&t!==!0?a.jsx("div",{className:"w-full",ref:l}):null]})}d.__docgenInfo={description:`무한 스크롤 organism 컴포넌트 반환 메서드

@param {InfiniteScrollProps} param0: InfiniteScrollProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"InfiniteScroll",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"스크롤이 마지막에 도달할 경우의 이벤트 핸들러"}},composes:["DetailedHTMLProps"]};function y({list:t,page:n=1,pageSize:o=6,loading:s,...i}){const l=f(),r=t==null?void 0:t.map(({meta:e,url:u})=>({category:e.category,description:e.excerpt,href:u,tags:e.tag,thumbnail:e.coverImage,timestamp:e.date,title:e.title,type:e.type})),p=r==null?void 0:r.slice(0,n*o),c=(p??[]).length>=(r??[]).length,m=()=>{const e=new URLSearchParams(window.location.search);e.set("page",`${n+1}`),l.replace(`?${e.toString()}`,{scroll:!1})};return a.jsx(d,{"data-component":"ContentInfiniteGrid",disabled:c,onEnd:m,...i,children:a.jsx(S,{list:p,loading:s})})}y.__docgenInfo={description:`컨텐츠 무한 스크롤 그리드 organism 컴포넌트

@param {ContentInfiniteGridProps} param0: ContentInfiniteGridProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentInfiniteGrid",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailProps",elements:[{name:"MarkdownHeaderProps"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>[]"},description:"리스트"},page:{required:!1,tsType:{name:"number"},description:`페이지

@default 1`,defaultValue:{value:"1",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:`페이지 크기

@default 6`,defaultValue:{value:"6",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"로딩 여부"}},composes:["Omit"]};export{y as C};
