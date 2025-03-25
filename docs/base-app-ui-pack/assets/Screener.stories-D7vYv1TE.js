import{j as t}from"./jsx-runtime-BnHmloXs.js";import{r as U,a as Oe,g as Je}from"./index-D0o6aRj1.js";import{r as Ke,a as Xe}from"./image-context-BW0EOe3S.js";import{r as Be}from"./jsx-runtime-BEh3FTX5.js";import{r as Ge,a as ze,b as Fe,c as We,d as Ze,e as Qe,f as Ye,g as et}from"./add-base-path-3zsbvK-9.js";import{r as tt,c as rt,S as m,u as ot}from"./Screener-DUExJB8L.js";import{g as nt,S as ge,a as te}from"./storybook-hTxjENzG.js";import"./index-C8V3Szb0.js";import"./QueryClientProvider-e3uWm7Ug.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ae=(...r)=>r.filter((e,o,d)=>!!e&&e.trim()!==""&&d.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var at={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=U.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:a="",children:c,iconNode:S,...$},O)=>U.createElement("svg",{ref:O,...at,width:e,height:e,stroke:r,strokeWidth:d?Number(o)*24/Number(e):o,className:Ae("lucide",a),...$},[...S.map(([A,f])=>U.createElement(A,f)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(r,e)=>{const o=U.forwardRef(({className:d,...a},c)=>U.createElement(lt,{ref:c,iconNode:e,className:Ae(`lucide-${st(r)}`,d),...a}));return o.displayName=`${r}`,o};/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],ut=it("Link",ct);var X={exports:{}},B={exports:{}},ye;function dt(){return ye||(ye=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return A}});const o=Oe(),d=Ge(),a=typeof IntersectionObserver=="function",c=new Map,S=[];function $(f){const h={root:f.root||null,margin:f.rootMargin||""},P=S.find(y=>y.root===h.root&&y.margin===h.margin);let p;if(P&&(p=c.get(P),p))return p;const j=new Map,g=new IntersectionObserver(y=>{y.forEach(k=>{const I=j.get(k.target),w=k.isIntersecting||k.intersectionRatio>0;I&&w&&I(w)})},f);return p={id:h,observer:g,elements:j},S.push(h),c.set(h,p),p}function O(f,h,P){const{id:p,observer:j,elements:g}=$(P);return g.set(f,h),j.observe(f),function(){if(g.delete(f),j.unobserve(f),g.size===0){j.disconnect(),c.delete(p);const k=S.findIndex(I=>I.root===p.root&&I.margin===p.margin);k>-1&&S.splice(k,1)}}}function A(f){let{rootRef:h,rootMargin:P,disabled:p}=f;const j=p||!a,[g,y]=(0,o.useState)(!1),k=(0,o.useRef)(null),I=(0,o.useCallback)(L=>{k.current=L},[]);(0,o.useEffect)(()=>{if(a){if(j||g)return;const L=k.current;if(L&&L.tagName)return O(L,s=>s&&y(s),{root:h==null?void 0:h.current,rootMargin:P})}else if(!g){const L=(0,d.requestIdleCallback)(()=>y(!0));return()=>(0,d.cancelIdleCallback)(L)}},[j,P,h,g,k.current]);const w=(0,o.useCallback)(()=>{y(!1)},[]);return[I,g,w]}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(B,B.exports)),B.exports}var G={exports:{}},xe;function ft(){return xe||(xe=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return o}}),ze();function o(d,a,c,S){return!1}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(G,G.exports)),G.exports}var Se;function pt(){return Se||(Se=1,function(r,e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return ne}});const o=Ke(),d=Be(),a=o._(Oe()),c=Fe(),S=We(),$=Ze(),O=Qe(),A=Ye(),f=Xe(),h=dt(),P=ft(),p=et(),j=tt(),g=new Set;function y(s,C,T,u){if(!(typeof window>"u")&&(0,S.isLocalURL)(C)){if(!u.bypassPrefetchedCheck){const R=typeof u.locale<"u"?u.locale:"locale"in s?s.locale:void 0,_=C+"%"+T+"%"+R;if(g.has(_))return;g.add(_)}s.prefetch(C,T,u).catch(R=>{})}}function k(s){const T=s.currentTarget.getAttribute("target");return T&&T!=="_self"||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.nativeEvent&&s.nativeEvent.which===2}function I(s,C,T,u,R,_,H,Y){const{nodeName:ee}=s.currentTarget;if(ee.toUpperCase()==="A"&&(k(s)||!(0,S.isLocalURL)(T)))return;s.preventDefault(),(()=>{const J=H??!0;"beforePopState"in C?C[R?"replace":"push"](T,u,{shallow:_,locale:Y,scroll:J}):C[R?"replace":"push"](u||T,{scroll:J})})()}function w(s){return typeof s=="string"?s:(0,$.formatUrl)(s)}const ne=a.default.forwardRef(function(C,T){let u;const{href:R,as:_,children:H,prefetch:Y=null,passHref:ee,replace:se,shallow:ae,scroll:J,locale:E,onClick:le,onMouseEnter:ie,onTouchStart:ce,legacyBehavior:v=!1,...De}=C;u=H,v&&(typeof u=="string"||typeof u=="number")&&(u=(0,d.jsx)("a",{children:u}));const n=a.default.useContext(f.RouterContext),ue=Y!==!1,{href:N,as:x}=a.default.useMemo(()=>{if(!n){const he=w(R);return{href:he,as:_?w(_):he}}const[i,M]=(0,c.resolveHref)(n,R,!0);return{href:i,as:_?(0,c.resolveHref)(n,_):M||i}},[n,R,_]),de=a.default.useRef(N),fe=a.default.useRef(x);let l;v&&(l=a.default.Children.only(u));const Ue=v?l&&typeof l=="object"&&l.ref:T,[pe,me,be]=(0,h.useIntersection)({rootMargin:"200px"}),Ve=a.default.useCallback(i=>{(fe.current!==x||de.current!==N)&&(be(),fe.current=x,de.current=N),pe(i)},[x,N,be,pe]),He=(0,j.useMergedRef)(Ve,Ue);a.default.useEffect(()=>{n&&(!me||!ue||y(n,N,x,{locale:E}))},[x,N,me,E,ue,n==null?void 0:n.locale,n]);const K={ref:He,onClick(i){!v&&typeof le=="function"&&le(i),v&&l.props&&typeof l.props.onClick=="function"&&l.props.onClick(i),n&&(i.defaultPrevented||I(i,n,N,x,se,ae,J,E))},onMouseEnter(i){!v&&typeof ie=="function"&&ie(i),v&&l.props&&typeof l.props.onMouseEnter=="function"&&l.props.onMouseEnter(i),n&&y(n,N,x,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(M){!v&&typeof ce=="function"&&ce(M),v&&l.props&&typeof l.props.onTouchStart=="function"&&l.props.onTouchStart(M),n&&y(n,N,x,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if((0,O.isAbsoluteUrl)(x))K.href=x;else if(!v||ee||l.type==="a"&&!("href"in l.props)){const i=typeof E<"u"?E:n==null?void 0:n.locale,M=(n==null?void 0:n.isLocaleDomain)&&(0,P.getDomainLocale)(x,i,n==null?void 0:n.locales,n==null?void 0:n.domainLocales);K.href=M||(0,p.addBasePath)((0,A.addLocale)(x,i,n==null?void 0:n.defaultLocale))}return v?a.default.cloneElement(l,K):(0,d.jsx)("a",{...De,...K,children:u})});(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(X,X.exports)),X.exports}var re,ke;function mt(){return ke||(ke=1,re=pt()),re}var bt=mt();const ht=Je(bt);function b({className:r,children:e,...o}){return t.jsx("div",{className:rt('relative overflow-hidden w-full after:content-[""] after:block after:pb-[100%]',r),"data-component":"Tile",...o,children:t.jsx("div",{className:"absolute left-0 top-0 size-full",children:e})})}b.__docgenInfo={description:`타일 atom 컴포넌트 반환 메서드

@param {TileProps} param0: TileProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Tile"};function V({className:r,...e}){return t.jsx("div",{className:`flex flex-col gap-16 ${r??""}`,"data-component":"StorybookContainer",...e})}V.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};function q({title:r,subtitle:e,vertical:o,container:d,className:a,children:c,...S}){return t.jsxs("div",{className:`flex flex-col gap-4 ${o===!0?"":"sm:flex-row"} ${a??""}`.trim(),"data-component":"StorybookTemplate",...S,children:[t.jsxs("div",{className:"flex w-full shrink-0 flex-col gap-2 sm:w-48",children:[t.jsx("h3",{className:"text-lg font-bold",children:r}),t.jsx("p",{className:"text-muted-foreground text-sm",children:e})]}),t.jsx("div",{className:`grid flex-1 gap-4 ${d===!0?"":"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"}`,children:c})]})}q.__docgenInfo={description:`Storybook template 컴포넌트 반환 메서드

@param {StorybookTemplateProps} param0: StorybookTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"타이틀"},subtitle:{required:!1,tsType:{name:"string"},description:"서브 타이틀"},vertical:{required:!1,tsType:{name:"boolean"},description:"수직 여부"},container:{required:!1,tsType:{name:"boolean"},description:"컨테이너 여부"}},composes:["DetailedHTMLProps"]};const D="Screener",Pt={argTypes:{children:te("children",D),className:te("className",D),id:te("id",D),isImage:{table:{category:D,subcategory:ge.PROP}},src:{table:{category:D,subcategory:ge.PROP}}},args:{className:"h-[calc(100vh-32px)]"},component:m,parameters:nt("스크리너 컴포넌트",["미디어를 표현하는 스크리너입니다.","기본적으로 미리 정의된 여러 클립을 재생합니다.","`isImage`를 조정하여 이미지나 영상을 타겟할 수 있으며, `src`로 소스를 지정할 수 있습니다.","클립일 경우, `stop`으로 클립의 재생 여부를 지정할 수 있습니다."]),tags:["autodocs"],title:"organism/Screener"},oe=[{color:"#e6194b",text:"S"},{color:"#3cb44b",text:"C"},{color:"#ffe119",text:"R"},{color:"#0082c8",text:"E"},{color:"#f58231",text:"E"},{color:"#911eb4",text:"N"},{color:"#46f0f0",text:"E"},{color:"#f032e6",text:"R"},{color:"#CCCCCC",text:"-"},{color:"#fabebe",text:"I"},{color:"#008080",text:"M"},{color:"#e6beff",text:"A"},{color:"#aa6e28",text:"G"},{color:"#fffac8",text:"E"}];function gt({...r}){const{data:e=[]}=ot();return t.jsx(V,{children:t.jsx(q,{subtitle:"비디오 예시",title:"Video",children:e.map(o=>t.jsx(b,{children:t.jsx(m,{src:o,stop:!0,...r,children:t.jsxs(ht,{className:"m-2 inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-sm text-sky-700",href:o,target:"_blank",children:[t.jsx(ut,{size:12})," ",o.replace("https://datastore.itcode.dev/itcode/video/","").split(".")[0]]})})},o))})})}const z={},F={args:{className:"w-full"},parameters:{controls:{disable:!0}},render:r=>t.jsxs(V,{children:[t.jsx(q,{subtitle:"비디오 예시",title:"Video",children:oe.map(({color:e})=>t.jsx(b,{children:t.jsx(m,{...r})},`video-${e}`))}),t.jsx(q,{subtitle:"이미지 예시",title:"Image",children:oe.map(({color:e,text:o})=>t.jsx(b,{children:t.jsx(m,{src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${o}`,isImage:!0,...r})},e))}),t.jsxs(q,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop",children:[t.jsx(b,{children:t.jsx(m,{stop:!0,...r})}),t.jsx(b,{children:t.jsx(m,{stop:!0,...r})}),t.jsx(b,{children:t.jsx(m,{stop:!0,...r})})]})]})},W={argTypes:{isImage:{control:{disable:!0}},src:{control:{disable:!0}},stop:{control:{disable:!0}}},args:{className:"h-full"},render:gt},Z={args:{className:"h-full"},render:r=>t.jsx(V,{children:t.jsx(q,{subtitle:"이미지 예시",title:"Image",children:oe.map(({color:e,text:o})=>t.jsx(b,{children:t.jsx(m,{src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${o}`,isImage:!0,...r})},e))})})},Q={args:{className:"h-full"},render:r=>t.jsxs(V,{children:[t.jsxs(q,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop On",children:[t.jsx(b,{children:t.jsx(m,{stop:!0,...r})}),t.jsx(b,{children:t.jsx(m,{stop:!0,...r})}),t.jsx(b,{children:t.jsx(m,{stop:!0,...r})})]}),t.jsxs(q,{subtitle:"클립 모드에서 stop 비활성화로 재생된 예시",title:"Stop Off (default)",children:[t.jsx(b,{children:t.jsx(m,{...r})}),t.jsx(b,{children:t.jsx(m,{...r})}),t.jsx(b,{children:t.jsx(m,{...r})})]})]})};var je,Te,ve;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:"{}",...(ve=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var Ce,_e,Pe;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
      }) => <Tile key={\`video-\${color}\`}>
                        <Screener {...props} />
                    </Tile>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="이미지 예시" title="Image">
                {tiles.map(({
        color,
        text
      }) => <Tile key={color}>
                        <Screener src={\`https://placehold.co/600/\${color.replace('#', '')}/31343C?font=raleway&text=\${text}\`} isImage {...props} />
                    </Tile>)}
            </StorybookTemplate>

            <StorybookTemplate subtitle="클립 모드에서 stop 활성화로 재생이 비활성화된 예시" title="Stop">
                <Tile>
                    <Screener stop {...props} />
                </Tile>

                <Tile>
                    <Screener stop {...props} />
                </Tile>

                <Tile>
                    <Screener stop {...props} />
                </Tile>
            </StorybookTemplate>
        </StorybookContainer>
}`,...(Pe=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Pe.source}}};var Ie,Re,Ne;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ne=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Le,qe,we;Z.parameters={...Z.parameters,docs:{...(Le=Z.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    className: 'h-full'
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="이미지 예시" title="Image">
                {tiles.map(({
        color,
        text
      }) => <Tile key={color}>
                        <Screener src={\`https://placehold.co/600/\${color.replace('#', '')}/31343C?font=raleway&text=\${text}\`} isImage {...props} />
                    </Tile>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(we=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:we.source}}};var Ee,Me,$e;Q.parameters={...Q.parameters,docs:{...(Ee=Q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    className: 'h-full'
  },
  render: props => <StorybookContainer>
            <StorybookTemplate subtitle="클립 모드에서 stop 활성화로 재생이 비활성화된 예시" title="Stop On">
                <Tile>
                    <Screener stop {...props} />
                </Tile>

                <Tile>
                    <Screener stop {...props} />
                </Tile>

                <Tile>
                    <Screener stop {...props} />
                </Tile>
            </StorybookTemplate>

            <StorybookTemplate subtitle="클립 모드에서 stop 비활성화로 재생된 예시" title="Stop Off (default)">
                <Tile>
                    <Screener {...props} />
                </Tile>

                <Tile>
                    <Screener {...props} />
                </Tile>

                <Tile>
                    <Screener {...props} />
                </Tile>
            </StorybookTemplate>
        </StorybookContainer>
}`,...($e=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};const It=["Playground","All","Video","Image","Stop"];export{F as All,Z as Image,z as Playground,Q as Stop,W as Video,It as __namedExportsOrder,Pt as default};
