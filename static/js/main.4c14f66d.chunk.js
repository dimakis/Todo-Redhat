(this["webpackJsonpredhat-todo"]=this["webpackJsonpredhat-todo"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var o,c=n(1),r=n(0),a=n.n(r),i=n(11),s=n.n(i),d=(n(18),n(19),n(2)),u=n(33),l={down:function(t){return"@media (max-width: ".concat({xs:"575.98px",md:"991.98px"}[t],")")}},j=Object(u.a)({App:(o={background:"#9adcfb",width:"80%",margin:"0 auto"},Object(d.a)(o,l.down("md"),{width:"100%"}),Object(d.a)(o,l.down("xs"),{width:"90%"}),o),header:{textAlign:"center","& h1":Object(d.a)({color:"white",margin:"5vh 0 0 0",fontSize:"5rem",fontWeight:"300","& span":{fontWeight:"700"}},l.down("xs"),{fontSize:"4.5rem"}),"& h2":Object(d.a)({color:"white",fontSize:"1.5rem",fontWeight:"300"},l.down("xs"),{fontSize:"0.6rem"})}}),b=n(3),O=n(5),h=n(12),m=n(34),f="ADD_TODO",p="REMOVE_TODO",g="TOGGLE_TODO",x=function(t,e){switch(e.type){case f:return[].concat(Object(h.a)(t),[{id:Object(m.a)(),task:e.task,completed:!1}]);case p:return t.filter((function(t){return t.id!==e.id}));case g:return t.map((function(t){return t.id===e.id?Object(O.a)(Object(O.a)({},t),{},{completed:!t.completed}):t}));default:return t}};var v=function(t,e,n){var o=Object(r.useReducer)(e,n,(function(){var e;try{e=JSON.parse(window.localStorage.getItem(t)||String(n))}catch(o){e=n}return e})),c=Object(b.a)(o,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(a))}),[t,a]),[a,i]},w=[{id:"0",task:"Get a job at Red Hat",completed:!1},{id:"1",task:"Learn Julia",completed:!1},{id:"2",task:"Master the art of throwing and catching maltesers in gob",completed:!0}],k=Object(r.createContext)(),y=Object(r.createContext)();function C(t){var e=v(x,x,w),n=Object(b.a)(e,2),o=n[0],r=n[1];return Object(c.jsx)(k.Provider,{value:o,children:Object(c.jsx)(y.Provider,{value:r,children:t.children})})}var S=function(t){var e=Object(r.useState)(t),n=Object(b.a)(e,2),o=n[0],c=n[1];return[o,function(t){return c(t.target.value)},function(){return c("")}]},T=Object(u.a)({EditTodoForm:{width:"100%",marginBottom:"1rem"},input:{width:"85%",background:"transparent",border:"none",borderBottom:"1px solid #ccc",fontSize:"1rem",transition:"0.6s",transform:"translateY(8px)","&:focus":{borderBottom:"1px solid #58b2dc",outline:"none"}}});var N=function(t){var e=t.id,n=t.task,o=t.toggleEditForm,a=T(),i=Object(r.useContext)(y),s=S(n),d=Object(b.a)(s,3),u=d[0],l=d[1],j=d[2];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i({type:"EDIT_TODO",id:e,task:u}),o(),j()},className:a.EditTodoForm,children:Object(c.jsx)("input",{autoFocus:!0,value:u,onChange:l,onClick:function(t){return t.stopPropagation()},className:a.input})})},D=Object(u.a)({Todo:{width:"100%",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"0.5rem",color:"#34495e",fontSize:"1rem",lineHeight:"2.5rem",overflowX:"hidden",transition:"all 0.3s ease","&:hover":{background:"white",cursor:"pointer"},"&:hover div":{opacity:"1"}},icons:{width:"40px",display:"inline-flex",alignItems:"center",justifyContent:"space-between",marginRight:"1rem",float:"right",transition:"all 0.3s",opacity:"0"}});function F(t){var e=t.id,n=t.task,o=t.completed,a=D(),i=Object(r.useContext)(y),s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(r.useState)(t),n=Object(b.a)(e,2),o=n[0],c=n[1];return[o,function(){return c(!o)}]}(!1),d=Object(b.a)(s,2),u=d[0],l=d[1];return u?Object(c.jsx)("li",{className:a.Todo,style:{overflowY:"hidden"},onClick:function(){return l()},children:Object(c.jsx)(N,{id:e,task:n,toggleEditForm:l})}):Object(c.jsxs)("li",{className:a.Todo,onClick:function(){return i({type:g,id:e})},children:[Object(c.jsx)("span",{style:{textDecoration:o?"line-through":"",color:o?"#bdc3c7":"#34495e"},children:n}),Object(c.jsxs)("div",{className:a.icons,children:[Object(c.jsx)("i",{style:{color:"#c0392b"},className:"fas fa-trash",onClick:function(t){t.stopPropagation(),i({type:p,id:e})}}),Object(c.jsx)("i",{style:{color:"#58b2dc"},className:"fas fa-pen",onClick:function(t){t.stopPropagation(),l()}})]})]})}var E=Object(r.memo)(F);var z,B=function(){var t=D(),e=Object(r.useContext)(k);return Object(c.jsx)("ul",{className:t.TodoList,children:e.map((function(t){return Object(c.jsx)(E,Object(O.a)(Object(O.a)({},t),{},{children:" "}),t.id)}))})},I=Object(u.a)({TodoForm:{background:"#c5e1a5",width:"100%",marginBottom:"1rem"},input:(z={background:"#899d73",width:"100%",height:"2rem"},Object(d.a)(z,"background","none"),Object(d.a)(z,"border","none"),Object(d.a)(z,"borderBottom","1px solid #34495e"),Object(d.a)(z,"color","#34495e"),Object(d.a)(z,"fontSize","1.2rem"),Object(d.a)(z,"fontWeight","300"),Object(d.a)(z,"outline","none"),z)});var P=function(){var t=I(),e=Object(r.useContext)(y),n=S(""),o=Object(b.a)(n,3),a=o[0],i=o[1],s=o[2];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),e({type:f,task:a}),s()},className:t.TodoForm,children:Object(c.jsx)("input",{placeholder:"Add your task here...",value:a,onChange:i,className:t.input})})};var A=function(){return Object(c.jsxs)(C,{children:[Object(c.jsx)(P,{}),Object(c.jsx)(B,{})]})};var L=function(){var t=j();return Object(c.jsxs)("div",{className:t.App,children:[Object(c.jsxs)("header",{className:t.header,children:[Object(c.jsxs)("h1",{children:["todo",Object(c.jsx)("span",{children:"list"})]}),Object(c.jsx)("h2",{children:"A simple Todo list..."})]}),Object(c.jsx)(A,{})]})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),r(t),a(t)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),J()}},[[22,1,2]]]);
//# sourceMappingURL=main.4c14f66d.chunk.js.map