(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{56392:function(t,e,o){Promise.resolve().then(o.bind(o,52664))},49721:function(t,e,o){"use strict";o(2265);var a=o(59018),n=o(57437);e.default=(0,a.Z)((0,n.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub")},75519:function(t,e,o){"use strict";o.d(e,{Z:function(){return w}});var a=o(23950),n=o(22988),r=o(2265),i=o(44839),c=o(49481),l=o(26259),s=o(10317),d=o(48024),u=o(41738),p=o(65023),h=o(6810),g=o(12272),v=o(90468);let m=r.createContext({}),x=r.createContext(void 0);var b=o(57437);let f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=t=>{let{color:e,disableElevation:o,fullWidth:a,size:r,variant:i,classes:c}=t,s={root:["root",i,"".concat(i).concat((0,g.Z)(e)),"size".concat((0,g.Z)(r)),"".concat(i,"Size").concat((0,g.Z)(r)),"color".concat((0,g.Z)(e)),o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon","iconSize".concat((0,g.Z)(r))],endIcon:["icon","endIcon","iconSize".concat((0,g.Z)(r))]},d=(0,l.Z)(s,v.F,c);return(0,n.Z)({},c,d)},Z=t=>(0,n.Z)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(h.Z,{shouldForwardProp:t=>(0,u.Z)(t)||"classes"===t,name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.root,e[o.variant],e["".concat(o.variant).concat((0,g.Z)(o.color))],e["size".concat((0,g.Z)(o.size))],e["".concat(o.variant,"Size").concat((0,g.Z)(o.size))],"inherit"===o.color&&e.colorInherit,o.disableElevation&&e.disableElevation,o.fullWidth&&e.fullWidth]}})(t=>{var e,o;let{theme:a,ownerState:r}=t,i="light"===a.palette.mode?a.palette.grey[300]:a.palette.grey[800],c="light"===a.palette.mode?a.palette.grey.A100:a.palette.grey[700];return(0,n.Z)({},a.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===r.variant&&"inherit"!==r.color&&{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===r.variant&&"inherit"!==r.color&&{border:"1px solid ".concat((a.vars||a).palette[r.color].main),backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===r.variant&&{backgroundColor:a.vars?a.vars.palette.Button.inheritContainedHoverBg:c,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===r.variant&&"inherit"!==r.color&&{backgroundColor:(a.vars||a).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[r.color].main}}),"&:active":(0,n.Z)({},"contained"===r.variant&&{boxShadow:(a.vars||a).shadows[8]}),["&.".concat(v.Z.focusVisible)]:(0,n.Z)({},"contained"===r.variant&&{boxShadow:(a.vars||a).shadows[6]}),["&.".concat(v.Z.disabled)]:(0,n.Z)({color:(a.vars||a).palette.action.disabled},"outlined"===r.variant&&{border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)},"contained"===r.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})},"text"===r.variant&&{padding:"6px 8px"},"text"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].main},"outlined"===r.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].main,border:a.vars?"1px solid rgba(".concat(a.vars.palette[r.color].mainChannel," / 0.5)"):"1px solid ".concat((0,s.Fq)(a.palette[r.color].main,.5))},"contained"===r.variant&&{color:a.vars?a.vars.palette.text.primary:null==(e=(o=a.palette).getContrastText)?void 0:e.call(o,a.palette.grey[300]),backgroundColor:a.vars?a.vars.palette.Button.inheritContainedBg:i,boxShadow:(a.vars||a).shadows[2]},"contained"===r.variant&&"inherit"!==r.color&&{color:(a.vars||a).palette[r.color].contrastText,backgroundColor:(a.vars||a).palette[r.color].main},"inherit"===r.color&&{color:"inherit",borderColor:"currentColor"},"small"===r.size&&"text"===r.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"text"===r.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===r.size&&"outlined"===r.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"outlined"===r.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===r.size&&"contained"===r.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===r.size&&"contained"===r.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},r.fullWidth&&{width:"100%"})},t=>{let{ownerState:e}=t;return e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(v.Z.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(v.Z.disabled)]:{boxShadow:"none"}}}),z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.startIcon,e["iconSize".concat((0,g.Z)(o.size))]]}})(t=>{let{ownerState:e}=t;return(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e))}),C=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.endIcon,e["iconSize".concat((0,g.Z)(o.size))]]}})(t=>{let{ownerState:e}=t;return(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e))});var w=r.forwardRef(function(t,e){let o=r.useContext(m),l=r.useContext(x),s=(0,c.Z)(o,t),d=(0,p.Z)({props:s,name:"MuiButton"}),{children:u,color:h="primary",component:g="button",className:v,disabled:Z=!1,disableElevation:w=!1,disableFocusRipple:k=!1,endIcon:I,focusVisibleClassName:R,fullWidth:B=!1,size:T="medium",startIcon:P,type:N,variant:E="text"}=d,O=(0,a.Z)(d,f),j=(0,n.Z)({},d,{color:h,component:g,disabled:Z,disableElevation:w,disableFocusRipple:k,fullWidth:B,size:T,type:N,variant:E}),M=y(j),W=P&&(0,b.jsx)(z,{className:M.startIcon,ownerState:j,children:P}),A=I&&(0,b.jsx)(C,{className:M.endIcon,ownerState:j,children:I});return(0,b.jsxs)(S,(0,n.Z)({ownerState:j,className:(0,i.Z)(o.className,M.root,v,l||""),component:g,disabled:Z,focusRipple:!k,focusVisibleClassName:(0,i.Z)(M.focusVisible,R),ref:e,type:N},O,{classes:M,children:[W,u,A]}))})},90468:function(t,e,o){"use strict";o.d(e,{F:function(){return r}});var a=o(34535),n=o(87542);function r(t){return(0,n.ZP)("MuiButton",t)}let i=(0,a.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);e.Z=i},83719:function(t,e,o){"use strict";var a=o(23950),n=o(22988),r=o(2265),i=o(44839),c=o(40261),l=o(26259),s=o(48024),d=o(65023),u=o(12272),p=o(98958),h=o(57437);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=t=>{let{align:e,gutterBottom:o,noWrap:a,paragraph:n,variant:r,classes:i}=t,c={root:["root",r,"inherit"!==t.align&&"align".concat((0,u.Z)(e)),o&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,l.Z)(c,p.f,i)},m=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.root,o.variant&&e[o.variant],"inherit"!==o.align&&e["align".concat((0,u.Z)(o.align))],o.noWrap&&e.noWrap,o.gutterBottom&&e.gutterBottom,o.paragraph&&e.paragraph]}})(t=>{let{theme:e,ownerState:o}=t;return(0,n.Z)({margin:0},"inherit"===o.variant&&{font:"inherit"},"inherit"!==o.variant&&e.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})}),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=t=>b[t]||t,y=r.forwardRef(function(t,e){let o=(0,d.Z)({props:t,name:"MuiTypography"}),r=f(o.color),l=(0,c.Z)((0,n.Z)({},o,{color:r})),{align:s="inherit",className:u,component:p,gutterBottom:b=!1,noWrap:y=!1,paragraph:Z=!1,variant:S="body1",variantMapping:z=x}=l,C=(0,a.Z)(l,g),w=(0,n.Z)({},l,{align:s,color:r,className:u,component:p,gutterBottom:b,noWrap:y,paragraph:Z,variant:S,variantMapping:z}),k=p||(Z?"p":z[S]||x[S])||"span",I=v(w);return(0,h.jsx)(m,(0,n.Z)({as:k,ref:e,ownerState:w,className:(0,i.Z)(I.root,u)},C))});e.Z=y},98958:function(t,e,o){"use strict";o.d(e,{f:function(){return r}});var a=o(34535),n=o(87542);function r(t){return(0,n.ZP)("MuiTypography",t)}let i=(0,a.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);e.Z=i},16463:function(t,e,o){"use strict";var a=o(71169);o.o(a,"useRouter")&&o.d(e,{useRouter:function(){return a.useRouter}})},52664:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return f}});var a=o(57437),n=o(33037),r=o(75519),i=o(83719),c=o(75735),l=o(16463),s=o(2265),d=o(83051);let u={[d.n.Unauthorization]:"토큰이 필요합니다.",[d.n.InvalidToken]:"토큰이 올바른 형식이 아닙니다.",[d.n.NotAdministrator]:"관리자가 아닙니다.",[d.n.AuthorizationExpired]:"토큰이 만료되었습니다."};var p=o(29250),h=o(91112),g=o(49721),v=(0,o(59018).Z)((0,a.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google"),m=o(54349),x=o(87002);let b=[{key:"github",icon:g.default,label:"Github 로그인",buttonProps:{backgroundColor:m.Z["900"],textColor:"white"}},{key:"google",icon:v,label:"Google 로그인",buttonProps:{backgroundColor:x.Z["700"],textColor:"white"}}];function f(){let t=(0,l.useRouter)(),{auth:e}=(0,h.Z)(),{openAlert:o}=(0,p.V)(),g=(0,s.useCallback)(async e=>{var a;(null===(a=(await fetch("".concat("https://auth.opentoyapp.kr","/claims"),{method:"POST",headers:{Authorization:"Bearer ".concat(await e.getIdToken())}}).then(t=>t.json()))["gh-page"])||void 0===a?void 0:a.admin)?t.push("/admin/resume"):o({open:!0,autoHideDuration:7e3,message:u[d.n.NotAdministrator]})},[o,t]),v=(0,s.useCallback)(async t=>{switch(t){case"github":{let t=new c.GH;try{let{user:o}=await (0,c.rh)(e,t);await g(o)}catch(o){if("auth/account-exists-with-different-credential"===o.code&&e.currentUser)try{let{user:o}=await (0,c.k9)(e.currentUser,t);await g(o)}catch(t){console.log(t)}else throw o}break}case"google":{let t=new c.hJ;try{let{user:o}=await (0,c.rh)(e,t);await g(o)}catch(o){if("auth/account-exists-with-different-credential"===o.code&&e.currentUser)try{let{user:o}=await (0,c.k9)(e.currentUser,t);await g(o)}catch(t){console.log(t)}else throw o}}}},[g,e]);return(0,a.jsx)(n.ZP,{container:!0,justifyContent:"center",alignItems:"center",height:"100%",padding:"20px",children:(0,a.jsx)(n.ZP,{container:!0,direction:"column",gap:{xs:4,md:"14px"},maxWidth:400,width:"100%",border:t=>"1.5px solid ".concat(t.palette.grey["400"]),borderRadius:{xs:"10px",md:"20px"},padding:{xs:"20px",md:"36px"},children:b.map(t=>{let{key:e,icon:o,buttonProps:n,label:c}=t;return(0,a.jsxs)(r.Z,{"background-color":n.backgroundColor,"text-color":n.textColor,sx:{justifyContent:"flex-start",gap:"14px",fontSize:24,backgroundColor:n.backgroundColor,color:n.textColor,width:"100%",padding:{xs:"10px 14px",md:"16px 24px"},transition:"opacity 0.2s",":hover":{backgroundColor:n.backgroundColor,opacity:{xs:1,md:.5}}},onClick:()=>v(e),children:[(0,a.jsx)(o,{}),(0,a.jsx)(i.Z,{variant:"subtitle1",fontWeight:"Bold",width:"100%",children:c})]},e)})})})}},25792:function(t,e,o){"use strict";o.d(e,{O:function(){return c},q:function(){return r}});var a=o(15236),n=o(75735);o(20357);let r={apiKey:"AIzaSyCH_h1GZqtXLx6JRdy5DeCPvxzW7KQHzfU",authDomain:"opentoyapp-88e10.firebaseapp.com",projectId:"opentoyapp-88e10",storageBucket:"opentoyapp-88e10.appspot.com",messagingSenderId:"877886816470",appId:"1:877886816470:web:1c3bc345664ac3a1e64977",measurementId:"G-EC1HBH7GDD"},i=(0,a.ZF)(r),c=(0,n.v0)(i)},29250:function(t,e,o){"use strict";o.d(e,{default:function(){return p},V:function(){return h}});var a=o(57437),n=o(19337),r=o(94614),i=o(61520),c=o(37656),l=o.n(c),s=o(2265);let{Provider:d,useContext:u}=(0,o(85091).createProvider)(function(){var t,e,o,i;let[c,l]=(0,s.useState)(null),d=(0,s.useCallback)(t=>{l(t)},[]),u=(0,s.useCallback)((t,e)=>{"clickaway"!==e&&l(t=>({...t,open:!1}))},[]);return{snackbarProps:{...c,anchorOrigin:{vertical:null!==(o=null==c?void 0:null===(t=c.anchorOrigin)||void 0===t?void 0:t.vertical)&&void 0!==o?o:"top",horizontal:null!==(i=null==c?void 0:null===(e=c.anchorOrigin)||void 0===e?void 0:e.horizontal)&&void 0!==i?i:"center"},action:(0,a.jsxs)(a.Fragment,{children:[null==c?void 0:c.action,(0,a.jsx)(r.Z,{color:"inherit",onClick:u,children:(0,a.jsx)(n.Z,{})})]}),onClose:u},openAlert:d}});var p=function(){for(var t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return t=>e.reduceRight((e,o)=>(0,s.createElement)(o,t,e),t.children)}(d,function(t){let{children:e}=t,o=u("snackbarProps");return(0,a.jsxs)(a.Fragment,{children:[e,(0,a.jsx)(i.Z,{...o})]})});function h(){return l()(u(),"openAlert")}},83051:function(t,e,o){"use strict";var a,n;o.d(e,{n:function(){return a}}),(n=a||(a={})).Unauthorization="UNAUTHORIZATION",n.InvalidToken="INVALID_TOKEN",n.NotAdministrator="NOT_ADMINISTRATOR",n.AuthorizationExpired="AUTHORIZATION_EXPIRED"},91112:function(t,e,o){"use strict";o.d(e,{Z:function(){return i}});var a=o(15236),n=o(75735),r=o(25792);function i(){let t=(0,a.C6)().length?(0,a.Mq)():(0,a.ZF)(r.q);return{auth:(0,n.v0)(t)}}}},function(t){t.O(0,[898,248,208,203,836,449,971,23,744],function(){return t(t.s=56392)}),_N_E=t.O()}]);