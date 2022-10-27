<template>
  <div class="home">

    <div class="w-screen w-11/12 mx-auto justify-center ">
      <!-- Only Displayed if Desktop  -->
      <div class="grid grid-cols-6 items-center mt-8" v-if="!$store.getters.isMobile">
        <div class="text-xl sm:text-4xl text-left">vCell</div>
        <div class="flex flex-row-reverse mt-4 items-center text-xs sm:text-base col-span-5">
          <button
            class="text_big ml-8 p-1 px-2 bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent transition ease-in-out delay-300 hover:scale-110"
            @click="$store.commit('sendPrinterEmail')">Anfrage</button>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'technicalDetailsHeader')">
            Technsiche Daten</div>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'whyVcellHeader')">
            Warum vCell</div>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'robotInfoHeader')">
            Robot vs. Cobot</div>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'configuratorHeader')">
            Konfigurator</div>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'overvieHeader')">
            Überblick</div>
        </div>
      </div>

      <!-- Only Displayed if Mobile  -->
      <div class="grid grid-cols-2 items-center mt-10 mb-1" v-if="$store.getters.isMobile">
        <div class="text-2xl text-left font-medium">vCell</div>
        <div class="flex flex-row-reverse items-center text-xs mr-2">
          <!-- Request Button -->
          <button
            class="text-xs p-1 p-2 bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent"
            @click="$store.commit('sendPrinterEmail')">Anfrage
          </button>
          <!-- Arrow Down Button -->
          <button class="text-gray-800 font-bold py-2 px-2 rounded items-center mx-auto flex justify-center text-center"
            @click="$store.commit('change_show_mobile_nav_bar')">
            <!-- Arrow Down -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" v-if="!$store.getters.show_mobile_nav_bar">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <!-- Arrow Up -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" v-if="$store.getters.show_mobile_nav_bar">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- separator -->
      <div class="flex-grow border-t border-gray-900 mt-1"></div>
    </div>


    <!-- Only Displayed if Mobile  -->
    <div class="flex flex-col-reverse mt-4 justify-start text-xs"
      v-if="$store.getters.isMobile & $store.getters.show_mobile_nav_bar">

      <div class="text-xs ml-6 p-4 " @click="$store.commit('scrollToElement', 'technicalDetailsHeader')">
        Technsiche Daten</div>
      <div class="flex-grow border-t border-gray-300 mx-10"></div>
      <div class="text-xs ml-6 p-4 cursor-pointer" @click="$store.commit('scrollToElement', 'whyVcellHeader')">
        Warum vCell</div>
      <div class="flex-grow border-t border-gray-300 mx-10"></div>
      <div class="text-xs ml-6 p-4 cursor-pointer" @click="$store.commit('scrollToElement', 'robotInfoHeader')">
        Robot vs. Cobot</div>
      <div class="flex-grow border-t border-gray-300 mx-10"></div>
      <div class="text-xs ml-6 p-4 cursor-pointer" @click="$store.commit('scrollToElement', 'configuratorHeader')">
        Konfigurator</div>
      <div class="flex-grow border-t border-gray-300 mx-10"></div>
      <div class="text-xs ml-6 p-4 cursor-pointer" @click="$store.commit('scrollToElement', 'overvieHeader')">
        Überblick</div>
    </div>




    <!-- ------------------------------------------------------------
        1. Section - Intro and Plug and Play

        From the beginning of printing until printing is finished
        ------------------------------------------------------------ -->

    <div id="overvieHeader"
      class="flex flex-col justify-center items-center w-11/12 sm:w-1/2 mx-auto mt-8 sm:mt-20 sm:h-screen">
      <!-- Motto des Druckers: Precision. Never Ending. -->
      <div id="vCellHeader" class="text-5xl sm:text-6xl font-bold text-center mb-8">
        Ein Produkt. Deine Anforderungen.
      </div>

      <!-- Erstes Bild Drucker -->
      <div class="flex justify-center">
        <img alt="Vue" class="logo bg-white" src="../assets/vCell3.png" />
      </div>
      <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center text-white">Bild drucker Gesamt</div> -->

      <!-- Preisangabe -->
      <div class="">
        <div class="text-xl sm:text-base font-semibold">Ab 29.990 Euro</div>
      </div>
    </div>



    <!-- Volkert Separator  -->
    <!-- <div class="relative flex py-5 items-center w-4/5 sm:w-3/5 mx-auto flex justify-center">
      <div class="flex-grow border-t border-gray-900"></div>
      <img src="../assets/volkert_logo.png" width="100" class="flex-shrink mx-4 " />
      <div class="flex-grow border-t border-gray-900"></div>
    </div> -->


    <!-- Text -->
    <div class="text-lg sm:text-2xl w-5/6 mx-auto mb-40 mt-8 text-justify">
      Die vCell ist ein <span class="text-slate-900 font-medium"> kompaktes Automatisierungsmodul</span>.
      Die Robotereinheit kann für verschiedene Zwecke eingesetzt werden. So zählen
      <span class="text-slate-900 font-medium">Schweißen, Handling und Maschinenbestückung</span>
      zu den häufigsten Anwendungsbereichen.
      Die vCell wird in der kompakten Bauform als Standardmodul angeboten.
      Diese zeichnet sich durch platzsparende Bauweise und einfachste
      Transportmöglichkeiten mit Stapler oder Hubwagen aus. Durch die hohe
      Flexibilität unserer Anlagen und Mitarbeiter können wir das Standardmodul
      an nahezu jeden Kundenwunsch anpassen. Zögern sie also nicht, Kontakt
      aufzunehmen.
    </div>




    <!-- Some Facts -->
    <div
      class="antialiased w-5/6 mx-auto h-full bg-zinc-900 text-gray-400 p-10 flex justify-center items-center rounded-3xl">
      <div class="container px-4 mx-auto">
        <div>
          <div id="title" class="text-center my-10">
            <div id="vCellFactsHeader"
              class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gray-100 text-5xl sm:text-6xl font-bold ">
              Some Facts
            </div>
            <!-- <h1 class="text-5xl sm:text-6xl font-bold text-blue-600">Some Facts</h1> -->
            <p class="text-light text-gray-500 text-xl">
              Warum vCell von Volkert?
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
            <div id="plan"
              class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
              <div id="title" class="w-full py-5 border-b border-gray-800">
                <h2 class="font-bold text-4xl text-white">Verschiedene</h2>
                <h2 class="font-bold text-4xl text-white mb-6">Anwendungen</h2>
                <!-- <h3 class="font-normal text-blue-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row gap-6 items-center justify-center">
                    <welding_icon class="h-16 w-16" fillAll="fill-blue-600" />
                    <gripping_icon class="h-16 w-16" fillAll="fill-blue-600" />
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Von hohen bis kleinen Stückzahlen.
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-xl font-light">
                  <ul>
                    <li>Schweißen</li>
                    <li>Handling</li>
                    <li>...</li>
                    <!-- <li>Subdomain included</li> -->
                  </ul>
                  <!-- <div id="choose" class="w-full mt-10 px-6">
                    <a href="#"
                      class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white">Choose</a>
                  </div> -->
                </div>
              </div>
            </div>
            <div id="plan"
              class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
              <div id="title" class="w-full py-5 border-b border-gray-800">
                <h2 class="font-bold text-4xl text-white">Kompakte</h2>
                <h2 class="font-bold text-4xl text-white mb-6">Bauform</h2>
                <!-- <h3 class="font-normal text-indigo-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row items-center justify-center">
                    <compact_icon class="h-16 w-16 stroke-blue-600" fillAll="stroke-blue-600" stroke="fill-blue-600"
                      background="fill-zinc-900" fillSquare="fill-blue-600" />
                    <!-- <welding_icon class="h-16 w-16" fillAll="fill-blue-600" /> -->
                    <!-- <gripping_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" /> -->
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Platzsparend und einfacher Transport.
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-xl font-light">
                  <ul>
                    <li>Standard</li>
                    <li>Mini</li>
                    <li>Custom</li>
                    <!-- <li>Subdomain included</li> -->
                  </ul>
                  <!-- <div id="choose" class="w-full mt-10 px-6">
                    <a href="#"
                      class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white">Choose</a>
                  </div> -->
                </div>
              </div>
            </div>
            <div id="plan"
              class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
              <div id="title" class="w-full py-5 border-b border-gray-800">
                <h2 class="font-bold text-4xl text-white">An Kundenwünsche</h2>
                <h2 class="font-bold text-4xl text-white mb-6">anpassbar</h2>
                <!-- <h3 class="font-normal text-indigo-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row items-center justify-center">
                    <!-- <welding_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" /> -->
                    <!-- <gripping_icon class="h-16 w-16" fillAll="fill-blue-500" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto fill-stroke text-blue-600"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path class="fill-blue-600" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                      </path>
                    </svg>
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Was immer Sie benötigen.
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-xl font-light">
                  <ul>
                    <li>Roboter</li>
                    <li>Greifer</li>
                    <li>Programmierung</li>
                    <li>Spannvorrichtungen</li>
                    <li>Schweißnahtverfolgung</li>
                  </ul>
                  <!-- <div id="choose" class="w-full mt-10 px-6">
                    <a href="#"
                      class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white">Choose</a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div id="configuratorHeader" class="mt-40 text-5xl sm:text-6xl font-bold w-5/6 mx-auto flex justify-center mb-20">
      Jetzt konfigurieren.
    </div>
    <div type="button" @click="$store.commit('scrollToElement', 'calculator')" class="cursor-pointer mb-40 mx-auto animate-bounce bg-volkert-blue p-2 w-20 h-20 ring-1 ring-slate-900/5 dark:ring-slate-200/20
      shadow-lg rounded-full flex items-center justify-center">
      <svg class="w-12 h-12 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>




    <calculator />




    <!-- Text -->
    <div class="text-lg sm:text-2xl w-5/6 mx-auto flex text-justify text-center mt-40">
      Die vCell wird für Schweißanwendungen mit einem Yaskawa Roboter ausgestattet. Alle Handling-Anwendungen werden mit
      einem Cobot der Firma ABB ausgestattet. Der Cobot zeichnet sich durch eine einfache grafische
      Bedienoberfläche aus und lässt sich somit auch ohne Programmierkenntnisse programmieren.
      Im Lieferumfang sind ebenfalls ein Schubladenfach zum Verstauen unterschiedlicher Werkzeuge sowie ein
      Montagetisch zum Spannen von Werkstücken enthalten.
    </div>



    <robotInformation />
    



    <!--    Informationszellen    -->
    <!--    Sonderwünsche    -->

    <figure id="extraWishes"
      class="flex bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white mx-auto justify-center rounded-xl p-8 pb-16 w-11/12 sm:w-1/2 mt-40 hover:opacity-90"
      onclick="window.location.href = 'https://www.volkert.net/Kontakt/'">
      <div class="p-8 text-center">
        <div class="text-4xl sm:text-5xl font-semibold mx-auto flex justify-center mt-8 mb-12">Sonderwünsche - kein
          Problem!</div>
        <div class="text-md sm:text-xl font-light mx-auto flex justify-center mb-8">Bauform, Roboter, Programmierung,
          Greifer,
          Spannvorrichtungen,
          Schweißparamter, Schweißnahtverfolgung etc.</div>
        <div class="text-lg sm:text-xl font-bold mx-auto flex justify-center">Sprechen Sie uns einfach an!</div>
      </div>
    </figure>



    <!--    Warum VCell    -->
    <div id="whyVcellHeader" class="sm:w-4/5 mx-auto flex flex-col sm:flex-row justify-center content-center mt-16">
      <figure
        class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 pb-16 w-11/12 sm:w-1/2 sm:mr-5 mt-10">
        <div class="p-8 text-left ">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center ">Warum
            vCell?</div>
          <ul class="list-disc text-md sm:text-xl font-light list-insides ">
            <li>Zeitsparend – Schnell / einfach umrüstbar </li>
            <li>Robust – Einfache und effiziente Konstruktion</li>
            <li>Kompakte Bauform – Transport mit Stapler / Hubwagen</li>
            <li>Flexible Einsatzmöglichkeiten – Schweißen, Handling oder Maschinenbestückung, … </li>
          </ul>
        </div>
      </figure>


      <!--    Warum Volkert    -->
      <figure
        class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 w-11/12 sm:w-1/2 sm:ml-5 mt-10">
        <div class="p-8 text-left ">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center">Warum
            Volkert?</div>
          <ul class="list-disc text-md sm:text-xl font-light list-insides">
            <li>100% Flexibilität – wir passen uns ihren Bedürfnissen an</li>
            <li>360° Made in Germany – von Entwicklung bis Fertigung</li>
            <li>Höchste Qualität – durch Leidenschaft</li>
            <li>Experten im Schweißbereich</li>
            <li>Schnelle Lieferung</li>
          </ul>
        </div>
      </figure>
    </div>


    <!-- Technical Details -->
    <figure id="technicalDetailsHeader"
      class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl w-11/12 sm:w-1/2 mt-10">
      <div class="p-8 text-center">
        <div class="p-8 flex justify-center text-center flex-col">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center ">
            Technische
            Daten</div>
          <div class="text-md sm:text-xl font-semibold text-left">Abmessung in BxLxH</div>
          <div class="text-md sm:text-xl font-light text-left">800 x 1200 x 1800 mm (Kompaktversion)</div>
          <div class="text-md sm:text-xl font-semibold text-left mt-4">Arbeitsbereich</div>
          <div class="text-md sm:text-xl font-light text-left">400 mm³ (Kompaktversion), bis 3200 mm³</div>
        </div>


        <!--    Downloadbutton (nur Klick auf den Text funktioniert)   -->
        <button
          class="bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-800 font-bold py-2 px-4 rounded items-center mt-8 mb-8 mx-auto flex justify-center text-center"
          @click="$store.dispatch('downloadItem')">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a>DOWNLOAD FLYER</a>
        </button>

      </div>
    </figure>





    <!--    Logos der Roboterhersteller    -->
    <!-- <div class="grid w-5/6 mx-auto grid-cols-2 sm:grid-cols-4 gap-4 flex items-center mt-40">
      <div class="mb-4">
        <img src="../assets/yaskawa_logo.jpg" class="max-w-full h-auto" alt="">
      </div>
      <div class="mb-4">
        <img src="../assets/abb_logo.jpg" class="max-w-full h-auto" alt="">
      </div>
      <div class="mb-4">
        <img src="../assets/franka_logo.jpg" class="max-w-full mx-auto h-auto" alt="">
      </div>
      <div class="mb-4">
        <img src="../assets/fanuc_logo.jpg" class="max-w-full h-auto" alt="">
      </div>
    </div> -->



    <!--    Links zu anderen Seiten unserer Homepage    -->
    <div class="text-md sm:text-xl font-bold mx-auto flex justify-center text-center mt-40">
      Wissen Sie schon, was wir neben der VCELL anbieten? Oder wissen Sie, wie wir unsere Qualität garantieren?
    </div>

    <div class="text-md sm:text-xl w-4/6 sm:w-2/6 mx-auto flex flex-row mt-10 mb-40 p-4 gap-6">
      <button
        class="w-1/2 flex-auto bg-transparent hover:bg-gray-400 hover:text-white border border-gray-400 hover:border-transparent rounded-md"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/'">
        Leistungen
      </button>
      <button
        class="w-1/2 flex-auto bg-transparent hover:bg-gray-400 hover:text-white border border-gray-400 hover:border-transparent rounded-md p-4"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/360-Grad-Made-in-Germany/'">
        360 Grad - Made in Germany
      </button>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import CounterSquared from "../components/CounterSquared.vue";
import Calculator from "../components/Calculator.vue";
import VueNumeric from "vue-numeric";


export default {
  name: "Home",
  data() {
    return {
      counter: 0,
      carLabel: "no car",
      elementVisible: false,
    }
  },
  // methods: {
  //   increasecounter() {
  //     this.counter++
  //   },
  //   decreasecounter() {
  //     this.counter--
  //   },
  //   calculatePrice () {
  //     var e = document.getElementById("dropDownSchweißArt");
  //     this.carLabel = e.value;

  //     console.log("hi paddy");
  //   }
  // }
  components: {
    counter: require("@/components/Counter.vue").default,
    "counter-squared": require("@/components/CounterSquared.vue").default,
    "calculator": require("@/components/Calculator.vue").default,
    "welding_icon": require("@/assets/icons/welding_icon.vue").default,
    "gripping_icon": require("@/assets/icons/gripping_icon.vue").default,
    "compact_icon": require("@/assets/icons/compact_icon.vue").default,


    "heavy-workload_icon": require("@/assets/icons/heavy-workload_icon").default,
    "specialiced_icon": require("@/assets/icons/specialiced_icon").default,
    "speed_icon": require("@/assets/icons/speed_icon").default,
    "allrounder_icon": require("@/assets/icons/allrounder_icon").default,
    "safety_icon": require("@/assets/icons/safety_icon").default,

    "robotInformation": require("@/components/RobotInformation.vue").default,



  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      // console.log(event.target.documentElement.scrollTop);

      const element = document.getElementById("testElement");
      const rect = element.getBoundingClientRect();

      // console.log(
      //   // rect.top >= 100 &&
      //   rect.bottom <= document.documentElement.clientHeight - 100 &&
      //   rect.left >= 0 &&
      //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //   rect.right <= (window.innerWidth || document.documentElement.clientWidth));

      if (this.elementVisible == false) {

        if ((rect.bottom <= document.documentElement.clientHeight - 300 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)) == true) {

          this.elementVisible = true;


          console.log("visible")

          var x = 0;
          function moreVisible() {
            if (x == 1) clearInterval(t);
            x += 0.001;
            element.style.opacity = x;
            element.style.filter = "alpha(opacity=" + (x * 100) + ")";
          }
          var t = setInterval(moreVisible, 4);
        } else {
          // console.log("unvisible")

          // element.style.visibility = "hidden";
        }
      }

      // const element2 = document.getElementById("testElement-2");
      // const rect2 = element2.getBoundingClientRect();

      // if ((rect2.bottom <= document.documentElement.clientHeight - 300 &&
      //   rect2.left >= 0 &&
      //   rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //   rect2.right <= (window.innerWidth || document.documentElement.clientWidth)) == true) {
      //   console.log("visible")
      //   const element = document.getElementById("testElement-2");
      //   element.style.visibility = "visible";
      // } else {
      //   console.log("unvisible")

      //   const element = document.getElementById("testElement-2");
      //   element.style.visibility = "hidden";
      // }


      // const element3 = document.getElementById("testElement-3");
      // const rect3 = element3.getBoundingClientRect();

      // if ((rect3.bottom <= document.documentElement.clientHeight - 300 &&
      //   rect3.left >= 0 &&
      //   rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //   rect3.right <= (window.innerWidth || document.documentElement.clientWidth)) == true) {
      //   console.log("visible")
      //   const element = document.getElementById("testElement-3");
      //   element.style.visibility = "visible";
      // } else {
      //   console.log("unvisible")

      //   const element = document.getElementById("testElement-3");
      //   element.style.visibility = "hidden";
      // }



      // const { top, bottom } = element.getBoundingClientRect();
      // const vHeight = (window.innerHeight || document.documentElement.clientHeight);

      // // console.log("middle of screen:");s
      // console.log(
      //   (top > 0 || bottom > 0) &&
      //   top < vHeight
      // );



    }
  }
  // methods: {
  //   sendEmail()
  //   {
  //     var y = {{ $store.getters.cameraAufpreis }};
  //     var x = "mailto:xyz@abc.com?subject=" + y;
  //     window.location = x;

  //   }
  // }
};
</script>

<style>
/* div {
    margin-bottom: 10px;
  } */
.title {
  font-weight: light;
  font-size: 52px;
  margin-top: 60px;
  margin-bottom: 16px;
}

.title_sm {
  font-weight: light;
  font-size: 28px;
  margin-top: 30px;
  margin-bottom: 8px;
}

.sub-title {
  font-weight: normal;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 80px;
}

.text {
  font-weight: lighter;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.text_normal {
  font-weight: normal;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.text_sm {
  font-weight: lighter;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.bigText {
  font-weight: light;
  font-size: 52px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.bigText_sm {
  font-weight: light;
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.kleingedrucktes {
  font-size: 12px;
  margin-bottom: 24px;
}

.counter {
  font-size: 80px;
}

.price {
  font-size: 40px;
  font-weight: light;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.angebotButton button {
  font-size: 20px;
  width: 100px;
  margin-top: 24px;
}

.resetButton button {
  font-size: 20px;
  width: 100px;
  margin-top: 24px;
}

/* ============ flip hover styles ============ */
.card:hover {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.card-back {
  transform: rotateY(180deg);
}

.testElement {
  background-color: transparent;
  font-size: xx-large;
  opacity: 0;
  filter: alpha(opacity=0);
}
</style>
