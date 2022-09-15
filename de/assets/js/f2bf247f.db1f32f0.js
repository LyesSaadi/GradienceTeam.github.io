"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[412],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),l=(n(7294),n(4137));const r={sidebar_position:1},i="Installation",o={unversionedId:"install",id:"install",title:"Installation",description:"Flatpak",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/de/docs/install",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/de",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Plugins",permalink:"/de/docs/category/plugins"}},u={},c=[{value:"Flatpak",id:"flatpak",level:2},{value:"Flathu",id:"flathu",level:3},{value:"Von Github Aktionen",id:"von-github-aktionen",level:3},{value:"Verwende <code>flatpak-builder</code>",id:"verwende-flatpak-builder",level:3},{value:"Von Quelle",id:"von-quelle",level:2},{value:"Globale Installation",id:"globale-installation",level:3},{value:"Lokale Installation (f\xfcr Testzwecke und Entwicklung)",id:"lokale-installation-f\xfcr-testzwecke-und-entwicklung",level:3},{value:"N\xe4chste",id:"n\xe4chste",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"flatpak"},"Flatpak"),(0,l.kt)("h3",{id:"flathu"},"Flathu"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Noch nicht verf\xfcgbar")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak Installation com.github.GradienceTeam.Gradience\n")),(0,l.kt)("h3",{id:"von-github-aktionen"},"Von Github Aktionen"),(0,l.kt)("p",null,"Gehen Sie auf die ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," Workflow-Seite und klicken Sie auf die neueste Build. Scrollen Sie zum Bereich Artefakte, downloaden und installieren."),(0,l.kt)("h3",{id:"verwende-flatpak-builder"},"Verwende ",(0,l.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Terminal \xf6ffnen"),(0,l.kt)("li",{parentName:"ol"},"git clone ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/GradienceTeam/Gradience.git"},"https://github.com/GradienceTeam/Gradience.git")," && cd Gradience ausfhren"),(0,l.kt)("li",{parentName:"ol"},"F\xfcge ",(0,l.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," Flatpak Repository ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo")," hinzu"),(0,l.kt)("li",{parentName:"ol"},"Installieren Sie die ",(0,l.kt)("inlineCode",{parentName:"li"},"Master")," Version des GNOME SDK: ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json")," ausf\xfchren")),(0,l.kt)("p",null,"Alternativ k\xf6nnen Sie das Projekt mit dem GNOME-Builder \xf6ffnen und dann erstellen und ausf\xfchren."),(0,l.kt)("h2",{id:"von-quelle"},"Von Quelle"),(0,l.kt)("h3",{id:"globale-installation"},"Globale Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/local\nsudo ninja -C builddir install\n")),(0,l.kt)("h3",{id:"lokale-installation-f\xfcr-testzwecke-und-entwicklung"},"Lokale Installation (f\xfcr Testzwecke und Entwicklung)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience ausfhren\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"W\xe4hrend des Tests und der Entwicklung k\xf6nnen Sie das ",(0,l.kt)("inlineCode",{parentName:"p"},"local.sh")," Skript verwenden, um lokale Builds schnell neu aufzubauen.")),(0,l.kt)("h2",{id:"n\xe4chste"},"N\xe4chste"),(0,l.kt)("p",null,"Now, you can ",(0,l.kt)("a",{parentName:"p",href:"/docs/setup"},"setup")," your system and after, you can run Gradience."))}s.isMDXComponent=!0}}]);