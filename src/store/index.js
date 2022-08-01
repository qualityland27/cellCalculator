import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'
import usb from '../assets/icons/usb.svg'
import colors from 'tailwindcss/colors'

export default createStore({
  state: {
    counter: 0,

    weldingAttributes: [
      { name: 'weldingTypes', selectedPrice: '0', },
      { name: 'searchSystems', selectedPrice: '0', },
    ],

    schweißArt: "",
    withoutSchweißart: 0,
    wig: 8900,
    mig_mag: 18500,
    aufpreisSchweißArt: 0,
    chargeWeldingType: 0,
    weldingTypes: [
      { name: 'ohne', price: 0, },
      { name: 'wig', price: 8900, },
      { name: 'migMag', price: 18500, },
    ],

    nahtSuchSystem: "",
    without: 0,
    gas: 1800,
    camera: 18900,
    aufpreisSuchSystem: 0,
    searchSystems: [
      { name: 'ohne', price: '0', },
      { name: 'wig', price: '8900', },
      { name: 'migMag', price: '18500', },
    ],

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

    show_mobile_nav_bar: false,

    isMobile: false,

    weldingTypeList_none: true,
    weldingTypeList_wig: false,
    weldingTypeList_mig_mag: false,

    // weldingTypeList: { name, price, selected}

    modalVisible: false,

    weldingIconBlk_visible: false,
    grippingIconBlk_visible: true,

    weldingApplicationSelected: true,
    grippingApplicationSelected: false,

    notClickedYet: true


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

    isMobile(state) {
      if (screen.width < 600) {
        state.isMobile = true;

      } else {
        state.isMobile = false;
      }
    },

    change_show_mobile_nav_bar (state) {
      if (state.shows_mobile_nav_bar == false ) {
        state.show_mobile_nav_bar = true;
      } else {
        state.show_mobile_nav_bar = false;
      }
    },

    //
    // Change Selection Code
    //
    handle_welding_type_none(state) {
      console.log("handle_welding_type_none");

      const green = colors.green[600]; // #16a34a
      const gray = colors.gray[300];
      const volkert_blue = '#0E3083';
      const white = '#ffffff'
      const black = '#000000'

      var welding_type_none_btn = document.getElementById('welding_type_none_btn');
      var welding_type_wig_btn = document.getElementById('welding_type_wig_btn');
      var welding_type_migmag_btn = document.getElementById('welding_type_migmag_btn');


      state.weldingTypeList_none = true;
      state.weldingTypeList_wig = false;
      state.weldingTypeList_mig_mag = false;


    },

    handle_welding_type_wig(state) {
      console.log("handle_welding_type_wig");

      state.weldingTypeList_none = false;
      state.weldingTypeList_wig = true;
      state.weldingTypeList_mig_mag = false;


    },


    handle_welding_type_migmag(state) {
      console.log("handle_welding_type_wig");

      state.weldingTypeList_none = false;
      state.weldingTypeList_wig = false;
      state.weldingTypeList_mig_mag = true;
    },


    calculate_price_checkbox(state) {
      console.log("within method calculate_price_checkbox");

      //
      // Get all WeldingTypes
      //
      var selected_weldingType = document.getElementsByName('weldingType');
      console.log(selected_weldingType);

      //
      // Iterate over weldingTypes and search for checked one
      // Put price into separate global variable
      //
      for (var i = 0; i < selected_weldingType.length; i++) {
        if (selected_weldingType[i].checked == true) {
          state.chargeWeldingType = state.weldingTypes[i].price
        }
      }




      var price = state.startPrice + state.chargeWeldingType;

      state.calculatedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    handle_modal (state) {
      console.log("in handle_modal")
      let modal = document.getElementById("small-modal");
      if (state.modalVisible == true) {
        modal.style.display = "none";
        state.modalVisible = false;
      } else {
        modal.style.display = "block";
        state.modalVisible = true;
      }
    },

    // handle_welding_btn (state) {

    //   if (state.weldingIconBlk_visible) {
    //     document.getElementById('welding_icon_color').style.visibility = 'visible';
    //     document.getElementById('welding_icon_blk').style.visibility = 'hidden';
    //     state.weldingIconBlk_visible = false;
    //   } else {
    //     document.getElementById('welding_icon_color').style.visibility = 'hidden';
    //     document.getElementById('welding_icon_blk').style.visibility = 'visible';
    //     state.weldingIconBlk_visible = true;
    //   }

    // },


    handle_weldingIconBlk_visible(state) {
      console.log("in welding")

      if (state.weldingApplicationSelected == false) {
        state.weldingApplicationSelected = !state.weldingApplicationSelected;
        state.grippingApplicationSelected = !state.grippingApplicationSelected
      }
    },
    handle_grippingIconBlk_visible(state) {
      console.log("in gripping")

      if (state.grippingApplicationSelected == false) {
        state.weldingApplicationSelected = !state.weldingApplicationSelected;
        state.grippingApplicationSelected = !state.grippingApplicationSelected
      }

    },
    show_initial_info(state) {
      let initialInfoModal = document.getElementById("initialInfo-modal");

      if (state.notClickedYet == true) {
        console.log("show initial Info Modal");
        initialInfoModal.style.display = "block";
        state.notClickedYet = false;
      } else {
        initialInfoModal.style.display = "none";
      }
    }
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
    },

    isMobile () {
      console.log("i am here")
      console.log(screen.width)

      if (screen.width < 600) {
        console.log("true block")
        return true

      } else {
        console.log("false block")
        return false
      }
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
    },
    isMobile(state) {
      return state.isMobile
    },
    show_mobile_nav_bar(state) {
      return state.show_mobile_nav_bar
    },
    weldingIconBlk_visible(state) {
      return state.weldingIconBlk_visible
    },
    grippingIconBlk_visible(state) {
      return state.grippingIconBlk_visible
    },
    weldingApplicationSelected(state) {
      return state.weldingApplicationSelected
    },
    grippingApplicationSelected(state) {
      return state.grippingApplicationSelected
    }
    // hier könne Daten nochmal bearbeitete werden bevor sie überall zur Verfügung getellt werden
  },
  modules: {
  }
})
