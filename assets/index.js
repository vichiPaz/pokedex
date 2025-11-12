const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView.js","assets/Card.js","assets/usePokedex.js","assets/_plugin-vue_export-helper.js","assets/Card.css","assets/LoginView.js","assets/LoginView.css","assets/FavoritesView.js","assets/PokemonDetailsView.js","assets/PokemonDetailsView.css","assets/NotFoundView.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function ws(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function wd(e){if(Array.isArray(e))return e}function Ed(e){if(Array.isArray(e))return ws(e)}function Id(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,rc(r.key),r)}}function Ad(e,t,n){return t&&Sd(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wr(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=oa(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,a=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return a=l.done,l},e:function(l){o=!0,s=l},f:function(){try{a||n.return==null||n.return()}finally{if(o)throw s}}}}function z(e,t,n){return(t=rc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Td(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,o=[],l=!0,c=!1;try{if(s=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return o}}function Pd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function to(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?to(Object(n),!0).forEach(function(r){z(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wi(e,t){return wd(e)||Cd(e,t)||oa(e,t)||Pd()}function He(e){return Ed(e)||Td(e)||oa(e)||Rd()}function kd(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rc(e){var t=kd(e,"string");return typeof t=="symbol"?t:t+""}function ti(e){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(e)}function oa(e,t){if(e){if(typeof e=="string")return ws(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ws(e,t):void 0}}var no=function(){},la={},ic={},sc=null,ac={mark:no,measure:no};try{typeof window<"u"&&(la=window),typeof document<"u"&&(ic=document),typeof MutationObserver<"u"&&(sc=MutationObserver),typeof performance<"u"&&(ac=performance)}catch{}var Od=la.navigator||{},ro=Od.userAgent,io=ro===void 0?"":ro,jt=la,se=ic,so=sc,Fr=ac;jt.document;var wt=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",oc=~io.indexOf("MSIE")||~io.indexOf("Trident/"),zi,xd=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Nd=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,lc={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Dd={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},cc=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],he="classic",Ir="duotone",uc="sharp",fc="sharp-duotone",dc="chisel",hc="etch",pc="jelly",mc="jelly-duo",gc="jelly-fill",vc="notdog",yc="notdog-duo",bc="slab",_c="slab-press",wc="thumbprint",Ec="utility",Ic="utility-duo",Sc="utility-fill",Ac="whiteboard",Md="Classic",Ld="Duotone",Fd="Sharp",Ud="Sharp Duotone",$d="Chisel",jd="Etch",Hd="Jelly",Bd="Jelly Duo",Wd="Jelly Fill",Vd="Notdog",zd="Notdog Duo",Kd="Slab",Gd="Slab Press",qd="Thumbprint",Yd="Utility",Jd="Utility Duo",Xd="Utility Fill",Qd="Whiteboard",Tc=[he,Ir,uc,fc,dc,hc,pc,mc,gc,vc,yc,bc,_c,wc,Ec,Ic,Sc,Ac];zi={},z(z(z(z(z(z(z(z(z(z(zi,he,Md),Ir,Ld),uc,Fd),fc,Ud),dc,$d),hc,jd),pc,Hd),mc,Bd),gc,Wd),vc,Vd),z(z(z(z(z(z(z(z(zi,yc,zd),bc,Kd),_c,Gd),wc,qd),Ec,Yd),Ic,Jd),Sc,Xd),Ac,Qd);var Zd={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},eh={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},th=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),nh={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Cc=["fak","fa-kit","fakd","fa-kit-duotone"],ao={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},rh=["kit"],ih="kit",sh="kit-duotone",ah="Kit",oh="Kit Duotone";z(z({},ih,ah),sh,oh);var lh={kit:{"fa-kit":"fak"}},ch={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},uh={kit:{fak:"fa-kit"}},oo={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ki,Ur={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fh=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],dh="classic",hh="duotone",ph="sharp",mh="sharp-duotone",gh="chisel",vh="etch",yh="jelly",bh="jelly-duo",_h="jelly-fill",wh="notdog",Eh="notdog-duo",Ih="slab",Sh="slab-press",Ah="thumbprint",Th="utility",Ch="utility-duo",Ph="utility-fill",Rh="whiteboard",kh="Classic",Oh="Duotone",xh="Sharp",Nh="Sharp Duotone",Dh="Chisel",Mh="Etch",Lh="Jelly",Fh="Jelly Duo",Uh="Jelly Fill",$h="Notdog",jh="Notdog Duo",Hh="Slab",Bh="Slab Press",Wh="Thumbprint",Vh="Utility",zh="Utility Duo",Kh="Utility Fill",Gh="Whiteboard";Ki={},z(z(z(z(z(z(z(z(z(z(Ki,dh,kh),hh,Oh),ph,xh),mh,Nh),gh,Dh),vh,Mh),yh,Lh),bh,Fh),_h,Uh),wh,$h),z(z(z(z(z(z(z(z(Ki,Eh,jh),Ih,Hh),Sh,Bh),Ah,Wh),Th,Vh),Ch,zh),Ph,Kh),Rh,Gh);var qh="kit",Yh="kit-duotone",Jh="Kit",Xh="Kit Duotone";z(z({},qh,Jh),Yh,Xh);var Qh={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Zh={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Es={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ep=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Pc=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(fh,ep),tp=["solid","regular","light","thin","duotone","brands","semibold"],Rc=[1,2,3,4,5,6,7,8,9,10],np=Rc.concat([11,12,13,14,15,16,17,18,19,20]),rp=["aw","fw","pull-left","pull-right"],ip=[].concat(He(Object.keys(Zh)),tp,rp,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ur.GROUP,Ur.SWAP_OPACITY,Ur.PRIMARY,Ur.SECONDARY]).concat(Rc.map(function(e){return"".concat(e,"x")})).concat(np.map(function(e){return"w-".concat(e)})),sp={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},mt="___FONT_AWESOME___",Is=16,kc="fa",Oc="svg-inline--fa",nn="data-fa-i2svg",Ss="data-fa-pseudo-element",ap="data-fa-pseudo-element-pending",ca="data-prefix",ua="data-icon",lo="fontawesome-i2svg",op="async",lp=["HTML","HEAD","STYLE","SCRIPT"],xc=["::before","::after",":before",":after"],Nc=(function(){try{return!0}catch{return!1}})();function Sr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[he]}})}var Dc=T({},lc);Dc[he]=T(T(T(T({},{"fa-duotone":"duotone"}),lc[he]),ao.kit),ao["kit-duotone"]);var cp=Sr(Dc),As=T({},nh);As[he]=T(T(T(T({},{duotone:"fad"}),As[he]),oo.kit),oo["kit-duotone"]);var co=Sr(As),Ts=T({},Es);Ts[he]=T(T({},Ts[he]),uh.kit);var fa=Sr(Ts),Cs=T({},Qh);Cs[he]=T(T({},Cs[he]),lh.kit);Sr(Cs);var up=xd,Mc="fa-layers-text",fp=Nd,dp=T({},Zd);Sr(dp);var hp=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gi=Dd,pp=[].concat(He(rh),He(ip)),Jn=jt.FontAwesomeConfig||{};function mp(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function gp(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var vp=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vp.forEach(function(e){var t=wi(e,2),n=t[0],r=t[1],i=gp(mp(n));i!=null&&(Jn[r]=i)})}var Lc={styleDefault:"solid",familyDefault:he,cssPrefix:kc,replacementClass:Oc,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jn.familyPrefix&&(Jn.cssPrefix=Jn.familyPrefix);var kn=T(T({},Lc),Jn);kn.autoReplaceSvg||(kn.observeMutations=!1);var F={};Object.keys(Lc).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){kn[e]=n,Xn.forEach(function(r){return r(F)})},get:function(){return kn[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){kn.cssPrefix=t,Xn.forEach(function(n){return n(F)})},get:function(){return kn.cssPrefix}});jt.FontAwesomeConfig=F;var Xn=[];function yp(e){return Xn.push(e),function(){Xn.splice(Xn.indexOf(e),1)}}var hn=Is,et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bp(e){if(!(!e||!wt)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return se.head.insertBefore(t,r),e}}var _p="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function uo(){for(var e=12,t="";e-- >0;)t+=_p[Math.random()*62|0];return t}function Ln(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function da(e){return e.classList?Ln(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fc(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wp(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fc(e[n]),'" ')},"").trim()}function Ei(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ha(e){return e.size!==et.size||e.x!==et.x||e.y!==et.y||e.rotate!==et.rotate||e.flipX||e.flipY}function Ep(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Ip(e){var t=e.transform,n=e.width,r=n===void 0?Is:n,i=e.height,s=i===void 0?Is:i,a="";return oc?a+="translate(".concat(t.x/hn-r/2,"em, ").concat(t.y/hn-s/2,"em) "):a+="translate(calc(-50% + ".concat(t.x/hn,"em), calc(-50% + ").concat(t.y/hn,"em)) "),a+="scale(".concat(t.size/hn*(t.flipX?-1:1),", ").concat(t.size/hn*(t.flipY?-1:1),") "),a+="rotate(".concat(t.rotate,"deg) "),a}var Sp=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Uc(){var e=kc,t=Oc,n=F.cssPrefix,r=F.replacementClass,i=Sp;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var fo=!1;function qi(){F.autoAddCss&&!fo&&(bp(Uc()),fo=!0)}var Ap={mixout:function(){return{dom:{css:Uc,insertCss:qi}}},hooks:function(){return{beforeDOMElementCreation:function(){qi()},beforeI2svg:function(){qi()}}}},gt=jt||{};gt[mt]||(gt[mt]={});gt[mt].styles||(gt[mt].styles={});gt[mt].hooks||(gt[mt].hooks={});gt[mt].shims||(gt[mt].shims=[]);var Fe=gt[mt],$c=[],jc=function(){se.removeEventListener("DOMContentLoaded",jc),ni=1,$c.map(function(t){return t()})},ni=!1;wt&&(ni=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),ni||se.addEventListener("DOMContentLoaded",jc));function Tp(e){wt&&(ni?setTimeout(e,0):$c.push(e))}function Ar(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?Fc(e):"<".concat(t," ").concat(wp(r),">").concat(s.map(Ar).join(""),"</").concat(t,">")}function ho(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Yi=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=n,l,c,u;for(r===void 0?(l=1,u=t[s[0]]):(l=0,u=r);l<a;l++)c=s[l],u=o(u,t[c],c,t);return u};function Hc(e){return He(e).length!==1?null:e.codePointAt(0).toString(16)}function po(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ps(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=po(t);typeof Fe.hooks.addPack=="function"&&!i?Fe.hooks.addPack(e,po(t)):Fe.styles[e]=T(T({},Fe.styles[e]||{}),s),e==="fas"&&Ps("fa",t)}var fr=Fe.styles,Cp=Fe.shims,Bc=Object.keys(fa),Pp=Bc.reduce(function(e,t){return e[t]=Object.keys(fa[t]),e},{}),pa=null,Wc={},Vc={},zc={},Kc={},Gc={};function Rp(e){return~pp.indexOf(e)}function kp(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Rp(i)?i:null}var qc=function(){var t=function(s){return Yi(fr,function(a,o,l){return a[l]=Yi(o,s,{}),a},{})};Wc=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=a})}return i}),Vc=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=a})}return i}),Gc=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(l){i[l]=a}),i});var n="far"in fr||F.autoFetchSvg,r=Yi(Cp,function(i,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});zc=r.names,Kc=r.unicodes,pa=Ii(F.styleDefault,{family:F.familyDefault})};yp(function(e){pa=Ii(e.styleDefault,{family:F.familyDefault})});qc();function ma(e,t){return(Wc[e]||{})[t]}function Op(e,t){return(Vc[e]||{})[t]}function en(e,t){return(Gc[e]||{})[t]}function Yc(e){return zc[e]||{prefix:null,iconName:null}}function xp(e){var t=Kc[e],n=ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ht(){return pa}var Jc=function(){return{prefix:null,iconName:null,rest:[]}};function Np(e){var t=he,n=Bc.reduce(function(r,i){return r[i]="".concat(F.cssPrefix,"-").concat(i),r},{});return Tc.forEach(function(r){(e.includes(n[r])||e.some(function(i){return Pp[r].includes(i)}))&&(t=r)}),t}function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?he:n,i=cp[r][e];if(r===Ir&&!e)return"fad";var s=co[r][e]||co[r][i],a=e in Fe.styles?e:null,o=s||a||null;return o}function Dp(e){var t=[],n=null;return e.forEach(function(r){var i=kp(F.cssPrefix,r);i?n=i:r&&t.push(r)}),{iconName:n,rest:t}}function mo(e){return e.sort().filter(function(t,n,r){return r.indexOf(t)===n})}var go=Pc.concat(Cc);function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,s=mo(e.filter(function(m){return go.includes(m)})),a=mo(e.filter(function(m){return!go.includes(m)})),o=s.filter(function(m){return i=m,!cc.includes(m)}),l=wi(o,1),c=l[0],u=c===void 0?null:c,f=Np(s),d=T(T({},Dp(a)),{},{prefix:Ii(u,{family:f})});return T(T(T({},d),Up({values:e,family:f,styles:fr,config:F,canonical:d,givenPrefix:i})),Mp(r,i,d))}function Mp(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var s=t==="fa"?Yc(i):{},a=en(r,i);return i=s.iconName||a||i,r=s.prefix||r,r==="far"&&!fr.far&&fr.fas&&!F.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}var Lp=Tc.filter(function(e){return e!==he||e!==Ir}),Fp=Object.keys(Es).filter(function(e){return e!==he}).map(function(e){return Object.keys(Es[e])}).flat();function Up(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,s=i===void 0?"":i,a=e.styles,o=a===void 0?{}:a,l=e.config,c=l===void 0?{}:l,u=n===Ir,f=t.includes("fa-duotone")||t.includes("fad"),d=c.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(f||d||m)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Lp.includes(n)){var I=Object.keys(o).find(function(M){return Fp.includes(M)});if(I||c.autoFetchSvg){var S=th.get(n).defaultShortPrefixId;r.prefix=S,r.iconName=en(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Ht()||"fas"),r}var $p=(function(){function e(){Id(this,e),this.definitions={}}return Ad(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=T(T({},n.definitions[o]||{}),a[o]),Ps(o,a[o]);var l=fa[he][o];l&&Ps(l,a[o]),qc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=c)}),n[o][l]=c}),n}}])})(),vo=[],yn={},_n={},jp=Object.keys(_n);function Hp(e,t){var n=t.mixoutsTo;return vo=e,yn={},Object.keys(_n).forEach(function(r){jp.indexOf(r)===-1&&delete _n[r]}),vo.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),ti(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){yn[a]||(yn[a]=[]),yn[a].push(s[a])})}r.provides&&r.provides(_n)}),n}function Rs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=yn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=yn[e]||[];i.forEach(function(s){s.apply(null,n)})}function Bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return _n[e]?_n[e].apply(null,t):void 0}function ks(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ht();if(t)return t=en(n,t)||t,ho(Xc.definitions,n,t)||ho(Fe.styles,n,t)}var Xc=new $p,Bp=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,rn("noAuto")},Wp={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wt?(rn("beforeI2svg",t),Bt("pseudoElements2svg",t),Bt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Tp(function(){zp({autoReplaceSvgRoot:n}),rn("watch",t)})}},Vp={icon:function(t){if(t===null)return null;if(ti(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:en(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ii(t[0]);return{prefix:r,iconName:en(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(up))){var i=Si(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ht(),iconName:en(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Ht();return{prefix:s,iconName:en(s,t)||t}}}},Oe={noAuto:Bp,config:F,dom:Wp,parse:Vp,library:Xc,findIconDefinition:ks,toHtml:Ar},zp=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(Fe.styles).length>0||F.autoFetchSvg)&&wt&&F.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Ai(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ar(r)})}}),Object.defineProperty(e,"node",{get:function(){if(wt){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Kp(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(ha(a)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};i.style=Ei(T(T({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Gp(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},i),{},{id:a}),children:r}]}]}function qp(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(n){return n in e})}function ga(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,l=e.maskId,c=e.extra,u=e.watchable,f=u===void 0?!1:u,d=r.found?r:n,m=d.width,I=d.height,S=[F.replacementClass,s?"".concat(F.cssPrefix,"-").concat(s):""].filter(function(W){return c.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(c.classes).join(" "),M={children:[],attributes:T(T({},c.attributes),{},{"data-prefix":i,"data-icon":s,class:S,role:c.attributes.role||"img",viewBox:"0 0 ".concat(m," ").concat(I)})};!qp(c.attributes)&&!c.attributes["aria-hidden"]&&(M.attributes["aria-hidden"]="true"),f&&(M.attributes[nn]="");var v=T(T({},M),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:T({},c.styles)}),y=r.found&&n.found?Bt("generateAbstractMask",v)||{children:[],attributes:{}}:Bt("generateAbstractIcon",v)||{children:[],attributes:{}},P=y.children,k=y.attributes;return v.children=P,v.attributes=k,o?Gp(v):Kp(v)}function yo(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.extra,a=e.watchable,o=a===void 0?!1:a,l=T(T({},s.attributes),{},{class:s.classes.join(" ")});o&&(l[nn]="");var c=T({},s.styles);ha(i)&&(c.transform=Ip({transform:i,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Ei(c);u.length>0&&(l.style=u);var f=[];return f.push({tag:"span",attributes:l,children:[t]}),f}function Yp(e){var t=e.content,n=e.extra,r=T(T({},n.attributes),{},{class:n.classes.join(" ")}),i=Ei(n.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[t]}),s}var Ji=Fe.styles;function Os(e){var t=e[0],n=e[1],r=e.slice(4),i=wi(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Gi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Gi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Gi.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var Jp={found:!1,width:512,height:512};function Xp(e,t){!Nc&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xs(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=Ht()),new Promise(function(r,i){if(n==="fa"){var s=Yc(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ji[t]&&Ji[t][e]){var a=Ji[t][e];return r(Os(a))}Xp(e,t),r(T(T({},Jp),{},{icon:F.showMissingIcons&&e?Bt("missingIconAbstract")||{}:{}}))})}var bo=function(){},Ns=F.measurePerformance&&Fr&&Fr.mark&&Fr.measure?Fr:{mark:bo,measure:bo},zn='FA "7.1.0"',Qp=function(t){return Ns.mark("".concat(zn," ").concat(t," begins")),function(){return Qc(t)}},Qc=function(t){Ns.mark("".concat(zn," ").concat(t," ends")),Ns.measure("".concat(zn," ").concat(t),"".concat(zn," ").concat(t," begins"),"".concat(zn," ").concat(t," ends"))},va={begin:Qp,end:Qc},Vr=function(){};function _o(e){var t=e.getAttribute?e.getAttribute(nn):null;return typeof t=="string"}function Zp(e){var t=e.getAttribute?e.getAttribute(ca):null,n=e.getAttribute?e.getAttribute(ua):null;return t&&n}function em(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function tm(){if(F.autoReplaceSvg===!0)return zr.replace;var e=zr[F.autoReplaceSvg];return e||zr.replace}function nm(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function rm(e){return se.createElement(e)}function Zc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nm:rm:n;if(typeof e=="string")return se.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(Zc(a,{ceFn:r}))}),i}function im(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var zr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Zc(i),n)}),n.getAttribute(nn)===null&&F.keepOriginalSource){var r=se.createComment(im(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~da(n).indexOf(F.replacementClass))return zr.replace(t);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,l){return l===F.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Ar(o)}).join(`
`);n.setAttribute(nn,""),n.innerHTML=a}};function wo(e){e()}function eu(e,t){var n=typeof t=="function"?t:Vr;if(e.length===0)n();else{var r=wo;F.mutateApproach===op&&(r=jt.requestAnimationFrame||wo),r(function(){var i=tm(),s=va.begin("mutate");e.map(i),s(),n()})}}var ya=!1;function tu(){ya=!0}function Ds(){ya=!1}var ri=null;function Eo(e){if(so&&F.observeMutations){var t=e.treeCallback,n=t===void 0?Vr:t,r=e.nodeCallback,i=r===void 0?Vr:r,s=e.pseudoElementsCallback,a=s===void 0?Vr:s,o=e.observeMutationsRoot,l=o===void 0?se:o;ri=new so(function(c){if(!ya){var u=Ht();Ln(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!_o(f.addedNodes[0])&&(F.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&a([f.target],!0),f.type==="attributes"&&_o(f.target)&&~hp.indexOf(f.attributeName))if(f.attributeName==="class"&&Zp(f.target)){var d=Si(da(f.target)),m=d.prefix,I=d.iconName;f.target.setAttribute(ca,m||u),I&&f.target.setAttribute(ua,I)}else em(f.target)&&i(f.target)})}}),wt&&ri.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sm(){ri&&ri.disconnect()}function am(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function om(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Si(da(e));return i.prefix||(i.prefix=Ht()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Op(i.prefix,e.innerText)||ma(i.prefix,Hc(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function lm(e){var t=Ln(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return t}function cm(){return{iconName:null,prefix:null,transform:et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=om(e),r=n.iconName,i=n.prefix,s=n.rest,a=lm(e),o=Rs("parseNodeAttributes",{},e),l=t.styleParser?am(e):[];return T({iconName:r,prefix:i,transform:et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var um=Fe.styles;function nu(e){var t=F.autoReplaceSvg==="nest"?Io(e,{styleParser:!1}):Io(e);return~t.extra.classes.indexOf(Mc)?Bt("generateLayersText",e,t):Bt("generateSvgReplacementMutation",e,t)}function fm(){return[].concat(He(Cc),He(Pc))}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wt)return Promise.resolve();var n=se.documentElement.classList,r=function(f){return n.add("".concat(lo,"-").concat(f))},i=function(f){return n.remove("".concat(lo,"-").concat(f))},s=F.autoFetchSvg?fm():cc.concat(Object.keys(um));s.includes("fa")||s.push("fa");var a=[".".concat(Mc,":not([").concat(nn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(nn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Ln(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=va.begin("onTree"),c=o.reduce(function(u,f){try{var d=nu(f);d&&u.push(d)}catch(m){Nc||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){eu(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(d){l(),f(d)})})}function dm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nu(e).then(function(n){n&&eu([n],t)})}function hm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ks(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ks(i||{})),e(r,T(T({},n),{},{mask:i}))}}var pm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?et:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,f=n.classes,d=f===void 0?[]:f,m=n.attributes,I=m===void 0?{}:m,S=n.styles,M=S===void 0?{}:S;if(t){var v=t.prefix,y=t.iconName,P=t.icon;return Ai(T({type:"icon"},t),function(){return rn("beforeDOMElementCreation",{iconDefinition:t,params:n}),ga({icons:{main:Os(P),mask:l?Os(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:y,transform:T(T({},et),i),symbol:a,maskId:u,extra:{attributes:I,styles:M,classes:d}})})}},mm={mixout:function(){return{icon:hm(pm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=So,n.nodeCallback=dm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?se:r,s=n.callback,a=s===void 0?function(){}:s;return So(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.prefix,a=r.transform,o=r.symbol,l=r.mask,c=r.maskId,u=r.extra;return new Promise(function(f,d){Promise.all([xs(i,s),l.iconName?xs(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(m){var I=wi(m,2),S=I[0],M=I[1];f([n,ga({icons:{main:S,mask:M},prefix:s,iconName:i,transform:a,symbol:o,maskId:c,extra:u,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,l=Ei(o);l.length>0&&(i.style=l);var c;return ha(a)&&(c=Bt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},gm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ai({type:"layer"},function(){rn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(He(s)).join(" ")},children:a}]})}}}},vm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var i=r.classes,s=i===void 0?[]:i,a=r.attributes,o=a===void 0?{}:a,l=r.styles,c=l===void 0?{}:l;return Ai({type:"counter",content:n},function(){return rn("beforeDOMElementCreation",{content:n,params:r}),Yp({content:n.toString(),extra:{attributes:o,styles:c,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(He(s))}})})}}}},ym={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?et:i,a=r.classes,o=a===void 0?[]:a,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return Ai({type:"text",content:n},function(){return rn("beforeDOMElementCreation",{content:n,params:r}),yo({content:n,transform:T(T({},et),s),extra:{attributes:c,styles:f,classes:["".concat(F.cssPrefix,"-layers-text")].concat(He(o))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.transform,s=r.extra,a=null,o=null;if(oc){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/l,o=c.height/l}return Promise.resolve([n,yo({content:n.innerHTML,width:a,height:o,transform:i,extra:s,watchable:!0})])}}},ru=new RegExp('"',"ug"),Ao=[1105920,1112319],To=T(T(T(T({},{FontAwesome:{normal:"fas",400:"fas"}}),eh),sp),ch),Ms=Object.keys(To).reduce(function(e,t){return e[t.toLowerCase()]=To[t],e},{}),bm=Object.keys(Ms).reduce(function(e,t){var n=Ms[t];return e[t]=n[900]||He(Object.entries(n))[0][1],e},{});function _m(e){var t=e.replace(ru,"");return Hc(He(t)[0]||"")}function wm(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content"),r=n.replace(ru,""),i=r.codePointAt(0),s=i>=Ao[0]&&i<=Ao[1],a=r.length===2?r[0]===r[1]:!1;return s||a||t}function Em(e,t){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Ms[n]||{})[i]||bm[n]}function Co(e,t){var n="".concat(ap).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Ln(e.children),a=s.filter(function(ae){return ae.getAttribute(Ss)===t})[0],o=jt.getComputedStyle(e,t),l=o.getPropertyValue("font-family"),c=l.match(fp),u=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&f!=="none"&&f!==""){var d=o.getPropertyValue("content"),m=Em(l,u),I=_m(d),S=c[0].startsWith("FontAwesome"),M=wm(o),v=ma(m,I),y=v;if(S){var P=xp(I);P.iconName&&P.prefix&&(v=P.iconName,m=P.prefix)}if(v&&!M&&(!a||a.getAttribute(ca)!==m||a.getAttribute(ua)!==y)){e.setAttribute(n,y),a&&e.removeChild(a);var k=cm(),W=k.extra;W.attributes[Ss]=t,xs(v,m).then(function(ae){var X=ga(T(T({},k),{},{icons:{main:ae,mask:Jc()},prefix:m,iconName:y,extra:W,watchable:!0})),Ee=se.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Ee,e.firstChild):e.appendChild(Ee),Ee.outerHTML=X.map(function(Ve){return Ar(Ve)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Im(e){return Promise.all([Co(e,"::before"),Co(e,"::after")])}function Sm(e){return e.parentNode!==document.head&&!~lp.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ss)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Am=function(t){return!!t&&xc.some(function(n){return t.includes(n)})},Tm=function(t){if(!t)return[];var n=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var i=Wr(r),s;try{for(i.s();!(s=i.n()).done;){var a=s.value;if(Am(a)){var o=xc.reduce(function(l,c){return l.replace(c,"")},a);o!==""&&o!=="*"&&n.add(o)}}}catch(l){i.e(l)}finally{i.f()}return n};function Po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(wt){var n;if(t)n=e;else if(F.searchPseudoElementsFullScan)n=e.querySelectorAll("*");else{var r=new Set,i=Wr(document.styleSheets),s;try{for(i.s();!(s=i.n()).done;){var a=s.value;try{var o=Wr(a.cssRules),l;try{for(o.s();!(l=o.n()).done;){var c=l.value,u=Tm(c.selectorText),f=Wr(u),d;try{for(f.s();!(d=f.n()).done;){var m=d.value;r.add(m)}}catch(S){f.e(S)}finally{f.f()}}}catch(S){o.e(S)}finally{o.f()}}catch(S){F.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(a.href," (").concat(S.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(S){i.e(S)}finally{i.f()}if(!r.size)return;var I=Array.from(r).join(", ");try{n=e.querySelectorAll(I)}catch{}}return new Promise(function(S,M){var v=Ln(n).filter(Sm).map(Im),y=va.begin("searchPseudoElements");tu(),Promise.all(v).then(function(){y(),Ds(),S()}).catch(function(){y(),Ds(),M()})})}}var Cm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Po,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?se:r;F.searchPseudoElements&&Po(i)}}},Ro=!1,Pm={mixout:function(){return{dom:{unwatch:function(){tu(),Ro=!0}}}},hooks:function(){return{bootstrap:function(){Eo(Rs("mutationObserverCallbacks",{}))},noAuto:function(){sm()},watch:function(n){var r=n.observeMutationsRoot;Ro?Ds():Eo(Rs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ko=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Rm={mixout:function(){return{parse:{transform:function(n){return ko(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=ko(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:d};return{tag:"g",attributes:T({},m.outer),children:[{tag:"g",attributes:T({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),m.path)}]}]}}}},Xi={x:0,y:0,width:"100%",height:"100%"};function Oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function km(e){return e.tag==="g"?e.children:[e]}var Om={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Si(i.split(" ").map(function(a){return a.trim()})):Jc();return s.prefix||(s.prefix=Ht()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,l=n.transform,c=s.width,u=s.icon,f=a.width,d=a.icon,m=Ep({transform:l,containerWidth:f,iconWidth:c}),I={tag:"rect",attributes:T(T({},Xi),{},{fill:"white"})},S=u.children?{children:u.children.map(Oo)}:{},M={tag:"g",attributes:T({},m.inner),children:[Oo(T({tag:u.tag,attributes:T(T({},u.attributes),m.path)},S))]},v={tag:"g",attributes:T({},m.outer),children:[M]},y="mask-".concat(o||uo()),P="clip-".concat(o||uo()),k={tag:"mask",attributes:T(T({},Xi),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,v]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:km(d)},k]};return r.push(W,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(y,")")},Xi)}),{children:r,attributes:i}}}},xm={provides:function(t){var n=!1;jt.matchMedia&&(n=jt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=T(T({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:T(T({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:T(T({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:T(T({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nm={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Dm=[Ap,mm,gm,vm,ym,Cm,Pm,Rm,Om,xm,Nm];Hp(Dm,{mixoutsTo:Oe});Oe.noAuto;Oe.config;var Mm=Oe.library;Oe.dom;var Ls=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Lm=Oe.icon;Oe.layer;Oe.text;Oe.counter;/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ba(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ne={},wn=[],tt=()=>{},iu=()=>!1,Ti=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_a=e=>e.startsWith("onUpdate:"),ye=Object.assign,wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Fm=Object.prototype.hasOwnProperty,J=(e,t)=>Fm.call(e,t),B=Array.isArray,En=e=>Ci(e)==="[object Map]",su=e=>Ci(e)==="[object Set]",V=e=>typeof e=="function",le=e=>typeof e=="string",zt=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",au=e=>(oe(e)||V(e))&&V(e.then)&&V(e.catch),ou=Object.prototype.toString,Ci=e=>ou.call(e),Um=e=>Ci(e).slice(8,-1),lu=e=>Ci(e)==="[object Object]",Ea=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qn=ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},$m=/-(\w)/g,Me=Pi(e=>e.replace($m,(t,n)=>n?n.toUpperCase():"")),jm=/\B([A-Z])/g,ln=Pi(e=>e.replace(jm,"-$1").toLowerCase()),Ri=Pi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qi=Pi(e=>e?`on${Ri(e)}`:""),Lt=(e,t)=>!Object.is(e,t),Kr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},cu=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Fs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let xo;const ki=()=>xo||(xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ia(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=le(r)?Vm(r):Ia(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(le(e)||oe(e))return e}const Hm=/;(?![^(]*\))/g,Bm=/:([^]+)/,Wm=/\/\*[^]*?\*\//g;function Vm(e){const t={};return e.replace(Wm,"").split(Hm).forEach(n=>{if(n){const r=n.split(Bm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Sa(e){let t="";if(le(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=Sa(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Km=ba(zm);function uu(e){return!!e||e===""}const fu=e=>!!(e&&e.__v_isRef===!0),du=e=>le(e)?e:e==null?"":B(e)||oe(e)&&(e.toString===ou||!V(e.toString))?fu(e)?du(e.value):JSON.stringify(e,hu,2):String(e),hu=(e,t)=>fu(t)?hu(e,t.value):En(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Zi(r,s)+" =>"]=i,n),{})}:su(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zi(n))}:zt(t)?Zi(t):oe(t)&&!B(t)&&!lu(t)?String(t):t,Zi=(e,t="")=>{var n;return zt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Te;class Gm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){++this._on===1&&(this.prevScope=Te,Te=this)}off(){this._on>0&&--this._on===0&&(Te=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function qm(){return Te}let ie;const es=new WeakSet;class pu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Te&&Te.active&&Te.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,es.has(this)&&(es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,No(this),vu(this);const t=ie,n=$e;ie=this,$e=!0;try{return this.fn()}finally{yu(this),ie=t,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ca(t);this.deps=this.depsTail=void 0,No(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Us(this)&&this.run()}get dirty(){return Us(this)}}let mu=0,Zn,er;function gu(e,t=!1){if(e.flags|=8,t){e.next=er,er=e;return}e.next=Zn,Zn=e}function Aa(){mu++}function Ta(){if(--mu>0)return;if(er){let t=er;for(er=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Zn;){let t=Zn;for(Zn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function vu(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function yu(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Ca(r),Ym(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Us(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(bu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function bu(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===dr)||(e.globalVersion=dr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Us(e))))return;e.flags|=2;const t=e.dep,n=ie,r=$e;ie=e,$e=!0;try{vu(e);const i=e.fn(e._value);(t.version===0||Lt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ie=n,$e=r,yu(e),e.flags&=-3}}function Ca(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ca(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ym(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let $e=!0;const _u=[];function vt(){_u.push($e),$e=!1}function yt(){const e=_u.pop();$e=e===void 0?!0:e}function No(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ie;ie=void 0;try{t()}finally{ie=n}}}let dr=0;class Jm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ie||!$e||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new Jm(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,wu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(t){this.version++,dr++,this.notify(t)}notify(t){Aa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ta()}}}function wu(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)wu(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const $s=new WeakMap,tn=Symbol(""),js=Symbol(""),hr=Symbol("");function me(e,t,n){if($e&&ie){let r=$s.get(e);r||$s.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Pa),i.map=r,i.key=n),i.track()}}function ct(e,t,n,r,i,s){const a=$s.get(e);if(!a){dr++;return}const o=l=>{l&&l.trigger()};if(Aa(),t==="clear")a.forEach(o);else{const l=B(e),c=l&&Ea(n);if(l&&n==="length"){const u=Number(r);a.forEach((f,d)=>{(d==="length"||d===hr||!zt(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(hr)),t){case"add":l?c&&o(a.get("length")):(o(a.get(tn)),En(e)&&o(a.get(js)));break;case"delete":l||(o(a.get(tn)),En(e)&&o(a.get(js)));break;case"set":En(e)&&o(a.get(tn));break}}Ta()}function pn(e){const t=Y(e);return t===e?t:(me(t,"iterate",hr),De(e)?t:t.map(de))}function Oi(e){return me(e=Y(e),"iterate",hr),e}const Xm={__proto__:null,[Symbol.iterator](){return ts(this,Symbol.iterator,de)},concat(...e){return pn(this).concat(...e.map(t=>B(t)?pn(t):t))},entries(){return ts(this,"entries",e=>(e[1]=de(e[1]),e))},every(e,t){return at(this,"every",e,t,void 0,arguments)},filter(e,t){return at(this,"filter",e,t,n=>n.map(de),arguments)},find(e,t){return at(this,"find",e,t,de,arguments)},findIndex(e,t){return at(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return at(this,"findLast",e,t,de,arguments)},findLastIndex(e,t){return at(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return at(this,"forEach",e,t,void 0,arguments)},includes(...e){return ns(this,"includes",e)},indexOf(...e){return ns(this,"indexOf",e)},join(e){return pn(this).join(e)},lastIndexOf(...e){return ns(this,"lastIndexOf",e)},map(e,t){return at(this,"map",e,t,void 0,arguments)},pop(){return jn(this,"pop")},push(...e){return jn(this,"push",e)},reduce(e,...t){return Do(this,"reduce",e,t)},reduceRight(e,...t){return Do(this,"reduceRight",e,t)},shift(){return jn(this,"shift")},some(e,t){return at(this,"some",e,t,void 0,arguments)},splice(...e){return jn(this,"splice",e)},toReversed(){return pn(this).toReversed()},toSorted(e){return pn(this).toSorted(e)},toSpliced(...e){return pn(this).toSpliced(...e)},unshift(...e){return jn(this,"unshift",e)},values(){return ts(this,"values",de)}};function ts(e,t,n){const r=Oi(e),i=r[t]();return r!==e&&!De(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Qm=Array.prototype;function at(e,t,n,r,i,s){const a=Oi(e),o=a!==e&&!De(e),l=a[t];if(l!==Qm[t]){const f=l.apply(e,s);return o?de(f):f}let c=n;a!==e&&(o?c=function(f,d){return n.call(this,de(f),d,e)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,e)}));const u=l.call(a,c,r);return o&&i?i(u):u}function Do(e,t,n,r){const i=Oi(e);let s=n;return i!==e&&(De(e)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,e)}):s=function(a,o,l){return n.call(this,a,de(o),l,e)}),i[t](s,...r)}function ns(e,t,n){const r=Y(e);me(r,"iterate",hr);const i=r[t](...n);return(i===-1||i===!1)&&Oa(n[0])?(n[0]=Y(n[0]),r[t](...n)):i}function jn(e,t,n=[]){vt(),Aa();const r=Y(e)[t].apply(e,n);return Ta(),yt(),r}const Zm=ba("__proto__,__v_isRef,__isVue"),Eu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zt));function eg(e){zt(e)||(e=String(e));const t=Y(this);return me(t,"has",e),t.hasOwnProperty(e)}class Iu{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?ug:Cu:s?Tu:Au).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=B(t);if(!i){let l;if(a&&(l=Xm[n]))return l;if(n==="hasOwnProperty")return eg}const o=Reflect.get(t,n,ve(t)?t:r);return(zt(n)?Eu.has(n):Zm(n))||(i||me(t,"get",n),s)?o:ve(o)?a&&Ea(n)?o:o.value:oe(o)?i?Ru(o):xi(o):o}}class Su extends Iu{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];if(!this._isShallow){const l=Wt(s);if(!De(r)&&!Wt(r)&&(s=Y(s),r=Y(r)),!B(t)&&ve(s)&&!ve(r))return l||(s.value=r),!0}const a=B(t)&&Ea(n)?Number(n)<t.length:J(t,n),o=Reflect.set(t,n,r,ve(t)?t:i);return t===Y(i)&&(a?Lt(r,s)&&ct(t,"set",n,r):ct(t,"add",n,r)),o}deleteProperty(t,n){const r=J(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&ct(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!zt(n)||!Eu.has(n))&&me(t,"has",n),r}ownKeys(t){return me(t,"iterate",B(t)?"length":tn),Reflect.ownKeys(t)}}class tg extends Iu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ng=new Su,rg=new tg,ig=new Su(!0);const Hs=e=>e,$r=e=>Reflect.getPrototypeOf(e);function sg(e,t,n){return function(...r){const i=this.__v_raw,s=Y(i),a=En(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),u=n?Hs:t?ii:de;return!t&&me(s,"iterate",l?js:tn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function jr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ag(e,t){const n={get(i){const s=this.__v_raw,a=Y(s),o=Y(i);e||(Lt(i,o)&&me(a,"get",i),me(a,"get",o));const{has:l}=$r(a),c=t?Hs:e?ii:de;if(l.call(a,i))return c(s.get(i));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&me(Y(i),"iterate",tn),i.size},has(i){const s=this.__v_raw,a=Y(s),o=Y(i);return e||(Lt(i,o)&&me(a,"has",i),me(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=Y(o),c=t?Hs:e?ii:de;return!e&&me(l,"iterate",tn),o.forEach((u,f)=>i.call(s,c(u),c(f),a))}};return ye(n,e?{add:jr("add"),set:jr("set"),delete:jr("delete"),clear:jr("clear")}:{add(i){!t&&!De(i)&&!Wt(i)&&(i=Y(i));const s=Y(this);return $r(s).has.call(s,i)||(s.add(i),ct(s,"add",i,i)),this},set(i,s){!t&&!De(s)&&!Wt(s)&&(s=Y(s));const a=Y(this),{has:o,get:l}=$r(a);let c=o.call(a,i);c||(i=Y(i),c=o.call(a,i));const u=l.call(a,i);return a.set(i,s),c?Lt(s,u)&&ct(a,"set",i,s):ct(a,"add",i,s),this},delete(i){const s=Y(this),{has:a,get:o}=$r(s);let l=a.call(s,i);l||(i=Y(i),l=a.call(s,i)),o&&o.call(s,i);const c=s.delete(i);return l&&ct(s,"delete",i,void 0),c},clear(){const i=Y(this),s=i.size!==0,a=i.clear();return s&&ct(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=sg(i,e,t)}),n}function Ra(e,t){const n=ag(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(J(n,i)&&i in r?n:r,i,s)}const og={get:Ra(!1,!1)},lg={get:Ra(!1,!0)},cg={get:Ra(!0,!1)};const Au=new WeakMap,Tu=new WeakMap,Cu=new WeakMap,ug=new WeakMap;function fg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dg(e){return e.__v_skip||!Object.isExtensible(e)?0:fg(Um(e))}function xi(e){return Wt(e)?e:ka(e,!1,ng,og,Au)}function Pu(e){return ka(e,!1,ig,lg,Tu)}function Ru(e){return ka(e,!0,rg,cg,Cu)}function ka(e,t,n,r,i){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=dg(e);if(s===0)return e;const a=i.get(e);if(a)return a;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function In(e){return Wt(e)?In(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function De(e){return!!(e&&e.__v_isShallow)}function Oa(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function hg(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&cu(e,"__v_skip",!0),e}const de=e=>oe(e)?xi(e):e,ii=e=>oe(e)?Ru(e):e;function ve(e){return e?e.__v_isRef===!0:!1}function Tr(e){return ku(e,!1)}function pg(e){return ku(e,!0)}function ku(e,t){return ve(e)?e:new mg(e,t)}class mg{constructor(t,n){this.dep=new Pa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:de(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||De(t)||Wt(t);t=r?t:Y(t),Lt(t,n)&&(this._rawValue=t,this._value=r?t:de(t),this.dep.trigger())}}function Ft(e){return ve(e)?e.value:e}const gg={get:(e,t,n)=>t==="__v_raw"?e:Ft(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ve(i)&&!ve(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ou(e){return In(e)?e:new Proxy(e,gg)}class vg{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Pa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=dr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return gu(this,!0),!0}get value(){const t=this.dep.track();return bu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yg(e,t,n=!1){let r,i;return V(e)?r=e:(r=e.get,i=e.set),new vg(r,i,n)}const Hr={},si=new WeakMap;let Qt;function bg(e,t=!1,n=Qt){if(n){let r=si.get(n);r||si.set(n,r=[]),r.push(e)}}function _g(e,t,n=ne){const{immediate:r,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=n,c=k=>i?k:De(k)||i===!1||i===0?ut(k,1):ut(k);let u,f,d,m,I=!1,S=!1;if(ve(e)?(f=()=>e.value,I=De(e)):In(e)?(f=()=>c(e),I=!0):B(e)?(S=!0,I=e.some(k=>In(k)||De(k)),f=()=>e.map(k=>{if(ve(k))return k.value;if(In(k))return c(k);if(V(k))return l?l(k,2):k()})):V(e)?t?f=l?()=>l(e,2):e:f=()=>{if(d){vt();try{d()}finally{yt()}}const k=Qt;Qt=u;try{return l?l(e,3,[m]):e(m)}finally{Qt=k}}:f=tt,t&&i){const k=f,W=i===!0?1/0:i;f=()=>ut(k(),W)}const M=qm(),v=()=>{u.stop(),M&&M.active&&wa(M.effects,u)};if(s&&t){const k=t;t=(...W)=>{k(...W),v()}}let y=S?new Array(e.length).fill(Hr):Hr;const P=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(t){const W=u.run();if(i||I||(S?W.some((ae,X)=>Lt(ae,y[X])):Lt(W,y))){d&&d();const ae=Qt;Qt=u;try{const X=[W,y===Hr?void 0:S&&y[0]===Hr?[]:y,m];y=W,l?l(t,3,X):t(...X)}finally{Qt=ae}}}else u.run()};return o&&o(P),u=new pu(f),u.scheduler=a?()=>a(P,!1):P,m=k=>bg(k,!1,u),d=u.onStop=()=>{const k=si.get(u);if(k){if(l)l(k,4);else for(const W of k)W();si.delete(u)}},t?r?P(!0):y=u.run():a?a(P.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function ut(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ve(e))ut(e.value,t,n);else if(B(e))for(let r=0;r<e.length;r++)ut(e[r],t,n);else if(su(e)||En(e))e.forEach(r=>{ut(r,t,n)});else if(lu(e)){for(const r in e)ut(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ut(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cr(e,t,n,r){try{return r?e(...r):e()}catch(i){Ni(i,t,n)}}function it(e,t,n,r){if(V(e)){const i=Cr(e,t,n,r);return i&&au(i)&&i.catch(s=>{Ni(s,t,n)}),i}if(B(e)){const i=[];for(let s=0;s<e.length;s++)i.push(it(e[s],t,n,r));return i}}function Ni(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||ne;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,l,c)===!1)return}o=o.parent}if(s){vt(),Cr(s,null,10,[e,l,c]),yt();return}}wg(e,n,i,r,a)}function wg(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const _e=[];let Qe=-1;const Sn=[];let Pt=null,mn=0;const xu=Promise.resolve();let ai=null;function Nu(e){const t=ai||xu;return e?t.then(this?e.bind(this):e):t}function Eg(e){let t=Qe+1,n=_e.length;for(;t<n;){const r=t+n>>>1,i=_e[r],s=pr(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function xa(e){if(!(e.flags&1)){const t=pr(e),n=_e[_e.length-1];!n||!(e.flags&2)&&t>=pr(n)?_e.push(e):_e.splice(Eg(t),0,e),e.flags|=1,Du()}}function Du(){ai||(ai=xu.then(Lu))}function Ig(e){B(e)?Sn.push(...e):Pt&&e.id===-1?Pt.splice(mn+1,0,e):e.flags&1||(Sn.push(e),e.flags|=1),Du()}function Mo(e,t,n=Qe+1){for(;n<_e.length;n++){const r=_e[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;_e.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mu(e){if(Sn.length){const t=[...new Set(Sn)].sort((n,r)=>pr(n)-pr(r));if(Sn.length=0,Pt){Pt.push(...t);return}for(Pt=t,mn=0;mn<Pt.length;mn++){const n=Pt[mn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pt=null,mn=0}}const pr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Lu(e){try{for(Qe=0;Qe<_e.length;Qe++){const t=_e[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Cr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qe<_e.length;Qe++){const t=_e[Qe];t&&(t.flags&=-2)}Qe=-1,_e.length=0,Mu(),ai=null,(_e.length||Sn.length)&&Lu()}}let Re=null,Fu=null;function oi(e){const t=Re;return Re=e,Fu=e&&e.type.__scopeId||null,t}function Gr(e,t=Re,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&zo(-1);const s=oi(t);let a;try{a=e(...i)}finally{oi(s),r._d&&zo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function $w(e,t){if(Re===null)return e;const n=Fi(Re),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=ne]=t[i];s&&(V(s)&&(s={mounted:s,updated:s}),s.deep&&ut(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function Jt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[r];l&&(vt(),it(l,n,8,[e.el,o,e,t]),yt())}}const Sg=Symbol("_vte"),Ag=e=>e.__isTeleport,Tg=Symbol("_leaveCb");function Na(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Na(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Da(e,t){return V(e)?ye({name:e.name},t,{setup:e}):e}function Uu(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function tr(e,t,n,r,i=!1){if(B(e)){e.forEach((I,S)=>tr(I,t&&(B(t)?t[S]:t),n,r,i));return}if(nr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&tr(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?Fi(r.component):r.el,a=i?null:s,{i:o,r:l}=e,c=t&&t.r,u=o.refs===ne?o.refs={}:o.refs,f=o.setupState,d=Y(f),m=f===ne?iu:I=>J(d,I);if(c!=null&&c!==l){if(le(c))u[c]=null,m(c)&&(f[c]=null);else if(ve(c)){c.value=null;const I=t;I.k&&(u[I.k]=null)}}if(V(l))Cr(l,o,12,[a,u]);else{const I=le(l),S=ve(l);if(I||S){const M=()=>{if(e.f){const v=I?m(l)?f[l]:u[l]:l.value;if(i)B(v)&&wa(v,s);else if(B(v))v.includes(s)||v.push(s);else if(I)u[l]=[s],m(l)&&(f[l]=u[l]);else{const y=[s];l.value=y,e.k&&(u[e.k]=y)}}else I?(u[l]=a,m(l)&&(f[l]=a)):S&&(l.value=a,e.k&&(u[e.k]=a))};a?(M.id=-1,Pe(M,n)):M()}}}ki().requestIdleCallback;ki().cancelIdleCallback;const nr=e=>!!e.type.__asyncLoader,$u=e=>e.type.__isKeepAlive;function Cg(e,t){ju(e,"a",t)}function Pg(e,t){ju(e,"da",t)}function ju(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Di(t,r,n),n){let i=n.parent;for(;i&&i.parent;)$u(i.parent.vnode)&&Rg(r,t,n,i),i=i.parent}}function Rg(e,t,n,r){const i=Di(t,e,r,!0);Hu(()=>{wa(r[t],i)},n)}function Di(e,t,n=ge,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{vt();const o=Pr(n),l=it(t,n,e,a);return o(),yt(),l});return r?i.unshift(s):i.push(s),s}}const Et=e=>(t,n=ge)=>{(!gr||e==="sp")&&Di(e,(...r)=>t(...r),n)},kg=Et("bm"),Og=Et("m"),xg=Et("bu"),Ng=Et("u"),Dg=Et("bum"),Hu=Et("um"),Mg=Et("sp"),Lg=Et("rtg"),Fg=Et("rtc");function Ug(e,t=ge){Di("ec",e,t)}const $g="components";function rs(e,t){return Hg($g,e,!0,t)||e}const jg=Symbol.for("v-ndc");function Hg(e,t,n=!0,r=!1){const i=Re||ge;if(i){const s=i.type;{const o=Pv(s,!1);if(o&&(o===t||o===Me(t)||o===Ri(Me(t))))return s}const a=Lo(i[e]||s[e],t)||Lo(i.appContext[e],t);return!a&&r?s:a}}function Lo(e,t){return e&&(e[t]||e[Me(t)]||e[Ri(Me(t))])}function jw(e,t,n,r){let i;const s=n,a=B(e);if(a||le(e)){const o=a&&In(e);let l=!1,c=!1;o&&(l=!De(e),c=Wt(e),e=Oi(e)),i=new Array(e.length);for(let u=0,f=e.length;u<f;u++)i[u]=t(l?c?ii(de(e[u])):de(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(oe(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];i[l]=t(e[u],u,l,s)}}else i=[];return i}const Bs=e=>e?cf(e)?Fi(e):Bs(e.parent):null,rr=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bs(e.parent),$root:e=>Bs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Wu(e),$forceUpdate:e=>e.f||(e.f=()=>{xa(e.update)}),$nextTick:e=>e.n||(e.n=Nu.bind(e.proxy)),$watch:e=>lv.bind(e)}),is=(e,t)=>e!==ne&&!e.__isScriptSetup&&J(e,t),Bg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(is(r,t))return a[t]=1,r[t];if(i!==ne&&J(i,t))return a[t]=2,i[t];if((c=e.propsOptions[0])&&J(c,t))return a[t]=3,s[t];if(n!==ne&&J(n,t))return a[t]=4,n[t];Ws&&(a[t]=0)}}const u=rr[t];let f,d;if(u)return t==="$attrs"&&me(e.attrs,"get",""),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ne&&J(n,t))return a[t]=4,n[t];if(d=l.config.globalProperties,J(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return is(i,t)?(i[t]=n,!0):r!==ne&&J(r,t)?(r[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s,type:a}},o){let l,c;return!!(n[o]||e!==ne&&o[0]!=="$"&&J(e,o)||is(t,o)||(l=s[0])&&J(l,o)||J(r,o)||J(rr,o)||J(i.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Fo(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ws=!0;function Wg(e){const t=Wu(e),n=e.proxy,r=e.ctx;Ws=!1,t.beforeCreate&&Uo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:I,activated:S,deactivated:M,beforeDestroy:v,beforeUnmount:y,destroyed:P,unmounted:k,render:W,renderTracked:ae,renderTriggered:X,errorCaptured:Ee,serverPrefetch:Ve,expose:ze,inheritAttrs:St,components:Yt,directives:Ke,filters:Un}=t;if(c&&Vg(c,r,null),a)for(const Z in a){const G=a[Z];V(G)&&(r[Z]=G.bind(n))}if(i){const Z=i.call(n,n);oe(Z)&&(e.data=xi(Z))}if(Ws=!0,s)for(const Z in s){const G=s[Z],st=V(G)?G.bind(n,n):V(G.get)?G.get.bind(n,n):tt,At=!V(G)&&V(G.set)?G.set.bind(n):tt,Ge=ue({get:st,set:At});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ie=>Ge.value=Ie})}if(o)for(const Z in o)Bu(o[Z],r,n,Z);if(l){const Z=V(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(G=>{qr(G,Z[G])})}u&&Uo(u,e,"c");function ce(Z,G){B(G)?G.forEach(st=>Z(st.bind(n))):G&&Z(G.bind(n))}if(ce(kg,f),ce(Og,d),ce(xg,m),ce(Ng,I),ce(Cg,S),ce(Pg,M),ce(Ug,Ee),ce(Fg,ae),ce(Lg,X),ce(Dg,y),ce(Hu,k),ce(Mg,Ve),B(ze))if(ze.length){const Z=e.exposed||(e.exposed={});ze.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:st=>n[G]=st,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===tt&&(e.render=W),St!=null&&(e.inheritAttrs=St),Yt&&(e.components=Yt),Ke&&(e.directives=Ke),Ve&&Uu(e)}function Vg(e,t,n=tt){B(e)&&(e=Vs(e));for(const r in e){const i=e[r];let s;oe(i)?"default"in i?s=je(i.from||r,i.default,!0):s=je(i.from||r):s=je(i),ve(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Uo(e,t,n){it(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bu(e,t,n,r){let i=r.includes(".")?nf(n,r):()=>n[r];if(le(e)){const s=t[e];V(s)&&ir(i,s)}else if(V(e))ir(i,e.bind(n));else if(oe(e))if(B(e))e.forEach(s=>Bu(s,t,n,r));else{const s=V(e.handler)?e.handler.bind(n):t[e.handler];V(s)&&ir(i,s,e)}}function Wu(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>li(l,c,a,!0)),li(l,t,a)),oe(t)&&s.set(t,l),l}function li(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&li(e,s,n,!0),i&&i.forEach(a=>li(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=zg[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const zg={data:$o,props:jo,emits:jo,methods:Kn,computed:Kn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Kn,directives:Kn,watch:Gg,provide:$o,inject:Kg};function $o(e,t){return t?e?function(){return ye(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function Kg(e,t){return Kn(Vs(e),Vs(t))}function Vs(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Kn(e,t){return e?ye(Object.create(null),e,t):t}function jo(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:ye(Object.create(null),Fo(e),Fo(t??{})):t}function Gg(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Vu(){return{app:null,config:{isNativeTag:iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function Yg(e,t){return function(r,i=null){V(r)||(r=ye({},r)),i!=null&&!oe(i)&&(i=null);const s=Vu(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:qg++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:kv,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&V(u.install)?(a.add(u),u.install(c,...f)):V(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const m=c._ceVNode||fe(r,i);return m.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),e(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Fi(m.component)}},onUnmount(u){o.push(u)},unmount(){l&&(it(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=An;An=c;try{return u()}finally{An=f}}};return c}}let An=null;function qr(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function je(e,t,n=!1){const r=Iv();if(r||An){let i=An?An._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}const zu={},Ku=()=>Object.create(zu),Gu=e=>Object.getPrototypeOf(e)===zu;function Jg(e,t,n,r=!1){const i={},s=Ku();e.propsDefaults=Object.create(null),qu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Pu(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Xg(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=Y(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Mi(e.emitsOptions,d))continue;const m=t[d];if(l)if(J(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const I=Me(d);i[I]=zs(l,o,I,m,e,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{qu(e,t,i,s)&&(c=!0);let u;for(const f in o)(!t||!J(t,f)&&((u=ln(f))===f||!J(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=zs(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!J(t,f))&&(delete s[f],c=!0)}c&&ct(e.attrs,"set","")}function qu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Qn(l))continue;const c=t[l];let u;i&&J(i,u=Me(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Mi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=Y(n),c=o||ne;for(let u=0;u<s.length;u++){const f=s[u];n[f]=zs(i,l,f,c[f],e,!J(c,f))}}return a}function zs(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=J(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&V(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Pr(i);r=c[n]=l.call(null,t),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===ln(n))&&(r=!0))}return r}const Qg=new WeakMap;function Yu(e,t,n=!1){const r=n?Qg:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!V(e)){const u=f=>{l=!0;const[d,m]=Yu(f,t,!0);ye(a,d),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return oe(e)&&r.set(e,wn),wn;if(B(s))for(let u=0;u<s.length;u++){const f=Me(s[u]);Ho(f)&&(a[f]=ne)}else if(s)for(const u in s){const f=Me(u);if(Ho(f)){const d=s[u],m=a[f]=B(d)||V(d)?{type:d}:ye({},d),I=m.type;let S=!1,M=!0;if(B(I))for(let v=0;v<I.length;++v){const y=I[v],P=V(y)&&y.name;if(P==="Boolean"){S=!0;break}else P==="String"&&(M=!1)}else S=V(I)&&I.name==="Boolean";m[0]=S,m[1]=M,(S||J(m,"default"))&&o.push(f)}}const c=[a,o];return oe(e)&&r.set(e,c),c}function Ho(e){return e[0]!=="$"&&!Qn(e)}const Ma=e=>e==="_"||e==="_ctx"||e==="$stable",La=e=>B(e)?e.map(Ze):[Ze(e)],Zg=(e,t,n)=>{if(t._n)return t;const r=Gr((...i)=>La(t(...i)),n);return r._c=!1,r},Ju=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Ma(i))continue;const s=e[i];if(V(s))t[i]=Zg(i,s,r);else if(s!=null){const a=La(s);t[i]=()=>a}}},Xu=(e,t)=>{const n=La(t);e.slots.default=()=>n},Qu=(e,t,n)=>{for(const r in t)(n||!Ma(r))&&(e[r]=t[r])},ev=(e,t,n)=>{const r=e.slots=Ku();if(e.vnode.shapeFlag&32){const i=t._;i?(Qu(r,t,n),n&&cu(r,"_",i,!0)):Ju(t,r)}else t&&Xu(e,t)},tv=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ne;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:Qu(i,t,n):(s=!t.$stable,Ju(t,i)),a=t}else t&&(Xu(e,t),a={default:1});if(s)for(const o in i)!Ma(o)&&a[o]==null&&delete i[o]},Pe=mv;function nv(e){return rv(e)}function rv(e,t){const n=ki();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=tt,insertStaticContent:I}=e,S=(h,p,g,_=null,E=null,b=null,O=void 0,R=null,C=!!p.dynamicChildren)=>{if(h===p)return;h&&!Hn(h,p)&&(_=w(h),Ie(h,E,b,!0),h=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:A,ref:$,shapeFlag:N}=p;switch(A){case Li:M(h,p,g,_);break;case Vt:v(h,p,g,_);break;case as:h==null&&y(p,g,_,O);break;case Ne:Yt(h,p,g,_,E,b,O,R,C);break;default:N&1?W(h,p,g,_,E,b,O,R,C):N&6?Ke(h,p,g,_,E,b,O,R,C):(N&64||N&128)&&A.process(h,p,g,_,E,b,O,R,C,L)}$!=null&&E?tr($,h&&h.ref,b,p||h,!p):$==null&&h&&h.ref!=null&&tr(h.ref,null,b,h,!0)},M=(h,p,g,_)=>{if(h==null)r(p.el=o(p.children),g,_);else{const E=p.el=h.el;p.children!==h.children&&c(E,p.children)}},v=(h,p,g,_)=>{h==null?r(p.el=l(p.children||""),g,_):p.el=h.el},y=(h,p,g,_)=>{[h.el,h.anchor]=I(h.children,p,g,_,h.el,h.anchor)},P=({el:h,anchor:p},g,_)=>{let E;for(;h&&h!==p;)E=d(h),r(h,g,_),h=E;r(p,g,_)},k=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),i(h),h=g;i(p)},W=(h,p,g,_,E,b,O,R,C)=>{p.type==="svg"?O="svg":p.type==="math"&&(O="mathml"),h==null?ae(p,g,_,E,b,O,R,C):Ve(h,p,E,b,O,R,C)},ae=(h,p,g,_,E,b,O,R)=>{let C,A;const{props:$,shapeFlag:N,transition:U,dirs:H}=h;if(C=h.el=a(h.type,b,$&&$.is,$),N&8?u(C,h.children):N&16&&Ee(h.children,C,null,_,E,ss(h,b),O,R),H&&Jt(h,null,_,"created"),X(C,h,h.scopeId,O,_),$){for(const re in $)re!=="value"&&!Qn(re)&&s(C,re,null,$[re],b,_);"value"in $&&s(C,"value",null,$.value,b),(A=$.onVnodeBeforeMount)&&Xe(A,_,h)}H&&Jt(h,null,_,"beforeMount");const K=iv(E,U);K&&U.beforeEnter(C),r(C,p,g),((A=$&&$.onVnodeMounted)||K||H)&&Pe(()=>{A&&Xe(A,_,h),K&&U.enter(C),H&&Jt(h,null,_,"mounted")},E)},X=(h,p,g,_,E)=>{if(g&&m(h,g),_)for(let b=0;b<_.length;b++)m(h,_[b]);if(E){let b=E.subTree;if(p===b||sf(b.type)&&(b.ssContent===p||b.ssFallback===p)){const O=E.vnode;X(h,O,O.scopeId,O.slotScopeIds,E.parent)}}},Ee=(h,p,g,_,E,b,O,R,C=0)=>{for(let A=C;A<h.length;A++){const $=h[A]=R?Rt(h[A]):Ze(h[A]);S(null,$,p,g,_,E,b,O,R)}},Ve=(h,p,g,_,E,b,O)=>{const R=p.el=h.el;let{patchFlag:C,dynamicChildren:A,dirs:$}=p;C|=h.patchFlag&16;const N=h.props||ne,U=p.props||ne;let H;if(g&&Xt(g,!1),(H=U.onVnodeBeforeUpdate)&&Xe(H,g,p,h),$&&Jt(p,h,g,"beforeUpdate"),g&&Xt(g,!0),(N.innerHTML&&U.innerHTML==null||N.textContent&&U.textContent==null)&&u(R,""),A?ze(h.dynamicChildren,A,R,g,_,ss(p,E),b):O||G(h,p,R,null,g,_,ss(p,E),b,!1),C>0){if(C&16)St(R,N,U,g,E);else if(C&2&&N.class!==U.class&&s(R,"class",null,U.class,E),C&4&&s(R,"style",N.style,U.style,E),C&8){const K=p.dynamicProps;for(let re=0;re<K.length;re++){const Q=K[re],Se=N[Q],Ae=U[Q];(Ae!==Se||Q==="value")&&s(R,Q,Se,Ae,E,g)}}C&1&&h.children!==p.children&&u(R,p.children)}else!O&&A==null&&St(R,N,U,g,E);((H=U.onVnodeUpdated)||$)&&Pe(()=>{H&&Xe(H,g,p,h),$&&Jt(p,h,g,"updated")},_)},ze=(h,p,g,_,E,b,O)=>{for(let R=0;R<p.length;R++){const C=h[R],A=p[R],$=C.el&&(C.type===Ne||!Hn(C,A)||C.shapeFlag&198)?f(C.el):g;S(C,A,$,null,_,E,b,O,!0)}},St=(h,p,g,_,E)=>{if(p!==g){if(p!==ne)for(const b in p)!Qn(b)&&!(b in g)&&s(h,b,p[b],null,E,_);for(const b in g){if(Qn(b))continue;const O=g[b],R=p[b];O!==R&&b!=="value"&&s(h,b,R,O,E,_)}"value"in g&&s(h,"value",p.value,g.value,E)}},Yt=(h,p,g,_,E,b,O,R,C)=>{const A=p.el=h?h.el:o(""),$=p.anchor=h?h.anchor:o("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:H}=p;H&&(R=R?R.concat(H):H),h==null?(r(A,g,_),r($,g,_),Ee(p.children||[],g,$,E,b,O,R,C)):N>0&&N&64&&U&&h.dynamicChildren?(ze(h.dynamicChildren,U,g,E,b,O,R),(p.key!=null||E&&p===E.subTree)&&Zu(h,p,!0)):G(h,p,g,$,E,b,O,R,C)},Ke=(h,p,g,_,E,b,O,R,C)=>{p.slotScopeIds=R,h==null?p.shapeFlag&512?E.ctx.activate(p,g,_,O,C):Un(p,g,_,E,b,O,C):un(h,p,C)},Un=(h,p,g,_,E,b,O)=>{const R=h.component=Ev(h,_,E);if($u(h)&&(R.ctx.renderer=L),Sv(R,!1,O),R.asyncDep){if(E&&E.registerDep(R,ce,O),!h.el){const C=R.subTree=fe(Vt);v(null,C,p,g),h.placeholder=C.el}}else ce(R,h,p,g,E,b,O)},un=(h,p,g)=>{const _=p.component=h.component;if(hv(h,p,g))if(_.asyncDep&&!_.asyncResolved){Z(_,p,g);return}else _.next=p,_.update();else p.el=h.el,_.vnode=p},ce=(h,p,g,_,E,b,O)=>{const R=()=>{if(h.isMounted){let{next:N,bu:U,u:H,parent:K,vnode:re}=h;{const Ye=ef(h);if(Ye){N&&(N.el=re.el,Z(h,N,O)),Ye.asyncDep.then(()=>{h.isUnmounted||R()});return}}let Q=N,Se;Xt(h,!1),N?(N.el=re.el,Z(h,N,O)):N=re,U&&Kr(U),(Se=N.props&&N.props.onVnodeBeforeUpdate)&&Xe(Se,K,N,re),Xt(h,!0);const Ae=Wo(h),qe=h.subTree;h.subTree=Ae,S(qe,Ae,f(qe.el),w(qe),h,E,b),N.el=Ae.el,Q===null&&pv(h,Ae.el),H&&Pe(H,E),(Se=N.props&&N.props.onVnodeUpdated)&&Pe(()=>Xe(Se,K,N,re),E)}else{let N;const{el:U,props:H}=p,{bm:K,m:re,parent:Q,root:Se,type:Ae}=h,qe=nr(p);Xt(h,!1),K&&Kr(K),!qe&&(N=H&&H.onVnodeBeforeMount)&&Xe(N,Q,p),Xt(h,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(Ae);const Ye=h.subTree=Wo(h);S(null,Ye,g,_,h,E,b),p.el=Ye.el}if(re&&Pe(re,E),!qe&&(N=H&&H.onVnodeMounted)){const Ye=p;Pe(()=>Xe(N,Q,Ye),E)}(p.shapeFlag&256||Q&&nr(Q.vnode)&&Q.vnode.shapeFlag&256)&&h.a&&Pe(h.a,E),h.isMounted=!0,p=g=_=null}};h.scope.on();const C=h.effect=new pu(R);h.scope.off();const A=h.update=C.run.bind(C),$=h.job=C.runIfDirty.bind(C);$.i=h,$.id=h.uid,C.scheduler=()=>xa($),Xt(h,!0),A()},Z=(h,p,g)=>{p.component=h;const _=h.vnode.props;h.vnode=p,h.next=null,Xg(h,p.props,_,g),tv(h,p.children,g),vt(),Mo(h),yt()},G=(h,p,g,_,E,b,O,R,C=!1)=>{const A=h&&h.children,$=h?h.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:H}=p;if(U>0){if(U&128){At(A,N,g,_,E,b,O,R,C);return}else if(U&256){st(A,N,g,_,E,b,O,R,C);return}}H&8?($&16&&xe(A,E,b),N!==A&&u(g,N)):$&16?H&16?At(A,N,g,_,E,b,O,R,C):xe(A,E,b,!0):($&8&&u(g,""),H&16&&Ee(N,g,_,E,b,O,R,C))},st=(h,p,g,_,E,b,O,R,C)=>{h=h||wn,p=p||wn;const A=h.length,$=p.length,N=Math.min(A,$);let U;for(U=0;U<N;U++){const H=p[U]=C?Rt(p[U]):Ze(p[U]);S(h[U],H,g,null,E,b,O,R,C)}A>$?xe(h,E,b,!0,!1,N):Ee(p,g,_,E,b,O,R,C,N)},At=(h,p,g,_,E,b,O,R,C)=>{let A=0;const $=p.length;let N=h.length-1,U=$-1;for(;A<=N&&A<=U;){const H=h[A],K=p[A]=C?Rt(p[A]):Ze(p[A]);if(Hn(H,K))S(H,K,g,null,E,b,O,R,C);else break;A++}for(;A<=N&&A<=U;){const H=h[N],K=p[U]=C?Rt(p[U]):Ze(p[U]);if(Hn(H,K))S(H,K,g,null,E,b,O,R,C);else break;N--,U--}if(A>N){if(A<=U){const H=U+1,K=H<$?p[H].el:_;for(;A<=U;)S(null,p[A]=C?Rt(p[A]):Ze(p[A]),g,K,E,b,O,R,C),A++}}else if(A>U)for(;A<=N;)Ie(h[A],E,b,!0),A++;else{const H=A,K=A,re=new Map;for(A=K;A<=U;A++){const Ce=p[A]=C?Rt(p[A]):Ze(p[A]);Ce.key!=null&&re.set(Ce.key,A)}let Q,Se=0;const Ae=U-K+1;let qe=!1,Ye=0;const $n=new Array(Ae);for(A=0;A<Ae;A++)$n[A]=0;for(A=H;A<=N;A++){const Ce=h[A];if(Se>=Ae){Ie(Ce,E,b,!0);continue}let Je;if(Ce.key!=null)Je=re.get(Ce.key);else for(Q=K;Q<=U;Q++)if($n[Q-K]===0&&Hn(Ce,p[Q])){Je=Q;break}Je===void 0?Ie(Ce,E,b,!0):($n[Je-K]=A+1,Je>=Ye?Ye=Je:qe=!0,S(Ce,p[Je],g,null,E,b,O,R,C),Se++)}const Qa=qe?sv($n):wn;for(Q=Qa.length-1,A=Ae-1;A>=0;A--){const Ce=K+A,Je=p[Ce],Za=p[Ce+1],eo=Ce+1<$?Za.el||Za.placeholder:_;$n[A]===0?S(null,Je,g,eo,E,b,O,R,C):qe&&(Q<0||A!==Qa[Q]?Ge(Je,g,eo,2):Q--)}}},Ge=(h,p,g,_,E=null)=>{const{el:b,type:O,transition:R,children:C,shapeFlag:A}=h;if(A&6){Ge(h.component.subTree,p,g,_);return}if(A&128){h.suspense.move(p,g,_);return}if(A&64){O.move(h,p,g,L);return}if(O===Ne){r(b,p,g);for(let N=0;N<C.length;N++)Ge(C[N],p,g,_);r(h.anchor,p,g);return}if(O===as){P(h,p,g);return}if(_!==2&&A&1&&R)if(_===0)R.beforeEnter(b),r(b,p,g),Pe(()=>R.enter(b),E);else{const{leave:N,delayLeave:U,afterLeave:H}=R,K=()=>{h.ctx.isUnmounted?i(b):r(b,p,g)},re=()=>{b._isLeaving&&b[Tg](!0),N(b,()=>{K(),H&&H()})};U?U(b,K,re):re()}else r(b,p,g)},Ie=(h,p,g,_=!1,E=!1)=>{const{type:b,props:O,ref:R,children:C,dynamicChildren:A,shapeFlag:$,patchFlag:N,dirs:U,cacheIndex:H}=h;if(N===-2&&(E=!1),R!=null&&(vt(),tr(R,null,g,h,!0),yt()),H!=null&&(p.renderCache[H]=void 0),$&256){p.ctx.deactivate(h);return}const K=$&1&&U,re=!nr(h);let Q;if(re&&(Q=O&&O.onVnodeBeforeUnmount)&&Xe(Q,p,h),$&6)Lr(h.component,g,_);else{if($&128){h.suspense.unmount(g,_);return}K&&Jt(h,null,p,"beforeUnmount"),$&64?h.type.remove(h,p,g,L,_):A&&!A.hasOnce&&(b!==Ne||N>0&&N&64)?xe(A,p,g,!1,!0):(b===Ne&&N&384||!E&&$&16)&&xe(C,p,g),_&&fn(h)}(re&&(Q=O&&O.onVnodeUnmounted)||K)&&Pe(()=>{Q&&Xe(Q,p,h),K&&Jt(h,null,p,"unmounted")},g)},fn=h=>{const{type:p,el:g,anchor:_,transition:E}=h;if(p===Ne){dn(g,_);return}if(p===as){k(h);return}const b=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:R}=E,C=()=>O(g,b);R?R(h.el,b,C):C()}else b()},dn=(h,p)=>{let g;for(;h!==p;)g=d(h),i(h),h=g;i(p)},Lr=(h,p,g)=>{const{bum:_,scope:E,job:b,subTree:O,um:R,m:C,a:A}=h;Bo(C),Bo(A),_&&Kr(_),E.stop(),b&&(b.flags|=8,Ie(O,h,p,g)),R&&Pe(R,p),Pe(()=>{h.isUnmounted=!0},p)},xe=(h,p,g,_=!1,E=!1,b=0)=>{for(let O=b;O<h.length;O++)Ie(h[O],p,g,_,E)},w=h=>{if(h.shapeFlag&6)return w(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),g=p&&p[Sg];return g?d(g):p};let D=!1;const x=(h,p,g)=>{h==null?p._vnode&&Ie(p._vnode,null,null,!0):S(p._vnode||null,h,p,null,null,null,g),p._vnode=h,D||(D=!0,Mo(),Mu(),D=!1)},L={p:S,um:Ie,m:Ge,r:fn,mt:Un,mc:Ee,pc:G,pbc:ze,n:w,o:e};return{render:x,hydrate:void 0,createApp:Yg(x)}}function ss({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function iv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Zu(e,t,n=!1){const r=e.children,i=t.children;if(B(r)&&B(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Rt(i[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Zu(a,o)),o.type===Li&&o.patchFlag!==-1&&(o.el=a.el),o.type===Vt&&!o.el&&(o.el=a.el)}}function sv(e){const t=e.slice(),n=[0];let r,i,s,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<c?s=o+1:a=o;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function ef(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ef(t)}function Bo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const av=Symbol.for("v-scx"),ov=()=>je(av);function ir(e,t,n){return tf(e,t,n)}function tf(e,t,n=ne){const{immediate:r,deep:i,flush:s,once:a}=n,o=ye({},n),l=t&&r||!t&&s!=="post";let c;if(gr){if(s==="sync"){const m=ov();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=tt,m.resume=tt,m.pause=tt,m}}const u=ge;o.call=(m,I,S)=>it(m,u,I,S);let f=!1;s==="post"?o.scheduler=m=>{Pe(m,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(m,I)=>{I?m():xa(m)}),o.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=_g(e,t,o);return gr&&(c?c.push(d):l&&d()),d}function lv(e,t,n){const r=this.proxy,i=le(e)?e.includes(".")?nf(r,e):()=>r[e]:e.bind(r,r);let s;V(t)?s=t:(s=t.handler,n=t);const a=Pr(this),o=tf(i,s.bind(r),n);return a(),o}function nf(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const cv=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Me(t)}Modifiers`]||e[`${ln(t)}Modifiers`];function uv(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ne;let i=n;const s=t.startsWith("update:"),a=s&&cv(r,t.slice(7));a&&(a.trim&&(i=n.map(u=>le(u)?u.trim():u)),a.number&&(i=n.map(Fs)));let o,l=r[o=Qi(t)]||r[o=Qi(Me(t))];!l&&s&&(l=r[o=Qi(ln(t))]),l&&it(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,it(c,e,6,i)}}function rf(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!V(e)){const l=c=>{const u=rf(c,t,!0);u&&(o=!0,ye(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(oe(e)&&r.set(e,null),null):(B(s)?s.forEach(l=>a[l]=null):ye(a,s),oe(e)&&r.set(e,a),a)}function Mi(e,t){return!e||!Ti(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,ln(t))||J(e,t))}function Wo(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:m,ctx:I,inheritAttrs:S}=e,M=oi(e);let v,y;try{if(n.shapeFlag&4){const k=i||r,W=k;v=Ze(c.call(W,k,u,f,m,d,I)),y=o}else{const k=t;v=Ze(k.length>1?k(f,{attrs:o,slots:a,emit:l}):k(f,null)),y=t.props?o:fv(o)}}catch(k){sr.length=0,Ni(k,e,1),v=fe(Vt)}let P=v;if(y&&S!==!1){const k=Object.keys(y),{shapeFlag:W}=P;k.length&&W&7&&(s&&k.some(_a)&&(y=dv(y,s)),P=On(P,y,!1,!0))}return n.dirs&&(P=On(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&Na(P,n.transition),v=P,oi(M),v}const fv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ti(n))&&((t||(t={}))[n]=e[n]);return t},dv=(e,t)=>{const n={};for(const r in e)(!_a(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function hv(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Vo(r,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==r[d]&&!Mi(c,d))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Vo(r,a,c):!0:!!a;return!1}function Vo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Mi(n,s))return!0}return!1}function pv({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const sf=e=>e.__isSuspense;function mv(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Ig(e)}const Ne=Symbol.for("v-fgt"),Li=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),sr=[];let ke=null;function ar(e=!1){sr.push(ke=e?null:[])}function gv(){sr.pop(),ke=sr[sr.length-1]||null}let mr=1;function zo(e,t=!1){mr+=e,e<0&&ke&&t&&(ke.hasOnce=!0)}function af(e){return e.dynamicChildren=mr>0?ke||wn:null,gv(),mr>0&&ke&&ke.push(e),e}function Ks(e,t,n,r,i,s){return af(Ot(e,t,n,r,i,s,!0))}function of(e,t,n,r,i){return af(fe(e,t,n,r,i,!0))}function ci(e){return e?e.__v_isVNode===!0:!1}function Hn(e,t){return e.type===t.type&&e.key===t.key}const lf=({key:e})=>e??null,Yr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||ve(e)||V(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function Ot(e,t=null,n=null,r=0,i=null,s=e===Ne?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lf(t),ref:t&&Yr(t),scopeId:Fu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Re};return o?(Fa(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),mr>0&&!a&&ke&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ke.push(l),l}const fe=vv;function vv(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===jg)&&(e=Vt),ci(e)){const o=On(e,t,!0);return n&&Fa(o,n),mr>0&&!s&&ke&&(o.shapeFlag&6?ke[ke.indexOf(e)]=o:ke.push(o)),o.patchFlag=-2,o}if(Rv(e)&&(e=e.__vccOpts),t){t=yv(t);let{class:o,style:l}=t;o&&!le(o)&&(t.class=Sa(o)),oe(l)&&(Oa(l)&&!B(l)&&(l=ye({},l)),t.style=Ia(l))}const a=le(e)?1:sf(e)?128:Ag(e)?64:oe(e)?4:V(e)?2:0;return Ot(e,t,n,r,i,a,s,!0)}function yv(e){return e?Oa(e)||Gu(e)?ye({},e):e:null}function On(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,c=t?bv(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&lf(c),ref:t&&t.ref?n&&s?B(s)?s.concat(Yr(t)):[s,Yr(t)]:Yr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&On(e.ssContent),ssFallback:e.ssFallback&&On(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Na(u,l.clone(u)),u}function Gn(e=" ",t=0){return fe(Li,null,e,t)}function Hw(e="",t=!1){return t?(ar(),of(Vt,null,e)):fe(Vt,null,e)}function Ze(e){return e==null||typeof e=="boolean"?fe(Vt):B(e)?fe(Ne,null,e.slice()):ci(e)?Rt(e):fe(Li,null,String(e))}function Rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:On(e)}function Fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Fa(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Gu(t)?t._ctx=Re:i===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),r&64?(n=16,t=[Gn(t)]):n=8);e.children=t,e.shapeFlag|=n}function bv(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Sa([t.class,r.class]));else if(i==="style")t.style=Ia([t.style,r.style]);else if(Ti(i)){const s=t[i],a=r[i];a&&s!==a&&!(B(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Xe(e,t,n,r=null){it(e,t,7,[n,r])}const _v=Vu();let wv=0;function Ev(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||_v,s={uid:wv++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yu(r,i),emitsOptions:rf(r,i),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=uv.bind(null,s),e.ce&&e.ce(s),s}let ge=null;const Iv=()=>ge||Re;let ui,Gs;{const e=ki(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};ui=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),Gs=t("__VUE_SSR_SETTERS__",n=>gr=n)}const Pr=e=>{const t=ge;return ui(e),e.scope.on(),()=>{e.scope.off(),ui(t)}},Ko=()=>{ge&&ge.scope.off(),ui(null)};function cf(e){return e.vnode.shapeFlag&4}let gr=!1;function Sv(e,t=!1,n=!1){t&&Gs(t);const{props:r,children:i}=e.vnode,s=cf(e);Jg(e,r,s,t),ev(e,i,n||t);const a=s?Av(e,t):void 0;return t&&Gs(!1),a}function Av(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Bg);const{setup:r}=n;if(r){vt();const i=e.setupContext=r.length>1?Cv(e):null,s=Pr(e),a=Cr(r,e,0,[e.props,i]),o=au(a);if(yt(),s(),(o||e.sp)&&!nr(e)&&Uu(e),o){if(a.then(Ko,Ko),t)return a.then(l=>{Go(e,l)}).catch(l=>{Ni(l,e,0)});e.asyncDep=a}else Go(e,a)}else uf(e)}function Go(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Ou(t)),uf(e)}function uf(e,t,n){const r=e.type;e.render||(e.render=r.render||tt);{const i=Pr(e);vt();try{Wg(e)}finally{yt(),i()}}}const Tv={get(e,t){return me(e,"get",""),e[t]}};function Cv(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Tv),slots:e.slots,emit:e.emit,expose:t}}function Fi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ou(hg(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in rr)return rr[n](e)},has(t,n){return n in t||n in rr}})):e.proxy}function Pv(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Rv(e){return V(e)&&"__vccOpts"in e}const ue=(e,t)=>yg(e,t,gr);function Ua(e,t,n){const r=arguments.length;return r===2?oe(t)&&!B(t)?ci(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ci(n)&&(n=[n]),fe(e,t,n))}const kv="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qs;const qo=typeof window<"u"&&window.trustedTypes;if(qo)try{qs=qo.createPolicy("vue",{createHTML:e=>e})}catch{}const ff=qs?e=>qs.createHTML(e):e=>e,Ov="http://www.w3.org/2000/svg",xv="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,Yo=lt&&lt.createElement("template"),Nv={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?lt.createElementNS(Ov,e):t==="mathml"?lt.createElementNS(xv,e):n?lt.createElement(e,{is:n}):lt.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Yo.innerHTML=ff(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=Yo.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Dv=Symbol("_vtc");function Mv(e,t,n){const r=e[Dv];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const fi=Symbol("_vod"),df=Symbol("_vsh"),Bw={name:"show",beforeMount(e,{value:t},{transition:n}){e[fi]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Bn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Bn(e,!0),r.enter(e)):r.leave(e,()=>{Bn(e,!1)}):Bn(e,t))},beforeUnmount(e,{value:t}){Bn(e,t)}};function Bn(e,t){e.style.display=t?e[fi]:"none",e[df]=!t}const Lv=Symbol(""),Fv=/(^|;)\s*display\s*:/;function Uv(e,t,n){const r=e.style,i=le(n);let s=!1;if(n&&!i){if(t)if(le(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Jr(r,o,"")}else for(const a in t)n[a]==null&&Jr(r,a,"");for(const a in n)a==="display"&&(s=!0),Jr(r,a,n[a])}else if(i){if(t!==n){const a=r[Lv];a&&(n+=";"+a),r.cssText=n,s=Fv.test(n)}}else t&&e.removeAttribute("style");fi in e&&(e[fi]=s?r.display:"",e[df]&&(r.display="none"))}const Jo=/\s*!important$/;function Jr(e,t,n){if(B(n))n.forEach(r=>Jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$v(e,t);Jo.test(n)?e.setProperty(ln(r),n.replace(Jo,""),"important"):e[r]=n}}const Xo=["Webkit","Moz","ms"],os={};function $v(e,t){const n=os[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return os[t]=r;r=Ri(r);for(let i=0;i<Xo.length;i++){const s=Xo[i]+r;if(s in e)return os[t]=s}return t}const Qo="http://www.w3.org/1999/xlink";function Zo(e,t,n,r,i,s=Km(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Qo,t.slice(6,t.length)):e.setAttributeNS(Qo,t,n):n==null||s&&!uu(n)?e.removeAttribute(t):e.setAttribute(t,s?"":zt(n)?String(n):n)}function el(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ff(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=uu(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(i||t)}function gn(e,t,n,r){e.addEventListener(t,n,r)}function jv(e,t,n,r){e.removeEventListener(t,n,r)}const tl=Symbol("_vei");function Hv(e,t,n,r,i=null){const s=e[tl]||(e[tl]={}),a=s[t];if(r&&a)a.value=r;else{const[o,l]=Bv(t);if(r){const c=s[t]=zv(r,i);gn(e,o,c,l)}else a&&(jv(e,o,a,l),s[t]=void 0)}}const nl=/(?:Once|Passive|Capture)$/;function Bv(e){let t;if(nl.test(e)){t={};let r;for(;r=e.match(nl);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ln(e.slice(2)),t]}let ls=0;const Wv=Promise.resolve(),Vv=()=>ls||(Wv.then(()=>ls=0),ls=Date.now());function zv(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;it(Kv(r,n.value),t,5,[r])};return n.value=e,n.attached=Vv(),n}function Kv(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const rl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gv=(e,t,n,r,i,s)=>{const a=i==="svg";t==="class"?Mv(e,r,a):t==="style"?Uv(e,n,r):Ti(t)?_a(t)||Hv(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qv(e,t,r,a))?(el(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zo(e,t,r,a,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!le(r))?el(e,Me(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Zo(e,t,r,a))};function qv(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&rl(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return rl(t)&&le(n)?!1:t in e}const il=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>Kr(t,n):t};function Yv(e){e.target.composing=!0}function sl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cs=Symbol("_assign"),Ww={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[cs]=il(i);const s=r||i.props&&i.props.type==="number";gn(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Fs(o)),e[cs](o)}),n&&gn(e,"change",()=>{e.value=e.value.trim()}),t||(gn(e,"compositionstart",Yv),gn(e,"compositionend",sl),gn(e,"change",sl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},a){if(e[cs]=il(a),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Fs(e.value):e.value,l=t??"";o!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||i&&e.value.trim()===l)||(e.value=l))}},Jv=["ctrl","shift","alt","meta"],Xv={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Jv.some(n=>e[`${n}Key`]&&!t.includes(n))},Vw=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((i,...s)=>{for(let a=0;a<t.length;a++){const o=Xv[t[a]];if(o&&o(i,t))return}return e(i,...s)}))},Qv=ye({patchProp:Gv},Nv);let al;function Zv(){return al||(al=nv(Qv))}const ey=((...e)=>{const t=Zv().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=ny(r);if(!i)return;const s=t._component;!V(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,ty(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t});function ty(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ny(e){return le(e)?document.querySelector(e):e}function pe(e,t,n){return(t=ay(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ol(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ol(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ol(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ry(e,t){if(e==null)return{};var n,r,i=iy(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function iy(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function sy(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ay(e){var t=sy(e,"string");return typeof t=="symbol"?t:t+""}function di(e){"@babel/helpers - typeof";return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(e)}function us(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function oy(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(pe(pe(pe(pe(pe(pe(pe(pe(pe(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),pe(pe(pe(pe(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hf={exports:{}};(function(e){(function(t){var n=function(v,y,P){if(!c(y)||f(y)||d(y)||m(y)||l(y))return y;var k,W=0,ae=0;if(u(y))for(k=[],ae=y.length;W<ae;W++)k.push(n(v,y[W],P));else{k={};for(var X in y)Object.prototype.hasOwnProperty.call(y,X)&&(k[v(X,P)]=n(v,y[X],P))}return k},r=function(v,y){y=y||{};var P=y.separator||"_",k=y.split||/(?=[A-Z])/;return v.split(k).join(P)},i=function(v){return I(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(y,P){return P?P.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var y=i(v);return y.substr(0,1).toUpperCase()+y.substr(1)},a=function(v,y){return r(v,y).toLowerCase()},o=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return o.call(v)=="[object Array]"},f=function(v){return o.call(v)=="[object Date]"},d=function(v){return o.call(v)=="[object RegExp]"},m=function(v){return o.call(v)=="[object Boolean]"},I=function(v){return v=v-0,v===v},S=function(v,y){var P=y&&"process"in y?y.process:y;return typeof P!="function"?v:function(k,W){return P(k,v,W)}},M={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(v,y){return n(S(i,y),v)},decamelizeKeys:function(v,y){return n(S(a,y),v,y)},pascalizeKeys:function(v,y){return n(S(s,y),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(ly)})(hf);var cy=hf.exports,uy=["class","style"];function fy(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=cy.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function dy(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function pf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return pf(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=dy(u);break;case"style":l.style=fy(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=ry(n,uy);return Ua(e.tag,ft(ft(ft({},t),{},{class:i.class,style:ft(ft({},i.style),a)},i.attrs),o),r)}var mf=!1;try{mf=!0}catch{}function hy(){if(!mf&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ll(e){if(e&&di(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ls.icon)return Ls.icon(e);if(e===null)return null;if(di(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var py=Da({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ue(function(){return ll(t.icon)}),s=ue(function(){return us("classes",oy(t))}),a=ue(function(){return us("transform",typeof t.transform=="string"?Ls.transform(t.transform):t.transform)}),o=ue(function(){return us("mask",ll(t.mask))}),l=ue(function(){var u=ft(ft(ft(ft({},s.value),a.value),o.value),{},{symbol:t.symbol,maskId:t.maskId});return u.title=t.title,u.titleId=t.titleId,Lm(i.value,u)});ir(l,function(u){if(!u)return hy("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var c=ue(function(){return l.value?pf(l.value.abstract[0],{},r):null});return function(){return c.value}}});const my=()=>{};var cl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let d=(o&15)<<2|c>>6,m=c&63;l||(m=64,a||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||c==null||f==null)throw new vy;const d=s<<2|o>>4;if(r.push(d),c!==64){const m=o<<4&240|c>>2;if(r.push(m),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yy=function(e){const t=gf(e);return vf.encodeByteArray(t,!0)},yf=function(e){return yy(e).replace(/\./g,"")},bf=function(e){try{return vf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=()=>by().__FIREBASE_DEFAULTS__,wy=()=>{if(typeof process>"u"||typeof cl>"u")return;const e=cl.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ey=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bf(e[1]);return t&&JSON.parse(t)},$a=()=>{try{return my()||_y()||wy()||Ey()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Iy=e=>$a()?.emulatorHosts?.[e],_f=()=>$a()?.config,wf=e=>$a()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ay(e){return(await fetch(e,{credentials:"include"})).ok}const or={};function Ty(){const e={prod:[],emulator:[]};for(const t of Object.keys(or))or[t]?e.emulator.push(t):e.prod.push(t);return e}function Cy(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let ul=!1;function Py(e,t){if(typeof window>"u"||typeof document>"u"||!Ui(window.location.host)||or[e]===t||or[e]||ul)return;or[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=Ty().prod.length>0;function a(){const d=document.getElementById(r);d&&d.remove()}function o(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ul=!0,a()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=Cy(r),m=n("text"),I=document.getElementById(m)||document.createElement("span"),S=n("learnmore"),M=document.getElementById(S)||document.createElement("a"),v=n("preprendIcon"),y=document.getElementById(v)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const P=d.element;o(P),u(M,S);const k=c();l(y,v),P.append(y,I,M,k),document.body.appendChild(P)}s?(I.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ry(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function ky(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Oy(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ny(){const e=we();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Dy(){try{return typeof indexedDB=="object"}catch{return!1}}function My(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="FirebaseError";class Kt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ly,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Fy(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Kt(i,o,r)}}function Fy(e,t){return e.replace(Uy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Uy=/\{\$([^}]+)}/g;function $y(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function xn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(fl(s)&&fl(a)){if(!xn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fl(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function qn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Yn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function jy(e,t){const n=new Hy(e,t);return n.subscribe.bind(n)}class Hy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");By(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=fs),i.error===void 0&&(i.error=fs),i.complete===void 0&&(i.complete=fs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function By(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function fs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return e&&e._delegate?e._delegate:e}class Nn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zy(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vy(e){return e===Zt?void 0:e}function zy(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const Gy={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},qy=te.INFO,Yy={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Jy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Yy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ef{constructor(t){this.name=t,this._logLevel=qy,this._logHandler=Jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const Xy=(e,t)=>t.some(n=>e instanceof n);let dl,hl;function Qy(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zy(){return hl||(hl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const If=new WeakMap,Ys=new WeakMap,Sf=new WeakMap,ds=new WeakMap,ja=new WeakMap;function eb(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Ut(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&If.set(n,e)}).catch(()=>{}),ja.set(t,e),t}function tb(e){if(Ys.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Ys.set(e,t)}let Js={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ys.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Sf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nb(e){Js=e(Js)}function rb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(hs(this),t,...n);return Sf.set(r,t.sort?t.sort():[t]),Ut(r)}:Zy().includes(e)?function(...t){return e.apply(hs(this),t),Ut(If.get(this))}:function(...t){return Ut(e.apply(hs(this),t))}}function ib(e){return typeof e=="function"?rb(e):(e instanceof IDBTransaction&&tb(e),Xy(e,Qy())?new Proxy(e,Js):e)}function Ut(e){if(e instanceof IDBRequest)return eb(e);if(ds.has(e))return ds.get(e);const t=ib(e);return t!==e&&(ds.set(e,t),ja.set(t,e)),t}const hs=e=>ja.get(e);function sb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Ut(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ut(a.result),l.oldVersion,l.newVersion,Ut(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const ab=["get","getKey","getAll","getAllKeys","count"],ob=["put","add","delete","clear"],ps=new Map;function pl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ps.get(t))return ps.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ob.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ab.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return ps.set(t,s),s}nb(e=>({...e,get:(t,n,r)=>pl(t,n)||e.get(t,n,r),has:(t,n)=>!!pl(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cb(e){return e.getComponent()?.type==="VERSION"}const Xs="@firebase/app",ml="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Ef("@firebase/app"),ub="@firebase/app-compat",fb="@firebase/analytics-compat",db="@firebase/analytics",hb="@firebase/app-check-compat",pb="@firebase/app-check",mb="@firebase/auth",gb="@firebase/auth-compat",vb="@firebase/database",yb="@firebase/data-connect",bb="@firebase/database-compat",_b="@firebase/functions",wb="@firebase/functions-compat",Eb="@firebase/installations",Ib="@firebase/installations-compat",Sb="@firebase/messaging",Ab="@firebase/messaging-compat",Tb="@firebase/performance",Cb="@firebase/performance-compat",Pb="@firebase/remote-config",Rb="@firebase/remote-config-compat",kb="@firebase/storage",Ob="@firebase/storage-compat",xb="@firebase/firestore",Nb="@firebase/ai",Db="@firebase/firestore-compat",Mb="firebase",Lb="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]",Fb={[Xs]:"fire-core",[ub]:"fire-core-compat",[db]:"fire-analytics",[fb]:"fire-analytics-compat",[pb]:"fire-app-check",[hb]:"fire-app-check-compat",[mb]:"fire-auth",[gb]:"fire-auth-compat",[vb]:"fire-rtdb",[yb]:"fire-data-connect",[bb]:"fire-rtdb-compat",[_b]:"fire-fn",[wb]:"fire-fn-compat",[Eb]:"fire-iid",[Ib]:"fire-iid-compat",[Sb]:"fire-fcm",[Ab]:"fire-fcm-compat",[Tb]:"fire-perf",[Cb]:"fire-perf-compat",[Pb]:"fire-rc",[Rb]:"fire-rc-compat",[kb]:"fire-gcs",[Ob]:"fire-gcs-compat",[xb]:"fire-fst",[Db]:"fire-fst-compat",[Nb]:"fire-vertex","fire-js":"fire-js",[Mb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map,Ub=new Map,Zs=new Map;function gl(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function vr(e){const t=e.name;if(Zs.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Zs.set(t,e);for(const n of hi.values())gl(n,e);for(const n of Ub.values())gl(n,e);return!0}function Af(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Le(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new Rr("app","Firebase",$b);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=Lb;function Tf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Qs,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(n||(n=_f()),!n)throw $t.create("no-options");const s=hi.get(i);if(s){if(xn(n,s.options)&&xn(r,s.config))return s;throw $t.create("duplicate-app",{appName:i})}const a=new Ky(i);for(const l of Zs.values())a.addComponent(l);const o=new jb(n,r,a);return hi.set(i,o),o}function Hb(e=Qs){const t=hi.get(e);if(!t&&e===Qs&&_f())return Tf();if(!t)throw $t.create("no-app",{appName:e});return t}function Tn(e,t,n){let r=Fb[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}vr(new Nn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="firebase-heartbeat-database",Wb=1,yr="firebase-heartbeat-store";let ms=null;function Cf(){return ms||(ms=sb(Bb,Wb,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(yr)}catch(n){console.warn(n)}}}}).catch(e=>{throw $t.create("idb-open",{originalErrorMessage:e.message})})),ms}async function Vb(e){try{const n=(await Cf()).transaction(yr),r=await n.objectStore(yr).get(Pf(e));return await n.done,r}catch(t){if(t instanceof Kt)bt.warn(t.message);else{const n=$t.create("idb-get",{originalErrorMessage:t?.message});bt.warn(n.message)}}}async function vl(e,t){try{const r=(await Cf()).transaction(yr,"readwrite");await r.objectStore(yr).put(t,Pf(e)),await r.done}catch(n){if(n instanceof Kt)bt.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n?.message});bt.warn(r.message)}}}function Pf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=1024,Kb=30;class Gb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yl();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Kb){const i=Jb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){bt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yl(),{heartbeatsToSend:n,unsentEntries:r}=qb(this._heartbeatsCache.heartbeats),i=yf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return bt.warn(t),""}}}function yl(){return new Date().toISOString().substring(0,10)}function qb(e,t=zb){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),bl(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bl(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dy()?My().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vb(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vl(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vl(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function bl(e){return yf(JSON.stringify({version:2,heartbeats:e})).length}function Jb(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(e){vr(new Nn("platform-logger",t=>new lb(t),"PRIVATE")),vr(new Nn("heartbeat",t=>new Gb(t),"PRIVATE")),Tn(Xs,ml,e),Tn(Xs,ml,"esm2020"),Tn("fire-js","")}Xb("");function Rf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qb=Rf,kf=new Rr("auth","Firebase",Rf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Ef("@firebase/auth");function Zb(e,...t){pi.logLevel<=te.WARN&&pi.warn(`Auth (${Or}): ${e}`,...t)}function Xr(e,...t){pi.logLevel<=te.ERROR&&pi.error(`Auth (${Or}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e,...t){throw Ha(e,...t)}function nt(e,...t){return Ha(e,...t)}function Of(e,t,n){const r={...Qb(),[t]:n};return new Rr("auth","Firebase",r).create(t,{appName:e.name})}function pt(e){return Of(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ha(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kf.create(e,...t)}function j(e,t,...n){if(!e)throw Ha(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xr(t),new Error(t)}function _t(e,t){e||dt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){return typeof self<"u"&&self.location?.href||""}function e_(){return _l()==="http:"||_l()==="https:"}function _l(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e_()||Oy()||"connection"in navigator)?navigator.onLine:!0}function n_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,n){this.shortDelay=t,this.longDelay=n,_t(n>t,"Short delay should be less than long delay!"),this.isMobile=Ry()||xy()}get(){return t_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(e,t){_t(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],s_=new xr(3e4,6e4);function Gt(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function qt(e,t,n,r,i={}){return Nf(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=kr({key:e.config.apiKey,...a}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:l,...s};return ky()||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&Ui(e.emulatorConfig.host)&&(c.credentials="include"),xf.fetch()(await Df(e,e.config.apiHost,n,o),c)})}async function Nf(e,t,n){e._canInitEmulator=!1;const r={...r_,...t};try{const i=new o_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Br(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Br(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Br(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Br(e,"user-disabled",a);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Of(e,u,c);Be(e,u)}}catch(i){if(i instanceof Kt)throw i;Be(e,"network-request-failed",{message:String(i)})}}async function Nr(e,t,n,r,i={}){const s=await qt(e,t,n,r,i);return"mfaPendingCredential"in s&&Be(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Df(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?Ba(e.config,i):`${e.config.apiScheme}://${i}`;return i_.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function a_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),s_.get())})}}function Br(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(e,t,r);return i.customData._tokenResponse=n,i}function wl(e){return e!==void 0&&e.enterprise!==void 0}class l_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return a_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function c_(e,t){return qt(e,"GET","/v2/recaptchaConfig",Gt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(e,t){return qt(e,"POST","/v1/accounts:delete",t)}async function mi(e,t){return qt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function f_(e,t=!1){const n=It(e),r=await n.getIdToken(t),i=Wa(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:lr(gs(i.auth_time)),issuedAtTime:lr(gs(i.iat)),expirationTime:lr(gs(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function gs(e){return Number(e)*1e3}function Wa(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Xr("JWT malformed, contained fewer than 3 sections"),null;try{const i=bf(n);return i?JSON.parse(i):(Xr("Failed to decode base64 JWT payload"),null)}catch(i){return Xr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function El(e){const t=Wa(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Kt&&d_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function d_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e){const t=e.auth,n=await e.getIdToken(),r=await br(e,mi(t,{idToken:n}));j(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=i.providerUserInfo?.length?Mf(i.providerUserInfo):[],a=m_(e.providerData,s),o=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!a?.length,c=o?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ta(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,u)}async function p_(e){const t=It(e);await gi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function m_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Mf(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(e,t){const n=await Nf(e,{},async()=>{const r=kr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=await Df(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:o,body:r};return e.emulatorConfig&&Ui(e.emulatorConfig.host)&&(l.credentials="include"),xf.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function v_(e,t){return qt(e,"POST","/v2/accounts:revokeToken",Gt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):El(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){j(t.length!==0,"internal-error");const n=El(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await g_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Cn;return r&&(j(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ue{constructor({uid:t,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new h_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ta(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await br(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return f_(this,t)}reload(){return p_(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ue({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await gi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(pt(this.auth));const t=await this.getIdToken();return await br(this,u_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,o=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:I,stsTokenManager:S}=n;j(f&&S,t,"internal-error");const M=Cn.fromJSON(this.name,S);j(typeof f=="string",t,"internal-error"),Tt(r,t.name),Tt(i,t.name),j(typeof d=="boolean",t,"internal-error"),j(typeof m=="boolean",t,"internal-error"),Tt(s,t.name),Tt(a,t.name),Tt(o,t.name),Tt(l,t.name),Tt(c,t.name),Tt(u,t.name);const v=new Ue({uid:f,auth:t,email:i,emailVerified:d,displayName:r,isAnonymous:m,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:M,createdAt:c,lastLoginAt:u});return I&&Array.isArray(I)&&(v.providerData=I.map(y=>({...y}))),l&&(v._redirectEventId=l),v}static async _fromIdTokenResponse(t,n,r=!1){const i=new Cn;i.updateFromServerResponse(n);const s=new Ue({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await gi(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Mf(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,o=new Cn;o.updateFromIdToken(r);const l=new Ue({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ta(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map;function ht(e){_t(e instanceof Function,"Expected a class definition");let t=Il.get(e);return t?(_t(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Il.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Lf.type="NONE";const Sl=Lf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t,n){return`firebase:${e}:${t}:${n}`}class Pn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await mi(this.auth,{idToken:t}).catch(()=>{});return n?Ue._fromGetAccountInfoResponse(this.auth,n,t):null}return Ue._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Pn(ht(Sl),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ht(Sl);const a=Qr(r,t.config.apiKey,t.name);let o=null;for(const c of n)try{const u=await c._get(a);if(u){let f;if(typeof u=="string"){const d=await mi(t,{idToken:u}).catch(()=>{});if(!d)break;f=await Ue._fromGetAccountInfoResponse(t,d,u)}else f=Ue._fromJSON(t,u);c!==s&&(o=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Pn(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new Pn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(jf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ff(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bf(t))return"Blackberry";if(Wf(t))return"Webos";if(Uf(t))return"Safari";if((t.includes("chrome/")||$f(t))&&!t.includes("edge/"))return"Chrome";if(Hf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Ff(e=we()){return/firefox\//i.test(e)}function Uf(e=we()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $f(e=we()){return/crios\//i.test(e)}function jf(e=we()){return/iemobile/i.test(e)}function Hf(e=we()){return/android/i.test(e)}function Bf(e=we()){return/blackberry/i.test(e)}function Wf(e=we()){return/webos/i.test(e)}function Va(e=we()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function y_(e=we()){return Va(e)&&!!window.navigator?.standalone}function b_(){return Ny()&&document.documentMode===10}function Vf(e=we()){return Va(e)||Hf(e)||Wf(e)||Bf(e)||/windows phone/i.test(e)||jf(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(e,t=[]){let n;switch(e){case"Browser":n=Al(we());break;case"Worker":n=`${Al(we())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(e,t={}){return qt(e,"GET","/v2/passwordPolicy",Gt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=6;class I_{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??E_,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tl(this),this.idTokenSubscription=new Tl(this),this.beforeStateQueue=new __(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pn.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await mi(this,{idToken:t}),r=await Ue._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Le(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=r?._redirectEventId,o=await this.tryRedirectSignIn(t);(!s||s===a)&&o?.user&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await gi(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=n_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Le(this.app))return Promise.reject(pt(this));const n=t?It(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Le(this.app)?Promise.reject(pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await w_(this),n=new I_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Rr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await v_(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Zb(`Error while retrieving App Check token: ${t.error}`),t?.token}}function cn(e){return It(e)}class Tl{constructor(t){this.auth=t,this.observer=null,this.addObserver=jy(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A_(e){$i=e}function Kf(e){return $i.loadJS(e)}function T_(){return $i.recaptchaEnterpriseScript}function C_(){return $i.gapiScript}function P_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class R_{constructor(){this.enterprise=new k_}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class k_{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const O_="recaptcha-enterprise",Gf="NO_RECAPTCHA";class x_{constructor(t){this.type=O_,this.auth=cn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{c_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new l_(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(l=>{o(l)})})}function i(s,a,o){const l=window.grecaptcha;wl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(c=>{a(c)}).catch(()=>{a(Gf)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new R_().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&wl(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=T_();l.length!==0&&(l+=o),Kf(l).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function Cl(e,t,n,r=!1,i=!1){const s=new x_(e);let a;if(i)a=Gf;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const o={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const l=o.phoneEnrollmentInfo.phoneNumber,c=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const l=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function na(e,t,n,r,i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Cl(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Cl(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(e,t){const n=Af(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xn(s,t??{}))return i;Be(i,"already-initialized")}return n.initialize({options:t})}function D_(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ht);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function M_(e,t,n){const r=cn(e);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=qf(t),{host:a,port:o}=L_(t),l=o===null?"":`:${o}`,c={url:`${s}//${a}${l}/`},u=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(xn(c,r.config.emulator)&&xn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ui(a)?(Ay(`${s}//${a}${l}`),Py("Auth",!0)):F_()}function qf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function L_(e){const t=qf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Pl(a)}}}function Pl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function F_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(t){return dt("not implemented")}_linkToIdToken(t,n){return dt("not implemented")}_getReauthenticationResolver(t){return dt("not implemented")}}async function U_(e,t){return qt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(e,t){return Nr(e,"POST","/v1/accounts:signInWithPassword",Gt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(e,t){return Nr(e,"POST","/v1/accounts:signInWithEmailLink",Gt(e,t))}async function H_(e,t){return Nr(e,"POST","/v1/accounts:signInWithEmailLink",Gt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends za{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new _r(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new _r(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(t,n,"signInWithPassword",$_);case"emailLink":return j_(t,{email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(t,r,"signUpPassword",U_);case"emailLink":return H_(t,{idToken:n,email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e,t){return Nr(e,"POST","/v1/accounts:signInWithIdp",Gt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="http://localhost";class sn extends za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new sn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Rn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Rn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Rn(t,n)}buildRequest(){const t={requestUri:B_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=kr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V_(e){const t=qn(Yn(e)).link,n=t?qn(Yn(t)).deep_link_id:null,r=qn(Yn(e)).deep_link_id;return(r?qn(Yn(r)).link:null)||r||n||t||e}class Ka{constructor(t){const n=qn(Yn(t)),r=n.apiKey??null,i=n.oobCode??null,s=W_(n.mode??null);j(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=V_(t);try{return new Ka(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.providerId=Fn.PROVIDER_ID}static credential(t,n){return _r._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ka.parseLink(n);return j(r,"argument-error"),_r._fromEmailAndCode(t,r.code,r.tenantId)}}Fn.PROVIDER_ID="password";Fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Yf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Dr{constructor(){super("facebook.com")}static credential(t){return sn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return sn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Dr{constructor(){super("github.com")}static credential(t){return sn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Dr{constructor(){super("twitter.com")}static credential(t,n){return sn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(e,t){return Nr(e,"POST","/v1/accounts:signUp",Gt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ue._fromIdTokenResponse(t,r,i),a=Rl(r);return new an({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Rl(r);return new an({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Rl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Kt{constructor(t,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vi(t,n,r,i)}}function Jf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vi._fromErrorAndOperation(e,s,t,r):s})}async function K_(e,t,n=!1){const r=await br(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return an._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(e,t,n=!1){const{auth:r}=e;if(Le(r.app))return Promise.reject(pt(r));const i="reauthenticate";try{const s=await br(e,Jf(r,i,t,e),n);j(s.idToken,r,"internal-error");const a=Wa(s.idToken);j(a,r,"internal-error");const{sub:o}=a;return j(e.uid===o,r,"user-mismatch"),an._forOperation(e,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Be(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(e,t,n=!1){if(Le(e.app))return Promise.reject(pt(e));const r="signIn",i=await Jf(e,r,t),s=await an._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function q_(e,t){return Xf(cn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(e){const t=cn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Y_(e,t,n){if(Le(e.app))return Promise.reject(pt(e));const r=cn(e),a=await na(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",z_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qf(e),l}),o=await an._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function J_(e,t,n){return Le(e.app)?Promise.reject(pt(e)):q_(It(e),Fn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qf(e),r})}function X_(e,t,n,r){return It(e).onIdTokenChanged(t,n,r)}function Q_(e,t,n){return It(e).beforeAuthStateChanged(t,n)}function Z_(e,t,n,r){return It(e).onAuthStateChanged(t,n,r)}function e1(e){return It(e).signOut()}const yi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yi,"1"),this.storage.removeItem(yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=1e3,n1=10;class ed extends Zf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);b_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,n1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},t1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ed.type="LOCAL";const r1=ed;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends Zf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}td.type="SESSION";const nd=td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ji(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await i1(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ji.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Ga("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function a1(e){rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function o1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l1(){return navigator?.serviceWorker?.controller||null}function c1(){return rd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="firebaseLocalStorageDb",u1=1,bi="firebaseLocalStorage",sd="fbase_key";class Mr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hi(e,t){return e.transaction([bi],t?"readwrite":"readonly").objectStore(bi)}function f1(){const e=indexedDB.deleteDatabase(id);return new Mr(e).toPromise()}function ra(){const e=indexedDB.open(id,u1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(bi,{keyPath:sd})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(bi)?t(r):(r.close(),await f1(),t(await ra()))})})}async function kl(e,t,n){const r=Hi(e,!0).put({[sd]:t,value:n});return new Mr(r).toPromise()}async function d1(e,t){const n=Hi(e,!1).get(t),r=await new Mr(n).toPromise();return r===void 0?null:r.value}function Ol(e,t){const n=Hi(e,!0).delete(t);return new Mr(n).toPromise()}const h1=800,p1=3;class ad{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ra(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>p1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ji._getInstance(c1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await o1(),!this.activeServiceWorker)return;this.sender=new s1(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||l1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ra();return await kl(t,yi,"1"),await Ol(t,yi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>d1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ol(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Hi(i,!1).getAll();return new Mr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ad.type="LOCAL";const m1=ad;new xr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(e,t){return t?ht(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends za{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Rn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Rn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function v1(e){return Xf(e.auth,new qa(e),e.bypassAuthState)}function y1(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),G_(n,new qa(e),e.bypassAuthState)}async function b1(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),K_(n,new qa(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return v1;case"linkViaPopup":case"linkViaRedirect":return b1;case"reauthViaPopup":case"reauthViaRedirect":return y1;default:Be(this.auth,"internal-error")}}resolve(t){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=new xr(2e3,1e4);class bn extends od{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const t=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_1.get())};t()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="pendingRedirect",Zr=new Map;class E1 extends od{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Zr.get(this.auth._key());if(!t){try{const r=await I1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Zr.set(this.auth._key(),t)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I1(e,t){const n=T1(t),r=A1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function S1(e,t){Zr.set(e._key(),t)}function A1(e){return ht(e._redirectPersistence)}function T1(e){return Qr(w1,e.config.apiKey,e.name)}async function C1(e,t,n=!1){if(Le(e.app))return Promise.reject(pt(e));const r=cn(e),i=g1(r,t),a=await new E1(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=600*1e3;class R1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!k1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!ld(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=P1&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(t))}saveEventToCache(t){this.cachedEventUids.add(xl(t)),this.lastProcessedEventTime=Date.now()}}function xl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ld({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function k1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ld(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(e,t={}){return qt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N1=/^https?/;async function D1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await O1(e);for(const n of t)try{if(M1(n))return}catch{}Be(e,"unauthorized-domain")}function M1(e){const t=ea(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!N1.test(n))return!1;if(x1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=new xr(3e4,6e4);function Nl(){const e=rt().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function F1(e){return new Promise((t,n)=>{function r(){Nl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Nl(),n(nt(e,"network-request-failed"))},timeout:L1.get()})}if(rt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(rt().gapi?.load)r();else{const i=P_("iframefcb");return rt()[i]=()=>{gapi.load?r():n(nt(e,"network-request-failed"))},Kf(`${C_()}?onload=${i}`).catch(s=>n(s))}}).catch(t=>{throw ei=null,t})}let ei=null;function U1(e){return ei=ei||F1(e),ei}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new xr(5e3,15e3),j1="__/auth/iframe",H1="emulator/auth/iframe",B1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V1(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ba(t,H1):`https://${e.config.authDomain}/${j1}`,r={apiKey:t.apiKey,appName:e.name,v:Or},i=W1.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${kr(r).slice(1)}`}async function z1(e){const t=await U1(e),n=rt().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:V1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=nt(e,"network-request-failed"),o=rt().setTimeout(()=>{s(a)},$1.get());function l(){rt().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G1=500,q1=600,Y1="_blank",J1="http://localhost";class Dl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X1(e,t,n,r=G1,i=q1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l={...K1,width:r.toString(),height:i.toString(),top:s,left:a},c=we().toLowerCase();n&&(o=$f(c)?Y1:n),Ff(c)&&(t=t||J1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[m,I])=>`${d}${m}=${I},`,"");if(y_(c)&&o!=="_self")return Q1(t||"",o),new Dl(null);const f=window.open(t||"",o,u);j(f,e,"popup-blocked");try{f.focus()}catch{}return new Dl(f)}function Q1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1="__/auth/handler",e0="emulator/auth/handler",t0=encodeURIComponent("fac");async function Ml(e,t,n,r,i,s){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(t instanceof Yf){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",$y(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))a[u]=f}if(t instanceof Dr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const l=await e._getAppCheckToken(),c=l?`#${t0}=${encodeURIComponent(l)}`:"";return`${n0(e)}?${kr(o).slice(1)}${c}`}function n0({config:e}){return e.emulator?Ba(e,e0):`https://${e.authDomain}/${Z1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="webStorageSupport";class r0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nd,this._completeRedirectFn=C1,this._overrideRedirectResult=S1}async _openPopup(t,n,r,i){_t(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Ml(t,n,r,ea(),i);return X1(t,s,Ga())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ml(t,n,r,ea(),i);return a1(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_t(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await z1(t),r=new R1(t);return n.register("authEvent",i=>(j(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(vs,{type:vs},i=>{const s=i?.[0]?.[vs];s!==void 0&&n(!!s),Be(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vf()||Uf()||Va()}}const i0=r0;var Ll="@firebase/auth",Fl="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o0(e){vr(new Nn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zf(e)},c=new S_(r,i,s,l);return D_(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),vr(new Nn("auth-internal",t=>{const n=cn(t.getProvider("auth").getImmediate());return(r=>new s0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(Ll,Fl,a0(e)),Tn(Ll,Fl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=300,c0=wf("authIdTokenMaxAge")||l0;let Ul=null;const u0=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>c0)return;const i=n?.token;Ul!==i&&(Ul=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function f0(e=Hb()){const t=Af(e,"auth");if(t.isInitialized())return t.getImmediate();const n=N_(e,{popupRedirectResolver:i0,persistence:[m1,r1,nd]}),r=wf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=u0(s.toString());Q_(n,a,()=>a(n.currentUser)),X_(n,o=>a(o))}}const i=Iy("auth");return i&&M_(n,`http://${i}`),n}function d0(){return document.getElementsByTagName("head")?.[0]??document}A_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",d0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o0("Browser");var h0="firebase",p0="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(h0,p0,"app");const m0={apiKey:"AIzaSyC1oAOa3phMNn4wmqvs_ErlrVm48trNJfc",authDomain:"pokedex-app-19e45.firebaseapp.com",projectId:"pokedex-app-19e45",storageBucket:"pokedex-app-19e45.firebasestorage.app",messagingSenderId:"488370507222",appId:"1:488370507222:web:ecd02c90dbfd36a722e877",measurementId:"G-V3HKJKCYSL"},g0=Tf(m0),Bi=f0(g0),_i=Tr(null),on=Tr(null);Z_(Bi,e=>{e?_i.value={uid:e.uid,email:e.email}:_i.value=null});async function v0({email:e,password:t}){on.value=null;try{await Y_(Bi,e,t)}catch(n){throw on.value=n.message,console.error("Firebase registration error:",n.message),n}}async function y0({email:e,password:t}){on.value=null;try{await J_(Bi,e,t)}catch(n){throw on.value=n.message,console.error("Firebase login error:",n.message),n}}async function b0(){on.value=null;try{await e1(Bi)}catch(e){throw on.value=e.message,console.error("Firebase logout error:",e.message),e}}const _0=ue(()=>!!_i.value);function w0(){return{user:_i,isAutenticated:_0,login:y0,logout:b0,register:v0,authError:on}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof document<"u";function cd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function E0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&cd(e.default)}const q=Object.assign;function ys(e,t){const n={};for(const r in t){const i=t[r];n[r]=We(i)?i.map(e):e(i)}return n}const cr=()=>{},We=Array.isArray,ud=/#/g,I0=/&/g,S0=/\//g,A0=/=/g,T0=/\?/g,fd=/\+/g,C0=/%5B/g,P0=/%5D/g,dd=/%5E/g,R0=/%60/g,hd=/%7B/g,k0=/%7C/g,pd=/%7D/g,O0=/%20/g;function Ya(e){return encodeURI(""+e).replace(k0,"|").replace(C0,"[").replace(P0,"]")}function x0(e){return Ya(e).replace(hd,"{").replace(pd,"}").replace(dd,"^")}function ia(e){return Ya(e).replace(fd,"%2B").replace(O0,"+").replace(ud,"%23").replace(I0,"%26").replace(R0,"`").replace(hd,"{").replace(pd,"}").replace(dd,"^")}function N0(e){return ia(e).replace(A0,"%3D")}function D0(e){return Ya(e).replace(ud,"%23").replace(T0,"%3F")}function M0(e){return e==null?"":D0(e).replace(S0,"%2F")}function wr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const L0=/\/$/,F0=e=>e.replace(L0,"");function bs(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=H0(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:wr(a)}}function U0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $l(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function $0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Dn(t.matched[r],n.matched[i])&&md(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Dn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function md(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j0(e[n],t[n]))return!1;return!0}function j0(e,t){return We(e)?jl(e,t):We(t)?jl(t,e):e===t}function jl(e,t){return We(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function H0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Er;(function(e){e.pop="pop",e.push="push"})(Er||(Er={}));var ur;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ur||(ur={}));function B0(e){if(!e)if(vn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),F0(e)}const W0=/^[^#]+#/;function V0(e,t){return e.replace(W0,"#")+t}function z0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Wi=()=>({left:window.scrollX,top:window.scrollY});function K0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=z0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Hl(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function G0(e,t){sa.set(e,t)}function q0(e){const t=sa.get(e);return sa.delete(e),t}let Y0=()=>location.protocol+"//"+location.host;function gd(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),$l(l,"")}return $l(n,e)+r+i}function J0(e,t,n,r){let i=[],s=[],a=null;const o=({state:d})=>{const m=gd(e,location),I=n.value,S=t.value;let M=0;if(d){if(n.value=m,t.value=d,a&&a===I){a=null;return}M=S?d.position-S.position:0}else r(m);i.forEach(v=>{v(n.value,I,{delta:M,type:Er.pop,direction:M?M>0?ur.forward:ur.back:ur.unknown})})};function l(){a=n.value}function c(d){i.push(d);const m=()=>{const I=i.indexOf(d);I>-1&&i.splice(I,1)};return s.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(q({},d.state,{scroll:Wi()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Bl(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Wi():null}}function X0(e){const{history:t,location:n}=window,r={value:gd(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Y0()+e+l;try{t[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function a(l,c){const u=q({},t.state,Bl(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function o(l,c){const u=q({},i.value,t.state,{forward:l,scroll:Wi()});s(u.current,u,!0);const f=q({},Bl(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:o,replace:a}}function Q0(e){e=B0(e);const t=X0(e),n=J0(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=q({location:"",base:e,go:r,createHref:V0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Z0(e){return typeof e=="string"||e&&typeof e=="object"}function vd(e){return typeof e=="string"||typeof e=="symbol"}const yd=Symbol("");var Wl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Wl||(Wl={}));function Mn(e,t){return q(new Error,{type:e,[yd]:!0},t)}function ot(e,t){return e instanceof Error&&yd in e&&(t==null||!!(e.type&t))}const Vl="[^/]+?",ew={sensitive:!1,strict:!1,start:!0,end:!0},tw=/[.+*?^${}()[\]/\\]/g;function nw(e,t){const n=q({},ew,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(tw,"\\$&"),m+=40;else if(d.type===1){const{value:I,repeatable:S,optional:M,regexp:v}=d;s.push({name:I,repeatable:S,optional:M});const y=v||Vl;if(y!==Vl){m+=10;try{new RegExp(`(${y})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${I}" (${y}): `+k.message)}}let P=S?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(P=M&&c.length<2?`(?:/${P})`:"/"+P),M&&(P+="?"),i+=P,m+=20,M&&(m+=-8),S&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",I=s[d-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:S,optional:M}=m,v=I in c?c[I]:"";if(We(v)&&!S)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const y=We(v)?v.join("/"):v;if(!y)if(M)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=y}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:l}}function rw(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function bd(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=rw(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(zl(r))return 1;if(zl(i))return-1}return i.length-r.length}function zl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const iw={type:0,value:""},sw=/[a-zA-Z0-9_]/;function aw(e){if(!e)return[[]];if(e==="/")return[[iw]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:sw.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),a(),i}function ow(e,t,n){const r=nw(aw(e.path),n),i=q(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function lw(e,t){const n=[],r=new Map;t=Yl({strict:!1,end:!0,sensitive:!1},t);function i(f){return r.get(f)}function s(f,d,m){const I=!m,S=Gl(f);S.aliasOf=m&&m.record;const M=Yl(t,f),v=[S];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of k)v.push(Gl(q({},S,{components:m?m.record.components:S.components,path:W,aliasOf:m?m.record:S})))}let y,P;for(const k of v){const{path:W}=k;if(d&&W[0]!=="/"){const ae=d.record.path,X=ae[ae.length-1]==="/"?"":"/";k.path=d.record.path+(W&&X+W)}if(y=ow(k,d,M),m?m.alias.push(y):(P=P||y,P!==y&&P.alias.push(y),I&&f.name&&!ql(y)&&a(f.name)),_d(y)&&l(y),S.children){const ae=S.children;for(let X=0;X<ae.length;X++)s(ae[X],y,m&&m.children[X])}m=m||y}return P?()=>{a(P)}:cr}function a(f){if(vd(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const d=fw(f,n);n.splice(d,0,f),f.record.name&&!ql(f)&&r.set(f.record.name,f)}function c(f,d){let m,I={},S,M;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Mn(1,{location:f});M=m.record.name,I=q(Kl(d.params,m.keys.filter(P=>!P.optional).concat(m.parent?m.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),f.params&&Kl(f.params,m.keys.map(P=>P.name))),S=m.stringify(I)}else if(f.path!=null)S=f.path,m=n.find(P=>P.re.test(S)),m&&(I=m.parse(S),M=m.record.name);else{if(m=d.name?r.get(d.name):n.find(P=>P.re.test(d.path)),!m)throw Mn(1,{location:f,currentLocation:d});M=m.record.name,I=q({},d.params,f.params),S=m.stringify(I)}const v=[];let y=m;for(;y;)v.unshift(y.record),y=y.parent;return{name:M,path:S,params:I,matched:v,meta:uw(v)}}e.forEach(f=>s(f));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:i}}function Kl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Gl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:cw(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function cw(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ql(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function uw(e){return e.reduce((t,n)=>q(t,n.meta),{})}function Yl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fw(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;bd(e,t[s])<0?r=s:n=s+1}const i=dw(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function dw(e){let t=e;for(;t=t.parent;)if(_d(t)&&bd(e,t)===0)return t}function _d({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function hw(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(fd," "),a=s.indexOf("="),o=wr(a<0?s:s.slice(0,a)),l=a<0?null:wr(s.slice(a+1));if(o in t){let c=t[o];We(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function Jl(e){let t="";for(let n in e){const r=e[n];if(n=N0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(We(r)?r.map(s=>s&&ia(s)):[r&&ia(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function pw(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=We(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const mw=Symbol(""),Xl=Symbol(""),Vi=Symbol(""),Ja=Symbol(""),aa=Symbol("");function Wn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function kt(e,t,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(Mn(4,{from:n,to:t})):d instanceof Error?l(d):Z0(d)?l(Mn(2,{from:t,to:d})):(a&&r.enterCallbacks[i]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>e.call(r&&r.instances[i],t,n,c));let f=Promise.resolve(u);e.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function _s(e,t,n,r,i=s=>s()){const s=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(cd(l)){const u=(l.__vccOpts||l)[t];u&&s.push(kt(u,n,r,a,o,i))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=E0(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const m=(f.__vccOpts||f)[t];return m&&kt(m,n,r,a,o,i)()}))}}return s}function Ql(e){const t=je(Vi),n=je(Ja),r=ue(()=>{const l=Ft(e.to);return t.resolve(l)}),i=ue(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Dn.bind(null,u));if(d>-1)return d;const m=Zl(l[c-2]);return c>1&&Zl(u)===m&&f[f.length-1].path!==m?f.findIndex(Dn.bind(null,l[c-2])):d}),s=ue(()=>i.value>-1&&_w(n.params,r.value.params)),a=ue(()=>i.value>-1&&i.value===n.matched.length-1&&md(n.params,r.value.params));function o(l={}){if(bw(l)){const c=t[Ft(e.replace)?"replace":"push"](Ft(e.to)).catch(cr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}function gw(e){return e.length===1?e[0]:e}const vw=Da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ql,setup(e,{slots:t}){const n=xi(Ql(e)),{options:r}=je(Vi),i=ue(()=>({[ec(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ec(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&gw(t.default(n));return e.custom?s:Ua("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),yw=vw;function bw(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _w(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!We(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Zl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ec=(e,t,n)=>e??t??n,ww=Da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=je(aa),i=ue(()=>e.route||r.value),s=je(Xl,0),a=ue(()=>{let c=Ft(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=ue(()=>i.value.matched[a.value]);qr(Xl,ue(()=>a.value+1)),qr(mw,o),qr(aa,i);const l=Tr();return ir(()=>[l.value,o.value,e.name],([c,u,f],[d,m,I])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Dn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,f=o.value,d=f&&f.components[u];if(!d)return tc(n.default,{Component:d,route:c});const m=f.props[u],I=m?m===!0?c.params:typeof m=="function"?m(c):m:null,M=Ua(d,q({},I,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return tc(n.default,{Component:M,route:c})||M}}});function tc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ew=ww;function Iw(e){const t=lw(e.routes,e),n=e.parseQuery||hw,r=e.stringifyQuery||Jl,i=e.history,s=Wn(),a=Wn(),o=Wn(),l=pg(Ct);let c=Ct;vn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ys.bind(null,w=>""+w),f=ys.bind(null,M0),d=ys.bind(null,wr);function m(w,D){let x,L;return vd(w)?(x=t.getRecordMatcher(w),L=D):L=w,t.addRoute(L,x)}function I(w){const D=t.getRecordMatcher(w);D&&t.removeRoute(D)}function S(){return t.getRoutes().map(w=>w.record)}function M(w){return!!t.getRecordMatcher(w)}function v(w,D){if(D=q({},D||l.value),typeof w=="string"){const g=bs(n,w,D.path),_=t.resolve({path:g.path},D),E=i.createHref(g.fullPath);return q(g,_,{params:d(_.params),hash:wr(g.hash),redirectedFrom:void 0,href:E})}let x;if(w.path!=null)x=q({},w,{path:bs(n,w.path,D.path).path});else{const g=q({},w.params);for(const _ in g)g[_]==null&&delete g[_];x=q({},w,{params:f(g)}),D.params=f(D.params)}const L=t.resolve(x,D),ee=w.hash||"";L.params=u(d(L.params));const h=U0(r,q({},w,{hash:x0(ee),path:L.path})),p=i.createHref(h);return q({fullPath:h,hash:ee,query:r===Jl?pw(w.query):w.query||{}},L,{redirectedFrom:void 0,href:p})}function y(w){return typeof w=="string"?bs(n,w,l.value.path):q({},w)}function P(w,D){if(c!==w)return Mn(8,{from:D,to:w})}function k(w){return X(w)}function W(w){return k(q(y(w),{replace:!0}))}function ae(w){const D=w.matched[w.matched.length-1];if(D&&D.redirect){const{redirect:x}=D;let L=typeof x=="function"?x(w):x;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=y(L):{path:L},L.params={}),q({query:w.query,hash:w.hash,params:L.path!=null?{}:w.params},L)}}function X(w,D){const x=c=v(w),L=l.value,ee=w.state,h=w.force,p=w.replace===!0,g=ae(x);if(g)return X(q(y(g),{state:typeof g=="object"?q({},ee,g.state):ee,force:h,replace:p}),D||x);const _=x;_.redirectedFrom=D;let E;return!h&&$0(r,L,x)&&(E=Mn(16,{to:_,from:L}),Ge(L,L,!0,!1)),(E?Promise.resolve(E):ze(_,L)).catch(b=>ot(b)?ot(b,2)?b:At(b):G(b,_,L)).then(b=>{if(b){if(ot(b,2))return X(q({replace:p},y(b.to),{state:typeof b.to=="object"?q({},ee,b.to.state):ee,force:h}),D||_)}else b=Yt(_,L,!0,p,ee);return St(_,L,b),b})}function Ee(w,D){const x=P(w,D);return x?Promise.reject(x):Promise.resolve()}function Ve(w){const D=dn.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(w):w()}function ze(w,D){let x;const[L,ee,h]=Sw(w,D);x=_s(L.reverse(),"beforeRouteLeave",w,D);for(const g of L)g.leaveGuards.forEach(_=>{x.push(kt(_,w,D))});const p=Ee.bind(null,w,D);return x.push(p),xe(x).then(()=>{x=[];for(const g of s.list())x.push(kt(g,w,D));return x.push(p),xe(x)}).then(()=>{x=_s(ee,"beforeRouteUpdate",w,D);for(const g of ee)g.updateGuards.forEach(_=>{x.push(kt(_,w,D))});return x.push(p),xe(x)}).then(()=>{x=[];for(const g of h)if(g.beforeEnter)if(We(g.beforeEnter))for(const _ of g.beforeEnter)x.push(kt(_,w,D));else x.push(kt(g.beforeEnter,w,D));return x.push(p),xe(x)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),x=_s(h,"beforeRouteEnter",w,D,Ve),x.push(p),xe(x))).then(()=>{x=[];for(const g of a.list())x.push(kt(g,w,D));return x.push(p),xe(x)}).catch(g=>ot(g,8)?g:Promise.reject(g))}function St(w,D,x){o.list().forEach(L=>Ve(()=>L(w,D,x)))}function Yt(w,D,x,L,ee){const h=P(w,D);if(h)return h;const p=D===Ct,g=vn?history.state:{};x&&(L||p?i.replace(w.fullPath,q({scroll:p&&g&&g.scroll},ee)):i.push(w.fullPath,ee)),l.value=w,Ge(w,D,x,p),At()}let Ke;function Un(){Ke||(Ke=i.listen((w,D,x)=>{if(!Lr.listening)return;const L=v(w),ee=ae(L);if(ee){X(q(ee,{replace:!0,force:!0}),L).catch(cr);return}c=L;const h=l.value;vn&&G0(Hl(h.fullPath,x.delta),Wi()),ze(L,h).catch(p=>ot(p,12)?p:ot(p,2)?(X(q(y(p.to),{force:!0}),L).then(g=>{ot(g,20)&&!x.delta&&x.type===Er.pop&&i.go(-1,!1)}).catch(cr),Promise.reject()):(x.delta&&i.go(-x.delta,!1),G(p,L,h))).then(p=>{p=p||Yt(L,h,!1),p&&(x.delta&&!ot(p,8)?i.go(-x.delta,!1):x.type===Er.pop&&ot(p,20)&&i.go(-1,!1)),St(L,h,p)}).catch(cr)}))}let un=Wn(),ce=Wn(),Z;function G(w,D,x){At(w);const L=ce.list();return L.length?L.forEach(ee=>ee(w,D,x)):console.error(w),Promise.reject(w)}function st(){return Z&&l.value!==Ct?Promise.resolve():new Promise((w,D)=>{un.add([w,D])})}function At(w){return Z||(Z=!w,Un(),un.list().forEach(([D,x])=>w?x(w):D()),un.reset()),w}function Ge(w,D,x,L){const{scrollBehavior:ee}=e;if(!vn||!ee)return Promise.resolve();const h=!x&&q0(Hl(w.fullPath,0))||(L||!x)&&history.state&&history.state.scroll||null;return Nu().then(()=>ee(w,D,h)).then(p=>p&&K0(p)).catch(p=>G(p,w,D))}const Ie=w=>i.go(w);let fn;const dn=new Set,Lr={currentRoute:l,listening:!0,addRoute:m,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:S,resolve:v,options:e,push:k,replace:W,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ce.add,isReady:st,install(w){const D=this;w.component("RouterLink",yw),w.component("RouterView",Ew),w.config.globalProperties.$router=D,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(l)}),vn&&!fn&&l.value===Ct&&(fn=!0,k(i.location).catch(ee=>{}));const x={};for(const ee in Ct)Object.defineProperty(x,ee,{get:()=>l.value[ee],enumerable:!0});w.provide(Vi,D),w.provide(Ja,Pu(x)),w.provide(aa,l);const L=w.unmount;dn.add(w),w.unmount=function(){dn.delete(w),dn.size<1&&(c=Ct,Ke&&Ke(),Ke=null,l.value=Ct,fn=!1,Z=!1),L()}}};function xe(w){return w.reduce((D,x)=>D.then(()=>Ve(x)),Promise.resolve())}return Lr}function Sw(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(c=>Dn(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>Dn(c,l))||i.push(l))}return[n,r,i]}function Aw(){return je(Vi)}function zw(e){return je(Ja)}const Tw={class:"text-center custom-section__header d-flex justify-content-between mx-5"},Cw={class:"custom-navbar"},Pw={class:"navbar-greeting"},Rw={__name:"NavBar",setup(e){const t=Aw(),{logout:n,isAutenticated:r,user:i}=w0();function s(){n(),t.push("/")}return(a,o)=>{const l=rs("RouterLink"),c=rs("font-awesome-icon"),u=rs("RouterView");return ar(),Ks(Ne,null,[Ot("header",Tw,[o[4]||(o[4]=Ot("h1",null,"Pokédex 📒",-1)),Ot("nav",Cw,[fe(l,{to:"/"},{default:Gr(()=>[...o[0]||(o[0]=[Gn("Home",-1)])]),_:1}),Ft(r)?(ar(),Ks(Ne,{key:1},[fe(l,{to:"/favorites"},{default:Gr(()=>[...o[2]||(o[2]=[Gn("Favoritos",-1)])]),_:1}),Ot("span",Pw," Hola, "+du(Ft(i).name),1),Ot("button",{class:"btn custom-btn__logout",onClick:s},[o[3]||(o[3]=Gn(" Salir ",-1)),fe(c,{icon:["far","circle-right"]})])],64)):(ar(),of(l,{key:0,to:"/login"},{default:Gr(()=>[...o[1]||(o[1]=[Gn("Login",-1)])]),_:1}))])]),fe(u)],64)}}},kw={__name:"App",setup(e){return(t,n)=>(ar(),Ks(Ne,null,[fe(Rw),n[0]||(n[0]=Ot("footer",{class:"custom-footer text-center"},"🐸",-1))],64))}},Ow="modulepreload",xw=function(e){return"/pokedex/"+e},nc={},Vn=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=l(n.map(c=>{if(c=xw(c),c in nc)return;nc[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Ow,u||(d.as="script"),d.crossOrigin="",d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),u)return new Promise((m,I)=>{d.addEventListener("load",m),d.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},Nw=Tr(.1),Dw=Tr(""),Mw=Iw({history:Q0("/pokedex/"),routes:[{path:"/",name:"home",component:()=>Vn(()=>import("./HomeView.js"),__vite__mapDeps([0,1,2,3,4]))},{path:"/login",name:"login",component:()=>Vn(()=>import("./LoginView.js"),__vite__mapDeps([5,3,6]))},{path:"/favorites",name:"favorites",component:()=>Vn(()=>import("./FavoritesView.js"),__vite__mapDeps([7,1,2,3,4]))},{path:"/pokemon/:id",name:"PokemonDetails",component:()=>Vn(()=>import("./PokemonDetailsView.js"),__vite__mapDeps([8,2,3,9])),props:!0},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Vn(()=>import("./NotFoundView.js"),__vite__mapDeps([10,3]))}],scrollBehavior(e,t,n){return console.log("scroll",{to:e,from:t,savedPosition:n}),Dw.value=t.name,e.name==="PokemonDetails"?{left:0,top:.1}:e.name==="home"?(console.log("va hacia el home"),{top:Nw.value,left:0}):n||{left:0,top:0}}});/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Lw={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"]},Fw={prefix:"far",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zm387.3 11.3c6.2-6.2 6.2-16.4 0-22.6l-104-104c-4.6-4.6-11.5-5.9-17.4-3.5S256 145.5 256 152l0 72-104 0c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l104 0 0 72c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l104-104z"]};/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Uw={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]};Mm.add(Uw,Lw,Fw);const Xa=ey(kw);Xa.component("font-awesome-icon",py);Xa.use(Mw);Xa.mount("#app");export{xi as A,Gr as B,Ne as F,Ot as a,Hw as b,Ks as c,Dg as d,fe as e,$w as f,ue as g,Nw as h,Ww as i,w0 as j,Aw as k,Og as l,ir as m,Sa as n,ar as o,of as p,jw as q,Tr as r,rs as s,du as t,Ft as u,Bw as v,Vw as w,Ia as x,Gn as y,zw as z};
