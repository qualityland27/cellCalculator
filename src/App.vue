<template>
<div class="relative">
  <div class="flex s">
    <img  src="./assets/background.jpg" >
  </div>
  <div id="nav" class="absolute top-0 w-screen content-center items-center flex justify-center text-white bg-volkert-blue h-20 opacity-80">
    <a class="mx-2" href="https://www.volkert.net/">Volkert Webseite</a> |
    <router-link class="mx-2" to="/">Home </router-link> |
    <router-link class="mx-2" to="/about">About</router-link>
  </div>
</div>  

  <router-view/>
  <footer class="content-center items-center flex justify-center text-white bg-volkert-blue h-20 opacity-80">
        <!-- <router-link class="mx-2" to="/about">Impressum</router-link> -->
        <a class="mx-2" href="https://www.https://www.volkert.net/Kontakt/Impressum/">Impressum</a>
  </footer>
</template>

<style src="./assets/tailwind.css" />
