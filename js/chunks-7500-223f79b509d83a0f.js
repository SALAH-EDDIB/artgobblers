(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7500],{62705:function(n,t,i){var e=i(55639).Symbol;n.exports=e},44239:function(n,t,i){var e=i(62705),r=i(89607),o=i(2333),a=e?e.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?r(n):o(n)}},40098:function(n){var t=Math.ceil,i=Math.max;n.exports=function(n,e,r,o){for(var a=-1,c=i(t((e-n)/(r||1)),0),d=Array(c);c--;)d[o?c:++a]=n,n+=r;return d}},27561:function(n,t,i){var e=i(67990),r=/^\s+/;n.exports=function(n){return n?n.slice(0,e(n)+1).replace(r,""):n}},47445:function(n,t,i){var e=i(40098),r=i(16612),o=i(18601);n.exports=function(n){return function(t,i,a){return a&&"number"!=typeof a&&r(t,i,a)&&(i=a=void 0),t=o(t),void 0===i?(i=t,t=0):i=o(i),a=void 0===a?t<i?1:-1:o(a),e(t,i,a,n)}}},31957:function(n,t,i){var e="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;n.exports=e},89607:function(n,t,i){var e=i(62705),r=Object.prototype,o=r.hasOwnProperty,a=r.toString,c=e?e.toStringTag:void 0;n.exports=function(n){var t=o.call(n,c),i=n[c];try{n[c]=void 0;var e=!0}catch(d){}var r=a.call(n);return e&&(t?n[c]=i:delete n[c]),r}},65776:function(n){var t=/^(?:0|[1-9]\d*)$/;n.exports=function(n,i){var e=typeof n;return!!(i=null==i?9007199254740991:i)&&("number"==e||"symbol"!=e&&t.test(n))&&n>-1&&n%1==0&&n<i}},16612:function(n,t,i){var e=i(77813),r=i(98612),o=i(65776),a=i(13218);n.exports=function(n,t,i){if(!a(i))return!1;var c=typeof t;return!!("number"==c?r(i)&&o(t,i.length):"string"==c&&t in i)&&e(i[t],n)}},2333:function(n){var t=Object.prototype.toString;n.exports=function(n){return t.call(n)}},55639:function(n,t,i){var e=i(31957),r="object"==typeof self&&self&&self.Object===Object&&self,o=e||r||Function("return this")();n.exports=o},67990:function(n){var t=/\s/;n.exports=function(n){for(var i=n.length;i--&&t.test(n.charAt(i)););return i}},77813:function(n){n.exports=function(n,t){return n===t||n!==n&&t!==t}},98612:function(n,t,i){var e=i(23560),r=i(41780);n.exports=function(n){return null!=n&&r(n.length)&&!e(n)}},23560:function(n,t,i){var e=i(44239),r=i(13218);n.exports=function(n){if(!r(n))return!1;var t=e(n);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},41780:function(n){n.exports=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991}},13218:function(n){n.exports=function(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}},37005:function(n){n.exports=function(n){return null!=n&&"object"==typeof n}},33448:function(n,t,i){var e=i(44239),r=i(37005);n.exports=function(n){return"symbol"==typeof n||r(n)&&"[object Symbol]"==e(n)}},96026:function(n,t,i){var e=i(47445)();n.exports=e},18601:function(n,t,i){var e=i(14841),r=1/0;n.exports=function(n){return n?(n=e(n))===r||n===-1/0?17976931348623157e292*(n<0?-1:1):n===n?n:0:0===n?n:0}},14841:function(n,t,i){var e=i(27561),r=i(13218),o=i(33448),a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(o(n))return NaN;if(r(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=r(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=e(n);var i=c.test(n);return i||d.test(n)?s(n.slice(2),i?2:8):a.test(n)?NaN:+n}},55479:function(n,t,i){"use strict";i.d(t,{H:function(){return f}});var e=i(7297),r=i(85893),o=i(67294),a=i(32125),c=i(96026),d=i.n(c);function s(){var n=(0,e.Z)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -100px;\n  opacity: 0.5;\n  bottom: -400px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  grid-template-rows: repeat(auto-fill, minmax(120px, 1fr));\n\n  & > * {\n    /* background: rgba(0,0,0,0.1); */\n    border-bottom: 2px solid #fac74f;\n    border-right: 2px solid #fac74f;\n  }\n"]);return s=function(){return n},n}var u=a.ZP.div.withConfig({componentId:"sc-98993193-0"})(s()),f=o.memo((function(){return(0,r.jsx)(u,{style:{position:"absolute"},children:d()(1e3).map((function(n){return(0,r.jsx)("div",{},n)}))})}));f.displayName="BackgroundGrid"},11196:function(n,t,i){"use strict";i.d(t,{$:function(){return v}});var e=i(7297),r=i(85893),o=i(32125),a=i(90910),c=i(78173),d=i(25675),s=i.n(d),u=i(62225),f=i(59039),l=i(48957),p=i(78362);function x(){var n=(0,e.Z)(["\n  width: 100%;\n  /* padding: 0 20px; */\n  /* max-width: 1280px; */\n  display: grid;\n  grid-template-columns: 260px 1fr 500px;\n  grid-template-rows: 1fr;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 1000px) {\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    row-gap: 24px;\n    justify-items: center;\n    justify-content: center;\n  }\n"]);return x=function(){return n},n}function h(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: 1000px) {\n  }\n"]);return h=function(){return n},n}function m(){var n=(0,e.Z)(["\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 110%;\n  max-width: 500px;\n  width: 500px;\n  letter-spacing: -0.03em;\n  color: #080a0c;\n\n  @media (max-width: 1000px) {\n    width: 90vw;\n  }\n"]);return m=function(){return n},n}function g(){var n=(0,e.Z)(["\n  border-bottom: 1px solid #fac74f;\n  height: 1px;\n  max-width: 500px;\n  width: 500px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n\n  @media (max-width: 1000px) {\n    width: 90vw;\n  }\n"]);return g=function(){return n},n}var v=function(){var n=(0,l.Z)(),t=n.width;n.height,(0,u.Z)();return(0,r.jsx)(a.JC,{style:{position:"relative",display:"flex",flexDirection:"row",width:"100%",color:"#080A0C",flex:0,justifyContent:"center",alignItems:"center",zIndex:1,backgroundColor:"#F8FFC0",padding:"64px 0px"},children:(0,r.jsx)(p.ZP,{children:(0,r.jsxs)(w,{children:[(0,r.jsxs)(b,{children:[(0,r.jsx)("div",{style:{width:171,marginRight:16},children:(0,r.jsx)(s(),{style:{width:171},width:756,height:304,src:"/images/dark-logo-simple.png"})}),t>1e3&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{fontSize:28,fontWeight:700,color:"#080A0C",marginTop:16},children:"An experimental decentralized art factory"}),(0,r.jsxs)("div",{style:{marginTop:16},children:["by ",(0,r.jsx)("span",{style:{fontWeight:600},children:"Justin Roiland "}),"and"," ",(0,r.jsx)("span",{style:{fontWeight:600},children:"Paradigm"})]})]})]}),(0,r.jsx)("div",{}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:[(0,r.jsx)("div",{style:{fontWeight:600},children:"Contact"}),(0,r.jsx)(f.L,{size:20}),(0,r.jsx)(y,{children:(0,r.jsx)(c.dL,{href:"https://twitter.com/artgobblers",style:{color:"#080a0c",fontWeight:700},children:"Follow us on Twitter"})}),(0,r.jsx)(j,{}),(0,r.jsx)(y,{children:(0,r.jsx)(c.dL,{href:"https://feedback.ag.xyz/",style:{color:"#080a0c",fontWeight:700},children:"Report a bug"})}),(0,r.jsx)(j,{}),(0,r.jsx)(y,{children:(0,r.jsx)(c.dL,{href:"mailto:contact@artgobblers.com",style:{color:"#080a0c",fontWeight:700},children:"Email us"})})]})]})})})},w=o.ZP.div.withConfig({componentId:"sc-b4f96cca-0"})(x()),b=o.ZP.div.withConfig({componentId:"sc-b4f96cca-1"})(h()),y=o.ZP.div.withConfig({componentId:"sc-b4f96cca-2"})(m()),j=o.ZP.div.withConfig({componentId:"sc-b4f96cca-3"})(g())},90910:function(n,t,i){"use strict";i.d(t,{JC:function(){return l},pN:function(){return p},vs:function(){return h}});var e=i(7297),r=i(32125);function o(){var n=(0,e.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  align-items: center;\n"]);return o=function(){return n},n}function a(){var n=(0,e.Z)(["\n  padding: 24px;\n\n  background: #1f2025;\n  /* Black */\n\n  border: 2px solid #080a0c;\n  /* Inset Shadow */\n\n  box-shadow: 0px 2px 3px rgba(255, 255, 255, 0.16), inset 0px 2px 2px rgba(0, 0, 0, 0.45);\n  border-radius: 16px;\n  box-sizing: border-box;\n"]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n  position: relative;\n  background: #14280b;\n  max-width: 360px;\n  overflow: hidden;\n  margin: 0 auto;\n  border: 6px solid #080a0c;\n  box-shadow: -1px -3px 4px rgba(255, 255, 255, 0.2), 0px 16px 32px rgba(27, 26, 37, 0.24),\n    0px 12px 24px rgba(27, 26, 37, 0.16), 0px 4px 8px rgba(27, 26, 37, 0.12);\n  border-radius: 32px;\n"]);return c=function(){return n},n}function d(){var n=(0,e.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return d=function(){return n},n}function s(){var n=(0,e.Z)(["\n  padding: 0 32px;\n  "]);return s=function(){return n},n}function u(){var n=(0,e.Z)(["\n    padding: 0 10px;\n  "]);return u=function(){return n},n}function f(){var n=(0,e.Z)(["\n  width: 100%;\n  position: relative;\n  max-width: calc(1280px);\n  margin: 0 auto;\n  padding: 0 16px;\n  height: 100%;\n  ","\n  ","\n"]);return f=function(){return n},n}var l=r.ZP.div.withConfig({componentId:"sc-c04aded7-0"})(o()),p=r.ZP.div.withConfig({componentId:"sc-c04aded7-1"})(a()),x=r.ZP.div.withConfig({componentId:"sc-c04aded7-2"})(c()),h=((0,r.ZP)(x).withConfig({componentId:"sc-c04aded7-3"})(d()),r.ZP.div.withConfig({componentId:"sc-c04aded7-4"})(f(),(function(n){return n.theme.mediaWidth.upToLarge(s())}),(function(n){return n.theme.mediaWidth.upToSmall(u())})))},93084:function(n,t,i){"use strict";i.d(t,{B4:function(){return l},OO:function(){return p},Ul:function(){return h},fr:function(){return x}});var e=i(7297),r=i(32125);function o(){var n=(0,e.Z)(["\n  position: relative;\n  min-height: 100vh;\n  max-width: 100vw;\n  width: 100vw;\n  min-width: 100%;\n  background: #2f3035;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  flex: 1;\n"]);return o=function(){return n},n}function a(){var n=(0,e.Z)(["\n    grid-gap: 60px;\n  "]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n    display:flex;\n    flex-direction: column;\n    grid-gap: 0;\n  "]);return c=function(){return n},n}function d(){var n=(0,e.Z)(["\n  max-width: calc(1116px + 40px);\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 390px;\n  grid-gap: 80px;\n  padding-left: 20px;\n  padding-right: 20px;\n  ","\n  ","\n"]);return d=function(){return n},n}function s(){var n=(0,e.Z)(["\n  grid-template-columns: 1fr;\n"]);return s=function(){return n},n}function u(){var n=(0,e.Z)(["\n  position: relative;\n"]);return u=function(){return n},n}function f(){var n=(0,e.Z)([""]);return f=function(){return n},n}var l=r.ZP.div.withConfig({componentId:"sc-bccafcd4-0"})(o()),p=r.ZP.div.withConfig({componentId:"sc-bccafcd4-1"})(d(),(function(n){return n.theme.mediaWidth.upToLarge(a())}),(function(n){return n.theme.mediaWidth.upToMedium(c())})),x=((0,r.ZP)(p).withConfig({componentId:"sc-bccafcd4-2"})(s()),r.ZP.div.withConfig({componentId:"sc-bccafcd4-3"})(u())),h=r.ZP.div.withConfig({componentId:"sc-bccafcd4-4"})(f())},78362:function(n,t,i){"use strict";i.d(t,{xX:function(){return d},xe:function(){return s}});var e=i(7297),r=i(85893),o=i(32125);function a(){var n=(0,e.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n"]);return a=function(){return n},n}function c(){var n=(0,e.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex-grow: 1;\n  align-items: flex-start;\n  padding: 0 20px;\n  max-width: 1280px;\n  z-index: 1;\n"]);return c=function(){return n},n}var d=o.ZP.div.withConfig({componentId:"sc-cc5e329d-0"})(a()),s=o.ZP.div.withConfig({componentId:"sc-cc5e329d-1"})(c());t.ZP=function(n){var t=n.children;return(0,r.jsx)(d,{children:(0,r.jsx)(s,{children:t})})}},97500:function(n,t,i){"use strict";i.d(t,{Z:function(){return _}});var e=i(26042),r=i(69396),o=i(7297),a=i(85893),c=i(67294),d=i(32125),s=i(62225),u=i(55479),f=i(2562),l=i(90910),p=i(93084),x=i(59039),h=i(67918),m=i(75442),g=i(34278),v=i(25675),w=i.n(v),b=i(48957),y=i(28008),j=i(11196),Z=i(81472),I=i(11416),C=i(41664),P=i.n(C);function z(){var n=(0,o.Z)(["\n  margin: 0 auto;\n  max-width: 1000px;\n  display: grid;\n  column-gap: 40px;\n  grid-template-columns: 400px 1fr;\n\n  @media (max-width: 1000px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    row-gap: 24px;\n    justify-items: center;\n    justify-content: center;\n  }\n"]);return z=function(){return n},n}function k(){var n=(0,o.Z)(["\n  color: black;\n  font-size: 92px;\n\n  @media (max-width: 1000px) {\n    text-align: center;\n    font-size: 52px;\n  }\n"]);return k=function(){return n},n}function F(){var n=(0,o.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: #080a0c;\n  margin-top: 20px;\n\n  @media (max-width: 1000px) {\n    text-align: center;\n  }\n"]);return F=function(){return n},n}function O(){var n=(0,o.Z)(["\n  position: absolute;\n  width: 1017.52px;\n  height: 351.05px;\n  left: 100px;\n  top: -200px;\n\n  background: linear-gradient(180deg, #6bf1fd 0%, #96ff94 92.6%);\n  opacity: 0.7;\n  filter: blur(100px);\n  transform: translate3d(0, 0, 0), matrix(0.97, -0.24, -0.24, -0.97, 0, 0);\n  /* matrix(0.97, -0.24, -0.24, -0.97, 0, 0); */\n  z-index: 2;\n\n  @media (max-width: 1200px) {\n    opacity: 0.3;\n  }\n"]);return O=function(){return n},n}function W(){var n=(0,o.Z)(["\n  position: relative;\n  min-height: 100vh;\n  width: 100%;\n  min-width: 100vw;\n  max-width: 100vw;\n  overflow-x: hidden;\n  /* overflow: hidden; */\n  /* to blur bg */\n  transition: 350ms filter cubic-bezier(0.39, 0.575, 0.565, 1),\n    350ms opacity cubic-bezier(0.39, 0.575, 0.565, 1);\n  ","\n"]);return W=function(){return n},n}function L(){var n=(0,o.Z)(["\n  position: absolute;\n  width: 1200px;\n  height: 670px;\n  background: linear-gradient(180deg, #6bf1fd 0%, #96ff94 100%);\n  opacity: 0.5;\n  filter: blur(204px);\n  transform: translate3d(0, 0, 0), matrix(1, 0, 0, -1, 0, 0);\n  /* transform: matrix(1, 0, 0, -1, 0, 0); */\n  z-index: 1;\n  left: 0px;\n"]);return L=function(){return n},n}function T(){var n=(0,o.Z)(["\n  overflow: hidden;\n  left: 0px;\n  margin-top: -26px;\n  position: absolute;\n  background-color: white;\n  background: #ffffff;\n  box-shadow: 0px 24px 60px rgba(0, 0, 0, 0.06), 0px 12px 20px rgba(0, 0, 0, 0.05),\n    0px 4px 8px rgba(0, 0, 0, 0.02);\n  border-radius: 40px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 460px 1fr;\n  padding: 80px;\n  z-index: 2;\n\n  @media (min-width: 1200px) {\n    height: 660px;\n  }\n\n  @media (max-width: 1200px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    margin-top: -2vw;\n    padding: 52px;\n    height: 880px;\n  }\n\n  @media (max-width: 500px) {\n    padding: 32px;\n    height: 500px;\n  }\n"]);return T=function(){return n},n}function S(){var n=(0,o.Z)(["\n  z-index: 10;\n\n  @media (max-width: 1200px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return S=function(){return n},n}function B(){var n=(0,o.Z)(["\n  display: flex;\n\n  @media (max-width: 1200px) {\n    display: none;\n  }\n"]);return B=function(){return n},n}function E(){var n=(0,o.Z)(["\n  position: absolute;\n  right: 40px;\n  top: 40px;\n\n  @media (max-width: 1200px) {\n    top: 260px;\n    left: calc(50vw - 230px);\n  }\n\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]);return E=function(){return n},n}function M(){var n=(0,o.Z)(["\n  position: absolute;\n  right: 12px;\n  bottom: 0px;\n\n  @media (max-width: 1200px) {\n    left: calc(50vw - 450px);\n  }\n\n  @media (max-width: 500px) {\n    left: calc(50vw - 270px);\n  }\n"]);return M=function(){return n},n}function A(){var n=(0,o.Z)(["\n  position: absolute;\n  right: 680px;\n  top: 50px;\n\n  @media (max-width: 1200px) {\n    margin-top: 220px;\n    left: calc(50vw - 330px);\n  }\n\n  // TODO: Dynamic sized buttons\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]);return A=function(){return n},n}function N(){var n=(0,o.Z)(["\n  width: 800px;\n  height: 500px;\n  position: relative;\n\n  @media (max-width: 500px) {\n    width: 500px;\n    height: 312px;\n  }\n"]);return N=function(){return n},n}function D(){var n=(0,o.Z)(["\n  font-weight: 700;\n  font-size: 48px;\n  line-height: 110%;\n  max-width: 600px;\n\n  letter-spacing: -0.03em;\n\n  color: #080a0c;\n\n  @media (max-width: 1200px) {\n    text-align: center;\n    font-size: 32px;\n    min-height: 70px;\n  }\n"]);return D=function(){return n},n}function $(){var n=(0,o.Z)(["\n  margin-top: 160px;\n  font-family: 'Matter';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 110%;\n  letter-spacing: -0.03em;\n\n  @media (max-width: 1200px) {\n    display: none;\n  }\n\n  color: #080a0c;\n"]);return $=function(){return n},n}function R(){var n=(0,o.Z)(["\n  max-width: 1200px;\n  display: grid;\n  grid-template-columns: min(42vw, 600px) min(42vw, 600px);\n  justify-content: center;\n  z-index: -1;\n\n  @media (max-width: 1200px) {\n    grid-template-columns: 40vw 40vw;\n  }\n"]);return R=function(){return n},n}function q(){var n=(0,o.Z)(["\n  width: min(42vw, 600px);\n  height: calc(min(42vw, 600px) / 3.04);\n  position: relative;\n  margin-top: 2px;\n"]);return q=function(){return n},n}function H(){var n=(0,o.Z)(["\n  width: min(42vw, 600px);\n  height: calc(min(42vw, 600px) / 2.87);\n  margin-top: 6px;\n  position: relative;\n"]);return H=function(){return n},n}function U(){var n=(0,o.Z)(["\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 260px 1fr 717px;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n\n  @media (max-width: 1200px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n  }\n"]);return U=function(){return n},n}function J(){var n=(0,o.Z)(["\n  font-size: 48px;\n  font-weight: 600;\n  color: #080a0c;\n  line-height: 110%;\n  letter-spacing: -0.03em;\n  width: 717px;\n\n  @media (max-width: 1200px) {\n    text-align: center;\n    font-size: 42px;\n  }\n\n  @media (max-width: 800px) {\n    text-align: center;\n    font-size: 32px;\n    width: 100%;\n  }\n"]);return J=function(){return n},n}function _(){var n=(0,b.Z)(),t=n.width,i=(n.height,(0,s.Z)()),o=(0,I.t)(),d=(0,Z.useTrail)(13,{config:Z.config.gentle,opacity:o?1:0,y:o?0:8,from:{opacity:0,y:8}}),v=(0,c.useMemo)((function(){return[{active:!0,Icon:g.LC},{Icon:g.Wl},{Icon:g.$q},{Icon:g.VL},{Icon:g.q$},{Icon:g.UE},{Icon:g.zG}]}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("link",{rel:"preload",href:"/fonts/matter/Matter-Heavy.woff2",as:"font",crossOrigin:"",type:"font/woff2"}),(0,a.jsx)("link",{rel:"preload",href:"/fonts/matter/Matter-Bold.woff2",as:"font",crossOrigin:"",type:"font/woff2"}),(0,a.jsx)("link",{rel:"preload",href:"/fonts/matter/Matter-Regular.woff2",as:"font",crossOrigin:"",type:"font/woff2"}),(0,a.jsx)("link",{rel:"preload",href:"/fonts/matter/Matter-SemiBold.woff2",as:"font",crossOrigin:"",type:"font/woff2"}),(0,a.jsx)("link",{rel:"preload",as:"image",href:"".concat(h.vu,"/images/logo-simple.png")}),(0,a.jsx)("link",{rel:"preload",as:"image",href:"".concat(h.vu,"/images/about-bg-1.png")}),(0,a.jsx)("link",{rel:"preload",as:"image",href:"".concat(h.vu,"/images/about-bg-2.png")}),(0,a.jsx)("link",{rel:"preload",as:"image",href:"".concat(h.vu,"/images/gobbler-invite-full.png")}),(0,a.jsxs)(p.B4,{style:{background:"#EBF787",position:"relative"},children:[i?null:(0,a.jsx)(u.H,{}),(0,a.jsxs)(l.vs,{style:{color:"#080A0C",zIndex:1,position:"relative",minHeight:"100vh",maxWidth:1280,display:"flex",flexDirection:"column",transform:"translate3d(0,0,0)"},children:[(0,a.jsx)("div",{style:{position:"absolute",left:-200,right:-200,bottom:0,top:0,zIndex:0,background:"linear-gradient(270deg, rgba(235, 247, 135, 0.4) 0%, #EBF787 17.19%, #EBF787 82.81%, rgba(235, 247, 135, 0.4) 100%)"}}),(0,a.jsx)(X,{}),(0,a.jsxs)("div",{style:{position:"relative",zIndex:1,padding:"0 8px"},children:[(0,a.jsx)(f.UV,{}),t>1e3&&(0,a.jsx)(x.L,{size:80}),(0,a.jsxs)(G,{children:[(0,a.jsx)(Z.animated.div,{style:(0,e.Z)({maxWidth:400,marginTop:16},d[0]),children:(0,a.jsx)(w(),{priority:!0,width:756,height:304,src:"".concat(h.vu,"/images/logo-simple.png")})}),(0,a.jsxs)(Z.animated.div,{style:d[0],children:[(0,a.jsxs)(K,{children:["Experimental",(0,a.jsx)("br",{}),"Decentralized Art Factory"]}),(0,a.jsx)(Z.animated.div,{children:(0,a.jsx)(V,{children:"By Justin Roiland and Paradigm"})})]})]}),(0,a.jsx)(x.L,{size:80}),(0,a.jsxs)(dn,{children:[(0,a.jsx)(Z.animated.div,{style:(0,e.Z)({zIndex:2},d[3]),children:(0,a.jsx)(sn,{children:(0,a.jsx)(w(),{quality:100,priority:!0,objectFit:"contain",layout:"fill",src:"".concat(h.vu,"/images/about-bg-1.png")})})}),(0,a.jsx)(Z.animated.div,{style:(0,e.Z)({zIndex:2},d[3]),children:(0,a.jsx)(un,{children:(0,a.jsx)(w(),{quality:100,priority:!0,objectFit:"contain",layout:"fill",src:"".concat(h.vu,"/images/about-bg-2.png")})})})]}),(0,a.jsx)(Y,{}),(0,a.jsxs)(Q,{children:[(0,a.jsxs)(nn,{children:[(0,a.jsx)(an,{children:i?"Come back on desktop or tablet to play around with our draw tool":"You can play around with our draw tool on desktop or iPad"}),!i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.L,{size:36}),(0,a.jsx)(P(),{passHref:!0,href:{pathname:"/draw"},children:(0,a.jsx)(m.KM,{as:"a",buttonTextStyles:{color:"#8EF42E",fontWeight:700,fontSize:24},style:{width:270,height:72},children:"Start Drawing"})})]}),(0,a.jsx)(cn,{children:"but that's just one piece of the puzzle..."})]}),(0,a.jsx)(tn,{children:(0,a.jsx)("div",{style:{width:400,height:400,position:"relative"},children:(0,a.jsx)(w(),{priority:!0,objectFit:"contain",layout:"fill",src:"".concat(h.vu,"/images/default-bg-800.png"),style:{borderRadius:20}})})}),(0,a.jsx)(en,{children:(0,a.jsx)(on,{children:(0,a.jsx)(w(),{quality:100,priority:!0,objectFit:"contain",layout:"fill",src:"".concat(h.vu,"/images/gobbler-invite-full.png")})})}),(0,a.jsx)(rn,{children:v.map((function(n,t){var i=n.Icon;return(0,a.jsx)(Z.animated.div,{style:(0,r.Z)((0,e.Z)({},d[t+6]),{position:"absolute",marginTop:0===t||6===t?152:1===t||5===t?72:2===t||4===t?16:0,marginLeft:0===t?0:1===t?64:2===t?152:3===t?255:4===t?358:5===t?445:6===t?510:0}),children:(0,a.jsx)(m.hU,{size:86,isDisabled:!1,active:n.active,onPress:function(){return null},children:i&&(0,a.jsx)(i,{width:36,height:36,active:n.active||!1})})},t)}))})]}),(0,a.jsx)(x.L,{size:t>1200||t>500?700:550}),(0,a.jsxs)(fn,{children:[(0,a.jsx)("div",{style:{width:276,height:360,position:"relative"},children:(0,a.jsx)(w(),{objectFit:"contain",layout:"fill",src:"".concat(h.vu,"/images/glomp-lom-lom.png")})}),(0,a.jsx)("div",{}),(0,a.jsx)(Z.animated.div,{style:d[0],children:(0,a.jsx)(ln,{children:"We're building a self-sustaining ecosystem centered around creating and collecting the coolest art in the universe."})})]})]}),(0,a.jsx)(x.L,{size:72})]}),(0,a.jsx)(j.$,{})]})]})}var G=d.ZP.div.withConfig({componentId:"sc-daacefac-0"})(z()),K=(0,d.ZP)(y.Kl).withConfig({componentId:"sc-daacefac-1"})(k()),V=d.ZP.div.withConfig({componentId:"sc-daacefac-2"})(F()),X=d.ZP.div.withConfig({componentId:"sc-daacefac-3"})(O()),Y=(d.ZP.div.withConfig({componentId:"sc-daacefac-4"})(W(),(function(n){return n.blur&&'\n    position: relative;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: #080A0C;\n    box-shadow: inset 0 0 0 200px rgba(255,255,255,0.2);\n    filter: blur(4px);\n    opacity: 0.5;\n    content: "";\n  '})),d.ZP.div.withConfig({componentId:"sc-daacefac-5"})(L())),Q=d.ZP.div.withConfig({componentId:"sc-daacefac-6"})(T()),nn=d.ZP.div.withConfig({componentId:"sc-daacefac-7"})(S()),tn=(d.ZP.div.withConfig({componentId:"sc-daacefac-8"})(B()),d.ZP.div.withConfig({componentId:"sc-daacefac-9"})(E())),en=d.ZP.div.withConfig({componentId:"sc-daacefac-10"})(M()),rn=d.ZP.div.withConfig({componentId:"sc-daacefac-11"})(A()),on=d.ZP.div.withConfig({componentId:"sc-daacefac-12"})(N()),an=d.ZP.div.withConfig({componentId:"sc-daacefac-13"})(D()),cn=d.ZP.div.withConfig({componentId:"sc-daacefac-14"})($()),dn=d.ZP.div.withConfig({componentId:"sc-daacefac-15"})(R()),sn=d.ZP.div.withConfig({componentId:"sc-daacefac-16"})(q()),un=d.ZP.div.withConfig({componentId:"sc-daacefac-17"})(H()),fn=d.ZP.div.withConfig({componentId:"sc-daacefac-18"})(U()),ln=d.ZP.div.withConfig({componentId:"sc-daacefac-19"})(J())},62225:function(n,t,i){"use strict";i.d(t,{Z:function(){return r}});var e=i(48957);function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:501,t=(0,e.Z)();return t.width<n}}}]);
//# sourceMappingURL=7500-223f79b509d83a0f.js.map