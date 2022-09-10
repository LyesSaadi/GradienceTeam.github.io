"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[114],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(a),d=r,m=k["".concat(p,".").concat(d)]||k[d]||u[d]||i;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const i={},l="Nastaven\xed",o={unversionedId:"setup",id:"setup",title:"Nastaven\xed",description:"Aplikace Libadwaita",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/setup.md",sourceDirName:".",slug:"/setup",permalink:"/cs/docs/setup",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/cs",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"P\u0159edvolby",permalink:"/cs/docs/presets"}},p={},c=[{value:"Aplikace Libadwaita",id:"aplikace-libadwaita",level:2},{value:"Vanilla GTK 4 aplikace",id:"vanilla-gtk-4-aplikace",level:2},{value:"GTK 3 aplikace",id:"gtk-3-aplikace",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nastaven\xed"},"Nastaven\xed"),(0,r.kt)("h2",{id:"aplikace-libadwaita"},"Aplikace Libadwaita"),(0,r.kt)("p",null,"Pro nativn\xed aplikace Libadwaita nen\xed vy\u017eadov\xe1no \u017e\xe1dn\xe9 dal\u0161\xed nastaven\xed."),(0,r.kt)("p",null,"Pro aplikace Flatpak Libadwaita mus\xedte p\u0159epsat jejich opr\xe1vn\u011bn\xed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spustit ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo flatpak override --filesystem=xdg-config/gtk-4.0")," nebo"),(0,r.kt)("li",{parentName:"ul"},"Pou\u017eijte ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," a p\u0159idejte ",(0,r.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-4.0")," do ",(0,r.kt)("strong",{parentName:"li"},"ostatn\xedch soubor\u016f")," v sekci ",(0,r.kt)("strong",{parentName:"li"},"Souborov\xfd syst\xe9m")," z ",(0,r.kt)("strong",{parentName:"li"},"V\u0161echny aplikace"))),(0,r.kt)("h2",{id:"vanilla-gtk-4-aplikace"},"Vanilla GTK 4 aplikace"),(0,r.kt)("p",null,"Pou\u017eijte ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md"},"tento pr\u016fvodce")," pro vzhled standardn\xedch GTK 4 aplikac\xed."),(0,r.kt)("h2",{id:"gtk-3-aplikace"},"GTK 3 aplikace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nainstalujte a aplikujte ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lassekongo83/adw-gtk3#readme"},"adw-gtk3")," \u0161ablonu (nezapome\u0148te nainstalovat Flatpak bal\xed\u010dek!)"),(0,r.kt)("li",{parentName:"ul"},"Pro Flatpak aplikace mus\xedte p\u0159epsat jejich opr\xe1vn\u011bn\xed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Spustit ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo flatpak override --filesystem=xdg-config/gtk-3.0")," nebo"),(0,r.kt)("li",{parentName:"ul"},"Pou\u017eijte ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," a p\u0159idejte ",(0,r.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-3.0")," do ",(0,r.kt)("strong",{parentName:"li"},"ostatn\xedch soubor\u016f")," v sekci ",(0,r.kt)("strong",{parentName:"li"},"Souborov\xfd syst\xe9m")," z ",(0,r.kt)("strong",{parentName:"li"},"V\u0161echny aplikace"))))))}u.isMDXComponent=!0}}]);