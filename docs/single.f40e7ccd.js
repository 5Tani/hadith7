!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequire8e87;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequire8e87=a);var i=a("kAkBg"),o=a("jO2Au");function u(){return(u=i.asyncToGenerator(e(o).mark((function r(){var t,n,a,i,u,s,l,f,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(document.location.search),n=t.get("edition"),a=t.get("bareedition")||n.replace(/\d+/g,"").split("-")[1].trim()){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,p("info");case 7:for(i=e.sent,u=c("ul",{class:"list-group"}),s=0;s<=i[a].metadata.last_hadithnumber+50;s++)l=c("li",{class:"list-group-item"}),(f=new URLSearchParams).set("bareedition",a),f.set("num",s),(d=c("a",{href:"dataseo.html?".concat(f.toString())})).innerText="Hadith Number  ".concat(s),l.appendChild(d),u.appendChild(l);document.querySelector("#mycontainer").appendChild(u);case 11:case"end":return e.stop()}}),r)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return u.apply(this,arguments)}));new DOMParser;function c(e,r){r||(r={});var t=document.createElement(e),n=!0,a=!1,o=void 0;try{for(var u,c=Object.entries(r)[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var s=i.slicedToArray(u.value,2),l=s[0],p=s[1];t.setAttribute(l,p)}}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}var s=["https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/","https://gitcdn.link/cdn/fawazahmed0/hadith-api/1/","https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/"],l=[".min.json",".json"];function p(e,r){return f.apply(this,arguments)}function f(){return(f=i.asyncToGenerator(e(o).mark((function r(t,n){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Array.isArray(t)||(t=[t]),e.next=3,Promise.all(t.map((function(e){return d(m(e,n)).then((function(e){return e.json()}))}))).catch(console.error);case 3:if(1!=(a=e.sent).length){e.next=6;break}return e.abrupt("return",a[0]);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function d(e,r){return h.apply(this,arguments)}function h(){return(h=i.asyncToGenerator(e(o).mark((function r(t,n){var a,i,u,c,s,l,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=!0,u=!1,c=void 0,e.prev=2,s=t[Symbol.iterator]();case 4:if(i=(l=s.next()).done){e.next=19;break}return p=l.value,e.prev=6,e.next=9,fetch(p,n);case 9:if(!(a=e.sent).ok){e.next=12;break}return e.abrupt("return",a);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:i=!0,e.next=4;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(2),u=!0,c=e.t1;case 25:e.prev=25,e.prev=26,i||null==s.return||s.return();case 28:if(e.prev=28,!u){e.next=31;break}throw c;case 31:return e.finish(28);case 32:return e.finish(25);case 33:return e.abrupt("return",a);case 34:case"end":return e.stop()}}),r,null,[[2,21,25,33],[6,14],[26,,28,32]])})))).apply(this,arguments)}function m(e,r){return r=r||s,l.map((function(t){return r.map((function(r){return r+e+t}))})).flat()}}();
//# sourceMappingURL=single.f40e7ccd.js.map
