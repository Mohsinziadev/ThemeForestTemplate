"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1158,9213],{96158:function(e,t,i){var l=i(29439),a=i(72791),o=i(11087),s=i(34290),n=i(83992),c=i(75585),r=i(19630),m=i(80184),d=r.qm.filter((function(e){return"metro"===e.blogType})),p=function(e){var t=(0,a.useRef)(),r=(0,a.useState)(!0),d=(0,l.Z)(r,2),p=d[0],f=d[1];(0,a.useEffect)((function(){Promise.resolve().then(i.bind(i,38480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return f(!1)}))}))}),[]);var h={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((function(e,t){return e})),")"):e.overlay};return(0,m.jsxs)("div",{className:"grid-wrapper",children:[(0,m.jsx)(n.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){t.current.querySelectorAll("li").forEach((function(e){var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,m.jsxs)("ul",{ref:t,className:"grid-container ".concat(e.grid?" ".concat(e.grid):"").concat(p?" loading":"").concat(!1===e.filter?"":" mt-28 md:mt-[4.5rem] sm:mt-8"),children:[(0,m.jsx)("li",{className:"grid-sizer"}),e.data.map((function(t,i){return(0,m.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category.map((function(e){return e.split(" ").join("")})).toString().split(",").join(" ").toLowerCase()),children:(0,m.jsxs)(s.m.div,{className:"blog-metro",initial:{opacity:0},whileInView:!p&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[(0,m.jsx)("div",{className:"blog-post-image",style:h,children:(0,m.jsx)("img",{className:"w-full",height:353,width:353,src:t.img,alt:"blog-post"})}),(0,m.jsxs)("div",{className:"post-details",children:[(0,m.jsxs)(o.rU,{"aria-label":"link",to:"/blogs/category/".concat([t.category[0].toString().split(" ").join("").toLowerCase()]),className:"post-btn",children:[" ",t.category[0]]}),(0,m.jsx)("span",{className:"post-date",children:t.date}),(0,m.jsx)(o.rU,{"aria-label":"link",to:"".concat(e.link).concat([t.id]),className:"post-title",children:t.title})]})]})},i)}))]}),!0===e.pagination&&(0,m.jsx)("div",{className:"flex justify-center mt-[7.5rem] md:mt-20",children:(0,m.jsx)(c.Z,{})})]})};p.defaultProps={filter:!1,data:d,link:"blog-types/blog-standard-post/"},t.Z=(0,a.memo)(p)},75585:function(e,t,i){i(72791);var l=i(11087),a=i(80184);t.Z=function(){return(0,a.jsxs)("ul",{className:"pagination pagination-style-01 font-sans font-medium items-center",children:[(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,a.jsx)("i",{className:"feather-arrow-left text-lg"})})}),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 01 "})}),(0,a.jsx)("li",{className:"page-item active",children:(0,a.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 02 "})}),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 03 "})}),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 04 "})}),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,a.jsx)("i",{className:"feather-arrow-right text-lg"})})})]})}},67250:function(e,t,i){var l=i(1413),a=i(72791),o=i(2677),s=i(89743),n=i(34290),c=i(58563),r=i(51496),m=i(46138),d=i(80184),p=function(e){var t=(0,a.useRef)(null);return!0===e.carousel?(0,d.jsxs)(n.m.div,(0,l.Z)((0,l.Z)({className:"client-slider-wrapper relative".concat(e.className?" ".concat(e.className):"")},e.animation),{},{children:[(0,d.jsx)(c.tq,(0,l.Z)((0,l.Z)({ref:t,slidesPerView:4,spaceBetween:20,loop:!0,className:e.theme,modules:[r.W_,r.tl,r.pt]},e.carouselOption),{},{children:e.data.map((function(t,i){return function(e,t,i){return"client-logo-style-06"===e.theme?(0,d.jsx)(c.o5,{children:(0,d.jsx)("a",{target:t.target,"aria-label":"clientlogo",href:t.link?t.link:"#",children:t.img&&(0,d.jsx)("img",{width:"",height:"",alt:"clientlogo",src:t.img})})},i):(0,d.jsx)(c.o5,{children:(0,d.jsx)("div",{className:"client-box",children:(0,d.jsx)("a",{target:t.target,"aria-label":"clientlogo",href:t.link?t.link:"#",children:(0,d.jsx)("img",{width:"",height:"",src:t.img,alt:"clientlogo"})})})},i)}(e,t,i)}))})),e.carouselOption.navigation&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{onClick:function(){return t.current.swiper.slidePrev()},className:"swiper-button-prev absolute"}),(0,d.jsx)("div",{onClick:function(){return t.current.swiper.slideNext()},className:"swiper-button-next absolute"})]})]})):(0,d.jsx)(s.Z,{className:"".concat(e.grid," ").concat(e.theme),children:e.data.map((function(t,i){return function(e,t,i){return"client-logo-style-06"===e.theme?(0,d.jsx)(o.Z,{className:e.className,children:(0,d.jsx)("a",{target:t.target,className:"inline-block","aria-label":"clientlogo",href:t.link?t.link:"#",children:(0,d.jsx)(n.m.div,(0,l.Z)((0,l.Z)({},(0,l.Z)((0,l.Z)({},e.animation),{},{transition:{delay:i/4,duration:.8}})),{},{children:t.img&&(0,d.jsx)("img",{width:"148",height:"43",className:"w-[auto]",src:t.img,alt:"clientlogo"})}))})},i):(0,d.jsx)(o.Z,{className:e.className,children:(0,d.jsx)(n.m.div,(0,l.Z)((0,l.Z)({className:"client-box relative w-full h-full inline-block"},(0,l.Z)((0,l.Z)({},e.animation),{},{transition:{delay:i/4,duration:.8}})),{},{children:(0,d.jsx)("a",{target:t.target,"aria-label":"clientlogo",href:t.link?t.link:"#",children:(0,d.jsx)("img",{className:"relative w-[auto]",width:"148",height:"43",src:t.img,alt:"clientlogo"})})}))},i)}(e,t,i)}))})};p.defaultProps={data:m.jR,animationDelay:.2,theme:"client-logo-style-01"},t.Z=(0,a.memo)(p)},46138:function(e,t,i){i.d(t,{LU:function(){return o},Qm:function(){return n},UC:function(){return m},YL:function(){return s},jR:function(){return a},rd:function(){return c},sF:function(){return r},tg:function(){return l}});var l=[{img:"https://lithohtml.themezaa.com/images/client-logo-35.png",target:"_self",link:"#"},{img:"https://lithohtml.themezaa.com/images/client-logo-37.png",target:"_self",link:"#"},{img:"https://lithohtml.themezaa.com/images/client-logo-33.png",target:"_self",link:"#"},{img:"https://lithohtml.themezaa.com/images/client-logo-36.png",target:"_self",link:"#"},{img:"https://via.placeholder.com/225x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/225x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/225x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/225x110",target:"_self",link:"#"}],a=[{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"}],o=[{img:"https://via.placeholder.com/400x160",target:"_self",link:"#"},{img:"https://via.placeholder.com/400x160",target:"_self",link:"#"},{img:"https://via.placeholder.com/400x160",target:"_self",link:"#"},{img:"https://via.placeholder.com/400x160",target:"_self",link:"#"}],s=[{img:"https://via.placeholder.com/120x60",target:"_self",link:"#"},{img:"https://via.placeholder.com/120x60",target:"_self",link:"#"},{img:"https://via.placeholder.com/120x60",target:"_self",link:"#"},{img:"https://via.placeholder.com/120x60",target:"_self",link:"#"},{img:"https://via.placeholder.com/120x60",target:"_self",link:"#"}],n=[{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"}],c=[{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"}],r=[{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"},{img:"https://via.placeholder.com/232x110",target:"_self",link:"#"}],m=[{img:"https://via.placeholder.com/80x92"},{img:"https://via.placeholder.com/80x92"},{img:"https://via.placeholder.com/80x92"},{img:"https://via.placeholder.com/80x92"}]},13187:function(e,t,i){var l=i(1413),a=i(29439),o=i(72791),s=i(11087),n=i(34290),c=i(58563),r=i(51496),m=i(83992),d=i(39555),p=i(80184),f=function(e){var t=(0,o.useRef)(),d=(0,o.useRef)(),f=(0,o.useState)(!0),h=(0,a.Z)(f,2),g=h[0],x=h[1];(0,o.useEffect)((function(){if(!0!==e.carousel){var l=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(l).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.onload=e.onerror=t}))}))).then((function(){Promise.resolve().then(i.bind(i,38480)).then((function(e){e.initializeIsotop(t.current).on("arrangeComplete",(function(){return x(!1)}))}))}))}}),[]);return(0,p.jsxs)("div",{className:"grid-wrapper",children:[(0,p.jsx)(m.Z,{title:e.title,filterData:e.filterData,onFilterChange:function(){t.current.querySelectorAll("li").forEach((function(e){var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),!0===e.carousel?(0,p.jsx)(c.tq,(0,l.Z)((0,l.Z)({modules:[r.tl,r.pt]},e.carouselOption),{},{className:"".concat(e.className?" ".concat(e.className):""),ref:d,children:e.data.map((function(t,i){return(0,p.jsx)(c.o5,{children:(0,p.jsx)(n.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,p.jsx)(s.rU,{"aria-label":"link for filter content",target:e.target,to:t.link,children:(0,p.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[i]:e.overlay},children:(0,p.jsxs)("div",{className:"portfolio-image",children:[t.img&&(0,p.jsx)("img",{className:"w-full",src:t.img,height:675,width:540,alt:"portfolio-colorful"}),(0,p.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,p.jsxs)("div",{className:"portfolio-content",children:[t.subtitle&&(0,p.jsx)("span",{className:"text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:t.subtitle}),t.title&&(0,p.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:t.title})]}),(0,p.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},i)}))})):(0,p.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(g?" loading":""),children:[(0,p.jsx)("li",{className:"grid-sizer"}),e.data.map((function(t,i){return(0,p.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category?t.category.toString().split(",").join(" ").toLowerCase():""),children:(0,p.jsx)(n.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:!g&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,p.jsx)(s.rU,{"aria-label":"link for filter content",to:t.link,children:(0,p.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[i]:e.overlay},children:(0,p.jsxs)("div",{className:"portfolio-image",children:[t.img&&(0,p.jsx)("img",{className:"w-full",height:572,width:458,src:t.img,alt:"portfolio-box"}),(0,p.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,p.jsxs)("div",{className:"portfolio-content",children:[t.subtitle&&(0,p.jsx)("span",{className:" text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:t.subtitle}),t.title&&(0,p.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:t.title})]}),(0,p.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},i)}))]})]})};f.defaultProps={data:d.x0},t.Z=(0,o.memo)(f)},29213:function(e,t,i){i.r(t),i.d(t,{default:function(){return r}});var l=i(1413),a=i(72791),o=i(34290),s=i(96006),n=i(80184),c=function(e){return(0,n.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map((function(t,i){return"social-icon-style-11"!==e.theme?(0,n.jsx)(o.m.li,(0,l.Z)((0,l.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,l.Z)((0,l.Z)({},e.animation),{},{transition:{delay:i*e.animationDelay}})),{},{children:(0,n.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,n.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,n.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,n.jsx)("span",{})]})}),i):(0,n.jsx)(o.m.li,(0,l.Z)((0,l.Z)({style:{"--social-icon-color":t.color?t.color:"#000"}},(0,l.Z)((0,l.Z)({},e.animation),{},{transition:{delay:i*e.animationDelay}})),{},{children:(0,n.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,n.jsx)("div",{className:"social-back",children:(0,n.jsx)("span",{children:t.socialback})}),(0,n.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,n.jsx)("i",{className:t.icon}),t.name&&(0,n.jsx)("span",{children:t.name?t.name:"icon"})]})]})}),i)}))})};c.defaultProps={data:s.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};var r=(0,a.memo)(c)},96006:function(e,t,i){i.d(t,{Fg:function(){return n},JV:function(){return h},Q6:function(){return r},Tq:function(){return s},X_:function(){return a},Xy:function(){return m},gE:function(){return p},k9:function(){return c},kJ:function(){return d},mc:function(){return l},y:function(){return o},zm:function(){return f}});var l=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],a=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],o=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],h=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},61158:function(e,t,i){i.r(t);var l=i(1413),a=(i(72791),i(2677)),o=i(24552),s=i(47022),n=i(89743),c=i(11087),r=i(58563),m=i(51496),d=i(34290),p=i(38392),f=i(13187),h=i(67250),g=i(43739),x=i(96158),b=i(29213),u=i(54198),w=i(49823),k=i(25705),j=i(21240),v=i(46138),N=i(90013),y=i(19630),Z=i(80184),F=[{color:"#cc754c",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#cc754c",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#cc754c",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#cc754c",link:"https://dribbble.com/",icon:"fab fa-dribbble"}],_=[{img:"https://via.placeholder.com/1920x1160",firsttitle:"Browne",secondtitle:"coffee",link:"/portfolio/single-project-page-01"},{img:"https://via.placeholder.com/1920x1160",firsttitle:"Nature",secondtitle:"travel",link:"/portfolio/single-project-page-02"},{img:"https://via.placeholder.com/1920x1160",firsttitle:"Black",secondtitle:"shade",link:"/portfolio/single-project-page-03"}],S=[{title:"Mongolish",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-01",double_col:!0},{title:"Masscoating",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Photography",link:"/portfolio/single-project-page-02"},{title:"Cortifiel",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-03"},{title:"Everyday",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-04",double_col:!0},{title:"Scandinavian",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-05"},{title:"The Simplest",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Website",link:"/portfolio/single-project-page-01"}],I=[{content:"Absolutely amazing theme, flexible and awesome design with possibilities. It's so easy to use and to customize. Simply the great designs and best theme for WooCommerce.",firstname:"Lindsay",lastname:"swanson",post:"creative director"},{content:"I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy. I wanted to hire the best and after looking at several other companies.",firstname:"Jeremy",lastname:"dupont",post:"Creative director"},{content:"This theme has a wide variety of options and a really good customer support. Some of the customizations are limited but even so the theme still gives a lot of features while prioritizing web.",firstname:"Alexander",lastname:"harvard",post:"creative director"},{content:"I wanted to hire the best and after looking at several other companies, I knew Jacob was the perfect guy. I wanted to hire the best and after looking at several other companies.",firstname:"Herman",lastname:"miller",post:"creative director"}],L=y.qm.filter((function(e){return"metro"===e.blogType})).filter((function(e){return e.category.includes("creativeagency")})),A=[N.Z[0],N.Z[3]];t.default=function(e){return(0,Z.jsxs)("div",{className:"pl-[290px] md:pl-0 bg-[#101010] overflow-hidden",style:e.style,children:[(0,Z.jsx)(w.default,{}),(0,Z.jsxs)(p.default,{topSpace:{md:!0},type:"pos-left",className:"w-[290px] h-[100vh] z-10 md:w-full md:h-auto",children:[(0,Z.jsxs)("div",{className:"flex justify-between flex-col h-full bg-[#101010] border-r border-[#ffffff1a] pt-20 px-8 overflow-hidden md:pt-40 md:hidden",children:[(0,Z.jsx)(a.Z,{xs:"auto",className:"text-center leading-none",children:(0,Z.jsx)(c.rU,{"aria-label":"header logo",to:"/",className:"inline-block leading-none",children:(0,Z.jsxs)(o.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,Z.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-copper-red-white.webp","data-rjs":"/assets/img/webp/logo-copper-red-white.webp",alt:"logo"}),(0,Z.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-copper-red-black.webp","data-rjs":"/assets/img/webp/logo-copper-red-black.webp",alt:"logo"})]})})}),(0,Z.jsx)(a.Z,{xs:"auto",className:"pl-[15px] max-h-[calc(100%-160px)]",children:(0,Z.jsx)(k.default,{className:"!items-start",autoHide:!0,theme:"light",children:(0,Z.jsx)("div",{children:(0,Z.jsx)(p.CollapsibleMenu,{className:"left-sidebar-menu w-full",theme:"light"})})})}),(0,Z.jsxs)(a.Z,{xs:"auto",className:"mb-20",children:[(0,Z.jsx)("div",{className:"my-8",children:(0,Z.jsx)(b.default,{theme:"social-icon-style-01",className:"justify-center",size:"sm",iconColor:"light",data:F})}),(0,Z.jsxs)("span",{className:"block text-center text-xs text-spanishgray",children:["\xa9 ",(new Date).getFullYear()," LITHO"]})]})]}),(0,Z.jsxs)(p.HeaderNav,{className:"hidden md:flex justify-between px-[30px] sm:pl-[15px] md:py-[15px]",bg:"white",theme:"light",containerClass:"px-0",children:[(0,Z.jsx)(c.rU,{className:"flex items-center justify-center",to:"/",children:(0,Z.jsx)(o.Z.Brand,{className:"inline-block p-0 m-0",children:(0,Z.jsx)("img",{src:"/assets/img/webp/logo-copper-red-black@2x.webp",className:"max-h-[36px]",alt:"logo"})})}),(0,Z.jsx)(p.HamburgerMenu,{theme:"dark",position:"left",className:"w-[290px] flex flex-col justify-end !top-[var(--header-height)]",closeBtn:!1,children:(0,Z.jsx)("div",{className:"bg-[#101010] px-8 pb-20",style:{height:"calc(100vh - var(--header-height))"},children:(0,Z.jsx)(k.default,{autoHide:!0,className:"pl-[15px] mt-[50px] !items-start",children:(0,Z.jsxs)("div",{children:[(0,Z.jsx)(p.CollapsibleMenu,{className:"w-full left-sidebar-menu",theme:"light"}),(0,Z.jsxs)("div",{className:"mt-[60px]",children:[(0,Z.jsx)(b.default,{theme:"social-icon-style-01",className:"justify-center mb-8 text-center",size:"sm",iconColor:"light",data:F}),(0,Z.jsxs)("span",{className:"block text-center text-xs mb-[165px] text-spanishgray",children:["\xa9 ",(new Date).getFullYear()," LITHO"]})]})]})})})})]})]}),(0,Z.jsx)("section",{className:"p-0 overflow-hidden",children:(0,Z.jsx)(r.tq,{style:{cursor:"url(/assets/img/webp/icon-move-light.webp)"},modules:[m.tl,m.N1,m.pt],slidesPerView:1,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{clickable:!0},autoplay:{delay:2e3,disableOnInteraction:!1},direction:"horizontal",breakpoints:{991:{direction:"vertical"}},className:"full-screen swiper-pagination-01 swiper-pagination-light swiper-pagination-medium landscape:md:h-[600px] vertical-white-move",children:_.map((function(e,t){return(0,Z.jsxs)(r.o5,{className:"bg-no-repeat bg-cover relative overflow-hidden bg-center",style:{backgroundImage:"url(".concat(e.img,")")},children:[(0,Z.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-transparent-gradient-smoky-black bg-right opacity-1"}),(0,Z.jsx)(s.Z,{className:"h-full",children:(0,Z.jsx)(n.Z,{className:"flex flex-col justify-center h-full",children:(0,Z.jsxs)(a.Z,{xs:10,xl:7,md:7,sm:6,lg:8,className:"relative flex flex-column justify-center text-start py-[7rem] h-[100vh] md:h-[60vh]",children:[(0,Z.jsxs)("h1",{className:"font-serif font-light text-[130px] text-white leading-[120px] tracking-[-6px] lg:text-[110px] lg:leading-[100px] md:text-[90px] md:leading-[85px] sm:text-[50px] sm:leading-[50px] sm:-tracking-[.5px] xs:text-[60px] xs:leading-[65px]",children:[(0,Z.jsx)("span",{className:"font-semibold block",children:e.firsttitle}),e.secondtitle]}),(0,Z.jsx)(c.rU,{"aria-label":"Watch projects",to:e.link?e.link:"#",className:"left-[15px] bottom-[100px] z-[100] absolute md:bottom-[50px] sm:bottom-0",children:(0,Z.jsxs)("span",{className:"flex items-center text-center hover:text-[#828282]",children:[(0,Z.jsx)("span",{className:"w-[50px] h-[50px] text-lg relative flex justify-center items-center rounded-[50%] mr-[25px] border-[2px] border-[#cc754c4d]",children:(0,Z.jsx)("i",{className:"fas fa-arrow-right text-basecolor flex items-center justify-center text-xmd leading-normal ml-0"})}),(0,Z.jsx)("span",{className:"text-white font-medium text-xmd font-serif uppercase inline-block align-middle",children:"Watch projects"})]})})]})})})]},t)}))})}),(0,Z.jsx)("section",{className:"py-[200px] overflow-hidden lg:py-[160px] md:py-[110px] sm:py-[50px]",children:(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)(n.Z,{children:[(0,Z.jsx)(a.Z,{md:5,children:(0,Z.jsx)("span",{className:"font-semibold text-basecolor text-xmd font-serif uppercase tracking-[1px] block sm:mb-[20px]",children:"Award winning agency"})}),(0,Z.jsxs)(a.Z,{md:7,children:[(0,Z.jsxs)(d.m.h2,(0,l.Z)((0,l.Z)({className:"heading-5 leading-[50px] font-serif mb-[74px] w-[95%] sm:w-full md:mb-[45px] lg:leading-normal"},j.Ji),{},{children:[(0,Z.jsx)("span",{className:"font-semibold text-[#fff]",children:"We believe very strongly "}),"in making high caliber expertise available to our small business clients empowering them to achieve growth."]})),(0,Z.jsxs)(d.m.div,(0,l.Z)((0,l.Z)({className:"row"},(0,l.Z)((0,l.Z)({},j.Ji),{},{transition:{delay:.5}})),{},{children:[(0,Z.jsxs)(a.Z,{xl:5,md:6,className:"sm:mb-[40px]",children:[(0,Z.jsx)("div",{className:"h-[1px] bg-basecolor w-full inline-block mb-[49px] md:mb-[30px]"}),(0,Z.jsx)("span",{className:"mb-[15px] font-medium text-white text-lg font-serif block md:text-xmd",children:"Branding"}),(0,Z.jsx)("p",{className:"mb-0 w-[95%] leading-[30px] text-xmd",children:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor."})]}),(0,Z.jsxs)(a.Z,{xl:{span:5,offset:2},md:6,children:[(0,Z.jsx)("div",{className:"h-[1px] bg-basecolor w-full inline-block mb-[49px] md:mb-[30px]"}),(0,Z.jsx)("span",{className:"mb-[15px] font-medium text-white text-lg font-serif block md:text-xmd",children:"Digital"}),(0,Z.jsx)("p",{className:"mb-0 w-[95%] leading-[30px] text-xmd",children:"Lorem ipsum dolor consectetur adipiscing eiusmod tempor."})]})]}))]})]})})}),(0,Z.jsx)("section",{children:(0,Z.jsx)(s.Z,{fluid:!0,className:"px-0",children:(0,Z.jsx)(n.Z,{children:(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(f.Z,{className:"m-0",overlay:"#d96f41e6",grid:"grid grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col text-center",data:S})})})})}),(0,Z.jsx)("section",{className:"py-[200px] lg:py-[160px] md:py-[110px] sm:py-[50px]",children:(0,Z.jsxs)(s.Z,{children:[(0,Z.jsxs)(d.m.div,(0,l.Z)((0,l.Z)({className:"row"},j.Ji),{},{children:[(0,Z.jsx)(a.Z,{md:5,className:"sm:mb-[20px]",children:(0,Z.jsx)("span",{className:"font-semibold text-basecolor text-xmd font-serif uppercase block tracking-[1px]",children:"Valuable clients"})}),(0,Z.jsx)(a.Z,{md:7,children:(0,Z.jsxs)("h2",{className:"heading-5 w-[95%] leading-[50px] font-serif md:leading-normal md:w-[90%] md:mb-0",children:["Your most",(0,Z.jsx)("span",{className:"font-semibold text-white",children:" unhappy customers "}),"are your greatest source of learning"]})})]})),(0,Z.jsx)(n.Z,{className:"mt-[9.5rem] justify-center lg:mt-24",children:(0,Z.jsx)(h.Z,{grid:"row-cols-1 row-cols-sm-2 row-cols-md-4",theme:"client-logo-style-06",data:v.rd,animation:j.Ji})})]})}),(0,Z.jsx)("section",{className:"py-[200px] lg:py-[160px] md:py-[110px] sm:py-[50px] cover-background",style:{backgroundImage:"url(/assets/img/webp/home-creative-agency-testimonials-bg.webp)"},children:(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)(d.m.div,(0,l.Z)((0,l.Z)({className:"row"},j.Ji),{},{children:[(0,Z.jsx)(a.Z,{md:5,className:"md:mb-[20px]",children:(0,Z.jsx)("span",{className:"font-semibold text-basecolor text-xmd font-serif uppercase block tracking-[1px]",children:"Proud testimonials"})}),(0,Z.jsx)(a.Z,{md:7,children:(0,Z.jsx)(r.tq,{className:"testimonial-carousel-style-05",loop:!0,slidesPerView:1,modules:[m.pt],autoplay:{delay:2500,disableOnInteraction:!1},children:I.map((function(e,t){return(0,Z.jsx)(r.o5,{children:(0,Z.jsxs)("div",{className:"cursor-ew-resize",children:[e.content&&(0,Z.jsx)("h2",{className:"heading-6 w-[92%] mb-28 leading-[44px] font-serif sm:leading-[34px] sm:w-full sm:mb-16",children:e.content}),(0,Z.jsxs)("h3",{className:"heading-6 font-light text-white mb-[5px] md:leading-normal",children:[(0,Z.jsx)("span",{className:"font-semibold",contentEditable:!1,children:e.firstname})," ",e.lastname]}),e.post&&(0,Z.jsx)("span",{className:"text-lg font-serif",children:e.post})]})},t)}))})})]}))})}),(0,Z.jsxs)("section",{className:"pt-[200px] lg:pt-[160px] md:pt-[110px] sm:pt-[50px]",children:[(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)(n.Z,{className:"mb-[108px] justify-between sm:flex-col sm:mb-[40px] xs:mb-[4.5rem]",children:[(0,Z.jsx)(a.Z,{xs:"auto",className:"xs:mb-[20px]",children:(0,Z.jsx)("span",{className:"font-semibold text-basecolor text-xmd tracking-[1px] font-serif uppercase inline-block",children:"Latest blogs"})}),(0,Z.jsx)(a.Z,{xs:"auto",children:(0,Z.jsx)(g.default,{ariaLabel:"blog-metro",to:"/blogs/blog-metro",className:"font-medium font-serif uppercase btn-link after:h-[1px] sm:text-left md:mb-[15px] after:bg-spanishgray hover:text-spanishgray xs:mb-0",size:"xl",color:"#939393",title:"Explore blog"})})]})}),(0,Z.jsx)(s.Z,{fluid:!0,className:"px-12 xs:px-0",children:(0,Z.jsx)(x.Z,{grid:"grid grid-4col xl-grid-4col lg-grid-2col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:L})}),(0,Z.jsx)(s.Z,{fluid:!0,children:(0,Z.jsx)(n.Z,{children:(0,Z.jsx)(a.Z,{xs:12,className:"text-center my-[10.5rem] md:my-[7.5rem]",children:(0,Z.jsxs)("h2",{className:"heading-5 font-serif font-light -tracking-[1px]",children:["Are you ready to work with us? ",(0,Z.jsx)(c.rU,{"aria-label":"start a project",className:"ml-[4px] relative font-semibold text-basecolor hover:text-white cursor-pointer -tracking-[1px] font-serif border-b-[1px] border-basecolor hover:border-white",to:"/page/contact-modern",children:"start a project"})]})})})})]}),(0,Z.jsxs)(u.Footer,{parallax:{desktop:!1,md:!1},theme:"dark",className:"creative-footer border-t border-[#ffffff1a]",children:[(0,Z.jsx)("div",{className:"pt-[9%] lg:py-[8%] md:py-[50px]",children:(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)(n.Z,{className:"justify-start md:text-start",children:[(0,Z.jsxs)(a.Z,{xl:{span:3,order:0},md:6,sm:{span:6,order:1},className:"lg:mb-[50px] xs:mb-[25px]",children:[(0,Z.jsx)(c.rU,{"aria-label":"Follow",to:"/",className:"mb-[40px] block",children:(0,Z.jsx)("img",{src:"/assets/img/webp/logo-copper-red.webp",alt:"logo",width:"45",height:"52",className:"max-h-min"})}),(0,Z.jsx)("p",{className:"font-serif font-light w-[85%] mb-0 md:w-[80%] sm:w-[85%] text-xlg leading-[36px] -tracking-[0.5px] xs:w-11/12 text-[#828282] lg:text-lg lg:leading-[26px]",children:"We create experiences for brands companies by using creativity."})]}),(0,Z.jsx)(u.default,{data:A,xl:{span:2,order:0,offset:1},sm:{span:6,order:3},titleClass:"uppercase",className:"xs:mb-[25px]"}),(0,Z.jsxs)(a.Z,{xs:11,xl:{span:2,offset:1,order:0},md:6,sm:{span:6,order:2},children:[(0,Z.jsx)("span",{className:"font-serif tracking-[2px] uppercase font-medium block text-white mb-[30px] text-left",children:"Follow us"}),(0,Z.jsx)(b.default,{theme:"social-icon-style-01",className:"justify-start flex",size:"xs",iconColor:"light",data:F})]})]})})}),(0,Z.jsx)("div",{className:"py-[8%] xs:pt-0 xs:px-0",children:(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)(n.Z,{children:[(0,Z.jsx)(a.Z,{sm:{span:12,order:2},md:{span:6,order:1},xs:{order:2},className:"text-start flex sm:justify-center md:text-end xs:justify-start",children:(0,Z.jsxs)("p",{className:"text-xmd",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,Z.jsx)("a",{"aria-label":"footer link",href:"https://www.themezaa.com/",target:"_blank",rel:"noreferrer",className:"text-decoration-line-bottom text-xmd text-white",children:"ThemeZaa"})]})}),(0,Z.jsx)(a.Z,{sm:{span:12,order:1},md:{span:6,order:2},xs:{order:1},className:"sm:mb-[15px]",children:(0,Z.jsxs)("ul",{className:"flex justify-end sm:justify-center xs:flex-col",children:[(0,Z.jsx)("li",{className:"mr-[35px] md:mr-[20px] xl:mb-0 xs:mb-[7px]",children:(0,Z.jsx)(c.rU,{className:"text-xmd leading-[34px]","aria-label":"Privacy policy",to:"#",children:"Privacy policy"})}),(0,Z.jsx)("li",{className:"mr-[35px] md:mr-[20px] xl:mb-0 xs:mb-[7px]",children:(0,Z.jsx)(c.rU,{className:"text-xmd leading-[34px]","aria-label":"Legal",to:"#",children:"Legal"})}),(0,Z.jsx)("li",{className:"mr-[0px] xl:mb-0",children:(0,Z.jsx)(c.rU,{className:"text-xmd leading-[34px]","aria-label":"Terms of service",to:"#",children:"Terms of service"})})]})})]})})})]})]})}}}]);
//# sourceMappingURL=1158.86b151e2.chunk.js.map