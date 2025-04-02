import{j as e}from"./jsx-runtime-BnHmloXs.js";import{a as ie}from"./index-CtjQfPVU.js";import{r as k}from"./index-r57MSJFk.js";import{g as re,S as o,a as ne}from"./storybook-CWpip0ZO.js";import{S as oe,a as t}from"./Sidebar-BM5jQcnz.js";import{S as a}from"./StorybookTemplate-h4nRBuW0.js";import{T as s}from"./Typography-DMH6rXmA.js";import{I as ae}from"./Img-C7u5DSiX.js";import{u as se}from"./index-C3x8xaVA.js";import{B as ce}from"./Button-Dh0nduKR.js";import{H as le}from"./Header-iSJiaMhN.js";import{M as pe}from"./menu-Barl41Kb.js";import"./jsx-runtime-BEh3FTX5.js";import"./v4-CtRu48qb.js";import"./index-BDUW1Ooh.js";import"./index-Dj4igp42.js";import"./index-LHXsjL4R.js";import"./index-DmhnNIJ0.js";import"./index-Bx25MwHp.js";import"./utils-jAU0Cazi.js";import"./x-CXFpmgSz.js";import"./createLucideIcon-rzbM5Zb5.js";import"./router-context.shared-runtime-DTbBUFFY.js";import"./image-context-B4sHuKDm.js";import"./use-merged-ref-Cp_uXRvQ.js";import"./index-C-LDafp8.js";import"./add-base-path-B3GOeE0G.js";import"./link-B6xMkqIL.js";function r({logo:i,title:n,link:l,transparent:U,className:W,...Z}){const[ee,v]=k.useState(!1),te=se();return k.useEffect(()=>{v(!1)},[te]),e.jsx(oe,{open:ee,trigger:e.jsx(le,{className:W,link:l,logo:i,menu:e.jsx(t.Trigger,{asChild:!0,children:e.jsx(ce,{size:"icon",variant:"ghost",children:e.jsx(pe,{})})}),title:n,transparent:U}),onOpenChange:v,...Z})}r.__docgenInfo={description:`네비게이션 organism 컴포넌트 반환 메서드

@param {NavigationProps} param0: NavigationProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Navigation"};const p="Header",c="Sidebar",j=["bottom","left","right","top"],de={link:{description:"링크",table:{category:p,defaultValue:{summary:"/"},subcategory:o.PROP},type:"string"},logo:{description:"로고",table:{category:p,subcategory:o.PROP},type:"string"},title:{description:"타이틀",table:{category:p,subcategory:o.PROP},type:"string"},transparent:{description:"투명 여부",table:{category:p,subcategory:o.PROP},type:"boolean"}},Fe={argTypes:{...de,children:ne("children",`${c}.Root`),defaultOpen:{description:"기본 열림 여부",table:{category:`${c}.Root`,subcategory:o.PROP},type:"boolean"},modal:{description:"모달 여부. 여부에 따라 dimmer 생성 여부가 결정됨",table:{category:`${c}.Root`,subcategory:o.PROP},type:"boolean"},onOpenChange:{description:"열림 여부 변경 이벤트",table:{category:`${c}.Root`,subcategory:o.EV,type:{summary:"(open: boolean) => void"}}},open:{description:"열림 여부",table:{category:`${c}.Root`,subcategory:o.PROP},type:"boolean"},side:{control:"select",description:"열림 위치",options:j,table:{category:`${c}.Content`,subcategory:o.PROP,type:{summary:j.join(" | ")}}}},args:{logo:"https://cdn.rawgit.com/tinesoft/ngx-storybook-schematics/master/demo/src/assets/logo.svg",title:"Lorem ipsum"},component:r,parameters:re("네비게이션 컴포넌트",["`Header` 컴포넌트와 `Sidebar` 컴포넌트가 결합된 네비게이션 컴포넌트입니다.","`Header`와 `Sidebar` 프로퍼티의 대부분을 사용하여 커스터마이징이 가능합니다."]),tags:["autodocs"],title:"organism/Navigation"},me=["https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png","https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"],ge=["/","/page/1","/route/2","/category"];function y({children:i}){return e.jsxs("div",{className:"h-60 w-full overflow-auto","data-component":"PageTemplate",children:[i,e.jsxs("div",{children:[e.jsx(s,{variant:"h3",children:"Lorem ipsum"}),e.jsx(s,{variant:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsx(ae,{alt:"image",className:"mt-10",height:200,src:"https://placehold.co/480x200/FFF/31343C?font=raleway&text=Jest",width:480}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate cumque libero totam necessitatibus molestias cupiditate est dignissimos, illo nostrum eaque ipsam, fuga sequi itaque distinctio, officia nulla perferendis hic!"}),e.jsx(s,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda itaque pariatur nesciunt fugit aperiam, blanditiis rerum quibusdam numquam cupiditate sunt sapiente asperiores nemo laboriosam debitis odit quasi labore? Adipisci!"}),e.jsx(s,{variant:"blockquote",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis natus voluptates modi repellat aliquam inventore magni, ex sapiente dicta perspiciatis aperiam laudantium, et explicabo voluptatum? Quos a corporis nemo."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae officia neque magnam veniam rerum ea quae nihil, qui quam tempore repellat fugiat consectetur sunt ipsam provident eligendi! Architecto, ipsum."})]})]})}const d={},m={argTypes:{link:{control:{disable:!0}}},render:i=>e.jsx(a,{subtitle:"타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)",title:"Link",container:!0,children:ge.map(n=>e.jsx(y,{children:e.jsx(r,{...i,link:n,title:`Linked to ${n}`})},n))})},g={argTypes:{logo:{control:{disable:!0}}},render:i=>e.jsx(a,{subtitle:"다양한 로고 예시",title:"Logo",container:!0,children:me.map(n=>e.jsx(y,{children:e.jsx(r,{...i,logo:n})},n))})},h={argTypes:{title:{control:{disable:!0}}},render:i=>e.jsx(a,{subtitle:"다양한 타이틀 예시",title:"Link",container:!0,children:Array.from({length:5}).map((n,l)=>e.jsx(y,{children:e.jsx(r,{...i,title:`Title Text ${l+1}`})},l))})},u={argTypes:{transparent:{control:{disable:!0}}},render:i=>e.jsx(a,{subtitle:"투명화 네비게이션 예시",title:"Transparent",container:!0,children:e.jsx(y,{children:e.jsx(r,{...i,transparent:!0})})})},b={render:i=>e.jsx(a,{subtitle:"각 위치별 사이드바가 적용된 예시",title:"Side",container:!0,children:j.map(n=>e.jsx(r,{side:n,...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsxs(t.Description,{children:["this is ",n," sidebar"]})]})},n))})},S={render:i=>e.jsxs(a,{subtitle:"다양한 사이드바 트리거 예시",title:"Trigger",container:!0,children:[e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})})]})},T={render:i=>e.jsxs(a,{subtitle:"모달 여부 적용에 따른 예시",title:"Modal",container:!0,children:[e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{modal:!1,...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})})]})},x={render:i=>e.jsx(a,{subtitle:"사이드바 온오프에 따른 이벤트 예시",title:"OnOpenChange",container:!0,children:e.jsx(r,{onOpenChange:ie("onOpenChange"),...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})})})};var f,P,N;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(N=(P=d.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var H,O,D;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  argTypes: {
    link: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)" title="Link" container>
            {links.map(link => <PageTemplate key={link}>
                    <Navigation {...props} link={link} title={\`Linked to \${link}\`} />
                </PageTemplate>)}
        </StorybookTemplate>
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var L,C,R;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    logo: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 로고 예시" title="Logo" container>
            {images.map(image => <PageTemplate key={image}>
                    <Navigation {...props} logo={image} />
                </PageTemplate>)}
        </StorybookTemplate>
}`,...(R=(C=g.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var q,w,_;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  argTypes: {
    title: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 타이틀 예시" title="Link" container>
            {Array.from({
      length: 5
    }).map((i, j) => <PageTemplate key={j}>
                        <Navigation {...props} title={\`Title Text \${j + 1}\`} />
                    </PageTemplate>)}
        </StorybookTemplate>
}`,...(_=(w=h.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var $,A,E;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  argTypes: {
    transparent: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="투명화 네비게이션 예시" title="Transparent" container>
            <PageTemplate>
                <Navigation {...props} transparent />
            </PageTemplate>
        </StorybookTemplate>
}`,...(E=(A=u.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,G,I;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="각 위치별 사이드바가 적용된 예시" title="Side" container>
            {sides.map(side => <Navigation key={side} side={side} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is {side} sidebar</Sheet.Description>
                    </Sheet.Header>
                </Navigation>)}
        </StorybookTemplate>
}`,...(I=(G=b.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var F,J,B;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="다양한 사이드바 트리거 예시" title="Trigger" container>
            <Navigation {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>

            <Navigation {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>

            <Navigation {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>

            <Navigation {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>
        </StorybookTemplate>
}`,...(B=(J=S.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var V,X,z;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="모달 여부 적용에 따른 예시" title="Modal" container>
            <Navigation {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>

            <Navigation modal={false} {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>
        </StorybookTemplate>
}`,...(z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var Q,Y,K;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="사이드바 온오프에 따른 이벤트 예시" title="OnOpenChange" container>
            <Navigation onOpenChange={action('onOpenChange')} {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>
        </StorybookTemplate>
}`,...(K=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};const Je=["Playground","Link","Logo","Title","Transparent","Side","Trigger","Modal","OnOpenChange"];export{m as Link,g as Logo,T as Modal,x as OnOpenChange,d as Playground,b as Side,h as Title,u as Transparent,S as Trigger,Je as __namedExportsOrder,Fe as default};
