(this["webpackJsonpswitch-controller-page"]=this["webpackJsonpswitch-controller-page"]||[]).push([[0],{51:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n.n(a),c=(n(50),n(51),n(78)),s=n(76),i=n(1);var o=function(){return Object(i.jsx)(c.a,{bg:"dark",variant:"dark",children:Object(i.jsx)(s.a,{children:Object(i.jsx)(c.a.Brand,{children:"\u5357\u4fe1\u5e26\u6821\u56ed\u7f51\u5e26\u52a9\u624b"})})})},u=n(5),l=n.n(u),d=n(9),j=n(7),b=n(0),p=n(15),h=n.n(p),v="/api/nuist";function f(){return(f=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v,"/network"));case 2:if(t=e.sent,"ok"===(null===(n=t.data)||void 0===n?void 0:n.code)){e.next=6;break}throw new Error((null===n||void 0===n?void 0:n.message)||"\u672a\u77e5\u9519\u8bef\u3002");case 6:return e.abrupt("return",(null===n||void 0===n?void 0:n.status)||(null===n||void 0===n?void 0:n.message)||"\u670d\u52a1\u5668\u54cd\u5e94\u5f02\u5e38...");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(d.a)(l.a.mark((function e(){var t,n,a,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v,"/config"));case 2:if(c=e.sent,"ok"===(null===(s=c.data)||void 0===s?void 0:s.code)){e.next=6;break}throw new Error((null===s||void 0===s?void 0:s.message)||"\u672a\u77e5\u9519\u8bef\u3002");case 6:return e.abrupt("return",{username:null===s||void 0===s||null===(t=s.data)||void 0===t?void 0:t.username,password:null===s||void 0===s||null===(n=s.data)||void 0===n?void 0:n.password,channel:null===s||void 0===s||null===(a=s.data)||void 0===a?void 0:a.channel,autoLogin:null===s||void 0===s||null===(r=s.data)||void 0===r?void 0:r.autoLogin});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return x=Object(d.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=r.length>0&&void 0!==r[0]?r[0]:{username:"",password:"",channel:""}).username&&t.password&&t.channel)){e.next=11;break}return e.next=4,h.a.post("".concat(v,"/set-user-info"),JSON.stringify(t),{headers:{"Content-Type":"application/json;charset=utf-8"}});case 4:if(n=e.sent,"ok"===(null===(a=n.data)||void 0===a?void 0:a.code)){e.next=8;break}throw new Error((null===a||void 0===a?void 0:a.message)||"\u672a\u77e5\u9519\u8bef\u3002");case 8:return e.abrupt("return",null===a||void 0===a?void 0:a.message);case 11:throw new Error("\u8868\u5355\u6570\u636e\u4e0d\u5b8c\u6574\u3002");case 12:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function g(){return(g=Object(d.a)(l.a.mark((function e(t,n,a){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(v,"/single"),JSON.stringify(t?{username:t,password:n,channel:a}:{useDefault:!0}),{headers:{"Content-Type":"application/json;charset=utf-8"}});case 2:if(r=e.sent,"ok"===(null===(c=r.data)||void 0===c?void 0:c.code)){e.next=6;break}throw new Error((null===c||void 0===c?void 0:c.message)||"\u672a\u77e5\u9519\u8bef\u3002");case 6:return e.abrupt("return",null===c||void 0===c?void 0:c.message);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(v,"/action"),JSON.stringify({action:"logout"}),{headers:{"Content-Type":"application/json;charset=utf-8"}});case 2:if(t=e.sent,"ok"===(null===(n=t.data)||void 0===n?void 0:n.code)){e.next=6;break}throw new Error((null===n||void 0===n?void 0:n.message)||"\u672a\u77e5\u9519\u8bef\u3002");case 6:return e.abrupt("return",null===n||void 0===n?void 0:n.message);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(v,"/auto-login-status"));case 2:if(t=e.sent,"ok"===(null===(n=t.data)||void 0===n?void 0:n.code)){e.next=6;break}throw new Error((null===n||void 0===n?void 0:n.message)||"\u672a\u77e5\u9519\u8bef\u3002");case 6:return e.abrupt("return",null===n||void 0===n?void 0:n.autoLogin);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return k=Object(d.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.next=3,h.a.post("".concat(v,"/set-auto-login"),JSON.stringify({autoLogin:t}),{headers:{"Content-Type":"application/json;charset=utf-8"}});case 3:if(n=e.sent,"ok"===(null===(a=n.data)||void 0===a?void 0:a.code)){e.next=7;break}throw new Error((null===a||void 0===a?void 0:a.message)||"\u672a\u77e5\u9519\u8bef\u3002");case 7:return e.abrupt("return",null===a||void 0===a?void 0:a.message);case 8:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}var y={getNetworkStatus:function(){return f.apply(this,arguments)},getConfigData:function(){return O.apply(this,arguments)},setCongigData:function(){return x.apply(this,arguments)},login:function(e,t,n){return g.apply(this,arguments)},logout:function(){return m.apply(this,arguments)},getAutoLoginStatus:function(){return w.apply(this,arguments)},setAutoLogin:function(){return k.apply(this,arguments)},getChannelName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(e=Number(e)){case 1:return"\u5357\u4eac\u4fe1\u606f\u5de5\u7a0b\u5927\u5b66";case 2:return"\u4e2d\u56fd\u79fb\u52a8";case 3:return"\u4e2d\u56fd\u7535\u4fe1";case 4:return"\u4e2d\u56fd\u8054\u901a";default:return"\u65e0\u6548\u9891\u9053"}}},N=y;var S=function(){var e=Object(b.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(""),c=Object(j.a)(r,2),s=c[0],o=c[1],u=Object(b.useRef)();Object(b.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,N.getAutoLoginStatus();case 4:e.t1=e.sent,(0,e.t0)(e.t1),o(""),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),o("\u83b7\u53d6\u8bbe\u7f6e\u9879\u51fa\u9519: ".concat(String(e.t2)));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();o("\u7a0d\u7b49..."),e()}),[]);var p=Object(b.useCallback)(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(t.target.checked),o("\u7a0d\u7b49..."),e.t0=o,e.next=6,N.setAutoLogin(t.target.checked);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(0),o(String(e.t2)),a(!t.target.checked);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h5",{className:"fw-bold",children:"\u65e9\u6668\u81ea\u52a8\u767b\u5f55"}),Object(i.jsx)("p",{className:"text-secondary",children:"\u5728\u6bcf\u5929 7:00 \u5de6\u53f3\u81ea\u52a8\u5b8c\u6210\u8ba4\u8bc1\u767b\u5f55\u3002"}),Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",ref:u,disabled:"\u7a0d\u7b49..."===s,onChange:p,checked:n,type:"checkbox",style:{height:"1.375rem",width:"2.725rem"}}),Object(i.jsx)("label",{className:"fw-bold px-2 py-1",children:"\u81ea\u52a8\u767b\u5f55"})]}),Object(i.jsx)("p",{children:s})]})},C=n(2),E=n(79),L=n(45),z=n(80),F=n(81),J=n(77);var D=function(){var e=Object(b.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)({username:"",password:"",channel:""}),c=Object(j.a)(r,2),s=c[0],o=c[1],u=Object(b.useState)(!1),p=Object(j.a)(u,2),h=p[0],v=p[1],f=Object(b.useCallback)(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a("\u7a0d\u7b49..."),e.t0=a,e.next=5,N.setCongigData(s);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),a(String(e.t2));case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[s]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h5",{className:"fw-bold",children:"\u53d8\u66f4\u9884\u5b58\u7684\u8d26\u6237\u4fe1\u606f"}),Object(i.jsx)(E.a,{variant:"secondary",size:"sm",onClick:function(){v((function(e){return!e}))},children:h?"\u6298\u53e0\u8868\u5355":"\u5c55\u5f00\u8868\u5355"}),Object(i.jsx)(L.a,{in:h,children:Object(i.jsxs)("div",{className:"my-2",children:[Object(i.jsx)("p",{className:"text-secondary",children:"\u53d8\u66f4\u7684\u767b\u5f55\u4fe1\u606f\u4f1a\u5728\u4e0b\u6b21\u767b\u5f55\u64cd\u4f5c\u65f6\u5e94\u7528\uff0c\u672c\u6b21\u4e0d\u4f1a\u76f4\u63a5\u89e6\u53d1\u767b\u5f55\u64cd\u4f5c\u3002"}),Object(i.jsx)(z.a,{children:"\u7528\u6237\u540d"}),Object(i.jsx)(F.a,{className:"mb-2",value:s.username,onChange:function(e){return o((function(t){return Object(C.a)(Object(C.a)({},t),{},{username:e.target.value})}))}}),Object(i.jsx)(z.a,{children:"\u5bc6\u7801"}),Object(i.jsx)(F.a,{type:"password",className:"mb-2",value:s.password,onChange:function(e){return o((function(t){return Object(C.a)(Object(C.a)({},t),{},{password:e.target.value})}))}}),Object(i.jsx)(z.a,{children:"\u9891\u9053"}),Object(i.jsxs)(J.a,{value:s.channel,onChange:function(e){return o((function(t){return Object(C.a)(Object(C.a)({},t),{},{channel:e.target.value})}))},children:[Object(i.jsx)("option",{children:"\u9009\u62e9\u9a8c\u8bc1\u9891\u9053..."}),Object(i.jsx)("option",{value:"1",children:"\u5357\u4eac\u4fe1\u606f\u5de5\u7a0b\u5927\u5b66"}),Object(i.jsx)("option",{value:"2",children:"\u4e2d\u56fd\u79fb\u52a8"}),Object(i.jsx)("option",{value:"3",children:"\u4e2d\u56fd\u7535\u4fe1"}),Object(i.jsx)("option",{value:"4",children:"\u4e2d\u56fd\u8054\u901a"})]}),Object(i.jsx)("br",{}),Object(i.jsx)(E.a,{variant:"success",size:"sm",disabled:"\u7a0d\u7b49..."===n,onClick:function(){f()},children:"\u7a0d\u7b49..."===n?"\u7a0d\u7b49...":"\u66f4\u65b0\u8d26\u6237\u4fe1\u606f"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:n})]})})]})};var A=function(){var e=Object(b.useState)("\u83b7\u53d6\u4e2d..."),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(!1),c=Object(j.a)(r,2),s=c[0],o=c[1];return Object(b.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),a("\u83b7\u53d6\u4e2d..."),e.prev=2,e.t0=a,e.next=6,N.getConfigData();case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(2),a(String(e.t2));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();s||e()}),[s]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h5",{className:"fw-bold",children:["\u5f53\u524d\u8bbe\u7f6e\u9879 ",Object(i.jsx)(E.a,{variant:"dark",size:"sm",disabled:"\u83b7\u53d6\u4e2d..."===n,onClick:function(){o(!1)},children:"\u83b7\u53d6\u4e2d..."===n?"\u7a0d\u7b49...":"\u83b7\u53d6"})]}),Object(i.jsx)("p",{className:"text-secondary",children:"\u663e\u793a\u9884\u5b58\u7684\u8d26\u6237\u4fe1\u606f\u7b49\u3002\u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\u3002"}),"object"===typeof n&&Object(i.jsxs)("p",{style:{whiteSpace:"pre-line"},children:["\u7528\u6237\u540d: ".concat(null===n||void 0===n?void 0:n.username,"\n"),"\u5bc6\u7801: ".concat(null===n||void 0===n?void 0:n.password,"\n"),"\u9891\u9053: ".concat(N.getChannelName(null===n||void 0===n?void 0:n.channel))]}),"string"===typeof n&&Object(i.jsx)("p",{children:n})]})};var T=function(){var e=Object(b.useState)("\u83b7\u53d6\u4e2d..."),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(b.useState)(!1),c=Object(j.a)(r,2),s=c[0],o=c[1];return Object(b.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),a("\u83b7\u53d6\u4e2d..."),e.prev=2,e.t0=a,e.next=6,N.getNetworkStatus();case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(2),a(String(e.t2));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();s||e()}),[s]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("h5",{className:"fw-bold",children:["\u68c0\u67e5\u7f51\u7edc\u72b6\u6001 ",Object(i.jsx)(E.a,{variant:"dark",size:"sm",disabled:"\u83b7\u53d6\u4e2d..."===n,onClick:function(){o(!1)},children:"\u83b7\u53d6\u4e2d..."===n?"\u7a0d\u7b49...":"\u5237\u65b0"})]}),Object(i.jsx)("p",{className:"text-secondary",children:"\u83b7\u53d6\u7f51\u7edc\u72b6\u6001\uff0c\u4e0d\u4f1a\u81ea\u52a8\u5237\u65b0\u3002"}),Object(i.jsx)("p",{children:n})]})};var B=function(){var e=Object(b.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(b.useCallback)(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a("\u7a0d\u7b49..."),e.t0=a,e.next=5,N.logout();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),a(String(e.t2));case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h5",{className:"fw-bold",children:"\u6ce8\u9500\u767b\u9646"}),Object(i.jsx)("p",{className:"text-secondary",children:"\u76f4\u63a5\u53d1\u9001\u6ce8\u9500\u767b\u5f55\u7684\u8bf7\u6c42\u3002\u8bf7\u6ce8\u610f\uff0c\u8be5\u6309\u94ae\u6ca1\u6709\u4e8c\u6b21\u786e\u8ba4\u3002"}),Object(i.jsx)(E.a,{variant:"danger",size:"sm",disabled:"\u7a0d\u7b49..."===n,onClick:function(){r()},children:"\u7a0d\u7b49..."===n?"\u7a0d\u7b49...":"\u7acb\u5373\u6ce8\u9500"}),Object(i.jsx)("p",{children:n})]})};var I=function(){var e=Object(b.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(b.useCallback)(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a("\u7a0d\u7b49..."),e.t0=a,e.next=5,N.login();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),a(String(e.t2));case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h5",{className:"fw-bold",children:"\u4f7f\u7528\u9884\u5b58\u7684\u5e10\u53f7\u53d1\u9001\u767b\u5f55\u8bf7\u6c42"}),Object(i.jsx)("p",{className:"text-secondary",children:"\u76f4\u63a5\u53d1\u9001\u5355\u6b21\u767b\u5f55\u8bf7\u6c42\u3002"}),Object(i.jsx)(E.a,{variant:"success",size:"sm",disabled:"\u7a0d\u7b49..."===n,onClick:function(){r()},children:"\u7a0d\u7b49..."===n?"\u7a0d\u7b49...":"\u53d1\u9001\u767b\u5f55\u8bf7\u6c42"}),Object(i.jsx)("p",{children:n})]})};var R=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)("div",{className:"main-container rounded my-2 p-2",children:[Object(i.jsx)(T,{}),Object(i.jsx)("hr",{}),Object(i.jsx)(S,{}),Object(i.jsx)("hr",{}),Object(i.jsx)(I,{}),Object(i.jsx)("hr",{}),Object(i.jsx)(A,{}),Object(i.jsx)("hr",{}),Object(i.jsx)(D,{}),Object(i.jsx)("hr",{}),Object(i.jsx)(B,{})]})})};var q=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsx)(R,{})]})};r.a.render(Object(i.jsx)(q,{}),document.getElementById("root"))}},[[74,1,2]]]);