(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),i=c.n(n),a=c(5),d=c(1),s=(c(10),c(11),c(12),c(4)),b=c.n(s),o=c(0),l=function(t){var e=t.tabs,c=t.onTabSelected,n=t.selectedTabId,i=e.find((function(t){return t.id===n}))||e[0];return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":i.id===t.id}),children:Object(o.jsx)("a",{"data-cy":"TabLink",href:"#".concat(t.id),onClick:function(){i.id!==t.id&&c(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:i.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(d.useState)(r[0].id),e=Object(a.a)(t,2),c=e[0],n=e[1],i=r.find((function(t){return c===t.id}));return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(null===i||void 0===i?void 0:i.title)}),Object(o.jsx)(l,{tabs:r,onTabSelected:function(t){n(t.id)},selectedTabId:c})]})};i.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fb31194a.chunk.js.map