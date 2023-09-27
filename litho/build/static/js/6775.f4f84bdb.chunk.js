"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[6775,3739],{43739:function(e,s,t){t.r(s),t.d(s,{default:function(){return x}});var a=t(1413),r=t(72791),l=t(11087),n=t(43360),o=t(80184),c=function(e){var s=e.themeColor&&e.themeColor[0],t=e.themeColor&&e.themeColor[1],r=e.color&&e.color[0],c=e.color&&e.color[1],x={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(s,", ").concat(t,", ").concat(s,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(r,", ").concat(c,", ").concat(r,")"):e.color};return e.href||"submit"===e.type?(0,o.jsx)(n.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:x,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,o.jsx)(i,(0,a.Z)({},e))}):(0,o.jsx)(l.rU,{style:x,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,o.jsx)(i,(0,a.Z)({},e))})},i=function(e){return(0,o.jsxs)(o.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,o.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,o.jsx)("span",{})]})};c.defaultProps={size:"lg",style:"primary"};var x=(0,r.memo)(c)},86775:function(e,s,t){t.r(s);var a=t(1413),r=t(74165),l=t(15861),n=t(72791),o=t(47022),c=t(89743),i=t(2677),x=t(28007),d=t(11087),m=t(34290),p=t(71856),u=t(55705),f=t(21240),b=t(38480),h=t(43739),y=t(17728),j=t(7984),g=t(28033),N=t(80184);s.default=function(){var e=(0,n.useRef)(null),s=(0,n.useRef)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,N.jsx)(o.Z,{children:(0,N.jsxs)(c.Z,{className:"items-center justify-center mb-0",children:[(0,N.jsx)(i.Z,{xl:8,lg:6,children:(0,N.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Contact form"})}),(0,N.jsx)(i.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,N.jsxs)("ul",{className:"xs-text-center",children:[(0,N.jsx)("li",{children:(0,N.jsx)(d.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,N.jsx)("li",{children:(0,N.jsx)(d.rU,{to:"#","aria-label":"breadcrumb",onClick:function(e){return e.preventDefault()},className:"hover:text-white",children:"Elements"})}),(0,N.jsx)("li",{children:"Contact form"})]})})]})})}),(0,N.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[80px] xs:py-[50px]"},f.Ji),{},{children:(0,N.jsxs)(o.Z,{children:[(0,N.jsx)(c.Z,{children:(0,N.jsx)(i.Z,{className:"mb-[6%]",children:(0,N.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Contact form style 01"})})}),(0,N.jsx)(c.Z,{className:"justify-center",children:(0,N.jsx)(i.Z,{xl:5,lg:10,md:10,children:(0,N.jsx)(u.J9,{initialValues:{name:"",email:"",phone:"",comment:"",recaptcha:""},validationSchema:j.ye,onSubmit:function(){var e=(0,l.Z)((0,r.Z)().mark((function e(t,a){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setSubmitting(!0),""===t.recaptcha){e.next=8;break}return e.next=4,(0,b.sendEmail)(t);case 4:"success"===e.sent.status&&(0,b.resetForm)(a,s),e.next=9;break;case 8:s.current.captcha.classList.add("error");case 9:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(t){var a=t.isSubmitting,r=t.status,l=t.setFieldValue;return(0,N.jsxs)(u.l0,{ref:e,children:[(0,N.jsx)(y.II,{showErrorMsg:!1,name:"name",type:"text",className:"py-[18px] px-[25px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your name",labelClass:"mb-[25px]"}),(0,N.jsx)(y.II,{showErrorMsg:!1,name:"email",type:"email",className:"py-[18px] px-[25px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your email address",labelClass:"mb-[25px]"}),(0,N.jsx)(y.II,{showErrorMsg:!1,name:"phone",type:"tel",className:"py-[18px] px-[25px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Mobile number",labelClass:"mb-[25px]"}),(0,N.jsx)(y.Kx,{className:"mb-[35px] pt-[22px] px-[25px] pb-[32px] w-full border-[1px] border-solid border-[#dfdfdf] resize-none",name:"comment",rows:"5",placeholder:"How can we help you?"}),{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GRECAPTCHA_API_KEY&&(0,N.jsx)(x.Z,{ref:s,className:"mb-[35px]",sitekey:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GRECAPTCHA_API_KEY,onChange:function(e){l("recaptcha",e)}}),(0,N.jsx)(h.default,{ariaLabel:"form button",type:"submit",className:"font-medium font-serif rounded-none uppercase text-[11px]".concat(a?" loading":""),themeColor:["#0039e3","#8600d4"],size:"md",color:"#fff",title:"send message"}),(0,N.jsx)(p.M,{children:r&&(0,N.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,N.jsx)(g.default,{className:"mt-[35px] py-[10px] tracking-[1px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})]})}})})})]})})),(0,N.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] bg-cover\tbg-no-repeat overflow-hidden relative bg-center lg:py-[120px] md:py-[95px] xs:py-[80px] xxs:py-[50px]",style:{backgroundImage:"url('https://via.placeholder.com/1920x857')"}},f.Ji),{},{children:(0,N.jsx)(o.Z,{className:"xs:px-0",children:(0,N.jsx)(c.Z,{className:"justify-end md:justify-center",children:(0,N.jsx)(i.Z,{xl:7,lg:7,md:9,sm:11,children:(0,N.jsxs)("div",{className:"px-[7rem] py-[5rem] rounded-md shadow-[0_0_30px_rgb(0,0,0,0.08)] bg-white sm:p-20 xs:rounded-none xs:px-[3.5rem] xs:py-[6rem]",children:[(0,N.jsx)("span",{className:"mb-[15px] font-medium text-center text-[#8bb867] text-md font-serif uppercase block sm:mb-[10px]",children:"Request a call back"}),(0,N.jsx)("h5",{className:"w-[80%] mb-[40px] font-bold text-center\ttracking-[-1px] text-black font-serif uppercase mx-auto xs:w-full",children:"Need a consultant for your business?"}),(0,N.jsx)(u.J9,{initialValues:{name:"",email:""},validationSchema:j.ye,onSubmit:function(){var e=(0,l.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,b.sendEmail)(s);case 3:"success"===e.sent.status&&(0,b.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,N.jsxs)(u.l0,{className:"mb-[30px]",children:[(0,N.jsx)(y.II,{showErrorMsg:!1,type:"text",name:"name",labelClass:"mb-[25px]",className:"rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your name"}),(0,N.jsx)(y.II,{showErrorMsg:!1,type:"email",name:"email",labelClass:"mb-[25px]",className:"rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]",placeholder:"Your email address"}),(0,N.jsx)(h.default,{ariaLabel:"form button",type:"submit",className:"btn-fill text-sm leading-none font-medium tracking-[1px] py-[13px] px-[32px] rounded-[4px] w-full uppercase mb-[5px]".concat(s?" loading":""),themeColor:"#8bb867",color:"#fff",size:"lg",title:"Request a call schedule"}),(0,N.jsx)(p.M,{children:t&&(0,N.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,N.jsx)(g.default,{className:"mt-[20px] text-center py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})]})}}),(0,N.jsx)("p",{className:"w-[80%] text-xs leading-6 mx-auto xs:w-full text-center",children:"We are committed to protecting your privacy. We will never collect information about you without your explicit consent."})]})})})})})),(0,N.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] lg:py-[120px] md:py-[75px] sm:py-[50px] xs:py-[80px] xxs:py-[50px]"},f.Ji),{},{children:(0,N.jsxs)(o.Z,{children:[(0,N.jsx)(c.Z,{children:(0,N.jsx)(i.Z,{className:"mb-[6%]",children:(0,N.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-[25px] lg:mb-[15px]",children:"Contact form style 03"})})}),(0,N.jsx)(c.Z,{className:"justify-center",children:(0,N.jsx)(i.Z,{children:(0,N.jsx)(u.J9,{initialValues:{name:"",email:"",phone:"",terms_condition:!1},validationSchema:j.rs,onSubmit:function(){var e=(0,l.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,b.sendEmail)(s);case 3:"success"===e.sent.status&&(0,b.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,N.jsxs)(u.l0,{children:[(0,N.jsxs)(c.Z,{className:"row-cols-1 row-cols-md-2",children:[(0,N.jsxs)(i.Z,{className:"mb-16 lg:mb-[25px] sm:mb-0",children:[(0,N.jsx)(y.II,{showErrorMsg:!1,type:"text",name:"name",className:"py-[15px] px-[20px] text-md w-full border-[1px] border-solid border-[#dfdfdf]",labelClass:"mb-[25px]",placeholder:"Your name"}),(0,N.jsx)(y.II,{showErrorMsg:!1,type:"email",name:"email",className:"py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]",labelClass:"mb-[25px]",placeholder:"Your email address"}),(0,N.jsx)(y.II,{showErrorMsg:!1,type:"tel",name:"phone",className:"py-[15px] px-[20px] w-full text-md border-[1px] border-solid border-[#dfdfdf]",labelClass:"sm:mb-[25px]",placeholder:"Mobile number"})]}),(0,N.jsx)(i.Z,{className:"mb-16 lg:mb-[25px]",children:(0,N.jsx)(y.Kx,{className:"border-[1px] border-solid border-[#dfdfdf] w-full h-full py-[15px] px-[20px] text-md resize-none",name:"comment",labelClass:"h-full sm:h-[200px]",placeholder:"Your message"})}),(0,N.jsx)(i.Z,{className:"text-left sm:mb-[20px]",children:(0,N.jsx)(y.XZ,{type:"checkbox",name:"terms_condition",className:"inline-block mt-[4px]",labelClass:"flex items-start",children:(0,N.jsxs)("span",{className:"ml-[10px] text-sm w-[85%] md:w-[90%] xs:w-[85%]",children:["I accept the terms & conditions and I understand that my data will be hold securely in accordance with the\xa0",(0,N.jsx)(d.rU,{to:"/privacy",target:"_blank",className:"text-darkgray underline hover:text-fastblue",children:"privacy policy"}),"."]})})}),(0,N.jsx)(i.Z,{className:"text-right sm:text-center",children:(0,N.jsx)(h.default,{ariaLabel:"form button",type:"submit",className:"text-xs tracking-[1px] rounded-none py-[12px] px-[28px] uppercase".concat(s?" loading":""),themeColor:["#556fff","#ff798e"],size:"md",color:"#fff",title:"Send Message"})})]}),(0,N.jsx)(p.M,{children:t&&(0,N.jsx)(c.Z,{children:(0,N.jsx)(i.Z,{xs:12,children:(0,N.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,N.jsx)(g.default,{className:"mt-[20px] py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})})})]})}})})})]})})),(0,N.jsx)(m.m.section,(0,a.Z)((0,a.Z)({className:"py-[160px] bg-darkslateblue lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]"},f.Ji),{},{children:(0,N.jsxs)(o.Z,{children:[(0,N.jsx)(c.Z,{children:(0,N.jsx)(i.Z,{className:"mb-[6%]",children:(0,N.jsx)("h6",{className:"font-serif text-white text-center font-medium mb-[25px] lg:mb-[15px]",children:"Contact form style 04"})})}),(0,N.jsx)(c.Z,{className:"justify-center",children:(0,N.jsx)(i.Z,{xl:5,lg:10,md:10,className:"xs:px-[15px]",children:(0,N.jsx)(u.J9,{initialValues:{name:"",email:"",phone:""},validationSchema:j.ye,onSubmit:function(){var e=(0,l.Z)((0,r.Z)().mark((function e(s,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setSubmitting(!0),e.next=3,(0,b.sendEmail)(s);case 3:"success"===e.sent.status&&(0,b.resetForm)(t);case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),children:function(e){var s=e.isSubmitting,t=e.status;return(0,N.jsxs)(u.l0,{children:[(0,N.jsx)(y.II,{showErrorMsg:!1,type:"text",name:"name",labelClass:"mb-[25px]",className:"pt-[20px] pr-[36px] pb-[23px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px]",placeholder:"Your name"}),(0,N.jsx)(y.II,{showErrorMsg:!1,type:"email",name:"email",labelClass:"mb-[25px]",className:"pt-[20px] pr-[36px] pb-[23px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px]",placeholder:"Your email address"}),(0,N.jsx)(y.II,{showErrorMsg:!1,type:"tel",name:"phone",labelClass:"mb-[25px]",className:"pt-[20px] pr-[36px] pb-[23px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px]",placeholder:"Mobile number"}),(0,N.jsx)(y.Kx,{className:"mb-[35px] py-[20px] pr-[36px] w-full bg-transparent text-[#828282] border-b border-solid border-[#ffffff33] text-[16px] resize-none",rows:"6",name:"comment",placeholder:"How can we help you?"}),(0,N.jsx)(h.default,{ariaLabel:"form button",type:"submit",className:"tracking-[0.5px] rounded-none font-medium uppercase".concat(s?" loading":""),themeColor:["#556fff","#ff798e"],size:"sm",color:"#fff",title:"Send Message"}),(0,N.jsx)(p.M,{children:t&&(0,N.jsx)(m.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,N.jsx)(g.default,{className:"mt-[20px] py-[10px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully!"})})})]})}})})})]})}))]})}},43360:function(e,s,t){var a=t(1413),r=t(29439),l=t(45987),n=t(81694),o=t.n(n),c=t(72791),i=t(15341),x=t(10162),d=t(80184),m=["as","bsPrefix","variant","size","active","disabled","className"],p=c.forwardRef((function(e,s){var t=e.as,n=e.bsPrefix,c=e.variant,p=void 0===c?"primary":c,u=e.size,f=e.active,b=void 0!==f&&f,h=e.disabled,y=void 0!==h&&h,j=e.className,g=(0,l.Z)(e,m),N=(0,x.vE)(n,"btn"),w=(0,i.FT)((0,a.Z)({tagName:t,disabled:y},g)),v=(0,r.Z)(w,2),Z=v[0],C=v[1].tagName;return(0,d.jsx)(C,(0,a.Z)((0,a.Z)((0,a.Z)({},Z),g),{},{ref:s,disabled:y,className:o()(j,N,b&&"active",p&&"".concat(N,"-").concat(p),u&&"".concat(N,"-").concat(u),g.href&&y&&"disabled")}))}));p.displayName="Button",s.Z=p}}]);
//# sourceMappingURL=6775.f4f84bdb.chunk.js.map