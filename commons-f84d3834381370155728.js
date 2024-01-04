"use strict";(self.webpackChunkcris_noel=self.webpackChunkcris_noel||[]).push([[351],{2025:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){const{mt:t,mb:n}=e,o=`${t?`mt-${t}`:"mt-4"} ${n?`mt-${n}`:null}`;return r.createElement("hr",{className:o})}},7153:function(e,t,n){n.d(t,{Z:function(){return He}});var r=n(7294),o=n.t(r,2);function s(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,s),r}function a(...e){return Array.from(new Set(e.flatMap((e=>"string"==typeof e?e.split(" "):[])))).filter(Boolean).join(" ")}var i,l=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(l||{}),u=((i=u||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:i}){let l=M(t,e);if(a)return d(l,n,r,i);let u=null!=o?o:0;if(2&u){let{static:e=!1,...t}=l;if(e)return d(t,n,r,i)}if(1&u){let{unmount:e=!0,...t}=l;return s(e?0:1,{0(){return null},1(){return d({...t,hidden:!0,style:{display:"none"}},n,r,i)}})}return d(l,n,r,i)}function d(e,t={},n,o){let{as:s=n,children:i,refName:l="ref",...u}=g(e,["unmount","static"]),c=void 0!==e.ref?{[l]:e.ref}:{},d="function"==typeof i?i(t):i;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t));let f={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(f["data-headlessui-state"]=n.join(" "))}if(s===r.Fragment&&Object.keys(m(u)).length>0){if(!(0,r.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>a(null==e?void 0:e.className(...t),u.className):a(null==e?void 0:e.className,u.className),n=t?{className:t}:{};return(0,r.cloneElement)(d,Object.assign({},M(d.props,m(g(u,["ref"]))),f,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,r.createElement)(s,Object.assign({},g(u,["ref"]),s!==r.Fragment&&c,s!==r.Fragment&&f),d)}function M(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function f(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function g(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var p=Object.defineProperty,y=(e,t,n)=>(((e,t,n)=>{t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let N=new class{constructor(){y(this,"current",this.detect()),y(this,"handoffState","pending"),y(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},T=(e,t)=>{N.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)};let I=function(e){let t=function(e){let t=(0,r.useRef)(e);return T((()=>{t.current=e}),[e]),t}(e);return r.useCallback(((...e)=>t.current(...e)),[t])},j=Symbol();function h(e,t=!0){return Object.assign(e,{[j]:t})}function E(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=I((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[j])))?void 0:n}function L(){let e=function(){let e="undefined"==typeof document;return(e=>e.useSyncExternalStore)(o)((()=>()=>{}),(()=>!1),(()=>!e))}(),[t,n]=r.useState(N.isHandoffComplete);return t&&!1===N.isHandoffComplete&&n(!1),r.useEffect((()=>{!0!==t&&n(!0)}),[t]),r.useEffect((()=>N.handoff()),[]),!e&&t}var A;let C=null!=(A=r.useId)?A:function(){let e=L(),[t,n]=r.useState(e?()=>N.nextId():null);return T((()=>{null===t&&n(N.nextId())}),[t]),null!=t?""+t:void 0};var v=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(v||{});function D(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let w=(0,r.createContext)(null);w.displayName="OpenClosedContext";var O,b=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(b||{});function x(){return(0,r.useContext)(w)}function z({value:e,children:t}){return r.createElement(w.Provider,{value:e},t)}function S(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function k(e,t){let[n,o]=(0,r.useState)((()=>S(e)));return T((()=>{o(S(e))}),[e.type,e.as]),T((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}function Y(e){return N.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let P=null!=(O=r.startTransition)?O:function(e){e()};var U=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(U||{}),Q=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Q||{});let R={0:e=>({...e,disclosureState:s(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4(e){return!0===e.linkedPanel?e:{...e,linkedPanel:!0}},5(e){return!1===e.linkedPanel?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},B=(0,r.createContext)(null);function H(e){let t=(0,r.useContext)(B);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,H),t}return t}B.displayName="DisclosureContext";let _=(0,r.createContext)(null);function Z(e){let t=(0,r.useContext)(_);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return t}_.displayName="DisclosureAPIContext";let F=(0,r.createContext)(null);function G(e,t){return s(t.type,R,e,t)}F.displayName="DisclosurePanelContext";let W=r.Fragment;let $=l.RenderStrategy|l.Static;let X=f((function(e,t){let{defaultOpen:n=!1,...o}=e,a=(0,r.useRef)(null),i=E(t,h((e=>{a.current=e}),void 0===e.as||e.as===r.Fragment)),l=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useReducer)(G,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:u,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:M,buttonId:f},m]=d,g=I((e=>{m({type:1});let t=Y(a);if(!t||!f)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(f):t.getElementById(f);null==n||n.focus()})),p=(0,r.useMemo)((()=>({close:g})),[g]),y=(0,r.useMemo)((()=>({open:0===M,close:g})),[M,g]),N={ref:i};return r.createElement(B.Provider,{value:d},r.createElement(_.Provider,{value:p},r.createElement(z,{value:s(M,{0:b.Open,1:b.Closed})},c({ourProps:N,theirProps:o,slot:y,defaultTag:W,name:"Disclosure"}))))})),J=f((function(e,t){let n=C(),{id:o=`headlessui-disclosure-button-${n}`,...s}=e,[a,i]=H("Disclosure.Button"),l=(0,r.useContext)(F),u=null!==l&&l===a.panelId,d=(0,r.useRef)(null),M=E(d,t,u?null:a.buttonRef);(0,r.useEffect)((()=>{if(!u)return i({type:2,buttonId:o}),()=>{i({type:2,buttonId:null})}}),[o,i,u]);let f=I((e=>{var t;if(u){if(1===a.disclosureState)return;switch(e.key){case v.Space:case v.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=a.buttonRef.current)||t.focus()}}else switch(e.key){case v.Space:case v.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}})),m=I((e=>{if(e.key===v.Space)e.preventDefault()})),g=I((t=>{var n;D(t.currentTarget)||e.disabled||(u?(i({type:0}),null==(n=a.buttonRef.current)||n.focus()):i({type:0}))})),p=(0,r.useMemo)((()=>({open:0===a.disclosureState})),[a]),y=k(e,d);return c({ourProps:u?{ref:M,type:y,onKeyDown:f,onClick:g}:{ref:M,id:o,type:y,"aria-expanded":0===a.disclosureState,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:f,onKeyUp:m,onClick:g},theirProps:s,slot:p,defaultTag:"button",name:"Disclosure.Button"})})),q=f((function(e,t){let n=C(),{id:o=`headlessui-disclosure-panel-${n}`,...s}=e,[a,i]=H("Disclosure.Panel"),{close:l}=Z("Disclosure.Panel"),u=E(t,a.panelRef,(e=>{P((()=>i({type:e?4:5})))}));(0,r.useEffect)((()=>(i({type:3,panelId:o}),()=>{i({type:3,panelId:null})})),[o,i]);let d=x(),M=null!==d?(d&b.Open)===b.Open:0===a.disclosureState,f=(0,r.useMemo)((()=>({open:0===a.disclosureState,close:l})),[a,l]),m={ref:u,id:o};return r.createElement(F.Provider,{value:a.panelId},c({ourProps:m,theirProps:s,slot:f,defaultTag:"div",features:$,visible:M,name:"Disclosure.Panel"}))})),V=Object.assign(X,{Button:J,Panel:q});var K=n(231),ee=n(1883);const te=[{name:"HOME",href:"/#",current:!0},{name:"ABOUT",href:"/#about",current:!1},{name:"EXPERIENCE",href:"/#experience",current:!1},{name:"PROJECTS",href:"/#projects",current:!1},{name:"BLOG",href:"/#blog",current:!1},{name:"CONTACT",href:"/#contact",current:!1}],ne=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")};var re=()=>r.createElement(V,{as:"nav",className:"fixed w-full z-10 bg-red-800"},(e=>{let{open:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},r.createElement("div",{className:"relative flex h-16 items-center justify-between"},r.createElement("div",{className:"flex flex-1 items-center justify-between items-stretch justify-start"},r.createElement("div",{className:"flex flex-shrink-0 items-center"},r.createElement(ee.Link,{to:"/"},r.createElement("img",{className:"h-8 w-auto",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNJREFUWIXtlU+IjWEUxn/fdNUwjT8z2VDEiiRiIwuNhT8ricVkw43QkKyUskORbGYhNWUrpShSFhayQiJ3ZRozoqSMKbd0FcbP4p575+vrXve6w0zqPnV6v+89zznnec/7vt+XqMwmOma1eltAW0CLAjqBzcD833D6gIEGefYAV1Ab2XL1uHpPHVMnLeN+HX6H+iY4e+twlqpf1F31inarA+oLp/BDfapeUk+q6+vE9qdiHtXhXFB/qr1Zx2J1UC1GgqJ6Td0Zohp1K6cOqwX1TORYneHMUSfUhyppx/ZwGONptauJomk7HPF5tUctqRcznG3B2Z0WsD9aXFLPqwv+sHBlZWPqJ3VuzN1Wn2d4Q7HAXEXAGvW7+lFd10Lhih2MlZ1KzR2yfGhXObXFJfVGhYN6NgKPTKN4Tn0dHehMzfdEZ8/Fe6XW0bSAqzG5ZRoCDkSOfA3fHfWD5as3oY6r89ICtkabblnex1YEvIzEnTV8fSFuNMbLaX+iApwABoFhYAh4ALwHJoFvwAqgF1iUsYXAXWAJ8BW4Weer9wzYGM+bgCdVT0rNDvWVzWPE8ole20SH9kXMWzWp1YEKukLhBmAl0A28A4rAZ2AEKAGjwHiDb30aHUAeKEQ3qsgKmHH8l7/jv4ocQJIkx4BlM1TzulqovsUZeAw4Q9Zf8xYkSZL8w1VXYebUt29BW0BbwKwL+AW2g21hqEPfDQAAAABJRU5ErkJggg==",alt:"Cris Noel Logo"}))),r.createElement("div",{className:"sm:hidden"},r.createElement(V.Button,{className:"rounded-md p-2 text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},r.createElement("span",{className:"absolute -inset-0.5"}),r.createElement("span",{className:"sr-only"},"Open main menu"),t?r.createElement(K._0w,{className:"block h-6 w-6","aria-hidden":"true"}):r.createElement(K.Fm7,{className:"block h-6 w-6","aria-hidden":"true"}))),r.createElement("div",{className:"hidden sm:ml-6 sm:block"},r.createElement("div",{className:"flex space-x-1"},te.map((e=>r.createElement(ee.Link,{key:e.name,to:e.href,className:ne("text-white hover:text-black hover:underline hover:decoration-solid","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":e.current?"page":void 0},e.name)))))))),r.createElement(V.Panel,{className:"sm:hidden"},r.createElement("div",{className:"space-y-1 px-2 pb-3 pt-2"},te.map((e=>r.createElement(V.Button,{key:e.name,as:"a",href:e.href,className:ne("text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":e.current?"page":void 0},e.name))))))})),oe=n(4593);function se(e){let{title:t,href:n}=e;return r.createElement(oe.Z,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",null,t),r.createElement("link",{rel:"canonical",href:n}))}var ae=n.p+"static/Gatsby_Logo-1d7533c94ecda7192fb90773afa1cf85.png",ie=n(2025);var le=()=>{const e=(new Date).getFullYear(),t=()=>r.createElement("span",null,"©"),n=()=>r.createElement(ee.Link,{to:"https://www.gatsbyjs.com/"},r.createElement("span",null,r.createElement("img",{src:ae,alt:"Gatsby.js Logo",className:"inline-block h-6 w-24"}))),o=()=>r.createElement(ee.Link,{to:"https://tailwindcss.com/"},r.createElement("span",null,r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNjIgMzMiPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1wYXRoPSJ1cmwoI3ByZWZpeF9fY2xpcDApIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzOGJkZjgiIGQ9Ik0yNyAwYy03LjIgMC0xMS43IDMuNi0xMy41IDEwLjggMi43LTMuNiA1Ljg1LTQuOTUgOS40NS00LjA1IDIuMDU0LjUxMyAzLjUyMiAyLjAwNCA1LjE0NyAzLjY1M0MzMC43NDQgMTMuMDkgMzMuODA4IDE2LjIgNDAuNSAxNi4yYzcuMiAwIDExLjctMy42IDEzLjUtMTAuOC0yLjcgMy42LTUuODUgNC45NS05LjQ1IDQuMDUtMi4wNTQtLjUxMy0zLjUyMi0yLjAwNC01LjE0Ny0zLjY1M0MzNi43NTYgMy4xMSAzMy42OTIgMCAyNyAwek0xMy41IDE2LjJDNi4zIDE2LjIgMS44IDE5LjggMCAyN2MyLjctMy42IDUuODUtNC45NSA5LjQ1LTQuMDUgMi4wNTQuNTE0IDMuNTIyIDIuMDA0IDUuMTQ3IDMuNjUzQzE3LjI0NCAyOS4yOSAyMC4zMDggMzIuNCAyNyAzMi40YzcuMiAwIDExLjctMy42IDEzLjUtMTAuOC0yLjcgMy42LTUuODUgNC45NS05LjQ1IDQuMDUtMi4wNTQtLjUxMy0zLjUyMi0yLjAwNC01LjE0Ny0zLjY1M0MyMy4yNTYgMTkuMzEgMjAuMTkyIDE2LjIgMTMuNSAxNi4yeiIvPjxwYXRoIGZpbGw9IiMwZjE3MmEiIGQ9Ik04MC45OTYgMTMuNjUyaC00LjcxMnY5LjEyYzAgMi40MzIgMS41OTYgMi4zOTQgNC43MTIgMi4yNDJWMjguN2MtNi4zMDguNzYtOC44MTYtLjk4OC04LjgxNi01LjkyOHYtOS4xMmgtMy40OTZWOS43aDMuNDk2VjQuNTk2bDQuMTA0LTEuMjE2VjkuN2g0LjcxMnYzLjk1MnpNOTguOTU4IDkuN2g0LjEwNHYxOWgtNC4xMDR2LTIuNzM2Yy0xLjQ0NCAyLjAxNC0zLjY4NiAzLjIzLTYuNjUgMy4yMy01LjE2OCAwLTkuNDYyLTQuMzctOS40NjItOS45OTQgMC01LjY2MiA0LjI5NC05Ljk5NCA5LjQ2Mi05Ljk5NCAyLjk2NCAwIDUuMjA2IDEuMjE2IDYuNjUgMy4xOTJWOS43em0tNi4wMDQgMTUuNThjMy40MiAwIDYuMDA0LTIuNTQ2IDYuMDA0LTYuMDggMC0zLjUzNC0yLjU4NC02LjA4LTYuMDA0LTYuMDgtMy40MiAwLTYuMDA0IDIuNTQ2LTYuMDA0IDYuMDggMCAzLjUzNCAyLjU4NCA2LjA4IDYuMDA0IDYuMDh6bTE2Ljk0OC0xOC40M2MtMS40NDQgMC0yLjYyMi0xLjIxNi0yLjYyMi0yLjYyMmEyLjYyNyAyLjYyNyAwIDAxMi42MjItMi42MjIgMi42MjcgMi42MjcgMCAwMTIuNjIyIDIuNjIyYzAgMS40MDYtMS4xNzggMi42MjItMi42MjIgMi42MjJ6TTEwNy44NSAyOC43di0xOWg0LjEwNHYxOWgtNC4xMDR6bTguODU0IDBWLjk2aDQuMTA0VjI4LjdoLTQuMTA0em0zMC43NDItMTloNC4zMzJsLTUuOTY2IDE5aC00LjAyOGwtMy45NTItMTIuODA2LTMuOTkgMTIuODA2aC00LjAyOGwtNS45NjYtMTloNC4zMzJsMy42ODYgMTMuMTEgMy45OS0xMy4xMWgzLjkxNGwzLjk1MiAxMy4xMSAzLjcyNC0xMy4xMXptOS40MjQtMi44NWMtMS40NDQgMC0yLjYyMi0xLjIxNi0yLjYyMi0yLjYyMmEyLjYyNyAyLjYyNyAwIDAxMi42MjItMi42MjIgMi42MjcgMi42MjcgMCAwMTIuNjIyIDIuNjIyYzAgMS40MDYtMS4xNzggMi42MjItMi42MjIgMi42MjJ6bS0yLjA1MiAyMS44NXYtMTloNC4xMDR2MTloLTQuMTA0em0xOC44NDgtMTkuNDk0YzQuMjU2IDAgNy4yOTYgMi44ODggNy4yOTYgNy44MjhWMjguN2gtNC4xMDRWMTcuNDUyYzAtMi44ODgtMS42NzItNC40MDgtNC4yNTYtNC40MDgtMi42OTggMC00LjgyNiAxLjU5Ni00LjgyNiA1LjQ3MlYyOC43aC00LjEwNHYtMTloNC4xMDR2Mi40MzJjMS4yNTQtMS45NzYgMy4zMDYtMi45MjYgNS44OS0yLjkyNnpNMjAwLjQxOCAyLjFoNC4xMDR2MjYuNmgtNC4xMDR2LTIuNzM2Yy0xLjQ0NCAyLjAxNC0zLjY4NiAzLjIzLTYuNjUgMy4yMy01LjE2OCAwLTkuNDYyLTQuMzctOS40NjItOS45OTQgMC01LjY2MiA0LjI5NC05Ljk5NCA5LjQ2Mi05Ljk5NCAyLjk2NCAwIDUuMjA2IDEuMjE2IDYuNjUgMy4xOTJWMi4xem0tNi4wMDQgMjMuMThjMy40MiAwIDYuMDA0LTIuNTQ2IDYuMDA0LTYuMDggMC0zLjUzNC0yLjU4NC02LjA4LTYuMDA0LTYuMDgtMy40MiAwLTYuMDA0IDIuNTQ2LTYuMDA0IDYuMDggMCAzLjUzNCAyLjU4NCA2LjA4IDYuMDA0IDYuMDh6bTIzLjg2NCAzLjkxNGMtNS43MzggMC0xMC4wMzItNC4zNy0xMC4wMzItOS45OTQgMC01LjY2MiA0LjI5NC05Ljk5NCAxMC4wMzItOS45OTQgMy43MjQgMCA2Ljk1NCAxLjkzOCA4LjQ3NCA0LjkwMmwtMy41MzQgMi4wNTJjLS44MzYtMS43ODYtMi42OTgtMi45MjYtNC45NzgtMi45MjYtMy4zNDQgMC01Ljg5IDIuNTQ2LTUuODkgNS45NjYgMCAzLjQyIDIuNTQ2IDUuOTY2IDUuODkgNS45NjYgMi4yOCAwIDQuMTQyLTEuMTc4IDUuMDU0LTIuOTI2bDMuNTM0IDIuMDE0Yy0xLjU5NiAzLjAwMi00LjgyNiA0Ljk0LTguNTUgNC45NHptMTUuMzE0LTE0LjI1YzAgMy40NTggMTAuMjIyIDEuMzY4IDEwLjIyMiA4LjM5OCAwIDMuOC0zLjMwNiA1Ljg1Mi03LjQxIDUuODUyLTMuOCAwLTYuNTM2LTEuNzEtNy43NTItNC40NDZsMy41MzQtMi4wNTJjLjYwOCAxLjcxIDIuMTI4IDIuNzM2IDQuMjE4IDIuNzM2IDEuODI0IDAgMy4yMy0uNjA4IDMuMjMtMi4xMjggMC0zLjM4Mi0xMC4yMjItMS40ODItMTAuMjIyLTguMjg0IDAtMy41NzIgMy4wNzgtNS44MTQgNi45NTQtNS44MTQgMy4xMTYgMCA1LjcgMS40NDQgNy4wMyAzLjk1MmwtMy40NTggMS45MzhjLS42ODQtMS40ODItMi4wMTQtMi4xNjYtMy41NzItMi4xNjYtMS40ODIgMC0yLjc3NC42NDYtMi43NzQgMi4wMTR6bTE3LjUxOCAwYzAgMy40NTggMTAuMjIyIDEuMzY4IDEwLjIyMiA4LjM5OCAwIDMuOC0zLjMwNiA1Ljg1Mi03LjQxIDUuODUyLTMuOCAwLTYuNTM2LTEuNzEtNy43NTItNC40NDZsMy41MzQtMi4wNTJjLjYwOCAxLjcxIDIuMTI4IDIuNzM2IDQuMjE4IDIuNzM2IDEuODI0IDAgMy4yMy0uNjA4IDMuMjMtMi4xMjggMC0zLjM4Mi0xMC4yMjItMS40ODItMTAuMjIyLTguMjg0IDAtMy41NzIgMy4wNzgtNS44MTQgNi45NTQtNS44MTQgMy4xMTYgMCA1LjcgMS40NDQgNy4wMyAzLjk1MmwtMy40NTggMS45MzhjLS42ODQtMS40ODItMi4wMTQtMi4xNjYtMy41NzItMi4xNjYtMS40ODIgMC0yLjc3NC42NDYtMi43NzQgMi4wMTR6Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0icHJlZml4X19jbGlwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNjJ2MzIuNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==",alt:"Tailwindcss.com Logo",className:"inline-block h-12 w-32"})));return r.createElement(r.Fragment,null,r.createElement(ie.Z,null),r.createElement("div",{className:"text-center p-4 w-full"},r.createElement("p",{className:"font-bold"},e," ",r.createElement(t,null)," CRIS N. CANCINO | Built with: ",r.createElement(o,null)," &"," ",r.createElement(n,null),".")))},ue=n(6705);function ce(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ce(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var de=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=ce(e))&&(r&&(r+=" "),r+=t);return r};const Me=e=>"number"==typeof e&&!isNaN(e),fe=e=>"string"==typeof e,me=e=>"function"==typeof e,ge=e=>fe(e)||me(e)?e:null,pe=e=>(0,r.isValidElement)(e)||fe(e)||me(e)||Me(e);function ye(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:s=!0,collapseDuration:a=300}=e;return function(e){let{children:i,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:M}=e;const f=o?`${t}--${l}`:t,m=o?`${n}--${l}`:n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((()=>{const e=d.current,t=f.split(" "),n=r=>{r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,r.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame((()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame((()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,c,a):c()};M||(u?t():(g.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))}),[M]),r.createElement(r.Fragment,null,i)}}function Ne(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const Te={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},Ie=e=>{let{theme:t,type:n,...o}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...o})},je={info:function(e){return r.createElement(Ie,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(Ie,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(Ie,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(Ie,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function he(e){const[,t]=(0,r.useReducer)((e=>e+1),0),[n,o]=(0,r.useState)([]),s=(0,r.useRef)(null),a=(0,r.useRef)(new Map).current,i=e=>-1!==n.indexOf(e),l=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:i,getToast:e=>a.get(e)}).current;function u(e){let{containerId:t}=e;const{limit:n}=l.props;!n||t&&l.containerId!==t||(l.count-=l.queue.length,l.queue=[])}function c(e){o((t=>null==e?[]:t.filter((t=>t!==e))))}function d(){const{toastContent:e,toastProps:t,staleId:n}=l.queue.shift();f(e,t,n)}function M(e,n){let{delay:o,staleId:i,...u}=n;if(!pe(e)||function(e){return!s.current||l.props.enableMultiContainer&&e.containerId!==l.props.containerId||a.has(e.toastId)&&null==e.updateId}(u))return;const{toastId:M,updateId:m,data:g}=u,{props:p}=l,y=()=>c(M),N=null==m;N&&l.count++;const T={...p,style:p.toastStyle,key:l.toastKey++,...Object.fromEntries(Object.entries(u).filter((e=>{let[t,n]=e;return null!=n}))),toastId:M,updateId:m,data:g,closeToast:y,isIn:!1,className:ge(u.className||p.toastClassName),bodyClassName:ge(u.bodyClassName||p.bodyClassName),progressClassName:ge(u.progressClassName||p.progressClassName),autoClose:!u.isLoading&&(I=u.autoClose,j=p.autoClose,!1===I||Me(I)&&I>0?I:j),deleteToast(){const e=Ne(a.get(M),"removed");a.delete(M),Te.emit(4,e);const n=l.queue.length;if(l.count=null==M?l.count-l.displayedToast:l.count-1,l.count<0&&(l.count=0),n>0){const e=null==M?l.props.limit:1;if(1===n||1===e)l.displayedToast++,d();else{const t=e>n?n:e;l.displayedToast=t;for(let e=0;e<t;e++)d()}}else t()}};var I,j;T.iconOut=function(e){let{theme:t,type:n,isLoading:o,icon:s}=e,a=null;const i={theme:t,type:n};return!1===s||(me(s)?a=s(i):(0,r.isValidElement)(s)?a=(0,r.cloneElement)(s,i):fe(s)||Me(s)?a=s:o?a=je.spinner():(e=>e in je)(n)&&(a=je[n](i))),a}(T),me(u.onOpen)&&(T.onOpen=u.onOpen),me(u.onClose)&&(T.onClose=u.onClose),T.closeButton=p.closeButton,!1===u.closeButton||pe(u.closeButton)?T.closeButton=u.closeButton:!0===u.closeButton&&(T.closeButton=!pe(p.closeButton)||p.closeButton);let h=e;(0,r.isValidElement)(e)&&!fe(e.type)?h=(0,r.cloneElement)(e,{closeToast:y,toastProps:T,data:g}):me(e)&&(h=e({closeToast:y,toastProps:T,data:g})),p.limit&&p.limit>0&&l.count>p.limit&&N?l.queue.push({toastContent:h,toastProps:T,staleId:i}):Me(o)?setTimeout((()=>{f(h,T,i)}),o):f(h,T,i)}function f(e,t,n){const{toastId:r}=t;n&&a.delete(n);const s={content:e,props:t};a.set(r,s),o((e=>[...e,r].filter((e=>e!==n)))),Te.emit(4,Ne(s,null==s.props.updateId?"added":"updated"))}return(0,r.useEffect)((()=>(l.containerId=e.containerId,Te.cancelEmit(3).on(0,M).on(1,(e=>s.current&&c(e))).on(5,u).emit(2,l),()=>{a.clear(),Te.emit(3,l)})),[]),(0,r.useEffect)((()=>{l.props=e,l.isToastActive=i,l.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,r=Array.from(a.values());return e.newestOnTop&&r.reverse(),r.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:s,isToastActive:i}}function Ee(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Le(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Ae(e){const[t,n]=(0,r.useState)(!1),[o,s]=(0,r.useState)(!1),a=(0,r.useRef)(null),i=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,r.useRef)(e),{autoClose:u,pauseOnHover:c,closeToast:d,onClick:M,closeOnClick:f}=e;function m(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),i.didMove=!1,document.addEventListener("mousemove",N),document.addEventListener("mouseup",T),document.addEventListener("touchmove",N),document.addEventListener("touchend",T);const n=a.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=Ee(t.nativeEvent),i.y=Le(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(t){if(i.boundingRect){const{top:n,bottom:r,left:o,right:s}=i.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&i.x>=o&&i.x<=s&&i.y>=n&&i.y<=r?y():p()}}function p(){n(!0)}function y(){n(!1)}function N(n){const r=a.current;i.canDrag&&r&&(i.didMove=!0,t&&y(),i.x=Ee(n),i.y=Le(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),r.style.transform=`translate${e.draggableDirection}(${i.delta}px)`,r.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function T(){document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",N),document.removeEventListener("touchend",T);const t=a.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return s(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,r.useEffect)((()=>{l.current=e})),(0,r.useEffect)((()=>(a.current&&a.current.addEventListener("d",p,{once:!0}),me(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),()=>{const e=l.current;me(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)})),[]),(0,r.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||y(),window.addEventListener("focus",p),window.addEventListener("blur",y)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",p),window.removeEventListener("blur",y))})),[e.pauseOnFocusLoss]);const I={onMouseDown:m,onTouchStart:m,onMouseUp:g,onTouchEnd:g};return u&&c&&(I.onMouseEnter=y,I.onMouseLeave=p),f&&(I.onClick=e=>{M&&M(e),i.canCloseOnClick&&d()}),{playToast:p,pauseToast:y,isRunning:t,preventExitTransition:o,toastRef:a,eventHandlers:I}}function Ce(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ve(e){let{delay:t,isRunning:n,closeToast:o,type:s="default",hide:a,className:i,style:l,controlledProgress:u,progress:c,rtl:d,isIn:M,theme:f}=e;const m=a||u&&0===c,g={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};u&&(g.transform=`scaleX(${c})`);const p=de("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":d}),y=me(i)?i({rtl:d,type:s,defaultClassName:p}):de(p,i);return r.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:y,style:g,[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{M&&o()}})}const De=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:s}=Ae(e),{closeButton:a,children:i,autoClose:l,onClick:u,type:c,hideProgressBar:d,closeToast:M,transition:f,position:m,className:g,style:p,bodyClassName:y,bodyStyle:N,progressClassName:T,progressStyle:I,updateId:j,role:h,progress:E,rtl:L,toastId:A,deleteToast:C,isIn:v,isLoading:D,iconOut:w,closeOnClick:O,theme:b}=e,x=de("Toastify__toast",`Toastify__toast-theme--${b}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":O}),z=me(g)?g({rtl:L,position:m,type:c,defaultClassName:x}):de(x,g),S=!!E||!l,k={closeToast:M,type:c,theme:b};let Y=null;return!1===a||(Y=me(a)?a(k):(0,r.isValidElement)(a)?(0,r.cloneElement)(a,k):Ce(k)),r.createElement(f,{isIn:v,done:C,position:m,preventExitTransition:n,nodeRef:o},r.createElement("div",{id:A,onClick:u,className:z,...s,style:p,ref:o},r.createElement("div",{...v&&{role:h},className:me(y)?y({type:c}):de("Toastify__toast-body",y),style:N},null!=w&&r.createElement("div",{className:de("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},w),r.createElement("div",null,i)),Y,r.createElement(ve,{...j&&!S?{key:`pb-${j}`}:{},rtl:L,theme:b,delay:l,isRunning:t,isIn:v,closeToast:M,hide:d,type:c,style:I,className:T,controlledProgress:S,progress:E||0})))},we=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Oe=ye(we("bounce",!0)),be=(ye(we("slide",!0)),ye(we("zoom")),ye(we("flip")),(0,r.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:s}=he(e),{className:a,style:i,rtl:l,containerId:u}=e;function c(e){const t=de("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":l});return me(a)?a({position:e,rtl:l,defaultClassName:t}):de(t,ge(a))}return(0,r.useEffect)((()=>{t&&(t.current=o.current)}),[]),r.createElement("div",{ref:o,className:"Toastify",id:u},n(((e,t)=>{const n=t.length?{...i}:{...i,pointerEvents:"none"};return r.createElement("div",{className:c(e),style:n,key:`container-${e}`},t.map(((e,n)=>{let{content:o,props:a}=e;return r.createElement(De,{...a,isIn:s(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:`toast-${a.key}`},o)})))})))})));be.displayName="ToastContainer",be.defaultProps={position:"top-right",transition:Oe,autoClose:5e3,closeButton:Ce,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let xe,ze=new Map,Se=[],ke=1;function Ye(){return""+ke++}function Pe(e){return e&&(fe(e.toastId)||Me(e.toastId))?e.toastId:Ye()}function Ue(e,t){return ze.size>0?Te.emit(0,e,t):Se.push({content:e,options:t}),t.toastId}function Qe(e,t){return{...t,type:t&&t.type||e,toastId:Pe(t)}}function Re(e){return(t,n)=>Ue(t,Qe(e,n))}function Be(e,t){return Ue(e,Qe("default",t))}function He(e){const[t,n]=r.useState({submitting:!1,response:null});(0,r.useEffect)((()=>{t.response&&o()}),[t.response]);const o=()=>{if(t.response)return 200===t.response.status?Be.success(t.response.msg,{onClose:s}):Be.error(t.response.msg,{onClose:s})},s=()=>{n({submitting:!1,response:null})},{title:a,href:i,is404:l=!1}=e;return r.createElement(ue.Z.Provider,{value:{serverState:t,setServerState:n,handleServerResponse:(e,t)=>{n({submitting:!1,response:{status:e,msg:t}})}}},r.createElement("div",{className:"grid h-full"},r.createElement(se,{title:a,href:i}),!l&&r.createElement(re,null),e.children,r.createElement(be,{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),!l&&r.createElement(le,null)))}Be.loading=(e,t)=>Ue(e,Qe("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Be.promise=function(e,t,n){let r,{pending:o,error:s,success:a}=t;o&&(r=fe(o)?Be.loading(o,n):Be.loading(o.render,{...n,...o}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,o)=>{if(null==t)return void Be.dismiss(r);const s={type:e,...i,...n,data:o},a=fe(t)?{render:t}:t;return r?Be.update(r,{...s,...a}):Be(a.render,{...s,...a}),o},u=me(e)?e():e;return u.then((e=>l("success",a,e))).catch((e=>l("error",s,e))),u},Be.success=Re("success"),Be.info=Re("info"),Be.error=Re("error"),Be.warning=Re("warning"),Be.warn=Be.warning,Be.dark=(e,t)=>Ue(e,Qe("default",{theme:"dark",...t})),Be.dismiss=e=>{ze.size>0?Te.emit(1,e):Se=Se.filter((t=>null!=e&&t.options.toastId!==e))},Be.clearWaitingQueue=function(e){return void 0===e&&(e={}),Te.emit(5,e)},Be.isActive=e=>{let t=!1;return ze.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Be.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const r=ze.get(n||xe);return r&&r.getToast(e)}(e,t);if(n){const{props:r,content:o}=n,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:Ye()};s.toastId!==e&&(s.staleId=e);const a=s.render||o;delete s.render,Ue(a,s)}}),0)},Be.done=e=>{Be.update(e,{progress:1})},Be.onChange=e=>(Te.on(4,e),()=>{Te.off(4,e)}),Be.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Be.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Te.on(2,(e=>{xe=e.containerId||e,ze.set(xe,e),Se.forEach((e=>{Te.emit(0,e.content,e.options)})),Se=[]})).on(3,(e=>{ze.delete(e.containerId||e),0===ze.size&&Te.off(0).off(1).off(5)}))},6705:function(e,t,n){const r=(0,n(7294).createContext)(null);t.Z=r},4405:function(e,t,n){n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(c,a({attr:a({},e.attr)},t),l(e.child))}}function c(e){var t=function(t){var n,o=e.attr,s=e.size,l=e.title,u=i(e,["attr","size","title"]),c=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(o)}}}]);
//# sourceMappingURL=commons-f84d3834381370155728.js.map