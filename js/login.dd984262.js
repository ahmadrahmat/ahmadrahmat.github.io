(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"578a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(t){return e.close(t)}}},[a("v-icon",[e._v("mdi-close")])],1),a("v-toolbar-title",[e._v("Login")])],1),a("v-divider"),a("v-container",{attrs:{fluid:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.usernameRules,label:"Username",required:"","append-icon":"mdi-email"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("v-text-field",{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:e.passwordRules,type:e.showPassword?"text":"password",label:"Password",hint:"At least 6 characters",counter:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{color:"primary",disabled:!e.valid},on:{click:e.submit}},[e._v(" Login "),a("v-icon",{attrs:{right:"",dark:""}},[e._v("mdi-lock-open")])],1)],1)],1)],1)],1)},r=[],o=a("5530"),n=a("2f62"),i={name:"login",data:function(){return{valid:!0,username:"",usernameRules:[function(e){return!!e||"E-mail is required"}],showPassword:!1,password:"",passwordRules:[function(e){return!!e||"Password required."},function(e){return e&&e.length>=6||"Min 6 characters"}]}},computed:Object(o["a"])({},Object(n["c"])({user:"auth/user"})),methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])({setAlert:"alert/set",setAuth:"auth/set"})),{},{submit:function(){var e=this;if(this.$refs.form.validate()){var t={username:this.username,password:this.password};this.axios.post("/api/auth/login",t).then((function(t){var a=t.data;e.setAuth(a.data),e.user.id>0?(e.setAlert({status:!0,color:"success",text:"Login success"}),e.close()):e.setAlert({status:!0,color:"error",text:"Login failed"})})).catch((function(t){var a=t.response;e.setAlert({status:!0,text:a.data.message,color:"error"})}))}},close:function(){this.$emit("closed",!1)}})},l=i,c=a("2877"),d=a("6544"),u=a.n(d),v=a("8336"),m=a("b0af"),f=a("a523"),p=a("ce7e"),w=a("4bd4"),h=a("132d"),b=a("8654"),x=a("71d9"),k=a("2a7f"),g=Object(c["a"])(l,s,r,!1,null,null,null);t["default"]=g.exports;u()(g,{VBtn:v["a"],VCard:m["a"],VContainer:f["a"],VDivider:p["a"],VForm:w["a"],VIcon:h["a"],VTextField:b["a"],VToolbar:x["a"],VToolbarTitle:k["a"]})}}]);
//# sourceMappingURL=login.dd984262.js.map