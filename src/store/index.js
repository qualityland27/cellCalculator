import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'
import usb from '../assets/icons/usb.svg'
import colors from 'tailwindcss/colors'
import emailjs from 'emailjs-com';

export default createStore({
  state: {
    counter: 0,

    userMessage: '',

    allAlltributes: [
      { name: 'size', name_de:'Größe und Traglast' , checked: false, selectedElement: null},
      { name: 'weldingType', name_de: 'Schweißpaket', checked: false, selectedElement: null },
      { name: 'searchSystem', name_de: 'Schweißnahtsuchsystem', checked: false, selectedElement: null },
      { name: 'exhaustSystem', name_de: 'Absaugung', checked: false, selectedElement: null },
      { name: 'gripper', name_de: 'Greifer', checked: false, selectedElement: null },
      { name: 'measuring', name_de: 'Messstation', checked: false, selectedElement: null },
      { name: 'singualizer', name_de: 'Vereinzler', checked: false, selectedElement: null },
      { name: 'dataLogging', name_de: 'Datenlogging', checked: false, selectedElement: null },
      { name: 'assemblyService', name_de: 'Montage und Inbetriebnahme', checked: false, selectedElement: null },
      { name: 'productionSupport', name_de: 'Produktionsbegleitung', checked: false, selectedElement: null },
      { name: 'scooling', name_de: 'Schulung', checked: false, selectedElement: null },
    ],

    chargeSize: 0,
    // sizes: [
    //   { name: 'standard', price: 0, },
    //   { name: 'compact', price: -9900, },
    // ],

    schweißArt: "",
    withoutSchweißart: 0,
    wig: 8900,
    mig_mag: 18500,
    aufpreisSchweißArt: 0,
    // chargeWeldingType: 0,
    // weldingTypes: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'wig', price: 8900, },
    //   { name: 'migMag', price: 18500, },
    // ],

    nahtSuchSystem: "",
    without: 0,
    gas: 1800,
    camera: 18900,
    aufpreisSuchSystem: 0,
    // chargeSearchSystem: 0,
    // searchSystems: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'gas', price: 1800, },
    //   { name: 'camera', price: 18900, },
    // ],

    absaugung: "",
    withoutAbsaugung: 0,
    einmalFilter: 3900,
    selbstreinigenderFilter: 6900,
    aufpreisAbsaugung: 0,
    // chargeExhaustSystem: 0,
    // exhaustSystems: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'gas', price: 3900, },
    //   { name: 'camera', price: 6900, },
    // ],

    logging: "",
    withoutdatenLogging: 0,
    withDatenLogging: 4450,
    aufpreisLogging: 0,
    // chargeDataLogging: 0,
    // dataLoggingSystems: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'logging', price: 4450, },
    // ],

    // chargeMeasuring: 0,
    // measuringySystems: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'length-measuring', price: 4450, },
    //   { name: 'optical-measuring', price: 16750 },
    // ],

    // Gripper
    // grippingSystems: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'parallel', price: 3900, },
    //   { name: 'vaccum', price: 6900 },
    //   { name: 'magentic', price: 8900 },
    // ],

    // chargeSingualizer: 0,
    // singualizerSystems: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'length-measuring', price: 4450, },
    //   { name: 'optical-measuring', price: 16750 },
    // ],

    //  Assembly Service
    // assemblyServices: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'with-assemblyService', price: 3900, },
    // ],

    // Production Support
    // productionSupportServices: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'one-day', price: 680, },
    //   { name: 'two-days', price: 1360, },
    // ],

    // Scooling
    // scoolingServices: [
    //   { name: 'ohne', price: 0, },
    //   { name: 'with-scooling', price: 4890, },
    // ],


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
    wait() {
      setTimeout(() => this.elementVisible = false, 1000)
    },

    increasecounter(state, randomNumber) {
      console.log('random number: ', randomNumber)
      state.counter += randomNumber

    },
    decreasecounter(state) {
      state.counter--

    },
    calculatePrice(state) {
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

      if (state.schweißArt.value == "withoutSchweißart") {
        state.aufpreisSchweißArt = state.withoutSchweißart;
      } else if (state.schweißArt.value == "wig") {
        state.aufpreisSchweißArt = state.wig;
      } else if (state.schweißArt.value == "mig_mag") {
        state.aufpreisSchweißArt = state.mig_mag;
      }
      console.log(state.aufpreisSchweißArt);

      if (state.nahtSuchSystem.value == "without") {
        state.aufpreisSuchSystem = state.without;
      } else if (state.nahtSuchSystem.value == "gas") {
        state.aufpreisSuchSystem = state.gas;
      } else if (state.nahtSuchSystem.value == "camera") {
        state.aufpreisSuchSystem = state.camera;
      }
      console.log(state.aufpreisSuchSystem);

      if (state.absaugung.value == "withoutAbsaugung") {
        state.aufpreisAbsaugung = state.withoutAbsaugung;
      } else if (state.absaugung.value == "einmalFilter") {
        state.aufpreisAbsaugung = state.einmalFilter;
      } else if (state.absaugung.value == "selbstreinigenderFilter") {
        state.aufpreisAbsaugung = state.selbstreinigenderFilter;
      }
      console.log(state.aufpreisAbsaugung);

      if (state.logging.value == "withoutDatenLogging") {
        state.aufpreisLogging = state.withoutdatenLogging;
      } else if (state.logging.value == "withDatenLogging") {
        state.aufpreisLogging = state.withDatenLogging;
      }
      console.log(state.aufpreisLogging);

      if (state.montage.value == "withoutMontage") {
        state.aufpreisMontage = state.withoutMontage;
      } else if (state.montage.value == "withMontage") {
        state.aufpreisMontage = state.withMontage;
      }
      console.log(state.aufpreisMontage);

      if (state.produktionsbegleitung.value == "withoutProduktionsbegleitung") {
        state.aufpreisProduktionsbegleitung = state.withoutProduktionsbegleitung;
      } else if (state.produktionsbegleitung.value == "withProduktionsbegleitung") {
        state.aufpreisProduktionsbegleitung = state.withProduktionsbegleitung;
      }
      console.log(state.aufpreisProduktionsbegleitung);

      if (state.schulung.value == "withoutSchulung") {
        state.aufpreisSchulung = state.withoutSchulung;
      } else if (state.schulung.value == "withSchulung") {
        state.aufpreisSchulung = state.withSchulung;
      }
      console.log(state.aufpreisSchulung);

      var price = state.startPrice + state.aufpreisSchweißArt + state.aufpreisSuchSystem + state.aufpreisAbsaugung + state.aufpreisLogging + state.aufpreisMontage + state.aufpreisProduktionsbegleitung + state.aufpreisSchulung;

      state.calculatedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    sendEmail(state) {
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

    sendPrinterEmail(state) {
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

    change_show_mobile_nav_bar(state) {
      if (state.shows_mobile_nav_bar == false) {
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

    read_selected_attributes(state) {
      console.log('In read_selected_attributes')
      // take name out of array with all attribute names
      for (const attribute of state.allAlltributes) {
        // search selection element by name
        var selection = document.getElementsByName(attribute.name);

        // search for checked ones and make them false
        for (var i = 0; i < selection.length; i++) {
          if (selection[i].checked == true) {
            try {
              var selectedElement = selection[i].nextElementSibling.firstElementChild.firstElementChild.firstElementChild.textContent;
              attribute.selectedElement = selectedElement;
              attribute.checked = true;
            } catch (e) {
            }
          }
        }
      }
    },

    get_message_body(state, newLine){
      console.log('in get_message_body klappt')

      let body = 
        "Hallo liebes Team von Volkert, " + newLine + newLine + 
        "bitte senden Sie mir ein Angebot und einen Beratungsterminvorschlag für das Automatisierungsmodul vCell mit den folgenden Parametern: " + 
        newLine + newLine

      if (state.weldingApplicationSelected == true) {
        body = body + 'Anwendung: Schweißanwendung' + newLine;
      }
      if (state.grippingApplicationSelected == true) {
        body = body + newLine + 'Anwendung: Handlinganwendung' + newLine;
      }

      // this.read_selected_attributes(state);

      this.commit('read_selected_attributes', state);

      // search for checked ones and make them false
      for (const attribute of state.allAlltributes) {
        if (attribute.checked == true) {
          try {
            body = body + attribute.name_de + ": " + attribute.selectedElement + newLine
          } catch (e) {
            console.log(e)
          }
        }
      }

      body = body + newLine + 'Projekttitel: '
      body = body + newLine + 'Kurzschreibung der Anwendung:'

      state.userMessage = body;
    },

    sendmail_wiht_mailjs(state) {
      console.log("in sendmail_mailjs");

      // Get value from Elements
      let firstName = document.getElementById("firstName").value;
      let userEmail;
      if (document.getElementById("copy").checked == true) {
        userEmail = document.getElementById("email").value;
      } else {
        userEmail = '';
      }
      let userMessage = document.getElementById("inquiry-message").value;

      // create message; message is stored in state.userMessage
      let newwLine = "";
      this.commit('get_message_body', newwLine);

      var contactParams = {
        from_name: firstName,
        from_mail: userEmail,
        message: state.userMessage
      }

      let service_id = 'service_0rvlx6p';
      let template_id = 'template_3mdygx9';
      let user_id = 'NXyeeKI9WXn5r3uy6';

      emailjs.init(user_id);
      emailjs.send(service_id, template_id, contactParams).then(() => {
        alert('Message sent!')
      }, (error) => {
        alert('Message not sent', error);
      }); 
    },

    sendEmail_with_clientsDefaultProgram(state) {
      console.log("in sendEmail_checkboxes");

      // create message; message is stored in state.userMessage
      let newwLine = "%0D%0A";
      this.commit('get_message_body', newwLine);

      var mail = "mailto:info@volkert.net?subject=Anfrage&body=" + state.userMessage;
      window.location = mail;
    },

    reset_checkboxes(state) {
      console.log('in reset_checkboxes')
      // take name out of array with all attribute names
      for (const elementName of state.allAlltributes) {
        // search selection element by name
        var selection = document.getElementsByName(elementName.name);
        // search for checked ones and make them false
        for (var i = 0; i < selection.length; i++) {
          if (selection[i].checked == true) {
            selection[i].checked = false;
          }
        }
        // search for the first one and make it checked
        try {
          for (var i = 0; i < 1; i++) {
            selection[i].checked = true;
          }
        }
        catch (e) {
        }
      }
    },

    // This Method calcualtes the price using selcted items from selection.
    // Base is the names of the selection which is stored in array (state.allAttributes)
    calculate_price_checkbox(state) {
      console.log("within method calculate_price_checkbox");
      const charges = []
      // take name out of array with all attribute names
      for (const elementName of state.allAlltributes) {
        // search selection elementName by name
        var selection = document.getElementsByName(elementName.name);
        // search for checked ones. take price out of the tag, remove all charactes except - and convert to number
        try {
          for (var i = 0; i < selection.length; i++) {
            if (selection[i].checked == true) {
              const str = selection[i].nextElementSibling.firstChild.lastChild.lastChild.textContent;
              // console.log(str)
              const onlyNumbers = str.replace(/[^\d-]/g, '');
              charges.push(parseInt(onlyNumbers))
            }
          }
        }
        catch (e) { }
      }







      // ///////////////////////
      // // SIZE AND WORKLOAD //
      // ///////////////////////

      // //////////////////////////////////
      // // Get Selection with name size //
      // //////////////////////////////////
      // var allSizes = document.getElementsByName('size');

      // // Iterate over allSizes and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allSizes.length; i++) {
      //   if (allSizes[i].checked == true) {
      //     // state.chargeSize = state.sizes[i].price
      //     // console.log((allSizes[i].nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.textContent))
      //     const str = allSizes[i].nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.textContent;
      //     // console.log(str)
      //     const onlyNumbers = str.replace(/[^\d-]/g, '');
      //     // console.log('onlyNumbers')
      //     console.log(parseInt(onlyNumbers))
      //     charges.push(parseInt(onlyNumbers))
      //     // charges.push(state.sizes[i].price)

      //     // console.log(typeof state.sizes[i].price)
      //   }
      // }




      // ////////////////////////
      // // WELDING ATTRIBUTES //
      // ////////////////////////

      // /////////////////////////////////////////
      // // Get Selection with name weldingType //
      // /////////////////////////////////////////
      // var allWeldingTypes = document.getElementsByName('weldingType');

      // // Iterate over weldingTypes and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allWeldingTypes.length; i++) {
      //   if (allWeldingTypes[i].checked == true) {
      //     // state.chargeWeldingType = state.weldingTypes[i].price
      //     console.log((allWeldingTypes[i].nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.innerHTML))
      //     const str = allWeldingTypes[i].nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.innerHTML;
      //     const onlyNumbers = str.replace(/\D/g, '');
      //     console.log(onlyNumbers)
      //     charges.push(state.weldingTypes[i].price)
      //   }
      // }

      // //////////////////////////////////////////
      // // Get Selection with name searchSystem //
      // //////////////////////////////////////////
      // var AllSearchSystems = document.getElementsByName('searchSystem');

      // // Iterate over SearchSystems and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < AllSearchSystems.length; i++) {
      //   if (AllSearchSystems[i].checked == true) {
      //     // state.chargeSearchSystem = state.searchSystems[i].price
      //     charges.push(state.searchSystems[i].price)
      //   }
      // }

      // ///////////////////////////////////////////
      // // Get Selection with name exhaustSystem //
      // ///////////////////////////////////////////
      // var allExhaustSystems = document.getElementsByName('exhaustSystem');

      // // Iterate over SearchSystems and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allExhaustSystems.length; i++) {
      //   if (allExhaustSystems[i].checked == true) {
      //     // state.chargeExhaustSystem = state.exhaustSystems[i].price
      //     charges.push(state.exhaustSystems[i].price)
      //   }
      // }


      // ////////////////////////
      // // GRIPPING ATTRIBUTES //
      // ////////////////////////

      // /////////////////////////////////////////
      // // Get Selection with name gripper //
      // /////////////////////////////////////////
      // var allGrippers = document.getElementsByName('gripper');

      // // Iterate over allGrippers and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allGrippers.length; i++) {
      //   if (allGrippers[i].checked == true) {
      //     // state.chargeMeasuring = state.measuringySystems[i].price
      //     charges.push(state.grippingSystems[i].price)
      //   }
      // }

      // /////////////////////////////////////////
      // // Get Selection with name measuring //
      // /////////////////////////////////////////
      // var allMeasureTypes = document.getElementsByName('measuring');

      // // Iterate over allMeasureTypes and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allMeasureTypes.length; i++) {
      //   if (allMeasureTypes[i].checked == true) {
      //     // state.chargeMeasuring = state.measuringySystems[i].price
      //     charges.push(state.measuringySystems[i].price)
      //   }
      // }

      // /////////////////////////////////////////
      // // Get Selection with name singualizer //
      // /////////////////////////////////////////
      // var allSingualizerTypes = document.getElementsByName('singualizer');

      // // Iterate over allSingualizerTypes and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allSingualizerTypes.length; i++) {
      //   if (allSingualizerTypes[i].checked == true) {
      //     // state.chargeSingualizer = state.singualizerSystems[i].price
      //     charges.push(state.singualizerSystems[i].price)
      //   }
      // }



      // /////////////////////////
      // // SOFTWARE ATTRIBUTES //
      // /////////////////////////

      // //////////////////////////////////////////
      // // Get Selection with name dataLogging //
      // //////////////////////////////////////////
      // var allDataLogging = document.getElementsByName('dataLogging');

      // // Iterate over allDataLogging and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allDataLogging.length; i++) {
      //   if (allDataLogging[i].checked == true) {
      //     // state.chargeDataLogging = state.dataLoggingSystems[i].price
      //     charges.push(state.dataLoggingSystems[i].price)
      //   }
      // }



      // //////////////
      // // SERVICES //
      // //////////////

      // //////////////////////////////////////////
      // // Get Selection with name assemblyService //
      // //////////////////////////////////////////
      // var allAssemblyService = document.getElementsByName('assemblyService');

      // // Iterate over allAssemblyService and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allAssemblyService.length; i++) {
      //   if (allAssemblyService[i].checked == true) {
      //     // state.chargeDataLogging = state.dataLoggingSystems[i].price
      //     charges.push(state.assemblyServices[i].price)
      //   }
      // }

      // //////////////////////////////////////////
      // // Get Selection with name productionSupport //
      // //////////////////////////////////////////
      // var allProductionSupport = document.getElementsByName('productionSupport');

      // // Iterate over allAssemblyService and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allProductionSupport.length; i++) {
      //   if (allProductionSupport[i].checked == true) {
      //     // state.chargeDataLogging = state.dataLoggingSystems[i].price
      //     charges.push(state.productionSupportServices[i].price)
      //   }
      // }

      // //////////////////////////////////////////
      // // Get Selection with name scooling //
      // //////////////////////////////////////////
      // var allScooling = document.getElementsByName('scooling');

      // // Iterate over allAssemblyService and search for checked one
      // // Put price into separate global variable
      // for (var i = 0; i < allScooling.length; i++) {
      //   if (allScooling[i].checked == true) {
      //     // state.chargeDataLogging = state.dataLoggingSystems[i].price
      //     charges.push(state.scoolingServices[i].price)
      //   }
      // }










      charges.push(state.startPrice)


      // var price = state.startPrice + state.chargeSize + state.chargeWeldingType + state.chargeSearchSystem + state.chargeExhaustSystem + state.chargeDataLogging;
      var price2 = 0;
      for (var i = 0, n = charges.length; i < n; i++) {
        price2 += charges[i];
      }
      // console.log(price2)


      state.calculatedPrice = price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },

    handle_modal(state) {
      console.log("in handle_modal")
      let modal = document.getElementById("small-modal");
      if (state.modalVisible == true) {
        modal.style.display = "none";
        state.modalVisible = false;
        // console.log(modal.style.visibility)

      } else {
        modal.style.display = "block";
        state.modalVisible = true;
        // console.log(modal.style.visibility)
      }
    },

    handle_inquiry_modal(state) {
      console.log("in handle_inquiry_modal")
      let modal = document.getElementById("inquiry-modal");
      // console.log(modal)

      if (modal.style.display == 'block') {
        modal.style.display = "none";
      } else {
        modal.style.display = "block";
      }
    },

    create_inquiry_message(state) {
      console.log("in create_inquiry_message");

      let el = document.getElementById("inquiry-message");
      // console.log(el)

      // create message; message is stored in state.userMessage
      let newwLine = "\n";
      this.commit('get_message_body', newwLine);

      el.textContent = state.userMessage
    },

    handle_modal_byID(state, payload) {
      console.log("in handle_modal_byID")
      // console.log(payload)

      try {
        let modal = document.getElementById(payload.id);
        if (state.modalVisible == true) {
          modal.style.display = "none";
          state.modalVisible = false;
        } else {
          modal.style.display = "block";
          state.modalVisible = true;
        }
      } catch (error) {
        let modal = document.getElementById(payload);
        if (state.modalVisible == true) {
          modal.style.display = "none";
          state.modalVisible = false;
        } else {
          modal.style.display = "block";
          state.modalVisible = true;
        }                 // Step 3.5: It never reaches here because the code above threw an error
      }

      // let modal = document.getElementById(payload.id);
      // if (state.modalVisible == true) {
      //   modal.style.display = "none";
      //   state.modalVisible = false;
      // } else {
      //   modal.style.display = "block";
      //   state.modalVisible = true;
      // }

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
      console.log("in show_initial_info");
      let initialInfoModal = document.getElementById("initialInfo-modal");

      if (state.notClickedYet == true) {
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
    increasecounter({ commit }) {
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

    reset({ commmit }) {
      this.commit('resetSelects')
      this.commit('calculatePrice')
    },

    isMobile() {
      console.log(screen.width)

      if (screen.width < 600) {
        return true
      } else {
        return false
      }
    }
  },




  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    },
    wigAufpreis(state) {
      return state.wig.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    mig_magAufpreis(state) {
      return state.mig_mag.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    gasAufpreis(state) {
      return state.gas.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    cameraAufpreis(state) {
      return state.camera.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    einmalFilterAufpreis(state) {
      return state.einmalFilter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    selbstreinigenderFilterAufpreis(state) {
      return state.selbstreinigenderFilter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    loggingAufpreis(state) {
      return state.withDatenLogging.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    montageAufpreis(state) {
      return state.withMontage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    produktionsbegleitungAufpreis(state) {
      return state.withProduktionsbegleitung.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    schulungAufpreis(state) {
      return state.withSchulung.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    price(state) {
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
