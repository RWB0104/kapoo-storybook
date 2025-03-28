import{j as e}from"./jsx-runtime-BnHmloXs.js";import{a as w}from"./index-CtjQfPVU.js";import{n as I}from"./image-CPWeUWp0.js";import"./index-r57MSJFk.js";import{g as $,S as d,a as M}from"./storybook-CWpip0ZO.js";import{B as s}from"./Button-Dh0nduKR.js";import{S as i,a as r}from"./Sidebar-Bpr6xZBY.js";import{S as h}from"./StorybookContainer-CXD7EHC6.js";import{S as o}from"./StorybookTemplate-h4nRBuW0.js";import{T as Q}from"./Typography-DMH6rXmA.js";import"./jsx-runtime-BEh3FTX5.js";import"./v4-CtRu48qb.js";import"./router-context.shared-runtime-DTbBUFFY.js";import"./index-DmhnNIJ0.js";import"./image-context-B4sHuKDm.js";import"./use-merged-ref-Cp_uXRvQ.js";import"./index-Bx25MwHp.js";import"./utils-jAU0Cazi.js";import"./index-frqvKg3v.js";import"./index-LHXsjL4R.js";import"./x-CXFpmgSz.js";import"./createLucideIcon-rzbM5Zb5.js";const a="Sidebar",j=["bottom","left","right","top"],de={argTypes:{children:M("children",`${a}.Root`),defaultOpen:{description:"기본 열림 여부",table:{category:`${a}.Root`,subcategory:d.PROP},type:"boolean"},modal:{description:"모달 여부. 여부에 따라 dimmer 생성 여부가 결정됨",table:{category:`${a}.Root`,subcategory:d.PROP},type:"boolean"},onOpenChange:{description:"열림 여부 변경 이벤트",table:{category:`${a}.Root`,subcategory:d.EV,type:{summary:"(open: boolean) => void"}}},open:{description:"열림 여부",table:{category:`${a}.Root`,subcategory:d.PROP},type:"boolean"},side:{control:"select",description:"열림 위치",options:j,table:{category:`${a}.Content`,subcategory:d.PROP,type:{summary:j.join(" | ")}}},trigger:{control:{disable:!0},description:"트리거 노드",table:{category:`${a}.Root`,subcategory:d.PROP,type:{summary:"React.ReactNode"}}}},component:i,parameters:$("사이드바 컴포넌트",["사이드바 기능을 제공하는 컴포넌트입니다.","`side`를 통해 사이드가 열리는 위치를 지정할 수 있으며, `trigger`에 노드를 전달하여 다양한 사이드바 트리거 상호작용을 정의할 수 있습니다.","","`Sidebar`는 [shadcn/ui Sheet](https://ui.shadcn.com/docs/components/sheet)와 대응하며, 이를 구현한 `@kapoo/headless-ui-pack/Sheet` 컴포넌트를 통해 다양한 레이아웃을 구성할 수 있습니다.","","- `Sheet.Root`: 루트 컴포넌트","- `Sheet.Close`: 닫기 아이콘 컴포넌트","- `Sheet.Content`: 컨텐트 컴포넌트","- `Sheet.Description`: 설명 텍스트 컴포넌트","- `Sheet.Footer`: 하단 레이아웃 컴포넌트","- `Sheet.Header`: 헤더 레이아웃 컴포넌트","- `Sheet.Overlay`: 오버레이 컴포넌트","- `Sheet.Portal`: 포탈 기능 컴포넌트","- `Sheet.Title`: 타이틀 텍스트 컴포넌트","- `Sheet.Trigger`: 사이드바 트리거링 컴포넌트"]),tags:["autodocs"],title:"molecule/Sidebar"},l={args:{trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"Sidebar Open"})})}},c={render:t=>e.jsxs(h,{children:[e.jsx(o,{subtitle:"각 위치별 사이드바 예시",title:"Side",children:j.map(n=>e.jsx(i,{side:n,trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsxs(s,{children:[n," open"]})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsxs(r.Description,{children:["this is ",n," sidebar"]})]})},n))}),e.jsxs(o,{subtitle:"다양한 사이드바 트리거 예시",title:"Trigger",children:[e.jsx(i,{trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"버튼 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{trigger:e.jsx(r.Trigger,{children:"텍스트 트리거"}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{trigger:e.jsx(r.Trigger,{children:e.jsx("div",{className:"flex size-full items-center justify-center rounded bg-pink-400 p-2",children:"div 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{trigger:e.jsx(r.Trigger,{children:e.jsxs("div",{className:"relative flex size-full items-center justify-center overflow-hidden rounded p-2",children:[e.jsx(Q,{className:"relative z-10 text-white",children:"이미지 트리거"}),e.jsx(I,{alt:"image",className:"object-cover",src:"https://t3.ftcdn.net/jpg/06/86/04/50/360_F_686045052_Q7D5Hzx4TIIS7xYw1ypUPecQejRd3bhB.jpg",fill:!0})]})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})})]}),e.jsxs(o,{subtitle:"모달 여부 적용에 따른 예시",title:"Modal",children:[e.jsx(i,{trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"모달 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{modal:!1,trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"비모달 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})})]}),e.jsx(o,{subtitle:"사이드바 온오프에 따른 이벤트 예시",title:"OnOpenChange",children:e.jsx(i,{trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"모달 트리거"})}),onOpenChange:w("onOpenChange"),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})})})]})},S={render:t=>e.jsx(h,{children:e.jsx(o,{subtitle:"각 위치별 사이드바 예시",title:"Side",children:j.map(n=>e.jsx(i,{side:n,trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsxs(s,{children:[n," open"]})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsxs(r.Description,{children:["this is ",n," sidebar"]})]})},n))})})},g={render:t=>e.jsx(h,{children:e.jsxs(o,{subtitle:"다양한 사이드바 트리거 예시",title:"Trigger",children:[e.jsx(i,{trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"버튼 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{trigger:e.jsx(r.Trigger,{children:"텍스트 트리거"}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{trigger:e.jsx(r.Trigger,{children:e.jsx("div",{className:"flex size-full items-center justify-center rounded bg-pink-400 p-2",children:"div 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{trigger:e.jsx(r.Trigger,{children:e.jsxs("div",{className:"relative flex size-full items-center justify-center overflow-hidden rounded p-2",children:[e.jsx(Q,{className:"relative z-10 text-white",children:"이미지 트리거"}),e.jsx(I,{alt:"image",className:"object-cover",src:"https://t3.ftcdn.net/jpg/06/86/04/50/360_F_686045052_Q7D5Hzx4TIIS7xYw1ypUPecQejRd3bhB.jpg",fill:!0})]})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})})]})})},p={render:t=>e.jsx(h,{children:e.jsxs(o,{subtitle:"모달 여부 적용에 따른 예시",title:"Modal",children:[e.jsx(i,{trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"모달 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})}),e.jsx(i,{modal:!1,trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"비모달 트리거"})}),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})})]})})},b={render:t=>e.jsx(h,{children:e.jsx(o,{subtitle:"사이드바 온오프에 따른 이벤트 예시",title:"OnOpenChange",children:e.jsx(i,{trigger:e.jsx(r.Trigger,{asChild:!0,children:e.jsx(s,{children:"모달 트리거"})}),onOpenChange:w("onOpenChange"),...t,children:e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Sidebar"}),e.jsx(r.Description,{children:"this is sidebar content"})]})})})})};var x,T,m;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    trigger: <Sheet.Trigger asChild>
                <Button>Sidebar Open</Button>
            </Sheet.Trigger>
  }
}`,...(m=(T=l.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var u,y,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 위치별 사이드바 예시" title="Side">
                {sides.map(side => <Sidebar key={side} side={side} trigger={<Sheet.Trigger asChild>
                                <Button>{side} open</Button>
                            </Sheet.Trigger>} {...props}>
                        <Sheet.Header>
                            <Sheet.Title>Sidebar</Sheet.Title>

                            <Sheet.Description>this is {side} sidebar</Sheet.Description>
                        </Sheet.Header>
                    </Sidebar>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="다양한 사이드바 트리거 예시" title="Trigger">
                <Sidebar trigger={<Sheet.Trigger asChild>
                            <Button>버튼 트리거</Button>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar trigger={<Sheet.Trigger>
                            텍스트 트리거
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar trigger={<Sheet.Trigger>
                            <div className="flex size-full items-center justify-center rounded bg-pink-400 p-2">div 트리거</div>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar trigger={<Sheet.Trigger>
                            <div className="relative flex size-full items-center justify-center overflow-hidden rounded p-2">
                                <Typography className="relative z-10 text-white">이미지 트리거</Typography>

                                <Image alt="image" className="object-cover" src="https://t3.ftcdn.net/jpg/06/86/04/50/360_F_686045052_Q7D5Hzx4TIIS7xYw1ypUPecQejRd3bhB.jpg" fill />
                            </div>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>
            </StorybookTemplate>

            <StorybookTemplate subtitle="모달 여부 적용에 따른 예시" title="Modal">
                <Sidebar trigger={<Sheet.Trigger asChild>
                            <Button>모달 트리거</Button>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar modal={false} trigger={<Sheet.Trigger asChild>
                            <Button>비모달 트리거</Button>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>
            </StorybookTemplate>

            <StorybookTemplate subtitle="사이드바 온오프에 따른 이벤트 예시" title="OnOpenChange">
                <Sidebar trigger={<Sheet.Trigger asChild>
                            <Button>모달 트리거</Button>
                        </Sheet.Trigger>} onOpenChange={action('onOpenChange')} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var D,H,C;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="각 위치별 사이드바 예시" title="Side">
                {sides.map(side => <Sidebar key={side} side={side} trigger={<Sheet.Trigger asChild>
                                <Button>{side} open</Button>
                            </Sheet.Trigger>} {...props}>
                        <Sheet.Header>
                            <Sheet.Title>Sidebar</Sheet.Title>

                            <Sheet.Description>this is {side} sidebar</Sheet.Description>
                        </Sheet.Header>
                    </Sidebar>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(C=(H=S.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var k,v,O;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="다양한 사이드바 트리거 예시" title="Trigger">
                <Sidebar trigger={<Sheet.Trigger asChild>
                            <Button>버튼 트리거</Button>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar trigger={<Sheet.Trigger>
                            텍스트 트리거
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar trigger={<Sheet.Trigger>
                            <div className="flex size-full items-center justify-center rounded bg-pink-400 p-2">div 트리거</div>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar trigger={<Sheet.Trigger>
                            <div className="relative flex size-full items-center justify-center overflow-hidden rounded p-2">
                                <Typography className="relative z-10 text-white">이미지 트리거</Typography>

                                <Image alt="image" className="object-cover" src="https://t3.ftcdn.net/jpg/06/86/04/50/360_F_686045052_Q7D5Hzx4TIIS7xYw1ypUPecQejRd3bhB.jpg" fill />
                            </div>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(O=(v=g.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var B,R,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="모달 여부 적용에 따른 예시" title="Modal">
                <Sidebar trigger={<Sheet.Trigger asChild>
                            <Button>모달 트리거</Button>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>

                <Sidebar modal={false} trigger={<Sheet.Trigger asChild>
                            <Button>비모달 트리거</Button>
                        </Sheet.Trigger>} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(N=(R=p.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var P,z,_;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="사이드바 온오프에 따른 이벤트 예시" title="OnOpenChange">
                <Sidebar trigger={<Sheet.Trigger asChild>
                            <Button>모달 트리거</Button>
                        </Sheet.Trigger>} onOpenChange={action('onOpenChange')} {...props}>
                    <Sheet.Header>
                        <Sheet.Title>Sidebar</Sheet.Title>

                        <Sheet.Description>this is sidebar content</Sheet.Description>
                    </Sheet.Header>
                </Sidebar>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(_=(z=b.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const he=["Playground","All","Side","Trigger","Modal","OnOpenChange"];export{c as All,p as Modal,b as OnOpenChange,l as Playground,S as Side,g as Trigger,he as __namedExportsOrder,de as default};
