(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-2f729f2d":"32f5fa94","chunk-72a03ada":"81be70b7"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2f729f2d":1,"chunk-72a03ada":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2f729f2d":"0b3ef086","chunk-72a03ada":"83c5b214"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="./",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1364:function(e,t,n){},"21f8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-project"},[n("Modal",{attrs:{show:e.modalStatus,title:"添加项目",mode:"small"},on:{close:e.modalClose},scopedSlots:e._u([{key:"content",fn:function(){return[n("div",{staticClass:"modal-content"},[n("Input",{attrs:{placeholder:"项目git地址，例如ssh://git@xxxx.git",width:300},on:{pressEnter:e.modalConfirm},model:{value:e.gitlab,callback:function(t){e.gitlab=t},expression:"gitlab"}})],1)]},proxy:!0},{key:"handle",fn:function(){return[n("Button",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{type:"default"},on:{click:e.modalClose}},[e._v("取消")]),n("Button",{attrs:{type:"primary",disabled:!e.gitlab||e.loading,loading:e.loading},on:{click:e.modalConfirm}},[e._v("确定")])]},proxy:!0}])})],1)},a=[],o=(n("6a61"),n("2e91")),i={data:function(){return{gitlab:"",loading:!1}},props:{modalStatus:{type:Boolean,default:!1}},methods:{modalClose:function(){this.gitlab="",this.$emit("modalClose")},modalConfirm:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.post(e.$api.addProject,{gitlab:e.gitlab});case 3:if(n=t.sent,r=n.data,a=r.Result,o=r.ResultMsg,e.loading=!1,"failture"!=a){t.next=10;break}return t.abrupt("return",e.$message.error(o));case 10:return e.modalClose(),t.abrupt("return",e.$message.success(o));case 12:case"end":return t.stop()}}),t)})))()}}},s=i,u=(n("c900"),n("c701")),c=Object(u["a"])(s,r,a,!1,null,null,null);t["default"]=c.exports},"401e":function(e,t,n){"use strict";n("8dd4")},"43c0":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-head"},[e._m(0),n("div",{staticClass:"right"},[n("Dropdown",{attrs:{data:e.dataSelect,trigger:"click"},model:{value:e.selVal,callback:function(t){e.selVal=t},expression:"selVal"}},[n("span",{staticClass:"drop-avatar"},[n("Avatar",{attrs:{type:"image"}})],1)])],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left"},[n("img",{attrs:{src:"/systemlogo.png"}}),n("span",[e._v("远程打包工具")])])}],o={data:function(){return{selVal:"",dataSelect:[{id:"loginout",name:"退出登录"}]}},methods:{loginOut:function(){this.$store.state.userInfo.isLogin=!1,this.$router.push("/login")}},watch:{selVal:function(e,t){e!==t&&this.loginOut()}}},i=o,s=(n("401e"),n("c701")),u=Object(s["a"])(i,r,a,!1,null,null,null);t["default"]=u.exports},"51fa":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"publish-success-modal"},[n("Modal",{attrs:{show:e.modalPubStatus,title:"FTP路径信息",mode:"tip",type:"info"},scopedSlots:e._u([{key:"content",fn:function(){return[e._v(" "+e._s(e.remotePath)+" ")]},proxy:!0},{key:"handle",fn:function(){return[n("Button",{attrs:{type:"default"},on:{click:e.modalClose}},[e._v("复制并关闭")]),n("Button",{attrs:{type:"primary"},on:{click:e.download}},[e._v("下载到本地")])]},proxy:!0}])}),n("input",{ref:"copyInput",attrs:{type:"text"},domProps:{value:e.remotePath}})],1)},a=[],o={props:{modalPubStatus:{type:Boolean,default:!1},remotePath:{type:String,default:""},distName:{type:String,default:""}},methods:{download:function(){this.$axios({url:this.$api.download,method:"post",responseType:"blob",data:{distName:this.distName,fileName:"".concat(this.distName,".zip")}})},modalClose:function(){this.$emit("modalClose"),this.copy()},copy:function(){var e=this.$refs.copyInput;e.select(),document.execCommand("Copy"),this.$message.success("路径复制成功！")}}},i=o,s=(n("a79d"),n("c701")),u=Object(s["a"])(i,r,a,!1,null,null,null);t["default"]=u.exports},"679b":function(e,t,n){var r={"./addProject.vue":"21f8","./bread.vue":"76e3","./pageHead.vue":"43c0","./publishSuccess.vue":"51fa"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="679b"},"76e3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"cli-bread"},e._l(e.breadcrumbArr,(function(t,r){return n("li",{key:r},[n("router-link",{directives:[{name:"title",rawName:"v-title"}],staticClass:"elli",attrs:{replace:"",to:t.path},domProps:{textContent:e._s(t.name)}}),e.isLast(r)?n("ArrowRight",{staticClass:"cli-bread-curm"}):e._e()],1)})),0)},a=[],o=n("d211"),i=n("cf6b"),s=n("4d97"),u=n.n(s),c={data:function(){return{}},components:{ArrowRight:u.a},computed:Object(o["a"])({},Object(i["c"])(["breadcrumbArr"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["changeBreadcrumb"])),{},{isLast:function(e){return e!==this.breadcrumbArr.length-1}})},l=c,d=(n("e799"),n("c701")),f=Object(d["a"])(l,r,a,!1,null,null,null);t["default"]=f.exports},"7b88":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("7b88")},"8cfc":function(e,t,n){"use strict";n.r(t),t["default"]={getProject:"/getProject",getBranch:"/getBranch",addProject:"addProject"}},"8dd4":function(e,t,n){},a79d:function(e,t,n){"use strict";n("afab")},afab:function(e,t,n){},bf27:function(e,t,n){var r={"./buildMange.ts":"f26c","./common.ts":"f727","./projectMange.ts":"8cfc"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="bf27"},c900:function(e,t,n){"use strict";n("1364")},cd49:function(e,t,n){"use strict";n.r(t);n("c703"),n("ee75"),n("9edd"),n("d3f4");var r=n("a593"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["/login"!=e.$route.path?n("page-head"):e._e(),n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)},o=[],i=(n("7c55"),n("c701")),s={},u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,l=(n("3610"),n("c585"),n("c368"),n("0416"),n("f644"),n("281b"),n("0af3"),n("f474"),n("efef")),d=n.n(l),f=(n("b116"),n("d205")),p=n.n(f),m=(n("7d38"),n("fa99")),h=n.n(m),b=(n("e7cb"),n("da14")),g=n.n(b),v=(n("3109"),n("8295")),y=n.n(v),w=(n("8862"),n("9417")),O=n.n(w),k=(n("2cc0"),n("54ad")),_=n.n(k),j=(n("1e42"),n("c210")),x=n.n(j),S=(n("7744"),n("8792")),C=n.n(S),E=n("e1fd"),A=(n("1287"),n("7927"),n("7910"),n("679b")),I=function(e){e.use(h.a).use(g.a).use(y.a).use(O.a).use(_.a).use(x.a).use(C.a),e.component("el-steps",E["Steps"]),e.component("el-step",E["Step"]),e.component("el-icon",E["Icon"]),e.prototype.$message=p.a,e.prototype.$loading=d.a,A.keys().forEach((function(t){e.component(t.match(/^.\/(.*).vue$/)[1],A(t).default)}))},$=n("cf6b"),N={userInfo:{user_id:"",pd:"",person_id:"",isLogin:!1},project_id:"",authId:[],breadcrumbArr:[]},P=(n("bf6c"),n("b526"),{userInfo:function(e,t){e.userInfo=t},project_id:function(e,t){e.project_id=t},authId:function(e,t){e.authId=t},changeBreadcrumb:function(e,t){if(Array.isArray(t))e.breadcrumbArr=t||[];else{var n=sessionStorage.getItem("breadcrumbArr");n&&"[]"!=n&&(e.breadcrumbArr=JSON.parse(n),sessionStorage.removeItem("breadcrumbArr"));var r=e.breadcrumbArr.findIndex((function(e){return e.path==t.path}));if(-1===r)return e.breadcrumbArr.push(t);e.breadcrumbArr.splice(r+1)}}}),L=(n("4322"),n("c645"),{hasAuth:function(e){return function(t){try{return e.authId.includes(t)}catch(n){return!1}}}}),T={},B={state:N,mutations:P,getters:L,actions:T},R=(n("e412"),n("a0ef"),n("65d5"),n("8587")),M=n.n(R);M.a.defaults.headers.post["Content-Type"]="application/json,charset=utf-8",M.a.defaults.timeout=864e5,M.a.defaults.baseURL="",M.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),M.a.interceptors.response.use((function(e){if("blob"===e.request.responseType){var t=e.data,n="",r="";if(e.config.data)if("[Object Object]"===Object.prototype.toString.call(e.config.data))n=e.config.data.fileName||"",r=e.config.data.mimeType;else{var a=JSON.parse(e.config.data);n=a.fileName||a.filename||"",r=JSON.parse(e.config.data).mimeType}var o=r?new Blob([t],{type:r}):new Blob([t]);if("download"in document.createElement("a")){var i=document.createElement("a");i.download=n,i.style.display="none",i.href=URL.createObjectURL(o),document.body.appendChild(i),i.click(),URL.revokeObjectURL(i.href),document.body.removeChild(i)}else navigator.msSaveBlob(o,n)}return e}),(function(e){return Promise.reject(e)}));var U=M.a,D=(n("d7d9"),n("0019"),n("6a61"),n("2e91")),J=n("a81e");r["default"].use(J["a"]);var q=n("f349"),F=q.keys().reduce((function(e,t){return e.concat(q(t).default)}),[]),V=new J["a"]({routes:F});V.beforeEach(function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=X.state.userInfo.isLogin,a?"/login"==t.path?r("/"):r():sessionStorage.getItem("userInfo")?(o=sessionStorage.getItem("userInfo"),sessionStorage.clear(),o=JSON.parse(o),a=o.isLogin,a?(X.commit("userInfo",o),r()):(X.state.userInfo.isLogin=!1,r("/login"))):"/login"==t.path?r():r("/login");case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),V.afterEach((function(e,t){if(e.meta.title){var n=e.meta,r=e.params,a=e.path,o=e.query;n.title&&X.commit("changeBreadcrumb",{name:n.title,params:r,query:o,path:a})}})),window.addEventListener("unload",(function(){sessionStorage.setItem("userInfo",JSON.stringify(X.state.userInfo)),sessionStorage.setItem("breadcrumbArr",JSON.stringify(X.state.breadcrumbArr))})),window.addEventListener("load",(function(){sessionStorage.removeItem("userInfo")}));var H=V,W=(n("ed88"),{title:{inserted:function(e){var t=e.clientWidth,n=e.scrollWidth,r=e.title;!r&&n>t&&(e.title=e.innerText)}}}),z=function(e){Object.keys(W).forEach((function(t){return e.directive(t,W[t])}))},K=n("bf27"),G=K.keys().reduce((function(e,t){return Object.assign(e,K(t).default)}),{}),Q=G;r["default"].use(I),r["default"].use($["a"]);var X=new $["a"].Store(B);r["default"].prototype.$axios=U,r["default"].use(z),r["default"].prototype.$api=Q,r["default"].config.productionTip=!1,new r["default"]({router:H,store:X,render:function(e){return e(c)}}).$mount("#app")},dfef:function(e,t,n){"use strict";n.r(t);n("c585");var r=function(){return n.e("chunk-72a03ada").then(n.bind(null,"1e4b"))},a=function(){return n.e("chunk-2f729f2d").then(n.bind(null,"dd7b"))};t["default"]=[{path:"*",name:"index",component:r,meta:{keepAlive:!0,title:"首页"}},{path:"/login",name:"login",component:a,meta:{keepAlive:!0,title:""}}]},e799:function(e,t,n){"use strict";n("fbeb")},f26c:function(e,t,n){"use strict";n.r(t),t["default"]={gitpull:"/gitpull",runbuild:"/runbuild",createversion:"/createversion",compressing:"/compressing",basicftp:"/basicftp"}},f349:function(e,t,n){var r={"./common.ts":"dfef"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="f349"},f727:function(e,t,n){"use strict";n.r(t),t["default"]={login:"/login",download:"/download"}},fbeb:function(e,t,n){}});