import{j as e}from"./jsx-runtime-CcAjkvR0.js";import{S as ie,a as t}from"./Sidebar-DrtnOTCJ.js";import{r as k,u as re}from"./iframe-aPIFiJaF.js";import{g as ne,S as o,a as oe}from"./storybook-CWpip0ZO.js";import{S as a}from"./StorybookTemplate-DgDGKC7c.js";import{T as s}from"./Typography-egxCLMRY.js";import{I as ae}from"./Img-BDLD3Vvq.js";import{B as se}from"./Button-CQ8gVpHK.js";import{H as ce}from"./Header-Dulh5YYy.js";import{M as le}from"./menu-Ccfbgc95.js";import"./index-XRDM4NTd.js";import"./index-Cwy9g2vl.js";import"./index-B780BDku.js";import"./index-DNBoslVS.js";import"./utils-jAU0Cazi.js";import"./x-Doj9qKKZ.js";import"./createLucideIcon-UdJRz3In.js";import"./use-merged-ref-BiPDRGKD.js";import"./link-BuifoXJ8.js";function r({logo:i,title:n,link:l,transparent:U,className:W,...Z}){const[ee,v]=k.useState(!1),te=re();return k.useEffect(()=>{v(!1)},[te]),e.jsx(ie,{onOpenChange:v,open:ee,trigger:e.jsx(ce,{className:W,link:l,logo:i,menu:e.jsx(t.Trigger,{asChild:!0,children:e.jsx(se,{size:"icon",variant:"ghost",children:e.jsx(le,{})})}),title:n,transparent:U}),...Z})}r.__docgenInfo={description:`네비게이션 organism 컴포넌트 반환 메서드

@param {NavigationProps} param0: NavigationProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Navigation"};const{action:pe}=__STORYBOOK_MODULE_ACTIONS__,p="Header",c="Sidebar",j=["bottom","left","right","top"],de={link:{description:"링크",table:{category:p,defaultValue:{summary:"/"},subcategory:o.PROP},type:"string"},logo:{description:"로고",table:{category:p,subcategory:o.PROP},type:"string"},title:{description:"타이틀",table:{category:p,subcategory:o.PROP},type:"string"},transparent:{description:"투명 여부",table:{category:p,subcategory:o.PROP},type:"boolean"}},Re={args:{logo:"https://cdn.rawgit.com/tinesoft/ngx-storybook-schematics/master/demo/src/assets/logo.svg",title:"Lorem ipsum"},argTypes:{...de,children:oe("children",`${c}.Root`),defaultOpen:{description:"기본 열림 여부",table:{category:`${c}.Root`,subcategory:o.PROP},type:"boolean"},modal:{description:"모달 여부. 여부에 따라 dimmer 생성 여부가 결정됨",table:{category:`${c}.Root`,subcategory:o.PROP},type:"boolean"},onOpenChange:{description:"열림 여부 변경 이벤트",table:{category:`${c}.Root`,subcategory:o.EV,type:{summary:"(open: boolean) => void"}}},open:{description:"열림 여부",table:{category:`${c}.Root`,subcategory:o.PROP},type:"boolean"},side:{control:"select",description:"열림 위치",options:j,table:{category:`${c}.Content`,subcategory:o.PROP,type:{summary:j.join(" | ")}}}},component:r,parameters:ne("네비게이션 컴포넌트",["`Header` 컴포넌트와 `Sidebar` 컴포넌트가 결합된 네비게이션 컴포넌트입니다.","`Header`와 `Sidebar` 프로퍼티의 대부분을 사용하여 커스터마이징이 가능합니다."]),tags:["autodocs"],title:"organism/Navigation"},me=["https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png","https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"],ge=["/","/page/1","/route/2","/category"];function y({children:i}){return e.jsxs("div",{className:"h-60 w-full overflow-auto","data-component":"PageTemplate",children:[i,e.jsxs("div",{children:[e.jsx(s,{variant:"h3",children:"Lorem ipsum"}),e.jsx(s,{variant:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsx(ae,{alt:"image",className:"mt-10",height:200,src:"https://placehold.co/480x200/FFF/31343C?font=raleway&text=Jest",width:480}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate cumque libero totam necessitatibus molestias cupiditate est dignissimos, illo nostrum eaque ipsam, fuga sequi itaque distinctio, officia nulla perferendis hic!"}),e.jsx(s,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda itaque pariatur nesciunt fugit aperiam, blanditiis rerum quibusdam numquam cupiditate sunt sapiente asperiores nemo laboriosam debitis odit quasi labore? Adipisci!"}),e.jsx(s,{variant:"blockquote",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis natus voluptates modi repellat aliquam inventore magni, ex sapiente dicta perspiciatis aperiam laudantium, et explicabo voluptatum? Quos a corporis nemo."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae officia neque magnam veniam rerum ea quae nihil, qui quam tempore repellat fugiat consectetur sunt ipsam provident eligendi! Architecto, ipsum."})]})]})}const d={},m={argTypes:{link:{control:{disable:!0}}},render:i=>e.jsx(a,{container:!0,subtitle:"타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)",title:"Link",children:ge.map(n=>e.jsx(y,{children:e.jsx(r,{...i,link:n,title:`Linked to ${n}`})},n))})},g={argTypes:{logo:{control:{disable:!0}}},render:i=>e.jsx(a,{container:!0,subtitle:"다양한 로고 예시",title:"Logo",children:me.map(n=>e.jsx(y,{children:e.jsx(r,{...i,logo:n})},n))})},u={argTypes:{title:{control:{disable:!0}}},render:i=>e.jsx(a,{container:!0,subtitle:"다양한 타이틀 예시",title:"Link",children:Array.from({length:5}).map((n,l)=>e.jsx(y,{children:e.jsx(r,{...i,title:`Title Text ${l+1}`})},l))})},h={argTypes:{transparent:{control:{disable:!0}}},render:i=>e.jsx(a,{container:!0,subtitle:"투명화 네비게이션 예시",title:"Transparent",children:e.jsx(y,{children:e.jsx(r,{...i,transparent:!0})})})},b={render:i=>e.jsx(a,{container:!0,subtitle:"각 위치별 사이드바가 적용된 예시",title:"Side",children:j.map(n=>e.jsx(r,{side:n,...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsxs(t.Description,{children:["this is ",n," sidebar"]})]})},n))})},S={render:i=>e.jsxs(a,{container:!0,subtitle:"다양한 사이드바 트리거 예시",title:"Trigger",children:[e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})})]})},T={render:i=>e.jsxs(a,{container:!0,subtitle:"모달 여부 적용에 따른 예시",title:"Modal",children:[e.jsx(r,{...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})}),e.jsx(r,{modal:!1,...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})})]})},x={render:i=>e.jsx(a,{container:!0,subtitle:"사이드바 온오프에 따른 이벤트 예시",title:"OnOpenChange",children:e.jsx(r,{onOpenChange:pe("onOpenChange"),...i,children:e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Sidebar"}),e.jsx(t.Description,{children:"this is sidebar content"})]})})})};var f,N,P;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var O,H,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  argTypes: {
    link: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)" title="Link">
            {links.map(link => <PageTemplate key={link}>
                    <Navigation {...props} link={link} title={\`Linked to \${link}\`} />
                </PageTemplate>)}
        </StorybookTemplate>
}`,...(D=(H=m.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var _,L,C;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  argTypes: {
    logo: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="다양한 로고 예시" title="Logo">
            {images.map(image => <PageTemplate key={image}>
                    <Navigation {...props} logo={image} />
                </PageTemplate>)}
        </StorybookTemplate>
}`,...(C=(L=g.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var R,q,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  argTypes: {
    title: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="다양한 타이틀 예시" title="Link">
            {Array.from({
      length: 5
    }).map((_i, j) =>
    // biome-ignore lint/suspicious/noArrayIndexKey: for test
    <PageTemplate key={j}>
                    <Navigation {...props} title={\`Title Text \${j + 1}\`} />
                </PageTemplate>)}
        </StorybookTemplate>
}`,...(w=(q=u.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var A,$,E;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  argTypes: {
    transparent: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate container subtitle="투명화 네비게이션 예시" title="Transparent">
            <PageTemplate>
                <Navigation {...props} transparent />
            </PageTemplate>
        </StorybookTemplate>
}`,...(E=($=h.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var M,I,G;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <StorybookTemplate container subtitle="각 위치별 사이드바가 적용된 예시" title="Side">
            {sides.map(side => <Navigation key={side} side={side} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is {side} sidebar</Sheet.Description>
                    </Sheet.Header>
                </Navigation>)}
        </StorybookTemplate>
}`,...(G=(I=b.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var B,F,J;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <StorybookTemplate container subtitle="다양한 사이드바 트리거 예시" title="Trigger">
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
}`,...(J=(F=S.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,V,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: props => <StorybookTemplate container subtitle="모달 여부 적용에 따른 예시" title="Modal">
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
}`,...(X=(V=T.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,z,Q;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: props => <StorybookTemplate container subtitle="사이드바 온오프에 따른 이벤트 예시" title="OnOpenChange">
            <Navigation onOpenChange={action('onOpenChange')} {...props}>
                <Sheet.Header>
                    <Sheet.Title>Sidebar</Sheet.Title>

                    <Sheet.Description>this is sidebar content</Sheet.Description>
                </Sheet.Header>
            </Navigation>
        </StorybookTemplate>
}`,...(Q=(z=x.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const qe=["Playground","Link","Logo","Title","Transparent","Side","Trigger","Modal","OnOpenChange"];export{m as Link,g as Logo,T as Modal,x as OnOpenChange,d as Playground,b as Side,u as Title,h as Transparent,S as Trigger,qe as __namedExportsOrder,Re as default};
