(this.webpackJsonpniceland=this.webpackJsonpniceland||[]).push([[0],{116:function(e,t,i){},117:function(e,t,i){},123:function(e,t,i){},124:function(e,t,i){},125:function(e,t,i){},130:function(e){e.exports=JSON.parse('{"20210818-28-00":{"project_name":"Gaea","category":"FACTORY","address":"\uace4\uc9c0\uc554\uc74d \uc624\ud5a5\ub9ac 320-1 \uc678 2","lands":[{"address":"\uc624\ud5a5\ub9ac320-1","owner":"\ub098\uc774\uc2a4\ub79c\ub4dc","buildingArea":"496.8 m2","floorArea":"496.8 m2","siteArea":"1614 m2","buildingToLandRatio":"30.99 %","floorAreaRatio":"30.99 %"},{"address":"\uc624\ud5a5\ub9ac320-12","owner":"\ub098\uc774\uc2a4\ub79c\ub4dc","buildingArea":"496.8 m2","floorArea":"496.8 m2","siteArea":"1614 m2","buildingToLandRatio":"30.99 %","floorAreaRatio":"30.99 %"},{"address":"\uc624\ud5a5\ub9ac320-13","owner":"\ub098\uc774\uc2a4\ub79c\ub4dc","buildingArea":"496.8 m2","floorArea":"496.8 m2","siteArea":"1614 m2","buildingToLandRatio":"30.99 %","floorAreaRatio":"30.99 %"}],"status":"\ub9e4\ub9e4 \ubbf8\uc644\ub8cc","price":"\ud3c9\ub2f9 350\ub9cc\uc6d0","date":"2021.08.18","represent_picture":"/Gaea/Gaea_represent.jpg","size":"\ucd1d 1400\ud3c9"}}')},131:function(e,t,i){},132:function(e,t,i){},133:function(e,t,i){},137:function(e,t,i){},139:function(e,t,i){},140:function(e,t,i){"use strict";i.r(t);var a=i(45),n=i.n(a),c=(i(116),i(71)),s=i(23),r=i(177),o=i(163),d=(i(117),i(7));function l(){return Object(d.jsx)("div",{className:"appbar-root",children:Object(d.jsx)(r.a,{position:"static",className:"appbar",children:Object(d.jsx)(o.a,{className:"toolbar",children:Object(d.jsx)("a",{href:"/",className:"logo-a",children:Object(d.jsx)("img",{alt:"logo",color:"inherit",src:"/NiceLand/logo.png",className:"logo"})})})})})}i(123);var j=i(164);function b(){return Object(d.jsx)("div",{className:"mainsection-root",children:Object(d.jsxs)("div",{className:"company_logo-div",children:[Object(d.jsx)("p",{className:"company_logo",children:"NICELAND"}),Object(d.jsxs)("div",{className:"main_buttons-div",children:[Object(d.jsx)(j.a,{href:"/NiceLand/intro_company",className:"intro_button",color:"secondary",disableRipple:!0,children:"\ud68c\uc0ac\uc18c\uac1c"}),Object(d.jsx)(j.a,{href:"/NiceLand/business_detail",className:"intro_button",color:"secondary",disableRipple:!0,children:"\uc0ac\uc5c5\uc18c\uac1c"})]})]})})}var h=i(15),u=i(167),O=i(174),x=i(168),p=i(173),m=i(165),v=i(166),f=(i(124),i(125),i(79),i(126),i(78));function g(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(i){return void console.log(i)}}var N="SAVE_BUSINESS_INFO";var _={project_name:"",address:"",status:"",price:"",date:"",represent_picture:"",size:"",category:"",lands:[{address:"",owner:"",buildingArea:"",floorArea:"",siteArea:"",buildingToLandRatio:"",floorAreaRatio:""}]},y=function(e){try{var t=window.localStorage.getItem(e);return null===t?"":JSON.parse(t)}catch(i){return void console.log(i)}}("ControlBusinessInfo")||_;var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return g("ControlBusinessInfo",t.info),t.info;default:return e}},A={animate:{transition:{staggerChildren:.1,delayChildren:1.8}}},L={initial:{x:-20,opacity:0},animate:{x:0,opacity:1,transition:{duration:.7,ease:[.6,-.05,.01,.99]}}},E={initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{duration:.7,ease:[.6,-.05,.01,.99]}}},S={initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{duration:.7,ease:[.6,-.05,.01,.99]}}},R=i(172);function I(e){var t=Object(f.b)();return Object(d.jsxs)(R.a.div,{initial:"initial",animate:"animate",className:"intro_image-div",children:[Object(d.jsx)(R.a.img,{variants:L,alt:"intro_image",src:"/NiceLand"+e.represent_picture}),Object(d.jsxs)("div",{className:"description-div",children:[Object(d.jsx)(R.a.p,{variants:E,className:"description_category",children:e.category}),Object(d.jsxs)("div",{children:[Object(d.jsx)(R.a.p,{variants:S,children:e.address}),Object(d.jsx)(R.a.p,{variants:S,children:e.date})]}),Object(d.jsx)(R.a.div,{variants:S,children:Object(d.jsx)(c.b,{to:"/NiceLand/business_detail",className:"more-button",children:Object(d.jsx)(j.a,{variant:"outlined",onClick:function(){t({type:N,info:e})},children:"More"})})})]})]})}function C(){var e=i(130);return Object(d.jsxs)("div",{className:"introduce_business_root",children:[Object(d.jsx)("div",{className:"title-div",children:Object(d.jsx)(x.a,{className:"title",children:"PROJECTS"})}),Object(d.jsx)(O.a,{scrollbar:{draggable:!0},pagination:{clickable:!0},children:Object.values(e).map((function(e){return Object(d.jsx)(u.a,{children:Object(d.jsx)(I,Object(h.a)({},e))},e.address)}))})]})}p.a.use([m.a,v.a]);var T=i(106),D=i(171),k=i(86),F=i.n(k),B=(i(131),i(92),i(132),i(133),{initial:{height:"100vh",bottom:0},animate:{height:0,transition:{when:"afterChildren",duration:.5,ease:[.87,0,.13,1]}}}),G={initial:{opacity:1},animate:{opacity:0,transition:{duration:.5,when:"afterChildren"}}},J={initial:{y:40},animate:{y:80,transition:{duration:1,ease:[.87,0,.13,1]}}};function V(){return Object(d.jsx)(R.a.div,{className:"transition-div",initial:"initial",animate:"animate",variants:B,onAnimationStart:function(){return document.body.classList.add("overflow-hidden")},onAnimationComplete:function(){return document.body.classList.remove("overflow-hidden")},children:Object(d.jsxs)(R.a.svg,{variants:G,className:"transition-svg",children:[Object(d.jsxs)("pattern",{id:"pattern",patternUnits:"userSpaceOnUse",width:750,height:800,className:"transition-text",children:[Object(d.jsx)("rect",{className:"transition-rect"}),Object(d.jsx)(R.a.rect,{variants:J,className:"transition_motion-rect"})]}),Object(d.jsx)("text",{className:"transition-text",textAnchor:"middle",x:"50%",y:"50%",style:{fill:"url(#pattern)"},children:"NICELAND"})]})})}function U(e){var t=e.children;return Object(d.jsxs)(R.a.section,{exit:{opacity:0},children:[Object(d.jsx)(V,{}),Object(d.jsx)(R.a.div,{initial:"initial",animate:"animate",variants:A,children:t})]})}i(93);var z=i(0),X=i(35),P=i(175),Y=i(178);function H(e){var t=e.path,i=Object(P.a)("/NiceLand"+t).scene;return Object(d.jsx)("primitive",{object:i})}function M(e){var t=e.path;return Object(d.jsxs)(X.a,{pixelRatio:[1,1],camera:{position:[.5,.5,2],fov:20},children:[Object(d.jsx)("ambientLight",{intensity:1}),Object(d.jsx)(z.Suspense,{fallback:null,children:Object(d.jsx)(H,{path:t})}),Object(d.jsx)(Y.a,{autoRotate:!0,enableZoom:!1})]})}i(137);var W=function(e){var t=e.embedId,i=e.width;return Object(d.jsx)(R.a.div,{variants:L,className:"video-responsive",style:{width:i},children:Object(d.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})},Z=i(58),q=Object(Z.b)({ControlBusinessInfo:w}),K=i(105),Q=i.n(K),$=Object(Z.d)(q,{},Object(Z.c)(Object(Z.a)(Q.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ee=i(77),te=i.n(ee),ie=i(76),ae=i.n(ie),ne=i(169);function ce(e){return e.lands.map((function(t){return Object(d.jsxs)(u.a,{id:"description-slide-desktop",children:[Object(d.jsx)("p",{id:"description_address-desktop",children:t.address}),Object(d.jsxs)("div",{id:"detail_description-desktop",children:[Object(d.jsx)(R.a.img,{variants:L,alt:"\ub9f5\uc774\ubbf8\uc9c0",src:"/NiceLand"+"/".concat(e.project_name,"/").concat(t.address,"_airplaneview.png")}),Object(d.jsxs)("div",{children:[Object(d.jsxs)(R.a.p,{variants:S,children:["\uac74\ucd95\uba74\uc801 : ",t.buildingArea]}),Object(d.jsxs)(R.a.p,{variants:S,children:["\uc5f0\uba74\uc801 : ",t.floorArea]}),Object(d.jsxs)(R.a.p,{variants:S,children:["\uac74\ud3d0\uc728 : ",t.buildingToLandRatio]}),Object(d.jsxs)(R.a.p,{variants:S,children:["\uc6a9\uc801\ub960 : ",t.floorAreaRatio]})]})]})]},t.address)}))}function se(){var e=$.getState().ControlBusinessInfo;return Object(d.jsx)(U,{children:Object(d.jsxs)("div",{id:"detail-div",children:[Object(d.jsx)(R.a.h1,{variants:E,children:Object(d.jsx)(x.a,{id:"detail_category",children:e.category})}),Object(d.jsx)(M,{path:"/".concat(e.project_name,"/").concat(e.project_name,".glb")}),Object(d.jsxs)(R.a.div,{id:"lands-and-video-div",variants:E,children:[Object(d.jsxs)(R.a.div,{id:"lands-div",variants:E,children:[Object(d.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(d.jsx)(x.a,{children:"LANDS"})}),Object(d.jsxs)(R.a.div,{id:"swiper-navigation-desktop",variants:E,children:[Object(d.jsx)(ne.a,{children:Object(d.jsx)(ae.a,{className:"custom_prev"})}),Object(d.jsx)(O.a,{id:"swiper-desktop",navigation:{nextEl:".custom_next",prevEl:".custom_prev"},children:ce(e)}),Object(d.jsx)(ne.a,{children:Object(d.jsx)(te.a,{className:"custom_next"})})]})]}),Object(d.jsxs)(R.a.div,{id:"video-div",variants:E,children:[Object(d.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(d.jsx)(x.a,{children:"VIDEO"})}),Object(d.jsx)(W,{embedId:"rokGy0huYEA",width:"80%"})]})]})]})})}var re=i(27);function oe(){return window.innerWidth}i(139);var de=i(170);function le(e){return e.lands.map((function(t){return Object(d.jsxs)(u.a,{id:"description-slide",children:[Object(d.jsx)("p",{children:t.address}),Object(d.jsxs)("div",{id:"detail_description",children:[Object(d.jsx)(R.a.img,{variants:L,alt:"\ub9f5\uc774\ubbf8\uc9c0",src:"/NiceLand"+"/".concat(e.project_name,"/").concat(t.address,"_airplaneview.png")}),Object(d.jsxs)("div",{children:[Object(d.jsxs)(R.a.p,{variants:S,children:["\uac74\ucd95\uba74\uc801 : ",t.buildingArea]}),Object(d.jsxs)(R.a.p,{variants:S,children:["\uc5f0\uba74\uc801 : ",t.floorArea]}),Object(d.jsxs)(R.a.p,{variants:S,children:["\uac74\ud3d0\uc728 : ",t.buildingToLandRatio]}),Object(d.jsxs)(R.a.p,{variants:S,children:["\uc6a9\uc801\ub960 : ",t.floorAreaRatio]})]})]})]},t.address)}))}function je(){var e=$.getState().ControlBusinessInfo;return Object(d.jsx)(U,{children:Object(d.jsxs)("div",{id:"detail-div",children:[Object(d.jsx)(R.a.h1,{variants:E,children:Object(d.jsx)(x.a,{id:"detail_category",children:e.category})}),Object(d.jsx)(M,{path:"/".concat(e.project_name,"/").concat(e.project_name,".glb")}),Object(d.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(d.jsx)(x.a,{children:"LANDS"})}),Object(d.jsxs)(R.a.div,{id:"swiper-navigation-mobile",variants:E,children:[Object(d.jsx)(ne.a,{children:Object(d.jsx)(ae.a,{className:"custom_prev"})}),Object(d.jsx)(O.a,{id:"swiper-mobile",navigation:{nextEl:".custom_next",prevEl:".custom_prev"},children:le(e)}),Object(d.jsx)(ne.a,{children:Object(d.jsx)(te.a,{className:"custom_next"})})]}),Object(d.jsx)(R.a.h1,{variants:E,id:"description_title-motion",children:Object(d.jsx)(x.a,{children:"VIDEO"})}),Object(d.jsx)(W,{embedId:"rokGy0huYEA",width:"80%"})]})})}p.a.use([de.a]);function be(){var e=function(){var e=Object(z.useState)(oe()),t=Object(re.a)(e,2),i=t[0],a=t[1];return Object(z.useEffect)((function(){function e(){a(oe())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}();return Object(d.jsx)(d.Fragment,{children:e>=500?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(se,{})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(je,{})})})}var he=i(176),ue=Object(T.a)({palette:{primary:{main:F.a[50]},secondary:{main:F.a[900]}}});var Oe=function(){return Object(d.jsx)(he.a,{children:Object(d.jsx)(c.a,{basename:"/NiceLand",children:Object(d.jsx)(D.a,{theme:ue,children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l,{}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/NiceLand/intro_company"}),Object(d.jsx)(s.a,{exact:!0,path:"/NiceLand/intro_businesss",children:Object(d.jsx)(C,{})}),Object(d.jsx)(s.a,{exact:!0,path:"/NiceLand/business_detail",children:Object(d.jsx)(be,{})}),Object(d.jsx)(s.a,{path:"/",children:Object(d.jsx)(b,{})})]}),Object(d.jsxs)("footer",{className:"info-footer",children:[Object(d.jsx)("p",{className:"info-text",children:"(\uc8fc) \ub098\uc774\uc2a4\ub79c\ub4dc | \uacbd\uae30\ub3c4 \uc6a9\uc778\uc2dc \ucc98\uc778\uad6c \uc678\ub300\ub85c 46-1"}),Object(d.jsx)("p",{className:"info-text",children:"\ub300\ud45c\uc774\uc0ac \uae40\ud5cc\uc2dd | T. 010-8438-1116"}),Object(d.jsx)("p",{className:"info-text",children:"\xa9 NICELAND. ALL RIGHTS RESERVED."})]})]})})})})},xe=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,179)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),c(e),s(e)}))};n.a.render(Object(d.jsx)(f.a,{store:$,children:Object(d.jsx)(Oe,{})}),document.getElementById("root")),xe()},92:function(e,t,i){}},[[140,1,2]]]);
//# sourceMappingURL=main.03c1e862.chunk.js.map