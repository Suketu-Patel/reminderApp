(this.webpackJsonpreminderapp=this.webpackJsonpreminderapp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),i=n.n(l),c=n(38),m=n(48),o=n.n(m),u=n(51),s=function(e,t){var n=e.toString().split(" "),a=Object(u.a)(n),r={day:a[0],month:a[1],date:a[2],year:a[3],time:a[4],timezone:a[5],standard:a.slice(6)},l=t.split(" "),i=[];for(var c in l)i.push(r[l[c]]);return i.join(" ")},d=function(){var e=Object(a.useContext)(j),t=Object(a.useState)(""),n=Object(c.a)(t,2),l=n[0],i=n[1],m=Object(a.useState)(new Date),u=Object(c.a)(m,2),d=u[0],p=u[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addReminder({title:l,dateCreated:new Date,expirationDate:s(d,"date month time")}),i("")}},r.a.createElement("input",{type:"text",value:l,className:"form-control mb-3 mt-3",onChange:function(e){i(e.target.value)},required:!0,placeholder:"Press 'Enter' To add Reminder"}),r.a.createElement("label",{className:"mr-3"},"Reminder Time:"),r.a.createElement(o.a,{onChange:function(e){p(e)},value:d}),r.a.createElement("br",null),r.a.createElement("input",{className:"mt-3 mb-5 btn btn-primary form-control",type:"submit"}))},p=n(105),b=function(){var e=Object(a.useContext)(j),t=Object(p.b)((function(){return e.reminderCount}));return r.a.createElement("div",{className:"list-group-item active w-100",style:{position:"fixed",bottom:0,left:0}},r.a.createElement("h4",null,"Number of reminders: ",t))},E=n(11),f=function(){var e=Object(a.useContext)(j),t=Object(p.b)((function(){return e.reminders.map((function(e,t){return r.a.createElement("div",{key:t,className:"list-group"},r.a.createElement(E.b,{to:"/edit/".concat(t),className:"list-group-item list-group-item-action flex-column align-items-start"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1"},e.title),r.a.createElement("small",null,s(e.dateCreated,"day date")),r.a.createElement("small",null,"Expiration-",e.expirationDate))))}))}));return r.a.createElement("div",null,t)},v=n(12),h=Object(v.g)((function(e){var t=Object(v.f)().reminderId,n=Object(a.useContext)(j),l=function(e){n.reminders[t].title=e.target.value},i=function(){n.reminders.splice(t,1),e.history.push("/")};return r.a.createElement("div",null,Object(p.b)((function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return t.preventDefault(),e.history.push("/")}},r.a.createElement("div",{className:"form-group mt-3"},r.a.createElement("h3",null,"Edit reminder"),r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",className:"form-control",value:n.reminders[t].title,onChange:l,required:!0}),r.a.createElement("input",{className:"mt-2 btn btn-primary form-control",type:"submit",value:"Done"}))),r.a.createElement("button",{className:"btn btn-danger form-control",onClick:i},"Delete"))})))})),y=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement(E.c,{to:"/",className:"navbar-brand"},"Location Reminder"))},g=function(){return r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0},r.a.createElement(y,null),r.a.createElement("div",{className:"h-100 container"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(b,null))),r.a.createElement(v.a,{path:"/edit/:reminderId"},r.a.createElement(y,null),r.a.createElement(h,null),r.a.createElement(b,null))))};n.d(t,"StoreContext",(function(){return j}));var j=r.a.createContext();i.a.render(r.a.createElement(E.a,{basename:"".concat("/reminderApp","/")},r.a.createElement((function(e){var t=e.children,n=Object(p.a)((function(){return{reminders:[{title:"Buy Groceries",dateCreated:new Date,expirationDate:s(new Date,"date month time")}],addReminder:function(e){n.reminders.push(e)},get reminderCount(){return n.reminders.length},editReminder:function(e){n.reminders[e].title=prompt("type to edit")}}}));return r.a.createElement(j.Provider,{value:n}," ",t," ")}),null,r.a.createElement(g,null))),document.querySelector("#root"))},52:function(e,t,n){e.exports=n(103)}},[[52,1,2]]]);
//# sourceMappingURL=main.a8b8730d.chunk.js.map