(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=u,e.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},0:function(t,e,n){n("74v/"),t.exports=n("nOHt")},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=s,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),u=n("FYa8"),i=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);t.has(u)?a=!1:t.add(u)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var s=f[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;d.has(l)?a=!1:(d.add(l),r[s]=d)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var p=(0,o.default)();function m(t){var e=t.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}m.rewind=p.rewind;var v=m;e.default=v},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),u=n("48fX"),i=n("tCBg"),c=n("T0f4"),s=n("mPvQ");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),d=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){u(s,i);var c=l(s);function s(t){var a;return r(this,s),a=c.call(this,t),d&&(e.add(o(a)),n(o(a))),a}return a(s,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(s,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},YOTO:function(t,e,n){"use strict";var r=n("QmWs"),o=n("yLiY"),a=(n.n(o)()()||{}).publicRuntimeConfig,u=(void 0===a?{}:a).basePath;e.a=function(t){return Object(r.format)((u||"")+(t||""))}},hUgY:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),u=n.n(a),i=n("YOTO"),c=o.a.createElement;e.default=function(t){var e=t.Component,n=t.pageProps;return c(o.a.Fragment,null,c(u.a,null,c("title",null,"My Assets Lib"),c("link",{rel:"shortcut icon",href:Object(i.a)("my-assets-lib.png")}),c("meta",{property:"description",content:"Syakoo\u306eAssets\u306e\u56f3\u66f8\u9928"}),c("meta",{property:"og:title",content:"My Assets Lib"}),c("meta",{property:"og:image",content:"https://syakoo.github.io/my-assets-lib/my-assets-lib.png"}),c("meta",{property:"twitter:card",content:"summary"}),c("meta",{property:"twitter:site",content:"@sako_data"})),c(e,n))}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),u=n("kG2m");t.exports=function(t){return r(t)||o(t)||a(t)||u()}},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}}},[[0,0,2,1]]]);