(function(t){function e(e){for(var a,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-198cc8df":"330a3cfb"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-198cc8df":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-198cc8df":"58188979"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],p.parentNode.removeChild(p),r(o)},p.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=i[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0bac":function(t,e,r){"use strict";r("4d7a")},"30e2":function(t,e,r){"use strict";r("535b")},"35e4":function(t,e,r){"use strict";r("4fc6")},"4d7a":function(t,e,r){},"4fc6":function(t,e,r){},"535b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("div",{attrs:{id:"footer"}},[r("Footer")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{staticClass:"menu",attrs:{type:"dark",variant:"dark"}},[r("MenuSlidebar"),r("div",[r("b-avatar",{attrs:{badge:"","badge-variant":"success",src:"https://media-exp1.licdn.com/dms/image/C4D03AQHIFsXtyszNCA/profile-displayphoto-shrink_200_200/0/1617899245079?e=1623283200&v=beta&t=uCK-rB8uXDFIR3UC2S8Sje1IrRuGTJFwskcGBYRBYN8"}})],1)],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}]},[t._v("Profile")]),r("b-sidebar",{attrs:{id:"sidebar-backdrop","bg-variant":"dark",title:"Sidebar with backdrop",backdrop:"",shadow:""}},[[r("div",{staticClass:"mb-2"},[r("b-avatar",{staticClass:"avatar",attrs:{to:"/",src:"https://media-exp1.licdn.com/dms/image/C4D03AQHIFsXtyszNCA/profile-displayphoto-shrink_200_200/0/1617899245079?e=1623283200&v=beta&t=uCK-rB8uXDFIR3UC2S8Sje1IrRuGTJFwskcGBYRBYN8",size:"6rem"}})],1)],r("div",{staticClass:"px-2 py-2"},[r("b-button",{attrs:{variant:"success",type:"primary",to:"/story"}},[t._v(" My resume "),r("b-icon",{attrs:{icon:"person-fill","aria-hidden":"true"}})],1),r("b-button",{attrs:{variant:"success"}},[r("b-link",{attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[t._v(" Linkedin "),r("b-icon",{attrs:{icon:"linkedin","aria-hidden":"true"}})],1)],1),r("b-button",{attrs:{variant:"success"}},[r("b-link",{attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[t._v(" Github "),r("b-icon",{attrs:{icon:"github","aria-hidden":"true"}})],1)],1)],1)],2)],1)},l=[],u={name:"MenuSlidebar"},d=u,p=(r("35e4"),r("2877")),b=Object(p["a"])(d,c,l,!1,null,"6753482f",null),f=b.exports,h={name:"Header",components:{MenuSlidebar:f}},m=h,g=(r("0bac"),Object(p["a"])(m,o,s,!1,null,"56941258",null)),v=g.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mdb-footer",{staticClass:"font-small pt-0",attrs:{color:"indigo"}},[r("mdb-container",[r("mdb-row",[r("mdb-col",{attrs:{md:"12"}},[r("div",{staticClass:"form-icons"},[r("li",[r("a",{staticStyle:{color:"#fff"},attrs:{href:"https://www.facebook.com/henrique.hoinacki",target:"_blank"}},[r("b-icon",{attrs:{icon:"facebook",scale:"2","aria-hidden":"true"}})],1)]),r("li",[r("a",{staticStyle:{color:"#fff"},attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[r("b-icon",{attrs:{icon:"github",scale:"2","aria-hidden":"true"}})],1)]),r("li",[r("a",{staticStyle:{color:"#fff"},attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[r("b-icon",{attrs:{icon:"linkedin",scale:"2","aria-hidden":"true"}})],1)]),r("li",[r("a",{attrs:{href:"https://henrique-hoi-dev.github.io/portfolio/",target:"_blank"}},[t._v("henrique-hoi-dev.github.io/portfolio")])])])]),r("mdb-col",{attrs:{md:"12"}},[r("div",{staticClass:"form-icons"},[r("li",[r("b-icon",{attrs:{icon:"envelope",scale:"2","aria-hidden":"true"}}),t._v(" riqueah@gmail.com ")],1),r("li",[r("b-icon",{attrs:{icon:"telephone",scale:"2","aria-hidden":"true"}}),t._v(" 55 (46) 9 9119-5068 ")],1)])])],1)],1),r("div",{staticClass:"footer-copyright text-center py-3"},[t._v(" © 2021 Copyright: "),r("a",{attrs:{href:"https://www.MDBootstrap.com"}},[t._v(" MDBootstrap.com ")])])],1)},k=[],y=r("91c9"),w={components:{mdbFooter:y["mdbFooter"],mdbContainer:y["mdbContainer"],mdbRow:y["mdbRow"],mdbCol:y["mdbCol"]}},C=w,x=(r("b8bf"),Object(p["a"])(C,_,k,!1,null,"5723c082",null)),j=x.exports,H={components:{Header:v,Footer:j}},S=H,q=(r("5c0b"),Object(p["a"])(S,n,i,!1,null,null,null)),O=q.exports,P=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h1",{domProps:{innerHTML:t._s(t.paper)}}),r("div",{staticClass:"card-grid"},[r("div",{staticClass:"animate__animated animate__lightSpeedInRight"},[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/avaliacao-front-end-sponte"}},[t._v(" Repo ")])])],1),r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/gobarber"}},[t._v(" Repo ")])])],1)],1)],1)]),r("div",{staticClass:"card-grid"},[r("div",{staticClass:"animate__animated animate__lightSpeedInRight"},[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/WebApi-asp.NET"}},[t._v(" Repo ")])])],1),r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/ilia-frontend-challenge"}},[t._v(" Repo ")])])],1)],1)],1)])])},E=[],D={name:"Welcome",data:function(){return{titeleText:"Welcome to my Portfolio! My name is Henrique Hoinacki...",paper:"",timer:null}},mounted:function(){this.printer()},methods:{printer:function(){var t=this;this.stoper();var e=-1;this.timer=setInterval((function(){e++;var r=e%t.titeleText.length;t.paper+=t.titeleText[r]}),200-50*Math.random())},stoper:function(){clearInterval(this.timer),this.paper=""}},watch:{paper:function(){this.paper.length==this.titeleText.length&&(this.paper="")}}},R=D,M=(r("30e2"),Object(p["a"])(R,T,E,!1,null,"a72c7bb6",null)),A=M.exports;a["default"].use(P["a"]);var B=[{path:"/",name:"Welcome",component:A},{path:"/story",name:"Home",component:function(){return r.e("chunk-198cc8df").then(r.bind(null,"bc13"))}}],F=new P["a"]({mode:"history",base:"/portfolio/",routes:B}),I=F,N=r("5f5b"),L=r("b1e0");r("ab8b"),r("2dd8");a["default"].use(N["a"]),a["default"].use(L["a"]);r("e792"),r("fc04");a["default"].config.productionTip=!1,new a["default"]({router:I,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"6ba1":function(t,e,r){},"9c0c":function(t,e,r){},b8bf:function(t,e,r){"use strict";r("6ba1")},fc04:function(t,e,r){}});
//# sourceMappingURL=app.4247667e.js.map