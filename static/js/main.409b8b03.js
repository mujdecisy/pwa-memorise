(()=>{"use strict";var e={5312:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(5004),a=n(5222),o=n(5543),i=n(5861),s=n(885),l=n(7144),c=n(3392),u=n(1054),d=n(9385),f=n(519),p=n(1318),h="memorise_topics";function y(e){if(e<=0)throw new Error("Size must be a positive number.");return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}(Array.from({length:e},(function(e,t){return t})))}var m=n(2629);function g(e){var t=e.navigation,n=(0,r.useState)(!1),a=(0,s.default)(n,2),o=a[0],y=a[1],g=(0,r.useState)(""),x=(0,s.default)(g,2),v=x[0],j=x[1],S=(0,r.useState)([]),b=(0,s.default)(S,2),I=b[0],O=b[1],C=(0,f.useAsyncStorage)(h),w=(0,p.useIsFocused)(),k=function(){var e=(0,i.default)((function*(){var e=JSON.parse((yield C.getItem())||"[]");O(e)}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){k()}),[w]),(0,m.jsxs)(l.Layout,{children:[(0,m.jsx)(l.Header,{navigation:t,title:"Memorise",buttons:[{faIcon:c.faCircleQuestion,handleClick:function(){window.open("https://mujdecisy.github.io/app/memorise-test-yourself","blank")}},{faIcon:c.faFloppyDisk,handleClick:function(){t.push("IO")}},{faIcon:c.faPlus,handleClick:function(){j(""),y(!0)}}]}),(0,m.jsx)(l.ContentView,{viewType:l.ContentViewType.SCROLLVIEW,children:I.map((function(e,n){return(0,m.jsxs)(d.default,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:15,alignItems:"center",borderBottomWidth:1,borderBottomColor:l.ColorScheme.get().secondary,padding:10},children:[(0,m.jsx)(d.default,{children:(0,m.jsx)(u.default,{style:{fontSize:l.SizeScheme.get().font.c},children:e.name})}),(0,m.jsxs)(d.default,{style:{display:"flex",flexDirection:"row"},children:[(0,m.jsx)(d.default,{style:{marginRight:20},children:(0,m.jsx)(u.default,{style:{fontSize:l.SizeScheme.get().font.c},children:e.cards.length})}),(0,m.jsx)(l.ButtonIcon,{faIcon:c.faArrowUpRightFromSquare,handleClick:function(){t.push("Topic",{topicIndex:n})}})]})]},"topic_"+n)}))}),(0,m.jsxs)(l.Modal,{visible:o,handleClose:function(){y(!1)},style:{height:230},children:[(0,m.jsx)(l.Input,{label:"Topic Name",value:[v],handleChange:function(e){j(e[0])},type:l.InputTypes.TEXT}),(0,m.jsx)(l.Takoz,{}),(0,m.jsx)(l.ButtonText,{label:"Create",handleClick:(0,i.default)((function*(){var e=JSON.parse((yield C.getItem())||"[]");e.push({name:v,cards:[]}),yield C.setItem(JSON.stringify(e)),yield k(),y(!1)}))})]})]})}var x=n(4942),v=n(2982);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,x.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=e.navigation,n=e.route,a=(0,r.useState)({}),o=(0,s.default)(a,2),y=o[0],g=o[1],x=(0,r.useState)([]),j=(0,s.default)(x,2),b=j[0],I=j[1],O=(0,r.useState)(!1),C=(0,s.default)(O,2),w=C[0],k=C[1],T=(0,r.useState)({}),z=(0,s.default)(T,2),P=z[0],E=z[1],M=(0,f.useAsyncStorage)(h),_=(0,p.useIsFocused)(),N=function(){var e=(0,i.default)((function*(){var e=JSON.parse((yield M.getItem())||"[]");I(e)}));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){N()}),[_]),(0,r.useEffect)((function(){n.params&&void 0!==n.params.topicIndex&&g(b[n.params.topicIndex])}),[b]),(0,m.jsxs)(l.Layout,{children:[(0,m.jsx)(l.Header,{navigation:t,title:"Memorise",buttons:[{faIcon:c.faTrashCan,handleClick:function(){var e=(0,i.default)((function*(){var e=(0,v.default)(b);e.splice(n.params.topicIndex,1),yield M.setItem(JSON.stringify(e)),t.goBack()}));return function(){return e.apply(this,arguments)}}()},{faIcon:c.faPersonRunning,handleClick:function(){t.push("Card",{topicIndex:n.params.topicIndex,training:!0})}},{faIcon:c.faPlus,handleClick:function(){E({key:"",value:""}),k(!0)}}]}),(0,m.jsxs)(l.ContentView,{viewType:l.ContentViewType.SCROLLVIEW,children:[(0,m.jsx)(u.default,{style:{fontSize:l.SizeScheme.get().font.b,fontWeight:"bold"},children:(y.name||"").toUpperCase()}),(0,m.jsx)(l.Takoz,{}),(0,m.jsx)(d.default,{children:y.cards&&y.cards.map((function(e,r){return(0,m.jsxs)(d.default,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:l.SizeScheme.get().gap.pad,borderBottomWidth:1,borderBottomColor:l.ColorScheme.get().secondary,padding:10},children:[(0,m.jsx)(d.default,{children:(0,m.jsx)(u.default,{style:{fontSize:l.SizeScheme.get().font.c},children:e.key})}),(0,m.jsx)(d.default,{children:(0,m.jsx)(l.ButtonIcon,{faIcon:c.faArrowUpRightFromSquare,handleClick:function(){t.push("Card",{topicIndex:n.params.topicIndex,cardIndex:r})}})})]},"card_"+r)}))})]}),(0,m.jsxs)(l.Modal,{visible:w,handleClose:function(){k(!1)},children:[(0,m.jsx)(l.Input,{label:"Key",value:[P.key],handleChange:function(e){var t=S({},P);t.key=e[0],E(t)},type:l.InputTypes.TEXT}),(0,m.jsx)(l.Input,{label:"Value",value:[P.value],handleChange:function(e){var t=S({},P);t.value=e[0],E(t)},type:l.InputTypes.TEXT,settings:[l.Settings.TEXT_MULTILINE_6]}),(0,m.jsx)(l.Takoz,{}),(0,m.jsx)(l.ButtonText,{label:"Save",handleClick:(0,i.default)((function*(){var e=JSON.parse(yield M.getItem());e[n.params.topicIndex].cards.push(P),yield M.setItem(JSON.stringify(e)),E({key:"",value:""}),yield N(),k(!1)}))})]})]})}function I(e){var t=e.navigation;return(0,m.jsx)(l.ScreenIOStorage,{navigation:t,relatedKeys:[h]})}function O(e){var t=e.navigation,n=e.route,a=(0,f.useAsyncStorage)(h),o=(0,p.useIsFocused)(),g=(0,r.useState)([]),x=(0,s.default)(g,2),j=x[0],S=x[1],b=(0,r.useState)({}),I=(0,s.default)(b,2),O=I[0],C=I[1],w=(0,r.useState)([]),k=(0,s.default)(w,2),T=k[0],z=k[1],P=(0,r.useState)(0),E=(0,s.default)(P,2),M=E[0],_=E[1],N=(0,r.useState)(0),B=(0,s.default)(N,2),J=B[0],L=B[1],R=(0,r.useState)(2),D=(0,s.default)(R,2),V=D[0],F=D[1],W=function(){var e=(0,i.default)((function*(){var e=JSON.parse((yield a.getItem())||"[]");S(e)}));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){W()}),[o]),(0,r.useEffect)((function(){if(n.params&&void 0!==n.params.topicIndex&&void 0!==j[n.params.topicIndex])if(void 0!==n.params.cardIndex)C(j[n.params.topicIndex].cards[n.params.cardIndex]),F(0);else if(!0===n.params.training){var e=y(j[n.params.topicIndex].cards.length);z(e),C(j[n.params.topicIndex].cards[e[M]])}}),[j]);var A=[];return void 0!==n.params.cardIndex&&A.push({faIcon:c.faTrashCan,handleClick:function(){var e=(0,i.default)((function*(){var e=(0,v.default)(j);e[n.params.topicIndex].cards.splice(n.params.cardIndex,1),yield a.setItem(JSON.stringify(e)),t.goBack()}));return function(){return e.apply(this,arguments)}}()}),(0,m.jsxs)(l.Layout,{children:[(0,m.jsx)(l.Header,{navigation:t,title:"Memorise",buttons:A}),(0,m.jsx)(l.ContentView,{children:(0,m.jsxs)(d.default,{style:{display:"flex",justifyContent:"space-between",height:"100%"},children:[(0,m.jsxs)(d.default,{style:{flex:1},children:[(0,m.jsx)(d.default,{style:{borderWidth:1,borderColor:l.ColorScheme.get().secondary,padding:l.SizeScheme.get().gap.pad,borderRadius:5},children:(0,m.jsx)(u.default,{style:{fontSize:l.SizeScheme.get().font.a},children:1!==V?O.key:"*************"})}),(0,m.jsx)(l.Takoz,{}),(0,m.jsx)(d.default,{style:{borderWidth:1,borderColor:l.ColorScheme.get().secondary,padding:l.SizeScheme.get().gap.pad,borderRadius:5,maxHeight:l.SizeScheme.get().screen.height.window/2,overflow:"scroll"},children:(0,m.jsx)(u.default,{style:{fontSize:l.SizeScheme.get().font.b},children:2!==V?O.value:"*************"})}),(0,m.jsx)(l.Takoz,{})]}),(0,m.jsxs)(d.default,{children:[!0===n.params.training&&(0,m.jsx)(l.ButtonText,{label:0===J?"Reveal":"Next Card",handleClick:function(){if(0===J)F(0),L(1);else{var e=j[n.params.topicIndex].cards;F(Math.floor(2*Math.random())+1),L(0);var t=(M+1)%e.length;C(e[T[t]]),_(t)}}}),(0,m.jsx)(l.Takoz,{})]})]})})]})}var C=(0,o.default)();function w(){return(0,m.jsx)(a.default,{children:(0,m.jsxs)(C.Navigator,{children:[(0,m.jsx)(C.Screen,{name:"Main",component:g,options:{headerShown:!1}}),(0,m.jsx)(C.Screen,{name:"Topic",component:b,options:{headerShown:!1}}),(0,m.jsx)(C.Screen,{name:"Card",component:O,options:{headerShown:!1}}),(0,m.jsx)(C.Screen,{name:"IO",component:I,options:{headerShown:!1}})]})})}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[510],(()=>n(5530)));r=n.O(r)})();
//# sourceMappingURL=main.409b8b03.js.map