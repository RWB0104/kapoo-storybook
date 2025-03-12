import{j as e}from"./jsx-runtime-BnHmloXs.js";import{r as a}from"./index-XLJyvO9z.js";import{g as W,S as i,a as S}from"./storybook-hTxjENzG.js";import{I as Y}from"./Input-CVRXXRWg.js";import{S as f}from"./StorybookContainer-CXD7EHC6.js";import{S as r}from"./StorybookTemplate-h4nRBuW0.js";import"./jsx-runtime-BEh3FTX5.js";import"./utils-jAU0Cazi.js";function l({url:t,countBgcolor:o,titleBgcolor:X,icon:z,iconColor:G,title:K,isFlat:M,...Q}){const v=Object.entries({count_bg:o,edge_flat:M,icon:z,icon_color:G,title:K,title_bg:X,url:t}).reduce((h,[V,k])=>(k!==void 0&&h.push(`${V}=${encodeURIComponent(k)}`),h),[]).join("&");return e.jsx("img",{alt:`https://hits.seeyoufarm.com/api/count/incr/badge.svg?${v}`,"data-component":"Hits",src:`https://hits.seeyoufarm.com/api/count/incr/badge.svg?${v}`,...Q})}l.__docgenInfo={description:`Hits atom 컴포넌트 반환 메서드

@param {HitsProps} param0: HitsProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Hits",props:{url:{required:!0,tsType:{name:"string"},description:"카운팅할 대상 URL"},countBgcolor:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"카운트 영역의 배경색"},titleBgcolor:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"타이틀 영역의 배경색"},icon:{required:!1,tsType:{name:"string"},description:"아이콘 [(Simple Badge)](https://simpleicons.org/)"},iconColor:{required:!1,tsType:{name:"CSSProperties['backgroundColor']",raw:"CSSProperties['backgroundColor']"},description:"아이콘 색상"},title:{required:!1,tsType:{name:"string"},description:"텍스트"},isFlat:{required:!1,tsType:{name:"boolean"},description:"플랫 디자인 여부"}},composes:["Omit"]};const s="Hits",ne={argTypes:{className:S("className",s),countBgcolor:{control:{type:"color"},table:{category:s,subcategory:i.PROP}},icon:{table:{category:s,subcategory:i.PROP}},iconColor:{control:{type:"color"},table:{category:s,subcategory:i.PROP}},id:S("id",s),isFlat:{table:{category:s,subcategory:i.PROP}},title:{table:{category:s,subcategory:i.PROP}},titleBgcolor:{control:"color",table:{category:s,subcategory:i.PROP}},url:{table:{category:s,subcategory:i.PROP}}},args:{url:"https://example.com"},component:l,parameters:W("방문자수 카운팅 이미지 컴포넌트",["[hits.seeyoufarm.com](https://hits.seeyoufarm.com)을 활용하여 방문자수를 카운팅합니다.","이미지가 호출될 때마다 카운팅이 하나씩 늘어나며, 오늘 / 전체 방문자 수를 확인할 수 있습니다.","방문자 수는 별도의 변경이 불가능하며, 오로지 누적만 가능합니다.","","아이콘은 [SimpleIcons](https://simpleicons.org/)를 사용하며, 해당 아이콘의 이름에 .svg를 붙여 사용해야합니다.","ex) react -> react.svg"]),tags:["autodocs"],title:"atom/Hits"},Z=["https://example.com","https://storybook.js.org/","https://hits.seeyoufarm.com"],y=["#FF6B6B","#FFA94D","#FFD43B","#76C893","#34A0A4","#1E6091","#C77DFF","#7B2CBF","#E056FD","#F72585"],x=["typescript.svg","react.svg","next-dot-js.svg","github.svg","storybook.svg"];function c(t){return e.jsx("div",{className:"flex flex-col gap-4",children:y.map(o=>a.createElement(l,{titleBgcolor:o,...t,countBgcolor:o,key:o,url:"https://example.com"}))})}const n={},d={parameters:{controls:{disable:!0}},render:t=>e.jsxs(f,{children:[e.jsx(r,{subtitle:"다양한 색상이 적용된 기본 컴포넌트",title:"Basic",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx(c,{...t,titleBgcolor:void 0})})}),e.jsx(r,{subtitle:"react.svg 아이콘이 적용된 컴포넌트",title:"Icon",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx(c,{...t,icon:"react.svg",titleBgcolor:void 0})})}),e.jsx(r,{subtitle:"react.svg 아이콘과 아이콘 색상이 적용된 컴포넌트",title:"Icon with Color",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx(c,{...t,icon:"react.svg",iconColor:"#61DAFB",titleBgcolor:void 0})})}),e.jsx(r,{subtitle:"다양한 아이콘 배경색이 적용된 컴포넌트",title:"Icon with Background container",children:e.jsx("div",{className:"flex",children:e.jsx(c,{...t,icon:"react.svg"})})}),e.jsx(r,{subtitle:"아이콘 타이틀 'react'가 적용된 컴포넌트",title:"Icon with Title",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx(c,{...t,icon:"react.svg",iconColor:"#61DAFB",title:"react",titleBgcolor:void 0})})}),e.jsx(r,{subtitle:"플랫(각진 모서리) 디자인이 적용된 컴포넌트",title:"Flat",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx(c,{...t,icon:"react.svg",iconColor:"#61DAFB",titleBgcolor:void 0,isFlat:!0})})})]})},p={argTypes:{url:{control:{disable:!0}}},render:t=>e.jsx(r,{subtitle:"URL별 기본 컴포넌트",title:"URL",children:Z.map(o=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"flex",children:e.jsx(l,{...t,url:o})}),e.jsx(Y,{value:o,readOnly:!0})]},o))})},m={argTypes:{countBgcolor:{control:{disable:!0}},iconColor:{control:{disable:!0}},titleBgcolor:{control:{disable:!0}}},args:{icon:"react.svg"},render:t=>e.jsxs(f,{children:[e.jsx(r,{subtitle:"텍스트 배경색이 적용된 컴포넌트",title:"Text with Background",container:!0,children:y.map(o=>a.createElement(l,{...t,countBgcolor:o,icon:void 0,key:o}))}),e.jsx(r,{subtitle:"아이콘 색상이 적용된 컴포넌트",title:"Icon with Color",container:!0,children:y.map(o=>a.createElement(l,{...t,iconColor:o,key:o}))}),e.jsx(r,{subtitle:"아이콘 배경색이 적용된 컴포넌트",title:"Icon with Background",container:!0,children:y.map(o=>a.createElement(l,{...t,icon:void 0,key:o,titleBgcolor:o}))})]})},u={argTypes:{icon:{control:{disable:!0}}},args:{iconColor:"white"},render:t=>e.jsx(r,{subtitle:"다양한 아이콘이 적용된 컴포넌트",title:"Icon",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx("div",{className:"flex flex-col gap-4",children:x.map(o=>a.createElement(l,{...t,icon:o,key:o}))})})})},g={argTypes:{title:{control:{disable:!0}}},render:t=>e.jsx(r,{subtitle:"다양한 타이틀이 적용된 컴포넌트",title:"Label",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx("div",{className:"flex flex-col gap-4",children:x.map(o=>e.jsx("div",{className:"",children:a.createElement(l,{...t,key:o,title:o.split(".")[0]})},o))})})})},b={argTypes:{icon:{control:{disable:!0}},isFlat:{control:{disable:!0}}},args:{iconColor:"white"},render:t=>e.jsxs(f,{children:[e.jsx(r,{subtitle:"비교군을 위한 기본 컴포넌트",title:"Basic",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx("div",{className:"flex flex-col gap-4",children:x.map(o=>a.createElement(l,{...t,icon:o,key:o}))})})}),e.jsx(r,{subtitle:"플랫(각진 모서리) 디자인이 적용된 컴포넌트",title:"Flat",container:!0,children:e.jsx("div",{className:"flex",children:e.jsx("div",{className:"flex flex-col gap-4",children:x.map(o=>a.createElement(l,{...t,icon:o,key:o,isFlat:!0}))})})})]})};var T,C,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var B,N,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="다양한 색상이 적용된 기본 컴포넌트" title="Basic" container>
                <div className="flex">
                    <AllComp {...props} titleBgcolor={undefined} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="react.svg 아이콘이 적용된 컴포넌트" title="Icon" container>
                <div className="flex">
                    <AllComp {...props} icon="react.svg" titleBgcolor={undefined} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="react.svg 아이콘과 아이콘 색상이 적용된 컴포넌트" title="Icon with Color" container>
                <div className="flex">
                    <AllComp {...props} icon="react.svg" iconColor="#61DAFB" titleBgcolor={undefined} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="다양한 아이콘 배경색이 적용된 컴포넌트" title="Icon with Background container">
                <div className="flex">
                    <AllComp {...props} icon="react.svg" />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="아이콘 타이틀 'react'가 적용된 컴포넌트" title="Icon with Title" container>
                <div className="flex">
                    <AllComp {...props} icon="react.svg" iconColor="#61DAFB" title="react" titleBgcolor={undefined} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="플랫(각진 모서리) 디자인이 적용된 컴포넌트" title="Flat" container>
                <div className="flex">
                    <AllComp {...props} icon="react.svg" iconColor="#61DAFB" titleBgcolor={undefined} isFlat />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(F=(N=d.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var P,I,w;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {
    url: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="URL별 기본 컴포넌트" title="URL">
            {urls.map(url => <div className="flex flex-col gap-2" key={url}>
                    <div className="flex">
                        <Hits {...props} url={url} />
                    </div>

                    <Input value={url} readOnly />
                </div>)}
        </StorybookTemplate>
}`,...(w=(I=p.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var A,H,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  argTypes: {
    countBgcolor: {
      control: {
        disable: true
      }
    },
    iconColor: {
      control: {
        disable: true
      }
    },
    titleBgcolor: {
      control: {
        disable: true
      }
    }
  },
  args: {
    icon: 'react.svg'
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="텍스트 배경색이 적용된 컴포넌트" title="Text with Background" container>
                {colors.map(color => <Hits {...props} countBgcolor={color} icon={undefined} key={color} />)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="아이콘 색상이 적용된 컴포넌트" title="Icon with Color" container>
                {colors.map(color => <Hits {...props} iconColor={color} key={color} />)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="아이콘 배경색이 적용된 컴포넌트" title="Icon with Background" container>
                {colors.map(color => <Hits {...props} icon={undefined} key={color} titleBgcolor={color} />)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var E,O,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  argTypes: {
    icon: {
      control: {
        disable: true
      }
    }
  },
  args: {
    iconColor: 'white'
  },
  render: props => <StorybookTemplate subtitle="다양한 아이콘이 적용된 컴포넌트" title="Icon" container>
            <div className="flex">
                <div className="flex flex-col gap-4">
                    {icons.map(icon => <Hits {...props} icon={icon} key={icon} />)}
                </div>
            </div>
        </StorybookTemplate>
}`,...(D=(O=u.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var U,_,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  argTypes: {
    title: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 타이틀이 적용된 컴포넌트" title="Label" container>
            <div className="flex">
                <div className="flex flex-col gap-4">
                    {icons.map(icon => <div className="" key={icon}>
                            <Hits {...props} key={icon} title={icon.split('.')[0]} />
                        </div>)}
                </div>
            </div>
        </StorybookTemplate>
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var L,$,J;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    icon: {
      control: {
        disable: true
      }
    },
    isFlat: {
      control: {
        disable: true
      }
    }
  },
  args: {
    iconColor: 'white'
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="비교군을 위한 기본 컴포넌트" title="Basic" container>
                <div className="flex">
                    <div className="flex flex-col gap-4">
                        {icons.map(icon => <Hits {...props} icon={icon} key={icon} />)}
                    </div>
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="플랫(각진 모서리) 디자인이 적용된 컴포넌트" title="Flat" container>
                <div className="flex">
                    <div className="flex flex-col gap-4">
                        {icons.map(icon => <Hits {...props} icon={icon} key={icon} isFlat />)}
                    </div>
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(J=($=b.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const de=["Playground","All","Url","Color","Icon","Title","Flat"];export{d as All,m as Color,b as Flat,u as Icon,n as Playground,g as Title,p as Url,de as __namedExportsOrder,ne as default};
