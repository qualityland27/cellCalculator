(function(e){function t(t){for(var r,u,a=t[0],c=t[1],s=t[2],l=0,d=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);g&&g(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8cd68e96"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=u(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var g=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"056c":function(e,t,n){e.exports=n.p+"img/vCell3.ccfe540e.png"},"05d9":function(e,t,n){"use strict";n("b6e5")},1100:function(e,t,n){e.exports=n.p+"img/background.bd20d894.jpg"},"2f5e":function(e,t,n){e.exports=n.p+"img/franka_logo.d0fe3380.jpg"},"31d2":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"counter-squared"},i=Object(r["e"])("sup",null,"2",-1);function u(e,t,n,u,a,c){return Object(r["q"])(),Object(r["d"])("div",o,[Object(r["g"])(Object(r["w"])(e.$store.state.counter)+" ",1),i,Object(r["g"])(" = "+Object(r["w"])(e.$store.getters.counterSquared),1)])}var a={},c=n("6b0d"),s=n.n(c);const l=s()(a,[["render",u]]);t["default"]=l},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("1100"),i=n.n(o),u=Object(r["f"])('<div class="relative"><div class="flex s"><img src="'+i.a+'"></div><div id="nav" class="absolute top-0 w-screen content-center items-center flex justify-center text-white bg-volkert-blue h-20 opacity-80"><a class="mx-2" href="https://www.volkert.net/">Home</a></div></div>',1),a=Object(r["e"])("footer",{class:"content-center items-center flex justify-center text-white bg-volkert-blue h-20 opacity-80"},[Object(r["e"])("a",{class:"mx-2",href:"https://www.volkert.net/Kontakt/Impressum/"},"Impressum")],-1);function c(e,t){var n=Object(r["u"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[u,Object(r["h"])(n),a],64)}n("05d9");var s=n("6b0d"),l=n.n(s);const g={},d=l()(g,[["render",c]]);var b=d,m=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=n("dfb2"),h=n.n(f),p=n("056c"),w=n.n(p),v=n("d60b"),x=n.n(v),j=n("df94"),O=n.n(j),S=n("2f5e"),y=n.n(S),k=n("dee5"),A=n.n(k),P={class:"home"},D=Object(r["f"])('<div class="title w-5/6 mx-auto flex justify-center"> Ein Produkt. Deine Anforderungen. </div><div class="relative flex py-5 items-center w-3/5 mx-auto flex justify-center"><div class="flex-grow border-t border-gray-900"></div><img src="'+h.a+'" width="100" class="flex-shrink mx-4"><div class="flex-grow border-t border-gray-900"></div></div><div class="sub-title w-5/6 mx-auto flex text-justify text-center"> Die V-Cell ist ein kompaktes Automatisierungsmodul. Die Robotereinheit kann für verschiedene Zwecke eingesetzt werden. So zählen Schweißen, Handling und Maschinenbestückung zu den häufigsten Anwendungsbereichen. Die V-Cell wird in der kompakten Bauform als Standardmodul angeboten. Diese zeichnet sich durch platzsparende Bauweise und einfachste Transportmöglichkeiten mit Stapler oder Hubwagen aus. Durch die hohe Flexibilität unserer Anlagen und Mitarbeiter können wir das Standardmodul an nahezu jeden Kundenwunsch anpassen. Zögern sie also nicht, Kontakt aufzunehmen. </div>',3),E={class:"w-5/6 mx-auto flex justify-center content-center mt-40"},B=Object(r["e"])("div",{class:"w-1/2 items-center justify-center mx-4"},[Object(r["e"])("img",{alt:"Vue",class:"logo bg-white",src:w.a})],-1),M={class:"w-1/2"},L={class:"price m-0"},I=Object(r["e"])("div",{class:"kleingedrucktes"},"zzgl. MwSt.",-1),_=Object(r["e"])("div",{class:"font-bold bottom-4 mt-4"},"Schweißpaket:",-1),C=Object(r["e"])("option",{value:"withoutSchweißart"},"Ohne (+0 Euro)",-1),$={value:"wig"},F={value:"mig_mag"},z=Object(r["e"])("div",{class:"font-bold bottom-4 mt-4"},"Schweißnahtsuchsystem:",-1),V=Object(r["e"])("option",{value:"without"},"Ohne (+0 Euro)",-1),H={value:"gas"},T={value:"camera"},G=Object(r["e"])("div",{class:"font-bold bottom-4 mt-4"},"Absaugung:",-1),R=Object(r["e"])("option",{value:"withoutAbsaugung"},"Ohne (+0 Euro)",-1),q={value:"einmalFilter"},K={value:"selbstreinigenderFilter"},W=Object(r["e"])("div",{class:"font-bold bottom-4 mt-4"},"Daten Logging:",-1),N=Object(r["e"])("option",{value:"withoutDatenLogging"},"Ohne (+0 Euro)",-1),U={value:"withDatenLogging"},Z=Object(r["e"])("div",{class:"font-bold bottom-4 mt-4"},"Montage und Inbetriebnahme:",-1),J=Object(r["e"])("option",{value:"withoutMontage"},"Ohne (+0 Euro)",-1),Q={value:"withMontage"},Y=Object(r["e"])("div",{class:"font-bold bottom-4 mt-4"},"Produktionsbegleitung:",-1),X=Object(r["e"])("option",{value:"withoutProduktionsbegleitung"},"Ohne (+0 Euro)",-1),ee={value:"withProduktionsbegleitung"},te=Object(r["e"])("div",{class:"font-bold bottom-4 mt-4"},"Schulung:",-1),ne=Object(r["e"])("option",{value:"withoutSchulung"},"Ohne (+0 Euro)",-1),re={value:"withSchulung"},oe={class:"resetButton flex flex-row"},ie={class:"angebotButton flex flex-row"},ue=Object(r["e"])("div",{class:"sub-title w-5/6 mx-auto flex text-justify text-center mt-40"}," Die V-Cell wird in ihrer Basisausführung mit dem Cobot Panda vom Hersteller Franka Emika geliefert. Der Cobot zeichnet sich durch eine einfache grafische Bedienoberfläche aus und lässt sich somit auch ohne Programmierkenntnisse programmieren. Der Standard-Greifer des Pandas ist ein Zwei-Backen-Greifer. Darüber hinaus sind im Lieferumfang ein Schubladenfach zum Verstauen unterschiedlicher Werkzeuge sowie ein Montagetisch zum Spannen von Werkstücken enthalten. ",-1),ae=Object(r["e"])("figure",{class:"flex bg-red-800 hover:bg-red-900 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 mt-40",onclick:"window.location.href = 'https://www.volkert.net/Kontakt/'"},[Object(r["e"])("div",{class:"p-8 text-center"},[Object(r["e"])("div",{class:"bigText mx-auto flex justify-center"},"Sonderwünsche - kein Problem!"),Object(r["e"])("div",{class:"text mx-auto flex justify-center"},"Bauform, Roboter, Programmierung, Greifer, Spannvorrichtungen, Schweißparamter, Schweißnahtverfolgung etc."),Object(r["e"])("div",{class:"text font-bold mx-auto flex justify-center"},"Sprechen Sie uns einfach an!")])],-1),ce=Object(r["f"])('<div class="w-5/6 mx-auto flex justify-center content-center mt-10"><figure class="flex bg-gray-400 mx-auto justify-center rounded-xl p-8 md:p-0 dark:bg-slate-800 w-1/2 mr-5"><div class="p-8 text-left"><div class="bigText mx-auto flex justify-center text-center">Warum V-Cell?</div><ul class="list-disc text list-insides"><li>Zeitsparend – Schnell / einfach umrüstbar </li><li>Robust – Einfache und effiziente Konstruktion</li><li>Kompakte Bauform – Transport mit Stapler / Hubwagen</li><li>Flexible Einsatzmöglichkeiten – Schweißen, Handling oder Maschinenbestückung, … </li></ul></div></figure><figure class="flex bg-gray-400 mx-auto justify-center rounded-xl p-8 md:p-0 dark:bg-slate-800 w-1/2 ml-5"><div class="p-8 text-left"><div class="bigText mx-auto flex justify-center text-center">Warum Volkert?</div><ul class="list-disc text list-insides"><li class="text_normal">100% Flexibilität – wir passen uns ihren Bedürfnissen an</li><li>360° Made in Germany – von Entwicklung bis Fertigung</li><li>Höchste Qualität – durch Leidenschaft</li><li>Experten im Schweißbereich</li><li>Schnelle Lieferung</li></ul></div></figure></div>',1),se={class:"flex bg-gray-100 mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 mt-40"},le={class:"p-8"},ge=Object(r["f"])('<div class="p-8 flex justify-center text-center space-y-0 flex-col"><div class="text font-bold mx-auto flex justify-center">Technische Daten</div><div class="text_normal text-left">Abmessung in BxLxH</div><div class="text text-left">800 x 1200 x 1800 mm (Kompaktversion)</div><div class="text_normal text-left">Arbeitsbereich</div><div class="text text-left">400 mm³ (Kompaktversion), bis 3200 mm³</div></div>',1),de=Object(r["e"])("svg",{class:"fill-current w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(r["e"])("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})],-1),be=Object(r["e"])("a",null,"DOWNLOAD FLYER",-1),me=[de,be],fe=Object(r["f"])('<div class="grid w-5/6 mx-auto grid-cols-4 gap-4 flex items-center mt-40"><div class="mb-4"><img src="'+x.a+'" class="max-w-full h-auto" alt=""></div><div class="mb-4"><img src="'+O.a+'" class="max-w-full h-auto" alt=""></div><div class="mb-4"><img src="'+y.a+'" class="max-w-full mx-auto h-auto" alt=""></div><div class="mb-4"><img src="'+A.a+'" class="max-w-full h-auto" alt=""></div></div><div class="text font-bold mx-auto flex justify-center text-center mt-40"> Wissen Sie schon, was wir neben der VCELL anbieten? Oder wissen Sie, wie wir unsere Qualität garantieren? </div>',2),he=Object(r["e"])("div",{class:"angebotButton w-2/6 mx-auto flex flex-row mb-40"},[Object(r["e"])("button",{class:"flex-auto bg-transparent hover:bg-gray-200 border border-gray-400 hover:border-transparent rounded-md h-24 lg:h-16",onclick:"window.location.href = 'https://www.volkert.net/Leistungen/'"}," Leistungen "),Object(r["e"])("button",{class:"flex-auto bg-transparent hover:bg-gray-200 border border-gray-400 hover:border-transparent rounded-md h-24 lg:h-16 mx-2",onclick:"window.location.href = 'https://www.volkert.net/Leistungen/360-Grad-Made-in-Germany/'"}," 360 Grad - Made in Germany ")],-1);function pe(e,t,n,o,i,u){return Object(r["q"])(),Object(r["d"])("div",P,[D,Object(r["e"])("div",E,[B,Object(r["e"])("div",M,[Object(r["e"])("div",L,"ab "+Object(r["w"])(e.$store.getters.price)+" €",1),I,_,Object(r["e"])("select",{class:"bg-gray-100 rounded-md w-80 h-10",onChange:t[0]||(t[0]=function(t){return e.$store.commit("calculatePrice")}),id:"dropDownSchweißArt"},[C,Object(r["e"])("option",$,"WIG (+"+Object(r["w"])(e.$store.getters.wigAufpreis)+" Euro)",1),Object(r["e"])("option",F," MIG/MAG (+"+Object(r["w"])(e.$store.getters.mig_magAufpreis)+" Euro) ",1)],32),z,Object(r["e"])("select",{class:"bg-gray-100 rounded-md w-80 h-10",onChange:t[1]||(t[1]=function(t){return e.$store.commit("calculatePrice")}),id:"dropDownSchweißNahtSuchSystem"},[V,Object(r["e"])("option",H,"Gasdüse (+"+Object(r["w"])(e.$store.getters.gasAufpreis)+" Euro)",1),Object(r["e"])("option",T," Kamera (+"+Object(r["w"])(e.$store.getters.cameraAufpreis)+" Euro) ",1)],32),G,Object(r["e"])("select",{class:"bg-gray-100 rounded-md w-80 h-10",onChange:t[2]||(t[2]=function(t){return e.$store.commit("calculatePrice")}),id:"dropDownAbsaugung"},[R,Object(r["e"])("option",q," Mit Einmalfilter (+"+Object(r["w"])(e.$store.getters.einmalFilterAufpreis)+" Euro)",1),Object(r["e"])("option",K,"Mit selbstreinigendem Filter (+"+Object(r["w"])(e.$store.getters.selbstreinigenderFilterAufpreis)+" Euro)",1)],32),W,Object(r["e"])("select",{class:"bg-gray-100 rounded-md w-80 h-10",onChange:t[3]||(t[3]=function(t){return e.$store.commit("calculatePrice")}),id:"dropDownDatenLogging"},[N,Object(r["e"])("option",U," Mit Datenlogging (+"+Object(r["w"])(e.$store.getters.loggingAufpreis)+" Euro)",1)],32),Z,Object(r["e"])("select",{class:"bg-gray-100 rounded-md w-80 h-10",onChange:t[4]||(t[4]=function(t){return e.$store.commit("calculatePrice")}),id:"dropDownMontage"},[J,Object(r["e"])("option",Q,"Mit Montage und Inbetriebnahme (+"+Object(r["w"])(e.$store.getters.montageAufpreis)+" Euro)",1)],32),Y,Object(r["e"])("select",{class:"bg-gray-100 rounded-md w-80 h-10",onChange:t[5]||(t[5]=function(t){return e.$store.commit("calculatePrice")}),id:"dropDownProduktionsbegleitung"},[X,Object(r["e"])("option",ee,"Ein Tag Produktionsbegleitung (+"+Object(r["w"])(e.$store.getters.produktionsbegleitungAufpreis)+" Euro)",1)],32),te,Object(r["e"])("select",{class:"bg-gray-100 rounded-md w-80 h-10",onChange:t[6]||(t[6]=function(t){return e.$store.commit("calculatePrice")}),id:"dropDownSchulung"},[ne,Object(r["e"])("option",re," Mit Schulung (+"+Object(r["w"])(e.$store.getters.schulungAufpreis)+" Euro) ",1)],32),Object(r["e"])("div",oe,[Object(r["e"])("button",{class:"flex-auto rounded-md border-solid border-2 border-light-blue-500 text-black h-16 hover:bg-gray-100 hover:border-transparent",onClick:t[7]||(t[7]=function(t){return e.$store.dispatch("reset")})}," Auswahl zurücksetzen ")]),Object(r["e"])("div",ie,[Object(r["e"])("button",{class:"flex-auto font-bold bg-volkert-blue rounded-md text-white h-16 hover:bg-volkert-dark-blue hover:border-transparent",onClick:t[8]||(t[8]=function(t){return e.$store.commit("sendEmail")})}," Angebot anfordern "),Object(r["e"])("button",{class:"flex-auto bg-gray-400 rounded-md h-16 w-24 mx-2 hover:bg-gray-500 hover:border-transparent",onClick:t[9]||(t[9]=function(t){return e.$store.commit("printPage")})}," Drucken ")])])]),ue,ae,ce,Object(r["e"])("figure",se,[Object(r["e"])("div",le,[ge,Object(r["e"])("button",{class:"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-8 mx-auto flex justify-center text-center",onClick:t[10]||(t[10]=function(t){return e.$store.dispatch("downloadItem")})},me)])]),fe,he])}n("7355"),n("31d2"),n("d85e");var we={name:"Home",components:{counter:n("7355")["default"],"counter-squared":n("31d2")["default"]}};n("c94b");const ve=l()(we,[["render",pe]]);var xe=ve,je=[{path:"/",name:"Home",component:xe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Oe=Object(m["a"])({history:Object(m["b"])(),routes:je}),Se=Oe,ye=n("1da1"),ke=(n("96cf"),n("4795"),n("ac1f"),n("5319"),n("d401"),n("0d03"),n("25f0"),n("2b3d"),n("9861"),n("5502")),Ae=n("bc3a"),Pe=n.n(Ae),De=Object(ke["a"])({state:{counter:0,"schweißArt":"","withoutSchweißart":0,wig:8900,mig_mag:18500,"aufpreisSchweißArt":0,nahtSuchSystem:"",without:0,gas:1800,camera:18900,aufpreisSuchSystem:0,absaugung:"",withoutAbsaugung:0,einmalFilter:3900,selbstreinigenderFilter:6900,aufpreisAbsaugung:0,logging:"",withoutdatenLogging:0,withDatenLogging:4450,aufpreisLogging:0,montage:"",withoutMontage:0,withMontage:3900,aufpreisMontage:0,produktionsbegleitung:"",withoutProduktionsbegleitung:0,withProduktionsbegleitung:680,aufpreisProduktionsbegleitung:0,schulung:"",withoutSchulung:0,withSchulung:4890,aufpreisSchulung:0,startPrice:39990,calculatedPrice:39990,elementVisible:!0},mutations:{wait:function(){var e=this;setTimeout((function(){return e.elementVisible=!1}),1e3)},increasecounter:function(e,t){console.log("random number: ",t),e.counter+=t},decreasecounter:function(e){e.counter--},calculatePrice:function(e){e.schweißArt=document.getElementById("dropDownSchweißArt"),console.log(e.schweißArt.value),e.nahtSuchSystem=document.getElementById("dropDownSchweißNahtSuchSystem"),console.log(e.nahtSuchSystem.value),e.absaugung=document.getElementById("dropDownAbsaugung"),console.log(e.absaugung.value),e.logging=document.getElementById("dropDownDatenLogging"),console.log(e.logging.value),e.montage=document.getElementById("dropDownMontage"),console.log(e.montage.value),e.produktionsbegleitung=document.getElementById("dropDownProduktionsbegleitung"),console.log(e.produktionsbegleitung.value),e.schulung=document.getElementById("dropDownSchulung"),console.log(e.schulung.value),"withoutSchweißart"==e.schweißArt.value?e.aufpreisSchweißArt=e.withoutSchweißart:"wig"==e.schweißArt.value?e.aufpreisSchweißArt=e.wig:"mig_mag"==e.schweißArt.value&&(e.aufpreisSchweißArt=e.mig_mag),console.log(e.aufpreisSchweißArt),"without"==e.nahtSuchSystem.value?e.aufpreisSuchSystem=e.without:"gas"==e.nahtSuchSystem.value?e.aufpreisSuchSystem=e.gas:"camera"==e.nahtSuchSystem.value&&(e.aufpreisSuchSystem=e.camera),console.log(e.aufpreisSuchSystem),"withoutAbsaugung"==e.absaugung.value?e.aufpreisAbsaugung=e.withoutAbsaugung:"einmalFilter"==e.absaugung.value?e.aufpreisAbsaugung=e.einmalFilter:"selbstreinigenderFilter"==e.absaugung.value&&(e.aufpreisAbsaugung=e.selbstreinigenderFilter),console.log(e.aufpreisAbsaugung),"withoutDatenLogging"==e.logging.value?e.aufpreisLogging=e.withoutdatenLogging:"withDatenLogging"==e.logging.value&&(e.aufpreisLogging=e.withDatenLogging),console.log(e.aufpreisLogging),"withoutMontage"==e.montage.value?e.aufpreisMontage=e.withoutMontage:"withMontage"==e.montage.value&&(e.aufpreisMontage=e.withMontage),console.log(e.aufpreisMontage),"withoutProduktionsbegleitung"==e.produktionsbegleitung.value?e.aufpreisProduktionsbegleitung=e.withoutProduktionsbegleitung:"withProduktionsbegleitung"==e.produktionsbegleitung.value&&(e.aufpreisProduktionsbegleitung=e.withProduktionsbegleitung),console.log(e.aufpreisProduktionsbegleitung),"withoutSchulung"==e.schulung.value?e.aufpreisSchulung=e.withoutSchulung:"withSchulung"==e.schulung.value&&(e.aufpreisSchulung=e.withSchulung),console.log(e.aufpreisSchulung);var t=e.startPrice+e.aufpreisSchweißArt+e.aufpreisSuchSystem+e.aufpreisAbsaugung+e.aufpreisLogging+e.aufpreisMontage+e.aufpreisProduktionsbegleitung+e.aufpreisSchulung;e.calculatedPrice=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},sendEmail:function(e){console.log("HI");var t="%0D%0A",n="Hallo liebes Team von Volkert, "+t+t+"bitte senden Sie mir ein Angebot und einen Beratungsterminvorschlag für das Automatisierungsmodul vCell mit den folgenden Paramtern:"+t+t+"Schweißart: "+e.schweißArt.value+t+"Such System: "+e.nahtSuchSystem.value+t+"Absaugung: "+e.absaugung.value+t+"Daten Logging: "+e.logging.value+t+"Montage und Inbetriebnahme: "+e.montage.value+t+"Produktionsbegleitung: "+e.produktionsbegleitung.value+t+"Schulung: "+e.schulung.value+t,r="mailto:info@volkert.net?subject=Anfrage&body="+n;window.location=r},printPage:function(e){window.print()},resetSelects:function(e){var t=document.getElementById("dropDownSchweißArt");t.selectedIndex=0;var n=document.getElementById("dropDownSchweißNahtSuchSystem");n.selectedIndex=0;var r=document.getElementById("dropDownAbsaugung");r.selectedIndex=0;var o=document.getElementById("dropDownDatenLogging");o.selectedIndex=0;var i=document.getElementById("dropDownMontage");i.selectedIndex=0;var u=document.getElementById("dropDownProduktionsbegleitung");u.selectedIndex=0;var a=document.getElementById("dropDownSchulung");a.selectedIndex=0}},actions:{increasecounter:function(e){var t=e.commit;console.log("increaseCounter (action)"),Pe()("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new").then((function(e){t("increasecounter",e.data)}))},downloadItem:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="Volkert_Flyer_A4_VCell.pdf",n="Volkert_Flyer_A4_VCell",e.next=4,Pe.a.get(t,{responseType:"blob"});case 4:r=e.sent,o=new Blob([r.data],{type:"application/pdf"}),i=document.createElement("a"),i.href=URL.createObjectURL(o),i.download=n,i.click(),URL.revokeObjectURL(i.href);case 11:case"end":return e.stop()}}),e)})))()},reset:function(e){e.commmit;this.commit("resetSelects"),this.commit("calculatePrice")}},getters:{counterSquared:function(e){return e.counter*e.counter},wigAufpreis:function(e){return e.wig.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},mig_magAufpreis:function(e){return e.mig_mag.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},gasAufpreis:function(e){return e.gas.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},cameraAufpreis:function(e){return e.camera.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},einmalFilterAufpreis:function(e){return e.einmalFilter.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},selbstreinigenderFilterAufpreis:function(e){return e.selbstreinigenderFilter.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},loggingAufpreis:function(e){return e.withDatenLogging.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},montageAufpreis:function(e){return e.withMontage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},produktionsbegleitungAufpreis:function(e){return e.withProduktionsbegleitung.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},schulungAufpreis:function(e){return e.withSchulung.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},price:function(e){return e.calculatedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},modules:{}});n("ba8c");Object(r["c"])(b).use(De).use(Se).mount("#app")},7355:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"counter"};function i(e,t,n,i,u,a){return Object(r["q"])(),Object(r["d"])("div",o,Object(r["w"])(e.$store.state.counter),1)}var u={},a=n("6b0d"),c=n.n(a);const s=c()(u,[["render",i]]);t["default"]=s},b6e5:function(e,t,n){},ba8c:function(e,t,n){},c94b:function(e,t,n){"use strict";n("e7d9")},d60b:function(e,t,n){e.exports=n.p+"img/yaskawa_logo.be074fa1.jpg"},dee5:function(e,t,n){e.exports=n.p+"img/fanuc_logo.3f29ad2e.jpg"},df94:function(e,t,n){e.exports=n.p+"img/abb_logo.6450f5fc.jpg"},dfb2:function(e,t,n){e.exports=n.p+"img/volkert_logo.82cc172b.png"},e7d9:function(e,t,n){}});
//# sourceMappingURL=app.158a3fc6.js.map