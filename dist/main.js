!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}([function(e,t,n){"use strict";var r=n(2),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){"use strict";var r=n(11),o=n.n(r)()((function(e){return e[1]}));o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap);"]),o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Nova+Square&display=swap);"]),o.push([e.i,".container,.container-bienvenida,.container-trivia,.container-sin-opciones{display:flex;flex-flow:column nowrap}.container-select-trivia,.container-trivia .respuesta-contenedor{display:flex;flex-flow:row wrap}.container,.container-bienvenida,.container-trivia,.container-sin-opciones{justify-content:center;align-items:center}.container-select-trivia{justify-content:space-around}h1{font-size:calc(11em + 2vw)}h2{font-size:calc(1em + 1vw)}p,.input-nombre{font-size:calc(3em + 1vw)}*{box-sizing:border-box;margin:0;padding:0;font-size:62.5%;font-family:'Nova Square', cursive}body{background-color:#000}h1{margin-bottom:5rem}p{margin-bottom:4rem}.text{fill:none;stroke-width:3;stroke-linejoin:round;stroke-dasharray:70 330;stroke-dashoffset:0;-webkit-animation:stroke 6s infinite linear;animation:stroke 6s infinite linear}.text:nth-child(5n+1){stroke:#ffafcc;-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.text:nth-child(5n+2){stroke:#a2d2ff;-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.text:nth-child(5n+3){stroke:#f55891;-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.text:nth-child(5n+4){stroke:#e2bae6;-webkit-animation-delay:-4.8s;animation-delay:-4.8s}.text:nth-child(5n+5){stroke:#c41ed3;-webkit-animation-delay:-6s;animation-delay:-6s}@-webkit-keyframes stroke{100%{stroke-dashoffset:-400}}@keyframes stroke{100%{stroke-dashoffset:-400}}.titulo-svg{background-size:.2em 100%;font-size:calc(50rem + 4vw) !important;text-transform:uppercase;margin:0;padding:0;width:100%}svg{width:100%;font-family:\"Montserrat\",sans-serif !important;font-size:calc(40rem + 4vw) !important}.container{width:100vw;height:100vh}.container-bienvenida,.container-trivia,.container-sin-opciones{color:#fff;width:80%;height:80%;margin:0 auto;padding:2rem}.button{font-size:2.4rem;padding:2rem 0;width:22%;text-align:center;margin:1rem 0;text-decoration:none;color:#fff;background:#f55891;border-radius:4px;border-color:#f55891;outline:none}.button:hover{cursor:pointer;box-shadow:5px 5px 15px -1px #FF8080,-9px 5px 15px -1px #FFE488,-7px -5px 15px -1px #8CFF85,12px -5px 15px 1px #80C7FF,12px 10px 15px 2px #E488FF,-16px 10px 15px -1px #FF616B,-10px -7px 27px 1px #8E5CFF,5px 5px 15px 5px rgba(0,0,0,0);transition:transform 150ms;transform:scale(1.05)}.button[disabled]:hover{cursor:not-allowed;box-shadow:none;transform:none}.input-nombre{margin-bottom:2rem;width:22%;padding:1.5rem;font-size:1.8rem;border:none;box-shadow:0 0.1rem 1.4rem 0 #fff;border-radius:4px;outline:none}input::placeholder{color:#aaa}.container-select-trivia{width:80%;margin-bottom:4rem}.container-select-trivia select{cursor:pointer;border-radius:.5rem;color:black;margin:1rem;border:palegreen;background-color:white;font-size:calc(.6em + 1vw);padding:1.5rem;outline:none}.container-trivia{color:#fff}.container-trivia div{width:100%}.container-trivia h2{font-size:calc(1.5em + 1vw);margin-bottom:3rem}.container-trivia .respuesta-contenedor{margin-bottom:1.5rem;width:100%;border-radius:4px;background:#FF5C98}.container-trivia .respuesta-contenedor:hover{cursor:pointer;box-shadow:5px 5px 15px 5px #FF8080,-9px 5px 15px 5px #FFE488,-7px -5px 15px 5px #8CFF85,12px -5px 15px 5px #80C7FF,12px 10px 15px 7px #E488FF,-10px 10px 15px 7px #FF616B,-10px -7px 27px 1px #8E5CFF,0px 0px 30px 5px rgba(255,113,113,0);transform:scale(1.03);transform:transform 100ms}.container-trivia .prefijo-respuesta{padding:2rem 2.5rem;margin-bottom:0;font-size:calc(16em + 1vw)}.container-trivia .respuesta{padding:2rem;margin-bottom:0;font-size:calc(16em + 1vw)}.container-trivia .correct{background:#7CCF72;box-shadow:0px 0px 20px 6px #7CCF72 !important}.container-trivia .incorrect{background:#FF7070;box-shadow:0px 0px 20px 6px #FF616B !important}.score-contenedor{display:flex;flex-flow:row nowrap;justify-content:space-between}.score-contenedor p{font-size:calc(18em + 1vw)}.score-contenedor h1{font-size:calc(35em + 1.2vw)}.score-contenedor div:nth-child(2){text-align:right}.score-contenedor #barra-contenedor{width:20rem;height:3rem;border:0.2rem solid white;margin-top:2rem;border-radius:50px;overflow:hidden}.score-contenedor #barra-progreso{height:4rem;background:linear-gradient(90deg, #fff9b6 0%, #d9fc85 15%, #85fcc2 30%, #85fcf4 43%, #85cefc 55%, #a285fc 65%, #de85fc 75%, #fc85bc 84%)}\n",""]),t.a=o},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(19),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(6)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(18))},function(e,t,n){"use strict";var r=n(0),o=n(20),i=n(22),a=n(3),s=n(23),c=n(26),u=n(27),f=n(7);e.exports=function(e){return new Promise((function(t,n){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,i),p=null}},p.onabort=function(){p&&(n(f("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(f("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),l||(l=null),p.send(l)}))}},function(e,t,n){"use strict";var r=n(21);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(i,u),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(i).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,f="".concat(c," ").concat(u);n[c]=u+1;var l=s(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(d)):a.push({identifier:f,updater:v(d,t),references:1}),r.push(f)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var f,l=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=h||(h=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var f=s(n[u]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){e.exports=n(13)},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(14),a=n(8);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(5));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(9),c.CancelToken=n(28),c.isCancel=n(4),c.all=function(e){return Promise.all(e)},c.spread=n(29),c.isAxiosError=n(30),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(15),a=n(16),s=n(8);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(17),i=n(4),a=n(5);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(24),o=n(25);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(9);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},function(e,t,n){"use strict";n.r(t),n.d(t,"nuevoJuego1",(function(){return $})),n.d(t,"final",(function(){return Y}));var r=n(10),o=n.n(r),i=n(1),a={insert:"head",singleton:!1},s=(o()(i.a,a),i.a.locals,n(12)),c=n.n(s);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(e){return document.createElement(e)},l=function(e,t,n,r){var o=document.createElement(e);return o.type=t,o.value=n,o.id=r,o},d=function(e){return document.getElementById(e)},p=d("container"),h=d("container-bienvenida"),m=f("div");p.appendChild(m),m.className="container-sin-opciones",m.id="container-sin-opciones";var v=d("questionContainer");p.appendChild(v),v.className="container-trivia";var g=f("div");v.appendChild(g);var x=f("div");v.appendChild(x);var y=f("h2");x.appendChild(y);var b=f("div");x.appendChild(b),l("input","submit","Quieres juegar de Nuevo","nuevo juego").className="button";var w=l("input","submit","Regresar","Regresar a menu opciones");w.className="button";var E,C,k,T,j,S=0,F=0,L=0,N=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.urlBase="https://opentdb.com/api.php?amount=10",this.categoria=t,this.dificultad=n,this.tipo=r}var t,n,r;return t=e,(n=[{key:"hacerPeticion",value:function(){var e=this,t="".concat(this.urlBase,"&category=").concat(this.categoria,"&difficulty=").concat(this.dificultad,"&type=").concat(this.tipo);c.a.get(t).then((function(t){var n=t.data.response_code,r=t.data.results;0!=n?(h.style.display="none",m.style.display="flex",m.innerHTML="<p>Lo sentimos no contamos con suficientes preguntas</p><br> <p>Por favor elige otras opciones</p>",m.appendChild(w),w.addEventListener("click",$),v.style.display="none"):(E=r,e.nuevoJuego())})).catch((function(e){return console.log(e)}))}},{key:"nuevoJuego",value:function(){L=0,F=0,S=0,this.mostrarPregunta(S)}},{key:"mostrarPregunta",value:function(e){if(10===e)return v.style.display="none",Y(F);h.style.display="none",m.style.display="none",v.style.display="flex",S++,L++;var t=E[e].question;C=E[e].correct_answer;var n=E[e].incorrect_answers,r=["A","B","C","D","E"];this.obtenerRespuestas(C,n),T=Array.from(k),this.mezclarRespuestas(T);var o=T.map((function(e){return'\n       <div class="respuesta-contenedor" id = "'.concat(e,'">\n        <p class="prefijo-respuesta" id = "').concat(e,'">').concat(r[T.indexOf(e)],'</p>\n        <p class="respuesta" id = "').concat(e,'">').concat(e,"</p>\n      </div>")})).join(" ");g.innerHTML="<div class= score-contenedor> \n    <div>\n      <p> Pregunta ".concat(L," de ").concat(10,'</p>\n      <div id="barra-contenedor">\n          <div id="barra-progreso" ></div>\n      </div>\n    </div>\n\n    <div >\n    <p >Score</p>\n    <h1  id="score"> ').concat(F,"</h1>\n    </div>\n    </div>");var i=L/10*100;d("barra-progreso").style.width="".concat(i,"%"),y.innerHTML="<h2>".concat(e+1," ").concat(t,"</h2>"),b.innerHTML=o,console.log("mostrando respuesta correcta",C),v.style.display="flex",this.agregarEvento()}},{key:"obtenerRespuestas",value:function(e,t){k=[e],t.forEach((function(e){k.push(e)}))}},{key:"mezclarRespuestas",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}},{key:"agregarEvento",value:function(){var e=this;document.querySelectorAll("div.respuesta-contenedor").forEach((function(t){t.addEventListener("click",(function(n){n.target.id===C?(F+=100,t.classList.add("correct"),setTimeout((function(){t.classList.remove("incorrect"),e.mostrarPregunta(S)}),1e3)):(t.classList.add("incorrect"),setTimeout((function(){t.classList.remove("incorrect"),e.mostrarPregunta(S)}),1e3))}))}))}}])&&u(t.prototype,n),r&&u(t,r),e}(),A=function(e){return document.createElement(e)},O=function(e,t,n,r){var o=document.createElement(e);return o.type=t,o.value=n,o.id=r,o},R=function(e){return document.getElementById(e)},B=(R("container"),R("container-bienvenida")),P=R("questionContainer"),M=R("container-sin-opciones"),U=A("input");U.className="input-nombre";var z=O("input","submit","Enviar","btnBienvenida");z.className="button";var q=[["Fácil","easy"],["Intermedio","medium"],["Dificil","hard"]],H=[["Opción múltiple","multiple"],["Verdadero o falso","boolean"]],D=[["Conocimiento General",9],["Entretenimiento: Libros",10],["Entretenimiento: Peliculas",11],["Entretenimiento: Música",12],["Entretenimiento: Musicales y Teatros",13],["Entretenimiento: Televisión",14],["Entretenimiento: Video Juegos",15],["Entretenimiento: Juegos de Mesa",16],["Ciencia y Naturaleza",17],["Ciencia: Computadoras",18],["Ciencia: Matemáticas",19],["Mitología",20],["Deportes",21],["Geografía",22],["Historia",23],["Política",24],["Arte",25],["Celebridades",26],["Animales",27],["Automoviles",28],["Entretenimiento: Comics",29],["Ciencia: Gadgets",30],["Entretenimiento: Anime y manga Japones",31],["Entretenimiento: Caricaturas y Animaciones",32]],_=A("div");_.className="container-select-trivia";var I=O("input","submit","Enviar","btnFormulario");I.className="button";var J=O("input","submit","Nuevo Juego","nuevo juego");J.className="button";var V=O("input","submit","Inicio","Inicio");V.className="button";var X=function(){var e=R("triviaForm-dificultad").value,t=R("triviaForm-tipo").value,n=R("triviaForm-categoria").value;new N(n,e,t).hacerPeticion()},G=function(e,t){B.appendChild(_);var n=A("select");_.appendChild(n);for(var r=0;r<e.length;r++){n.id="triviaForm-".concat(t);var o=A("option");o.text=e[r][0],o.value=e[r][1],n.appendChild(o)}B.appendChild(I),I.addEventListener("click",X)},$=function(){0===(j=U.value).length?K():(B.style.display="flex",M.style.display="none",P.style.display="none",_.innerHTML=" ",B.innerHTML="\n    <h1>Hola ".concat(j,"</h1>\n    <p>Selecciona las siguientes opciones para empezar a jugar</p>"),G(q,"dificultad"),G(H,"tipo"),G(D,"categoria"))},K=function(){var e=O("input","submit","Regresar","btn-regresar");e.addEventListener("click",Q),e.className="button",0===j.length&&""===j&&(B.innerHTML="<p>Por favor escribe un nombre</p> ",B.appendChild(e))},Q=function(){U.value="",P.style.display="none",M.style.display="none",U.placeholder="Nombre",B.innerHTML="<h1>Bienvenido</h1>  <p>Por favor indica tu nombre</p>",B.appendChild(U),B.appendChild(z)};z.addEventListener("click",$),V.addEventListener("click",Q);var W=function(){P.style.display="none",M.style.display="none",B.innerHTML='\n    <svg  viewBox="0 0 600 200">\n      \x3c!-- Symbol--\x3e\n      <symbol id="s-text">\n        <text text-anchor="middle" x="50%" y="50%" dy=".35em">DevTrivia</text>\n      </symbol>\n      \x3c!-- Duplicate symbols--\x3e\n      <use class="text" xlink:href="#s-text"></use>\n      <use class="text" xlink:href="#s-text"></use>\n      <use class="text" xlink:href="#s-text"></use>\n      <use class="text" xlink:href="#s-text"></use>\n      <use class="text" xlink:href="#s-text"></use>\n    </svg>\n  ',B.appendChild(V)},Y=function(e){console.log("tu score final es",e),B.innerHTML=" ",B.style.display="flex";var t=A("p");t.innerHTML="<h2>Tu score es de ".concat(e,"</h2> "),B.appendChild(t),B.appendChild(J),J.addEventListener("click",W)};W()}]);