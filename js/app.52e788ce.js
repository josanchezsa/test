(function(t){function e(e){for(var o,s,l=e[0],c=e[1],i=e[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},n={app:0},r=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/test/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0642":function(t,e,a){"use strict";a.r(e),a.d(e,"httpGetUsername",(function(){return s})),a.d(e,"httpGetOpport",(function(){return l})),a.d(e,"httpPostJobs",(function(){return c})),a.d(e,"httpPostPeople",(function(){return i}));a("d3b7"),a("25f0");var o=a("bc3a"),n=a.n(o),r=n.a.create({params:{}});function s(t){return new Promise((function(e,a){r.get("https://bio.torre.co/api/bios/"+t).then((function(t){"200"===t.status.toString()?e(t):a(t)})).catch((function(t){a(t)}))}))}function l(t){return new Promise((function(e,a){r.get("https://torre.co/api/opportunities/"+t).then((function(t){"200"===t.status.toString()?e(t):a(t)})).catch((function(t){a(t)}))}))}function c(t,e,a){return new Promise((function(o,n){var s={headers:{Accept:"application/json","Content-Type":"application/json"}};r.post("https://search.torre.co/opportunities/_search/?offset="+t+"&size="+e+"&aggregate="+a,null,s).then((function(t){"200"===t.status.toString()?o(t):n(t)})).catch((function(t){n(t)}))}))}function i(t,e,a){return new Promise((function(o,n){var s={headers:{Accept:"application/json","Content-Type":"application/json"}};r.post("https://search.torre.co/people/_search/?[offset="+t+"&size="+e+"&aggregate="+a,null,s).then((function(t){"200"===t.status.toString()?o(t):n(t)})).catch((function(t){n(t)}))}))}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("showData")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticStyle:{"background-color":"#27292d","max-width":"none",height:"100%"}},[o("v-snackbar",{attrs:{timeout:3e3,color:t.snackbar.color,top:"",right:""},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[o("v-btn",t._b({attrs:{color:"snackbar.color",text:""},on:{click:function(e){t.snackbar.show=!1}}},"v-btn",a,!1),[t._v("Close")])]}}]),model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v(t._s(t.snackbar.text))]),o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:a("dd00"),contain:"",height:"100"}})],1),o("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[o("h1",{staticClass:"display-2 font-weight-bold mb-3 text"},[t._v("Welcome to torre Search App")])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12",md:"6"}},[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[o("v-card-text",[o("div",{staticStyle:{color:"#27292d"}},[t._v("Search by username")]),o("v-text-field",{attrs:{label:"User name"},model:{value:t.usernameToSearch,callback:function(e){t.usernameToSearch=e},expression:"usernameToSearch"}})],1),o("v-card-actions",{staticStyle:{"justify-content":"flex-end",display:"flex","align-items":"end"}},[o("v-btn",{staticStyle:{color:"#27292d","background-color":"#cddc3a","border-color":"#cddc3a"},on:{click:function(e){return t.searchUsername(t.usernameToSearch)}}},[t._v("Search")])],1)],1)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12",md:"6"}},[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[o("v-card-text",[o("div",{staticStyle:{color:"#27292d"}},[t._v("Search jobs")]),o("v-row",[o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Offset"},model:{value:t.jobOffset,callback:function(e){t.jobOffset=e},expression:"jobOffset"}})],1),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Size"},model:{value:t.jobSize,callback:function(e){t.jobSize=e},expression:"jobSize"}})],1),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Aggregate"},model:{value:t.jobAggregate,callback:function(e){t.jobAggregate=e},expression:"jobAggregate"}})],1)],1)],1),o("v-card-actions",{staticStyle:{"justify-content":"flex-end",display:"flex","align-items":"end"}},[o("v-btn",{staticStyle:{color:"#27292d","background-color":"#cddc3a","border-color":"#cddc3a"},on:{click:function(e){return t.searchJobs(t.jobOffset,t.jobSize,t.jobAggregate)}}},[t._v("Search")])],1)],1)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12",md:"6"}},[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[o("v-card-text",[o("div",{staticStyle:{color:"#27292d"}},[t._v("Search by id")]),o("v-text-field",{attrs:{label:"Id"},model:{value:t.userIdToSearch,callback:function(e){t.userIdToSearch=e},expression:"userIdToSearch"}})],1),o("v-card-actions",{staticStyle:{"justify-content":"flex-end",display:"flex","align-items":"end"}},[o("v-btn",{staticStyle:{color:"#27292d","background-color":"#cddc3a","border-color":"#cddc3a"},on:{click:function(e){return t.searchById(t.userIdToSearch)}}},[t._v("Search")])],1)],1)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12",md:"6"}},[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[o("v-card-text",[o("div",{staticStyle:{color:"#27292d"}},[t._v("Search people")]),o("v-row",[o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Offset"},model:{value:t.peopleOffset,callback:function(e){t.peopleOffset=e},expression:"peopleOffset"}})],1),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Size"},model:{value:t.peopleSize,callback:function(e){t.peopleSize=e},expression:"peopleSize"}})],1),o("v-col",{attrs:{cols:"12",md:"4"}},[o("v-text-field",{attrs:{label:"Aggregate"},model:{value:t.peopleAggregate,callback:function(e){t.peopleAggregate=e},expression:"peopleAggregate"}})],1)],1)],1),o("v-card-actions",{staticStyle:{"justify-content":"flex-end",display:"flex","align-items":"end"}},[o("v-btn",{staticStyle:{color:"#27292d","background-color":"#cddc3a","border-color":"#cddc3a"},on:{click:function(e){return t.searchPeople(t.peopleOffset,t.peopleSize,t.peopleAggregate)}}},[t._v("Search")])],1)],1)],1),o("v-col",{attrs:{cols:"12"}},[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.rowDatarts,loading:t.loading}})],1)],1)],1)},l=[],c=(a("b0c0"),a("0642")),i={name:"ShowData",data:function(){return{userIdToSearch:"",peopleOffset:"",peopleSize:"",peopleAggregate:"",jobOffset:"",jobSize:"",jobAggregate:"",snackbar:{show:!1,text:"",color:""},headerSelector:null,usernameToSearch:"",rowDatarts:[],loading:!1,options:{},headers:[{text:"Name",value:"name"},{text:"Location",value:"location"},{text:"Professional headline",value:"professionalHeadline"},{text:"Interests",value:"interests"}]}},methods:{searchUsername:function(t){var e=this;this.rowDatarts=[],this.headers=[{text:"Name",value:"name",sortable:!1},{text:"Location",value:"location",sortable:!1},{text:"Professional headline",value:"professionalHeadline",sortable:!1},{text:"Interests",value:"interests",sortable:!1}],this.loading=!0,c.httpGetUsername(t).then((function(t){for(var a="",o=0;o<t.data.interests.length;o++)o!==t.data.interests.length-1?a+=t.data.interests[o].name+", ":a+=t.data.interests[o].name;var n={name:t.data.person.name,location:t.data.person.location.name,professionalHeadline:t.data.person.professionalHeadline,interests:a};e.loading=!1,e.rowDatarts=[n]})).catch((function(){e.loading=!1,e.snackbar={show:!0,color:"red",text:"We can not find the user, try again please"}})),this.usernameToSearch=""},searchById:function(t){var e=this;this.rowDatarts=[],this.headers=[{text:"Organizations",value:"organizations",sortable:!1},{text:"Languages",value:"languages",sortable:!1},{text:"Deadline",value:"deadline",sortable:!1},{text:"Compensation Range",value:"compensation",sortable:!1}],this.loading=!0,c.httpGetOpport(t).then((function(t){for(var a="",o=0;o<t.data.organizations.length;o++)o!==t.data.organizations.length-1?a+=t.data.organizations[o].name+", ":a+=t.data.organizations[o].name;for(var n="",r=0;r<t.data.languages.length;r++)r!==t.data.languages.length-1?n+=t.data.languages[r].language.name+", ":n+=t.data.languages[r].language.name;var s={organizations:a,languages:n,deadline:t.data.deadline,compensation:t.data.compensation.currency+" "+t.data.compensation.minAmount+" - "+t.data.compensation.maxAmount};e.loading=!1,e.rowDatarts=[s]})).catch((function(){e.loading=!1,e.snackbar={show:!0,color:"red",text:"We can not find the opportunity, try again please"}})),this.userIdToSearch=""},searchJobs:function(t,e,a){var o=this;this.rowDatarts=[],this.headers=[{text:"Remote",sortable:!1,value:"remote"},{text:"Deadline",value:"deadline",sortable:!1},{text:"Compensation Range",value:"compensationRange",sortable:!1},{text:"Skills",value:"skills",sortable:!1}],this.loading=!0,c.httpPostJobs(t,e,a).then((function(t){for(var e=0;e<t.data.results.length;e++){for(var a="",n=0;n<t.data.results[e].skills.length;n++)n!==t.data.results[e].skills.length-1?a+=t.data.results[e].skills[n].name+", ":a+=t.data.results[e].skills[n].name;var r={remote:t.data.results[e].remote,deadline:t.data.results[e].deadline,compensationRange:t.data.results[e].compensation.data.maxAmount+"-"+t.data.results[e].compensation.data.minAmount,skills:a};o.rowDatarts.push(r),o.loading=!1}})).catch((function(){o.loading=!1,o.snackbar={show:!0,color:"red",text:"We can not find jobs for these parameters, try again please"}})),this.jobOffset="",this.jobSize="",this.jobAggregate=""},searchPeople:function(t,e,a){var o=this;this.rowDatarts=[],this.headers=[{text:"Name",value:"name"},{text:"Location",value:"location",sortable:!1},{text:"Professional Headline",value:"professionalHeadline",sortable:!1},{text:"Open To",value:"openTo",sortable:!1}],this.loading=!0,c.httpPostPeople(t,e,a).then((function(t){for(var e=0;e<t.data.results.length;e++){for(var a="",n=0;n<t.data.results[e].openTo.length;n++)n!==t.data.results[e].openTo.length-1?a+=t.data.results[e].openTo[n]+", ":a+=t.data.results[e].openTo[n];var r={name:t.data.results[e].name,location:t.data.results[e].locationName,professionalHeadline:t.data.results[e].professionalHeadline,openTo:a};o.rowDatarts.push(r),o.loading=!1}})).catch((function(){o.loading=!1,o.snackbar={show:!0,color:"red",text:"We can not find people for these parameters, try again please"}})),this.peopleOffset="",this.peopleSize="",this.peopleAggregate=""}}},d=i,u=(a("dabf"),a("2877")),p=a("6544"),f=a.n(p),h=a("8336"),g=a("b0af"),v=a("99d9"),b=a("62ad"),m=a("a523"),x=a("8fea"),S=a("adda"),y=a("0fd9"),w=a("2db4"),k=a("8654"),j=Object(u["a"])(d,s,l,!1,null,null,null),O=j.exports;f()(j,{VBtn:h["a"],VCard:g["a"],VCardActions:v["a"],VCardText:v["b"],VCol:b["a"],VContainer:m["a"],VDataTable:x["a"],VImg:S["a"],VRow:y["a"],VSnackbar:w["a"],VTextField:k["a"]});var T={name:"App",components:{ShowData:O},data:function(){return{}}},_=T,A=(a("034f"),a("7496")),z=a("f6c4"),C=Object(u["a"])(_,n,r,!1,null,null,null),P=C.exports;f()(C,{VApp:A["a"],VMain:z["a"]});var D=a("f309");o["a"].use(D["a"]);var V=new D["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:V,render:function(t){return t(P)}}).$mount("#app")},"6b25":function(t,e,a){},"85ec":function(t,e,a){},dabf:function(t,e,a){"use strict";a("6b25")},dd00:function(t,e,a){t.exports=a.p+"img/torre.9ba0ff9d.png"}});
//# sourceMappingURL=app.52e788ce.js.map