(function(e){function t(t){for(var r,a,c=t[0],o=t[1],u=t[2],h=0,m=[];h<c.length;h++)a=c[h],s[a]&&m.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},s={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tft-helper/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var r=n("bcc9"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],a=(n("5c0b"),n("2877")),c={},o=Object(a["a"])(c,s,i,!1,null,null,null),u=o.exports,l=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"container"},[n("div",{staticClass:"champ-container",style:{"grid-template-columns":"repeat("+e.champWidth+", 1fr)"}},e._l(e.champs,function(t){return n("img",{key:t.key,staticClass:"champ",class:[{selected:!0===e.selected[t.key]||e.matchesGenericFilter[t.key.toLowerCase()]},{filteredType:"type"===e.matchesChampFilter[t.key.toLowerCase()]},{filteredOrigin:"origin"===e.matchesChampFilter[t.key.toLowerCase()]},{filteredBoth:"both"===e.matchesChampFilter[t.key.toLowerCase()]}],attrs:{src:t.image},on:{mouseenter:function(n){return e.setChampFilter(t.origin.concat(t.class))},mouseleave:function(t){return e.clearChampFilter()},click:function(n){return e.toggle(t.key)}}})}),0),n("div",{staticClass:"item-container",style:{"grid-template-columns":"repeat("+(e.itemWidth+1)+", 1fr)"}},[n("div",{staticClass:"item-column",staticStyle:{"justify-content":"flex-end"}},e._l(e.sortedItems,function(t){return n("img",{key:"y-axis-"+t.key,staticClass:"item",class:[{selected:e.matchesGenericFilter[t.key.toLowerCase()]},{"selected-column":!0===e.selected[t.name]}],attrs:{src:t.image},on:{click:function(n){return e.toggle(t.name)}}})}),0),e._l(e.sortedItems,function(t){return n("div",{key:"row-"+t.key,staticClass:"item-column",class:[{selected:e.matchesGenericFilter[t.key.toLowerCase()]},{"selected-column":!0===e.selected[t.name]}]},[n("img",{staticClass:"item",class:{selected:!0===e.selected[t.name]||e.matchesGenericFilter[t.key.toLowerCase()]},attrs:{src:t.image},on:{click:function(n){return e.toggle(t.name)}}}),e._l(t.buildsInto,function(t,r){return n("img",{key:"adv-item-"+t.name+"-"+r,staticClass:"advanced-item",class:{selected:!0===e.selected[t.name]||e.matchesGenericFilter[t.name.toLowerCase()]},attrs:{src:t.image},on:{click:function(n){return e.toggle(t.name)}}})})],2)})],2)]),n("div",{staticClass:"filter-container"},[n("div",[e._v("\n      Filtering by:\n    ")]),e.champFilter?n("div",[n("div",[e._v(" Class/Origin ")]),e._v("\n      "+e._s(e.champFilter)+"\n    ")]):e._e(),""!==e.genericFilter?n("div",[n("div",[e._v(" All ")]),n("div",[e._v("\n        "+e._s(e.genericFilter)+"\n      ")])]):e._e()]),n("div",{staticClass:"container"},[n("div",{staticClass:"type-container"},[n("h1",{staticClass:"class-title"},[e._v(" Classes ")]),e._l(e.potentialClasses,function(t,r){return n("div",{key:r},[n("span",{on:{mouseenter:function(t){return e.setChampFilter([r])},mouseleave:function(t){return e.clearChampFilter()}}},[e._v("\n          "+e._s(r)+" "+e._s(t)+"\n        ")]),e._l(e.classBonuses(r),function(r){return n("span",{key:r.effect,class:{reached:t>=r.needed}},[e._v("\n          ("+e._s(r.needed)+")\n          ")])})],2)})],2),n("div",{staticClass:"origin-container"},[n("h1",{staticClass:"origin-title"},[e._v(" Origins ")]),e._l(e.potentialOrigins,function(t,r){return n("div",{key:r},[n("span",{on:{mouseenter:function(t){return e.setChampFilter([r])},mouseleave:function(t){return e.clearChampFilter()}}},[e._v("\n          "+e._s(r)+" "+e._s(t)+"\n        ")]),e._l(e.originBonuses(r),function(r){return n("span",{key:r.effect,class:{reached:t>=r.needed}},[e._v("\n          ("+e._s(r.needed)+")\n          ")])})],2)})],2)])])},m=[],f=(n("f559"),n("7f7f"),n("6762"),n("2fdb"),n("7514"),n("456d"),n("ac6a"),n("96cf"),n("3b8d")),p=n("bc3a"),d=n.n(p),g="https://solomid-resources.s3.amazonaws.com/blitz/tft/data/",v=function(e){var t=e.url,n=e.method;return d()({url:g+t,method:n})},y={champs:function(){return v({url:"champions.json"})},classes:function(){return v({url:"classes.json"})},items:function(){return v({url:"items.json"})},origins:function(){return v({url:"origins.json"})},tiers:function(){return v({url:"tierlist.json"})}},C=(n("5118"),{name:"home",data:function(){return{champs:[],champWidth:1,selected:{},items:[],allItems:[],itemWidth:1,classes:{},origins:{},champFilter:void 0,genericFilter:""}},mounted:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.getChamps(),this.getItems(),this.getClasses(),this.getOrigins(),this.initKeyboardEventListener();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{potentialClasses:function(){var e=this,t={};return Object.keys(this.selectedChamps).forEach(function(n){t[e.champs[n].class]?t[e.champs[n].class]+=1:t[e.champs[n].class]=1}),t},potentialOrigins:function(){var e=this,t={};return Object.keys(this.selectedChamps).map(function(n){e.champs[n].origin.forEach(function(e){t[e]?t[e]+=1:t[e]=1})}),t},selectedItems:function(){var e=this,t=Object.assign({},this.selected);return Object.keys(t).forEach(function(n){e.champs[n]&&delete t[n]}),t},selectedChamps:function(){var e=this,t=Object.assign({},this.selected);return Object.keys(t).forEach(function(n){e.champs[n]||delete t[n]}),t},sortedItems:function(){var e=this.items.map(function(e){return e.key});console.log(e);var t=this.items.map(function(t){var n=[];return e.forEach(function(e){var r=t.key;if(e!==r){var s=t.buildsInto.find(function(t){return t.from.includes(e)});n.push(s)}else{var i=t.buildsInto.find(function(t){return t.from.every(function(t){return t===e})});n.push(i)}}),t.buildsInto=n,t});return console.log(t),this.$forceUpdate(),t},matchesGenericFilter:function(){var e=this,t={};return this.allItems.forEach(function(n){if(e.genericFilter&&e.genericFilter.length>1){console.log(n.key,n.name);var r=n.key.toLowerCase().includes(e.genericFilter.toLowerCase()),s=n.name.toLowerCase().includes(e.genericFilter.toLowerCase());r&&(t[n.key.toLowerCase()]=!0),s&&(t[n.name.toLowerCase()]=!0)}}),Object.keys(this.champs).forEach(function(n){var r=e.champs[n];if(e.genericFilter){var s=r.origin.some(function(t){return t.toLowerCase().startsWith(e.genericFilter.toLowerCase())}),i=r.class.some(function(t){return t.toLowerCase().startsWith(e.genericFilter.toLowerCase())}),a=r.name.toLowerCase().startsWith(e.genericFilter.toLowerCase());(i||s||a)&&(t[r.key.toLowerCase()]=!0)}}),t},matchesChampFilter:function(){var e=this,t={};return Object.keys(this.champs).forEach(function(n){var r=e.champs[n];if(e.champFilter){var s=r.origin.some(function(t){return e.champFilter.includes(t.toLowerCase())}),i=r.class.some(function(t){return e.champFilter.includes(t.toLowerCase())});i&&s?t[r.key.toLowerCase()]="both":i?t[r.key.toLowerCase()]="type":s&&(t[r.key.toLowerCase()]="origin")}}),t}},methods:{toggle:function(e){this.selected[e]?this.$delete(this.selected,e):this.$set(this.selected,e,!0)},getChamps:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,r,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.champs();case 2:t=e.sent,this.champs=t.data,n=Object.keys(this.champs),r=n.length,n.forEach(function(e){s.champs[e].image="http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/".concat(e,".png")}),this.champWidth=Math.floor(Math.sqrt(r));case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getItems:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,r,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.items();case 2:t=e.sent,n=t.data,r=Object.keys(n),r.forEach(function(e){var t=n[e];t.buildsInto&&(t.image="https://solomid-resources.s3.amazonaws.com/blitz/tft/items/".concat(e,".png"),t.buildsInto=t.buildsInto.map(function(e){return{name:e,from:n[e].buildsFrom,image:"https://solomid-resources.s3.amazonaws.com/blitz/tft/items/".concat(e,".png")}}),s.items.push(t)),s.allItems.push(t)}),this.itemWidth=this.items.length;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getClasses:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.classes();case 2:t=e.sent,this.classes=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getOrigins:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.origins();case 2:t=e.sent,this.origins=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),classBonuses:function(e){return this.classes[e.toLowerCase()]?this.classes[e.toLowerCase()].bonuses:[]},originBonuses:function(e){return this.origins[e.toLowerCase()]?this.origins[e.toLowerCase()].bonuses:[]},setChampFilter:function(e){this.champFilter=e},clearChampFilter:function(){this.champFilter=void 0},initKeyboardEventListener:function(){var e=this;window.addEventListener("keydown",function(t){var n=/[a-zA-Z0-9-_ ]/,r=String.fromCharCode(t.keyCode);8===t.keyCode?e.genericFilter=e.genericFilter.slice(0,e.genericFilter.length-1):27===t.keyCode?e.genericFilter="":n.test(r)&&(e.genericFilter+=t.key)})}}}),b=C,w=(n("21bb"),Object(a["a"])(b,h,m,!1,null,null,null)),k=w.exports;r["a"].use(l["a"]);var F=new l["a"]({routes:[{path:"/",name:"home",component:k}]});r["a"].config.productionTip=!1,new r["a"]({router:F,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(e,t,n){},bcc9:function(e,t,n){}});
//# sourceMappingURL=app.ac44ea2d.js.map