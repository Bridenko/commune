"use strict";(globalThis["webpackChunkpackage"]=globalThis["webpackChunkpackage"]||[]).push([[153],{4223:(e,s,t)=>{t.d(s,{m:()=>o,u:()=>l});var a=t(9835);function o(e){return(0,a.Fl)((()=>e.state.storeGeneral.contacts))}function l(e,s){return(0,a.Fl)((()=>e.value.find((e=>e.userId===s.params.otherUserId))))}},8153:(e,s,t)=>{t.r(s),t.d(s,{default:()=>q});var a=t(9835),o=t(499),l=t(6970),n=t(1957),r=t(3100),c=t(8339),u=t(4223);const m={class:"messages-wrapper visibility-hidden q-pa-md column col justify-end"},i={__name:"ChatPage",setup(e){const s=(0,r.oR)(),t=(0,c.yj)(),i=(0,o.iH)(""),d=(0,a.Fl)((()=>s.state.storeGeneral.messages)),p=(0,u.m)(s),g=(0,u.u)(p,t);(0,a.wF)((()=>{s.dispatch("storeGeneral/getMessages",t.params.otherUserId).then((()=>{})).catch((e=>{console.log(e.message)}))}));const h=(0,o.iH)(null);(0,a.bv)((async()=>{await(0,a.Y3)(),setTimeout((()=>{window.scrollTo(0,document.documentElement.scrollHeight-window.innerHeight)}),1),setTimeout((()=>{document.querySelector(".messages-wrapper").classList.remove("visibility-hidden")}),5)})),(0,a.YP)(d,(async()=>{await(0,a.Y3)(),setTimeout((()=>{window.scrollTo(0,document.documentElement.scrollHeight-window.innerHeight)}),1)})),(0,a.Jd)((()=>{s.dispatch("storeGeneral/stopGetMessages")}));const w=()=>{""!==i.value&&(s.dispatch("storeGeneral/sendNewMessage",{message:{name:"me",text:i.value,from:"me"},otherUserId:t.params.otherUserId}),i.value="")};return(e,s)=>{const t=(0,a.up)("q-chat-message"),r=(0,a.up)("q-icon"),c=(0,a.up)("q-btn"),u=(0,a.up)("q-input"),p=(0,a.up)("q-toolbar"),v=(0,a.up)("q-footer");return(0,a.wg)(),(0,a.iD)("div",{ref_key:"chatPage",ref:h,class:"chat-page flex column q-mx-auto",style:{"max-width":"767px"}},[(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.value,((e,s)=>(0,a.wy)(((0,a.wg)(),(0,a.j4)(t,{key:s,name:"me"!==e.from?(0,o.SU)(g).name:"me",text:[e.text],sent:"me"==e.from,class:(0,l.C_)("me"==e.from?"my-message":"them-message")},null,8,["name","text","sent","class"])),[[n.F8,"0"!==s&&Object.keys(d.value).length>1]]))),128))]),(0,a.Wm)(v,{class:"q-pa-sm",elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"q-mx-auto",style:{"max-width":"767px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{rounded:"",outlined:"",dense:"",modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=e=>i.value=e),onKeydown:(0,n.D2)(w,["enter"]),label:"Message",class:"full-width",color:"black","bg-color":"white"},{append:(0,a.w5)((()=>[""!==i.value?((0,a.wg)(),(0,a.j4)(r,{key:0,name:"close",onClick:s[0]||(s[0]=e=>i.value=""),class:"cursor-pointer",color:"primary"})):(0,a.kq)("",!0)])),after:(0,a.w5)((()=>[(0,a.Wm)(c,{onClick:w,round:"",dense:"",flat:"",icon:"send",color:"white"})])),_:1},8,["modelValue"])])),_:1})])),_:1})],512)}}};var d=t(396),p=t(1378),g=t(1663),h=t(7882),w=t(2857),v=t(4455),f=t(8149),y=t(9984),b=t.n(y);const k=i,q=k;b()(i,"components",{QChatMessage:d.Z,QFooter:p.Z,QToolbar:g.Z,QInput:h.Z,QIcon:w.Z,QBtn:v.Z,QField:f.Z})}}]);