"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[419],{4137:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(i),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return i?a.createElement(g,l(l({ref:t},s),{},{components:i})):a.createElement(g,l({ref:t},s))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6390:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(7462),n=(i(7294),i(4137));const r={},l="Configurazione",o={unversionedId:"setup",id:"setup",title:"Configurazione",description:"Applicazioni di Libadwaita",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/setup.md",sourceDirName:".",slug:"/setup",permalink:"/it/docs/setup",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/it",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup a development environment",permalink:"/it/docs/dev/setup"}},p={},c=[{value:"Applicazioni di Libadwaita",id:"applicazioni-di-libadwaita",level:2},{value:"Applicazioni Vanilla GTK 4",id:"applicazioni-vanilla-gtk-4",level:2},{value:"Applicazioni GTK 3",id:"applicazioni-gtk-3",level:2}],s={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configurazione"},"Configurazione"),(0,n.kt)("h2",{id:"applicazioni-di-libadwaita"},"Applicazioni di Libadwaita"),(0,n.kt)("p",null,"Non \xe8 richiesta alcuna configurazione aggiuntiva per le applicazioni native di Libadwaita."),(0,n.kt)("p",null,"Per le applicazioni Flatpak Libadwaita \xe8 necessario sovrascrivere i loro permessi:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Esegui ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo flatpak override --filesystem=xdg-config/gtk-4.0")," o"),(0,n.kt)("li",{parentName:"ul"},"Usa ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," e aggiungi ",(0,n.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-4.0")," a ",(0,n.kt)("strong",{parentName:"li"},"Altri file")," nella sezione ",(0,n.kt)("strong",{parentName:"li"},"Filesystem")," di ",(0,n.kt)("strong",{parentName:"li"},"Tutte le Applicazioni"))),(0,n.kt)("h2",{id:"applicazioni-vanilla-gtk-4"},"Applicazioni Vanilla GTK 4"),(0,n.kt)("p",null,"Usa ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md"},"questa guida")," per le applicazioni GTK 4 del tema vaniglia."),(0,n.kt)("h2",{id:"applicazioni-gtk-3"},"Applicazioni GTK 3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Installa e applica il tema ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/lassekongo83/adw-gtk3#readme"},"adw-gtk3")," (non dimenticare di installare il pacchetto Flatpak!)"),(0,n.kt)("li",{parentName:"ul"},"Per le applicazioni Flatpak, \xe8 necessario sovrascrivere i loro permessi:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Esegui ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo flatpak override --filesystem=xdg-config/gtk-3.0")," o"),(0,n.kt)("li",{parentName:"ul"},"Usa ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," e aggiungi ",(0,n.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-3.0")," a ",(0,n.kt)("strong",{parentName:"li"},"Altri file")," nella sezione ",(0,n.kt)("strong",{parentName:"li"},"Filesystem")," di ",(0,n.kt)("strong",{parentName:"li"},"Tutte le Applicazioni"))))))}u.isMDXComponent=!0}}]);