"use strict";(self.webpackChunkcris_noel=self.webpackChunkcris_noel||[]).push([[410],{2745:function(e,t,a){var r=a(7294),l=a(231),n=a(4222);t.Z=e=>{let{date:t,content:a}=e;return r.createElement("div",{className:"flex"},r.createElement("div",{className:"flex items-center mr-3"},r.createElement(l.VF9,{color:"orange",className:"h-4 w-4 mr-1"}),r.createElement("p",{className:"text-xs"},t)),r.createElement("div",{className:"flex items-center"},r.createElement(l.qyc,{color:"yellowgreen",className:"h-4 w-4 mr-1"}),r.createElement("p",{className:"text-xs"},(0,n.EP)(a).text)))}},5815:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),l=a(1883);function n(e){const{href:t,target:a,styles:n}=e,c=`block bg-primary hover:bg-primary-800 transition ease-in-out text-white rounded p-2 text-center ${n&&n}`;return t?a&&"_blank"===a?r.createElement("a",{href:t,target:a,className:c},e.children):r.createElement(l.Link,{to:t,target:a,className:c},e.children):r.createElement("button",{className:c},e.children)}},4873:function(e,t,a){var r=a(7294);t.Z=e=>{let{excerpt:t}=e;return r.createElement("p",{className:"mt-3 mb-5 text-left"},t.length>230?`${t.slice(0,230)}...`:t)}},1405:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294);function l(e){const{variant:t,align:a}=e,l=()=>{switch(a){case"left":return["text-left","mr-auto"];case"right":return["text-right","ml-auto"];default:return["text-center","mx-auto"]}};return r.createElement("div",{className:`${l()[0]}`},(()=>{switch(t){case"h2":return r.createElement("h2",{className:"permanentMarker mt-20 text-4xl capitalize"},e.children);case"h3":return r.createElement("h3",{className:"permanentMarker mt-20 text-3xl capitalize"},e.children);case"h4":return r.createElement("h4",{className:"permanentMarker mt-20 text-2xl capitalize"},e.children);case"h5":return r.createElement("h5",{className:"permanentMarker mt-20 text-xl capitalize"},e.children);case"h6":return r.createElement("h6",{className:"permanentMarker mt-20 text-xl capitalize"},e.children);default:return r.createElement("h1",{className:"permanentMarker mt-20 text-5xl capitalize"},e.children)}})(),r.createElement("span",{className:`block h-[5px] w-[55px] mt-0 ${l()[1]} lg:mt-3 mb-20 bg-red-700`}))}},8645:function(e,t,a){a.r(t);var r=a(7294),l=a(6036),n=a(1405),c=a(2745),m=a(4873),s=a(5815);t.default=e=>{let{data:t}=e;const a=t.allContentfulPost.nodes;return r.createElement(l.Z,{title:"Cris Noel | Blog",href:"https://crisnoel12.github.io/blog"},r.createElement("div",{className:"mt-16"}),r.createElement(n.Z,null,"Blog"),r.createElement("div",{className:"grid mx-auto mb-16 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl px-2 sm:px-6 lg:px-8"},a.map((e=>{const{title:t,date:a,image:l,content:n,slug:i}=e,o=JSON.parse(e.content.raw).content.find((e=>"paragraph"===e.nodeType)).content[0].value;return r.createElement("div",{className:"flex flex-col",key:e.id},r.createElement("img",{src:`https://${l.file.url}`,width:"100%",height:"200px"}),r.createElement("h5",{className:"text-xl mt-3 mb-3"},t),r.createElement(c.Z,{date:a,content:n.raw}),r.createElement(m.Z,{excerpt:o}),r.createElement(s.Z,{href:`/blog/${i}`,styles:"mt-auto"},"Read More"),r.createElement("hr",{className:"mt-3 mb-3 md:hidden"}))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-e634059664e1bbaa35fd.js.map