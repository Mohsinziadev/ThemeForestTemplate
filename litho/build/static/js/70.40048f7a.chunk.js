"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[70,3739],{43739:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var a=t(1413),l=t(72791),r=t(11087),i=t(43360),n=t(80184),c=function(e){var s=e.themeColor&&e.themeColor[0],t=e.themeColor&&e.themeColor[1],l=e.color&&e.color[0],c=e.color&&e.color[1],d={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(l,", ").concat(c,", ").concat(l,")"):e.color};return e.href||"submit"===e.type?(0,n.jsx)(i.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:d,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,n.jsx)(o,(0,a.Z)({},e))}):(0,n.jsx)(r.rU,{style:d,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,n.jsx)(o,(0,a.Z)({},e))})},o=function(e){return(0,n.jsxs)(n.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,n.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,n.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,n.jsx)("span",{})]})};c.defaultProps={size:"lg",style:"primary"};var d=(0,l.memo)(c)},34564:function(e,s,t){var a=t(1413),l=t(72791),r=t(97948),i=t.n(r),n=t(52007),c=t(62752),o=t(12734),d=t(80184),m={Close:function(e){var s=(0,l.useContext)(o.Z),t=s.customModal,r=s.setCustomModal;return(0,d.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:function(e){e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((function(){r((0,a.Z)((0,a.Z)({},t),{},{el:null,isOpen:!1}))}),100)},children:e.children})},Wrapper:function(e){var s=(0,l.useRef)(null),r=(0,l.useRef)(null),n=(0,l.useContext)(o.Z),m=n.customModal,x=n.setCustomModal,p=function(){s.current.node.classList.remove("open"),setTimeout((function(){x((0,a.Z)((0,a.Z)({},m),{},{el:null,isOpen:!1}))}),100)},f=function(){x((0,a.Z)((0,a.Z)({},m),{},{el:s.current.node,isOpen:!0})),setTimeout((function(){s.current.node.classList.add("open")}),100)};return(0,l.useEffect)((function(){s.current.node.classList.add("custom_modal");var e=function(e){27===e.keyCode&&p()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[]),(0,l.useEffect)((function(){!0===e.defaultOpen&&setTimeout((function(){Promise.resolve().then(t.bind(t,38480)).then((function(e){"shown"===e.getCookie("litho-promo-popup")?p():f()}))}),200)}),[]),(0,c.Z)(r,p),i().setAppElement("#modal-outer"),(0,d.jsxs)("div",{className:e.className,children:[(0,d.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:f,children:e.modalBtn}),(0,d.jsx)(i(),{className:e.animation,ref:s,isOpen:null!==m.el&&m.el===s.current.node&&!0===m.isOpen,onRequestClose:p,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:function(){return document.body},children:(0,d.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,d.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:p,children:"\xd7"}),(0,d.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:r,children:e.children})]})})]})}};m.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},m.Wrapper.propTypes={className:n.PropTypes.string,closeBtnOuter:n.PropTypes.bool,defaultOpen:n.PropTypes.bool,children:n.PropTypes.oneOfType([n.PropTypes.arrayOf(n.PropTypes.node),n.PropTypes.node]).isRequired},m.Close.propTypes={className:n.PropTypes.string,children:n.PropTypes.oneOfType([n.PropTypes.arrayOf(n.PropTypes.node),n.PropTypes.node]).isRequired},s.Z=m},7029:function(e,s,t){t.d(s,{Hd:function(){return l},Q0:function(){return r},wF:function(){return a}});var a=[{img:"https://via.placeholder.com/720x525",title:"Meditation classes",content:"Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor.",price:"$100 Per month",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/720x525",title:"Sound therapy",content:"Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor.",price:"$150 Per month",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/720x525",title:"Kundalini yoga",content:"Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor.",price:"$180 Per month",btnName:"Join classes",btnLink:"#"}],l=[{img:"https://via.placeholder.com/281x217",title:"Sausage rolls",content:"Lorem ipsum is simply dummy text of the printing industry",price:"JUST $19.00"},{img:"https://via.placeholder.com/281x217",title:"Cheese pancake",content:"Lorem ipsum is simply dummy text of the printing industry",price:"JUST $21.00"},{img:"https://via.placeholder.com/281x217",title:"Beef sandwich",content:"Lorem ipsum is simply dummy text of the printing industry",price:"JUST $16.00"}],r=[{img:"https://via.placeholder.com/525x431",packageprice:"From $350",days:"08 Days",title:"Golden triangle of incredible india",reviews:"20 Reviews",link:"#",rating:5},{img:"https://via.placeholder.com/525x431",packageprice:"From $250",days:"10 Days",title:"Maldives super resorts with flights",reviews:"18 Reviews",link:"#",rating:5},{img:"https://via.placeholder.com/525x431",packageprice:"From $700",days:"07 Days",title:"Dubai parks & resorts special packages",reviews:"05 Reviews",link:"#",rating:5},{img:"https://via.placeholder.com/525x431",packageprice:"From $350",days:"05 Days",title:"Majestic india life and great wildlife",reviews:"30 Reviews",link:"#",rating:5},{img:"https://via.placeholder.com/525x431",packageprice:"From $250",days:"10 Days",title:"Maldives super resorts with flights",reviews:"18 Reviews",link:"#",rating:5}]},81561:function(e,s,t){var a=t(1413),l=t(72791),r=t(89743),i=t(11087),n=t(34290),c=t(7029),o=t(80184),d=function(e){return(0,o.jsx)(r.Z,{className:"".concat(e.className?" ".concat(e.className):"").concat(e.grid?" ".concat(e.grid):""),children:e.data.map((function(s,t){return(0,o.jsxs)(n.m.div,(0,a.Z)((0,a.Z)({className:"col"},(0,a.Z)((0,a.Z)({},e.animation),{},{transition:{delay:t*e.animationDelay}})),{},{children:[(0,o.jsx)(i.rU,{"aria-label":"link",to:s.btnLink,children:(0,o.jsx)("img",{className:"w-full",width:360,height:279,src:s.img,alt:"feature specials"})}),(0,o.jsxs)("div",{className:"relative bg-white box-shadow-small p-14",children:[(0,o.jsx)("div",{className:"bg-[#333045] text-small font-serif text-white uppercase absolute font-medium text-sm -top-[15px] right-0 py-[5px] px-[20px]",children:s.price}),(0,o.jsx)("span",{className:"font-serif font-medium text-xmd text-darkgray block mb-[10px]",children:s.title}),(0,o.jsx)("p",{className:"mb-[25px]",children:s.content}),(0,o.jsx)("div",{className:"w-full h-[1px] bg-[#ededed] mb-[20px] inline-block"}),(0,o.jsxs)(i.rU,{"aria-label":"link",className:"font-serif font-semibold text-sm text-[#333045] hover:text-basecolor uppercase flex items-center",to:s.btnLink,children:[s.btnName,(0,o.jsx)("i",{className:"feather-arrow-right text-lg ms-auto"})]})]})]}),t)}))})};d.defaultProps={data:c.wF,animationDelay:.2},s.Z=(0,l.memo)(d)},6833:function(e,s,t){var a=t(1413),l=t(72791),r=t(7029),i=t(89743),n=t(34290),c=t(80184),o=function(e){return(0,c.jsx)(i.Z,{className:e.grid,children:e.data.map((function(s,t){return(0,c.jsx)(n.m.div,(0,a.Z)((0,a.Z)({className:"col"},(0,a.Z)((0,a.Z)({},e.animation),{},{transition:{delay:t*e.animationDelay}})),{},{children:(0,c.jsxs)("div",{className:"info-banner-style01 text-center".concat(e.className),children:[s.img?(0,c.jsx)("img",{width:281,height:217,className:"inline-block xxs:mb-0",src:s.img,alt:"featurebox"}):(0,c.jsx)("div",{className:"feature-box-icon",children:s.icon&&(0,c.jsx)("i",{className:s.icon})}),(0,c.jsxs)("div",{className:"feature-box-content",children:[s.title&&(0,c.jsx)("h3",{className:"heading-6 title font-medium tracking-normal text-xmd font-serif text-darkgray mb-[10px]",children:s.title}),s.content&&(0,c.jsx)("p",{className:"w-[75%] lg:w-[85%] mx-auto",children:s.content}),s.price&&(0,c.jsx)("span",{className:"text-basecolor mt-[15px] font-sans font-medium text-uppercase block",children:s.price})]})]})}),t)}))})};o.defaultProps={data:r.Hd,animationDelay:.2},s.Z=(0,l.memo)(o)},35131:function(e,s,t){var a=t(1413),l=t(72791),r=t(58563),i=t(11087),n=t(51496),c=t(34290),o=t(7029),d=t(80184),m=function(e){var s=(0,l.useRef)(null);return(0,d.jsxs)("div",{className:"relative".concat(e.className?" ".concat(e.className):""),children:[(0,d.jsx)("div",{onClick:function(){return s.current.swiper.slidePrev()},className:"swiper-button-prev -left-[70px] lg:left-[-12px] landscape:md:left-[-7px] xs:left-0"}),(0,d.jsx)(r.tq,(0,a.Z)((0,a.Z)({className:"h-full p-[15px]",ref:s},e.carouselOption),{},{modules:[n.tl,n.pt,n.W_],children:e.data.map((function(s,t){return(0,d.jsx)(r.o5,{children:(0,d.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({className:"swiper-slide shadow-[0_0_15px_rgba(0,0,0,0.08)]"},(0,a.Z)((0,a.Z)({},e.animation),{},{transition:{delay:t*e.animationDelay}})),{},{children:[(0,d.jsx)(i.rU,{"aria-label":"link",to:"#",children:(0,d.jsx)("img",{width:263,height:216,src:s.img,className:"w-full",alt:"popular packages"})}),(0,d.jsxs)("div",{className:"relative bg-white p-12 md:px-16",children:[(0,d.jsx)("div",{className:"bg-neonorange text-sm font-medium font-serif text-white uppercase absolute -top-[15px] right-0 py-[5px] px-[20px]",children:s.packageprice}),(0,d.jsx)("span",{className:"text-md uppercase block mb-[5px]",children:s.days}),(0,d.jsx)(i.rU,{"aria-label":"link",to:s.link,className:"font-serif font-medium block mb-[30px] leading-[24px] text-darkgray hover:text-neonorange",children:s.title}),(0,d.jsxs)("span",{className:"text-[#ff9c00] text-sm leading-[18px] block",children:[(0,d.jsx)("i",{className:"fas fa-star"}),"\xa0",(0,d.jsx)("i",{className:"fas fa-star"}),"\xa0",(0,d.jsx)("i",{className:"fas fa-star"}),"\xa0",(0,d.jsx)("i",{className:"fas fa-star"}),"\xa0",(0,d.jsx)("i",{className:"fas fa-star"})]}),(0,d.jsx)("span",{className:"text-md",children:s.reviews})]})]}))},t)}))})),(0,d.jsx)("div",{onClick:function(){return s.current.swiper.slideNext()},className:"swiper-button-next -right-[70px] lg:right-[-12px] landscape:md:right-[-7px] xs:right-0",children:" "})]})};m.defaultProps={data:o.Q0,animationDelay:.2},s.Z=(0,l.memo)(m)},62752:function(e,s,t){t.d(s,{Z:function(){return l}});var a=t(72791);function l(e,s){(0,a.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&s(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,s])}},60070:function(e,s,t){t.r(s);var a=t(1413),l=(t(72791),t(47022)),r=t(89743),i=t(2677),n=t(11087),c=t(34290),o=t(34564),d=t(43739),m=t(35131),x=t(81561),p=t(6833),f=t(21240),h=t(7029),u=t(80184);s.default=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,u.jsx)(l.Z,{children:(0,u.jsxs)(r.Z,{className:"items-center justify-center mb-0",children:[(0,u.jsx)(i.Z,{xl:8,lg:6,children:(0,u.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Info banner"})}),(0,u.jsx)(i.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,u.jsxs)("ul",{className:"xs-text-center",children:[(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"#","aria-label":"breadcrumb",onClick:function(e){return e.preventDefault()},className:"hover:text-white",children:"Elements"})}),(0,u.jsx)("li",{children:"Info banner"})]})})]})})}),(0,u.jsx)("section",{className:"bg-lightgray py-[160px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(i.Z,{md:12,className:"text-center mb-[6%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray text-center font-medium",children:"Info banners style 01"})})}),(0,u.jsx)(x.Z,{grid:"row row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-10",className:"justify-center",data:h.wF,animation:f.Ji})]})}),(0,u.jsxs)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] relative bg-cover bg-center",style:{backgroundImage:'url("https://via.placeholder.com/1920x1100")'},children:[(0,u.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-60 bg-darkslateblue"}),(0,u.jsx)(l.Z,{className:"relative",children:(0,u.jsx)(r.Z,{className:"justify-center text-center",children:(0,u.jsx)(i.Z,{xl:7,lg:8,md:10,children:(0,u.jsxs)("div",{className:"font-serif text-white",children:[(0,u.jsx)(o.Z.Wrapper,{modalBtn:(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},f.kr),{},{children:(0,u.jsx)(d.default,{type:"submit",className:"btn-sonar border-0 mx-auto mb-14",themeColor:"#3452ff",y:!0,color:"#fff",size:"lg",title:(0,u.jsx)("i",{className:"icon-control-play"})})})),children:(0,u.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,u.jsx)(c.m.h4,(0,a.Z)((0,a.Z)({},f.Ji),{},{className:"font-semibold mb-[45px]",children:"Beautifully simple handcrafted templates for your website"})),(0,u.jsx)(c.m.span,(0,a.Z)((0,a.Z)({},f.Ji),{},{className:"uppercase tracking-[1px]",children:"unlimited power and customization"}))]})})})})]}),(0,u.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray",children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(i.Z,{md:12,className:"text-center mb-[6%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray text-center font-medium",children:"Info banners style 03"})})}),(0,u.jsx)(p.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 sm:gap-y-[30px] justify-center",className:"",data:h.Hd,animation:f.Ji})]})}),(0,u.jsx)("section",{className:"bg-lightgray",children:(0,u.jsx)(l.Z,{fluid:!0,children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(c.m.div,(0,a.Z)({className:"bg-cover bg-center md:h-[450px] xs:h-[300px] col-xl-6 col-lg-4",style:{backgroundImage:'url("https://via.placeholder.com/1024x903")'}},f.ER)),(0,u.jsx)(i.Z,{xl:6,lg:8,children:(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(c.m.div,(0,a.Z)({className:"bg-cover bg-center xs:h-[300px] order-1 col-sm-6 order-sm-1",style:{backgroundImage:'url("https://via.placeholder.com/700x617")'}},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.4}}))),(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({className:"col-12 bg-[#f9f6f3] bg-no-repeat bg-[right_5px_bottom_-25px] order-2 col-sm-6 order-sm-2",style:{backgroundImage:'url("https://via.placeholder.com/140x153")'}},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.5}})),{},{children:(0,u.jsxs)("div",{className:"px-28 py-32 xl:px-12 xl:py-16 md:py-24",children:[(0,u.jsx)("span",{className:"font-serif font-semibold text-darkgray text-lg mb-[20px] block md:text-xmd md:leading-[22px]",children:" Creativity ideas "}),(0,u.jsx)("p",{className:"mb-[30px]",children:" Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. "}),(0,u.jsx)(d.default,{to:"/shop/left-sidebar",className:"btn-fill font-medium font-serif uppercase rounded-none",themeColor:"#bf8c4c",color:"#fff",size:"sm",title:"View collection"})]})})),(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({className:"col-12 bg-[#f9f6f3] bg-no-repeat bg-[right_25px_bottom_-35px] order-4 col-sm-6 order-sm-3",style:{backgroundImage:'url("https://via.placeholder.com/168x172")'}},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.8}})),{},{children:(0,u.jsxs)("div",{className:"px-28 py-32 xl:px-12 xl:py-16 md:py-24",children:[(0,u.jsx)("span",{className:"font-serif font-semibold text-darkgray text-lg mb-[20px] block md:text-xmd md:leading-[22px]",children:" Innovation concept "}),(0,u.jsx)("p",{className:"mb-[30px]",children:" Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore. "}),(0,u.jsx)(d.default,{to:"/shop/left-sidebar",className:"btn-fill font-medium font-serif uppercase rounded-none",themeColor:"#bf8c4c",color:"#fff",size:"sm",title:"View collection"})]})})),(0,u.jsx)(c.m.div,(0,a.Z)({className:"bg-cover bg-center xs:h-[300px] order-3 col-sm-6 order-sm-4",style:{backgroundImage:'url("https://via.placeholder.com/700x617")'}},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.7}})))]})})]})})}),(0,u.jsx)("section",{className:"py-[130px] overflow-hidden relative lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,u.jsxs)(l.Z,{className:"relative px-[15px]",children:[(0,u.jsx)(r.Z,{className:"justify-center mb-[25px]",children:(0,u.jsx)(i.Z,{md:12,className:"text-center",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray text-center font-medium",children:"Info banners style 05"})})}),(0,u.jsx)(m.Z,{className:"swiper-navigation-04 swiper-navigation-light swiper-pagination-medium",carouselOption:{slidesPerView:1,spaceBetween:30,observer:!0,observeParents:!0,keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2}},autoplay:{delay:3e3,disableOnInteraction:!1}},data:h.Q0})]})}),(0,u.jsx)("section",{className:"p-[5px] sm:pt-[50px]",children:(0,u.jsx)(l.Z,{fluid:!0,children:(0,u.jsxs)(r.Z,{className:"justify-center",children:[(0,u.jsx)(i.Z,{lg:{span:4,order:0},md:{span:6,order:1},sm:8,className:"p-[5px]",children:(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},f.Ji),{},{className:"relative h-full flex items-center bg-cover bg-no-repeat overflow-hidden bg-center text-center",style:{backgroundImage:"url(https://via.placeholder.com/700x700)"},children:[(0,u.jsx)("div",{className:"absolute h-full w-full top-0 left-0 opacity-60 text-darkgray"}),(0,u.jsxs)("div",{className:"relative z-[1] w-full py-[10rem] lg:py-[7rem]",children:[(0,u.jsx)("span",{className:"block text-xmd text-white opacity-60 font-serif tracking-[2px] uppercase mb-[25px]",children:"Special food"}),(0,u.jsxs)("h2",{className:"font-serif text-white uppercase w-[75%] lg:w-[85%] mx-auto mb-[35px] font-light",children:["Land of ",(0,u.jsx)("span",{className:"font-bold",children:"delicious"})]}),(0,u.jsx)(d.default,{href:"#",className:"btn-fill btn-fancy font-medium rounded-[2px] font-serif uppercase btn-shadow text-[15px] md:mb-[15px]",size:"md",themeColor:"#fff",color:"#000",title:"Explore more"})]})]}))}),(0,u.jsx)(i.Z,{lg:{span:4,order:0},md:{span:6,order:3},sm:8,className:"p-[5px] flex",children:(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.4}})),{},{className:"w-full flex flex-col items-center bg-cover bg-no-repeat overflow-hidden bg-center text-center py-[10rem] lg:py-[7rem]",style:{backgroundImage:"url(https://via.placeholder.com/700x700)"},children:[(0,u.jsxs)("h3",{className:"font-serif uppercase text-white mb-0 tracking-[-1px]",children:["Food ",(0,u.jsx)("span",{className:"block",children:"voucher"})]}),(0,u.jsx)("h3",{className:"font-serif uppercase font-semibold tracking-[-1px] mb-[40px] lg:mb-[25px] text-white",children:"50% off"}),(0,u.jsx)("span",{className:"self-center font-serif font-medium text-xmd uppercase text-white border-[1px] border-dotted border-[#ffffff66] rounded-[4px] px-[25px] py-[10px]",children:"Foodoff"})]}))}),(0,u.jsx)(i.Z,{lg:{span:4,order:0},md:{span:6,order:2},sm:8,className:"p-[5px]",children:(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.6}})),{},{className:"relative h-full flex items-center bg-cover bg-no-repeat overflow-hidden bg-center text-center",style:{backgroundImage:"url(https://via.placeholder.com/700x700)"},children:[(0,u.jsx)("div",{className:"absolute h-full w-full top-0 left-0 opacity-70 text-darkgray"}),(0,u.jsxs)("div",{className:"relative z-[1] w-full py-[10rem] lg:py-[7rem]",children:[(0,u.jsx)("span",{className:"block text-xmd text-white opacity-60 font-serif tracking-[2px] uppercase mb-[25px]",children:"Traditional food"}),(0,u.jsxs)("h2",{className:"font-serif text-white uppercase w-[75%] lg:w-[85%] mx-auto mb-[35px] font-light",children:["Tastes of  ",(0,u.jsx)("span",{className:"font-bold",children:"america"})]}),(0,u.jsx)(d.default,{href:"#",className:"btn-fill\tbtn-fancy font-medium rounded-[2px] font-serif uppercase btn-shadow text-[15px] md:mb-[15px]",size:"md",themeColor:"#fff",color:"#000",title:"Explore more"})]})]}))})]})})}),(0,u.jsx)("section",{className:"py-[160px] lg:py-[95px] md:py-[75px]  xs:py-[50px]",children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(i.Z,{md:12,className:"text-center mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Info banners style 07"})})}),(0,u.jsxs)(r.Z,{className:"gx-0",children:[(0,u.jsx)(c.m.div,(0,a.Z)({className:"col-12 col-lg-6 bg-cover bg-center md:h-[400px]",style:{backgroundImage:'url("https://via.placeholder.com/900x900")'}},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.2}}))),(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({className:"col-12 p-0 col-lg-6"},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.36}})),{},{children:(0,u.jsxs)(c.m.div,{className:"bg-gradient-to-tr from-[#556fff] via-[#ff77dd] to-[#f767a6] px-24 py-28 lg:py-20 lg:px-16 md:p-20 text-white text-center",children:[(0,u.jsx)(o.Z.Wrapper,{modalBtn:(0,u.jsx)(d.default,{type:"submit",className:"btn-sonar border-0 mx-auto mb-14",themeColor:"#fff",size:"lg",title:(0,u.jsx)("i",{className:"icon-control-play text-gradient bg-gradient-to-tr from-[#b783ff] to-[#ff9393]"})}),children:(0,u.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,u.jsx)("div",{className:"fit-video",children:(0,u.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,u.jsx)("span",{className:"text-xmd font-serif mb-[20px] block text-white opacity-70",children:"Powerful theme for creatives designer"}),(0,u.jsxs)("h5",{className:"font-serif text-white font-medium mb-[40px]",children:["We design brand, digital experience that engage the right customers"," "]}),(0,u.jsx)(d.default,{className:"mx-3 font-medium font-serif hover:text-white uppercase after:h-[2px] btn-link after:bg-white",size:"xl",color:"#fff",title:"Get Started Now"})]})}))]})]})}),(0,u.jsx)("section",{className:"p-0 overflow-hidden",children:(0,u.jsx)(l.Z,{fluid:!0,className:"px-0",children:(0,u.jsxs)(r.Z,{className:"gx-0",children:[(0,u.jsx)(i.Z,{xl:6,className:"p-0",children:(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},f.Ji),{},{className:"flex flex-column flex-md-row h-full",children:[(0,u.jsx)(i.Z,{md:6,className:"cover-background sm:h-[700px]",style:{backgroundImage:"url(https://via.placeholder.com/488x778)"}}),(0,u.jsxs)(i.Z,{md:6,className:"bg-[#f8f4f0] flex flex-col justify-center text-start px-12 xl:px-[15px] lg:p-20 md:px-[2.5rem]",children:[(0,u.jsx)("img",{width:"",height:"",src:"/assets/img/webp/home-restaurant-img-transparent-05.webp",className:"self-start mb-[20px]",alt:""}),(0,u.jsxs)("h4",{className:"font-serif font-light text-darkgray -tracking-[1px] w-[85%] mb-12 xs:w-full xs:mb-[15px]",children:["Masterchef ",(0,u.jsx)("span",{className:"font-semibold",children:"message"})]}),(0,u.jsx)("span",{className:"text-[18px] text-darkgray leading-[30px] block w-[75%] mb-[20px] xs:mb-[30px] xl:w-[80%] xs:w-full",children:"Unique and delicious dishes from the worlds best masterchefs."}),(0,u.jsx)("p",{className:"w-[75%] xs:w-full",children:"Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt labore et dolore magna minim veniam nostrud exercitation ullamco."}),(0,u.jsx)("img",{width:"",height:"",src:"/assets/img/webp/home-restaurant-img-transparent-06.webp",className:"self-start mt-[25px] pt-[25px] xs:mt-[10px]",alt:""})]})]}))}),(0,u.jsx)(i.Z,{xl:6,className:"p-0",children:(0,u.jsxs)(r.Z,{className:"g-0",children:[(0,u.jsx)(i.Z,{xs:{order:1},sm:{span:6,order:1},className:"p-0",children:(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},f.Ji),{},{className:"text-center px-24 py-32 xl:py-24 xl:px-16 lg:px-28 sm:px-24 bg-darkgray",children:[(0,u.jsx)("span",{className:"font-serif font-medium text-[#ca943d] tracking-[1px] text-md block uppercase mb-[20px]",children:"Best of recipes"}),(0,u.jsxs)("h4",{className:"font-serif text-white mb-0",children:[(0,u.jsx)("span",{className:"font-semibold md:block",children:"Delicious"})," breakfast recipes"]})]}))}),(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.2}})),{},{className:"col-12 col-sm-6 order-2 cover-background xs:h-[300px]",style:{backgroundImage:"url(https://via.placeholder.com/960x777)"}})),(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.4}})),{},{className:"col-12 col-sm-6 order-4 order-sm-3 px-0 cover-background xs:h-[300px]",style:{backgroundImage:"url(https://via.placeholder.com/960x777)"}})),(0,u.jsx)(i.Z,{xs:{order:2},sm:{span:6,order:4},children:(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},(0,a.Z)((0,a.Z)({},f.Ji),{},{transition:{delay:.6}})),{},{className:"text-center px-24 py-32 xl:py-24 xl:px-16 lg:px-28 sm:px-24",children:[(0,u.jsx)("span",{className:"font-serif font-medium text-[#ca943d] tracking-[1px] text-md block uppercase mb-[20px]",children:"Best of foods"}),(0,u.jsxs)("h4",{className:"font-serif text-darkgray mb-0",children:[(0,u.jsx)("span",{className:"font-semibold md:block",children:"Healthy"})," energetic burger"]})]}))})]})})]})})}),(0,u.jsx)("section",{className:"pb-0 py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,u.jsxs)(l.Z,{fluid:!0,children:[(0,u.jsx)(r.Z,{clasName:"justify-center",children:(0,u.jsx)(i.Z,{md:12,className:"text-center mb-[5%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Info banners style 09"})})}),(0,u.jsxs)(r.Z,{xl:4,sm:2,xs:1,children:[(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},f.eu),{},{className:"col cover-background h-[650px] px-0 lg:m-0 md:h-[500px] xs:h-[450px]",style:{backgroundImage:"url(https://via.placeholder.com/800x1081)"},children:[(0,u.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-70 bg-darkgray"}),(0,u.jsxs)("div",{className:"flex flex-col h-full p-20 text-center relative z-[1] xl:px-12 lg:px-16",children:[(0,u.jsx)("span",{className:"font-serif font-medium uppercase text-[#ca943d]",children:"Loaded cheese"}),(0,u.jsx)("h4",{className:"font-serif font-semibold text-white uppercase mb-0 mt-auto -tracking-[.5px]",children:"Delicious burger"}),(0,u.jsx)("div",{className:"mt-auto",children:(0,u.jsx)(d.default,{ariaLabel:"Book seat link",href:"#",className:"btn-fill btn-fancy mt-auto inline-block font-medium font-serif rounded uppercase md:mb-[15px]",themeColor:"#ca943d",color:"#fff",size:"sm",title:"Book seat now"})})]})]})),(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},f.eu),{},{className:"cover-background h-[650px] px-0 md:h-[500px] xs:h-[450px]",style:{backgroundImage:"url(https://via.placeholder.com/800x1081)"},children:(0,u.jsxs)("div",{className:"flex flex-col h-full justify-start p-24 text-center relative z-index-1 xl:px-10 lg:px-32 md:px-20",children:[(0,u.jsx)("h4",{className:"font-serif font-semibold text-darkgray uppercase mb-[15px] -tracking-[.5px]",children:"Upcoming food events"}),(0,u.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore"}),(0,u.jsx)("div",{children:(0,u.jsx)(d.default,{ariaLabel:"all events link",href:"#",className:"btn-fill btn-fancy mt-[10px] font-medium font-serif rounded uppercase md:mb-[15px]",themeColor:"#ca943d",color:"#fff",size:"sm",title:"Explore all events"})})]})})),(0,u.jsxs)(c.m.div,(0,a.Z)((0,a.Z)({},f.eu),{},{className:"cover-background h-[650px] px-0 lg:m-0 md:h-[500px] xs:h-[450px]",style:{backgroundImage:"url(https://via.placeholder.com/800x1081)"},children:[(0,u.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-70 bg-darkgray"}),(0,u.jsxs)("div",{className:"flex flex-col h-full p-20 text-center relative z-[1] xl:px-12 lg:px-32",children:[(0,u.jsx)("span",{className:"font-serif font-medium uppercase text-[#ca943d]",children:"Barbeque lover"}),(0,u.jsx)("h4",{className:"font-serif font-semibold text-white uppercase mb-0 mt-auto -tracking-[.5px]",children:"Barbecue festival"}),(0,u.jsx)(n.rU,{"aria-label":"link Barbecue festival",to:"#",className:"w-[40px] h-[40px] leading-[40px] bg-[#ca943d] rounded-full self-center mt-auto",children:(0,u.jsx)("i",{className:"fas fa-arrow-right text-sm text-white"})})]})]})),(0,u.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},f.eu),{},{className:"cover-background h-[650px] px-0 md:h-[500px] xs:h-[450px]",style:{backgroundImage:"url(https://via.placeholder.com/800x1081)"},children:(0,u.jsxs)("div",{className:"flex flex-col h-full justify-start py-20 px-24 text-center relative z-[1] xl:px-12 lg:px-32",children:[(0,u.jsx)("span",{className:"font-serif font-medium uppercase text-darkgray block mb-[15px]",children:"Every saturday"}),(0,u.jsx)("h4",{className:"font-serif font-semibold text-white uppercase -tracking-[.5px]",children:"Healthy cooking night"}),(0,u.jsx)(n.rU,{"aria-label":"Healthy cooking night",to:"#",className:"w-[40px] h-[40px] leading-[40px] bg-white rounded-full self-center",children:(0,u.jsx)("i",{className:"fas fa-arrow-right text-sm text-black"})})]})}))]})]})})]})}},43360:function(e,s,t){var a=t(1413),l=t(29439),r=t(45987),i=t(81694),n=t.n(i),c=t(72791),o=t(15341),d=t(10162),m=t(80184),x=["as","bsPrefix","variant","size","active","disabled","className"],p=c.forwardRef((function(e,s){var t=e.as,i=e.bsPrefix,c=e.variant,p=void 0===c?"primary":c,f=e.size,h=e.active,u=void 0!==h&&h,g=e.disabled,b=void 0!==g&&g,j=e.className,y=(0,r.Z)(e,x),N=(0,d.vE)(i,"btn"),v=(0,o.FT)((0,a.Z)({tagName:t,disabled:b},y)),w=(0,l.Z)(v,2),Z=w[0],k=w[1].tagName;return(0,m.jsx)(k,(0,a.Z)((0,a.Z)((0,a.Z)({},Z),y),{},{ref:s,disabled:b,className:n()(j,N,u&&"active",p&&"".concat(N,"-").concat(p),f&&"".concat(N,"-").concat(f),y.href&&b&&"disabled")}))}));p.displayName="Button",s.Z=p}}]);
//# sourceMappingURL=70.40048f7a.chunk.js.map