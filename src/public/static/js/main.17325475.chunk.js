(this.webpackJsonpdeskyoo_frontend=this.webpackJsonpdeskyoo_frontend||[]).push([[0],{30:function(e,t,n){e.exports=n(69)},35:function(e,t,n){},36:function(e,t,n){},66:function(e,t){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),l=n.n(o),c=(n(35),n(3)),i=(n(36),n(29)),u=n.n(i)()("".concat(window.location.hostname,":8080")),s=function(){return r.a.createElement("div",null,r.a.createElement("h2",{id:"bar"},"DeskYoo"),r.a.createElement("h2",{id:"bar2"},"Better than Jodel"))},m=function(e){var t=e.user;return r.a.createElement("div",{id:"userInfo"},r.a.createElement("p",null,t.points," Yoo Points"),r.a.createElement("p",null,"UserID: ",t.id))},d=function(e){var t=e.text,n=e.author,a=e.location;return r.a.createElement("p",{className:"message"},t," @",n," ",a)},E=function(e){var t=e.messages;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(d,{key:t,text:e.text,author:e.author,location:e.location})})))},f=function(e){var t=e.id,n=e.name,a=e.followers;return r.a.createElement("button",{onClick:h,id:t,className:"channelInfo"},r.a.createElement("div",null,r.a.createElement("b",null,n),a),r.a.createElement("img",{id:t,className:"channelButton",src:"arrow.png"}))},v=function(e){var t=e.channels;if(t)return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(f,{key:t,id:e.id,name:e.name,followers:e.followers})})))},h=function(e){console.log(e.target.id)},b={points:2e3,id:69},p=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=(t[1],Object(a.useState)([])),l=Object(c.a)(o,2),i=(l[0],l[1],Object(a.useState)((u.emit("GETCHANNELSDISPLAYINFO"),void u.on("CHANNELDISPLAYINFO",(function(e){console.log(e)}))))),d=Object(c.a)(i,2),f=d[0],h=(d[1],Object(a.useState)(b)),p=Object(c.a)(h,2),g=p[0];p[1];return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"channelColumn"},r.a.createElement(m,{user:g}),r.a.createElement(v,{channels:f})),r.a.createElement("div",{id:"messageColumn"},r.a.createElement(E,{messages:n}))))};l.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.17325475.chunk.js.map