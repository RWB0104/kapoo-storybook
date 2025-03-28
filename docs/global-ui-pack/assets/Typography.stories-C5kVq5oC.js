import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-r57MSJFk.js";import{g as O,S as B,a as m}from"./storybook-CWpip0ZO.js";import{S as u}from"./StorybookContainer-CXD7EHC6.js";import{S as t}from"./StorybookTemplate-h4nRBuW0.js";import{T as a}from"./Typography-YaEN9hhd.js";import"./jsx-runtime-BEh3FTX5.js";import"./utils-jAU0Cazi.js";const h=["blockquote","h1","h2","h3","h4","inline-code","large","lead","muted","small"],r="Typography",J={argTypes:{children:m("children",r),className:m("className",r),id:m("id",r),variant:{control:"select",description:"타이포그래피 종류",options:h,table:{category:r,subcategory:B.PROP,type:{detail:h.join(" | "),summary:"TypographyBaseVariant"}}}},component:a,parameters:O("타이포그래피 컴포넌트","다양한 타이포그래피를 렌더링하는 컴포넌트입니다."),tags:["autodocs"],title:"atom/Typography"},P=["The only way to do great work is to love what you do. - Steve Jobs","In the middle of difficulty lies opportunity. - Albert Einstein","Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill","It always seems impossible until it's done. - Nelson Mandela","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"],R=["const x = 10;","function greet(name: string) { return `Hello, ${name}!`; }","let result = a + b;","interface User { name: string; age: number; }","class MyClass { constructor(private value: number) {} }","export default function add(a: number, b: number) { return a + b; }",'const data = fetch("https://api.example.com");',"const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);",'type MyType = "admin" | "user";',"const [first, second] = [1, 2];"],i={args:{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, sit! In error vitae aspernatur incidunt nisi nihil vel molestias dolorum, dolore a dignissimos assumenda ipsum quae mollitia et, quasi obcaecati!"}},o={render:()=>e.jsxs("div",{className:"mx-auto max-w-3xl p-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx(a,{variant:"h1",children:"Welcome to the Typography Mockup"}),e.jsx("br",{}),e.jsx(a,{variant:"h2",children:"A Simple Demonstration of Typography Components"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx(a,{variant:"h3",children:"Example of h3 Heading"}),e.jsx("br",{}),e.jsx(a,{variant:"h4",children:"Example of h4 Heading"})]}),e.jsx("div",{className:"mb-6",children:e.jsxs(a,{variant:"blockquote",children:['"Success is not final, failure is not fatal: It is the courage to continue that counts."',e.jsx("br",{}),"- Winston Churchill"]})}),e.jsxs("div",{className:"mb-6",children:[e.jsx(a,{variant:"lead",children:"This is a lead paragraph, designed to grab attention with larger text."}),e.jsx(a,{variant:"muted",children:"This is a muted paragraph, with less emphasis and a softer tone."})]}),e.jsx("div",{className:"mb-6",children:e.jsx(a,{variant:"inline-code",children:"const sum = (a, b) => a + b;"})}),e.jsx("div",{className:"mb-6",children:e.jsx(a,{variant:"small",children:"This is some small text for additional context."})}),e.jsx("div",{className:"mb-6",children:e.jsx(a,{variant:"large",children:"This section contains large text for emphasis on something important."})}),e.jsx("div",{className:"mb-6",children:e.jsx(a,{children:"This is the default paragraph, which is simply regular text without any special emphasis."})})]})},s={argTypes:{variant:{control:{disable:!0}}},render:()=>e.jsxs(u,{children:[e.jsx(t,{subtitle:"h1 태그 컴포넌트",title:"Heading - h1",container:!0,children:e.jsx(a,{variant:"h1",children:"h1 Heading Tag"})}),e.jsx(t,{subtitle:"h2 태그 컴포넌트",title:"Heading - h2",container:!0,children:e.jsx(a,{variant:"h2",children:"h2 Heading Tag"})}),e.jsx(t,{subtitle:"h3 태그 컴포넌트",title:"Heading - h3",container:!0,children:e.jsx(a,{variant:"h3",children:"h3 Heading Tag"})}),e.jsx(t,{subtitle:"h4 태그 컴포넌트",title:"Heading - h4",container:!0,children:e.jsx(a,{variant:"h4",children:"h4 Heading Tag"})})]})},l={argTypes:{variant:{control:{disable:!0}}},render:()=>e.jsx(t,{subtitle:"블로쿼트 컴포넌트",title:"Blockquote",container:!0,children:e.jsx("div",{className:"flex flex-col gap-4",children:P.map(n=>e.jsx(a,{variant:"blockquote",children:n},n))})})},c={argTypes:{variant:{control:{disable:!0}}},render:()=>e.jsx(t,{subtitle:"인라인 코드 컴포넌트",title:"Inline Code",container:!0,children:e.jsx("div",{className:"flex flex-col gap-4",children:R.map(n=>e.jsx("div",{children:e.jsx(a,{variant:"inline-code",children:n})},n))})})},d={argTypes:{variant:{control:{disable:!0}}},render:()=>e.jsxs(u,{children:[e.jsx(t,{subtitle:"기본 사이즈 컴포넌트",title:"Size - default",container:!0,children:e.jsx(a,{children:"I am totally normal size"})}),e.jsx(t,{subtitle:"큰 사이즈 컴포넌트",title:"Size - large",container:!0,children:e.jsx(a,{variant:"large",children:"EVERYBODY LOOK AT LARGE SIZE MEEE"})}),e.jsx(t,{subtitle:"작은 사이즈 컴포넌트",title:"Size - small",container:!0,children:e.jsx(a,{variant:"small",children:"leave small size me alone..."})})]})},p={argTypes:{variant:{control:{disable:!0}}},render:()=>e.jsxs(u,{children:[e.jsx(t,{subtitle:"기본 크기의 서브 타이포그래피 컴포넌트",title:"Lead",container:!0,children:e.jsx(a,{variant:"lead",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus! Porro beatae id laborum quidem perspiciatis maiores dolorum harum, architecto similique. Magni eaque doloremque quas voluptatum commodi est harum delectus!"})}),e.jsx(t,{subtitle:"작은 크기의 서브 타이포그래피 컴포넌트",title:"Muted",container:!0,children:e.jsx(a,{variant:"muted",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas aperiam placeat, quaerat omnis deserunt dolor, dignissimos quis, natus quibusdam veniam repudiandae odit est inventore accusamus quo voluptate nobis nihil?"})})]})};var y,g,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, sit! In error vitae aspernatur incidunt nisi nihil vel molestias dolorum, dolore a dignissimos assumenda ipsum quae mollitia et, quasi obcaecati!'
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var T,v,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-3xl p-6">
            <div className="mb-6">
                <Typography variant="h1">
                    Welcome to the Typography Mockup
                </Typography>
                <br />
                <Typography variant="h2">
                    A Simple Demonstration of Typography Components
                </Typography>
            </div>

            <div className="mb-6">
                <Typography variant="h3">
                    Example of h3 Heading
                </Typography>
                <br />
                <Typography variant="h4">
                    Example of h4 Heading
                </Typography>
            </div>

            <div className="mb-6">
                <Typography variant="blockquote">
                    &quot;Success is not final, failure is not fatal: It is the courage to continue that counts.&quot;
                    <br />
                    - Winston Churchill
                </Typography>
            </div>

            <div className="mb-6">
                <Typography variant="lead">
                    This is a lead paragraph, designed to grab attention with larger text.
                </Typography>
                <Typography variant="muted">
                    This is a muted paragraph, with less emphasis and a softer tone.
                </Typography>
            </div>

            <div className="mb-6">
                <Typography variant="inline-code">
                    const sum = (a, b) =&gt; a + b;
                </Typography>
            </div>

            <div className="mb-6">
                <Typography variant="small">
                    This is some small text for additional context.
                </Typography>
            </div>

            <div className="mb-6">
                <Typography variant="large">
                    This section contains large text for emphasis on something important.
                </Typography>
            </div>

            <div className="mb-6">
                <Typography>
                    This is the default paragraph, which is simply regular text without any special emphasis.
                </Typography>
            </div>
        </div>
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,j,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <StorybookContainer>
            <StorybookTemplate subtitle="h1 태그 컴포넌트" title="Heading - h1" container>
                <Typography variant="h1">h1 Heading Tag</Typography>
            </StorybookTemplate>

            <StorybookTemplate subtitle="h2 태그 컴포넌트" title="Heading - h2" container>
                <Typography variant="h2">h2 Heading Tag</Typography>
            </StorybookTemplate>

            <StorybookTemplate subtitle="h3 태그 컴포넌트" title="Heading - h3" container>
                <Typography variant="h3">h3 Heading Tag</Typography>
            </StorybookTemplate>

            <StorybookTemplate subtitle="h4 태그 컴포넌트" title="Heading - h4" container>
                <Typography variant="h4">h4 Heading Tag</Typography>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var k,q,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <StorybookTemplate subtitle="블로쿼트 컴포넌트" title="Blockquote" container>
            <div className="flex flex-col gap-4">
                {blockquotes.map(blockquote => <Typography key={blockquote} variant="blockquote">{blockquote}</Typography>)}
            </div>
        </StorybookTemplate>
}`,...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var H,E,C;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <StorybookTemplate subtitle="인라인 코드 컴포넌트" title="Inline Code" container>
            <div className="flex flex-col gap-4">
                {codes.map(code => <div key={code}>
                        <Typography variant="inline-code">{code}</Typography>
                    </div>)}
            </div>
        </StorybookTemplate>
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var I,w,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <StorybookContainer>
            <StorybookTemplate subtitle="기본 사이즈 컴포넌트" title="Size - default" container>
                <Typography>I am totally normal size</Typography>
            </StorybookTemplate>

            <StorybookTemplate subtitle="큰 사이즈 컴포넌트" title="Size - large" container>
                <Typography variant="large">EVERYBODY LOOK AT LARGE SIZE MEEE</Typography>
            </StorybookTemplate>

            <StorybookTemplate subtitle="작은 사이즈 컴포넌트" title="Size - small" container>
                <Typography variant="small">leave small size me alone...</Typography>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var M,z,L;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: {
        disable: true
      }
    }
  },
  render: () => <StorybookContainer>
            <StorybookTemplate subtitle="기본 크기의 서브 타이포그래피 컴포넌트" title="Lead" container>
                <Typography variant="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus! Porro beatae id laborum quidem perspiciatis maiores dolorum harum, architecto similique. Magni eaque doloremque quas voluptatum commodi est harum delectus!</Typography>
            </StorybookTemplate>

            <StorybookTemplate subtitle="작은 크기의 서브 타이포그래피 컴포넌트" title="Muted" container>
                <Typography variant="muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas aperiam placeat, quaerat omnis deserunt dolor, dignissimos quis, natus quibusdam veniam repudiandae odit est inventore accusamus quo voluptate nobis nihil?</Typography>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const U=["Playground","All","Heading","Blockquote","InlineCode","Size","Muted"];export{o as All,l as Blockquote,s as Heading,c as InlineCode,p as Muted,i as Playground,d as Size,U as __namedExportsOrder,J as default};
