(this.webpackJsonpdeskyoo_frontend=this.webpackJsonpdeskyoo_frontend||[]).push([[0],{30:function(e,t,n){e.exports=n(69)},35:function(e,t,n){},36:function(e,t,n){},66:function(e,t){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(28),c=n.n(l),o=(n(35),n(3)),u=(n(36),n(29)),i=n.n(u)()("".concat(window.location.hostname,":8080")),s=function(){return r.a.createElement("div",null,r.a.createElement("h2",{id:"bar"},"DeskYoo"),r.a.createElement("h2",{id:"bar2"},"Better than Jodel"))},m=function(e){var t=e.user;return r.a.createElement("div",{id:"userInfo"},r.a.createElement("p",null,t.points," Yoo Points"),r.a.createElement("p",null,"UserID: ",t.id))},d=function(e){var t=e.text,n=e.author,a=e.location;return r.a.createElement("p",{className:"message"},t," @",n," ",a)},E=function(e){var t=e.messages;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(d,{key:t,text:e.text,author:e.author,location:e.location})})))},f=function(e){var t=e.id,n=e.name,a=e.followers;return r.a.createElement("button",{onClick:h,id:t,className:"channelInfo"},r.a.createElement("div",null,r.a.createElement("b",null,n),a),r.a.createElement("img",{id:t,className:"channelButton",src:"arrow.png"}))},v=function(e){var t=e.channels;return t?r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(f,{key:t,id:e.id,name:e.name,followers:e.followers})}))):r.a.createElement("div",null)},h=function(e){console.log(e.target.id)},b={points:2e3,id:69},p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=(t[1],Object(a.useState)([])),c=Object(o.a)(l,2),u=(c[0],c[1],Object(a.useState)([])),d=Object(o.a)(u,2),f=d[0],h=(d[1],Object(a.useState)(b)),p=Object(o.a)(h,2),N=p[0];p[1];return i.emit("GETCHANNELSDISPLAYINFO"),i.on("CHANNELDISPLAYINFO",(function(e){return e})),r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"channelColumn"},r.a.createElement(m,{user:N}),r.a.createElement(v,{channels:f})),r.a.createElement("div",{id:"messageColumn"},r.a.createElement(E,{messages:n}))))};c.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9aeb208d.chunk.js.map