(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{50:function(e,t,c){e.exports={card:"Card_card__3blqV"}},51:function(e,t,c){e.exports={form:"QuoteForm_form__1SEI3",loading:"QuoteForm_loading__iG1BA",control:"QuoteForm_control__2mviM",actions:"QuoteForm_actions__1qMHQ"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),r=c(37),s=c(50),a=c.n(s),i=c(1),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(51),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(o.a,{when:s,message:function(e){return"Are you sure to leave from this page?"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{className:"btn",onClick:function(){a(!1)},children:"Add Quote"})})]})})]})},h=c(35),x=c(36);t.default=function(e){var t=Object(o.h)(),c=Object(h.a)(x.b),r=c.sendRequest,s=c.status;Object(n.useEffect)((function(){"completed"===s&&t.push("/quotes")}),[s,t]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"NewQuote"}),Object(i.jsx)(b,{isLoading:"pending"===s,onAddQuote:function(e){r(e)}})]})}}}]);
//# sourceMappingURL=6.c2783dd7.chunk.js.map