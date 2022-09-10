"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[803],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||n;return a?i.createElement(f,l(l({ref:t},u),{},{components:a})):i.createElement(f,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=a(7462),r=(a(7294),a(4137));const n={},l="Configurare",o={unversionedId:"setup",id:"setup",title:"Configurare",description:"Aplica\u021bii Libadwaita",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/setup.md",sourceDirName:".",slug:"/setup",permalink:"/ro/docs/setup",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/ro",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Preset\u0103ri",permalink:"/ro/docs/presets"}},p={},c=[{value:"Aplica\u021bii Libadwaita",id:"aplica\u021bii-libadwaita",level:2},{value:"Aplica\u021bii Vanilla GTK 4",id:"aplica\u021bii-vanilla-gtk-4",level:2},{value:"Aplica\u021bii GTK 3",id:"aplica\u021bii-gtk-3",level:2}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configurare"},"Configurare"),(0,r.kt)("h2",{id:"aplica\u021bii-libadwaita"},"Aplica\u021bii Libadwaita"),(0,r.kt)("p",null,"Nu este necesar\u0103 o configurare suplimentar\u0103 pentru aplica\u021biile native Libadwaita."),(0,r.kt)("p",null,"Pentru aplica\u021biile Flatpak Libadwaita, trebuie s\u0103 le suprascrie\u021bi permisiunile:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Executa\u021bi ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo flatpak override --filesystem=xdg-config/gtk-4.0")," sau"),(0,r.kt)("li",{parentName:"ul"},"Utiliza\u0163i ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," \u015fi ad\u0103uga\u0163i ",(0,r.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-4.0")," la ",(0,r.kt)("strong",{parentName:"li"},"Alte fi\u015fiere")," \xeen sec\u0163iunea ",(0,r.kt)("strong",{parentName:"li"},"Filesystem")," ",(0,r.kt)("strong",{parentName:"li"},"Toate Aplica\u0163iile"))),(0,r.kt)("h2",{id:"aplica\u021bii-vanilla-gtk-4"},"Aplica\u021bii Vanilla GTK 4"),(0,r.kt)("p",null,"Folose\u0219te ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md"},"acest ghid")," pentru tema cu vanilie a aplica\u021biilor GTK 4."),(0,r.kt)("h2",{id:"aplica\u021bii-gtk-3"},"Aplica\u021bii GTK 3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instaleaz\u0103 \u0219i aplic\u0103 tema ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lassekongo83/adw-gtk3#readme"},"adw-gtk3")," (nu uita s\u0103 instalezi pachetul Flatpak!)"),(0,r.kt)("li",{parentName:"ul"},"Pentru cererile Flatpak, trebuie s\u0103 \xeenlocui\u021bi permisiunile acestora:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Executa\u021bi ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo flatpak override --filesystem=xdg-config/gtk-3.0")," sau"),(0,r.kt)("li",{parentName:"ul"},"Folose\u0219te ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," \u0219i adaug\u0103 ",(0,r.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-3.0")," la ",(0,r.kt)("strong",{parentName:"li"},"Alte fi\u0219iere")," \xeen sec\u021biunea ",(0,r.kt)("strong",{parentName:"li"},"Fi\u0219iere")," ",(0,r.kt)("strong",{parentName:"li"},"Toate Aplica\u021biile"))))))}s.isMDXComponent=!0}}]);