import{j as e}from"./jsx-runtime-CcAjkvR0.js";import"./iframe-aPIFiJaF.js";import{g as U,S as w,a as C}from"./storybook-CWpip0ZO.js";import{S as j}from"./StorybookContainer-D4uBUgnn.js";import{S as r}from"./StorybookTemplate-DgDGKC7c.js";import{c as Z}from"./utils-jAU0Cazi.js";import{a as F}from"./util-DkkZxc2e.js";const M=["#CCCCCCCC","#BFBFBF3F 30%","#373737 130%"];function n({type:t,colors:o=M,brightness:l=.2,disabled:V,className:K,onMouseMove:x,children:W,...Y}){const Q=i=>{if(x==null||x(i),V!==!0){const a=i.nativeEvent.offsetX,d=i.nativeEvent.offsetY,c=o.join(", "),f=i.currentTarget.clientWidth,T=i.currentTarget.clientHeight;switch(t){case"ellipse":i.currentTarget.style.background=`radial-gradient(farthest-corner ellipse at ${a}px ${d}px, ${c})`,i.currentTarget.style.backdropFilter="";break;case"irregular":i.currentTarget.style.background=`radial-gradient(farthest-side circle at ${a}px ${d}px, ${c}), radial-gradient(closest-side ellipse at ${a+50}px ${d-30}px, rgba(255,255,255,0.5) 0%, transparent 80%)`,i.currentTarget.style.backdropFilter="";break;case"directional":i.currentTarget.style.background=`linear-gradient(90deg, transparent, ${o[0].split(" ")[0]} 50%, transparent), radial-gradient(farthest-corner circle at ${a}px ${d}px, ${c})`,i.currentTarget.style.backdropFilter="";break;case"width":i.currentTarget.style.background="",i.currentTarget.style.backdropFilter=`brightness(${1+F((a-f/2)*2*l/f,2)})`;break;case"height":i.currentTarget.style.background="",i.currentTarget.style.backdropFilter=`brightness(${1+F((d-T/2)*2*l/T*-1,2)})`;break;default:i.currentTarget.style.background=`radial-gradient(farthest-corner circle at ${a}px ${d}px, ${c})`,i.currentTarget.style.backdropFilter="";break}}};return e.jsxs("div",{className:Z("relative size-full",K),"data-component":"Glow",...Y,children:[e.jsx("div",{className:"absolute top-0 left-0 z-10 size-full select-none opacity-0 mix-blend-soft-light brightness-90 contrast-200 transition-opacity duration-500 hover:opacity-100",onMouseMove:Q}),W]})}n.__docgenInfo={description:`발광 molecule 컴포넌트 반환 메서드

@param {GlowProps} param0: GlowProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Glow",props:{type:{required:!1,tsType:{name:"union",raw:"'ellipse' | 'irregular' | 'directional' | 'width' | 'height'",elements:[{name:"literal",value:"'ellipse'"},{name:"literal",value:"'irregular'"},{name:"literal",value:"'directional'"},{name:"literal",value:"'width'"},{name:"literal",value:"'height'"}]},description:"발광 타입"},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`색상 배열

@default [ '#CCCCCCCC', '#BFBFBF3F 30%', '#373737 130%' ]`,defaultValue:{value:"['#CCCCCCCC', '#BFBFBF3F 30%', '#373737 130%']",computed:!1}},brightness:{required:!1,tsType:{name:"number"},description:"밝기 (width, height 전용)",defaultValue:{value:"0.2",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"}},composes:["DetailedHTMLProps"]};const p="Glow",X=[void 0,"ellipse","irregular","directional","width","height"],H=[void 0,["#FFD700","#FFB347 40%","#FF8C00 120%"],["#FF0000","#FF3333 35%","#FF6666 65%","#FF9999 100%"],["#B0C4DE","#87CEEB 50%","#4682B4 110%"],["#D8BFD8","#BA55D3 45%","#800080 115%"],["#00FFFF","#00BFFF 35%","#0000FF 125%"],["#FF4500","#FF6347 40%","#FFA07A 80%","#FFDAB9 120%"],["#001F3F","#0074D9 50%","#7FDBFF 100%"],["#1B1464","#2E3192 30%","#007F5F 60%","#00B894 100%"],["#FF0000","#FF1493 50%","#FF4500 120%"],["#556B2F","#6B8E23 40%","#9ACD32 90%","#ADFF2F 130%"]],le={argTypes:{children:C("children",p),className:C("className",p),colors:{table:{category:p,subcategory:w.PROP}},disabled:{table:{category:p,subcategory:w.PROP}},type:{table:{category:p,subcategory:w.PROP,type:{summary:X.filter(t=>t!==void 0).join(" | ")}}}},component:n,parameters:U("발광 컴포넌트",["자식 객체에 발광 효과를 제공하는 컴포넌트입니다.","호버링 시, 현재 마우스 포인터를 중심으로 발광 효과를 제공합니다.","`colors` 프로퍼티로 색 배열을 지정하여 원하는 효과를 주거나, `disabled`를 통해 발광 효과를 조건부로 없앨 수도 있습니다."]),tags:["autodocs"],title:"molecule/Glow"};function s(){return e.jsx("img",{"aria-label":"img",className:"size-full object-cover","data-component":"ImgComponent",src:"https://cdn.assets.lomography.com/86/93d57e0bd8e88f6890c1687803700ab45f3007/576x576x2.jpg?auth=fb4474f73f10307f800cfe75a5a7052702f6d316"})}function J({colors:t,...o}){return e.jsxs(n,{colors:t,...o,children:[e.jsx(s,{}),t?e.jsx("div",{className:"absolute right-2 bottom-2 rounded bg-white p-2",children:t.map(l=>e.jsxs("div",{className:"flex flex-row items-center gap-2 text-black text-xs",children:[e.jsx("div",{className:"size-3 rounded",style:{background:l}}),e.jsx("p",{children:l})]},l))}):null]})}const m={args:{children:e.jsx(s,{}),className:"size-[640px]"}},h={render:()=>e.jsxs(j,{children:[e.jsxs(r,{subtitle:"컴포넌트 기본 형태",title:"Base",children:[e.jsx(n,{children:e.jsxs("div",{className:"flex size-full flex-col gap-2 border p-4",children:[e.jsx("p",{className:"font-bold text-lg",children:"Title Text"}),e.jsx("p",{className:"text-muted-foreground",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsx("br",{}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam, nulla placeat commodi."})]})}),e.jsx(n,{children:e.jsx(s,{})})]}),e.jsxs(r,{subtitle:"컴포넌트 비활성화",title:"Disabled",children:[e.jsx(n,{disabled:!0,children:e.jsxs("div",{className:"flex size-full flex-col gap-2 border p-4",children:[e.jsx("p",{className:"font-bold text-lg",children:"Title Text"}),e.jsx("p",{className:"text-muted-foreground",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsx("br",{}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam, nulla placeat commodi."})]})}),e.jsx(n,{disabled:!0,children:e.jsx(s,{})})]}),X.map((t,o)=>e.jsx(r,{subtitle:`다양한 color에 따른 ${t??"기본"} type 표현`,title:`type - ${t??"default"}`,children:H.map(l=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx("div",{children:e.jsx(J,{colors:l,type:t})})},`${t}-${o}-${l==null?void 0:l.toString()}`))},`${t}-${o}`)),e.jsxs(r,{subtitle:"다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)",title:"Brightness - width",children:[e.jsx(n,{type:"width",children:e.jsx(s,{})}),e.jsx(n,{brightness:.4,type:"width",children:e.jsx(s,{})}),e.jsx(n,{brightness:.6,type:"width",children:e.jsx(s,{})}),e.jsx(n,{brightness:.8,type:"width",children:e.jsx(s,{})})]}),e.jsxs(r,{subtitle:"다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)",title:"Brightness - height",children:[e.jsx(n,{type:"height",children:e.jsx(s,{})}),e.jsx(n,{brightness:.4,type:"height",children:e.jsx(s,{})}),e.jsx(n,{brightness:.6,type:"height",children:e.jsx(s,{})}),e.jsx(n,{brightness:.8,type:"height",children:e.jsx(s,{})})]})]})},u={argTypes:{type:{control:{disable:!0}}},render:t=>e.jsxs(j,{children:[e.jsx(r,{container:!0,subtitle:"기본적인 원형 발광 효과",title:"Type - default",children:e.jsx(n,{...t,children:e.jsx(s,{})})}),e.jsx(r,{container:!0,subtitle:"타원형 발광 효과",title:"Type - ellipse",children:e.jsx(n,{...t,type:"ellipse",children:e.jsx(s,{})})}),e.jsx(r,{container:!0,subtitle:"불규칙적인 발광 효과",title:"Type - irregular",children:e.jsx(n,{...t,type:"irregular",children:e.jsx(s,{})})}),e.jsx(r,{container:!0,subtitle:"방향성 발광 효과",title:"Type - directional",children:e.jsx(n,{...t,type:"directional",children:e.jsx(s,{})})})]})},g={argTypes:{colors:{control:{disable:!0}}},render:t=>e.jsx(r,{subtitle:"다양한 컬러가 지정된 컴포넌트",title:"Colors",children:H.map(o=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsx("div",{children:e.jsx(J,{...t,colors:o})})},o==null?void 0:o.toString()))})},b={argTypes:{brightness:{control:{disable:!0}}},render:t=>e.jsxs(j,{children:[e.jsxs(r,{subtitle:"다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)",title:"Brightness - width",children:[e.jsx(n,{...t,type:"width",children:e.jsx(s,{})}),e.jsx(n,{...t,brightness:.4,type:"width",children:e.jsx(s,{})}),e.jsx(n,{...t,brightness:.6,type:"width",children:e.jsx(s,{})}),e.jsx(n,{...t,brightness:.8,type:"width",children:e.jsx(s,{})})]}),e.jsxs(r,{subtitle:"다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)",title:"Brightness - height",children:[e.jsx(n,{...t,type:"height",children:e.jsx(s,{})}),e.jsx(n,{...t,brightness:.4,type:"height",children:e.jsx(s,{})}),e.jsx(n,{...t,brightness:.6,type:"height",children:e.jsx(s,{})}),e.jsx(n,{...t,brightness:.8,type:"height",children:e.jsx(s,{})})]})]})},y={argTypes:{disabled:{control:{disable:!0}}},render:t=>e.jsx(r,{container:!0,subtitle:"발광 효과가 비활성화된 컴포넌트",title:"Disabled",children:e.jsx(n,{...t,disabled:!0,children:e.jsx(s,{})})})};var G,k,S;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: <ImgComponent />,
    className: 'size-[640px]'
  }
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var v,B,$;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <StorybookContainer>
            <StorybookTemplate subtitle="컴포넌트 기본 형태" title="Base">
                <Glow>
                    <div className="flex size-full flex-col gap-2 border p-4">
                        <p className="font-bold text-lg">Title Text</p>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita
                            fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam,
                            nulla placeat commodi.
                        </p>
                    </div>
                </Glow>

                <Glow>
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate subtitle="컴포넌트 비활성화" title="Disabled">
                <Glow disabled>
                    <div className="flex size-full flex-col gap-2 border p-4">
                        <p className="font-bold text-lg">Title Text</p>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sed amet expedita
                            fugit ducimus nam nemo iusto, repudiandae id blanditiis non alias aliquam quis minima quisquam,
                            nulla placeat commodi.
                        </p>
                    </div>
                </Glow>

                <Glow disabled>
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            {types.map((type, idx) => <StorybookTemplate
    // biome-ignore lint/suspicious/noArrayIndexKey: need this
    key={\`\${type}-\${idx}\`} subtitle={\`다양한 color에 따른 \${type ?? '기본'} type 표현\`} title={\`type - \${type ?? 'default'}\`}>
                    {colorList.map(color => <div className="flex flex-col gap-4" key={\`\${type}-\${idx}-\${color?.toString()}\`}>
                            <div>
                                <ColorComponent colors={color} type={type} />
                            </div>
                        </div>)}
                </StorybookTemplate>)}

            <StorybookTemplate subtitle="다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)" title="Brightness - width">
                <Glow type="width">
                    <ImgComponent />
                </Glow>

                <Glow brightness={0.4} type="width">
                    <ImgComponent />
                </Glow>

                <Glow brightness={0.6} type="width">
                    <ImgComponent />
                </Glow>

                <Glow brightness={0.8} type="width">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate subtitle="다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)" title="Brightness - height">
                <Glow type="height">
                    <ImgComponent />
                </Glow>

                <Glow brightness={0.4} type="height">
                    <ImgComponent />
                </Glow>

                <Glow brightness={0.6} type="height">
                    <ImgComponent />
                </Glow>

                <Glow brightness={0.8} type="height">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>
        </StorybookContainer>
}`,...($=(B=h.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var I,N,D;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    type: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="기본적인 원형 발광 효과" title="Type - default">
                <Glow {...props}>
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate container subtitle="타원형 발광 효과" title="Type - ellipse">
                <Glow {...props} type="ellipse">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate container subtitle="불규칙적인 발광 효과" title="Type - irregular">
                <Glow {...props} type="irregular">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate container subtitle="방향성 발광 효과" title="Type - directional">
                <Glow {...props} type="directional">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(D=(N=u.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var q,L,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(L=g.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var z,A,E;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: {
    brightness: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)" title="Brightness - width">
                <Glow {...props} type="width">
                    <ImgComponent />
                </Glow>

                <Glow {...props} brightness={0.4} type="width">
                    <ImgComponent />
                </Glow>

                <Glow {...props} brightness={0.6} type="width">
                    <ImgComponent />
                </Glow>

                <Glow {...props} brightness={0.8} type="width">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>

            <StorybookTemplate subtitle="다양한 밝기가 지정된 컴포넌트 (type이 width, height일 경우)" title="Brightness - height">
                <Glow {...props} type="height">
                    <ImgComponent />
                </Glow>

                <Glow {...props} brightness={0.4} type="height">
                    <ImgComponent />
                </Glow>

                <Glow {...props} brightness={0.6} type="height">
                    <ImgComponent />
                </Glow>

                <Glow {...props} brightness={0.8} type="height">
                    <ImgComponent />
                </Glow>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(E=(A=b.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var R,O,_;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  argTypes: {
    disabled: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="발광 효과가 비활성화된 컴포넌트" title="Disabled">
            <Glow {...props} disabled>
                <ImgComponent />
            </Glow>
        </StorybookTemplate>
}`,...(_=(O=y.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const ae=["Playground","All","Type","Colors","Brightness","Disabled"];export{h as All,b as Brightness,g as Colors,y as Disabled,m as Playground,u as Type,ae as __namedExportsOrder,le as default};
