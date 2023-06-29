(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),d=n(667),u=n.n(d),s=new URL(n(356),n.b),c=a()(r()),l=u()(s);c.push([e.id,`div,\nspan {\n    /* border: 0.1px solid red; */\n}\n\n@font-face {\n    font-family: "Virgil";\n    src: url(${l}) format("woff2");\n    font-weight: normal;\n    font-style: normal;\n}\n\n:root {\n    --grey-color: #777777;\n}\n\n/* minimalist reset */\n* {\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n}\n\nbody {\n    font-family: "Virgil", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.main-area {\n    border: 1px solid blue;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    gap: 1rem;\n}\n\n.main-area-heading-text {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.main-area .todo,\n.main-area .project,\n.main-area-heading {\n    display: flex;\n    flex-direction: row;\n    line-height: 1.45;\n    padding: 0 10%;\n}\n\n.side-area {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n}\n\n.view,\n.area {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    line-height: 1.45;\n    justify-content: space-between;\n}\n\n.counter {\n    color: var(--grey-color);\n}\n\n.view > span,\n.area > span {\n    font-size: 1.3rem;\n    line-height: 2;\n}\n\n.project-text,\n.todo-text {\n    font-size: 1.1rem;\n    line-height: 1.45;\n}\n\n.area-and-child-container {\n    margin-bottom: 1rem;\n}\n`,""]);const f=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(a[u]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},89:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(379),r=n.n(o),i=n(795),a=n.n(i),d=n(569),u=n.n(d),s=n(565),c=n.n(s),l=n(216),f=n.n(l),p=n(589),h=n.n(p),g=n(28),m={};m.styleTagTransform=h(),m.setAttributes=c(),m.insert=u().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),r()(g.Z,m);const v=g.Z&&g.Z.locals?g.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var u=e[d],s=o.base?u[0]+o.base:u[0],c=i[s]||0,l="".concat(s," ").concat(c);i[s]=c+1;var f=n(l),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=r(p,o);o.byIndex=d,t.splice(d,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var u=o(e,r),s=0;s<i.length;s++){var c=n(i[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=u}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},318:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(407);t.default=function(){function e(e,t){const n=document.createElement(e);return n.className=t,n}const t=e("div","container");function n(){const n=document.querySelector(".main-area");if(n)return n.innerHTML="",n;{const n=e("div","main-area");return t.appendChild(n),n}}function r(t,n){if("todo"===t.type){const o=e("div","todo"),r=e("span","todo-text");r.textContent=t.title,n.appendChild(o),o.appendChild(r)}else if("project"===t.type){const o=e("div","project"),r=e("span","project-text");r.textContent=t.title,n.appendChild(o),o.appendChild(r)}}function i(){const t=n(),i=e("div","main-area-heading"),a=e("h1","main-area-heading-text");a.textContent="Inbox",t.appendChild(i),i.appendChild(a),(0,o.getTodos)().filter((e=>e.inInbox)).forEach((e=>{r(e,t)}))}function a(){const t=n(),i=e("div","main-area-heading"),a=e("h1","main-area-heading-text");a.textContent="Today",t.appendChild(i),i.appendChild(a),(0,o.getTodosAndProjects)().filter((e=>e.startDate&&e.startDate<=(0,o.getToday)())).forEach((e=>{r(e,t)}))}function d(){const t=n(),i=e("div","main-area-heading"),a=e("h1","main-area-heading-text");a.textContent="Scheduled",t.appendChild(i),i.appendChild(a),(0,o.getTodosAndProjects)().filter((e=>e.startDate)).forEach((e=>{r(e,t)}))}function u(){const t=n(),i=e("div","main-area-heading"),a=e("h1","main-area-heading-text");a.textContent="Unscheduled",t.appendChild(i),i.appendChild(a),(0,o.getTodosAndProjects)().filter((e=>!e.startDate&&"inInbox"in e&&!e.inInbox)).forEach((e=>{r(e,t)}))}function s(){const t=n(),i=e("div","main-area-heading"),a=e("h1","main-area-heading-text");a.textContent="Logbook",t.appendChild(i),i.appendChild(a),(0,o.getTodosAndProjects)().filter((e=>e.isDone)).forEach((e=>{r(e,t)}))}function c(t){const i=n(),a=e("div","main-area-heading"),d=e("h1","main-area-heading-text");d.textContent=t.title,i.appendChild(a),a.appendChild(d),(0,o.getTodosAndProjects)().filter((e=>e.parentUuid===t.uuid)).forEach((e=>{r(e,i)}))}function l(t){const i=n(),a=e("div","main-area-heading"),d=e("h1","main-area-heading-text");d.textContent=t.title,i.appendChild(a),a.appendChild(d),(0,o.getTodosAndProjects)().filter((e=>e.parentUuid===t.uuid)).forEach((e=>{r(e,i)}))}document.body.appendChild(t),function(){const n=e("div","side-area");t.appendChild(n);const r=e("div","inbox-area"),i=e("div","inbox"),a=e("span","inbox-text"),d=e("span","inbox-count");n.appendChild(r);const u=e("div","views-area");n.appendChild(u);const s=e("div","today"),c=e("span","today-text"),l=e("span","today-count"),f=e("div","scheduled"),p=e("span","scheduled-text"),h=e("span","scheduled-count"),g=e("div","unscheduled"),m=e("span","unscheduled-text"),v=e("span","unscheduled-count"),y=e("div","logbook-area"),T=e("div","logbook"),b=e("span","logbook-text");n.appendChild(y);const x=e("div","areas-projects-area");n.appendChild(x),[i,s,f,g,T].forEach((e=>{e.classList.add("view"),e.id=e.classList[0]})),[d,l,h,v].forEach((e=>{e.classList.add("counter")})),a.textContent="Inbox",d.textContent=(0,o.getTodos)().filter((e=>e.inInbox)).length.toString(),c.textContent="Today",l.textContent=(0,o.getTodosAndProjects)().filter((e=>e.startDate&&e.startDate<=(0,o.getToday)())).length.toString(),p.textContent="Scheduled",m.textContent="Unscheduled",b.textContent="Logbook",(0,o.getAreas)().forEach((t=>{const n=e("div","area-and-child-container"),r=e("div","area"),i=e("span","area-text");r.dataset.uuid=t.uuid,i.textContent=t.title,x.appendChild(n),n.appendChild(r),r.appendChild(i),(0,o.getProjects)().forEach((o=>{if(o.parentUuid===t.uuid){const t=e("div","project"),r=e("span","project-text");t.dataset.uuid=o.uuid,r.textContent=o.title,n.appendChild(t),t.appendChild(r)}}))})),(0,o.getProjects)().forEach((t=>{if(!t.parentUuid){const n=e("div","project"),o=e("span","project-text");n.dataset.uuid=t.uuid,o.textContent=t.title,x.appendChild(n),n.appendChild(o)}})),r.appendChild(i),i.appendChild(a),i.appendChild(d),u.appendChild(s),s.appendChild(c),s.appendChild(l),u.appendChild(f),f.appendChild(p),f.appendChild(h),u.appendChild(g),g.appendChild(m),g.appendChild(v),y.appendChild(T),T.appendChild(b)}(),i(),a();const f=document.querySelectorAll(".side-area .view"),p={inbox:i,today:a,scheduled:d,unscheduled:u,logbook:s};f.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.id,n=p[t];n&&n()}))}));const h=document.querySelector(".areas-projects-area");return h&&h.addEventListener("click",(e=>{let t=e.target;for(;t&&!t.dataset.uuid;)t=t.parentElement;if(!t)return;const n=t.dataset.uuid,r=t.classList[0];if(n&&r)if("area"===r){const e=(0,o.getArea)(n);e&&c(e)}else if("project"===r){const e=(0,o.getProject)(n);e&&l(e)}})),{drawInbox:i,drawToday:a,drawScheduled:d,drawUnscheduled:u,drawLogbook:s,drawAreaAsMain:c,drawProjectAsMain:l}}},607:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(89),(0,o(n(318)).default)()},407:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteArea=t.deleteProject=t.deleteTodo=t.modifyArea=t.modifyProject=t.modifyTodo=t.getAllItems=t.getTodosAndProjects=t.getAreas=t.getProjects=t.getTodos=t.getArea=t.getProject=t.getTodo=t.getToday=t.createArea=t.createProject=t.createTodo=void 0;const o=n(429),r=[],i=[],a=[];function d(e,t="",n=!1,i=0,a=0,d=!1,u="",s=!0){if((a||u)&&s&&(s=!1),i&&!a){const e=new Date(i),t=new Date;e.setHours(0,0,0,0),t.setHours(0,0,0,0),e.getTime()===t.getTime()&&(a=t.getTime())}const c={uuid:(0,o.v4)(),type:"todo",title:e,description:t,hasPriority:n,dueDateTime:i,startDate:a,isDone:d,parentUuid:u,inInbox:s};return r.push(c),c}function u(e,t="",n=0,r=0,a=!1,d=""){if(n&&!r){const e=new Date(n),t=new Date;e.setHours(0,0,0,0),t.setHours(0,0,0,0),e.getTime()===t.getTime()&&(r=t.getTime())}const u={uuid:(0,o.v4)(),type:"project",title:e,description:t,dueDateTime:n,startDate:r,isDone:a,parentUuid:d};return i.push(u),u}function s(e){const t={uuid:(0,o.v4)(),type:"area",title:e};return a.push(t),t}function c(e){return r.find((t=>t.uuid===e))}function l(e){return i.find((t=>t.uuid===e))}function f(e){return a.find((t=>t.uuid===e))}function p(e){const t=c(e);if(t)return r.splice(r.indexOf(t),1),t}function h(e,t=!0){const n=l(e);if(n)return t&&(r.filter((t=>t.parentUuid===e)).forEach((e=>p(e.uuid))),i.filter((t=>t.parentUuid===e)).forEach((e=>h(e.uuid,!0)))),i.splice(i.indexOf(n),1),n}t.createTodo=d,t.createProject=u,t.createArea=s,t.getToday=function(){const e=new Date;return e.setHours(0,0,0,0),e.getTime()},t.getTodo=c,t.getProject=l,t.getArea=f,t.getTodos=function(){return r},t.getProjects=function(){return i},t.getAreas=function(){return a},t.getTodosAndProjects=function(){return[...r,...i]},t.getAllItems=function(){return[...r,...i,...a]},t.modifyTodo=function(e,t,n,o,r,i,a,d,u){const s=c(e);if(s){if(void 0!==t&&(s.title=t),void 0!==n&&(s.description=n),void 0!==o&&(s.hasPriority=o),void 0!==r&&(s.dueDateTime=r),void 0!==i&&(s.startDate=i),void 0!==a&&(s.isDone=a),void 0!==d&&(s.parentUuid=d),void 0!==u&&(s.inInbox=u),s.startDate&&s.inInbox&&(s.inInbox=!1),s.dueDateTime&&!s.startDate){const e=new Date(s.dueDateTime),t=new Date;e.setHours(0,0,0,0),t.setHours(0,0,0,0),e.getTime()===t.getTime()&&(s.startDate=t.getTime())}return s}},t.modifyProject=function(e,t,n,o,r,i,a){const d=l(e);if(d){if(void 0!==t&&(d.title=t),void 0!==n&&(d.description=n),void 0!==o&&(d.dueDateTime=o),void 0!==r&&(d.startDate=r),void 0!==i&&(d.isDone=i),void 0!==a&&(d.parentUuid=a),d.dueDateTime&&!d.startDate){const e=new Date(d.dueDateTime),t=new Date;e.setHours(0,0,0,0),t.setHours(0,0,0,0),e.getTime()===t.getTime()&&(d.startDate=t.getTime())}return d}},t.modifyArea=function(e,t){const n=f(e);if(n)return void 0!==t&&(n.title=t),n},t.deleteTodo=p,t.deleteProject=h,t.deleteArea=function(e,t=!0){const n=f(e);if(n)return t&&(r.filter((t=>t.parentUuid===e)).forEach((e=>p(e.uuid))),i.filter((t=>t.parentUuid===e)).forEach((e=>h(e.uuid,!0)))),a.splice(a.indexOf(n),1),n};const g=new Date;g.setDate(g.getDate()-10);const m=new Date;m.setDate(m.getDate()+10);const v=new Date;v.setHours(0,0,0,0);const y=new Date;y.setHours(12,0,0,0);const T=s("Home"),b=s("Work"),x=u("Home Project","This is a home project",y.getTime(),v.getTime(),!1,T.uuid),j=u("Work Project","This is a work project",m.getTime(),y.getTime(),!0,b.uuid),C=u("General Project","This is a general project",0,g.getTime(),!1),w=u("Future Project","This is a future project",m.getTime(),m.getTime(),!1,T.uuid),_=u("Past Project","This is a past project",g.getTime(),g.getTime(),!0);d("Home Todo","This is a home todo",!1,y.getTime(),v.getTime(),!1,x.uuid,!1),d("Work Todo","This is a work todo",!0,m.getTime(),y.getTime(),!0,j.uuid,!1),d("General Todo","This is a general todo",!1,0,g.getTime(),!1,C.uuid,!0),d("Inbox Todo","This is a todo in the inbox",!0,0,0,!1,"",!0),d("Future Todo","This is a future todo",!1,m.getTime(),m.getTime(),!1,w.uuid,!1),d("Past Todo","This is a past todo",!0,g.getTime(),g.getTime(),!0,_.uuid,!1),d("Area Todo","This is a todo in an area",!1,y.getTime(),v.getTime(),!1,T.uuid,!1),d("Unassigned Todo","This is an unassigned todo",!1,m.getTime(),y.getTime(),!0,"",!1),d("Overdue Todo","This is an overdue todo",!1,g.getTime(),g.getTime(),!1,C.uuid,!0),d("Due Today Todo","This is a due today todo",!0,y.getTime(),v.getTime(),!1,j.uuid,!1),d("Work Todo with no start date","This is a work todo",!0,m.getTime(),0,!0,j.uuid,!1)},429:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return u.default}});var o=f(n(990)),r=f(n(237)),i=f(n(355)),a=f(n(764)),d=f(n(314)),u=f(n(464)),s=f(n(435)),c=f(n(8)),l=f(n(222));function f(e){return e&&e.__esModule?e:{default:e}}},163:(e,t)=>{function n(e){return 14+(e+64>>>9<<4)+1}function o(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function r(e,t,n,r,i,a){return o((d=o(o(t,e),o(r,a)))<<(u=i)|d>>>32-u,n);var d,u}function i(e,t,n,o,i,a,d){return r(t&n|~t&o,e,t,i,a,d)}function a(e,t,n,o,i,a,d){return r(t&o|n&~o,e,t,i,a,d)}function d(e,t,n,o,i,a,d){return r(t^n^o,e,t,i,a,d)}function u(e,t,n,o,i,a,d){return r(n^(t|~o),e,t,i,a,d)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){const t=[],n=32*e.length,o="0123456789abcdef";for(let r=0;r<n;r+=8){const n=e[r>>5]>>>r%32&255,i=parseInt(o.charAt(n>>>4&15)+o.charAt(15&n),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;let r=1732584193,s=-271733879,c=-1732584194,l=271733878;for(let t=0;t<e.length;t+=16){const n=r,f=s,p=c,h=l;r=i(r,s,c,l,e[t],7,-680876936),l=i(l,r,s,c,e[t+1],12,-389564586),c=i(c,l,r,s,e[t+2],17,606105819),s=i(s,c,l,r,e[t+3],22,-1044525330),r=i(r,s,c,l,e[t+4],7,-176418897),l=i(l,r,s,c,e[t+5],12,1200080426),c=i(c,l,r,s,e[t+6],17,-1473231341),s=i(s,c,l,r,e[t+7],22,-45705983),r=i(r,s,c,l,e[t+8],7,1770035416),l=i(l,r,s,c,e[t+9],12,-1958414417),c=i(c,l,r,s,e[t+10],17,-42063),s=i(s,c,l,r,e[t+11],22,-1990404162),r=i(r,s,c,l,e[t+12],7,1804603682),l=i(l,r,s,c,e[t+13],12,-40341101),c=i(c,l,r,s,e[t+14],17,-1502002290),s=i(s,c,l,r,e[t+15],22,1236535329),r=a(r,s,c,l,e[t+1],5,-165796510),l=a(l,r,s,c,e[t+6],9,-1069501632),c=a(c,l,r,s,e[t+11],14,643717713),s=a(s,c,l,r,e[t],20,-373897302),r=a(r,s,c,l,e[t+5],5,-701558691),l=a(l,r,s,c,e[t+10],9,38016083),c=a(c,l,r,s,e[t+15],14,-660478335),s=a(s,c,l,r,e[t+4],20,-405537848),r=a(r,s,c,l,e[t+9],5,568446438),l=a(l,r,s,c,e[t+14],9,-1019803690),c=a(c,l,r,s,e[t+3],14,-187363961),s=a(s,c,l,r,e[t+8],20,1163531501),r=a(r,s,c,l,e[t+13],5,-1444681467),l=a(l,r,s,c,e[t+2],9,-51403784),c=a(c,l,r,s,e[t+7],14,1735328473),s=a(s,c,l,r,e[t+12],20,-1926607734),r=d(r,s,c,l,e[t+5],4,-378558),l=d(l,r,s,c,e[t+8],11,-2022574463),c=d(c,l,r,s,e[t+11],16,1839030562),s=d(s,c,l,r,e[t+14],23,-35309556),r=d(r,s,c,l,e[t+1],4,-1530992060),l=d(l,r,s,c,e[t+4],11,1272893353),c=d(c,l,r,s,e[t+7],16,-155497632),s=d(s,c,l,r,e[t+10],23,-1094730640),r=d(r,s,c,l,e[t+13],4,681279174),l=d(l,r,s,c,e[t],11,-358537222),c=d(c,l,r,s,e[t+3],16,-722521979),s=d(s,c,l,r,e[t+6],23,76029189),r=d(r,s,c,l,e[t+9],4,-640364487),l=d(l,r,s,c,e[t+12],11,-421815835),c=d(c,l,r,s,e[t+15],16,530742520),s=d(s,c,l,r,e[t+2],23,-995338651),r=u(r,s,c,l,e[t],6,-198630844),l=u(l,r,s,c,e[t+7],10,1126891415),c=u(c,l,r,s,e[t+14],15,-1416354905),s=u(s,c,l,r,e[t+5],21,-57434055),r=u(r,s,c,l,e[t+12],6,1700485571),l=u(l,r,s,c,e[t+3],10,-1894986606),c=u(c,l,r,s,e[t+10],15,-1051523),s=u(s,c,l,r,e[t+1],21,-2054922799),r=u(r,s,c,l,e[t+8],6,1873313359),l=u(l,r,s,c,e[t+15],10,-30611744),c=u(c,l,r,s,e[t+6],15,-1560198380),s=u(s,c,l,r,e[t+13],21,1309151649),r=u(r,s,c,l,e[t+4],6,-145523070),l=u(l,r,s,c,e[t+11],10,-1120210379),c=u(c,l,r,s,e[t+2],15,718787259),s=u(s,c,l,r,e[t+9],21,-343485551),r=o(r,n),s=o(s,f),c=o(c,p),l=o(l,h)}return[r,s,c,l]}(function(e){if(0===e.length)return[];const t=8*e.length,o=new Uint32Array(n(t));for(let n=0;n<t;n+=8)o[n>>5]|=(255&e[n/8])<<n%32;return o}(e),8*e.length))}},790:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=n},314:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},222:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(435))&&o.__esModule?o:{default:o};t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n}},58:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},319:(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)};const o=new Uint8Array(16)},757:(e,t)=>{function n(e,t,n,o){switch(e){case 0:return t&n^~t&o;case 1:case 3:return t^n^o;case 2:return t&n^t&o^n&o}}function o(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const i=e.length/4+2,a=Math.ceil(i/16),d=new Array(a);for(let t=0;t<a;++t){const n=new Uint32Array(16);for(let o=0;o<16;++o)n[o]=e[64*t+4*o]<<24|e[64*t+4*o+1]<<16|e[64*t+4*o+2]<<8|e[64*t+4*o+3];d[t]=n}d[a-1][14]=8*(e.length-1)/Math.pow(2,32),d[a-1][14]=Math.floor(d[a-1][14]),d[a-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<a;++e){const i=new Uint32Array(80);for(let t=0;t<16;++t)i[t]=d[e][t];for(let e=16;e<80;++e)i[e]=o(i[e-3]^i[e-8]^i[e-14]^i[e-16],1);let a=r[0],u=r[1],s=r[2],c=r[3],l=r[4];for(let e=0;e<80;++e){const r=Math.floor(e/20),d=o(a,5)+n(r,u,s,c)+l+t[r]+i[e]>>>0;l=c,c=s,s=o(u,30)>>>0,u=a,a=d}r[0]=r[0]+a>>>0,r[1]=r[1]+u>>>0,r[2]=r[2]+s>>>0,r[3]=r[3]+c>>>0,r[4]=r[4]+l>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}},8:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=a;var o,r=(o=n(435))&&o.__esModule?o:{default:o};const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function a(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}t.default=function(e,t=0){const n=a(e,t);if(!(0,r.default)(n))throw TypeError("Stringified UUID is invalid");return n}},990:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(319))&&o.__esModule?o:{default:o},i=n(8);let a,d,u=0,s=0;t.default=function(e,t,n){let o=t&&n||0;const c=t||new Array(16);let l=(e=e||{}).node||a,f=void 0!==e.clockseq?e.clockseq:d;if(null==l||null==f){const t=e.random||(e.rng||r.default)();null==l&&(l=a=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==f&&(f=d=16383&(t[6]<<8|t[7]))}let p=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.nsecs?e.nsecs:s+1;const g=p-u+(h-s)/1e4;if(g<0&&void 0===e.clockseq&&(f=f+1&16383),(g<0||p>u)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=p,s=h,d=f,p+=122192928e5;const m=(1e4*(268435455&p)+h)%4294967296;c[o++]=m>>>24&255,c[o++]=m>>>16&255,c[o++]=m>>>8&255,c[o++]=255&m;const v=p/4294967296*1e4&268435455;c[o++]=v>>>8&255,c[o++]=255&v,c[o++]=v>>>24&15|16,c[o++]=v>>>16&255,c[o++]=f>>>8|128,c[o++]=255&f;for(let e=0;e<6;++e)c[o+e]=l[e];return t||(0,i.unsafeStringify)(c)}},237:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(925)),r=i(n(163));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,o.default)("v3",48,r.default);t.default=a},925:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,n){function o(e,o,a,d){var u;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof o&&(o=(0,i.default)(o)),16!==(null===(u=o)||void 0===u?void 0:u.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let s=new Uint8Array(16+e.length);if(s.set(o),s.set(e,o.length),s=n(s),s[6]=15&s[6]|t,s[8]=63&s[8]|128,a){d=d||0;for(let e=0;e<16;++e)a[d+e]=s[e];return a}return(0,r.unsafeStringify)(s)}try{o.name=e}catch(e){}return o.DNS=a,o.URL=d,o};var o,r=n(8),i=(o=n(222))&&o.__esModule?o:{default:o};const a="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=a;const d="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=d},355:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(790)),r=a(n(319)),i=n(8);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){if(o.default.randomUUID&&!t&&!e)return o.default.randomUUID();const a=(e=e||{}).random||(e.rng||r.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=a[e];return t}return(0,i.unsafeStringify)(a)}},764:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(925)),r=i(n(757));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,o.default)("v5",80,r.default);t.default=a},435:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(58))&&o.__esModule?o:{default:o};t.default=function(e){return"string"==typeof e&&r.default.test(e)}},464:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(435))&&o.__esModule?o:{default:o};t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}},356:(e,t,n)=>{e.exports=n.p+"740490b285bcdadee39a.woff2"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,n(607)})();