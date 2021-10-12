(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(20),r=a.n(c),l=(a(27),a(28),a(8)),o=a(2),i=Object(n.createContext)(),d=a(10),m=a(7),j=a(4),b=a(0);var u=function(){var e=Object(n.useContext)(i).addNote,t=Object(n.useState)({title:"",description:"",tag:""}),a=Object(j.a)(t,2),s=a[0],c=a[1],r=function(e){c(Object(m.a)(Object(m.a)({},s),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"AddForm",children:Object(b.jsxs)("div",{style:{minwidth:"auto",maxWidth:"40rem",minHeight:"auto",maxHeight:"30rem"},className:"card bg-dark px-5  text-light p-4 my-3",children:[Object(b.jsx)("h3",{className:"my-3 text-info",children:"ADD A NOTE"}),Object(b.jsxs)("form",{className:"my-3 ",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(b.jsx)("input",{value:s.title,onChange:r,name:"title",type:"text",className:"form-control ",placeholder:"Minimum 3 Letters",id:"title",autoComplete:"off"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(b.jsx)("textarea",{value:s.description,type:"text",name:"description",className:"form-control  ",rows:"3",id:"exampleInputPassword1",onChange:r,placeholder:"Minimum 3 Letters",autoComplete:"off"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"tag",className:"form-label",children:"tag"}),Object(b.jsx)("input",{value:s.tag,type:"text",name:"tag",className:"form-control ",id:"tag",onChange:r,autoComplete:"off"})]}),Object(b.jsx)("button",{disabled:s.title.length<3||s.description.length<3,onClick:function(t){t.preventDefault(),e(s),c({title:"",description:"",tag:""})},className:"btn btn-info my-1",children:"ADD"})]})]})})};var h=function(e){var t=Object(n.useContext)(i).message,a=Object(n.useState)(!1),s=Object(j.a)(a,2),c=s[0],r=s[1];return Object(n.useEffect)((function(){r(null!==t)})),Object(b.jsx)("div",{className:"alert alert-primary  ".concat(c?"":" fade"),role:"alert",children:t})};var p=function(){var e=Object(o.g)(),t=Object(n.useContext)(i),a=t.usersData,s=t.logout,c=a.user.name;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)(l.b,{className:"navbar-brand",to:"/",children:["Notebook",Object(b.jsx)("i",{style:{padding:"0rem 0rem  0rem 0.8rem"},className:"fas fa-clipboard"})]}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{className:"nav-link mx-1 ".concat("/home"===e.pathname?"active":""),"aria-current":"page",to:"/home",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(l.b,{className:"mx-1 nav-link ".concat("/about"===e.pathname?"active":""),to:"/about",children:"About"})}),Object(b.jsxs)("div",{class:"btn-group dropdown mx-1",children:[Object(b.jsxs)("button",{type:"button",class:"btn btn-dark dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Add Note",Object(b.jsx)("i",{style:{padding:"0rem 0rem 0rem 0.5rem"},className:"fas fa-plus"})]}),Object(b.jsx)("ul",{style:{width:"38rem",height:"10rem"},class:"dropdown-menu  bg-dark\t",children:Object(b.jsx)("div",{style:{},children:Object(b.jsx)(u,{})})})]})]}),Object(b.jsxs)("div",{class:"btn-group  dropstart",children:[Object(b.jsx)("button",{type:"button",class:"btn btn-dark dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:c}),Object(b.jsxs)("ul",{class:"dropdown-menu  my-5 mx-0",children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{class:"dropdown-item   my-2 ",to:"/signup",children:"Signup"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{class:"dropdown-item  my-2",to:"/login",children:"Login"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{onClick:function(){s()},class:"dropdown-item   my-2",to:"/login",children:"Logout"})})]})]})]})]})}),Object(b.jsx)(h,{})]})};var x=function(e){var t=e.title,a=e.description,s=e.tag,c=e.randomColor,r=e.id,l=e.updateNote,o=Object(n.useContext)(i),d=o.DeleteNote;return o.EditNote,Object(b.jsxs)("div",{className:"card text-white bg-".concat(c,"  my-4"),style:{maxWidth:"18rem",margin:" auto"},children:[Object(b.jsx)("div",{className:"card-body ",children:Object(b.jsx)("span",{className:"badge  bg-dark p-2 py-2",children:s})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t}),Object(b.jsx)("p",{className:"card-text",children:a}),Object(b.jsx)("i",{className:"fas fa-edit mx-5",onClick:function(){l({title:t,description:a,tag:s,id:r})}}),Object(b.jsx)("i",{onClick:function(){d(r)},className:"fas fa-trash-alt "})]})]})},O=function(){var e=Object(n.useContext)(i),t=e.notes,a=(e.setNotes,e.EditNote),s=e.FetchAllNotes;Object(n.useEffect)((function(){s()}),[]);var c=Object(n.useRef)(""),r=Object(n.useRef)(""),l=Object(n.useState)({title:"",description:"",tag:""}),o=Object(j.a)(l,2),u=o[0],h=o[1],p=function(e){c.current.click(),h(e)},O=function(e){h(Object(m.a)(Object(m.a)({},u),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{className:"row  ",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{ref:c,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",visible:"none"}),Object(b.jsx)("div",{className:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Modal title"}),Object(b.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{className:"modal-body",children:Object(b.jsxs)("form",{className:"my-3",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"title",className:"form-label",children:"Title"}),Object(b.jsx)("input",{value:u.title,onChange:O,name:"title",type:"text",className:"form-control",id:"title","aria-describedby":"emailHelp"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(b.jsx)("textarea",{value:u.description,type:"text",name:"description",className:"form-control ",id:"exampleInputPassword1",rows:"3",onChange:O})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"tag",className:"form-label",children:"tag"}),Object(b.jsx)("input",{value:u.tag,type:"text",name:"tag",className:"form-control ",id:"tag",onChange:O})]})]})}),Object(b.jsxs)("div",{className:"modal-footer",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",ref:r,children:"Close"}),Object(b.jsx)("button",{type:"button",onClick:function(e){!function(e){e.preventDefault(),console.log(u);var t=u.id,n=u.title,s=u.description,c=u.tag;a(t,n,s,c),r.current.click()}(e)},className:"btn btn-primary",children:"Save changes"})]})]})})})]}),null===localStorage.getItem("token")?" ":t.map((function(e){var t=["primary","secondary","success","danger"],a=t[Math.floor(Math.random()*t.length)];return Object(b.jsx)(x,{title:e.title,description:e.description,tag:e.tag,randomColor:a,id:e._id,updateNote:p},e._id)}))]})},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(O,{})})},g=[{image:"/images/Add.png",title:"Add Note"},{image:"/images/Delete.png",title:"Delete Add"},{image:"/images/Login.png",title:"Login"}],v=(a(19),a.p+"static/media/noun_Arrow_1807380.18be108e.svg");a.p;var N=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),a=t[0],s=t[1],c=g.length;if(!Array.isArray(g)||c<=0)return null;var r=function(){s(a===c-1?0:a+1)};return Object(b.jsx)("section",{className:"slider",children:g.map((function(e,t){return Object(b.jsx)("div",{className:t===a?"slide active":"slide",children:t===a&&Object(b.jsxs)("div",{className:"slide-content",children:[Object(b.jsx)("img",{src:"".concat(e.image),alt:"Images",className:"Image"}),Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("img",{src:v,className:"left-arrow",onClick:r})]})},t)}))})};var y=function(){return Object(b.jsxs)("div",{className:" d-flex text-black  my-4 w-100",children:[Object(b.jsxs)("div",{className:"container ",children:[Object(b.jsx)("a",{href:"http://www.instagram.com/pratikartik",target:"_blank",children:Object(b.jsx)("i",{style:{color:"black",fontSize:"3rem",marginLeft:"1rem"},className:"fab fa-instagram"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/kartik-shikhare-7145b11b4/",target:"_blank",children:Object(b.jsx)("i",{style:{color:"black",fontSize:"3rem",marginLeft:"1rem"},className:"fab fa-linkedin-in"})}),Object(b.jsx)("a",{href:"https://www.facebook.com/pratikshikhare26/",target:"_blank",children:Object(b.jsx)("i",{style:{color:"black",fontSize:"2.5rem",marginLeft:"1rem"},className:"fab fa-facebook-f"})}),Object(b.jsx)("a",{href:"https://www.github.com/kartiks26/",target:"_blank",children:Object(b.jsx)("i",{style:{color:"black",fontSize:"2.5rem",marginLeft:"1rem"},className:"fab fa-github"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{style:{fontSize:"1.0rem",fontWeight:"600"},children:"Kartik Shikhare"})})]})},k=function(){return Object(b.jsxs)("div",{className:"About",children:[Object(b.jsx)(N,{}),Object(b.jsx)(y,{})]})},w=a(18),C=a(3),S=a.n(C),I=a(9),T=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(""),l=Object(j.a)(r,2),d=l[0],m=l[1];Object(o.f)();Object(n.useEffect)((function(){null!=localStorage.getItem("token")?u():m("Please Login")}),[localStorage.getItem("token")]);var u=function(){var e=Object(I.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:4000/api/notes/fetchAllNotes",e.next=3,fetch("http://localhost:4000/api/notes/fetchAllNotes",{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a),m(a?"Notes fetched successfully":"Failed to fetch notes"),setTimeout((function(){m(null)}),3e3),N();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(I.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:4000/api/notes/addNote",e.next=3,fetch("http://localhost:4000/api/notes/addNote",{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:t.title,description:t.description,tag:t.tag})});case 3:return a=e.sent,console.log(t),e.next=7,a.json();case 7:n=e.sent,m(n.message),setTimeout((function(){m(null)}),3e3),console.log(n),c([].concat(Object(w.a)(s),[t]));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(I.a)(S.a.mark((function e(t){var a,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=" http://localhost:4000/api/notes/deleteNote/".concat(t),e.next=3,fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,m(r.message),setTimeout((function(){m(null)}),3e3),console.log(r),console.log("Delete Note with id"+t),c(s.filter((function(e){return e._id!==t})));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(I.a)(S.a.mark((function e(t,a,n,r){var l,o,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l="".concat("http://localhost:4000","/api/notes/updateNote/").concat(t),e.next=3,fetch(l,{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:r})});case 3:return o=e.sent,e.next=6,o.json();case 6:i=e.sent,m(i.message),setTimeout((function(){m(null)}),3e3),s.forEach((function(e){e._id===t&&(e.title=a,e.description=n,e.tag=r)})),c(Object(w.a)(s));case 11:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),O=Object(n.useState)({success:!0,user:{_id:"615869887aaad832dbb27705",name:"Login Here",email:"Kuncaa1l@gmail.com",date:"2021-10-02T14:15:36.102Z",__v:0}}),f=Object(j.a)(O,2),g=f[0],v=f[1],N=function(){var e=Object(I.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:4000/api/auth/getUser",e.next=3,fetch("http://localhost:4000/api/auth/getUser",{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent).success&&v(a),console.log(g);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YjBiOThhMzE5YjMxMzRiMTM4MDI4In0sImlhdCI6MTYzMzM1NjcyMH0.OrR6d40uXkpcao9yie1qU2tDrPvCmUzV01pCxdaDRrA");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(i.Provider,{value:{notes:s,addNote:h,DeleteNote:p,EditNote:x,FetchAllNotes:u,message:d,setMessage:m,usersData:g,logout:y},children:e.children})};var E=function(){var e=Object(n.useContext)(i),t=e.setMessage,a=(e.Login,e.FetchAllNotes,e.userData,Object(o.f)(),function(){var e=Object(I.a)(S.a.mark((function e(a){var n,s,c,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=r.email,s=r.password,e.next=4,fetch("http://localhost:4000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:s})});case 4:return c=e.sent,e.next=7,c.json();case 7:(l=e.sent).success?(console.log(l),localStorage.setItem("token",l.authtoken),t("You Are Logged In")):(console.log("Login Failed"),t("Login Failed"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s=Object(n.useState)({email:"",password:""}),c=Object(j.a)(s,2),r=c[0],l=c[1],u=function(e){l(Object(m.a)(Object(m.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("form",{className:"my-5",children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{name:"email",type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:r.email,onChange:u}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{value:r.password,name:"password",type:"password",className:"form-control",id:"exampleInputPassword1",onChange:u})]}),Object(b.jsx)("button",{type:"submit",onClick:function(e){a(e)},className:"btn btn-primary",children:"Submit"})]})};var M=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(j.a)(e,2),a=t[0],c=t[1],r=function(e){c(Object(m.a)(Object(m.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))},o=Object(n.useContext)(i).setMessage,u=s.a.createRef(),h=function(){var e=Object(I.a)(S.a.mark((function e(t){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:4000/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:t.email,password:t.password})});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,o(n.message),u.current.click(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{className:"my-5",children:[Object(b.jsx)("label",{htmlFor:"Name",className:"form-label ",children:"Name"}),Object(b.jsx)("input",{className:"form-control my-2",placeholder:"Enter Name",type:"text",onChange:r,name:"name",id:"Name"}),Object(b.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(b.jsx)("input",{className:"form-control my-2",placeholder:"Enter Email",type:"email",onChange:r,name:"email",id:"email"}),Object(b.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(b.jsx)("input",{className:"form-control my-2\t",placeholder:" Enter Password",type:"password",onChange:r,name:"password",id:"password"})]}),Object(b.jsx)(l.b,{to:"/",ref:u}),Object(b.jsx)("button",{className:"btn btn-primary my-2\t",onClick:function(e){e.preventDefault(),h(a)},children:"Signup"})]})};var D=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(T,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(f,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/home",children:Object(b.jsx)(f,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/about",children:Object(b.jsx)(k,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/login",children:Object(b.jsx)(E,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/signup",children:Object(b.jsx)(M,{})})]})})]})})})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b64279a7.chunk.js.map