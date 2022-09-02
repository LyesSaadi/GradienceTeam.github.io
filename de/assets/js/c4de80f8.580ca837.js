"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},l="Installation",o={unversionedId:"install",id:"install",title:"Installation",description:"Flatpak",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/de/docs/install",draft:!1,editUrl:"https://github.com/GradienceTeam/GradienceTeam.github.io/tree/main/docs/docs/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Setup",permalink:"/de/docs/setup"}},s={},c=[{value:"Flatpak",id:"flatpak",level:2},{value:"Flathub",id:"flathub",level:3},{value:"From Github Actions",id:"from-github-actions",level:3},{value:"Using <code>flatpak-builder</code>",id:"using-flatpak-builder",level:3},{value:"From source",id:"from-source",level:2},{value:"Global installation",id:"global-installation",level:3},{value:"Local installation (for testing and development purposes)",id:"local-installation-for-testing-and-development-purposes",level:3},{value:"Next",id:"next",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("h2",{id:"flatpak"},"Flatpak"),(0,i.kt)("h3",{id:"flathub"},"Flathub"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Not available yet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak install com.github.GradienceTeam.Gradience\n")),(0,i.kt)("h3",{id:"from-github-actions"},"From Github Actions"),(0,i.kt)("p",null,"Go on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," workflow page, and click on the latest build. Scroll to the Artifacts section, download and install."),(0,i.kt)("h3",{id:"using-flatpak-builder"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Terminal"),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience")),(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," Flatpak repository ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo")),(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," version of GNOME SDK: ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json"))),(0,i.kt)("p",null,"Alternatively, open the project with GNOME Builder, then build and run it."),(0,i.kt)("h2",{id:"from-source"},"From source"),(0,i.kt)("h3",{id:"global-installation"},"Global installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/local\nsudo ninja -C builddir install\n")),(0,i.kt)("h3",{id:"local-installation-for-testing-and-development-purposes"},"Local installation (for testing and development purposes)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir\nmeson configure builddir -Dprefix="$(pwd)/builddir/testdir"\nninja -C builddir install\nninja -C builddir run\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"During testing and developement, as a convenience, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"local.sh")," script to quickly rebuild local builds.")),(0,i.kt)("h2",{id:"next"},"Next"),(0,i.kt)("p",null,"Now, you can ",(0,i.kt)("a",{parentName:"p",href:"/docs/setup"},"setup")," your system and after, you can run Gradience."))}p.isMDXComponent=!0}}]);