!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r,o,i=n(1),u=n(2),c=0,s=0;e.exports=function(e,t,n){var l=t&&n||0,a=t||[],d=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:o;if(null==d||null==f){var p=i();null==d&&(d=r=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==f&&(f=o=16383&(p[6]<<8|p[7]))}var y=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:s+1,m=y-c+(v-s)/1e4;if(m<0&&void 0===e.clockseq&&(f=f+1&16383),(m<0||y>c)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=y,s=v,o=f;var b=(1e4*(268435455&(y+=122192928e5))+v)%4294967296;a[l++]=b>>>24&255,a[l++]=b>>>16&255,a[l++]=b>>>8&255,a[l++]=255&b;var g=y/4294967296*1e4&268435455;a[l++]=g>>>8&255,a[l++]=255&g,a[l++]=g>>>24&15|16,a[l++]=g>>>16&255,a[l++]=f>>>8|128,a[l++]=255&f;for(var h=0;h<6;++h)a[l+h]=d[h];return t||u(a)}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},function(e,t,n){"use strict";n.r(t);var r={apa:"ok"};const o=n(0);var i=class{constructor(e){this.posX=100,this.posY=100,this.id=e,this.functionDescription="No function yet",this.input="",this.output=""}render(){const e=document.createElement("div");return e.classList.add("flowchart-square"),e}print(){console.log(r.apa),console.log(o())}};const u=n(0);!function(){let e=[];document.querySelector("#newObject").addEventListener("click",function(){"hidden"==document.getElementById("element-picker").style.visibility?document.getElementById("element-picker").style.visibility="visible":document.getElementById("element-picker").style.visibility="hidden";const t=u();e.push(t);const n=new i(t);document.querySelector("#workspace-root").appendChild(n.render()),n.print()})}()}]);