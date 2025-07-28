import{c as m,j as t}from"./iframe-DIrS4rnj.js";import{c as i,T as u,I as g}from"./Img-BqvSmBQe.js";import{B as l}from"./Button-Cj0pnHQz.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],h=i("RotateCw",f);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],x=i("Tag",y);function C({categories:r,selected:o=[]}){const c=m(),d=()=>{const e=new URLSearchParams(window.location.search);e.delete("page"),e.delete("category"),c.replace(`?${e.toString()}`,{scroll:!1})},p=({currentTarget:e})=>{const a="category",{value:s}=e,n=new URLSearchParams(window.location.search);n.delete("page"),n.getAll(a).includes(s)?n.delete(a,s):Object.keys(r).length===o.length+1?n.delete(a):n.append(a,s),c.replace(`?${n.toString()}`,{scroll:!1})};return t.jsxs("div",{className:"bg-secondary flex flex-col gap-4 rounded p-4","data-component":"ContentCategory",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(x,{size:18}),t.jsx(u,{className:"font-bold",children:"카테고리"})]}),t.jsxs("div",{className:"flex flex-wrap gap-1",children:[t.jsxs(l,{variant:"outline",onClick:d,children:[t.jsx(h,{}),"전체"]}),Object.entries(r).map(([e,a])=>t.jsxs(l,{value:e,variant:o.includes(e)?"default":"outline",onClick:p,children:[t.jsx(g,{alt:e,className:"rounded-full object-cover",height:20,src:`https://datastore.itcode.dev/blog/category/${e}.png`,width:20}),t.jsx("span",{children:e}),t.jsx("span",{className:"text-muted-foreground",children:a})]},e))]})]})}C.__docgenInfo={description:`컨텐츠 카테고리 organism 컴포넌트 반환 메서드

@param {ContentCategoryProps} param0: ContentCategoryProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentCategory",props:{categories:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]}],raw:"Record<string, number | undefined>"},description:"카테고리 리스트"},selected:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택 목록",defaultValue:{value:"[]",computed:!1}}}};export{C};
