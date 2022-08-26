<template>
  <div class="relative">
    <div class="flex">
      <img v-show="$route.name == 'Home'" src="./assets/background_vcell.jpg">
      <img v-show="$route.name == 'VCell'" src="./assets/background_vcell.jpg">
      <img v-show="$route.name == 'VPrint'" src="./assets/background_vprint.jpg" v-if="!$store.getters.isMobile">
      <div class="h-10" v-if="$store.getters.isMobile"></div>
    </div>
    <div id="nav"
      class="absolute top-0 w-screen h-10 sm:h-20 content-center items-center flex justify-center text-white bg-volkert-blue opacity-100"
      v-show="$route.name !== 'about'">
      <!-- <a class="mx-2" href="https://www.volkert.net/">Home</a> -->
      <img src="./assets/v_weiss.png" width="" class="flex-shrink h-2/5" v-if="$store.getters.isMobile" />
      <!-- <router-link class="mx-2" to="/">Home </router-link>  |
    <router-link class="mx-2" to="/about">About</router-link> -->
    </div>
  </div>

  <router-view />

  <footer
    class="content-center items-start flex justify-center text-white bg-volkert-blue h-auto py-8 px-2 sm:px-8 opacity-100"
    v-show="$route.name !== 'PageNotFound'">

    <div class="mx-auto sm:py-4 w-1/4" v-if="!$store.getters.isMobile">
      <img src="./assets/logo_volkert_weiss.png" width="" class="flex-shrink mx-4 " />
    </div>
    <div class="mx-auto">
      <div class="text-xs sm:text-lg font-semibold mb-2">Adresse</div>
      <div class="mx-1 text-xs sm:text-lg font-light">Volkert Maschinen-</div>
      <div class="mx-1 text-xs sm:text-lg font-light">und Anlagenbau GmbH</div>

      <div class="mx-1 text-xs sm:text-lg font-light">Neukolmberg, 19</div>
      <div class="mx-1 text-xs sm:text-lg font-light">93476 Blaibach</div>
    </div>
    <div class="mx-auto sm:py-4">



      <div class="text-xs sm:text-lg font-semibold mb-2">Kontakt</div>
      <div class="flex flex-cols items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <div class="mx-1 text-xs sm:text-lg font-light">+49 (0) 9944 4190632</div>
      </div>





      <div class="flex flex-cols items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <a class="mx-1 text-xs sm:text-lg font-light underline decoration-from-font" href="mailto:info@volkert.net">info@volkert.net</a>

      </div>

      <div class="mx-1 text-xs sm:text-lg font-light p-2"></div>
      <a class="text-xs sm:text-lg font-semibold" href="https://www.volkert.net/Kontakt/Impressum/">Impressum</a>
    </div>


    <!-- <a class="mx-auto sm:py-4 text-xs sm:text-lg font-semibold mb-2"
      href="https://www.volkert.net/Kontakt/Impressum/">Impressum</a> -->





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
