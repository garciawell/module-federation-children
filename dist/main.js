(()=>{var e,r,t,n,o={579:(e,r,t)=>{Promise.all([t.e(407),t.e(187)]).then(t.bind(t,187))}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.c=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="federation-host:",i.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,f;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var p=l[s];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){u=p;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var d=(r,n)=>{u.onerror=u.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),f&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},n={},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var u=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),o[e]=()=>{throw r},a.p=0},f=(e,t,n,o,i,f)=>{try{var l=e(t,n);if(!l||!l.then)return i(l,o,f);var s=l.then((e=>i(e,o)),u);if(!f)return s;r.push(a.p=s)}catch(e){u(e)}},l=(e,r,n)=>f(r.get,a[1],t,0,s,n),s=r=>{a.p=1,o[e]=e=>{e.exports=r()}};f(i,a[2],0,0,((e,r,t)=>e?f(i.I,a[0],0,e,l,t):u()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var a=i.S[t],u="federation-host",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(o[r]={get:t,from:u,eager:!!n})},l=[];return"default"===t&&(f("react-dom","17.0.2",(()=>Promise.all([i.e(935),i.e(407)]).then((()=>()=>i(935))))),f("react","17.0.2",(()=>i.e(294).then((()=>()=>i(294)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),i.p="https://prod-test-consumer.vercel.app/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var o=t[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,f=!0;;u++,i++){var l,s,p=u<t.length?(typeof t[u])[0]:"";if(i>=n.length||"o"==(s=(typeof(l=n[i]))[0]))return!f||("u"==p?u>o&&!a:""==p!=a);if("u"==s){if(!f||"u"!=p)return!1}else if(f)if(p==s)if(u<=o){if(l!=t[u])return!1}else{if(a?l>t[u]:l<t[u])return!1;l!=t[u]&&(f=!1)}else if("s"!=p&&"n"!=p){if(a||u<=o)return!1;f=!1,u--}else{if(u<=o||s<p!=a)return!1;f=!1}else"s"!=p&&"n"!=p&&(f=!1,u--)}}var d=[],h=d.pop.bind(d);for(i=1;i<t.length;i++){var c=t[i];d.push(1==c?h()|h():2==c?h()&h():c?r(c,n):!h())}return!!h()},t=(t,n,o)=>{var a=t[n];return(n=Object.keys(a).reduce(((t,n)=>!r(o,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(t,n)?t:n),0))&&a[n]},n=(e=>function(r,t,n,o){var a=i.I(r);return a&&a.then?a.then(e.bind(e,r,i.S[r],t,n,o)):e(r,i.S[r],t,n,o)})(((e,r,n,o,a)=>{var u=r&&i.o(r,n)&&t(r,n,o);return u?(e=>(e.loaded=1,e.get()))(u):a()})),o={},a={407:()=>n("default","react",[1,17,0,2],(()=>i.e(294).then((()=>()=>i(294))))),525:()=>n("default","react-dom",[1,17,0,2],(()=>i.e(935).then((()=>()=>i(935)))))},u={187:[525],407:[407]};i.f.consumes=(e,r)=>{i.o(u,e)&&u[e].forEach((e=>{if(i.o(o,e))return r.push(o[e]);var t=r=>{o[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete o[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var u=a[e]();u.then?r.push(o[e]=u.then(t).catch(n)):t(u)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(407!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),u=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,u,f]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);f&&f(i)}for(r&&r(t);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0},t=self.webpackChunkfederation_host=self.webpackChunkfederation_host||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i(579)})();