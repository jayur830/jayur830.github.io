(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{3544:function(e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Resume"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"resume"},name:{kind:"Name",value:"Resume_get"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"github"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"history"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"companyName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"src"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"careers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"groupName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"list"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"completed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"techList"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:420}};n.loc.source={body:"query Resume {\n  resume: Resume_get {\n    title\n    github\n    history {\n      companyName\n      logo {\n        src\n        alt\n        width\n        height\n      }\n      startDate\n      endDate\n      website\n      description\n      careers {\n        groupName\n        list {\n          name\n          completed\n          startDate\n          endDate\n          techList\n          description\n        }\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}n.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),i[e.name.value]=n}}),e.exports=n,e.exports.Resume=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var d=i[n]||new Set,s=new Set,r=new Set;for(d.forEach(function(e){r.add(e)});r.size>0;){var l=r;r=new Set,l.forEach(function(e){s.has(e)||(s.add(e),(i[e]||new Set).forEach(function(e){r.add(e)}))})}return s.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(n,"Resume")},5780:function(e,n,i){Promise.resolve().then(i.bind(i,9873))},9873:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return g}});var t=i(6446),a=i(1860),d=i(1276),s=i(8267),r=i(1383),l=i(3271),o=i(6256),m=i(9769),u=i(9040),c=i(6176),v=i(4403),k=i(3544),f=i.n(k);function g(){var e;let n=(0,d.Z)(),i=(0,s.Z)(n.breakpoints.down("sm")),{resumeData:a}=function(){let{data:e,loading:n}=(0,v.a)(f()),i=(0,c.useMemo)(()=>n?null:null==e?void 0:e.resume,[n,e]);return{resumeData:i}}();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.ZP,{display:"flex",alignItems:"flex-start",paddingX:i?2:6,paddingTop:2,paddingBottom:4,gap:2,children:[(0,t.jsx)(l.Z,{fontSize:i?26:36,fontWeight:700,children:null==a?void 0:a.title}),(null==a?void 0:a.github)&&(0,t.jsx)(o.Z,{href:null==a?void 0:a.github,target:"_blank",children:(0,t.jsx)(h,{})})]}),(0,t.jsx)(r.ZP,{display:"flex",flexDirection:"column",alignItems:"center",gap:6,paddingX:i?2:6,paddingTop:2,paddingBottom:20,children:(null!==(e=null==a?void 0:a.history)&&void 0!==e?e:[]).map((e,n)=>(0,t.jsx)(u.Nx,{data:e},n))})]})}let h=(0,m.ZP)(a.Z)(e=>{let{theme:n}=e;return{width:40,height:40,fill:"dark"===n.palette.mode?"white":"black",[n.breakpoints.down("sm")]:{width:25,height:25}}})}},function(e){e.O(0,[115,132,726,981,460,40,891,329,744],function(){return e(e.s=5780)}),_N_E=e.O()}]);