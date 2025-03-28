import{j as l}from"./jsx-runtime-BnHmloXs.js";import"./index-r57MSJFk.js";import{g,a as r}from"./storybook-CWpip0ZO.js";import{T as F}from"./Tile-CLVcBFIU.js";import"./jsx-runtime-BEh3FTX5.js";import"./utils-jAU0Cazi.js";const t="Tile",B={argTypes:{children:r("children",t),className:r("className",t),id:r("id",t)},component:F,parameters:g("정사각형 타일 컴포넌트","width 크기에 따라 정사각형으로 렌더링되는 타일 컴포넌트입니다."),tags:["autodocs"],title:"atom/Tile"},m=[{bgcolor:"#FF5733",color:"#F0F8FF",title:"T"},{bgcolor:"#5D3FD3",color:"#FFD700",title:"H"},{bgcolor:"#1E90FF",color:"#FF6347",title:"I"},{bgcolor:"#228B22",color:"#FFD700",title:"S"},{bgcolor:"#FF1493",color:"#FFFF00",title:""},{bgcolor:"#00CED1",color:"#8B0000",title:"I"},{bgcolor:"#FFD700",color:"#2E8B57",title:"S"},{bgcolor:"#F08080",color:"#8A2BE2",title:""},{bgcolor:"#FF8C00",color:"#4682B4",title:"S"},{bgcolor:"#4B0082",color:"#FF4500",title:"Q"},{bgcolor:"#8A2BE2",color:"#FFFF00",title:"U"},{bgcolor:"#32CD32",color:"#2F4F4F",title:"A"},{bgcolor:"#FF6347",color:"#00008B",title:"R"},{bgcolor:"#20B2AA",color:"#FFD700",title:"E"},{bgcolor:"#800080",color:"#00FF00",title:""},{bgcolor:"#DC143C",color:"#FFFFF0",title:""},{bgcolor:"#FF69B4",color:"#0000FF",title:"T"},{bgcolor:"#F4A460",color:"#2F4F4F",title:"I"},{bgcolor:"#008080",color:"#FFD700",title:"L"},{bgcolor:"#FF4500",color:"#FFFFFF",title:"E"},{bgcolor:"#B22222",color:"#F0F8FF",title:""}],o={parameters:{controls:{disable:!0}},render:()=>l.jsx("div",{className:"grid grid-cols-7",children:m.map(({bgcolor:s,color:a,title:n},d)=>l.jsx(F,{style:{backgroundColor:s,color:a},children:l.jsx("div",{className:"flex size-full items-center justify-center text-[8vw] font-bold [text-shadow:_0.5vw_0.5vw_0_black]",children:n})},d))})};var e,c,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="grid grid-cols-7">
            {list.map(({
      bgcolor,
      color,
      title
    }, idx) => <Tile key={idx} style={{
      backgroundColor: bgcolor,
      color
    }}>
                    <div className="flex size-full items-center justify-center text-[8vw] font-bold [text-shadow:_0.5vw_0.5vw_0_black]">{title}</div>
                </Tile>)}
        </div>
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const D=["Playground"];export{o as Playground,D as __namedExportsOrder,B as default};
