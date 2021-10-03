(this["webpackJsonplocation-share-app"]=this["webpackJsonplocation-share-app"]||[]).push([[5],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n(19),a=n(20),c=n(24),i=n(23),o=n(0),s=n.n(o),u=n(12),l=n.n(u),d=n(14),b=n(10),j=n(13),f=(n(77),n(67)),p=n(66),O=n(60),v=n(70),h=n(21),m=n(62),y=n(22),x=n(3),g=n(78),C=n(1),w=function(){var e=Object(o.useContext)(j.a),t=Object(h.a)(),n=t.isLoading,r=t.error,a=t.sendRequest,c=t.clearError,i=Object(v.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),u=Object(b.a)(i,2),w=u[0],N=u[1],E=Object(x.g)(),T=function(){var t=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(r=new FormData).append("title",w.inputs.title.value),r.append("description",w.inputs.description.value),r.append("address",w.inputs.address.value),r.append("image",w.inputs.image.value),t.next=9,a("".concat("https://location-app-s.herokuapp.com/api","/places"),"POST",r,{Authorization:"Bearer ".concat(e.token)});case 9:E.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(C.jsxs)(s.a.Fragment,{children:[Object(C.jsx)(m.a,{error:r,onClear:c}),Object(C.jsxs)("form",{className:"place-form",onSubmit:T,children:[n&&Object(C.jsx)(y.a,{asOverlay:!0}),Object(C.jsx)(f.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(p.c)()],errorText:"Please enter a valid title.",onInput:N}),Object(C.jsx)(g.a,{center:!0,id:"image",onInput:N,errorText:"Please provide an image."}),Object(C.jsx)(f.a,{id:"description",element:"textarea",label:"Description",validators:[Object(p.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:N}),Object(C.jsx)(f.a,{id:"address",element:"input",label:"Address",validators:[Object(p.c)()],errorText:"Please enter a valid address.",onInput:N}),Object(C.jsx)(O.a,{type:"submit",disabled:!w.isValid,children:"ADD PLACE"})]})]})},N=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(C.jsx)(w,{})}}]),n}(o.Component)},58:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(58);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},60:function(e,t,n){"use strict";n(0);var r=n(8),a=(n(65),n(1));t.a=function(e){return e.href?Object(a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(a.jsx)(r.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},62:function(e,t,n){"use strict";n(0);var r=n(63),a=n(60),c=n(1);t.a=function(e){return Object(c.jsx)(r.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:Object(c.jsx)(a.a,{onClick:e.onClear,children:"Okay"}),children:Object(c.jsx)("p",{children:e.error})})}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(59),a=n(0),c=n.n(a),i=(n(64),n(9)),o=n.n(i),s=n(57),u=n(25),l=n(1),d=function(e){var t=Object(l.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(l.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(l.jsx)("h2",{children:e.header})}),Object(l.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(l.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return o.a.createPortal(t,document.getElementById("modal-hook"))};function b(e){return Object(l.jsxs)(c.a.Fragment,{children:[e.show&&Object(l.jsx)(u.a,{onClick:e.onCancel}),Object(l.jsx)(s.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(l.jsx)(d,Object(r.a)({},e))})]})}},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d}));var r=n(69),a="REQUIRE",c="MINLENGTH",i="MAXLENGTH",o="EMAIL",s=function(){return{type:a}},u=function(e){return{type:c,val:e}},l=function(){return{type:o}},d=function(e,t){var n,s=!0,u=Object(r.a)(t);try{for(u.s();!(n=u.n()).done;){var l=n.value;l.type===a&&(s=s&&e.trim().length>0),l.type===c&&(s=s&&e.trim().length>=l.val),l.type===i&&(s=s&&e.trim().length<=l.val),"MIN"===l.type&&(s=s&&+e>=l.val),"MAX"===l.type&&(s=s&&+e<=l.val),l.type===o&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){u.e(d)}finally{u.f()}return s}},67:function(e,t,n){"use strict";var r=n(10),a=n(59),c=n(0),i=(n(68),n(66)),o=n(1),s=function(e,t){switch(t.type){case"CHANGE":return Object(a.a)(Object(a.a)({},e),{},{value:t.val,isValid:Object(i.d)(t.val,t.validators)});case"TOUCH":return Object(a.a)(Object(a.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(c.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(r.a)(t,2),a=n[0],i=n[1],u=e.id,l=e.onInput,d=a.value,b=a.isValid;Object(c.useEffect)((function(){l(u,d,b)}),[u,d,b,l]);var j=function(t){i({type:"CHANGE",val:t.target.value,validators:e.validators})},f=function(){i({type:"TOUCH"})},p="input"===e.element?Object(o.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:j,onBlur:f,value:a.value}):Object(o.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:j,onBlur:f,value:a.value});return Object(o.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[Object(o.jsx)("label",{htmlFor:e.id,children:e.label}),p,!a.isValid&&a.isTouched&&Object(o.jsx)("p",{children:e.errorText})]})}},68:function(e,t,n){},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(27);function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(10),a=n(58),c=n(59),i=n(0),o=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return Object(c.a)(Object(c.a)({},e),{},{inputs:Object(c.a)(Object(c.a)({},e.inputs),{},Object(a.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},s=function(e,t){var n=Object(i.useReducer)(o,{inputs:e,isValid:t}),a=Object(r.a)(n,2),c=a[0],s=a[1];return[c,Object(i.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(i.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},77:function(e,t,n){},78:function(e,t,n){"use strict";var r=n(10),a=n(0),c=(n(79),n(60)),i=n(1);t.a=function(e){var t=Object(a.useState)(),n=Object(r.a)(t,2),o=n[0],s=n[1],u=Object(a.useState)(),l=Object(r.a)(u,2),d=l[0],b=l[1],j=Object(a.useState)(!1),f=Object(r.a)(j,2),p=f[0],O=f[1],v=Object(a.useRef)();Object(a.useEffect)((function(){if(o){var e=new FileReader;e.onload=function(){b(e.result)},e.readAsDataURL(o),console.log(e)}}),[o]);return Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("input",{id:e.id,ref:v,style:{display:"none"},type:"file",onChange:function(t){var n,r=p;t.target.files&&1===t.target.files.length?(n=t.target.files[0],s(n),O(!0),r=!0):(O(!1),r=!1),console.log(n),e.onInput(e.id,n,r)}}),Object(i.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[Object(i.jsxs)("div",{className:"image-upload__preview",children:[d&&Object(i.jsx)("img",{src:d,alt:"Preview"}),!d&&Object(i.jsx)("p",{children:"Please pick an image!"})]}),Object(i.jsx)(c.a,{type:"button",onClick:function(){v.current.click()},children:"PICK IMAGE"})]}),!p&&Object(i.jsx)("p",{children:e.errorText})]})}},79:function(e,t,n){}}]);
//# sourceMappingURL=5.8862cf5f.chunk.js.map