(()=>{"use strict";var e,a,c,d,f,t={},r={};function b(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=t,b.c=r,e=[],b.O=(a,c,d,f)=>{if(!c){var t=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],f=e[i][2];for(var r=!0,o=0;o<c.length;o++)(!1&f||t>=f)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(r=!1,f<t&&(t=f));if(r){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,d,f]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);b.r(f);var t={};a=a||[null,c({}),c([]),c(c)];for(var r=2&d&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,b.d(f,t),f},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",110:"66406991",453:"30a24c52",533:"b2b675dd",948:"8717b14a",971:"8d00efaf",1012:"1460bfa3",1045:"51d50a11",1477:"b2f554cd",1633:"031793e1",1713:"a7023ddc",1914:"d9f32620",1925:"ec30dbf1",2115:"d9a6cbe4",2117:"d6d27740",2267:"59362658",2350:"895b3962",2362:"e273c56f",2535:"814f3328",2610:"daae3dc0",2868:"35d6405d",3085:"1f391b9e",3089:"a6aa9e1f",3205:"a80da1cf",3305:"27450d94",3514:"73664a40",3608:"9e4087bc",3824:"84ddb496",4013:"01a85c17",4148:"506dcd3b",4195:"c4f5d8e4",4198:"469843eb",4605:"397efcfb",5144:"c1188b5d",5201:"6e4dcb87",5456:"213f2b66",6103:"ccc49370",6535:"3d8d21df",6657:"ea7b5a9a",6758:"0b3e305b",6787:"3ecc5095",6938:"608ae6a4",7079:"badbc486",7178:"096bfee4",7414:"393be207",7635:"3487bb19",7740:"8111b11e",7918:"17896441",7920:"1a4e3797",8610:"6875c492",8636:"f4f34a3a",8637:"c2a84fc7",8880:"d39fa13b",9003:"925b3f96",9035:"4c9e35b1",9218:"129d3f06",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9700:"e16015ca"}[e]||e)+"."+{53:"4c8fcb1b",110:"1b3d54dc",453:"4e0cd37f",533:"3c3da8ba",864:"8346b0ea",948:"a52a427d",971:"a11f2eb6",1012:"7cc94050",1045:"6db71621",1477:"92f2fc12",1633:"b163cc93",1713:"34656edd",1914:"57305864",1925:"a37295f1",2115:"f0b7c906",2117:"2a7e5f0c",2267:"1b5ff744",2350:"d451f176",2362:"6f19132b",2529:"db7ecc70",2535:"83ab96fb",2610:"997b1abe",2868:"e98a9013",3085:"6048e638",3089:"77526f78",3205:"42401148",3305:"c7fb43d5",3514:"9d78fca0",3608:"0a3d9f61",3824:"243b9b5d",4013:"e2023516",4148:"c81644d6",4195:"76607f2c",4198:"57b87295",4605:"74108a9e",4972:"8e692175",5144:"9b65b9af",5201:"ade57d39",5456:"a39e39d9",6103:"ad77662b",6535:"fefa35d2",6657:"62418fa0",6758:"53aa271c",6787:"9caa4f7e",6938:"759e5204",6945:"926fb756",7079:"28511caf",7178:"b53b92ad",7414:"6d569890",7635:"8404559f",7740:"86498c78",7918:"c68872f3",7920:"24e5c1bb",8610:"d1705bd6",8636:"3d8cdcf9",8637:"29361f52",8880:"5e623331",8894:"022f6038",9003:"28df4486",9035:"9650a933",9218:"76031e88",9514:"92dd3c6b",9642:"5c97cfc0",9671:"2a87a2d8",9700:"b5d50a3a",9724:"6a682b3e"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},f="official-site:",b.l=(e,a,c,t)=>{if(d[e])d[e].push(a);else{var r,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+c){r=l;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,b.nc&&r.setAttribute("nonce",b.nc),r.setAttribute("data-webpack",f+c),r.src=e),d[e]=[a];var u=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"7918",59362658:"2267",66406991:"110","935f2afb":"53","30a24c52":"453",b2b675dd:"533","8717b14a":"948","8d00efaf":"971","1460bfa3":"1012","51d50a11":"1045",b2f554cd:"1477","031793e1":"1633",a7023ddc:"1713",d9f32620:"1914",ec30dbf1:"1925",d9a6cbe4:"2115",d6d27740:"2117","895b3962":"2350",e273c56f:"2362","814f3328":"2535",daae3dc0:"2610","35d6405d":"2868","1f391b9e":"3085",a6aa9e1f:"3089",a80da1cf:"3205","27450d94":"3305","73664a40":"3514","9e4087bc":"3608","84ddb496":"3824","01a85c17":"4013","506dcd3b":"4148",c4f5d8e4:"4195","469843eb":"4198","397efcfb":"4605",c1188b5d:"5144","6e4dcb87":"5201","213f2b66":"5456",ccc49370:"6103","3d8d21df":"6535",ea7b5a9a:"6657","0b3e305b":"6758","3ecc5095":"6787","608ae6a4":"6938",badbc486:"7079","096bfee4":"7178","393be207":"7414","3487bb19":"7635","8111b11e":"7740","1a4e3797":"7920","6875c492":"8610",f4f34a3a:"8636",c2a84fc7:"8637",d39fa13b:"8880","925b3f96":"9003","4c9e35b1":"9035","129d3f06":"9218","1be78505":"9514","7661071f":"9642","0e384e19":"9671",e16015ca:"9700"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>d=e[a]=[c,f]));c.push(d[2]=f);var t=b.p+b.u(a),r=new Error;b.l(t,(c=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var f=c&&("load"===c.type?"missing":c.type),t=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+t+")",r.name="ChunkLoadError",r.type=f,r.request=t,d[1](r)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var d,f,t=c[0],r=c[1],o=c[2],n=0;if(t.some((a=>0!==e[a]))){for(d in r)b.o(r,d)&&(b.m[d]=r[d]);if(o)var i=o(b)}for(a&&a(c);n<t.length;n++)f=t[n],b.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return b.O(i)},c=self.webpackChunkofficial_site=self.webpackChunkofficial_site||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();