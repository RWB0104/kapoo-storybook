import{p as f}from"./posts-BhIgDG50.js";import{j as s}from"./jsx-runtime-BnHmloXs.js";import{a as g}from"./index-CXRgFPsP.js";import{r as I}from"./index-CKMdfnwt.js";import{u as S}from"./hooks-B1ldGSeW.js";import{C as y}from"./ContentGrid-u7lvqYLc.js";const C=f;function d({disabled:t,onEnd:n,children:o,...a}){const[i,p]=I.useState(null);return S(i,r=>{r.isIntersecting&&(n==null||n())},{rootMargin:"0px 0px 20px 0px"}),s.jsxs("div",{"data-component":"InfiniteScroll",...a,children:[o,o!==void 0&&t!==!0?s.jsx("div",{className:"w-full",ref:p}):null]})}d.__docgenInfo={description:`무한 스크롤 organism 컴포넌트 반환 메서드

@param {InfiniteScrollProps} param0: InfiniteScrollProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"InfiniteScroll",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"스크롤이 마지막에 도달할 경우의 이벤트 핸들러"}},composes:["DetailedHTMLProps"]};function w({list:t,page:n=1,pageSize:o=6,loading:a,...i}){const p=g(),r=t==null?void 0:t.map(({meta:e,url:u})=>({category:e.category,description:e.excerpt,href:u,tags:e.tag,thumbnail:e.coverImage,timestamp:e.date,title:e.title,type:e.type})),l=r==null?void 0:r.slice(0,n*o),c=(l??[]).length>=(r??[]).length,m=()=>{const e=new URLSearchParams(window.location.search);e.set("page",`${n+1}`),p.replace(`?${e.toString()}`,{scroll:!1})};return s.jsx(d,{"data-component":"ContentInfiniteGrid",disabled:c,onEnd:m,...i,children:s.jsx(y,{list:l,loading:a})})}w.__docgenInfo={description:`컨텐츠 무한 스크롤 그리드 organism 컴포넌트

@param {ContentInfiniteGridProps} param0: ContentInfiniteGridProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentInfiniteGrid",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailProps",elements:[{name:"MarkdownHeaderProps"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>[]"},description:"리스트"},page:{required:!1,tsType:{name:"number"},description:`페이지

@default 1`,defaultValue:{value:"1",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:`페이지 크기

@default 6`,defaultValue:{value:"6",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"로딩 여부"}},composes:["Omit"]};export{w as C,C as p};
