import{j as C}from"./jsx-runtime-BnHmloXs.js";import{r as m}from"./index-r57MSJFk.js";import{u as Ee,c as ct,a as Gt,b as Ut,d as Jt,e as Z,P as lt,f as Kt,D as Zt,R as Qt}from"./index-BDUW1Ooh.js";import{u as we,a as en}from"./index-Bx25MwHp.js";import{r as tn}from"./index-LHXsjL4R.js";import{P as ye}from"./index-Dj4igp42.js";import{c as nn}from"./utils-jAU0Cazi.js";import{M as on}from"./MarkdownA-CbC_H4PJ.js";const rn=["top","right","bottom","left"],G=Math.min,j=Math.max,he=Math.round,ue=Math.floor,z=e=>({x:e,y:e}),sn={left:"right",right:"left",bottom:"top",top:"bottom"},cn={start:"end",end:"start"};function Se(e,t,n){return j(e,G(t,n))}function X(e,t){return typeof e=="function"?e(t):e}function q(e){return e.split("-")[0]}function ne(e){return e.split("-")[1]}function _e(e){return e==="x"?"y":"x"}function Ne(e){return e==="y"?"height":"width"}function U(e){return["top","bottom"].includes(q(e))?"y":"x"}function He(e){return _e(U(e))}function ln(e,t,n){n===void 0&&(n=!1);const o=ne(e),r=He(e),i=Ne(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=me(s)),[s,me(s)]}function an(e){const t=me(e);return[De(e),t,De(t)]}function De(e){return e.replace(/start|end/g,t=>cn[t])}function fn(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function un(e,t,n,o){const r=ne(e);let i=fn(q(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(De)))),i}function me(e){return e.replace(/left|right|bottom|top/g,t=>sn[t])}function dn(e){return{top:0,right:0,bottom:0,left:0,...e}}function at(e){return typeof e!="number"?dn(e):{top:e,right:e,bottom:e,left:e}}function ge(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Qe(e,t,n){let{reference:o,floating:r}=e;const i=U(t),s=He(t),l=Ne(s),c=q(t),f=i==="y",a=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,h=o[l]/2-r[l]/2;let u;switch(c){case"top":u={x:a,y:o.y-r.height};break;case"bottom":u={x:a,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-r.width,y:d};break;default:u={x:o.x,y:o.y}}switch(ne(t)){case"start":u[s]-=h*(n&&f?-1:1);break;case"end":u[s]+=h*(n&&f?-1:1);break}return u}const pn=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let f=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:a,y:d}=Qe(f,o,c),h=o,u={},p=0;for(let g=0;g<l.length;g++){const{name:x,fn:w}=l[g],{x:y,y:A,data:v,reset:b}=await w({x:a,y:d,initialPlacement:o,placement:h,strategy:r,middlewareData:u,rects:f,platform:s,elements:{reference:e,floating:t}});a=y??a,d=A??d,u={...u,[x]:{...u[x],...v}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(f=b.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:a,y:d}=Qe(f,h,c)),g=-1)}return{x:a,y:d,placement:h,strategy:r,middlewareData:u}};async function ie(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:c}=e,{boundary:f="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:h=!1,padding:u=0}=X(t,e),p=at(u),x=l[h?d==="floating"?"reference":"floating":d],w=ge(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:f,rootBoundary:a,strategy:c})),y=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,A=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),v=await(i.isElement==null?void 0:i.isElement(A))?await(i.getScale==null?void 0:i.getScale(A))||{x:1,y:1}:{x:1,y:1},b=ge(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:A,strategy:c}):y);return{top:(w.top-b.top+p.top)/v.y,bottom:(b.bottom-w.bottom+p.bottom)/v.y,left:(w.left-b.left+p.left)/v.x,right:(b.right-w.right+p.right)/v.x}}const hn=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:l,middlewareData:c}=t,{element:f,padding:a=0}=X(e,t)||{};if(f==null)return{};const d=at(a),h={x:n,y:o},u=He(r),p=Ne(u),g=await s.getDimensions(f),x=u==="y",w=x?"top":"left",y=x?"bottom":"right",A=x?"clientHeight":"clientWidth",v=i.reference[p]+i.reference[u]-h[u]-i.floating[p],b=h[u]-i.reference[u],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let T=P?P[A]:0;(!T||!await(s.isElement==null?void 0:s.isElement(P)))&&(T=l.floating[A]||i.floating[p]);const M=v/2-b/2,H=T/2-g[p]/2-1,L=G(d[w],H),_=G(d[y],H),N=L,E=T-g[p]-_,O=T/2-g[p]/2+M,F=Se(N,O,E),S=!c.arrow&&ne(r)!=null&&O!==F&&i.reference[p]/2-(O<N?L:_)-g[p]/2<0,D=S?O<N?O-N:O-E:0;return{[u]:h[u]+D,data:{[u]:F,centerOffset:O-F-D,...S&&{alignmentOffset:D}},reset:S}}}),mn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:f}=t,{mainAxis:a=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...x}=X(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const w=q(r),y=U(l),A=q(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(f.floating)),b=h||(A||!g?[me(l)]:an(l)),P=p!=="none";!h&&P&&b.push(...un(l,g,p,v));const T=[l,...b],M=await ie(t,x),H=[];let L=((o=i.flip)==null?void 0:o.overflows)||[];if(a&&H.push(M[w]),d){const O=ln(r,s,v);H.push(M[O[0]],M[O[1]])}if(L=[...L,{placement:r,overflows:H}],!H.every(O=>O<=0)){var _,N;const O=(((_=i.flip)==null?void 0:_.index)||0)+1,F=T[O];if(F)return{data:{index:O,overflows:L},reset:{placement:F}};let S=(N=L.filter(D=>D.overflows[0]<=0).sort((D,R)=>D.overflows[1]-R.overflows[1])[0])==null?void 0:N.placement;if(!S)switch(u){case"bestFit":{var E;const D=(E=L.filter(R=>{if(P){const k=U(R.placement);return k===y||k==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(k=>k>0).reduce((k,B)=>k+B,0)]).sort((R,k)=>R[1]-k[1])[0])==null?void 0:E[0];D&&(S=D);break}case"initialPlacement":S=l;break}if(r!==S)return{reset:{placement:S}}}return{}}}};function et(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function tt(e){return rn.some(t=>e[t]>=0)}const gn=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=X(e,t);switch(o){case"referenceHidden":{const i=await ie(t,{...r,elementContext:"reference"}),s=et(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:tt(s)}}}case"escaped":{const i=await ie(t,{...r,altBoundary:!0}),s=et(i,n.floating);return{data:{escapedOffsets:s,escaped:tt(s)}}}default:return{}}}}};async function xn(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=q(n),l=ne(n),c=U(n)==="y",f=["left","top"].includes(s)?-1:1,a=i&&c?-1:1,d=X(t,e);let{mainAxis:h,crossAxis:u,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof p=="number"&&(u=l==="end"?p*-1:p),c?{x:u*a,y:h*f}:{x:h*f,y:u*a}}const wn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:l}=t,c=await xn(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:s}}}}},yn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:x=>{let{x:w,y}=x;return{x:w,y}}},...c}=X(e,t),f={x:n,y:o},a=await ie(t,c),d=U(q(r)),h=_e(d);let u=f[h],p=f[d];if(i){const x=h==="y"?"top":"left",w=h==="y"?"bottom":"right",y=u+a[x],A=u-a[w];u=Se(y,u,A)}if(s){const x=d==="y"?"top":"left",w=d==="y"?"bottom":"right",y=p+a[x],A=p-a[w];p=Se(y,p,A)}const g=l.fn({...t,[h]:u,[d]:p});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[h]:i,[d]:s}}}}}},vn=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:f=!0}=X(e,t),a={x:n,y:o},d=U(r),h=_e(d);let u=a[h],p=a[d];const g=X(l,t),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const A=h==="y"?"height":"width",v=i.reference[h]-i.floating[A]+x.mainAxis,b=i.reference[h]+i.reference[A]-x.mainAxis;u<v?u=v:u>b&&(u=b)}if(f){var w,y;const A=h==="y"?"width":"height",v=["top","left"].includes(q(r)),b=i.reference[d]-i.floating[A]+(v&&((w=s.offset)==null?void 0:w[d])||0)+(v?0:x.crossAxis),P=i.reference[d]+i.reference[A]+(v?0:((y=s.offset)==null?void 0:y[d])||0)-(v?x.crossAxis:0);p<b?p=b:p>P&&(p=P)}return{[h]:u,[d]:p}}}},bn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,o;const{placement:r,rects:i,platform:s,elements:l}=t,{apply:c=()=>{},...f}=X(e,t),a=await ie(t,f),d=q(r),h=ne(r),u=U(r)==="y",{width:p,height:g}=i.floating;let x,w;d==="top"||d==="bottom"?(x=d,w=h===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(w=d,x=h==="end"?"top":"bottom");const y=g-a.top-a.bottom,A=p-a.left-a.right,v=G(g-a[x],y),b=G(p-a[w],A),P=!t.middlewareData.shift;let T=v,M=b;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(M=A),(o=t.middlewareData.shift)!=null&&o.enabled.y&&(T=y),P&&!h){const L=j(a.left,0),_=j(a.right,0),N=j(a.top,0),E=j(a.bottom,0);u?M=p-2*(L!==0||_!==0?L+_:j(a.left,a.right)):T=g-2*(N!==0||E!==0?N+E:j(a.top,a.bottom))}await c({...t,availableWidth:M,availableHeight:T});const H=await s.getDimensions(l.floating);return p!==H.width||g!==H.height?{reset:{rects:!0}}:{}}}};function ve(){return typeof window<"u"}function oe(e){return ft(e)?(e.nodeName||"").toLowerCase():"#document"}function $(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(ft(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ft(e){return ve()?e instanceof Node||e instanceof $(e).Node:!1}function I(e){return ve()?e instanceof Element||e instanceof $(e).Element:!1}function V(e){return ve()?e instanceof HTMLElement||e instanceof $(e).HTMLElement:!1}function nt(e){return!ve()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $(e).ShadowRoot}function ce(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function An(e){return["table","td","th"].includes(oe(e))}function be(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function je(e){const t=$e(),n=I(e)?W(e):e;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Cn(e){let t=J(e);for(;V(t)&&!ee(t);){if(je(t))return t;if(be(t))return null;t=J(t)}return null}function $e(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ee(e){return["html","body","#document"].includes(oe(e))}function W(e){return $(e).getComputedStyle(e)}function Ae(e){return I(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function J(e){if(oe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||nt(e)&&e.host||Y(e);return nt(t)?t.host:t}function ut(e){const t=J(e);return ee(t)?e.ownerDocument?e.ownerDocument.body:e.body:V(t)&&ce(t)?t:ut(t)}function se(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=ut(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=$(r);if(i){const l=Me(s);return t.concat(s,s.visualViewport||[],ce(r)?r:[],l&&n?se(l):[])}return t.concat(r,se(r,[],n))}function Me(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function dt(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=V(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,l=he(n)!==i||he(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function Fe(e){return I(e)?e:e.contextElement}function Q(e){const t=Fe(e);if(!V(t))return z(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=dt(t);let s=(i?he(n.width):n.width)/o,l=(i?he(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Pn=z(0);function pt(e){const t=$(e);return!$e()||!t.visualViewport?Pn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Rn(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$(e)?!1:t}function K(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Fe(e);let s=z(1);t&&(o?I(o)&&(s=Q(o)):s=Q(e));const l=Rn(i,n,o)?pt(i):z(0);let c=(r.left+l.x)/s.x,f=(r.top+l.y)/s.y,a=r.width/s.x,d=r.height/s.y;if(i){const h=$(i),u=o&&I(o)?$(o):o;let p=h,g=Me(p);for(;g&&o&&u!==p;){const x=Q(g),w=g.getBoundingClientRect(),y=W(g),A=w.left+(g.clientLeft+parseFloat(y.paddingLeft))*x.x,v=w.top+(g.clientTop+parseFloat(y.paddingTop))*x.y;c*=x.x,f*=x.y,a*=x.x,d*=x.y,c+=A,f+=v,p=$(g),g=Me(p)}}return ge({width:a,height:d,x:c,y:f})}function Ie(e,t){const n=Ae(e).scrollLeft;return t?t.left+n:K(Y(e)).left+n}function ht(e,t,n){n===void 0&&(n=!1);const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-(n?0:Ie(e,o)),i=o.top+t.scrollTop;return{x:r,y:i}}function Tn(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=Y(o),l=t?be(t.floating):!1;if(o===s||l&&i)return n;let c={scrollLeft:0,scrollTop:0},f=z(1);const a=z(0),d=V(o);if((d||!d&&!i)&&((oe(o)!=="body"||ce(s))&&(c=Ae(o)),V(o))){const u=K(o);f=Q(o),a.x=u.x+o.clientLeft,a.y=u.y+o.clientTop}const h=s&&!d&&!i?ht(s,c,!0):z(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+a.x+h.x,y:n.y*f.y-c.scrollTop*f.y+a.y+h.y}}function On(e){return Array.from(e.getClientRects())}function En(e){const t=Y(e),n=Ae(e),o=e.ownerDocument.body,r=j(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=j(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ie(e);const l=-n.scrollTop;return W(o).direction==="rtl"&&(s+=j(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:l}}function Sn(e,t){const n=$(e),o=Y(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,c=0;if(r){i=r.width,s=r.height;const f=$e();(!f||f&&t==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:i,height:s,x:l,y:c}}function Dn(e,t){const n=K(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=V(e)?Q(e):z(1),s=e.clientWidth*i.x,l=e.clientHeight*i.y,c=r*i.x,f=o*i.y;return{width:s,height:l,x:c,y:f}}function ot(e,t,n){let o;if(t==="viewport")o=Sn(e,n);else if(t==="document")o=En(Y(e));else if(I(t))o=Dn(t,n);else{const r=pt(e);o={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return ge(o)}function mt(e,t){const n=J(e);return n===t||!I(n)||ee(n)?!1:W(n).position==="fixed"||mt(n,t)}function Mn(e,t){const n=t.get(e);if(n)return n;let o=se(e,[],!1).filter(l=>I(l)&&oe(l)!=="body"),r=null;const i=W(e).position==="fixed";let s=i?J(e):e;for(;I(s)&&!ee(s);){const l=W(s),c=je(s);!c&&l.position==="fixed"&&(r=null),(i?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ce(s)&&!c&&mt(e,s))?o=o.filter(a=>a!==s):r=l,s=J(s)}return t.set(e,o),o}function Ln(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?be(t)?[]:Mn(t,this._c):[].concat(n),o],l=s[0],c=s.reduce((f,a)=>{const d=ot(t,a,r);return f.top=j(d.top,f.top),f.right=G(d.right,f.right),f.bottom=G(d.bottom,f.bottom),f.left=j(d.left,f.left),f},ot(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function kn(e){const{width:t,height:n}=dt(e);return{width:t,height:n}}function _n(e,t,n){const o=V(t),r=Y(t),i=n==="fixed",s=K(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=z(0);if(o||!o&&!i)if((oe(t)!=="body"||ce(r))&&(l=Ae(t)),o){const h=K(t,!0,i,t);c.x=h.x+t.clientLeft,c.y=h.y+t.clientTop}else r&&(c.x=Ie(r));const f=r&&!o&&!i?ht(r,l):z(0),a=s.left+l.scrollLeft-c.x-f.x,d=s.top+l.scrollTop-c.y-f.y;return{x:a,y:d,width:s.width,height:s.height}}function Te(e){return W(e).position==="static"}function rt(e,t){if(!V(e)||W(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Y(e)===n&&(n=n.ownerDocument.body),n}function gt(e,t){const n=$(e);if(be(e))return n;if(!V(e)){let r=J(e);for(;r&&!ee(r);){if(I(r)&&!Te(r))return r;r=J(r)}return n}let o=rt(e,t);for(;o&&An(o)&&Te(o);)o=rt(o,t);return o&&ee(o)&&Te(o)&&!je(o)?n:o||Cn(e)||n}const Nn=async function(e){const t=this.getOffsetParent||gt,n=this.getDimensions,o=await n(e.floating);return{reference:_n(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Hn(e){return W(e).direction==="rtl"}const jn={convertOffsetParentRelativeRectToViewportRelativeRect:Tn,getDocumentElement:Y,getClippingRect:Ln,getOffsetParent:gt,getElementRects:Nn,getClientRects:On,getDimensions:kn,getScale:Q,isElement:I,isRTL:Hn};function xt(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function $n(e,t){let n=null,o;const r=Y(e);function i(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const f=e.getBoundingClientRect(),{left:a,top:d,width:h,height:u}=f;if(l||t(),!h||!u)return;const p=ue(d),g=ue(r.clientWidth-(a+h)),x=ue(r.clientHeight-(d+u)),w=ue(a),A={rootMargin:-p+"px "+-g+"px "+-x+"px "+-w+"px",threshold:j(0,G(1,c))||1};let v=!0;function b(P){const T=P[0].intersectionRatio;if(T!==c){if(!v)return s();T?s(!1,T):o=setTimeout(()=>{s(!1,1e-7)},1e3)}T===1&&!xt(f,e.getBoundingClientRect())&&s(),v=!1}try{n=new IntersectionObserver(b,{...A,root:r.ownerDocument})}catch{n=new IntersectionObserver(b,A)}n.observe(e)}return s(!0),i}function Fn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,f=Fe(e),a=r||i?[...f?se(f):[],...se(t)]:[];a.forEach(w=>{r&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});const d=f&&l?$n(f,n):null;let h=-1,u=null;s&&(u=new ResizeObserver(w=>{let[y]=w;y&&y.target===f&&u&&(u.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var A;(A=u)==null||A.observe(t)})),n()}),f&&!c&&u.observe(f),u.observe(t));let p,g=c?K(e):null;c&&x();function x(){const w=K(e);g&&!xt(g,w)&&n(),g=w,p=requestAnimationFrame(x)}return n(),()=>{var w;a.forEach(y=>{r&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),d==null||d(),(w=u)==null||w.disconnect(),u=null,c&&cancelAnimationFrame(p)}}const In=wn,Wn=yn,Bn=mn,zn=bn,Vn=gn,it=hn,Yn=vn,Xn=(e,t,n)=>{const o=new Map,r={platform:jn,...n},i={...r.platform,_c:o};return pn(e,t,{...r,platform:i})};var pe=typeof document<"u"?m.useLayoutEffect:m.useEffect;function xe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!xe(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!xe(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function wt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function st(e,t){const n=wt(e);return Math.round(t*n)/n}function Oe(e){const t=m.useRef(e);return pe(()=>{t.current=e}),t}function qn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:c,open:f}=e,[a,d]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,u]=m.useState(o);xe(h,o)||u(o);const[p,g]=m.useState(null),[x,w]=m.useState(null),y=m.useCallback(R=>{R!==P.current&&(P.current=R,g(R))},[]),A=m.useCallback(R=>{R!==T.current&&(T.current=R,w(R))},[]),v=i||p,b=s||x,P=m.useRef(null),T=m.useRef(null),M=m.useRef(a),H=c!=null,L=Oe(c),_=Oe(r),N=Oe(f),E=m.useCallback(()=>{if(!P.current||!T.current)return;const R={placement:t,strategy:n,middleware:h};_.current&&(R.platform=_.current),Xn(P.current,T.current,R).then(k=>{const B={...k,isPositioned:N.current!==!1};O.current&&!xe(M.current,B)&&(M.current=B,tn.flushSync(()=>{d(B)}))})},[h,t,n,_,N]);pe(()=>{f===!1&&M.current.isPositioned&&(M.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})))},[f]);const O=m.useRef(!1);pe(()=>(O.current=!0,()=>{O.current=!1}),[]),pe(()=>{if(v&&(P.current=v),b&&(T.current=b),v&&b){if(L.current)return L.current(v,b,E);E()}},[v,b,E,L,H]);const F=m.useMemo(()=>({reference:P,floating:T,setReference:y,setFloating:A}),[y,A]),S=m.useMemo(()=>({reference:v,floating:b}),[v,b]),D=m.useMemo(()=>{const R={position:n,left:0,top:0};if(!S.floating)return R;const k=st(S.floating,a.x),B=st(S.floating,a.y);return l?{...R,transform:"translate("+k+"px, "+B+"px)",...wt(S.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:k,top:B}},[n,l,S.floating,a.x,a.y]);return m.useMemo(()=>({...a,update:E,refs:F,elements:S,floatingStyles:D}),[a,E,F,S,D])}const Gn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?it({element:o.current,padding:r}).fn(n):{}:o?it({element:o,padding:r}).fn(n):{}}}},Un=(e,t)=>({...In(e),options:[e,t]}),Jn=(e,t)=>({...Wn(e),options:[e,t]}),Kn=(e,t)=>({...Yn(e),options:[e,t]}),Zn=(e,t)=>({...Bn(e),options:[e,t]}),Qn=(e,t)=>({...zn(e),options:[e,t]}),eo=(e,t)=>({...Vn(e),options:[e,t]}),to=(e,t)=>({...Gn(e),options:[e,t]});var no="Arrow",yt=m.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return C.jsx(ye.svg,{...i,ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:C.jsx("polygon",{points:"0,0 30,0 15,10"})})});yt.displayName=no;var oo=yt;function ro(e){const[t,n]=m.useState(void 0);return Ee(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,l;if("borderBoxSize"in i){const c=i.borderBoxSize,f=Array.isArray(c)?c[0]:c;s=f.inlineSize,l=f.blockSize}else s=e.offsetWidth,l=e.offsetHeight;n({width:s,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}var We="Popper",[vt,bt]=ct(We),[io,At]=vt(We),Ct=e=>{const{__scopePopper:t,children:n}=e,[o,r]=m.useState(null);return C.jsx(io,{scope:t,anchor:o,onAnchorChange:r,children:n})};Ct.displayName=We;var Pt="PopperAnchor",Rt=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=At(Pt,n),s=m.useRef(null),l=we(t,s);return m.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:C.jsx(ye.div,{...r,ref:l})});Rt.displayName=Pt;var Be="PopperContent",[so,co]=vt(Be),Tt=m.forwardRef((e,t)=>{var Xe,qe,Ge,Ue,Je,Ke;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:i="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:f=[],collisionPadding:a=0,sticky:d="partial",hideWhenDetached:h=!1,updatePositionStrategy:u="optimized",onPlaced:p,...g}=e,x=At(Be,n),[w,y]=m.useState(null),A=we(t,re=>y(re)),[v,b]=m.useState(null),P=ro(v),T=(P==null?void 0:P.width)??0,M=(P==null?void 0:P.height)??0,H=o+(i!=="center"?"-"+i:""),L=typeof a=="number"?a:{top:0,right:0,bottom:0,left:0,...a},_=Array.isArray(f)?f:[f],N=_.length>0,E={padding:L,boundary:_.filter(ao),altBoundary:N},{refs:O,floatingStyles:F,placement:S,isPositioned:D,middlewareData:R}=qn({strategy:"fixed",placement:H,whileElementsMounted:(...re)=>Fn(...re,{animationFrame:u==="always"}),elements:{reference:x.anchor},middleware:[Un({mainAxis:r+M,alignmentAxis:s}),c&&Jn({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?Kn():void 0,...E}),c&&Zn({...E}),Qn({...E,apply:({elements:re,rects:Ze,availableWidth:Vt,availableHeight:Yt})=>{const{width:Xt,height:qt}=Ze.reference,fe=re.floating.style;fe.setProperty("--radix-popper-available-width",`${Vt}px`),fe.setProperty("--radix-popper-available-height",`${Yt}px`),fe.setProperty("--radix-popper-anchor-width",`${Xt}px`),fe.setProperty("--radix-popper-anchor-height",`${qt}px`)}}),v&&to({element:v,padding:l}),fo({arrowWidth:T,arrowHeight:M}),h&&eo({strategy:"referenceHidden",...E})]}),[k,B]=St(S),ae=Gt(p);Ee(()=>{D&&(ae==null||ae())},[D,ae]);const Ft=(Xe=R.arrow)==null?void 0:Xe.x,It=(qe=R.arrow)==null?void 0:qe.y,Wt=((Ge=R.arrow)==null?void 0:Ge.centerOffset)!==0,[Bt,zt]=m.useState();return Ee(()=>{w&&zt(window.getComputedStyle(w).zIndex)},[w]),C.jsx("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...F,transform:D?F.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Bt,"--radix-popper-transform-origin":[(Ue=R.transformOrigin)==null?void 0:Ue.x,(Je=R.transformOrigin)==null?void 0:Je.y].join(" "),...((Ke=R.hide)==null?void 0:Ke.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:C.jsx(so,{scope:n,placedSide:k,onArrowChange:b,arrowX:Ft,arrowY:It,shouldHideArrow:Wt,children:C.jsx(ye.div,{"data-side":k,"data-align":B,...g,ref:A,style:{...g.style,animation:D?void 0:"none"}})})})});Tt.displayName=Be;var Ot="PopperArrow",lo={top:"bottom",right:"left",bottom:"top",left:"right"},Et=m.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=co(Ot,o),s=lo[i.placedSide];return C.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:C.jsx(oo,{...r,ref:n,style:{...r.style,display:"block"}})})});Et.displayName=Ot;function ao(e){return e!==null}var fo=e=>({name:"transformOrigin",options:e,fn(t){var x,w,y;const{placement:n,rects:o,middlewareData:r}=t,s=((x=r.arrow)==null?void 0:x.centerOffset)!==0,l=s?0:e.arrowWidth,c=s?0:e.arrowHeight,[f,a]=St(n),d={start:"0%",center:"50%",end:"100%"}[a],h=(((w=r.arrow)==null?void 0:w.x)??0)+l/2,u=(((y=r.arrow)==null?void 0:y.y)??0)+c/2;let p="",g="";return f==="bottom"?(p=s?d:`${h}px`,g=`${-c}px`):f==="top"?(p=s?d:`${h}px`,g=`${o.floating.height+c}px`):f==="right"?(p=`${-c}px`,g=s?d:`${u}px`):f==="left"&&(p=`${o.floating.width+c}px`,g=s?d:`${u}px`),{data:{x:p,y:g}}}});function St(e){const[t,n="center"]=e.split("-");return[t,n]}var uo=Ct,po=Rt,ho=Tt,mo=Et,[Ce,qo]=ct("Tooltip",[bt]),Pe=bt(),Dt="TooltipProvider",go=700,Le="tooltip.open",[xo,ze]=Ce(Dt),Mt=e=>{const{__scopeTooltip:t,delayDuration:n=go,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:i}=e,[s,l]=m.useState(!0),c=m.useRef(!1),f=m.useRef(0);return m.useEffect(()=>{const a=f.current;return()=>window.clearTimeout(a)},[]),C.jsx(xo,{scope:t,isOpenDelayed:s,delayDuration:n,onOpen:m.useCallback(()=>{window.clearTimeout(f.current),l(!1)},[]),onClose:m.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>l(!0),o)},[o]),isPointerInTransitRef:c,onPointerInTransitChange:m.useCallback(a=>{c.current=a},[]),disableHoverableContent:r,children:i})};Mt.displayName=Dt;var Re="Tooltip",[wo,le]=Ce(Re),Lt=e=>{const{__scopeTooltip:t,children:n,open:o,defaultOpen:r=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:l}=e,c=ze(Re,e.__scopeTooltip),f=Pe(t),[a,d]=m.useState(null),h=Ut(),u=m.useRef(0),p=s??c.disableHoverableContent,g=l??c.delayDuration,x=m.useRef(!1),[w=!1,y]=Jt({prop:o,defaultProp:r,onChange:T=>{T?(c.onOpen(),document.dispatchEvent(new CustomEvent(Le))):c.onClose(),i==null||i(T)}}),A=m.useMemo(()=>w?x.current?"delayed-open":"instant-open":"closed",[w]),v=m.useCallback(()=>{window.clearTimeout(u.current),u.current=0,x.current=!1,y(!0)},[y]),b=m.useCallback(()=>{window.clearTimeout(u.current),u.current=0,y(!1)},[y]),P=m.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>{x.current=!0,y(!0),u.current=0},g)},[g,y]);return m.useEffect(()=>()=>{u.current&&(window.clearTimeout(u.current),u.current=0)},[]),C.jsx(uo,{...f,children:C.jsx(wo,{scope:t,contentId:h,open:w,stateAttribute:A,trigger:a,onTriggerChange:d,onTriggerEnter:m.useCallback(()=>{c.isOpenDelayed?P():v()},[c.isOpenDelayed,P,v]),onTriggerLeave:m.useCallback(()=>{p?b():(window.clearTimeout(u.current),u.current=0)},[b,p]),onOpen:v,onClose:b,disableHoverableContent:p,children:n})})};Lt.displayName=Re;var ke="TooltipTrigger",kt=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=le(ke,n),i=ze(ke,n),s=Pe(n),l=m.useRef(null),c=we(t,l,r.onTriggerChange),f=m.useRef(!1),a=m.useRef(!1),d=m.useCallback(()=>f.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),C.jsx(po,{asChild:!0,...s,children:C.jsx(ye.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...o,ref:c,onPointerMove:Z(e.onPointerMove,h=>{h.pointerType!=="touch"&&!a.current&&!i.isPointerInTransitRef.current&&(r.onTriggerEnter(),a.current=!0)}),onPointerLeave:Z(e.onPointerLeave,()=>{r.onTriggerLeave(),a.current=!1}),onPointerDown:Z(e.onPointerDown,()=>{f.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:Z(e.onFocus,()=>{f.current||r.onOpen()}),onBlur:Z(e.onBlur,r.onClose),onClick:Z(e.onClick,r.onClose)})})});kt.displayName=ke;var Ve="TooltipPortal",[yo,vo]=Ce(Ve,{forceMount:void 0}),_t=e=>{const{__scopeTooltip:t,forceMount:n,children:o,container:r}=e,i=le(Ve,t);return C.jsx(yo,{scope:t,forceMount:n,children:C.jsx(lt,{present:n||i.open,children:C.jsx(Kt,{asChild:!0,container:r,children:o})})})};_t.displayName=Ve;var te="TooltipContent",Nt=m.forwardRef((e,t)=>{const n=vo(te,e.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...i}=e,s=le(te,e.__scopeTooltip);return C.jsx(lt,{present:o||s.open,children:s.disableHoverableContent?C.jsx(Ht,{side:r,...i,ref:t}):C.jsx(bo,{side:r,...i,ref:t})})}),bo=m.forwardRef((e,t)=>{const n=le(te,e.__scopeTooltip),o=ze(te,e.__scopeTooltip),r=m.useRef(null),i=we(t,r),[s,l]=m.useState(null),{trigger:c,onClose:f}=n,a=r.current,{onPointerInTransitChange:d}=o,h=m.useCallback(()=>{l(null),d(!1)},[d]),u=m.useCallback((p,g)=>{const x=p.currentTarget,w={x:p.clientX,y:p.clientY},y=Ro(w,x.getBoundingClientRect()),A=To(w,y),v=Oo(g.getBoundingClientRect()),b=So([...A,...v]);l(b),d(!0)},[d]);return m.useEffect(()=>()=>h(),[h]),m.useEffect(()=>{if(c&&a){const p=x=>u(x,a),g=x=>u(x,c);return c.addEventListener("pointerleave",p),a.addEventListener("pointerleave",g),()=>{c.removeEventListener("pointerleave",p),a.removeEventListener("pointerleave",g)}}},[c,a,u,h]),m.useEffect(()=>{if(s){const p=g=>{const x=g.target,w={x:g.clientX,y:g.clientY},y=(c==null?void 0:c.contains(x))||(a==null?void 0:a.contains(x)),A=!Eo(w,s);y?h():A&&(h(),f())};return document.addEventListener("pointermove",p),()=>document.removeEventListener("pointermove",p)}},[c,a,s,f,h]),C.jsx(Ht,{...e,ref:i})}),[Ao,Co]=Ce(Re,{isInside:!1}),Ht=m.forwardRef((e,t)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:i,onPointerDownOutside:s,...l}=e,c=le(te,n),f=Pe(n),{onClose:a}=c;return m.useEffect(()=>(document.addEventListener(Le,a),()=>document.removeEventListener(Le,a)),[a]),m.useEffect(()=>{if(c.trigger){const d=h=>{const u=h.target;u!=null&&u.contains(c.trigger)&&a()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[c.trigger,a]),C.jsx(Zt,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:a,children:C.jsxs(ho,{"data-state":c.stateAttribute,...f,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[C.jsx(en,{children:o}),C.jsx(Ao,{scope:n,isInside:!0,children:C.jsx(Qt,{id:c.contentId,role:"tooltip",children:r||o})})]})})});Nt.displayName=te;var jt="TooltipArrow",Po=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=Pe(n);return Co(jt,n).isInside?null:C.jsx(mo,{...r,...o,ref:t})});Po.displayName=jt;function Ro(e,t){const n=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,o,r,i)){case i:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function To(e,t,n=5){const o=[];switch(t){case"top":o.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":o.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":o.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":o.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return o}function Oo(e){const{top:t,right:n,bottom:o,left:r}=e;return[{x:r,y:t},{x:n,y:t},{x:n,y:o},{x:r,y:o}]}function Eo(e,t){const{x:n,y:o}=e;let r=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const l=t[i].x,c=t[i].y,f=t[s].x,a=t[s].y;c>o!=a>o&&n<(f-l)*(o-c)/(a-c)+l&&(r=!r)}return r}function So(e){const t=e.slice();return t.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),Do(t)}function Do(e){if(e.length<=1)return e.slice();const t=[];for(let o=0;o<e.length;o++){const r=e[o];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))t.pop();else break}t.push(r)}t.pop();const n=[];for(let o=e.length-1;o>=0;o--){const r=e[o];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var Mo=Mt,Lo=Lt,ko=kt,_o=_t,$t=Nt;const No=Mo,Ho=Lo,jo=ko,Ye=m.forwardRef(({className:e,sideOffset:t=4,...n},o)=>C.jsx(_o,{children:C.jsx($t,{ref:o,sideOffset:t,className:nn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",e),...n})}));Ye.displayName=$t.displayName;Ye.__docgenInfo={description:"",methods:[],props:{sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const de={Content:Ye,Provider:No,Root:Ho,Trigger:jo};function $o({...e}){return C.jsx(de.Provider,{delayDuration:.3,children:C.jsxs(de.Root,{children:[C.jsx(de.Trigger,{"data-component":"MarkdownTooltipA",children:C.jsx(on,{...e})}),C.jsx(de.Content,{className:"bg-sky-500",children:e.href})]})})}$o.__docgenInfo={description:`마크다운 툴팁 a 태그 molecule 컴포넌트 반환 메서드

@param {MarkdownTooltipAProps} param0: MarkdownTooltipAProps

@returns {React.JSX.Element} JSX`,methods:[],displayName:"MarkdownTooltipA",props:{href:{required:!0,tsType:{name:"string"},description:"링크"}},composes:["DetailedHTMLProps"]};export{$o as M};
