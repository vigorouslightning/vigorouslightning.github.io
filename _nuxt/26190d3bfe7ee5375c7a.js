(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{327:function(t,e,n){"use strict";var r={urlBuilder:function(t){var e=function t(e,n){var r=e.slug;return void 0!==r&&(n.unshift(r),"home"!==e.parent.fields.slug&&t(e.parent.fields,n)),n}(t,[]);return"/".concat(e.join("/"))}},l=(n(75),{inlines_entry_hyperlink:function(t,content){var path=o.url.urlBuilder(t.data.target.fields);return'<a href="'.concat(path,'">').concat(content,"</a>")}}),o=e.a={url:r,components:{getComponent:function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()})).replace(" ","")},getWidgetComponent:function(t){return"Widget"===(t=this.getComponent(t))?"GenericWidget":t}},resolvers:l}},329:function(t,e,n){var content=n(334);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("87f6c976",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(19);var r,l=n(3),o=n(54),c={name:"Logo",data:function(){return{logo:String}},created:(r=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,o.a.contentful.getAsset("1kXoWuRfkHuil2lv3XMmIo");case 3:this.logo=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},d=n(10),f=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-6 col-sm-4 col-lg-3 logo"},[e("a",{staticClass:"sticky-logo",attrs:{href:"/"}},[e("img",{staticClass:"pull-left",attrs:{src:this.logo,alt:""}})])])}),[],!1,null,null,null).exports,h={name:"Login"},m={name:"Store"},v={name:"UtilityNav",components:{Login:Object(d.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://ctaportal.cobaltsaas.com/Login.aspx?ReturnUrl=/",target:"_blank"}},[e("span",{staticClass:"nav-text hidden-xs-down"},[this._v("Login")]),this._v(" "),e("span",{staticClass:"icon-profile"})])}],!1,null,null,null).exports,Store:Object(d.a)(m,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://members.cta.tech/ctaMECP",target:"_blank"}},[e("span",{staticClass:"nav-text hidden-xs-down"},[this._v("Store")]),this._v(" "),e("span",{staticClass:"icon-shopping-basket"})])}],!1,null,null,null).exports},props:{},computed:{},mounted:function(){}},_=Object(d.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"utility-nav"},[e("li",[e("Store")],1),this._v(" "),e("li",[e("Login")],1),this._v(" "),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"toggle",attrs:{"data-target":"#hamburgerModal","data-toggle":"modal",href:"/Employers.html#"}},[e("span",{staticClass:"nav-text hidden-xs-down"},[this._v(" ")]),this._v(" "),e("span",{staticClass:"icon-menu"})])])}],!1,null,null,null).exports,w=(n(31),{}),x={name:"Nav",components:{Utility:_,Main:Object(d.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"main-nav hidden-sm-down"},t._l(t.navItems,(function(e){return n("li",{key:e.slug,class:t.isCurrent(e.slug)},[n("router-link",{attrs:{to:{path:"/"+e.slug,params:{slug:e.slug,id:e.id}}}},[t._v("\n      "+t._s(e.name)+"\n    ")])],1)})),0)}),[],!1,null,null,null).exports}},y={name:"SubNav"},E={name:"Header",components:{Logo:f,Nav:Object(d.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"col-xs-6 col-sm-8 col-lg-9"},[e("Utility"),this._v(" "),e("Main")],1)}),[],!1,null,null,null).exports,SubNav:Object(d.a)(y,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row subnav"},[e("div",{staticClass:"scrollable"})])])}],!1,null,null,null).exports}},C=Object(d.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-section-header container-fluid sticky"},[e("div",{staticClass:"row"},[e("Logo"),this._v(" "),e("Nav")],1),this._v(" "),e("SubNav")],1)}),[],!1,null,null,null);e.a=C.exports},333:function(t,e,n){"use strict";var r=n(329);n.n(r).a},334:function(t,e,n){(e=n(76)(!1)).push([t.i,"p{white-space:pre-wrap}",""]),t.exports=e},335:function(t,e){},336:function(t,e,n){"use strict";n.r(e);n(106),n(55),n(78),n(19);var r,l,o=n(3),c=(n(107),{name:"StudyGuide",props:{guide:Object},computed:{href:function(){return"https://members.cta.tech/ctaMerchandiseDetail/?id=".concat(this.guide.fields.link)}}}),d=n(10),f=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-6 col-lg-3 padding-bottom-sm text-xs-center text-sm-left"},[n("div",{staticClass:"image-wrapper"},[n("img",{staticClass:"img-fluid",attrs:{src:t.guide.fields.coverImage.fields.file.url,alt:t.guide.fields.title}})]),t._v(" "),n("div",{staticClass:"guide-title"},[t._v("\n    "+t._s(t.guide.fields.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"price"},[n("a",{attrs:{href:t.href}},[t._v("Member Price: $"+t._s(t.guide.fields.memberPrice)+".00")])]),t._v(" "),n("div",{staticClass:"price"},[n("a",{attrs:{href:t.href}},[t._v("Nonmember Price: $"+t._s(t.guide.fields.nonmemberPrice)+".00")])])])}),[],!1,null,null,null).exports,h=n(327),m={name:"StudyGuides",components:{StudyGuide:f},props:{widget:Object},data:function(){return{guides:Array}},mounted:function(){this.guides=this.widget.fields.widgetZone},methods:{getComponent:function(t){var e=t.sys.contentType.sys.id;return h.a.components.getWidgetComponent(e)}}},v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._l(t.guides,(function(e,r){return n(t.getComponent(e),{key:r,tag:"component",attrs:{guide:e}})})),1)}),[],!1,null,null,null).exports,_=n(330),w=n(53),x=n(325),y=n(326),E={renderMark:Object(w.a)({},y.MARKS.BOLD,(function(text){return"<strong>".concat(text,"</strong>")})),renderNode:(r={},Object(w.a)(r,y.INLINES.EMBEDDED_ENTRY,(function(t,e){var n=t.data.target.fields;switch(t.data.target.sys.contentType.sys.id){case"floatedImage":return'<img alt="" max-width="100%" src="'.concat(n.image.fields.file.url,'" style="float: ').concat(n.floatDirection,'; margin: 10px 15px;">')}})),Object(w.a)(r,y.INLINES.ENTRY_HYPERLINK,(function(t,e){return h.a.resolvers.inlines_entry_hyperlink(t,e(t.content))})),Object(w.a)(r,y.INLINES.ASSET_HYPERLINK,(function(t,e){return'<a href="'.concat(t.data.target.fields.file.url,'">').concat(e(t.content),"</a>")})),r)},C={name:"BlueButton",props:{widget:Object},computed:{title:function(){return this.widget.fields.title},text:function(){return Object(x.documentToHtmlString)(this.widget.fields.text,E)},href:function(){var t=this.widget.fields;if(void 0!==t.callToAction)return t.callToAction[0].fields.slug;if(void 0!==t.internalAsset)return t.internalAsset.fields.file.url;if(void 0!==t.externalUrl)return t.ExternalUrl;throw"Not handled or no link present"},target:function(){return this.widget.fields.openInNewWindow?"_blank":void 0},buttonText:function(){var t=this.widget.fields.buttonText;return void 0===t?"LEARN MORE":t.toUpperCase()}}},O=Object(d.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.title?n("h3",[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-offset-6 col-sm-6 col-md-offset-8 col-md-4"},[n("a",{staticClass:"link-button",attrs:{href:t.href,target:t.target}},[t._v(t._s(t.buttonText)),n("span",[t._v(">")])])])])])}),[],!1,null,null,null).exports,j={renderMark:Object(w.a)({},y.MARKS.BOLD,(function(text){return"<strong>".concat(text,"</strong>")})),renderNode:(l={},Object(w.a)(l,y.INLINES.EMBEDDED_ENTRY,(function(t,e){var n=t.data.target.fields;switch(t.data.target.sys.contentType.sys.id){case"floatedImage":return'<img alt="" max-width="100%" src="'.concat(n.image.fields.file.url,'" style="float: ').concat(n.floatDirection,'; margin: 10px 15px;">')}})),Object(w.a)(l,y.INLINES.ENTRY_HYPERLINK,(function(t,e){return h.a.resolvers.inlines_entry_hyperlink(t,e(t.content))})),Object(w.a)(l,y.INLINES.ASSET_HYPERLINK,(function(t,e){return'<a href="'.concat(t.data.target.fields.file.url,'">').concat(e(t.content),"</a>")})),l)},S={name:"Copy",props:{widget:Object},computed:{title:function(){return this.widget.fields.title},text:function(){return Object(x.documentToHtmlString)(this.widget.fields.text,j)}}},N=(n(333),n(335)),k=n.n(N),L=Object(d.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h3",[this._v(this._s(this.title))]),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.text)}})])}),[],!1,null,null,null);"function"==typeof k.a&&k()(L);var I=L.exports,T={name:"EmbeddedVido",props:{widget:Object},computed:{width:function(){return this.widget.fields.width?"".concat(this.widget.fields.width,"px"):"100%"},height:function(){return this.widget.fields.height?"".concat(this.widget.fields.height,"px"):"100%"},fullscreen:function(){return this.widget.fields.allowFullScreen?"allowfullscreen":""},allowFullscreen:function(){return this.widget.fields.allowFullScreen}}},$=Object(d.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticStyle:{position:"relative",display:"block","max-width":"600px"}},[e("div",{staticStyle:{"padding-top":"56.25%"}},[e("iframe",{staticStyle:{position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px"},attrs:{frameborder:"0",height:this.height,src:this.widget.fields.link,title:this.widget.fields.name,width:this.width,allow:this.fullscreen,mozallowfullscreen:this.allowFullscreen,webkitallowfullscreen:this.allowFullscreen}})])])])}),[],!1,null,null,null).exports,M=(n(24),{name:"FormStack",props:{widget:Object},computed:{width:function(){return this.widget.fields.width?"".concat(this.widget.fields.width,"px"):"100%"},height:function(){return this.widget.fields.height?"".concat(this.widget.fields.height,"px"):"100%"},src:function(){return"https://cea.formstack.com/forms/".concat(this.widget.fields.slug)},name:function(){return this.widget.fields.name}}}),R=Object(d.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("iframe",{attrs:{frameborder:"0",height:this.height,width:this.width,src:this.src,title:this.name}})])}),[],!1,null,null,null).exports,A={name:"FloatedImage",props:{widget:Object},computed:{top:function(){return this.widget.fields.top?"".concat(this.widget.fields.top,"px"):"0px"},right:function(){return this.widget.fields.right?"".concat(this.widget.fields.right,"px"):"0px"},bottom:function(){return this.widget.fields.bottom?"".concat(this.widget.fields.bottom,"px"):"0px"},left:function(){return this.widget.fields.left?"".concat(this.widget.fields.left,"px"):"0px"},src:function(){return this.widget.fields.image.fields.file.url},float:function(){return this.widget.fields.float}}},P=Object(d.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{staticClass:"responsive-image",staticStyle:{float:"left",margin:"10px 15px"},attrs:{src:this.src}})])}),[],!1,null,null,null).exports,H={renderMark:Object(w.a)({},y.MARKS.BOLD,(function(text){return"<strong>".concat(text,"</strong>")})),renderNode:Object(w.a)({},y.BLOCKS.PARAGRAPH,(function(t,e){return e(t.content)}))},D={name:"Testimonial",props:{widget:Object},computed:{quote:function(){return"&#8220;".concat(Object(x.documentToHtmlString)(this.widget.fields.quote,H),"&#8221;")},source:function(){return this.widget.fields.quotedSource},title:function(){return this.widget.fields.title},company:function(){return this.widget.fields.company}}},B=Object(d.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("em",{domProps:{innerHTML:t._s(t.quote)}}),t._v("—"+t._s(t.source)+", "+t._s(t.title)+", "+t._s(t.company)),n("br")])}),[],!1,null,null,null).exports,F=n(54),K={name:"page",components:{LayoutStudyGuideList:v,Header:_.a,CallToAction:O,Copy:I,EmbeddedVideo:$,FormStack:R,FloatedImage:P,Testimonial:B},data:function(){return{content:Object}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,(r=n.pathMatch).includes("/")&&(l=r.split("/"),r=l[l.length-1]),e.next=5,F.a.contentful.bySlug(r);case 5:return o=e.sent,e.abrupt("return",{content:o});case 7:case"end":return e.stop()}}),e)})))()},methods:{getComponent:function(t){var e=t.sys.contentType.sys.id;return h.a.components.getWidgetComponent(e)}}},U=Object(d.a)(K,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("div",{staticClass:"mainBlock"},[n("section",{staticClass:"container padding-top-lg subPage"},[n("h2",[n("p"),t._v(" "),n("p",[t._v(t._s(t.content.title))]),t._v(" "),n("p")])]),t._v(" "),n("section",{staticClass:"container padding-bottom-lg"},[n("div",{staticClass:"padding-vertical-lg"},t._l(t.content.widgetZone,(function(e,r){return n(t.getComponent(e),{key:r,tag:"component",attrs:{widget:e}})})),1)])])])])}),[],!1,null,"61779256",null);e.default=U.exports}}]);