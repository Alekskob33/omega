(()=>{var e={21:()=>{!function(e){if(!(e instanceof HTMLElement))return;const t=(new Date).getFullYear()-1998;e.textContent=t}(document.querySelector(".js-age"))}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";const e=document.querySelector(".navigation"),t=document.querySelector(".btn-menu");function r(e,t){const{day:n,hours:r,minutes:i}=function(){const e=new Date,t=e.toLocaleDateString([],{weekday:"long"}),n=e.getHours();let r=e.getMinutes().toString();return r=r<10?r.padStart(2,"0"):r,{day:`\n      <span class="${a()?"red":""}">${t}</span>`,hours:n,minutes:r}}();e.innerHTML=`${n} | ${r} <i class="clock-delimiter ${t?"":"hidden"}">:</i> ${i}`}function a(){const e=(new Date).getDay();return 6===e||0===e}t&&(t.onclick=function(t){if(!e)return;const n=t.currentTarget;e.classList.toggle("visible"),n.classList.toggle("menu-visible")});const i={phone:`\n    <div class="popup-content popup-content--office-phone">\n\n      <span class="office-phone-label">Офис</span>\n      <span class="phone-number">+7(4922) 33-29-29</span>\n      <a\n        class="btn-call btn-call--office ${a()?"disabled":""}"\n        target="_blank"\n        href="tel:+4922332929"\n        >Позвонить</a\n      >\n      <span class="small-text js-clock">&nbsp;</span>\n    </div>\n    `,viber:'\n    <div class="popup-content popup-content--mobile-phone">\n    \n      <span class="viber-label">Viber</span>\n      <span class="phone-number">+7(910) 777-66-33</span>\n      <a\n        class="btn-call btn-call--viber"\n        target="_blank"\n        href="tel:+9107776633"\n        >Позвонить</a\n      >\n      <a class="link-install-app" href="https://www.viber.com/ru/download/">установить приложение →</span>\n      </div>',whatsapp:'\n      <div class="popup-content popup-content--mobile-phone">\n      \n      <span class="whatsapp-label">WhatsApp</span>\n      <span class="phone-number">+7(910) 777-66-33</span>\n      <a\n      class="btn-call btn-call--whatsapp"\n      target="_blank"\n      href="https://wa.me/+9107776633"\n      >Открыть чат</a\n      >\n      <a class="link-install-app" href="https://www.whatsapp.com/download/">установить приложение →</span>\n    </div>\n  ',email:'\n    <div class="popup-content popup-content--email">\n      <span class="email-label">Почта</span>\n      <span class="email-address">omega33@mail.ru</span>\n      <a\n        class="btn-call btn-call--email"\n        target="_blank"\n        href="mailto:omega33@mail.ru"\n        >Написать</a\n      >\n      <span class="small-text">Омега | печати и штампы</span>\n    </div>\n  ',location:'\n    <div class="popup-content">\n      <span class="location-label">Omega</span>\n      <span class="email-address">"печати и штампы"</span>\n      <ul class="schedule">\n        <li>пн-пт: 10-17</li>\n        <li>сб-вс: выходной</li>\n      </ul>\n      <a\n        class="btn-call btn-call--location"\n        target="_blank"\n        rel="nofollow"\n        href="http://maps.yandex.ru/?text=%D0%BE%D0%BC%D0%B5%D0%B3%D0%B0%20%D0%B8%D0%B7%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%B9%20%D0%B8%20%D1%88%D1%82%D0%B0%D0%BC%D0%BF%D0%BE%D0%B2&sll=40.341308999999995%2C56.1197099999933&sspn=0.542450%2C0.163980&z=18&results=20&ol=biz&oid=1178450569&ll=40.401586%2C56.139577&spn=0.008476%2C0.002561&l=map"\n        >Открыть на карте</a\n      >\n      <p class="small-text">ул. Мира, 25 | этаж 2-ой</p>\n    </div>\n  '},s=document.querySelector(".footer-mobile");function o(e){e.classList.remove("active")}(()=>{if(!s)return;const e=function(e){const t=document.createElement("div");return t.className="popup",t}();s.addEventListener("click",(t=>{const n=t.target.closest("button");if(!n)return t.stopPropagation();var a;a=n,[...s.querySelectorAll("button")].forEach(o),a.classList.add("active");const c=i[n.dataset.content];(function(e,t){document.body.append(e),document.body.classList.add("has-overlay"),e.classList.add("open"),e.innerHTML=t,function(e){if(!e)return;let t=!0;r(e,t),t=!t,window.clockTimer=setInterval((()=>{r(e,t),t=!t}),1e3)}(document.querySelector(".js-clock"))})(e,c),t.stopPropagation()})),document.body.addEventListener("click",(({target:t})=>{const n=document.querySelector(".popup.open");if(!t.closest(".popup")&&n){!function(e){e.remove(),document.body.classList.remove("has-overlay"),window.clockTimer&&(clearInterval(window.clockTimer),window.clockTimer=null)}(e);const t=document.querySelector(".footer-btn-icon.active");t&&o(t)}}))})();const c=window.matchMedia("(max-width: 1024px)"),l=window.matchMedia("(max-width: 860px)"),u={isMobile:c.matches,isPhone:l.matches};c.onchange=e=>{u.isMobile=e.matches},l.onchange=e=>{u.isPhone=e.matches};const d=u;function h(e,t){return new CustomEvent(e,{detail:t,bubbles:!0})}[...document.querySelectorAll("[data-target-tab]")].forEach((e=>{e.onclick=()=>{!function(e){const t=e.closest("nav").children,n=e.dataset.targetTab,r=document.querySelector(`[data-tab="${n}"]`);if(!r)return;[...r.closest(".main").querySelectorAll("[data-tab]"),...t].forEach((e=>e.classList.remove("active"))),r.classList.add("active"),e.classList.add("active");const a=new CustomEvent("tab-toggle",{detail:{targetTab:r},bubbles:!0});r.dispatchEvent(a)}(e),d.isPhone?window.scrollTo({top:65,behavior:"smooth"}):d.isMobile?window.scrollTo({top:172,behavior:"smooth"}):window.scrollTo({top:205,behavior:"smooth"})}}));class m{constructor(e){this.navElem=document.createElement("nav"),this.slides=e,this.activeIndex=0,this.#e(),this.btnNext.onclick=this.next.bind(this),this.btnPrev.onclick=this.prev.bind(this)}#e(){return this.navElem.className="carousel__nav",this.btnNext=document.createElement("button"),this.btnPrev=document.createElement("button"),this.btnNext.className="carousel__nav-btn next",this.btnPrev.className="carousel__nav-btn prev",this.btnNext.textContent="next",this.btnPrev.textContent="prev",this.navElem.append(this.btnPrev),this.navElem.append(this.btnNext),this.navElem}next(){const e=this.slides[this.activeIndex];e.hide(),this.activeIndex=(this.activeIndex+1)%this.slides.length;const t=this.slides[this.activeIndex];t.display();const n=h("slide-changed",{hiddenSlide:e.slideElem,activeSlide:t.slideElem});t.slideElem.dispatchEvent(n)}prev(){const e=this.slides[this.activeIndex];var t;e.hide(),this.activeIndex=(this.activeIndex-1+(t=this.slides).length)%t.length;const n=this.slides[this.activeIndex];n.display();const r=h("slide-changed",{hiddenSlide:e.slideElem,activeSlide:n.slideElem});n.slideElem.dispatchEvent(r)}}class p{constructor(e){this.navigation=e}setClasses({customClasses:e}){this.tuneNav(e)}tuneNav(e){const{navElem:t,btnNext:n,btnPrev:r}=this.navigation,{navClass:a,btnNextClass:i,btnPrevClass:s}=e;t.classList.add(a||""),n.classList.add(i||""),r.classList.add(s||"")}}class f{constructor(e,t){e.classList.add("carousel"),this.rootElem=e,this.slides=t,this.navigation=new m(t),this.customizer=new p(this.navigation),this.render()}populate(){const e=document.createElement("div");return e.className="carousel__slides-container",this.slides.forEach((t=>e.append(t.slideElem))),this.slides[0].display(),e}render(){this.rootElem.prepend(this.navigation.navElem);const e=this.populate();this.rootElem.append(e)}}class v{constructor(e){this.slideElem=this.createSlide(e)}createSlide(e){const t=document.createElement("div");return t.className="carousel__slide",t.innerHTML=e,t}display(){this.slideElem.classList.add("active")}hide(){this.slideElem.classList.remove("active")}}const g=[[{className:"i-mts",text:"МТС"},{className:"i-bridzhtaun-fuds",text:"Брижтаун Фудс"},{className:"i-rzhd",text:"РЖД"},{className:"i-abi",text:"АБИ"},{className:"i-rks",text:"РКС"},{className:"i-gazprom",text:"Газпром"},{className:"i-tele2",text:"Теле2"},{className:"i-beeline",text:"Билайн"},{className:"i-avtotract",text:"Автотракт"},{className:"i-Megaphone",text:"Мегафон"},{className:"i-worldclass",text:"Вордкласс"},{className:"i-danon",text:"Danone ЮНИМИЛК"}],[{className:"i-vhz",text:"ВХЗ"},{className:"i-gusar",text:"Гусар"},{className:"i-tochmash",text:"Точмаш"},{className:"i-jelektropribor",text:"Электроприбор"},{className:"i-avtopribor",text:"Автоприбор\t"}],[{className:"i-bank-moskvy",text:"Банк Москвы"},{className:"i-vtb24",text:"Банк ВТБ24"},{className:"i-rost",text:"Банк РОСТ"},{className:"i-bank-trast",text:"Банк ТРАСТ"},{className:"i-rosselhozbank",text:"РОССЕЛЬХОЗБАНК"},{className:"i-mosoblbank",text:"МОСОБЛБАНК"},{className:"i-vtb",text:"Банк ВТБ"},{className:"i-binbank",text:"БИНБАНК"},{className:"i-sberbank",text:"Сбербанк России\t"},{className:"i-bank-rossii",text:"Банк России\t"},{className:"i-uralsib",text:"Банк УРАЛСИБ\t"},{className:"i-promsvyazbank",text:"ПромсвязьБанк"}],[{className:"i-vladimir",text:"г.Владимир"},{className:"i-avo",text:"АВО"},{className:"i-gibdd",text:"ГИБДД"},{className:"i-mvd",text:"МВД"},{className:"i-pfr",text:"ПФР"},{className:"i-ufsin",text:"УФСИН"},{className:"i-fns",text:"ФНС"},{className:"i-fso",text:"ФСО"},{className:"i-mchs",text:"МЧС"},{className:"i-sluzhba-zanjatosti",text:"ЦЗН"},{className:"i-pochta-rossii",text:"Почта России"},{className:"i-tamozhnja",text:"Таможня"},{className:"i-Rospotrebnadzor",text:"Роспотребнадзор"},{className:"i-Rosselhoznadzor",text:"Россельхознадзор"},{className:"i-rostehnadzor",text:"Ростехнадзор"}],[{className:"i-energogarant",text:"Энергогарант"},{className:"i-soglasie",text:"Согласие"},{className:"i-cjurih",text:"Цюрих"},{className:"i-sogaz",text:"СОГАЗ"},{className:"i-kapital",text:"Капитал"},{className:"i-reso",text:"РЕСО"},{className:"i-vsk",text:"ВСК"}]];var b={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},x={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},y=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],N={CSS:{},springs:{}};function w(e,t,n){return Math.min(Math.max(e,t),n)}function E(e,t){return e.indexOf(t)>-1}function C(e,t){return e.apply(null,t)}var D={arr:function(e){return Array.isArray(e)},obj:function(e){return E(Object.prototype.toString.call(e),"Object")},pth:function(e){return D.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||D.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return D.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return D.hex(e)||D.rgb(e)||D.hsl(e)},key:function(e){return!b.hasOwnProperty(e)&&!x.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function M(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function k(e,t){var n=M(e),r=w(D.und(n[0])?1:n[0],.1,100),a=w(D.und(n[1])?100:n[1],.1,100),i=w(D.und(n[2])?10:n[2],.1,100),s=w(D.und(n[3])?0:n[3],.1,100),o=Math.sqrt(a/r),c=i/(2*Math.sqrt(a*r)),l=c<1?o*Math.sqrt(1-c*c):0,u=c<1?(c*o-s)/l:-s+o;function d(e){var n=t?t*e/1e3:e;return n=c<1?Math.exp(-n*c*o)*(1*Math.cos(l*n)+u*Math.sin(l*n)):(1+u*n)*Math.exp(-n*o),0===e||1===e?e:1-n}return t?d:function(){var t=N.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===d(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return N.springs[e]=i,i}}function S(e){return void 0===e&&(e=10),function(t){return Math.ceil(w(t,1e-6,1)*e)*(1/e)}}var I,L,B=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,s){if(0<=t&&t<=1&&0<=r&&r<=1){var o=new Float32Array(11);if(t!==n||r!==s)for(var c=0;c<11;++c)o[c]=a(c*e,t,r);return function(c){return t===n&&r===s||0===c||1===c?c:a(function(n){for(var s=0,c=1;10!==c&&o[c]<=n;++c)s+=e;--c;var l=s+(n-o[c])/(o[c+1]-o[c])*e,u=i(l,t,r);return u>=.001?function(e,t,n,r){for(var s=0;s<4;++s){var o=i(t,n,r);if(0===o)return t;t-=(a(t,n,r)-e)/o}return t}(n,l,t,r):0===u?l:function(e,t,n,r,i){var s,o,c=0;do{(s=a(o=t+(n-t)/2,r,i)-e)>0?n=o:t=o}while(Math.abs(s)>1e-7&&++c<10);return o}(n,s,s+e,t,r)}(c),n,s)}}}}(),T=(I={linear:function(){return function(e){return e}}},L={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Expo:function(){return function(e){return e?Math.pow(2,10*e-10):0}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=w(e,1,10),r=w(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(e,t){L[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(L).forEach((function(e){var t=L[e];I["easeIn"+e]=t,I["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},I["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},I["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),I);function P(e,t){if(D.fnc(e))return e;var n=e.split("(")[0],r=T[n],a=M(e);switch(n){case"spring":return k(e,t);case"cubicBezier":return C(B,a);case"steps":return C(S,a);default:return C(r,a)}}function q(e){try{return document.querySelectorAll(e)}catch(e){return}}function O(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var s=e[i];t.call(r,s,i,e)&&a.push(s)}return a}function A(e){return e.reduce((function(e,t){return e.concat(D.arr(t)?A(t):t)}),[])}function j(e){return D.arr(e)?e:(D.str(e)&&(e=q(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function $(e,t){return e.some((function(e){return e===t}))}function z(e){var t={};for(var n in e)t[n]=e[n];return t}function F(e,t){var n=z(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function _(e,t){var n=z(e);for(var r in t)n[r]=D.und(e[r])?t[r]:e[r];return n}function H(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function W(e,t){return D.fnc(e)?e(t.target,t.id,t.total):e}function V(e,t){return e.getAttribute(t)}function X(e,t,n){if($([n,"deg","rad","turn"],H(t)))return t;var r=N.CSS[t+n];if(!D.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var s=100/a.offsetWidth;i.removeChild(a);var o=s*parseFloat(t);return N.CSS[t+n]=o,o}function R(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?X(e,a,n):a}}function Y(e,t){return D.dom(e)&&!D.inp(e)&&(!D.nil(V(e,t))||D.svg(e)&&e[t])?"attribute":D.dom(e)&&$(y,t)?"transform":D.dom(e)&&"transform"!==t&&R(e,t)?"css":null!=e[t]?"object":void 0}function Z(e){if(D.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function G(e,t,n,r){switch(Y(e,t)){case"transform":return function(e,t,n,r){var a=E(t,"scale")?1:0+function(e){return E(e,"translate")||"perspective"===e?"px":E(e,"rotate")||E(e,"skew")?"deg":void 0}(t),i=Z(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?X(e,i,r):i}(e,t,r,n);case"css":return R(e,t,n);case"attribute":return V(e,t);default:return e[t]||0}}function Q(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=H(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function J(e,t){if(D.col(e))return function(e){return D.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:D.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):D.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,s=parseInt(a[2],10)/100,o=parseInt(a[3],10)/100,c=a[4]||1;function l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==s)t=n=r=o;else{var u=o<.5?o*(1+s):o+s-o*s,d=2*o-u;t=l(d,u,i+1/3),n=l(d,u,i),r=l(d,u,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+c+")"}(e):void 0;var t,n}(e);if(/\s/g.test(e))return e;var n=H(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function K(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function U(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=K(t,i)),t=i}return r}function ee(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*V(e,"r")}(e);case"rect":return function(e){return 2*V(e,"width")+2*V(e,"height")}(e);case"line":return function(e){return K({x:V(e,"x1"),y:V(e,"y1")},{x:V(e,"x2"),y:V(e,"y2")})}(e);case"polyline":return U(e);case"polygon":return function(e){var t=e.points;return U(e)+K(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function te(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;D.svg(t)&&D.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=V(r,"viewBox"),s=a.width,o=a.height,c=n.viewBox||(i?i.split(" "):[0,0,s,o]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:s,h:o,vW:c[2],vH:c[3]}}function ne(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=te(e.el,e.svg),i=r(),s=r(-1),o=r(1),c=n?1:a.w/a.vW,l=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*c;case"y":return(i.y-a.y)*l;case"angle":return 180*Math.atan2(o.y-s.y,o.x-s.x)/Math.PI}}function re(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=J(D.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:D.str(e)||t?r.split(n):[]}}function ae(e){return O(e?A(D.arr(e)?e.map(j):j(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function ie(e){var t=ae(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:Z(e)}}}))}function se(e,t){var n=z(t);if(/^spring/.test(n.easing)&&(n.duration=k(n.easing)),D.arr(e)){var r=e.length;2!==r||D.obj(e[0])?D.fnc(t.duration)||(n.duration=t.duration/r):e={value:e}}var a=D.arr(e)?e:[e];return a.map((function(e,n){var r=D.obj(e)&&!D.pth(e)?e:{value:e};return D.und(r.delay)&&(r.delay=n?0:t.delay),D.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return _(e,n)}))}var oe={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function ce(e,t){ie(e).forEach((function(e){for(var n in t){var r=W(t[n],e),a=e.target,i=H(r),s=G(a,n,i,e),o=Q(J(r,i||H(s)),s),c=Y(a,n);oe[c](a,n,o,e.transforms,!0)}}))}function le(e,t){return O(A(e.map((function(e){return t.map((function(t){return function(e,t){var n=Y(e.target,t.name);if(n){var r=function(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=W(e[r],t);D.arr(a)&&1===(a=a.map((function(e){return W(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,s=D.arr(i)?i[1]:i,o=H(s),c=G(t.target,e.name,o,t),l=n?n.to.original:c,u=D.arr(i)?i[0]:l,d=H(u)||H(c),h=o||d;return D.und(s)&&(s=l),a.from=re(u,h),a.to=re(Q(s,u),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=P(a.easing,a.duration),a.isPath=D.pth(i),a.isPathTargetInsideSVG=a.isPath&&D.svg(t.target),a.isColor=D.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!D.und(e)}))}function ue(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var de=0,he=[],me=function(){var e;function t(n){for(var r=he.length,a=0;a<r;){var i=he[a];i.paused?(he.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){fe.suspendWhenDocumentHidden&&(pe()?e=cancelAnimationFrame(e):(he.forEach((function(e){return e._onDocumentVisibility()})),me()))})),function(){e||pe()&&fe.suspendWhenDocumentHidden||!(he.length>0)||(e=requestAnimationFrame(t))}}();function pe(){return!!document&&document.hidden}function fe(e){void 0===e&&(e={});var t,n=0,r=0,a=0,i=0,s=null;function o(e){var t=window.Promise&&new Promise((function(e){return s=e}));return e.finished=t,t}var c=function(e){var t=F(b,e),n=F(x,e),r=function(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=_(function(e){for(var t=O(A(e.map((function(e){return Object.keys(e)}))),(function(e){return D.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)D.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)D.key(a)&&n.push({name:a,tweens:se(t[a],e)});return n}(n,e),a=ie(e.targets),i=le(a,r),s=ue(i,n),o=de;return de++,_(t,{id:o,children:[],animatables:a,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(e);function l(){var e=c.direction;"alternate"!==e&&(c.direction="normal"!==e?"normal":"reverse"),c.reversed=!c.reversed,t.forEach((function(e){return e.reversed=c.reversed}))}function u(e){return c.reversed?c.duration-e:e}function d(){n=0,r=u(c.currentTime)*(1/fe.speed)}function h(e,t){t&&t.seek(e-t.timelineOffset)}function m(e){for(var t=0,n=c.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,s=a.tweens,o=s.length-1,l=s[o];o&&(l=O(s,(function(t){return e<t.end}))[0]||l);for(var u=w(e-l.start-l.delay,0,l.duration)/l.duration,d=isNaN(u)?1:l.easing(u),h=l.to.strings,m=l.round,p=[],f=l.to.numbers.length,v=void 0,g=0;g<f;g++){var b=void 0,x=l.to.numbers[g],y=l.from.numbers[g]||0;b=l.isPath?ne(l.value,d*x,l.isPathTargetInsideSVG):y+d*(x-y),m&&(l.isColor&&g>2||(b=Math.round(b*m)/m)),p.push(b)}var N=h.length;if(N){v=h[0];for(var E=0;E<N;E++){h[E];var C=h[E+1],D=p[E];isNaN(D)||(v+=C?D+C:D+" ")}}else v=p[0];oe[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,t++}}function p(e){c[e]&&!c.passThrough&&c[e](c)}function f(e){var d=c.duration,f=c.delay,v=d-c.endDelay,g=u(e);c.progress=w(g/d*100,0,100),c.reversePlayback=g<c.currentTime,t&&function(e){if(c.reversePlayback)for(var n=i;n--;)h(e,t[n]);else for(var r=0;r<i;r++)h(e,t[r])}(g),!c.began&&c.currentTime>0&&(c.began=!0,p("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,p("loopBegin")),g<=f&&0!==c.currentTime&&m(0),(g>=v&&c.currentTime!==d||!d)&&m(d),g>f&&g<v?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,p("changeBegin")),p("change"),m(g)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,p("changeComplete")),c.currentTime=w(g,0,d),c.began&&p("update"),e>=d&&(r=0,c.remaining&&!0!==c.remaining&&c.remaining--,c.remaining?(n=a,p("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&l()):(c.paused=!0,c.completed||(c.completed=!0,p("loopComplete"),p("complete"),!c.passThrough&&"Promise"in window&&(s(),o(c)))))}return o(c),c.reset=function(){var e=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===e,c.remaining=c.loop,t=c.children;for(var n=i=t.length;n--;)c.children[n].reset();(c.reversed&&!0!==c.loop||"alternate"===e&&1===c.loop)&&c.remaining++,m(c.reversed?c.duration:0)},c._onDocumentVisibility=d,c.set=function(e,t){return ce(e,t),c},c.tick=function(e){a=e,n||(n=a),f((a+(r-n))*fe.speed)},c.seek=function(e){f(u(e))},c.pause=function(){c.paused=!0,d()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,he.push(c),d(),me())},c.reverse=function(){l(),c.completed=!c.reversed,d()},c.restart=function(){c.reset(),c.play()},c.remove=function(e){ge(ae(e),c)},c.reset(),c.autoplay&&c.play(),c}function ve(e,t){for(var n=t.length;n--;)$(e,t[n].animatable.target)&&t.splice(n,1)}function ge(e,t){var n=t.animations,r=t.children;ve(e,n);for(var a=r.length;a--;){var i=r[a],s=i.animations;ve(e,s),s.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}fe.version="3.2.1",fe.speed=1,fe.suspendWhenDocumentHidden=!0,fe.running=he,fe.remove=function(e){for(var t=ae(e),n=he.length;n--;)ge(t,he[n])},fe.get=G,fe.set=ce,fe.convertPx=X,fe.path=function(e,t){var n=D.str(e)?q(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:te(n),totalLength:ee(n)*(r/100)}}},fe.setDashoffset=function(e){var t=ee(e);return e.setAttribute("stroke-dasharray",t),t},fe.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?P(t.easing):null,a=t.grid,i=t.axis,s=t.from||0,o="first"===s,c="center"===s,l="last"===s,u=D.arr(e),d=u?parseFloat(e[0]):parseFloat(e),h=u?parseFloat(e[1]):0,m=H(u?e[1]:e)||0,p=t.start||0+(u?d:0),f=[],v=0;return function(e,t,g){if(o&&(s=0),c&&(s=(g-1)/2),l&&(s=g-1),!f.length){for(var b=0;b<g;b++){if(a){var x=c?(a[0]-1)/2:s%a[0],y=c?(a[1]-1)/2:Math.floor(s/a[0]),N=x-b%a[0],w=y-Math.floor(b/a[0]),E=Math.sqrt(N*N+w*w);"x"===i&&(E=-N),"y"===i&&(E=-w),f.push(E)}else f.push(Math.abs(s-b));v=Math.max.apply(Math,f)}r&&(f=f.map((function(e){return r(e/v)*v}))),"reverse"===n&&(f=f.map((function(e){return i?e<0?-1*e:-e:Math.abs(v-e)})))}return p+(u?(h-d)/v:d)*(Math.round(100*f[t])/100)+m}},fe.timeline=function(e){void 0===e&&(e={});var t=fe(e);return t.duration=0,t.add=function(n,r){var a=he.indexOf(t),i=t.children;function s(e){e.passThrough=!0}a>-1&&he.splice(a,1);for(var o=0;o<i.length;o++)s(i[o]);var c=_(n,F(x,e));c.targets=c.targets||e.targets;var l=t.duration;c.autoplay=!1,c.direction=t.direction,c.timelineOffset=D.und(r)?l:Q(r,l),s(t),t.seek(c.timelineOffset);var u=fe(c);s(u),i.push(u);var d=ue(i,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},fe.easing=P,fe.penner=T,fe.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const be=fe;function xe(e){if(e.length<1)return console.log("no elements to animate");be({targets:e,keyframes:[{scaleX:0,opacity:0,duration:0},{scaleX:1,opacity:1}],delay:be.stagger(50),duration:500,easing:"easeOutCirc",complete:()=>{}})}function ye(...e){e.forEach((e=>{e.addEventListener("click",Ne.bind(this,".logos-nav"))}))}function Ne(e){const t=document.querySelector(e);if(!t)return console.log(`no element ${e}`);t.scrollIntoView({block:"start",behavior:"smooth"})}const we={rootContainer:null,mobileContainer:null,elements:[],currentCells:[],currentIndex:null,lastDirection:"next",error:"",get containerWidth(){return this.mobileContainer.offsetWidth},subscribeToNav({nextButton:e,prevButton:t}){e.addEventListener("click",this.next.bind(this)),t.addEventListener("click",this.prev.bind(this))},next(){if(this.error)return console.error(this.error);const e=this.grabCollectionTo("next");this.lastDirection="next",this.changeSlide(e)},prev(){if(this.error)return console.error(this.error);const e=this.grabCollectionTo("prev");this.lastDirection="prev",this.changeSlide(e)},toggleContainerClass(){"prev"!==this.lastDirection?this.mobileContainer.classList.remove("reverse"):this.mobileContainer.classList.add("reverse")},changeSlide(e){this.clearContainer(),this.toggleContainerClass(),this.renderCells(e),this.animate()},grabCollectionTo(e){"prev"===this.lastDirection&&"next"===e&&(this.currentIndex=this.currentIndex+this.currentCells.length),"next"===this.lastDirection&&"prev"===e&&(this.currentIndex=this.currentIndex-this.currentCells.length+1);let t,n=0;this.currentCells=[];let r=0;for(;n<=this.containerWidth;){if(++r>50){console.error("Error: prevent infinite loop. Too many iterations");break}t="next"===e?this.nextIndex:this.prevIndex;const a=this.elements[t];if(n+=a.offsetWidth+5,n>=this.containerWidth)break;this.currentIndex=t,this.currentCells.push(a)}return this.currentCells},get nextIndex(){return null===this.currentIndex?0:(this.currentIndex+1)%this.elements.length},get prevIndex(){return null===this.currentIndex?0:(this.currentIndex-1+this.elements.length)%this.elements.length},animate(){xe(this.mobileContainer.children)},init(e){if(!e)return this.error="Fail initialization";this.rootContainer=e,this.elements=[...e.querySelectorAll(".logo-cell")],this.renderWrapper(),this.next()},renderCells(e){if(e.length<1)return this.error="Empty collection";let t;e.forEach((e=>{t=e.cloneNode(!0),t.style="",this.mobileContainer.insertAdjacentHTML("beforeEnd",t.outerHTML)}))},clearContainer(){this.mobileContainer.innerHTML=""},renderWrapper(){this.mobileContainer=document.createElement("div"),this.mobileContainer.className="mobile-slides-container active",this.rootContainer.append(this.mobileContainer)}};location.pathname.match(/404/),fetch(window.location.href).then((e=>{if(404!==e.status){const e=function(){const e=document.createElement("aside");return e.className="logos-carousel",document.body.append(e),e}(),t=g.map((e=>{let t=e.reduce(((e,t)=>{var n;return e+`\n    <div class="logo-cell">\n      <span class="${(n=t).className}"></span>\n      <p>${n.text}</p>\n    </div>\n  `}),"");return t=`<div class="logos-wrapper">${t}</div>`,new v(t)})),n=new f(e,t),{btnNext:r,btnPrev:a}=n.navigation;!function(e){const t=e.rootElem;t.addEventListener("slide-changed",(e=>{const{hiddenSlide:n,activeSlide:r}=e.detail,a=[...r.querySelectorAll(".logo-cell")];d.isMobile?console.log("mobile behavior"):(a.forEach((e=>e.style.opacity=0)),xe(a),[...t.querySelectorAll(".carousel__slide:not(.active) .logo-cell")].forEach((e=>e.style="")))}))}(n),n.navigation.prev(),n.navigation.next(),ye(r,a),a.insertAdjacentHTML("afterEnd",'<h3 class="logos-title">Нам доверяют:</h3>'),n.customizer.setClasses({customClasses:{navClass:"logos-nav",btnNextClass:"logos-nav-btn",btnPrevClass:"logos-nav-btn"}}),we.init(e),we.subscribeToNav({nextButton:r,prevButton:a})}}));class Ee{constructor({interval:e=1e3}={}){this.container=null,this.slides=null,this.timerId=null,this.interval=e,this.currentSlide=null,this.state="paused"}initSlider(e){if(e instanceof HTMLElement)return this.container=e,this.slides=[...this.container.children]||[],this.currentSlide=e.querySelector(".active")||this.slides[0],this.currentSlide.classList.add("active"),this}get canRun(){return this?.slides.length>0&&"playing"!==this.state}run(){this.canRun&&(this.state="playing",this.timerId=setInterval((()=>{this.next()}),this.interval))}next(){if(!this.canRun)return;this.currentSlide.classList.remove("active");let e=this.currentSlide.nextElementSibling||this.slides[0];e.classList.add("active"),this.currentSlide=e}stop(){this.timerId&&(clearInterval(this.timerId),this.state="stopped")}pause(){clearInterval(this.timerId),this.state="paused"}}const Ce=[...document.querySelectorAll(".js-product-slider")],De=[...document.querySelectorAll(".js-product-btn")],Me=Ce.map((e=>(new Ee).initSlider(e)));for(const e of De)e.onclick=()=>{const t=ke(e.parentElement);t&&t.next()};function ke(e){const t=e.querySelector(".js-product-slider");return Me.find((e=>e.container===t))}function Se(e){return[...e.childNodes].reduce(((e,t)=>{if(function(e){return e.nodeType===Node.TEXT_NODE}(t))return e.push(t),e;if(function(e){return e.nodeType===Node.ELEMENT_NODE}(t)){const n=Se(t);return e.push(...n),e}return e}),[])}function Ie(e,{tagName:t="i",className:n="text-elem"}={}){const r=new DocumentFragment;return[...e].forEach((e=>{const a=document.createElement(t);a.className=n,e.trim()?(a.textContent=e,r.append(a)):r.append(e)})),r}function Le(e){const t=document.querySelector(e);if(!t)return;let n=Se(t);var r;(function(e,{tagName:t,className:n}){e.forEach((e=>{const r=e.parentElement,a=function(e,{tagName:t="i",className:n="word"}={}){const r=Ie(e.split(" "),{tagName:t,className:n});return[...r.children].forEach((e=>{e.insertAdjacentText("afterend"," ")})),r}(e.nodeValue,{tagName:t,className:n});r.replaceChild(a,e)}))})(n,{tagName:"i",className:"word"}),n=Se(t),function(e,{tagName:t,className:n}){e.forEach((e=>{const r=e.parentElement,a=Ie(e.nodeValue,{tagName:t,className:n});r.replaceChild(a,e)}))}(n,{tagName:"i",className:"char"}),r=`${e} .word`,[...document.querySelectorAll(r)].forEach((e=>{const t=e.cloneNode(!0);t.className="animated-word",e.append(t)})),function(e){be({targets:`${e} .animated-word .char`,color:[{value:"rgba(0, 0, 0, 1.7)",duration:300}],duration:500,delay:be.stagger(be.random(50,50),{start:0}),endDelay:1e3,autoplay:!1}).play()}(e)}var Be;document.body.addEventListener("tab-toggle",(e=>{ke(document.querySelector(".tab.active"))})),Le(".product-grid h2"),document.body.addEventListener("tab-toggle",(e=>{const t=".tab.active .product-grid h2",n=document.querySelector(t);n&&(n.querySelector(`${t} .animated-word`)||Le(".tab.active .product-grid h2"))})),n(21),Be=()=>{Le(".product-grid.hand-tool:nth-of-type(2) h2")},setTimeout((()=>{Be()}),500),function(e){if(!(e instanceof HTMLElement))return;const t=(new Date).getFullYear();e.textContent=t}(document.querySelector(".js-year"))})()})();