"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2461],{62461:function(t,e,a){a.d(e,{Z:function(){return f}});var o=a(72791);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},n.apply(this,arguments)}var r=function(t,e){return t.querySelector(e)},i=function(t,e){return t.querySelectorAll(e)},s=function(t){void 0===t&&(t={});var e={};return Object.keys(t).forEach((function(a){"undefined"!==typeof t[a]&&(e[a]=t[a])})),e};function c(t){void 0===t&&(t={});var e,a,o,c,u,l,p,f,d,h,v,m=t,y=m.el,g=m.eventsEl,w={__atropos__:!0,params:n({alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0,onEnter:null,onLeave:null,onRotate:null},s(t||{})),destroyed:!1,isActive:!1},M=w.params,O=[];!function t(){v=requestAnimationFrame((function(){O.forEach((function(t){if("function"===typeof t)t();else{var e=t.element,a=t.prop,o=t.value;e.style[a]=o}})),O.splice(0,O.length),t()}))}();var x=function(t,e){O.push({element:t,prop:"transitionDuration",value:e})},E=function(t,e){O.push({element:t,prop:"transitionTimingFunction",value:e})},b=function(t,e){O.push({element:t,prop:"transform",value:e})},X=function(t,e){O.push({element:t,prop:"opacity",value:e})},Y=function(t,e,a,o){return t.addEventListener(e,a,o)},L=function(t,e,a,o){return t.removeEventListener(e,a,o)},C=function(t){var e=t.rotateXPercentage,a=void 0===e?0:e,o=t.rotateYPercentage,n=void 0===o?0:o,r=t.duration,s=t.opacityOnly,c=t.easeOut;i(y,"[data-atropos-offset], [data-atropos-opacity]").forEach((function(t){x(t,r),E(t,c?"ease-out":"");var e=function(t){if(t.dataset.atroposOpacity&&"string"===typeof t.dataset.atroposOpacity)return t.dataset.atroposOpacity.split(";").map((function(t){return parseFloat(t)}))}(t);if(0===a&&0===n)s||b(t,"translate3d(0, 0, 0)"),e&&X(t,e[0]);else{var o=parseFloat(t.dataset.atroposOffset)/100;if(Number.isNaN(o)||s||b(t,"translate3d("+-n*-o+"%, "+a*-o+"%, 0)"),e){var i=e[0],u=e[1],l=Math.max(Math.abs(a),Math.abs(n));X(t,i+(u-i)*l/100)}}}))},N=function(t,a){var o=y!==g;if(c||(c=y.getBoundingClientRect()),o&&!u&&(u=g.getBoundingClientRect()),"undefined"===typeof t&&"undefined"===typeof a){var n=o?u:c;t=n.left+n.width/2,a=n.top+n.height/2}var r,i=0,s=0,l=c,f=l.top,d=l.left,h=l.width,v=l.height;if(o){var m=u,w=m.top,Y=m.left,L=m.width,N=m.height,T=h/2+(d-Y),_=v/2+(f-w),A=t-Y,R=a-w;s=M.rotateYMax*(A-T)/(L-h/2)*-1,i=M.rotateXMax*(R-_)/(N-v/2),r=t-d+"px "+(a-f)+"px"}else{var j=h/2,k=v/2,I=t-d,P=a-f;s=M.rotateYMax*(I-j)/(h/2)*-1,i=M.rotateXMax*(P-k)/(v/2)}i=Math.min(Math.max(-i,-M.rotateXMax),M.rotateXMax),M.rotateXInvert&&(i=-i),s=Math.min(Math.max(-s,-M.rotateYMax),M.rotateYMax),M.rotateYInvert&&(s=-s);var D,F,S=i/M.rotateXMax*100,Z=s/M.rotateYMax*100,q=(o?Z/100*M.stretchX:0)*(M.rotateYInvert?-1:1),B=(o?S/100*M.stretchY:0)*(M.rotateXInvert?-1:1),z=o?Math.max(Math.abs(S),Math.abs(Z))/100*M.stretchZ:0;b(e,"translate3d("+q+"%, "+-B+"%, "+-z+"px) rotateX("+i+"deg) rotateY("+s+"deg)"),r&&M.commonOrigin&&(D=e,F=r,O.push({element:D,prop:"transformOrigin",value:F})),p&&(x(p,M.duration+"ms"),E(p,"ease-out"),b(p,"translate3d("+.25*-Z+"%, "+.25*S+"%, 0)"),X(p,Math.max(Math.abs(S),Math.abs(Z))/100)),C({rotateXPercentage:S,rotateYPercentage:Z,duration:M.duration+"ms",easeOut:!0}),"function"===typeof M.onRotate&&M.onRotate(i,s)},T=function(){O.push((function(){return y.classList.add("atropos-active")})),x(e,M.duration+"ms"),E(e,"ease-out"),b(a,"translate3d(0,0, "+M.activeOffset+"px)"),x(a,M.duration+"ms"),E(a,"ease-out"),l&&(x(l,M.duration+"ms"),E(l,"ease-out")),w.isActive=!0},_=function(t){if(f=void 0,("pointerdown"!==t.type||"mouse"!==t.pointerType)&&("pointerenter"!==t.type||"mouse"===t.pointerType)){if("pointerdown"===t.type&&t.preventDefault(),d=t.clientX,h=t.clientY,M.alwaysActive)return c=void 0,void(u=void 0);T(),"function"===typeof M.onEnter&&M.onEnter()}},A=function(t){!1===f&&t.cancelable&&t.preventDefault()},R=function(t){if(M.rotate&&w.isActive){if("mouse"!==t.pointerType){if(!M.rotateTouch)return;t.preventDefault()}var e=t.clientX,a=t.clientY,o=e-d,n=a-h;if("string"===typeof M.rotateTouch&&(0!==o||0!==n)&&"undefined"===typeof f){if(o*o+n*n>=25){var r=180*Math.atan2(Math.abs(n),Math.abs(o))/Math.PI;f="scroll-y"===M.rotateTouch?r>45:90-r>45}!1===f&&(y.classList.add("atropos-rotate-touch"),t.cancelable&&t.preventDefault())}"mouse"!==t.pointerType&&f||N(e,a)}},j=function(t){if(c=void 0,u=void 0,w.isActive&&(!t||"pointerup"!==t.type||"mouse"!==t.pointerType)&&(!t||"pointerleave"!==t.type||"mouse"===t.pointerType)){if("string"===typeof M.rotateTouch&&f&&y.classList.remove("atropos-rotate-touch"),M.alwaysActive)return N(),"function"===typeof M.onRotate&&M.onRotate(0,0),void("function"===typeof M.onLeave&&M.onLeave());O.push((function(){return y.classList.remove("atropos-active")})),x(a,M.duration+"ms"),E(a,""),b(a,"translate3d(0,0, 0px)"),l&&(x(l,M.duration+"ms"),E(l,"")),p&&(x(p,M.duration+"ms"),E(p,""),b(p,"translate3d(0, 0, 0)"),X(p,0)),x(e,M.duration+"ms"),E(e,""),b(e,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),C({duration:M.duration+"ms"}),w.isActive=!1,"function"===typeof M.onRotate&&M.onRotate(0,0),"function"===typeof M.onLeave&&M.onLeave()}},k=function(t){var e=t.target;!g.contains(e)&&e!==g&&w.isActive&&j()};return w.destroy=function(){w.destroyed=!0,cancelAnimationFrame(v),L(document,"click",k),L(g,"pointerdown",_),L(g,"pointerenter",_),L(g,"pointermove",R),L(g,"touchmove",A),L(g,"pointerleave",j),L(g,"pointerup",j),L(g,"lostpointercapture",j),delete y.__atropos__},"string"===typeof y&&(y=r(document,y)),y&&(y.__atropos__||("undefined"!==typeof g?"string"===typeof g&&(g=r(document,g)):g=y,Object.assign(w,{el:y}),e=r(y,".atropos-rotate"),a=r(y,".atropos-scale"),o=r(y,".atropos-inner"),y.__atropos__=w)),y&&g&&(M.shadow&&function(){var t;(l=r(y,".atropos-shadow"))||((l=document.createElement("span")).classList.add("atropos-shadow"),t=!0),b(l,"translate3d(0,0,-"+M.shadowOffset+"px) scale("+M.shadowScale+")"),t&&e.appendChild(l)}(),M.highlight&&function(){var t;(p=r(y,".atropos-highlight"))||((p=document.createElement("span")).classList.add("atropos-highlight"),t=!0),b(p,"translate3d(0,0,0)"),t&&o.appendChild(p)}(),M.rotateTouch&&("string"===typeof M.rotateTouch?y.classList.add("atropos-rotate-touch-"+M.rotateTouch):y.classList.add("atropos-rotate-touch")),r(y,"[data-atropos-opacity]")&&C({opacityOnly:!0}),Y(document,"click",k),Y(g,"pointerdown",_),Y(g,"pointerenter",_),Y(g,"pointermove",R),Y(g,"touchmove",A),Y(g,"pointerleave",j),Y(g,"pointerup",j),Y(g,"lostpointercapture",j),M.alwaysActive&&(T(),N())),w}var u=["component","children","rootChildren","scaleChildren","rotateChildren","className","scaleClassName","rotateClassName","innerClassName"];function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},l.apply(this,arguments)}var p=["eventsEl","alwaysActive","activeOffset","shadowOffset","shadowScale","duration","rotate","rotateTouch","rotateXMax","rotateYMax","rotateXInvert","rotateYInvert","stretchX","stretchY","stretchZ","commonOrigin","shadow","highlight","onEnter","onLeave","onRotate"];var f=function(t){var e=t.component,a=void 0===e?"div":e,n=t.children,r=t.rootChildren,i=t.scaleChildren,s=t.rotateChildren,f=t.className,d=void 0===f?"":f,h=t.scaleClassName,v=void 0===h?"":h,m=t.rotateClassName,y=void 0===m?"":m,g=t.innerClassName,w=void 0===g?"":g,M=function(t,e){if(null==t)return{};var a,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)a=r[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,u),O=(0,o.useRef)(null),x=(0,o.useRef)(null),E=a,b=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.filter((function(t){return!!t})).join(" ")},X=function(){x.current=c(l({el:O.current},function(t){var e={};return Object.keys(t).forEach((function(a){p.includes(a)&&(e[a]=t[a])})),e}(t)))};return(0,o.useEffect)((function(){return O.current&&X(),function(){x.current&&(x.current.destroy(),x.current=null)}}),[]),(0,o.useEffect)((function(){return x.current&&(x.current.params.onEnter=t.onEnter,x.current.params.onLeave=t.onLeave,x.current.params.onRotate=t.onRotate),function(){x.current&&(x.current.params.onEnter=null,x.current.params.onLeave=null,x.current.params.onRotate=null)}})),o.createElement(E,l({className:b("atropos",d)},function(t){var e={};return Object.keys(t).forEach((function(a){p.includes(a)||(e[a]=t[a])})),e}(M),{ref:O}),o.createElement("span",{className:b("atropos-scale",v)},o.createElement("span",{className:b("atropos-rotate",y)},o.createElement("span",{className:b("atropos-inner",w)},n,(t.highlight||"undefined"===typeof t.highlight)&&o.createElement("span",{className:"atropos-highlight"})),s,(t.shadow||"undefined"===typeof t.shadow)&&o.createElement("span",{className:"atropos-shadow"})),i),r)}}}]);
//# sourceMappingURL=2461.481a4183.chunk.js.map