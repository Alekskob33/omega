(()=>{var e={635:()=>{[...document.querySelectorAll("object")].forEach((e=>{e.onload=()=>{const t=e.contentDocument.documentElement,n=document.createElementNS("http://www.w3.org/2000/svg","style"),r=document.createTextNode(e.dataset.style);t.append(n),n.append(r)}}))},21:()=>{!function(e){if(!(e instanceof HTMLElement))return;const t=(new Date).getFullYear()-1998;e.textContent=t}(document.querySelector(".js-age"))}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";const e=document.querySelector(".navigation");document.querySelector(".btn-menu").onclick=function(t){if(!e)return;const n=t.currentTarget;e.classList.toggle("visible"),n.classList.toggle("menu-visible")};const t={phone:'\n    <div class="popup-content">\n      <ul class="schedule">\n        <li>пн-пт: 10-17</li>\n        <li>сб-вс: выходной</li>\n      </ul>\n      \n      <span class="office-phone-label">Офис</span>\n      <span class="phone-number">+7(4922) 33-29-29</span>\n      <a\n        class="btn-call btn-call--office"\n        target="_blank"\n        href="tel:+4922332929"\n        >Позвонить</a\n      >\n    </div>\n    ',viber:'\n    <div class="popup-content">\n      <ul class="schedule">\n        <li>пн-пт: 10-17</li>\n        <li>сб-вс: выходной</li>\n      </ul>\n    \n      <span class="viber-label">Viber</span>\n      <span class="phone-number">+7(910) 777-66-33</span>\n      <a\n        class="btn-call btn-call--viber"\n        target="_blank"\n        href="viber://chat/?number=%2B9107776633"\n        >Позвонить</a\n      >\n    </div>',whatsapp:'\n    <div class="popup-content">\n      <ul class="schedule">\n        <li>пн-пт: 10-17</li>\n        <li>сб-вс: выходной</li>\n      </ul>\n      \n      <span class="whatsapp-label">WhatsApp</span>\n      <span class="phone-number">+7(910) 777-66-33</span>\n      <a\n        class="btn-call btn-call--whatsapp"\n        target="_blank"\n        href="https://wa.me/+9107776633"\n        >Чат</a\n      >\n    </div>\n  ',email:'\n    <div class="popup-content popup-content--email">\n      <span class="email-label">Почта</span>\n      <span class="email-address">omega33@mail.ru</span>\n      <a\n        class="btn-call btn-call--email"\n        target="_blank"\n        href="mailto:omega33@mail.ru"\n        >Написать</a\n      >\n    </div>\n  ',location:'\n    <div class="popup-content">\n      <span class="location-label">Omega</span>\n      <span class="email-address">"печати и штампы"</span>\n      <ul class="schedule">\n        <li>пн-пт: 10-17</li>\n        <li>сб-вс: выходной</li>\n      </ul>\n      <p>ул. Мира, 25 | этаж 2-ой</p>\n\n      <a\n        class="btn-call btn-call--location"\n        target="_blank"\n        rel="nofollow"\n        href="http://maps.yandex.ru/?text=%D0%BE%D0%BC%D0%B5%D0%B3%D0%B0%20%D0%B8%D0%B7%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B5%D0%B9%20%D0%B8%20%D1%88%D1%82%D0%B0%D0%BC%D0%BF%D0%BE%D0%B2&sll=40.341308999999995%2C56.1197099999933&sspn=0.542450%2C0.163980&z=18&results=20&ol=biz&oid=1178450569&ll=40.401586%2C56.139577&spn=0.008476%2C0.002561&l=map"\n        >Открыть на карте</a\n      >\n    </div>\n  '},r=document.querySelector(".footer-mobile");function a(e){e.classList.remove("active")}(()=>{if(!r)return;const e=function(e){const t=document.createElement("div");return t.className="popup",t}();r.addEventListener("click",(n=>{const i=n.target.closest("button");if(!i)return n.stopPropagation();var s;s=i,[...r.querySelectorAll("button")].forEach(a),s.classList.add("active");const o=t[i.dataset.content];!function(e,t){document.body.append(e),document.body.classList.add("has-overlay"),e.classList.add("open"),e.innerHTML=t}(e,o),n.stopPropagation()})),document.body.addEventListener("click",(({target:t})=>{const n=document.querySelector(".popup.open");if(!t.closest(".popup")&&n){!function(e){e.remove(),document.body.classList.remove("has-overlay")}(e);const t=document.querySelector(".footer-btn-icon.active");t&&a(t)}}))})(),n(635);const i=window.matchMedia("(max-width: 1024px)"),s=window.matchMedia("(max-width: 860px)"),o={isMobile:i.matches,isPhone:s.matches};i.onchange=e=>{o.isMobile=e.matches},s.onchange=e=>{o.isPhone=e.matches};const l=o;function c(e,t){return new CustomEvent(e,{detail:t,bubbles:!0})}[...document.querySelectorAll("[data-target-tab]")].forEach((e=>{e.onclick=()=>{!function(e){const t=e.closest("nav").children,n=e.dataset.targetTab,r=document.querySelector(`[data-tab="${n}"]`);if(!r)return;[...r.closest(".main").querySelectorAll("[data-tab]"),...t].forEach((e=>e.classList.remove("active"))),r.classList.add("active"),e.classList.add("active");const a=new CustomEvent("tab-toggle",{detail:{targetTab:r},bubbles:!0});r.dispatchEvent(a)}(e),l.isPhone?window.scrollTo({top:65,behavior:"smooth"}):l.isMobile?window.scrollTo({top:172,behavior:"smooth"}):window.scrollTo({top:205,behavior:"smooth"})}}));class u{constructor(e){this.navElem=document.createElement("nav"),this.slides=e,this.activeIndex=0,this.#e(),this.btnNext.onclick=this.next.bind(this),this.btnPrev.onclick=this.prev.bind(this)}#e(){return this.navElem.className="carousel__nav",this.btnNext=document.createElement("button"),this.btnPrev=document.createElement("button"),this.btnNext.className="carousel__nav-btn next",this.btnPrev.className="carousel__nav-btn prev",this.btnNext.textContent="next",this.btnPrev.textContent="prev",this.navElem.append(this.btnPrev),this.navElem.append(this.btnNext),this.navElem}next(){const e=this.slides[this.activeIndex];e.hide(),this.activeIndex=function(e,t){return(e+1)%t.length}(this.activeIndex,this.slides);const t=this.slides[this.activeIndex];t.display();const n=c("slide-changed",{hiddenSlide:e.slideElem,activeSlide:t.slideElem});t.slideElem.dispatchEvent(n)}prev(){const e=this.slides[this.activeIndex];e.hide(),this.activeIndex=function(e,t){return(e-1+t.length)%t.length}(this.activeIndex,this.slides);const t=this.slides[this.activeIndex];t.display();const n=c("slide-changed",{hiddenSlide:e.slideElem,activeSlide:t.slideElem});t.slideElem.dispatchEvent(n)}}class d{constructor(e){this.navigation=e}setClasses({customClasses:e}){this.tuneNav(e)}tuneNav(e){const{navElem:t,btnNext:n,btnPrev:r}=this.navigation,{navClass:a,btnNextClass:i,btnPrevClass:s}=e;t.classList.add(a||""),n.classList.add(i||""),r.classList.add(s||"")}}class h{constructor(e){this.slideElem=this.createSlide(e)}createSlide(e){const t=document.createElement("div");return t.className="carousel__slide",t.innerHTML=e,t}display(){this.slideElem.classList.add("active")}hide(){this.slideElem.classList.remove("active")}}var m={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},f={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},p=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],v={CSS:{},springs:{}};function g(e,t,n){return Math.min(Math.max(e,t),n)}function b(e,t){return e.indexOf(t)>-1}function x(e,t){return e.apply(null,t)}var y={arr:function(e){return Array.isArray(e)},obj:function(e){return b(Object.prototype.toString.call(e),"Object")},pth:function(e){return y.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||y.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return y.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return y.hex(e)||y.rgb(e)||y.hsl(e)},key:function(e){return!m.hasOwnProperty(e)&&!f.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function N(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function E(e,t){var n=N(e),r=g(y.und(n[0])?1:n[0],.1,100),a=g(y.und(n[1])?100:n[1],.1,100),i=g(y.und(n[2])?10:n[2],.1,100),s=g(y.und(n[3])?0:n[3],.1,100),o=Math.sqrt(a/r),l=i/(2*Math.sqrt(a*r)),c=l<1?o*Math.sqrt(1-l*l):0,u=l<1?(l*o-s)/c:-s+o;function d(e){var n=t?t*e/1e3:e;return n=l<1?Math.exp(-n*l*o)*(1*Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*o),0===e||1===e?e:1-n}return t?d:function(){var t=v.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===d(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return v.springs[e]=i,i}}function w(e){return void 0===e&&(e=10),function(t){return Math.ceil(g(t,1e-6,1)*e)*(1/e)}}var C,D,M=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,s){if(0<=t&&t<=1&&0<=r&&r<=1){var o=new Float32Array(11);if(t!==n||r!==s)for(var l=0;l<11;++l)o[l]=a(l*e,t,r);return function(l){return t===n&&r===s||0===l||1===l?l:a(function(n){for(var s=0,l=1;10!==l&&o[l]<=n;++l)s+=e;--l;var c=s+(n-o[l])/(o[l+1]-o[l])*e,u=i(c,t,r);return u>=.001?function(e,t,n,r){for(var s=0;s<4;++s){var o=i(t,n,r);if(0===o)return t;t-=(a(t,n,r)-e)/o}return t}(n,c,t,r):0===u?c:function(e,t,n,r,i){var s,o,l=0;do{(s=a(o=t+(n-t)/2,r,i)-e)>0?n=o:t=o}while(Math.abs(s)>1e-7&&++l<10);return o}(n,s,s+e,t,r)}(l),n,s)}}}}(),S=(C={linear:function(){return function(e){return e}}},D={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Expo:function(){return function(e){return e?Math.pow(2,10*e-10):0}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=g(e,1,10),r=g(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(e,t){D[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(D).forEach((function(e){var t=D[e];C["easeIn"+e]=t,C["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},C["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},C["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),C);function k(e,t){if(y.fnc(e))return e;var n=e.split("(")[0],r=S[n],a=N(e);switch(n){case"spring":return E(e,t);case"cubicBezier":return x(M,a);case"steps":return x(w,a);default:return x(r,a)}}function I(e){try{return document.querySelectorAll(e)}catch(e){return}}function B(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var s=e[i];t.call(r,s,i,e)&&a.push(s)}return a}function L(e){return e.reduce((function(e,t){return e.concat(y.arr(t)?L(t):t)}),[])}function T(e){return y.arr(e)?e:(y.str(e)&&(e=I(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function P(e,t){return e.some((function(e){return e===t}))}function q(e){var t={};for(var n in e)t[n]=e[n];return t}function A(e,t){var n=q(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function O(e,t){var n=q(e);for(var r in t)n[r]=y.und(e[r])?t[r]:e[r];return n}function j(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function z(e,t){return y.fnc(e)?e(t.target,t.id,t.total):e}function F(e,t){return e.getAttribute(t)}function _(e,t,n){if(P([n,"deg","rad","turn"],j(t)))return t;var r=v.CSS[t+n];if(!y.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var s=100/a.offsetWidth;i.removeChild(a);var o=s*parseFloat(t);return v.CSS[t+n]=o,o}function H(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?_(e,a,n):a}}function $(e,t){return y.dom(e)&&!y.inp(e)&&(!y.nil(F(e,t))||y.svg(e)&&e[t])?"attribute":y.dom(e)&&P(p,t)?"transform":y.dom(e)&&"transform"!==t&&H(e,t)?"css":null!=e[t]?"object":void 0}function W(e){if(y.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function V(e,t,n,r){switch($(e,t)){case"transform":return function(e,t,n,r){var a=b(t,"scale")?1:0+function(e){return b(e,"translate")||"perspective"===e?"px":b(e,"rotate")||b(e,"skew")?"deg":void 0}(t),i=W(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?_(e,i,r):i}(e,t,r,n);case"css":return H(e,t,n);case"attribute":return F(e,t);default:return e[t]||0}}function X(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=j(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function R(e,t){if(y.col(e))return function(e){return y.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:y.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):y.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,s=parseInt(a[2],10)/100,o=parseInt(a[3],10)/100,l=a[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==s)t=n=r=o;else{var u=o<.5?o*(1+s):o+s-o*s,d=2*o-u;t=c(d,u,i+1/3),n=c(d,u,i),r=c(d,u,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0;var t,n}(e);if(/\s/g.test(e))return e;var n=j(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function Y(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Z(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=Y(t,i)),t=i}return r}function G(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*F(e,"r")}(e);case"rect":return function(e){return 2*F(e,"width")+2*F(e,"height")}(e);case"line":return function(e){return Y({x:F(e,"x1"),y:F(e,"y1")},{x:F(e,"x2"),y:F(e,"y2")})}(e);case"polyline":return Z(e);case"polygon":return function(e){var t=e.points;return Z(e)+Y(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function Q(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;y.svg(t)&&y.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=F(r,"viewBox"),s=a.width,o=a.height,l=n.viewBox||(i?i.split(" "):[0,0,s,o]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:s,h:o,vW:l[2],vH:l[3]}}function J(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=Q(e.el,e.svg),i=r(),s=r(-1),o=r(1),l=n?1:a.w/a.vW,c=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*l;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(o.y-s.y,o.x-s.x)/Math.PI}}function K(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=R(y.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:y.str(e)||t?r.split(n):[]}}function U(e){return B(e?L(y.arr(e)?e.map(T):T(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function ee(e){var t=U(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:W(e)}}}))}function te(e,t){var n=q(t);if(/^spring/.test(n.easing)&&(n.duration=E(n.easing)),y.arr(e)){var r=e.length;2!==r||y.obj(e[0])?y.fnc(t.duration)||(n.duration=t.duration/r):e={value:e}}var a=y.arr(e)?e:[e];return a.map((function(e,n){var r=y.obj(e)&&!y.pth(e)?e:{value:e};return y.und(r.delay)&&(r.delay=n?0:t.delay),y.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return O(e,n)}))}var ne={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function re(e,t){ee(e).forEach((function(e){for(var n in t){var r=z(t[n],e),a=e.target,i=j(r),s=V(a,n,i,e),o=X(R(r,i||j(s)),s),l=$(a,n);ne[l](a,n,o,e.transforms,!0)}}))}function ae(e,t){return B(L(e.map((function(e){return t.map((function(t){return function(e,t){var n=$(e.target,t.name);if(n){var r=function(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=z(e[r],t);y.arr(a)&&1===(a=a.map((function(e){return z(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,s=y.arr(i)?i[1]:i,o=j(s),l=V(t.target,e.name,o,t),c=n?n.to.original:l,u=y.arr(i)?i[0]:c,d=j(u)||j(l),h=o||d;return y.und(s)&&(s=c),a.from=K(u,h),a.to=K(X(s,u),h),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=k(a.easing,a.duration),a.isPath=y.pth(i),a.isPathTargetInsideSVG=a.isPath&&y.svg(t.target),a.isColor=y.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!y.und(e)}))}function ie(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var se=0,oe=[],le=function(){var e;function t(n){for(var r=oe.length,a=0;a<r;){var i=oe[a];i.paused?(oe.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ue.suspendWhenDocumentHidden&&(ce()?e=cancelAnimationFrame(e):(oe.forEach((function(e){return e._onDocumentVisibility()})),le()))})),function(){e||ce()&&ue.suspendWhenDocumentHidden||!(oe.length>0)||(e=requestAnimationFrame(t))}}();function ce(){return!!document&&document.hidden}function ue(e){void 0===e&&(e={});var t,n=0,r=0,a=0,i=0,s=null;function o(e){var t=window.Promise&&new Promise((function(e){return s=e}));return e.finished=t,t}var l=function(e){var t=A(m,e),n=A(f,e),r=function(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=O(function(e){for(var t=B(L(e.map((function(e){return Object.keys(e)}))),(function(e){return y.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)y.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)y.key(a)&&n.push({name:a,tweens:te(t[a],e)});return n}(n,e),a=ee(e.targets),i=ae(a,r),s=ie(i,n),o=se;return se++,O(t,{id:o,children:[],animatables:a,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(e);function c(){var e=l.direction;"alternate"!==e&&(l.direction="normal"!==e?"normal":"reverse"),l.reversed=!l.reversed,t.forEach((function(e){return e.reversed=l.reversed}))}function u(e){return l.reversed?l.duration-e:e}function d(){n=0,r=u(l.currentTime)*(1/ue.speed)}function h(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){for(var t=0,n=l.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,s=a.tweens,o=s.length-1,c=s[o];o&&(c=B(s,(function(t){return e<t.end}))[0]||c);for(var u=g(e-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(u)?1:c.easing(u),h=c.to.strings,m=c.round,f=[],p=c.to.numbers.length,v=void 0,b=0;b<p;b++){var x=void 0,y=c.to.numbers[b],N=c.from.numbers[b]||0;x=c.isPath?J(c.value,d*y,c.isPathTargetInsideSVG):N+d*(y-N),m&&(c.isColor&&b>2||(x=Math.round(x*m)/m)),f.push(x)}var E=h.length;if(E){v=h[0];for(var w=0;w<E;w++){h[w];var C=h[w+1],D=f[w];isNaN(D)||(v+=C?D+C:D+" ")}}else v=f[0];ne[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,t++}}function v(e){l[e]&&!l.passThrough&&l[e](l)}function b(e){var d=l.duration,m=l.delay,f=d-l.endDelay,b=u(e);l.progress=g(b/d*100,0,100),l.reversePlayback=b<l.currentTime,t&&function(e){if(l.reversePlayback)for(var n=i;n--;)h(e,t[n]);else for(var r=0;r<i;r++)h(e,t[r])}(b),!l.began&&l.currentTime>0&&(l.began=!0,v("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,v("loopBegin")),b<=m&&0!==l.currentTime&&p(0),(b>=f&&l.currentTime!==d||!d)&&p(d),b>m&&b<f?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,v("changeBegin")),v("change"),p(b)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,v("changeComplete")),l.currentTime=g(b,0,d),l.began&&v("update"),e>=d&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=a,v("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,v("loopComplete"),v("complete"),!l.passThrough&&"Promise"in window&&(s(),o(l)))))}return o(l),l.reset=function(){var e=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===e,l.remaining=l.loop,t=l.children;for(var n=i=t.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===e&&1===l.loop)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=d,l.set=function(e,t){return re(e,t),l},l.tick=function(e){a=e,n||(n=a),b((a+(r-n))*ue.speed)},l.seek=function(e){b(u(e))},l.pause=function(){l.paused=!0,d()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,oe.push(l),d(),le())},l.reverse=function(){c(),l.completed=!l.reversed,d()},l.restart=function(){l.reset(),l.play()},l.remove=function(e){he(U(e),l)},l.reset(),l.autoplay&&l.play(),l}function de(e,t){for(var n=t.length;n--;)P(e,t[n].animatable.target)&&t.splice(n,1)}function he(e,t){var n=t.animations,r=t.children;de(e,n);for(var a=r.length;a--;){var i=r[a],s=i.animations;de(e,s),s.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ue.version="3.2.1",ue.speed=1,ue.suspendWhenDocumentHidden=!0,ue.running=oe,ue.remove=function(e){for(var t=U(e),n=oe.length;n--;)he(t,oe[n])},ue.get=V,ue.set=re,ue.convertPx=_,ue.path=function(e,t){var n=y.str(e)?I(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:Q(n),totalLength:G(n)*(r/100)}}},ue.setDashoffset=function(e){var t=G(e);return e.setAttribute("stroke-dasharray",t),t},ue.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?k(t.easing):null,a=t.grid,i=t.axis,s=t.from||0,o="first"===s,l="center"===s,c="last"===s,u=y.arr(e),d=u?parseFloat(e[0]):parseFloat(e),h=u?parseFloat(e[1]):0,m=j(u?e[1]:e)||0,f=t.start||0+(u?d:0),p=[],v=0;return function(e,t,g){if(o&&(s=0),l&&(s=(g-1)/2),c&&(s=g-1),!p.length){for(var b=0;b<g;b++){if(a){var x=l?(a[0]-1)/2:s%a[0],y=l?(a[1]-1)/2:Math.floor(s/a[0]),N=x-b%a[0],E=y-Math.floor(b/a[0]),w=Math.sqrt(N*N+E*E);"x"===i&&(w=-N),"y"===i&&(w=-E),p.push(w)}else p.push(Math.abs(s-b));v=Math.max.apply(Math,p)}r&&(p=p.map((function(e){return r(e/v)*v}))),"reverse"===n&&(p=p.map((function(e){return i?e<0?-1*e:-e:Math.abs(v-e)})))}return f+(u?(h-d)/v:d)*(Math.round(100*p[t])/100)+m}},ue.timeline=function(e){void 0===e&&(e={});var t=ue(e);return t.duration=0,t.add=function(n,r){var a=oe.indexOf(t),i=t.children;function s(e){e.passThrough=!0}a>-1&&oe.splice(a,1);for(var o=0;o<i.length;o++)s(i[o]);var l=O(n,A(f,e));l.targets=l.targets||e.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=y.und(r)?c:X(r,c),s(t),t.seek(l.timelineOffset);var u=ue(l);s(u),i.push(u);var d=ie(i,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ue.easing=k,ue.penner=S,ue.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const me=ue;function fe(e){if(e.length<1)return console.log("no elements to animate");me({targets:e,keyframes:[{scaleX:0,opacity:0,duration:0},{scaleX:1,opacity:1}],delay:me.stagger(50),duration:500,easing:"easeOutCirc",complete:()=>{}})}function pe(e){const t=document.querySelector(e);if(!t)return console.log(`no element ${e}`);t.scrollIntoView({block:"start",behavior:"smooth"})}const ve={rootContainer:null,mobileContainer:null,elements:[],currentCells:[],currentIndex:null,lastDirection:"next",error:"",get containerWidth(){return this.mobileContainer.offsetWidth},subscribeToNav({nextButton:e,prevButton:t}){e.addEventListener("click",this.next.bind(this)),t.addEventListener("click",this.prev.bind(this))},next(){if(this.error)return console.error(this.error);const e=this.grabCollectionTo("next");this.lastDirection="next",this.changeSlide(e)},prev(){if(this.error)return console.error(this.error);const e=this.grabCollectionTo("prev");this.lastDirection="prev",this.changeSlide(e)},toggleContainerClass(){"prev"!==this.lastDirection?this.mobileContainer.classList.remove("reverse"):this.mobileContainer.classList.add("reverse")},changeSlide(e){this.clearContainer(),this.toggleContainerClass(),this.renderCells(e),this.animate()},grabCollectionTo(e){"prev"===this.lastDirection&&"next"===e&&(this.currentIndex=this.currentIndex+this.currentCells.length),"next"===this.lastDirection&&"prev"===e&&(this.currentIndex=this.currentIndex-this.currentCells.length+1);let t,n=0;this.currentCells=[];let r=0;for(;n<=this.containerWidth;){if(++r>50){console.error("Error: prevent infinite loop. Too many iterations");break}t="next"===e?this.nextIndex:this.prevIndex;const a=this.elements[t];if(n+=a.offsetWidth+5,n>=this.containerWidth)break;this.currentIndex=t,this.currentCells.push(a)}return this.currentCells},get nextIndex(){return null===this.currentIndex?0:(this.currentIndex+1)%this.elements.length},get prevIndex(){return null===this.currentIndex?0:(this.currentIndex-1+this.elements.length)%this.elements.length},animate(){fe(this.mobileContainer.children)},init(e){if(!e)return this.error="Fail initialization";this.rootContainer=e,this.elements=[...e.querySelectorAll(".logo-cell")],this.renderWrapper(),this.next()},renderCells(e){if(e.length<1)return this.error="Empty collection";let t;e.forEach((e=>{t=e.cloneNode(!0),t.style="",this.mobileContainer.insertAdjacentHTML("beforeEnd",t.outerHTML)}))},clearContainer(){this.mobileContainer.innerHTML=""},renderWrapper(){this.mobileContainer=document.createElement("div"),this.mobileContainer.className="mobile-slides-container active",this.rootContainer.append(this.mobileContainer)}},ge=function(){const e=document.createElement("aside");return e.className="logos-carousel",document.body.append(e),e}(),be=[[{className:"i-mts",text:"МТС"},{className:"i-bridzhtaun-fuds",text:"Брижтаун Фудс"},{className:"i-rzhd",text:"РЖД"},{className:"i-abi",text:"АБИ"},{className:"i-rks",text:"РКС"},{className:"i-gazprom",text:"Газпром"},{className:"i-tele2",text:"Теле2"},{className:"i-beeline",text:"Билайн"},{className:"i-avtotract",text:"Автотракт"},{className:"i-Megaphone",text:"Мегафон"},{className:"i-worldclass",text:"Вордкласс"},{className:"i-danon",text:"Danone ЮНИМИЛК"}],[{className:"i-vhz",text:"ВХЗ"},{className:"i-gusar",text:"Гусар"},{className:"i-tochmash",text:"Точмаш"},{className:"i-jelektropribor",text:"Электроприбор"},{className:"i-avtopribor",text:"Автоприбор\t"}],[{className:"i-bank-moskvy",text:"Банк Москвы"},{className:"i-vtb24",text:"Банк ВТБ24"},{className:"i-rost",text:"Банк РОСТ"},{className:"i-bank-trast",text:"Банк ТРАСТ"},{className:"i-rosselhozbank",text:"РОССЕЛЬХОЗБАНК"},{className:"i-mosoblbank",text:"МОСОБЛБАНК"},{className:"i-vtb",text:"Банк ВТБ"},{className:"i-binbank",text:"БИНБАНК"},{className:"i-sberbank",text:"Сбербанк России\t"},{className:"i-bank-rossii",text:"Банк России\t"},{className:"i-uralsib",text:"Банк УРАЛСИБ\t"},{className:"i-promsvyazbank",text:"ПромсвязьБанк"}],[{className:"i-vladimir",text:"г.Владимир"},{className:"i-avo",text:"АВО"},{className:"i-gibdd",text:"ГИБДД"},{className:"i-mvd",text:"МВД"},{className:"i-pfr",text:"ПФР"},{className:"i-ufsin",text:"УФСИН"},{className:"i-fns",text:"ФНС"},{className:"i-fso",text:"ФСО"},{className:"i-mchs",text:"МЧС"},{className:"i-sluzhba-zanjatosti",text:"ЦЗН"},{className:"i-pochta-rossii",text:"Почта России"},{className:"i-tamozhnja",text:"Таможня"},{className:"i-Rospotrebnadzor",text:"Роспотребнадзор"},{className:"i-Rosselhoznadzor",text:"Россельхознадзор"},{className:"i-rostehnadzor",text:"Ростехнадзор"}],[{className:"i-energogarant",text:"Энергогарант"},{className:"i-soglasie",text:"Согласие"},{className:"i-cjurih",text:"Цюрих"},{className:"i-sogaz",text:"СОГАЗ"},{className:"i-kapital",text:"Капитал"},{className:"i-reso",text:"РЕСО"},{className:"i-vsk",text:"ВСК"}]].map((e=>{let t=e.reduce(((e,t)=>{var n;return e+`\n    <div class="logo-cell">\n      <span class="${(n=t).className}"></span>\n      <p>${n.text}</p>\n    </div>\n  `}),"");return t=`<div class="logos-wrapper">${t}</div>`,new h(t)})),xe=new class{constructor(e,t){e.classList.add("carousel"),this.rootElem=e,this.slides=t,this.navigation=new u(t),this.customizer=new d(this.navigation),this.render()}populate(){const e=document.createElement("div");return e.className="carousel__slides-container",this.slides.forEach((t=>e.append(t.slideElem))),this.slides[0].display(),e}render(){this.rootElem.prepend(this.navigation.navElem);const e=this.populate();this.rootElem.append(e)}}(ge,be),{btnNext:ye,btnPrev:Ne}=xe.navigation;!function(e){const t=e.rootElem;t.addEventListener("slide-changed",(e=>{const{hiddenSlide:n,activeSlide:r}=e.detail,a=[...r.querySelectorAll(".logo-cell")];l.isMobile?console.log("mobile behavior"):(a.forEach((e=>e.style.opacity=0)),fe(a),[...t.querySelectorAll(".carousel__slide:not(.active) .logo-cell")].forEach((e=>e.style="")))}))}(xe),xe.navigation.next(),function(...e){e.forEach((e=>{e.addEventListener("click",pe.bind(this,".logos-nav"))}))}(ye,Ne),Ne.insertAdjacentHTML("afterEnd",'<h3 class="logos-title">Нам доверяют:</h3>'),xe.customizer.setClasses({customClasses:{navClass:"logos-nav",btnNextClass:"logos-nav-btn",btnPrevClass:"logos-nav-btn"}}),ve.init(ge),ve.subscribeToNav({nextButton:ye,prevButton:Ne});class Ee{constructor({interval:e=1e3}={}){this.container=null,this.slides=null,this.timerId=null,this.interval=e,this.currentSlide=null,this.state="paused"}initSlider(e){if(e instanceof HTMLElement)return this.container=e,this.slides=[...this.container.children]||[],this.currentSlide=e.querySelector(".active")||this.slides[0],this.currentSlide.classList.add("active"),this}get canRun(){return this?.slides.length>0&&"playing"!==this.state}run(){this.canRun&&(this.state="playing",this.timerId=setInterval((()=>{this.next()}),this.interval))}next(){if(!this.canRun)return;this.currentSlide.classList.remove("active");let e=this.currentSlide.nextElementSibling||this.slides[0];e.classList.add("active"),this.currentSlide=e}stop(){this.timerId&&(clearInterval(this.timerId),this.state="stopped")}pause(){clearInterval(this.timerId),this.state="paused"}}const we=[...document.querySelectorAll(".js-product-slider")],Ce=[...document.querySelectorAll(".js-product-btn")],De=we.map((e=>(new Ee).initSlider(e)));for(const e of Ce)e.onclick=()=>{const t=Me(e.parentElement);t&&t.next()};function Me(e){const t=e.querySelector(".js-product-slider");return De.find((e=>e.container===t))}function Se(e){return[...e.childNodes].reduce(((e,t)=>{if(function(e){return e.nodeType===Node.TEXT_NODE}(t))return e.push(t),e;if(function(e){return e.nodeType===Node.ELEMENT_NODE}(t)){const n=Se(t);return e.push(...n),e}return e}),[])}function ke(e,{tagName:t="i",className:n="text-elem"}={}){const r=new DocumentFragment;return[...e].forEach((e=>{const a=document.createElement(t);a.className=n,e.trim()?(a.textContent=e,r.append(a)):r.append(e)})),r}function Ie(e){const t=document.querySelector(e);if(!t)return;let n=Se(t);var r;(function(e,{tagName:t,className:n}){e.forEach((e=>{const r=e.parentElement,a=function(e,{tagName:t="i",className:n="word"}={}){const r=ke(e.split(" "),{tagName:t,className:n});return[...r.children].forEach((e=>{e.insertAdjacentText("afterend"," ")})),r}(e.nodeValue,{tagName:t,className:n});r.replaceChild(a,e)}))})(n,{tagName:"i",className:"word"}),n=Se(t),function(e,{tagName:t,className:n}){e.forEach((e=>{const r=e.parentElement,a=ke(e.nodeValue,{tagName:t,className:n});r.replaceChild(a,e)}))}(n,{tagName:"i",className:"char"}),r=`${e} .word`,[...document.querySelectorAll(r)].forEach((e=>{const t=e.cloneNode(!0);t.className="animated-word",e.append(t)})),function(e){me({targets:`${e} .animated-word .char`,color:[{value:"rgba(0, 0, 0, 1.7)",duration:300}],duration:500,delay:me.stagger(me.random(50,50),{start:0}),endDelay:1e3,autoplay:!1}).play()}(e)}var Be;document.body.addEventListener("tab-toggle",(e=>{Me(document.querySelector(".tab.active"))})),Ie(".product-grid h2"),document.body.addEventListener("tab-toggle",(e=>{const t=".tab.active .product-grid h2",n=document.querySelector(t);n&&(n.querySelector(`${t} .animated-word`)||Ie(".tab.active .product-grid h2"))})),n(21),Be=()=>{Ie(".product-grid.hand-tool:nth-of-type(2) h2")},setTimeout((()=>{Be()}),500),function(e){if(!e instanceof HTMLElement)return;const t=(new Date).getFullYear();e.textContent=t}(document.querySelector(".js-year"))})()})();