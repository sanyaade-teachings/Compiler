(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{155:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),l=c(16),o=c.n(l),i=c(4),s=c.n(i),r=c(69),d=c(7),u=(c(89),c(76)),j=c(206),h=c(199),b=c(204),m=c(207),p=c(202),g=c(196),O=c(200),x=c(203),v=c(198),f=c(201),y=c(205),w=c(208),S=c(193),k="http://15.207.114.84/api/",I={c:"#include<stdio.h>\n\nint main() {\n    // Your Code will come here\n    return 0;\n}\n",cpp:"#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//Your Code will come here\n\treturn 0;\n}\n",python:"# Your code will come here\n"},N=c(70),C=c.n(N),D=c(12),L=Object(S.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var B=function(){var e=Object(a.useState)(I.cpp),t=Object(d.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)("Submit Code to See Result"),o=Object(d.a)(l,2),i=o[0],S=o[1],N=Object(a.useState)("cpp"),B=Object(d.a)(N,2),J=B[0],M=B[1],R=Object(a.useState)(!1),T=Object(d.a)(R,2),E=T[0],F=T[1],P=Object(a.useState)(""),Y=Object(d.a)(P,2),A=Y[0],G=Y[1],W=Object(a.useState)(!1),Q=Object(d.a)(W,2),q=Q[0],z=Q[1],H=function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),alert("submit code"),window.scrollTo({top:0,behavior:"smooth"}),F(!0),a={code:null!=localStorage.getItem("code")?JSON.parse(localStorage.getItem("code")):c,lang:null!=localStorage.getItem("lang")?localStorage.getItem("lang"):J,input:A,result:i},console.log(a),C.a.post("".concat(k,"v1/submit"),a).then((function(e){F(!1);var t=e.data;t.err?S(t.error):S(t.output)})).catch((function(e){F(!1)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=L();return Object(D.jsx)("div",{className:q?"fullBodyDark":"fullBody",children:Object(D.jsxs)(g.a,{children:[E?Object(D.jsx)(v.a,{}):Object(D.jsx)(D.Fragment,{}),Object(D.jsx)("h1",{style:{textAlign:"center"},className:"",children:"Welcome To Nav Code."}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)("div",{className:"column left",children:[Object(D.jsxs)("div",{className:"",children:[Object(D.jsxs)(h.a,{variant:"filled",className:K.formControl,style:{color:q?"white":"black"},children:[Object(D.jsx)(j.a,{style:{color:q?"white":"black"},id:"demo-simple-select-outlined-label",children:"Language"}),Object(D.jsxs)(b.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:J,style:{color:q?"white":"black"},onChange:function(e){return function(e){var t=e.target.value;localStorage.clear(),M(t),n(I[t])}(e)},label:"Language",children:[Object(D.jsx)(m.a,{value:"",children:Object(D.jsx)("em",{children:"None"})}),Object(D.jsx)(m.a,{value:"cpp",children:"C++"}),Object(D.jsx)(m.a,{value:"c",children:"C"}),Object(D.jsx)(m.a,{value:"python",children:"Python3"})]})]}),Object(D.jsx)(w.a,{control:Object(D.jsx)(y.a,{style:{color:"white"},checked:q,onChange:function(e){z(!q)},color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}}),style:{marginLeft:"500px",textAlign:"center"},label:q?"Dark Mode \ud83c\udf1a":"Light Mode \ud83c\udf1e"}),Object(D.jsx)(f.a,{elevation:3,style:{padding:"5px"},children:Object(D.jsx)(u.a,{width:"830",height:"500",language:null!=localStorage.getItem("lang")?localStorage.getItem("lang"):J,theme:q?"vs-dark":"vs-light",value:null!=localStorage.getItem("code")?JSON.parse(localStorage.getItem("code")):c,options:{selectOnLineNumbers:!0,renderIndentGuides:!0,colorDecorators:!0,cursorBlinking:"blink",autoClosingQuotes:"always",find:{autoFindInSelection:"always"},snippetSuggestions:"always"},onChange:function(e,t){localStorage.setItem("lang",J),localStorage.setItem("code",JSON.stringify(e)),n(e)},editorDidMount:function(e){console.log("EDITOR Loaded")}})})]}),Object(D.jsx)("div",{style:{display:"flex"},children:Object(D.jsx)("div",{children:E?Object(D.jsx)(p.a,{}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(x.a,{variant:"contained",color:"primary",onClick:H,style:{margin:"10px"},children:"Run"}),Object(D.jsxs)("p",{children:["if the submission doesn't works please try"," ",Object(D.jsx)(x.a,{color:"secondary",href:"http://nav-compiler.herokuapp.com/",children:"here"})]})]})})})]}),Object(D.jsxs)("div",{className:"column right",children:[Object(D.jsx)("h1",{children:"Output:"}),Object(D.jsx)("div",{className:"",children:Object(D.jsx)(O.a,{style:{width:"300px",height:"30vh"},value:i,disabled:!0,"aria-label":"minimum height",minRows:9,fullwidth:!0,placeholder:"Minimum 3 rows"})}),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"row",children:Object(D.jsx)("h3",{className:"",children:"Provide Input"})}),Object(D.jsx)("div",{children:Object(D.jsx)("textarea",{placeholder:"Give Input",className:"ui-autocomplete-input",style:{width:"300px",height:"60vh"},type:"text",value:A,onChange:function(e){G(e.target.value)}})})]})]})]})]})})};o.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(B,{})}),document.getElementById("root"))},89:function(e,t,c){}},[[155,1,2]]]);
//# sourceMappingURL=main.45ba29dc.chunk.js.map