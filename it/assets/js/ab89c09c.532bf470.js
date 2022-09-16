"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[338],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(4137));const l={sidebar_position:1},r="Installazione",o={unversionedId:"install",id:"install",title:"Installazione",description:"Flatpak",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/it/docs/install",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/it",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Plugins",permalink:"/it/docs/category/plugins"}},p={},s=[{value:"Flatpak",id:"flatpak",level:2},{value:"Flathub",id:"flathub",level:3},{value:"Dalle Azioni Di Github",id:"dalle-azioni-di-github",level:3},{value:"Utilizzando <code>flatpak-builder</code>",id:"utilizzando-flatpak-builder",level:3},{value:"Dalla sorgente",id:"dalla-sorgente",level:2},{value:"Installazione globale",id:"installazione-globale",level:3},{value:"Installazione locale (per prove e sviluppo)",id:"installazione-locale-per-prove-e-sviluppo",level:3},{value:"Successivo",id:"successivo",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installazione"},"Installazione"),(0,i.kt)("h2",{id:"flatpak"},"Flatpak"),(0,i.kt)("h3",{id:"flathub"},"Flathub"),(0,i.kt)("p",null,":::cautela"),(0,i.kt)("p",null,"Non ancora disponibile"),(0,i.kt)("p",null,":::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak install com.github.GradienceTeam.Gradience\n")),(0,i.kt)("h3",{id:"dalle-azioni-di-github"},"Dalle Azioni Di Github"),(0,i.kt)("p",null,"Vai sulla pagina del flusso di lavoro ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," , e clicca sull'ultima costruzione. Scorri alla sezione Artefatti, scarica e installa."),(0,i.kt)("h3",{id:"utilizzando-flatpak-builder"},"Utilizzando ",(0,i.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Apri Terminale"),(0,i.kt)("li",{parentName:"ol"},"Esegui ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience")),(0,i.kt)("li",{parentName:"ol"},"Aggiungi il ",(0,i.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," repository Flatpak ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo")),(0,i.kt)("li",{parentName:"ol"},"Installare la versione ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," di GNOME SDK: ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,i.kt)("li",{parentName:"ol"},"Esegui ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json"))),(0,i.kt)("p",null,"In alternativa, aprire il progetto con GNOME Builder, quindi generarlo ed eseguirlo."),(0,i.kt)("h2",{id:"dalla-sorgente"},"Dalla sorgente"),(0,i.kt)("h3",{id:"installazione-globale"},"Installazione globale"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/local\nsudo ninja -C builddir install\n")),(0,i.kt)("h3",{id:"installazione-locale-per-prove-e-sviluppo"},"Installazione locale (per prove e sviluppo)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git clone https://github.com/GradienceTeam/Gradience. it\ncd Gradience\nmeson builddir\nmeson configure builddir -Dprefix="$(pwd)/builddir/testdir"\nninja -C builddir install\nninja -C builddir run\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Durante il test e lo sviluppo, come convenienza, \xe8 possibile utilizzare lo script ",(0,i.kt)("inlineCode",{parentName:"p"},"local.sh")," per ricostruire rapidamente le build locali.")),(0,i.kt)("h2",{id:"successivo"},"Successivo"),(0,i.kt)("p",null,"Ora puoi ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup"},"configurare")," il tuo sistema e dopo, puoi eseguire Gradience."))}u.isMDXComponent=!0}}]);