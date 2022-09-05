"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[805],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,m=c["".concat(o,".").concat(g)]||c[g]||d[g]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},l="Setup",u={unversionedId:"setup",id:"setup",title:"Setup",description:"Libadwaita-Anwendungen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/setup.md",sourceDirName:".",slug:"/setup",permalink:"/de/docs/setup",draft:!1,editUrl:"https://github.com/GradienceTeam/GradienceTeam.github.io/tree/main/docs/docs/setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup a development environment",permalink:"/de/docs/dev/setup"}},o={},s=[{value:"Libadwaita-Anwendungen",id:"libadwaita-anwendungen",level:2},{value:"Vanilla GTK 4 Anwendungen",id:"vanilla-gtk-4-anwendungen",level:2},{value:"GTK 3 Anwendungen",id:"gtk-3-anwendungen",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("h2",{id:"libadwaita-anwendungen"},"Libadwaita-Anwendungen"),(0,a.kt)("p",null,"F\xfcr native Libadwaita-Anwendungen ist keine zus\xe4tzliche Einrichtung erforderlich."),(0,a.kt)("p",null,"F\xfcr Flatpak Libadwaita-Anwendungen m\xfcssen Sie ihre Berechtigungen \xfcberschreiben:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo flatpak \xfcberschreiben --filesystem=xdg-config/gtk-4.0")," oder"),(0,a.kt)("li",{parentName:"ul"},"Verwende ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," und f\xfcge ",(0,a.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-4.0")," zu ",(0,a.kt)("strong",{parentName:"li"},"Weitere Dateien")," im ",(0,a.kt)("strong",{parentName:"li"},"Dateisystem")," Abschnitt ",(0,a.kt)("strong",{parentName:"li"},"Alle Anwendungen")," hinzu")),(0,a.kt)("h2",{id:"vanilla-gtk-4-anwendungen"},"Vanilla GTK 4 Anwendungen"),(0,a.kt)("p",null,"Verwende ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md"},"diese Anleitung")," um Vanilla GTK 4 Anwendungen zu entwerfen."),(0,a.kt)("h2",{id:"gtk-3-anwendungen"},"GTK 3 Anwendungen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Installieren und wenden Sie das ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lassekongo83/adw-gtk3#readme"},"adw-gtk3")," Theme an (vergessen Sie nicht, das Flatpak Paket zu installieren!)"),(0,a.kt)("li",{parentName:"ul"},"F\xfcr Flatpak Anwendungen m\xfcssen Sie ihre Berechtigungen \xfcberschreiben:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo flatpak \xfcberschreiben --filesystem=xdg-config/gtk-3.0")," oder"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tchx84/Flatseal"},"Flatseal")," verwenden und ",(0,a.kt)("inlineCode",{parentName:"li"},"xdg-config/gtk-3.0")," zu ",(0,a.kt)("strong",{parentName:"li"},"Weitere Dateien")," im ",(0,a.kt)("strong",{parentName:"li"},"Dateisystem")," Abschnitt ",(0,a.kt)("strong",{parentName:"li"},"Alle Anwendungen")," hinzuf\xfcgen")))))}d.isMDXComponent=!0}}]);