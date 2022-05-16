<template>
<div class="relative">
  <div class="flex">
    <img v-show="$route.name=='Home'" src="./assets/background_vcell.jpg" >
    <img v-show="$route.name=='VCell'" src="./assets/background_vcell.jpg" >
    <img v-show="$route.name=='VPrint'" src="./assets/background_vprint.jpg" >
  </div>
  <div id="nav" class="absolute top-0 w-screen content-center items-center flex justify-center text-white bg-volkert-blue h-20 opacity-100">
    <a class="mx-2" href="https://www.volkert.net/">Home</a> 
    <!-- <router-link class="mx-2" to="/">Home </router-link>  | -->
    <!-- <router-link class="mx-2" to="/about">About</router-link> -->
  </div>
</div>  

<router-view/>

<footer class="content-center items-center flex justify-center text-white bg-volkert-blue h-20 opacity-100" v-show="$route.name!=='PageNotFound'">
      <!-- <router-link class="mx-2" to="/about">Impressum</router-link> -->
      <a class="mx-2" href="https://www.volkert.net/Kontakt/Impressum/">Impressum</a>
</footer>
</template>

<style src="./assets/tailwind.css" />
