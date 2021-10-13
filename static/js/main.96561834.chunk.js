(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{27:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r,c,o,a=t(0),i=t.n(a),s=t(12),d=t.n(s),l=(t(27),t(16)),b=t.n(l),u=t(18),j=t(7),f=t(8),p=f.a.form(r||(r=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),x=f.a.input(c||(c=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  width: 50%;\n  :focus {\n    border: 3px solid #555;\n  }\n"]))),m=f.a.button(o||(o=Object(j.a)(["\n  display: inline-block;\n  padding: 5px 10px;\n  margin-left: 10px;\n  font-size: 14px;\n  width: 100px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n\n  :hover {\n    background-color: #3e8e41;\n  }\n  :active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]))),O=t(6),h=t(4),g={addItem:Object(h.b)("items/Add",(function(e,n){return{payload:{id:b.a.generate(),name:e,number:n}}})),removeItem:Object(h.b)("items/Remove"),filterItem:Object(h.b)("items/Filter")},v=t(1);var k,y=Object(O.b)((function(e){return{contacts:e.contacts.items}}),(function(e){return{onAdd:function(n,t){return e(g.addItem(n,t))}}}))((function(e){var n=e.onAdd,t=Object(a.useState)(""),r=Object(u.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),d=s[0],l=s[1],b=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":o(r);break;case"number":l(r)}},j=function(){o(""),l("")};return Object(v.jsx)("div",{children:Object(v.jsxs)(p,{onSubmit:function(e){e.preventDefault(),n(c,d),j()},children:[Object(v.jsx)(x,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:c,onChange:b,required:!0}),Object(v.jsx)(x,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:d,onChange:b,required:!0}),Object(v.jsx)(m,{type:"submit",children:"Add contact"})]})})})),w=f.a.button(k||(k=Object(j.a)(["\n  display: inline-block;\n  padding: 5px 5px;\n  margin-left: 10px;\n  font-size: 10px;\n  width: 50px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  /* box-shadow: 0 9px #999; */\n\n  :hover {\n    background-color: red;\n  }\n  :active {\n    background-color: red;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"])));var C=Object(O.b)((function(e){var n=e.contacts,t=n.filter,r=n.items,c=t.toLowerCase();return{contacts:r.filter((function(e){return e.name.toLowerCase().includes(c)}))}}),(function(e){return{onDeleteContact:function(n){return e(g.removeItem(n))}}}))((function(e){var n=e.contacts,t=e.onDeleteContact;return Object(v.jsx)(v.Fragment,{children:n.length>0?Object(v.jsx)("ul",{children:n.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsxs)("span",{children:[e.name,":"]}),Object(v.jsx)("span",{children:e.number}),Object(v.jsx)(w,{onClick:function(){return t(e.id)},type:"button",children:"Delete"})]},e.id)}))}):Object(v.jsx)("p",{children:"Contact list is empty"})})}));var A,I=Object(O.b)((function(e){return{filter:e.contacts.filter}}),(function(e){return{onChange:function(n){return e(g.filterItem(n.target.value))}}}))((function(e){var n=e.filter,t=e.onChange;return Object(v.jsxs)(v.Fragment,{children:["Find contacts by name:",Object(v.jsx)(x,{type:"text",name:"filter",autoComplete:"off",value:n,onChange:t})]})})),z=f.a.div(A||(A=Object(j.a)(["\n  width: 400px;\n  padding: 20px;\n  margin: 20px;\n  border: 1px solid black;\n"])));function D(){return Object(v.jsxs)(z,{children:[Object(v.jsx)("h1",{className:"title",children:"Phonebook"}),Object(v.jsx)(y,{}),Object(v.jsx)("h2",{className:"title",children:"Contacts"}),Object(v.jsx)(I,{}),Object(v.jsx)(C,{})]})}var F,S=t(14),J=t(21),Z=t(2),q=t(5),B=t(19),L={key:"contacts",storage:t.n(B).a,blacklist:["filter"]},M=Object(h.c)([],(F={},Object(S.a)(F,g.addItem,(function(e,n){var t=n.payload;return[].concat(Object(J.a)(e),[t])})),Object(S.a)(F,g.removeItem,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),F)),N=Object(h.c)("",Object(S.a)({},g.filterItem,(function(e,n){return n.payload}))),Y=Object(Z.b)({items:M,filter:N}),E=Object(h.a)({reducer:{contacts:Object(q.g)(L,Y)},middleware:function(e){return e({serializableCheck:{ignoredActions:[q.a,q.f,q.b,q.c,q.d,q.e]}})},devTools:!1}),P={store:E,persistor:Object(q.h)(E)},R=t(20);d.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(O.a,{store:P.store,children:Object(v.jsx)(R.a,{loading:null,persistor:P.persistor,children:Object(v.jsx)(D,{})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.96561834.chunk.js.map