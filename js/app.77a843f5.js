(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-636df036":"90f206f1"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-636df036":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-636df036":"d44947f8"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],d.parentNode.removeChild(d),r(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0b05":function(t,e,r){"use strict";r("4cd0")},"1f59":function(t,e,r){},2329:function(t,e,r){"use strict";r("facb")},"4cd0":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{staticClass:"menu",attrs:{type:"dark",variant:"dark"}},[r("MenuSlidebar"),r("div",[r("b-avatar",{attrs:{badge:"","badge-variant":"success",src:"https://media-exp1.licdn.com/dms/image/C4D03AQGwOTp8p1SnzA/profile-displayphoto-shrink_800_800/0/1596717452186?e=1620864000&v=beta&t=DpLc64lyskgljWlorLrEk5_xv1PfLNZsPkbtYrLYxac"}})],1)],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}]},[t._v("Profile")]),r("b-sidebar",{attrs:{id:"sidebar-backdrop","bg-variant":"dark",title:"Sidebar with backdrop","backdrop-variant":t.variant,backdrop:"",shadow:""}},[[r("div",{staticClass:"mb-2"},[r("b-avatar",{staticClass:"avatar",attrs:{to:"/",src:"https://media-exp1.licdn.com/dms/image/C4D03AQGwOTp8p1SnzA/profile-displayphoto-shrink_800_800/0/1596717452186?e=1620864000&v=beta&t=DpLc64lyskgljWlorLrEk5_xv1PfLNZsPkbtYrLYxac",size:"6rem"},on:{click:t.add}})],1)],r("div",{staticClass:"px-2 py-2"},[r("el-button",[r("button",{attrs:{type:"primary"}},[r("router-link",{attrs:{to:"/story"}},[t._v(" My resume "),r("b-icon",{attrs:{icon:"person-fill","aria-hidden":"true"}})],1)],1)]),r("el-button",[r("button",{attrs:{type:"primary"}},[r("b-link",{attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[t._v(" Linkedin "),r("b-icon",{attrs:{icon:"linkedin","aria-hidden":"true"}})],1)],1)]),r("el-button",[r("button",{attrs:{type:"primary"}},[r("b-link",{attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[t._v(" Github "),r("b-icon",{attrs:{icon:"github","aria-hidden":"true"}})],1)],1)])],1)],2)],1)},u=[],l={name:"MenuSlidebar"},p=l,d=(r("e3b6"),r("2877")),f=Object(d["a"])(p,c,u,!1,null,"5ebb80c1",null),b=f.exports,h={name:"Header",components:{MenuSlidebar:b}},m=h,g=(r("2329"),Object(d["a"])(m,i,s,!1,null,"2684edef",null)),v=g.exports,k={components:{Header:v}},y=k,_=(r("5c0b"),Object(d["a"])(y,a,o,!1,null,null,null)),w=_.exports,x=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h1",{domProps:{innerHTML:t._s(t.paper)}}),r("div",{staticClass:"card-grid"},[r("div",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/avaliacao-front-end-sponte"}},[t._v(" Repo ")])])],1),r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/gobarber"}},[t._v(" Repo ")])])],1)],1)],1)]),r("div",{staticClass:"card-grid"},[r("div",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/WebApi-asp.NET"}},[t._v(" Repo ")])])],1),r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/ilia-frontend-challenge"}},[t._v(" Repo ")])])],1)],1)],1)])])},P=[],C={name:"Welcome",data:function(){return{titeleText:"Welcome to my Portfolio! My name is Henrique Hoinacki...",paper:"",timer:null}},mounted:function(){this.printer()},methods:{printer:function(){var t=this;this.stoper();var e=-1;this.timer=setInterval((function(){e++;var r=e%t.titeleText.length;t.paper+=t.titeleText[r]}),200-50*Math.random())},stoper:function(){clearInterval(this.timer),this.paper=""}},watch:{paper:function(){this.paper.length==this.titeleText.length&&(this.paper="")}}},H=C,O=(r("0b05"),Object(d["a"])(H,j,P,!1,null,null,null)),E=O.exports;n["default"].use(x["a"]);var T=[{path:"/",name:"Welcome",component:E},{path:"/story",name:"Home",component:function(){return r.e("chunk-636df036").then(r.bind(null,"bc13"))}}],L=new x["a"]({mode:"history",base:"/portfolio/",routes:T}),S=L,q=r("5f5b"),A=r("b1e0");r("ab8b"),r("2dd8");n["default"].use(q["a"]),n["default"].use(A["a"]);r("e792"),r("fc04");n["default"].config.productionTip=!1,new n["default"]({router:S,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},e3b6:function(t,e,r){"use strict";r("1f59")},facb:function(t,e,r){},fc04:function(t,e,r){}});
//# sourceMappingURL=app.77a843f5.js.map