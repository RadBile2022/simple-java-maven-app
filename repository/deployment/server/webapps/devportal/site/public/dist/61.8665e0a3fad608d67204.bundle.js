(this.webpackJsonp=this.webpackJsonp||[]).push([[61],{5030:function(e,a,t){"use strict";t.r(a);var r=t(2),s=t.n(r),n=t(1653),o=t(48),i=t(25),d=t.n(i),l=t(1919),c=t.n(l),m=t(4988),p=t(1679),w=t(1678),u=t(1666),g=t(1656),f=t(1655),h=t(1660),P=t(22),E=t.n(P);const y=Object(u.a)(e=>({createTitle:{color:e.palette.getContrastText(e.palette.background.default)},formContent:{"& span, & div, & p, & input":{color:e.palette.getContrastText(e.palette.background.paper)}}}));function b(e){const{title:a,children:t}=e,r=y();return s.a.createElement(m.a,{width:1,mt:5},s.a.createElement(p.a,{justify:"center",container:!0,spacing:3},s.a.createElement(p.a,{item:!0,sm:6,md:4},s.a.createElement(p.a,{container:!0,spacing:4},s.a.createElement(p.a,{item:!0,md:12,className:r.createTitle},a),s.a.createElement(p.a,{item:!0,md:12,className:r.formContent},s.a.createElement(h.a,{elevation:0},t))))))}b.propTypes={title:E.a.element.isRequired,children:E.a.element.isRequired};var v=b,C=t(1819),x=t(352),M=t(1225),O=t(210),j=t(212);function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(Object(t),!0).forEach((function(a){k(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function k(e,a,t){return(a=function(e){var a=function(e,a){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:String(a)}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const F=Object(u.a)(e=>({mandatoryStarText:{"& label>span:nth-child(1)":{color:"red"}},passwordChangeForm:{"& > span, & div, & p, & input":{color:e.palette.getContrastText(e.palette.primary.main)}}}));function N(e,a){let{field:t,value:r}=a;return T(T({},e),{},{[t]:r})}a.default=()=>{const{settings:{IsPasswordChangeEnabled:e,userStorePasswordPattern:a,passwordPolicyPattern:t,passwordPolicyMinLength:i,passwordPolicyMaxLength:l}}=Object(j.d)(),u=F(),h=o.a.getUser().name,P={currentPassword:void 0,newPassword:void 0,repeatedNewPassword:void 0},[E,y]=Object(r.useReducer)(N,P),{currentPassword:b,newPassword:S,repeatedNewPassword:T}=E,k=d.a.passwordChange.guidelinesEnabled;let q=[];k&&(q=d.a.passwordChange.policyList);const R=()=>{let e=c.a.string().empty();i&&-1!==i&&(e=e.min(i)),l&&-1!==l&&(e=e.max(l));const r=e.validate(S).error;if(r){const e=r.details[0].type;if("string.empty"===e)return s.a.createElement(n.a,{id:"Change.Password.password.empty",defaultMessage:"Password is empty"});if("string.min"===e)return s.a.createElement(n.a,{id:"Change.Password.password.length.short",defaultMessage:"Password is too short!"});if("string.max"===e)return s.a.createElement(n.a,{id:"Change.Password.password.length.long",defaultMessage:"Password is too long!"})}if(a){const e=c.a.string().pattern(new RegExp(a)).validate(S).error;if(e){if("string.pattern.base"===e.details[0].type)return s.a.createElement(n.a,{id:"Change.Password.password.pattern.invalid",defaultMessage:"Invalid password pattern"})}}if(t){const e=c.a.string().pattern(new RegExp(t)).validate(S).error;if(e){if("string.pattern.base"===e.details[0].type)return s.a.createElement(n.a,{id:"Change.Password.password.pattern.invalid",defaultMessage:"Invalid password pattern"})}}return!1},D=()=>{if(T&&S!==T)return s.a.createElement(n.a,{id:"Change.Password.password.mismatch",defaultMessage:"Password doesn't match"})},I=e=>{let{target:{name:a,value:t}}=e;y({field:a,value:t})},B=()=>{if(!T||S===T){return(new x.a).changePassword(b,S).then(e=>{M.a.success(s.a.createElement(n.a,{id:"Change.Password.password.changed.success",defaultMessage:"User password changed successfully. Please use the new password on next sign in"})),window.history.back()}).catch(e=>{switch(e.response.body.code){case 901450:M.a.error(s.a.createElement(n.a,{id:"Change.Password.password.change.disabled",defaultMessage:"Password change disabled"}));break;case 901451:M.a.error(s.a.createElement(n.a,{id:"Change.Password.current.password.incorrect",defaultMessage:"Current password is incorrect"}));break;case 901452:M.a.error(s.a.createElement(n.a,{id:"Change.Password.password.pattern.invalid",defaultMessage:"Invalid password pattern"}))}})}M.a.error(s.a.createElement(n.a,{id:"Change.Password.password.mismatch",defaultMessage:"Password doesn't match"}))},L=s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{variant:"h5",component:"h1"},s.a.createElement(n.a,{id:"Change.Password.title",defaultMessage:"Change Password"}),": "+h),s.a.createElement(f.a,{variant:"caption"},s.a.createElement(n.a,{id:"Change.Password.description",defaultMessage:"Change your own password. Required fields are marked with an asterisk ( * )"})),k&&q.length>0?s.a.createElement(f.a,{variant:"body2"},s.a.createElement(n.a,{id:"Change.Password.password.policy",defaultMessage:"Password policy:"}),s.a.createElement("ul",{style:{marginTop:"-4px",marginBottom:"-8px"}},q.map(e=>s.a.createElement("li",null,e)))):null);return void 0===e?s.a.createElement(O.a,null):e?s.a.createElement(v,{title:L},s.a.createElement(m.a,{py:2,display:"flex",justifyContent:"center"},s.a.createElement(p.a,{item:!0,xs:10,md:9},s.a.createElement(m.a,{component:"div",m:2},s.a.createElement(p.a,{container:!0,mt:2,spacing:2,direction:"column",justify:"center",alignItems:"flex-start"},s.a.createElement(g.a,{classes:{root:u.mandatoryStarText},required:!0,id:"current-password",autoFocus:!0,margin:"dense",name:"currentPassword",value:b,onChange:I,label:s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.current.password",defaultMessage:"Current Password"}),fullWidth:!0,error:""===b,helperText:s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.enter.current.password",defaultMessage:"Enter Current Password"}),variant:"outlined",type:"password"}),s.a.createElement(g.a,{classes:{root:u.mandatoryStarText},margin:"dense",id:"new-password",name:"newPassword",value:S,onChange:I,label:s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.new.password",defaultMessage:"New Password"}),required:!0,fullWidth:!0,error:R(),helperText:R()||s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.enter.new.password",defaultMessage:"Enter a New Password"}),variant:"outlined",type:"password"}),s.a.createElement(g.a,{classes:{root:u.mandatoryStarText},margin:"dense",id:"repeated-new-password",name:"repeatedNewPassword",value:T,onChange:I,label:s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.confirm.new.password",defaultMessage:"Confirm new Password"}),required:!0,fullWidth:!0,error:D(),helperText:D()||s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.confirmationOf.new.password",defaultMessage:"Confirmation of new Password"}),variant:"outlined",type:"password"}),s.a.createElement(m.a,{my:2,display:"flex",flexDirection:"row"},s.a.createElement(m.a,{mr:1},s.a.createElement(w.a,{color:"primary",variant:"contained",onClick:B,className:u.passwordChangeForm},s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.Save.Button.text",defaultMessage:"Save"}))),s.a.createElement(m.a,{mx:1},s.a.createElement(w.a,{onClick:()=>window.history.back()},s.a.createElement(n.a,{id:"Settings.ChangePasswordForm.Cancel.Button.text",defaultMessage:"Cancel"}))))))))):s.a.createElement(C.a,null)}}}]);
//# sourceMappingURL=61.8665e0a3fad608d67204.bundle.js.map