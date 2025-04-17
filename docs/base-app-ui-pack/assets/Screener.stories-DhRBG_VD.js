import{j as t}from"./jsx-runtime-BnHmloXs.js";import{a as Oe,g as Ue}from"./index-D0o6aRj1.js";import{r as Ve,a as He}from"./image-context-BW0EOe3S.js";import{r as Je}from"./jsx-runtime-BEh3FTX5.js";import{r as Ke,a as Ge,b as Xe,c as ze,d as Be,e as Fe,f as We,g as Qe}from"./add-base-path-3zsbvK-9.js";import{r as Ye,S as d,u as Ze}from"./Screener-CzoEQhL3.js";import{g as et,S as be,a as Z}from"./storybook-CWpip0ZO.js";import{a as tt}from"./utils-BR9kC6eQ.js";import"./QueryClientProvider-e3uWm7Ug.js";import"./index-C8V3Szb0.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],ot=tt("Link",rt);var U={exports:{}},V={exports:{}},he;function st(){return he||(he=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return W}});const n=Oe(),P=Ke(),c=typeof IntersectionObserver=="function",q=new Map,S=[];function B(h){const f={root:h.root||null,margin:h.rootMargin||""},N=S.find(m=>m.root===f.root&&m.margin===f.margin);let u;if(N&&(u=q.get(N),u))return u;const y=new Map,p=new IntersectionObserver(m=>{m.forEach(g=>{const _=y.get(g.target),L=g.isIntersecting||g.intersectionRatio>0;_&&L&&_(L)})},h);return u={id:f,observer:p,elements:y},S.push(f),q.set(f,u),u}function F(h,f,N){const{id:u,observer:y,elements:p}=B(N);return p.set(h,f),y.observe(h),function(){if(p.delete(h),y.unobserve(h),p.size===0){y.disconnect(),q.delete(u);const g=S.findIndex(_=>_.root===u.root&&_.margin===u.margin);g>-1&&S.splice(g,1)}}}function W(h){let{rootRef:f,rootMargin:N,disabled:u}=h;const y=u||!c,[p,m]=(0,n.useState)(!1),g=(0,n.useRef)(null),_=(0,n.useCallback)(I=>{g.current=I},[]);(0,n.useEffect)(()=>{if(c){if(y||p)return;const I=g.current;if(I&&I.tagName)return F(I,s=>s&&m(s),{root:f==null?void 0:f.current,rootMargin:N})}else if(!p){const I=(0,P.requestIdleCallback)(()=>m(!0));return()=>(0,P.cancelIdleCallback)(I)}},[y,N,f,p,g.current]);const L=(0,n.useCallback)(()=>{m(!1)},[]);return[_,p,L]}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(V,V.exports)),V.exports}var H={exports:{}},ge;function nt(){return ge||(ge=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return n}}),Ge();function n(P,c,q,S){return!1}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(H,H.exports)),H.exports}var ye;function at(){return ye||(ye=1,function(r,e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return re}});const n=Ve(),P=Je(),c=n._(Oe()),q=Xe(),S=ze(),B=Be(),F=Fe(),W=We(),h=He(),f=st(),N=nt(),u=Qe(),y=Ye(),p=new Set;function m(s,k,v,i){if(!(typeof window>"u")&&(0,S.isLocalURL)(k)){if(!i.bypassPrefetchedCheck){const C=typeof i.locale<"u"?i.locale:"locale"in s?s.locale:void 0,j=k+"%"+v+"%"+C;if(p.has(j))return;p.add(j)}s.prefetch(k,v,i).catch(C=>{})}}function g(s){const v=s.currentTarget.getAttribute("target");return v&&v!=="_self"||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.nativeEvent&&s.nativeEvent.which===2}function _(s,k,v,i,C,j,$,Q){const{nodeName:Y}=s.currentTarget;if(Y.toUpperCase()==="A"&&(g(s)||!(0,S.isLocalURL)(v)))return;s.preventDefault(),(()=>{const A=$??!0;"beforePopState"in k?k[C?"replace":"push"](v,i,{shallow:j,locale:Q,scroll:A}):k[C?"replace":"push"](i||v,{scroll:A})})()}function L(s){return typeof s=="string"?s:(0,B.formatUrl)(s)}const re=c.default.forwardRef(function(k,v){let i;const{href:C,as:j,children:$,prefetch:Q=null,passHref:Y,replace:oe,shallow:se,scroll:A,locale:M,onClick:ne,onMouseEnter:ae,onTouchStart:le,legacyBehavior:x=!1,...we}=k;i=$,x&&(typeof i=="string"||typeof i=="number")&&(i=(0,P.jsx)("a",{children:i}));const o=c.default.useContext(h.RouterContext),ce=Q!==!1,{href:T,as:b}=c.default.useMemo(()=>{if(!o){const me=L(C);return{href:me,as:j?L(j):me}}const[l,E]=(0,q.resolveHref)(o,C,!0);return{href:l,as:j?(0,q.resolveHref)(o,j):E||l}},[o,C,j]),ie=c.default.useRef(T),ue=c.default.useRef(b);let a;x&&(a=c.default.Children.only(i));const $e=x?a&&typeof a=="object"&&a.ref:v,[de,fe,pe]=(0,f.useIntersection)({rootMargin:"200px"}),Ae=c.default.useCallback(l=>{(ue.current!==b||ie.current!==T)&&(pe(),ue.current=b,ie.current=T),de(l)},[b,T,pe,de]),De=(0,y.useMergedRef)(Ae,$e);c.default.useEffect(()=>{o&&(!fe||!ce||m(o,T,b,{locale:M}))},[b,T,fe,M,ce,o==null?void 0:o.locale,o]);const D={ref:De,onClick(l){!x&&typeof ne=="function"&&ne(l),x&&a.props&&typeof a.props.onClick=="function"&&a.props.onClick(l),o&&(l.defaultPrevented||_(l,o,T,b,oe,se,A,M))},onMouseEnter(l){!x&&typeof ae=="function"&&ae(l),x&&a.props&&typeof a.props.onMouseEnter=="function"&&a.props.onMouseEnter(l),o&&m(o,T,b,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(E){!x&&typeof le=="function"&&le(E),x&&a.props&&typeof a.props.onTouchStart=="function"&&a.props.onTouchStart(E),o&&m(o,T,b,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if((0,F.isAbsoluteUrl)(b))D.href=b;else if(!x||Y||a.type==="a"&&!("href"in a.props)){const l=typeof M<"u"?M:o==null?void 0:o.locale,E=(o==null?void 0:o.isLocaleDomain)&&(0,N.getDomainLocale)(b,l,o==null?void 0:o.locales,o==null?void 0:o.domainLocales);D.href=E||(0,u.addBasePath)((0,W.addLocale)(b,l,o==null?void 0:o.defaultLocale))}return x?c.default.cloneElement(a,D):(0,P.jsx)("a",{...we,...D,children:i})});(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(U,U.exports)),U.exports}var ee,ve;function lt(){return ve||(ve=1,ee=at()),ee}var ct=lt();const it=Ue(ct);function w({className:r,...e}){return t.jsx("div",{className:`flex flex-col gap-16 ${r??""}`,"data-component":"StorybookContainer",...e})}w.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};function R({title:r,subtitle:e,vertical:n,container:P,className:c,children:q,...S}){return t.jsxs("div",{className:`flex flex-col gap-4 ${n===!0?"":"sm:flex-row"} ${c??""}`.trim(),"data-component":"StorybookTemplate",...S,children:[t.jsxs("div",{className:"flex w-full shrink-0 flex-col gap-2 sm:w-48",children:[t.jsx("h3",{className:"text-lg font-bold",children:r}),t.jsx("p",{className:"text-muted-foreground text-sm",children:e})]}),t.jsx("div",{className:`grid flex-1 gap-4 ${P===!0?"":"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"}`,children:q})]})}R.__docgenInfo={description:`Storybook template 컴포넌트 반환 메서드

@param {StorybookTemplateProps} param0: StorybookTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"타이틀"},subtitle:{required:!1,tsType:{name:"string"},description:"서브 타이틀"},vertical:{required:!1,tsType:{name:"boolean"},description:"수직 여부"},container:{required:!1,tsType:{name:"boolean"},description:"컨테이너 여부"}},composes:["DetailedHTMLProps"]};const O="Screener",St={argTypes:{children:Z("children",O),className:Z("className",O),id:Z("id",O),isImage:{table:{category:O,subcategory:be.PROP}},src:{table:{category:O,subcategory:be.PROP}}},args:{className:"h-[calc(100vh-32px)]"},component:d,parameters:et("스크리너 컴포넌트",["미디어를 표현하는 스크리너입니다.","기본적으로 미리 정의된 여러 클립을 재생합니다.","`isImage`를 조정하여 이미지나 영상을 타겟할 수 있으며, `src`로 소스를 지정할 수 있습니다.","클립일 경우, `stop`으로 클립의 재생 여부를 지정할 수 있습니다."]),tags:["autodocs"],title:"organism/Screener"},te=[{color:"#e6194b",text:"S"},{color:"#3cb44b",text:"C"},{color:"#ffe119",text:"R"},{color:"#0082c8",text:"E"},{color:"#f58231",text:"E"},{color:"#911eb4",text:"N"},{color:"#46f0f0",text:"E"},{color:"#f032e6",text:"R"},{color:"#CCCCCC",text:"-"},{color:"#fabebe",text:"I"},{color:"#008080",text:"M"},{color:"#e6beff",text:"A"},{color:"#aa6e28",text:"G"},{color:"#fffac8",text:"E"}];function ut({...r}){const{data:e=[]}=Ze();return t.jsx(w,{children:t.jsx(R,{subtitle:"비디오 예시",title:"Video",children:e.map(n=>t.jsx("div",{className:"aspect-square",children:t.jsx(d,{src:n,stop:!0,...r,children:t.jsxs(it,{className:"m-2 inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-sm text-sky-700",href:n,target:"_blank",children:[t.jsx(ot,{size:12})," ",n.replace("https://datastore.itcode.dev/itcode/video/","").split(".")[0]]})})},n))})})}const J={},K={args:{className:"w-full"},parameters:{controls:{disable:!0}},render:r=>t.jsxs(w,{children:[t.jsx(R,{subtitle:"비디오 예시",title:"Video",children:te.map(({color:e})=>t.jsx("div",{className:"aspect-square",children:t.jsx(d,{...r})},`video-${e}`))}),t.jsx(R,{subtitle:"이미지 예시",title:"Image",children:te.map(({color:e,text:n})=>t.jsx("div",{className:"aspect-square",children:t.jsx(d,{src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${n}`,isImage:!0,...r})},e))}),t.jsxs(R,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(d,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(d,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(d,{stop:!0,...r})})]})]})},G={argTypes:{isImage:{control:{disable:!0}},src:{control:{disable:!0}},stop:{control:{disable:!0}}},args:{className:"h-full"},render:ut},X={args:{className:"h-full"},render:r=>t.jsx(w,{children:t.jsx(R,{subtitle:"이미지 예시",title:"Image",children:te.map(({color:e,text:n})=>t.jsx("div",{className:"aspect-square",children:t.jsx(d,{src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${n}`,isImage:!0,...r})},e))})})},z={args:{className:"h-full"},render:r=>t.jsxs(w,{children:[t.jsxs(R,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop On",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(d,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(d,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(d,{stop:!0,...r})})]}),t.jsxs(R,{subtitle:"클립 모드에서 stop 비활성화로 재생된 예시",title:"Stop Off (default)",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(d,{...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(d,{...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(d,{...r})})]})]})};var xe,Se,ke;J.parameters={...J.parameters,docs:{...(xe=J.parameters)==null?void 0:xe.docs,source:{originalSource:"{}",...(ke=(Se=J.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var je,qe,Ne;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    className: 'w-full'
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="비디오 예시" title="Video">
                {tiles.map(({
        color
      }) => <div className="aspect-square" key={\`video-\${color}\`}>
                        <Screener {...props} />
                    </div>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="이미지 예시" title="Image">
                {tiles.map(({
        color,
        text
      }) => <div className="aspect-square" key={color}>
                        <Screener src={\`https://placehold.co/600/\${color.replace('#', '')}/31343C?font=raleway&text=\${text}\`} isImage {...props} />
                    </div>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="클립 모드에서 stop 활성화로 재생이 비활성화된 예시" title="Stop">
                <div className="aspect-square">
                    <Screener stop {...props} />
                </div>

                <div className="aspect-square">
                    <Screener stop {...props} />
                </div>

                <div className="aspect-square">
                    <Screener stop {...props} />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(Ne=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var _e,Ce,Te;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  argTypes: {
    isImage: {
      control: {
        disable: true
      }
    },
    src: {
      control: {
        disable: true
      }
    },
    stop: {
      control: {
        disable: true
      }
    }
  },
  args: {
    className: 'h-full'
  },
  render: VideoComponent
}`,...(Te=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Pe,Ie,Re;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    className: 'h-full'
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="이미지 예시" title="Image">
                {tiles.map(({
        color,
        text
      }) => <div className="aspect-square" key={color}>
                        <Screener src={\`https://placehold.co/600/\${color.replace('#', '')}/31343C?font=raleway&text=\${text}\`} isImage {...props} />
                    </div>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(Re=(Ie=X.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var Le,Me,Ee;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    className: 'h-full'
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="클립 모드에서 stop 활성화로 재생이 비활성화된 예시" title="Stop On">
                <div className="aspect-square">
                    <Screener stop {...props} />
                </div>

                <div className="aspect-square">
                    <Screener stop {...props} />
                </div>

                <div className="aspect-square">
                    <Screener stop {...props} />
                </div>
            </StorybookTemplate>

            <StorybookTemplate subtitle="클립 모드에서 stop 비활성화로 재생된 예시" title="Stop Off (default)">
                <div className="aspect-square">
                    <Screener {...props} />
                </div>

                <div className="aspect-square">
                    <Screener {...props} />
                </div>

                <div className="aspect-square">
                    <Screener {...props} />
                </div>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(Ee=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};const kt=["Playground","All","Video","Image","Stop"];export{K as All,X as Image,J as Playground,z as Stop,G as Video,kt as __namedExportsOrder,St as default};
