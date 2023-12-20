"use strict";(self.webpackChunkcris_noel=self.webpackChunkcris_noel||[]).push([[626],{2924:function(e,t,n){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function E(e,t){return e(t={exports:{}},t.exports),t.exports}var l=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));a(l);l.BLOCKS;var i=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));a(i);i.INLINES;var u=E((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));a(u);var c=E((function(e,t){var n,a=r&&r.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,E=t.length;a<E;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},E=r&&r.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var c=E(u);t.TOP_LEVEL_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.EMBEDDED_RESOURCE,l.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[l.BLOCKS.TABLE,l.BLOCKS.TABLE_ROW,l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[l.BLOCKS.HR,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[l.BLOCKS.OL_LIST]=[l.BLOCKS.LIST_ITEM],n[l.BLOCKS.UL_LIST]=[l.BLOCKS.LIST_ITEM],n[l.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[l.BLOCKS.QUOTE]=[l.BLOCKS.PARAGRAPH],n[l.BLOCKS.TABLE]=[l.BLOCKS.TABLE_ROW],n[l.BLOCKS.TABLE_ROW]=[l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],n[l.BLOCKS.TABLE_CELL]=[l.BLOCKS.PARAGRAPH],n[l.BLOCKS.TABLE_HEADER_CELL]=[l.BLOCKS.PARAGRAPH],n),t.HEADINGS=[l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=a([l.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[l.BLOCKS.DOCUMENT,l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.LIST_ITEM,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,i.INLINES.HYPERLINK,i.INLINES.ENTRY_HYPERLINK,i.INLINES.ASSET_HYPERLINK,i.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[c.default.BOLD,c.default.CODE,c.default.ITALIC,c.default.UNDERLINE]}));a(c);c.V1_MARKS,c.V1_NODE_TYPES,c.TEXT_CONTAINERS,c.HEADINGS,c.CONTAINERS,c.VOID_BLOCKS,c.TABLE_BLOCKS,c.LIST_ITEM_BLOCKS,c.TOP_LEVEL_BLOCKS;var L=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));a(L);var o=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));a(o);var S=E((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:l.BLOCKS.DOCUMENT,data:{},content:[{nodeType:l.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));a(S);var s=E((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(i.INLINES,e.nodeType)},t.isBlock=function(e){return n(l.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));a(s);s.isText,s.isBlock,s.isInline;var O=E((function(e,t){var n=r&&r.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=r&&r.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),E=r&&r.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},O=r&&r.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t},d=r&&r.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return l.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return i.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return d(u).default}}),E(c,t),E(L,t),E(o,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return d(S).default}});var _=O(s);t.helpers=_}));a(O);var d=O.helpers;O.EMPTY_DOCUMENT,O.MARKS,O.INLINES,O.BLOCKS;t.a=function e(t,n){return void 0===n&&(n=" "),t&&t.content?t.content.reduce((function(r,a,E){var l;if(d.isText(a))l=a.value;else if((d.isBlock(a)||d.isInline(a))&&!(l=e(a,n)).length)return r;var i=t.content[E+1];return r+l+(i&&d.isBlock(i)?n:"")}),""):""}},4222:function(e,t,n){n.d(t,{EP:function(){return c},nu:function(){return u},xt:function(){return i}});const r={en:{less:"less than a minute read",default:"min read"},fr:{less:"moins d'une minute de lecture",default:"min de lecture"},es:{less:"menos de un minuto leyendo",default:"min de lectura"},cn:{less:"小于一分钟",default:"分钟"},ja:{less:"1分未満の読み取り",default:"最小読み取り"},de:{less:"weniger als eine Minute Lesezeit",default:"Min. Lesezeit"},"pt-br":{less:"menos de um minuto de leitura",default:"minutos de leitura"},tr:{less:"bir dakikadan az okuma süresi",default:"dakika okuma süresi"},ro:{less:"timp de citire mai puțin de un minut",default:"min. timp de lectură"}},a=e=>e<1+Number.EPSILON,E=(e,t="en")=>r[t][a(e)?"less":"default"];var l=n(2924);const i=e=>e.sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt))),u=e=>e.sort(((e,t)=>new Date(e.createdAt)-new Date(t.createdAt))),c=e=>((e,t=300,n="en")=>{const r=(e=>(e=>e.match(/[\w|\d|\s|,|.|\u00C0-\u024F|\u4E00-\u9FA5|\u3041-\u309F]+/giu)??[])(e).reduce(((e,t)=>e+(t.trim().length?t.trim().split(/\s+/u).length:0)),0))(e),l=Number(Math.round(r/t).toFixed(2));return{minutes:l,words:r,text:`${a(l)?"":`${l} `}${E(l,n)}`}})((0,l.a)(JSON.parse(e)))},2745:function(e,t,n){var r=n(7294),a=n(231),E=n(4222);t.Z=e=>{let{date:t,content:n}=e;return r.createElement("div",{className:"flex"},r.createElement("div",{className:"flex items-center mr-3"},r.createElement(a.VF9,{color:"orange",className:"h-4 w-4 mr-1"}),r.createElement("p",{className:"text-xs"},t)),r.createElement("div",{className:"flex items-center"},r.createElement(a.qyc,{color:"yellowgreen",className:"h-4 w-4 mr-1"}),r.createElement("p",{className:"text-xs"},(0,E.EP)(n).text)))}},5815:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(7294),a=n(1883);function E(e){const{href:t,target:n,styles:E}=e,l=`block bg-red-700 hover:bg-red-800 transition ease-in-out text-white rounded p-2 text-center ${E&&E}`;return t?n&&"_blank"===n?r.createElement("a",{href:t,target:n,className:l},e.children):r.createElement(a.Link,{to:t,target:n,className:l},e.children):r.createElement("button",{className:l},e.children)}},4873:function(e,t,n){var r=n(7294);t.Z=e=>{let{excerpt:t}=e;return r.createElement("p",{className:"mt-3 mb-5 text-left"},t.length>230?`${t.slice(0,230)}...`:t)}},1405:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){const{variant:t,align:n}=e,a=()=>{switch(n){case"left":return["text-left","mr-auto"];case"right":return["text-right","ml-auto"];default:return["text-center","mx-auto"]}};return r.createElement("div",{className:`${a()[0]}`},(()=>{switch(t){case"h2":return r.createElement("h2",{className:"permanentMarker mt-20 text-4xl capitalize"},e.children);case"h3":return r.createElement("h3",{className:"permanentMarker mt-20 text-3xl capitalize"},e.children);case"h4":return r.createElement("h4",{className:"permanentMarker mt-20 text-2xl capitalize"},e.children);case"h5":return r.createElement("h5",{className:"permanentMarker mt-20 text-xl capitalize"},e.children);case"h6":return r.createElement("h6",{className:"permanentMarker mt-20 text-xl capitalize"},e.children);default:return r.createElement("h1",{className:"permanentMarker mt-20 text-5xl capitalize"},e.children)}})(),r.createElement("span",{className:`block h-[5px] w-[55px] mt-0 ${a()[1]} lg:mt-3 mb-20 bg-red-700`}))}}}]);
//# sourceMappingURL=d9c56afdfc39b1e352889ccc7d370156b246193c-4b88024b977bb7d2f7ed.js.map