import{j as n}from"./jsx-runtime-BnHmloXs.js";import"./index-CKMdfnwt.js";import{g as T,S as m,a as p}from"./storybook-CWpip0ZO.js";import{S as x}from"./StorybookTemplate-h4nRBuW0.js";import{C as i}from"./ContentGrid-C4yY-vlE.js";import"./jsx-runtime-BEh3FTX5.js";import"./Tile-D2AVu6SS.js";import"./index-Csb7Hyah.js";import"./index-BZRNBTKr.js";import"./index-BY638psU.js";import"./ContentCard-BZMe1SCe.js";import"./Typography-DdCa_Wgr.js";import"./segment-CIEV7OGa.js";import"./add-base-path-Br4_xqsT.js";import"./AspectRatio-MNHll25_.js";const r="ContentGrid",v={argTypes:{className:p("className",r),id:p("id",r),list:{control:{disable:!0},table:{category:r,subcategory:m.PROP}},loading:{table:{category:r,subcategory:m.PROP},type:"boolean"}},args:{list:Array.from({length:12}).map((e,t)=>({category:"React",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim exercitationem, blanditiis amet doloribus doloremque, ratione recusandae nobis tenetur assumenda officiis ipsam molestias provident ullam inventore et itaque molestiae autem.",href:`/${t}`,tags:["React","Next.js","Storybook","TypeScript"],thumbnail:`https://placehold.co/600/FFF/31343C?font=raleway&text=Thumb ${t+1}`,timestamp:Date.now()-864e6*t,title:`Lorem Ipsum ${t+1}`}))},component:i,parameters:T("컨텐츠 그리드 컴포넌트",["카드 정보 리스트를 받아 그리드로 표현하는 컴포넌트입니다."]),tags:["autodocs"],title:"organism/ContentGrid"},o={},a={args:{list:void 0},render:e=>n.jsx(x,{subtitle:"빈 리스트 컴포넌트 예시",title:"Empty",container:!0,children:n.jsx(i,{...e})})},s={argTypes:{loading:{control:{disable:!0}}},args:{list:void 0},render:e=>n.jsx(x,{subtitle:"로딩 상태의 컴포넌트 예시",title:"Loading",container:!0,children:n.jsx(i,{...e,loading:!0})})};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    list: undefined
  },
  render: props => <StorybookTemplate subtitle="빈 리스트 컴포넌트 예시" title="Empty" container>
            <ContentGrid {...props} />
        </StorybookTemplate>
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    loading: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list: undefined
  },
  render: props => <StorybookTemplate subtitle="로딩 상태의 컴포넌트 예시" title="Loading" container>
            <ContentGrid {...props} loading />
        </StorybookTemplate>
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const w=["Playground","Empty","Loading"];export{a as Empty,s as Loading,o as Playground,w as __namedExportsOrder,v as default};
