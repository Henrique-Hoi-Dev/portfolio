(function(t){function e(e){for(var r,n,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-31c2953b":"3d046b23"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-31c2953b":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-31c2953b":"6819ae4b"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){n[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=i[t]=[e,a]}));e.push(r[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"18ad":function(t,e,a){"use strict";a("6b88")},"1d2e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"menu-header"}},[a("Menu",{attrs:{id:"menu"}}),a("main",[a("Header",{attrs:{id:"header"}}),a("router-view"),a("div",{attrs:{id:"footer"}},[a("Footer")],1)],1)],1)])},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{staticClass:"menu",attrs:{type:"dark",variant:"dark"}},[a("h2",{domProps:{innerHTML:t._s(t.paper)}})])],1)},s=[],c={name:"Header",data:function(){return{titeleText:"My name - Henrique Hoinacki .... Developer Web    ",paper:"",timer:null}},mounted:function(){this.printer()},methods:{printer:function(){var t=this,e=-1;this.timer=setInterval((function(){e++;var a=e%t.titeleText.length;t.paper+=t.titeleText[a]}),200-50*Math.random())}},watch:{paper:function(){this.paper.length==this.titeleText.length&&clearInterval(this.timer)}}},u=c,l=(a("18ad"),a("2877")),d=Object(l["a"])(u,o,s,!1,null,"466d8614",null),p=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"menu"},[[r("div",{staticClass:"mb-2"},[r("b-avatar",{staticClass:"avatar",attrs:{src:a("e94e"),size:"6rem"}})],1),r("div",[r("p",[t._v(t._s(t.getFormat()))])])],r("div",{staticClass:"px-2 py-2"},[r("b-button",{attrs:{variant:"info",to:"/"}},[t._v(" Home "),r("b-icon",{attrs:{icon:"list-nested"}})],1),r("b-button",{attrs:{variant:"info",to:"/story"}},[t._v(" Resume "),r("b-icon",{attrs:{icon:"person-fill"}})],1),r("b-button",{attrs:{variant:"info"}},[r("b-link",{attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[t._v(" Linkedin "),r("b-icon",{attrs:{icon:"linkedin"}})],1)],1),r("b-button",{attrs:{variant:"info"}},[r("b-link",{attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[t._v(" Github "),r("b-icon",{attrs:{icon:"github"}})],1)],1),r("button",{staticClass:"bt-menu",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/")}}},[r("b-icon",{attrs:{icon:"list-nested"}})],1),r("button",{staticClass:"bt-menu",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/story")}}},[r("b-icon",{attrs:{icon:"person-fill"}})],1),r("button",{staticClass:"bt-menu",attrs:{type:"button"}},[r("a",{attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[r("b-icon",{attrs:{icon:"linkedin"}})],1)]),r("button",{staticClass:"bt-menu",attrs:{type:"button"}},[r("a",{attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[r("b-icon",{attrs:{icon:"github"}})],1)])],1)],2)},m=[],h=a("b166"),f=a("8923");window.locale=f["a"];var g={data:function(){return{format:h["a"]}},methods:{getFormat:function(){return this.format(new Date,"EEEEEE, d MMMM, yyyy HH:mm",{locale:window.locale})}}},v=g,_=(a("d931"),Object(l["a"])(v,b,m,!1,null,"766b1945",null)),k=_.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mdb-footer",{staticClass:"font-small pt-0",attrs:{color:"indigo"}},[r("mdb-container",[r("mdb-row",[r("mdb-col",{attrs:{md:"10"}},[r("div",{staticClass:"form-icons"},[r("li",[r("a",{staticStyle:{color:"#fff"},attrs:{href:"https://www.facebook.com/henrique.hoinacki",target:"_blank"}},[r("b-icon",{attrs:{icon:"facebook",scale:"2","aria-hidden":"true"}})],1)]),r("li",[r("a",{staticStyle:{color:"#fff"},attrs:{href:"https://github.com/Henrique-Hoi-Dev",target:"_blank"}},[r("b-icon",{attrs:{icon:"github",scale:"2","aria-hidden":"true"}})],1)]),r("li",[r("a",{staticStyle:{color:"#fff"},attrs:{href:"https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/",target:"_blank"}},[r("b-icon",{attrs:{icon:"linkedin",scale:"2","aria-hidden":"true"}})],1)]),r("li",[r("img",{attrs:{src:a("9fb2"),alt:"rockeseat"}}),r("a",{attrs:{href:"https://app.rocketseat.com.br/me/henrique-hoinacki-1591931998",target:"_blank"}},[t._v(" rocketseat.com.br/me/henrique-hoinacki")])])])]),r("mdb-col",{attrs:{md:"10"}},[t._v(" In addition to my social networks if you want to talk to me exchange an idea has my contacts ")]),r("mdb-col",{attrs:{md:"10"}},[r("div",{staticClass:"form-icons"},[r("li",[r("b-icon",{attrs:{icon:"envelope",scale:"2","aria-hidden":"true"}}),t._v(" riqueah@gmail.com ")],1),r("li",[r("b-icon",{attrs:{icon:"telephone",scale:"2","aria-hidden":"true"}}),t._v(" 55 (46) 9 9119-5068 ")],1)])])],1)],1),r("div",{staticClass:"footer-copyright text-center py-3"},[t._v(" © 2021 Copyright: "),r("a",{attrs:{href:"https://www.MDBootstrap.com"}},[t._v(" MDBootstrap.com ")])])],1)},y=[],A=a("91c9"),C={components:{mdbFooter:A["mdbFooter"],mdbContainer:A["mdbContainer"],mdbRow:A["mdbRow"],mdbCol:A["mdbCol"]}},x=C,H=(a("97c2"),Object(l["a"])(x,w,y,!1,null,"4d61aa10",null)),E=H.exports,j={components:{Header:p,Footer:E,Menu:k}},O=j,q=(a("5c0b"),Object(l["a"])(O,n,i,!1,null,null,null)),D=q.exports,P=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Welcome to my Portfolio!")]),a("div",{staticClass:"card-grid"},[a("div",{staticClass:"animate__animated animate__lightSpeedInRight"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[a("b-card-text",[a("h5",[t._v("Project challenge Sponte")]),a("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/avaliacao-front-end-sponte"}},[t._v(" -> Repository ")])])],1),a("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[a("b-card-text",[a("h5",[t._v("Project Gobarber rocketseat")]),a("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/gobarber"}},[t._v(" -> Repository ")])])],1)],1)],1)]),a("div",{staticClass:"card-grid"},[a("div",{staticClass:"animate__animated animate__lightSpeedInRight"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[a("b-card-text",[a("h5",[t._v("Project Api Asp.NET core")]),a("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/WebApi-asp.NET"}},[t._v(" -> Repository ")])])],1),a("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[a("b-card-text",[a("h5",[t._v("Project challenge Ilia")]),a("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/ilia-frontend-challenge"}},[t._v(" -> Repository ")])])],1)],1)],1)]),a("div",{staticClass:"card-grid"},[a("div",{staticClass:"animate__animated animate__lightSpeedInRight"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-top":""}},[a("b-card-text",[a("h5",[t._v("Project NLW-5 rocketseat")]),a("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/NLW-05"}},[t._v(" -> Repository ")])])],1),a("b-card",{attrs:{"img-src":"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/06/que-e-o-github-1024x512.png","img-alt":"Card image","img-bottom":""}},[a("b-card-text",[a("h5",[t._v("Project NLW-6 rocketseat")]),a("a",{attrs:{target:"_blank",href:"https://github.com/Henrique-Hoi-Dev/NLW-06"}},[t._v(" -> Repository ")])])],1)],1)],1)])])},S=[],T={name:"Welcome"},M=T,B=(a("70a5"),Object(l["a"])(M,R,S,!1,null,"58ba5c39",null)),W=B.exports;r["default"].use(P["a"]);var N=[{path:"/",name:"Welcome",component:W},{path:"/story",name:"Home",component:function(){return a.e("chunk-31c2953b").then(a.bind(null,"bc13"))}}],F=new P["a"]({mode:"history",base:"/portfolio/",routes:N}),L=F,U=a("5f5b"),G=a("b1e0");a("ab8b"),a("2dd8");r["default"].use(U["a"]),r["default"].use(G["a"]);a("e792"),a("fc04");r["default"].config.productionTip=!1,new r["default"]({router:L,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6b88":function(t,e,a){},"6e4d":function(t,e,a){},"70a5":function(t,e,a){"use strict";a("1d2e")},"97c2":function(t,e,a){"use strict";a("d06b")},"9c0c":function(t,e,a){},"9fb2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURXBYwGhPvWxTvmlPvXJbwW9XwG1Uv3FZwXJawf///3FawXNbwWtSvnZfw7aq321Vv8i/57Kl3ZaF0WxTv8/I6mZMvMvD6Hxlxbis4G9WwJ6O1cC1425Vv/j3/GlQvYZyympRvnNbwpeF0Xxmxrqv4d7Z8GRKu4Vxyb+142dNvPz8/uPe8si+5oh0y4t4zOfj9MzD6G5WwO7s97Ci3JJ/z7Om3fDt+HZew+/s+HlixBV6DyoAAACSSURBVBjTVY+HDsMwCESx4wFJuvdM9967//9jdRO7cREIHRKnd6BdQdrpWC2EfzA6CDRAdjArlI1KUbo3lNH53aYyD61V/OTrE1FTWY/+fj67E11aJUw9UB2O9NpuJizKPGC8uO6mmHR+HDhaPW5KOTAQrDtYDgU6BI2s3ovRSyAL1Rp4yAaX/2X6kubahs61/gAHFwsS2dk82AAAAABJRU5ErkJggg=="},d06b:function(t,e,a){},d931:function(t,e,a){"use strict";a("6e4d")},e94e:function(t,e,a){t.exports=a.p+"img/avatar.a10a14e0.jpeg"},fc04:function(t,e,a){}});
//# sourceMappingURL=app.27270c5d.js.map