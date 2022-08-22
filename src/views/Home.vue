<template>
  <div class="home">
    <div class="text-5xl sm:text-6xl font-bold w-5/6 mx-auto flex justify-center mt-8 mb-8">
      Ein Produkt. Deine Anforderungen.
    </div>



    <!-- Volkert Separator  -->
    <div class="relative flex py-5 items-center w-4/5 sm:w-3/5 mx-auto flex justify-center">
      <div class="flex-grow border-t border-gray-900"></div>
      <img src="../assets/volkert_logo.png" width="100" class="flex-shrink mx-4 " />
      <div class="flex-grow border-t border-gray-900"></div>
    </div>


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






    <div class="-mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <!-- <g transform="translate(-2.000000, 44.000000)" fill-rule="nonzero">
            <path class="fill-gray-500"
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"></path>
            <path class="fill-gray-500"
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"></path>
            <path class="fill-gray-500"
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4" opacity="0.200000003"></path>
          </g> -->
          <g transform="translate(-4.000000, 76.000000)" class="fill-black" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z">
            </path>
          </g>
        </g>
      </svg>
    </div>






    <div class="antialiased w-full h-full bg-black text-gray-400 p-10 flex justify-center items-center">
      <div class="container px-4 mx-auto">
        <div>
          <div id="title" class="text-center my-10">
            <div
              class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gray-100 text-5xl sm:text-6xl font-bold ">
              Some Facts
            </div>
            <!-- <h1 class="text-5xl sm:text-6xl font-bold text-blue-600">Some Facts</h1> -->
            <p class="text-light text-gray-500 text-xl">
              Fakten der vCell auf einen Blick
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
                      fillSquare="fill-blue-600" />
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




    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave fill-black">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z">
            </path>
          </g>
          <!-- <g class="fill-gray-500" transform="translate(1.000000, 15.000000)">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"></path>
            </g>
          </g> -->
        </g>
      </g>
    </svg>










    <div class="mt-40 text-5xl sm:text-6xl font-bold w-5/6 mx-auto flex justify-center mb-20">
      Jetzt konfigurieren.
    </div>

    <div
      class=" mb-40 mx-auto animate-bounce bg-volkert-blue p-2 w-20 h-20 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
      <svg class="w-12 h-12 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>




    <calculator />










    <!-- Text -->
    <div class="text-lg sm:text-2xl w-5/6 mx-auto flex text-justify text-center mt-40">
      Die vCell wird in ihrer Basisausführung mit dem Cobot Panda vom Hersteller Franka Emika geliefert. Der
      Cobot
      zeichnet sich durch eine einfache grafische
      Bedienoberfläche aus und lässt sich somit auch ohne Programmierkenntnisse programmieren. Der
      Standard-Greifer
      des
      Pandas ist ein Zwei-Backen-Greifer.
      Darüber hinaus sind im Lieferumfang ein Schubladenfach zum Verstauen unterschiedlicher Werkzeuge sowie ein
      Montagetisch zum Spannen von Werkstücken enthalten.
    </div>







    <!--    Informationszellen    -->
    <!--    Sonderwünsche    -->

    <figure
      class="flex bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white mx-auto justify-center rounded-xl p-8 pb-16 w-11/12 sm:w-1/2 mt-40"
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
    <div class="sm:w-4/5 mx-auto flex flex-col sm:flex-row justify-center content-center">
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






    <!--    Technische Daten    -->
    <figure class="flex bg-gray-100 mx-auto justify-center rounded-xl p-8 md:p-0 w-11/12 sm:w-1/2 xl:w-1/3 mt-40">
      <div class="">
        <div class="p-8 flex justify-center text-center flex-col">
          <div class="text-2xl sm:text-3xl font-bold mx-auto flex justify-center mb-10">Technische Daten</div>
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
    <div class="grid w-5/6 mx-auto grid-cols-2 sm:grid-cols-4 gap-4 flex items-center mt-40">
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
    </div>



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
  // data() {
  //   return {
  //     counter: 0,
  //     carLabel: "no car",
  //   }
  // },
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
</style>
