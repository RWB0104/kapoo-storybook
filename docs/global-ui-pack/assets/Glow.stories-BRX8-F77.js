import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-r57MSJFk.js";import{g as X,S as f,a as F}from"./storybook-hTxjENzG.js";import{S as P}from"./StorybookContainer-CXD7EHC6.js";import{S as a}from"./StorybookTemplate-h4nRBuW0.js";import{c as J}from"./utils-jAU0Cazi.js";import"./jsx-runtime-BEh3FTX5.js";const H=["#CCCCCCCC","#BFBFBF3F 30%","#373737 130%"];function s({type:t,colors:r=H,disabled:o,className:E,onMouseMove:y,children:R,...O}){const _=i=>{if(y==null||y(i),o!==!0){const l=i.nativeEvent.offsetX,d=i.nativeEvent.offsetY,p=r.join(", ");switch(t){case"ellipse":i.currentTarget.style.background=`radial-gradient(farthest-corner ellipse at ${l}px ${d}px, ${p})`;break;case"irregular":i.currentTarget.style.background=`radial-gradient(farthest-side circle at ${l}px ${d}px, ${p}), radial-gradient(closest-side ellipse at ${l+50}px ${d-30}px, rgba(255,255,255,0.5) 0%, transparent 80%)`;break;case"directional":i.currentTarget.style.background=`linear-gradient(90deg, transparent, ${r[0].split(" ")[0]} 50%, transparent), radial-gradient(farthest-corner circle at ${l}px ${d}px, ${p})`;break;default:i.currentTarget.style.background=`radial-gradient(farthest-corner circle at ${l}px ${d}px, ${p})`;break}}};return e.jsxs("div",{className:J("relative size-full",E),"data-component":"Glow",...O,children:[e.jsx("div",{className:"absolute left-0 top-0 size-full select-none opacity-0 mix-blend-soft-light brightness-90 contrast-200 transition-opacity duration-500 hover:opacity-100",onMouseMove:_}),R]})}s.__docgenInfo={description:`발광 molecule 컴포넌트 반환 메서드

@param {GlowProps} param0: GlowProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Glow",props:{type:{required:!1,tsType:{name:"union",raw:"'ellipse' | 'irregular' | 'directional'",elements:[{name:"literal",value:"'ellipse'"},{name:"literal",value:"'irregular'"},{name:"literal",value:"'directional'"}]},description:"발광 타입"},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`색상 배열

@default [ '#CCCCCCCC', '#BFBFBF3F 30%', '#373737 130%' ]`,defaultValue:{value:`[
	'#CCCCCCCC',
	'#BFBFBF3F 30%',
	'#373737 130%'
]`,computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"}},composes:["DetailedHTMLProps"]};const c="Glow",I=[void 0,"ellipse","irregular","directional"],z=[void 0,["#FFD700","#FFB347 40%","#FF8C00 120%"],["#FF0000","#FF3333 35%","#FF6666 65%","#FF9999 100%"],["#B0C4DE","#87CEEB 50%","#4682B4 110%"],["#D8BFD8","#BA55D3 45%","#800080 115%"],["#00FFFF","#00BFFF 35%","#0000FF 125%"],["#FF4500","#FF6347 40%","#FFA07A 80%","#FFDAB9 120%"],["#001F3F","#0074D9 50%","#7FDBFF 100%"],["#1B1464","#2E3192 30%","#007F5F 60%","#00B894 100%"],["#FF0000","#FF1493 50%","#FF4500 120%"],["#556B2F","#6B8E23 40%","#9ACD32 90%","#ADFF2F 130%"]],M={argTypes:{children:F("children",c),className:F("className",c),colors:{table:{category:c,subcategory:f.PROP}},disabled:{table:{category:c,subcategory:f.PROP}},type:{table:{category:c,subcategory:f.PROP,type:{summary:I.filter(t=>t!==void 0).join(" | ")}}}},component:s,parameters:X("발광 컴포넌트",["자식 객체에 발광 효과를 제공하는 컴포넌트입니다.","호버링 시, 현재 마우스 포인터를 중심으로 발광 효과를 제공합니다.","`colors` 프로퍼티로 색 배열을 지정하여 원하는 효과를 주거나, `disabled`를 통해 발광 효과를 조건부로 없앨 수도 있습니다."]),tags:["autodocs"],title:"molecule/Glow"};function n(){return e.jsx("img",{className:"size-full object-cover","data-component":"ImgComponent",src:"https://cdn.assets.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316"})}function A({colors:t,...r}){return e.jsxs(s,{colors:t,...r,children:[e.jsx(n,{}),t?e.jsx("div",{className:"absolute bottom-2 right-2 rounded bg-white p-2",children:t.map(o=>e.jsxs("div",{className:"flex flex-row items-center gap-2 text-xs text-black",children:[e.jsx("div",{className:"size-3 rounded",style:{background:o}}),e.jsx("p",{children:o})]},o))}):null]})}const m={args:{children:e.jsx(n,{}),className:"size-[640px]"}},u={render:()=>e.jsxs(P,{children:[e.jsxs(a,{subtitle:"컴포넌트 기본 형태",title:"Base",children:[e.jsx(s,{children:e.jsxs("div",{className:"flex size-full flex-col gap-2 border p-4",children:[e.jsx("p",{className:"text-lg font-bold",children:"Title Text"}),e.jsx("p",{className:" text-muted-foreground",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsx("br",{}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam, nulla placeat commodi."})]})}),e.jsx(s,{children:e.jsx(n,{})})]}),e.jsxs(a,{subtitle:"컴포넌트 비활성화",title:"Disabled",children:[e.jsx(s,{disabled:!0,children:e.jsxs("div",{className:"flex size-full flex-col gap-2 border p-4",children:[e.jsx("p",{className:"text-lg font-bold",children:"Title Text"}),e.jsx("p",{className:" text-muted-foreground",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsx("br",{}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam, nulla placeat commodi."})]})}),e.jsx(s,{disabled:!0,children:e.jsx(n,{})})]}),I.map((t,r)=>e.jsx(a,{subtitle:`다양한 color에 따른 ${t??"기본"} type 표현`,title:`type - ${t??"default"}`,children:z.map(o=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx("div",{children:e.jsx(A,{colors:o,type:t})})},`${t}-${r}-${o==null?void 0:o.toString()}`))},`${t}-${r}`))]})},x={argTypes:{type:{control:{disable:!0}}},render:t=>e.jsxs(P,{children:[e.jsx(a,{subtitle:"기본적인 원형 발광 효과",title:"Type - default",container:!0,children:e.jsx(s,{...t,children:e.jsx(n,{})})}),e.jsx(a,{subtitle:"타원형 발광 효과",title:"Type - ellipse",container:!0,children:e.jsx(s,{...t,type:"ellipse",children:e.jsx(n,{})})}),e.jsx(a,{subtitle:"불규칙적인 발광 효과",title:"Type - irregular",container:!0,children:e.jsx(s,{...t,type:"irregular",children:e.jsx(n,{})})}),e.jsx(a,{subtitle:"방향성 발광 효과",title:"Type - directional",container:!0,children:e.jsx(s,{...t,type:"directional",children:e.jsx(n,{})})})]})},b={argTypes:{colors:{control:{disable:!0}}},render:t=>e.jsx(a,{subtitle:"다양한 컬러가 지정된 컴포넌트",title:"Colors",children:z.map(r=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx("div",{children:e.jsx(A,{...t,colors:r})})},r==null?void 0:r.toString()))})},g={argTypes:{disabled:{control:{disable:!0}}},render:t=>e.jsx(a,{subtitle:"발광 효과가 비활성화된 컴포넌트",title:"Disabled",container:!0,children:e.jsx(s,{...t,disabled:!0,children:e.jsx(n,{})})})};var j,h,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <ImgComponent />,
    className: 'size-[640px]'
  }
}`,...(C=(h=m.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var T,S,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <StorybookContainer>
            <StorybookTemplate subtitle="컴포넌트 기본 형태" title="Base">
                <Glow>
                    <div className="flex size-full flex-col gap-2 border p-4">
                        <p className="text-lg font-bold">Title Text</p>
                        <p className=" text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam, nulla placeat commodi.</p>
                    </div>
                </Glow>

                <Glow>
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate subtitle="컴포넌트 비활성화" title="Disabled">
                <Glow disabled>
                    <div className="flex size-full flex-col gap-2 border p-4">
                        <p className="text-lg font-bold">Title Text</p>
                        <p className=" text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam, nulla placeat commodi.</p>
                    </div>
                </Glow>

                <Glow disabled>
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            {types.map((type, idx) => <StorybookTemplate key={\`\${type}-\${idx}\`} subtitle={\`다양한 color에 따른 \${type ?? '기본'} type 표현\`} title={\`type - \${type ?? 'default'}\`}>
                    {colorList.map(color => <div className="flex flex-col gap-4" key={\`\${type}-\${idx}-\${color?.toString()}\`}>
                            <div>
                                <ColorComponent colors={color} type={type} />
                            </div>
                        </div>)}
                </StorybookTemplate>)}
        </StorybookContainer>
}`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,w,$;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    type: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="기본적인 원형 발광 효과" title="Type - default" container>
                <Glow {...props}>
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate subtitle="타원형 발광 효과" title="Type - ellipse" container>
                <Glow {...props} type="ellipse">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate subtitle="불규칙적인 발광 효과" title="Type - irregular" container>
                <Glow {...props} type="irregular">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate subtitle="방향성 발광 효과" title="Type - directional" container>
                <Glow {...props} type="directional">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>
        </StorybookContainer>
}`,...($=(w=x.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var N,G,B;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    colors: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 컬러가 지정된 컴포넌트" title="Colors">
            {colorList.map(color => <div className="flex flex-col gap-4" key={color?.toString()}>
                    <div>
                        <ColorComponent {...props} colors={color} />
                    </div>
                </div>)}
        </StorybookTemplate>
}`,...(B=(G=b.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var D,q,L;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  argTypes: {
    disabled: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="발광 효과가 비활성화된 컴포넌트" title="Disabled" container>
            <Glow {...props} disabled>
                <ImgComponent />
            </Glow>
        </StorybookTemplate>
}`,...(L=(q=g.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};const ee=["Playground","All","Type","Colors","Disabled"];export{u as All,b as Colors,g as Disabled,m as Playground,x as Type,ee as __namedExportsOrder,M as default};
