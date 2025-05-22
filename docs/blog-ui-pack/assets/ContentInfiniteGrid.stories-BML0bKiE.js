import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-CKMdfnwt.js";import{g as C,S as a,a as d}from"./storybook-CWpip0ZO.js";import{S as n}from"./StorybookTemplate-h4nRBuW0.js";import{p as c}from"./mock-DSQC9SuI.js";import{C as t}from"./ContentInfiniteGrid-aHNC11uF.js";import"./jsx-runtime-BEh3FTX5.js";import"./ContentGrid-bUT4PuYl.js";import"./hooks-B1ldGSeW.js";import"./utils-jAU0Cazi.js";import"./ContentCard-BP_drmpG.js";import"./link-DlSupBxQ.js";import"./segment-CIEV7OGa.js";import"./add-base-path-zrht_gGq.js";import"./router-context.shared-runtime-Cv5SBY9_.js";import"./use-merged-ref-CTvqUzqe.js";import"./Img-4q12Fo_9.js";import"./index-BY638psU.js";import"./image-context-W3FUK0Wx.js";import"./AspectRatio-CsdoW76c.js";import"./index-Bo4N8-Op.js";import"./index-BZRNBTKr.js";import"./index-Bb5hAbjD.js";import"./ContentTag-B6wAOjq6.js";import"./index-D_ldaswd.js";import"./index-CXRgFPsP.js";import"./index-C-LDafp8.js";function m({className:o,...T}){return e.jsx("div",{className:`flex flex-col gap-16 ${o??""}`,"data-component":"StorybookContainer",...T})}m.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};const r="ContentInfiniteGrid",ee={argTypes:{className:d("className",r),id:d("id",r),list:{control:{disable:!0},table:{category:r,subcategory:a.PROP}},loading:{control:"boolean",table:{category:r,subcategory:a.PROP}},page:{control:"number",table:{category:r,subcategory:a.PROP}},pageSize:{control:"number",table:{category:r,subcategory:a.PROP}}},component:t,parameters:C("컨텐츠 무한 스크롤 그리드 컴포넌트",["카드 정보를 받아 무한 스크롤이 적용된 그리드로 표현합니다.","무한 스크롤은 `@kapoo/global-ui-pack` 패키지의 `InfiniteScroll` 컴포넌트를 통해 구현합니다.","리스트의 필터링 및 페이징 코드와 같은 비즈니스 로직이 적용되어 있습니다.","`pageSize` 프로퍼티로 한 페이지의 사이즈를 조절할 수 있으며, 기본 사이즈는 `6`입니다."],{nextjs:{appDirectory:!0}}),tags:["autodocs"],title:"organism/ContentInfiniteGrid"},i={args:{list:c}},s={argTypes:{pageSize:{control:{disable:!0}}},args:{list:c},render:o=>e.jsxs(m,{children:[e.jsx(n,{subtitle:"1 페이지 예시",title:"Page - 1 (Default)",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o})})}),e.jsx(n,{subtitle:"2 페이지 예시",title:"Page - 2",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o,page:2})})}),e.jsx(n,{subtitle:"3 페이지 예시",title:"Page - 3",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o,page:3})})})]})},l={argTypes:{pageSize:{control:{disable:!0}}},args:{list:c},render:o=>e.jsxs(m,{children:[e.jsx(n,{subtitle:"페이지 사이즈가 6인 예시",title:"PageSize - 6 (Default)",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o})})}),e.jsx(n,{subtitle:"페이지 사이즈가 12인 예시",title:"PageSize - 12",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o,pageSize:12})})})]})},p={argTypes:{loading:{control:{disable:!0}}},render:o=>e.jsx(n,{subtitle:"로딩 상태가 적용된 예시",title:"Loading",container:!0,children:e.jsx(t,{...o,loading:!0})})};var g,u,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    list: postsMock
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,y,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    pageSize: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list: postsMock
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="1 페이지 예시" title="Page - 1 (Default)" container>
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="2 페이지 예시" title="Page - 2" container>
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} page={2} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="3 페이지 예시" title="Page - 3" container>
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} page={3} />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,x,P;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    pageSize: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list: postsMock
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="페이지 사이즈가 6인 예시" title="PageSize - 6 (Default)" container>
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="페이지 사이즈가 12인 예시" title="PageSize - 12" container>
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} pageSize={12} />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var v,h,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    loading: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="로딩 상태가 적용된 예시" title="Loading" container>
            <ContentInfiniteGrid {...props} loading />
        </StorybookTemplate>
}`,...(j=(h=p.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const oe=["Playground","Page","PageSize","Loading"];export{p as Loading,s as Page,l as PageSize,i as Playground,oe as __namedExportsOrder,ee as default};
