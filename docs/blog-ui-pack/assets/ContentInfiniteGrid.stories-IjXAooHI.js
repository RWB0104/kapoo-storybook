import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-CKMdfnwt.js";import{g as j,S as i,a as d}from"./storybook-CWpip0ZO.js";import{S as n}from"./StorybookTemplate-h4nRBuW0.js";import{C as r}from"./ContentInfiniteGrid-C4obMDkS.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-CXRgFPsP.js";import"./index-C-LDafp8.js";import"./segment-CIEV7OGa.js";import"./hooks-B1ldGSeW.js";import"./ContentGrid-u7lvqYLc.js";import"./utils-jAU0Cazi.js";import"./ContentCard-B_KEKQur.js";import"./Img-CXPgRZe5.js";import"./image-context-2QRquZaF.js";import"./index-BY638psU.js";import"./AspectRatio-D0SRQiay.js";import"./index-CkT7GGG_.js";import"./index-BZRNBTKr.js";function c({className:t,...o}){return e.jsx("div",{className:`flex flex-col gap-16 ${t??""}`,"data-component":"StorybookContainer",...o})}c.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};const a="ContentInfiniteGrid",H={argTypes:{className:d("className",a),id:d("id",a),list:{control:{disable:!0},table:{category:a,subcategory:i.PROP}},loading:{control:"boolean",table:{category:a,subcategory:i.PROP}},page:{control:"number",table:{category:a,subcategory:i.PROP}},pageSize:{control:"number",table:{category:a,subcategory:i.PROP}}},component:r,parameters:j("컨텐츠 무한 스크롤 그리드 컴포넌트",["카드 정보를 받아 무한 스크롤이 적용된 그리드로 표현합니다.","무한 스크롤은 `@kapoo/global-ui-pack` 패키지의 `InfiniteScroll` 컴포넌트를 통해 구현합니다.","리스트의 필터링 및 페이징 코드와 같은 비즈니스 로직이 적용되어 있습니다.","`pageSize` 프로퍼티로 한 페이지의 사이즈를 조절할 수 있으며, 기본 사이즈는 `6`입니다."],{nextjs:{appDirectory:!0}}),tags:["autodocs"],title:"organism/ContentInfiniteGrid"},u=Array.from({length:40}).map((t,o)=>({body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam facilis dolorum inventore officia neque, rerum voluptatem quaerat consequuntur, fugiat aspernatur, labore debitis? Officia tenetur at est itaque quam quasi sunt?",filename:`2000-01-01-test-file-${o+1}`,meta:{category:o%2===0?"React":"CS",comment:!0,coverImage:`https://placehold.co/600/FFF/31343C?font=raleway&text=Thumb ${o+1}`,date:Date.now()+o*864e5,excerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus exercitationem molestiae quidem eaque asperiores voluptatem nam et, laudantium nisi corporis officiis sit sed repellendus voluptas excepturi ipsum laboriosam. Amet.",publish:!0,tag:["tag",`test ${o+1}`],title:`Lorem Ipsum ${o+1}`,type:"posts"},summary:[`Lorem Ipsum ${o+1}`,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus exercitationem molestiae quidem eaque asperiores voluptatem nam et, laudantium nisi corporis officiis sit sed repellendus voluptas excepturi ipsum laboriosam. Amet.","React"].join("|||"),toc:[],url:`/test/${o+1}`})),s={args:{list:u}},l={argTypes:{pageSize:{control:{disable:!0}}},args:{list:u},render:t=>e.jsxs(c,{children:[e.jsx(n,{subtitle:"1 페이지 예시",title:"Page - 1 (Default)",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(r,{...t})})}),e.jsx(n,{subtitle:"2 페이지 예시",title:"Page - 2",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(r,{...t,page:2})})}),e.jsx(n,{subtitle:"3 페이지 예시",title:"Page - 3",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(r,{...t,page:3})})})]})},p={argTypes:{pageSize:{control:{disable:!0}}},args:{list:u},render:t=>e.jsxs(c,{children:[e.jsx(n,{subtitle:"페이지 사이즈가 6인 예시",title:"PageSize - 6 (Default)",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(r,{...t})})}),e.jsx(n,{subtitle:"페이지 사이즈가 12인 예시",title:"PageSize - 12",container:!0,children:e.jsx("div",{className:"h-96 overflow-auto",children:e.jsx(r,{...t,pageSize:12})})})]})},m={argTypes:{loading:{control:{disable:!0}}},render:t=>e.jsx(n,{subtitle:"로딩 상태가 적용된 예시",title:"Loading",container:!0,children:e.jsx(r,{...t,loading:!0})})};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    list
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,f,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    pageSize: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list
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
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,h,P;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  argTypes: {
    pageSize: {
      control: {
        disable: true
      }
    }
  },
  args: {
    list
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
}`,...(P=(h=p.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var k,C,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const K=["Playground","Page","PageSize","Loading"];export{m as Loading,l as Page,p as PageSize,s as Playground,K as __namedExportsOrder,H as default};
