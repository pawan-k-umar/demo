(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),i=(c(9),c(2)),o=(c(10),c(0)),d=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"left",className:"container col-sm-10 mt-5",children:[Object(o.jsxs)("p",{children:[e.name1,e.props1]}),Object(o.jsxs)("p",{children:[e.name2,e.props2,e.unit]}),Object(o.jsxs)("p",{children:[e.name3,e.props3,e.unit,e.name4]}),Object(o.jsxs)("p",{children:[e.name5,e.props4,e.name6,e.props5]})]})})};var j=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("london"),r=Object(i.a)(a,2),j=r[0],p=r[1],l=Object(n.useState)(),h=Object(i.a)(l,2),m=h[0],b=h[1],u=Object(n.useState)(),x=Object(i.a)(u,2),O=x[0],f=x[1];return fetch("https://api.weatherapi.com/v1/forecast.json?key=32fc58c655934bc59ac60022210205&q="+j+"&days=1&aqi=no&alerts=no").then((function(e){return e.json()})).then((function(e){f(e)})).catch((function(e){b(e.message)})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"App container",children:[Object(o.jsx)("h1",{className:"logo text-danger",children:" Weather App "})," ",Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"text-danger",id:"inputId",type:"text",placeholder:"Enter your city",onChange:function(e){s(e.target.value)}})," ",Object(o.jsxs)("button",{onClick:function(){p(c)},id:"searchbtn",children:[" ","search"," "]})," ",Object(o.jsxs)("p",{className:"err text-danger",children:[" ",m," "]})," "]})," ",Object(o.jsxs)("div",{id:"main",children:[Object(o.jsxs)("div",{id:"left",children:[" ",O&&Object(o.jsx)(d,{name1:["Last Updated : "],props1:O.current.last_updated,name2:["Humidity : "],props2:O.current.humidity,name3:["Speed : "],props3:O.current.wind_kph,name4:[" km/h"],name5:["Sunrise : "],props4:O.forecast.forecastday[0].astro.sunrise})," "]})," ",O&&Object(o.jsxs)("div",{id:"details",className:"container bg-light col-12 mt-5",children:[Object(o.jsxs)("h2",{id:"cityName",children:[" ",j," "]})," ",Object(o.jsxs)("h4",{children:[" ",O.location.country," "]})," ",Object(o.jsxs)("p",{className:"text-muted",children:[" ",O.location.region," "]})," ",Object(o.jsxs)("h1",{id:"temp",children:[" ",Math.floor(O.current.temp_c)," \xb0C"]}),Object(o.jsx)("img",{id:"icon",src:O.current.condition.icon,alt:"weather icon"})," ",Object(o.jsxs)("p",{children:[" ",O.current.condition.text," "]})," "]}),Object(o.jsxs)("div",{id:"right",children:[" ",O&&Object(o.jsx)(d,{name1:["Time : "],props1:O.location.localtime,name2:["Min : "],props2:Math.floor(O.forecast.forecastday[0].day.mintemp_c),unit:" \xb0C",name3:["Max : "],props3:Math.floor(O.forecast.forecastday[0].day.maxtemp_c),name6:["Sunset : "],props5:O.forecast.forecastday[0].astro.sunset})]})]})]}),Object(o.jsx)("div",{className:"footer container p-3 bg-dark text-light",children:Object(o.jsxs)("p",{className:"text-center",children:["copyrights ",Object(o.jsx)("span",{children:"\xa9"}),"2021",Object(o.jsx)("span",{children:"created by Pawan Kumar"})]})})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.aea9f0a9.chunk.js.map