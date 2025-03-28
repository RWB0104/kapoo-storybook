import{j as e}from"./jsx-runtime-BnHmloXs.js";import{r as l}from"./index-CKMdfnwt.js";import{g as ne,S as b}from"./storybook-CWpip0ZO.js";import{S as P}from"./StorybookTemplate-h4nRBuW0.js";import{c as N,n as oe,T as f,L as R}from"./Typography-DdCa_Wgr.js";import{A as ae}from"./AspectRatio-MNHll25_.js";import{u as se,c as le,a as ie,b as ce,P as pe,d as de,B as me}from"./index-DD1UB85p.js";import{P as k,u as ue,c as he}from"./index-Csb7Hyah.js";import"./jsx-runtime-BEh3FTX5.js";import"./segment-CIEV7OGa.js";import"./index-BY638psU.js";import"./add-base-path-Br4_xqsT.js";import"./index-BZRNBTKr.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fe=N("ArrowRight",be);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]],$=N("CircleArrowLeft",xe);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]],B=N("CircleArrowRight",ye);var w="Collapsible",[Ce,Be]=le(w),[ge,E]=Ce(w),Z=l.forwardRef((t,s)=>{const{__scopeCollapsible:c,open:r,defaultOpen:n,disabled:d,onOpenChange:o,...u}=t,[m=!1,a]=se({prop:r,defaultProp:n,onChange:o});return e.jsx(ge,{scope:c,disabled:d,contentId:ie(),open:m,onOpenToggle:l.useCallback(()=>a(j=>!j),[a]),children:e.jsx(k.div,{"data-state":A(m),"data-disabled":d?"":void 0,...u,ref:s})})});Z.displayName=w;var ee="CollapsibleTrigger",te=l.forwardRef((t,s)=>{const{__scopeCollapsible:c,...r}=t,n=E(ee,c);return e.jsx(k.button,{type:"button","aria-controls":n.contentId,"aria-expanded":n.open||!1,"data-state":A(n.open),"data-disabled":n.disabled?"":void 0,disabled:n.disabled,...r,ref:s,onClick:ce(t.onClick,n.onOpenToggle)})});te.displayName=ee;var _="CollapsibleContent",re=l.forwardRef((t,s)=>{const{forceMount:c,...r}=t,n=E(_,t.__scopeCollapsible);return e.jsx(pe,{present:c||n.open,children:({present:d})=>e.jsx(Te,{...r,ref:s,present:d})})});re.displayName=_;var Te=l.forwardRef((t,s)=>{const{__scopeCollapsible:c,present:r,children:n,...d}=t,o=E(_,c),[u,m]=l.useState(r),a=l.useRef(null),j=ue(s,a),D=l.useRef(0),L=D.current,F=l.useRef(0),I=F.current,S=o.open||u,O=l.useRef(S),h=l.useRef(void 0);return l.useEffect(()=>{const p=requestAnimationFrame(()=>O.current=!1);return()=>cancelAnimationFrame(p)},[]),de(()=>{const p=a.current;if(p){h.current=h.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const M=p.getBoundingClientRect();D.current=M.height,F.current=M.width,O.current||(p.style.transitionDuration=h.current.transitionDuration,p.style.animationName=h.current.animationName),m(r)}},[o.open,r]),e.jsx(k.div,{"data-state":A(o.open),"data-disabled":o.disabled?"":void 0,id:o.contentId,hidden:!S,...d,ref:j,style:{"--radix-collapsible-content-height":L?`${L}px`:void 0,"--radix-collapsible-content-width":I?`${I}px`:void 0,...t.style},children:S&&n})});function A(t){return t?"open":"closed"}var je=Z;const Se=je,Re=te,ve=re,v={Content:ve,Root:Se,Trigger:Re};function i({title:t,thumbnail:s,current:c,groups:r}){const n=r.length,d=r.findIndex(({url:a})=>a===c),o=n-(d===-1?n:d),u=o<=1?void 0:r[n-o+1],m=o>=r.length?void 0:r[n-o-1];return e.jsxs("div",{className:"overflow-hidden rounded border","data-component":"ContentSeriesTemplate",children:[e.jsx(ae,{ratio:21/9,children:e.jsx(oe,{alt:t,objectFit:"cover",src:s,fill:!0})}),e.jsxs("div",{className:"p-4",children:[e.jsx(f,{variant:"muted",children:"시리즈 모아보기"}),e.jsx(f,{variant:"h4",children:t}),e.jsxs(v.Root,{children:[e.jsxs("div",{className:"mt-2 flex justify-between gap-2",children:[e.jsx(v.Trigger,{children:e.jsx("div",{children:e.jsx(me,{variant:"ghost",children:"전체보기"})})}),e.jsxs("div",{className:"flex items-center gap-2",children:[u?e.jsx(R,{href:u.url,children:e.jsx($,{})}):e.jsx($,{className:"text-muted-foreground"}),e.jsxs(f,{variant:"small",children:[o," / ",r.length]}),m?e.jsx(R,{href:m.url,children:e.jsx(B,{})}):e.jsx(B,{className:"text-muted-foreground"})]})]}),e.jsx(v.Content,{children:e.jsx("div",{className:"mt-4 flex flex-col gap-1",children:r.map(a=>e.jsxs(R,{className:"inline-flex items-center gap-1",href:a.url,children:[a.url===c&&e.jsx(fe,{className:"text-sky-600",size:14}),e.jsx(f,{className:he({"font-bold text-sky-600":a.url===c}),children:a.title})]},a.url))})})]})]})]})}i.__docgenInfo={description:`컨텐츠 시리즈 template 컴포넌트 반환 메서드

@param {ContentSeriesTemplateProps} param0: ContentSeriesTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentSeriesTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},thumbnail:{required:!0,tsType:{name:"string"},description:"썸네일"},current:{required:!0,tsType:{name:"string"},description:"현재 URL"},groups:{required:!0,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailGroupProps"}],raw:"BlogMarkdownDetailGroupProps[]"},description:"마크다운 TOC 리스트"}}};const x="ContentSeriesTemplate",Pe=Array.from({length:10}).map((t,s)=>({title:`Lorem Ipsum ${10-s}`,url:`/${10-s}`})),qe={argTypes:{current:{table:{category:x,subcategory:b.PROP}},groups:{table:{category:x,subcategory:b.PROP}},thumbnail:{table:{category:x,subcategory:b.PROP}},title:{table:{category:x,subcategory:b.PROP}}},args:{current:"/2",groups:Pe,thumbnail:"https://placehold.co/600/FFF/31343C?font=raleway&text=Thumbnail",title:"Lorem Ipsum"},component:i,parameters:ne("마크다운 목차 컴포넌트",["마크다운의 목차 목록을 표현하는 컴포넌트입니다."]),tags:["autodocs"],title:"template/ContentSeriesTemplate"},y={},C={argTypes:{current:{control:{disable:!0}}},render:t=>e.jsxs(P,{subtitle:"다양한 현재 URL이 적용된 컴포넌트 예시",title:"Current",container:!0,children:[e.jsx(i,{...t,current:"/1"}),e.jsx(i,{...t,current:"/4"}),e.jsx(i,{...t,current:"/10"}),e.jsx(i,{...t,current:"/122"})]})},g={argTypes:{thumbnail:{control:{disable:!0}}},render:t=>e.jsxs(P,{subtitle:"다양한 썸네일이이 지정된 컴포넌트 예시",title:"Thumbnail",container:!0,children:[e.jsx(i,{...t,thumbnail:"https://placehold.co/600/31343C/FFF?font=raleway&text=Dark+Mode"}),e.jsx(i,{...t,thumbnail:"https://placehold.co/600/D6E6F2/124E78?font=raleway&text=Calm+Blue"}),e.jsx(i,{...t,thumbnail:"https://placehold.co/600/EDE0D4/5C3D2E?font=raleway&text=Warm+Tone"})]})},T={argTypes:{title:{control:{disable:!0}}},render:t=>e.jsxs(P,{subtitle:"다양한 시리즈 제목이 지정된 컴포넌트 예시",title:"Title",container:!0,children:[e.jsx(i,{...t,title:"Lorem Ipsum"}),e.jsx(i,{...t,title:"Jest"}),e.jsx(i,{...t,title:"Storybook"})]})};var q,z,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,U,H;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(H=(U=C.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var W,X,K;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(X=g.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,V,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(V=T.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};const ze=["Playground","Current","Thumbnail","Title"];export{C as Current,y as Playground,g as Thumbnail,T as Title,ze as __namedExportsOrder,qe as default};
