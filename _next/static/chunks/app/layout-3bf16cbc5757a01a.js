(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{16634:function(e,t,n){Promise.resolve().then(n.bind(n,29250)),Promise.resolve().then(n.bind(n,42414)),Promise.resolve().then(n.bind(n,86210)),Promise.resolve().then(n.bind(n,13889)),Promise.resolve().then(n.t.bind(n,98013,23)),Promise.resolve().then(n.t.bind(n,22079,23))},25792:function(e,t,n){"use strict";n.d(t,{O:function(){return l},q:function(){return i}});var r=n(15236),o=n(75735);n(20357);let i={apiKey:"AIzaSyCH_h1GZqtXLx6JRdy5DeCPvxzW7KQHzfU",authDomain:"opentoyapp-88e10.firebaseapp.com",projectId:"opentoyapp-88e10",storageBucket:"opentoyapp-88e10.appspot.com",messagingSenderId:"877886816470",appId:"1:877886816470:web:1c3bc345664ac3a1e64977",measurementId:"G-EC1HBH7GDD"},u=(0,r.ZF)(i),l=(0,o.v0)(u)},29250:function(e,t,n){"use strict";n.d(t,{default:function(){return f},V:function(){return h}});var r=n(57437),o=n(19337),i=n(60335),u=n(55946),l=n(37656),s=n.n(l),a=n(2265);let{Provider:c,useContext:d}=(0,n(85091).createProvider)(function(){var e,t,n,u;let[l,s]=(0,a.useState)(null),c=(0,a.useCallback)(e=>{s(e)},[]),d=(0,a.useCallback)((e,t)=>{"clickaway"!==t&&s(e=>({...e,open:!1}))},[]);return{snackbarProps:{...l,anchorOrigin:{vertical:null!==(n=null==l?void 0:null===(e=l.anchorOrigin)||void 0===e?void 0:e.vertical)&&void 0!==n?n:"top",horizontal:null!==(u=null==l?void 0:null===(t=l.anchorOrigin)||void 0===t?void 0:t.horizontal)&&void 0!==u?u:"center"},action:(0,r.jsxs)(r.Fragment,{children:[null==l?void 0:l.action,(0,r.jsx)(i.Z,{color:"inherit",onClick:d,children:(0,r.jsx)(o.Z,{})})]}),onClose:d},openAlert:c}});var f=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>t.reduceRight((t,n)=>(0,a.createElement)(n,e,t),e.children)}(c,function(e){let{children:t}=e,n=d("snackbarProps");return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(u.Z,{...n})]})});function h(){return s()(d(),"openAlert")}},42414:function(e,t,n){"use strict";n.d(t,{default:function(){return m}});var r=n(57437),o=n(50280),i=n(57326),u=n(91449),l=n(75589),s=n(33128),a=n(93935),c=n(20163),d=n(41287),f=n(37736),h=n(25792),p=n(83051);let v=new i.i((e,t)=>h.O.currentUser?(0,u.p)(h.O.currentUser.getIdToken().then(n=>(e.setContext(e=>({...e,headers:{...null==e?void 0:e.headers,Authorization:"Bearer ".concat(n)}})),(0,l.V)(t(e))))):t(e)),x=(0,f.q)(e=>{let{graphQLErrors:t,networkError:n,operation:r,forward:o}=e;if(t&&t.length>0)for(let e of t){if(e.extensions.code===p.n.AuthorizationExpired){if(h.O.currentUser)return(0,u.p)(h.O.currentUser.getIdToken(!0).then(e=>(r.setContext(t=>({...t,headers:{...null==t?void 0:t.headers,Authorization:"Bearer ".concat(e)}})),(0,l.V)(o(r)))));return o(r)}console.error(e)}return n&&console.error(n),o(r)}),y=new s.u({uri:"https://resume.opentoyapp.kr/api/graphql"}),g=new a.f({ssrMode:!0,link:(0,c.D)([v,x,y]),cache:new d.h});function m(e){let{children:t}=e;return(0,r.jsx)(o.e,{client:g,children:t})}},86210:function(e,t,n){"use strict";n.d(t,{default:function(){return f},r$:function(){return c},ut:function(){return d}});var r=n(57437),o=n(2265),i=n(33037),u=n(40468);function l(){return c()?(0,r.jsx)(i.ZP,{sx:{position:"fixed",top:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FFFFFF77",width:"100%",height:"100%"},children:(0,r.jsx)(u.Z,{color:"inherit"})}):(0,r.jsx)(r.Fragment,{})}let s=(0,o.createContext)(!1),a=(0,o.createContext)(()=>{});function c(){return(0,o.useContext)(s)}function d(){return(0,o.useContext)(a)}function f(e){let{children:t}=e,[n,i]=(0,o.useState)(!1);return(0,r.jsx)(s.Provider,{value:n,children:(0,r.jsxs)(a.Provider,{value:i,children:[t,(0,r.jsx)(l,{})]})})}},13889:function(e,t,n){"use strict";n.d(t,{default:function(){return g},m0:function(){return y}});var r=n(57437),o=n(81705),i=n(31512),u=n(7625),l=n(54952),s=n(31450),a=n(2265),c=n(72614),d=n(22079),f=n.n(d);let h=(0,c.ZP)({common:{white:"#FFFFFF",black:"#000000"}}),p=(0,i.Z)({palette:h,typography:{h1:{...f().style,fontSize:32},h2:{...f().style,fontSize:30},h3:{...f().style,fontSize:28},h4:{...f().style,fontSize:24},h5:{...f().style,fontSize:20},h6:{...f().style,fontSize:18},subtitle1:{...f().style,fontSize:16},subtitle2:{...f().style,fontSize:15},body1:{...f().style,fontSize:14},body2:{...f().style,fontSize:12},caption:{...f().style,fontSize:11},button:{...f().style,fontSize:10},overline:{...f().style,fontSize:9},allVariants:f().style,fontFamily:f().style.fontFamily,fontSize:16,fontWeightLight:100,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700}}),v=(0,a.createContext)(!1),x=(0,a.createContext)(()=>{});function y(){return{isDarkMode:(0,a.useContext)(v),onChangeDarkMode:(0,a.useContext)(x)}}function g(e){let{children:t}=e,[n,c]=(0,a.useState)(!1);return(0,r.jsx)(v.Provider,{value:n,children:(0,r.jsx)(x.Provider,{value:c,children:(0,r.jsxs)(o.Z,{theme:(0,i.Z)({...p,palette:{mode:n?"dark":"light"}}),children:[(0,r.jsx)(u.ZP,{}),(0,r.jsx)(l._,{dateAdapter:s.y,children:t})]})})})}},83051:function(e,t,n){"use strict";var r,o;n.d(t,{n:function(){return r}}),(o=r||(r={})).Unauthorization="UNAUTHORIZATION",o.InvalidToken="INVALID_TOKEN",o.NotAdministrator="NOT_ADMINISTRATOR",o.AuthorizationExpired="AUTHORIZATION_EXPIRED"},98013:function(){}},function(e){e.O(0,[301,898,623,447,74,520,838,226,356,971,23,744],function(){return e(e.s=16634)}),_N_E=e.O()}]);