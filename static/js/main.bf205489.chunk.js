(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"city":"Aleppo","latitude":36.216667,"longitude":37.166668,"duration":"1995-2014"},{"city":"Mannheim","latitude":49.4875,"longitude":8.466,"duration":"2014-2018"},{"city":"Stuttgart","latitude":48.7758,"longitude":9.1829,"duration":"Since 2018"}]')},22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(19),r=a.n(l),o=a(6),i=a(7),s=a(9),u=a(8),m=(a(27),function(e){return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"main__content"},c.a.createElement("p",null,"Hello!",c.a.createElement("br",null)," I am Fadel Kaadan",c.a.createElement("br",null)," Frontend Developer",c.a.createElement("br",null)," Diving into the Backend world")))}),d=a(13);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createElement("title",null,"rocket"),k=c.a.createElement("path",{d:"M11.933 13.069c0 0 7.059-5.094 6.276-10.924-0.017-0.127-0.059-0.213-0.112-0.268-0.054-0.055-0.137-0.098-0.263-0.115-5.697-0.801-10.674 6.422-10.674 6.422-4.318-0.517-4.004 0.344-5.974 5.076-0.377 0.902 0.234 1.213 0.904 0.959 0.67-0.252 2.148-0.811 2.148-0.811l2.59 2.648c0 0-0.546 1.514-0.793 2.199s0.055 1.311 0.938 0.926c4.624-2.016 5.466-1.694 4.96-6.112zM12.942 7.153c-0.598-0.613-0.598-1.604 0-2.217 0.598-0.611 1.567-0.611 2.166 0s0.598 1.603 0 2.217c-0.599 0.611-1.569 0.611-2.166 0z"}),v=function(e){var t=e.svgRef,a=e.title,n=p(e,["svgRef","title"]);return c.a.createElement("svg",f({width:20,height:20,viewBox:"0 0 20 20",ref:t},n),void 0===a?b:a?c.a.createElement("title",null,a):null,k)},h=c.a.forwardRef((function(e,t){return c.a.createElement(v,f({svgRef:t},e))})),E=(a.p,a(28),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={rocketClassName:""},n.handleRocket=n.handleRocket.bind(Object(d.a)(n)),n}return Object(i.a)(a,[{key:"handleRocket",value:function(){switch(this.state.rocketClassName){case"":case"land":this.setState({rocketClassName:"launch"});break;case"launch":this.setState({rocketClassName:"land"});break;default:this.setState({rocketClassName:""})}}},{key:"render",value:function(){return c.a.createElement("div",{className:"falcon--control-panel"},c.a.createElement("button",{onClick:this.handleRocket,className:"falcon--btn"},c.a.createElement(h,{className:"falcon--icon ".concat(this.state.rocketClassName)})))}}]),a}(n.Component)),g=(a(29),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("section",{className:"section-falcon",id:"section-falcon"},c.a.createElement("div",{className:"falcon--description"},c.a.createElement("p",null,"This rocket has cutting-edge technologies. It can go to galaxies far far away and can even return back simply by clicking on its pad again.")),c.a.createElement(E,null))}}]),a}(n.Component)),y=a(10),N=function(e){var t=e.data,a=e.onClick;return t.map((function(e,t){return c.a.createElement(y.b,{key:"marker-".concat(t),longitude:e.longitude,latitude:e.latitude},c.a.createElement("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#fb3838",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){return a(e)}},c.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})))}))},O=function(e){var t=e.info,a=t.city,n=t.duration;return c.a.createElement("div",{style:{color:"black",fontSize:"12px"}},n," | ",a)},_=(a(33),a(34),a(21)),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e))._updateViewport=function(e){n.setState({viewport:e})},n._onClickMarker=function(e){n.setState({popupInfo:e})},n.state={viewport:{latitude:44.0165,longitude:21.0059,zoom:3.7,bearing:0,pitch:0},popupInfo:null},n}return Object(i.a)(a,[{key:"_renderPopup",value:function(){var e=this,t=this.state.popupInfo;return t&&n.createElement(y.d,{tipSize:5,anchor:"top",longitude:t.longitude,latitude:t.latitude,closeOnClick:!1,onClose:function(){return e.setState({popupInfo:null})}},n.createElement(O,{info:t}))}},{key:"render",value:function(){var e=this.state.viewport;return n.createElement("div",{className:"map"},n.createElement(y.f,Object.assign({},e,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/dark-v9",onViewportChange:this._updateViewport,mapboxApiAccessToken:"pk.eyJ1IjoiZmFkZWxldXMiLCJhIjoiY2s5c2diNTJmMDFuczNlcDg0Z2h6NXJ4biJ9.qiTEmy01tD357-vgOxZxxQ"}),n.createElement(N,{data:_,onClick:this._onClickMarker}),this._renderPopup(),n.createElement("div",{className:"fullscreenControlStyle"},n.createElement(y.a,null)),n.createElement("div",{className:"navStyle"},n.createElement(y.c,null)),n.createElement("div",{className:"scaleControlStyle"},n.createElement(y.e,null))))}}]),a}(n.Component),C=(a(35),function(e){var t=e.bookClassName,a=e.cover,n=e.backcover;return c.a.createElement("div",{className:"book ".concat(t,"}")},c.a.createElement("div",{className:"book__side book__side--front ".concat(a)}),c.a.createElement("div",{className:"book__side book__side--back ".concat(n)},c.a.createElement("h3",{className:"rating"},"\u2605\u2605\u2605\u2605\u2605"),c.a.createElement("p",null,'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure natus delectus accusamus soluta voluptatem nam Aliquid, dolor?"')))}),w=(a(36),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"bookshelf"},c.a.createElement("h2",{className:"heading"},"Book reviews"),c.a.createElement("div",{className:"books"},c.a.createElement(C,{bookClassName:"book--1",cover:"book__side--front-1",backcover:"book__side--back-1"}),c.a.createElement(C,{bookClassName:"book--2",cover:"book__side--front-2",backcover:"book__side--back-2"}),c.a.createElement(C,{bookClassName:"book--3",cover:"book__side--front-3",backcover:"book__side--back-3"})))}}]),a}(n.Component)),S=(a(37),a(15)),x=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__links"},c.a.createElement("a",{href:"https://twitter.com/fadeleus",className:"footer__links--twitter"},c.a.createElement(S.c,null)),c.a.createElement("a",{href:"mailto:fadelkaadan@gmail.com",className:"footer__links--email"},c.a.createElement(S.a,null)),c.a.createElement("a",{href:"https://github.com/fadelkaadan",className:"footer__links--github"},c.a.createElement(S.b,null))),c.a.createElement("p",{className:"legal"},"\xa9 Built by Fadel Kaadan"))},I=(a(38),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(m,null),c.a.createElement(g,null),c.a.createElement(j,null),c.a.createElement(w,null),c.a.createElement(x,null))}}]),a}(n.Component));r.a.render(c.a.createElement(I,null),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bf205489.chunk.js.map