import{S as R,i as W,s as A,k as D,y as g,a as P,l as E,m as F,z as d,c as q,h as $,n as _,b as k,A as p,G as b,g as h,d as v,B as x,M as B,N as V,q as S,r as T,H as G}from"../chunks/index.20636c0b.js";import{T as C}from"../chunks/Text.e8ba9c76.js";import{I as z,B as N}from"../chunks/Button.4c5d7bf3.js";import{L as H}from"../chunks/Link.052cba93.js";import{I as Y}from"../chunks/Image.e39fcc1e.js";import{P as J}from"../chunks/logo_white.13688580.js";function K(a){let e;return{c(){e=S("Please enter your details")},l(t){e=T(t,"Please enter your details")},m(t,n){k(t,e,n)},d(t){t&&$(e)}}}function Q(a){let e;return{c(){e=S("Forgot Password ?")},l(t){e=T(t,"Forgot Password ?")},m(t,n){k(t,e,n)},d(t){t&&$(e)}}}function X(a){let e;return{c(){e=S("Log in")},l(t){e=T(t,"Log in")},m(t,n){k(t,e,n)},d(t){t&&$(e)}}}function Z(a){let e;return{c(){e=S("Register")},l(t){e=T(t,"Register")},m(t,n){k(t,e,n)},d(t){t&&$(e)}}}function ee(a){let e,t,n;return t=new H({props:{class:"text-semibold",linkUrl:"/register",$$slots:{default:[Z]},$$scope:{ctx:a}}}),{c(){e=S("Don't have an account? "),g(t.$$.fragment)},l(s){e=T(s,"Don't have an account? "),d(t.$$.fragment,s)},m(s,i){k(s,e,i),p(t,s,i),n=!0},p(s,i){const c={};i&8&&(c.$$scope={dirty:i,ctx:s}),t.$set(c)},i(s){n||(h(t.$$.fragment,s),n=!0)},o(s){v(t.$$.fragment,s),n=!1},d(s){s&&$(e),x(t,s)}}}function te(a){let e,t,n,s,i,c,l,m,f,u,y,w,L,I;return t=new C({props:{textTag:"h3",textStyle:"text-semibold",$$slots:{default:[K]},$$scope:{ctx:a}}}),s=new z({props:{type:"email",id:"email",class:"margin-top-2",name:"email",placeholder:"Email",required:!0}}),c=new z({props:{type:"password",id:"password",class:"margin-top-1",name:"password",placeholder:"Password",required:!0}}),m=new H({props:{linkUrl:"/reset-password",class:"margin-top-1",$$slots:{default:[Q]},$$scope:{ctx:a}}}),u=new N({props:{class:"margin-top-2",buttonWidth:"button--full",$$slots:{default:[X]},$$scope:{ctx:a}}}),w=new C({props:{textTag:"p",class:"text-light margin-top-1",$$slots:{default:[ee]},$$scope:{ctx:a}}}),{c(){e=D("form"),g(t.$$.fragment),n=P(),g(s.$$.fragment),i=P(),g(c.$$.fragment),l=P(),g(m.$$.fragment),f=P(),g(u.$$.fragment),y=P(),g(w.$$.fragment),this.h()},l(r){e=E(r,"FORM",{class:!0,method:!0,action:!0});var o=F(e);d(t.$$.fragment,o),n=q(o),d(s.$$.fragment,o),i=q(o),d(c.$$.fragment,o),l=q(o),d(m.$$.fragment,o),f=q(o),d(u.$$.fragment,o),y=q(o),d(w.$$.fragment,o),o.forEach($),this.h()},h(){_(e,"class",L="loginForm "+a[2].class+" svelte-16ytx7y"),_(e,"method",a[0]),_(e,"action",a[1])},m(r,o){k(r,e,o),p(t,e,null),b(e,n),p(s,e,null),b(e,i),p(c,e,null),b(e,l),p(m,e,null),b(e,f),p(u,e,null),b(e,y),p(w,e,null),I=!0},p(r,[o]){const M={};o&8&&(M.$$scope={dirty:o,ctx:r}),t.$set(M);const O={};o&8&&(O.$$scope={dirty:o,ctx:r}),m.$set(O);const U={};o&8&&(U.$$scope={dirty:o,ctx:r}),u.$set(U);const j={};o&8&&(j.$$scope={dirty:o,ctx:r}),w.$set(j),(!I||o&4&&L!==(L="loginForm "+r[2].class+" svelte-16ytx7y"))&&_(e,"class",L),(!I||o&1)&&_(e,"method",r[0]),(!I||o&2)&&_(e,"action",r[1])},i(r){I||(h(t.$$.fragment,r),h(s.$$.fragment,r),h(c.$$.fragment,r),h(m.$$.fragment,r),h(u.$$.fragment,r),h(w.$$.fragment,r),I=!0)},o(r){v(t.$$.fragment,r),v(s.$$.fragment,r),v(c.$$.fragment,r),v(m.$$.fragment,r),v(u.$$.fragment,r),v(w.$$.fragment,r),I=!1},d(r){r&&$(e),x(t),x(s),x(c),x(m),x(u),x(w)}}}function ne(a,e,t){let{method:n=""}=e,{action:s=""}=e;return a.$$set=i=>{t(2,e=B(B({},e),V(i))),"method"in i&&t(0,n=i.method),"action"in i&&t(1,s=i.action)},e=V(e),[n,s,e]}class se extends R{constructor(e){super(),W(this,e,ne,te,A,{method:0,action:1})}}function ae(a){let e;return{c(){e=S("Welcome back 👋")},l(t){e=T(t,"Welcome back 👋")},m(t,n){k(t,e,n)},d(t){t&&$(e)}}}function re(a){let e,t,n,s,i,c;return t=new C({props:{textTag:"h1",textStyle:"main-title",$$slots:{default:[ae]},$$scope:{ctx:a}}}),s=new se({props:{class:"margin-top-3",method:"Post",action:"/login"}}),{c(){e=D("div"),g(t.$$.fragment),n=P(),g(s.$$.fragment),this.h()},l(l){e=E(l,"DIV",{class:!0});var m=F(e);d(t.$$.fragment,m),n=q(m),d(s.$$.fragment,m),m.forEach($),this.h()},h(){_(e,"class",i="login-section "+a[0].class+" svelte-uu97t2")},m(l,m){k(l,e,m),p(t,e,null),b(e,n),p(s,e,null),c=!0},p(l,[m]){const f={};m&2&&(f.$$scope={dirty:m,ctx:l}),t.$set(f),(!c||m&1&&i!==(i="login-section "+l[0].class+" svelte-uu97t2"))&&_(e,"class",i)},i(l){c||(h(t.$$.fragment,l),h(s.$$.fragment,l),c=!0)},o(l){v(t.$$.fragment,l),v(s.$$.fragment,l),c=!1},d(l){l&&$(e),x(t),x(s)}}}function le(a,e,t){return a.$$set=n=>{t(0,e=B(B({},e),V(n)))},e=V(e),[e]}class oe extends R{constructor(e){super(),W(this,e,le,re,A,{})}}function ie(a){let e,t,n,s,i,c,l,m;return s=new oe({props:{class:"margin-top-3"}}),l=new Y({props:{imageSrc:J,imageAlt:"Sky Cloud",imageStyle:"image--regular block-center"}}),{c(){e=D("body"),t=D("div"),n=D("div"),g(s.$$.fragment),i=P(),c=D("div"),g(l.$$.fragment),this.h()},l(f){e=E(f,"BODY",{class:!0});var u=F(e);t=E(u,"DIV",{class:!0});var y=F(t);n=E(y,"DIV",{class:!0});var w=F(n);d(s.$$.fragment,w),w.forEach($),i=q(y),c=E(y,"DIV",{class:!0});var L=F(c);d(l.$$.fragment,L),L.forEach($),y.forEach($),u.forEach($),this.h()},h(){_(n,"class","login-section svelte-mrn1vq"),_(c,"class","logo-section svelte-mrn1vq"),_(t,"class","global-card svelte-mrn1vq"),_(e,"class","svelte-mrn1vq")},m(f,u){k(f,e,u),b(e,t),b(t,n),p(s,n,null),b(t,i),b(t,c),p(l,c,null),m=!0},p:G,i(f){m||(h(s.$$.fragment,f),h(l.$$.fragment,f),m=!0)},o(f){v(s.$$.fragment,f),v(l.$$.fragment,f),m=!1},d(f){f&&$(e),x(s),x(l)}}}class me extends R{constructor(e){super(),W(this,e,null,ie,A,{})}}function ce(a){let e,t;return e=new me({}),{c(){g(e.$$.fragment)},l(n){d(e.$$.fragment,n)},m(n,s){p(e,n,s),t=!0},p:G,i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){x(e,n)}}}class pe extends R{constructor(e){super(),W(this,e,null,ce,A,{})}}export{pe as default};