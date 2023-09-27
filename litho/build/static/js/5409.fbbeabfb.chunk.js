"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[5409,3739],{43739:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var s=o(1413),l=o(72791),r=o(11087),a=o(43360),n=o(80184),c=function(e){var t=e.themeColor&&e.themeColor[0],o=e.themeColor&&e.themeColor[1],l=e.color&&e.color[0],c=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(l,", ").concat(c,", ").concat(l,")"):e.color};return e.href||"submit"===e.type?(0,n.jsx)(a.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,n.jsx)(i,(0,s.Z)({},e))}):(0,n.jsx)(r.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,n.jsx)(i,(0,s.Z)({},e))})},i=function(e){return(0,n.jsxs)(n.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,n.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,n.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,n.jsx)("span",{})]})};c.defaultProps={size:"lg",style:"primary"};var d=(0,l.memo)(c)},34564:function(e,t,o){var s=o(1413),l=o(72791),r=o(97948),a=o.n(r),n=o(52007),c=o(62752),i=o(12734),d=o(80184),p={Close:function(e){var t=(0,l.useContext)(i.Z),o=t.customModal,r=t.setCustomModal;return(0,d.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){r((0,s.Z)((0,s.Z)({},o),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,l.useRef)(null),r=(0,l.useRef)(null),n=(0,l.useContext)(i.Z),p=n.customModal,m=n.setCustomModal,u=function(){t.current.node.classList.remove("open"),setTimeout((function(){m((0,s.Z)((0,s.Z)({},p),{},{el:null,isOpen:!1}))}),100)},x=function(){m((0,s.Z)((0,s.Z)({},p),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,l.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&u()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,l.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(o.bind(o,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?u():x()}))}),200)}),[]),(0,c.Z)(r,u),a().setAppElement("#modal-outer"),(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:x,children:e.modalBtn}),(0,d.jsx)(a(),{className:e.animation,ref:t,isOpen:null!==p.el&&p.el===t.current.node&&!0===p.isOpen,onRequestClose:u,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,d.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,d.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:u,children:"\xd7"}),(0,d.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:r,children:e.children})]})})]})}};p.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},p.Wrapper.propTypes={className:n.PropTypes.string,closeBtnOuter:n.PropTypes.bool,defaultOpen:n.PropTypes.bool,children:n.PropTypes.oneOfType([n.PropTypes.arrayOf(n.PropTypes.node),n.PropTypes.node]).isRequired},p.Close.propTypes={className:n.PropTypes.string,children:n.PropTypes.oneOfType([n.PropTypes.arrayOf(n.PropTypes.node),n.PropTypes.node]).isRequired},t.Z=p},83728:function(e,t,o){var s=o(72791),l=o(80184),r=function(e){var t={background:"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((function(e,t){return e})),")"):e.overlay,opacity:e.opacity};return(0,l.jsxs)("section",{className:"relative overflow-hidden bg-video ".concat(e.className),children:[e.overlay&&(0,l.jsx)("div",{className:"overlay z-[1] absolute h-full w-full top-0 left-0",style:t}),e.children,(0,l.jsx)("div",{className:"absolute top-1/2 left-1/2 w-full h-full -translate-y-1/2 -translate-x-1/2 xl:w-[120%] lg:w-[130%] xs:w-[200%]",children:(0,l.jsx)("div",{className:"fit-video",children:e.src.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)||e.src.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/)?(0,l.jsx)("iframe",{title:"Video Player",src:e.src,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,l.jsxs)("video",{loop:e.loop,autoPlay:"autoplay",control:"control",muted:!0,poster:e.poster,children:[(0,l.jsx)("source",{type:"video/mp4",src:e.src}),(0,l.jsx)("source",{type:"video/webm",src:e.src})]})})})]})};r.defaultProps={className:"",loop:!1,poster:"",opacity:.5},t.Z=(0,s.memo)(r)},62752:function(e,t,o){o.d(t,{Z:function(){return l}});var s=o(72791);function l(e,t){(0,s.useEffect)((function(){var o=function(o){e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}}),[e,t])}},15409:function(e,t,o){o.r(t);var s=o(1413),l=(o(72791),o(47022)),r=o(89743),a=o(2677),n=o(34290),c=o(11087),i=o(21240),d=o(83728),p=o(43739),m=o(34564),u=o(80184);t.default=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,u.jsx)(l.Z,{children:(0,u.jsxs)(r.Z,{className:"items-center justify-center mb-0",children:[(0,u.jsx)(a.Z,{xl:8,lg:6,children:(0,u.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Video"})}),(0,u.jsx)(a.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,u.jsxs)("ul",{className:"xs-text-center",children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"#","aria-label":"breadcrumb",onClick:function(e){return e.preventDefault()},className:"hover:text-white",children:"Elements"})}),(0,u.jsx)("li",{children:"Video"})]})})]})})}),(0,u.jsx)(n.m.section,(0,s.Z)((0,s.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},i.Ji),{},{children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(a.Z,{md:12,className:"text-center mb-[6%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Video iframe"})})}),(0,u.jsxs)(r.Z,{className:"row-cols-2 justify-center sm:block",children:[(0,u.jsx)(a.Z,{className:"px-[15px] sm:w-full sm:mb-[30px]",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)("iframe",{title:"vimeo-player",src:"https://player.vimeo.com/video/176916362?title=0&byline=0&portrait=0&autoplay=true&muted=1",frameBorder:"0",allowFullScreen:!0})})}),(0,u.jsx)(a.Z,{className:"px-[15px] sm:w-full sm:mb-[30px]",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)("iframe",{src:"https://www.youtube.com/embed/sU3FkzUKHXU?autoplay=1&mute=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})]})})),(0,u.jsx)("section",{children:(0,u.jsx)(d.Z,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",src:"video path",loop:!0,poster:"https://via.placeholder.com/1920x1080",overlay:["#0039e3","#4132e0","#4132e0","#741bd9","#8600d4"],opacity:"0.8",children:(0,u.jsx)(l.Z,{children:(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsxs)(a.Z,{lg:8,xl:7,md:10,xs:12,className:"text-center z-[1] relative pt-[5%] pb-[5%]",children:[(0,u.jsx)("h3",{className:"mb-[35px] font-semibold font-serif text-white",children:"Background video"}),(0,u.jsx)("p",{className:"w-[80%] mb-[45px] opacity-70 leading-[32px] text-lg font-serif text-white mx-auto lg:mt-0 lg:mx-[75px] lg:mb-[45px] md:text-xmd md:leading-[22px] xs:leading-[22px] sm:w-full",children:"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."}),(0,u.jsx)(p.default,{href:"#",className:"btn-fill mx-3 drop-shadow-md\tfont-medium font-serif uppercase rounded-[50px] text-[15px] md:mb-[15px] xs:mb-0",size:"lg",themeColor:"#fff",color:"#000",title:"Get Started Now"})]})})})})}),(0,u.jsx)(n.m.section,(0,s.Z)((0,s.Z)({className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-no-repeat bg-left-bottom",style:{backgroundImage:"url('https://via.placeholder.com/1075x517')"}},i.Ji),{},{children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-24",children:"Popup video"}),(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsxs)(a.Z,{lg:8,className:"relative",children:[(0,u.jsx)("img",{width:"",height:"",className:"w-full h-auto align-middle",src:"https://via.placeholder.com/850x653",alt:""}),(0,u.jsx)("span",{className:"absolute top-0 left-0 w-full h-full justify-center items-center flex z-0",children:(0,u.jsx)(m.Z.Wrapper,{modalBtn:(0,u.jsx)(p.default,{type:"submit",className:"btn-sonar border-0 shadow-[0_0_15px_rgba(0,0,0,0.1)]",themeColor:"#fff",color:"#ff7a56",size:"lg",title:(0,u.jsx)("i",{className:"icon-control-play"})}),children:(0,u.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)("iframe",{width:"100%",height:"100%",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})})]})})]})})),(0,u.jsx)("section",{children:(0,u.jsx)(d.Z,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",src:"https://www.youtube.com/embed/sU3FkzUKHXU?rel=0&showinfo=0&background=1&autoplay=1&loop=1&mute=1&playlist=sU3FkzUKHXU",loop:!0,poster:"https://via.placeholder.com/1920x1080",overlay:["#0039e3","#4132e0","#4132e0","#741bd9","#8600d4"],opacity:"0.8",children:(0,u.jsx)(l.Z,{children:(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsxs)(a.Z,{lg:8,xl:7,md:10,xs:12,className:"text-center z-[1] relative pt-[5%] pb-[5%]",children:[(0,u.jsx)("h3",{className:"mb-[35px] font-semibold font-serif text-white",children:"Background youtube video"}),(0,u.jsx)("p",{className:"w-[80%] mb-[45px] opacity-70 leading-[32px] text-lg font-serif text-white mx-auto lg:mt-0 lg:mx-[75px] lg:mb-[45px] md:text-xmd sm:w-full xs:leading-[22px]",children:"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore."}),(0,u.jsx)(p.default,{href:"#",className:"btn-fill mx-3 drop-shadow-md\tfont-medium font-serif uppercase rounded-[50px] text-[15px] md:mb-[15px] xs:mb-0",size:"lg",themeColor:"#fff",color:"#000",title:"Get Started Now"})]})})})})})]})}},43360:function(e,t,o){var s=o(1413),l=o(29439),r=o(45987),a=o(81694),n=o.n(a),c=o(72791),i=o(15341),d=o(10162),p=o(80184),m=["as","bsPrefix","variant","size","active","disabled","className"],u=c.forwardRef((function(e,t){var o=e.as,a=e.bsPrefix,c=e.variant,u=void 0===c?"primary":c,x=e.size,f=e.active,h=void 0!==f&&f,y=e.disabled,b=void 0!==y&&y,j=e.className,v=(0,r.Z)(e,m),g=(0,d.vE)(a,"btn"),w=(0,i.FT)((0,s.Z)({tagName:o,disabled:b},v)),N=(0,l.Z)(w,2),Z=N[0],C=N[1].tagName;return(0,p.jsx)(C,(0,s.Z)((0,s.Z)((0,s.Z)({},Z),v),{},{ref:t,disabled:b,className:n()(j,g,h&&"active",u&&"".concat(g,"-").concat(u),x&&"".concat(g,"-").concat(x),v.href&&b&&"disabled")}))}));u.displayName="Button",t.Z=u}}]);
//# sourceMappingURL=5409.fbbeabfb.chunk.js.map