(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[433],{7597:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/crystal-clear.5f32063.640.png 640w,"+a.p+"assets/ideal-img/crystal-clear.f4b7d3f.1030.png 1030w",images:[{path:a.p+"assets/ideal-img/crystal-clear.5f32063.640.png",width:640,height:299},{path:a.p+"assets/ideal-img/crystal-clear.f4b7d3f.1030.png",width:1030,height:481}],src:a.p+"assets/ideal-img/crystal-clear.5f32063.640.png",toString:function(){return a.p+"assets/ideal-img/crystal-clear.5f32063.640.png"},placeholder:void 0,width:640,height:299},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoUlEQVQImRXOuw7BAABA0SYGg0rEoJq0Fa2WttFqqw+PIhhELHZszDaTzSQ+xGg2+rEr3W9OrlCvBFTLDqoYY8gRhhqiKxGGljG2zlyCD7f4h2ArB9rSHrWZEHpT0mhJOlgROTk9bc2q+2BrvxA29pO8c8dU1vhuQhIU4YJJMEOTU1qNHQUmXIdfTv6bWD/iWiN8Z07fyvCsDKlmI5ZMir0/uCNBapmAFl4AAAAASUVORK5CYII="}},508:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ee,prepareUserState:()=>K});var s=a(7294),r=a(6010),n=a(6136),c=a(7325),l=a(6775),o=a(3777),i=a(3386),m=a(7462);const u={svgIcon:"svgIcon_R3jO",small:"small_SUAn",medium:"medium_GxVq",large:"large_TyPU",primary:"primary_V8Cc",secondary:"secondary_WyIo",success:"success_lY5U",error:"error_eHdq",warning:"warning_IB04",inherit:"inherit_2ln5"};function d(e){const{svgClass:t,colorAttr:a,children:n,color:c="inherit",size:l="medium",viewBox:o="0 0 24 24",...i}=e;return s.createElement("svg",(0,m.Z)({viewBox:o,color:a,"aria-hidden":!0,className:(0,r.Z)(u.svgIcon,u[c],u[l],t)},i),n)}function h(e){return s.createElement(d,e,s.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))}function g(e,t){const a=[...e];return a.sort(((e,a)=>t(e)>t(a)?1:t(a)>t(e)?-1:0)),a}const E=[{title:"Crystal Clear",description:"Clear theme with Crystal's colors",preview:a(7597),website:"https://github.com/",source:"https://github.com/GradienceTeam/Community/raw/main/curated/crystal-clear.json",tags:["gnome"]}],p={favorite:{label:(0,c.I)({message:"Favorite"}),description:(0,c.I)({message:"Our favorite Docusaurus sites that you must absolutely check out!",id:"showcase.tag.favorite.description"}),color:"#e9669e"},gnome:{label:(0,c.I)({message:"GNOME"}),description:(0,c.I)({message:"GNOME is a desktop environment for Unix-like operating systems.",id:"showcase.tag.gnome.description"}),color:"#39ca30"},kde:{label:(0,c.I)({message:"KDE"}),description:(0,c.I)({message:"KDE is a desktop environment for Unix-like operating systems.",id:"showcase.tag.kde.description"}),color:"#dfd545"}},f=Object.keys(p);const v=function(){let e=E;return e=g(e,(e=>e.title.toLowerCase())),e=g(e,(e=>!e.tags.includes("favorite"))),e}(),w="checkboxLabel_qq5j",b="tags";function y(e){return new URLSearchParams(e).getAll(b)}function C(e,t){let{id:a,icon:r,label:n,tag:c,...o}=e;const i=(0,l.TH)(),u=(0,l.k6)(),[d,h]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const e=y(i.search);h(e.includes(c))}),[c,i]);const g=(0,s.useCallback)((()=>{const e=function(e,t){const a=e.indexOf(t);if(-1===a)return e.concat(t);const s=[...e];return s.splice(a,1),s}(y(i.search),c),t=function(e,t){const a=new URLSearchParams(e);return a.delete(b),t.forEach((e=>a.append(b,e))),a.toString()}(i.search,e);u.push({...i,search:t,state:K()})}),[c,i,u]);return s.createElement(s.Fragment,null,s.createElement("input",(0,m.Z)({type:"checkbox",id:a,className:"screen-reader-only",onKeyDown:e=>{"Enter"===e.key&&g()},onFocus:e=>{var t;e.relatedTarget&&(null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("focus")))},onBlur:e=>{var t;null==(t=e.target.nextElementSibling)||t.dispatchEvent(new KeyboardEvent("blur"))},onChange:g,checked:d},o)),s.createElement("label",{ref:t,htmlFor:a,className:w},n,r))}const _=s.forwardRef(C),k={checkboxLabel:"checkboxLabel_YjaH"},A="operator";function N(e){var t;return null!=(t=new URLSearchParams(e).get(A))?t:"OR"}function L(){const e="showcase_filter_toggle",t=(0,l.TH)(),a=(0,l.k6)(),[n,c]=(0,s.useState)(!1);(0,s.useEffect)((()=>{c("AND"===N(t.search))}),[t]);const o=(0,s.useCallback)((()=>{c((e=>!e));const e=new URLSearchParams(t.search);e.delete(A),n||e.append(A,"AND"),a.push({...t,search:e.toString(),state:K()})}),[n,t,a]);return s.createElement("div",null,s.createElement("input",{type:"checkbox",id:e,className:"screen-reader-only","aria-label":"Toggle between or and and for the tags you selected",onChange:o,onKeyDown:e=>{"Enter"===e.key&&o()},checked:n}),s.createElement("label",{htmlFor:e,className:(0,r.Z)(k.checkboxLabel,"shadow--md")},s.createElement("span",{className:k.checkboxLabelOr},"OR"),s.createElement("span",{className:k.checkboxLabelAnd},"AND")))}var I=a(3699),x=a(5944),S=a(3935),Z=a(5237);const F="tooltip_vJam",T="tooltipArrow_mUcK";function U(e){let{children:t,id:a,anchorEl:r,text:n}=e;const[c,l]=(0,s.useState)(!1),[o,i]=(0,s.useState)(null),[u,d]=(0,s.useState)(null),[h,g]=(0,s.useState)(null),[E,p]=(0,s.useState)(null),{styles:f,attributes:v}=(0,Z.D)(o,u,{modifiers:[{name:"arrow",options:{element:h}},{name:"offset",options:{offset:[0,8]}}]}),w=(0,s.useRef)(null),b=a+"_tooltip";return(0,s.useEffect)((()=>{p(r?"string"==typeof r?document.querySelector(r):r:document.body)}),[E,r]),(0,s.useEffect)((()=>{const e=["mouseenter","focus"],t=["mouseleave","blur"],a=()=>{""!==n&&(null==o||o.removeAttribute("title"),w.current=window.setTimeout((()=>{l(!0)}),400))},s=()=>{clearInterval(w.current),l(!1)};return o&&(e.forEach((e=>{o.addEventListener(e,a)})),t.forEach((e=>{o.addEventListener(e,s)}))),()=>{o&&(e.forEach((e=>{o.removeEventListener(e,a)})),t.forEach((e=>{o.removeEventListener(e,s)})))}}),[o,n]),s.createElement(s.Fragment,null,s.cloneElement(t,{ref:i,"aria-describedby":c?b:void 0}),E?S.createPortal(c&&s.createElement("div",(0,m.Z)({id:b,role:"tooltip",ref:d,className:F,style:f.popper},v.popper),n,s.createElement("span",{ref:g,className:T,style:f.arrow})),E):E)}const O={showcaseCardImage:"showcaseCardImage_so_s",showcaseCardHeader:"showcaseCardHeader_kckR",showcaseCardTitle:"showcaseCardTitle_KCEy",svgIconFavorite:"svgIconFavorite_Pid3",showcaseCardSrcBtn:"showcaseCardSrcBtn_ZD4t",showcaseCardBody:"showcaseCardBody_uqgy",cardFooter:"cardFooter_mBIw",tag:"tag_thEI",textLabel:"textLabel_xy_A",colorLabel:"colorLabel_Lsd4"},B=s.forwardRef(((e,t)=>{let{label:a,color:r,description:n}=e;return s.createElement("li",{ref:t,className:O.tag,title:n},s.createElement("span",{className:O.textLabel},a.toLowerCase()),s.createElement("span",{className:O.colorLabel,style:{backgroundColor:r}}))}));function R(e){let{tags:t}=e;const a=g(t.map((e=>({tag:e,...p[e]}))),(e=>f.indexOf(e.tag)));return s.createElement(s.Fragment,null,a.map(((e,t)=>{const a="showcase_card_tag_"+e.tag;return s.createElement(U,{key:t,text:e.description,anchorEl:"#__docusaurus",id:a},s.createElement(B,(0,m.Z)({key:t},e)))})))}function H(e){let{user:t}=e;const a=function(e){var t;return null!=(t=e.preview)?t:"https://slorber-api-screenshot.netlify.app/"+encodeURIComponent(e.website)+"/showcase"}(t);return s.createElement("li",{key:t.title,className:"card shadow--md"},s.createElement("div",{className:(0,r.Z)("card__image",O.showcaseCardImage)},s.createElement(x.Z,{img:a,alt:t.title})),s.createElement("div",{className:"card__body"},s.createElement("div",{className:(0,r.Z)(O.showcaseCardHeader)},s.createElement("h4",{className:O.showcaseCardTitle},s.createElement(I.Z,{href:t.website,className:O.showcaseCardLink},t.title)),t.tags.includes("favorite")&&s.createElement(h,{svgClass:O.svgIconFavorite,size:"small"}),t.source&&s.createElement(I.Z,{href:t.source,className:(0,r.Z)("button button--secondary button--sm",O.showcaseCardSrcBtn)},s.createElement(c.Z,{id:"showcase.card.sourceLink"},"source"))),s.createElement("p",{className:O.showcaseCardBody},t.description)),s.createElement("ul",{className:(0,r.Z)("card__footer",O.cardFooter)},s.createElement(R,{tags:t.tags})))}const D=s.memo(H),P={filterCheckbox:"filterCheckbox_Jgzf",checkboxList:"checkboxList_JtWJ",checkboxListItem:"checkboxListItem_eExU",searchContainer:"searchContainer_bAjG",showcaseList:"showcaseList_UuTk",showcaseFavorite:"showcaseFavorite_JdO1",showcaseFavoriteHeader:"showcaseFavoriteHeader_qHgo",svgIconFavoriteXs:"svgIconFavoriteXs_U4TL",svgIconFavorite:"svgIconFavorite_fmd1"},q=(0,c.I)({message:"Presets made for Gradience"}),G=(0,c.I)({message:"List of presets made for Gradience by the Community"});function K(){var e;if(n.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:null==(e=document.activeElement)?void 0:e.id}}const Y="name";function z(e){return new URLSearchParams(e).get(Y)}function J(){const e=(0,l.TH)(),[t,a]=(0,s.useState)("OR"),[r,n]=(0,s.useState)([]),[c,o]=(0,s.useState)(null);return(0,s.useEffect)((()=>{n(y(e.search)),a(N(e.search)),o(z(e.search)),function(e){var t;const{scrollTopPosition:a,focusedElementId:s}=null!=e?e:{scrollTopPosition:0,focusedElementId:void 0};null==(t=document.getElementById(s))||t.focus(),window.scrollTo({top:a})}(e.state)}),[e]),(0,s.useMemo)((()=>function(e,t,a,s){return s&&(e=e.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&("AND"===a?t.every((t=>e.tags.includes(t))):t.some((t=>e.tags.includes(t))))))}(v,r,t,c)),[r,t,c])}function M(){return s.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},s.createElement("h1",null,q),s.createElement("p",null,G),s.createElement("a",{className:"button button--primary",href:"https://github.com/GradienceTeam/Community",target:"_blank",rel:"noreferrer"},s.createElement(c.Z,{id:"showcase.header.button"},"\ud83d\ude4f Please add your preset")))}function W(){return s.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},s.createElement("h1",null,s.createElement(c.Z,null,"Acknelowment")),s.createElement("p",null,s.createElement(c.Z,null,"Thanks to all the contributors who have added their presets to the list! Thanks to Docusaurus.io for the showcase")))}function j(){const e=J(),t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of presets found on the list. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 preset|{sitesCount} presets"},{sitesCount:t}))}();return s.createElement("section",{className:"container margin-top--l margin-bottom--lg"},s.createElement("div",{className:(0,r.Z)("margin-bottom--sm",P.filterCheckbox)},s.createElement("div",null,s.createElement("h2",null,s.createElement(c.Z,{id:"showcase.filters.title"},"Filters")),s.createElement("span",null,t(e.length))),s.createElement(L,null)),s.createElement("ul",{className:(0,r.Z)("clean-list",P.checkboxList)},f.map(((e,t)=>{const{label:a,description:r,color:n}=p[e],c="showcase_checkbox_id_"+e;return s.createElement("li",{key:t,className:P.checkboxListItem},s.createElement(U,{id:c,text:r,anchorEl:"#__docusaurus"},s.createElement(_,{tag:e,id:c,label:a,icon:"favorite"===e?s.createElement(h,{svgClass:P.svgIconFavoriteXs}):s.createElement("span",{style:{backgroundColor:n,width:10,height:10,borderRadius:"50%",marginLeft:8}})})))}))))}const X=v.filter((e=>e.tags.includes("favorite"))),Q=v.filter((e=>!e.tags.includes("favorite")));function V(){const e=(0,l.k6)(),t=(0,l.TH)(),[a,r]=(0,s.useState)(null);return(0,s.useEffect)((()=>{r(z(t.search))}),[t]),s.createElement("div",{className:P.searchContainer},s.createElement("input",{id:"searchbar",placeholder:(0,c.I)({message:"Search for preset name...",id:"showcase.searchBar.placeholder"}),value:null!=a?a:void 0,onInput:a=>{r(a.currentTarget.value);const s=new URLSearchParams(t.search);s.delete(Y),a.currentTarget.value&&s.set(Y,a.currentTarget.value),e.push({...t,search:s.toString(),state:K()}),setTimeout((()=>{var e;null==(e=document.getElementById("searchbar"))||e.focus()}),0)}}))}function $(){const e=J();return 0===e.length?s.createElement("section",{className:"margin-top--lg margin-bottom--xl"},s.createElement("div",{className:"container padding-vert--md text--center"},s.createElement("h2",null,s.createElement(c.Z,{id:"showcase.usersList.noResult"},"No result")),s.createElement(V,null))):s.createElement("section",{className:"margin-top--lg margin-bottom--xl"},e.length===v.length?s.createElement(s.Fragment,null,s.createElement("div",{className:P.showcaseFavorite},s.createElement("div",{className:"container"},s.createElement("div",{className:(0,r.Z)("margin-bottom--md",P.showcaseFavoriteHeader)},s.createElement("h2",null,s.createElement(c.Z,{id:"showcase.favoritesList.title"},"Our favorites")),s.createElement(h,{svgClass:P.svgIconFavorite}),s.createElement(V,null)),s.createElement("ul",{className:(0,r.Z)("container","clean-list",P.showcaseList)},X.map((e=>s.createElement(D,{key:e.title,user:e})))))),s.createElement("div",{className:"container margin-top--lg"},s.createElement("h2",{className:P.showcaseHeader},s.createElement(c.Z,{id:"showcase.usersList.allUsers"},"All presets")),s.createElement("ul",{className:(0,r.Z)("clean-list",P.showcaseList)},Q.map((e=>s.createElement(D,{key:e.title,user:e})))))):s.createElement("div",{className:"container"},s.createElement("div",{className:(0,r.Z)("margin-bottom--md",P.showcaseFavoriteHeader)},s.createElement(V,null)),s.createElement("ul",{className:(0,r.Z)("clean-list",P.showcaseList)},e.map((e=>s.createElement(D,{key:e.title,user:e}))))))}function ee(){return s.createElement(i.Z,{title:q,description:G},s.createElement("main",{className:"margin-vert--lg"},s.createElement(M,null),s.createElement(j,null),s.createElement($,null),s.createElement(W,null)))}}}]);