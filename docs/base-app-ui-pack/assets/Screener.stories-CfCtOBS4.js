import{j as t}from"./jsx-runtime-BnHmloXs.js";import{a as Oe,g as Ve}from"./index-D0o6aRj1.js";import{r as He,a as Je}from"./image-context-BW0EOe3S.js";import{r as Xe}from"./jsx-runtime-BEh3FTX5.js";import{r as Ke,a as ze,b as Ge,c as Be,d as Fe,e as We,f as Qe,g as Ye}from"./add-base-path-3zsbvK-9.js";import{r as Ze,S as d,u as et}from"./Screener-C-Eeg7l0.js";import{g as tt,S as he,a as ee}from"./storybook-CWpip0ZO.js";import{a as rt,c as ot}from"./utils-BR9kC6eQ.js";import"./QueryClientProvider-e3uWm7Ug.js";import"./index-C8V3Szb0.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],st=rt("Link",nt);var V={exports:{}},H={exports:{}},ge;function at(){return ge||(ge=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return Q}});const s=Oe(),N=Ke(),i=typeof IntersectionObserver=="function",_=new Map,j=[];function F(g){const p={root:g.root||null,margin:g.rootMargin||""},C=j.find(b=>b.root===p.root&&b.margin===p.margin);let u;if(C&&(u=_.get(C),u))return u;const x=new Map,m=new IntersectionObserver(b=>{b.forEach(y=>{const P=x.get(y.target),M=y.isIntersecting||y.intersectionRatio>0;P&&M&&P(M)})},g);return u={id:p,observer:m,elements:x},j.push(p),_.set(p,u),u}function W(g,p,C){const{id:u,observer:x,elements:m}=F(C);return m.set(g,p),x.observe(g),function(){if(m.delete(g),x.unobserve(g),m.size===0){x.disconnect(),_.delete(u);const y=j.findIndex(P=>P.root===u.root&&P.margin===u.margin);y>-1&&j.splice(y,1)}}}function Q(g){let{rootRef:p,rootMargin:C,disabled:u}=g;const x=u||!i,[m,b]=(0,s.useState)(!1),y=(0,s.useRef)(null),P=(0,s.useCallback)(q=>{y.current=q},[]);(0,s.useEffect)(()=>{if(i){if(x||m)return;const q=y.current;if(q&&q.tagName)return W(q,n=>n&&b(n),{root:p==null?void 0:p.current,rootMargin:C})}else if(!m){const q=(0,N.requestIdleCallback)(()=>b(!0));return()=>(0,N.cancelIdleCallback)(q)}},[x,C,p,m,y.current]);const M=(0,s.useCallback)(()=>{b(!1)},[]);return[P,m,M]}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(H,H.exports)),H.exports}var J={exports:{}},ye;function lt(){return ye||(ye=1,function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return s}}),ze();function s(N,i,_,j){return!1}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(J,J.exports)),J.exports}var xe;function it(){return xe||(xe=1,function(r,e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return oe}});const s=He(),N=Xe(),i=s._(Oe()),_=Ge(),j=Be(),F=Fe(),W=We(),Q=Qe(),g=Je(),p=at(),C=lt(),u=Ye(),x=Ze(),m=new Set;function b(n,T,S,c){if(!(typeof window>"u")&&(0,j.isLocalURL)(T)){if(!c.bypassPrefetchedCheck){const I=typeof c.locale<"u"?c.locale:"locale"in n?n.locale:void 0,v=T+"%"+S+"%"+I;if(m.has(v))return;m.add(v)}n.prefetch(T,S,c).catch(I=>{})}}function y(n){const S=n.currentTarget.getAttribute("target");return S&&S!=="_self"||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.nativeEvent&&n.nativeEvent.which===2}function P(n,T,S,c,I,v,A,Y){const{nodeName:Z}=n.currentTarget;if(Z.toUpperCase()==="A"&&(y(n)||!(0,j.isLocalURL)(S)))return;n.preventDefault(),(()=>{const D=A??!0;"beforePopState"in T?T[I?"replace":"push"](S,c,{shallow:v,locale:Y,scroll:D}):T[I?"replace":"push"](c||S,{scroll:D})})()}function M(n){return typeof n=="string"?n:(0,F.formatUrl)(n)}const oe=i.default.forwardRef(function(T,S){let c;const{href:I,as:v,children:A,prefetch:Y=null,passHref:Z,replace:ne,shallow:se,scroll:D,locale:E,onClick:ae,onMouseEnter:le,onTouchStart:ie,legacyBehavior:k=!1,...$e}=T;c=A,k&&(typeof c=="string"||typeof c=="number")&&(c=(0,N.jsx)("a",{children:c}));const o=i.default.useContext(g.RouterContext),ce=Y!==!1,{href:R,as:h}=i.default.useMemo(()=>{if(!o){const be=M(I);return{href:be,as:v?M(v):be}}const[l,w]=(0,_.resolveHref)(o,I,!0);return{href:l,as:v?(0,_.resolveHref)(o,v):w||l}},[o,I,v]),ue=i.default.useRef(R),de=i.default.useRef(h);let a;k&&(a=i.default.Children.only(c));const Ae=k?a&&typeof a=="object"&&a.ref:S,[fe,pe,me]=(0,p.useIntersection)({rootMargin:"200px"}),De=i.default.useCallback(l=>{(de.current!==h||ue.current!==R)&&(me(),de.current=h,ue.current=R),fe(l)},[h,R,me,fe]),Ue=(0,x.useMergedRef)(De,Ae);i.default.useEffect(()=>{o&&(!pe||!ce||b(o,R,h,{locale:E}))},[h,R,pe,E,ce,o==null?void 0:o.locale,o]);const U={ref:Ue,onClick(l){!k&&typeof ae=="function"&&ae(l),k&&a.props&&typeof a.props.onClick=="function"&&a.props.onClick(l),o&&(l.defaultPrevented||P(l,o,R,h,ne,se,D,E))},onMouseEnter(l){!k&&typeof le=="function"&&le(l),k&&a.props&&typeof a.props.onMouseEnter=="function"&&a.props.onMouseEnter(l),o&&b(o,R,h,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(w){!k&&typeof ie=="function"&&ie(w),k&&a.props&&typeof a.props.onTouchStart=="function"&&a.props.onTouchStart(w),o&&b(o,R,h,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if((0,W.isAbsoluteUrl)(h))U.href=h;else if(!k||Z||a.type==="a"&&!("href"in a.props)){const l=typeof E<"u"?E:o==null?void 0:o.locale,w=(o==null?void 0:o.isLocaleDomain)&&(0,C.getDomainLocale)(h,l,o==null?void 0:o.locales,o==null?void 0:o.domainLocales);U.href=w||(0,u.addBasePath)((0,Q.addLocale)(h,l,o==null?void 0:o.defaultLocale))}return k?i.default.cloneElement(a,U):(0,N.jsx)("a",{...$e,...U,children:c})});(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),r.exports=e.default)}(V,V.exports)),V.exports}var te,Se;function ct(){return Se||(Se=1,te=it()),te}var ut=ct();const dt=Ve(ut);function f({className:r,children:e,...s}){return t.jsx("div",{className:ot('relative overflow-hidden w-full after:content-[""] after:block after:pb-[100%]',r),"data-component":"Tile",...s,children:t.jsx("div",{className:"absolute left-0 top-0 size-full",children:e})})}f.__docgenInfo={description:`타일 atom 컴포넌트 반환 메서드

@param {TileProps} param0: TileProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"Tile"};function $({className:r,...e}){return t.jsx("div",{className:`flex flex-col gap-16 ${r??""}`,"data-component":"StorybookContainer",...e})}$.__docgenInfo={description:`Storybook 컨테이너 template 컴포넌트 반환 메서드

@param {StorybookContainerProps} param0: StorybookContainerProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookContainer"};function L({title:r,subtitle:e,vertical:s,container:N,className:i,children:_,...j}){return t.jsxs("div",{className:`flex flex-col gap-4 ${s===!0?"":"sm:flex-row"} ${i??""}`.trim(),"data-component":"StorybookTemplate",...j,children:[t.jsxs("div",{className:"flex w-full shrink-0 flex-col gap-2 sm:w-48",children:[t.jsx("h3",{className:"text-lg font-bold",children:r}),t.jsx("p",{className:"text-muted-foreground text-sm",children:e})]}),t.jsx("div",{className:`grid flex-1 gap-4 ${N===!0?"":"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"}`,children:_})]})}L.__docgenInfo={description:`Storybook template 컴포넌트 반환 메서드

@param {StorybookTemplateProps} param0: StorybookTemplateProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"타이틀"},subtitle:{required:!1,tsType:{name:"string"},description:"서브 타이틀"},vertical:{required:!1,tsType:{name:"boolean"},description:"수직 여부"},container:{required:!1,tsType:{name:"boolean"},description:"컨테이너 여부"}},composes:["DetailedHTMLProps"]};const O="Screener",Tt={argTypes:{children:ee("children",O),className:ee("className",O),id:ee("id",O),isImage:{table:{category:O,subcategory:he.PROP}},src:{table:{category:O,subcategory:he.PROP}}},args:{className:"h-[calc(100vh-32px)]"},component:d,parameters:tt("스크리너 컴포넌트",["미디어를 표현하는 스크리너입니다.","기본적으로 미리 정의된 여러 클립을 재생합니다.","`isImage`를 조정하여 이미지나 영상을 타겟할 수 있으며, `src`로 소스를 지정할 수 있습니다.","클립일 경우, `stop`으로 클립의 재생 여부를 지정할 수 있습니다."]),tags:["autodocs"],title:"organism/Screener"},re=[{color:"#e6194b",text:"S"},{color:"#3cb44b",text:"C"},{color:"#ffe119",text:"R"},{color:"#0082c8",text:"E"},{color:"#f58231",text:"E"},{color:"#911eb4",text:"N"},{color:"#46f0f0",text:"E"},{color:"#f032e6",text:"R"},{color:"#CCCCCC",text:"-"},{color:"#fabebe",text:"I"},{color:"#008080",text:"M"},{color:"#e6beff",text:"A"},{color:"#aa6e28",text:"G"},{color:"#fffac8",text:"E"}];function ft({...r}){const{data:e=[]}=et();return t.jsx($,{children:t.jsx(L,{subtitle:"비디오 예시",title:"Video",children:e.map(s=>t.jsx(f,{children:t.jsx(d,{src:s,stop:!0,...r,children:t.jsxs(dt,{className:"m-2 inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-sm text-sky-700",href:s,target:"_blank",children:[t.jsx(st,{size:12})," ",s.replace("https://datastore.itcode.dev/itcode/video/","").split(".")[0]]})})},s))})})}const X={},K={args:{className:"w-full"},parameters:{controls:{disable:!0}},render:r=>t.jsxs($,{children:[t.jsx(L,{subtitle:"비디오 예시",title:"Video",children:re.map(({color:e})=>t.jsx(f,{children:t.jsx(d,{...r})},`video-${e}`))}),t.jsx(L,{subtitle:"이미지 예시",title:"Image",children:re.map(({color:e,text:s})=>t.jsx(f,{children:t.jsx(d,{src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${s}`,isImage:!0,...r})},e))}),t.jsxs(L,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop",children:[t.jsx(f,{children:t.jsx(d,{stop:!0,...r})}),t.jsx(f,{children:t.jsx(d,{stop:!0,...r})}),t.jsx(f,{children:t.jsx(d,{stop:!0,...r})})]})]})},z={argTypes:{isImage:{control:{disable:!0}},src:{control:{disable:!0}},stop:{control:{disable:!0}}},args:{className:"h-full"},render:ft},G={args:{className:"h-full"},render:r=>t.jsx($,{children:t.jsx(L,{subtitle:"이미지 예시",title:"Image",children:re.map(({color:e,text:s})=>t.jsx(f,{children:t.jsx(d,{src:`https://placehold.co/600/${e.replace("#","")}/31343C?font=raleway&text=${s}`,isImage:!0,...r})},e))})})},B={args:{className:"h-full"},render:r=>t.jsxs($,{children:[t.jsxs(L,{subtitle:"클립 모드에서 stop 활성화로 재생이 비활성화된 예시",title:"Stop On",children:[t.jsx(f,{children:t.jsx(d,{stop:!0,...r})}),t.jsx(f,{children:t.jsx(d,{stop:!0,...r})}),t.jsx(f,{children:t.jsx(d,{stop:!0,...r})})]}),t.jsxs(L,{subtitle:"클립 모드에서 stop 비활성화로 재생된 예시",title:"Stop Off (default)",children:[t.jsx(f,{children:t.jsx(d,{...r})}),t.jsx(f,{children:t.jsx(d,{...r})}),t.jsx(f,{children:t.jsx(d,{...r})})]})]})};var ke,je,Te;X.parameters={...X.parameters,docs:{...(ke=X.parameters)==null?void 0:ke.docs,source:{originalSource:"{}",...(Te=(je=X.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var ve,_e,Ce;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ce=(_e=K.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Pe,Ie,Re;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Re=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var Ne,qe,Le;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Le=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Me,Ee,we;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(we=(Ee=B.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};const vt=["Playground","All","Video","Image","Stop"];export{K as All,G as Image,X as Playground,B as Stop,z as Video,vt as __namedExportsOrder,Tt as default};
