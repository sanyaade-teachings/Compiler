(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{154:function(e,t,a){"use strict";a.r(t);var c=a(2),l=a.n(c),o=a(16),n=a.n(o),r=a(4),s=a.n(r),i=a(68),d=a(7),g=(a(88),a(75)),u=a(205),j=a(198),p=a(203),h=a(206),m=a(201),b=a(195),O=a(199),S=a(202),v=a(197),f=a(200),x=a(204),y=a(207),I=a(192),N="http://15.207.114.84/api/",w={c:"#include<stdio.h>\n\nint main() {\n    // Your Code will come here\n    return 0;\n}\n",cpp:"#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//Your Code will come here\n\treturn 0;\n}\n",python:"# Your code will come here\n",java:"class test {\n  public static void main(String args[]){\n      // Your Code will come here\n  }\n}\n"},J=a(69),k=a.n(J),C=a(12),E=Object(I.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var B=function(){var e=Object(c.useState)(w.cpp),t=Object(d.a)(e,2),a=(t[0],t[1]),l=Object(c.useState)("Submit Code to See Result"),o=Object(d.a)(l,2),n=o[0],r=o[1],I=Object(c.useState)("cpp"),J=Object(d.a)(I,2),B=J[0],L=J[1],T=Object(c.useState)(!1),D=Object(d.a)(T,2),M=D[0],R=D[1],Y=Object(c.useState)(""),F=Object(d.a)(Y,2),G=F[0],K=F[1],A=Object(c.useState)(!1),P=Object(d.a)(A,2),W=P[0],Q=P[1],q=Object(c.useState)(w.java),z=Object(d.a)(q,2),H=z[0],U=z[1],V=Object(c.useState)(w.cpp),X=Object(d.a)(V,2),Z=X[0],$=X[1],_=Object(c.useState)(w.c),ee=Object(d.a)(_,2),te=ee[0],ae=ee[1],ce=Object(c.useState)(w.python),le=Object(d.a)(ce,2),oe=le[0],ne=le[1],re=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),R(!0),a="java"===B?{code:null!=localStorage.getItem("javacode")?JSON.parse(localStorage.getItem("javacode")):H,lang:B,input:G,result:n}:"cpp"===B?{code:null!=localStorage.getItem("cppcode")?JSON.parse(localStorage.getItem("cppcode")):Z,lang:B,input:G,result:n}:"c"===B?{code:null!=localStorage.getItem("ccode")?JSON.parse(localStorage.getItem("ccode")):te,lang:B,input:G,result:n}:{code:null!=localStorage.getItem("pythoncode")?JSON.parse(localStorage.getItem("pythoncode")):oe,lang:B,input:G,result:n},k.a.post("".concat(N,"v1/submit"),a).then((function(e){R(!1);var t=e.data;t.err?r(t.error):r(t.output)})).catch((function(e){R(!1)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();!function(e,t){var a=Object(c.useRef)(t);Object(c.useEffect)((function(){a.current=t})),Object(c.useEffect)((function(){function e(e){13===e.keyCode&&e.shiftKey&&e.ctrlKey&&a.current(e)}return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[e])}("Enter",re);var se=E();return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("theme"));null==e&&(e=!1),L("cpp"),localStorage.setItem("theme",e)}),[]),Object(C.jsxs)("div",{className:W?"fullBodyDark":"fullBody",children:[Object(C.jsxs)(b.a,{children:[M?Object(C.jsx)(v.a,{}):Object(C.jsx)(C.Fragment,{}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsxs)("div",{className:"column left",children:[Object(C.jsxs)("div",{className:"",children:[Object(C.jsxs)(j.a,{variant:"filled",className:se.formControl,style:{color:W?"white":"black"},children:[Object(C.jsx)(u.a,{style:{color:W?"white":"black"},id:"demo-simple-select-outlined-label",children:"Language"}),Object(C.jsxs)(p.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:B,style:{color:W?"white":"black"},onChange:function(e){return function(e){var t=e.target.value;if(localStorage.setItem("lang",t),L(t),"java"===t){var c=localStorage.getItem("javacode");null==c?(a(w[t]),localStorage.setItem("code",JSON.stringify(w[t]))):(localStorage.setItem("code",JSON.stringify(c)),a(c))}else if("cpp"===t){var l=localStorage.getItem("cppcode");null==l?(a(w[t]),localStorage.setItem("code",JSON.stringify(w[t]))):(localStorage.setItem("code",JSON.stringify(l)),a(l))}else if("c"===t){var o=localStorage.getItem("ccode");null==o?(a(w[t]),localStorage.setItem("code",JSON.stringify(w[t]))):(localStorage.setItem("code",JSON.stringify(o)),a(o))}else{var n=localStorage.getItem("pythoncode");null==n?(a(w[t]),localStorage.setItem("code",JSON.stringify(w[t]))):(localStorage.setItem("code",JSON.stringify(n)),a(n))}}(e)},label:"Language",children:[Object(C.jsx)(h.a,{value:"cpp",children:"C++"}),Object(C.jsx)(h.a,{value:"c",children:"C"}),Object(C.jsx)(h.a,{value:"java",children:"Java 11"}),Object(C.jsx)(h.a,{value:"python",children:"Python3"})]})]}),Object(C.jsx)(y.a,{control:Object(C.jsx)(x.a,{style:{color:"white"},checked:W,onChange:function(e){localStorage.setItem("theme",!W),Q(!W)},color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}}),style:{marginLeft:"500px",textAlign:"center"},label:W?"\ud83c\udf1a":"\ud83c\udf1e"}),Object(C.jsx)(f.a,{elevation:3,style:{padding:"5px"},children:Object(C.jsx)(g.a,{width:"830",height:"500",language:null!=localStorage.getItem("lang")?localStorage.getItem("lang"):B,theme:W?"vs-dark":"vs-light",value:"java"===B?null!=localStorage.getItem("javacode")?JSON.parse(localStorage.getItem("javacode")):H:"cpp"===B?null!=localStorage.getItem("cppcode")?JSON.parse(localStorage.getItem("cppcode")):Z:"c"===B?null!=localStorage.getItem("ccode")?JSON.parse(localStorage.getItem("ccode")):te:null!=localStorage.getItem("pythoncode")?JSON.parse(localStorage.getItem("pythoncode")):oe,options:{selectOnLineNumbers:!0,renderIndentGuides:!0,colorDecorators:!0,cursorBlinking:"blink",autoClosingQuotes:"always",find:{autoFindInSelection:"always"},snippetSuggestions:"always"},onChange:function(e,t){"java"===B?(localStorage.setItem("lang",B),localStorage.setItem("javacode",JSON.stringify(e)),U(e)):"cpp"===B?(localStorage.setItem("lang",B),localStorage.setItem("cppcode",JSON.stringify(e)),$(e)):"c"===B?(localStorage.setItem("lang",B),localStorage.setItem("ccode",JSON.stringify(e)),ae(e)):(localStorage.setItem("lang",B),localStorage.setItem("pythoncode",JSON.stringify(e)),ne(e)),localStorage.setItem("lang",B),localStorage.setItem("code",JSON.stringify(e)),a(e)},editorDidMount:function(e){var t=JSON.parse(localStorage.getItem("theme"));null==t&&(t=!1),Q(t)}})})]}),Object(C.jsx)("div",{style:{display:"flex"},children:Object(C.jsx)("div",{children:M?Object(C.jsx)(m.a,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S.a,{variant:"contained",color:"primary",onClick:re,style:{margin:"10px"},children:"Run (ctrl + shift + enter) \ud83c\udfc3\ud83c\udffb\u200d\u2642\ufe0f"}),Object(C.jsxs)("p",{children:["If the submission doesn't works please try"," ",Object(C.jsx)(S.a,{color:"secondary",href:"http://nav-compiler.herokuapp.com/",children:"here"})]}),Object(C.jsx)("p",{children:"Always make sure you are connected to the http version not the https version \ud83d\ude09 (specially if you use brave browser!)"})]})})})]}),Object(C.jsxs)("div",{className:"column right",children:[Object(C.jsx)("h1",{children:"Input: \ud83d\udcdd "}),Object(C.jsx)("div",{children:Object(C.jsx)("textarea",{placeholder:"Give Input",className:"ui-autocomplete-input",style:{width:"350px",height:"30vh"},type:"text",value:G,onChange:function(e){K(e.target.value)}})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("h1",{className:"",children:"Output: \ud83e\uddfe"})}),Object(C.jsx)("div",{className:"",children:Object(C.jsx)(O.a,{style:{width:"350px",height:"60vh"},value:n,disabled:!0,"aria-label":"minimum height",minRows:9,fullwidth:"true",placeholder:"Minimum 3 rows"})})]})]})]})]}),Object(C.jsxs)("div",{className:"footer",children:[Object(C.jsx)("div",{style:{marginTop:"30px"},children:Object(C.jsx)("p",{children:"Made with \ud83d\udc9c By Navneet Kumar Singh"})}),Object(C.jsxs)("div",{style:{marginTop:"10px"},children:[Object(C.jsxs)("div",{children:["\ud83d\udcf7",Object(C.jsxs)("a",{href:"https://www.instagram.com/navneetkrsinghhh/",children:["Instagram"," "]})," "]}),Object(C.jsxs)("div",{style:{marginTop:"10px"},children:["\ud83d\udc31\u200d\ud83d\ude80",Object(C.jsx)("a",{href:"https://github.com/Navneet7716",children:" Github "})," "]}),Object(C.jsxs)("div",{style:{marginTop:"10px",marginBottom:"10px"},children:["\ud83c\udfae",Object(C.jsx)("a",{href:"https://discord.gg/NW97apa",children:" Discord "})," "]})]})]})]})};n.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(B,{})}),document.getElementById("root"))},88:function(e,t,a){}},[[154,1,2]]]);
//# sourceMappingURL=main.28d8c791.chunk.js.map