(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{MYVY:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return b}));var o=t("q1tI"),a=t.n(o),i=t("vOnD"),r=t("KqRy"),m=t("IHJB"),l=t("bsg3"),c=t("Hl4w"),d=t("piF3"),s=a.a.createElement,u=i.c.div.withConfig({displayName:"fileName__Grids",componentId:"sc-1220maz-0"})(["display:grid;grid-template-columns:300px 1fr;"]),p=i.c.div.withConfig({displayName:"fileName__Sidebar",componentId:"sc-1220maz-1"})(["grid-column:1 / 2;background-color:",";margin-right:1rem;"],(function(e){return e.theme.white})),f=i.c.div.withConfig({displayName:"fileName__MainDiv",componentId:"sc-1220maz-2"})(["grid-column:2 / 3;"]),g=i.c.div.withConfig({displayName:"fileName__Title",componentId:"sc-1220maz-3"})(["text-align:center;font-size:2rem;font-weight:bold;color:",";"],(function(e){return e.theme.primary})),h=i.c.div.withConfig({displayName:"fileName__Selection",componentId:"sc-1220maz-4"})(["padding:1rem 0px;height:100%;> a{display:block;padding:0.5em 1em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-decoration:none;cursor:pointer;&:hover{background-color:",";transition:0.2s ease;}&.selected{font-weight:bold;background-color:",";color:",";}}"],(function(e){return e.theme.gray}),(function(e){return e.theme.gray}),(function(e){return e.theme.primary})),w=i.c.div.withConfig({displayName:"fileName__ExampleList",componentId:"sc-1220maz-5"})(["display:flex;justify-content:center;flex-wrap:wrap;align-items:flex-start;margin-bottom:1rem;& > div{margin:1rem;padding:0.5rem;background-color:",";border-radius:4px;pre{font-size:0.8em !important;max-width:500px;overflow:auto;padding:1rem !important;padding-bottom:0px !important;border-top:2px solid ",";}}"],(function(e){return e.theme.white}),(function(e){return e.theme.gray})),b=!0;n.default=function(e){var n=e.name,t=e.exampleCodes,a=e.dataStr,i=Object(o.useMemo)((function(){return d.a.find((function(e){return e.name===n}))}),[n]);return s(r.b,null,s(u,null,s(p,null,s("div",{style:{margin:"0px 1em"}},s(m.a,null,s(m.b,{to:"/"},"\u30db\u30fc\u30e0"),s(m.b,{to:"/components"},"Components"))),s(h,null,d.a.map((function(e,t){return s(c.a,{key:t,href:"/components/[name]",as:"/components/".concat(e.fileName),className:e.name===n?"selected":"",title:e.name},e.name)})))),s(f,null,s(r.a,null,s(g,null,n)),s(w,null,t.map((function(e,n){return s("div",{key:n},i.examples[n],s(l.a,{value:e,language:"tsx"}))}))),s(r.a,null,s(l.a,{value:a,language:"tsx"})))))}},krPt:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/[fileName]",function(){return t("MYVY")}])},piF3:function(e,n,t){"use strict";var o=t("q1tI"),a=t.n(o),i=t("vOnD"),r=a.a.createElement,m=function(e){var n=e.children,t=e.sep;return r(c,null,n.map((function(e,i){return r(o.Fragment,{key:i},a.a.cloneElement(e,{isCurrent:i===n.length-1}),i===n.length-1||r(d,null,t||">"))})))},l=function(e){var n=e.to,t=e.disabled,o=e.isCurrent,a=e.children;return t?r("span",null,a):o?r("span",null,a):r("a",{href:n},r("span",null,a))},c=i.c.div.withConfig({displayName:"Breadcrumbs__StyledList",componentId:"ai11nk-0"})(["margin:0.5em 0px;font-size:0.9em;a{text-decoration:none;color:palevioletred;&:hover{text-decoration:underline;}}"]),d=i.c.span.withConfig({displayName:"Breadcrumbs__Sep",componentId:"ai11nk-1"})(["margin:auto 0.5em;opacity:0.5;"]),s=a.a.createElement,u=[s(m,null,s(l,{to:""},"\u30db\u30fc\u30e0"),s(l,{to:"/components"},"Components"),s(l,{to:"/components/Breadcrumbs"},"\u30d1\u30f3\u304f\u305a\u30ea\u30b9\u30c8")),s(m,null,s(l,{to:"",disabled:!0},"\u30db\u30fc\u30e0"),s(l,{to:"/components"},"Components"),s(l,{to:"/components/Breadcrumbs"},"\u30d1\u30f3\u304f\u305a\u30ea\u30b9\u30c8")),s(m,{sep:"\u261b\u261e"},s(l,{to:""},"\u30db\u30fc\u30e0"),s(l,{to:"/components"},"Components"),s(l,{to:"/components/Breadcrumbs"},"\u30d1\u30f3\u304f\u305a\u30ea\u30b9\u30c8"))];n.a=[{name:"\u30d1\u30f3\u304f\u305a\u30ea\u30b9\u30c8",fileName:"Breadcrumbs",examples:u}]}},[["krPt",0,2,1,3,4]]]);