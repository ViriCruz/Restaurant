!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=()=>{const e=document.createElement("div");e.setAttribute("id","main-content");const t=document.createElement("div");t.classList.add("best-restaurant");const n=document.createElement("h1");return n.innerHTML="John Doe's sushi restaurant",t.appendChild(n),e.appendChild(t),e};var c=(e,t,n)=>{const a=document.createElement("li");a.classList.add(e);const c=document.createElement("a"),d=document.createElement("div");return c.href="#",c.id=t,c.textContent=n,d.append(c),a.append(d),a},d=n.p+"dc2e227098876c0ae52c1cc10ea96e39.jpg",r=n.p+"9134ebd36d027952eaf32253fdbbb7c6.jpg",o=n.p+"2507716d9adb6d7d6035a6604772fa26.jpg",s=n.p+"0bee5ea24963631d78d25e7ebd1b1904.jpg",l=n.p+"e1efd6381b21bd967ba91839a40336ba.jpg";var i=()=>{const e=[{src:d,alt:"Maki sushi"},{src:r,alt:"Norimaki sushi"},{src:o,alt:"Oshizushi sushi"},{src:s,alt:"Temaki sushi"},{src:l,alt:"Uramaki sushi"}],t=document.createElement("div");t.setAttribute("id","main-content");const n=document.createElement("div");n.classList.add("menu-container");const a=document.createElement("h2");a.textContent="Gallery";const i=document.createElement("ul");return i.setAttribute("class","dish-list"),i.append(...e.map(e=>((e,t)=>{const n=document.createElement("img");n.src=e,n.alt=t;const a=t.toLowerCase().split(" ").join("-"),d=c("dish",a,t);return d.childNodes[0].classList.add("dish-description"),d.append(n),d})(e.src,e.alt))),n.appendChild(a),n.appendChild(i),t.appendChild(n),t};const u=(e,t)=>{const n=document.createElement("label");return n.for=t,n.textContent=e,n},m=(e,t)=>{const n=document.createElement(`${e}`);return n.id=t,n.name=t,n};var p=()=>{const e=document.createElement("div");e.id="main-content";const t=document.createElement("div");t.classList.add("contact");const n=(()=>{const e=document.createElement("form");return e.classList.add("contact-form"),e})(),a=document.createElement("div");a.append(u("Subject:","subject"),m("input","subject"));const c=document.createElement("div");return c.append(u("Message:","message"),m("textarea","message")),n.append(a,c),n.appendChild(m("button","submit")).textContent="Submit",t.append(n,(()=>{const e=document.createElement("div");e.classList.add("information-container");const t=document.createElement("p");t.textContent="01179 231122";const n=document.createElement("span");n.textContent="Phone:";const a=document.createElement("span");a.textContent="Address:",a.classList.add("contact-details-label"),n.classList.add("contact-details-label");const c=document.createElement("p");c.textContent="Carter Cres";const d=document.createElement("p");return d.textContent="Gymea Bay NSW 2227, Australia",e.append(n,t,a,c,d),e})()),e.appendChild(t),e};var b=()=>{Array.from(document.querySelectorAll(".nav-tab div")).forEach(e=>{e.firstChild.classList.remove("selected")})};var f=()=>{const e=document.createElement("div");e.classList.add("dark-faded");const t=document.createElement("header"),n=document.createElement("nav"),a=document.createElement("ul");return a.append(c("nav-tab","tab-home","home"),c("nav-tab","tab-menu","menu"),c("nav-tab","tab-contact","contact")),a.querySelector("#tab-home").classList.add("selected"),n.append(a),t.append(n),e.append(t),e};document.getElementById("content").append(f(),a());const E=document.getElementById("content");document.getElementById("tab-home").addEventListener("click",e=>{const t=document.getElementById("main-content");E.replaceChild(a(),t),b(),e.target.classList.add("selected"),e.preventDefault()}),document.getElementById("tab-menu").addEventListener("click",e=>{const t=document.getElementById("main-content");E.replaceChild(i(),t),b(),e.target.classList.add("selected"),e.preventDefault()}),document.getElementById("tab-contact").addEventListener("click",e=>{const t=document.getElementById("main-content");E.replaceChild(p(),t),b(),e.target.classList.add("selected"),e.preventDefault()})}]);