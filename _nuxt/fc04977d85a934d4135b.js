(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{327:function(t,e,n){"use strict";var r={urlBuilder:function(t){var e=function t(e,n){var r=e.slug;return void 0!==r&&(n.unshift(r),"home"!==e.parent.fields.slug&&t(e.parent.fields,n)),n}(t,[]);return"/".concat(e.join("/"))}},o=(n(75),{inlines_entry_hyperlink:function(t,content){var path=c.url.urlBuilder(t.data.target.fields);return'<a href="'.concat(path,'">').concat(content,"</a>")}}),c=e.a={url:r,components:{getComponent:function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()})).replace(" ","")},getWidgetComponent:function(t){return"Widget"===(t=this.getComponent(t))?"GenericWidget":t}},resolvers:o}},328:function(t,e,n){var content=n(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("0f903a1c",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(22),n(19);var r,o=n(3),c=n(55),l={name:"Logo",data:function(){return{logo:String}},created:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,c.a.contentful.getAsset("1kXoWuRfkHuil2lv3XMmIo");case 3:this.logo=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},f=n(10),h=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-6 col-sm-4 col-lg-3 logo"},[e("a",{staticClass:"sticky-logo",attrs:{href:"/"}},[e("img",{staticClass:"pull-left",attrs:{src:this.logo,alt:""}})])])}),[],!1,null,null,null).exports,d={name:"Login"},m={name:"Store"},v={name:"UtilityNav",components:{Login:Object(f.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://ctaportal.cobaltsaas.com/Login.aspx?ReturnUrl=/",target:"_blank"}},[e("span",{staticClass:"nav-text hidden-xs-down"},[this._v("Login")]),this._v(" "),e("span",{staticClass:"icon-profile"})])}],!1,null,null,null).exports,Store:Object(f.a)(m,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://members.cta.tech/ctaMECP",target:"_blank"}},[e("span",{staticClass:"nav-text hidden-xs-down"},[this._v("Store")]),this._v(" "),e("span",{staticClass:"icon-shopping-basket"})])}],!1,null,null,null).exports},props:{},computed:{},mounted:function(){}},O=Object(f.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"utility-nav"},[e("li",[e("Store")],1),this._v(" "),e("li",[e("Login")],1),this._v(" "),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"toggle",attrs:{"data-target":"#hamburgerModal","data-toggle":"modal",href:"/Employers.html#"}},[e("span",{staticClass:"nav-text hidden-xs-down"},[this._v(" ")]),this._v(" "),e("span",{staticClass:"icon-menu"})])])}],!1,null,null,null).exports,y=(n(105),n(30),n(23),n(14),n(54),n(106),n(53)),_=n(35);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={name:"Main",computed:w({},Object(_.c)("nav",["navItems"]),{slug:function(){return this.$route.params.slug}}),created:function(){this.buildNav()},methods:w({},Object(_.b)({fetchNav:"nav/fetch"}),{buildLink:function(t){var e=this.$route.params.slug,n=this.$route.params.subNav;return void 0===n||t.slug!==n?"".concat(this.$route.path,"/").concat(t.slug):"/".concat(e,"/").concat(n)},buildNav:function(){var t=this.navItems;void 0!==t&&0!==t.length&&void 0!==t[0]||this.fetchNav()},isCurrent:function(t){var e=this.$route,n="";if("index"!==this.$route.name&&(n=e.params.pathMatch.split("/")[0]),t===n||e.params.subPage===t)return"current-page"}})},C={name:"Nav",components:{Utility:O,Main:Object(f.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"main-nav hidden-sm-down"},t._l(t.navItems,(function(e){return n("li",{key:e.slug,class:t.isCurrent(e.slug)},[n("nuxt-link",{attrs:{to:{path:"/"+e.slug,params:{slug:e.slug,id:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),0)}),[],!1,null,null,null).exports}},x=Object(f.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"col-xs-6 col-sm-8 col-lg-9"},[e("Utility"),this._v(" "),e("Main")],1)}),[],!1,null,null,null).exports;n(41),n(43),n(42),n(31),n(32),n(331);function P(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E={name:"SubNav",data:function(){return{subNav:Array,hideOverview:Boolean}},computed:L({},Object(_.c)("nav",["navItems"]),{slug:function(){return this.$route.params.slug},display:function(){return Array.isArray(this.subNav)&&this.subNav.length>0}}),watch:{$route:function(){this.buildSubNav()}},created:function(){this.buildSubNav()},methods:L({},Object(_.b)({fetchNav:"nav/fetch"}),{buildLink:function(t){var e=M(t.parent.fields);return"/".concat(e.join("/"),"/").concat(t.slug)},buildSubNav:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,nav,path,o,l,f,a,h,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.hideOverview=!0,n=t.$route,void 0!==(r=t.navItems)&&0!==r.length&&void 0!==r[0]){e.next=9;break}return e.next=6,t.fetchNav();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=r;case 10:if(nav=e.t0,path=n.params.pathMatch.split("/"),o=path[0],void 0!==(l=nav.find((function(t){return t.slug===o})))){e.next=25;break}return e.next=17,c.a.contentful.bySlug(o);case 17:f=e.sent,a=[],t.hideOverview=!1,h=P(f.parent.fields.children);try{for(h.s();!(d=h.n()).done;)m=d.value,a.push(m.fields)}catch(t){h.e(t)}finally{h.f()}t.subNav=a,e.next=26;break;case 25:t.subNav=l.children;case 26:case"end":return e.stop()}}),e)})))()},isCurrent:function(t){var e=this.$route;if(t===e.params.pathMatch.split("/").pop()||e.params.subPage===t)return"current-page"}})},M=function t(e){var n=[],r=e.slug;return void 0!==r&&void 0!==e.parent&&(n.push(r),n.concat(t(e.parent.fields))),n},$=E,A=Object(f.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row subnav"},[n("div",{staticClass:"scrollable"},[n("ul",[t.hideOverview?n("li",{class:t.isCurrent(t.$route.params.pathMatch.split("/")[0])},[n("nuxt-link",{attrs:{to:"/"+t.$route.params.pathMatch.split("/")[0]}},[t._v("\r\n            Overview\r\n          ")])],1):t._e(),t._v(" "),t._l(t.subNav,(function(e){return n("li",{key:e.slug,class:t.isCurrent(e.slug)},[n("nuxt-link",{attrs:{to:{path:t.buildLink(e),params:{slug:e.slug,id:e.id}}}},[t._v("\r\n            "+t._s(e.name)+"\r\n          ")])],1)}))],2)])])])}),[],!1,null,null,null).exports,H={name:"Header",props:{sticky:{type:Boolean,default:!0}},components:{Logo:h,Nav:x,SubNav:A},computed:{showSticky:function(){return this.sticky?"sticky":""},isHome:function(){return"index"!==this.$route.name}}},I=Object(f.a)(H,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-section-header container-fluid",class:this.showSticky},[e("div",{staticClass:"row"},[e("Logo"),this._v(" "),e("Nav")],1),this._v(" "),this.isHome?e("SubNav"):this._e()],1)}),[],!1,null,null,null);e.a=I.exports},332:function(t,e,n){"use strict";var r=n(328);n.n(r).a},333:function(t,e,n){(e=n(76)(!1)).push([t.i,"p{padding-bottom:25px}li p{padding-bottom:0}",""]),t.exports=e},341:function(t,e,n){"use strict";n.r(e);n(19);var r=n(3),o=n(53),c=(n(105),n(30),n(23),n(14),n(54),n(35)),l=n(325),f=n(326);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m,v={renderMark:Object(o.a)({},f.MARKS.BOLD,(function(text){return"<strong>".concat(text,"</strong>")})),renderNode:Object(o.a)({},f.BLOCKS.PARAGRAPH,(function(t,e){return e(t.content)}))},O={name:"Hero",props:{hero:Object},data:function(){return{nav:Array}},computed:d({},Object(c.c)("nav",["navItems"])),created:function(){this.buildNav()},methods:d({toHtml:function(t){return Object(l.documentToHtmlString)(t,v)}},Object(c.b)({fetchNav:"nav/fetch"}),{buildNav:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var nav,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(nav=Array,n=t.navItems,!Array.isArray(n)||!n.length){e.next=6;break}nav=n,e.next=9;break;case 6:return e.next=8,t.fetchNav();case 8:nav=e.sent;case 9:t.nav=nav.slice(0,3);case 10:case"end":return e.stop()}}),e)})))()}})},y=n(10),_=Object(y.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-hero full-height home container-fluid"},[n("img",{attrs:{title:"MECP",src:t.hero.image,alt:"MECP"}}),t._v(" "),n("div",{staticClass:"content sticky-item",attrs:{id:"mission-statement"}},[n("h1",{staticClass:"title"},[n("p",{domProps:{innerHTML:t._s(t.hero.text)}})]),t._v(" "),n("br"),n("br"),t._v(" "),t.nav.length>0?n("section",[t.nav.length>0?n("div",{staticClass:"buttons container"},t._l(t.nav,(function(e){return n("div",{key:e.slug,staticClass:"col-md-6 col-lg-4"},[n("nuxt-link",{staticClass:"btn btn-primary btn-lg outline",attrs:{to:{path:"/"+e.slug,params:{slug:e.slug,id:e.id}}}},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)})),0):t._e()]):t._e()]),t._v(" "),n("a",{staticClass:"scroll-down-button icon-down-arrow",attrs:{href:"/index.html#aboutMECP"}})])}),[],!1,null,null,null).exports,j={name:"About",props:{about:Object}},w=Object(y.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"padding-top-lg",attrs:{id:"aboutMECP"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-lg-offset-3 col-lg-9"},[n("h2",[n("p",[t._v(t._s(t.about.title))])])])]),t._v(" "),n("div",{staticClass:"row padding-vertical-lg"},[n("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[n("div",{staticClass:"logo-wrapper padding-bottom-sm"},[n("img",{attrs:{src:t.about.logo,alt:""}})])]),t._v(" "),n("div",{staticClass:"col-xs-12 col-sm-6 col-md-9",domProps:{innerHTML:t._s(t.about.text)}})])])])}),[],!1,null,null,null).exports,k=(n(166),n(327)),C={renderMark:Object(o.a)({},f.MARKS.BOLD,(function(text){return"<strong>".concat(text,"</strong>")})),renderNode:(m={},Object(o.a)(m,f.BLOCKS.PARAGRAPH,(function(t,e){return 1===t.content.length&&"text"===t.content[0].nodeType&&null!==t.content[0].value.match(/^ *$/)?"":"<p>".concat(e(t.content),"</p>")})),Object(o.a)(m,f.INLINES.ENTRY_HYPERLINK,(function(t,e){return k.a.resolvers.inlines_entry_hyperlink(t,e(t.content))})),m)},x={name:"Promo",props:{widget:Object},data:function(){return{promo:Object}},mounted:function(){this.promo=this.widget.fields,this.promo.showBackgroundImage=void 0!==this.promo.backgroundImage,this.promo.backgroundImage=this.promo.showBackgroundImage?{"background-image":"url(".concat(this.promo.backgroundImage.fields.file.url,")")}:void 0,this.promo.showLearnMoreLink=void 0!==this.promo.linkedPage,this.promo.relatedContent={slug:this.promo.showLearnMoreLink?this.promo.linkedPage.fields.slug:void 0,entryId:this.promo.showLearnMoreLink?this.promo.linkedPage.sys.id:void 0},this.promo.description=Object(l.documentToHtmlString)(this.promo.description,C)}},P=(n(332),Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"padding-top-sm padding-bottom-sm",staticStyle:{"background-size":"cover"},style:t.promo.backgroundImage},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-offset-3 col-lg-9"},[n("h2",[n("p",[t._v(t._s(t.promo.title))])])])]),t._v(" "),n("div",{staticClass:"row padding-vertical-lg"},[n("div",{staticClass:"col-lg-offset-3 col-lg-9",domProps:{innerHTML:t._s(t.promo.description)}})]),t._v(" "),t.promo.showLearnMoreLink?n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-offset-6 col-sm-6 col-md-offset-8 col-md-4"},[n("nuxt-link",{staticClass:"link-button",attrs:{to:t.promo.relatedContent.slug}},[t._v("\n          Learn More\n          "),n("span",[t._v(">")])])],1)]):t._e()])])}),[],!1,null,null,null).exports),S=n(330),N=n(55),L={renderMark:Object(o.a)({},f.MARKS.BOLD,(function(text){return"<strong>".concat(text,"</strong>")})),renderNode:Object(o.a)({},f.BLOCKS.PARAGRAPH,(function(t,e){return e(t.content)}))},E={name:"Home",components:{Hero:_,About:w,Promo:P,Header:S.a},head:function(){return{script:[{src:"/js/sticky-nav.js"}]}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.contentful.getHomePageContent();case 2:return e=t.sent,t.abrupt("return",{content:e});case 4:case"end":return t.stop()}}),t)})))()},computed:{hero:function(){return{text:Object(l.documentToHtmlString)(this.content.heroText,L),image:this.content.heroImage.fields.file.url,links:[]}},about:function(){return{logo:this.content.mecpLogo.fields.file.url,title:this.content.pageTitle,text:Object(l.documentToHtmlString)(this.content.text,L)}}}},M=Object(y.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("Header",{attrs:{sticky:!1}}),this._v(" "),e("hero",{attrs:{hero:this.hero}}),this._v(" "),e("About",{attrs:{about:this.about}}),this._v(" "),this._l(this.content.promoZone,(function(t,n){return e("Promo",{key:n,attrs:{widget:t}})}))],2)}),[],!1,null,null,null);e.default=M.exports}}]);