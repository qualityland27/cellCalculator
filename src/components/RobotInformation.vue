<template>
  <div id="robotInformation" class="robotInformation">
<!-- Robot Info -->
<div id="robotInfoHeader"
  class="antialiased w-5/6 mx-auto mt-40  bg-zinc-900 text-gray-400 p-10 flex flex-col rounded-3xl">

  <div class="text-xl font-semibold mb-20 ">Roboter</div>

  <!-- Turning Cards -->
  <div class="flex flex-row justify-center items-center w-full h-full gap-6">
    <!-- Robot -->
    <div className="relative w-1/2 h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card">
      <!-- front -->
      <div
        className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-zinc-800 transition-all duration-100 delay-200 z-20 hover:opacity-0 ">
        <div class="text-6xl font-bold text-center break-words text-slate-400 select-none">
          Robot
        </div>
        <div class="text-2xl font-light text-center mt-4 break-words text-slate-400 select-none">
          Spezialisierte Kraftpakete
        </div>
      </div>

      <!-- back  -->
      <div className="absolute inset-0 w-10/11 p-6 flex items-center bg-volkert-blue transition-all z-10 card-back">
        <div>
          <span class="font-bold text-xl text-slate-500 dark:text-slate-400 select-none">Eigenschaften </span>
          <ul class="list-none list-inside text-slate-900 dark:text-slate-200 select-text text-slate-400 p-2">
            <li>
              <div
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <specialiced_icon class="w-8 h-6 ml-1 text-gray-500 transition duration-75" />
                <span class="w-fit text-slate-400 ml-4 select-none">Spezialisiert auf eine bestimmte
                  Tätigkeit</span>
              </div>
            </li>
            <li>
              <div
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <heavy-workload_icon class="w-8 h-8 text-gray-500 transition duration-75 fill-slate-400" />
                <span class="w-fit text-slate-400 ml-5 select-none">Extrem hohe Traglasten</span>
              </div>
            </li>
            <li>
              <div
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
                <speed_icon class="w-8 h-8 text-gray-500 transition duration-75 fill-slate-400" />
                <span class="w-fit text-slate-400 ml-5 select-none">Hohe Präzision und hohe Geschwindigkeit</span>
              </div>
            </li>
          </ul>

          <!-- Arbeitsbereiche -->
          <div class="font-bold text-xl text-slate-400 mt-4 select-none">Arbeitsbereiche </div>
          <div class="text-slate-400 ml-4 mt-2 select-none">Schweißen, Lackieren, Handhabung, Montage, ...</div>
        </div>
      </div>
    </div>

    <!-- & -->
    <!-- <div class="text-8xl font-light">&</div> -->

    <!-- Cobot -->
    <div className="relative w-1/2 h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card">
      <!-- front -->
      <div
        className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-zinc-800 transition-all duration-100 delay-200 z-20 hover:opacity-0 ">
        <div class="text-6xl font-bold text-center break-words text-slate-400 select-none">
          Cobot
        </div>
        <div class="text-2xl font-light text-center mt-4 break-words text-slate-400 select-none">
          Flexible Allrounder
        </div>
      </div>

      <!-- back  -->
      <div className="absolute inset-0 w-10/11 p-6 flex items-center bg-volkert-blue transition-all z-10 card-back">
        <div>
          <span class="font-bold text-xl text-slate-500 dark:text-slate-400 select-none">Eigenschaften </span>
          <ul class="list-none list-inside text-slate-900 dark:text-slate-200 select-text text-slate-400 p-2">
            <li>
              <div
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <allrounder_icon class="w-8 h-6 ml-1 text-gray-500 transition duration-75 fill-slate-400" />
                <span class="w-fit text-slate-400 ml-4 select-none">Breitgefächerte Anwendungsmöglichkeiten</span>
              </div>
            </li>
            <li>
              <div
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <safety_icon class="w-8 h-8 text-gray-500 transition duration-75 fill-slate-400" />
                <div class="w-fit text-slate-400 ml-5 select-none">Arbeiten dem Mensch – Ohne Schutzzaun
                </div>
              </div>
            </li>
            <li>
              <div
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg class="w-8 h-8 text-gray-500 transition duration-75 fill-transparent"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                  overflow="hidden">
                  <g clip-path="url(#clip0)" transform="translate(-114 -406)">
                    <path
                      d="M143.962 424.275 142.156 421.194C141.519 420.131 140.492 419.423 139.323 419.175 139.429 418.077 139.252 416.767 138.827 415.421 137.8 412.481 134.329 410.958 134.329 410.958 134.329 410.958 133.94 411.667 133.585 412.729 134.683 413.331 135.852 414.217 136.631 415.527 137.34 416.767 137.8 418.006 137.942 419.104L137.198 419.104C137.021 418.112 136.631 416.979 135.994 415.881 134.435 413.154 130.717 412.375 130.717 412.375 130.717 412.375 129.548 415.987 131.106 418.715 131.283 419.033 131.496 419.352 131.708 419.671 130.752 419.317 129.76 419.14 128.698 419.14 125.333 419.14 122.429 421.052 121.012 423.815 120.8 423.744 120.588 423.708 120.375 423.708 118.817 423.708 117.542 424.983 117.542 426.542 117.542 428.029 118.71 429.269 120.162 429.375 120.588 431.748 122.004 433.767 123.952 435.042L131.354 435.042C131.956 435.042 132.417 434.581 132.417 433.979 132.417 433.377 131.956 432.917 131.354 432.917L128.131 432.917C129.902 432.385 131.177 430.756 131.177 428.844 131.177 426.506 129.265 424.594 126.927 424.594 126.537 424.594 126.183 424.629 125.829 424.735 125.546 424.806 125.262 424.629 125.192 424.346 125.121 424.062 125.298 423.779 125.581 423.708 126.042 423.602 126.502 423.531 126.963 423.531 129.902 423.531 132.275 425.904 132.275 428.844 132.275 430.119 131.815 431.288 131.071 432.208 131.744 432.208 132.488 431.819 133.267 431.288L133.904 434.192C133.975 434.688 134.4 435.042 134.896 435.042 134.967 435.042 135.038 435.042 135.108 435.006 135.569 434.9 135.887 434.51 135.923 434.05L135.958 434.192C136.1 434.688 136.525 435.042 137.021 435.042 137.092 435.042 137.163 435.042 137.233 435.006 137.8 434.865 138.154 434.298 138.048 433.731L136.95 428.631C137.694 428.242 138.402 427.958 139.146 427.958 140.315 427.958 141.483 427.817 142.617 427.533 143.325 427.356 143.892 426.825 144.104 426.152L144.14 426.046C144.352 425.444 144.281 424.806 143.962 424.275Z" />
                  </g>
                </svg>
                <span class="w-fit text-transparent select-none">Hohe Präzision und hohe Geschwindigkeit</span>
              </div>
            </li>
          </ul>

          <!-- Arbeitsbereiche -->
          <div class="font-bold text-xl text-slate-400 mt-4 select-none">Arbeitsbereiche </div>
          <div class="text-slate-400 ml-4 mt-2 select-none">Pick & Place, Montage, Maschinenbestückung, Palettieren,
            ...</div>
        </div>
      </div>
    </div>
  </div>




  <div class="flex flex-col justify-center items-center gap-6 mt-16">
    <div id="testElement" class="testElement w-4/5 text-center font-semibold text-slate-400 select-none">
      Wir definieren mit Ihnen gemeinsam den passenden Robotertyp für Ihr Projekt.
    </div>
    <!-- <div id="testElement-2" class="bg-volkert-blue h-full w-full">2</div>
        <div id="testElement-3" class="bg-volkert-blue h-full w-full">3</div> -->
  </div>



  <!--    Logos der Roboterhersteller    -->
  <div class="grid w-5/6 mx-auto grid-cols-2 sm:grid-cols-4 gap-4 flex items-center mt-24">
    <div class="mb-4">
      <img src="../assets/yaskawa-logo.png" class="max-w-full h-auto" alt="">
    </div>
    <div class="mb-4">
      <img src="../assets/abb-logo.png" class="max-w-full p-12 h-auto" alt="">
    </div>
    <div class="mb-4">
      <img src="../assets/franka-logo.png" class="max-w-full p-8 mx-auto h-auto" alt="">
    </div>
    <div class="mb-4">
      <img src="../assets/fanuc-logo.jpg" class="max-w-full p-8 h-auto" alt="">
    </div>
  </div>
</div>



  </div>
</template>

<script>
import { red } from 'tailwindcss/colors'
import InfoModal from './InfoModal.vue'
import Gripping_icon from '../assets/icons/gripping_icon.vue'
import Selection from './Selection.vue'
import CookieFreeZone from './CookieFreeZone.vue'
import Inquiry from './Inquiry.vue'
import vCell3_Image from "../assets/vCell3.png"
import schmalz_Image from "../assets/Schmalz.png"

export default {

  data() {
    return {
      elementVisible: false,

    }
  },
  components: {
    "compact_icon": require("@/assets/icons/compact_icon.vue").default,
    "heavy-workload_icon": require("@/assets/icons/heavy-workload_icon").default,
    "specialiced_icon": require("@/assets/icons/specialiced_icon").default,
    "speed_icon": require("@/assets/icons/speed_icon").default,
    "allrounder_icon": require("@/assets/icons/allrounder_icon").default,
    "safety_icon": require("@/assets/icons/safety_icon").default,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      // console.log(event.target.documentElement.scrollTop);

      const element = document.getElementById("testElement");
      const rect = element.getBoundingClientRect();

      // console.log(
      //   // rect.top >= 100 &&
      //   rect.bottom <= document.documentElement.clientHeight - 100 &&
      //   rect.left >= 0 &&
      //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //   rect.right <= (window.innerWidth || document.documentElement.clientWidth));

      if (this.elementVisible == false) {

        if ((rect.bottom <= document.documentElement.clientHeight - 300 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)) == true) {

          this.elementVisible = true;


          console.log("visible")

          var x = 0;
          function moreVisible() {
            if (x == 1) clearInterval(t);
            x += 0.001;
            element.style.opacity = x;
            element.style.filter = "alpha(opacity=" + (x * 100) + ")";
          }
          var t = setInterval(moreVisible, 4);
        } else {
          // console.log("unvisible")

          // element.style.visibility = "hidden";
        }
      }
    }
  }

}
</script>




<style>

</style>
