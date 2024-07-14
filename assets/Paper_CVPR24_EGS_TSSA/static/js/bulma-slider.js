!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bulmaSlider=t():e.bulmaSlider=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"isString",function(){return f});var u=n(1),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(e){return"string"==typeof e||!!e&&"object"===(void 0===e?"undefined":s(e))&&"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};r(this,e);var o=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(o.element="string"==typeof t?document.querySelector(t):t,!o.element)throw new Error("An invalid selector or non-DOM node has been provided.");return o._clickEvents=["click"],o.options=l({},n),o.onSliderInput=o.onSliderInput.bind(o),o.init(),o}return o(e,u["a"]),a(e,[{key:"init",value:function(){if(this._id="bulmaSlider"+(new Date).getTime()+Math.floor(Math.random()*Math.floor(9999)),this.output=this._findOutputForSlider(),this._bindEvents(),this.output&&this.element.classList.contains("has-output-tooltip")){var e=this._getSliderOutputPosition();this.output.style.left=e.position}this.emit("bulmaslider:ready",this.element.value)}},{key:"_findOutputForSlider",value:function(){var e=this,t=null,n=document.getElementsByTagName("output")||[];return Array.from(n).forEach(function(n){if(n.htmlFor==e.element.getAttribute("id"))return t=n,!0}),t}},{key:"_getSliderOutputPosition",value:function(){var e,t=window.getComputedStyle(this.element,null),n=parseInt(t.getPropertyValue("width"),10);e=this.element.getAttribute("min")?this.element.getAttribute("min"):0;var r=(this.element.value-e)/(this.element.getAttribute("max")-e);return{position:(r<0?0:r>1?n:n*r)+"px"}}},{key:"_bindEvents",value:function(){this.output&&this.element.addEventListener("input",this.onSliderInput,!1)}},{key:"onSliderInput",value:function(e){if(e.preventDefault(),this.element.classList.contains("has-output-tooltip")){var t=this._getSliderOutputPosition();this.output.style.left=t.position}var n=this.output.hasAttribute("data-prefix")?this.output.getAttribute("data-prefix"):"",r=this.output.hasAttribute("data-postfix")?this.output.getAttribute("data-postfix"):"";this.output.value=n+this.element.value+r,this.emit("bulmaslider:ready",this.element.value)}}],[{key:"attach",value:function(){var t=this,n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'input[type="range"].slider',r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},i=new Array;return(f(n)?document.querySelectorAll(n):Array.isArray(n)?n:[n]).forEach(function(n){if("undefined"==typeof n[t.constructor.name]){var o=new e(n,r);n[t.constructor.name]=o,i.push(o)}else i.push(n[t.constructor.name])}),i}}]),e}();t["default"]=c},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];n(this,e),this._listeners=new Map(t),this._middlewares=new Map}return r(e,[{key:"listenerCount",value:function(e){return this._listeners.has(e)?this._listeners.get(e).length:0}},{key:"removeListeners",value:function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null,n=arguments.length>1&&arguments[1]!==undefined&&arguments[1];null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeListeners(t,n)}):(this._listeners["delete"](t),n&&this.removeMiddleware(t)):this._listeners=new Map}},{key:"middleware",value:function(e,t){var n=this;Array.isArray(e)?name.forEach(function(e){return n.middleware(e,t)}):(Array.isArray(this._middlewares.get(e))||this._middlewares.set(e,[]),this._middlewares.get(e).push(t))}},{key:"removeMiddleware",value:function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;null!==t?Array.isArray(t)?name.forEach(function(t){return e.removeMiddleware(t)}):this._middlewares["delete"](t):this._middlewares=new Map}},{key:"on",value:function(e,t){var n=this,r=arguments.length>2&&arguments[2]!==undefined&&arguments[2];if(Array.isArray(e))e.forEach(function(e){return n.on(e,t)});else{var i=(e=e.toString()).split(/,|, | /);i.length>1?i.forEach(function(e){return n.on(e,t)}):(Array.isArray(this._listeners.get(e))||this._listeners.set(e,[]),this._listeners.get(e).push({once:r,callback:t}))}}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(e,t){var n=this,r=arguments.length>2&&arguments[2]!==undefined&&arguments[2];e=e.toString();var i=this._listeners.get(e),o=null,u=0,l=r;if(Array.isArray(i))for(i.forEach(function(a,s){r||(o=n._middlewares.get(e),Array.isArray(o)?(o.forEach(function(n){n(t,function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;null!==e&&(t=e),u++},e)}),u>=o.length&&(l=!0)):l=!0),l&&(a.once&&(i[s]=null),a.callback(t))});-1!==i.indexOf(null);)i.splice(i.indexOf(null),1)}}]),e}();t.a=i}])["default"]});