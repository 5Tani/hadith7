document.addEventListener("DOMContentLoaded",(async function(){let a=new URLSearchParams(document.location.search),i=a.get("edition"),r=a.get("bareedition")||i.replace(/\d+/g,"").split("-")[1].trim();if(!r)return;let o=await async function(e,a){Array.isArray(e)||(e=[e]);let i=await Promise.all(e.map((e=>async function(e,t){let n;for(let a of e)try{if(n=await fetch(a,t),n.ok)return n}catch(e){}return n}(function(e,a){return a=a||t,n.map((t=>a.map((n=>n+e+t)))).flat()}(e,a)).then((e=>e.json()))))).catch(console.error);return 1==i.length?i[0]:i}("info"),l=e("ul",{class:"list-group"});for(let[t,n]of Object.entries(o[r].metadata.sections)){let a=e("li",{class:"list-group-item"}),r=new URLSearchParams;r.set("edition",i),r.set("type","section"),r.set("num",t);let o=e("a",{href:`data.html?${r.toString()}`});o.innerText=`Section ${t} : ${n}`,a.appendChild(o),l.appendChild(a)}let s=e("li",{class:"list-group-item"}),c=e("a",{href:"seo.html"});c.innerText="Get Single Hadith with Multiple Languages",s.appendChild(c),l.appendChild(s),document.querySelector("#mycontainer").appendChild(l)}));new DOMParser;function e(e,t){t||(t={});let n=document.createElement(e);for(let[e,a]of Object.entries(t))n.setAttribute(e,a);return n}let t=["https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/","https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/"],n=[".min.json",".json"];
//# sourceMappingURL=sections.4af32785.js.map
