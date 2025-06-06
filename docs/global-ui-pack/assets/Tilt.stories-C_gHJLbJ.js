import{j as e}from"./jsx-runtime-BnHmloXs.js";import{r as i}from"./index-BCzbi48b.js";import{g as me,S as j,a as P}from"./storybook-CWpip0ZO.js";import{S as ue}from"./StorybookContainer-CXD7EHC6.js";import{S as x}from"./StorybookTemplate-h4nRBuW0.js";import{a as X}from"./util-B8Xjs9R8.js";import{c as ge}from"./utils-jAU0Cazi.js";import"./jsx-runtime-BEh3FTX5.js";function n({disabled:t,angle:r=30,perspective:T=1400,scale:y=1,scaleTransition:a="0.5s",className:b,onMouseMove:c,onMouseEnter:h,onMouseLeave:S,children:re,...te}){const k=i.useRef(null),s=i.useRef(null),[N,R]=i.useState(!1),se=i.useCallback(o=>{if(c==null||c(o),t!==!0&&k.current&&s.current){const $=k.current.getBoundingClientRect(),le=o.clientX-$.left,oe=o.clientY-$.top,A=o.currentTarget.scrollWidth/2,w=o.currentTarget.scrollHeight/2,ce=A-le,ie=w-oe,pe=X(ie/w,2)*r,de=X(ce/A,2)*r;s.current.style.scale=`${y}`,s.current.style.transform=`perspective(${T}px) rotateX(${pe}deg) rotateY(${-de}deg)`}},[r,T,y,t,c]),ne=i.useCallback(o=>{h==null||h(o),t!==!0&&s.current&&(s.current.style.transition=`${a} scale`,R(!0),setTimeout(()=>{R(!1)},50))},[t,a,h]),ae=i.useCallback(o=>{S==null||S(o),t!==!0&&s.current&&(s.current.style.transition=`${a} ease-out`,s.current.style.scale="",s.current.style.transform="")},[t,a,S]);return i.useEffect(()=>{s.current&&(s.current.style.transition=N?`${a} ease`:`${a} scale`)},[N,a]),e.jsx("div",{className:ge("transform-3d will-change-transform size-full",b),"data-component":"Tilt",ref:k,onMouseEnter:ne,onMouseLeave:ae,onMouseMove:se,...te,children:e.jsx("div",{className:"flex size-full",ref:s,children:re})})}n.__docgenInfo={description:`틸트 molecule 컴포넌트 반환 메서드

@param {TiltProps} param0: TiltProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Tilt",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"틸트 비활성화 여부"},angle:{required:!1,tsType:{name:"number"},description:"회전각",defaultValue:{value:"30",computed:!1}},perspective:{required:!1,tsType:{name:"number"},description:"원근법",defaultValue:{value:"1400",computed:!1}},scale:{required:!1,tsType:{name:"CSSProperties['scale']",raw:"CSSProperties['scale']"},description:"스케일",defaultValue:{value:"1",computed:!1}},scaleTransition:{required:!1,tsType:{name:"CSSProperties['transitionDuration']",raw:"CSSProperties['transitionDuration']"},description:"스케일 시간",defaultValue:{value:"'0.5s'",computed:!1}}},composes:["DetailedHTMLProps"]};const p="Tilt",ke={argTypes:{angle:{table:{category:p,subcategory:j.PROP},type:"number"},children:P("children",p),className:P("className",p),disabled:{table:{category:p,subcategory:j.PROP}},id:P("id",p),perspective:{table:{category:p,subcategory:j.PROP},type:"number"},scale:{table:{category:p,subcategory:j.PROP},type:"number"}},args:{angle:30,perspective:1400,scale:1},component:n,parameters:me("틸트 컴포넌트",["자식 객체에 틸트 효과를 제공하는 컴포넌트입니다.","호버링 시, 현재 마우스 포인터를 중심으로 틸팅 효과를 제공합니다.","`angle`, `perspective`, `scale` 프로퍼티를 통해, 틸팅 시 효과를 조정할 수 있습니다.","`disabled`를 통해 효과를 비활성화할 수 있습니다."]),tags:["autodocs"],title:"molecule/Tilt"},fe=Array.from({length:6}).map((t,r)=>(r+1)*10),xe=Array.from({length:6}).map((t,r)=>(r+1)*500),ee=Array.from({length:6}).map((t,r)=>(r+1)*2/10);function l(){return e.jsx("div",{className:"flex size-full items-center justify-center border","data-component":"ChildrenComponent",children:e.jsx("img",{className:"size-full object-cover",src:"https://img.freepik.com/premium-photo/backgrounds-night-sky-with-stars-clouds_180633-2378.jpg?semt=ais_hybrid"})})}const v={args:{children:e.jsx(l,{}),className:"max-w-[640px] max-h-[640px] w-full h-full flex items-center justify-center"}},C={parameters:{controls:{disable:!0}},render:(t,r)=>{var T,y,a,b,c;return e.jsxs(ue,{children:[(T=d.render)==null?void 0:T.call(d,t,r),(y=m.render)==null?void 0:y.call(m,t,r),(a=u.render)==null?void 0:a.call(u,t,r),(b=g.render)==null?void 0:b.call(g,t,r),(c=f.render)==null?void 0:c.call(f,t,r),e.jsxs(x,{subtitle:"다양한 예시",title:"Example",children:[e.jsx(n,{angle:20,perspective:1200,scale:.8,scaleTransition:"500ms",children:e.jsx(l,{})}),e.jsx(n,{angle:70,perspective:500,scale:1,scaleTransition:"300ms",children:e.jsx(l,{})}),e.jsx(n,{angle:15,perspective:3e3,scale:1.3,scaleTransition:"500ms",children:e.jsx(l,{})}),e.jsx(n,{angle:20,perspective:1700,scale:1.5,scaleTransition:"3s",children:e.jsx(l,{})})]})]})}},d={argTypes:{angle:{control:{disable:!0}}},render:t=>e.jsx(x,{subtitle:"다양한 각도가 적용된 컴포넌트",title:"Angle",children:fe.map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...t,angle:r,children:e.jsx(l,{})}),e.jsxs("p",{children:[r," deg"]})]},r))})},m={argTypes:{perspective:{control:{disable:!0}}},render:t=>e.jsx(x,{subtitle:"다양한 원근각이 적용된 컴포넌트",title:"Perspective",children:xe.map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...t,perspective:r,children:e.jsx(l,{})}),e.jsx("p",{children:r})]},r))})},u={argTypes:{scale:{control:{disable:!0}}},render:t=>e.jsx(x,{subtitle:"다양한 스케일이 적용된 컴포넌트",title:"Scale",children:ee.map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...t,scale:r,children:e.jsx(l,{})}),e.jsx("p",{children:r})]},r))})},g={argTypes:{scaleTransition:{control:{disable:!0}}},render:t=>e.jsx(x,{subtitle:"다양한 스케일 시간이 적용된 컴포넌트",title:"Scale Transtion",children:ee.map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(n,{...t,scale:.8,scaleTransition:`${r}s`,children:e.jsx(l,{})}),e.jsxs("p",{children:[r,"s"]})]},r))})},f={argTypes:{disabled:{control:{disable:!0}}},render:t=>e.jsx(x,{subtitle:"틸트가 비활성화된 컴포넌트",title:"Disabled",container:!0,children:e.jsx(n,{...t,disabled:!0,children:e.jsx(l,{})})})};var D,_,q;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: <ChildrenComponent />,
    className: 'max-w-[640px] max-h-[640px] w-full h-full flex items-center justify-center'
  }
}`,...(q=(_=v.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var E,O,Y;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (props, context) => <StorybookContainer>
            {Angle.render?.(props, context)}
            {Perspective.render?.(props, context)}
            {Scale.render?.(props, context)}
            {ScaleTranstion.render?.(props, context)}
            {Disabled.render?.(props, context)}

            <StorybookTemplate subtitle="다양한 예시" title="Example">
                <Tilt angle={20} perspective={1200} scale={0.8} scaleTransition="500ms">
                    <ChildrenComponent />
                </Tilt>

                <Tilt angle={70} perspective={500} scale={1} scaleTransition="300ms">
                    <ChildrenComponent />
                </Tilt>

                <Tilt angle={15} perspective={3000} scale={1.3} scaleTransition="500ms">
                    <ChildrenComponent />
                </Tilt>

                <Tilt angle={20} perspective={1700} scale={1.5} scaleTransition="3s">
                    <ChildrenComponent />
                </Tilt>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(Y=(O=C.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var z,V,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  argTypes: {
    angle: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 각도가 적용된 컴포넌트" title="Angle">
            {angles.map(angle => <div className="flex flex-col items-center gap-2" key={angle}>
                    <Tilt {...props} angle={angle}>
                        <ChildrenComponent />
                    </Tilt>

                    <p>{angle} deg</p>
                </div>)}
        </StorybookTemplate>
}`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var J,B,I;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  argTypes: {
    perspective: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 원근각이 적용된 컴포넌트" title="Perspective">
            {perspectives.map(perspective => <div className="flex flex-col items-center gap-2" key={perspective}>
                    <Tilt {...props} perspective={perspective}>
                        <ChildrenComponent />
                    </Tilt>

                    <p>{perspective}</p>
                </div>)}
        </StorybookTemplate>
}`,...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var W,F,G;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
    scale: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 스케일이 적용된 컴포넌트" title="Scale">
            {scales.map(scale => <div className="flex flex-col items-center gap-2" key={scale}>
                    <Tilt {...props} scale={scale}>
                        <ChildrenComponent />
                    </Tilt>

                    <p>{scale}</p>
                </div>)}
        </StorybookTemplate>
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  argTypes: {
    scaleTransition: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 스케일 시간이 적용된 컴포넌트" title="Scale Transtion">
            {scales.map(scale => <div className="flex flex-col items-center gap-2" key={scale}>
                    <Tilt {...props} scale={0.8} scaleTransition={\`\${scale}s\`}>
                        <ChildrenComponent />
                    </Tilt>

                    <p>{scale}s</p>
                </div>)}
        </StorybookTemplate>
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,L,M;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  argTypes: {
    disabled: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="틸트가 비활성화된 컴포넌트" title="Disabled" container>
            <Tilt {...props} disabled>
                <ChildrenComponent />
            </Tilt>
        </StorybookTemplate>
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Pe=["Playground","All","Angle","Perspective","Scale","ScaleTranstion","Disabled"];export{C as All,d as Angle,f as Disabled,m as Perspective,v as Playground,u as Scale,g as ScaleTranstion,Pe as __namedExportsOrder,ke as default};
