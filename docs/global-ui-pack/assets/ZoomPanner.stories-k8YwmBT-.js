import{j as e}from"./jsx-runtime-BnHmloXs.js";import{r as f}from"./index-r57MSJFk.js";import{m as G}from"./util-DwZTi0oS.js";import{g as J,S as i,a as Z}from"./storybook-CWpip0ZO.js";import{B as a}from"./Button-Dh0nduKR.js";import{S as K}from"./StorybookContainer-CXD7EHC6.js";import{S as n}from"./StorybookTemplate-h4nRBuW0.js";import{Z as s}from"./ZoomPanner-7j3MdGep.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-Bx25MwHp.js";import"./utils-jAU0Cazi.js";const m="ZoomPanner",se={argTypes:{children:Z("children",m),className:Z("className",m),controller:{table:{category:m,subcategory:i.EV,type:{detail:"(func: ZoomPannerControllerProps) => void",summary:"ZoomPannerControllerHandler"}}},defaultZoom:{table:{category:m,subcategory:i.PROP}},id:Z("id",m),onZoomChange:{table:{category:m,subcategory:i.EV,type:{detail:"(zoom: number) => void",summary:"ZoomPannerZoomChangeHandler"}}},zoomUnit:{table:{category:m,subcategory:i.PROP}}},component:s,parameters:J("줌패닝 컴포넌트",["자식 노드에게 줌과 패닝을 제공하는 컴포넌트입니다.","`defaultZoom`, `ZoomUnit` 요소를 조정하여, 기본 줌 레벨과 줌 확대/축소 단위를 지정할 수 있습니다.","`controller`를 통해 컨트롤러 객체를 제공받아, 메서드로 조작할 수 있습니다."]),tags:["autodocs"],title:"organism/ZoomPanner"},x=Array.from({length:10}).map((t,o)=>(o+1)*10/100);function R({...t}){const[o,h]=f.useState(),r=()=>{o==null||o.zoomIn()},b=()=>{o==null||o.zoomOut()},C=()=>{o==null||o.reset()};return e.jsxs("div",{className:"flex flex-col",children:[e.jsx(s,{controller:h,...t,children:e.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"})}),e.jsxs("div",{className:"flex justify-center gap-2 p-4",children:[e.jsx(a,{onClick:r,children:"확대"}),e.jsx(a,{onClick:b,children:"축소"}),e.jsx(a,{onClick:C,children:"초기화"})]})]})}function E({...t}){const[o,h]=f.useState(1),[r,b]=f.useState(),C=()=>{r==null||r.zoomIn()},I=()=>{r==null||r.zoomOut()},B=()=>{r==null||r.reset()},H=f.useCallback(V=>{h(V)},[]);return e.jsxs("div",{className:"relative flex flex-col",children:[e.jsx(s,{...t,controller:b,onZoomChange:H,children:e.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"})}),e.jsxs("div",{className:"flex justify-center gap-2 p-4",children:[e.jsx(a,{onClick:C,children:"확대"}),e.jsx(a,{onClick:I,children:"축소"}),e.jsx(a,{onClick:B,children:"초기화"})]}),e.jsx("div",{className:"absolute bottom-4 left-4 rounded border px-4 py-2",children:e.jsxs("p",{children:[G(o*100,0),"%"]})})]})}const l={render:t=>e.jsx("div",{className:"absolute left-0 top-0 size-full",children:e.jsx(s,{...t,children:e.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"})})})},c={render:t=>e.jsxs(K,{children:[e.jsx(n,{subtitle:"기본 줌 레벨이 지정된 컴포넌트",title:"Default Zoom",children:x.map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{...t,defaultZoom:o,children:e.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"})}),e.jsxs("p",{children:["scale ",o]})]},o))}),e.jsx(n,{subtitle:"줌 확대/축소 단위가 지정된 컴포넌트",title:"Zoom Unit",children:x.map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{...t,zoomUnit:o,children:e.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"})}),e.jsxs("p",{children:["zoomUnit ",o]})]},o))}),e.jsx(n,{subtitle:"컨트롤러 객체를 활용한 컴포넌트",title:"Controller",container:!0,children:e.jsx(R,{...t})}),e.jsx(n,{subtitle:"줌 변경 이벤트를 활용한 예시",title:"OnZoomChange",container:!0,children:e.jsx(E,{...t})})]})},p={argTypes:{defaultZoom:{control:{disable:!0}}},render:t=>e.jsx(n,{subtitle:"기본 줌 레벨이 지정된 컴포넌트",title:"Default Zoom",children:x.map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{...t,defaultZoom:o,children:e.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"})}),e.jsxs("p",{children:["scale ",o]})]},o))})},d={argTypes:{zoomUnit:{control:{disable:!0}}},render:t=>e.jsx(n,{subtitle:"줌 확대/축소 단위가 지정된 컴포넌트",title:"Zoom Unit",children:x.map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{...t,zoomUnit:o,children:e.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"})}),e.jsxs("p",{children:["zoomUnit ",o]})]},o))})},u={render:t=>e.jsx(n,{subtitle:"컨트롤러 객체를 활용한 컴포넌트",title:"Controller",container:!0,children:e.jsx(R,{...t})})},g={render:t=>e.jsx(n,{subtitle:"줌 변경 이벤트를 활용한 예시",title:"OnZoomChange",container:!0,children:e.jsx(E,{...t})})};var j,S,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <div className="absolute left-0 top-0 size-full">
            <ZoomPanner {...props}>
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png" />
            </ZoomPanner>
        </div>
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var z,k,v;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="기본 줌 레벨이 지정된 컴포넌트" title="Default Zoom">
                {zooms.map(zoom => <div className="flex flex-col items-center gap-2" key={zoom}>
                        <ZoomPanner {...props} defaultZoom={zoom}>
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png" />
                        </ZoomPanner>

                        <p>scale {zoom}</p>
                    </div>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="줌 확대/축소 단위가 지정된 컴포넌트" title="Zoom Unit">
                {zooms.map(zoom => <div className="flex flex-col items-center gap-2" key={zoom}>
                        <ZoomPanner {...props} zoomUnit={zoom}>
                            <img src="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png" />
                        </ZoomPanner>

                        <p>zoomUnit {zoom}</p>
                    </div>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="컨트롤러 객체를 활용한 컴포넌트" title="Controller" container>
                <ControllerComponent {...props} />
            </StorybookTemplate>

            <StorybookTemplate subtitle="줌 변경 이벤트를 활용한 예시" title="OnZoomChange" container>
                <ZoomChangeComponent {...props} />
            </StorybookTemplate>
        </StorybookContainer>
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var A,_,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  argTypes: {
    defaultZoom: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="기본 줌 레벨이 지정된 컴포넌트" title="Default Zoom">
            {zooms.map(zoom => <div className="flex flex-col items-center gap-2" key={zoom}>
                    <ZoomPanner {...props} defaultZoom={zoom}>
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png" />
                    </ZoomPanner>

                    <p>scale {zoom}</p>
                </div>)}
        </StorybookTemplate>
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,P,T;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  argTypes: {
    zoomUnit: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="줌 확대/축소 단위가 지정된 컴포넌트" title="Zoom Unit">
            {zooms.map(zoom => <div className="flex flex-col items-center gap-2" key={zoom}>
                    <ZoomPanner {...props} zoomUnit={zoom}>
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png" />
                    </ZoomPanner>

                    <p>zoomUnit {zoom}</p>
                </div>)}
        </StorybookTemplate>
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var N,U,w;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="컨트롤러 객체를 활용한 컴포넌트" title="Controller" container>
            <ControllerComponent {...props} />
        </StorybookTemplate>
}`,...(w=(U=u.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var F,Q,D;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="줌 변경 이벤트를 활용한 예시" title="OnZoomChange" container>
            <ZoomChangeComponent {...props} />
        </StorybookTemplate>
}`,...(D=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:D.source}}};const me=["Playground","All","DefaultZoom","ZoomUnit","Controller","OnZoomChange"];export{c as All,u as Controller,p as DefaultZoom,g as OnZoomChange,l as Playground,d as ZoomUnit,me as __namedExportsOrder,se as default};
