import{j as t,a as De,b as Xe,c as ze,d as Be,e as Fe,f as We,g as Qe,h as Ye,i as Ze,k as et,l as tt,m as rt,n as ot}from"./iframe-MpF1B19N.js";import{r as st,S as p,u as nt}from"./Screener-B3w5UE_a.js";import{g as at,S as ge,a as te}from"./storybook-CWpip0ZO.js";import{b as ct}from"./createLucideIcon-YDSLsBHe.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],it=ct("Link",lt);function $({className:r,...e}){return t.jsx("div",{className:`flex flex-col gap-16 ${r??""}`,"data-component":"StorybookContainer",...e})}$.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};function R({title:r,subtitle:e,vertical:n,container:L,className:I,children:a,...k}){return t.jsxs("div",{className:`flex flex-col gap-4 ${n===!0?"":"sm:flex-row"} ${I??""}`.trim(),"data-component":"StorybookTemplate",...k,children:[t.jsxs("div",{className:"flex w-full shrink-0 flex-col gap-2 sm:w-48",children:[t.jsx("h3",{className:"font-bold text-lg",children:r}),t.jsx("p",{className:"text-muted-foreground text-sm",children:e})]}),t.jsx("div",{className:`grid flex-1 gap-4 ${L===!0?"":"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"}`,children:a})]})}R.__docgenInfo={description:`Storybook template 컴포넌트 반환 메서드

@param {StorybookTemplateProps} param0: StorybookTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"타이틀"},subtitle:{required:!1,tsType:{name:"string"},description:"서브 타이틀"},vertical:{required:!1,tsType:{name:"boolean"},description:"수직 여부"},container:{required:!1,tsType:{name:"boolean"},description:"컨테이너 여부"}},composes:["DetailedHTMLProps"]};var J={exports:{}},K={exports:{}},ye;function ut(){return ye||(ye=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return Y}});const n=De(),L=Xe(),I=typeof IntersectionObserver=="function",a=new Map,k=[];function D(g){const m={root:g.root||null,margin:g.rootMargin||""},C=k.find(v=>v.root===m.root&&v.margin===m.margin);let d;if(C&&(d=a.get(C),d))return d;const x=new Map,y=new IntersectionObserver(v=>{v.forEach(f=>{const P=x.get(f.target),M=f.isIntersecting||f.intersectionRatio>0;P&&M&&P(M)})},g);return d={id:m,observer:y,elements:x},k.push(m),a.set(m,d),d}function Q(g,m,C){const{id:d,observer:x,elements:y}=D(C);return y.set(g,m),x.observe(g),function(){if(y.delete(g),x.unobserve(g),y.size===0){x.disconnect(),a.delete(d);const f=k.findIndex(P=>P.root===d.root&&P.margin===d.margin);f>-1&&k.splice(f,1)}}}function Y(g){let{rootRef:m,rootMargin:C,disabled:d}=g;const x=d||!I,[y,v]=(0,n.useState)(!1),f=(0,n.useRef)(null),P=(0,n.useCallback)(j=>{f.current=j},[]);(0,n.useEffect)(()=>{if(I){if(x||y)return;const j=f.current;if(j&&j.tagName)return Q(j,A=>A&&v(A),{root:m==null?void 0:m.current,rootMargin:C})}else if(!y){const j=(0,L.requestIdleCallback)(()=>v(!0));return()=>(0,L.cancelIdleCallback)(j)}},[x,C,m,y,f.current]);const M=(0,n.useCallback)(()=>{v(!1)},[]);return[P,y,M]}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(K,K.exports)),K.exports}var G={exports:{}},ve;function dt(){return ve||(ve=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return n}}),ze();function n(L,I,a,k){return!1}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(G,G.exports)),G.exports}var re={},xe;function ft(){return xe||(xe=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return e}});let e=n=>{}}(re)),re}var Se;function pt(){return Se||(Se=1,function(r,e){"use client";Object.defineProperty(e,"__esModule",{value:!0});function n(s,b){for(var i in b)Object.defineProperty(s,i,{enumerable:!0,get:b[i]})}n(e,{default:function(){return Ue},useLinkStatus:function(){return Ae}});const L=Fe(),I=Be(),a=L._(De()),k=We(),D=Qe(),Q=Ye(),Y=Ze(),g=et(),m=tt(),C=ut(),d=dt(),x=rt(),y=st();ft();const v=new Set;function f(s,b,i,u){if(!(typeof window>"u")&&(0,D.isLocalURL)(b)){if(!u.bypassPrefetchedCheck){const q=typeof u.locale<"u"?u.locale:"locale"in s?s.locale:void 0,N=b+"%"+i+"%"+q;if(v.has(N))return;v.add(N)}s.prefetch(b,i,u).catch(q=>{})}}function P(s){const i=s.currentTarget.getAttribute("target");return i&&i!=="_self"||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.nativeEvent&&s.nativeEvent.which===2}function M(s,b,i,u,q,N,U,Z,V){const{nodeName:ee}=s.currentTarget;if(ee.toUpperCase()==="A"&&P(s)||s.currentTarget.hasAttribute("download"))return;if(!(0,D.isLocalURL)(i)){q&&(s.preventDefault(),location.replace(i));return}s.preventDefault(),(()=>{if(V){let E=!1;if(V({preventDefault:()=>{E=!0}}),E)return}const _=U??!0;"beforePopState"in b?b[q?"replace":"push"](i,u,{shallow:N,locale:Z,scroll:_}):b[q?"replace":"push"](u||i,{scroll:_})})()}function j(s){return typeof s=="string"?s:(0,Q.formatUrl)(s)}const ne=a.default.forwardRef(function(b,i){let u;const{href:q,as:N,children:U,prefetch:Z=null,passHref:V,replace:ee,shallow:ae,scroll:ce,locale:_,onClick:E,onNavigate:Ve,onMouseEnter:le,onTouchStart:ie,legacyBehavior:S=!1,...He}=b;u=U,S&&(typeof u=="string"||typeof u=="number")&&(u=(0,I.jsx)("a",{children:u}));const o=a.default.useContext(m.RouterContext),ue=Z!==!1,{href:T,as:h}=a.default.useMemo(()=>{if(!o){const he=j(q);return{href:he,as:N?j(N):he}}const[l,O]=(0,k.resolveHref)(o,q,!0);return{href:l,as:N?(0,k.resolveHref)(o,N):O||l}},[o,q,N]),de=a.default.useRef(T),fe=a.default.useRef(h);let c;S&&(c=a.default.Children.only(u));const Je=S?c&&typeof c=="object"&&c.ref:i,[pe,me,be]=(0,C.useIntersection)({rootMargin:"200px"}),Ke=a.default.useCallback(l=>{(fe.current!==h||de.current!==T)&&(be(),fe.current=h,de.current=T),pe(l)},[h,T,be,pe]),Ge=(0,y.useMergedRef)(Ke,Je);a.default.useEffect(()=>{o&&(!me||!ue||f(o,T,h,{locale:_}))},[h,T,me,_,ue,o==null?void 0:o.locale,o]);const H={ref:Ge,onClick(l){!S&&typeof E=="function"&&E(l),S&&c.props&&typeof c.props.onClick=="function"&&c.props.onClick(l),o&&(l.defaultPrevented||M(l,o,T,h,ee,ae,ce,_,Ve))},onMouseEnter(l){!S&&typeof le=="function"&&le(l),S&&c.props&&typeof c.props.onMouseEnter=="function"&&c.props.onMouseEnter(l),o&&f(o,T,h,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(O){!S&&typeof ie=="function"&&ie(O),S&&c.props&&typeof c.props.onTouchStart=="function"&&c.props.onTouchStart(O),o&&f(o,T,h,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if((0,Y.isAbsoluteUrl)(h))H.href=h;else if(!S||V||c.type==="a"&&!("href"in c.props)){const l=typeof _<"u"?_:o==null?void 0:o.locale,O=(o==null?void 0:o.isLocaleDomain)&&(0,d.getDomainLocale)(h,l,o==null?void 0:o.locales,o==null?void 0:o.domainLocales);H.href=O||(0,x.addBasePath)((0,g.addLocale)(h,l,o==null?void 0:o.defaultLocale))}return S?a.default.cloneElement(c,H):(0,I.jsx)("a",{...He,...H,children:u})}),A=(0,a.createContext)({pending:!1}),Ae=()=>(0,a.useContext)(A),Ue=ne;(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(J,J.exports)),J.exports}var oe,ke;function mt(){return ke||(ke=1,oe=pt()),oe}var bt=mt();const ht=ot(bt),w="Screener",kt={args:{className:"h-[calc(100vh-32px)]"},argTypes:{children:te("children",w),className:te("className",w),id:te("id",w),isImage:{table:{category:w,subcategory:ge.PROP}},src:{table:{category:w,subcategory:ge.PROP}}},component:p,parameters:at("스크리너 컴포넌트",["미디어를 표현하는 스크리너입니다.","기본적으로 미리 정의된 여러 클립을 재생합니다.","`isImage`를 조정하여 이미지나 영상을 타겟할 수 있으며, `src`로 소스를 지정할 수 있습니다.","클립일 경우, `stop`으로 클립의 재생 여부를 지정할 수 있습니다."]),tags:["autodocs"],title:"organism/Screener"},se=[{color:"#e6194b",text:"S"},{color:"#3cb44b",text:"C"},{color:"#ffe119",text:"R"},{color:"#0082c8",text:"E"},{color:"#f58231",text:"E"},{color:"#911eb4",text:"N"},{color:"#46f0f0",text:"E"},{color:"#f032e6",text:"R"},{color:"#CCCCCC",text:"-"},{color:"#fabebe",text:"I"},{color:"#008080",text:"M"},{color:"#e6beff",text:"A"},{color:"#aa6e28",text:"G"},{color:"#fffac8",text:"E"}];function gt({...r}){const{data:e=[]}=nt();return t.jsx($,{children:t.jsx(R,{subtitle:"비디오 예시",title:"Video",children:e.map(n=>t.jsx("div",{className:"aspect-square",children:t.jsx(p,{src:n,stop:!0,...r,children:t.jsxs(ht,{className:"m-2 inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-sky-700 text-sm",href:n,target:"_blank",children:[t.jsx(it,{size:12})," ",n.replace("https://datastore.itcode.dev/itcode/video/","").split(".")[0]]})})},n))})})}const X={},z={args:{className:"w-full"},parameters:{controls:{disable:!0}},render:r=>t.jsxs($,{children:[t.jsx(R,{subtitle:"비디오 예시",title:"Video",children:se.map(({color:e})=>t.jsx("div",{className:"aspect-square",children:t.jsx(p,{...r})},`video-${e}`))}),t.jsx(R,{subtitle:"이미지 예시",title:"Image",children:se.map(({color:e,text:n})=>t.jsx("div",{className:"aspect-square",children:t.jsx(p,{isImage:!0,src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${n}`,...r})},e))}),t.jsxs(R,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(p,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(p,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(p,{stop:!0,...r})})]})]})},B={args:{className:"h-full"},argTypes:{isImage:{control:{disable:!0}},src:{control:{disable:!0}},stop:{control:{disable:!0}}},render:gt},F={args:{className:"h-full"},render:r=>t.jsx($,{children:t.jsx(R,{subtitle:"이미지 예시",title:"Image",children:se.map(({color:e,text:n})=>t.jsx("div",{className:"aspect-square",children:t.jsx(p,{isImage:!0,src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${n}`,...r})},e))})})},W={args:{className:"h-full"},render:r=>t.jsxs($,{children:[t.jsxs(R,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop On",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(p,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(p,{stop:!0,...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(p,{stop:!0,...r})})]}),t.jsxs(R,{subtitle:"클립 모드에서 stop 비활성화로 재생된 예시",title:"Stop Off (default)",children:[t.jsx("div",{className:"aspect-square",children:t.jsx(p,{...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(p,{...r})}),t.jsx("div",{className:"aspect-square",children:t.jsx(p,{...r})})]})]})};var je,qe,Ne;X.parameters={...X.parameters,docs:{...(je=X.parameters)==null?void 0:je.docs,source:{originalSource:"{}",...(Ne=(qe=X.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var _e,Ce,Pe;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    className: 'w-full'
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (props: ScreenerProps) => <StorybookContainer>
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
                        <Screener isImage src={\`https://placehold.co/600/\${color.replace('#', '')}/31343C?font=raleway&text=\${text}\`} {...props} />
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
}`,...(Pe=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var Te,Ie,Re;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    className: 'h-full'
  },
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
  render: VideoComponent
}`,...(Re=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var Le,Me,Oe;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    className: 'h-full'
  },
  render: (props: ScreenerProps) => <StorybookContainer>
            <StorybookTemplate subtitle="이미지 예시" title="Image">
                {tiles.map(({
        color,
        text
      }) => <div className="aspect-square" key={color}>
                        <Screener isImage src={\`https://placehold.co/600/\${color.replace('#', '')}/31343C?font=raleway&text=\${text}\`} {...props} />
                    </div>)}
            </StorybookTemplate>
        </StorybookContainer>
}`,...(Oe=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ee,we,$e;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    className: 'h-full'
  },
  render: (props: ScreenerProps) => <StorybookContainer>
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
}`,...($e=(we=W.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};const jt=["Playground","All","Video","Image","Stop"];export{z as All,F as Image,X as Playground,W as Stop,B as Video,jt as __namedExportsOrder,kt as default};
