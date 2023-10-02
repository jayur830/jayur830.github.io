(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{38042:function(e,t,n){"use strict";var r=n(64652),o=n(15017),l=n(59192),u=n(38062),i=n(50209);let a=(e,t)=>(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),c=e=>(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),s=(e,t=!1)=>{var n;let o={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,n])=>{var r;o[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(r=n.palette)?void 0:r.mode}});let l=(0,r.Z)({html:a(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},c(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o),u=null==(n=e.components)||null==(n=n.MuiCssBaseline)?void 0:n.styleOverrides;return u&&(l=[l,u]),l};t.ZP=function(e){let t=(0,l.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(u.Z,{styles:e=>s(e,r)}),n]})}},38062:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(64652);n(15017);var o=n(75958),l=n(50209);function u(e){let{styles:t,defaultTheme:n={}}=e,r="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t;return(0,l.jsx)(o.xB,{styles:r})}var i=n(72596),a=function({styles:e,themeId:t,defaultTheme:n={}}){let r=(0,i.Z)(n),o="function"==typeof e?e(t&&r[t]||r):e;return(0,l.jsx)(u,{styles:o})},c=n(21397),s=n(69386),f=function(e){return(0,l.jsx)(a,(0,r.Z)({},e,{defaultTheme:c.Z,themeId:s.Z}))}},89816:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(64652),o=n(27230),l=n(15017);let u=l.createContext(null);function i(){let e=l.useContext(u);return e}let a="function"==typeof Symbol&&Symbol.for;var c=a?Symbol.for("mui.nested"):"__THEME_NESTED__",s=n(50209),f=function(e){let{children:t,theme:n}=e,o=i(),a=l.useMemo(()=>{let e=null===o?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return(0,r.Z)({},e,t)}(o,n);return null!=e&&(e[c]=null!==o),e},[n,o]);return(0,s.jsx)(u.Provider,{value:a,children:t})},d=n(68142),h=n(4256);let m={};function v(e,t,n,o=!1){return l.useMemo(()=>{let l=e&&t[e]||t;if("function"==typeof n){let u=n(l),i=e?(0,r.Z)({},t,{[e]:u}):u;return o?()=>i:i}return e?(0,r.Z)({},t,{[e]:n}):(0,r.Z)({},t,n)},[e,t,n,o])}var p=function(e){let{children:t,theme:n,themeId:r}=e,o=(0,h.Z)(m),l=i()||m,u=v(r,o,n),a=v(r,l,n,!0);return(0,s.jsx)(f,{theme:a,children:(0,s.jsx)(d.T.Provider,{value:u,children:t})})},b=n(69386);let y=["theme"];function Z(e){let{theme:t}=e,n=(0,o.Z)(e,y),l=t[b.Z];return(0,s.jsx)(p,(0,r.Z)({},n,{themeId:l?b.Z:void 0,theme:l||t}))}},21120:function(e,t,n){Promise.resolve().then(n.bind(n,4419))},4419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(50209),o=n(15017),l=n(26468),u=n(10253),i=n(68235),a=n(18452),c=n(91522),s=n(8387);function f(e){let{children:t}=e,n=(0,c.q)(e=>e.isDarkMode),f=(0,o.useMemo)(()=>(0,l.Z)({...s.Z,palette:{mode:n?"dark":"light"}}),[n]);return(0,r.jsxs)(a.Lv,{theme:f,children:[(0,r.jsx)(u.h4,{navigations:i.J,extra:(0,r.jsx)(u.pZ,{})}),t]})}n(57215)},68235:function(e,t,n){"use strict";n.d(t,{J:function(){return r},c:function(){return o}});let r=[{label:"블로그",path:"/blog"},{label:"이력서",path:"/resume"}],o=[{label:"블로그",path:"/admin/blog"},{label:"이력서",path:"/admin/resume"}]},26423:function(e,t,n){"use strict";n.r(t),n.d(t,{useAlert:function(){return m}});var r=n(50209),o=n(15017),l=n(25372),u=n(65289),i=n(98565),a=n(73957),c=n(35299),s=n.n(c),f=n(76459);let{Provider:d,useContext:h}=(0,l.createProvider)(function(){var e,t,n,l;let[a,c]=(0,o.useState)(null),s=(0,o.useCallback)(e=>{c(e)},[]),f=(0,o.useCallback)((e,t)=>{"clickaway"!==t&&c(e=>({...e,open:!1}))},[]);return{snackbarProps:{...a,anchorOrigin:{vertical:null!==(n=null==a?void 0:null===(e=a.anchorOrigin)||void 0===e?void 0:e.vertical)&&void 0!==n?n:"top",horizontal:null!==(l=null==a?void 0:null===(t=a.anchorOrigin)||void 0===t?void 0:t.horizontal)&&void 0!==l?l:"center"},action:(0,r.jsxs)(r.Fragment,{children:[null==a?void 0:a.action,(0,r.jsx)(i.Z,{color:"inherit",onClick:f,children:(0,r.jsx)(u.Z,{})})]}),onClose:f},openAlert:s}});function m(){return s()(h(),"openAlert")}t.default=(0,f.b)(d,function(e){let{children:t}=e,n=h("snackbarProps");return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(a.Z,{...n})]})})},15736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(50209),o=n(15017),l=n(15912),u=n(21069),i=n(68142);function a(e){let{options:t,children:n}=e,[{cache:a,flush:c}]=(0,o.useState)(()=>{let e=(0,u.Z)(t),n=[];return{cache:{...e,compat:!0,insert(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];let[,l]=r;return void 0===e.inserted[l.name]&&n.push(l.name),e.insert(...r)}},flush(){let e=n;return n=[],e}}});return(0,l.useServerInsertedHTML)(()=>{let e=c();if(0===e.length)return null;let n=e.reduce((e,t)=>e+a.inserted[t],"");return(0,r.jsx)("style",{"data-emotion":"".concat(a.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t.prepend?"@layer emotion {".concat(n,"}"):n}},a.key)}),(0,r.jsx)(i.C,{value:a,children:n})}},18452:function(e,t,n){"use strict";n.d(t,{uZ:function(){return r.default},Lv:function(){return i}});var r=n(26423),o=n(50209),l=n(89816),u=n(38042);function i(e){let{children:t,theme:n}=e;return(0,o.jsxs)(l.Z,{theme:n,children:[(0,o.jsx)(u.ZP,{}),t]})}n(15736)},8387:function(e,t,n){"use strict";var r=n(26468),o=n(52565),l=n.n(o);let u=(0,r.Z)({typography:{fontFamily:l().style.fontFamily}});t.Z=u},57215:function(){},52565:function(e){e.exports={style:{fontFamily:"'__fonts_7e949b', '__fonts_Fallback_7e949b'"},className:"__className_7e949b"}},15912:function(e,t,n){e.exports=n(29593)}},function(e){e.O(0,[220,140,894,912,285,460,563,253,913,437,744],function(){return e(e.s=21120)}),_N_E=e.O()}]);