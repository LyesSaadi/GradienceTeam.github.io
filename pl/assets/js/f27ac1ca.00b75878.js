"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[495],{4137:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(t),m=i,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return t?n.createElement(k,r(r({ref:a},u),{},{components:t})):n.createElement(k,r({ref:a},u))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6349:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(7462),i=(t(7294),t(4137));const l={sidebar_position:1},r="Instalacja",o={unversionedId:"install",id:"install",title:"Instalacja",description:"Flatpak",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/pl/docs/install",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/pl",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ustaw \u015brodowisko programistyczne",permalink:"/pl/docs/dev/setup"},next:{title:"Plugins",permalink:"/pl/docs/category/plugins"}},p={},d=[{value:"Flatpak",id:"flatpak",level:2},{value:"Folia",id:"folia",level:3},{value:"Z akcji na Githubie",id:"z-akcji-na-githubie",level:3},{value:"U\u017cywanie <code>flatpak-builder</code>",id:"u\u017cywanie-flatpak-builder",level:3},{value:"Budowanie i instalacja",id:"budowanie-i-instalacja",level:2},{value:"Flatpak",id:"flatpak-1",level:3},{value:"COPR",id:"copr",level:3},{value:"Debian (oraz pochodne)",id:"debian-oraz-pochodne",level:3},{value:"AUR",id:"aur",level:3},{value:"Budynek ze \u017ar\xf3d\u0142a",id:"budynek-ze-\u017ar\xf3d\u0142a",level:3},{value:"Wymagania",id:"wymagania",level:4},{value:"Instalacja globalna",id:"instalacja-globalna",level:3},{value:"Budowa lokalna (do cel\xf3w testowania i rozwoju)",id:"budowa-lokalna-do-cel\xf3w-testowania-i-rozwoju",level:3},{value:"Nast\u0119pny",id:"nast\u0119pny",level:2}],u={toc:d};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"instalacja"},"Instalacja"),(0,i.kt)("h2",{id:"flatpak"},"Flatpak"),(0,i.kt)("h3",{id:"folia"},"Folia"),(0,i.kt)("a",{href:"https://flathub.org/apps/details/com.github.GradienceTeam.Gradience"},(0,i.kt)("img",{width:"200",alt:"Pobierz na Flathub",src:"https://flathub.org/assets/badges/flathub-badge-i-en.svg"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak install com.github.GradienceTeam.Gradience\n")),(0,i.kt)("h3",{id:"z-akcji-na-githubie"},"Z akcji na Githubie"),(0,i.kt)("p",null,"Przejd\u017a na stron\u0119 przep\u0142ywu pracy ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," i kliknij na najnowsz\u0105 wersj\u0119 Przewi\u0144 do sekcji Artefakty, pobierz i zainstaluj."),(0,i.kt)("h3",{id:"u\u017cywanie-flatpak-builder"},"U\u017cywanie ",(0,i.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Otw\xf3rz terminal"),(0,i.kt)("li",{parentName:"ol"},"Uruchom ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience")),(0,i.kt)("li",{parentName:"ol"},"Dodaj ",(0,i.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," Repozytorium Flatpak ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo")),(0,i.kt)("li",{parentName:"ol"},"Zainstaluj ",(0,i.kt)("inlineCode",{parentName:"li"},"wersj\u0119 g\u0142\xf3wn\u0105")," GNOME SDK: ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,i.kt)("li",{parentName:"ol"},"Uruchom ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json"))),(0,i.kt)("p",null,"Alternatywnie, otw\xf3rz projekt z GNOME Builder, a nast\u0119pnie zbuduj i uruchom go."),(0,i.kt)("h2",{id:"budowanie-i-instalacja"},"Budowanie i instalacja"),(0,i.kt)("p",null,"Gradiacj\u0119 mo\u017cna zainstalowa\u0107 za pomoc\u0105 wielu metod."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flara (zalecane)"),(0,i.kt)("li",{parentName:"ul"},"Jako pakiet RPM"),(0,i.kt)("li",{parentName:"ul"},"Jako pakiet DEB jeszcze niedost\u0119pny)"),(0,i.kt)("li",{parentName:"ul"},"Z AUR")),(0,i.kt)("h3",{id:"flatpak-1"},"Flatpak"),(0,i.kt)("p",null,"Gradiencja jest dost\u0119pna na Flathubie. Mo\u017cesz go zainstalowa\u0107 za pomoc\u0105 nast\u0119puj\u0105cej komendy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"flatpak zainstaluj flathub com.github.GradienceTeam.Gradience\n")),(0,i.kt)("h3",{id:"copr"},"COPR"),(0,i.kt)("p",null,"Gradiencja jest dost\u0119pna na COPR. Mo\u017cesz go zainstalowa\u0107 za pomoc\u0105 nast\u0119puj\u0105cej komendy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dnf copr enable lyessaadi/gradience\ndnf install gradience\n")),(0,i.kt)("h3",{id:"debian-oraz-pochodne"},"Debian (oraz pochodne)"),(0,i.kt)("p",null,"Jeszcze niedost\u0119pny. Je\u015bli chcesz, zg\u0142o\u015b PR."),(0,i.kt)("h3",{id:"aur"},"AUR"),(0,i.kt)("p",null,"Gradiencja jest dost\u0119pna w AUR. Mo\u017cesz go zainstalowa\u0107 za pomoc\u0105 nast\u0119puj\u0105cej komendy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yay -S gradience # lub gradience-git\n")),(0,i.kt)("h3",{id:"budynek-ze-\u017ar\xf3d\u0142a"},"Budynek ze \u017ar\xf3d\u0142a"),(0,i.kt)("h4",{id:"wymagania"},"Wymagania"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python 3 ",(0,i.kt)("inlineCode",{parentName:"li"},"python")),(0,i.kt)("li",{parentName:"ul"},"PyGObject ",(0,i.kt)("inlineCode",{parentName:"li"},"python-gobject")),(0,i.kt)("li",{parentName:"ul"},"Schemat ",(0,i.kt)("a",{parentName:"li",href:"https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html"},(0,i.kt)("inlineCode",{parentName:"a"},"schemat-kompilator"))),(0,i.kt)("li",{parentName:"ul"},"GTK4 ",(0,i.kt)("inlineCode",{parentName:"li"},"gtk4")),(0,i.kt)("li",{parentName:"ul"},"libadwaita (>= 1.2.alpha) ",(0,i.kt)("inlineCode",{parentName:"li"},"libadwaita")),(0,i.kt)("li",{parentName:"ul"},"Meson ",(0,i.kt)("inlineCode",{parentName:"li"},"meson")),(0,i.kt)("li",{parentName:"ul"},"Ninja ",(0,i.kt)("inlineCode",{parentName:"li"},"ninja-build"))),(0,i.kt)("p",null,"Instalacja wymaganych bibliotek Pythona:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pip install -r requirements.txt\n")),(0,i.kt)("h3",{id:"instalacja-globalna"},"Instalacja globalna"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Klon git https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/local\nsudo ninja -C builddir\n")),(0,i.kt)("h3",{id:"budowa-lokalna-do-cel\xf3w-testowania-i-rozwoju"},"Budowa lokalna (do cel\xf3w testowania i rozwoju)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'Klon git https://github.com/GradienceTeam/Gradience.\ncd Gradience\nmeson builddir\nconfigure builddir -Dprefix="$(pwd)/builddir"\nninja -C builddir install\nninja -C builddir run\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Podczas testowania i rozwoju mo\u017cesz u\u017cy\u0107 skryptu ",(0,i.kt)("inlineCode",{parentName:"p"},"local.sh")," , aby szybko odbudowa\u0107 lokalne kompilacje.")),(0,i.kt)("h2",{id:"nast\u0119pny"},"Nast\u0119pny"),(0,i.kt)("p",null,"Teraz mo\u017cesz ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup"},"skonfigurowa\u0107")," sw\xf3j system, a nast\u0119pnie uruchomi\u0107 Gradience."))}c.isMDXComponent=!0}}]);