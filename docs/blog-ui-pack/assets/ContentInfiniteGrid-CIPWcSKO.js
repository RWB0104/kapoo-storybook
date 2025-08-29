import{r as p,a as S,j as s,c as w}from"./iframe-Y6OdIcWN.js";import{C as I}from"./ContentGrid-B5m7JX74.js";function m({disabled:r,onEnd:n,children:t,...a}){const[i,l]=p.useState(null);return S(i,c=>{c.isIntersecting&&(n==null||n())},{rootMargin:"0px 0px 100px 0px"}),s.jsxs("div",{"data-component":"InfiniteScroll",...a,children:[t,t!==void 0&&r!==!0?s.jsx("div",{className:"w-full",ref:l}):null]})}m.__docgenInfo={description:`무한 스크롤 organism 컴포넌트 반환 메서드

@param {InfiniteScrollProps} param0: InfiniteScrollProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"InfiniteScroll",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"스크롤이 마지막에 도달할 경우의 이벤트 핸들러"}},composes:["DetailedHTMLProps"]};function h({list:r,page:n=1,pageSize:t=6,loading:a,...i}){const l=w(),c=()=>{const e=new URLSearchParams(window.location.search);sessionStorage.setItem("referer",`${location.pathname}?${e.toString()}`),sessionStorage.setItem("scroll",`${window.scrollY}`)},o=r==null?void 0:r.map(({meta:e,url:g})=>({category:e.category,description:e.excerpt,href:g,onClick:c,tags:e.tag,thumbnail:e.coverImage,timestamp:e.date,title:e.title,type:e.type})),d=o==null?void 0:o.slice(0,n*t),u=(d??[]).length>=(o??[]).length,f=()=>{const e=new URLSearchParams(window.location.search);e.set("page",`${n+1}`),l.replace(`?${e.toString()}`,{scroll:!1})};return p.useEffect(()=>{const e=sessionStorage.getItem("scroll");e!==null&&(window.scrollTo({top:Number(e)}),sessionStorage.removeItem("scroll")),sessionStorage.removeItem("referer")},[]),s.jsx(m,{"data-component":"ContentInfiniteGrid",disabled:u,onEnd:f,...i,children:s.jsx(I,{list:d,loading:a})})}h.__docgenInfo={description:`컨텐츠 무한 스크롤 그리드 organism 컴포넌트

@param {ContentInfiniteGridProps} param0: ContentInfiniteGridProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentInfiniteGrid",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailProps",elements:[{name:"MarkdownHeaderProps"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>[]"},description:"리스트"},page:{required:!1,tsType:{name:"number"},description:`페이지

@default 1`,defaultValue:{value:"1",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:`페이지 크기

@default 6`,defaultValue:{value:"6",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"로딩 여부"}},composes:["Omit"]};export{h as C};
