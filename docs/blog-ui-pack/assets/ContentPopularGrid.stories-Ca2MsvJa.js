var me=t=>{throw TypeError(t)};var ee=(t,e,s)=>e.has(t)||me("Cannot "+s);var r=(t,e,s)=>(ee(t,e,"read from private field"),s?s.call(t):e.get(t)),p=(t,e,s)=>e.has(t)?me("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),h=(t,e,s,i)=>(ee(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),d=(t,e,s)=>(ee(t,e,"access private method"),s);import{j as B}from"./jsx-runtime-BnHmloXs.js";import{r as w}from"./index-CKMdfnwt.js";import{g as Fe,S as ge,a as ye}from"./storybook-hTxjENzG.js";import{S as Ue}from"./StorybookTemplate-h4nRBuW0.js";import{b as Ge,t as Le,p as Ae,a as Ne}from"./util-CqTaInOt.js";import{S as Be,l as be,q as P,t as te,r as $,b as He,u as se,v as Re,w as qe,g as Je,x as ze,y as Ce,n as Qe,z as We}from"./QueryClientProvider-CWs8F8KB.js";import{C as Ve}from"./ContentGrid-Bb7XMF6v.js";import"./jsx-runtime-BEh3FTX5.js";import"./Tile-Dg6hoXei.js";import"./index-XRK3aHGe.js";import"./ContentCard-DWxiTG5l.js";import"./Typography-6a8fAOxr.js";import"./segment-CIEV7OGa.js";import"./index-BY638psU.js";import"./add-base-path-Br4_xqsT.js";var b,n,q,y,I,M,x,v,J,_,F,k,j,E,U,a,H,re,ie,ne,ae,oe,ce,ue,De,Oe,Ke=(Oe=class extends Be{constructor(e,s){super();p(this,a);p(this,b);p(this,n);p(this,q);p(this,y);p(this,I);p(this,M);p(this,x);p(this,v);p(this,J);p(this,_);p(this,F);p(this,k);p(this,j);p(this,E);p(this,U,new Set);this.options=s,h(this,b,e),h(this,v,null),h(this,x,be()),this.options.experimental_prefetchInRender||r(this,x).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,n).addObserver(this),Se(r(this,n),this.options)?d(this,a,H).call(this):this.updateResult(),d(this,a,ae).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return he(r(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return he(r(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,a,oe).call(this),d(this,a,ce).call(this),r(this,n).removeObserver(this)}setOptions(e,s){const i=this.options,l=r(this,n);if(this.options=r(this,b).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof P(this.options.enabled,r(this,n))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");d(this,a,ue).call(this),r(this,n).setOptions(this.options),i._defaulted&&!te(this.options,i)&&r(this,b).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,n),observer:this});const c=this.hasListeners();c&&ve(r(this,n),l,this.options,i)&&d(this,a,H).call(this),this.updateResult(s),c&&(r(this,n)!==l||P(this.options.enabled,r(this,n))!==P(i.enabled,r(this,n))||$(this.options.staleTime,r(this,n))!==$(i.staleTime,r(this,n)))&&d(this,a,re).call(this);const o=d(this,a,ie).call(this);c&&(r(this,n)!==l||P(this.options.enabled,r(this,n))!==P(i.enabled,r(this,n))||o!==r(this,E))&&d(this,a,ne).call(this,o)}getOptimisticResult(e){const s=r(this,b).getQueryCache().build(r(this,b),e),i=this.createResult(s,e);return Xe(this,i)&&(h(this,y,i),h(this,M,this.options),h(this,I,r(this,n).state)),i}getCurrentResult(){return r(this,y)}trackResult(e,s){const i={};return Object.keys(e).forEach(l=>{Object.defineProperty(i,l,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(l),s==null||s(l),e[l])})}),i}trackProp(e){r(this,U).add(e)}getCurrentQuery(){return r(this,n)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=r(this,b).defaultQueryOptions(e),i=r(this,b).getQueryCache().build(r(this,b),s);return i.fetch().then(()=>this.createResult(i,s))}fetch(e){return d(this,a,H).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,y)))}createResult(e,s){var fe;const i=r(this,n),l=this.options,c=r(this,y),o=r(this,I),T=r(this,M),C=e!==i?e.state:r(this,q),{state:O}=e;let u={...O},G=!1,m;if(s._optimisticResults){const g=this.hasListeners(),Q=!g&&Se(e,s),D=g&&ve(e,i,s,l);(Q||D)&&(u={...u,...ze(O.data,e.options)}),s._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:L,errorUpdatedAt:A,status:R}=u;if(s.select&&u.data!==void 0)if(c&&u.data===(o==null?void 0:o.data)&&s.select===r(this,J))m=r(this,_);else try{h(this,J,s.select),m=s.select(u.data),m=Ce(c==null?void 0:c.data,m,s),h(this,_,m),h(this,v,null)}catch(g){h(this,v,g)}else m=u.data;if(s.placeholderData!==void 0&&m===void 0&&R==="pending"){let g;if(c!=null&&c.isPlaceholderData&&s.placeholderData===(T==null?void 0:T.placeholderData))g=c.data;else if(g=typeof s.placeholderData=="function"?s.placeholderData((fe=r(this,F))==null?void 0:fe.state.data,r(this,F)):s.placeholderData,s.select&&g!==void 0)try{g=s.select(g),h(this,v,null)}catch(Q){h(this,v,Q)}g!==void 0&&(R="success",m=Ce(c==null?void 0:c.data,g,s),G=!0)}r(this,v)&&(L=r(this,v),m=r(this,_),A=Date.now(),R="error");const N=u.fetchStatus==="fetching",Z=R==="pending",Y=R==="error",de=Z&&N,pe=m!==void 0,S={status:R,fetchStatus:u.fetchStatus,isPending:Z,isSuccess:R==="success",isError:Y,isInitialLoading:de,isLoading:de,data:m,dataUpdatedAt:u.dataUpdatedAt,error:L,errorUpdatedAt:A,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>C.dataUpdateCount||u.errorUpdateCount>C.errorUpdateCount,isFetching:N,isRefetching:N&&!Z,isLoadingError:Y&&!pe,isPaused:u.fetchStatus==="paused",isPlaceholderData:G,isRefetchError:Y&&pe,isStale:le(e,s),refetch:this.refetch,promise:r(this,x)};if(this.options.experimental_prefetchInRender){const g=z=>{S.status==="error"?z.reject(S.error):S.data!==void 0&&z.resolve(S.data)},Q=()=>{const z=h(this,x,S.promise=be());g(z)},D=r(this,x);switch(D.status){case"pending":e.queryHash===i.queryHash&&g(D);break;case"fulfilled":(S.status==="error"||S.data!==D.value)&&Q();break;case"rejected":(S.status!=="error"||S.error!==D.reason)&&Q();break}}return S}updateResult(e){const s=r(this,y),i=this.createResult(r(this,n),this.options);if(h(this,I,r(this,n).state),h(this,M,this.options),r(this,I).data!==void 0&&h(this,F,r(this,n)),te(i,s))return;h(this,y,i);const l={},c=()=>{if(!s)return!0;const{notifyOnChangeProps:o}=this.options,T=typeof o=="function"?o():o;if(T==="all"||!T&&!r(this,U).size)return!0;const f=new Set(T??r(this,U));return this.options.throwOnError&&f.add("error"),Object.keys(r(this,y)).some(C=>{const O=C;return r(this,y)[O]!==s[O]&&f.has(O)})};(e==null?void 0:e.listeners)!==!1&&c()&&(l.listeners=!0),d(this,a,De).call(this,{...l,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,a,ae).call(this)}},b=new WeakMap,n=new WeakMap,q=new WeakMap,y=new WeakMap,I=new WeakMap,M=new WeakMap,x=new WeakMap,v=new WeakMap,J=new WeakMap,_=new WeakMap,F=new WeakMap,k=new WeakMap,j=new WeakMap,E=new WeakMap,U=new WeakMap,a=new WeakSet,H=function(e){d(this,a,ue).call(this);let s=r(this,n).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(He)),s},re=function(){d(this,a,oe).call(this);const e=$(this.options.staleTime,r(this,n));if(se||r(this,y).isStale||!Re(e))return;const i=qe(r(this,y).dataUpdatedAt,e)+1;h(this,k,setTimeout(()=>{r(this,y).isStale||this.updateResult()},i))},ie=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,n)):this.options.refetchInterval)??!1},ne=function(e){d(this,a,ce).call(this),h(this,E,e),!(se||P(this.options.enabled,r(this,n))===!1||!Re(r(this,E))||r(this,E)===0)&&h(this,j,setInterval(()=>{(this.options.refetchIntervalInBackground||Je.isFocused())&&d(this,a,H).call(this)},r(this,E)))},ae=function(){d(this,a,re).call(this),d(this,a,ne).call(this,d(this,a,ie).call(this))},oe=function(){r(this,k)&&(clearTimeout(r(this,k)),h(this,k,void 0))},ce=function(){r(this,j)&&(clearInterval(r(this,j)),h(this,j,void 0))},ue=function(){const e=r(this,b).getQueryCache().build(r(this,b),this.options);if(e===r(this,n))return;const s=r(this,n);h(this,n,e),h(this,q,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},De=function(e){Qe.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(r(this,y))}),r(this,b).getQueryCache().notify({query:r(this,n),type:"observerResultsUpdated"})})},Oe);function $e(t,e){return P(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Se(t,e){return $e(t,e)||t.state.data!==void 0&&he(t,e,e.refetchOnMount)}function he(t,e,s){if(P(e.enabled,t)!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&le(t,e)}return!1}function ve(t,e,s,i){return(t!==e||P(i.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&le(t,s)}function le(t,e){return P(e.enabled,t)!==!1&&t.isStaleByTime($(e.staleTime,t))}function Xe(t,e){return!te(t.getCurrentResult(),e)}var Me=w.createContext(!1),Ze=()=>w.useContext(Me);Me.Provider;function Ye(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var et=w.createContext(Ye()),tt=()=>w.useContext(et);function st(t,e){return typeof t=="function"?t(...e):!!t}function Pe(){}var rt=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&(e.isReset()||(t.retryOnMount=!1))},it=t=>{w.useEffect(()=>{t.clearReset()},[t])},nt=({result:t,errorResetBoundary:e,throwOnError:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&i&&st(s,[t.error,i]),at=t=>{const e=t.staleTime;t.suspense&&(t.staleTime=typeof e=="function"?(...s)=>Math.max(e(...s),1e3):Math.max(e??1e3,1e3),typeof t.gcTime=="number"&&(t.gcTime=Math.max(t.gcTime,1e3)))},ot=(t,e)=>t.isLoading&&t.isFetching&&!e,ct=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,Te=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function ut(t,e,s){var u,G,m,L,A;const i=We(),l=Ze(),c=tt(),o=i.defaultQueryOptions(t);(G=(u=i.getDefaultOptions().queries)==null?void 0:u._experimental_beforeQuery)==null||G.call(u,o),o._optimisticResults=l?"isRestoring":"optimistic",at(o),rt(o,c),it(c);const T=!i.getQueryCache().get(o.queryHash),[f]=w.useState(()=>new e(i,o)),C=f.getOptimisticResult(o),O=!l&&t.subscribed!==!1;if(w.useSyncExternalStore(w.useCallback(R=>{const N=O?f.subscribe(Qe.batchCalls(R)):Pe;return f.updateResult(),N},[f,O]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),w.useEffect(()=>{f.setOptions(o,{listeners:!1})},[o,f]),ct(o,C))throw Te(o,f,c);if(nt({result:C,errorResetBoundary:c,throwOnError:o.throwOnError,query:i.getQueryCache().get(o.queryHash)}))throw C.error;if((L=(m=i.getDefaultOptions().queries)==null?void 0:m._experimental_afterQuery)==null||L.call(m,o,C),o.experimental_prefetchInRender&&!se&&ot(C,l)){const R=T?Te(o,f,c):(A=i.getQueryCache().get(o.queryHash))==null?void 0:A.promise;R==null||R.catch(Pe).finally(()=>{f.updateResult()})}return o.notifyOnChangeProps?C:f.trackResult(C)}function ht(t,e){return ut(t,Ke)}async function lt({clientId:t,clientSecret:e,refreshToken:s}){const i=await fetch("https://accounts.google.com/o/oauth2/token",{body:JSON.stringify({client_id:t,client_secret:e,grant_type:"refresh_token",refresh_token:s}),method:"POST"});if(i.ok)return await i.json()}async function dt(t,e){const s=await fetch("https://content-analyticsdata.googleapis.com/v1beta/properties/284521573:runReport?alt=json",{body:JSON.stringify({dateRanges:[{endDate:"today",startDate:"30daysAgo"}],dimensionFilter:{filter:{fieldName:"pagePath",stringFilter:{matchType:"BEGINS_WITH",value:`/${t}/2`}}},dimensions:[{name:"pagePath"}],limit:6,metricAggregations:["TOTAL"],metrics:[{name:"active28DayUsers"}]}),headers:{Authorization:`${e.token_type} ${e.access_token}`},method:"POST"});if(s.ok)return await s.json()}function pt(t,e,s,i){return ht({queryFn:async()=>{const l=await lt(t);if(l)return dt(e,l);throw Error("Google 인증 에러")},queryKey:["usePostPopularData",e],...s})}function X({type:t,list:e,...s}){const{data:i,isLoading:l}=pt({clientId:"22130300203-s47tft38ah28e6o2jsv5144vqn1cl32p.apps.googleusercontent.com",clientSecret:"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",refreshToken:"1//04SoK9dOIeQQDCgYIARAAGAQSNwF-L9IrNkGEGZ5xuJSsDuT5NbSMUWBd9sFrbtdv3hegoJZmQqSITRMCVMy1y71_DJZl4TsMEac"},t),c=Ge(e,i);return B.jsx(Ve,{"data-component":"ContentPopularGrid",list:Le(c),loading:l,...s})}X.__docgenInfo={description:`컨텐츠 인기 그리드 organism 컴포넌트 반환 메서드

@param {ContentPopularGridProps} param0: ContentPopularGridProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"ContentPopularGrid",props:{type:{required:!0,tsType:{name:"union",raw:"'posts' | 'projects'",elements:[{name:"literal",value:"'posts'"},{name:"literal",value:"'projects'"}]},description:"마크다운 타입"},list:{required:!1,tsType:{name:"Array",elements:[{name:"BlogMarkdownDetailProps",elements:[{name:"MarkdownHeaderProps"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>"}],raw:"BlogMarkdownDetailProps<MarkdownHeaderProps>[]"},description:"컨텐츠 목록"}},composes:["Omit"]};const W="ContentPopularGrid",ft=["posts","projects"],_e=Ae,mt=Ne,Dt={argTypes:{className:ye("children",W),id:ye("id",W),list:{control:{disable:!0},table:{category:W,subcategory:ge.PROP}},type:{options:ft,table:{category:W,subcategory:ge.PROP}}},component:X,parameters:Fe("컨텐츠 인기 그리드 컴포넌트",["`ContentGrid` 컴포넌트를 확장하여 인기 컨텐츠를 표현하는 컴포넌트입니다.","`usePostPopularData` API가 내장되어있어, 자동으로 지정한 타입의 인기 게시글 6개를 호출합니다."]),tags:["autodocs"],title:"organism/ContentPopularGrid"},V={args:{list:_e,type:"posts"}},K={render:t=>B.jsx(Ue,{subtitle:"컨텐츠 타입에 따른 컴포넌트 예시",title:"Type",container:!0,children:B.jsxs("div",{className:"flex flex-col gap-20",children:[B.jsx(X,{...t,list:_e,type:"posts"}),B.jsx(X,{...t,list:mt,type:"projects"})]})})};var we,xe,Ee;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    list: postsMock,
    type: 'posts'
  }
}`,...(Ee=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Ie,ke,je;K.parameters={...K.parameters,docs:{...(Ie=K.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: props => <StorybookTemplate subtitle="컨텐츠 타입에 따른 컴포넌트 예시" title="Type" container>
            <div className="flex flex-col gap-20">
                <ContentPopularGrid {...props} list={postsMock} type="posts" />
                <ContentPopularGrid {...props} list={projectsMock} type="projects" />
            </div>
        </StorybookTemplate>
}`,...(je=(ke=K.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};const Mt=["Playground","Type"];export{V as Playground,K as Type,Mt as __namedExportsOrder,Dt as default};
