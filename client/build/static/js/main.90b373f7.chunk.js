(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),l=n(16),o=n.n(l),s=n(4),i=n.n(s),r=n(66),d=n(7),u=(n(81),n(69)),j=n(195),m=n(190),b=n(194),h=n(196),g=n(192),p=n(187),O=n(191),x=n(193),v=n(189),f=n(184),S="http://15.207.114.84/api/",w={c:"#include<stdio.h>\n\nint main() {\n    // Your Code will come here\n    return 0;\n}\n",cpp:"#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//Your Code will come here\n\treturn 0;\n}\n",python:"# Your code will come here\n"},y=n(67),I=n.n(y),C=n(13),N=Object(f.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var k=function(){var e=Object(a.useState)(w.cpp),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)("Submit Code to See Result"),o=Object(d.a)(l,2),s=o[0],f=o[1],y=Object(a.useState)("cpp"),k=Object(d.a)(y,2),D=k[0],J=k[1],L=Object(a.useState)(!1),E=Object(d.a)(L,2),M=E[0],R=E[1],T=Object(a.useState)(""),Y=Object(d.a)(T,2),B=Y[0],F=Y[1],P=function(){var e=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),alert("submit code"),window.scrollTo({top:0,behavior:"smooth"}),R(!0),a={code:null!=localStorage.getItem("code")?JSON.parse(localStorage.getItem("code")):n,lang:null!=localStorage.getItem("lang")?localStorage.getItem("lang"):D,input:B,result:s},console.log(a),I.a.post("".concat(S,"v1/submit"),a).then((function(e){console.log(e.data),R(!1);var t=e.data;t.err?f(t.error):f(t.output)})).catch((function(e){R(!1),console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=N();return Object(C.jsxs)(p.a,{children:[M?Object(C.jsx)(v.a,{}):Object(C.jsx)(C.Fragment,{}),Object(C.jsx)("h1",{className:"",children:"Custom Code"}),Object(C.jsxs)("div",{className:"",style:{display:"flex",justifyContent:"space-between",flexDirection:"row"},children:[Object(C.jsxs)("div",{className:"row",children:[Object(C.jsxs)("div",{className:"col-12 mt-5",children:[Object(C.jsxs)(m.a,{variant:"outlined",className:W.formControl,children:[Object(C.jsx)(j.a,{id:"demo-simple-select-outlined-label",children:"Language"}),Object(C.jsxs)(b.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:D,onChange:function(e){return function(e){var t=e.target.value;localStorage.clear(),J(t),c(w[t])}(e)},label:"Language",children:[Object(C.jsx)(h.a,{value:"",children:Object(C.jsx)("em",{children:"None"})}),Object(C.jsx)(h.a,{value:"cpp",children:"C++"}),Object(C.jsx)(h.a,{value:"c",children:"C"}),Object(C.jsx)(h.a,{value:"python",children:"Python3"})]})]}),Object(C.jsx)("div",{type:"text",id:"code",className:"card shadow",children:Object(C.jsx)(u.a,{width:"900",height:"500",language:null!=localStorage.getItem("lang")?localStorage.getItem("lang"):D,theme:"vs-dark",value:null!=localStorage.getItem("code")?JSON.parse(localStorage.getItem("code")):n,options:{selectOnLineNumbers:!0,renderIndentGuides:!0,colorDecorators:!0,cursorBlinking:"blink",autoClosingQuotes:"always",find:{autoFindInSelection:"always"},snippetSuggestions:"always"},onChange:function(e,t){localStorage.setItem("lang",D),localStorage.setItem("code",JSON.stringify(e)),c(e)},editorDidMount:function(e){console.log("EDITOR Loaded")}})})]}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("p",{className:"lead d-block my-0",children:"Provide Input"}),Object(C.jsx)("textarea",{type:"text",id:"input",value:B,onChange:function(e){F(e.target.value)}})]}),M?Object(C.jsx)(g.a,{}):Object(C.jsx)(x.a,{variant:"contained",color:"primary",onClick:P,children:"Submit"})]}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("h1",{children:"Output:"}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(O.a,{style:{width:"300px"},value:s,disabled:!0,"aria-label":"minimum height",minRows:9,fullWidth:!0,placeholder:"Minimum 3 rows"})})]})]})]})};o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(k,{})}),document.getElementById("root"))},81:function(e,t,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.90b373f7.chunk.js.map