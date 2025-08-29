import{j as e}from"./jsx-runtime-CcAjkvR0.js";import{B as h}from"./Button-CQ8gVpHK.js";import"./iframe-aPIFiJaF.js";import{g as J,S as m,a as k}from"./storybook-CWpip0ZO.js";import{S as l}from"./StorybookContainer-D4uBUgnn.js";import{S as n}from"./StorybookTemplate-DgDGKC7c.js";import{n as Q}from"./Img-BDLD3Vvq.js";import{T as s}from"./Typography-egxCLMRY.js";import{H as r}from"./Header-Dulh5YYy.js";import{M as F}from"./menu-Ccfbgc95.js";import"./index-DNBoslVS.js";import"./utils-jAU0Cazi.js";import"./use-merged-ref-BiPDRGKD.js";import"./createLucideIcon-UdJRz3In.js";import"./link-BuifoXJ8.js";const i="Typography",se={args:{className:"static",logo:"https://cdn.rawgit.com/tinesoft/ngx-storybook-schematics/master/demo/src/assets/logo.svg",title:"Title Typography"},argTypes:{children:k("children",i),className:k("className",i),id:k("id",i),link:{table:{category:i,subcategory:m.PROP}},logo:{table:{category:i,subcategory:m.PROP}},menu:{control:{disable:!0},table:{category:i,subcategory:m.PROP,type:{summary:"React.ReactNode"}}},title:{table:{category:i,subcategory:m.PROP}},transparent:{table:{category:i,subcategory:m.PROP}}},component:r,parameters:J("헤더 컴포넌트","헤더 컴포넌트입니다."),tags:["autodocs"],title:"molecule/Header"},E=["https://brandlogos.net/wp-content/uploads/2021/11/discord-logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/1024px-Steam_icon_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png","https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"],I=["/","/page/1","/route/2","/category"];function a({children:t}){return e.jsxs("div",{className:"h-60 w-full overflow-auto","data-component":"PageTemplate",children:[t,e.jsxs("div",{children:[e.jsx(s,{variant:"h3",children:"Lorem ipsum"}),e.jsx(s,{variant:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e.jsx(Q,{alt:"image",className:"mt-10",height:200,src:"https://placehold.co/480x200/FFF/31343C?font=raleway&text=Jest",width:480}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate cumque libero totam necessitatibus molestias cupiditate est dignissimos, illo nostrum eaque ipsam, fuga sequi itaque distinctio, officia nulla perferendis hic!"}),e.jsx(s,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda itaque pariatur nesciunt fugit aperiam, blanditiis rerum quibusdam numquam cupiditate sunt sapiente asperiores nemo laboriosam debitis odit quasi labore? Adipisci!"}),e.jsx(s,{variant:"blockquote",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis natus voluptates modi repellat aliquam inventore magni, ex sapiente dicta perspiciatis aperiam laudantium, et explicabo voluptatum? Quos a corporis nemo."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae officia neque magnam veniam rerum ea quae nihil, qui quam tempore repellat fugiat consectetur sunt ipsam provident eligendi! Architecto, ipsum."})]})]})}const c={},u={render:t=>e.jsxs(l,{children:[e.jsx(n,{container:!0,subtitle:"다양한 로고 예시",title:"Logo",children:E.map(o=>e.jsx(a,{children:e.jsx(r,{...t,logo:o})},o))}),e.jsx(n,{container:!0,subtitle:"다양한 제목 예시",title:"Title",children:Array.from({length:5}).map((o,p)=>e.jsx(a,{children:e.jsx(r,{...t,title:`Title Typography ${p+1}`})},p))}),e.jsx(n,{container:!0,subtitle:"타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)",title:"Link",children:I.map(o=>e.jsx(a,{children:e.jsx(r,{...t,link:o,title:`Linked to ${o}`})},o))}),e.jsx(n,{container:!0,subtitle:"투명화 헤더 예시",title:"Transparent",children:e.jsx(a,{children:e.jsx(r,{...t,transparent:!0})})}),e.jsxs(n,{container:!0,subtitle:"다양한 메뉴 노드 예시",title:"Menu",children:[e.jsx(a,{children:e.jsx(r,{...t,menu:e.jsx(h,{children:"메뉴"})})}),e.jsx(a,{children:e.jsx(r,{...t,menu:e.jsx(h,{asChild:!0,className:"p-1",size:"icon",variant:"ghost",children:e.jsx(F,{})})})})]})]})},d={argTypes:{logo:{control:{disable:!0}}},render:t=>e.jsx(l,{children:e.jsx(n,{container:!0,subtitle:"다양한 로고 예시",title:"Logo",children:E.map(o=>e.jsx(a,{children:e.jsx(r,{...t,logo:o})},o))})})},g={argTypes:{title:{control:{disable:!0}}},render:t=>e.jsx(l,{children:e.jsx(n,{container:!0,subtitle:"다양한 제목 예시",title:"Title",children:Array.from({length:5}).map((o,p)=>e.jsx(a,{children:e.jsx(r,{...t,title:`Title Typography ${p+1}`})},p))})})},b={argTypes:{link:{control:{disable:!0}}},render:t=>e.jsx(l,{children:e.jsx(n,{container:!0,subtitle:"타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)",title:"Link",children:I.map(o=>e.jsx(a,{children:e.jsx(r,{...t,link:o,title:`Linked to ${o}`})},o))})})},y={argTypes:{transparent:{control:{disable:!0}}},render:t=>e.jsx(l,{children:e.jsx(n,{container:!0,subtitle:"투명화 헤더 예시",title:"Transparent",children:e.jsx(a,{children:e.jsx(r,{...t,transparent:!0})})})})},T={render:t=>e.jsx(l,{children:e.jsxs(n,{container:!0,subtitle:"다양한 메뉴 노드 예시",title:"Menu",children:[e.jsx(a,{children:e.jsx(r,{...t,menu:e.jsx(h,{children:"메뉴"})})}),e.jsx(a,{children:e.jsx(r,{...t,menu:e.jsx(h,{asChild:!0,className:"p-1",size:"icon",variant:"ghost",children:e.jsx(F,{})})})})]})})};var x,j,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var P,f,v;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="다양한 로고 예시" title="Logo">
                {images.map(image => <PageTemplate key={image}>
                        <Header {...props} logo={image} />
                    </PageTemplate>)}
            </StorybookTemplate>

            <StorybookTemplate container subtitle="다양한 제목 예시" title="Title">
                {Array.from({
        length: 5
      }).map((_i, j) => <PageTemplate key={j}>
                        <Header {...props} title={\`Title Typography \${j + 1}\`} />
                    </PageTemplate>)}
            </StorybookTemplate>

            <StorybookTemplate container subtitle="타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)" title="Link">
                {links.map(link => <PageTemplate key={link}>
                        <Header {...props} link={link} title={\`Linked to \${link}\`} />
                    </PageTemplate>)}
            </StorybookTemplate>

            <StorybookTemplate container subtitle="투명화 헤더 예시" title="Transparent">
                <PageTemplate>
                    <Header {...props} transparent />
                </PageTemplate>
            </StorybookTemplate>

            <StorybookTemplate container subtitle="다양한 메뉴 노드 예시" title="Menu">
                <PageTemplate>
                    <Header {...props} menu={<Button>메뉴</Button>} />
                </PageTemplate>

                <PageTemplate>
                    <Header {...props} menu={<Button asChild className="p-1" size="icon" variant="ghost">
                                <MenuIcon />
                            </Button>} />
                </PageTemplate>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(v=(f=u.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var L,C,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  argTypes: {
    logo: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="다양한 로고 예시" title="Logo">
                {images.map(image => <PageTemplate key={image}>
                        <Header {...props} logo={image} />
                    </PageTemplate>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var H,q,A;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  argTypes: {
    title: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="다양한 제목 예시" title="Title">
                {Array.from({
        length: 5
      }).map((_i, j) => <PageTemplate key={j}>
                        <Header {...props} title={\`Title Typography \${j + 1}\`} />
                    </PageTemplate>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(A=(q=g.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var w,N,B;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  argTypes: {
    link: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="타이틀 클릭 시 리다이렉트되는 링크 예시 (실제 링크되지 않고 Actions 탭에 이벤트 발생)" title="Link">
                {links.map(link => <PageTemplate key={link}>
                        <Header {...props} link={link} title={\`Linked to \${link}\`} />
                    </PageTemplate>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(B=(N=b.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var M,$,R;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  argTypes: {
    transparent: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="투명화 헤더 예시" title="Transparent">
                <PageTemplate>
                    <Header {...props} transparent />
                </PageTemplate>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(R=($=y.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var O,z,G;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate container subtitle="다양한 메뉴 노드 예시" title="Menu">
                <PageTemplate>
                    <Header {...props} menu={<Button>메뉴</Button>} />
                </PageTemplate>

                <PageTemplate>
                    <Header {...props} menu={<Button asChild className="p-1" size="icon" variant="ghost">
                                <MenuIcon />
                            </Button>} />
                </PageTemplate>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(G=(z=T.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const le=["Playground","All","Logo","Title","Link","Transparent","Menu"];export{u as All,b as Link,d as Logo,T as Menu,c as Playground,g as Title,y as Transparent,le as __namedExportsOrder,se as default};
