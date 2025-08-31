import{j as n}from"./jsx-runtime-D0140-Ba.js";import{T as t}from"./Typography-CRgk4Z7u.js";function o({onImageClick:a,...e}){return n.jsxs("div",{className:"flex flex-col items-center justify-center gap-4","data-component":"MarkdownImg",children:[n.jsx("button",{className:"overflow-hidden rounded shadow-lg",onClick:a,type:"button",children:n.jsx("img",{...e,"aria-label":e.alt,className:"pointer-events-none h-auto w-full"})}),e.alt!==void 0&&e.alt!=="null"&&n.jsx(t,{variant:"muted",children:e.alt})]})}o.__docgenInfo={description:`마크다운 이미지 molecule 컴포넌트 반환 메서드

@param {MarkdownImgProps} param0: MarkdownImgProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"MarkdownImg",props:{onImageClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:"이미지 클릭 메서드"}},composes:["DetailedHTMLProps"]};export{o as M};
