import{j as e}from"./iframe-CcLN-j9J.js";import{g as S,S as i,a as k}from"./utils-CFnxBvGh.js";import{T as n}from"./Typography-yRLy0TJ5.js";import{M as r}from"./Monaco-RnNIGdEm.js";function y({className:o,...s}){return e.jsx("div",{className:`flex flex-col gap-16 ${o??""}`,"data-component":"StorybookContainer",...s})}y.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};function f({title:o,subtitle:s,vertical:x,container:b,className:h,children:v,...j}){return e.jsxs("div",{className:`flex flex-col gap-4 ${x===!0?"":"sm:flex-row"} ${h??""}`.trim(),"data-component":"StorybookTemplate",...j,children:[e.jsxs("div",{className:"flex w-full shrink-0 flex-col gap-2 sm:w-48",children:[e.jsx("h3",{className:"text-lg font-bold",children:o}),e.jsx("p",{className:"text-muted-foreground text-sm",children:s})]}),e.jsx("div",{className:`grid flex-1 gap-4 ${b===!0?"":"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"}`,children:v})]})}f.__docgenInfo={description:`Storybook template 컴포넌트 반환 메서드

@param {StorybookTemplateProps} param0: StorybookTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"타이틀"},subtitle:{required:!1,tsType:{name:"string"},description:"서브 타이틀"},vertical:{required:!1,tsType:{name:"boolean"},description:"수직 여부"},container:{required:!1,tsType:{name:"boolean"},description:"컨테이너 여부"}},composes:["DetailedHTMLProps"]};const l="Footer",M={argTypes:{className:k("className",l),defaultLanguage:{control:"text",description:"언어 목록 ([참조](https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages))",table:{category:l,subcategory:i.PROP},type:"string"},options:{control:{disable:!0},description:"모나코 에디터 옵션",table:{category:l,subcategory:i.PROP,type:{detail:"[API](https://microsoft.github.io/monaco-editor/typedoc/enums/editor.EditorOption.html)",summary:"EditorOption"}}}},args:{className:"h-48"},component:r,parameters:S("푸터 컴포넌트",["모나코 에디터를 구현한 컴포넌트입니다.","`language` 프로퍼티로 대상 언어를 지정할 수 있으며, 해당 언어에 맞는 Syntax Highlight를 제공합니다.","`options`를 통해 모나코 에디터에 원하는 내부 설정을 직접 지정할 수 있습니다. 옵션의 자세한 내용은 [공식 문서](https://microsoft.github.io/monaco-editor/typedoc/enums/editor.EditorOption.html)를 참조해주세요."]),tags:["autodocs"],title:"atom/Monaco"},N=`
function main(): void
{
    console.log('Hello World');
}
`.trim(),T=`
function main()
{
    console.log('Hello World');
}
`.trim(),L=`
# Hello World

Lorem ipsum sit amet.

[to link](https://example.com)
`.trim(),a={},t={render:o=>e.jsx(f,{subtitle:"다양한 언어가 지정된 컴포넌트 예시",title:"Language",container:!0,children:e.jsxs(y,{children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(n,{children:"typescript"}),e.jsx("div",{className:"border",children:e.jsx(r,{...o,defaultLanguage:"typescript",defaultValue:N})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(n,{children:"javascript"}),e.jsx("div",{className:"border",children:e.jsx(r,{...o,defaultLanguage:"javascript",defaultValue:T})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(n,{children:"markdown"}),e.jsx("div",{className:"border",children:e.jsx(r,{...o,defaultLanguage:"markdown",defaultValue:L})})]})]})})};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="다양한 언어가 지정된 컴포넌트 예시" title="Language" container>
            <StorybookContainer>
                <div className="flex flex-col gap-1">
                    <Typography>typescript</Typography>

                    <div className="border">
                        <Monaco {...props} defaultLanguage="typescript" defaultValue={typescript} />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <Typography>javascript</Typography>

                    <div className="border">
                        <Monaco {...props} defaultLanguage="javascript" defaultValue={javascript} />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <Typography>markdown</Typography>

                    <div className="border">
                        <Monaco {...props} defaultLanguage="markdown" defaultValue={markdown} />
                    </div>
                </div>
            </StorybookContainer>
        </StorybookTemplate>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const O=["Playground","DefaultLanguage"];export{t as DefaultLanguage,a as Playground,O as __namedExportsOrder,M as default};
