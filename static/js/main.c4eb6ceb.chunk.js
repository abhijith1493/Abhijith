(this["webpackJsonpdebugging-google-search-suggestions"]=this["webpackJsonpdebugging-google-search-suggestions"]||[]).push([[0],{60:function(e,s,c){},61:function(e,s,c){},66:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c.n(t),i=c(43),l=c.n(i),n=(c(60),c(44)),j=c(45),d=c(46),r=c(52),o=(c(61),c(82)),h=c(49),b=c.n(h),m=c(51),O=c.n(m),x=c(50),v=c.n(x),N=c(1),u=function(e){Object(d.a)(c,e);var s=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return(e=s.call.apply(s,[this].concat(a))).state={home:!0,about:!1,contact:!1,aboutScroll:0},e.homeFun=function(){!0!==e.state.home&&e.setState((function(e){return{home:!e.home,about:!e.about,aboutScroll:e.aboutScroll}}))},e.aboutUs=function(){!0!==e.state.about&&e.setState((function(e){return{home:!e.home,about:!e.about,contact:!e.contact}}))},e.contact=function(){!0!==e.state.about&&e.setState((function(e){return{home:!e.home,about:!e.about,contact:!e.contact}}))},e.aboutScroll=function(s){var c=s.target.scrollTop;e.setState((function(e){return{home:e.home,about:e.about,aboutScroll:c}}))},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this.state,s=e.aboutScroll;console.log(s);var c=null,t=null;return!0===e.about&&(c="animeClass",console.log("good")),!0===e.home&&(t="animeClass1",console.log("good")),console.log(this.aboutScroll.a),Object(N.jsxs)("div",{className:"i",children:[Object(N.jsx)("div",{className:"Header",children:Object(N.jsxs)("div",{className:"stack",children:[Object(N.jsx)(o.a,{onClick:this.homeFun,"aria-label":"home",children:Object(N.jsx)(b.a,{className:"home"})}),Object(N.jsx)(o.a,{onClick:this.aboutUs,"aria-label":"about",children:Object(N.jsx)(v.a,{className:"home"})}),Object(N.jsx)(o.a,{onClick:this.contact,"aria-label":"contact",children:Object(N.jsx)(O.a,{className:"home"})})]})}),Object(N.jsxs)("div",{className:"i-left",children:[Object(N.jsxs)("div",{className:"codeWrap",children:[Object(N.jsx)("div",{className:"print",children:Object(N.jsxs)("p",{children:["print","{"]})}),Object(N.jsxs)("div",{className:"aboutCoderLeft",children:[Object(N.jsx)("div",{className:"s1",children:"H"}),Object(N.jsx)("div",{className:"s2",children:"e"}),Object(N.jsx)("div",{className:"s3",children:"l"}),Object(N.jsx)("div",{className:"s4",children:"l"}),Object(N.jsx)("div",{className:"s5",children:"o"}),Object(N.jsx)("div",{className:"space",children:" "}),Object(N.jsx)("div",{className:"s7",children:"o"}),Object(N.jsx)("div",{className:"s8",children:"r"}),Object(N.jsx)("div",{className:"s9",children:"l"}),Object(N.jsx)("div",{className:"s10",children:"d"}),Object(N.jsx)("div",{className:"s11",children:"!"})]}),Object(N.jsx)("div",{className:"print",children:Object(N.jsx)("p",{children:"}"})})]}),Object(N.jsxs)("div",{className:"heading-wrap",children:[Object(N.jsxs)("div",{className:"i-heading",children:[Object(N.jsx)("h2",{className:"i-h2",children:"Hi, My name is"}),Object(N.jsx)("h1",{className:"i-h1",children:"Abhijith Mohan"})]}),Object(N.jsx)("div",{className:"i-title-wrapper",children:Object(N.jsxs)("div",{className:"i-item",children:[Object(N.jsx)("div",{className:"item-title",children:"React Js"}),Object(N.jsx)("div",{className:"item-title",children:"Node Js"}),Object(N.jsx)("div",{className:"item-title",children:"Python"}),Object(N.jsx)("div",{className:"item-title",children:"SQL Lite"}),Object(N.jsx)("div",{className:"item-title",children:"Mongoose"}),Object(N.jsx)("div",{className:"item-title",children:"JavaScript"}),Object(N.jsx)("div",{className:"item-title",children:"HTML"}),Object(N.jsx)("div",{className:"item-title",children:"CSS"})]})}),Object(N.jsx)("div",{className:"i-para",children:Object(N.jsx)("p",{children:"A web app developer who is fond of MERN stack development, proud CCBPien. I create stylish, modern websites, web services, and websites."})})]})]}),Object(N.jsx)("div",{className:"i-right",children:Object(N.jsxs)("div",{id:"i-right-wrapper",className:"i-right-wrapper",children:[Object(N.jsx)("div",{className:"home abs ".concat(t),children:Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"i-r-inside-wrapper",children:[Object(N.jsx)("div",{className:"print",children:Object(N.jsxs)("p",{children:["print","{"]})}),Object(N.jsxs)("div",{className:"aboutCoder",children:[Object(N.jsx)("div",{className:"s1",children:"H"}),Object(N.jsx)("div",{className:"s2",children:"e"}),Object(N.jsx)("div",{className:"s3",children:"l"}),Object(N.jsx)("div",{className:"s4",children:"l"}),Object(N.jsx)("div",{className:"s5",children:"o"}),Object(N.jsx)("div",{className:"space"}),Object(N.jsx)("div",{className:"s6",children:"W"}),Object(N.jsx)("div",{className:"s7",children:"o"}),Object(N.jsx)("div",{className:"s8",children:"r"}),Object(N.jsx)("div",{className:"s9",children:"l"}),Object(N.jsx)("div",{className:"s10",children:"d"}),Object(N.jsx)("div",{className:"s11",children:"!"})]}),Object(N.jsx)("div",{className:"print",children:Object(N.jsx)("p",{children:"}"})})]})})}),Object(N.jsxs)("div",{id:"aboutUs",onScroll:this.aboutScroll,className:"aboutUs abs ".concat(c),children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{id:"h1",className:"AboutHeading",children:"My sKiLLs!"})," "]}),Object(N.jsx)("div",{style:{marginLeft:"".concat(s,"px")},children:Object(N.jsxs)("h1",{id:"h2",className:"skills",children:["Reac ",Object(N.jsx)("span",{className:"jumb",children:"t"})]})}),Object(N.jsx)("div",{style:{marginRight:"".concat(s,"px")},children:Object(N.jsxs)("h1",{id:"h3",className:"Nodeskills",children:["N",Object(N.jsx)("span",{className:"jumb",children:"O"}),"deJS"]})}),Object(N.jsx)("div",{children:Object(N.jsx)("h1",{id:"h4",className:"sql",children:"SQL"})}),Object(N.jsx)("div",{children:Object(N.jsxs)("h1",{className:"skills",children:["HTM",Object(N.jsx)("span",{className:"Htmljumb",children:"L"})]})}),Object(N.jsx)("div",{style:{marginRight:"".concat(s+1e3,"px")},children:Object(N.jsx)("h1",{className:"javascript",children:"jAVAsCRIPT"})})]}),Object(N.jsx)("div",{className:"contact",children:Object(N.jsx)("h2",{children:"coms"})})]})})]})}}]),c}(t.Component),p=u;var g=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(p,{})})};l.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(g,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.c4eb6ceb.chunk.js.map