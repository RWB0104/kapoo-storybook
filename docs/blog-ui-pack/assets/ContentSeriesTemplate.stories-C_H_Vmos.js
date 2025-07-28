import{r as l,j as e}from"./iframe-DIrS4rnj.js";import{g as re,S as b}from"./storybook-CWpip0ZO.js";import{S as P}from"./StorybookTemplate-D0mmKJO6.js";import{L as R}from"./link-BUWyp33c.js";import{c as ne,I as oe,T as f}from"./Img-BqvSmBQe.js";import{A as se}from"./AspectRatio-BtWwDo06.js";import{B as ae}from"./Button-Cj0pnHQz.js";import{b as le,d as ie,e as ce,c as pe,P as de,a as me}from"./index-BKF7sUdr.js";import{u as ue}from"./index-DhvoB8oL.js";import{P as N}from"./index-DGlsa-Ho.js";import{c as he}from"./utils-jAU0Cazi.js";import{C as M,a as B}from"./circle-arrow-right-vqGeAiTr.js";import"./use-merged-ref-etEBFTTl.js";import"./index-D_ldaswd.js";import"./index-BBQLOLHq.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fe=ne("ArrowRight",be);var w="Collapsible",[xe,$e]=ie(w),[Ce,E]=xe(w),Y=l.forwardRef((t,a)=>{const{__scopeCollapsible:c,open:r,defaultOpen:n,disabled:d,onOpenChange:o,...u}=t,[m=!1,s]=le({prop:r,defaultProp:n,onChange:o});return e.jsx(Ce,{scope:c,disabled:d,contentId:ce(),open:m,onOpenToggle:l.useCallback(()=>s(j=>!j),[s]),children:e.jsx(N.div,{"data-state":D(m),"data-disabled":d?"":void 0,...u,ref:a})})});Y.displayName=w;var Z="CollapsibleTrigger",ee=l.forwardRef((t,a)=>{const{__scopeCollapsible:c,...r}=t,n=E(Z,c);return e.jsx(N.button,{type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":D(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled,...r,ref:a,onClick:pe(t.onClick,n.onOpenToggle)})});ee.displayName=Z;var k="CollapsibleContent",te=l.forwardRef((t,a)=>{const{forceMount:c,...r}=t,n=E(k,t.__scopeCollapsible);return e.jsx(de,{present:c||n.open,children:({present:d})=>e.jsx(ge,{...r,ref:a,present:d})})});te.displayName=k;var ge=l.forwardRef((t,a)=>{const{__scopeCollapsible:c,present:r,children:n,...d}=t,o=E(k,c),[u,m]=l.useState(r),s=l.useRef(null),j=ue(a,s),I=l.useRef(0),_=I.current,A=l.useRef(0),L=A.current,S=o.open||u,F=l.useRef(S),h=l.useRef(void 0);return l.useEffect(()=>{const p=requestAnimationFrame(()=>F.current=!1);return()=>cancelAnimationFrame(p)},[]),me(()=>{const p=s.current;if(p){h.current=h.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const O=p.getBoundingClientRect();I.current=O.height,A.current=O.width,F.current||(p.style.transitionDuration=h.current.transitionDuration,p.style.animationName=h.current.animationName),m(r)}},[o.open,r]),e.jsx(N.div,{"data-state":D(o.open),"data-disabled":o.disabled?"":void 0,id:o.contentId,hidden:!S,...d,ref:j,style:{"--radix-collapsible-content-height":_?`${_}px`:void 0,"--radix-collapsible-content-width":L?`${L}px`:void 0,...t.style},children:S&&n})});function D(t){return t?"open":"closed"}var ye=Y;const Te=ye,je=ee,Se=te,v={Content:Se,Root:Te,Trigger:je};function i({title:t,thumbnail:a,current:c,groups:r}){const n=r.length,d=r.findIndex(({url:s})=>s===c),o=n-(d===-1?n:d),u=o<=1?void 0:r[n-o+1],m=o>=r.length?void 0:r[n-o-1];return e.jsxs("div",{className:"overflow-hidden rounded border","data-component":"ContentSeriesTemplate",children:[e.jsx(se,{ratio:21/9,children:e.jsx(oe,{alt:t,className:"object-cover",src:a,fill:!0})}),e.jsxs("div",{className:"p-4",children:[e.jsx(f,{variant:"muted",children:"시리즈 모아보기"}),e.jsx(f,{variant:"h4",children:t}),e.jsxs(v.Root,{children:[e.jsxs("div",{className:"mt-2 flex justify-between gap-2",children:[e.jsx(v.Trigger,{asChild:!0,children:e.jsx("div",{children:e.jsx(ae,{variant:"ghost",children:"전체보기"})})}),e.jsxs("div",{className:"flex items-center gap-2",children:[u?e.jsx(R,{href:u.url,children:e.jsx(M,{})}):e.jsx(M,{className:"text-muted-foreground"}),e.jsxs(f,{variant:"small",children:[o," / ",r.length]}),m?e.jsx(R,{href:m.url,children:e.jsx(B,{})}):e.jsx(B,{className:"text-muted-foreground"})]})]}),e.jsx(v.Content,{children:e.jsx("div",{className:"mt-4 flex flex-col gap-1",children:r.map(s=>e.jsxs(R,{className:"inline-flex items-center gap-1",href:s.url,children:[s.url===c&&e.jsx(fe,{className:"text-sky-600",size:14}),e.jsx(f,{className:he("hover:underline",{"font-bold text-sky-600":s.url===c}),children:s.title})]},s.url))})})]})]})]})}i.__docgenInfo={description:`컨텐츠 시리즈 template 컴포넌트 반환 메서드

@param {ContentSeriesTemplateProps} param0: ContentSeriesTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentSeriesTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},thumbnail:{required:!0,tsType:{name:"string"},description:"썸네일"},current:{required:!0,tsType:{name:"string"},description:"현재 URL"},groups:{required:!0,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailGroupProps"}],raw:"BlogMarkdownDetailGroupProps[]"},description:"마크다운 TOC 리스트"}}};const x="ContentSeriesTemplate",Re=Array.from({length:10}).map((t,a)=>({title:`Lorem Ipsum ${10-a}`,url:`/${10-a}`})),qe={argTypes:{current:{table:{category:x,subcategory:b.PROP}},groups:{table:{category:x,subcategory:b.PROP}},thumbnail:{table:{category:x,subcategory:b.PROP}},title:{table:{category:x,subcategory:b.PROP}}},args:{current:"/2",groups:Re,thumbnail:"https://placehold.co/600/FFF/31343C?font=raleway&text=Thumbnail",title:"Lorem Ipsum"},component:i,parameters:re("마크다운 목차 컴포넌트",["마크다운의 목차 목록을 표현하는 컴포넌트입니다."]),tags:["autodocs"],title:"template/ContentSeriesTemplate"},C={},g={argTypes:{current:{control:{disable:!0}}},render:t=>e.jsxs(P,{subtitle:"다양한 현재 URL이 적용된 컴포넌트 예시",title:"Current",container:!0,children:[e.jsx(i,{...t,current:"/1"}),e.jsx(i,{...t,current:"/4"}),e.jsx(i,{...t,current:"/10"}),e.jsx(i,{...t,current:"/122"})]})},y={argTypes:{thumbnail:{control:{disable:!0}}},render:t=>e.jsxs(P,{subtitle:"다양한 썸네일이이 지정된 컴포넌트 예시",title:"Thumbnail",container:!0,children:[e.jsx(i,{...t,thumbnail:"https://placehold.co/600/31343C/FFF?font=raleway&text=Dark+Mode"}),e.jsx(i,{...t,thumbnail:"https://placehold.co/600/D6E6F2/124E78?font=raleway&text=Calm+Blue"}),e.jsx(i,{...t,thumbnail:"https://placehold.co/600/EDE0D4/5C3D2E?font=raleway&text=Warm+Tone"})]})},T={argTypes:{title:{control:{disable:!0}}},render:t=>e.jsxs(P,{subtitle:"다양한 시리즈 제목이 지정된 컴포넌트 예시",title:"Title",container:!0,children:[e.jsx(i,{...t,title:"Lorem Ipsum"}),e.jsx(i,{...t,title:"Jest"}),e.jsx(i,{...t,title:"Storybook"})]})};var $,q,G;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(G=(q=C.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,z,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  argTypes: {
    current: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 현재 URL이 적용된 컴포넌트 예시" title="Current" container>
            <ContentSeriesTemplate {...props} current="/1" />
            <ContentSeriesTemplate {...props} current="/4" />
            <ContentSeriesTemplate {...props} current="/10" />
            <ContentSeriesTemplate {...props} current="/122" />
        </StorybookTemplate>
}`,...(U=(z=g.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var W,X,H;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  argTypes: {
    thumbnail: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 썸네일이이 지정된 컴포넌트 예시" title="Thumbnail" container>
            <ContentSeriesTemplate {...props} thumbnail="https://placehold.co/600/31343C/FFF?font=raleway&text=Dark+Mode" />
            <ContentSeriesTemplate {...props} thumbnail="https://placehold.co/600/D6E6F2/124E78?font=raleway&text=Calm+Blue" />
            <ContentSeriesTemplate {...props} thumbnail="https://placehold.co/600/EDE0D4/5C3D2E?font=raleway&text=Warm+Tone" />
        </StorybookTemplate>
}`,...(H=(X=y.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var K,Q,V;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  argTypes: {
    title: {
      control: {
        disable: true
      }
    }
  },
  render: props => <StorybookTemplate subtitle="다양한 시리즈 제목이 지정된 컴포넌트 예시" title="Title" container>
            <ContentSeriesTemplate {...props} title="Lorem Ipsum" />
            <ContentSeriesTemplate {...props} title="Jest" />
            <ContentSeriesTemplate {...props} title="Storybook" />
        </StorybookTemplate>
}`,...(V=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Ge=["Playground","Current","Thumbnail","Title"];export{g as Current,C as Playground,y as Thumbnail,T as Title,Ge as __namedExportsOrder,qe as default};
