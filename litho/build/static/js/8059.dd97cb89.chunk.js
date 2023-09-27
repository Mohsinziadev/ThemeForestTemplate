"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8059,3739],{43739:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var o=n(1413),s=n(72791),a=n(11087),r=n(43360),l=n(80184),c=function(e){var t=e.themeColor&&e.themeColor[0],n=e.themeColor&&e.themeColor[1],s=e.color&&e.color[0],c=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(n,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(s,", ").concat(c,", ").concat(s,")"):e.color};return e.href||"submit"===e.type?(0,l.jsx)(r.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,l.jsx)(i,(0,o.Z)({},e))}):(0,l.jsx)(a.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,l.jsx)(i,(0,o.Z)({},e))})},i=function(e){return(0,l.jsxs)(l.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,l.jsx)("span",{})]})};c.defaultProps={size:"lg",style:"primary"};var d=(0,s.memo)(c)},34564:function(e,t,n){var o=n(1413),s=n(72791),a=n(97948),r=n.n(a),l=n(52007),c=n(62752),i=n(12734),d=n(80184),m={Close:function(e){var t=(0,s.useContext)(i.Z),n=t.customModal,a=t.setCustomModal;return(0,d.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){a((0,o.Z)((0,o.Z)({},n),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var t=(0,s.useRef)(null),a=(0,s.useRef)(null),l=(0,s.useContext)(i.Z),m=l.customModal,p=l.setCustomModal,u=function(){t.current.node.classList.remove("open"),setTimeout((function(){p((0,o.Z)((0,o.Z)({},m),{},{el:null,isOpen:!1}))}),100)},f=function(){p((0,o.Z)((0,o.Z)({},m),{},{el:t.current.node,isOpen:!0})),setTimeout((function(){t.current.node.classList.add("open")}),100)};return(0,s.useEffect)((function(){t.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&u()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,s.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(n.bind(n,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?u():f()}))}),200)}),[]),(0,c.Z)(a,u),r().setAppElement("#modal-outer"),(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:f,children:e.modalBtn}),(0,d.jsx)(r(),{className:e.animation,ref:t,isOpen:null!==m.el&&m.el===t.current.node&&!0===m.isOpen,onRequestClose:u,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,d.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,d.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:u,children:"\xd7"}),(0,d.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:a,children:e.children})]})})]})}};m.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},m.Wrapper.propTypes={className:l.PropTypes.string,closeBtnOuter:l.PropTypes.bool,defaultOpen:l.PropTypes.bool,children:l.PropTypes.oneOfType([l.PropTypes.arrayOf(l.PropTypes.node),l.PropTypes.node]).isRequired},m.Close.propTypes={className:l.PropTypes.string,children:l.PropTypes.oneOfType([l.PropTypes.arrayOf(l.PropTypes.node),l.PropTypes.node]).isRequired},t.Z=m},71719:function(e,t,n){var o=n(72791),s=n(80184),a=function(e){return(0,s.jsx)("iframe",{title:"Google Map",className:e.className,src:e.location,width:"600",height:"540",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})};a.defaultProps={location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8404599049227!2d144.95373931590427!3d-37.81720574201434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1653971982572!5m2!1sen!2sin"},t.Z=(0,o.memo)(a)},62752:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(72791);function s(e,t){(0,o.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])}},98059:function(e,t,n){n.r(t);var o=n(1413),s=(n(72791),n(47022)),a=n(89743),r=n(2677),l=n(11087),c=n(34290),i=n(43739),d=n(71719),m=n(34564),p=n(21240),u=n(80184);t.default=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"bg-darkgray py-[25px] page-title-small p-[130px] xxs:px-0",children:(0,u.jsx)(s.Z,{children:(0,u.jsxs)(a.Z,{className:"items-center justify-center",children:[(0,u.jsx)(r.Z,{xl:8,lg:6,children:(0,u.jsx)("h1",{className:"font-serif text-lg text-white font-medium mb-0 md:text-center",children:"Google map modal"})}),(0,u.jsx)(r.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-sm font-serif mb-0 md:mt-[10px] md:justify-center",children:(0,u.jsxs)("ul",{className:"xs:text-center",children:[(0,u.jsx)("li",{children:(0,u.jsx)(l.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(l.rU,{to:"#","aria-label":"breadcrumb",className:"hover:text-white",children:"Features"})}),(0,u.jsx)("li",{children:"Google map"})]})})]})})}),(0,u.jsx)(c.m.section,(0,o.Z)((0,o.Z)({className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"},p.Ji),{},{children:(0,u.jsx)(s.Z,{children:(0,u.jsxs)(a.Z,{className:"justify-center",children:[(0,u.jsx)(r.Z,{md:12,className:"text-center",children:(0,u.jsx)("h6",{className:"font-medium text-darkgray font-serif mb-[25px] lg:mb-[15px]",children:"Popup with Google map"})}),(0,u.jsxs)(r.Z,{xl:5,lg:8,md:10,className:"text-center",children:[(0,u.jsx)("h6",{className:"mb-[8%] font-light lg:mb-[60px] md:mb-[45px] sm:mb-[30px]",children:"In this example lightboxes are automatically disabled on small screen size and default behavior of link is triggered."}),(0,u.jsx)(m.Z.Wrapper,{modalBtn:(0,u.jsx)(i.default,{type:"submit",className:"btn-fill mx-3 font-medium font-serif rounded-[4px] uppercase",themeColor:"#0038e3",color:"#fff",size:"md",title:"Open Google Map"}),children:(0,u.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)(d.Z,{className:"absolute top-0 left-0 w-full h-full",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181589!2d144.95373631531888!3d-37.8172139797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1597672202024!5m2!1sen!2sin"})})})})]})]})})}))]})}},43360:function(e,t,n){var o=n(1413),s=n(29439),a=n(45987),r=n(81694),l=n.n(r),c=n(72791),i=n(15341),d=n(10162),m=n(80184),p=["as","bsPrefix","variant","size","active","disabled","className"],u=c.forwardRef((function(e,t){var n=e.as,r=e.bsPrefix,c=e.variant,u=void 0===c?"primary":c,f=e.size,x=e.active,h=void 0!==x&&x,b=e.disabled,g=void 0!==b&&b,y=e.className,j=(0,a.Z)(e,p),v=(0,d.vE)(r,"btn"),N=(0,i.FT)((0,o.Z)({tagName:n,disabled:g},j)),w=(0,s.Z)(N,2),Z=w[0],C=w[1].tagName;return(0,m.jsx)(C,(0,o.Z)((0,o.Z)((0,o.Z)({},Z),j),{},{ref:t,disabled:g,className:l()(y,v,h&&"active",u&&"".concat(v,"-").concat(u),f&&"".concat(v,"-").concat(f),j.href&&g&&"disabled")}))}));u.displayName="Button",t.Z=u}}]);
//# sourceMappingURL=8059.dd97cb89.chunk.js.map