"use strict";(self.webpackChunkcris_noel=self.webpackChunkcris_noel||[]).push([[691],{2745:function(e,t,a){var r=a(7294),l=a(231),n=a(4222);t.Z=e=>{let{date:t,content:a}=e;return r.createElement("div",{className:"flex"},r.createElement("div",{className:"flex items-center mr-3"},r.createElement(l.VF9,{color:"orange",className:"h-4 w-4 mr-1"}),r.createElement("p",{className:"text-xs"},t)),r.createElement("div",{className:"flex items-center"},r.createElement(l.qyc,{color:"yellowgreen",className:"h-4 w-4 mr-1"}),r.createElement("p",{className:"text-xs"},(0,n.EP)(a).text)))}},5815:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),l=a(1883);function n(e){const{href:t,target:a,styles:n}=e,s=`block bg-primary hover:bg-primary-800 transition ease-in-out text-white rounded p-2 text-center ${n&&n}`;return t?a&&"_blank"===a?r.createElement("a",{href:t,target:a,className:s},e.children):r.createElement(l.Link,{to:t,target:a,className:s},e.children):r.createElement("button",{className:s},e.children)}},4873:function(e,t,a){var r=a(7294);t.Z=e=>{let{excerpt:t}=e;return r.createElement("p",{className:"mt-3 mb-5 text-left"},t.length>230?`${t.slice(0,230)}...`:t)}},1405:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294);function l(e){const{variant:t,align:a}=e,l=()=>{switch(a){case"left":return["text-left","mr-auto"];case"right":return["text-right","ml-auto"];default:return["text-center","mx-auto"]}};return r.createElement("div",{className:`${l()[0]}`},(()=>{switch(t){case"h2":return r.createElement("h2",{className:"permanentMarker mt-20 text-4xl capitalize"},e.children);case"h3":return r.createElement("h3",{className:"permanentMarker mt-20 text-3xl capitalize"},e.children);case"h4":return r.createElement("h4",{className:"permanentMarker mt-20 text-2xl capitalize"},e.children);case"h5":return r.createElement("h5",{className:"permanentMarker mt-20 text-xl capitalize"},e.children);case"h6":return r.createElement("h6",{className:"permanentMarker mt-20 text-xl capitalize"},e.children);default:return r.createElement("h1",{className:"permanentMarker mt-20 text-5xl capitalize"},e.children)}})(),r.createElement("span",{className:`block h-[5px] w-[55px] mt-0 ${l()[1]} lg:mt-3 mb-20 bg-red-700`}))}},6257:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),l=a.p+"static/hero-c6959342d4900ec25edc07afd3300655.jpg",n=a(231),s=a(1883);const c={background:`url(${l}) center no-repeat`,position:"relative",height:"100vh",backgroundSize:"cover",backgroundBlendMode:"overlay",backgroundColor:"rgba(80, 73, 48, 0.9)"},m={position:"absolute",top:"90%",left:"50%",transform:"translate(-50%, -90%)"};var i=e=>{let{is404:t=!1}=e;return r.createElement("div",{style:c},r.createElement("div",{id:"hero-mid",className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full ${t&&"p-8 bg-black/[0.6]"}`},r.createElement("h1",{id:"hero-headline",className:"permanentMarker font-semibold text-4xl w-full md:text-6xl text-white mb-3 tracking-wider"},t?"Page Not Found":"CRIS NOEL"),t?r.createElement(s.Link,{to:"https://crisnoel12.github.io",className:"text-red-700"},"Go Home"):r.createElement("p",{id:"hero-subheading",className:"text-white text-xs md:text-base mt-5 font-medium tracking-wide"},"WEB DEVELOPER - CAVITE, PHILIPPINES")),!t&&r.createElement(s.Link,{to:"#about",style:m},r.createElement(n.RiI,{className:"text-white bg-black/[0.8] w-8 h-8 my-0 mx-auto mt-3 rounded-full p-2"})))}},5889:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var r=a(7294),l=a(4222),n=a(6036),s=a(6257),c=a(1405),m=a(2025);var i=e=>{const{title:t,noDivider:a}=e;return r.createElement(r.Fragment,null,r.createElement("section",{id:t,className:"mx-auto max-w-xs md:max-w-3xl lg:max-w-7xl lg:min-w-7xl px-2 sm:px-12"+(a?"pb-20":"")},r.createElement(c.Z,{variant:"h2"},t),e.children),!a&&r.createElement(m.Z,{mt:20}))},o=a(5815),d=a.p+"static/profile_picture-2608f3c0a95dc5b6649fe42d33f9695e.jpg",u=a(9583),p=a(5434),h=a(1883);function E(e){const{href:t,target:a,icon:l}=e,n="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700";return"_blank"===a?r.createElement("a",{href:t,target:a,className:n},l):r.createElement(h.Link,{to:t,className:n},l)}var g=()=>r.createElement(i,{title:"about"},r.createElement("div",{className:"flex flex-col lg:flex-row lg:items-start"},r.createElement("img",{src:d,className:"rounded h-36 w-36 mx-auto mb-5 lg:mr-8 lg:h-80 lg:w-80"}),r.createElement("div",null,r.createElement("p",{className:"text-xl mb-5"},"What's up, I'm Cris and I'm a Web Developer currently based in the Philippines. I have a passion for building websites and learning more about new frameworks and languages that I haven't mastered yet. I'm well versed in both front-end and back-end development. I'm currently accepting freelance work, if you're in need of a website, I'm your guy, feel free to contact me."),r.createElement(o.Z,{href:"https://docs.google.com/document/d/1yONEvHTSa9JDd5seiv_0dJKJW2ZSvYVQwebSJFd4Nlw/edit?usp=sharing",target:"_blank"},"View Resume"),r.createElement(m.Z,{mb:2}),r.createElement("div",{className:"flex justify-evenly md:inline-flex"},r.createElement(E,{href:"https://www.linkedin.com/in/crisncancino/",target:"_blank",icon:r.createElement(u.ltd,{className:"h-5 w-5"})}),r.createElement(E,{href:"https://github.com/crisnoel12",target:"_blank",icon:r.createElement(u.hJX,{className:"h-5 w-5"})}),r.createElement(E,{href:"https://codepen.io/crisnoel12",target:"_blank",icon:r.createElement(u.q25,{className:"h-5 w-5"})}),r.createElement(E,{href:"mailto:crisncancino@gmail.com",target:"_blank",icon:r.createElement(p.ixJ,{className:"h-5 w-5"})})))));var b=e=>{let{experiences:t}=e;return r.createElement(i,{title:"experience"},t.map(((e,t,a)=>{const l=t+1===a.length;return r.createElement("div",{key:e.id,className:""+(l?"":"mb-20")},r.createElement("div",{className:"inline-flex"},r.createElement("img",{src:e.logo.file.url,className:"h-16 w-16 mr-5"}),r.createElement("div",null,r.createElement("h5",{className:"font-bold text-xl lg:text-2xl"},e.position),r.createElement("h6",{className:"font-semibold text-neutral-500 lg:text-lg"},e.company))),r.createElement(m.Z,null),r.createElement("ul",{className:"pl-10"},e.responsibilities.map(((t,a,l)=>{const n=a+1===l.length;return r.createElement("li",{key:`${e.id}_${t}`,className:`list-disc mt-5 ${n?"":"mb-5"} lg:text-lg`},t)}))))})))};const f={PERSONAL:{NAME:"Personal",VALUE:0},WORK:{NAME:"Work",VALUE:1}};var x=e=>{let{personalProjects:t,workProjects:a}=e;const[l,n]=r.useState(f.PERSONAL.VALUE);return r.createElement(i,{title:"projects"},r.createElement("div",{className:"grid grid-cols-2 justify-center"},Object.keys(f).map((e=>r.createElement("button",{key:f[e].VALUE,className:l===f[e].VALUE?"font-medium text-red-800 border-b-2 border-red-800 mb-5":"mb-5",onClick:()=>{return t=f[e].VALUE,n(t);var t}},f[e].NAME)))),l===f.PERSONAL.VALUE?r.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-3"},t&&t.length>0?t.map((e=>r.createElement("a",{key:e.id,href:e.url,target:"_blank",className:"block relative"},r.createElement("img",{src:`https:${e.image.file.url}`,width:"100%",className:"h-full"}),r.createElement("div",{className:"projects-module--personalProjectBG--5ae4d"},r.createElement("div",{className:"projects-module--personalProjectTxtContainer--38f53"},r.createElement("p",{className:"permanentMarker text-2xl mb-4"},e.title),r.createElement("p",{className:"text-sm"},e.description.description)))))):r.createElement("p",null,"No Projects to show.")):r.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-3"},a&&a.length>0?a.map((e=>r.createElement("div",{key:e.id,className:"flex flex-col border-solid border-2 border-neutral-300 dark:border-neutral-600 rounded p-8"},r.createElement("div",null,r.createElement("h6",{className:"permanentMarker text-lg mb-2"},e.title),r.createElement(m.Z,{mt:2,mb:2})),r.createElement("p",{className:"mb-8"},e.description.description),r.createElement(o.Z,{href:e.url,target:"_blank",styles:"mt-auto"},"VIEW")))):r.createElement("p",null,"No Projects to show.")))},v=a(4873),N=a(2745);var w=e=>{let{data:t}=e;const{title:a,date:l,content:n,slug:s}=t;let c=JSON.parse(n.raw).content.find((e=>"paragraph"===e.nodeType)).content[0].value;return r.createElement("div",{className:"flex flex-col"},r.createElement("img",{src:`https://${t.image.file.url}`,width:"100%",height:"200px",alt:`${t.title} Main Image`}),r.createElement("h5",{className:"text-xl mt-3 mb-3"},a),r.createElement(N.Z,{date:l,content:n.raw}),r.createElement(v.Z,{excerpt:c}),r.createElement(h.Link,{to:`/blog/${s}`,className:"mt-3 text-sm text-left text-primary hover:text-primary-800 transition ease-in-out"},"Read More →"))};var k=e=>{let{posts:t}=e;return r.createElement(i,{title:"blog"},r.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-3"},t.map((e=>r.createElement(w,{key:e.id,data:e})))),r.createElement(o.Z,{href:"/blog",styles:"w-full mt-8"},"View All"))},y=a(1649),_=a(7516),j=a(8193);const S={_origin:"https://api.emailjs.com"},P=(e,t,a)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class L{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const M=(e,t,a={})=>new Promise(((r,l)=>{const n=new XMLHttpRequest;n.addEventListener("load",(({target:e})=>{const t=new L(e);200===t.status||"OK"===t.text?r(t):l(t)})),n.addEventListener("error",(({target:e})=>{l(new L(e))})),n.open("POST",S._origin+e,!0),Object.keys(a).forEach((e=>{n.setRequestHeader(e,a[e])})),n.send(t)}));var Z=(e,t,a,r)=>{const l=r||S._userID,n=(e=>{let t;if(t="string"==typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(a);P(l,e,t);const s=new FormData(n);return s.append("lib_version","3.11.0"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",l),M("/api/v1.0/email/send-form",s)},I=a(6705);function V(){return r.createElement("iframe",{id:"map",className:"w-full h-[375px] lg:h-full",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyDV2mJDjLBrrPdVGXSr0ajaV2WBSMwB_HI&q=Cavite&maptype=satellite",allowFullScreen:!0})}var A=()=>{const e=(0,r.useRef)(),[t,a]=r.useState({name:"",email:"",message:""}),{serverState:l,setServerState:n,handleServerResponse:s}=(0,r.useContext)(I.Z),c=e=>{e.persist(),a((t=>({...t,[e.target.id]:e.target.value})))},m=()=>{a({name:"",email:"",message:""})},o=[{id:"to_name",name:"to_name",type:"hidden",value:"Cris"},{id:"from_name",name:"from_name",type:"hidden",value:"crisnoel12.github.io"},{id:"name",name:"user_name",placeholder:"NAME*",value:t.name,onChange:c,required:!0},{id:"email",name:"reply_to",type:"email",placeholder:"E-MAIL*",value:t.email,onChange:c,required:!0},{id:"message",name:"message",placeholder:"MESSAGE*",value:t.message,onChange:c,rows:8,required:!0}],d="w-full mb-3 p-5 bg-neutral-200 dark:bg-neutral-800 border-solid border-b-2 border-neutral-500 rounded";return r.createElement(i,{title:"contact",noDivider:!0},r.createElement("div",{className:"grid lg:grid-cols-2 gap-4"},r.createElement("form",{ref:e,onSubmit:t=>{t.preventDefault(),n({submitting:!0}),Z("service_yu54g4h","template_ih3203c",e.current,"hqlSzZ1JRaK06hMBl").then((e=>{s(e.status,"Message sent successfully!"),m(),console.log(e.text)}),(e=>{s(e.status,"There was an error trying to submit your request."),console.log(e)}))},noValidate:!0,autoComplete:"off"},o.map((e=>e.rows?r.createElement("textarea",Object.assign({key:e.id},e,{className:d})):r.createElement("input",Object.assign({key:e.id},e,{className:d})))),r.createElement("div",{className:"flex justify-end"},r.createElement("button",{type:"submit",className:"bg-red-700 border-2 border-red-700 hover:bg-red-800 hover:border-red-800 transition ease-in-out w-full lg:w-36 p-2 rounded text-white mr-2",disabled:l.submitting},l.submitting?r.createElement(j.Z7b,{className:"animate-spin h-5 w-5 text-white mx-auto"}):r.createElement("div",{className:"inline-flex items-center"},r.createElement(y.ghy,{className:"h-5 w-5 mr-2",color:"white"}),r.createElement("span",null,"SEND"))),r.createElement("button",{type:"reset",className:"border-2 border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition ease-in-out w-full lg:w-36 p-2 rounded",onClick:m},r.createElement("div",{className:"inline-flex items-center"},r.createElement(_.oAZ,{className:"h-5 w-5 mr-2"}),r.createElement("span",null,"RESET"))))),r.createElement(V,null)))};var C=e=>{let{data:{allContentfulExperience:t,allContentfulPost:a,allContentfulProjects:c}}=e;const m=(0,l.nu)(t.nodes),i=(0,l.xt)(c.nodes.filter((e=>!1===e.personalProject))),o=(0,l.xt)(c.nodes.filter((e=>!0===e.personalProject))),d=a.nodes;return r.createElement(n.Z,{title:"Cris Noel | Web Developer",href:"https://crisnoel12.github.io"},r.createElement(s.Z,null),r.createElement(g,null),r.createElement(b,{experiences:m}),r.createElement(x,{personalProjects:o,workProjects:i}),r.createElement(k,{posts:d}),r.createElement(A,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9529120a7facbf1000fa.js.map