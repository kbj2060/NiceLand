(this.webpackJsonpniceland=this.webpackJsonpniceland||[]).push([[0],{116:function(e,t,i){},117:function(e,t,i){},125:function(e,t,i){},126:function(e,t,i){},127:function(e,t,i){},130:function(e){e.exports=JSON.parse('{"20210818-28-00":{"project_name":"Gaea","category":"FACTORY","address":"\uace4\uc9c0\uc554\uc74d \uc624\ud5a5\ub9ac 320-1 \uc678 2","lands":[{"address":"\uc624\ud5a5\ub9ac320-1","owner":"\ub098\uc774\uc2a4\ub79c\ub4dc","buildingArea":"496.8 m2","floorArea":"496.8 m2","siteArea":"1614 m2","buildingToLandRatio":"30.99 %","floorAreaRatio":"30.99 %"},{"address":"\uc624\ud5a5\ub9ac320-12","owner":"\ub098\uc774\uc2a4\ub79c\ub4dc","buildingArea":"496.8 m2","floorArea":"496.8 m2","siteArea":"1614 m2","buildingToLandRatio":"30.99 %","floorAreaRatio":"30.99 %"},{"address":"\uc624\ud5a5\ub9ac320-13","owner":"\ub098\uc774\uc2a4\ub79c\ub4dc","buildingArea":"496.8 m2","floorArea":"496.8 m2","siteArea":"1614 m2","buildingToLandRatio":"30.99 %","floorAreaRatio":"30.99 %"}],"status":"\ub9e4\ub9e4 \ubbf8\uc644\ub8cc","price":"\ud3c9\ub2f9 350\ub9cc\uc6d0","date":"2021.08.18","represent_picture":"/Gaea/Gaea_represent.jpg","size":"\ucd1d 1400\ud3c9"}}')},131:function(e,t,i){},132:function(e,t,i){},133:function(e,t,i){},137:function(e,t,i){},139:function(e,t,i){},140:function(e,t,i){"use strict";i.r(t);var a,n=i(46),s=i.n(n),c=(i(116),i(42)),r=i(23),o=i(177),d=i(163);!function(e){e.MAIN="/",e.INTRO_BUSINESS="/intro_business",e.DETAIL_BUSINESS="/detail_business",e.INTRO_COMPANY="/intro_company"}(a||(a={}));i(117);var l=i(7);function j(){return Object(l.jsx)("div",{className:"appbar-root",children:Object(l.jsx)(o.a,{position:"static",className:"appbar",children:Object(l.jsx)(d.a,{className:"toolbar",children:Object(l.jsx)(c.b,{to:a.MAIN,className:"logo-a",children:Object(l.jsx)("img",{alt:"logo",color:"inherit",src:"/NiceLand/logo.png",className:"logo"})})})})})}i(125);var b=i(164);function O(){return Object(l.jsx)("div",{className:"mainsection-root",children:Object(l.jsxs)("div",{className:"company_logo-div",children:[Object(l.jsx)("p",{className:"company_logo",children:"NICELAND"}),Object(l.jsxs)("div",{className:"main_buttons-div",children:[Object(l.jsx)(b.a,{className:"intro_button",color:"secondary",disableRipple:!0,children:Object(l.jsx)(c.b,{className:"intro_button",to:a.INTRO_COMPANY,children:"\ud68c\uc0ac\uc18c\uac1c"})}),Object(l.jsx)(b.a,{className:"intro_button",color:"secondary",disableRipple:!0,children:Object(l.jsx)(c.b,{className:"intro_button",to:a.INTRO_BUSINESS,children:"\uc0ac\uc5c5\uc18c\uac1c"})})]})]})})}var h=i(15),u=i(167),x=i(174),p=i(168),m=i(173),v=i(165),f=i(166),g=(i(126),i(127),i(79),i(128),i(78));function N(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(i){return void console.log(i)}}var _="SAVE_BUSINESS_INFO";var y={project_name:"",address:"",status:"",price:"",date:"",represent_picture:"",size:"",category:"",lands:[{address:"",owner:"",buildingArea:"",floorArea:"",siteArea:"",buildingToLandRatio:"",floorAreaRatio:""}]},A=function(e){try{var t=window.localStorage.getItem(e);return null===t?"":JSON.parse(t)}catch(i){return void console.log(i)}}("ControlBusinessInfo")||y;var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return N("ControlBusinessInfo",t.info),t.info;default:return e}},w={animate:{transition:{staggerChildren:.1,delayChildren:1.8}}},I={initial:{x:-20,opacity:0},animate:{x:0,opacity:1,transition:{duration:.7,ease:[.6,-.05,.01,.99]}}},E={initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{duration:.7,ease:[.6,-.05,.01,.99]}}},L={initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{duration:.7,ease:[.6,-.05,.01,.99]}}},R=i(172);function C(e){var t=Object(g.b)();return Object(l.jsxs)(R.a.div,{initial:"initial",animate:"animate",className:"intro_image-div",children:[Object(l.jsx)(R.a.img,{variants:I,alt:"intro_image",src:"/NiceLand"+e.represent_picture}),Object(l.jsxs)("div",{className:"description-div",children:[Object(l.jsx)(R.a.p,{variants:E,className:"description_category",children:e.category}),Object(l.jsxs)("div",{children:[Object(l.jsx)(R.a.p,{variants:L,children:e.address}),Object(l.jsx)(R.a.p,{variants:L,children:e.date})]}),Object(l.jsx)(R.a.div,{variants:L,children:Object(l.jsx)(c.b,{to:a.DETAIL_BUSINESS,className:"more-button",children:Object(l.jsx)(b.a,{variant:"outlined",onClick:function(){t({type:_,info:e})},children:"More"})})})]})]})}function T(){var e=i(130);return Object(l.jsxs)("div",{className:"introduce_business_root",children:[Object(l.jsx)("div",{className:"title-div",children:Object(l.jsx)(p.a,{className:"title",children:"PROJECTS"})}),Object(l.jsx)(x.a,{scrollbar:{draggable:!0},pagination:{clickable:!0},children:Object.values(e).map((function(e){return Object(l.jsx)(u.a,{children:Object(l.jsx)(C,Object(h.a)({},e))},e.address)}))})]})}m.a.use([v.a,f.a]);var B=i(106),k=i(171),D=i(86),F=i.n(D),U=(i(131),i(92),i(132),i(133),{initial:{height:"100vh",bottom:0},animate:{height:0,transition:{when:"afterChildren",duration:.5,ease:[.87,0,.13,1]}}}),M={initial:{opacity:1},animate:{opacity:0,transition:{duration:.5,when:"afterChildren"}}},G={initial:{y:40},animate:{y:80,transition:{duration:1,ease:[.87,0,.13,1]}}};function J(){return Object(l.jsx)(R.a.div,{className:"transition-div",initial:"initial",animate:"animate",variants:U,onAnimationStart:function(){return document.body.classList.add("overflow-hidden")},onAnimationComplete:function(){return document.body.classList.remove("overflow-hidden")},children:Object(l.jsxs)(R.a.svg,{variants:M,className:"transition-svg",children:[Object(l.jsxs)("pattern",{id:"pattern",patternUnits:"userSpaceOnUse",width:750,height:800,className:"transition-text",children:[Object(l.jsx)("rect",{className:"transition-rect"}),Object(l.jsx)(R.a.rect,{variants:G,className:"transition_motion-rect"})]}),Object(l.jsx)("text",{className:"transition-text",textAnchor:"middle",x:"50%",y:"50%",style:{fill:"url(#pattern)"},children:"NICELAND"})]})})}function P(e){var t=e.children;return Object(l.jsxs)(R.a.section,{exit:{opacity:0},children:[Object(l.jsx)(J,{}),Object(l.jsx)(R.a.div,{initial:"initial",animate:"animate",variants:w,children:t})]})}i(93);var Y=i(0),z=i(35),V=i(175),H=i(178);function W(e){var t=e.path,i=Object(V.a)("/NiceLand"+t).scene;return Object(l.jsx)("primitive",{object:i})}function Z(e){var t=e.path;return Object(l.jsxs)(z.a,{pixelRatio:[1,1],camera:{position:[.5,.5,2],fov:20},children:[Object(l.jsx)("ambientLight",{intensity:1}),Object(l.jsx)(Y.Suspense,{fallback:null,children:Object(l.jsx)(W,{path:t})}),Object(l.jsx)(H.a,{autoRotate:!0,enableZoom:!1})]})}i(137);var q=function(e){var t=e.embedId,i=e.width;return Object(l.jsx)(R.a.div,{variants:I,className:"video-responsive",style:{width:i},children:Object(l.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},K=i(59),Q=Object(K.b)({ControlBusinessInfo:S}),X=i(105),$=i.n(X),ee=Object(K.d)(Q,{},Object(K.c)(Object(K.a)($.a))),te=i(77),ie=i.n(te),ae=i(76),ne=i.n(ae),se=i(169);function ce(e){return e.lands.map((function(t){return Object(l.jsxs)(u.a,{id:"description-slide-desktop",children:[Object(l.jsx)("p",{id:"description_address-desktop",children:t.address}),Object(l.jsxs)("div",{id:"detail_description-desktop",children:[Object(l.jsx)(R.a.img,{variants:I,alt:"\ub9f5\uc774\ubbf8\uc9c0",src:"/NiceLand"+"/".concat(e.project_name,"/").concat(t.address,"_airplaneview.png")}),Object(l.jsxs)("div",{children:[Object(l.jsxs)(R.a.p,{variants:L,children:["\uac74\ucd95\uba74\uc801 : ",t.buildingArea]}),Object(l.jsxs)(R.a.p,{variants:L,children:["\uc5f0\uba74\uc801 : ",t.floorArea]}),Object(l.jsxs)(R.a.p,{variants:L,children:["\uac74\ud3d0\uc728 : ",t.buildingToLandRatio]}),Object(l.jsxs)(R.a.p,{variants:L,children:["\uc6a9\uc801\ub960 : ",t.floorAreaRatio]})]})]})]},t.address)}))}function re(){var e=ee.getState().ControlBusinessInfo;return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{id:"detail-div-desktop",children:[Object(l.jsx)(R.a.h1,{variants:E,children:Object(l.jsx)(p.a,{id:"detail_category-desktop",children:e.category})}),Object(l.jsx)(Z,{path:"/".concat(e.project_name,"/").concat(e.project_name,".glb")}),Object(l.jsxs)(R.a.div,{id:"lands-and-video-div",variants:E,children:[Object(l.jsxs)(R.a.div,{id:"lands-div",variants:E,children:[Object(l.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(l.jsx)(p.a,{children:"LANDS"})}),Object(l.jsxs)(R.a.div,{id:"swiper-navigation-desktop",variants:E,children:[Object(l.jsx)(se.a,{children:Object(l.jsx)(ne.a,{className:"custom_prev"})}),Object(l.jsx)(x.a,{id:"swiper-desktop",navigation:{nextEl:".custom_next",prevEl:".custom_prev"},children:ce(e)}),Object(l.jsx)(se.a,{children:Object(l.jsx)(ie.a,{className:"custom_next"})})]})]}),Object(l.jsxs)(R.a.div,{id:"video-div",variants:E,children:[Object(l.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(l.jsx)(p.a,{children:"VIDEO"})}),Object(l.jsx)(q,{embedId:"rokGy0huYEA",width:"80%"})]})]})]})})}var oe=i(27);function de(){return window.innerWidth}i(139);var le=i(170);function je(e){return e.lands.map((function(t){return Object(l.jsxs)(u.a,{id:"description-slide",children:[Object(l.jsx)("p",{children:t.address}),Object(l.jsxs)("div",{id:"detail_description",children:[Object(l.jsx)(R.a.img,{variants:I,alt:"\ub9f5\uc774\ubbf8\uc9c0",src:"/NiceLand"+"/".concat(e.project_name,"/").concat(t.address,"_airplaneview.png")}),Object(l.jsxs)("div",{children:[Object(l.jsxs)(R.a.p,{variants:L,children:["\uac74\ucd95\uba74\uc801 : ",t.buildingArea]}),Object(l.jsxs)(R.a.p,{variants:L,children:["\uc5f0\uba74\uc801 : ",t.floorArea]}),Object(l.jsxs)(R.a.p,{variants:L,children:["\uac74\ud3d0\uc728 : ",t.buildingToLandRatio]}),Object(l.jsxs)(R.a.p,{variants:L,children:["\uc6a9\uc801\ub960 : ",t.floorAreaRatio]})]})]})]},t.address)}))}function be(){var e=ee.getState().ControlBusinessInfo;return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{id:"detail-div",children:[Object(l.jsx)(R.a.h1,{variants:E,children:Object(l.jsx)(p.a,{id:"detail_category",children:e.category})}),Object(l.jsx)(Z,{path:"/".concat(e.project_name,"/").concat(e.project_name,".glb")}),Object(l.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(l.jsx)(p.a,{children:"LANDS"})}),Object(l.jsxs)(R.a.div,{id:"swiper-navigation-mobile",variants:E,children:[Object(l.jsx)(se.a,{children:Object(l.jsx)(ne.a,{className:"custom_prev"})}),Object(l.jsx)(x.a,{id:"swiper-mobile",navigation:{nextEl:".custom_next",prevEl:".custom_prev"},children:je(e)}),Object(l.jsx)(se.a,{children:Object(l.jsx)(ie.a,{className:"custom_next"})})]}),Object(l.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(l.jsx)(p.a,{children:"VIDEO"})}),Object(l.jsx)(q,{embedId:"rokGy0huYEA",width:"80%"})]})})}function Oe(){var e=function(){var e=Object(Y.useState)(de()),t=Object(oe.a)(e,2),i=t[0],a=t[1];return Object(Y.useEffect)((function(){function e(){a(de())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}();return Object(l.jsx)(l.Fragment,{children:e>=500?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(re,{})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(be,{})})})}m.a.use([le.a]);var he=i(176),ue=Object(B.a)({palette:{primary:{main:F.a[50]},secondary:{main:F.a[900]}}});var xe=function(){return Object(l.jsx)(he.a,{children:Object(l.jsx)(c.a,{children:Object(l.jsx)(k.a,{theme:ue,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(r.a,{exact:!0,path:a.MAIN,children:Object(l.jsx)(O,{})}),Object(l.jsx)(r.a,{path:a.INTRO_COMPANY}),Object(l.jsx)(r.a,{path:a.INTRO_BUSINESS,children:Object(l.jsx)(T,{})}),Object(l.jsx)(r.a,{path:a.DETAIL_BUSINESS,children:Object(l.jsx)(Oe,{})}),Object(l.jsxs)("footer",{className:"info-footer",children:[Object(l.jsx)("p",{className:"info-text",children:"(\uc8fc) \ub098\uc774\uc2a4\ub79c\ub4dc | \uacbd\uae30\ub3c4 \uc6a9\uc778\uc2dc \ucc98\uc778\uad6c \uc678\ub300\ub85c 46-1"}),Object(l.jsx)("p",{className:"info-text",children:"\ub300\ud45c\uc774\uc0ac \uae40\ud5cc\uc2dd | T. 010-8438-1116"}),Object(l.jsx)("p",{className:"info-text",children:"\xa9 NICELAND. ALL RIGHTS RESERVED."})]})]})})})})},pe=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,179)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};s.a.render(Object(l.jsx)(g.a,{basename:"/",store:ee,children:Object(l.jsx)(xe,{})}),document.getElementById("root")),pe()},92:function(e,t,i){}},[[140,1,2]]]);
//# sourceMappingURL=main.62250dd8.chunk.js.map