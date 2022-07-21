<template>
  <div class="home">
    <div class="title w-5/6 mx-auto flex justify-center">
      Ein Produkt. Deine Anforderungen.
    </div>


    <!-- Volkert Separator  -->
    <div class="relative flex py-5 items-center w-3/5 mx-auto flex justify-center">
      <div class="flex-grow border-t border-gray-900"></div>
      <img src="../assets/volkert_logo.png" width="100" class="flex-shrink mx-4 " />
      <div class="flex-grow border-t border-gray-900"></div>
    </div>


    <!-- Text -->
    <div class="sub-title w-5/6 mx-auto flex text-justify text-center mb-40">
      Die V-Cell ist ein kompaktes Automatisierungsmodul. Die Robotereinheit
      kann für verschiedene Zwecke eingesetzt werden. So zählen Schweißen,
      Handling und Maschinenbestückung zu den häufigsten Anwendungsbereichen.
      Die V-Cell wird in der kompakten Bauform als Standardmodul angeboten.
      Diese zeichnet sich durch platzsparende Bauweise und einfachste
      Transportmöglichkeiten mit Stapler oder Hubwagen aus. Durch die hohe
      Flexibilität unserer Anlagen und Mitarbeiter können wir das Standardmodul
      an nahezu jeden Kundenwunsch anpassen. Zögern sie also nicht, Kontakt
      aufzunehmen.
    </div>






    <div class="grid grid-cols-2">

      <!-- 1. Col -->
      <div class="sticky top-20 content-center">
        <!-- Image CVell  -->
        <img alt="Vue" class="logo bg-white" src="../assets/vCell3.png" />

        <div class="">
          <!--    Gesamtpreis   -->
          <div class="price m-0 text-center mr-12">ab {{ $store.getters.price }} €</div>
          <div class="kleingedrucktes text-center mr-12">zzgl. MwSt.</div>
        </div>
      </div>

      <!-- 2. Col -->
      <div class="flex-row justify-end">

        <!--    ------------------------------    -->
        <!--  Schweißpaket: Header and Drop Down  -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Schweißpaket:</div>

        <select class="bg-gray-100 rounded-md w-80 h-10" @change="$store.commit('calculatePrice')"
          id="dropDownSchweißArt">
          <option value="withoutSchweißart">Ohne (+0 Euro)</option>
          <option value="wig">WIG (+{{ $store.getters.wigAufpreis }} Euro)</option>
          <option value="mig_mag"> MIG/MAG (+{{ $store.getters.mig_magAufpreis }} Euro) </option>
        </select>


        <!--    ------------------------------    -->
        <!--   Suchsystem: Header and Drop Down   -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Schweißnahtsuchsystem:</div>

        <!-- <div class="schweißNahtSuchSystem"> 
            {{ $store.state.schweißNaht }}
        </div> -->
        <select class="bg-gray-100 rounded-md w-80 h-10" @change="$store.commit('calculatePrice')"
          id="dropDownSchweißNahtSuchSystem">
          <option value="without">Ohne (+0 Euro)</option>
          <option value="gas">Gasdüse (+{{ $store.getters.gasAufpreis }} Euro)</option>
          <option value="camera"> Kamera (+{{ $store.getters.cameraAufpreis }} Euro) </option>
        </select>


        <!--    ------------------------------    -->
        <!--    Absaugung: Header and Drop Down    -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Absaugung:</div>

        <select class="bg-gray-100 rounded-md w-80 h-10" @change="$store.commit('calculatePrice')"
          id="dropDownAbsaugung">

          <option value="withoutAbsaugung">Ohne (+0 Euro)</option>
          <option value="einmalFilter"> Mit Einmalfilter (+{{ $store.getters.einmalFilterAufpreis }} Euro)
          </option>
          <option value="selbstreinigenderFilter">Mit selbstreinigendem Filter (+{{
              $store.getters.selbstreinigenderFilterAufpreis
          }} Euro)</option>
        </select>


        <!--    ------------------------------    -->
        <!--    DatenLogging: Header and Drop Down    -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Daten Logging:</div>

        <select class="bg-gray-100 rounded-md w-80 h-10" @change="$store.commit('calculatePrice')"
          id="dropDownDatenLogging">

          <option value="withoutDatenLogging">Ohne (+0 Euro)</option>
          <option value="withDatenLogging"> Mit Datenlogging (+{{ $store.getters.loggingAufpreis }} Euro)
          </option>
        </select>


        <!--    ---------------------------------------    -->
        <!--    Montage/Inbetrieb: Header and Drop Down    -->
        <!--    ---------------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Montage und Inbetriebnahme:</div>

        <select class="bg-gray-100 rounded-md w-80 h-10" @change="$store.commit('calculatePrice')" id="dropDownMontage">

          <option value="withoutMontage">Ohne (+0 Euro)</option>
          <option value="withMontage">Mit Montage und Inbetriebnahme (+{{ $store.getters.montageAufpreis }}
            Euro)
          </option>
        </select>


        <!--    -----------------------------------------    -->
        <!--    Produktionsbegleit.: Header and Drop Down    -->
        <!--    -----------------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Produktionsbegleitung:</div>

        <select class="bg-gray-100 rounded-md w-80 h-10" @change="$store.commit('calculatePrice')"
          id="dropDownProduktionsbegleitung">

          <option value="withoutProduktionsbegleitung">Ohne (+0 Euro)</option>
          <option value="withProduktionsbegleitung">Ein Tag Produktionsbegleitung (+{{
              $store.getters.produktionsbegleitungAufpreis
          }} Euro)</option>
        </select>


        <!--    ------------------------------    -->
        <!--    Schulung: Header and Drop Down    -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Schulung:</div>

        <select class="bg-gray-100 rounded-md w-80 h-10" @change="$store.commit('calculatePrice')"
          id="dropDownSchulung">

          <option value="withoutSchulung">Ohne (+0 Euro)</option>
          <option value="withSchulung">
            Mit Schulung (+{{ $store.getters.schulungAufpreis }} Euro)
          </option>
        </select>


        <!--    Buttons    -->
        <div class="mt-12 mr-2">
          <button class="
            w-full
            rounded-md
            border-solid border-2 border-light-blue-500
            text-black
            h-16 hover:bg-gray-100 hover:border-transparent 
            text-xl" @click="$store.dispatch('reset')">
            Auswahl zurücksetzen
          </button>
        </div>

        <div class="mt-2 mr-2 flex flex-row">
          <button class="
            flex-auto 
            font-bold 
            bg-volkert-blue 
            rounded-md 
            text-white 
            h-16 hover:bg-volkert-dark-blue hover:border-transparent 
            text-xl" @click="$store.commit('sendEmail')">
            Angebot anfordern
          </button>
          <button class="
            flex-auto 
            bg-gray-400 
            rounded-md 
            h-16
            ml-2 
            hover:bg-gray-500 hover:border-transparent" @click="$store.commit('printPage')">
            Drucken
          </button>
        </div>

      </div>




      <!--    ------------------------------    -->
      <!--    Those are place holders, needed    -->
      <!--    that the image scrolles further    -->
      <!--    ------------------------------    -->

      <div class="w-5/6 mx-auto justify-center content-center mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
      <div class="w-5/6 mx-auto justify-center content-center mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
      <div class="w-5/6 mx-auto justify-center content-center mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
      <div class="w-5/6 mx-auto justify-center content-center mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
    </div>







    <!-- Text -->
    <div class="sub-title w-5/6 mx-auto flex text-justify text-center mt-40">
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
      class="flex bg-red-800 hover:bg-red-900 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 mt-40"
      onclick="window.location.href = 'https://www.volkert.net/Kontakt/'">
      <div class="p-8 text-center">
        <div class="bigText mx-auto flex justify-center">Sonderwünsche - kein Problem!</div>
        <div class="text mx-auto flex justify-center">Bauform, Roboter, Programmierung, Greifer,
          Spannvorrichtungen,
          Schweißparamter, Schweißnahtverfolgung etc.</div>
        <div class="text font-bold mx-auto flex justify-center">Sprechen Sie uns einfach an!</div>
      </div>
    </figure>



    <!--    Warum VCell    -->
    <div class="w-5/6 mx-auto flex justify-center content-center mt-10">
      <figure class="flex bg-gray-800 mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 mr-5 text-white">
        <div class="p-8 text-left ">
          <div class="bigText mx-auto flex justify-center text-center">Warum V-Cell?</div>
          <ul class="list-disc text list-insides ">
            <li>Zeitsparend – Schnell / einfach umrüstbar </li>
            <li>Robust – Einfache und effiziente Konstruktion</li>
            <li>Kompakte Bauform – Transport mit Stapler / Hubwagen</li>
            <li>Flexible Einsatzmöglichkeiten – Schweißen, Handling oder Maschinenbestückung, … </li>
          </ul>
        </div>
      </figure>


      <!--    Warum Volkert    -->
      <figure class="flex bg-gray-800 mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 ml-5 text-white">
        <div class="p-8 text-left ">
          <div class="bigText mx-auto flex justify-center text-center">Warum Volkert?</div>
          <ul class="list-disc text list-insides ">
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
    <figure class="flex bg-gray-100 mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 mt-40">
      <div class="p-8">

        <div class="p-8 flex justify-center text-center space-y-0 flex-col">
          <div class="text font-bold mx-auto flex justify-center">Technische Daten</div>
          <div class="text_normal text-left">Abmessung in BxLxH</div>
          <div class="text  text-left">800 x 1200 x 1800 mm (Kompaktversion)</div>
          <div class="text_normal  text-left">Arbeitsbereich</div>
          <div class="text  text-left">400 mm³ (Kompaktversion), bis 3200 mm³</div>
        </div>


        <!--    Downloadbutton (nur Klick auf den Text funktioniert)   -->
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center mt-8 mx-auto flex justify-center text-center"
          @click="$store.dispatch('downloadItem')">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a>DOWNLOAD FLYER</a>
        </button>

      </div>
    </figure>


    <!--    Logos der Roboterhersteller    -->
    <div class="grid w-5/6 mx-auto grid-cols-4 gap-4 flex items-center mt-40">
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
    <div class="text font-bold mx-auto flex justify-center text-center mt-40">
      Wissen Sie schon, was wir neben der VCELL anbieten? Oder wissen Sie, wie wir unsere Qualität garantieren?
    </div>

    <div class="angebotButton w-2/6 mx-auto flex flex-row mb-40">
      <button
        class="flex-auto bg-transparent hover:bg-gray-200 border border-gray-400 hover:border-transparent rounded-md h-24 lg:h-16"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/'">
        Leistungen
      </button>
      <button
        class="flex-auto bg-transparent hover:bg-gray-200 border border-gray-400 hover:border-transparent rounded-md h-24 lg:h-16 mx-2"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/360-Grad-Made-in-Germany/'">
        360 Grad - Made in Germany
      </button>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import CounterSquared from "../components/CounterSquared.vue";
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
