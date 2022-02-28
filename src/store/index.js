import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

export default createStore({
  state: {
    counter: 0,
    schweißArt: "",
    wig: 0,
    mig: 5000,
    mag: 8000,
    aufpreisSchweißArt: 0,

    nahtSuchSystem: "",
    without: 0,
    gas: 5000,
    camera: 20000,
    aufpreisSuchSystem: 0,

    startPrice: 60000,
    calculatedPrice: 60000, 
  },
  mutations: {
    // To change Data within the state, können die Dinger von überall triggern, kein asynchroner Code hier möglich
    // man nennt das Aufrufen, commit
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

      if ( state.schweißArt.value == "mag" ) {
        state.aufpreisSchweißArt = state.mag;
      } else if (state.schweißArt.value == "mig") {
        state.aufpreisSchweißArt = state.mig;
      } else if (state.schweißArt.value == "wig") {
        state.aufpreisSchweißArt = state.wig;
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

      state.calculatedPrice = state.startPrice + state.aufpreisSchweißArt + state.aufpreisSuchSystem;

    },
    sendEmail(state)
    {
      console.log("HI");
      var newLine = "%0D%0A";
      var body = "Hallo liebes Team von Volkert, " + newLine + newLine + "bitte senden Sie mir ein verbindliches Angebot und einen Terminvorschlag für ihre vCell mit den folgenden Paramtern zu :" + newLine + newLine + 
          "Schweißart: " + state.schweißArt.value + newLine + 
          "Such System: " + state.nahtSuchSystem.value;
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
    reset ( {commmit} ) {
      this.commit('resetSelects')
      this.commit('calculatePrice')
    }
  },
  getters: {
    counterSquared (state) {
      return state.counter * state.counter
    },
    magAufpreis (state) {
      return state.mag
    },
    migAufpreis (state) {
      return state.mig
    },
    gasAufpreis (state) {
      return state.gas
    },    
    cameraAufpreis (state) {
      return state.camera
    }
    // hier könne Daten nochmal bearbeitete werden bevor sie überall zur Verfügung getellt werden
  },
  modules: {
  }
})
