(function(t){function e(e){for(var a,n,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,n=1;n<r.length;n++){var s=r[n];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-09755059":"052f444f"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={"chunk-09755059":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-09755059":"b5ec46a9"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],p.parentNode.removeChild(p),r(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var r=i[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,r[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21ea":function(t,e,r){},"2f57":function(t,e,r){},"30e7":function(t,e,r){},"35af":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"menu-header"}},[r("Menu",{attrs:{id:"menu"}}),r("main",[r("Header",{attrs:{id:"header"}}),r("router-view"),r("div",{attrs:{id:"footer"}},[r("Footer")],1)],1)],1)])},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{staticClass:"menu",attrs:{type:"dark",variant:"dark"}},[r("div",[r("h2",{domProps:{innerHTML:t._s(t.paper)}})])])],1)},s=[],c={name:"Header",data:function(){return{titeleText:"My name - Henrique Hoinacki .... Developer Web    ",paper:"",timer:null}},mounted:function(){this.printer()},methods:{printer:function(){var t=this;this.stoper();var e=-1;this.timer=setInterval((function(){e++;var r=e%t.titeleText.length;t.paper+=t.titeleText[r]}),200-50*Math.random())},stoper:function(){clearInterval(this.timer),this.paper=""}},watch:{paper:function(){this.paper.length==this.titeleText.length&&(this.paper="")}}},l=c,u=(r("c655"),r("2877")),d=Object(u["a"])(l,o,s,!1,null,"57a37320",null),p=d.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[[r("div",{staticClass:"mb-2"},[r("b-avatar",{staticClass:"avatar",attrs:{src:"https://files.fm/thumb_show.php?i=v9ff6wnfg",size:"6rem"}})],1)],r("div",{staticClass:"px-2 py-2"},[r("b-button",{attrs:{variant:"primary",to:"/"}},[t._v(" Home "),r("b-icon",{attrs:{icon:"list-nested"}})],1),r("b-button",{attrs:{variant:"primary",type:"primary",to:"/story"}},[t._v(" My resume "),r("b-icon",{attrs:{icon:"person-fill"}})],1),r("b-button",{attrs:{variant:"primary"}},[r("b-link",{attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[t._v(" Linkedin "),r("b-icon",{attrs:{icon:"linkedin"}})],1)],1),r("b-button",{attrs:{variant:"primary"}},[r("b-link",{attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[t._v(" Github "),r("b-icon",{attrs:{icon:"github"}})],1)],1)],1)],2)},m=[],h={},b=h,v=(r("e7d3"),Object(u["a"])(b,f,m,!1,null,"81efd0ec",null)),g=v.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mdb-footer",{staticClass:"font-small pt-0",attrs:{color:"indigo"}},[a("mdb-container",[a("mdb-row",[a("mdb-col",{attrs:{md:"10"}},[a("div",{staticClass:"form-icons"},[a("li",[a("a",{staticStyle:{color:"#fff"},attrs:{href:"https://www.facebook.com/henrique.hoinacki",target:"_blank"}},[a("b-icon",{attrs:{icon:"facebook",scale:"2","aria-hidden":"true"}})],1)]),a("li",[a("a",{staticStyle:{color:"#fff"},attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[a("b-icon",{attrs:{icon:"github",scale:"2","aria-hidden":"true"}})],1)]),a("li",[a("a",{staticStyle:{color:"#fff"},attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[a("b-icon",{attrs:{icon:"linkedin",scale:"2","aria-hidden":"true"}})],1)]),a("li",[a("img",{attrs:{src:r("9fb2"),alt:"rockeseat"}}),a("a",{attrs:{href:"https://app.rocketseat.com.br/me/henrique-hoinacki-1591931998",target:"_blank"}},[t._v(" rocketseat.com.br/me/henrique-hoinacki")])])])]),a("mdb-col",{attrs:{md:"10"}},[t._v(" In addition to my social networks if you want to talk to me exchange an idea has my contacts ")]),a("mdb-col",{attrs:{md:"10"}},[a("div",{staticClass:"form-icons"},[a("li",[a("b-icon",{attrs:{icon:"envelope",scale:"2","aria-hidden":"true"}}),t._v(" riqueah@gmail.com ")],1),a("li",[a("b-icon",{attrs:{icon:"telephone",scale:"2","aria-hidden":"true"}}),t._v(" 55 (46) 9 9119-5068 ")],1)])])],1)],1),a("div",{staticClass:"footer-copyright text-center py-3"},[t._v(" © 2021 Copyright: "),a("a",{attrs:{href:"https://www.MDBootstrap.com"}},[t._v(" MDBootstrap.com ")])])],1)},y=[],k=r("91c9"),_={components:{mdbFooter:k["mdbFooter"],mdbContainer:k["mdbContainer"],mdbRow:k["mdbRow"],mdbCol:k["mdbCol"]}},A=_,C=(r("f356"),Object(u["a"])(A,w,y,!1,null,"4d708707",null)),x=C.exports,H={components:{Header:p,Footer:x,Menu:g}},O=H,j=(r("5c0b"),Object(u["a"])(O,n,i,!1,null,null,null)),E=j.exports,P=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h1",[t._v("Welcome to my Portfolio!")]),r("div",{staticClass:"card-grid"},[r("div",{staticClass:"animate__animated animate__lightSpeedInRight"},[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/avaliacao-front-end-sponte"}},[t._v(" Repo ")])])],1),r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/gobarber"}},[t._v(" Repo ")])])],1)],1)],1)]),r("div",{staticClass:"card-grid"},[r("div",{staticClass:"animate__animated animate__lightSpeedInRight"},[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/WebApi-asp.NET"}},[t._v(" Repo ")])])],1),r("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[r("b-card-text",[t._v(" Project follows the repository link "),r("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/ilia-frontend-challenge"}},[t._v(" Repo ")])])],1)],1)],1)])])},q=[],D={name:"Welcome"},R=D,S=(r("eef6"),Object(u["a"])(R,T,q,!1,null,"35b1c90b",null)),B=S.exports;a["default"].use(P["a"]);var M=[{path:"/",name:"Welcome",component:B},{path:"/story",name:"Home",component:function(){return r.e("chunk-09755059").then(r.bind(null,"bc13"))}}],U=new P["a"]({mode:"history",base:"/portfolio/",routes:M}),W=U,F=r("5f5b"),J=r("b1e0");r("ab8b"),r("2dd8");a["default"].use(F["a"]),a["default"].use(J["a"]);r("e792"),r("fc04");a["default"].config.productionTip=!1,new a["default"]({router:W,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},"9fb2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURXBYwGhPvWxTvmlPvXJbwW9XwG1Uv3FZwXJawf///3FawXNbwWtSvnZfw7aq321Vv8i/57Kl3ZaF0WxTv8/I6mZMvMvD6Hxlxbis4G9WwJ6O1cC1425Vv/j3/GlQvYZyympRvnNbwpeF0Xxmxrqv4d7Z8GRKu4Vxyb+142dNvPz8/uPe8si+5oh0y4t4zOfj9MzD6G5WwO7s97Ci3JJ/z7Om3fDt+HZew+/s+HlixBV6DyoAAACSSURBVBjTVY+HDsMwCESx4wFJuvdM9967//9jdRO7cREIHRKnd6BdQdrpWC2EfzA6CDRAdjArlI1KUbo3lNH53aYyD61V/OTrE1FTWY/+fj67E11aJUw9UB2O9NpuJizKPGC8uO6mmHR+HDhaPW5KOTAQrDtYDgU6BI2s3ovRSyAL1Rp4yAaX/2X6kubahs61/gAHFwsS2dk82AAAAABJRU5ErkJggg=="},c655:function(t,e,r){"use strict";r("2f57")},e7d3:function(t,e,r){"use strict";r("21ea")},eef6:function(t,e,r){"use strict";r("30e7")},f356:function(t,e,r){"use strict";r("35af")},fc04:function(t,e,r){}});
//# sourceMappingURL=app.124d14f1.js.map