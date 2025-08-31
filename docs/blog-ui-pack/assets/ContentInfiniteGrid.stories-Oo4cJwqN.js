import{j as e}from"./iframe-CQ4UCBaB.js";import{g as C,S as a,a as m}from"./storybook-CWpip0ZO.js";import{S as n}from"./StorybookTemplate-Di7zxUkB.js";import{p}from"./mock-BBv0Aq9Y.js";import{C as t}from"./ContentInfiniteGrid-C-jE_RvR.js";import"./ContentGrid-Bk7EIGi6.js";import"./utils-jAU0Cazi.js";import"./ContentCard-DKP9X_YE.js";import"./Img-HCr8NxEA.js";import"./use-merged-ref-C-53181B.js";import"./AspectRatio-B4DfA-7S.js";import"./index-CcfI5rSR.js";import"./index-JbfkqKII.js";import"./link-CSMl88C4.js";import"./ContentTag-iVueAtvE.js";import"./index-D_ldaswd.js";function d({className:o,...T}){return e.jsx("div",{className:`flex flex-col gap-16 ${o??""}`,"data-component":"StorybookContainer",...T})}d.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};const r="ContentInfiniteGrid",q={argTypes:{className:m("className",r),id:m("id",r),list:{control:{disable:!0},table:{category:r,subcategory:a.PROP}},loading:{control:"boolean",table:{category:r,subcategory:a.PROP}},page:{control:"number",table:{category:r,subcategory:a.PROP}},pageSize:{control:"number",table:{category:r,subcategory:a.PROP}}},component:t,parameters:C("컨텐츠 무한 스크롤 그리드 컴포넌트",["카드 정보를 받아 무한 스크롤이 적용된 그리드로 표현합니다.","무한 스크롤은 `@kapoo/global-ui-pack` 패키지의 `InfiniteScroll` 컴포넌트를 통해 구현합니다.","리스트의 필터링 및 페이징 코드와 같은 비즈니스 로직이 적용되어 있습니다.","`pageSize` 프로퍼티로 한 페이지의 사이즈를 조절할 수 있으며, 기본 사이즈는 `6`입니다."],{nextjs:{appDirectory:!0}}),tags:["autodocs"],title:"organism/ContentInfiniteGrid"},i={args:{list:p}},s={args:{list:p},argTypes:{pageSize:{control:{disable:!0}}},render:o=>e.jsxs(d,{children:[e.jsx(n,{container:!0,subtitle:"1 페이지 예시",title:"Page - 1 (Default)",children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o})})}),e.jsx(n,{container:!0,subtitle:"2 페이지 예시",title:"Page - 2",children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o,page:2})})}),e.jsx(n,{container:!0,subtitle:"3 페이지 예시",title:"Page - 3",children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o,page:3})})})]})},l={args:{list:p},argTypes:{pageSize:{control:{disable:!0}}},render:o=>e.jsxs(d,{children:[e.jsx(n,{container:!0,subtitle:"페이지 사이즈가 6인 예시",title:"PageSize - 6 (Default)",children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o})})}),e.jsx(n,{container:!0,subtitle:"페이지 사이즈가 12인 예시",title:"PageSize - 12",children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(t,{...o,pageSize:12})})})]})},c={argTypes:{loading:{control:{disable:!0}}},render:o=>e.jsx(n,{container:!0,subtitle:"로딩 상태가 적용된 예시",title:"Loading",children:e.jsx(t,{...o,loading:!0})})};var g,u,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    list: postsMock
  }
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,y,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    list: postsMock
  },
  argTypes: {
    pageSize: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="1 페이지 예시" title="Page - 1 (Default)">
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate container subtitle="2 페이지 예시" title="Page - 2">
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} page={2} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate container subtitle="3 페이지 예시" title="Page - 3">
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} page={3} />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,x,P;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    list: postsMock
  },
  argTypes: {
    pageSize: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="페이지 사이즈가 6인 예시" title="PageSize - 6 (Default)">
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate container subtitle="페이지 사이즈가 12인 예시" title="PageSize - 12">
                <div className="h-96 overflow-auto">
                    <ContentInfiniteGrid {...props} pageSize={12} />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var v,h,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  argTypes: {
    loading: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="로딩 상태가 적용된 예시" title="Loading">
            <ContentInfiniteGrid {...props} loading />
        </StorybookTemplate>
}`,...(j=(h=c.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const B=["Playground","Page","PageSize","Loading"];export{c as Loading,s as Page,l as PageSize,i as Playground,B as __namedExportsOrder,q as default};
