(function(e){function t(t){for(var s,a,c=t[0],o=t[1],u=t[2],f=0,m=[];f<c.length;f++)a=c[f],r[a]&&m.push(r[a][0]),r[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},r={app:0},i=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tft-helper/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var s=n("bcc9"),r=n.n(s);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],a=(n("5c0b"),n("2877")),c={},o=Object(a["a"])(c,r,i,!1,null,null,null),u=o.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"container"},[n("div",{staticClass:"champ-container",style:{"grid-template-columns":"repeat("+e.champWidth+", 1fr)"}},e._l(e.champs,function(t){return n("img",{key:t.key,staticClass:"champ",class:{selected:!0===e.selected[t.key]},attrs:{src:t.image},on:{click:function(n){return e.toggle(t.key)}}})}),0),n("div",{staticClass:"item-container",style:{"grid-template-columns":"repeat("+(e.itemWidth+1)+", 1fr)"}},[n("div",{staticClass:"item-column",staticStyle:{"justify-content":"flex-end"}},e._l(e.sortedItems,function(t){return n("img",{key:"y-axis-"+t.key,staticClass:"item",class:{"selected-column":!0===e.selected[t.name]},attrs:{src:t.image},on:{click:function(n){return e.toggle(t.name)}}})}),0),e._l(e.sortedItems,function(t){return n("div",{key:"row-"+t.key,staticClass:"item-column",class:{"selected-column":!0===e.selected[t.name]}},[n("img",{staticClass:"item",class:{selected:!0===e.selected[t.name]},attrs:{src:t.image},on:{click:function(n){return e.toggle(t.name)}}}),e._l(t.buildsInto,function(t,s){return n("img",{key:"adv-item-"+t.name+"-"+s,staticClass:"advanced-item",class:{selected:!0===e.selected[t.name]},attrs:{src:t.image},on:{click:function(n){return e.toggle(t.name)}}})})],2)})],2)]),n("div",{staticClass:"container"},[n("div",{staticClass:"type-container"},[n("h1",[e._v(" Classes ")]),e._l(e.potentialClasses,function(t,s){return n("div",{key:s},[n("span",[e._v(" "+e._s(s)+" "+e._s(t)+" ")]),e._l(e.classBonuses(s),function(s){return n("span",{key:s.effect,class:{reached:t>=s.needed}},[e._v("\n          ("+e._s(s.needed)+")\n          ")])})],2)})],2),n("div",{staticClass:"origin-container"},[n("h1",[e._v(" Origins ")]),e._l(e.potentialOrigins,function(t,s){return n("div",{key:s},[n("span",[e._v(" "+e._s(s)+" "+e._s(t)+" ")]),e._l(e.originBonuses(s),function(s){return n("span",{key:s.effect,class:{reached:t>=s.needed}},[e._v("\n          ("+e._s(s.needed)+")\n          ")])})],2)})],2)])])},m=[],h=(n("6762"),n("2fdb"),n("7514"),n("456d"),n("ac6a"),n("96cf"),n("3b8d")),p=n("bc3a"),d=n.n(p),g="https://solomid-resources.s3.amazonaws.com/blitz/tft/data/",v=function(e){var t=e.url,n=e.method;return d()({url:g+t,method:n})},b={champs:function(){return v({url:"champions.json"})},classes:function(){return v({url:"classes.json"})},items:function(){return v({url:"items.json"})},origins:function(){return v({url:"origins.json"})},tiers:function(){return v({url:"tierlist.json"})}},y={name:"home",data:function(){return{champs:[],champWidth:1,selected:{},items:[],itemWidth:1,classes:{},origins:{}}},mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.getChamps(),this.getItems(),this.getClasses(),this.getOrigins();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{potentialClasses:function(){var e=this,t={};return Object.keys(this.selectedChamps).forEach(function(n){t[e.champs[n].class]?t[e.champs[n].class]+=1:t[e.champs[n].class]=1}),t},potentialOrigins:function(){var e=this,t={};return Object.keys(this.selectedChamps).map(function(n){t[e.champs[n].origin]?t[e.champs[n].origin]+=1:t[e.champs[n].origin]=1}),t},selectedItems:function(){var e=this,t=Object.assign({},this.selected);return Object.keys(t).forEach(function(n){e.champs[n]&&delete t[n]}),t},selectedChamps:function(){var e=this,t=Object.assign({},this.selected);return Object.keys(t).forEach(function(n){e.champs[n]||delete t[n]}),t},sortedItems:function(){var e=this.items.map(function(e){return e.key});console.log(e);var t=this.items.map(function(t){var n=[];return e.forEach(function(e){var s=t.key;if(e!==s){var r=t.buildsInto.find(function(t){return t.from.includes(e)});n.push(r)}else{var i=t.buildsInto.find(function(t){return t.from.every(function(t){return t===e})});n.push(i)}}),t.buildsInto=n,t});return console.log(t),this.$forceUpdate(),t}},methods:{toggle:function(e){this.selected[e]?this.$delete(this.selected,e):this.$set(this.selected,e,!0)},getChamps:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n,s,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.champs();case 2:t=e.sent,this.champs=t.data,n=Object.keys(this.champs),s=n.length,n.forEach(function(e){r.champs[e].image="http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/".concat(e,".png")}),this.champWidth=Math.floor(Math.sqrt(s));case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getItems:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n,s,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.items();case 2:t=e.sent,n=t.data,s=Object.keys(n),s.forEach(function(e){var t=n[e];t.buildsInto&&(t.image="https://solomid-resources.s3.amazonaws.com/blitz/tft/items/".concat(e,".png"),t.buildsInto=t.buildsInto.map(function(e){return{name:e,from:n[e].buildsFrom,image:"https://solomid-resources.s3.amazonaws.com/blitz/tft/items/".concat(e,".png")}}),r.items.push(t))}),this.itemWidth=this.items.length;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getClasses:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.classes();case 2:t=e.sent,this.classes=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getOrigins:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.origins();case 2:t=e.sent,this.origins=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),classBonuses:function(e){return this.classes[e.toLowerCase()]?this.classes[e.toLowerCase()].bonuses:[]},originBonuses:function(e){return this.origins[e.toLowerCase()]?this.origins[e.toLowerCase()].bonuses:[]}}},w=y,k=(n("21bb"),Object(a["a"])(w,f,m,!1,null,null,null)),_=k.exports;s["a"].use(l["a"]);var j=new l["a"]({routes:[{path:"/",name:"home",component:_}]});s["a"].config.productionTip=!1,new s["a"]({router:j,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("5e27"),r=n.n(s);r.a},"5e27":function(e,t,n){},bcc9:function(e,t,n){}});
//# sourceMappingURL=app.97e9c4dd.js.map