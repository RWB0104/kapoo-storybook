import{j as s}from"./jsx-runtime-BnHmloXs.js";import"./index-BCzbi48b.js";import{g as m,S as a,a as o}from"./storybook-C3-Eqrys.js";import{P as l}from"./Previewless-RlpCezBo.js";import"./jsx-runtime-BEh3FTX5.js";function n({type:t,jsonld:i}){return s.jsx("script",{dangerouslySetInnerHTML:{__html:JSON.stringify(i)},"data-type":t,type:"application/ld+json"})}n.__docgenInfo={description:`JSON-LD atom 컴포넌트 반환 메서드

@param {JsonLdProps} param0: JsonLdProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"JsonLd",props:{type:{required:!0,tsType:{name:"T"},description:"타입"},jsonld:{required:!0,tsType:{name:"WithContext",elements:[{name:"JsonLdTypes[T]",raw:"JsonLdTypes[T]"}],raw:"WithContext<JsonLdTypes[T]>"},description:"JSON-LD"}},composes:["ScriptProps"]};const e="JsonLd",y=["Article","Person"],S={argTypes:{children:o("children",e),className:o("className",e),id:o("id",e),jsonld:{control:{disable:!0},table:{category:e,subcategory:a.PROP}},type:{control:"select",options:y,table:{category:e,subcategory:a.PROP}}},args:{type:"Article"},component:n,parameters:m("JSON-LD 컴포넌트",["JSON-LD를 구성하기 위한 SEO 컴포넌트입니다.","`type`을 통해 다양한 형태의 JSON-LD를 구성할 수 있습니다."]),tags:["autodocs"],title:"atom/JsonLd"},r={render:t=>s.jsxs(s.Fragment,{children:[s.jsx(l,{}),s.jsx(n,{...t})]})};var p,d,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <>
            <Previewless />

            <JsonLd {...props} />
        </>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["Playground"];export{r as Playground,T as __namedExportsOrder,S as default};
