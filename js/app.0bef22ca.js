(function(t){function e(e){for(var r,i,a=e[0],o=e[1],u=e[2],m=0,f=[];m<a.length;m++)i=a[m],s[i]&&f.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/tft-helper/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var r=n("bcc9"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],i=(n("5c0b"),n("2877")),a={},o=Object(i["a"])(a,s,c,!1,null,null,null),u=o.exports,l=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"champ-container",style:{"grid-template-columns":"repeat("+t.champWidth+", 1fr)"}},t._l(t.champs,function(e){return n("img",{key:e.key,staticClass:"champ",class:{selected:!0===t.selected[e.key]},attrs:{src:e.image},on:{click:function(n){return t.toggle(e.key)}}})}),0),n("div",{staticClass:"item-container",style:{"grid-template-columns":"repeat("+(t.itemWidth+1)+", 1fr)"}},[n("div",{staticClass:"item-column",staticStyle:{"justify-content":"flex-end"}},t._l(t.items,function(e){return n("img",{key:e.key,staticClass:"item",class:{"selected-column":!0===t.selected[e.name]},attrs:{src:e.image},on:{click:function(n){return t.toggle(e.name)}}})}),0),t._l(t.items,function(e){return n("div",{key:e.key,staticClass:"item-column",class:{"selected-column":!0===t.selected[e.name]}},[n("img",{staticClass:"item",class:{selected:!0===t.selected[e.name]},attrs:{src:e.image},on:{click:function(n){return t.toggle(e.name)}}}),t._l(e.buildsInto,function(e){return n("img",{key:e.name,staticClass:"advanced-item",class:{selected:!0===t.selected[e.name]},attrs:{src:e.image},on:{click:function(n){return t.toggle(e.name)}}})})],2)})],2)])},f=[],p=(n("ac6a"),n("456d"),n("96cf"),n("3b8d")),d=n("bc3a"),h=n.n(d),g="https://solomid-resources.s3.amazonaws.com/blitz/tft/data/",b=function(t){var e=t.url,n=t.method;return h()({url:g+e,method:n})},v={champs:function(){return b({url:"champions.json"})},classes:function(){return b({url:"classes.json"})},items:function(){return b({url:"items.json"})},origins:function(){return b({url:"origins.json"})},tiers:function(){return b({url:"tierlist.json"})}},y={name:"home",data:function(){return{champs:[],champWidth:1,selected:{},items:[],itemWidth:1}},mounted:function(){this.getChamps(),this.getItems()},methods:{toggle:function(t){this.selected[t]?this.$delete(this.selected,t):this.$set(this.selected,t,!0)},getChamps:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,n,r,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.champs();case 2:e=t.sent,this.champs=e.data,n=Object.keys(this.champs),r=n.length,n.forEach(function(t){s.champs[t].image="http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/".concat(t,".png")}),this.champWidth=Math.floor(Math.sqrt(r));case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getItems:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,n,r,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.items();case 2:e=t.sent,n=e.data,r=Object.keys(n),r.forEach(function(t){var e=n[t];e.buildsInto&&(e.image="https://solomid-resources.s3.amazonaws.com/blitz/tft/items/".concat(t,".png"),e.buildsInto=e.buildsInto.map(function(t){return{name:t,image:"https://solomid-resources.s3.amazonaws.com/blitz/tft/items/".concat(t,".png")}}),s.items.push(e))}),this.itemWidth=this.items.length;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},w=y,j=(n("21bb"),Object(i["a"])(w,m,f,!1,null,null,null)),k=j.exports;r["a"].use(l["a"]);var O=new l["a"]({routes:[{path:"/",name:"home",component:k}]});r["a"].config.productionTip=!1,new r["a"]({router:O,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(t,e,n){},bcc9:function(t,e,n){}});
//# sourceMappingURL=app.0bef22ca.js.map