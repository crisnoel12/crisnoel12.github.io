(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1GPU":function(e,a,t){"use strict";t.r(a);var n=t("R/WZ"),r=t("ofer"),c=t("tRbT"),l=t("30+C"),i=t("hlie"),o=t("Z3vd"),s=t("q1tI"),u=t.n(s),m=t("qhky"),d=t("Ejz1"),p=t("K7Ss"),f=t("rTy6"),g=t("i6Ar"),h=Object(n.a)((function(e){return{card:{height:"100%",padding:e.spacing(2)+"px "+e.spacing(2)+"px 0",textAlign:"center"}}}));a.default=function(e){var a=e.data,t=h(),n=a.allContentfulPost.nodes;return u.a.createElement(d.b,null,u.a.createElement(r.a,{variant:"h3",gutterBottom:!0},"Blog"),u.a.createElement(g.a,null),u.a.createElement(c.a,{container:!0,spacing:4},n.map((function(e){var a=e.title,n=e.date,s=e.image,d=e.content,g=e.slug,h=JSON.parse(e.content.raw).content.find((function(e){return"paragraph"===e.nodeType})).content[0].value;return u.a.createElement(c.a,{key:e.id,item:!0,xs:6,lg:4},u.a.createElement(m.b,null,u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("title",null,"Cris Noel | Blog"),u.a.createElement("link",{rel:"canonical",href:"https://crisnoel12.github.io/blog"})),u.a.createElement(l.a,{className:t.card},u.a.createElement("img",{width:"100%",height:"180px",src:"https://"+s.file.url}),u.a.createElement(r.a,{variant:"h5"},a),u.a.createElement(p.a,{date:n,content:d.raw}),u.a.createElement(f.a,{excerpt:h}),u.a.createElement(i.a,{href:"/blog/"+g},u.a.createElement(o.a,{variant:"contained",color:"primary"},u.a.createElement(r.a,null,"Read More")))))}))))}},"30+C":function(e,a,t){"use strict";var n=t("wx14"),r=t("Ff2n"),c=t("q1tI"),l=t("iuhU"),i=t("kKAo"),o=t("H2TA"),s=c.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.raised,u=void 0!==s&&s,m=Object(r.a)(e,["classes","className","raised"]);return c.createElement(i.a,Object(n.a)({className:Object(l.a)(t.root,o),elevation:u?8:1,ref:a},m))}));a.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},K7Ss:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("R/WZ"),r=t("ofer"),c=t("q1tI"),l=t.n(c),i=t("4xgn"),o=t("e9YP"),s=t.n(o),u=t("WB8x"),m=t.n(u),d=Object(n.a)((function(e){return{metaData:{display:"inline-block",margin:"10px 0px 10px -2px"},alignSVGandText:{verticalAlign:"middle",display:"inline-block"},icon:{marginRight:e.spacing(.4)},metaText:{marginRight:e.spacing(2)}}}));function p(e){var a=e.date,t=e.content,n=d();return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{variant:"caption",className:n.metaData},l.a.createElement(s.a,{htmlColor:"yellowgreen",className:n.alignSVGandText+" "+n.icon}),l.a.createElement(r.a,{variant:"caption",color:"textSecondary",className:n.alignSVGandText+" "+n.metaText},a)),l.a.createElement(r.a,{variant:"caption",className:n.metaData},l.a.createElement(m.a,{htmlColor:"orange",className:n.alignSVGandText+" "+n.icon}),l.a.createElement(r.a,{variant:"caption",color:"textSecondary",className:n.alignSVGandText+" "+n.metaText},Object(i.b)(t))))}},WB8x:function(e,a,t){"use strict";var n=t("TqRt"),r=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t("q1tI")),l=(0,n(t("8/g6")).default)(c.createElement(c.Fragment,null,c.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),c.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"Schedule");a.default=l},e9YP:function(e,a,t){"use strict";var n=t("TqRt"),r=t("284h");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t("q1tI")),l=(0,n(t("8/g6")).default)(c.createElement("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}),"Today");a.default=l},i6Ar:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("R/WZ"),r=t("q1tI"),c=t.n(r),l=Object(n.a)((function(e){return{root:{display:"block",height:"5px",width:"55px",margin:"-5px 0 20px",backgroundColor:e.palette.primary.main}}}));function i(){var e=l();return c.a.createElement("span",{className:e.root})}},rTy6:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("R/WZ"),r=t("ofer"),c=t("q1tI"),l=t.n(c),i=Object(n.a)((function(e){return{root:{marginBottom:e.spacing(1)}}}));function o(e){var a=e.excerpt,t=i();return l.a.createElement(r.a,{variant:"body1",className:t.root},a.length>230?a.slice(0,230)+"...":a)}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-7d6c9e4230ba36ace738.js.map