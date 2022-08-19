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
      Die V-Cell ist ein <span class="text-slate-900 font-medium"> kompaktes Automatisierungsmodul</span>.
      Die Robotereinheit kann für verschiedene Zwecke eingesetzt werden. So zählen
      <span class="text-slate-900 font-medium">Schweißen, Handling und Maschinenbestückung</span>
      zu den häufigsten Anwendungsbereichen.
      Die V-Cell wird in der kompakten Bauform als Standardmodul angeboten.
      Diese zeichnet sich durch platzsparende Bauweise und einfachste
      Transportmöglichkeiten mit Stapler oder Hubwagen aus. Durch die hohe
      Flexibilität unserer Anlagen und Mitarbeiter können wir das Standardmodul
      an nahezu jeden Kundenwunsch anpassen. Zögern sie also nicht, Kontakt
      aufzunehmen.
    </div>







    <div class="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
      <div class="container px-4 mx-auto">
        <div>
          <div id="title" class="text-center my-10">
            <h1 class="text-5xl sm:text-6xl font-bold text-white">Some Facts</h1>
            <p class="text-light text-gray-500 text-xl">
              Fakten der vCell auf einen Blick
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
            <div id="plan"
              class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
              <div id="title" class="w-full py-5 border-b border-gray-800">
                <h2 class="font-bold text-3xl text-white">Verschiedene</h2>
                <h2 class="font-bold text-3xl text-white mb-6">Anwendungen</h2>
                <!-- <h3 class="font-normal text-indigo-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row items-center justify-center">
                    <welding_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" />
                    <gripping_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" />
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Von hohen bis kleinen Stückzahlen
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-lg font-light">
                  <ul>
                    <li>Schweißen</li>
                    <li>Handling</li>
                    <li>(Maschinenbestückung)</li>
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
                <h2 class="font-bold text-3xl text-white">Kompakte</h2>
                <h2 class="font-bold text-3xl text-white mb-6">Bauform</h2>
                <!-- <h3 class="font-normal text-indigo-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row items-center justify-center">
                    <welding_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" />
                    <!-- <gripping_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" /> -->
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Von hohen bis kleinen Stückzahlen
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-lg font-light">
                  <ul>
                    <li>Schweißen</li>
                    <li>Handling</li>
                    <li>(Maschinenbestückung)</li>
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
                <h2 class="font-bold text-3xl text-white">Viele</h2>
                <h2 class="font-bold text-3xl text-white mb-6">Roboterhersteller</h2>
                <!-- <h3 class="font-normal text-indigo-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row items-center justify-center">
                    <!-- <welding_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" /> -->
                    <gripping_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" />
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Von hohen bis kleinen Stückzahlen
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-lg font-light">
                  <ul>
                    <li>Schweißen</li>
                    <li>Handling</li>
                    <li>(Maschinenbestückung)</li>
                    <!-- <li>Subdomain included</li> -->
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
      Die V-Cell wird in ihrer Basisausführung mit dem Cobot Panda vom Hersteller Franka Emika geliefert. Der
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
      class="flex bg-red-800 hover:bg-red-900 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 md:p-0 w-11/12 sm:w-1/2 mt-40"
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
        class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 md:p-0 w-11/12 sm:w-1/2 sm:mr-5 mt-10">
        <div class="p-8 text-left ">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center ">Warum
            V-Cell?</div>
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
        class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 md:p-0 w-11/12 sm:w-1/2 sm:ml-5 mt-10">
        <div class="p-8 text-left ">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center">Warum
            Volkert?</div>
          <ul class="list-disc text-md sm:text-xl font-light list-insides ">
            <li class="text_normal">100% Flexibilität – wir passen uns ihren Bedürfnissen an</li>
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
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-8 mb-8 mx-auto flex justify-center text-center"
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

    <div class="text-md sm:text-xl w-4/6 sm:w-2/6 mx-auto flex flex-row mt-10 mb-40">
      <button
        class="w-1/2 flex-auto bg-transparent hover:bg-gray-200 border border-gray-400 hover:border-transparent rounded-md h-24 lg:h-16"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/'">
        Leistungen
      </button>
      <button
        class="w-1/2 flex-auto bg-transparent hover:bg-gray-200 border border-gray-400 hover:border-transparent rounded-md h-24 lg:h-16 mx-2"
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
