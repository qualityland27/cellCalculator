import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'
import usb from '../assets/icons/usb.svg'

export default createStore({
  state: {
    counter: 0,
    schweißArt: "",
    withoutSchweißart: 0,
    wig: 8900,
    mig_mag: 18500,
    aufpreisSchweißArt: 0,

    nahtSuchSystem: "",
    without: 0,
    gas: 1800,
    camera: 18900,
    aufpreisSuchSystem: 0,

    absaugung: "",
    withoutAbsaugung: 0,
    einmalFilter: 3900,
    selbstreinigenderFilter: 6900,
    aufpreisAbsaugung: 0,

    logging: "",
    withoutdatenLogging: 0,
    withDatenLogging: 4450,
    aufpreisLogging: 0,

    montage: "",
    withoutMontage: 0,
    withMontage: 3900,
    aufpreisMontage: 0,

    produktionsbegleitung: "",
    withoutProduktionsbegleitung: 0,
    withProduktionsbegleitung: 680,
    aufpreisProduktionsbegleitung: 0,

    schulung: "",
    withoutSchulung: 0,
    withSchulung: 4890,
    aufpreisSchulung: 0,

    startPrice: 39990,
    calculatedPrice: 39990, 

    elementVisible: true,
  },




  mutations: {
    // To change Data within the state, können die Dinger von überall triggern, kein asynchroner Code hier möglich
    // man nennt das Aufrufen, commit
    wait () {
      setTimeout(() => this.elementVisible = false, 1000)
    },

    increasecounter(state, randomNumber) {
      console.log('random number: ', randomNumber)
      state.counter += randomNumber

    },
    decreasecounter(state) {
      state.counter--

    },
    calculatePrice (state) {
      state.schweißArt = document.getElementById("dropDownSchweißArt");
      console.log(state.schweißArt.value);

      state.nahtSuchSystem = document.getElementById("dropDownSchweißNahtSuchSystem");
      console.log(state.nahtSuchSystem.value);

      state.absaugung = document.getElementById("dropDownAbsaugung");
      console.log(state.absaugung.value);

      state.logging = document.getElementById("dropDownDatenLogging");
      console.log(state.logging.value);

      state.montage = document.getElementById("dropDownMontage");
      console.log(state.montage.value);

      state.produktionsbegleitung = document.getElementById("dropDownProduktionsbegleitung");
      console.log(state.produktionsbegleitung.value);

      state.schulung = document.getElementById("dropDownSchulung");
      console.log(state.schulung.value);

      if ( state.schweißArt.value == "withoutSchweißart" ) {
        state.aufpreisSchweißArt = state.withoutSchweißart;
      } else if (state.schweißArt.value == "wig") {
        state.aufpreisSchweißArt = state.wig;
      } else if (state.schweißArt.value == "mig_mag") {
        state.aufpreisSchweißArt = state.mig_mag;
      }
      console.log(state.aufpreisSchweißArt);

      if ( state.nahtSuchSystem.value == "without" ) {
        state.aufpreisSuchSystem = state.without;
      } else if (state.nahtSuchSystem.value == "gas") {
        state.aufpreisSuchSystem = state.gas;
      } else if (state.nahtSuchSystem.value == "camera") {
        state.aufpreisSuchSystem = state.camera;
      }
      console.log(state.aufpreisSuchSystem);

      if ( state.absaugung.value == "withoutAbsaugung" ) {
        state.aufpreisAbsaugung = state.withoutAbsaugung;
      } else if (state.absaugung.value == "einmalFilter") {
        state.aufpreisAbsaugung = state.einmalFilter;
      } else if (state.absaugung.value == "selbstreinigenderFilter") {
        state.aufpreisAbsaugung = state.selbstreinigenderFilter;
      }
      console.log(state.aufpreisAbsaugung);

      if ( state.logging.value == "withoutDatenLogging" ) {
        state.aufpreisLogging = state.withoutdatenLogging;
      } else if (state.logging.value == "withDatenLogging") {
        state.aufpreisLogging = state.withDatenLogging;
      }
      console.log(state.aufpreisLogging);

      if ( state.montage.value == "withoutMontage" ) {
        state.aufpreisMontage = state.withoutMontage;
      } else if (state.montage.value == "withMontage") {
        state.aufpreisMontage = state.withMontage;
      }
      console.log(state.aufpreisMontage);

      if ( state.produktionsbegleitung.value == "withoutProduktionsbegleitung" ) {
        state.aufpreisProduktionsbegleitung = state.withoutProduktionsbegleitung;
      } else if (state.produktionsbegleitung.value == "withProduktionsbegleitung") {
        state.aufpreisProduktionsbegleitung = state.withProduktionsbegleitung;
      }
      console.log(state.aufpreisProduktionsbegleitung);

      if ( state.schulung.value == "withoutSchulung" ) {
        state.aufpreisSchulung = state.withoutSchulung;
      } else if (state.schulung.value == "withSchulung") {
        state.aufpreisSchulung = state.withSchulung;
      }
      console.log(state.aufpreisSchulung);

      var price = state.startPrice + state.aufpreisSchweißArt + state.aufpreisSuchSystem + state.aufpreisAbsaugung + state.aufpreisLogging + state.aufpreisMontage + state.aufpreisProduktionsbegleitung + state.aufpreisSchulung;
      
      state.calculatedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    sendEmail(state)
    {
      console.log("HI");
      var newLine = "%0D%0A";
      var body = "Hallo liebes Team von Volkert, " + newLine + newLine + "bitte senden Sie mir ein Angebot und einen Beratungsterminvorschlag für das Automatisierungsmodul vCell mit den folgenden Paramtern:" + newLine + newLine + 
          "Schweißart: " + state.schweißArt.value + newLine + 
          "Such System: " + state.nahtSuchSystem.value + newLine + 
          "Absaugung: " + state.absaugung.value + newLine + 
          "Daten Logging: " + state.logging.value + newLine + 
          "Montage und Inbetriebnahme: " + state.montage.value + newLine + 
          "Produktionsbegleitung: " + state.produktionsbegleitung.value + newLine + 
          "Schulung: " + state.schulung.value + newLine;
      var mail = "mailto:info@volkert.net?subject=Anfrage&body=" + body;
      window.location = mail;
    },

    printPage(state) {
      window.print();
    },

    resetSelects(state) {
      var dropDownSchweißArt = document.getElementById("dropDownSchweißArt");
      dropDownSchweißArt.selectedIndex = 0;

      var dropDownSchweißNahtSuchSystem = document.getElementById("dropDownSchweißNahtSuchSystem");
      dropDownSchweißNahtSuchSystem.selectedIndex = 0;

      var dropDownAbsaugung = document.getElementById("dropDownAbsaugung");
      dropDownAbsaugung.selectedIndex = 0;

      var dropDownDatenLogging = document.getElementById("dropDownDatenLogging");
      dropDownDatenLogging.selectedIndex = 0;

      var dropDownMontage = document.getElementById("dropDownMontage");
      dropDownMontage.selectedIndex = 0;

      var dropDownProduktionsbegleitung = document.getElementById("dropDownProduktionsbegleitung");
      dropDownProduktionsbegleitung.selectedIndex = 0;

      var dropDownSchulung = document.getElementById("dropDownSchulung");
      dropDownSchulung.selectedIndex = 0;
    },

    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },

    scrollToElement(state, payload) {

      console.log(state)
      console.log(payload);
      // document.getElementById('header1').scrollIntoView({ behavior: 'smooth' })

      if (payload == "overview") {
        document.getElementById('plugAndPlayHeader').scrollIntoView({ behavior: 'smooth' })
      } else if (payload == "whyVPrint") {
        document.getElementById('intelligentConstructionHeader').scrollIntoView({ behavior: 'smooth' })
      } else if (payload == "technicalDetails") {
        document.getElementById('technicalDetailsHeader').scrollIntoView({ behavior: 'smooth' })
      }
    },

    sendPrinterEmail(state)
    {
      console.log("Sending Printer Mail");
      var newLine = "%0D%0A";
      var body = "Hallo liebes Team von Volkert, " + newLine + newLine + "bitte senden Sie mir ein Angebot für den vPrint." + newLine + newLine + "Mit freundlichen Grüßen," + newLine
 
      var mail = "mailto:info@volkert.net?subject=Anfrage vPrint&body=" + body;
      window.location = mail;
    },

  },




  actions: {
    // Sind auch Methods
    // Können Daten von State lesen aber nicht ändern, hier geht asynchroner code, reach out for ui, wait for respone ect..
    // man nennt dispatch
    increasecounter ({ commit }) {
      console.log("increaseCounter (action)")
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increasecounter', response.data)
      })
    },

    async downloadItem() {
      const url = 'Volkert_Flyer_A4_VCell.pdf';
      const label = 'Volkert_Flyer_A4_VCell'
      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = label;
      link.click();
      URL.revokeObjectURL(link.href);
    },

    reset ( {commmit} ) {
      this.commit('resetSelects')
      this.commit('calculatePrice')
    }
  },




  getters: {
    counterSquared (state) {
      return state.counter * state.counter
    },
    wigAufpreis (state) {
      return state.wig.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    mig_magAufpreis (state) {
      return state.mig_mag.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    gasAufpreis (state) {
      return state.gas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },    
    cameraAufpreis (state) {
      return state.camera.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    einmalFilterAufpreis (state) {
      return state.einmalFilter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },    
    selbstreinigenderFilterAufpreis (state) {
      return state.selbstreinigenderFilter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    loggingAufpreis (state) {
      return state.withDatenLogging.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    montageAufpreis (state) {
      return state.withMontage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    produktionsbegleitungAufpreis (state) {
      return state.withProduktionsbegleitung.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    schulungAufpreis (state) {
      return state.withSchulung.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    price (state) {
      return state.calculatedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    // hier könne Daten nochmal bearbeitete werden bevor sie überall zur Verfügung getellt werden
  },
  modules: {
  }
})
