(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1223:(t,e,n)=>{var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9670:(t,e,n)=>{var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,e,n)=>{"use strict";var r=n(2092).forEach,o=n(9341)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,n)=>{var r=n(5656),o=n(7466),i=n(1400),a=function(t){return function(e,n,a){var c,s=r(e),u=o(s.length),f=i(a,u);if(t&&n!=n){for(;u>f;)if((c=s[f++])!=c)return!0}else for(;u>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,e,n)=>{var r=n(9974),o=n(8361),i=n(7908),a=n(7466),c=n(5417),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,p=6==t,l=7==t,d=5==t||p;return function(h,m,y,v){for(var g,b,x=i(h),w=o(x),S=r(m,y,3),O=a(w.length),L=0,j=v||c,E=e?j(h,O):n||l?j(h,0):void 0;O>L;L++)if((d||L in w)&&(b=S(g=w[L],L,x),t))if(e)E[L]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:s.call(E,g)}else switch(t){case 4:return!1;case 7:s.call(E,g)}return p?-1:u||f?f:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},1194:(t,e,n)=>{var r=n(7293),o=n(5112),i=n(7392),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:(t,e,n)=>{"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},5417:(t,e,n)=>{var r=n(111),o=n(3157),i=n(5112)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:(t,e,n)=>{var r=n(1694),o=n(4326),i=n(5112)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},9920:(t,e,n)=>{var r=n(6656),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),c=a.f,s=i.f,u=0;u<n.length;u++){var f=n[u];r(t,f)||c(t,f,s(e,f))}}},4964:(t,e,n)=>{var r=n(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:(t,e,n)=>{var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,n)=>{"use strict";var r=n(7593),o=n(3070),i=n(9114);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},9781:(t,e,n)=>{var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,n)=>{var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,e,n)=>{var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:(t,e,n)=>{var r,o,i=n(7854),a=n(8113),c=i.process,s=c&&c.versions,u=s&&s.v8;u?o=(r=u.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,n)=>{var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),s=n(9920),u=n(4705);t.exports=function(t,e){var n,f,p,l,d,h=t.target,m=t.global,y=t.stat;if(n=m?r:y?r[h]||c(h,{}):(r[h]||{}).prototype)for(f in e){if(l=e[f],p=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!u(m?f:h+(y?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;s(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(n,f,l,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,n)=>{var r=n(3099);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},5005:(t,e,n)=>{var r=n(857),o=n(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},7854:(t,e,n)=>{var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:(t,e,n)=>{var r=n(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},3501:t=>{t.exports={}},490:(t,e,n)=>{var r=n(5005);t.exports=r("document","documentElement")},4664:(t,e,n)=>{var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,n)=>{var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,n)=>{var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:(t,e,n)=>{var r,o,i,a=n(8536),c=n(7854),s=n(111),u=n(8880),f=n(6656),p=n(5465),l=n(6200),d=n(3501),h="Object already initialized",m=c.WeakMap;if(a||p.state){var y=p.state||(p.state=new m),v=y.get,g=y.has,b=y.set;r=function(t,e){if(g.call(y,t))throw new TypeError(h);return e.facade=t,b.call(y,t,e),e},o=function(t){return v.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var x=l("state");d[x]=!0,r=function(t,e){if(f(t,x))throw new TypeError(h);return e.facade=t,u(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3157:(t,e,n)=>{var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:(t,e,n)=>{var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==u||n!=s&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},7850:(t,e,n)=>{var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},133:(t,e,n)=>{var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:(t,e,n)=>{var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3929:(t,e,n)=>{var r=n(7850);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},30:(t,e,n)=>{var r,o=n(9670),i=n(6048),a=n(748),c=n(3501),s=n(490),u=n(317),f=n(6200)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(l("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=u("iframe")).style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete d.prototype[a[n]];return d()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[f]=t):n=d(),void 0===e?n:i(n,e)}},6048:(t,e,n)=>{var r=n(9781),o=n(3070),i=n(9670),a=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),c=r.length,s=0;c>s;)o.f(t,n=r[s++],e[n]);return t}},3070:(t,e,n)=>{var r=n(9781),o=n(4664),i=n(9670),a=n(7593),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:(t,e,n)=>{var r=n(9781),o=n(5296),i=n(9114),a=n(5656),c=n(7593),s=n(6656),u=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),u)try{return f(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,n)=>{var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,n)=>{var r=n(6656),o=n(5656),i=n(1318).indexOf,a=n(3501);t.exports=function(t,e){var n,c=o(t),s=0,u=[];for(n in c)!r(a,n)&&r(c,n)&&u.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(u,n)||u.push(n));return u}},1956:(t,e,n)=>{var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:(t,e)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},288:(t,e,n)=>{"use strict";var r=n(1694),o=n(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},3887:(t,e,n)=>{var r=n(5005),o=n(8006),i=n(5181),a=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},857:(t,e,n)=>{var r=n(7854);t.exports=r},1320:(t,e,n)=>{var r=n(7854),o=n(8880),i=n(6656),a=n(3505),c=n(2788),s=n(9909),u=s.get,f=s.enforce,p=String(String).split("String");(t.exports=function(t,e,n,c){var s,u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,d=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(s=f(n)).source||(s.source=p.join("string"==typeof e?e:""))),t!==r?(u?!d&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},7066:(t,e,n)=>{"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,n)=>{var r=n(7854),o=n(8880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},6200:(t,e,n)=>{var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,n)=>{var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:(t,e,n)=>{var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.14.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(t,e,n)=>{var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:(t,e,n)=>{var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:t=>{var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:(t,e,n)=>{var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:(t,e,n)=>{var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:(t,e,n)=>{var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:(t,e,n)=>{var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},9711:t=>{var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:(t,e,n)=>{var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,n)=>{var r=n(7854),o=n(2309),i=n(6656),a=n(9711),c=n(133),s=n(3307),u=o("wks"),f=r.Symbol,p=s?f:f&&f.withoutSetter||a;t.exports=function(t){return i(u,t)&&(c||"string"==typeof u[t])||(c&&i(f,t)?u[t]=f[t]:u[t]=p("Symbol."+t)),u[t]}},2222:(t,e,n)=>{"use strict";var r=n(2109),o=n(7293),i=n(3157),a=n(111),c=n(7908),s=n(7466),u=n(6135),f=n(5417),p=n(1194),l=n(5112),d=n(7392),h=l("isConcatSpreadable"),m=9007199254740991,y="Maximum allowed index exceeded",v=d>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=p("concat"),b=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!v||!g},{concat:function(t){var e,n,r,o,i,a=c(this),p=f(a,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(b(i=-1===e?a:arguments[e])){if(l+(o=s(i.length))>m)throw TypeError(y);for(n=0;n<o;n++,l++)n in i&&u(p,l,i[n])}else{if(l>=m)throw TypeError(y);u(p,l++,i)}return p.length=l,p}})},6699:(t,e,n)=>{"use strict";var r=n(2109),o=n(1318).includes,i=n(1223);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},9600:(t,e,n)=>{"use strict";var r=n(2109),o=n(8361),i=n(5656),a=n(9341),c=[].join,s=o!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},1249:(t,e,n)=>{"use strict";var r=n(2109),o=n(2092).map;r({target:"Array",proto:!0,forced:!n(1194)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1539:(t,e,n)=>{var r=n(1694),o=n(1320),i=n(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},9714:(t,e,n)=>{"use strict";var r=n(1320),o=n(9670),i=n(7293),a=n(7066),c="toString",s=RegExp.prototype,u=s.toString,f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=u.name!=c;(f||p)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n)}),{unsafe:!0})},2023:(t,e,n)=>{"use strict";var r=n(2109),o=n(3929),i=n(4488);r({target:"String",proto:!0,forced:!n(4964)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},4747:(t,e,n)=>{var r=n(7854),o=n(8324),i=n(8533),a=n(8880);for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(t){u.forEach=i}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(9600),n(2222),n(1539),n(9714),n(4747),n(6699),n(2023);var a=function(){function t(){e(this,t),i(this,"listeners",{initialized:[],opened:[],closed:[],greetingOpened:[],greetingClosed:[],conversationEnded:[]}),this.emit=this.emit.bind(this),this.on=this.on.bind(this)}return o(t,[{key:"emit",value:function(t,e){this.listeners[t].forEach((function(t){try{t(e)}catch(t){console.error(t)}}))}},{key:"on",value:function(t,e){!function(t,e){return Array.isArray(e[t])}(t,this.listeners)?console.warn("event is not supported"):this.listeners[t].includes(e)?console.warn("handler is already attached"):this.listeners[t].push(e)}},{key:"dispose",value:function(){for(var t in this.listeners)this.listeners[t]=[]}}]),t}(),c=function(){function n(t,r){var o=this;e(this,n),this.iframe=t,this.dummyLeadBoosterApi=r,i(this,"emitter",new a),i(this,"initialized",!0),i(this,"iframeListener",(function(t){if(t.source===o.iframe){var e=t.data;"iframe"===e.sender&&("initialized"===e.type?(o.isDummyApiValid(o.dummyLeadBoosterApi)&&o.applyQueue(o.dummyLeadBoosterApi),o.emitter.emit("initialized")):o.emitter.emit(e.type,e.data))}})),this.iframe.addEventListener("message",this.iframeListener)}return o(n,[{key:"on",value:function(t,e){"string"==typeof t&&"function"==typeof e&&this.emitter.on(t,e)}},{key:"trigger",value:function(t){(function(t){return"open"===t||"close"===t})(t)&&this.iframe.postMessage({type:t,sender:"embed"},"*")}},{key:"isDummyApiValid",value:function(e){return!("object"!==t(e)||!Array.isArray(e.q))}},{key:"applyQueue",value:function(t){var e=this;t.q.forEach((function(t){"o"===t.t&&e.on(t.n,t.h),"t"===t.t&&e.trigger(t.n)}))}}]),n}();n(1249);var s,u=[{fontFamily:"Open Sans",fontStyle:"italic",fontWeight:400,fullName:"Open Sans Italic",postScriptName:"OpenSans-Italic"},{fontFamily:"Open Sans",fontStyle:"italic",fontWeight:700,fullName:"Open Sans Bold Italic",postScriptName:"OpenSans-BoldItalic"},{fontFamily:"Open Sans",fontStyle:"normal",fontWeight:400,fullName:"Open Sans Regular",postScriptName:"OpenSans-Regular"},{fontFamily:"Open Sans",fontStyle:"normal",fontWeight:700,fullName:"Open Sans Bold",postScriptName:"OpenSans-Bold"}],f=window.pipedriveLeadboosterConfig,p=function(){return window.innerWidth<576},l=function(t){var e=function(){var t=document.createElement("iframe");t.setAttribute("role","complementary"),t.setAttribute("scrolling","no"),t.setAttribute("id","LeadboosterContainer"),t.setAttribute("title","Chatbot");var e=document.createElement("style");return e.innerHTML="html body #LeadboosterContainer {\n\tcursor: default !important;\n\tpadding: 0 !important;\n\tmargin: 0 !important;\n\tbox-shadow: none !important;\n\tmin-height: 0 !important;\n\tmin-width: 0 !important;\n\tborder: none !important;\n\tdisplay: block !important;\n\tposition: fixed !important;\n\tbottom: 0 !important;\n\tright: 0 !important;\n\tvisibility: visible !important;\n\tz-index: 2147483647 !important;\n\tmax-height: 100vh !important;\n\tmax-width: 100vw !important;\n\tbackground: none transparent !important;\n\topacity: 1 !important;\n\tpointer-events: auto !important;\n\ttouch-action: auto !important;\n\twidth: 104px !important;\n\theight: 104px !important;\n\ttransition: all 0s !important;\n\ttransition-delay: 400ms !important;\n}\n\nhtml body #LeadboosterContainer.openedChat {\n\twidth: 100% !important;\n\theight: 100% !important;\n\ttop: 0 !important;\n\tleft: 0 !important;\n\ttransition-delay: 0s !important;\n}\n\nhtml body #LeadboosterContainer.proactiveChat {\n\twidth: 425px !important;\n\ttransition-delay: 0s !important;\n\theight: 100% !important;\n}\n\n@media (min-width: 576px) {\n\thtml body #LeadboosterContainer {\n\t\tbottom: 28px !important;\n\t\tright: 28px !important;\n\t}\n\n\thtml body #LeadboosterContainer.openedChat {\n\t\twidth: 415px !important;\n\t\theight: 540px !important;\n\t\ttop: auto !important;\n\t\tleft: auto !important;\n\t}\n}\n",{chatIFrame:t,style:e}}(),n=e.chatIFrame,r=e.style;n.addEventListener("load",(function(){var e=this.contentWindow,r=e.document;e.pipedriveLeadboosterConfig=f;var o,i,a=function(t,e){var n=p(),r={isChatOpen:!1,isProactiveOpen:!1};window.addEventListener("resize",(function(){var t=p();n!==t&&(n=t,e.leadBoosterIFramePortal.handleScreenDispositionChange&&e.leadBoosterIFramePortal.handleScreenDispositionChange(t))}));var o=function(){var e=[];r.isProactiveOpen&&e.push("proactiveChat"),r.isChatOpen&&e.push("openedChat"),t.className=e.join(" ")};return{notifyParentWindowIsGreetingOpen:function(e,n){r.isProactiveOpen=e,e&&n?t.setAttribute("style","height:".concat(n+46,"px !important")):t.setAttribute("style",""),o()},notifyParentWindowIsChatOpen:function(t){r.isChatOpen=t,o()},currentDisposition:n}}(n,e),s=a.notifyParentWindowIsChatOpen,l=a.notifyParentWindowIsGreetingOpen,d=a.currentDisposition;e.leadBoosterIFramePortal={notifyParentWindowIsChatOpen:s,notifyParentWindowIsGreetingOpen:l,originalDisposition:d,url:window.location.href,hostname:window.location.hostname},o=e,!0!==(null==(i=window.LeadBooster)?void 0:i.initialized)&&(window.LeadBooster=new c(o,window.LeadBooster)),function(t,e){var n=e.createElement("div");n.setAttribute("id","pipedrive-chat-holder");var r=e.createElement("script");r.setAttribute("src",t),r.setAttribute("async","async"),e.body.appendChild(n),e.head.appendChild(r)}(t,r),function(t,e){var n=t.createElement("style");n.innerHTML=function(t){return u.map((function(e){var n=e.fontFamily,r=e.fontStyle,o=e.fontWeight,i=e.fullName,a=e.postScriptName;return"\n\t\t\t@font-face {\n\t\t\t\tfont-family: ".concat(n,";\n\t\t\t\tfont-style: ").concat(r,";\n\t\t\t\tfont-weight: ").concat(o,";\n\t\t\t\tfont-display: swap;\n\t\t\t\tsrc: local('").concat(i,"'),\n\t\t\t\t\t\t local('").concat(a,"'),\n\t\t\t\t\t\t url('https://").concat(t.base,"/assets/").concat(a,".woff2') format('woff2'),\n\t\t\t\t\t\t url('https://").concat(t.base,"/assets/").concat(a,".woff') format('woff');\n\t\t\t\t}\n\t\t\t")})).join("")}(e),t.head.appendChild(n)}(r,f)})),document.head.appendChild(r),document.body.appendChild(n)},d="https://".concat(f.base,"/chat-api/bundleInfo?url=").concat(window.location.href),h=new XMLHttpRequest;h.open("get",d),h.setRequestHeader("Leadbooster-Chat-Company-Id",f.companyId.toString()),h.setRequestHeader("x-public-token","chatbot-".concat(2===(s=f).version?s.playbookUuid:s.playbookId)),h.addEventListener("loadend",(function(){if(200===h.status)try{var t=JSON.parse(h.responseText);l(t.data.url)}catch(t){console.log(t)}else console.error("Failed to load data from ".concat(d))})),"complete"===document.readyState?h.send():window.addEventListener("load",(function(){return h.send()}))})()})();