"use strict";(self.webpackChunkadw_customizer_team_github_io=self.webpackChunkadw_customizer_team_github_io||[]).push([[278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},l="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",o={unversionedId:"install",id:"install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"Flatpak",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/install.md",sourceDirName:".",slug:"/install",permalink:"/ru/docs/install",draft:!1,editUrl:"https://github.com/GradienceTeam/GradienceTeam.github.io/tree/main/docs/docs/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",permalink:"/ru/docs/setup"}},c={},p=[{value:"Flatpak",id:"flatpak",level:2},{value:"Flathub",id:"flathub",level:3},{value:"\u0418\u0437 Github Actions",id:"\u0438\u0437-github-actions",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f <code>flatpak-builder</code>",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-flatpak-builder",level:3},{value:"\u0418\u0437 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0430",id:"\u0438\u0437-\u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0430",level:2},{value:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:3},{value:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 (\u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0439 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438)",id:"\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0434\u043b\u044f-\u0446\u0435\u043b\u0435\u0439-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f-\u0438-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438",level:3},{value:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435",id:"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,a.kt)("h2",{id:"flatpak"},"Flatpak"),(0,a.kt)("h3",{id:"flathub"},"Flathub"),(0,a.kt)("p",null,":::\u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e"),(0,a.kt)("p",null,"\u0415\u0449\u0451 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e"),(0,a.kt)("p",null,":::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flatpak install com.github.GradienceTeam.Gradience\n")),(0,a.kt)("h3",{id:"\u0438\u0437-github-actions"},"\u0418\u0437 Github Actions"),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml"},(0,a.kt)("inlineCode",{parentName:"a"},"flatpak.yml"))," \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u0431\u043e\u0440\u043a\u0438 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0441\u0431\u043e\u0440\u043a\u0443. \u041f\u0440\u043e\u043a\u0440\u0443\u0442\u0438\u0442\u0435 \u0434\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0410\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u044b, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435."),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-flatpak-builder"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("inlineCode",{parentName:"h3"},"flatpak-builder")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b"),(0,a.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience")),(0,a.kt)("li",{parentName:"ol"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 Flatpak ",(0,a.kt)("inlineCode",{parentName:"li"},"gnome-nightly")," ",(0,a.kt)("inlineCode",{parentName:"li"},"flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo")),(0,a.kt)("li",{parentName:"ol"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"master")," \u0432\u0435\u0440\u0441\u0438\u044e GNOME SDK: ",(0,a.kt)("inlineCode",{parentName:"li"},"flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master")),(0,a.kt)("li",{parentName:"ol"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json"))),(0,a.kt)("p",null,"\u0418\u043b\u0438 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e GNOME Builder, \u0437\u0430\u0442\u0435\u043c \u0441\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0433\u043e."),(0,a.kt)("h2",{id:"\u0438\u0437-\u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0430"},"\u0418\u0437 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0430"),(0,a.kt)("h3",{id:"\u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir --prefix=/usr/local\nsudo ninja -C builddir install\n")),(0,a.kt)("h3",{id:"\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0434\u043b\u044f-\u0446\u0435\u043b\u0435\u0439-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f-\u0438-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438"},"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 (\u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0439 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'git clone https://github.com/GradienceTeam/Gradience.git\ncd Gradience\nmeson builddir\nmeson configure builddir -Dprefix="$(pwd)/builddir/testdir"\nninja -C builddir install\nninja -C builddir run\n')),(0,a.kt)("p",null,":::\u0437\u0430\u043c\u0435\u0442\u043a\u0430"),(0,a.kt)("p",null,"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"local.sh")," \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0439 \u043f\u0435\u0440\u0435\u0441\u0431\u043e\u0440\u043a\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043e\u043a."),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/docs/setup"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c")," \u0441\u0432\u043e\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0430 \u0437\u0430\u0442\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c Gradience."))}d.isMDXComponent=!0}}]);