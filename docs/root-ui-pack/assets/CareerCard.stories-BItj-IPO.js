import{j as e}from"./jsx-runtime-BnHmloXs.js";import"./index-Bl3ua-ot.js";import{g as z,S as a,a as y}from"./storybook-CWpip0ZO.js";import{p as u,S as N}from"./StorybookTemplate-BxgOy5-n.js";import{c,a as B,I as F}from"./Img-Co2aSoHC.js";import{S as $}from"./Separator-DeMR-Gbw.js";import"./jsx-runtime-BEh3FTX5.js";import"./image-context-8844MEo3.js";import"./index-BPQE19_z.js";import"./index-DtXuSets.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],A=c("Briefcase",L);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],X=c("Building",J);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],V=c("CalendarDays",H);function o({name:t,icon:D,dept:M,position:v,job:T,startDate:l,endDate:i,list:S,primaryColor:w,className:q,style:R,...O}){const p=u(l),m=u(i),_=Math.ceil(((i??Date.now())-l)/864e5);return e.jsxs("div",{className:B("relative flex overflow-hidden rounded-xl border shadow-xl",q),"data-component":"CareerCard",style:{backgroundColor:w,...R},...O,children:[e.jsxs("div",{className:"bg-background flex-1 rounded-r-xl p-4 shadow-xl dark:bg-neutral-900",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"relative h-10 w-10 overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-700",children:e.jsx(F,{alt:t,className:"object-cover",src:D,fill:!0})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg leading-tight font-semibold",children:t}),e.jsxs("p",{className:"text-muted-foreground text-sm",children:[M," · ",v]})]})]}),e.jsx($,{className:"my-4"}),e.jsxs("div",{className:"text-muted-foreground flex items-center gap-2 text-sm",children:[e.jsx(V,{className:"h-4 w-4"}),e.jsxs("span",{children:[p.year.text,". ",p.month.text," - ",i===void 0?"재직 중":`${m.year.text}. ${m.month.text}`," | ",_,"일 근무"]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("h3",{className:"text-foreground mb-1 flex items-center gap-1 text-sm font-medium",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx("span",{children:T})]}),e.jsx("ul",{className:"text-muted-foreground list-disc space-y-1 pl-5 text-sm",children:S.map((E,I)=>e.jsx("li",{children:E},I))})]})]}),e.jsx("div",{className:"flex flex-col items-center justify-center p-6",children:e.jsx(X,{className:"text-black opacity-15",size:28})})]})}o.__docgenInfo={description:`커리어 카드 molecule 컴포넌트 반환 메서드

@param {CareerCardProps} param0: CareerCardProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"CareerCard",props:{name:{required:!0,tsType:{name:"string"},description:"이름"},icon:{required:!0,tsType:{name:"string"},description:"아이콘"},dept:{required:!0,tsType:{name:"string"},description:"부서"},position:{required:!0,tsType:{name:"string"},description:"직위"},job:{required:!0,tsType:{name:"string"},description:"직책"},startDate:{required:!0,tsType:{name:"number"},description:"입사일"},endDate:{required:!1,tsType:{name:"number"},description:"퇴사일"},list:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"목록"},primaryColor:{required:!1,tsType:{name:"CSSProperties['color']",raw:"CSSProperties['color']"},description:"주 색상"}},composes:["DetailedHTMLProps"]};const r="CareerCard",ae={argTypes:{className:y("className",r),dept:{table:{category:r,subcategory:a.PROP}},endDate:{control:"number",table:{category:r,subcategory:a.PROP}},icon:{table:{category:r,subcategory:a.PROP}},id:y("id",r),job:{table:{category:r,subcategory:a.PROP}},list:{table:{category:r,subcategory:a.PROP}},name:{table:{category:r,subcategory:a.PROP}},position:{table:{category:r,subcategory:a.PROP}},primaryColor:{control:"color",table:{category:r,subcategory:a.PROP}},startDate:{control:"number",table:{category:r,subcategory:a.PROP}}},args:{dept:"부서",endDate:17672256e5,icon:"https://placehold.co/300/FFF/31343C?font=raleway&text=Icon",job:"직책",list:["작업 내용 1","작업 내용 2","작업 내용 3","작업 내용 4","작업 내용 5"],name:"회사명",position:"직위",primaryColor:"#332DF0",startDate:17356896e5},component:o,parameters:z("커리어 카드 컴포넌트",["경력을 요약한 내용을 표헌하는 컴포넌트입니다.","제공된 프로퍼티에 따라 경력 세부사항을 보여줍니다.","`endDate`가 지정되지 않은 경우, 재직 중으로 표현됩니다. 또한 `primaryColor`를 통해, 각 회사의 메인 컬러를 표현할 수도 있습니다."]),tags:["autodocs"],title:"molecule/CareerCard"},s={},n={argTypes:{endDate:{control:{disable:!0}}},render:t=>e.jsxs(N,{subtitle:"퇴사일에 따른 컴포넌트 예시",title:"EndDate",children:[e.jsx(o,{...t,endDate:void 0}),e.jsx(o,{...t,endDate:17672256e5}),e.jsx(o,{...t,endDate:17460576e5})]})},d={argTypes:{primaryColor:{control:{disable:!0}}},render:t=>e.jsxs(N,{subtitle:"주 색상에 따른 컴포넌트 예시",title:"PrimaryColor",children:[e.jsx(o,{...t,primaryColor:void 0}),e.jsx(o,{...t,primaryColor:"dodgerblue"}),e.jsx(o,{...t,primaryColor:"aqua"})]})};var h,g,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,C,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    endDate: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="퇴사일에 따른 컴포넌트 예시" title="EndDate">
            <CareerCard {...props} endDate={undefined} />
            <CareerCard {...props} endDate={1767225600000} />
            <CareerCard {...props} endDate={1746057600000} />
        </StorybookTemplate>
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,k,P;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  argTypes: {
    primaryColor: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="주 색상에 따른 컴포넌트 예시" title="PrimaryColor">
            <CareerCard {...props} primaryColor={undefined} />
            <CareerCard {...props} primaryColor="dodgerblue" />
            <CareerCard {...props} primaryColor="aqua" />
        </StorybookTemplate>
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};const oe=["Playground","EndDate","PrimaryColor"];export{n as EndDate,s as Playground,d as PrimaryColor,oe as __namedExportsOrder,ae as default};
