<template>
  <div class="relative">
    <div class="flex">
      <img v-show="$route.name == 'Home'" src="./assets/background_vcell.jpg">
      <img v-show="$route.name=='VCell'" src="./assets/background_vcell.jpg">
      <img v-show="$route.name=='VPrint'" src="./assets/background_vprint.jpg" v-if="!$store.getters.isMobile">
      <div class="h-10" v-if="$store.getters.isMobile"></div>
    </div>
    <div id="nav"
      class="absolute top-0 w-screen h-10 sm:h-20 content-center items-center flex justify-center text-white bg-volkert-blue opacity-100"
      v-show="$route.name!=='about'">
      <a class="mx-2" href="https://www.volkert.net/">Home</a>
      <!-- <router-link class="mx-2" to="/">Home </router-link>  |
    <router-link class="mx-2" to="/about">About</router-link> -->
    </div>
  </div>

  <router-view />

  <footer class="content-center items-start flex justify-center text-white bg-volkert-blue h-auto p-8 opacity-100"
    v-show="$route.name!=='PageNotFound'">
    <!-- <a class="mx-2" href="https://www.volkert.net/Kontakt/Impressum/">Impressum</a> -->
    <div class="mx-auto sm:py-4 w-1/4" v-if="!$store.getters.isMobile">
      <img src="./assets/logo_volkert_weiss.png" width="" class="flex-shrink mx-4 " />
    </div>
    <div class="mx-auto sm:py-4">
      <div class="text-xs sm:text-lg font-semibold mb-2">Adresse</div>
      <div class="mx-1 text-xs sm:text-lg font-light">Volkert Maschinen- und Anlagenbau GmbH</div>
      <div class="mx-1 text-xs sm:text-lg font-light">Neukolmberg, 19</div>
      <div class="mx-1 text-xs sm:text-lg font-light">93476 Blaibach</div>
    </div>
    <div class="mx-auto  sm:py-4">
      <div class="text-xs sm:text-lg font-semibold mb-2">Kontakt</div>
      <div class="mx-1 text-xs sm:text-lg font-light">Telefon: +49 9944 4190632</div>
      <div class="mx-1 text-xs sm:text-lg font-light">E-Mail: info@volkert.net</div>
    </div>
  </footer>
</template>

<script>
export default {
    
  async mounted() {
    this.$store.commit('isMobile')
}
}
</script>


<style src="./assets/tailwind.css" />
