import{j as r}from"./jsx-runtime-BnHmloXs.js";import{g as u}from"./index-BCzbi48b.js";import{g as y,S as p,a as o}from"./storybook-CWpip0ZO.js";import{P as g}from"./Previewless-RlpCezBo.js";import{r as J}from"./script-C_TKlgNp.js";import"./jsx-runtime-BEh3FTX5.js";import"./_interop_require_wildcard-BpaVepTj.js";import"./index-OaFZzyAw.js";import"./head-manager-context.shared-runtime-BqQs_gVk.js";import"./request-idle-callback-DsHw8iFN.js";var n,i;function S(){return i||(i=1,n=J()),n}var L=S();const P=u(L);function a({type:s,jsonld:l}){return r.jsx(P,{dangerouslySetInnerHTML:{__html:JSON.stringify(l)},"data-component":"JsonLd","data-type":s,strategy:"beforeInteractive",type:"application/ld+json"})}a.__docgenInfo={description:`JSON-LD atom 컴포넌트 반환 메서드

@param {JsonLdProps} param0: JsonLdProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"JsonLd",props:{type:{required:!0,tsType:{name:"T"},description:"타입"},jsonld:{required:!0,tsType:{name:"WithContext",elements:[{name:"JsonLdTypes[T]",raw:"JsonLdTypes[T]"}],raw:"WithContext<JsonLdTypes[T]>"},description:"JSON-LD"}},composes:["ScriptProps"]};const e="JsonLd",f=["Article","Person"],_={argTypes:{children:o("children",e),className:o("className",e),id:o("id",e),jsonld:{control:{disable:!0},table:{category:e,subcategory:p.PROP}},type:{control:"select",options:f,table:{category:e,subcategory:p.PROP}}},args:{type:"Article"},component:a,parameters:y("JSON-LD 컴포넌트",["JSON-LD를 구성하기 위한 SEO 컴포넌트입니다.","`type`을 통해 다양한 형태의 JSON-LD를 구성할 수 있습니다."]),tags:["autodocs"],title:"atom/JsonLd"},t={render:s=>r.jsxs(r.Fragment,{children:[r.jsx(g,{}),r.jsx(a,{...s})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <>
            <Previewless />

            <JsonLd {...props} />
        </>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const q=["Playground"];export{t as Playground,q as __namedExportsOrder,_ as default};
