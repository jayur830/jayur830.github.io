(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{19270:function(e){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SkillList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uid"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"skillList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"uid"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"list"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"score"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logoUrl"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:126}};t.loc.source={body:"query SkillList($uid: ID!) {\n  skillList(userId: $uid) {\n    type\n    list {\n      value\n      score\n      logoUrl\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function i(e,t){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==t)return i}}t.definitions.forEach(function(e){if(e.name){var t=new Set;(function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var i=t.type;"NamedType"===i.kind&&n.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(t){e(t,n)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(t){e(t,n)}),t.definitions&&t.definitions.forEach(function(t){e(t,n)})})(e,t),n[e.name.value]=t}}),e.exports=t,e.exports.SkillList=function(e,t){var r={kind:e.kind,definitions:[i(e,t)]};e.hasOwnProperty("loc")&&(r.loc=e.loc);var a=n[t]||new Set,o=new Set,l=new Set;for(a.forEach(function(e){l.add(e)});l.size>0;){var s=l;l=new Set,s.forEach(function(e){o.has(e)||(o.add(e),(n[e]||new Set).forEach(function(e){l.add(e)}))})}return o.forEach(function(t){var n=i(e,t);n&&r.definitions.push(n)}),r}(t,"SkillList")},83249:function(e,t,n){Promise.resolve().then(n.bind(n,61638))},91326:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(22988),r=n(23950),a=n(2265),o=n(44839),l=n(5785),s=n(47267),h=n(40261),d=n(14874),u=n(57437);let c=["className","component"];var f=n(35960),m=n(74012),g=n(52737);let v=(0,n(34535).Z)("MuiBox",["root"]),p=(0,m.Z)();var y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t,defaultTheme:n,defaultClassName:f="MuiBox-root",generateClassName:m}=e,g=(0,l.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(s.Z);return a.forwardRef(function(e,a){let l=(0,d.Z)(n),s=(0,h.Z)(e),{className:v,component:p="div"}=s,y=(0,r.Z)(s,c);return(0,u.jsx)(g,(0,i.Z)({as:p,ref:a,className:(0,o.Z)(v,m?m(f):f),theme:t&&l[t]||l},y))})}({themeId:g.Z,defaultTheme:p,defaultClassName:v.root,generateClassName:f.Z.generate})},83719:function(e,t,n){"use strict";var i=n(23950),r=n(22988),a=n(2265),o=n(44839),l=n(40261),s=n(26259),h=n(48024),d=n(69281),u=n(12272),c=n(98958),f=n(57437);let m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=e=>{let{align:t,gutterBottom:n,noWrap:i,paragraph:r,variant:a,classes:o}=e,l={root:["root",a,"inherit"!==e.align&&"align".concat((0,u.Z)(t)),n&&"gutterBottom",i&&"noWrap",r&&"paragraph"]};return(0,s.Z)(l,c.f,o)},v=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,u.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(e=>{let{theme:t,ownerState:n}=e;return(0,r.Z)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})}),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=e=>y[e]||e,w=a.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiTypography"}),a=x(n.color),s=(0,l.Z)((0,r.Z)({},n,{color:a})),{align:h="inherit",className:u,component:c,gutterBottom:y=!1,noWrap:w=!1,paragraph:k=!1,variant:M="body1",variantMapping:S=p}=s,b=(0,i.Z)(s,m),Z=(0,r.Z)({},s,{align:h,color:a,className:u,component:c,gutterBottom:y,noWrap:w,paragraph:k,variant:M,variantMapping:S}),E=c||(k?"p":S[M]||p[M])||"span",N=g(Z);return(0,f.jsx)(v,(0,r.Z)({as:E,ref:t,ownerState:Z,className:(0,o.Z)(N.root,u)},b))});t.Z=w},98958:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var i=n(34535),r=n(87542);function a(e){return(0,r.ZP)("MuiTypography",e)}let o=(0,i.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);t.Z=o},61638:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=n(57437),r=n(89120),a=n(33037),o=n(83719),l=n(91326),s=n(19270),h=n.n(s),d=n(2265);function u(e){let{logos:t,aspectRatio:n=16/9,style:r={}}=e,a=(0,d.useRef)(null),o=(0,d.useRef)([]),l=(0,d.useRef)([]),[s,h]=(0,d.useState)({width:1392,height:783});(0,d.useEffect)(()=>{let e=()=>{let e=Math.min(.9*window.innerWidth,1392),t=e/n,i=e/s.width,r=t/s.height;o.current.forEach(e=>{e.x*=i,e.y*=r}),h({width:e,height:t})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[n,s.width,s.height]),(0,d.useEffect)(()=>{let e=a.current;if(!e||!e.getContext("2d"))return;t.forEach((t,n)=>{let i=new Image;i.src=t.src,i.onload=()=>{let r=i.height/i.width,a=t.width,s=a*r,h=Math.random()*(e.width-a),d=Math.random()*(e.height-s);l.current[n]=i,o.current[n]={x:h,y:d,width:a,height:s,isDragging:!1,offsetX:0,offsetY:0,vx:0,vy:0,rotation:0,rotationSpeed:0},u()}});let n=()=>{o.current.forEach(e=>e.isDragging=!1)};return window.addEventListener("mouseup",n),c(),()=>{window.removeEventListener("mouseup",n)}},[t]);let u=()=>{let e=a.current,t=null==e?void 0:e.getContext("2d");e&&t&&(t.clearRect(0,0,e.width,e.height),o.current.forEach((e,n)=>{let i=l.current[n];i&&(t.save(),t.translate(e.x+e.width/2,e.y+e.height/2),t.rotate(e.rotation),t.drawImage(i,-e.width/2,-e.height/2,e.width,e.height),t.restore())}))},c=()=>{let e=new Map,t=n=>{let i=a.current;if(i){o.current.forEach(e=>{!e.isDragging&&(e.vx*=.98,e.vy*=.98,e.x+=e.vx,e.y+=e.vy,e.rotationSpeed*=.9,e.rotation+=e.rotationSpeed,(e.x<=0||e.x+e.width>=i.width)&&(e.vx*=-.8,e.x=Math.max(0,Math.min(e.x,i.width-e.width))),(e.y<=0||e.y+e.height>=i.height)&&(e.vy*=-.8,e.y=Math.max(0,Math.min(e.y,i.height-e.height))),.02>Math.abs(e.vx)&&(e.vx=0),.02>Math.abs(e.vy)&&(e.vy=0),.02>Math.abs(e.rotationSpeed)&&(e.rotationSpeed=0))});for(let t=0;t<o.current.length;t++)for(let i=t+1;i<o.current.length;i++)f(o.current[t],o.current[i],e,n);u(),requestAnimationFrame(t)}};requestAnimationFrame(t)},f=(e,t,n,i)=>{if(!e||!t)return;let r=t.x+t.width/2-(e.x+e.width/2),a=t.y+t.height/2-(e.y+e.height/2),o=Math.sqrt(r*r+a*a),l=(e.width+t.width)/2;if(o<l){let n=Math.atan2(a,r),i=l-o;e.x-=Math.cos(n)*i*.8,e.y-=Math.sin(n)*i*.8,t.x+=Math.cos(n)*i*.8,t.y+=Math.sin(n)*i*.8,e.rotationSpeed+=(Math.random()-.5)*.05,t.rotationSpeed+=(Math.random()-.5)*.05;let s=e.vx-t.vx,h=e.vy-t.vy;e.vx-=.4*s,e.vy-=.4*h,t.vx+=.4*s,t.vy+=.4*h}};return(0,i.jsx)("canvas",{ref:a,width:s.width,height:s.height,style:r,onMouseDown:e=>{let t=a.current;if(!t)return;let n=t.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;o.current.forEach(e=>{i>=e.x&&i<=e.x+e.width&&r>=e.y&&r<=e.y+e.height&&(e.isDragging=!0,e.offsetX=i-e.x,e.offsetY=r-e.y,e.vx=0,e.vy=0)})},onMouseMove:e=>{let t=a.current;if(!t)return;let n=t.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;o.current.forEach(e=>{if(e.isDragging){let n=Math.max(0,Math.min(i-e.offsetX,t.width-e.width)),a=Math.max(0,Math.min(r-e.offsetY,t.height-e.height)),o=n-e.x,l=a-e.y;e.vx=Math.max(-8,Math.min(8,o)),e.vy=Math.max(-8,Math.min(8,l)),e.x=n,e.y=a}}),u()}})}function c(){let{data:e}=(0,r.a)(h(),{variables:{uid:"8X2YS1znLjZCEtC4PMW59N6s7qy1"}}),t=e?[...new Set(e.skillList.map(e=>{let{list:t}=e;return t.filter(e=>{let{score:t}=e;return t>0})}).flat())]:[],n=t.map(e=>({src:e.logoUrl,width:33.33333*e.score})),s=t.map(e=>({src:e.logoUrl,width:20*e.score}));return(0,i.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",height:"calc(100vh - 60px)",children:(0,i.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",maxWidth:1440,children:[(0,i.jsx)(o.Z,{variant:"h1",fontSize:{xs:32,md:48},marginBottom:5,children:"Tech"}),(0,i.jsx)(l.Z,{display:{xs:"none",md:"block"},children:(0,i.jsx)(u,{logos:n,style:{borderRadius:20,boxShadow:"0 0 20px 5px rgba(0, 0, 0, 0.1)"}})}),(0,i.jsx)(l.Z,{display:{xs:"block",md:"none"},children:(0,i.jsx)(u,{logos:s,aspectRatio:9/16,style:{borderRadius:20,boxShadow:"0 0 20px 5px rgba(0, 0, 0, 0.1)"}})})]})})}}},function(e){e.O(0,[332,88,120,971,23,744],function(){return e(e.s=83249)}),_N_E=e.O()}]);