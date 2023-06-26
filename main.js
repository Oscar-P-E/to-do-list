(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),d=n(667),u=n.n(d),c=new URL(n(356),n.b),l=a()(o()),s=u()(c);l.push([e.id,`@font-face {\n    font-family: "Virgil";\n    src: url(${s}) format("woff2");\n    font-weight: normal;\n    font-style: normal;\n}\n\n:root {\n    --accent-color: #f67c3b;\n    --back-color: #f9cbae;\n    --link-color: #55abac;\n}\n\n/* minimalist reset */\n* {\n    padding: 0;\n    margin: 0;\n    font-size: 1em;\n}\n\nbody {\n    /* background-color: var(--back-color); */\n    font-family: "Virgil", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n}\n\n/* main {\n    margin: 0 auto;\n    padding: 30px 140px 0 140px;\n    max-width: 600px;\n    min-height: 100vh;\n    color: #343434;\n    background-color: white;\n}\n\nh1 {\n    font-size: 1.2em;\n    font-weight: 700;\n    display: inline;\n    margin-right: 5px;\n}\n\n.accent {\n    color: var(--accent-color);\n}\n\nh2 {\n    margin-top: 50px;\n    font-size: 1.5em;\n}\n\nh3 {\n    font-weight: 400;\n    margin-bottom: 30px;\n}\n\nfooter {\n    text-align: right;\n    margin-top: 80px;\n    padding-bottom: 20px;\n}\n\np {\n    line-height: 1.5em;\n    margin-top: 20px;\n    display: block;\n}\n\na {\n    color: darkgray;\n    text-decoration: none;\n    color: var(--link-color);\n}\n\nol > li {\n    list-style: decimal inside;\n    margin: 10px 0;\n    line-height: 1.4em;\n}\n\nul > li {\n    list-style: disc inside;\n    margin: 10px 0;\n    line-height: 1.4em;\n}\n\ncode {\n    display: block;\n    white-space: pre-wrap;\n    line-height: 1em;\n}\n\n@media (max-width: 600px) {\n    main {\n        max-width: 600px;\n        padding: 10px;\n    }\n    h2 {\n        font-size: 1.2em;\n    }\n    :root {\n        --back-color: white;\n    }\n} */\n`,""]);const f=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(a[u]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},89:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(379),o=n.n(r),i=n(795),a=n.n(i),d=n(569),u=n.n(d),c=n(565),l=n.n(c),s=n(216),f=n.n(s),p=n(589),v=n.n(p),h=n(28),m={};m.styleTagTransform=v(),m.setAttributes=l(),m.insert=u().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),o()(h.Z,m);const y=h.Z&&h.Z.locals?h.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var u=e[d],c=r.base?u[0]+r.base:u[0],l=i[c]||0,s="".concat(c," ").concat(l);i[c]=l+1;var f=n(s),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=o(p,r);r.byIndex=d,t.splice(d,0,{identifier:s,updater:v,references:1})}a.push(s)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var u=r(e,o),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},318:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(407);t.default=function(){function e(e,t){const n=document.createElement(e);return n.className=t,n}const t=e("div","container"),n=e("div","side-area"),o=e("div","main-area"),i=e("div","views-area"),a=e("div","today"),d=e("span","today-text"),u=e("span","today-count"),c=e("div","next"),l=e("span","next-text"),s=e("span","next-count"),f=e("div","scheduled"),p=e("span","scheduled-text"),v=e("span","scheduled-count"),h=e("div","someday"),m=e("span","someday-text"),y=e("span","someday-count"),g=e("div","areas-projects-area"),b=e("div","archive-deleted-area"),_=e("div","archive"),j=e("span","archive-text"),P=e("div","deleted"),x=e("span","deleted-text");return document.body.appendChild(t),t.appendChild(n),t.appendChild(o),n.appendChild(i),n.appendChild(b),n.appendChild(g),i.appendChild(a),a.appendChild(d),a.appendChild(u),i.appendChild(c),c.appendChild(l),c.appendChild(s),i.appendChild(f),f.appendChild(p),f.appendChild(v),i.appendChild(h),h.appendChild(m),h.appendChild(y),b.appendChild(_),_.appendChild(j),b.appendChild(P),P.appendChild(x),console.log("Areas:"),console.log((0,r.getAreas)()),console.log("\nProjects:"),console.log((0,r.getProjects)()),console.log("\nTodos:"),console.log((0,r.getTodos)()),{container:t,sideArea:n,mainArea:o,viewsArea:i,today:a,next:c,scheduled:f,someday:h,areasProjectsArea:g,archiveDeletedArea:b,archive:_,deleted:P}}},607:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(89),(0,r(n(318)).default)()},407:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteArea=t.deleteProject=t.deleteTodo=t.modifyArea=t.modifyProject=t.modifyTodo=t.getAllItems=t.getTodosAndProjects=t.getAreas=t.getProjects=t.getTodos=t.getArea=t.getProject=t.getTodo=t.createArea=t.createProject=t.createTodo=void 0;const r=n(429),o=[],i=[],a=[],d=[...o,...i],u=[...o,...i,...a];function c(e,t="",n=!1,i=0,a=0,d=!1,u=""){const c={uuid:(0,r.v4)(),type:"todo",title:e,description:t,hasPriority:n,dueDateTime:i,startDateTime:a,isDone:d,parentUuid:u};return o.push(c),c}function l(e,t="",n=0,o=0,a=!1,d=""){const u={uuid:(0,r.v4)(),type:"project",title:e,description:t,dueDateTime:n,startDateTime:o,isDone:a,parentUuid:d};return i.push(u),u}function s(e){const t={uuid:(0,r.v4)(),type:"area",title:e};return a.push(t),t}function f(e){return o.find((t=>t.uuid===e))}function p(e){return i.find((t=>t.uuid===e))}function v(e){return a.find((t=>t.uuid===e))}function h(e){const t=f(e);if(t)return o.splice(o.indexOf(t),1),t}function m(e,t=!0){const n=p(e);if(n)return t&&(o.filter((t=>t.parentUuid===e)).forEach((e=>h(e.uuid))),i.filter((t=>t.parentUuid===e)).forEach((e=>m(e.uuid,!0)))),i.splice(i.indexOf(n),1),n}t.createTodo=c,t.createProject=l,t.createArea=s,t.getTodo=f,t.getProject=p,t.getArea=v,t.getTodos=function(){return o},t.getProjects=function(){return i},t.getAreas=function(){return a},t.getTodosAndProjects=function(){return d},t.getAllItems=function(){return u},t.modifyTodo=function(e,t,n,r,o,i,a,d){const u=f(e);if(u)return void 0!==t&&(u.title=t),void 0!==n&&(u.description=n),void 0!==r&&(u.hasPriority=r),void 0!==o&&(u.dueDateTime=o),void 0!==i&&(u.startDateTime=i),void 0!==a&&(u.isDone=a),void 0!==d&&(u.parentUuid=d),u},t.modifyProject=function(e,t,n,r,o,i,a){const d=p(e);if(d)return void 0!==t&&(d.title=t),void 0!==n&&(d.description=n),void 0!==r&&(d.dueDateTime=r),void 0!==o&&(d.startDateTime=o),void 0!==i&&(d.isDone=i),void 0!==a&&(d.parentUuid=a),d},t.modifyArea=function(e,t){const n=v(e);if(n)return void 0!==t&&(n.title=t),n},t.deleteTodo=h,t.deleteProject=m,t.deleteArea=function(e,t=!0){const n=v(e);if(n)return t&&(o.filter((t=>t.parentUuid===e)).forEach((e=>h(e.uuid))),i.filter((t=>t.parentUuid===e)).forEach((e=>m(e.uuid,!0)))),a.splice(a.indexOf(n),1),n};const y=s("Home");s("Work");const g=l("Test Project","This is a test project.");l("Test Project 2","This is another test project.",0,0,!1,y.uuid),c("Test Todo","This is a test todo.",!1,0,0,!1,g.uuid),c("Test Todo 2","This is a test todo.",!1,0,0,!1,g.uuid)},429:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return u.default}});var r=f(n(990)),o=f(n(237)),i=f(n(355)),a=f(n(764)),d=f(n(314)),u=f(n(464)),c=f(n(435)),l=f(n(8)),s=f(n(222));function f(e){return e&&e.__esModule?e:{default:e}}},163:(e,t)=>{function n(e){return 14+(e+64>>>9<<4)+1}function r(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,t,n,o,i,a){return r((d=r(r(t,e),r(o,a)))<<(u=i)|d>>>32-u,n);var d,u}function i(e,t,n,r,i,a,d){return o(t&n|~t&r,e,t,i,a,d)}function a(e,t,n,r,i,a,d){return o(t&r|n&~r,e,t,i,a,d)}function d(e,t,n,r,i,a,d){return o(t^n^r,e,t,i,a,d)}function u(e,t,n,r,i,a,d){return o(n^(t|~r),e,t,i,a,d)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){const t=[],n=32*e.length,r="0123456789abcdef";for(let o=0;o<n;o+=8){const n=e[o>>5]>>>o%32&255,i=parseInt(r.charAt(n>>>4&15)+r.charAt(15&n),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;let o=1732584193,c=-271733879,l=-1732584194,s=271733878;for(let t=0;t<e.length;t+=16){const n=o,f=c,p=l,v=s;o=i(o,c,l,s,e[t],7,-680876936),s=i(s,o,c,l,e[t+1],12,-389564586),l=i(l,s,o,c,e[t+2],17,606105819),c=i(c,l,s,o,e[t+3],22,-1044525330),o=i(o,c,l,s,e[t+4],7,-176418897),s=i(s,o,c,l,e[t+5],12,1200080426),l=i(l,s,o,c,e[t+6],17,-1473231341),c=i(c,l,s,o,e[t+7],22,-45705983),o=i(o,c,l,s,e[t+8],7,1770035416),s=i(s,o,c,l,e[t+9],12,-1958414417),l=i(l,s,o,c,e[t+10],17,-42063),c=i(c,l,s,o,e[t+11],22,-1990404162),o=i(o,c,l,s,e[t+12],7,1804603682),s=i(s,o,c,l,e[t+13],12,-40341101),l=i(l,s,o,c,e[t+14],17,-1502002290),c=i(c,l,s,o,e[t+15],22,1236535329),o=a(o,c,l,s,e[t+1],5,-165796510),s=a(s,o,c,l,e[t+6],9,-1069501632),l=a(l,s,o,c,e[t+11],14,643717713),c=a(c,l,s,o,e[t],20,-373897302),o=a(o,c,l,s,e[t+5],5,-701558691),s=a(s,o,c,l,e[t+10],9,38016083),l=a(l,s,o,c,e[t+15],14,-660478335),c=a(c,l,s,o,e[t+4],20,-405537848),o=a(o,c,l,s,e[t+9],5,568446438),s=a(s,o,c,l,e[t+14],9,-1019803690),l=a(l,s,o,c,e[t+3],14,-187363961),c=a(c,l,s,o,e[t+8],20,1163531501),o=a(o,c,l,s,e[t+13],5,-1444681467),s=a(s,o,c,l,e[t+2],9,-51403784),l=a(l,s,o,c,e[t+7],14,1735328473),c=a(c,l,s,o,e[t+12],20,-1926607734),o=d(o,c,l,s,e[t+5],4,-378558),s=d(s,o,c,l,e[t+8],11,-2022574463),l=d(l,s,o,c,e[t+11],16,1839030562),c=d(c,l,s,o,e[t+14],23,-35309556),o=d(o,c,l,s,e[t+1],4,-1530992060),s=d(s,o,c,l,e[t+4],11,1272893353),l=d(l,s,o,c,e[t+7],16,-155497632),c=d(c,l,s,o,e[t+10],23,-1094730640),o=d(o,c,l,s,e[t+13],4,681279174),s=d(s,o,c,l,e[t],11,-358537222),l=d(l,s,o,c,e[t+3],16,-722521979),c=d(c,l,s,o,e[t+6],23,76029189),o=d(o,c,l,s,e[t+9],4,-640364487),s=d(s,o,c,l,e[t+12],11,-421815835),l=d(l,s,o,c,e[t+15],16,530742520),c=d(c,l,s,o,e[t+2],23,-995338651),o=u(o,c,l,s,e[t],6,-198630844),s=u(s,o,c,l,e[t+7],10,1126891415),l=u(l,s,o,c,e[t+14],15,-1416354905),c=u(c,l,s,o,e[t+5],21,-57434055),o=u(o,c,l,s,e[t+12],6,1700485571),s=u(s,o,c,l,e[t+3],10,-1894986606),l=u(l,s,o,c,e[t+10],15,-1051523),c=u(c,l,s,o,e[t+1],21,-2054922799),o=u(o,c,l,s,e[t+8],6,1873313359),s=u(s,o,c,l,e[t+15],10,-30611744),l=u(l,s,o,c,e[t+6],15,-1560198380),c=u(c,l,s,o,e[t+13],21,1309151649),o=u(o,c,l,s,e[t+4],6,-145523070),s=u(s,o,c,l,e[t+11],10,-1120210379),l=u(l,s,o,c,e[t+2],15,718787259),c=u(c,l,s,o,e[t+9],21,-343485551),o=r(o,n),c=r(c,f),l=r(l,p),s=r(s,v)}return[o,c,l,s]}(function(e){if(0===e.length)return[];const t=8*e.length,r=new Uint32Array(n(t));for(let n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))}},790:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=n},314:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},222:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(435))&&r.__esModule?r:{default:r};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n}},58:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},319:(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)};const r=new Uint8Array(16)},757:(e,t)=>{function n(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:case 3:return t^n^r;case 2:return t&n^t&r^n&r}}function r(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const i=e.length/4+2,a=Math.ceil(i/16),d=new Array(a);for(let t=0;t<a;++t){const n=new Uint32Array(16);for(let r=0;r<16;++r)n[r]=e[64*t+4*r]<<24|e[64*t+4*r+1]<<16|e[64*t+4*r+2]<<8|e[64*t+4*r+3];d[t]=n}d[a-1][14]=8*(e.length-1)/Math.pow(2,32),d[a-1][14]=Math.floor(d[a-1][14]),d[a-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<a;++e){const i=new Uint32Array(80);for(let t=0;t<16;++t)i[t]=d[e][t];for(let e=16;e<80;++e)i[e]=r(i[e-3]^i[e-8]^i[e-14]^i[e-16],1);let a=o[0],u=o[1],c=o[2],l=o[3],s=o[4];for(let e=0;e<80;++e){const o=Math.floor(e/20),d=r(a,5)+n(o,u,c,l)+s+t[o]+i[e]>>>0;s=l,l=c,c=r(u,30)>>>0,u=a,a=d}o[0]=o[0]+a>>>0,o[1]=o[1]+u>>>0,o[2]=o[2]+c>>>0,o[3]=o[3]+l>>>0,o[4]=o[4]+s>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]}},8:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=a;var r,o=(r=n(435))&&r.__esModule?r:{default:r};const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function a(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}t.default=function(e,t=0){const n=a(e,t);if(!(0,o.default)(n))throw TypeError("Stringified UUID is invalid");return n}},990:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(319))&&r.__esModule?r:{default:r},i=n(8);let a,d,u=0,c=0;t.default=function(e,t,n){let r=t&&n||0;const l=t||new Array(16);let s=(e=e||{}).node||a,f=void 0!==e.clockseq?e.clockseq:d;if(null==s||null==f){const t=e.random||(e.rng||o.default)();null==s&&(s=a=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==f&&(f=d=16383&(t[6]<<8|t[7]))}let p=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:c+1;const h=p-u+(v-c)/1e4;if(h<0&&void 0===e.clockseq&&(f=f+1&16383),(h<0||p>u)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=p,c=v,d=f,p+=122192928e5;const m=(1e4*(268435455&p)+v)%4294967296;l[r++]=m>>>24&255,l[r++]=m>>>16&255,l[r++]=m>>>8&255,l[r++]=255&m;const y=p/4294967296*1e4&268435455;l[r++]=y>>>8&255,l[r++]=255&y,l[r++]=y>>>24&15|16,l[r++]=y>>>16&255,l[r++]=f>>>8|128,l[r++]=255&f;for(let e=0;e<6;++e)l[r+e]=s[e];return t||(0,i.unsafeStringify)(l)}},237:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(925)),o=i(n(163));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,r.default)("v3",48,o.default);t.default=a},925:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,n){function r(e,r,a,d){var u;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=(0,i.default)(r)),16!==(null===(u=r)||void 0===u?void 0:u.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+e.length);if(c.set(r),c.set(e,r.length),c=n(c),c[6]=15&c[6]|t,c[8]=63&c[8]|128,a){d=d||0;for(let e=0;e<16;++e)a[d+e]=c[e];return a}return(0,o.unsafeStringify)(c)}try{r.name=e}catch(e){}return r.DNS=a,r.URL=d,r};var r,o=n(8),i=(r=n(222))&&r.__esModule?r:{default:r};const a="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=a;const d="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=d},355:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(790)),o=a(n(319)),i=n(8);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){if(r.default.randomUUID&&!t&&!e)return r.default.randomUUID();const a=(e=e||{}).random||(e.rng||o.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=a[e];return t}return(0,i.unsafeStringify)(a)}},764:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(925)),o=i(n(757));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,r.default)("v5",80,o.default);t.default=a},435:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(58))&&r.__esModule?r:{default:r};t.default=function(e){return"string"==typeof e&&o.default.test(e)}},464:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(435))&&r.__esModule?r:{default:r};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}},356:(e,t,n)=>{e.exports=n.p+"740490b285bcdadee39a.woff2"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,n(607)})();