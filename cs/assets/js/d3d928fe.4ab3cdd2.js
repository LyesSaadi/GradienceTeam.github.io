"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[848],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=l,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(4137));const i={sidebar_position:1},r="Mont\xe1\u017e",o={unversionedId:"install",id:"install",title:"Mont\xe1\u017e",description:"Flat\xe1ln\xed",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/cs/docs/install",draft:!1,editUrl:"https://atrophaneura.crowdin.com/gradience/cs",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Nastaven\xed v\xfdvojov\xe9ho prost\u0159ed\xed",permalink:"/cs/docs/dev/setup"},next:{title:"Plugins",permalink:"/cs/docs/category/plugins"}},p={},s=[{value:"Flat\xe1ln\xed",id:"flat\xe1ln\xed",level:2},{value:"Flathub",id:"flathub",level:3},{value:"Z akce Githubu",id:"z-akce-githubu",level:3},{value:"Pou\u017eit\xed <code>flatpak-builder</code>",id:"pou\u017eit\xed-flatpak-builder",level:3},{value:"Stavba a instalace",id:"stavba-a-instalace",level:2},{value:"Flat\xe1ln\xed",id:"flat\xe1ln\xed-1",level:3},{value:"COPR",id:"copr",level:3},{value:"Debian (a deriv\xe1ty)",id:"debian-a-deriv\xe1ty",level:3},{value:"AUR",id:"aur",level:3},{value:"Budova ze zdroje",id:"budova-ze-zdroje",level:3},{value:"Po\u017eadavky",id:"po\u017eadavky",level:4},{value:"Glob\xe1ln\xed instalace",id:"glob\xe1ln\xed-instalace",level:3},{value:"M\xedstn\xed stavba (pro \xfa\u010dely testov\xe1n\xed a v\xfdvoje)",id:"m\xedstn\xed-stavba-pro-\xfa\u010dely-testov\xe1n\xed-a-v\xfdvoje",level:3},{value:"Dal\u0161\xed",id:"dal\u0161\xed",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mont\xe1\u017e"},"Mont\xe1\u017e"),(0,l.kt)("h2",{id:"flat\xe1ln\xed"},"Flat\xe1ln\xed"),(0,l.kt)("h3",{id:"flathub"},"Flathub"),(0,l.kt)("a",{href:"https://flathub.org/apps/details/com.github.GradienceTeam.Gradience"},(0,l.kt)("img",{width:"200",alt:"St\xe1hnout na Flathub",src:"https://flathub.org/assets/badges/flathub-badge-i-en.svg"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak nainstalujte com.github.GradienceTeam.Gradience\n")),(0,l.kt)("h3",{id:"z-akce-githubu"},"Z akce Githubu"),(0,l.kt)("p",null,"P\u0159ejd\u011bte na str\xe1nku ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," pracovn\xedho postupu a klikn\u011bte na nejnov\u011bj\u0161\xed sestaven\xed. P\u0159ej\xedt do sekce Artefakty, stahov\xe1n\xed a instalace."),(0,l.kt)("h3",{id:"pou\u017eit\xed-flatpak-builder"},"Pou\u017eit\xed ",(0,l.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Otev\u0159\xedt termin\xe1l"),(0,l.kt)("li",{parentName:"ol"},"Spustit ",(0,l.kt)("inlineCode",{parentName:"li"},"git klonov\xe1n\xed https://github.com/GradienceTeam/Gradience.git && cd Gradience")),(0,l.kt)("li",{parentName:"ol"},"P\u0159idejte ",(0,l.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," Flatpak repozit\xe1\u0159 ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo")),(0,l.kt)("li",{parentName:"ol"},"Nainstalujte ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," verzi GNOME SDK: ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,l.kt)("li",{parentName:"ol"},"Spustit ",(0,l.kt)("inlineCode",{parentName:"li"},"flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json"))),(0,l.kt)("p",null,"P\u0159\xedpadn\u011b otev\u0159ete projekt s stavitelem GNOME a pot\xe9 ho vytvo\u0159te a spust\xedte."),(0,l.kt)("h2",{id:"stavba-a-instalace"},"Stavba a instalace"),(0,l.kt)("p",null,"Gradience lze nainstalovat pomoc\xed v\xedce metod."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flathub (doporu\u010deno)"),(0,l.kt)("li",{parentName:"ul"},"Jako RPM bal\xed\u010dek"),(0,l.kt)("li",{parentName:"ul"},"Jako DEB bal\xed\u010dek (je\u0161t\u011b nen\xed k dispozici)"),(0,l.kt)("li",{parentName:"ul"},"Z AUR")),(0,l.kt)("h3",{id:"flat\xe1ln\xed-1"},"Flat\xe1ln\xed"),(0,l.kt)("p",null,"Gradience je k dispozici na Flathubu. M\u016f\u017eete ji nainstalovat pomoc\xed n\xe1sleduj\xedc\xedho p\u0159\xedkazu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"flatpak nainstalujte flathub com.github.GradienceTeam.Gradience\n")),(0,l.kt)("h3",{id:"copr"},"COPR"),(0,l.kt)("p",null,"Gradience je k dispozici na COPR. M\u016f\u017eete ji nainstalovat pomoc\xed n\xe1sleduj\xedc\xedho p\u0159\xedkazu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dnf copr povolit lyessaadi/gradience\ndnf instalace\n")),(0,l.kt)("h3",{id:"debian-a-deriv\xe1ty"},"Debian (a deriv\xe1ty)"),(0,l.kt)("p",null,"Je\u0161t\u011b nen\xed k dispozici. Pokud chcete, po\u0161lete PR."),(0,l.kt)("h3",{id:"aur"},"AUR"),(0,l.kt)("p",null,"Gradience je k dispozici na AUR. M\u016f\u017eete ji nainstalovat pomoc\xed n\xe1sleduj\xedc\xedho p\u0159\xedkazu:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yay -S gradience # nebo gradience-git\n")),(0,l.kt)("h3",{id:"budova-ze-zdroje"},"Budova ze zdroje"),(0,l.kt)("h4",{id:"po\u017eadavky"},"Po\u017eadavky"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 3 ",(0,l.kt)("inlineCode",{parentName:"li"},"python")),(0,l.kt)("li",{parentName:"ul"},"PyGObject ",(0,l.kt)("inlineCode",{parentName:"li"},"python-gobject")),(0,l.kt)("li",{parentName:"ul"},"Pl\xe1n ",(0,l.kt)("a",{parentName:"li",href:"https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html"},(0,l.kt)("inlineCode",{parentName:"a"},"kompil\xe1tor pl\xe1n\u016f"))),(0,l.kt)("li",{parentName:"ul"},"GTK4 ",(0,l.kt)("inlineCode",{parentName:"li"},"gtk4")),(0,l.kt)("li",{parentName:"ul"},"libadwaita (>= 1.2.alpha) ",(0,l.kt)("inlineCode",{parentName:"li"},"libadwaita")),(0,l.kt)("li",{parentName:"ul"},"Meson ",(0,l.kt)("inlineCode",{parentName:"li"},"meson")),(0,l.kt)("li",{parentName:"ul"},"Ninja ",(0,l.kt)("inlineCode",{parentName:"li"},"ninja-build"))),(0,l.kt)("p",null,"Nainstalujte po\u017eadovan\xe9 Python knihovny:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pip install -r requires.txt\n")),(0,l.kt)("h3",{id:"glob\xe1ln\xed-instalace"},"Glob\xe1ln\xed instalace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git klonovat https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/local\nsudo ninja -C builddir instalace\n")),(0,l.kt)("h3",{id:"m\xedstn\xed-stavba-pro-\xfa\u010dely-testov\xe1n\xed-a-v\xfdvoje"},"M\xedstn\xed stavba (pro \xfa\u010dely testov\xe1n\xed a v\xfdvoje)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'klonovat https://github.com/GradienceTeam/Gradience.\ncd Gradience\nmeson builddir\nmeson configure builddir -Dprefix="$(pwd)/builddir"\nninja -C builddir nainstalovat\nninja -C builddir\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"B\u011bhem testov\xe1n\xed a v\xfdvoje m\u016f\u017eete jako pohodl\xed pou\u017e\xedt skript ",(0,l.kt)("inlineCode",{parentName:"p"},"local.sh")," k rychl\xe9 p\u0159estavb\u011b m\xedstn\xedch budov.")),(0,l.kt)("h2",{id:"dal\u0161\xed"},"Dal\u0161\xed"),(0,l.kt)("p",null,"Nyn\xed m\u016f\u017eete ",(0,l.kt)("a",{parentName:"p",href:"/docs/setup"},"nastavit")," v\xe1\u0161 syst\xe9m a pot\xe9 m\u016f\u017eete spustit Gradience."))}u.isMDXComponent=!0}}]);