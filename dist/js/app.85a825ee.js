(function(e){function t(t){for(var o,a,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"440a":function(e,t,n){"use strict";var o=n("a0ca"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"fixed",attrs:{id:"topnav"}},[n("h1",{staticClass:"flex-between"},[n("router-link",{attrs:{to:"/"}},[e._v("csstagram")]),e._m(0),n("div",{staticClass:"right"},[e._v(e._s(e.$route.name))])],1)]),"home"===e.$route.name?n("div",{staticClass:"fixed",attrs:{id:"floating"}},[n("router-link",{attrs:{to:"/newpost"}},[n("div",{attrs:{id:"plus"}},[n("div",{attrs:{id:"feather"}})])])],1):e._e(),n("div",{staticClass:"fixed flex-between",attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Accueil")]),n("router-link",{attrs:{to:"/newpost"}},[e._v("Créer")]),n("router-link",{attrs:{to:"/profile"}},[e._v("Profil")])],1),n("div",{attrs:{id:"content"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{staticClass:"abscenter",attrs:{id:"logo",src:n("cf05"),alt:"Logo"}})])}],a={data:function(){return{}},mounted:function(){var e=this;e.banThisShadow(),document.addEventListener("scroll",(function(){e.banThisShadow()}))},methods:{banThisShadow:function(){var e=document.querySelector("#topnav");scrollY<=25?e.classList.remove("top-shadow"):e.classList.add("top-shadow")}}},s=a,l=(n("5c0b"),n("2877")),c=Object(l["a"])(s,r,i,!1,null,null,null),u=c.exports,p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"csstagram"},[n("p",[e._v("Bonjour, je suis la page "+e._s(e.pageName))]),n("div",{staticClass:"container cancel"},e._l(e.posts,(function(t){return n("div",{key:t.id,staticClass:"post"},[n("h2",[e._v(e._s(t.titre))]),n("img",{attrs:{src:t.url,alt:t.alt}}),n("div",{staticClass:"likes"},[n("img",{attrs:{src:t.heart,alt:"Coeur"},on:{"~click":function(n){return e.liker(t.id)}}}),t.likes<=100?n("p",[e._v(e._s(t.likes))]):n("p",[e._v("+ de 100 personnes")]),n("p",[e._v("Bonjour c'est moi!")])])])})),0)])},f=[],v=(n("d3b7"),{mounted:function(){var e=this;fetch("https://api.lucasvandenberg.fr/v1/post?page=9",{method:"GET",mode:"cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){e.posts=t.data}))},data:function(){return{posts:null,errorStatus:null,pageName:"home"}},methods:{liker:function(e){return this.posts[e].heart="https://image.flaticon.com/icons/png/512/148/148836.png",this.posts[e].likes++}},name:"home"}),g=v,h=(n("8e95"),Object(l["a"])(g,m,f,!1,null,"4046fca0",null)),b=h.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"csstagram"},[n("p",[e._v("Bonjour, je suis la page "+e._s(e.pageName))]),n("div",{staticClass:"container"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.urlImage,expression:"urlImage"}],attrs:{placeholder:"Lien de l'image",type:"text",name:"urlImage",id:"urlImage"},domProps:{value:e.urlImage},on:{input:function(t){t.target.composing||(e.urlImage=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.postTitle,expression:"postTitle"}],attrs:{placeholder:"Titre de la publication",type:"text",name:"postTitle",id:"postTitle"},domProps:{value:e.postTitle},on:{input:function(t){t.target.composing||(e.postTitle=t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{name:"description",id:"description",cols:"30",rows:"10",placeholder:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Envoyer"},on:{click:e.newPost}})])])])},_=[],y=(n("a4d3"),n("e01a"),n("bc3a")),x=n.n(y),j={data:function(){return{errorStatus:null,pageName:"New Post",urlImage:null,postTitle:null,description:null}},methods:{newPost:function(e){e.preventDefault(),x.a.post("https://api.lucasvandenberg.fr/v1/post",{headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-type":"application/json"},url:this.urlImage,author_id:12,title:this.postTitle,description:this.description,likes:0})}},name:"newpost"},T=j,k=(n("440a"),Object(l["a"])(T,w,_,!1,null,"5a390ef4",null)),C=k.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[n("p",[e._v("Bonjour, je suis la page "+e._s(e.pageName))]),n("div",{staticClass:"container"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.urlImage,expression:"urlImage"}],attrs:{placeholder:"Lien de l'image",type:"text",name:"urlImage",id:"urlImage"},domProps:{value:e.urlImage},on:{input:function(t){t.target.composing||(e.urlImage=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.postTitle,expression:"postTitle"}],attrs:{placeholder:"Titre de la publication",type:"text",name:"postTitle",id:"postTitle"},domProps:{value:e.postTitle},on:{input:function(t){t.target.composing||(e.postTitle=t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{name:"description",id:"description",cols:"30",rows:"10",placeholder:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Envoyer"},on:{click:e.newPost}})])])])},P=[],N={data:function(){return{errorStatus:null,pageName:"Profil",urlImage:null,postTitle:null,description:null}},methods:{},name:"profile"},I=N,S=Object(l["a"])(I,O,P,!1,null,"22abe1e1",null),E=S.exports;o["a"].use(d["a"]);var A=[{path:"/",name:"home",meta:{title:"ouioui - Accueil"},component:b},{path:"/newpost",name:"newpost",meta:{title:"ouioui - Créer"},component:C},{path:"/profile",name:"profile",meta:{title:"ouioui - Profil"},component:E}],$=new d["a"]({mode:"hash",base:"/",routes:A}),L="Oui Oui";$.afterEach((function(e){document.title=e.meta.title||L}));var B=$;n("4989"),n("ab8b");o["a"].config.productionTip=!1,new o["a"]({router:B,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"8e95":function(e,t,n){"use strict";var o=n("f661"),r=n.n(o);r.a},"9c0c":function(e,t,n){},a0ca:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.315c6a4a.png"},f661:function(e,t,n){}});
//# sourceMappingURL=app.85a825ee.js.map