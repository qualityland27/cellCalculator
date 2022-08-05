<template>
  <div class="calculator">

    <!-- Cookie-Free Zone -->
    <div v-show="elementVisible" id="cookie-free-zone" class="hideElement animate-fade transition duration-700 transition-opacity ease-in opacity-100 mx-auto max-w-xs fixed inset-x-0 bottom-0 mb-2 z-50 bg-white shadow-xl p-2 text-slate-500 flex justify-center dark:bg-slate-800
    dark:text-slate-400 rounded-lg ">
      <div class="flex items-center gap-4">
        <svg class="h-10 w-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path style="fill:#DC774E;" d="M210.348,0C94.174,0,0,94.174,0,210.348c0,81.616,46.474,152.373,114.407,187.246l283.187-283.187
          	C362.721,46.474,291.964,0,210.348,0z" />
          <path style="fill:#F7CD95;" d="M397.593,114.407C465.526,149.29,512,220.036,512,301.652C512,417.826,417.826,512,301.652,512
          	c-81.616,0-152.362-46.474-187.246-114.407c-14.764-28.762-23.102-61.384-23.102-95.941c0-116.173,94.174-210.348,210.348-210.348
          	C336.21,91.305,368.831,99.643,397.593,114.407z" />
          <g>
            <path style="fill:#8E4238;" d="M97.404,131.972c8.788,8.8,8.788,23.046,0,31.834c-8.788,8.788-23.034,8.788-31.823,0
	          	s-8.788-23.034,0-31.834C74.369,123.184,88.615,123.184,97.404,131.972z" />
            <path style="fill:#8E4238;" d="M378.824,371.318c12.423,0,22.505,10.071,22.505,22.505c0,12.434-10.082,22.505-22.505,22.505
	          	c-12.434,0-22.506-10.071-22.506-22.505S366.389,371.318,378.824,371.318z" />
            <path style="fill:#8E4238;" d="M340.823,175.183c24.857,0,45.011,20.154,45.011,45.011s-20.154,45.011-45.011,45.011
	          	c-24.869,0-45.011-20.154-45.011-45.011S315.955,175.183,340.823,175.183z" />
          </g>
          <path style="fill:#B75548;" d="M172.718,230.659c12.434,0,22.505,10.071,22.505,22.506c0,12.434-10.071,22.505-22.505,22.505
	          c-12.434,0-22.505-10.071-22.505-22.505C150.213,240.73,160.284,230.659,172.718,230.659z" />
          <circle style="fill:#8E4238;" cx="239.751" cy="383.1" r="45.011" />
          <path style="fill:#B75548;" d="M430.586,291.075c12.423,0,22.505,10.071,22.505,22.505c0,12.434-10.082,22.506-22.505,22.506
          	c-12.434,0-22.505-10.071-22.505-22.506S418.152,291.075,430.586,291.075z" />
          <g>
            <circle style="fill:#700D00;" cx="206.342" cy="61.384" r="8.44" />
            <circle style="fill:#700D00;" cx="250.936" cy="220.194" r="8.44" />
            <circle style="fill:#700D00;" cx="321.131" cy="326.33" r="8.44" />
          </g>
        </svg>
        <div>
          <strong class="">Cookie-Free Zone</strong>
        </div>
      </div>
    </div>


    <!-- Conact via Mail and WhatsApp -->
    <div class="fixed bottom-0 left-0 right-0 z-50 flex flex-col pl-1 pb-2">
      <a href="https://wa.me/49168711573"
        class="bg-green-700 hover:bg-green-800 active:bg-green-900 w-16 h-16 p-4 mb-1 rounded-full flex items-center justify-center ">
        <svg class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
          </path>
        </svg>
      </a>
      <a href="mailto:info@volkert.net"
        class="bg-volkert-blue hover:bg-volkert-dark-blue active:bg-volkert-darkest-blue w-16 h-16 p-4 rounded-full flex items-center justify-center">
        <svg class="text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>
    </div>





    <!--          Grid with 2 cols            -->
    <!--                   |                  -->
    <!--         Image     |     Selection    -->
    <!--                   |                  -->

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <!-- 1. Col: Image -->
      <div class="sm:sticky top-20 content-center">
        <!-- Image CVell  -->
        <img alt="Vue" class="logo bg-white" src="../assets/vCell3.png" />

        <div class="">
          <!--    Gesamtpreis   -->
          <div class="price m-0 text-center mr-12">ab {{ $store.getters.price }} €</div>
          <div class="kleingedrucktes text-center mr-12">zzgl. MwSt.</div>
        </div>
      </div>

      <!-- 2. Col: Selection -->
      <div class="flex flex-col" @click="$store.commit('show_initial_info')" data-modal-toggle="initialInfo-modaly">

        <!-- Show inital info - on first click you see hint that not everything ist listed -->
        <div id="initialInfo-modal" tabindex="-1"
          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div class="relative p-4 w-full max-w-md h-full md:h-auto mx-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Es sind nicht alle technischen Möglichkeiten gelistet.</h3>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Bei Bedarf, bitten wir
                  Sie uns direkt zu Kontaktieren.</h3>
                <button data-modal-toggle="popup-modal" type="button"
                  class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                  Got it!
                </button>
                <button data-modal-toggle="popup-modal" type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  Anfrage</button>
              </div>
            </div>
          </div>
        </div>


        <!--  -->
        <!-- Application Icons -->
        <!--  -->
        <div class="text-xl md:text-2xl font-semibold">Anwendung:</div>

        <div class="grid grid-cols-3 items-center justify-items-center mt-8 gap-6">

          <!-- Welding Button with Icon -->
          <button type="button" class="text-white rounded-lg text-sm p-1.5" data-modal-toggle="small-modal"
            @click="$store.commit('handle_weldingIconBlk_visible')">
            <!-- Welding Icon gray -->
            <svg v-if="!$store.getters.weldingApplicationSelected" id="welding_icon_blk" class="mb-2 w-20 h-20"
              version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1772.000000 1772.000000"
              preserveAspectRatio="xMidYMid meet">
              <title id="">Schweißen</title>

              <g class="fill-gray-500" transform="translate(0.000000,1772.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path class="fill-gray-500" d=" M16500 15965 c-1648 -37 -1896 -44 -2060 -60 -1015 -98 -2022 -453
                  -2875 -1013 -779 -510 -1385 -1161 -1746 -1872 -23 -47 -381 -794 -795 -1660 l-752 -1575 -524 -8 c-287
                  -5 -526 -12 -531 -16 -6 -6 -1660 -5847 -1669 -5894 -3 -15 79 -50 527 -224 292 -113 534 -209 538 -213 4
                  -3 -69 -193 -162 -421 -186 -453 -195 -485 -167 -581 58 -201 269 -298 452 -208 113 55 121 69 315 545 96
                  233 178 425 182 425 5 0 276 -104 603 -231 328 -127 597 -229 598 -227 2 1 632 1196 1401 2653 768 1458
                  1414 2680 1433 2716 l36 67 -304 298 c-168 165 -338 331 -378 369 l-73 70 720 1507 c395 828 732 1528 747
                  1555 326 566 997 1061 1799 1328 276 92 543 151 817 179 100 11 585 25 1613 47 809 17 1471 32 1472 33 1
                  1 -9 492 -22 1091 -14 600 -25 1147 -25 1218 l0 127 -72 -1 c-40 -1 -534 -12 -1098 -24z" />
                <path d="M672 10503 c-53 -26 -77 -68 -77 -138 l0 -60 2109 -3618 c1539 -2639
              2118 -3624 2140 -3640 19 -13 49 -22 85 -25 46 -3 62 0 90 20 78 53 100 131
              61 209 -29 55 -4164 7152 -4193 7196 -45 67 -142 92 -215 56z" />
                <path d="M16225 5706 c-33 -13 -1664 -693 -3625 -1510 -2867 -1196 -3570
              -1492 -3592 -1516 -15 -16 -32 -47 -39 -70 -29 -98 50 -200 156 -200 27 0
              1059 426 3648 1506 1986 828 3623 1514 3638 1525 30 21 59 84 59 127 -1 45
              -35 107 -72 130 -54 33 -104 36 -173 8z" />
                <path d="M619 5507 c-50 -34 -79 -82 -79 -134 0 -57 19 -93 72 -136 96 -77
              3879 -2808 3903 -2817 64 -24 147 1 189 57 27 37 33 120 11 166 -14 30 -331
              264 -1963 1444 -1070 774 -1959 1416 -1976 1425 -45 25 -116 23 -157 -5z" />
                <path d="M12695 2635 c-2013 -348 -3676 -638 -3697 -644 -45 -14 -95 -69 -104
              -116 -18 -100 54 -195 150 -195 60 0 7386 1269 7416 1285 51 26 75 72 75 142
              0 46 -5 68 -21 90 -24 33 -98 73 -134 72 -14 0 -1672 -286 -3685 -634z" />
                <path d="M558 2798 c-47 -12 -105 -74 -114 -123 -15 -79 36 -163 112 -184 54
              -16 3851 -591 3898 -591 83 0 156 75 156 160 0 66 -45 130 -104 150 -22 7
              -3044 468 -3886 593 -14 2 -42 0 -62 -5z" />
                <path d="M304 721 c-118 -19 -221 -96 -270 -204 -40 -88 -41 -196 -1 -282 55
              -117 150 -188 279 -205 46 -6 3231 -13 8588 -20 7343 -9 8522 -8 8563 4 105
              32 179 95 226 196 22 46 26 69 26 140 0 71 -4 94 -26 141 -36 76 -86 129 -161
              170 l-63 34 -1675 6 c-921 4 -4656 9 -8300 13 -3644 3 -6740 8 -6880 10 -140
              3 -278 1 -306 -3z" />
              </g>
            </svg>
            <!-- Welding Icon Color  -->
            <svg v-else id="welding_icon_color" class=" mb-2 w-20 h-20" version="1.0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1772.000000 1772.000000" preserveAspectRatio="xMidYMid meet">
              <title id="">Schweißen</title>

              <g class="" transform="translate(0.000000,1772.000000) scale(0.100000,-0.100000)" fill="#000000"
                stroke="none">
                <path class="fill-volkert-blue" d="M16500 15965 c-1648 -37 -1896 -44 -2060 -60 -1015 -98 -2022 -453
              -2875 -1013 -779 -510 -1385 -1161 -1746 -1872 -23 -47 -381 -794 -795 -1660
              l-752 -1575 -524 -8 c-287 -5 -526 -12 -531 -16 -6 -6 -1660 -5847 -1669
              -5894 -3 -15 79 -50 527 -224 292 -113 534 -209 538 -213 4 -3 -69 -193 -162
              -421 -186 -453 -195 -485 -167 -581 58 -201 269 -298 452 -208 113 55 121 69
              315 545 96 233 178 425 182 425 5 0 276 -104 603 -231 328 -127 597 -229 598
              -227 2 1 632 1196 1401 2653 768 1458 1414 2680 1433 2716 l36 67 -304 298
              c-168 165 -338 331 -378 369 l-73 70 720 1507 c395 828 732 1528 747 1555 326
              566 997 1061 1799 1328 276 92 543 151 817 179 100 11 585 25 1613 47 809 17
              1471 32 1472 33 1 1 -9 492 -22 1091 -14 600 -25 1147 -25 1218 l0 127 -72 -1
              c-40 -1 -534 -12 -1098 -24z" />
                <path class="fill-gray-700" d="M672 10503 c-53 -26 -77 -68 -77 -138 l0 -60 2109 -3618 c1539 -2639
              2118 -3624 2140 -3640 19 -13 49 -22 85 -25 46 -3 62 0 90 20 78 53 100 131
              61 209 -29 55 -4164 7152 -4193 7196 -45 67 -142 92 -215 56z" />
                <path class="fill-gray-700" d="M16225 5706 c-33 -13 -1664 -693 -3625 -1510 -2867 -1196 -3570
              -1492 -3592 -1516 -15 -16 -32 -47 -39 -70 -29 -98 50 -200 156 -200 27 0
              1059 426 3648 1506 1986 828 3623 1514 3638 1525 30 21 59 84 59 127 -1 45
              -35 107 -72 130 -54 33 -104 36 -173 8z" />
                <path class="fill-gray-700" d="M619 5507 c-50 -34 -79 -82 -79 -134 0 -57 19 -93 72 -136 96 -77
              3879 -2808 3903 -2817 64 -24 147 1 189 57 27 37 33 120 11 166 -14 30 -331
              264 -1963 1444 -1070 774 -1959 1416 -1976 1425 -45 25 -116 23 -157 -5z" />
                <path class="fill-gray-700" d="M12695 2635 c-2013 -348 -3676 -638 -3697 -644 -45 -14 -95 -69 -104
              -116 -18 -100 54 -195 150 -195 60 0 7386 1269 7416 1285 51 26 75 72 75 142
              0 46 -5 68 -21 90 -24 33 -98 73 -134 72 -14 0 -1672 -286 -3685 -634z" />
                <path class="fill-gray-700" d="M558 2798 c-47 -12 -105 -74 -114 -123 -15 -79 36 -163 112 -184 54
              -16 3851 -591 3898 -591 83 0 156 75 156 160 0 66 -45 130 -104 150 -22 7
              -3044 468 -3886 593 -14 2 -42 0 -62 -5z" />
                <path class="fill-volkert-blue" d="M304 721 c-118 -19 -221 -96 -270 -204 -40 -88 -41 -196 -1 -282 55
              -117 150 -188 279 -205 46 -6 3231 -13 8588 -20 7343 -9 8522 -8 8563 4 105
              32 179 95 226 196 22 46 26 69 26 140 0 71 -4 94 -26 141 -36 76 -86 129 -161
              170 l-63 34 -1675 6 c-921 4 -4656 9 -8300 13 -3644 3 -6740 8 -6880 10 -140
              3 -278 1 -306 -3z" />
              </g>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>


          <!-- Gripping Button with Icon -->
          <button type="button" class="text-white rounded-lg text-sm p-1.5" data-modal-toggle="small-modal"
            @click="$store.commit('handle_grippingIconBlk_visible')">
            <!-- Gripping Icon Gray  -->
            <svg v-if="!$store.getters.grippingApplicationSelected" id="welding_icon_blk" class="mb-2 w-20 h-20"
              version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1134.000000 1134.000000"
              preserveAspectRatio="xMidYMid meet">
              <title id="">Handling</title>


              <g class="fill-gray-500" transform="translate(0.000000,1134.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M3748 10073 c-3 -698 -4 -1270 -2 -1272 3 -3 293 -7 646 -9 l641 -5
                  -5 -189 c-3 -103 -7 -191 -10 -193 -2 -3 -200 -8 -438 -12 l-434 -6 -1180
                  -1111 c-650 -610 -1180 -1115 -1178 -1121 6 -19 1115 -2310 1125 -2322 7 -9
                  45 -13 128 -13 l119 0 0 93 c-1 50 -7 551 -14 1112 l-14 1020 26 27 c15 14
                  340 330 722 702 l694 676 281 0 281 0 17 -29 c30 -50 108 -131 172 -177 132
                  -94 271 -137 435 -136 236 1 440 103 586 293 l45 59 327 0 327 0 730 -690 730
                  -689 6 -343 c3 -189 7 -684 8 -1101 l1 -758 83 3 82 3 551 1170 552 1170 -49
                  45 c-27 25 -550 514 -1162 1088 l-1112 1043 -482 -1 -483 -1 0 196 0 195 638
                  0 639 0 6 563 c4 309 7 880 7 1268 l0 706 -1267 6 c-698 4 -1606 7 -2019 7
                  l-751 0 -5 -1267z" />
                <path d="M3255 5178 c-2 -7 -6 -1058 -7 -2336 l-3 -2322 2158 -2 c1186 -2
                  2345 -3 2575 -3 l417 0 6 2330 c3 1282 6 2331 5 2331 -1 1 -1159 4 -2574 8
                  -2069 5 -2573 4 -2577 -6z" />
                <path d="M121 439 c-47 -24 -93 -80 -112 -136 -27 -84 15 -199 93 -251 41 -27
                  43 -27 272 -33 444 -13 10768 -20 10811 -8 81 23 155 124 155 213 0 87 -75
                  190 -155 213 -30 9 -1371 14 -5530 18 l-5490 7 -44 -23z" />
              </g>
            </svg>

            <!-- Gripping Icon Color -->
            <svg v-else id="gripping_icon_color" class="mb-2 w-20 h-20" version="1.0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1134.000000 1134.000000" preserveAspectRatio="xMidYMid meet">
              <title id="">Handling</title>

              <g class="fill-gray-500" transform="translate(0.000000,1134.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path class="fill-volkert-blue" d="M3748 10073 c-3 -698 -4 -1270 -2 -1272 3 -3 293 -7 646 -9 l641 -5
                  -5 -189 c-3 -103 -7 -191 -10 -193 -2 -3 -200 -8 -438 -12 l-434 -6 -1180
                  -1111 c-650 -610 -1180 -1115 -1178 -1121 6 -19 1115 -2310 1125 -2322 7 -9
                  45 -13 128 -13 l119 0 0 93 c-1 50 -7 551 -14 1112 l-14 1020 26 27 c15 14
                  340 330 722 702 l694 676 281 0 281 0 17 -29 c30 -50 108 -131 172 -177 132
                  -94 271 -137 435 -136 236 1 440 103 586 293 l45 59 327 0 327 0 730 -690 730
                  -689 6 -343 c3 -189 7 -684 8 -1101 l1 -758 83 3 82 3 551 1170 552 1170 -49
                  45 c-27 25 -550 514 -1162 1088 l-1112 1043 -482 -1 -483 -1 0 196 0 195 638
                  0 639 0 6 563 c4 309 7 880 7 1268 l0 706 -1267 6 c-698 4 -1606 7 -2019 7
                  l-751 0 -5 -1267z" />
                <path class="fill-gray-700" d="M3255 5178 c-2 -7 -6 -1058 -7 -2336 l-3 -2322 2158 -2 c1186 -2
                  2345 -3 2575 -3 l417 0 6 2330 c3 1282 6 2331 5 2331 -1 1 -1159 4 -2574 8
                  -2069 5 -2573 4 -2577 -6z" />
                <path class="fill-volkert-blue" d="M121 439 c-47 -24 -93 -80 -112 -136 -27 -84 15 -199 93 -251 41 -27
                  43 -27 272 -33 444 -13 10768 -20 10811 -8 81 23 155 124 155 213 0 87 -75
                  190 -155 213 -30 9 -1371 14 -5530 18 l-5490 7 -44 -23z" />
              </g>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <!-- <img alt="Vue" class="bg-white w-1/3" src="../assets/icons/gripping_blk.png" /> -->
        </div>

        <!--                                                                              -->
        <!--  -->
        <!--                                                                              -->







        <!--  -->
        <!-- If Welding Application -->
        <!--  -->
        <div v-if="$store.getters.weldingApplicationSelected">
          <!--  -->
          <!-- Hardware Options -->
          <!--  -->
          <div class="text-xl md:text-2xl font-semibold mt-12">Hardware Optionen:</div>


          <!--                                                                              -->
          <!-- Welding Package Header-->
          <!--                                                                              -->
          <div class="mt-2 flex justify-between mb-4">
            <div class="text-lg font-medium">Schweißpaket:</div>
            <button type="button"
              class="mr-4 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal" @click="$store.commit('handle_modal')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <!-- Welding Package Radio Buttons (selection) -->
          <div class="mr-4">
            <ul class="grid gap-6 w-full grid-cols-3 mr-4">
              <li>
                <input type="radio" id="weldingType-none" name="weldingType" value="weldingType-none"
                  class="hidden peer" required="" @click="$store.commit('calculate_price_checkbox')" checked>
                <label for="weldingType-none"
                  class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Eigenes</div>
                  </div>
                </label>
              </li>
              <li class="h-full">
                <input type="radio" id="weldingType-wig" name="weldingType" value="weldingType-wig" class="hidden peer"
                  @click="$store.commit('calculate_price_checkbox')">
                <label for="weldingType-wig"
                  class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">WIG</div>
                    <div class="w-full">+ 8.900 Euro</div>
                  </div>
                </label>
              </li>
              <li class="h-full">
                <input type="radio" id="weldingType-migmag" name="weldingType" value="weldingType-migmag"
                  class="hidden peer" @click="$store.commit('calculate_price_checkbox')">
                <label for="weldingType-migmag"
                  class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">MIG/MAG</div>
                    <div class="w-full">+ 18.500 Euro</div>
                  </div>
                </label>
              </li>
            </ul>
          </div>



          <!-- Welding Package Info PupUp (Modal) -->
          <div id="small-modal" tabindex="-1" @click="$store.commit('handle_modal')"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full w-1/2 h-full md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-gray-500 rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex justify-between items-center p-5 rounded-t border-b">
                  <h3 class="text-xl font-medium text-white">
                    Schweißpaket
                  </h3>
                  <button type="button"
                    class="text-white bg-transparent hover:bg-gray-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="small-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam
                  </p>
                  <p class="text-base leading-relaxed text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam
                  </p>
                </div>
                <!-- Modal footer -->
                <!-- <div class="flex items-center p-6 space-x-2 rounded-b border-t">
                  <button data-modal-toggle="small-modal" type="button" @click="$store.commit('handle_modal')"
                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Verstanden</button>
                </div> -->
              </div>
            </div>
          </div>


          <!--  -->
          <!-- Software Options -->
          <!--  -->




          <!--  -->
          <!-- Services -->
          <!--  -->




          <!--  -->
          <!-- Buttons -->
          <!--  -->


        </div>



        <!--  -->
        <!-- If Welding Gripping Application -->
        <!--  -->
        <div v-if="$store.getters.grippingApplicationSelected">
          <!--  -->
          <!-- Hardware Options -->
          <!--  -->
          <div class="text-xl md:text-2xl font-semibold mt-12">Hardware Optionen:</div>


          <!--                                                                              -->
          <!-- Gripper Header-->
          <!--                                                                              -->
          <div class="mt-2 flex justify-between mb-4">
            <div class="text-lg font-medium">Greifer:</div>
            <button type="button"
              class="mr-4 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal" @click="$store.commit('handle_modal')">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <!-- Welding Package Radio Buttons (selection) -->
          <div class="mr-4">
            <ul class="grid gap-6 w-full grid-cols-3 mr-4">
              <li>
                <input type="radio" id="weldingType-none" name="weldingType" value="weldingType-none"
                  class="hidden peer" required="" @click="$store.commit('calculate_price_checkbox')" checked>
                <label for="weldingType-none"
                  class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Eigener</div>
                  </div>
                </label>
              </li>
              <li class="h-full">
                <input type="radio" id="weldingType-wig" name="weldingType" value="weldingType-wig" class="hidden peer"
                  @click="$store.commit('calculate_price_checkbox')">
                <label for="weldingType-wig"
                  class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">2-Backen-Greifer</div>
                    <div class="w-full">+ 4.800 Euro</div>
                  </div>
                </label>
              </li>
              <li class="h-full">
                <input type="radio" id="weldingType-migmag" name="weldingType" value="weldingType-migmag"
                  class="hidden peer" @click="$store.commit('calculate_price_checkbox')">
                <label for="weldingType-migmag"
                  class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Vakuumgreifer</div>
                    <div class="w-full">+ 9.900 Euro</div>
                  </div>
                </label>
              </li>
            </ul>
          </div>



          <!-- Welding Package Info PupUp (Modal) -->
          <div id="small-modal" tabindex="-1" @click="$store.commit('handle_modal')"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full w-1/2 h-full md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-gray-500 rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex justify-between items-center p-5 rounded-t border-b">
                  <h3 class="text-xl font-medium text-white">
                    Greifer
                  </h3>
                  <button type="button"
                    class="text-white bg-transparent hover:bg-gray-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="small-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam
                  </p>
                  <p class="text-base leading-relaxed text-white">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam
                  </p>
                </div>
                <!-- Modal footer -->
                <!-- <div class="flex items-center p-6 space-x-2 rounded-b border-t">
                  <button data-modal-toggle="small-modal" type="button" @click="$store.commit('handle_modal')"
                    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Verstanden</button>
                </div> -->
              </div>
            </div>
          </div>


          <!--  -->
          <!-- Software Options -->
          <!--  -->




          <!--  -->
          <!-- Services -->
          <!--  -->




          <!--  -->
          <!-- Buttons -->
          <!--  -->

        </div>












        <!--    Buttons    -->
        <div class="mt-12 mr-2 ml-2">
          <button class="
              w-full
              rounded-md
              border-solid border-2 border-light-blue-500
              text-black
              h-16 hover:bg-gray-100 hover:border-transparent 
              text-xl" @click="$store.dispatch('reset')">
            Auswahl zurücksetzen
          </button>
        </div>

        <div class="mt-2 mr-2 ml-2 flex flex-row">
          <button class="
              flex-auto 
              font-bold 
              bg-volkert-blue 
              rounded-md 
              text-white 
              h-16 hover:bg-volkert-dark-blue hover:border-transparent 
              text-xl" @click="$store.commit('sendEmail')">
            Angebot anfordern
          </button>
          <button class="
              flex-auto 
              bg-gray-400 
              rounded-md 
              h-16
              ml-2 
              hover:bg-gray-500 hover:border-transparent" @click="$store.commit('printPage')">
            Drucken
          </button>
        </div>



      </div>




      <!--    ------------------------------    -->
      <!--    Those are place holders, needed    -->
      <!--    that the image scrolles further    -->
      <!--    ------------------------------    -->

      <div class="w-5/6 mx-auto justify-center content-center sm:mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
      <div class="w-5/6 mx-auto justify-center content-center sm:mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
      <div class="w-5/6 mx-auto justify-center content-center sm:mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
      <div class="w-5/6 mx-auto justify-center content-center sm:mt-40 grid-cols-2">
        <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { red } from 'tailwindcss/colors'

export default {
  data() {
    return {
      elementVisible: true
    }
  },

  created() {
    setTimeout(() => document.getElementById('cookie-free-zone').style.opacity = 0, 3000)
  }
}

</script>

<style>
</style>
