<template>
  <div class="home">
    <div  class="title w-5/6 mx-auto flex justify-center">Ein Produkt. Deine Anforderungen.</div>
    <div class="flex justify-center">
      <img  src="../assets/separator.jpg" width="1200">
    </div>
    <div  class="sub-title w-5/6 mx-auto flex justify-center text-center">Hier kannst du dir deine VCell nach deinen Anforderungen zusammenstellen, eine Anfrage versenden, einen Beratungstermin ausmachen oder einfach nur spielen.</div>
    <div  class="w-5/6 mx-auto flex justify-center content-center">
      <div class="w-1/2 items-center justify-center mx-4">
        <img alt="Vue" class="logo bg-white" src="../assets/vCell2.png" >
        <!-- <div class="rounded-sm " width="500" height="500"></div>
        <div class="rounded-full h-24 w-24 flex items-center justify-center bg-blue-400 mx-auto">Circle</div>
        <div class="rounded-none bg-blue-400 text-center w- h-96" >.rounded-none</div> -->
      </div>

      <div class="w-1/2" >


        <!-- <div class="font-bold">Gesamtpreis:</div> -->
        <div class="price m-0">ab {{ $store.state.calculatedPrice }} €</div>
        <div class="kleingedrucktes">zzgl. MwSt.</div>

        <!-- <counter />
        <counter-squared /> -->



        <!-- <div class="buttons">
          <button @click="$store.commit('decreasecounter')" >-</button>
          <button @click="$store.dispatch('increasecounter')">+</button>
        </div> -->
        <div class="font-bold ">Schweißpaket:</div>

        <select class="border-solid border-2 border-light-blue-500 w-80" @change="$store.commit('calculatePrice')" id="dropDownSchweißArt">
          <option value="wig">WIG (+0 Euro)</option>
          <option value="mig">MIG (+{{ $store.getters.migAufpreis }} Euro)</option>
          <option value="mag">MAG (+{{ $store.getters.magAufpreis }} Euro)</option>
        </select>

        <div class="font-bold bottom-4 mt-4">Schweißnahtsuchsystem:</div>

        <!-- <div class="schweißNahtSuchSystem"> 
            {{ $store.state.schweißNaht }}
        </div> -->
        <select class="border-solid border-2 border-light-blue-500 w-80" @change="$store.commit('calculatePrice')" id="dropDownSchweißNahtSuchSystem">
          <option value="without">Ohne (+0 Euro)</option>
          <option value="gas">Gasdüse (+{{ $store.getters.gasAufpreis }} Euro)</option>
          <option value="camera">Kamera (+{{ $store.getters.cameraAufpreis }} Euro)</option>
        </select>

        
        <div class="resetButton flex flex-row">
          <button class="flex-auto rounded-md border-solid border-2 border-light-blue-500 text-black h-16 " @click=" $store.dispatch('reset')" >Auswahl zurücksetzen</button>
        </div>

        <div class="angebotButton flex flex-row">
          <button class="flex-auto font-bold bg-blue-900 rounded-md text-white h-16 " @click=" $store.commit('sendEmail')" >Angebot anfordern</button>
          <button class="flex-auto bg-gray-400 rounded-md h-16 w-24 mx-2" @click="$store.commit('printPage')">Drucken</button>
        </div>

        <!-- <div class="price font-bold "> 
            Gesamtpreis: {{ $store.state.calculatedPrice }} Euro
        </div> -->

    </div>
    </div>
    <div  class="text font-bold w-5/6 mx-auto mt-12">Produktinformationen</div>
    <div  class="text w-5/6 mx-auto mt-12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import CounterSquared from '../components/CounterSquared.vue'
import VueNumeric from 'vue-numeric'


export default {
  name: 'Home',
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
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default
 }
// methods: {
//   sendEmail()
//   {
//     var y = {{ $store.getters.cameraAufpreis }};
//     var x = "mailto:xyz@abc.com?subject=" + y;
//     window.location = x;

//   }
// }
}


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
    font-size: 16px;
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
  font-weight: ;

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
