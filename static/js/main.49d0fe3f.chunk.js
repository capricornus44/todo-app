(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(16),o=n.n(i),r=n(12),s=n(52),l=(n(38),n(22)),d=n(53),u=n(29),j=n(28),b=(n(39),n(54)),O=n(50),p=n(51),f=n(20),h=n(6),m=n(27),x=Object(m.b)({name:"todos",initialState:{todos:[],filter:""},reducers:{addNewTodo:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{todos:[].concat(Object(f.a)(e.todos),[t.payload])})},deleteTodo:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{todos:Object(f.a)(e.todos.filter((function(e){return e.id!==t.payload})))})},editTodo:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{todos:Object(f.a)(e.todos.map((function(e){return e.id===t.payload.id?Object(h.a)(Object(h.a)({},e),{},{item:t.payload.item}):e})))})},completeTodo:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{todos:Object(f.a)(e.todos.map((function(e){return e.id===t.payload?Object(h.a)(Object(h.a)({},e),{},{completed:!0}):e})))})},filterTodo:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{filter:t.payload})}}}),v=x.actions,_=v.addNewTodo,w=v.deleteTodo,g=v.editTodo,y=v.completeTodo,T=v.filterTodo,N=Object(m.a)(x),k=(n(40),n(3));var C=function(e){var t=e.todo,n=Object(c.useRef)(!0),a=Object(r.b)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(s.a.li,{initial:{x:"150vw",transition:{type:"spring",duration:1.5}},animate:{x:"0",transition:{type:"spring",duration:1.5}},whileHover:{scale:.9,transition:{type:"spring",duration:.25}},exit:{x:"-60vw",scale:[1,0],transition:{type:"spring",duration:.5,backgroundColor:"rgba(255, 0, 0, 1)"}},className:"tasks__item",children:[Object(k.jsx)("textarea",{className:"item__text",ref:n,disabled:n,defaultValue:t.item,onKeyPress:function(e){return function(e,t,c){13===c.which&&(a(g({id:e,item:t})),n.current.disabled=!0)}(t.id,n.current.value,e)}}),Object(k.jsxs)("div",{className:"item__btn-box",children:[Object(k.jsx)(s.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"item__btn",onClick:function(){return n.current.disabled=!1,void n.current.focus()},children:Object(k.jsx)(O.a,{})}),!1===t.completed&&Object(k.jsx)(s.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"item__btn",style:{color:"green"},onClick:function(){a(y(t.id))},children:Object(k.jsx)(p.a,{})}),Object(k.jsx)(s.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"item__btn",style:{color:"red"},onClick:function(){a(w(t.id))},children:Object(k.jsx)(p.b,{})})]}),t.completed&&Object(k.jsx)("span",{className:"completed",children:"Done"})]},t.id)})};n(42);var H=function(e){var t=e.filteredValues,n=Object(c.useState)("active"),a=Object(l.a)(n,2),i=a[0],o=a[1],r=t();return Object(k.jsxs)("div",{className:"tasks",children:[Object(k.jsxs)("div",{className:"tasks__filter",children:[Object(k.jsx)(s.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){return o("active")},children:"Active"}),Object(k.jsx)(s.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){return o("completed")},children:"Completed"}),Object(k.jsx)(s.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:function(){return o("all")},children:"All"})]}),Object(k.jsx)("ul",{className:"tasks__list list",children:Object(k.jsxs)(b.a,{children:[r.length>0&&"active"===i?r.map((function(e){return!1===e.completed&&Object(k.jsx)(C,{todo:e},e.id)})):null,r.length>0&&"completed"===i?r.map((function(e){return!0===e.completed&&Object(k.jsx)(C,{todo:e},e.id)})):null,r.length>0&&"all"===i?r.map((function(e){return Object(k.jsx)(C,{todo:e},e.id)})):null]})})]})};n(43);var A=function(){var e=Object(r.c)((function(e){return e.filter})),t=Object(r.b)();return Object(k.jsx)("div",{className:"filter__container",children:Object(k.jsx)("input",{className:"filter__input",type:"text",placeholder:"Find task",value:e,onChange:function(e){return n=e.target.value,void t(T(n));var n}})})};n(44);var F=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.b)(),o=Object(r.c)((function(e){return e.todos})),b=Object(r.c)((function(e){return e.filter}));return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"addTodos__box",children:[Object(k.jsx)("input",{type:"text",value:n,onChange:function(e){return function(e){a(e.target.value)}(e)},className:"addTodos__input"}),Object(k.jsx)(s.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"addTodos__btn",onClick:function(){""===n?j.b.error("Enter correct value"):i(_({id:Object(d.a)(),item:n,completed:!1})),a("")},children:Object(k.jsx)(u.a,{})})]}),o.length>0&&Object(k.jsx)(A,{}),Object(k.jsx)(H,{filteredValues:function(){var e=b.toLowerCase();return o.filter((function(t){return t.item.toLowerCase().includes(e)}))}}),Object(k.jsx)(j.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})};var S=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(s.a.h1,{className:"App__title",initial:{y:-200},animate:{y:0},transition:{type:"spring",duration:1},whileHover:{scale:1.1},children:"To do App"}),Object(k.jsx)(s.a.div,{initial:{y:1e3},animate:{y:0},transition:{type:"spring",duration:1.5},children:Object(k.jsx)(F,{})})]})};n(45);o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(r.a,{store:N,children:Object(k.jsx)(S,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.49d0fe3f.chunk.js.map