var s={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function l(){if(x)return t;x=1;var R=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function i(a,r,e){var n=null;if(e!==void 0&&(n=""+e),r.key!==void 0&&(n=""+r.key),"key"in r){e={};for(var u in r)u!=="key"&&(e[u]=r[u])}else e=r;return r=e.ref,{$$typeof:R,type:a,key:n,ref:r!==void 0?r:null,props:e}}return t.Fragment=d,t.jsx=i,t.jsxs=i,t}var o;function f(){return o||(o=1,s.exports=l()),s.exports}export{f as r};
