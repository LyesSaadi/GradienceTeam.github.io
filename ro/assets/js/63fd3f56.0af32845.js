"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[386],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const i={sidebar_position:1},l="Instalare",o={unversionedId:"install",id:"install",title:"Instalare",description:"Flatpak",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/ro/docs/install",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/ro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Procesul de lansare",permalink:"/ro/docs/dev/release"}},u={},c=[{value:"Flatpak",id:"flatpak",level:2},{value:"Flathub",id:"flathub",level:3},{value:"Din ac\u021biuni Github",id:"din-ac\u021biuni-github",level:3},{value:"Folosind <code>flatpak-builder</code>",id:"folosind-flatpak-builder",level:3},{value:"De la surs\u0103",id:"de-la-surs\u0103",level:2},{value:"Instalare global\u0103",id:"instalare-global\u0103",level:3},{value:"Instalare local\u0103 (\xeen scopuri de testare \u0219i dezvoltare)",id:"instalare-local\u0103-\xeen-scopuri-de-testare-\u0219i-dezvoltare",level:3},{value:"Urm\u0103toarea",id:"urm\u0103toarea",level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalare"},"Instalare"),(0,r.kt)("h2",{id:"flatpak"},"Flatpak"),(0,r.kt)("h3",{id:"flathub"},"Flathub"),(0,r.kt)("p",null,":::pruden\u021b\u0103"),(0,r.kt)("p",null,"Nu este \xeenc\u0103 disponibil"),(0,r.kt)("p",null,":::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak install com.github.GradienceTeam.Gradience\n")),(0,r.kt)("h3",{id:"din-ac\u021biuni-github"},"Din ac\u021biuni Github"),(0,r.kt)("p",null,"Merge\u021bi pe pagina de flux de lucru ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,r.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," \u0219i face\u021bi clic pe ultima construc\u021bie. Deruleaz\u0103 la sec\u021biunea Artefact \u0219i instaleaz\u0103."),(0,r.kt)("h3",{id:"folosind-flatpak-builder"},"Folosind ",(0,r.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deschide Terminalul"),(0,r.kt)("li",{parentName:"ol"},"Ruleaz\u0103 ",(0,r.kt)("inlineCode",{parentName:"li"},"clona git https://github.com/GradienceTeam/Gradience.git && cd Gradience")),(0,r.kt)("li",{parentName:"ol"},"Adaug\u0103 ",(0,r.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," Repo-ul Flatpak ",(0,r.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo")),(0,r.kt)("li",{parentName:"ol"},"Instala\u021bi versiunea ",(0,r.kt)("inlineCode",{parentName:"li"},"master")," a GNOME SDK: ",(0,r.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,r.kt)("li",{parentName:"ol"},"Executa\u021bi ",(0,r.kt)("inlineCode",{parentName:"li"},"flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json"))),(0,r.kt)("p",null,"Alternativ, deschide\u021bi proiectul cu GNOME Builder, apoi construi\u021bi-l \u0219i executa\u021bi-l."),(0,r.kt)("h2",{id:"de-la-surs\u0103"},"De la surs\u0103"),(0,r.kt)("h3",{id:"instalare-global\u0103"},"Instalare global\u0103"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/local\nsudo ninja -C builddir install\n")),(0,r.kt)("h3",{id:"instalare-local\u0103-\xeen-scopuri-de-testare-\u0219i-dezvoltare"},"Instalare local\u0103 (\xeen scopuri de testare \u0219i dezvoltare)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'git clone https://github.com/GradienceTeam/Gradience.\ncd Gradience\nmeson builddir\nmeson configure builddir -Dprefix="$(pwd)/builddir/testdir"\nninja -C builddir install\nninja -C builddir run\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\xcen timpul test\u0103rii \u0219i dezvolt\u0103rii, ca o convenien\u021b\u0103, pute\u021bi utiliza script-ul ",(0,r.kt)("inlineCode",{parentName:"p"},"local.sh")," pentru a reconstrui rapid construc\u021bii locale.")),(0,r.kt)("h2",{id:"urm\u0103toarea"},"Urm\u0103toarea"),(0,r.kt)("p",null,"Acum, po\u021bi ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup"},"configura")," sistemul t\u0103u \u0219i dup\u0103, po\u021bi rula Gradience."))}d.isMDXComponent=!0}}]);