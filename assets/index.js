(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function go(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function fp(e){if(Array.isArray(e))return e}function dp(e){if(Array.isArray(e))return go(e)}function hp(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Eu(r.key),r)}}function mp(e,t,n){return t&&pp(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Es(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=aa(e))||t){n&&(e=n);var r=0,s=function(){};return{s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return o=l.done,l},e:function(l){a=!0,i=l},f:function(){try{o||n.return==null||n.return()}finally{if(a)throw i}}}}function Q(e,t,n){return(t=Eu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yp(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,s,i,o,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(u){c=!0,s=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw s}}return a}}function vp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function il(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?il(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):il(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ri(e,t){return fp(e)||yp(e,t)||aa(e,t)||vp()}function lt(e){return dp(e)||gp(e)||aa(e)||bp()}function _p(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Eu(e){var t=_p(e,"string");return typeof t=="symbol"?t:t+""}function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}function aa(e,t){if(e){if(typeof e=="string")return go(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?go(e,t):void 0}}var ol=function(){},la={},Su={},Iu=null,Au={mark:ol,measure:ol};try{typeof window<"u"&&(la=window),typeof document<"u"&&(Su=document),typeof MutationObserver<"u"&&(Iu=MutationObserver),typeof performance<"u"&&(Au=performance)}catch{}var wp=la.navigator||{},al=wp.userAgent,ll=al===void 0?"":al,cn=la,me=Su,cl=Iu,ps=Au;cn.document;var zt=!!me.documentElement&&!!me.head&&typeof me.addEventListener=="function"&&typeof me.createElement=="function",Tu=~ll.indexOf("MSIE")||~ll.indexOf("Trident/"),Di,Ep=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Sp=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Cu={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Ip={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Pu=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Ce="classic",Xr="duotone",Ru="sharp",xu="sharp-duotone",ku="chisel",Ou="etch",Nu="jelly",Du="jelly-duo",Lu="jelly-fill",Mu="notdog",Fu="notdog-duo",$u="slab",Uu="slab-press",ju="thumbprint",Bu="utility",Hu="utility-duo",Vu="utility-fill",Wu="whiteboard",Ap="Classic",Tp="Duotone",Cp="Sharp",Pp="Sharp Duotone",Rp="Chisel",xp="Etch",kp="Jelly",Op="Jelly Duo",Np="Jelly Fill",Dp="Notdog",Lp="Notdog Duo",Mp="Slab",Fp="Slab Press",$p="Thumbprint",Up="Utility",jp="Utility Duo",Bp="Utility Fill",Hp="Whiteboard",zu=[Ce,Xr,Ru,xu,ku,Ou,Nu,Du,Lu,Mu,Fu,$u,Uu,ju,Bu,Hu,Vu,Wu];Di={},Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(Di,Ce,Ap),Xr,Tp),Ru,Cp),xu,Pp),ku,Rp),Ou,xp),Nu,kp),Du,Op),Lu,Np),Mu,Dp),Q(Q(Q(Q(Q(Q(Q(Q(Di,Fu,Lp),$u,Mp),Uu,Fp),ju,$p),Bu,Up),Hu,jp),Vu,Bp),Wu,Hp);var Vp={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Wp={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},zp=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Kp={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Ku=["fak","fa-kit","fakd","fa-kit-duotone"],ul={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qp=["kit"],Gp="kit",Jp="kit-duotone",Yp="Kit",Xp="Kit Duotone";Q(Q({},Gp,Yp),Jp,Xp);var Qp={kit:{"fa-kit":"fak"}},Zp={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},em={kit:{fak:"fa-kit"}},fl={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Li,ms={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tm=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],nm="classic",rm="duotone",sm="sharp",im="sharp-duotone",om="chisel",am="etch",lm="jelly",cm="jelly-duo",um="jelly-fill",fm="notdog",dm="notdog-duo",hm="slab",pm="slab-press",mm="thumbprint",gm="utility",ym="utility-duo",vm="utility-fill",bm="whiteboard",_m="Classic",wm="Duotone",Em="Sharp",Sm="Sharp Duotone",Im="Chisel",Am="Etch",Tm="Jelly",Cm="Jelly Duo",Pm="Jelly Fill",Rm="Notdog",xm="Notdog Duo",km="Slab",Om="Slab Press",Nm="Thumbprint",Dm="Utility",Lm="Utility Duo",Mm="Utility Fill",Fm="Whiteboard";Li={},Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(Li,nm,_m),rm,wm),sm,Em),im,Sm),om,Im),am,Am),lm,Tm),cm,Cm),um,Pm),fm,Rm),Q(Q(Q(Q(Q(Q(Q(Q(Li,dm,xm),hm,km),pm,Om),mm,Nm),gm,Dm),ym,Lm),vm,Mm),bm,Fm);var $m="kit",Um="kit-duotone",jm="Kit",Bm="Kit Duotone";Q(Q({},$m,jm),Um,Bm);var Hm={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Vm={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},yo={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Wm=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],qu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(tm,Wm),zm=["solid","regular","light","thin","duotone","brands","semibold"],Gu=[1,2,3,4,5,6,7,8,9,10],Km=Gu.concat([11,12,13,14,15,16,17,18,19,20]),qm=["aw","fw","pull-left","pull-right"],Gm=[].concat(lt(Object.keys(Vm)),zm,qm,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ms.GROUP,ms.SWAP_OPACITY,ms.PRIMARY,ms.SECONDARY]).concat(Gu.map(function(e){return"".concat(e,"x")})).concat(Km.map(function(e){return"w-".concat(e)})),Jm={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ut="___FONT_AWESOME___",vo=16,Ju="fa",Yu="svg-inline--fa",Pn="data-fa-i2svg",bo="data-fa-pseudo-element",Ym="data-fa-pseudo-element-pending",ca="data-prefix",ua="data-icon",dl="fontawesome-i2svg",Xm="async",Qm=["HTML","HEAD","STYLE","SCRIPT"],Xu=["::before","::after",":before",":after"],Qu=(function(){try{return!0}catch{return!1}})();function Qr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Ce]}})}var Zu=O({},Cu);Zu[Ce]=O(O(O(O({},{"fa-duotone":"duotone"}),Cu[Ce]),ul.kit),ul["kit-duotone"]);var Zm=Qr(Zu),_o=O({},Kp);_o[Ce]=O(O(O(O({},{duotone:"fad"}),_o[Ce]),fl.kit),fl["kit-duotone"]);var hl=Qr(_o),wo=O({},yo);wo[Ce]=O(O({},wo[Ce]),em.kit);var fa=Qr(wo),Eo=O({},Hm);Eo[Ce]=O(O({},Eo[Ce]),Qp.kit);Qr(Eo);var eg=Ep,ef="fa-layers-text",tg=Sp,ng=O({},Vp);Qr(ng);var rg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mi=Ip,sg=[].concat(lt(qp),lt(Gm)),Ir=cn.FontAwesomeConfig||{};function ig(e){var t=me.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function og(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(me&&typeof me.querySelector=="function"){var ag=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ag.forEach(function(e){var t=ri(e,2),n=t[0],r=t[1],s=og(ig(n));s!=null&&(Ir[r]=s)})}var tf={styleDefault:"solid",familyDefault:Ce,cssPrefix:Ju,replacementClass:Yu,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ir.familyPrefix&&(Ir.cssPrefix=Ir.familyPrefix);var er=O(O({},tf),Ir);er.autoReplaceSvg||(er.observeMutations=!1);var V={};Object.keys(tf).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(n){er[e]=n,Ar.forEach(function(r){return r(V)})},get:function(){return er[e]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){er.cssPrefix=t,Ar.forEach(function(n){return n(V)})},get:function(){return er.cssPrefix}});cn.FontAwesomeConfig=V;var Ar=[];function lg(e){return Ar.push(e),function(){Ar.splice(Ar.indexOf(e),1)}}var Mn=vo,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cg(e){if(!(!e||!zt)){var t=me.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=me.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return me.head.insertBefore(t,r),e}}var ug="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pl(){for(var e=12,t="";e-- >0;)t+=ug[Math.random()*62|0];return t}function ar(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function da(e){return e.classList?ar(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function nf(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(nf(e[n]),'" ')},"").trim()}function si(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ha(e){return e.size!==Et.size||e.x!==Et.x||e.y!==Et.y||e.rotate!==Et.rotate||e.flipX||e.flipY}function dg(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:c}}function hg(e){var t=e.transform,n=e.width,r=n===void 0?vo:n,s=e.height,i=s===void 0?vo:s,o="";return Tu?o+="translate(".concat(t.x/Mn-r/2,"em, ").concat(t.y/Mn-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/Mn,"em), calc(-50% + ").concat(t.y/Mn,"em)) "),o+="scale(".concat(t.size/Mn*(t.flipX?-1:1),", ").concat(t.size/Mn*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var pg=`:root, :host {
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
}`;function rf(){var e=Ju,t=Yu,n=V.cssPrefix,r=V.replacementClass,s=pg;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var ml=!1;function Fi(){V.autoAddCss&&!ml&&(cg(rf()),ml=!0)}var mg={mixout:function(){return{dom:{css:rf,insertCss:Fi}}},hooks:function(){return{beforeDOMElementCreation:function(){Fi()},beforeI2svg:function(){Fi()}}}},jt=cn||{};jt[Ut]||(jt[Ut]={});jt[Ut].styles||(jt[Ut].styles={});jt[Ut].hooks||(jt[Ut].hooks={});jt[Ut].shims||(jt[Ut].shims=[]);var st=jt[Ut],sf=[],of=function(){me.removeEventListener("DOMContentLoaded",of),Fs=1,sf.map(function(t){return t()})},Fs=!1;zt&&(Fs=(me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(me.readyState),Fs||me.addEventListener("DOMContentLoaded",of));function gg(e){zt&&(Fs?setTimeout(e,0):sf.push(e))}function Zr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,s=e.children,i=s===void 0?[]:s;return typeof e=="string"?nf(e):"<".concat(t," ").concat(fg(r),">").concat(i.map(Zr).join(""),"</").concat(t,">")}function gl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var $i=function(t,n,r,s){var i=Object.keys(t),o=i.length,a=n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=a(u,t[c],c,t);return u};function af(e){return lt(e).length!==1?null:e.codePointAt(0).toString(16)}function yl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],s=!!r.icon;return s?t[r.iconName]=r.icon:t[n]=r,t},{})}function So(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=yl(t);typeof st.hooks.addPack=="function"&&!s?st.hooks.addPack(e,yl(t)):st.styles[e]=O(O({},st.styles[e]||{}),i),e==="fas"&&So("fa",t)}var Ur=st.styles,yg=st.shims,lf=Object.keys(fa),vg=lf.reduce(function(e,t){return e[t]=Object.keys(fa[t]),e},{}),pa=null,cf={},uf={},ff={},df={},hf={};function bg(e){return~sg.indexOf(e)}function _g(e,t){var n=t.split("-"),r=n[0],s=n.slice(1).join("-");return r===e&&s!==""&&!bg(s)?s:null}var pf=function(){var t=function(i){return $i(Ur,function(o,a,l){return o[l]=$i(a,i,{}),o},{})};cf=t(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),uf=t(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),hf=t(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in Ur||V.autoFetchSvg,r=$i(yg,function(s,i){var o=i[0],a=i[1],l=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});ff=r.names,df=r.unicodes,pa=ii(V.styleDefault,{family:V.familyDefault})};lg(function(e){pa=ii(e.styleDefault,{family:V.familyDefault})});pf();function ma(e,t){return(cf[e]||{})[t]}function wg(e,t){return(uf[e]||{})[t]}function In(e,t){return(hf[e]||{})[t]}function mf(e){return ff[e]||{prefix:null,iconName:null}}function Eg(e){var t=df[e],n=ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function un(){return pa}var gf=function(){return{prefix:null,iconName:null,rest:[]}};function Sg(e){var t=Ce,n=lf.reduce(function(r,s){return r[s]="".concat(V.cssPrefix,"-").concat(s),r},{});return zu.forEach(function(r){(e.includes(n[r])||e.some(function(s){return vg[r].includes(s)}))&&(t=r)}),t}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Ce:n,s=Zm[r][e];if(r===Xr&&!e)return"fad";var i=hl[r][e]||hl[r][s],o=e in st.styles?e:null,a=i||o||null;return a}function Ig(e){var t=[],n=null;return e.forEach(function(r){var s=_g(V.cssPrefix,r);s?n=s:r&&t.push(r)}),{iconName:n,rest:t}}function vl(e){return e.sort().filter(function(t,n,r){return r.indexOf(t)===n})}var bl=qu.concat(Ku);function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,s=null,i=vl(e.filter(function(h){return bl.includes(h)})),o=vl(e.filter(function(h){return!bl.includes(h)})),a=i.filter(function(h){return s=h,!Pu.includes(h)}),l=ri(a,1),c=l[0],u=c===void 0?null:c,f=Sg(i),d=O(O({},Ig(o)),{},{prefix:ii(u,{family:f})});return O(O(O({},d),Pg({values:e,family:f,styles:Ur,config:V,canonical:d,givenPrefix:s})),Ag(r,s,d))}function Ag(e,t,n){var r=n.prefix,s=n.iconName;if(e||!r||!s)return{prefix:r,iconName:s};var i=t==="fa"?mf(s):{},o=In(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!Ur.far&&Ur.fas&&!V.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}var Tg=zu.filter(function(e){return e!==Ce||e!==Xr}),Cg=Object.keys(yo).filter(function(e){return e!==Ce}).map(function(e){return Object.keys(yo[e])}).flat();function Pg(e){var t=e.values,n=e.family,r=e.canonical,s=e.givenPrefix,i=s===void 0?"":s,o=e.styles,a=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,u=n===Xr,f=t.includes("fa-duotone")||t.includes("fad"),d=c.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(f||d||h)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Tg.includes(n)){var g=Object.keys(a).find(function(b){return Cg.includes(b)});if(g||c.autoFetchSvg){var v=zp.get(n).defaultShortPrefixId;r.prefix=v,r.iconName=In(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=un()||"fas"),r}var Rg=(function(){function e(){hp(this,e),this.definitions={}}return mp(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),So(a,o[a]);var l=fa[Ce][a];l&&So(l,o[a]),pf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=c)}),n[a][l]=c}),n}}])})(),_l=[],Bn={},Vn={},xg=Object.keys(Vn);function kg(e,t){var n=t.mixoutsTo;return _l=e,Bn={},Object.keys(Vn).forEach(function(r){xg.indexOf(r)===-1&&delete Vn[r]}),_l.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Ms(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Bn[o]||(Bn[o]=[]),Bn[o].push(i[o])})}r.provides&&r.provides(Vn)}),n}function Io(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Bn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=Bn[e]||[];s.forEach(function(i){i.apply(null,n)})}function fn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vn[e]?Vn[e].apply(null,t):void 0}function Ao(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||un();if(t)return t=In(n,t)||t,gl(yf.definitions,n,t)||gl(st.styles,n,t)}var yf=new Rg,Og=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Rn("noAuto")},Ng={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(Rn("beforeI2svg",t),fn("pseudoElements2svg",t),fn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,gg(function(){Lg({autoReplaceSvgRoot:n}),Rn("watch",t)})}},Dg={icon:function(t){if(t===null)return null;if(Ms(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:In(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ii(t[0]);return{prefix:r,iconName:In(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(eg))){var s=oi(t.split(" "),{skipLookups:!0});return{prefix:s.prefix||un(),iconName:In(s.prefix,s.iconName)||s.iconName}}if(typeof t=="string"){var i=un();return{prefix:i,iconName:In(i,t)||t}}}},Je={noAuto:Og,config:V,dom:Ng,parse:Dg,library:yf,findIconDefinition:Ao,toHtml:Zr},Lg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?me:n;(Object.keys(st.styles).length>0||V.autoFetchSvg)&&zt&&V.autoReplaceSvg&&Je.dom.i2svg({node:r})};function ai(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(zt){var r=me.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Mg(e){var t=e.children,n=e.main,r=e.mask,s=e.attributes,i=e.styles,o=e.transform;if(ha(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=si(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function Fg(e){var t=e.prefix,n=e.iconName,r=e.children,s=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},s),{},{id:o}),children:r}]}]}function $g(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(n){return n in e})}function ga(e){var t=e.icons,n=t.main,r=t.mask,s=e.prefix,i=e.iconName,o=e.transform,a=e.symbol,l=e.maskId,c=e.extra,u=e.watchable,f=u===void 0?!1:u,d=r.found?r:n,h=d.width,g=d.height,v=[V.replacementClass,i?"".concat(V.cssPrefix,"-").concat(i):""].filter(function(N){return c.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(c.classes).join(" "),b={children:[],attributes:O(O({},c.attributes),{},{"data-prefix":s,"data-icon":i,class:v,role:c.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(g)})};!$g(c.attributes)&&!c.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),f&&(b.attributes[Pn]="");var _=O(O({},b),{},{prefix:s,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:O({},c.styles)}),E=r.found&&n.found?fn("generateAbstractMask",_)||{children:[],attributes:{}}:fn("generateAbstractIcon",_)||{children:[],attributes:{}},P=E.children,R=E.attributes;return _.children=P,_.attributes=R,a?Fg(_):Mg(_)}function wl(e){var t=e.content,n=e.width,r=e.height,s=e.transform,i=e.extra,o=e.watchable,a=o===void 0?!1:o,l=O(O({},i.attributes),{},{class:i.classes.join(" ")});a&&(l[Pn]="");var c=O({},i.styles);ha(s)&&(c.transform=hg({transform:s,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=si(c);u.length>0&&(l.style=u);var f=[];return f.push({tag:"span",attributes:l,children:[t]}),f}function Ug(e){var t=e.content,n=e.extra,r=O(O({},n.attributes),{},{class:n.classes.join(" ")}),s=si(n.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Ui=st.styles;function To(e){var t=e[0],n=e[1],r=e.slice(4),s=ri(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Mi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Mi.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Mi.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var jg={found:!1,width:512,height:512};function Bg(e,t){!Qu&&!V.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Co(e,t){var n=t;return t==="fa"&&V.styleDefault!==null&&(t=un()),new Promise(function(r,s){if(n==="fa"){var i=mf(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ui[t]&&Ui[t][e]){var o=Ui[t][e];return r(To(o))}Bg(e,t),r(O(O({},jg),{},{icon:V.showMissingIcons&&e?fn("missingIconAbstract")||{}:{}}))})}var El=function(){},Po=V.measurePerformance&&ps&&ps.mark&&ps.measure?ps:{mark:El,measure:El},vr='FA "7.1.0"',Hg=function(t){return Po.mark("".concat(vr," ").concat(t," begins")),function(){return vf(t)}},vf=function(t){Po.mark("".concat(vr," ").concat(t," ends")),Po.measure("".concat(vr," ").concat(t),"".concat(vr," ").concat(t," begins"),"".concat(vr," ").concat(t," ends"))},ya={begin:Hg,end:vf},Ss=function(){};function Sl(e){var t=e.getAttribute?e.getAttribute(Pn):null;return typeof t=="string"}function Vg(e){var t=e.getAttribute?e.getAttribute(ca):null,n=e.getAttribute?e.getAttribute(ua):null;return t&&n}function Wg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function zg(){if(V.autoReplaceSvg===!0)return Is.replace;var e=Is[V.autoReplaceSvg];return e||Is.replace}function Kg(e){return me.createElementNS("http://www.w3.org/2000/svg",e)}function qg(e){return me.createElement(e)}function bf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Kg:qg:n;if(typeof e=="string")return me.createTextNode(e);var s=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){s.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){s.appendChild(bf(o,{ceFn:r}))}),s}function Gg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Is={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(s){n.parentNode.insertBefore(bf(s),n)}),n.getAttribute(Pn)===null&&V.keepOriginalSource){var r=me.createComment(Gg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~da(n).indexOf(V.replacementClass))return Is.replace(t);var s=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Zr(a)}).join(`
`);n.setAttribute(Pn,""),n.innerHTML=o}};function Il(e){e()}function _f(e,t){var n=typeof t=="function"?t:Ss;if(e.length===0)n();else{var r=Il;V.mutateApproach===Xm&&(r=cn.requestAnimationFrame||Il),r(function(){var s=zg(),i=ya.begin("mutate");e.map(s),i(),n()})}}var va=!1;function wf(){va=!0}function Ro(){va=!1}var $s=null;function Al(e){if(cl&&V.observeMutations){var t=e.treeCallback,n=t===void 0?Ss:t,r=e.nodeCallback,s=r===void 0?Ss:r,i=e.pseudoElementsCallback,o=i===void 0?Ss:i,a=e.observeMutationsRoot,l=a===void 0?me:a;$s=new cl(function(c){if(!va){var u=un();ar(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Sl(f.addedNodes[0])&&(V.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&V.searchPseudoElements&&o([f.target],!0),f.type==="attributes"&&Sl(f.target)&&~rg.indexOf(f.attributeName))if(f.attributeName==="class"&&Vg(f.target)){var d=oi(da(f.target)),h=d.prefix,g=d.iconName;f.target.setAttribute(ca,h||u),g&&f.target.setAttribute(ua,g)}else Wg(f.target)&&s(f.target)})}}),zt&&$s.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jg(){$s&&$s.disconnect()}function Yg(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Xg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",s=oi(da(e));return s.prefix||(s.prefix=un()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=wg(s.prefix,e.innerText)||ma(s.prefix,af(e.innerText))),!s.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function Qg(e){var t=ar(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return t}function Zg(){return{iconName:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Xg(e),r=n.iconName,s=n.prefix,i=n.rest,o=Qg(e),a=Io("parseNodeAttributes",{},e),l=t.styleParser?Yg(e):[];return O({iconName:r,prefix:s,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},a)}var ey=st.styles;function Ef(e){var t=V.autoReplaceSvg==="nest"?Tl(e,{styleParser:!1}):Tl(e);return~t.extra.classes.indexOf(ef)?fn("generateLayersText",e,t):fn("generateSvgReplacementMutation",e,t)}function ty(){return[].concat(lt(Ku),lt(qu))}function Cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();var n=me.documentElement.classList,r=function(f){return n.add("".concat(dl,"-").concat(f))},s=function(f){return n.remove("".concat(dl,"-").concat(f))},i=V.autoFetchSvg?ty():Pu.concat(Object.keys(ey));i.includes("fa")||i.push("fa");var o=[".".concat(ef,":not([").concat(Pn,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Pn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ar(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var l=ya.begin("onTree"),c=a.reduce(function(u,f){try{var d=Ef(f);d&&u.push(d)}catch(h){Qu||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){_f(d,function(){r("active"),r("complete"),s("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(d){l(),f(d)})})}function ny(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ef(e).then(function(n){n&&_f([n],t)})}function ry(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ao(t||{}),s=n.mask;return s&&(s=(s||{}).icon?s:Ao(s||{})),e(r,O(O({},n),{},{mask:s}))}}var sy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Et:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,f=n.classes,d=f===void 0?[]:f,h=n.attributes,g=h===void 0?{}:h,v=n.styles,b=v===void 0?{}:v;if(t){var _=t.prefix,E=t.iconName,P=t.icon;return ai(O({type:"icon"},t),function(){return Rn("beforeDOMElementCreation",{iconDefinition:t,params:n}),ga({icons:{main:To(P),mask:l?To(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:E,transform:O(O({},Et),s),symbol:o,maskId:u,extra:{attributes:g,styles:b,classes:d}})})}},iy={mixout:function(){return{icon:ry(sy)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Cl,n.nodeCallback=ny,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,s=r===void 0?me:r,i=n.callback,o=i===void 0?function(){}:i;return Cl(s,o)},t.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.prefix,o=r.transform,a=r.symbol,l=r.mask,c=r.maskId,u=r.extra;return new Promise(function(f,d){Promise.all([Co(s,i),l.iconName?Co(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var g=ri(h,2),v=g[0],b=g[1];f([n,ga({icons:{main:v,mask:b},prefix:i,iconName:s,transform:o,symbol:a,maskId:c,extra:u,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,l=si(a);l.length>0&&(s.style=l);var c;return ha(o)&&(c=fn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:s}}}},oy={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return ai({type:"layer"},function(){Rn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(lt(i)).join(" ")},children:o}]})}}}},ay={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var s=r.classes,i=s===void 0?[]:s,o=r.attributes,a=o===void 0?{}:o,l=r.styles,c=l===void 0?{}:l;return ai({type:"counter",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),Ug({content:n.toString(),extra:{attributes:a,styles:c,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(lt(i))}})})}}}},ly={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Et:s,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return ai({type:"text",content:n},function(){return Rn("beforeDOMElementCreation",{content:n,params:r}),wl({content:n,transform:O(O({},Et),i),extra:{attributes:c,styles:f,classes:["".concat(V.cssPrefix,"-layers-text")].concat(lt(a))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var s=r.transform,i=r.extra,o=null,a=null;if(Tu){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/l,a=c.height/l}return Promise.resolve([n,wl({content:n.innerHTML,width:o,height:a,transform:s,extra:i,watchable:!0})])}}},Sf=new RegExp('"',"ug"),Pl=[1105920,1112319],Rl=O(O(O(O({},{FontAwesome:{normal:"fas",400:"fas"}}),Wp),Jm),Zp),xo=Object.keys(Rl).reduce(function(e,t){return e[t.toLowerCase()]=Rl[t],e},{}),cy=Object.keys(xo).reduce(function(e,t){var n=xo[t];return e[t]=n[900]||lt(Object.entries(n))[0][1],e},{});function uy(e){var t=e.replace(Sf,"");return af(lt(t)[0]||"")}function fy(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content"),r=n.replace(Sf,""),s=r.codePointAt(0),i=s>=Pl[0]&&s<=Pl[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function dy(e,t){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),s=isNaN(r)?"normal":r;return(xo[n]||{})[s]||cy[n]}function xl(e,t){var n="".concat(Ym).concat(t.replace(":","-"));return new Promise(function(r,s){if(e.getAttribute(n)!==null)return r();var i=ar(e.children),o=i.filter(function(k){return k.getAttribute(bo)===t})[0],a=cn.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),c=l.match(tg),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&f!=="none"&&f!==""){var d=a.getPropertyValue("content"),h=dy(l,u),g=uy(d),v=c[0].startsWith("FontAwesome"),b=fy(a),_=ma(h,g),E=_;if(v){var P=Eg(g);P.iconName&&P.prefix&&(_=P.iconName,h=P.prefix)}if(_&&!b&&(!o||o.getAttribute(ca)!==h||o.getAttribute(ua)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var R=Zg(),N=R.extra;N.attributes[bo]=t,Co(_,h).then(function(k){var j=ga(O(O({},R),{},{icons:{main:k,mask:gf()},prefix:h,iconName:E,extra:N,watchable:!0})),H=me.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=j.map(function(ve){return Zr(ve)}).join(`
`),e.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function hy(e){return Promise.all([xl(e,"::before"),xl(e,"::after")])}function py(e){return e.parentNode!==document.head&&!~Qm.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(bo)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var my=function(t){return!!t&&Xu.some(function(n){return t.includes(n)})},gy=function(t){if(!t)return[];var n=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var s=Es(r),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;if(my(o)){var a=Xu.reduce(function(l,c){return l.replace(c,"")},o);a!==""&&a!=="*"&&n.add(a)}}}catch(l){s.e(l)}finally{s.f()}return n};function kl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(zt){var n;if(t)n=e;else if(V.searchPseudoElementsFullScan)n=e.querySelectorAll("*");else{var r=new Set,s=Es(document.styleSheets),i;try{for(s.s();!(i=s.n()).done;){var o=i.value;try{var a=Es(o.cssRules),l;try{for(a.s();!(l=a.n()).done;){var c=l.value,u=gy(c.selectorText),f=Es(u),d;try{for(f.s();!(d=f.n()).done;){var h=d.value;r.add(h)}}catch(v){f.e(v)}finally{f.f()}}}catch(v){a.e(v)}finally{a.f()}}catch(v){V.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){s.e(v)}finally{s.f()}if(!r.size)return;var g=Array.from(r).join(", ");try{n=e.querySelectorAll(g)}catch{}}return new Promise(function(v,b){var _=ar(n).filter(py).map(hy),E=ya.begin("searchPseudoElements");wf(),Promise.all(_).then(function(){E(),Ro(),v()}).catch(function(){E(),Ro(),b()})})}}var yy={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=kl,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?me:r;V.searchPseudoElements&&kl(s)}}},Ol=!1,vy={mixout:function(){return{dom:{unwatch:function(){wf(),Ol=!0}}}},hooks:function(){return{bootstrap:function(){Al(Io("mutationObserverCallbacks",{}))},noAuto:function(){Jg()},watch:function(n){var r=n.observeMutationsRoot;Ol?Ro():Al(Io("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Nl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},by={mixout:function(){return{parse:{transform:function(n){return Nl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=Nl(s)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:f,path:d};return{tag:"g",attributes:O({},h.outer),children:[{tag:"g",attributes:O({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),h.path)}]}]}}}},ji={x:0,y:0,width:"100%",height:"100%"};function Dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function _y(e){return e.tag==="g"?e.children:[e]}var wy={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?oi(s.split(" ").map(function(o){return o.trim()})):gf();return i.prefix||(i.prefix=un()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,l=n.transform,c=i.width,u=i.icon,f=o.width,d=o.icon,h=dg({transform:l,containerWidth:f,iconWidth:c}),g={tag:"rect",attributes:O(O({},ji),{},{fill:"white"})},v=u.children?{children:u.children.map(Dl)}:{},b={tag:"g",attributes:O({},h.inner),children:[Dl(O({tag:u.tag,attributes:O(O({},u.attributes),h.path)},v))]},_={tag:"g",attributes:O({},h.outer),children:[b]},E="mask-".concat(a||pl()),P="clip-".concat(a||pl()),R={tag:"mask",attributes:O(O({},ji),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,_]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:_y(d)},R]};return r.push(N,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(E,")")},ji)}),{children:r,attributes:s}}}},Ey={provides:function(t){var n=!1;cn.matchMedia&&(n=cn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Sy={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},Iy=[mg,iy,oy,ay,ly,yy,vy,by,wy,Ey,Sy];kg(Iy,{mixoutsTo:Je});Je.noAuto;Je.config;var Ay=Je.library;Je.dom;var ko=Je.parse;Je.findIconDefinition;Je.toHtml;var Ty=Je.icon;Je.layer;Je.text;Je.counter;/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ba(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const de={},Wn=[],St=()=>{},If=()=>!1,li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_a=e=>e.startsWith("onUpdate:"),De=Object.assign,wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cy=Object.prototype.hasOwnProperty,oe=(e,t)=>Cy.call(e,t),J=Array.isArray,zn=e=>ci(e)==="[object Map]",Af=e=>ci(e)==="[object Set]",Y=e=>typeof e=="function",Se=e=>typeof e=="string",mn=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Tf=e=>(ye(e)||Y(e))&&Y(e.then)&&Y(e.catch),Cf=Object.prototype.toString,ci=e=>Cf.call(e),Py=e=>ci(e).slice(8,-1),Pf=e=>ci(e)==="[object Object]",Ea=e=>Se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tr=ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ry=/-(\w)/g,et=ui(e=>e.replace(Ry,(t,n)=>n?n.toUpperCase():"")),xy=/\B([A-Z])/g,Dn=ui(e=>e.replace(xy,"-$1").toLowerCase()),fi=ui(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bi=ui(e=>e?`on${fi(e)}`:""),sn=(e,t)=>!Object.is(e,t),As=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Rf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Oo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ll;const di=()=>Ll||(Ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wt(e){if(J(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Se(r)?Dy(r):wt(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Se(e)||ye(e))return e}const ky=/;(?![^(]*\))/g,Oy=/:([^]+)/,Ny=/\/\*[^]*?\*\//g;function Dy(e){const t={};return e.replace(Ny,"").split(ky).forEach(n=>{if(n){const r=n.split(Oy);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function dn(e){let t="";if(Se(e))t=e;else if(J(e))for(let n=0;n<e.length;n++){const r=dn(e[n]);r&&(t+=r+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",My=ba(Ly);function xf(e){return!!e||e===""}const kf=e=>!!(e&&e.__v_isRef===!0),ce=e=>Se(e)?e:e==null?"":J(e)||ye(e)&&(e.toString===Cf||!Y(e.toString))?kf(e)?ce(e.value):JSON.stringify(e,Of,2):String(e),Of=(e,t)=>kf(t)?Of(e,t.value):zn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Hi(r,i)+" =>"]=s,n),{})}:Af(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Hi(n))}:mn(t)?Hi(t):ye(t)&&!J(t)&&!Pf(t)?String(t):t,Hi=(e,t="")=>{var n;return mn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Fy{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $y(){return je}let pe;const Vi=new WeakSet;class Nf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vi.has(this)&&(Vi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ml(this),Mf(this);const t=pe,n=ot;pe=this,ot=!0;try{return this.fn()}finally{Ff(this),pe=t,ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Aa(t);this.deps=this.depsTail=void 0,Ml(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){No(this)&&this.run()}get dirty(){return No(this)}}let Df=0,Cr,Pr;function Lf(e,t=!1){if(e.flags|=8,t){e.next=Pr,Pr=e;return}e.next=Cr,Cr=e}function Sa(){Df++}function Ia(){if(--Df>0)return;if(Pr){let t=Pr;for(Pr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Cr;){let t=Cr;for(Cr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Mf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ff(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Aa(r),Uy(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function No(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($f(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function $f(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===jr)||(e.globalVersion=jr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!No(e))))return;e.flags|=2;const t=e.dep,n=pe,r=ot;pe=e,ot=!0;try{Mf(e);const s=e.fn(e._value);(t.version===0||sn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{pe=n,ot=r,Ff(e),e.flags&=-3}}function Aa(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Aa(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Uy(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ot=!0;const Uf=[];function Bt(){Uf.push(ot),ot=!1}function Ht(){const e=Uf.pop();ot=e===void 0?!0:e}function Ml(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let jr=0;class jy{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ta{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!ot||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new jy(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,jf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=r)}return n}trigger(t){this.version++,jr++,this.notify(t)}notify(t){Sa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ia()}}}function jf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)jf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Do=new WeakMap,Tn=Symbol(""),Lo=Symbol(""),Br=Symbol("");function xe(e,t,n){if(ot&&pe){let r=Do.get(e);r||Do.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ta),s.map=r,s.key=n),s.track()}}function kt(e,t,n,r,s,i){const o=Do.get(e);if(!o){jr++;return}const a=l=>{l&&l.trigger()};if(Sa(),t==="clear")o.forEach(a);else{const l=J(e),c=l&&Ea(n);if(l&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===Br||!mn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Br)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Tn)),zn(e)&&a(o.get(Lo)));break;case"delete":l||(a(o.get(Tn)),zn(e)&&a(o.get(Lo)));break;case"set":zn(e)&&a(o.get(Tn));break}}Ia()}function Fn(e){const t=ie(e);return t===e?t:(xe(t,"iterate",Br),Ze(e)?t:t.map(Te))}function hi(e){return xe(e=ie(e),"iterate",Br),e}const By={__proto__:null,[Symbol.iterator](){return Wi(this,Symbol.iterator,Te)},concat(...e){return Fn(this).concat(...e.map(t=>J(t)?Fn(t):t))},entries(){return Wi(this,"entries",e=>(e[1]=Te(e[1]),e))},every(e,t){return Pt(this,"every",e,t,void 0,arguments)},filter(e,t){return Pt(this,"filter",e,t,n=>n.map(Te),arguments)},find(e,t){return Pt(this,"find",e,t,Te,arguments)},findIndex(e,t){return Pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Pt(this,"findLast",e,t,Te,arguments)},findLastIndex(e,t){return Pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return zi(this,"includes",e)},indexOf(...e){return zi(this,"indexOf",e)},join(e){return Fn(this).join(e)},lastIndexOf(...e){return zi(this,"lastIndexOf",e)},map(e,t){return Pt(this,"map",e,t,void 0,arguments)},pop(){return hr(this,"pop")},push(...e){return hr(this,"push",e)},reduce(e,...t){return Fl(this,"reduce",e,t)},reduceRight(e,...t){return Fl(this,"reduceRight",e,t)},shift(){return hr(this,"shift")},some(e,t){return Pt(this,"some",e,t,void 0,arguments)},splice(...e){return hr(this,"splice",e)},toReversed(){return Fn(this).toReversed()},toSorted(e){return Fn(this).toSorted(e)},toSpliced(...e){return Fn(this).toSpliced(...e)},unshift(...e){return hr(this,"unshift",e)},values(){return Wi(this,"values",Te)}};function Wi(e,t,n){const r=hi(e),s=r[t]();return r!==e&&!Ze(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Hy=Array.prototype;function Pt(e,t,n,r,s,i){const o=hi(e),a=o!==e&&!Ze(e),l=o[t];if(l!==Hy[t]){const f=l.apply(e,i);return a?Te(f):f}let c=n;o!==e&&(a?c=function(f,d){return n.call(this,Te(f),d,e)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,e)}));const u=l.call(o,c,r);return a&&s?s(u):u}function Fl(e,t,n,r){const s=hi(e);let i=n;return s!==e&&(Ze(e)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,e)}):i=function(o,a,l){return n.call(this,o,Te(a),l,e)}),s[t](i,...r)}function zi(e,t,n){const r=ie(e);xe(r,"iterate",Br);const s=r[t](...n);return(s===-1||s===!1)&&Ra(n[0])?(n[0]=ie(n[0]),r[t](...n)):s}function hr(e,t,n=[]){Bt(),Sa();const r=ie(e)[t].apply(e,n);return Ia(),Ht(),r}const Vy=ba("__proto__,__v_isRef,__isVue"),Bf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mn));function Wy(e){mn(e)||(e=String(e));const t=ie(this);return xe(t,"has",e),t.hasOwnProperty(e)}class Hf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ev:Kf:i?zf:Wf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=J(t);if(!s){let l;if(o&&(l=By[n]))return l;if(n==="hasOwnProperty")return Wy}const a=Reflect.get(t,n,Ne(t)?t:r);return(mn(n)?Bf.has(n):Vy(n))||(s||xe(t,"get",n),i)?a:Ne(a)?o&&Ea(n)?a:a.value:ye(a)?s?Gf(a):lr(a):a}}class Vf extends Hf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const l=hn(i);if(!Ze(r)&&!hn(r)&&(i=ie(i),r=ie(r)),!J(t)&&Ne(i)&&!Ne(r))return l||(i.value=r),!0}const o=J(t)&&Ea(n)?Number(n)<t.length:oe(t,n),a=Reflect.set(t,n,r,Ne(t)?t:s);return t===ie(s)&&(o?sn(r,i)&&kt(t,"set",n,r):kt(t,"add",n,r)),a}deleteProperty(t,n){const r=oe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&kt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!mn(n)||!Bf.has(n))&&xe(t,"has",n),r}ownKeys(t){return xe(t,"iterate",J(t)?"length":Tn),Reflect.ownKeys(t)}}class zy extends Hf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ky=new Vf,qy=new zy,Gy=new Vf(!0);const Mo=e=>e,gs=e=>Reflect.getPrototypeOf(e);function Jy(e,t,n){return function(...r){const s=this.__v_raw,i=ie(s),o=zn(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...r),u=n?Mo:t?Us:Te;return!t&&xe(i,"iterate",l?Lo:Tn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ys(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yy(e,t){const n={get(s){const i=this.__v_raw,o=ie(i),a=ie(s);e||(sn(s,a)&&xe(o,"get",s),xe(o,"get",a));const{has:l}=gs(o),c=t?Mo:e?Us:Te;if(l.call(o,s))return c(i.get(s));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&xe(ie(s),"iterate",Tn),s.size},has(s){const i=this.__v_raw,o=ie(i),a=ie(s);return e||(sn(s,a)&&xe(o,"has",s),xe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=ie(a),c=t?Mo:e?Us:Te;return!e&&xe(l,"iterate",Tn),a.forEach((u,f)=>s.call(i,c(u),c(f),o))}};return De(n,e?{add:ys("add"),set:ys("set"),delete:ys("delete"),clear:ys("clear")}:{add(s){!t&&!Ze(s)&&!hn(s)&&(s=ie(s));const i=ie(this);return gs(i).has.call(i,s)||(i.add(s),kt(i,"add",s,s)),this},set(s,i){!t&&!Ze(i)&&!hn(i)&&(i=ie(i));const o=ie(this),{has:a,get:l}=gs(o);let c=a.call(o,s);c||(s=ie(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,i),c?sn(i,u)&&kt(o,"set",s,i):kt(o,"add",s,i),this},delete(s){const i=ie(this),{has:o,get:a}=gs(i);let l=o.call(i,s);l||(s=ie(s),l=o.call(i,s)),a&&a.call(i,s);const c=i.delete(s);return l&&kt(i,"delete",s,void 0),c},clear(){const s=ie(this),i=s.size!==0,o=s.clear();return i&&kt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Jy(s,e,t)}),n}function Ca(e,t){const n=Yy(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(oe(n,s)&&s in r?n:r,s,i)}const Xy={get:Ca(!1,!1)},Qy={get:Ca(!1,!0)},Zy={get:Ca(!0,!1)};const Wf=new WeakMap,zf=new WeakMap,Kf=new WeakMap,ev=new WeakMap;function tv(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nv(e){return e.__v_skip||!Object.isExtensible(e)?0:tv(Py(e))}function lr(e){return hn(e)?e:Pa(e,!1,Ky,Xy,Wf)}function qf(e){return Pa(e,!1,Gy,Qy,zf)}function Gf(e){return Pa(e,!0,qy,Zy,Kf)}function Pa(e,t,n,r,s){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=nv(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Kn(e){return hn(e)?Kn(e.__v_raw):!!(e&&e.__v_isReactive)}function hn(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function Ra(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function rv(e){return!oe(e,"__v_skip")&&Object.isExtensible(e)&&Rf(e,"__v_skip",!0),e}const Te=e=>ye(e)?lr(e):e,Us=e=>ye(e)?Gf(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function Ee(e){return Jf(e,!1)}function sv(e){return Jf(e,!0)}function Jf(e,t){return Ne(e)?e:new iv(e,t)}class iv{constructor(t,n){this.dep=new Ta,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:Te(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ze(t)||hn(t);t=r?t:ie(t),sn(t,n)&&(this._rawValue=t,this._value=r?t:Te(t),this.dep.trigger())}}function G(e){return Ne(e)?e.value:e}const ov={get:(e,t,n)=>t==="__v_raw"?e:G(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Yf(e){return Kn(e)?e:new Proxy(e,ov)}class av{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ta(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=jr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Lf(this,!0),!0}get value(){const t=this.dep.track();return $f(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function lv(e,t,n=!1){let r,s;return Y(e)?r=e:(r=e.get,s=e.set),new av(r,s,n)}const vs={},js=new WeakMap;let En;function cv(e,t=!1,n=En){if(n){let r=js.get(n);r||js.set(n,r=[]),r.push(e)}}function uv(e,t,n=de){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=R=>s?R:Ze(R)||s===!1||s===0?Ot(R,1):Ot(R);let u,f,d,h,g=!1,v=!1;if(Ne(e)?(f=()=>e.value,g=Ze(e)):Kn(e)?(f=()=>c(e),g=!0):J(e)?(v=!0,g=e.some(R=>Kn(R)||Ze(R)),f=()=>e.map(R=>{if(Ne(R))return R.value;if(Kn(R))return c(R);if(Y(R))return l?l(R,2):R()})):Y(e)?t?f=l?()=>l(e,2):e:f=()=>{if(d){Bt();try{d()}finally{Ht()}}const R=En;En=u;try{return l?l(e,3,[h]):e(h)}finally{En=R}}:f=St,t&&s){const R=f,N=s===!0?1/0:s;f=()=>Ot(R(),N)}const b=$y(),_=()=>{u.stop(),b&&b.active&&wa(b.effects,u)};if(i&&t){const R=t;t=(...N)=>{R(...N),_()}}let E=v?new Array(e.length).fill(vs):vs;const P=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(t){const N=u.run();if(s||g||(v?N.some((k,j)=>sn(k,E[j])):sn(N,E))){d&&d();const k=En;En=u;try{const j=[N,E===vs?void 0:v&&E[0]===vs?[]:E,h];E=N,l?l(t,3,j):t(...j)}finally{En=k}}}else u.run()};return a&&a(P),u=new Nf(f),u.scheduler=o?()=>o(P,!1):P,h=R=>cv(R,!1,u),d=u.onStop=()=>{const R=js.get(u);if(R){if(l)l(R,4);else for(const N of R)N();js.delete(u)}},t?r?P(!0):E=u.run():o?o(P.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Ot(e,t=1/0,n){if(t<=0||!ye(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ne(e))Ot(e.value,t,n);else if(J(e))for(let r=0;r<e.length;r++)Ot(e[r],t,n);else if(Af(e)||zn(e))e.forEach(r=>{Ot(r,t,n)});else if(Pf(e)){for(const r in e)Ot(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ot(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function es(e,t,n,r){try{return r?e(...r):e()}catch(s){pi(s,t,n)}}function Tt(e,t,n,r){if(Y(e)){const s=es(e,t,n,r);return s&&Tf(s)&&s.catch(i=>{pi(i,t,n)}),s}if(J(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Tt(e[i],t,n,r));return s}}function pi(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||de;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,l,c)===!1)return}a=a.parent}if(i){Bt(),es(i,null,10,[e,l,c]),Ht();return}}fv(e,n,s,r,o)}function fv(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Me=[];let bt=-1;const qn=[];let Yt=null,$n=0;const Xf=Promise.resolve();let Bs=null;function Qf(e){const t=Bs||Xf;return e?t.then(this?e.bind(this):e):t}function dv(e){let t=bt+1,n=Me.length;for(;t<n;){const r=t+n>>>1,s=Me[r],i=Hr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function xa(e){if(!(e.flags&1)){const t=Hr(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=Hr(n)?Me.push(e):Me.splice(dv(t),0,e),e.flags|=1,Zf()}}function Zf(){Bs||(Bs=Xf.then(td))}function hv(e){J(e)?qn.push(...e):Yt&&e.id===-1?Yt.splice($n+1,0,e):e.flags&1||(qn.push(e),e.flags|=1),Zf()}function $l(e,t,n=bt+1){for(;n<Me.length;n++){const r=Me[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Me.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ed(e){if(qn.length){const t=[...new Set(qn)].sort((n,r)=>Hr(n)-Hr(r));if(qn.length=0,Yt){Yt.push(...t);return}for(Yt=t,$n=0;$n<Yt.length;$n++){const n=Yt[$n];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Yt=null,$n=0}}const Hr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function td(e){try{for(bt=0;bt<Me.length;bt++){const t=Me[bt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),es(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;bt<Me.length;bt++){const t=Me[bt];t&&(t.flags&=-2)}bt=-1,Me.length=0,ed(),Bs=null,(Me.length||qn.length)&&td()}}let qe=null,nd=null;function Hs(e){const t=qe;return qe=e,nd=e&&e.type.__scopeId||null,t}function Rr(e,t=qe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Gl(-1);const i=Hs(t);let o;try{o=e(...s)}finally{Hs(i),r._d&&Gl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e,t){if(qe===null)return e;const n=vi(qe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,l=de]=t[s];i&&(Y(i)&&(i={mounted:i,updated:i}),i.deep&&Ot(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function _n(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Bt(),Tt(l,n,8,[e.el,a,e,t]),Ht())}}const pv=Symbol("_vte"),mv=e=>e.__isTeleport,gv=Symbol("_leaveCb");function ka(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ka(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Oa(e,t){return Y(e)?De({name:e.name},t,{setup:e}):e}function rd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function xr(e,t,n,r,s=!1){if(J(e)){e.forEach((g,v)=>xr(g,t&&(J(t)?t[v]:t),n,r,s));return}if(kr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&xr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?vi(r.component):r.el,o=s?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState,d=ie(f),h=f===de?If:g=>oe(d,g);if(c!=null&&c!==l){if(Se(c))u[c]=null,h(c)&&(f[c]=null);else if(Ne(c)){c.value=null;const g=t;g.k&&(u[g.k]=null)}}if(Y(l))es(l,a,12,[o,u]);else{const g=Se(l),v=Ne(l);if(g||v){const b=()=>{if(e.f){const _=g?h(l)?f[l]:u[l]:l.value;if(s)J(_)&&wa(_,i);else if(J(_))_.includes(i)||_.push(i);else if(g)u[l]=[i],h(l)&&(f[l]=u[l]);else{const E=[i];l.value=E,e.k&&(u[e.k]=E)}}else g?(u[l]=o,h(l)&&(f[l]=o)):v&&(l.value=o,e.k&&(u[e.k]=o))};o?(b.id=-1,Ke(b,n)):b()}}}di().requestIdleCallback;di().cancelIdleCallback;const kr=e=>!!e.type.__asyncLoader,sd=e=>e.type.__isKeepAlive;function yv(e,t){id(e,"a",t)}function vv(e,t){id(e,"da",t)}function id(e,t,n=ke){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(mi(t,r,n),n){let s=n.parent;for(;s&&s.parent;)sd(s.parent.vnode)&&bv(r,t,n,s),s=s.parent}}function bv(e,t,n,r){const s=mi(t,e,r,!0);od(()=>{wa(r[t],s)},n)}function mi(e,t,n=ke,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Bt();const a=ns(n),l=Tt(t,n,e,o);return a(),Ht(),l});return r?s.unshift(i):s.push(i),i}}const Kt=e=>(t,n=ke)=>{(!Wr||e==="sp")&&mi(e,(...r)=>t(...r),n)},_v=Kt("bm"),ts=Kt("m"),wv=Kt("bu"),Ev=Kt("u"),Na=Kt("bum"),od=Kt("um"),Sv=Kt("sp"),Iv=Kt("rtg"),Av=Kt("rtc");function Tv(e,t=ke){mi("ec",e,t)}const Cv="components";function Gn(e,t){return Rv(Cv,e,!0,t)||e}const Pv=Symbol.for("v-ndc");function Rv(e,t,n=!0,r=!1){const s=qe||ke;if(s){const i=s.type;{const a=gb(i,!1);if(a&&(a===t||a===et(t)||a===fi(et(t))))return i}const o=Ul(s[e]||i[e],t)||Ul(s.appContext[e],t);return!o&&r?i:o}}function Ul(e,t){return e&&(e[t]||e[et(t)]||e[fi(et(t))])}function Or(e,t,n,r){let s;const i=n,o=J(e);if(o||Se(e)){const a=o&&Kn(e);let l=!1,c=!1;a&&(l=!Ze(e),c=hn(e),e=hi(e)),s=new Array(e.length);for(let u=0,f=e.length;u<f;u++)s[u]=t(l?c?Us(Te(e[u])):Te(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(ye(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(e[u],u,l,i)}}else s=[];return s}const Fo=e=>e?Td(e)?vi(e):Fo(e.parent):null,Nr=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fo(e.parent),$root:e=>Fo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ld(e),$forceUpdate:e=>e.f||(e.f=()=>{xa(e.update)}),$nextTick:e=>e.n||(e.n=Qf.bind(e.proxy)),$watch:e=>Yv.bind(e)}),Ki=(e,t)=>e!==de&&!e.__isScriptSetup&&oe(e,t),xv={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ki(r,t))return o[t]=1,r[t];if(s!==de&&oe(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&oe(c,t))return o[t]=3,i[t];if(n!==de&&oe(n,t))return o[t]=4,n[t];$o&&(o[t]=0)}}const u=Nr[t];let f,d;if(u)return t==="$attrs"&&xe(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==de&&oe(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,oe(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ki(s,t)?(s[t]=n,!0):r!==de&&oe(r,t)?(r[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let l,c;return!!(n[a]||e!==de&&a[0]!=="$"&&oe(e,a)||Ki(t,a)||(l=i[0])&&oe(l,a)||oe(r,a)||oe(Nr,a)||oe(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function jl(e){return J(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $o=!0;function kv(e){const t=ld(e),n=e.proxy,r=e.ctx;$o=!1,t.beforeCreate&&Bl(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:b,beforeDestroy:_,beforeUnmount:E,destroyed:P,unmounted:R,render:N,renderTracked:k,renderTriggered:j,errorCaptured:H,serverPrefetch:ve,expose:Ve,inheritAttrs:tt,components:Ye,directives:Pe,filters:We}=t;if(c&&Ov(c,r,null),o)for(const re in o){const ee=o[re];Y(ee)&&(r[re]=ee.bind(n))}if(s){const re=s.call(n,n);ye(re)&&(e.data=lr(re))}if($o=!0,i)for(const re in i){const ee=i[re],Xe=Y(ee)?ee.bind(n,n):Y(ee.get)?ee.get.bind(n,n):St,dt=!Y(ee)&&Y(ee.set)?ee.set.bind(n):St,Ie=be({get:Xe,set:dt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:we=>Ie.value=we})}if(a)for(const re in a)ad(a[re],r,n,re);if(l){const re=Y(l)?l.call(n):l;Reflect.ownKeys(re).forEach(ee=>{Ts(ee,re[ee])})}u&&Bl(u,e,"c");function ae(re,ee){J(ee)?ee.forEach(Xe=>re(Xe.bind(n))):ee&&re(ee.bind(n))}if(ae(_v,f),ae(ts,d),ae(wv,h),ae(Ev,g),ae(yv,v),ae(vv,b),ae(Tv,H),ae(Av,k),ae(Iv,j),ae(Na,E),ae(od,R),ae(Sv,ve),J(Ve))if(Ve.length){const re=e.exposed||(e.exposed={});Ve.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:Xe=>n[ee]=Xe,enumerable:!0})})}else e.exposed||(e.exposed={});N&&e.render===St&&(e.render=N),tt!=null&&(e.inheritAttrs=tt),Ye&&(e.components=Ye),Pe&&(e.directives=Pe),ve&&rd(e)}function Ov(e,t,n=St){J(e)&&(e=Uo(e));for(const r in e){const s=e[r];let i;ye(s)?"default"in s?i=at(s.from||r,s.default,!0):i=at(s.from||r):i=at(s),Ne(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Bl(e,t,n){Tt(J(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ad(e,t,n,r){let s=r.includes(".")?wd(n,r):()=>n[r];if(Se(e)){const i=t[e];Y(i)&&Ft(s,i)}else if(Y(e))Ft(s,e.bind(n));else if(ye(e))if(J(e))e.forEach(i=>ad(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&Ft(s,i,e)}}function ld(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>Vs(l,c,o,!0)),Vs(l,t,o)),ye(t)&&i.set(t,l),l}function Vs(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Vs(e,i,n,!0),s&&s.forEach(o=>Vs(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Nv[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Nv={data:Hl,props:Vl,emits:Vl,methods:_r,computed:_r,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:_r,directives:_r,watch:Lv,provide:Hl,inject:Dv};function Hl(e,t){return t?e?function(){return De(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Dv(e,t){return _r(Uo(e),Uo(t))}function Uo(e){if(J(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function _r(e,t){return e?De(Object.create(null),e,t):t}function Vl(e,t){return e?J(e)&&J(t)?[...new Set([...e,...t])]:De(Object.create(null),jl(e),jl(t??{})):t}function Lv(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const r in t)n[r]=Le(e[r],t[r]);return n}function cd(){return{app:null,config:{isNativeTag:If,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mv=0;function Fv(e,t){return function(r,s=null){Y(r)||(r=De({},r)),s!=null&&!ye(s)&&(s=null);const i=cd(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Mv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vb,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...f)):Y(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||ge(r,s);return h.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(h,u,d),l=!0,c._container=u,u.__vue_app__=c,vi(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Tt(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){const f=Jn;Jn=c;try{return u()}finally{Jn=f}}};return c}}let Jn=null;function Ts(e,t){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[e]=t}}function at(e,t,n=!1){const r=fb();if(r||Jn){let s=Jn?Jn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}const ud={},fd=()=>Object.create(ud),dd=e=>Object.getPrototypeOf(e)===ud;function $v(e,t,n,r=!1){const s={},i=fd();e.propsDefaults=Object.create(null),hd(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:qf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Uv(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=ie(s),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(gi(e.emitsOptions,d))continue;const h=t[d];if(l)if(oe(i,d))h!==i[d]&&(i[d]=h,c=!0);else{const g=et(d);s[g]=jo(l,a,g,h,e,!1)}else h!==i[d]&&(i[d]=h,c=!0)}}}else{hd(e,t,s,i)&&(c=!0);let u;for(const f in a)(!t||!oe(t,f)&&((u=Dn(f))===f||!oe(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=jo(l,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!oe(t,f))&&(delete i[f],c=!0)}c&&kt(e.attrs,"set","")}function hd(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Tr(l))continue;const c=t[l];let u;s&&oe(s,u=et(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:gi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ie(n),c=a||de;for(let u=0;u<i.length;u++){const f=i[u];n[f]=jo(s,l,f,c[f],e,!oe(c,f))}}return o}function jo(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=ns(s);r=c[n]=l.call(null,t),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Dn(n))&&(r=!0))}return r}const jv=new WeakMap;function pd(e,t,n=!1){const r=n?jv:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!Y(e)){const u=f=>{l=!0;const[d,h]=pd(f,t,!0);De(o,d),h&&a.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return ye(e)&&r.set(e,Wn),Wn;if(J(i))for(let u=0;u<i.length;u++){const f=et(i[u]);Wl(f)&&(o[f]=de)}else if(i)for(const u in i){const f=et(u);if(Wl(f)){const d=i[u],h=o[f]=J(d)||Y(d)?{type:d}:De({},d),g=h.type;let v=!1,b=!0;if(J(g))for(let _=0;_<g.length;++_){const E=g[_],P=Y(E)&&E.name;if(P==="Boolean"){v=!0;break}else P==="String"&&(b=!1)}else v=Y(g)&&g.name==="Boolean";h[0]=v,h[1]=b,(v||oe(h,"default"))&&a.push(f)}}const c=[o,a];return ye(e)&&r.set(e,c),c}function Wl(e){return e[0]!=="$"&&!Tr(e)}const Da=e=>e==="_"||e==="_ctx"||e==="$stable",La=e=>J(e)?e.map(_t):[_t(e)],Bv=(e,t,n)=>{if(t._n)return t;const r=Rr((...s)=>La(t(...s)),n);return r._c=!1,r},md=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Da(s))continue;const i=e[s];if(Y(i))t[s]=Bv(s,i,r);else if(i!=null){const o=La(i);t[s]=()=>o}}},gd=(e,t)=>{const n=La(t);e.slots.default=()=>n},yd=(e,t,n)=>{for(const r in t)(n||!Da(r))&&(e[r]=t[r])},Hv=(e,t,n)=>{const r=e.slots=fd();if(e.vnode.shapeFlag&32){const s=t._;s?(yd(r,t,n),n&&Rf(r,"_",s,!0)):md(t,r)}else t&&gd(e,t)},Vv=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=de;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:yd(s,t,n):(i=!t.$stable,md(t,s)),o=t}else t&&(gd(e,t),o={default:1});if(i)for(const a in s)!Da(a)&&o[a]==null&&delete s[a]},Ke=rb;function Wv(e){return zv(e)}function zv(e,t){const n=di();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=St,insertStaticContent:g}=e,v=(p,m,y,I=null,C=null,S=null,M=void 0,L=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!pr(p,m)&&(I=A(p),we(p,C,S,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:x,ref:z,shapeFlag:$}=m;switch(x){case yi:b(p,m,y,I);break;case pn:_(p,m,y,I);break;case Gi:p==null&&E(m,y,I,M);break;case Ae:Ye(p,m,y,I,C,S,M,L,D);break;default:$&1?N(p,m,y,I,C,S,M,L,D):$&6?Pe(p,m,y,I,C,S,M,L,D):($&64||$&128)&&x.process(p,m,y,I,C,S,M,L,D,B)}z!=null&&C?xr(z,p&&p.ref,S,m||p,!m):z==null&&p&&p.ref!=null&&xr(p.ref,null,S,p,!0)},b=(p,m,y,I)=>{if(p==null)r(m.el=a(m.children),y,I);else{const C=m.el=p.el;m.children!==p.children&&c(C,m.children)}},_=(p,m,y,I)=>{p==null?r(m.el=l(m.children||""),y,I):m.el=p.el},E=(p,m,y,I)=>{[p.el,p.anchor]=g(p.children,m,y,I,p.el,p.anchor)},P=({el:p,anchor:m},y,I)=>{let C;for(;p&&p!==m;)C=d(p),r(p,y,I),p=C;r(m,y,I)},R=({el:p,anchor:m})=>{let y;for(;p&&p!==m;)y=d(p),s(p),p=y;s(m)},N=(p,m,y,I,C,S,M,L,D)=>{m.type==="svg"?M="svg":m.type==="math"&&(M="mathml"),p==null?k(m,y,I,C,S,M,L,D):ve(p,m,C,S,M,L,D)},k=(p,m,y,I,C,S,M,L)=>{let D,x;const{props:z,shapeFlag:$,transition:W,dirs:q}=p;if(D=p.el=o(p.type,S,z&&z.is,z),$&8?u(D,p.children):$&16&&H(p.children,D,null,I,C,qi(p,S),M,L),q&&_n(p,null,I,"created"),j(D,p,p.scopeId,M,I),z){for(const he in z)he!=="value"&&!Tr(he)&&i(D,he,null,z[he],S,I);"value"in z&&i(D,"value",null,z.value,S),(x=z.onVnodeBeforeMount)&&yt(x,I,p)}q&&_n(p,null,I,"beforeMount");const ne=Kv(C,W);ne&&W.beforeEnter(D),r(D,m,y),((x=z&&z.onVnodeMounted)||ne||q)&&Ke(()=>{x&&yt(x,I,p),ne&&W.enter(D),q&&_n(p,null,I,"mounted")},C)},j=(p,m,y,I,C)=>{if(y&&h(p,y),I)for(let S=0;S<I.length;S++)h(p,I[S]);if(C){let S=C.subTree;if(m===S||Sd(S.type)&&(S.ssContent===m||S.ssFallback===m)){const M=C.vnode;j(p,M,M.scopeId,M.slotScopeIds,C.parent)}}},H=(p,m,y,I,C,S,M,L,D=0)=>{for(let x=D;x<p.length;x++){const z=p[x]=L?Xt(p[x]):_t(p[x]);v(null,z,m,y,I,C,S,M,L)}},ve=(p,m,y,I,C,S,M)=>{const L=m.el=p.el;let{patchFlag:D,dynamicChildren:x,dirs:z}=m;D|=p.patchFlag&16;const $=p.props||de,W=m.props||de;let q;if(y&&wn(y,!1),(q=W.onVnodeBeforeUpdate)&&yt(q,y,m,p),z&&_n(m,p,y,"beforeUpdate"),y&&wn(y,!0),($.innerHTML&&W.innerHTML==null||$.textContent&&W.textContent==null)&&u(L,""),x?Ve(p.dynamicChildren,x,L,y,I,qi(m,C),S):M||ee(p,m,L,null,y,I,qi(m,C),S,!1),D>0){if(D&16)tt(L,$,W,y,C);else if(D&2&&$.class!==W.class&&i(L,"class",null,W.class,C),D&4&&i(L,"style",$.style,W.style,C),D&8){const ne=m.dynamicProps;for(let he=0;he<ne.length;he++){const le=ne[he],$e=$[le],Ue=W[le];(Ue!==$e||le==="value")&&i(L,le,$e,Ue,C,y)}}D&1&&p.children!==m.children&&u(L,m.children)}else!M&&x==null&&tt(L,$,W,y,C);((q=W.onVnodeUpdated)||z)&&Ke(()=>{q&&yt(q,y,m,p),z&&_n(m,p,y,"updated")},I)},Ve=(p,m,y,I,C,S,M)=>{for(let L=0;L<m.length;L++){const D=p[L],x=m[L],z=D.el&&(D.type===Ae||!pr(D,x)||D.shapeFlag&198)?f(D.el):y;v(D,x,z,null,I,C,S,M,!0)}},tt=(p,m,y,I,C)=>{if(m!==y){if(m!==de)for(const S in m)!Tr(S)&&!(S in y)&&i(p,S,m[S],null,C,I);for(const S in y){if(Tr(S))continue;const M=y[S],L=m[S];M!==L&&S!=="value"&&i(p,S,L,M,C,I)}"value"in y&&i(p,"value",m.value,y.value,C)}},Ye=(p,m,y,I,C,S,M,L,D)=>{const x=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:q}=m;q&&(L=L?L.concat(q):q),p==null?(r(x,y,I),r(z,y,I),H(m.children||[],y,z,C,S,M,L,D)):$>0&&$&64&&W&&p.dynamicChildren?(Ve(p.dynamicChildren,W,y,C,S,M,L),(m.key!=null||C&&m===C.subTree)&&vd(p,m,!0)):ee(p,m,y,z,C,S,M,L,D)},Pe=(p,m,y,I,C,S,M,L,D)=>{m.slotScopeIds=L,p==null?m.shapeFlag&512?C.ctx.activate(m,y,I,M,D):We(m,y,I,C,S,M,D):Ct(p,m,D)},We=(p,m,y,I,C,S,M)=>{const L=p.component=ub(p,I,C);if(sd(p)&&(L.ctx.renderer=B),db(L,!1,M),L.asyncDep){if(C&&C.registerDep(L,ae,M),!p.el){const D=L.subTree=ge(pn);_(null,D,m,y),p.placeholder=D.el}}else ae(L,p,m,y,C,S,M)},Ct=(p,m,y)=>{const I=m.component=p.component;if(tb(p,m,y))if(I.asyncDep&&!I.asyncResolved){re(I,m,y);return}else I.next=m,I.update();else m.el=p.el,I.vnode=m},ae=(p,m,y,I,C,S,M)=>{const L=()=>{if(p.isMounted){let{next:$,bu:W,u:q,parent:ne,vnode:he}=p;{const mt=bd(p);if(mt){$&&($.el=he.el,re(p,$,M)),mt.asyncDep.then(()=>{p.isUnmounted||L()});return}}let le=$,$e;wn(p,!1),$?($.el=he.el,re(p,$,M)):$=he,W&&As(W),($e=$.props&&$.props.onVnodeBeforeUpdate)&&yt($e,ne,$,he),wn(p,!0);const Ue=Kl(p),pt=p.subTree;p.subTree=Ue,v(pt,Ue,f(pt.el),A(pt),p,C,S),$.el=Ue.el,le===null&&nb(p,Ue.el),q&&Ke(q,C),($e=$.props&&$.props.onVnodeUpdated)&&Ke(()=>yt($e,ne,$,he),C)}else{let $;const{el:W,props:q}=m,{bm:ne,m:he,parent:le,root:$e,type:Ue}=p,pt=kr(m);wn(p,!1),ne&&As(ne),!pt&&($=q&&q.onVnodeBeforeMount)&&yt($,le,m),wn(p,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(Ue);const mt=p.subTree=Kl(p);v(null,mt,y,I,p,C,S),m.el=mt.el}if(he&&Ke(he,C),!pt&&($=q&&q.onVnodeMounted)){const mt=m;Ke(()=>yt($,le,mt),C)}(m.shapeFlag&256||le&&kr(le.vnode)&&le.vnode.shapeFlag&256)&&p.a&&Ke(p.a,C),p.isMounted=!0,m=y=I=null}};p.scope.on();const D=p.effect=new Nf(L);p.scope.off();const x=p.update=D.run.bind(D),z=p.job=D.runIfDirty.bind(D);z.i=p,z.id=p.uid,D.scheduler=()=>xa(z),wn(p,!0),x()},re=(p,m,y)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,Uv(p,m.props,I,y),Vv(p,m.children,y),Bt(),$l(p),Ht()},ee=(p,m,y,I,C,S,M,L,D=!1)=>{const x=p&&p.children,z=p?p.shapeFlag:0,$=m.children,{patchFlag:W,shapeFlag:q}=m;if(W>0){if(W&128){dt(x,$,y,I,C,S,M,L,D);return}else if(W&256){Xe(x,$,y,I,C,S,M,L,D);return}}q&8?(z&16&&Qe(x,C,S),$!==x&&u(y,$)):z&16?q&16?dt(x,$,y,I,C,S,M,L,D):Qe(x,C,S,!0):(z&8&&u(y,""),q&16&&H($,y,I,C,S,M,L,D))},Xe=(p,m,y,I,C,S,M,L,D)=>{p=p||Wn,m=m||Wn;const x=p.length,z=m.length,$=Math.min(x,z);let W;for(W=0;W<$;W++){const q=m[W]=D?Xt(m[W]):_t(m[W]);v(p[W],q,y,null,C,S,M,L,D)}x>z?Qe(p,C,S,!0,!1,$):H(m,y,I,C,S,M,L,D,$)},dt=(p,m,y,I,C,S,M,L,D)=>{let x=0;const z=m.length;let $=p.length-1,W=z-1;for(;x<=$&&x<=W;){const q=p[x],ne=m[x]=D?Xt(m[x]):_t(m[x]);if(pr(q,ne))v(q,ne,y,null,C,S,M,L,D);else break;x++}for(;x<=$&&x<=W;){const q=p[$],ne=m[W]=D?Xt(m[W]):_t(m[W]);if(pr(q,ne))v(q,ne,y,null,C,S,M,L,D);else break;$--,W--}if(x>$){if(x<=W){const q=W+1,ne=q<z?m[q].el:I;for(;x<=W;)v(null,m[x]=D?Xt(m[x]):_t(m[x]),y,ne,C,S,M,L,D),x++}}else if(x>W)for(;x<=$;)we(p[x],C,S,!0),x++;else{const q=x,ne=x,he=new Map;for(x=ne;x<=W;x++){const ze=m[x]=D?Xt(m[x]):_t(m[x]);ze.key!=null&&he.set(ze.key,x)}let le,$e=0;const Ue=W-ne+1;let pt=!1,mt=0;const dr=new Array(Ue);for(x=0;x<Ue;x++)dr[x]=0;for(x=q;x<=$;x++){const ze=p[x];if($e>=Ue){we(ze,C,S,!0);continue}let gt;if(ze.key!=null)gt=he.get(ze.key);else for(le=ne;le<=W;le++)if(dr[le-ne]===0&&pr(ze,m[le])){gt=le;break}gt===void 0?we(ze,C,S,!0):(dr[gt-ne]=x+1,gt>=mt?mt=gt:pt=!0,v(ze,m[gt],y,null,C,S,M,L,D),$e++)}const nl=pt?qv(dr):Wn;for(le=nl.length-1,x=Ue-1;x>=0;x--){const ze=ne+x,gt=m[ze],rl=m[ze+1],sl=ze+1<z?rl.el||rl.placeholder:I;dr[x]===0?v(null,gt,y,sl,C,S,M,L,D):pt&&(le<0||x!==nl[le]?Ie(gt,y,sl,2):le--)}}},Ie=(p,m,y,I,C=null)=>{const{el:S,type:M,transition:L,children:D,shapeFlag:x}=p;if(x&6){Ie(p.component.subTree,m,y,I);return}if(x&128){p.suspense.move(m,y,I);return}if(x&64){M.move(p,m,y,B);return}if(M===Ae){r(S,m,y);for(let $=0;$<D.length;$++)Ie(D[$],m,y,I);r(p.anchor,m,y);return}if(M===Gi){P(p,m,y);return}if(I!==2&&x&1&&L)if(I===0)L.beforeEnter(S),r(S,m,y),Ke(()=>L.enter(S),C);else{const{leave:$,delayLeave:W,afterLeave:q}=L,ne=()=>{p.ctx.isUnmounted?s(S):r(S,m,y)},he=()=>{S._isLeaving&&S[gv](!0),$(S,()=>{ne(),q&&q()})};W?W(S,ne,he):he()}else r(S,m,y)},we=(p,m,y,I=!1,C=!1)=>{const{type:S,props:M,ref:L,children:D,dynamicChildren:x,shapeFlag:z,patchFlag:$,dirs:W,cacheIndex:q}=p;if($===-2&&(C=!1),L!=null&&(Bt(),xr(L,null,y,p,!0),Ht()),q!=null&&(m.renderCache[q]=void 0),z&256){m.ctx.deactivate(p);return}const ne=z&1&&W,he=!kr(p);let le;if(he&&(le=M&&M.onVnodeBeforeUnmount)&&yt(le,m,p),z&6)bn(p.component,y,I);else{if(z&128){p.suspense.unmount(y,I);return}ne&&_n(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,y,B,I):x&&!x.hasOnce&&(S!==Ae||$>0&&$&64)?Qe(x,m,y,!1,!0):(S===Ae&&$&384||!C&&z&16)&&Qe(D,m,y),I&&ht(p)}(he&&(le=M&&M.onVnodeUnmounted)||ne)&&Ke(()=>{le&&yt(le,m,p),ne&&_n(p,null,m,"unmounted")},y)},ht=p=>{const{type:m,el:y,anchor:I,transition:C}=p;if(m===Ae){nt(y,I);return}if(m===Gi){R(p);return}const S=()=>{s(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:M,delayLeave:L}=C,D=()=>M(y,S);L?L(p.el,S,D):D()}else S()},nt=(p,m)=>{let y;for(;p!==m;)y=d(p),s(p),p=y;s(m)},bn=(p,m,y)=>{const{bum:I,scope:C,job:S,subTree:M,um:L,m:D,a:x}=p;zl(D),zl(x),I&&As(I),C.stop(),S&&(S.flags|=8,we(M,p,m,y)),L&&Ke(L,m),Ke(()=>{p.isUnmounted=!0},m)},Qe=(p,m,y,I=!1,C=!1,S=0)=>{for(let M=S;M<p.length;M++)we(p[M],m,y,I,C)},A=p=>{if(p.shapeFlag&6)return A(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const m=d(p.anchor||p.el),y=m&&m[pv];return y?d(y):m};let U=!1;const F=(p,m,y)=>{p==null?m._vnode&&we(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,y),m._vnode=p,U||(U=!0,$l(),ed(),U=!1)},B={p:v,um:we,m:Ie,r:ht,mt:We,mc:H,pc:ee,pbc:Ve,n:A,o:e};return{render:F,hydrate:void 0,createApp:Fv(F)}}function qi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Kv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vd(e,t,n=!1){const r=e.children,s=t.children;if(J(r)&&J(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Xt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&vd(o,a)),a.type===yi&&a.patchFlag!==-1&&(a.el=o.el),a.type===pn&&!a.el&&(a.el=o.el)}}function qv(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function bd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bd(t)}function zl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Gv=Symbol.for("v-scx"),Jv=()=>at(Gv);function Ft(e,t,n){return _d(e,t,n)}function _d(e,t,n=de){const{immediate:r,deep:s,flush:i,once:o}=n,a=De({},n),l=t&&r||!t&&i!=="post";let c;if(Wr){if(i==="sync"){const h=Jv();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=St,h.resume=St,h.pause=St,h}}const u=ke;a.call=(h,g,v)=>Tt(h,u,g,v);let f=!1;i==="post"?a.scheduler=h=>{Ke(h,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():xa(h)}),a.augmentJob=h=>{t&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=uv(e,t,a);return Wr&&(c?c.push(d):l&&d()),d}function Yv(e,t,n){const r=this.proxy,s=Se(e)?e.includes(".")?wd(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=ns(this),a=_d(s,i.bind(r),n);return o(),a}function wd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Xv=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${et(t)}Modifiers`]||e[`${Dn(t)}Modifiers`];function Qv(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||de;let s=n;const i=t.startsWith("update:"),o=i&&Xv(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>Se(u)?u.trim():u)),o.number&&(s=n.map(Oo)));let a,l=r[a=Bi(t)]||r[a=Bi(et(t))];!l&&i&&(l=r[a=Bi(Dn(t))]),l&&Tt(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Tt(c,e,6,s)}}function Ed(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Y(e)){const l=c=>{const u=Ed(c,t,!0);u&&(a=!0,De(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(ye(e)&&r.set(e,null),null):(J(i)?i.forEach(l=>o[l]=null):De(o,i),ye(e)&&r.set(e,o),o)}function gi(e,t){return!e||!li(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,Dn(t))||oe(e,t))}function Kl(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=e,b=Hs(e);let _,E;try{if(n.shapeFlag&4){const R=s||r,N=R;_=_t(c.call(N,R,u,f,h,d,g)),E=a}else{const R=t;_=_t(R.length>1?R(f,{attrs:a,slots:o,emit:l}):R(f,null)),E=t.props?a:Zv(a)}}catch(R){Dr.length=0,pi(R,e,1),_=ge(pn)}let P=_;if(E&&v!==!1){const R=Object.keys(E),{shapeFlag:N}=P;R.length&&N&7&&(i&&R.some(_a)&&(E=eb(E,i)),P=tr(P,E,!1,!0))}return n.dirs&&(P=tr(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&ka(P,n.transition),_=P,Hs(b),_}const Zv=e=>{let t;for(const n in e)(n==="class"||n==="style"||li(n))&&((t||(t={}))[n]=e[n]);return t},eb=(e,t)=>{const n={};for(const r in e)(!_a(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tb(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ql(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!gi(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ql(r,o,c):!0:!!o;return!1}function ql(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!gi(n,i))return!0}return!1}function nb({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Sd=e=>e.__isSuspense;function rb(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):hv(e)}const Ae=Symbol.for("v-fgt"),yi=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),Gi=Symbol.for("v-stc"),Dr=[];let Ge=null;function Z(e=!1){Dr.push(Ge=e?null:[])}function sb(){Dr.pop(),Ge=Dr[Dr.length-1]||null}let Vr=1;function Gl(e,t=!1){Vr+=e,e<0&&Ge&&t&&(Ge.hasOnce=!0)}function Id(e){return e.dynamicChildren=Vr>0?Ge||Wn:null,sb(),Vr>0&&Ge&&Ge.push(e),e}function te(e,t,n,r,s,i){return Id(T(e,t,n,r,s,i,!0))}function Ma(e,t,n,r,s){return Id(ge(e,t,n,r,s,!0))}function Ws(e){return e?e.__v_isVNode===!0:!1}function pr(e,t){return e.type===t.type&&e.key===t.key}const Ad=({key:e})=>e??null,Cs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Se(e)||Ne(e)||Y(e)?{i:qe,r:e,k:t,f:!!n}:e:null);function T(e,t=null,n=null,r=0,s=null,i=e===Ae?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ad(t),ref:t&&Cs(t),scopeId:nd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qe};return a?(Fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),Vr>0&&!o&&Ge&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ge.push(l),l}const ge=ib;function ib(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Pv)&&(e=pn),Ws(e)){const a=tr(e,t,!0);return n&&Fa(a,n),Vr>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(e)]=a:Ge.push(a)),a.patchFlag=-2,a}if(yb(e)&&(e=e.__vccOpts),t){t=ob(t);let{class:a,style:l}=t;a&&!Se(a)&&(t.class=dn(a)),ye(l)&&(Ra(l)&&!J(l)&&(l=De({},l)),t.style=wt(l))}const o=Se(e)?1:Sd(e)?128:mv(e)?64:ye(e)?4:Y(e)?2:0;return T(e,t,n,r,s,o,i,!0)}function ob(e){return e?Ra(e)||dd(e)?De({},e):e:null}function tr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=e,c=t?ab(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ad(c),ref:t&&t.ref?n&&i?J(i)?i.concat(Cs(t)):[i,Cs(t)]:Cs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tr(e.ssContent),ssFallback:e.ssFallback&&tr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&ka(u,l.clone(u)),u}function rn(e=" ",t=0){return ge(yi,null,e,t)}function Dt(e="",t=!1){return t?(Z(),Ma(pn,null,e)):ge(pn,null,e)}function _t(e){return e==null||typeof e=="boolean"?ge(pn):J(e)?ge(Ae,null,e.slice()):Ws(e)?Xt(e):ge(yi,null,String(e))}function Xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tr(e)}function Fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(J(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Fa(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!dd(t)?t._ctx=qe:s===3&&qe&&(qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:qe},n=32):(t=String(t),r&64?(n=16,t=[rn(t)]):n=8);e.children=t,e.shapeFlag|=n}function ab(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=dn([t.class,r.class]));else if(s==="style")t.style=wt([t.style,r.style]);else if(li(s)){const i=t[s],o=r[s];o&&i!==o&&!(J(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function yt(e,t,n,r=null){Tt(e,t,7,[n,r])}const lb=cd();let cb=0;function ub(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||lb,i={uid:cb++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pd(r,s),emitsOptions:Ed(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Qv.bind(null,i),e.ce&&e.ce(i),i}let ke=null;const fb=()=>ke||qe;let zs,Bo;{const e=di(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};zs=t("__VUE_INSTANCE_SETTERS__",n=>ke=n),Bo=t("__VUE_SSR_SETTERS__",n=>Wr=n)}const ns=e=>{const t=ke;return zs(e),e.scope.on(),()=>{e.scope.off(),zs(t)}},Jl=()=>{ke&&ke.scope.off(),zs(null)};function Td(e){return e.vnode.shapeFlag&4}let Wr=!1;function db(e,t=!1,n=!1){t&&Bo(t);const{props:r,children:s}=e.vnode,i=Td(e);$v(e,r,i,t),Hv(e,s,n||t);const o=i?hb(e,t):void 0;return t&&Bo(!1),o}function hb(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xv);const{setup:r}=n;if(r){Bt();const s=e.setupContext=r.length>1?mb(e):null,i=ns(e),o=es(r,e,0,[e.props,s]),a=Tf(o);if(Ht(),i(),(a||e.sp)&&!kr(e)&&rd(e),a){if(o.then(Jl,Jl),t)return o.then(l=>{Yl(e,l)}).catch(l=>{pi(l,e,0)});e.asyncDep=o}else Yl(e,o)}else Cd(e)}function Yl(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=Yf(t)),Cd(e)}function Cd(e,t,n){const r=e.type;e.render||(e.render=r.render||St);{const s=ns(e);Bt();try{kv(e)}finally{Ht(),s()}}}const pb={get(e,t){return xe(e,"get",""),e[t]}};function mb(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pb),slots:e.slots,emit:e.emit,expose:t}}function vi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Yf(rv(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nr)return Nr[n](e)},has(t,n){return n in t||n in Nr}})):e.proxy}function gb(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function yb(e){return Y(e)&&"__vccOpts"in e}const be=(e,t)=>lv(e,t,Wr);function $a(e,t,n){const r=arguments.length;return r===2?ye(t)&&!J(t)?Ws(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ws(n)&&(n=[n]),ge(e,t,n))}const vb="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ho;const Xl=typeof window<"u"&&window.trustedTypes;if(Xl)try{Ho=Xl.createPolicy("vue",{createHTML:e=>e})}catch{}const Pd=Ho?e=>Ho.createHTML(e):e=>e,bb="http://www.w3.org/2000/svg",_b="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,Ql=xt&&xt.createElement("template"),wb={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?xt.createElementNS(bb,e):t==="mathml"?xt.createElementNS(_b,e):n?xt.createElement(e,{is:n}):xt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>xt.createTextNode(e),createComment:e=>xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ql.innerHTML=Pd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Ql.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Eb=Symbol("_vtc");function Sb(e,t,n){const r=e[Eb];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ks=Symbol("_vod"),Rd=Symbol("_vsh"),Ib={name:"show",beforeMount(e,{value:t},{transition:n}){e[Ks]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):mr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),mr(e,!0),r.enter(e)):r.leave(e,()=>{mr(e,!1)}):mr(e,t))},beforeUnmount(e,{value:t}){mr(e,t)}};function mr(e,t){e.style.display=t?e[Ks]:"none",e[Rd]=!t}const Ab=Symbol(""),Tb=/(^|;)\s*display\s*:/;function Cb(e,t,n){const r=e.style,s=Se(n);let i=!1;if(n&&!s){if(t)if(Se(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ps(r,a,"")}else for(const o in t)n[o]==null&&Ps(r,o,"");for(const o in n)o==="display"&&(i=!0),Ps(r,o,n[o])}else if(s){if(t!==n){const o=r[Ab];o&&(n+=";"+o),r.cssText=n,i=Tb.test(n)}}else t&&e.removeAttribute("style");Ks in e&&(e[Ks]=i?r.display:"",e[Rd]&&(r.display="none"))}const Zl=/\s*!important$/;function Ps(e,t,n){if(J(n))n.forEach(r=>Ps(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Pb(e,t);Zl.test(n)?e.setProperty(Dn(r),n.replace(Zl,""),"important"):e[r]=n}}const ec=["Webkit","Moz","ms"],Ji={};function Pb(e,t){const n=Ji[t];if(n)return n;let r=et(t);if(r!=="filter"&&r in e)return Ji[t]=r;r=fi(r);for(let s=0;s<ec.length;s++){const i=ec[s]+r;if(i in e)return Ji[t]=i}return t}const tc="http://www.w3.org/1999/xlink";function nc(e,t,n,r,s,i=My(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(tc,t.slice(6,t.length)):e.setAttributeNS(tc,t,n):n==null||i&&!xf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":mn(n)?String(n):n)}function rc(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Pd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=xf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Un(e,t,n,r){e.addEventListener(t,n,r)}function Rb(e,t,n,r){e.removeEventListener(t,n,r)}const sc=Symbol("_vei");function xb(e,t,n,r,s=null){const i=e[sc]||(e[sc]={}),o=i[t];if(r&&o)o.value=r;else{const[a,l]=kb(t);if(r){const c=i[t]=Db(r,s);Un(e,a,c,l)}else o&&(Rb(e,a,o,l),i[t]=void 0)}}const ic=/(?:Once|Passive|Capture)$/;function kb(e){let t;if(ic.test(e)){t={};let r;for(;r=e.match(ic);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dn(e.slice(2)),t]}let Yi=0;const Ob=Promise.resolve(),Nb=()=>Yi||(Ob.then(()=>Yi=0),Yi=Date.now());function Db(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Tt(Lb(r,n.value),t,5,[r])};return n.value=e,n.attached=Nb(),n}function Lb(e,t){if(J(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const oc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mb=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Sb(e,r,o):t==="style"?Cb(e,n,r):li(t)?_a(t)||xb(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fb(e,t,r,o))?(rc(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&nc(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Se(r))?rc(e,et(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),nc(e,t,r,o))};function Fb(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&oc(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return oc(t)&&Se(n)?!1:t in e}const ac=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?n=>As(t,n):t};function $b(e){e.target.composing=!0}function lc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xi=Symbol("_assign"),bs={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Xi]=ac(s);const i=r||s.props&&s.props.type==="number";Un(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Oo(a)),e[Xi](a)}),n&&Un(e,"change",()=>{e.value=e.value.trim()}),t||(Un(e,"compositionstart",$b),Un(e,"compositionend",lc),Un(e,"change",lc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[Xi]=ac(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Oo(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===l)||(e.value=l))}},Ub=["ctrl","shift","alt","meta"],jb={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ub.some(n=>e[`${n}Key`]&&!t.includes(n))},on=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<t.length;o++){const a=jb[t[o]];if(a&&a(s,t))return}return e(s,...i)}))},Bb=De({patchProp:Mb},wb);let cc;function Hb(){return cc||(cc=Wv(Bb))}const Vb=((...e)=>{const t=Hb().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=zb(r);if(!s)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Wb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Wb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zb(e){return Se(e)?document.querySelector(e):e}function Re(e,t,n){return(t=Jb(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function uc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uc(Object(n),!0).forEach(function(r){Re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kb(e,t){if(e==null)return{};var n,r,s=qb(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function qb(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Gb(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Jb(e){var t=Gb(e,"string");return typeof t=="symbol"?t:t+""}function qs(e){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qs(e)}function Qi(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Re({},e,t):{}}function Yb(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Re(Re(Re(Re(Re(Re(Re(Re(Re(Re(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-rotate-by",e.rotateBy),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),Re(Re(Re(Re(t,"fa-flash",e.flash),"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse),"fa-width-auto",e.widthAuto));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}var Xb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xd={exports:{}};(function(e){(function(t){var n=function(_,E,P){if(!c(E)||f(E)||d(E)||h(E)||l(E))return E;var R,N=0,k=0;if(u(E))for(R=[],k=E.length;N<k;N++)R.push(n(_,E[N],P));else{R={};for(var j in E)Object.prototype.hasOwnProperty.call(E,j)&&(R[_(j,P)]=n(_,E[j],P))}return R},r=function(_,E){E=E||{};var P=E.separator||"_",R=E.split||/(?=[A-Z])/;return _.split(R).join(P)},s=function(_){return g(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(E,P){return P?P.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var E=s(_);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(_,E){return r(_,E).toLowerCase()},a=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return a.call(_)=="[object Array]"},f=function(_){return a.call(_)=="[object Date]"},d=function(_){return a.call(_)=="[object RegExp]"},h=function(_){return a.call(_)=="[object Boolean]"},g=function(_){return _=_-0,_===_},v=function(_,E){var P=E&&"process"in E?E.process:E;return typeof P!="function"?_:function(R,N){return P(R,_,N)}},b={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,E){return n(v(s,E),_)},decamelizeKeys:function(_,E){return n(v(o,E),_,E)},pascalizeKeys:function(_,E){return n(v(i,E),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=b:t.humps=b})(Xb)})(xd);var Qb=xd.exports,Zb=["class","style"];function e1(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),s=Qb.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[s]=i,t},{})}function t1(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function kd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return kd(l)}),s=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=t1(u);break;case"style":l.style=e1(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=Kb(n,Zb);return $a(e.tag,Nt(Nt(Nt({},t),{},{class:s.class,style:Nt(Nt({},s.style),o)},s.attrs),a),r)}var Od=!1;try{Od=!0}catch{}function n1(){if(!Od&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function fc(e){if(e&&qs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ko.icon)return ko.icon(e);if(e===null)return null;if(qs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var r1=Oa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,s=be(function(){return fc(t.icon)}),i=be(function(){return Qi("classes",Yb(t))}),o=be(function(){return Qi("transform",typeof t.transform=="string"?ko.transform(t.transform):t.transform)}),a=be(function(){return Qi("mask",fc(t.mask))}),l=be(function(){var u=Nt(Nt(Nt(Nt({},i.value),o.value),a.value),{},{symbol:t.symbol,maskId:t.maskId});return u.title=t.title,u.titleId=t.titleId,Ty(s.value,u)});Ft(l,function(u){if(!u)return n1("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=be(function(){return l.value?kd(l.value.abstract[0],{},r):null});return function(){return c.value}}});const s1=()=>{};var dc={};/**
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
 */const Nd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},i1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(d=64)),r.push(n[u],n[f],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Nd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new o1;const d=i<<2|a>>4;if(r.push(d),c!==64){const h=a<<4&240|c>>2;if(r.push(h),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class o1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a1=function(e){const t=Nd(e);return Dd.encodeByteArray(t,!0)},Ld=function(e){return a1(e).replace(/\./g,"")},Md=function(e){try{return Dd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function l1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const c1=()=>l1().__FIREBASE_DEFAULTS__,u1=()=>{if(typeof process>"u"||typeof dc>"u")return;const e=dc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Md(e[1]);return t&&JSON.parse(t)},Ua=()=>{try{return s1()||c1()||u1()||f1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},d1=e=>Ua()?.emulatorHosts?.[e],Fd=()=>Ua()?.config,$d=e=>Ua()?.[`_${e}`];/**
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
 */class h1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function bi(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function p1(e){return(await fetch(e,{credentials:"include"})).ok}const Lr={};function m1(){const e={prod:[],emulator:[]};for(const t of Object.keys(Lr))Lr[t]?e.emulator.push(t):e.prod.push(t);return e}function g1(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let hc=!1;function y1(e,t){if(typeof window>"u"||typeof document>"u"||!bi(window.location.host)||Lr[e]===t||Lr[e]||hc)return;Lr[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=m1().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,h){d.setAttribute("width","24"),d.setAttribute("id",h),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{hc=!0,o()},d}function u(d,h){d.setAttribute("id",h),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=g1(r),h=n("text"),g=document.getElementById(h)||document.createElement("span"),v=n("learnmore"),b=document.getElementById(v)||document.createElement("a"),_=n("preprendIcon"),E=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const P=d.element;a(P),u(b,v);const R=c();l(E,_),P.append(E,g,b,R),document.body.appendChild(P)}i?(g.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function b1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function w1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E1(){const e=Fe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S1(){try{return typeof indexedDB=="object"}catch{return!1}}function I1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}/**
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
 */const A1="FirebaseError";class gn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=A1,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?T1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gn(s,a,r)}}function T1(e,t){return e.replace(C1,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const C1=/\{\$([^}]+)}/g;function P1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function nr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(pc(i)&&pc(o)){if(!nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pc(e){return e!==null&&typeof e=="object"}/**
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
 */function ss(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function wr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Er(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function R1(e,t){const n=new x1(e,t);return n.subscribe.bind(n)}class x1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");k1(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Zi),s.error===void 0&&(s.error=Zi),s.complete===void 0&&(s.complete=Zi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Zi(){}/**
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
 */function qt(e){return e&&e._delegate?e._delegate:e}class rr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class O1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new h1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(D1(t))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Sn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Sn){return this.instances.has(t)}getOptions(t=Sn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:N1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Sn){return this.component?this.component.multipleInstances?t:Sn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N1(e){return e===Sn?void 0:e}function D1(e){return e.instantiationMode==="EAGER"}/**
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
 */class L1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new O1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(fe||(fe={}));const M1={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},F1=fe.INFO,$1={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},U1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=$1[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ud{constructor(t){this.name=t,this._logLevel=F1,this._logHandler=U1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in fe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?M1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...t),this._logHandler(this,fe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...t),this._logHandler(this,fe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...t),this._logHandler(this,fe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...t),this._logHandler(this,fe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...t),this._logHandler(this,fe.ERROR,...t)}}const j1=(e,t)=>t.some(n=>e instanceof n);let mc,gc;function B1(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H1(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jd=new WeakMap,Vo=new WeakMap,Bd=new WeakMap,eo=new WeakMap,ja=new WeakMap;function V1(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(an(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&jd.set(n,e)}).catch(()=>{}),ja.set(t,e),t}function W1(e){if(Vo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Vo.set(e,t)}let Wo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function z1(e){Wo=e(Wo)}function K1(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(to(this),t,...n);return Bd.set(r,t.sort?t.sort():[t]),an(r)}:H1().includes(e)?function(...t){return e.apply(to(this),t),an(jd.get(this))}:function(...t){return an(e.apply(to(this),t))}}function q1(e){return typeof e=="function"?K1(e):(e instanceof IDBTransaction&&W1(e),j1(e,B1())?new Proxy(e,Wo):e)}function an(e){if(e instanceof IDBRequest)return V1(e);if(eo.has(e))return eo.get(e);const t=q1(e);return t!==e&&(eo.set(e,t),ja.set(t,e)),t}const to=e=>ja.get(e);function G1(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=an(o);return r&&o.addEventListener("upgradeneeded",l=>{r(an(o.result),l.oldVersion,l.newVersion,an(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const J1=["get","getKey","getAll","getAllKeys","count"],Y1=["put","add","delete","clear"],no=new Map;function yc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(no.get(t))return no.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Y1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||J1.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return no.set(t,i),i}z1(e=>({...e,get:(t,n,r)=>yc(t,n)||e.get(t,n,r),has:(t,n)=>!!yc(t,n)||e.has(t,n)}));/**
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
 */class X1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Q1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Q1(e){return e.getComponent()?.type==="VERSION"}const zo="@firebase/app",vc="0.14.5";/**
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
 */const Vt=new Ud("@firebase/app"),Z1="@firebase/app-compat",e_="@firebase/analytics-compat",t_="@firebase/analytics",n_="@firebase/app-check-compat",r_="@firebase/app-check",s_="@firebase/auth",i_="@firebase/auth-compat",o_="@firebase/database",a_="@firebase/data-connect",l_="@firebase/database-compat",c_="@firebase/functions",u_="@firebase/functions-compat",f_="@firebase/installations",d_="@firebase/installations-compat",h_="@firebase/messaging",p_="@firebase/messaging-compat",m_="@firebase/performance",g_="@firebase/performance-compat",y_="@firebase/remote-config",v_="@firebase/remote-config-compat",b_="@firebase/storage",__="@firebase/storage-compat",w_="@firebase/firestore",E_="@firebase/ai",S_="@firebase/firestore-compat",I_="firebase",A_="12.5.0";/**
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
 */const Ko="[DEFAULT]",T_={[zo]:"fire-core",[Z1]:"fire-core-compat",[t_]:"fire-analytics",[e_]:"fire-analytics-compat",[r_]:"fire-app-check",[n_]:"fire-app-check-compat",[s_]:"fire-auth",[i_]:"fire-auth-compat",[o_]:"fire-rtdb",[a_]:"fire-data-connect",[l_]:"fire-rtdb-compat",[c_]:"fire-fn",[u_]:"fire-fn-compat",[f_]:"fire-iid",[d_]:"fire-iid-compat",[h_]:"fire-fcm",[p_]:"fire-fcm-compat",[m_]:"fire-perf",[g_]:"fire-perf-compat",[y_]:"fire-rc",[v_]:"fire-rc-compat",[b_]:"fire-gcs",[__]:"fire-gcs-compat",[w_]:"fire-fst",[S_]:"fire-fst-compat",[E_]:"fire-vertex","fire-js":"fire-js",[I_]:"fire-js-all"};/**
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
 */const Gs=new Map,C_=new Map,qo=new Map;function bc(e,t){try{e.container.addComponent(t)}catch(n){Vt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zr(e){const t=e.name;if(qo.has(t))return Vt.debug(`There were multiple attempts to register component ${t}.`),!1;qo.set(t,e);for(const n of Gs.values())bc(n,e);for(const n of C_.values())bc(n,e);return!0}function Hd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function rt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const P_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new rs("app","Firebase",P_);/**
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
 */class R_{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const is=A_;function Vd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Ko,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});if(n||(n=Fd()),!n)throw ln.create("no-options");const i=Gs.get(s);if(i){if(nr(n,i.options)&&nr(r,i.config))return i;throw ln.create("duplicate-app",{appName:s})}const o=new L1(s);for(const l of qo.values())o.addComponent(l);const a=new R_(n,r,o);return Gs.set(s,a),a}function x_(e=Ko){const t=Gs.get(e);if(!t&&e===Ko&&Fd())return Vd();if(!t)throw ln.create("no-app",{appName:e});return t}function Yn(e,t,n){let r=T_[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vt.warn(o.join(" "));return}zr(new rr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const k_="firebase-heartbeat-database",O_=1,Kr="firebase-heartbeat-store";let ro=null;function Wd(){return ro||(ro=G1(k_,O_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Kr)}catch(n){console.warn(n)}}}}).catch(e=>{throw ln.create("idb-open",{originalErrorMessage:e.message})})),ro}async function N_(e){try{const n=(await Wd()).transaction(Kr),r=await n.objectStore(Kr).get(zd(e));return await n.done,r}catch(t){if(t instanceof gn)Vt.warn(t.message);else{const n=ln.create("idb-get",{originalErrorMessage:t?.message});Vt.warn(n.message)}}}async function _c(e,t){try{const r=(await Wd()).transaction(Kr,"readwrite");await r.objectStore(Kr).put(t,zd(e)),await r.done}catch(n){if(n instanceof gn)Vt.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n?.message});Vt.warn(r.message)}}}function zd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const D_=1024,L_=30;class M_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>L_){const s=U_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Vt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wc(),{heartbeatsToSend:n,unsentEntries:r}=F_(this._heartbeatsCache.heartbeats),s=Ld(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Vt.warn(t),""}}}function wc(){return new Date().toISOString().substring(0,10)}function F_(e,t=D_){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ec(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ec(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S1()?I1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await N_(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return _c(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return _c(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ec(e){return Ld(JSON.stringify({version:2,heartbeats:e})).length}function U_(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function j_(e){zr(new rr("platform-logger",t=>new X1(t),"PRIVATE")),zr(new rr("heartbeat",t=>new M_(t),"PRIVATE")),Yn(zo,vc,e),Yn(zo,vc,"esm2020"),Yn("fire-js","")}j_("");function Kd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B_=Kd,qd=new rs("auth","Firebase",Kd());/**
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
 */const Js=new Ud("@firebase/auth");function H_(e,...t){Js.logLevel<=fe.WARN&&Js.warn(`Auth (${is}): ${e}`,...t)}function Rs(e,...t){Js.logLevel<=fe.ERROR&&Js.error(`Auth (${is}): ${e}`,...t)}/**
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
 */function ct(e,...t){throw Ba(e,...t)}function It(e,...t){return Ba(e,...t)}function Gd(e,t,n){const r={...B_(),[t]:n};return new rs("auth","Firebase",r).create(t,{appName:e.name})}function $t(e){return Gd(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ba(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return qd.create(e,...t)}function K(e,t,...n){if(!e)throw Ba(t,...n)}function Lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rs(t),new Error(t)}function Wt(e,t){e||Lt(t)}/**
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
 */function Go(){return typeof self<"u"&&self.location?.href||""}function V_(){return Sc()==="http:"||Sc()==="https:"}function Sc(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function W_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V_()||_1()||"connection"in navigator)?navigator.onLine:!0}function z_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class os{constructor(t,n){this.shortDelay=t,this.longDelay=n,Wt(n>t,"Short delay should be less than long delay!"),this.isMobile=v1()||w1()}get(){return W_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ha(e,t){Wt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Jd{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const K_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],G_=new os(3e4,6e4);function yn(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function vn(e,t,n,r,s={}){return Yd(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=ss({key:e.config.apiKey,...o}).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:l,...i};return b1()||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&bi(e.emulatorConfig.host)&&(c.credentials="include"),Jd.fetch()(await Xd(e,e.config.apiHost,n,a),c)})}async function Yd(e,t,n){e._canInitEmulator=!1;const r={...K_,...t};try{const s=new Y_(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _s(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _s(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw _s(e,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gd(e,u,c);ct(e,u)}}catch(s){if(s instanceof gn)throw s;ct(e,"network-request-failed",{message:String(s)})}}async function as(e,t,n,r,s={}){const i=await vn(e,t,n,r,s);return"mfaPendingCredential"in i&&ct(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xd(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?Ha(e.config,s):`${e.config.apiScheme}://${s}`;return q_.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function J_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Y_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),G_.get())})}}function _s(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=It(e,t,r);return s.customData._tokenResponse=n,s}function Ic(e){return e!==void 0&&e.enterprise!==void 0}class X_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return J_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Q_(e,t){return vn(e,"GET","/v2/recaptchaConfig",yn(e,t))}/**
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
 */async function Z_(e,t){return vn(e,"POST","/v1/accounts:delete",t)}async function Ys(e,t){return vn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Mr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ew(e,t=!1){const n=qt(e),r=await n.getIdToken(t),s=Va(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Mr(so(s.auth_time)),issuedAtTime:Mr(so(s.iat)),expirationTime:Mr(so(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function so(e){return Number(e)*1e3}function Va(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Md(n);return s?JSON.parse(s):(Rs("Failed to decode base64 JWT payload"),null)}catch(s){return Rs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ac(e){const t=Va(e);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof gn&&tw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function tw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class nw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jo{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xs(e){const t=e.auth,n=await e.getIdToken(),r=await qr(e,Ys(t,{idToken:n}));K(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?Qd(s.providerUserInfo):[],o=sw(e.providerData,i),a=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!o?.length,c=a?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Jo(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,u)}async function rw(e){const t=qt(e);await Xs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function sw(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Qd(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function iw(e,t){const n=await Yd(e,{},async()=>{const r=ss({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Xd(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return e.emulatorConfig&&bi(e.emulatorConfig.host)&&(l.credentials="include"),Jd.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ow(e,t){return vn(e,"POST","/v2/accounts:revokeToken",yn(e,t))}/**
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
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ac(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){K(t.length!==0,"internal-error");const n=Ac(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await iw(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xn;return r&&(K(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Gt(e,t){K(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class it{constructor({uid:t,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await qr(this,this.stsTokenManager.getToken(this.auth,t));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ew(this,t)}reload(){return rw(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new it({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject($t(this.auth));const t=await this.getIdToken();return await qr(this,Z_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:h,providerData:g,stsTokenManager:v}=n;K(f&&v,t,"internal-error");const b=Xn.fromJSON(this.name,v);K(typeof f=="string",t,"internal-error"),Gt(r,t.name),Gt(s,t.name),K(typeof d=="boolean",t,"internal-error"),K(typeof h=="boolean",t,"internal-error"),Gt(i,t.name),Gt(o,t.name),Gt(a,t.name),Gt(l,t.name),Gt(c,t.name),Gt(u,t.name);const _=new it({uid:f,auth:t,email:s,emailVerified:d,displayName:r,isAnonymous:h,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:b,createdAt:c,lastLoginAt:u});return g&&Array.isArray(g)&&(_.providerData=g.map(E=>({...E}))),l&&(_._redirectEventId=l),_}static async _fromIdTokenResponse(t,n,r=!1){const s=new Xn;s.updateFromServerResponse(n);const i=new it({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Xs(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Xn;a.updateFromIdToken(r);const l=new it({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,c),l}}/**
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
 */const Tc=new Map;function Mt(e){Wt(e instanceof Function,"Expected a class definition");let t=Tc.get(e);return t?(Wt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Tc.set(e,t),t)}/**
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
 */class Zd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Zd.type="NONE";const Cc=Zd;/**
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
 */function xs(e,t,n){return`firebase:${e}:${t}:${n}`}class Qn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xs(this.userKey,s.apiKey,i),this.fullPersistenceKey=xs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Ys(this.auth,{idToken:t}).catch(()=>{});return n?it._fromGetAccountInfoResponse(this.auth,n,t):null}return it._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Qn(Mt(Cc),t,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Mt(Cc);const o=xs(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let f;if(typeof u=="string"){const d=await Ys(t,{idToken:u}).catch(()=>{});if(!d)break;f=await it._fromGetAccountInfoResponse(t,d,u)}else f=it._fromJSON(t,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Qn(i,t,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Qn(i,t,r))}}/**
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
 */function Pc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(eh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ih(t))return"Blackberry";if(oh(t))return"Webos";if(th(t))return"Safari";if((t.includes("chrome/")||nh(t))&&!t.includes("edge/"))return"Chrome";if(sh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function eh(e=Fe()){return/firefox\//i.test(e)}function th(e=Fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nh(e=Fe()){return/crios\//i.test(e)}function rh(e=Fe()){return/iemobile/i.test(e)}function sh(e=Fe()){return/android/i.test(e)}function ih(e=Fe()){return/blackberry/i.test(e)}function oh(e=Fe()){return/webos/i.test(e)}function Wa(e=Fe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function aw(e=Fe()){return Wa(e)&&!!window.navigator?.standalone}function lw(){return E1()&&document.documentMode===10}function ah(e=Fe()){return Wa(e)||sh(e)||oh(e)||ih(e)||/windows phone/i.test(e)||rh(e)}/**
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
 */function lh(e,t=[]){let n;switch(e){case"Browser":n=Pc(Fe());break;case"Worker":n=`${Pc(Fe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
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
 */class cw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const l=t(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function uw(e,t={}){return vn(e,"GET","/v2/passwordPolicy",yn(e,t))}/**
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
 */const fw=6;class dw{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fw,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class hw{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rc(this),this.idTokenSubscription=new Rc(this),this.beforeStateQueue=new cw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Qn.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ys(this,{idToken:t}),r=await it._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(rt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(t);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Xs(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=z_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(rt(this.app))return Promise.reject($t(this));const n=t?qt(t):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return rt(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await uw(this),n=new dw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new rs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ow(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Mt(t)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=lh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&H_(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ln(e){return qt(e)}class Rc{constructor(t){this.auth=t,this.observer=null,this.addObserver=R1(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _i={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pw(e){_i=e}function ch(e){return _i.loadJS(e)}function mw(){return _i.recaptchaEnterpriseScript}function gw(){return _i.gapiScript}function yw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class vw{constructor(){this.enterprise=new bw}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class bw{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const _w="recaptcha-enterprise",uh="NO_RECAPTCHA";class ww{constructor(t){this.type=_w,this.auth=Ln(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Q_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new X_(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Ic(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:t}).then(c=>{o(c)}).catch(()=>{o(uh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Ic(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mw();l.length!==0&&(l+=a),ch(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function xc(e,t,n,r=!1,s=!1){const i=new ww(e);let o;if(s)o=uh;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yo(e,t,n,r,s){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await xc(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xc(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
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
 */function Ew(e,t){const n=Hd(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(nr(i,t??{}))return s;ct(s,"already-initialized")}return n.initialize({options:t})}function Sw(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Mt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Iw(e,t,n){const r=Ln(e);K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=fh(t),{host:o,port:a}=Aw(t),l=a===null?"":`:${a}`,c={url:`${i}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(nr(c,r.config.emulator)&&nr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,bi(o)?(p1(`${i}//${o}${l}`),y1("Auth",!0)):Tw()}function fh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Aw(e){const t=fh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:kc(o)}}}function kc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Tw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class za{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(t){return Lt("not implemented")}_linkToIdToken(t,n){return Lt("not implemented")}_getReauthenticationResolver(t){return Lt("not implemented")}}async function Cw(e,t){return vn(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Pw(e,t){return as(e,"POST","/v1/accounts:signInWithPassword",yn(e,t))}/**
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
 */async function Rw(e,t){return as(e,"POST","/v1/accounts:signInWithEmailLink",yn(e,t))}async function xw(e,t){return as(e,"POST","/v1/accounts:signInWithEmailLink",yn(e,t))}/**
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
 */class Gr extends za{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Gr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Gr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yo(t,n,"signInWithPassword",Pw);case"emailLink":return Rw(t,{email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yo(t,r,"signUpPassword",Cw);case"emailLink":return xw(t,{idToken:n,email:this._email,oobCode:this._password});default:ct(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Zn(e,t){return as(e,"POST","/v1/accounts:signInWithIdp",yn(e,t))}/**
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
 */const kw="http://localhost";class xn extends za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Zn(t,n)}buildRequest(){const t={requestUri:kw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ss(n)}return t}}/**
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
 */function Ow(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nw(e){const t=wr(Er(e)).link,n=t?wr(Er(t)).deep_link_id:null,r=wr(Er(e)).deep_link_id;return(r?wr(Er(r)).link:null)||r||n||t||e}class Ka{constructor(t){const n=wr(Er(t)),r=n.apiKey??null,s=n.oobCode??null,i=Ow(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=Nw(t);try{return new Ka(n)}catch{return null}}}/**
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
 */class cr{constructor(){this.providerId=cr.PROVIDER_ID}static credential(t,n){return Gr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ka.parseLink(n);return K(r,"argument-error"),Gr._fromEmailAndCode(t,r.code,r.tenantId)}}cr.PROVIDER_ID="password";cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ls extends dh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends ls{constructor(){super("facebook.com")}static credential(t){return xn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zt.credential(t.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class en extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class tn extends ls{constructor(){super("github.com")}static credential(t){return xn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends ls{constructor(){super("twitter.com")}static credential(t,n){return xn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */async function Dw(e,t){return as(e,"POST","/v1/accounts:signUp",yn(e,t))}/**
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
 */class kn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await it._fromIdTokenResponse(t,r,s),o=Oc(r);return new kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Oc(r);return new kn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Oc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Qs extends gn{constructor(t,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Qs(t,n,r,s)}}function hh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(e,i,t,r):i})}async function Lw(e,t,n=!1){const r=await qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kn._forOperation(e,"link",r)}/**
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
 */async function Mw(e,t,n=!1){const{auth:r}=e;if(rt(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const i=await qr(e,hh(r,s,t,e),n);K(i.idToken,r,"internal-error");const o=Va(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(e.uid===a,r,"user-mismatch"),kn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ct(r,"user-mismatch"),i}}/**
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
 */async function ph(e,t,n=!1){if(rt(e.app))return Promise.reject($t(e));const r="signIn",s=await hh(e,r,t),i=await kn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Fw(e,t){return ph(Ln(e),t)}/**
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
 */async function mh(e){const t=Ln(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function $w(e,t,n){if(rt(e.app))return Promise.reject($t(e));const r=Ln(e),o=await Yo(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mh(e),l}),a=await kn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Uw(e,t,n){return rt(e.app)?Promise.reject($t(e)):Fw(qt(e),cr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mh(e),r})}function jw(e,t,n,r){return qt(e).onIdTokenChanged(t,n,r)}function Bw(e,t,n){return qt(e).beforeAuthStateChanged(t,n)}function Hw(e,t,n,r){return qt(e).onAuthStateChanged(t,n,r)}function Vw(e){return qt(e).signOut()}const Zs="__sak";/**
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
 */class gh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zs,"1"),this.storage.removeItem(Zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ww=1e3,zw=10;class yh extends gh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ah(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lw()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,zw):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yh.type="LOCAL";const Kw=yh;/**
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
 */class vh extends gh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}vh.type="SESSION";const bh=vh;/**
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
 */function qw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new wi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await qw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wi.receivers=[];/**
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
 */function qa(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Gw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=qa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function Jw(e){At().location.href=e}/**
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
 */function _h(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function Yw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xw(){return navigator?.serviceWorker?.controller||null}function Qw(){return _h()?self:null}/**
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
 */const wh="firebaseLocalStorageDb",Zw=1,ei="firebaseLocalStorage",Eh="fbase_key";class cs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ei(e,t){return e.transaction([ei],t?"readwrite":"readonly").objectStore(ei)}function e0(){const e=indexedDB.deleteDatabase(wh);return new cs(e).toPromise()}function Xo(){const e=indexedDB.open(wh,Zw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ei,{keyPath:Eh})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ei)?t(r):(r.close(),await e0(),t(await Xo()))})})}async function Nc(e,t,n){const r=Ei(e,!0).put({[Eh]:t,value:n});return new cs(r).toPromise()}async function t0(e,t){const n=Ei(e,!1).get(t),r=await new cs(n).toPromise();return r===void 0?null:r.value}function Dc(e,t){const n=Ei(e,!0).delete(t);return new cs(n).toPromise()}const n0=800,r0=3;class Sh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>r0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _h()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wi._getInstance(Qw()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Yw(),!this.activeServiceWorker)return;this.sender=new Gw(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Xw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xo();return await Nc(t,Zs,"1"),await Dc(t,Zs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>t0(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ei(s,!1).getAll();return new cs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sh.type="LOCAL";const s0=Sh;new os(3e4,6e4);/**
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
 */function i0(e,t){return t?Mt(t):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ga extends za{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function o0(e){return ph(e.auth,new Ga(e),e.bypassAuthState)}function a0(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Mw(n,new Ga(e),e.bypassAuthState)}async function l0(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Lw(n,new Ga(e),e.bypassAuthState)}/**
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
 */class Ih{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return o0;case"linkViaPopup":case"linkViaRedirect":return l0;case"reauthViaPopup":case"reauthViaRedirect":return a0;default:ct(this.auth,"internal-error")}}resolve(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const c0=new os(2e3,1e4);class Hn extends Ih{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const t=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,c0.get())};t()}}Hn.currentPopupAction=null;/**
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
 */const u0="pendingRedirect",ks=new Map;class f0 extends Ih{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ks.get(this.auth._key());if(!t){try{const r=await d0(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ks.set(this.auth._key(),t)}return this.bypassAuthState||ks.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function d0(e,t){const n=m0(t),r=p0(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function h0(e,t){ks.set(e._key(),t)}function p0(e){return Mt(e._redirectPersistence)}function m0(e){return xs(u0,e.config.apiKey,e.name)}async function g0(e,t,n=!1){if(rt(e.app))return Promise.reject($t(e));const r=Ln(e),s=i0(r,t),o=await new f0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const y0=600*1e3;class v0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!b0(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!Ah(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";n.onError(It(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=y0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lc(t))}saveEventToCache(t){this.cachedEventUids.add(Lc(t)),this.lastProcessedEventTime=Date.now()}}function Lc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ah({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function b0(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ah(e);default:return!1}}/**
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
 */async function _0(e,t={}){return vn(e,"GET","/v1/projects",t)}/**
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
 */const w0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E0=/^https?/;async function S0(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _0(e);for(const n of t)try{if(I0(n))return}catch{}ct(e,"unauthorized-domain")}function I0(e){const t=Go(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!E0.test(n))return!1;if(w0.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const A0=new os(3e4,6e4);function Mc(){const e=At().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function T0(e){return new Promise((t,n)=>{function r(){Mc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mc(),n(It(e,"network-request-failed"))},timeout:A0.get()})}if(At().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(At().gapi?.load)r();else{const s=yw("iframefcb");return At()[s]=()=>{gapi.load?r():n(It(e,"network-request-failed"))},ch(`${gw()}?onload=${s}`).catch(i=>n(i))}}).catch(t=>{throw Os=null,t})}let Os=null;function C0(e){return Os=Os||T0(e),Os}/**
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
 */const P0=new os(5e3,15e3),R0="__/auth/iframe",x0="emulator/auth/iframe",k0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N0(e){const t=e.config;K(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ha(t,x0):`https://${e.config.authDomain}/${R0}`,r={apiKey:t.apiKey,appName:e.name,v:is},s=O0.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ss(r).slice(1)}`}async function D0(e){const t=await C0(e),n=At().gapi;return K(n,e,"internal-error"),t.open({where:document.body,url:N0(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=It(e,"network-request-failed"),a=At().setTimeout(()=>{i(o)},P0.get());function l(){At().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const L0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M0=500,F0=600,$0="_blank",U0="http://localhost";class Fc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j0(e,t,n,r=M0,s=F0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...L0,width:r.toString(),height:s.toString(),top:i,left:o},c=Fe().toLowerCase();n&&(a=nh(c)?$0:n),eh(c)&&(t=t||U0,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[h,g])=>`${d}${h}=${g},`,"");if(aw(c)&&a!=="_self")return B0(t||"",a),new Fc(null);const f=window.open(t||"",a,u);K(f,e,"popup-blocked");try{f.focus()}catch{}return new Fc(f)}function B0(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const H0="__/auth/handler",V0="emulator/auth/handler",W0=encodeURIComponent("fac");async function $c(e,t,n,r,s,i){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:is,eventId:s};if(t instanceof dh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",P1(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof ls){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${W0}=${encodeURIComponent(l)}`:"";return`${z0(e)}?${ss(a).slice(1)}${c}`}function z0({config:e}){return e.emulator?Ha(e,V0):`https://${e.authDomain}/${H0}`}/**
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
 */const io="webStorageSupport";class K0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bh,this._completeRedirectFn=g0,this._overrideRedirectResult=h0}async _openPopup(t,n,r,s){Wt(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await $c(t,n,r,Go(),s);return j0(t,i,qa())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await $c(t,n,r,Go(),s);return Jw(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await D0(t),r=new v0(t);return n.register("authEvent",s=>(K(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(io,{type:io},s=>{const i=s?.[0]?.[io];i!==void 0&&n(!!i),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=S0(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ah()||th()||Wa()}}const q0=K0;var Uc="@firebase/auth",jc="1.11.1";/**
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
 */class G0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function J0(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Y0(e){zr(new rr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lh(e)},c=new hw(r,s,i,l);return Sw(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),zr(new rr("auth-internal",t=>{const n=Ln(t.getProvider("auth").getImmediate());return(r=>new G0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(Uc,jc,J0(e)),Yn(Uc,jc,"esm2020")}/**
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
 */const X0=300,Q0=$d("authIdTokenMaxAge")||X0;let Bc=null;const Z0=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q0)return;const s=n?.token;Bc!==s&&(Bc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eE(e=x_()){const t=Hd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ew(e,{popupRedirectResolver:q0,persistence:[s0,Kw,bh]}),r=$d("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Z0(i.toString());Bw(n,o,()=>o(n.currentUser)),jw(n,a=>o(a))}}const s=d1("auth");return s&&Iw(n,`http://${s}`),n}function tE(){return document.getElementsByTagName("head")?.[0]??document}pw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=It("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",tE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Y0("Browser");var nE="firebase",rE="12.5.0";/**
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
 */Yn(nE,rE,"app");const sE={apiKey:"AIzaSyC1oAOa3phMNn4wmqvs_ErlrVm48trNJfc",authDomain:"pokedex-app-19e45.firebaseapp.com",projectId:"pokedex-app-19e45",storageBucket:"pokedex-app-19e45.firebasestorage.app",messagingSenderId:"488370507222",appId:"1:488370507222:web:ecd02c90dbfd36a722e877",measurementId:"G-V3HKJKCYSL"},iE=Vd(sE),Si=eE(iE),ti=Ee(null),On=Ee(null);Hw(Si,e=>{e?ti.value={uid:e.uid,email:e.email}:ti.value=null});async function oE({email:e,password:t}){On.value=null;try{await $w(Si,e,t)}catch(n){throw On.value=n.message,console.error("Firebase registration error:",n.message),n}}async function aE({email:e,password:t}){On.value=null;try{await Uw(Si,e,t)}catch(n){throw On.value=n.message,console.error("Firebase login error:",n.message),n}}async function lE(){On.value=null;try{await Vw(Si)}catch(e){throw On.value=e.message,console.error("Firebase logout error:",e.message),e}}const cE=be(()=>!!ti.value);function Ii(){return{user:ti,isAutenticated:cE,login:aE,logout:lE,register:oE,authError:On}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const jn=typeof document<"u";function Th(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function uE(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Th(e.default)}const se=Object.assign;function oo(e,t){const n={};for(const r in t){const s=t[r];n[r]=ut(s)?s.map(e):e(s)}return n}const Fr=()=>{},ut=Array.isArray,Ch=/#/g,fE=/&/g,dE=/\//g,hE=/=/g,pE=/\?/g,Ph=/\+/g,mE=/%5B/g,gE=/%5D/g,Rh=/%5E/g,yE=/%60/g,xh=/%7B/g,vE=/%7C/g,kh=/%7D/g,bE=/%20/g;function Ja(e){return encodeURI(""+e).replace(vE,"|").replace(mE,"[").replace(gE,"]")}function _E(e){return Ja(e).replace(xh,"{").replace(kh,"}").replace(Rh,"^")}function Qo(e){return Ja(e).replace(Ph,"%2B").replace(bE,"+").replace(Ch,"%23").replace(fE,"%26").replace(yE,"`").replace(xh,"{").replace(kh,"}").replace(Rh,"^")}function wE(e){return Qo(e).replace(hE,"%3D")}function EE(e){return Ja(e).replace(Ch,"%23").replace(pE,"%3F")}function SE(e){return e==null?"":EE(e).replace(dE,"%2F")}function Jr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const IE=/\/$/,AE=e=>e.replace(IE,"");function ao(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=RE(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Jr(o)}}function TE(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function CE(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&sr(t.matched[r],n.matched[s])&&Oh(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function sr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Oh(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!PE(e[n],t[n]))return!1;return!0}function PE(e,t){return ut(e)?Vc(e,t):ut(t)?Vc(t,e):e===t}function Vc(e,t){return ut(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function RE(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Yr;(function(e){e.pop="pop",e.push="push"})(Yr||(Yr={}));var $r;(function(e){e.back="back",e.forward="forward",e.unknown=""})($r||($r={}));function xE(e){if(!e)if(jn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),AE(e)}const kE=/^[^#]+#/;function OE(e,t){return e.replace(kE,"#")+t}function NE(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ai=()=>({left:window.scrollX,top:window.scrollY});function DE(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=NE(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Wc(e,t){return(history.state?history.state.position-t:-1)+e}const Zo=new Map;function LE(e,t){Zo.set(e,t)}function ME(e){const t=Zo.get(e);return Zo.delete(e),t}let FE=()=>location.protocol+"//"+location.host;function Nh(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Hc(l,"")}return Hc(n,e)+r+s}function $E(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const h=Nh(e,location),g=n.value,v=t.value;let b=0;if(d){if(n.value=h,t.value=d,o&&o===g){o=null;return}b=v?d.position-v.position:0}else r(h);s.forEach(_=>{_(n.value,g,{delta:b,type:Yr.pop,direction:b?b>0?$r.forward:$r.back:$r.unknown})})};function l(){o=n.value}function c(d){s.push(d);const h=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(se({},d.state,{scroll:Ai()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function zc(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ai():null}}function UE(e){const{history:t,location:n}=window,r={value:Nh(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:FE()+e+l;try{t[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=se({},t.state,zc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=se({},s.value,t.state,{forward:l,scroll:Ai()});i(u.current,u,!0);const f=se({},zc(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function jE(e){e=xE(e);const t=UE(e),n=$E(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=se({location:"",base:e,go:r,createHref:OE.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function BE(e){return typeof e=="string"||e&&typeof e=="object"}function Dh(e){return typeof e=="string"||typeof e=="symbol"}const Lh=Symbol("");var Kc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kc||(Kc={}));function ir(e,t){return se(new Error,{type:e,[Lh]:!0},t)}function Rt(e,t){return e instanceof Error&&Lh in e&&(t==null||!!(e.type&t))}const qc="[^/]+?",HE={sensitive:!1,strict:!1,start:!0,end:!0},VE=/[.+*?^${}()[\]/\\]/g;function WE(e,t){const n=se({},HE,t),r=[];let s=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(VE,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:v,optional:b,regexp:_}=d;i.push({name:g,repeatable:v,optional:b});const E=_||qc;if(E!==qc){h+=10;try{new RegExp(`(${E})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+R.message)}}let P=v?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(P=b&&c.length<2?`(?:/${P})`:"/"+P),b&&(P+="?"),s+=P,h+=20,b&&(h+=-8),v&&(h+=-20),E===".*"&&(h+=-50)}u.push(h)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=i[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:b}=h,_=g in c?c[g]:"";if(ut(_)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=ut(_)?_.join("/"):_;if(!E)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function zE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Mh(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=zE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Gc(r))return 1;if(Gc(s))return-1}return s.length-r.length}function Gc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const KE={type:0,value:""},qE=/[a-zA-Z0-9_]/;function GE(e){if(!e)return[[]];if(e==="/")return[[KE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:qE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function JE(e,t,n){const r=WE(GE(e.path),n),s=se(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function YE(e,t){const n=[],r=new Map;t=Qc({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,h){const g=!h,v=Yc(f);v.aliasOf=h&&h.record;const b=Qc(t,f),_=[v];if("alias"in f){const R=typeof f.alias=="string"?[f.alias]:f.alias;for(const N of R)_.push(Yc(se({},v,{components:h?h.record.components:v.components,path:N,aliasOf:h?h.record:v})))}let E,P;for(const R of _){const{path:N}=R;if(d&&N[0]!=="/"){const k=d.record.path,j=k[k.length-1]==="/"?"":"/";R.path=d.record.path+(N&&j+N)}if(E=JE(R,d,b),h?h.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),g&&f.name&&!Xc(E)&&o(f.name)),Fh(E)&&l(E),v.children){const k=v.children;for(let j=0;j<k.length;j++)i(k[j],E,h&&h.children[j])}h=h||E}return P?()=>{o(P)}:Fr}function o(f){if(Dh(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=ZE(f,n);n.splice(d,0,f),f.record.name&&!Xc(f)&&r.set(f.record.name,f)}function c(f,d){let h,g={},v,b;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw ir(1,{location:f});b=h.record.name,g=se(Jc(d.params,h.keys.filter(P=>!P.optional).concat(h.parent?h.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),f.params&&Jc(f.params,h.keys.map(P=>P.name))),v=h.stringify(g)}else if(f.path!=null)v=f.path,h=n.find(P=>P.re.test(v)),h&&(g=h.parse(v),b=h.record.name);else{if(h=d.name?r.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw ir(1,{location:f,currentLocation:d});b=h.record.name,g=se({},d.params,f.params),v=h.stringify(g)}const _=[];let E=h;for(;E;)_.unshift(E.record),E=E.parent;return{name:b,path:v,params:g,matched:_,meta:QE(_)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Jc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Yc(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:XE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function XE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Xc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function QE(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Qc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ZE(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Mh(e,t[i])<0?r=i:n=i+1}const s=eS(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function eS(e){let t=e;for(;t=t.parent;)if(Fh(t)&&Mh(e,t)===0)return t}function Fh({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function tS(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ph," "),o=i.indexOf("="),a=Jr(o<0?i:i.slice(0,o)),l=o<0?null:Jr(i.slice(o+1));if(a in t){let c=t[a];ut(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Zc(e){let t="";for(let n in e){const r=e[n];if(n=wE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ut(r)?r.map(i=>i&&Qo(i)):[r&&Qo(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function nS(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const rS=Symbol(""),eu=Symbol(""),Ti=Symbol(""),Ya=Symbol(""),ea=Symbol("");function gr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Qt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ir(4,{from:n,to:t})):d instanceof Error?l(d):BE(d)?l(ir(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,c));let f=Promise.resolve(u);e.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function lo(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Th(l)){const u=(l.__vccOpts||l)[t];u&&i.push(Qt(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=uE(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Qt(h,n,r,o,a,s)()}))}}return i}function tu(e){const t=at(Ti),n=at(Ya),r=be(()=>{const l=G(e.to);return t.resolve(l)}),s=be(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(sr.bind(null,u));if(d>-1)return d;const h=nu(l[c-2]);return c>1&&nu(u)===h&&f[f.length-1].path!==h?f.findIndex(sr.bind(null,l[c-2])):d}),i=be(()=>s.value>-1&&lS(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&Oh(n.params,r.value.params));function a(l={}){if(aS(l)){const c=t[G(e.replace)?"replace":"push"](G(e.to)).catch(Fr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function sS(e){return e.length===1?e[0]:e}const iS=Oa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:tu,setup(e,{slots:t}){const n=lr(tu(e)),{options:r}=at(Ti),s=be(()=>({[ru(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ru(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&sS(t.default(n));return e.custom?i:$a("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oS=iS;function aS(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function lS(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ut(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function nu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ru=(e,t,n)=>e??t??n,cS=Oa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=at(ea),s=be(()=>e.route||r.value),i=at(eu,0),o=be(()=>{let c=G(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=be(()=>s.value.matched[o.value]);Ts(eu,be(()=>o.value+1)),Ts(rS,a),Ts(ea,s);const l=Ee();return Ft(()=>[l.value,a.value,e.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!sr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return su(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,b=$a(d,se({},g,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return su(n.default,{Component:b,route:c})||b}}});function su(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const uS=cS;function fS(e){const t=YE(e.routes,e),n=e.parseQuery||tS,r=e.stringifyQuery||Zc,s=e.history,i=gr(),o=gr(),a=gr(),l=sv(Jt);let c=Jt;jn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oo.bind(null,A=>""+A),f=oo.bind(null,SE),d=oo.bind(null,Jr);function h(A,U){let F,B;return Dh(A)?(F=t.getRecordMatcher(A),B=U):B=A,t.addRoute(B,F)}function g(A){const U=t.getRecordMatcher(A);U&&t.removeRoute(U)}function v(){return t.getRoutes().map(A=>A.record)}function b(A){return!!t.getRecordMatcher(A)}function _(A,U){if(U=se({},U||l.value),typeof A=="string"){const y=ao(n,A,U.path),I=t.resolve({path:y.path},U),C=s.createHref(y.fullPath);return se(y,I,{params:d(I.params),hash:Jr(y.hash),redirectedFrom:void 0,href:C})}let F;if(A.path!=null)F=se({},A,{path:ao(n,A.path,U.path).path});else{const y=se({},A.params);for(const I in y)y[I]==null&&delete y[I];F=se({},A,{params:f(y)}),U.params=f(U.params)}const B=t.resolve(F,U),ue=A.hash||"";B.params=u(d(B.params));const p=TE(r,se({},A,{hash:_E(ue),path:B.path})),m=s.createHref(p);return se({fullPath:p,hash:ue,query:r===Zc?nS(A.query):A.query||{}},B,{redirectedFrom:void 0,href:m})}function E(A){return typeof A=="string"?ao(n,A,l.value.path):se({},A)}function P(A,U){if(c!==A)return ir(8,{from:U,to:A})}function R(A){return j(A)}function N(A){return R(se(E(A),{replace:!0}))}function k(A){const U=A.matched[A.matched.length-1];if(U&&U.redirect){const{redirect:F}=U;let B=typeof F=="function"?F(A):F;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=E(B):{path:B},B.params={}),se({query:A.query,hash:A.hash,params:B.path!=null?{}:A.params},B)}}function j(A,U){const F=c=_(A),B=l.value,ue=A.state,p=A.force,m=A.replace===!0,y=k(F);if(y)return j(se(E(y),{state:typeof y=="object"?se({},ue,y.state):ue,force:p,replace:m}),U||F);const I=F;I.redirectedFrom=U;let C;return!p&&CE(r,B,F)&&(C=ir(16,{to:I,from:B}),Ie(B,B,!0,!1)),(C?Promise.resolve(C):Ve(I,B)).catch(S=>Rt(S)?Rt(S,2)?S:dt(S):ee(S,I,B)).then(S=>{if(S){if(Rt(S,2))return j(se({replace:m},E(S.to),{state:typeof S.to=="object"?se({},ue,S.to.state):ue,force:p}),U||I)}else S=Ye(I,B,!0,m,ue);return tt(I,B,S),S})}function H(A,U){const F=P(A,U);return F?Promise.reject(F):Promise.resolve()}function ve(A){const U=nt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(A):A()}function Ve(A,U){let F;const[B,ue,p]=dS(A,U);F=lo(B.reverse(),"beforeRouteLeave",A,U);for(const y of B)y.leaveGuards.forEach(I=>{F.push(Qt(I,A,U))});const m=H.bind(null,A,U);return F.push(m),Qe(F).then(()=>{F=[];for(const y of i.list())F.push(Qt(y,A,U));return F.push(m),Qe(F)}).then(()=>{F=lo(ue,"beforeRouteUpdate",A,U);for(const y of ue)y.updateGuards.forEach(I=>{F.push(Qt(I,A,U))});return F.push(m),Qe(F)}).then(()=>{F=[];for(const y of p)if(y.beforeEnter)if(ut(y.beforeEnter))for(const I of y.beforeEnter)F.push(Qt(I,A,U));else F.push(Qt(y.beforeEnter,A,U));return F.push(m),Qe(F)}).then(()=>(A.matched.forEach(y=>y.enterCallbacks={}),F=lo(p,"beforeRouteEnter",A,U,ve),F.push(m),Qe(F))).then(()=>{F=[];for(const y of o.list())F.push(Qt(y,A,U));return F.push(m),Qe(F)}).catch(y=>Rt(y,8)?y:Promise.reject(y))}function tt(A,U,F){a.list().forEach(B=>ve(()=>B(A,U,F)))}function Ye(A,U,F,B,ue){const p=P(A,U);if(p)return p;const m=U===Jt,y=jn?history.state:{};F&&(B||m?s.replace(A.fullPath,se({scroll:m&&y&&y.scroll},ue)):s.push(A.fullPath,ue)),l.value=A,Ie(A,U,F,m),dt()}let Pe;function We(){Pe||(Pe=s.listen((A,U,F)=>{if(!bn.listening)return;const B=_(A),ue=k(B);if(ue){j(se(ue,{replace:!0,force:!0}),B).catch(Fr);return}c=B;const p=l.value;jn&&LE(Wc(p.fullPath,F.delta),Ai()),Ve(B,p).catch(m=>Rt(m,12)?m:Rt(m,2)?(j(se(E(m.to),{force:!0}),B).then(y=>{Rt(y,20)&&!F.delta&&F.type===Yr.pop&&s.go(-1,!1)}).catch(Fr),Promise.reject()):(F.delta&&s.go(-F.delta,!1),ee(m,B,p))).then(m=>{m=m||Ye(B,p,!1),m&&(F.delta&&!Rt(m,8)?s.go(-F.delta,!1):F.type===Yr.pop&&Rt(m,20)&&s.go(-1,!1)),tt(B,p,m)}).catch(Fr)}))}let Ct=gr(),ae=gr(),re;function ee(A,U,F){dt(A);const B=ae.list();return B.length?B.forEach(ue=>ue(A,U,F)):console.error(A),Promise.reject(A)}function Xe(){return re&&l.value!==Jt?Promise.resolve():new Promise((A,U)=>{Ct.add([A,U])})}function dt(A){return re||(re=!A,We(),Ct.list().forEach(([U,F])=>A?F(A):U()),Ct.reset()),A}function Ie(A,U,F,B){const{scrollBehavior:ue}=e;if(!jn||!ue)return Promise.resolve();const p=!F&&ME(Wc(A.fullPath,0))||(B||!F)&&history.state&&history.state.scroll||null;return Qf().then(()=>ue(A,U,p)).then(m=>m&&DE(m)).catch(m=>ee(m,A,U))}const we=A=>s.go(A);let ht;const nt=new Set,bn={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:v,resolve:_,options:e,push:R,replace:N,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Xe,install(A){const U=this;A.component("RouterLink",oS),A.component("RouterView",uS),A.config.globalProperties.$router=U,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>G(l)}),jn&&!ht&&l.value===Jt&&(ht=!0,R(s.location).catch(ue=>{}));const F={};for(const ue in Jt)Object.defineProperty(F,ue,{get:()=>l.value[ue],enumerable:!0});A.provide(Ti,U),A.provide(Ya,qf(F)),A.provide(ea,l);const B=A.unmount;nt.add(A),A.unmount=function(){nt.delete(A),nt.size<1&&(c=Jt,Pe&&Pe(),Pe=null,l.value=Jt,ht=!1,re=!1),B()}}};function Qe(A){return A.reduce((U,F)=>U.then(()=>ve(F)),Promise.resolve())}return bn}function dS(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(c=>sr(c,a))?r.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>sr(c,l))||s.push(l))}return[n,r,s]}function Ci(){return at(Ti)}function hS(e){return at(Ya)}const pS={class:"text-center custom-section__header d-flex justify-content-between mx-5"},mS={class:"custom-navbar"},gS={class:"navbar-greeting"},yS={__name:"NavBar",setup(e){const t=Ci(),{logout:n,isAutenticated:r,user:s}=Ii();function i(){n(),t.push("/")}return(o,a)=>{const l=Gn("RouterLink"),c=Gn("font-awesome-icon"),u=Gn("RouterView");return Z(),te(Ae,null,[T("header",pS,[a[4]||(a[4]=T("h1",null,"Pokédex 📒",-1)),T("nav",mS,[ge(l,{to:"/"},{default:Rr(()=>[...a[0]||(a[0]=[rn("Home",-1)])]),_:1}),G(r)?(Z(),te(Ae,{key:1},[ge(l,{to:"/favorites"},{default:Rr(()=>[...a[2]||(a[2]=[rn("Favoritos",-1)])]),_:1}),T("span",gS," Hola, "+ce(G(s).name),1),T("button",{class:"btn custom-btn__logout",onClick:i},[a[3]||(a[3]=rn(" Salir ",-1)),ge(c,{icon:["far","circle-right"]})])],64)):(Z(),Ma(l,{key:0,to:"/login"},{default:Rr(()=>[...a[1]||(a[1]=[rn("Login",-1)])]),_:1}))])]),ge(u)],64)}}},vS={__name:"App",setup(e){return(t,n)=>(Z(),te(Ae,null,[ge(yS),n[0]||(n[0]=T("footer",{class:"custom-footer text-center"},"🐸",-1))],64))}},Xa=Ee(.1),bS=Ee("");function $h(){const{user:e}=Ii(),t="fav:pokemon",n=Ee([]),r=be(()=>{const l=e?.value;return l?.email?`favorites:${l.email}`:t});function s(){try{const l=localStorage.getItem(r.value),c=l?JSON.parse(l):[];n.value=Array.from(new Set(c.map(u=>Number(u)).filter(u=>!Number.isNaN(u))))}catch{n.value=[]}}function i(l){localStorage.setItem(r.value,JSON.stringify(l))}function o(l){return n.value.includes(Number(l))}function a(l){const c=Number(l),u=new Set(n.value);u.has(c)?u.delete(c):u.add(c),n.value=[...u],i(n.value)}return ts(()=>{s(),window.addEventListener("storage",l=>{l.key===r.value&&s()})}),Ft(r,()=>s()),{favIds:n,isFav:o,toggleFavLocal:a}}function Uh(e,t){return function(){return e.apply(t,arguments)}}const{toString:_S}=Object.prototype,{getPrototypeOf:Qa}=Object,{iterator:Pi,toStringTag:jh}=Symbol,Ri=(e=>t=>{const n=_S.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ft=e=>(e=e.toLowerCase(),t=>Ri(t)===e),xi=e=>t=>typeof t===e,{isArray:ur}=Array,or=xi("undefined");function us(e){return e!==null&&!or(e)&&e.constructor!==null&&!or(e.constructor)&&Be(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Bh=ft("ArrayBuffer");function wS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Bh(e.buffer),t}const ES=xi("string"),Be=xi("function"),Hh=xi("number"),fs=e=>e!==null&&typeof e=="object",SS=e=>e===!0||e===!1,Ns=e=>{if(Ri(e)!=="object")return!1;const t=Qa(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(jh in e)&&!(Pi in e)},IS=e=>{if(!fs(e)||us(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},AS=ft("Date"),TS=ft("File"),CS=ft("Blob"),PS=ft("FileList"),RS=e=>fs(e)&&Be(e.pipe),xS=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Be(e.append)&&((t=Ri(e))==="formdata"||t==="object"&&Be(e.toString)&&e.toString()==="[object FormData]"))},kS=ft("URLSearchParams"),[OS,NS,DS,LS]=["ReadableStream","Request","Response","Headers"].map(ft),MS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ds(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),ur(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(us(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function Vh(e,t){if(us(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const An=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Wh=e=>!or(e)&&e!==An;function ta(){const{caseless:e,skipUndefined:t}=Wh(this)&&this||{},n={},r=(s,i)=>{const o=e&&Vh(n,i)||i;Ns(n[o])&&Ns(s)?n[o]=ta(n[o],s):Ns(s)?n[o]=ta({},s):ur(s)?n[o]=s.slice():(!t||!or(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&ds(arguments[s],r);return n}const FS=(e,t,n,{allOwnKeys:r}={})=>(ds(t,(s,i)=>{n&&Be(s)?e[i]=Uh(s,n):e[i]=s},{allOwnKeys:r}),e),$S=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),US=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},jS=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Qa(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},BS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},HS=e=>{if(!e)return null;if(ur(e))return e;let t=e.length;if(!Hh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},VS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Qa(Uint8Array)),WS=(e,t)=>{const r=(e&&e[Pi]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},zS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},KS=ft("HTMLFormElement"),qS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),iu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),GS=ft("RegExp"),zh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ds(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},JS=e=>{zh(e,(t,n)=>{if(Be(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Be(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},YS=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return ur(e)?r(e):r(String(e).split(t)),n},XS=()=>{},QS=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ZS(e){return!!(e&&Be(e.append)&&e[jh]==="FormData"&&e[Pi])}const eI=e=>{const t=new Array(10),n=(r,s)=>{if(fs(r)){if(t.indexOf(r)>=0)return;if(us(r))return r;if(!("toJSON"in r)){t[s]=r;const i=ur(r)?[]:{};return ds(r,(o,a)=>{const l=n(o,s+1);!or(l)&&(i[a]=l)}),t[s]=void 0,i}}return r};return n(e,0)},tI=ft("AsyncFunction"),nI=e=>e&&(fs(e)||Be(e))&&Be(e.then)&&Be(e.catch),Kh=((e,t)=>e?setImmediate:t?((n,r)=>(An.addEventListener("message",({source:s,data:i})=>{s===An&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),An.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Be(An.postMessage)),rI=typeof queueMicrotask<"u"?queueMicrotask.bind(An):typeof process<"u"&&process.nextTick||Kh,sI=e=>e!=null&&Be(e[Pi]),w={isArray:ur,isArrayBuffer:Bh,isBuffer:us,isFormData:xS,isArrayBufferView:wS,isString:ES,isNumber:Hh,isBoolean:SS,isObject:fs,isPlainObject:Ns,isEmptyObject:IS,isReadableStream:OS,isRequest:NS,isResponse:DS,isHeaders:LS,isUndefined:or,isDate:AS,isFile:TS,isBlob:CS,isRegExp:GS,isFunction:Be,isStream:RS,isURLSearchParams:kS,isTypedArray:VS,isFileList:PS,forEach:ds,merge:ta,extend:FS,trim:MS,stripBOM:$S,inherits:US,toFlatObject:jS,kindOf:Ri,kindOfTest:ft,endsWith:BS,toArray:HS,forEachEntry:WS,matchAll:zS,isHTMLForm:KS,hasOwnProperty:iu,hasOwnProp:iu,reduceDescriptors:zh,freezeMethods:JS,toObjectSet:YS,toCamelCase:qS,noop:XS,toFiniteNumber:QS,findKey:Vh,global:An,isContextDefined:Wh,isSpecCompliantForm:ZS,toJSONObject:eI,isAsyncFn:tI,isThenable:nI,setImmediate:Kh,asap:rI,isIterable:sI};function X(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}w.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.status}}});const qh=X.prototype,Gh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Gh[e]={value:e}});Object.defineProperties(X,Gh);Object.defineProperty(qh,"isAxiosError",{value:!0});X.from=(e,t,n,r,s,i)=>{const o=Object.create(qh);w.toFlatObject(e,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const a=e&&e.message?e.message:"Error",l=t==null&&e?e.code:t;return X.call(o,a,l,n,r,s),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",i&&Object.assign(o,i),o};const iI=null;function na(e){return w.isPlainObject(e)||w.isArray(e)}function Jh(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function ou(e,t,n){return e?e.concat(t).map(function(s,i){return s=Jh(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function oI(e){return w.isArray(e)&&!e.some(na)}const aI=w.toFlatObject(w,{},null,function(t){return/^is[A-Z]/.test(t)});function ki(e,t,n){if(!w.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!w.isUndefined(b[v])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(t);if(!w.isFunction(s))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(w.isBoolean(g))return g.toString();if(!l&&w.isBlob(g))throw new X("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,b){let _=g;if(g&&!b&&typeof g=="object"){if(w.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&oI(g)||(w.isFileList(g)||w.endsWith(v,"[]"))&&(_=w.toArray(g)))return v=Jh(v),_.forEach(function(P,R){!(w.isUndefined(P)||P===null)&&t.append(o===!0?ou([v],R,i):o===null?v:v+"[]",c(P))}),!1}return na(g)?!0:(t.append(ou(b,v,i),c(g)),!1)}const f=[],d=Object.assign(aI,{defaultVisitor:u,convertValue:c,isVisitable:na});function h(g,v){if(!w.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),w.forEach(g,function(_,E){(!(w.isUndefined(_)||_===null)&&s.call(t,_,w.isString(E)?E.trim():E,v,d))===!0&&h(_,v?v.concat(E):[E])}),f.pop()}}if(!w.isObject(e))throw new TypeError("data must be an object");return h(e),t}function au(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Za(e,t){this._pairs=[],e&&ki(e,this,t)}const Yh=Za.prototype;Yh.append=function(t,n){this._pairs.push([t,n])};Yh.toString=function(t){const n=t?function(r){return t.call(this,r,au)}:au;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function lI(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Xh(e,t,n){if(!t)return e;const r=n&&n.encode||lI;w.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=w.isURLSearchParams(t)?t.toString():new Za(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class lu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Qh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cI=typeof URLSearchParams<"u"?URLSearchParams:Za,uI=typeof FormData<"u"?FormData:null,fI=typeof Blob<"u"?Blob:null,dI={isBrowser:!0,classes:{URLSearchParams:cI,FormData:uI,Blob:fI},protocols:["http","https","file","blob","url","data"]},el=typeof window<"u"&&typeof document<"u",ra=typeof navigator=="object"&&navigator||void 0,hI=el&&(!ra||["ReactNative","NativeScript","NS"].indexOf(ra.product)<0),pI=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mI=el&&window.location.href||"http://localhost",gI=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:el,hasStandardBrowserEnv:hI,hasStandardBrowserWebWorkerEnv:pI,navigator:ra,origin:mI},Symbol.toStringTag,{value:"Module"})),Oe={...gI,...dI};function yI(e,t){return ki(e,new Oe.classes.URLSearchParams,{visitor:function(n,r,s,i){return Oe.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function vI(e){return w.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bI(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Zh(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&w.isArray(s)?s.length:o,l?(w.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!w.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&w.isArray(s[o])&&(s[o]=bI(s[o])),!a)}if(w.isFormData(e)&&w.isFunction(e.entries)){const n={};return w.forEachEntry(e,(r,s)=>{t(vI(r),s,n,0)}),n}return null}function _I(e,t,n){if(w.isString(e))try{return(t||JSON.parse)(e),w.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const hs={transitional:Qh,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=w.isObject(t);if(i&&w.isHTMLForm(t)&&(t=new FormData(t)),w.isFormData(t))return s?JSON.stringify(Zh(t)):t;if(w.isArrayBuffer(t)||w.isBuffer(t)||w.isStream(t)||w.isFile(t)||w.isBlob(t)||w.isReadableStream(t))return t;if(w.isArrayBufferView(t))return t.buffer;if(w.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yI(t,this.formSerializer).toString();if((a=w.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ki(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),_I(t)):t}],transformResponse:[function(t){const n=this.transitional||hs.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(w.isResponse(t)||w.isReadableStream(t))return t;if(t&&w.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?X.from(a,X.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Oe.classes.FormData,Blob:Oe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};w.forEach(["delete","get","head","post","put","patch"],e=>{hs.headers[e]={}});const wI=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),EI=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&wI[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},cu=Symbol("internals");function yr(e){return e&&String(e).trim().toLowerCase()}function Ds(e){return e===!1||e==null?e:w.isArray(e)?e.map(Ds):String(e)}function SI(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const II=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function co(e,t,n,r,s){if(w.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!w.isString(t)){if(w.isString(r))return t.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(t)}}function AI(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function TI(e,t){const n=w.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}let He=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,l,c){const u=yr(l);if(!u)throw new Error("header name must be a non-empty string");const f=w.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Ds(a))}const o=(a,l)=>w.forEach(a,(c,u)=>i(c,u,l));if(w.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(w.isString(t)&&(t=t.trim())&&!II(t))o(EI(t),n);else if(w.isObject(t)&&w.isIterable(t)){let a={},l,c;for(const u of t){if(!w.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?w.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=yr(t),t){const r=w.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return SI(s);if(w.isFunction(n))return n.call(this,s,r);if(w.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=yr(t),t){const r=w.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||co(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=yr(o),o){const a=w.findKey(r,o);a&&(!n||co(r,r[a],a,n))&&(delete r[a],s=!0)}}return w.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||co(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return w.forEach(this,(s,i)=>{const o=w.findKey(r,i);if(o){n[o]=Ds(s),delete n[i];return}const a=t?AI(i):String(i).trim();a!==i&&delete n[i],n[a]=Ds(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return w.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[cu]=this[cu]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=yr(o);r[a]||(TI(s,o),r[a]=!0)}return w.isArray(t)?t.forEach(i):i(t),this}};He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.reduceDescriptors(He.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});w.freezeMethods(He);function uo(e,t){const n=this||hs,r=t||n,s=He.from(r.headers);let i=r.data;return w.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function ep(e){return!!(e&&e.__CANCEL__)}function fr(e,t,n){X.call(this,e??"canceled",X.ERR_CANCELED,t,n),this.name="CanceledError"}w.inherits(fr,X,{__CANCEL__:!0});function tp(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function CI(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function PI(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[i];o||(o=c),n[s]=l,r[s]=c;let f=i,d=0;for(;f!==s;)d+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function RI(e,t){let n=0,r=1e3/t,s,i;const o=(c,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=r?o(c,u):(s=c,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const ni=(e,t,n=3)=>{let r=0;const s=PI(50,250);return RI(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-r,c=s(l),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},uu=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},fu=e=>(...t)=>w.asap(()=>e(...t)),xI=Oe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Oe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Oe.origin),Oe.navigator&&/(msie|trident)/i.test(Oe.navigator.userAgent)):()=>!0,kI=Oe.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];w.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),w.isString(r)&&o.push("path="+r),w.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function OI(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function NI(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function np(e,t,n){let r=!OI(t);return e&&(r||n==!1)?NI(e,t):t}const du=e=>e instanceof He?{...e}:e;function Nn(e,t){t=t||{};const n={};function r(c,u,f,d){return w.isPlainObject(c)&&w.isPlainObject(u)?w.merge.call({caseless:d},c,u):w.isPlainObject(u)?w.merge({},u):w.isArray(u)?u.slice():u}function s(c,u,f,d){if(w.isUndefined(u)){if(!w.isUndefined(c))return r(void 0,c,f,d)}else return r(c,u,f,d)}function i(c,u){if(!w.isUndefined(u))return r(void 0,u)}function o(c,u){if(w.isUndefined(u)){if(!w.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function a(c,u,f){if(f in t)return r(c,u);if(f in e)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>s(du(c),du(u),f,!0)};return w.forEach(Object.keys({...e,...t}),function(u){const f=l[u]||s,d=f(e[u],t[u],u);w.isUndefined(d)&&f!==a||(n[u]=d)}),n}const rp=e=>{const t=Nn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=t;if(t.headers=o=He.from(o),t.url=Xh(np(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),w.isFormData(n)){if(Oe.hasStandardBrowserEnv||Oe.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(w.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&o.set(u,f)})}}if(Oe.hasStandardBrowserEnv&&(r&&w.isFunction(r)&&(r=r(t)),r||r!==!1&&xI(t.url))){const l=s&&i&&kI.read(i);l&&o.set(s,l)}return t},DI=typeof XMLHttpRequest<"u",LI=DI&&function(e){return new Promise(function(n,r){const s=rp(e);let i=s.data;const o=He.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,h,g;function v(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function _(){if(!b)return;const P=He.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),N={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:P,config:e,request:b};tp(function(j){n(j),v()},function(j){r(j),v()},N),b=null}"onloadend"in b?b.onloadend=_:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(_)},b.onabort=function(){b&&(r(new X("Request aborted",X.ECONNABORTED,e,b)),b=null)},b.onerror=function(R){const N=R&&R.message?R.message:"Network Error",k=new X(N,X.ERR_NETWORK,e,b);k.event=R||null,r(k),b=null},b.ontimeout=function(){let R=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const N=s.transitional||Qh;s.timeoutErrorMessage&&(R=s.timeoutErrorMessage),r(new X(R,N.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&w.forEach(o.toJSON(),function(R,N){b.setRequestHeader(N,R)}),w.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),a&&a!=="json"&&(b.responseType=s.responseType),c&&([d,g]=ni(c,!0),b.addEventListener("progress",d)),l&&b.upload&&([f,h]=ni(l),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=P=>{b&&(r(!P||P.type?new fr(null,e,b):P),b.abort(),b=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const E=CI(s.url);if(E&&Oe.protocols.indexOf(E)===-1){r(new X("Unsupported protocol "+E+":",X.ERR_BAD_REQUEST,e));return}b.send(i||null)})},MI=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;r.abort(u instanceof X?u:new fr(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new X(`timeout ${t} of ms exceeded`,X.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>w.asap(a),l}},FI=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},$I=async function*(e,t){for await(const n of UI(e))yield*FI(n,t)},UI=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},hu=(e,t,n,r)=>{const s=$I(e,t);let i=0,o,a=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=i+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},pu=64*1024,{isFunction:ws}=w,jI=(({Request:e,Response:t})=>({Request:e,Response:t}))(w.global),{ReadableStream:mu,TextEncoder:gu}=w.global,yu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},BI=e=>{e=w.merge.call({skipUndefined:!0},jI,e);const{fetch:t,Request:n,Response:r}=e,s=t?ws(t):typeof fetch=="function",i=ws(n),o=ws(r);if(!s)return!1;const a=s&&ws(mu),l=s&&(typeof gu=="function"?(g=>v=>g.encode(v))(new gu):async g=>new Uint8Array(await new n(g).arrayBuffer())),c=i&&a&&yu(()=>{let g=!1;const v=new n(Oe.origin,{body:new mu,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!v}),u=o&&a&&yu(()=>w.isReadableStream(new r("").body)),f={stream:u&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!f[g]&&(f[g]=(v,b)=>{let _=v&&v[g];if(_)return _.call(v);throw new X(`Response type '${g}' is not supported`,X.ERR_NOT_SUPPORT,b)})});const d=async g=>{if(g==null)return 0;if(w.isBlob(g))return g.size;if(w.isSpecCompliantForm(g))return(await new n(Oe.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(w.isArrayBufferView(g)||w.isArrayBuffer(g))return g.byteLength;if(w.isURLSearchParams(g)&&(g=g+""),w.isString(g))return(await l(g)).byteLength},h=async(g,v)=>{const b=w.toFiniteNumber(g.getContentLength());return b??d(v)};return async g=>{let{url:v,method:b,data:_,signal:E,cancelToken:P,timeout:R,onDownloadProgress:N,onUploadProgress:k,responseType:j,headers:H,withCredentials:ve="same-origin",fetchOptions:Ve}=rp(g),tt=t||fetch;j=j?(j+"").toLowerCase():"text";let Ye=MI([E,P&&P.toAbortSignal()],R),Pe=null;const We=Ye&&Ye.unsubscribe&&(()=>{Ye.unsubscribe()});let Ct;try{if(k&&c&&b!=="get"&&b!=="head"&&(Ct=await h(H,_))!==0){let Ie=new n(v,{method:"POST",body:_,duplex:"half"}),we;if(w.isFormData(_)&&(we=Ie.headers.get("content-type"))&&H.setContentType(we),Ie.body){const[ht,nt]=uu(Ct,ni(fu(k)));_=hu(Ie.body,pu,ht,nt)}}w.isString(ve)||(ve=ve?"include":"omit");const ae=i&&"credentials"in n.prototype,re={...Ve,signal:Ye,method:b.toUpperCase(),headers:H.normalize().toJSON(),body:_,duplex:"half",credentials:ae?ve:void 0};Pe=i&&new n(v,re);let ee=await(i?tt(Pe,Ve):tt(v,re));const Xe=u&&(j==="stream"||j==="response");if(u&&(N||Xe&&We)){const Ie={};["status","statusText","headers"].forEach(bn=>{Ie[bn]=ee[bn]});const we=w.toFiniteNumber(ee.headers.get("content-length")),[ht,nt]=N&&uu(we,ni(fu(N),!0))||[];ee=new r(hu(ee.body,pu,ht,()=>{nt&&nt(),We&&We()}),Ie)}j=j||"text";let dt=await f[w.findKey(f,j)||"text"](ee,g);return!Xe&&We&&We(),await new Promise((Ie,we)=>{tp(Ie,we,{data:dt,headers:He.from(ee.headers),status:ee.status,statusText:ee.statusText,config:g,request:Pe})})}catch(ae){throw We&&We(),ae&&ae.name==="TypeError"&&/Load failed|fetch/i.test(ae.message)?Object.assign(new X("Network Error",X.ERR_NETWORK,g,Pe),{cause:ae.cause||ae}):X.from(ae,ae&&ae.code,g,Pe)}}},HI=new Map,sp=e=>{let t=e?e.env:{};const{fetch:n,Request:r,Response:s}=t,i=[r,s,n];let o=i.length,a=o,l,c,u=HI;for(;a--;)l=i[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:BI(t)),u=c;return c};sp();const sa={http:iI,xhr:LI,fetch:{get:sp}};w.forEach(sa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const vu=e=>`- ${e}`,VI=e=>w.isFunction(e)||e===null||e===!1,ip={getAdapter:(e,t)=>{e=w.isArray(e)?e:[e];const{length:n}=e;let r,s;const i={};for(let o=0;o<n;o++){r=e[o];let a;if(s=r,!VI(r)&&(s=sa[(a=String(r)).toLowerCase()],s===void 0))throw new X(`Unknown adapter '${a}'`);if(s&&(w.isFunction(s)||(s=s.get(t))))break;i[a||"#"+o]=s}if(!s){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(vu).join(`
`):" "+vu(o[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s},adapters:sa};function fo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new fr(null,e)}function bu(e){return fo(e),e.headers=He.from(e.headers),e.data=uo.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ip.getAdapter(e.adapter||hs.adapter,e)(e).then(function(r){return fo(e),r.data=uo.call(e,e.transformResponse,r),r.headers=He.from(r.headers),r},function(r){return ep(r)||(fo(e),r&&r.response&&(r.response.data=uo.call(e,e.transformResponse,r.response),r.response.headers=He.from(r.response.headers))),Promise.reject(r)})}const op="1.12.2",Oi={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Oi[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _u={};Oi.transitional=function(t,n,r){function s(i,o){return"[Axios v"+op+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new X(s(o," has been removed"+(n?" in "+n:"")),X.ERR_DEPRECATED);return n&&!_u[o]&&(_u[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};Oi.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function WI(e,t,n){if(typeof e!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],l=a===void 0||o(a,i,e);if(l!==!0)throw new X("option "+i+" must be "+l,X.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new X("Unknown option "+i,X.ERR_BAD_OPTION)}}const Ls={assertOptions:WI,validators:Oi},vt=Ls.validators;let Cn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new lu,response:new lu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Nn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ls.assertOptions(r,{silentJSONParsing:vt.transitional(vt.boolean),forcedJSONParsing:vt.transitional(vt.boolean),clarifyTimeoutError:vt.transitional(vt.boolean)},!1),s!=null&&(w.isFunction(s)?n.paramsSerializer={serialize:s}:Ls.assertOptions(s,{encode:vt.function,serialize:vt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ls.assertOptions(n,{baseUrl:vt.spelling("baseURL"),withXsrfToken:vt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&w.merge(i.common,i[n.method]);i&&w.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=He.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[bu.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(;f<d;){const g=a[f++],v=a[f++];try{h=g(h)}catch(b){v.call(this,b);break}}try{u=bu.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=Nn(this.defaults,t);const n=np(t.baseURL,t.url,t.allowAbsoluteUrls);return Xh(n,t.params,t.paramsSerializer)}};w.forEach(["delete","get","head","options"],function(t){Cn.prototype[t]=function(n,r){return this.request(Nn(r||{},{method:t,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(Nn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Cn.prototype[t]=n(),Cn.prototype[t+"Form"]=n(!0)});let zI=class ap{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new fr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ap(function(s){t=s}),cancel:t}}};function KI(e){return function(n){return e.apply(null,n)}}function qI(e){return w.isObject(e)&&e.isAxiosError===!0}const ia={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ia).forEach(([e,t])=>{ia[t]=e});function lp(e){const t=new Cn(e),n=Uh(Cn.prototype.request,t);return w.extend(n,Cn.prototype,t,{allOwnKeys:!0}),w.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return lp(Nn(e,s))},n}const _e=lp(hs);_e.Axios=Cn;_e.CanceledError=fr;_e.CancelToken=zI;_e.isCancel=ep;_e.VERSION=op;_e.toFormData=ki;_e.AxiosError=X;_e.Cancel=_e.CanceledError;_e.all=function(t){return Promise.all(t)};_e.spread=KI;_e.isAxiosError=qI;_e.mergeConfig=Nn;_e.AxiosHeaders=He;_e.formToJSON=e=>Zh(w.isHTMLForm(e)?new FormData(e):e);_e.getAdapter=ip.getAdapter;_e.HttpStatusCode=ia;_e.default=_e;const{Axios:MT,AxiosError:FT,CanceledError:$T,isCancel:UT,CancelToken:jT,VERSION:BT,all:HT,Cancel:VT,isAxiosError:WT,spread:zT,toFormData:KT,AxiosHeaders:qT,HttpStatusCode:GT,formToJSON:JT,getAdapter:YT,mergeConfig:XT}=_e,wu=Ee([]),ho=Ee(!1),po=Ee(""),Sr=lr(new Map),mo=lr(new Set),oa="pokedex:detail:",GI=["hp","attack","defense","speed","special-attack","special-defense"];function JI(e){try{const t=localStorage.getItem(`${oa}${e}`);if(!t)return null;const n=JSON.parse(t),r=n&&typeof n.id=="number"&&typeof n.name=="string",s=n&&n.stats&&typeof n.stats=="object"&&GI.some(i=>typeof n.stats[i]=="number");if(r&&s)return Sr.set(e,n),n;localStorage.removeItem(`${oa}${e}`)}catch{}return null}function YI(e,t){try{localStorage.setItem(`${oa}${e}`,JSON.stringify(t))}catch{}}function cp(){async function e(i=151,o=0){ho.value=!0,po.value="";try{const{data:a}=await _e.get(`https://pokeapi.co/api/v2/pokemon?limit=${i}&offset=${o}`);await new Promise(l=>setTimeout(l,800)),wu.value=(a.results||[]).map(l=>{const c=Number(l.url.split("/").filter(Boolean).at(-1));return{id:c,name:l.name,imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${c}.png`,description:l.description}})}catch{po.value="No se pudo cargar PokeAPI."}finally{ho.value=!1}}async function t(i){if(Sr.has(i))return Sr.get(i);const o=JI(i);if(o)return o;const[a,l]=await Promise.all([_e.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(h=>h.data),_e.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`).then(h=>h.data)]),c=Object.fromEntries(a.stats.map(h=>[h.stat.name,h.base_stat])),u=l.flavor_text_entries.find(h=>h.language.name==="es"),f=l.flavor_text_entries.find(h=>h.language.name==="en"),d={id:i,name:a.name,imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`,types:a.types.map(h=>h.type.name),heightM:parseFloat((a.height/10).toFixed(1)),weightKg:parseFloat((a.weight/10).toFixed(1)),abilities:a.abilities.map(h=>h.ability.name),stats:c,flavor:(u?.flavor_text||f?.flavor_text||"").replace(/\f|\n/g," ")};return Sr.set(i,d),YI(i,d),d}function n(i){mo.add(i)}function r(i){mo.delete(i)}return{list:wu,loading:ho,error:po,details:Sr,loadList:e,ensureDetails:t,show:n,hide:r,isExpanded:i=>mo.has(i)}}const Ni=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},XI={class:"container py-3"},QI={key:0,class:"text-center py-5 custom-text text-black"},ZI={class:"row g-3"},eA=["onClick","onMouseenter","aria-pressed"],tA={class:"flip-card-front card custom-card p-4 d-flex flex-column align-items-center justify-content-between"},nA={class:"card-title d-flex justify-content-between align-items-center w-100 gap-2 flex-row"},rA={class:"fw-bold fs-5"},sA=["aria-pressed","onClick","title"],iA=["src","alt"],oA={class:"card-title text-capitalize text-center mt-2"},aA={key:0,class:"card-text text-muted small mb-2"},lA={class:"flip-card-back card custom-card p-3 d-flex flex-column justify-content-between align-items-stretch"},cA={key:0,class:"poke-back w-100 p-2 flex-column flex-grow-1 d-flex text-center"},uA={class:"d-flex justify-content-between align-items-center gap-2 mb-4 w-100"},fA={class:"fw-bold"},dA={class:"fw-bold"},hA={class:"justify-content-between gap-3 mb-2"},pA={class:"d-flex justify-content-center flex-wrap mb-3"},mA={class:"stats mb-auto"},gA={class:"stat"},yA={class:"bar"},vA={class:"value"},bA={class:"stat"},_A={class:"bar"},wA={class:"value"},EA={class:"stat"},SA={class:"bar"},IA={class:"value"},AA={class:"stat"},TA={class:"bar"},CA={class:"value"},PA={key:0,class:"text-center mt-3"},RA=["onClick"],xA={key:1,class:"text-center py-5"},kA={__name:"Card",props:{search:{type:String,default:""},onlyFavorites:{type:Boolean,default:!1}},emits:["no-results","has-results"],setup(e,{emit:t}){const{isFav:n,toggleFavLocal:r}=$h(),s=Ci();function i(N){s.push({name:"PokemonDetails",params:{id:N.id}})}const o=e,a=t,{list:l,loading:c,details:u,loadList:f,ensureDetails:d,show:h,hide:g,isExpanded:v}=cp();ts(async()=>{(!l.value||l.value.length===0)&&await f(151,0)});const b=be(()=>{const N=(o.search??"").toLowerCase().trim();let k=l.value;return N&&(k=k.filter(j=>j.name.toLowerCase().includes(N))),o.onlyFavorites&&(k=k.filter(j=>n(j.id))),k});Ft([b,()=>o.search,c],([N,k,j])=>{j||!(k??"").trim()||(Array.isArray(N)&&N.length===0?a("no-results"):a("has-results"))},{immediate:!0});function _(N){return String(N).padStart(3,"0")}async function E(N){const k=N.id;v(k)?g(k):(await d(k),h(k))}async function P(N){u.get(N)||d(N)}const R={fire:"#EE8130",water:"#6390F0",grass:"#7AC74C",electric:"#F7D02C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",dark:"#705746",steel:"#B7B7CE",fairy:"#D685AD",normal:"#A8A77A"};return(N,k)=>{const j=Gn("font-awesome-icon");return Z(),te("div",XI,[G(c)?(Z(),te("div",QI," Cargando pokémon… ")):Dt("",!0),T("div",ZI,[(Z(!0),te(Ae,null,Or(b.value,H=>(Z(),te("div",{class:"col-12 col-sm-6 col-md-4 col-lg-3",key:H.id},[T("div",{class:"flip-card",role:"button",onClick:ve=>E(H),onMouseenter:ve=>P(H.id),"aria-pressed":G(v)(H.id)?"true":"false"},[T("div",{class:dn(["flip-card-inner",{"is-flipped":G(v)(H.id)}])},[T("div",tA,[T("header",nA,[T("div",rA,"#"+ce(_(H.id)),1),T("button",{class:"btn fav-btn","aria-pressed":G(n)(H.id)?"true":"false",onClick:on(ve=>G(r)(H.id),["stop"]),title:G(n)(H.id)?"Quitar de favoritos":"Agregar a favoritos"},[ge(j,{icon:[G(n)(H.id)?"fas":"far","heart"],class:dn(G(n)(H.id)?"text-danger":"text-dark"),onClick:on(ve=>G(r)(H.id),["stop"])},null,8,["icon","class","onClick"])],8,sA)]),T("img",{src:H.imageUrl,loading:"lazy",class:"card-img-top img-fluid my-2",alt:H.name,style:{"max-height":"180px","object-fit":"contain"}},null,8,iA),T("h5",oA,ce(H.name),1),G(u).get(H.id)?(Z(),te("p",aA,ce((G(u).get(H.id).flavor||"").replace(/\n|\f/g," ")),1)):Dt("",!0),G(u).get(H.id)?(Z(),te("span",{key:1,style:wt({backgroundColor:R[G(u).get(H.id).types[0]]||"#777"}),class:"badge type-badge text-capitalize mt-2"},ce(G(u).get(H.id).types[0]),5)):Dt("",!0)]),T("div",lA,[G(u).get(H.id)?(Z(),te("div",cA,[T("header",uA,[T("span",fA,"#"+ce(_(H.id)),1),T("span",dA,ce(H.name.toUpperCase()),1)]),T("div",hA,[T("div",null,[k[0]||(k[0]=T("strong",null,"Altura:",-1)),rn(" "+ce(G(u).get(H.id).heightM)+"m ",1)]),T("div",null,[k[1]||(k[1]=T("strong",null,"Peso:",-1)),rn(" "+ce(G(u).get(H.id).weightKg)+"kg ",1)])]),k[6]||(k[6]=T("h6",{class:"mt-3"},[T("strong",null,"Habilidades")],-1)),T("div",pA,[(Z(!0),te(Ae,null,Or(G(u).get(H.id).abilities,ve=>(Z(),te("span",{key:ve,class:"ability text-capitalize m-1"},ce(ve),1))),128))]),k[7]||(k[7]=T("h6",{class:"mt-1"},[T("strong",null,"Estadísticas")],-1)),T("div",mA,[T("div",gA,[k[2]||(k[2]=T("span",{class:"label"},"HP:",-1)),T("span",yA,[T("span",{class:"fill",style:wt({width:Math.min(G(u).get(H.id).stats.hp,100)+"%"})},null,4)]),T("span",vA,ce(G(u).get(H.id).stats.hp),1)]),T("div",bA,[k[3]||(k[3]=T("span",{class:"label"},"Attack:",-1)),T("span",_A,[T("span",{class:"fill",style:wt({width:Math.min(G(u).get(H.id).stats.attack,100)+"%"})},null,4)]),T("span",wA,ce(G(u).get(H.id).stats.attack),1)]),T("div",EA,[k[4]||(k[4]=T("span",{class:"label"},"Defense:",-1)),T("span",SA,[T("span",{class:"fill",style:wt({width:Math.min(G(u).get(H.id).stats.defense,100)+"%"})},null,4)]),T("span",IA,ce(G(u).get(H.id).stats.defense),1)]),T("div",AA,[k[5]||(k[5]=T("span",{class:"label"},"Speed:",-1)),T("span",TA,[T("span",{class:"fill",style:wt({width:Math.min(G(u).get(H.id).stats.speed,100)+"%"})},null,4)]),T("span",CA,ce(G(u).get(H.id).stats.speed),1)])]),G(u).get(H.id)?(Z(),te("div",PA,[T("button",{class:"btn custom-btn__card w-100",onClick:on(ve=>i(H),["stop"])}," Ver detalles ",8,RA)])):Dt("",!0)])):(Z(),te("div",xA,"Cargando detalles…"))])],2)],40,eA)]))),128))])])}}},up=Ni(kA,[["__scopeId","data-v-8c10e201"]]),OA={key:0,class:"text-center py-4 text-muted"},NA="fav:pokemon",DA={__name:"FavoritesView",setup(e){const{user:t}=Ii(),n=be(()=>{const i=t?.value;return i?.email?`favorites:${i.email}`:NA}),r=Ee(!0);function s(){try{const i=localStorage.getItem(n.value),o=i?JSON.parse(i):[];r.value=!Array.isArray(o)||o.length===0}catch{r.value=!0}}return ts(()=>{s()}),Ft(n,()=>{s()}),window.addEventListener("storage",i=>{i.key===n.value&&s()}),(i,o)=>r.value?(Z(),te("section",OA," Aún no tienes Pokemones Favoritos, ve a Inicio y dales 🖤 ")):(Z(),Ma(up,{key:1,"only-favorites":!0}))}},LA=["value"],MA={key:0,class:"text-danger small mt-1",role:"alert","aria-live":"polite"},FA={__name:"SearchBar",props:{modelValue:{type:String,default:""}},emits:["update:modelValue","search"],setup(e,{emit:t}){const n=e,r=t,s=a=>r("update:modelValue",a.target.value),i=Ee(""),o=()=>{if(!n.modelValue||!n.modelValue.trim()){i.value="Ingresa un nombre para buscar 👀";return}i.value="",r("search",n.modelValue.trim())};return(a,l)=>(Z(),te(Ae,null,[T("form",{class:"d-flex",role:"search",onSubmit:on(o,["prevent"])},[T("input",{class:"form-control me-2",type:"search",placeholder:"Buscador...","aria-label":"Search",value:e.modelValue,onInput:s},null,40,LA),l[0]||(l[0]=T("button",{class:"btn btn-outline-success",type:"submit"},"Buscar",-1))],32),i.value?(Z(),te("div",MA,ce(i.value),1)):Dt("",!0)],64))}},$A={class:"container custom-searchBarWrapper"},UA={class:"container custom-main"},jA={class:"container text-center"},BA={__name:"HomeView",setup(e){Na(()=>{console.log("scroll: "+window.scrollY),Xa.value=window.scrollY});const t=Ee(""),n=Ee("");return(r,s)=>(Z(),te(Ae,null,[T("section",$A,[ge(FA,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=i=>t.value=i),onSearch:s[1]||(s[1]=i=>{t.value=i})},null,8,["modelValue"])]),T("section",UA,[br(T("div",{class:"alert alert-success mx-auto mt-2"},ce(n.value),513),[[Ib,n.value]]),T("section",jA,[ge(up,{search:t.value,onNoResults:s[2]||(s[2]=i=>n.value="No se encontraron resultados 😢"),onHasResults:s[3]||(s[3]=i=>n.value="")},null,8,["search"])])])],64))}},HA={class:"mb-3 w-75"},VA={key:0,class:"invalid-feedback d-block"},WA={class:"mb-3 w-75"},zA={key:0,class:"invalid-feedback d-block"},KA={key:0,class:"invalid-feedback d-block"},qA=["disabled"],GA={class:"mb-3"},JA={class:"mb-3"},YA={key:0,class:"invalid-feedback d-block"},XA={__name:"UserLogin",emits:["submitted"],setup(e,{emit:t}){const n=Ee(!1),{login:r,register:s,authError:i}=Ii(),o=Ci(),a=Ee(""),l=Ee(""),c=Ee(""),u=Ee(""),f=Ee(""),d=Ee("");function h(){const N=(l.value||"").trim().toLowerCase(),k=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;return N?k.test(N)?(f.value="",!0):(f.value="Formato de email inválido",!1):(f.value="El email es obligatorio",!1)}function g(){const N=a.value||"";return N?N.length<6?(d.value="Mínimo 6 caracteres",!1):!/[A-Za-z]/.test(N)||!/\d/.test(N)?(d.value="Debe incluir letras y números",!1):/\s/.test(N)?(d.value="Sin espacios",!1):(d.value="",!0):(d.value="La contraseña es obligatoria",!1)}function v(){return h()&&g()}const b=be(()=>!f.value&&!d.value&&!!l.value&&!!a.value);async function _(){if(l.value=(l.value||"").trim().toLowerCase(),!!v())try{await s({email:l.value,password:a.value}),o.push("/favorites")}catch(N){console.error("Registration failed:",N)}}async function E(){const N=(c.value||"").trim().toLowerCase(),k=u.value||"";if(!N){i.value="El email es obligatorio";return}if(!k){i.value="La contraseña es obligatoria";return}try{await r({email:N,password:k}),o.push("/favorites")}catch(j){console.error("Login failed:",j)}}function P(){n.value=!1,i.value=null}function R(){n.value=!0,i.value=null}return(N,k)=>n.value?(Z(),te("form",{key:1,onSubmit:on(E,["prevent"]),class:"login-form"},[T("div",GA,[k[8]||(k[8]=T("label",{class:"form-label custom-label"}," Email",-1)),br(T("input",{id:"loginEmailInput",type:"email","onUpdate:modelValue":k[2]||(k[2]=j=>c.value=j),class:"form-control",autocomplete:"username",required:""},null,512),[[bs,c.value,void 0,{trim:!0}]])]),T("div",JA,[k[9]||(k[9]=T("label",{class:"form-label custom-label"},"Contraseña",-1)),br(T("input",{id:"loginPasswordInput",type:"password","onUpdate:modelValue":k[3]||(k[3]=j=>u.value=j),class:"form-control",autocomplete:"current-password",required:""},null,512),[[bs,u.value]])]),G(i)?(Z(),te("div",YA,ce(G(i)),1)):Dt("",!0),T("div",{class:"mb-3"},[T("button",{type:"button",class:"btn custom-btn__link mx-2",onClick:P}," Registrarme "),k[10]||(k[10]=T("button",{type:"submit",class:"btn custom-btn mx-2"},"Iniciar Sesión",-1))])],32)):(Z(),te("form",{key:0,onSubmit:on(_,["prevent"])},[T("div",HA,[k[4]||(k[4]=T("label",{class:"form-label custom-label"},"Email",-1)),br(T("input",{id:"emailInput",type:"email","onUpdate:modelValue":k[0]||(k[0]=j=>l.value=j),onInput:h,class:dn(["form-control",{"is-invalid":f.value}]),required:""},null,34),[[bs,l.value,void 0,{trim:!0}]]),f.value?(Z(),te("div",VA,ce(f.value),1)):Dt("",!0)]),T("div",WA,[k[5]||(k[5]=T("label",{class:"form-label custom-label"},"Contraseña",-1)),br(T("input",{id:"pswrdInput",type:"password","onUpdate:modelValue":k[1]||(k[1]=j=>a.value=j),onInput:g,class:dn(["form-control",{"is-invalid":d.value}]),minlength:"6",required:""},null,34),[[bs,a.value]]),k[6]||(k[6]=T("div",{class:"form-text"},"Mín. 6 caracteres, con letras y números.",-1)),d.value?(Z(),te("div",zA,ce(d.value),1)):Dt("",!0)]),k[7]||(k[7]=T("div",{id:"emailHelp",class:"form-text pb-4"}," Nunca compartiremos tus datos con terceros. ",-1)),G(i)?(Z(),te("div",KA,ce(G(i)),1)):Dt("",!0),T("div",null,[T("button",{type:"button",class:"btn custom-btn__link mx-2",onClick:R}," Ya tengo una cuenta "),T("button",{type:"submit",class:"btn custom-btn mx-2",disabled:!b.value}," Registrar ",8,qA)])],32))}},QA=Ni(XA,[["__scopeId","data-v-466e77d8"]]),ZA={class:"custom-container"},eT={__name:"LoginView",setup(e){return(t,n)=>(Z(),te("section",ZA,[ge(QA,{class:"userLogin-container"})]))}},tT={key:0,class:"text-center py-5"},nT={key:1},rT={class:"container card p-4 shadow-sm my-4 custom-main"},sT={key:0,class:"d-flex justify-content-between align-items-start mb-3"},iT={class:"text-capitalize mb-0"},oT={class:"d-flex align-items-center"},aT={class:"text-muted"},lT=["aria-pressed","title"],cT={key:1,class:"text-center text-muted mb-3"},uT={class:"text-center mb-4"},fT=["src","alt"],dT={class:"row mb-4 mt-4"},hT={class:"col-md-3 text-center mb-3 mb-md-0"},pT={class:"badge custom-badge px-3 py-2"},mT={class:"col-md-3 text-center mb-3 mb-md-0"},gT={class:"badge custom-badge px-3 py-2"},yT={class:"col-md-3 text-center"},vT={class:"d-flex flex-wrap justify-content-center"},bT={class:"col-md-3 mb-4 text-center"},_T={class:"d-flex justify-content-between mb-1 text-capitalize"},wT={class:"progress stat-bar"},ET=["aria-valuenow"],ST={key:1,class:"text-muted"},IT={__name:"PokemonDetailsView",setup(e){const{isFav:t,toggleFavLocal:n}=$h(),r=hS(),s=Ci(),{details:i,ensureDetails:o}=cp(),a=Ee(null),l={fire:"#EE8130",water:"#6390F0",grass:"#7AC74C",electric:"#F7D02C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",dark:"#705746",steel:"#B7B7CE",fairy:"#D685AD",normal:"#A8A77A"},c=["hp","attack","defense","speed","special-attack","special-defense"],u=be(()=>{const h=a.value?.stats;return h?c.filter(g=>h[g]!=null):[]}),f=async h=>{let g=i.get(Number(h));g||(g=loadDetailFromStorage(Number(h)),g?i.set(Number(h),g):g=await o(Number(h))),a.value=g};ts(async()=>{await f(r.params.id)}),Na(()=>{console.log(Xa.value)}),Ft(()=>r.params.id,h=>f(h));const d=()=>{s.push({name:"home"})};return(h,g)=>{const v=Gn("font-awesome-icon");return Z(),te("div",null,[a.value?(Z(),te("div",nT,[T("div",{class:"mx-5 mt-2"},[T("button",{class:"btn custom-btn__link",onClick:d}," < Volver a la Pokédex ")]),T("div",rT,[a.value&&a.value.id?(Z(),te("div",sT,[T("h2",iT,ce(a.value.name),1),T("div",oT,[T("h5",aT," #"+ce(String(a.value.id).padStart(3,"0")),1),T("button",{class:"btn fav-btn ms-3 mb-1","aria-pressed":G(t)(a.value.id)?"true":"false",onClick:g[1]||(g[1]=on(b=>G(n)(a.value.id),["stop"])),title:G(t)(a.value.id)?"Quitar de favoritos":"Agregar a favoritos"},[ge(v,{icon:[G(t)(a.value.id)?"fas":"far","heart"],class:dn(G(t)(a.value.id)?"text-danger":"text-dark"),onClick:g[0]||(g[0]=on(b=>G(n)(a.value.id),["stop"]))},null,8,["icon","class"])],8,lT)])])):(Z(),te("div",cT," Datos no disponibles ")),T("div",uT,[T("img",{src:a.value.imageUrl,alt:a.value.name,class:"img-fluid pokemon-image",style:{"max-height":"250px","object-fit":"contain"}},null,8,fT)]),T("div",dT,[T("div",hT,[g[2]||(g[2]=T("h6",null,"Altura",-1)),T("span",pT,ce(a.value.heightM)+" m",1)]),T("div",mT,[g[3]||(g[3]=T("h6",null,"Peso",-1)),T("span",gT,ce(a.value.weightKg)+" kg",1)]),T("div",yT,[g[4]||(g[4]=T("h6",null,"Habilidades",-1)),T("div",vT,[(Z(!0),te(Ae,null,Or(a.value.abilities,b=>(Z(),te("span",{key:b,class:"badge ability-badge me-2 mb-2 text-capitalize"},ce(b.replace("-"," ")),1))),128))])]),T("div",bT,[g[5]||(g[5]=T("h6",null,"Tipos",-1)),T("div",null,[(Z(!0),te(Ae,null,Or(a.value.types,b=>(Z(),te("span",{key:b,class:"badge type-badge me-2 mb-2 text-capitalize",style:wt({backgroundColor:l[b]||"#6c757d"})},ce(b),5))),128))])])]),T("div",null,[g[6]||(g[6]=T("h6",{class:"mb-3"},"Estadísticas",-1)),a.value&&a.value.stats?(Z(!0),te(Ae,{key:0},Or(u.value,b=>(Z(),te("div",{key:b,class:"mb-3"},[T("div",_T,[T("span",null,ce(b.replace("-"," ")),1),T("span",null,ce(a.value.stats[b]),1)]),T("div",wT,[T("div",{class:"progress-bar custom-badge",role:"progressbar",style:wt({width:Math.min(a.value.stats[b],100)+"%"}),"aria-valuenow":a.value.stats[b],"aria-valuemin":"0","aria-valuemax":"100"},null,12,ET)])]))),128)):(Z(),te("div",ST,"Sin estadísticas disponibles."))])])])):(Z(),te("div",tT,"Cargando detalles…"))])}}},AT=Ni(IT,[["__scopeId","data-v-742e1213"]]),TT={},CT={class:"text-center"};function PT(e,t){const n=Gn("RouterLink");return Z(),te("div",CT,[t[1]||(t[1]=T("h1",null,"404",-1)),t[2]||(t[2]=T("p",null,"La página que buscas no existe.",-1)),ge(n,{to:"/"},{default:Rr(()=>[...t[0]||(t[0]=[rn("Volver al inicio",-1)])]),_:1})])}const RT=Ni(TT,[["render",PT]]),xT=fS({history:jE("/pokedex/"),routes:[{path:"/",name:"home",component:()=>BA},{path:"/login",name:"login",component:()=>eT},{path:"/favorites",name:"favorites",component:()=>DA},{path:"/pokemon/:id",name:"PokemonDetails",component:()=>AT,props:!0},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>RT}],scrollBehavior(e,t,n){return console.log("scroll",{to:e,from:t,savedPosition:n}),bS.value=t.name,e.name==="PokemonDetails"?{left:0,top:.1}:e.name==="home"?(console.log("va hacia el home"),{top:Xa.value,left:0}):n||{left:0,top:0}}});/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var kT={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"]},OT={prefix:"far",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M464 256a208 208 0 1 1 -416 0 208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zm387.3 11.3c6.2-6.2 6.2-16.4 0-22.6l-104-104c-4.6-4.6-11.5-5.9-17.4-3.5S256 145.5 256 152l0 72-104 0c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l104 0 0 72c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l104-104z"]};/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var NT={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]};Ay.add(NT,kT,OT);const tl=Vb(vS);tl.component("font-awesome-icon",r1);tl.use(xT);tl.mount("#app");
