"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[513],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=l,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(4137));const i={sidebar_position:1},r="Installatie",o={unversionedId:"install",id:"install",title:"Installatie",description:"Flatpak",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/nl/docs/install",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/nl",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Proces vrijgeven",permalink:"/nl/docs/dev/release"}},s={},u=[{value:"Flatpak",id:"flatpak",level:2},{value:"Flathub",id:"flathub",level:3},{value:"Van Github acties",id:"van-github-acties",level:3},{value:"<code>flatpak-builder</code> gebruiken",id:"flatpak-builder-gebruiken",level:3},{value:"Uit bron",id:"uit-bron",level:2},{value:"Globale installatie",id:"globale-installatie",level:3},{value:"Lokale installatie (voor test- en ontwikkelingsdoeleinden)",id:"lokale-installatie-voor-test--en-ontwikkelingsdoeleinden",level:3},{value:"Volgende",id:"volgende",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installatie"},"Installatie"),(0,l.kt)("h2",{id:"flatpak"},"Flatpak"),(0,l.kt)("h3",{id:"flathub"},"Flathub"),(0,l.kt)("p",null,":::voorzichtigheid"),(0,l.kt)("p",null,"Nog niet beschikbaar"),(0,l.kt)("p",null,":::"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak install com.github.GradienceTeam.Gradience\n")),(0,l.kt)("h3",{id:"van-github-acties"},"Van Github acties"),(0,l.kt)("p",null,"Ga naar de ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," workflowpagina en klik op de laatste build. Scroll naar de Artefact-sectie, download en installeer."),(0,l.kt)("h3",{id:"flatpak-builder-gebruiken"},(0,l.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")," gebruiken"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open terminal"),(0,l.kt)("li",{parentName:"ol"},"Start ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience")),(0,l.kt)("li",{parentName:"ol"},"Voeg de ",(0,l.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," Flatpak repository ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpako")),(0,l.kt)("li",{parentName:"ol"},"Installeer de ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," versie van GNOME SDK: ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,l.kt)("li",{parentName:"ol"},"Voer ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak-builder --user --user --force-clean repo/ com.github.GradienceTeam.Gradience.json")," uit")),(0,l.kt)("p",null,"Als alternatief kan je het project openen met GNOME Bouwer, bouw het vervolgens en voer het uit."),(0,l.kt)("h2",{id:"uit-bron"},"Uit bron"),(0,l.kt)("h3",{id:"globale-installatie"},"Globale installatie"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/loc\nsudo ninja -C builddir install\n")),(0,l.kt)("h3",{id:"lokale-installatie-voor-test--en-ontwikkelingsdoeleinden"},"Lokale installatie (voor test- en ontwikkelingsdoeleinden)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'git kloon https://github.com/GradienceTeam/Gradience. it\ncd Gradience\nmeson builddir\nmeson configureer builddir -Dprefix="$(pwd)/builddir/testdir"\nninja -C builddir install\nninja -C builddir run\n')),(0,l.kt)("p",null,"::note"),(0,l.kt)("p",null,"Tijdens het testen en ontwikkelen kun je als gemak het ",(0,l.kt)("inlineCode",{parentName:"p"},"local.sh")," script gebruiken om snel lokale versies opnieuw op te bouwen."),(0,l.kt)("p",null,":::"),(0,l.kt)("h2",{id:"volgende"},"Volgende"),(0,l.kt)("p",null,"Nu kunt u ",(0,l.kt)("a",{parentName:"p",href:"/docs/setup"},"uw systeem")," instellen en daarna, u kunt Gradience uitvoeren."))}c.isMDXComponent=!0}}]);