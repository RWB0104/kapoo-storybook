import{j as s}from"./jsx-runtime-D0140-Ba.js";import"./iframe-DQo0Yy5t.js";import{g as m,S as a,a as t}from"./storybook-CWpip0ZO.js";import{P as l}from"./Previewless-zYNArOA7.js";function n({type:r,jsonld:i}){return s.jsx("script",{"data-component":"JsonLd","data-type":r,type:"application/ld+json",children:JSON.stringify(i)})}n.__docgenInfo={description:`JSON-LD atom 컴포넌트 반환 메서드

@param {JsonLdProps} param0: JsonLdProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"JsonLd",props:{type:{required:!0,tsType:{name:"T"},description:"타입"},jsonld:{required:!0,tsType:{name:"WithContext",elements:[{name:"JsonLdTypes[T]",raw:"JsonLdTypes[T]"}],raw:"WithContext<JsonLdTypes[T]>"},description:"JSON-LD"}},composes:["ScriptProps"]};const e="JsonLd",y=["BlogPosting","BreadcrumbList","Person"],P={args:{type:"BlogPosting"},argTypes:{children:t("children",e),className:t("className",e),id:t("id",e),jsonld:{control:{disable:!0},table:{category:e,subcategory:a.PROP}},type:{control:"select",options:y,table:{category:e,subcategory:a.PROP}}},component:n,parameters:m("JSON-LD 컴포넌트",["JSON-LD를 구성하기 위한 SEO 컴포넌트입니다.","`type`을 통해 다양한 형태의 JSON-LD를 구성할 수 있습니다."]),tags:["autodocs"],title:"atom/JsonLd"},o={render:r=>s.jsxs(s.Fragment,{children:[s.jsx(l,{}),s.jsx(n,{...r})]})};var p,d,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <>
            <Previewless />

            <JsonLd {...props} />
        </>
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const S=["Playground"];export{o as Playground,S as __namedExportsOrder,P as default};
