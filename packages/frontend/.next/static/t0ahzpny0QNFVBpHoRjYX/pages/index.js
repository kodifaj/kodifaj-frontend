(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"23aj":function(t,e,a){"use strict";a.r(e),a.d(e,"__N_SSP",(function(){return c}));var r=a("ERkP"),s=a.n(r),n=a("fuhz"),l=a("uEUG"),i=a("D0eB"),o=s.a.createElement,c=!0;e.default=function(t){var e=t.tasks;return o(n.a,{title:"Home page"},o(i.a,null),o(l.a,{tasks:e}))}},PCLr:function(t,e,a){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function s(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n,l=a("ERkP"),i=a.n(l);!function(t){t.Full="FULL",t.Half="HALF",t.Empty="EMPTY"}(n||(n={}));var o=i.a.createElement,c=function(t){var e=t.type;return e===n.Full?o("img",{"data-testid":"full-star",className:"w-4 h4",src:"/star-full.svg",alt:"Full star"}):e===n.Half?o("img",{"data-testid":"half-star",className:"w-4 h4",src:"/star-half.svg",alt:"Half star"}):o("img",{"data-testid":"gray-star",className:"w-4 h4",src:"/star-empty.svg",alt:"Empty star"})},m=i.a.createElement;e.a=function(t){var e=t.rating,a=s(Array.from({length:5})).map((function(t,a){var r=function(t,e){return e<Math.floor(t)||e===Math.floor(t)&&t%1===1?n.Full:e===Math.floor(t)&&t%1>.5?n.Half:n.Empty}(e,a);return m(c,{type:r,key:a})}));return m("div",{className:"flex"},a," ",m("span",{className:"ml-1 text-xs"},"(",e.toFixed(1),")"))}},"fI+o":function(t,e,a){"use strict";var r=a("ERkP"),s=a.n(r).a.createElement;e.a=function(t){var e=t.tags;return s("ul",{className:"list-none py-1 text-right"},e.map((function(t,e){return s("li",{className:"inline-flex w-auto px-1 bg-red-200 mr-1 mt-4 rounded-md shadow-sm w-4 items-center",key:e},s("span",{"data-testid":"tag",className:"text-xs"},"#",t))})))}},h2gO:function(t,e,a){"use strict";var r=a("ERkP"),s=a.n(r),n=a("jvFD"),l=a.n(n),i=a("PCLr"),o=a("fI+o"),c=s.a.createElement,m=function(t){var e=t._id,a=t.user,r=t.images,s=t.title,n=t.tags,m=t.createdAt.slice(0,10),d="https://avatars2.githubusercontent.com/u/21274642?s=400&u=d2f9f822cccbbd841e2c37e2c9b790644f51b8d8&v=4",u=a.login;return c("div",{className:"flex flex-col items-center mt-4"},c(l.a,{href:"/tasks/[taskId]",as:"/tasks/".concat(e)},c("a",{className:"w-full bg-white transform translate-y-0 shadow-sm rounded-md transition-shadow transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg overflow-hidden cursor-pointer"},c("section",null,c("div",{className:"h-64 relative"},c("img",{className:"h-full w-full object-cover overflow-hidden rounded-t-md",src:r[0],alt:s})),c("div",{className:"h-40 px-2 border-b-2 border-gray-200 relative flex flex-col justify-between"},c("div",{className:"absolute left-0 top-0 indent z-10"},c("span",{className:"block ml-2 -mt-3 h-8 w-8 rounded-full z-50 relative bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(d,")")}})),c("span",{className:"absolute top-0 pl-12 text-gray-700 italic underline"},u),c("h4",{className:"text-center pt-10 mx-1 text-md text-gray-700"},s),c(o.a,{tags:n})),c("div",{className:"rounded-b-md px-3 flex justify-between items-center h-12 flex-wrap"},c(i.a,{rating:4.7}),c("span",{className:"text-xs text-gray-700 italic"},m))))))},d=s.a.createElement;e.a=function(t){var e=t.tasks;return d("div",{className:"grid grid-cols-1 sm:grid-cols-2 col-gap-4 row-gap-4 xl:grid-cols-3 xl:col-span-3 mx-4 mb-8"},e.map((function(t){var e=t._id,a=t.user,r=t.images,s=t.title,n=t.tags,l=t.createdAt;return a?d(m,{key:e,_id:e,user:a,images:r,title:s,tags:n,createdAt:void 0===l?"":l}):null})))}},uEUG:function(t,e,a){"use strict";var r=a("ERkP"),s=a.n(r),n=a("h2gO"),l=s.a.createElement;e.a=function(t){var e=t.tasks,a=void 0===e?[]:e;return 0===a.length?null:l("div",{className:"max-w-8xl mt-16 mx-auto sm:px-4 lg:px-8",id:"projects-listing"},l("div",{className:"ml-4 sm:ml-0 sm:flex sm:items-baseline sm:justify-between"},l("h2",{className:"text-2xl leading-8 font-semibold tracking-wide font-display text-gray-900 sm:text-3xl sm:leading-9"},"Zadania")),l("div",{className:"mt-6 grid grid-cols-1 row-gap-8 md:border-gray-400 md:rounded-md md:border"},l("div",{className:"pt-8 text-center md:border-gray-400"},l("h3",{className:"text-lg leading-7 font-medium tracking-tight text-gray-900"},"Filtry"),l("h3",{className:"text-lg leading-7 font-medium tracking-tight text-gray-900"},"Sortowanie")),l("div",{id:"projects-listing-section",className:"md:border-t grid grid-cols-1 row-gap-6 lg:gap-5 xl:grid-cols-3"},l(n.a,{tasks:a}))))}},yaYD:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])}},[["yaYD",0,2,4,1,3]]]);