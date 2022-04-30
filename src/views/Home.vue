<template>
  <div class="home">
    <div class="title w-5/6 mx-auto flex justify-center">
      Ein Produkt. Deine Anforderungen.
    </div>
    <div class="flex justify-center">
      <img src="../assets/separator.jpg" width="1200" />
    </div>
    <div class="sub-title w-5/6 mx-auto flex text-justify text-center">
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
    <div class="w-5/6 mx-auto flex justify-center content-center mt-40 ">
      <div class="w-1/2 items-center justify-center mx-4">
        <img alt="Vue" class="logo bg-white" src="../assets/vCell3.png" />
        <!-- <div class="rounded-sm " width="500" height="500"></div>
        <div class="rounded-full h-24 w-24 flex items-center justify-center bg-blue-400 mx-auto">Circle</div>
        <div class="rounded-none bg-blue-400 text-center w- h-96" >.rounded-none</div> -->
      </div>

      <div class="w-1/2">
        <!--    Gesamtpreis   -->
        <!-- <div class="font-bold">Gesamtpreis:</div> -->
        <div class="price m-0">ab {{ $store.state.calculatedPrice }} €</div>
        <div class="kleingedrucktes">zzgl. MwSt.</div>

        <!-- <counter />
        <counter-squared /> -->

        <!-- <div class="buttons">
          <button @click="$store.commit('decreasecounter')" >-</button>
          <button @click="$store.dispatch('increasecounter')">+</button>
        </div> -->


        <!--    ------------------------------    -->
        <!--  Schweißpaket: Header and Drop Down  -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Schweißpaket:</div>

        <select
          class="border-solid border-2 border-light-blue-500 w-80"
          @change="$store.commit('calculatePrice')"
          id="dropDownSchweißArt"
        >
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
        <select
          class="border-solid border-2 border-light-blue-500 w-80"
          @change="$store.commit('calculatePrice')"
          id="dropDownSchweißNahtSuchSystem"
        >
          <option value="without">Ohne (+0 Euro)</option>
          <option value="gas">Gasdüse (+{{ $store.getters.gasAufpreis }} Euro)</option>
          <option value="camera"> Kamera (+{{ $store.getters.cameraAufpreis }} Euro) </option>
        </select>


        <!--    ------------------------------    -->
        <!--    Absaugung: Header and Drop Down    -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Absaugung:</div>

        <select
          class="border-solid border-2 border-light-blue-500 w-80"
          @change="$store.commit('calculatePrice')"
          id="dropDownAbsaugung">

          <option value="withoutAbsaugung">Ohne (+0 Euro)</option>
          <option value="einmalFilter"> Mit Einmalfilter (+{{ $store.getters.einmalFilterAufpreis }} Euro)</option>
          <option value="selbstreinigenderFilter">Mit selbstreinigendem Filter (+{{ $store.getters.selbstreinigenderFilterAufpreis }} Euro)</option>
        </select>


        <!--    ------------------------------    -->
        <!--    DatenLogging: Header and Drop Down    -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Daten Logging:</div>

        <select
          class="border-solid border-2 border-light-blue-500 w-80"
          @change="$store.commit('calculatePrice')"
          id="dropDownDatenLogging">

          <option value="withoutDatenLogging">Ohne (+0 Euro)</option>
          <option value="withDatenLogging"> Mit Datenlogging (+{{ $store.getters.loggingAufpreis }} Euro)</option>
        </select>


        <!--    ---------------------------------------    -->
        <!--    Montage/Inbetrieb: Header and Drop Down    -->
        <!--    ---------------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Montage und Inbetriebnahme:</div>

        <select
          class="border-solid border-2 border-light-blue-500 w-80"
          @change="$store.commit('calculatePrice')"
          id="dropDownMontage">

          <option value="withoutMontage">Ohne (+0 Euro)</option>
          <option value="withMontage">Mit Montage und Inbetriebnahme (+{{ $store.getters.montageAufpreis }} Euro)</option>
        </select>


        <!--    -----------------------------------------    -->
        <!--    Produktionsbegleit.: Header and Drop Down    -->
        <!--    -----------------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Produktionsbegleitung:</div>

        <select
          class="border-solid border-2 border-light-blue-500 w-80"
          @change="$store.commit('calculatePrice')"
          id="dropDownProduktionsbegleitung">

          <option value="withoutProduktionsbegleitung">Ohne (+0 Euro)</option>
          <option value="withProduktionsbegleitung">Ein Tag Produktionsbegleitung (+{{ $store.getters.produktionsbegleitungAufpreis }} Euro)</option>
        </select>


        <!--    ------------------------------    -->
        <!--    Schulung: Header and Drop Down    -->
        <!--    ------------------------------    -->
        <div class="font-bold bottom-4 mt-4">Schulung:</div>

        <select
          class="border-solid border-2 border-light-blue-500 w-80"
          @change="$store.commit('calculatePrice')"
          id="dropDownSchulung">

          <option value="withoutSchulung">Ohne (+0 Euro)</option>
          <option value="withSchulung">
            Mit Schulung (+{{ $store.getters.schulungAufpreis }} Euro)
          </option>
        </select>








 
        <!--    Buttons    -->
        <div class="resetButton flex flex-row">
          <button
            class="
              flex-auto
              rounded-md
              border-solid border-2 border-light-blue-500
              text-black
              h-16
            "
            @click="$store.dispatch('reset')"
          >
            Auswahl zurücksetzen
          </button>
        </div>

        <div class="angebotButton flex flex-row">
          <button
            class="flex-auto font-bold bg-test-color rounded-md text-white h-16"
            @click="$store.commit('sendEmail')"          >
            Angebot anfordern
          </button>
          <button
            class="flex-auto bg-gray-400 rounded-md h-16 w-24 mx-2"
            @click="$store.commit('printPage')"          >
            Drucken
          </button>
        </div>

        <!-- <div class="price font-bold "> 
            Gesamtpreis: {{ $store.state.calculatedPrice }} Euro
        </div> -->
      </div>
    </div>



    <figure class="md:flex bg-cement-color text-white mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 mt-40 h-96">
      <div class="md:p-8 text-center md:text-left ">
        <div class="bigText mx-auto flex justify-center text-center">Sonderwünsche - kein Problem!</div>
        <div class="text mx-auto flex justify-center text-center">Bauform, Roboter, Programmierung, Greifer, Spannvorrichtungen, Schweißparamter, Schweißnahtverfolgung etc.</div>
        <div class="text font-bold mx-auto flex justify-center text-center">Sprechen Sie uns einfach an!</div>
      </div>
    </figure>


    <div class="w-5/6 mx-auto flex justify-center content-center mt-10 h-96">
    <figure class="md:flex bg-gray-400 mx-auto justify-center rounded-xl p-8 md:p-0 dark:bg-slate-800 w-1/2 mr-5">
      <div class="md:p-8 text-center md:text-left ">
        <div class="bigText mx-auto flex justify-center text-center">Warum V-Cell?</div>
        <ul class="list-disc text list-insides ">
          <li>Zeitsparend – Schnell / einfach umrüstbar </li>
          <li>Robust – Einfache und effiziente Konstruktion</li>
          <li>Kompakte Bauform – Transport mit Stapler / Hubwagen</li>
          <li>Flexible Einsatzmöglichkeiten – Schweißen, Handling oder Maschinenbestückung, … </li>
        </ul>
      </div>
    </figure>
    <figure class="md:flex bg-gray-400 mx-auto justify-center rounded-xl p-8 md:p-0 dark:bg-slate-800 w-1/2 ml-5">
      <div class="md:p-8 text-center md:text-left ">
        <div class="bigText mx-auto flex justify-center text-center">Warum Volkert?</div>
          <ul class="list-disc text list-insides ">
          <li>100% Flexibilität – wir passen uns ihren Bedürfnissen an</li>
          <li>360° Made in Germany – von Entwicklung bis Fertigung</li>
          <li>Höchste Qualität – durch Leidenschaft</li>
          <li>Experten im Schweißbereich</li>
          <li>Schnelle Lieferung</li>
        </ul>
      </div>
    </figure>
    </div>

    

    <figure class="md:flex bg-white mx-auto justify-center rounded-xl p-8 md:p-0 w-1/2 mt-40 h-96">
      <div class="md:p-8 text-center md:text-left ">
        <div class="text font-bold mx-auto flex justify-center text-center">Technische Daten</div>

      <div class="flex mx-auto">
        <div class="flex-none w-64">
          <ul class="list-none text list-insides ">
            <li>Abmessung in BxLxH</li>
            <li>Arbeitsbereich</li>
            <li>Traglasten</li>
            <li>Schweißverfahren</li>
            <li>Roboter</li>
          </ul>
        </div>
        <div class="flex-none w-96">
          <ul class="list-none text list-insides ">
            <li>800 x 1200 x 1800 mm (Kompaktversion)</li>
            <li>400 mm³ (Kompaktversion), bis 3200 mm³</li>
            <li>3 kg (Kompaktversion), max. 250 kg</li>
            <li>MAG, MIG, WIG, CMT, Plasma</li>
            <li>Yaskawa, ABB, Fanuc</li>
          </ul>
        </div>
      </div>
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
        class="flex-auto bg-transparent hover:bg-gray-400 border border-gray-400 hover:border-transparent rounded-md h-16"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/'">
        Leistungen
      </button>
      <button
        class="flex-auto bg-transparent hover:bg-gray-400 border border-gray-400 hover:border-transparent rounded-md h-16 w-24 mx-2"
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
  },
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
.bigText{
  font-weight: light;
  font-size: 52px;
  margin-top: 40;
  margin-bottom: 40px;
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
