if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>r(e,o),u={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4f586afe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hrm"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.6362d04c.css",revision:null},{url:"/index.html",revision:"3b78f7682c8d8be2723e69f5aba82aec"},{url:"/js/about.5893ab89.js",revision:null},{url:"/js/app.ee180893.js",revision:null},{url:"/js/chunk-vendors.c18f591e.js",revision:null},{url:"/manifest.json",revision:"f43558b7137609e8efa0b17350d8e134"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map