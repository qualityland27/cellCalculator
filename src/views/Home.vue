<template>
  <div class="home">

    <div class="w-screen w-11/12 mx-auto justify-center ">
      <!-- Only Displayed if Desktop  -->
      <div class="grid grid-cols-6 items-center mt-8" v-if="!$store.getters.isMobile">
        <div class="text-xl sm:text-4xl text-left">vCell</div>
        <div class="flex flex-row-reverse mt-4 items-center text-xs sm:text-base col-span-5">
          <button
            class="text_big ml-8 p-1 px-2 bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent transition ease-in-out delay-300 hover:scale-110"
            @click="$store.commit('sendPrinterEmail')">Anfrage</button>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'technicalDetailsHeader')">
            Technsiche Daten</div>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'whyVcellHeader')">
            Warum
            vCell</div>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'configuratorHeader')">
            Konfigurator</div>
          <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'vCellFactsHeader')">
            Überblick</div>
        </div>
      </div>

      <!-- Only Displayed if Mobile  -->
      <div class="grid grid-cols-2 items-center mt-8 mb-1" v-if="$store.getters.isMobile">
        <div class="text-2xl text-left font-medium">vCell</div>
        <div class="flex flex-row-reverse items-center text-xs mr-2">
          <!-- Request Button -->
          <button
            class="text-xs p-1 p-2 bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent"
            @click="$store.commit('sendPrinterEmail')">Anfrage
          </button>
          <!-- Arrow Down Button -->
          <button class="text-gray-800 font-bold py-2 px-2 rounded items-center mx-auto flex justify-center text-center"
            @click="$store.commit('change_show_mobile_nav_bar')">
            <!-- Arrow Down -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" v-if="!$store.getters.show_mobile_nav_bar">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <!-- Arrow Up -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2" v-if="$store.getters.show_mobile_nav_bar">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- separator -->
      <div class="flex-grow border-t border-gray-900 mt-1"></div>
    </div>




    <!-- ------------------------------------------------------------
        1. Section - Intro and Plug and Play

        From the beginning of printing until printing is finished
        ------------------------------------------------------------ -->

    <div class="flex flex-col justify-center items-center w-11/12 sm:w-1/2 mx-auto mt-8 sm:mt-20 sm:h-screen">
      <!-- Motto des Druckers: Precision. Never Ending. -->
      <div id="vCellHeader" class="text-5xl sm:text-6xl font-bold text-center mb-8">
        Ein Produkt. Deine Anforderungen.
      </div>

      <!-- Erstes Bild Drucker -->
      <div class="flex justify-center">
        <img alt="Vue" class="logo bg-white" src="../assets/vCell3.png" />
      </div>
      <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center text-white">Bild drucker Gesamt</div> -->

      <!-- Preisangabe -->
      <div class="">
        <div class="text-xl sm:text-base font-semibold">Ab {{ $store.getters.startPrice }} Euro</div>
      </div>
    </div>




    <!-- Volkert Separator  -->
    <!-- <div class="relative flex py-5 items-center w-4/5 sm:w-3/5 mx-auto flex justify-center">
      <div class="flex-grow border-t border-gray-900"></div>
      <img src="../assets/volkert_logo.png" width="100" class="flex-shrink mx-4 " />
      <div class="flex-grow border-t border-gray-900"></div>
    </div> -->


    <!-- Text -->
    <div class="text-lg sm:text-2xl w-5/6 mx-auto mb-40 mt-8 text-justify">
      Die vCell ist ein <span class="text-slate-900 font-medium"> kompaktes Automatisierungsmodul</span>.
      Die Robotereinheit kann für verschiedene Zwecke eingesetzt werden. So zählen
      <span class="text-slate-900 font-medium">Schweißen, Handling und Maschinenbestückung</span>
      zu den häufigsten Anwendungsbereichen.
      Die vCell wird in der kompakten Bauform als Standardmodul angeboten.
      Diese zeichnet sich durch platzsparende Bauweise und einfachste
      Transportmöglichkeiten mit Stapler oder Hubwagen aus. Durch die hohe
      Flexibilität unserer Anlagen und Mitarbeiter können wir das Standardmodul
      an nahezu jeden Kundenwunsch anpassen. Zögern sie also nicht, Kontakt
      aufzunehmen.
    </div>




    <!-- Some Facts -->
    <div
      class="antialiased w-5/6 mx-auto h-full bg-zinc-900 text-gray-400 p-10 flex justify-center items-center rounded-3xl">
      <div class="container px-4 mx-auto">
        <div>
          <div id="title" class="text-center my-10">
            <div id="vCellFactsHeader"
              class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-gray-100 text-5xl sm:text-6xl font-bold ">
              Some Facts
            </div>
            <!-- <h1 class="text-5xl sm:text-6xl font-bold text-blue-600">Some Facts</h1> -->
            <p class="text-light text-gray-500 text-xl">
              Warum vCell von Volkert?
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
            <div id="plan"
              class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
              <div id="title" class="w-full py-5 border-b border-gray-800">
                <h2 class="font-bold text-4xl text-white">Verschiedene</h2>
                <h2 class="font-bold text-4xl text-white mb-6">Anwendungen</h2>
                <!-- <h3 class="font-normal text-blue-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row gap-6 items-center justify-center">
                    <welding_icon class="h-16 w-16" fillAll="fill-blue-600" />
                    <gripping_icon class="h-16 w-16" fillAll="fill-blue-600" />
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Von hohen bis kleinen Stückzahlen.
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-xl font-light">
                  <ul>
                    <li>Schweißen</li>
                    <li>Handling</li>
                    <li>...</li>
                    <!-- <li>Subdomain included</li> -->
                  </ul>
                  <!-- <div id="choose" class="w-full mt-10 px-6">
                    <a href="#"
                      class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white">Choose</a>
                  </div> -->
                </div>
              </div>
            </div>
            <div id="plan"
              class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
              <div id="title" class="w-full py-5 border-b border-gray-800">
                <h2 class="font-bold text-4xl text-white">Kompakte</h2>
                <h2 class="font-bold text-4xl text-white mb-6">Bauform</h2>
                <!-- <h3 class="font-normal text-indigo-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row items-center justify-center">
                    <compact_icon class="h-16 w-16 stroke-blue-600" fillAll="stroke-blue-600" stroke="fill-blue-600"
                      background="fill-zinc-900" fillSquare="fill-blue-600" />
                    <!-- <welding_icon class="h-16 w-16" fillAll="fill-blue-600" /> -->
                    <!-- <gripping_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" /> -->
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Platzsparend und einfacher Transport.
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-xl font-light">
                  <ul>
                    <li>Standard</li>
                    <li>Mini</li>
                    <li>Custom</li>
                    <!-- <li>Subdomain included</li> -->
                  </ul>
                  <!-- <div id="choose" class="w-full mt-10 px-6">
                    <a href="#"
                      class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white">Choose</a>
                  </div> -->
                </div>
              </div>
            </div>
            <div id="plan"
              class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
              <div id="title" class="w-full py-5 border-b border-gray-800">
                <h2 class="font-bold text-4xl text-white">An Kundenwünsche</h2>
                <h2 class="font-bold text-4xl text-white mb-6">anpassbar</h2>
                <!-- <h3 class="font-normal text-indigo-500 text-xl mt-2">
                  Verschiedene
                </h3> -->
              </div>
              <div id="content" class="mt-12">
                <div id="icon" class="my-5">
                  <div class="flex flex-row items-center justify-center">
                    <!-- <welding_icon class="mx-2 h-12 w-12" fillAll="fill-volkert-blue" /> -->
                    <!-- <gripping_icon class="h-16 w-16" fillAll="fill-blue-500" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto fill-stroke text-blue-600"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path class="fill-blue-600" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z">
                      </path>
                    </svg>
                  </div>
                  <p class="text-gray-500 text-sm pt-2">
                    Was immer Sie benötigen.
                  </p>
                </div>
                <div id="contain" class="leading-8 mb-10 text-xl font-light">
                  <ul>
                    <li>Roboter</li>
                    <li>Greifer</li>
                    <li>Programmierung</li>
                    <li>Spannvorrichtungen</li>
                    <li>Schweißnahtverfolgung</li>
                  </ul>
                  <!-- <div id="choose" class="w-full mt-10 px-6">
                    <a href="#"
                      class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white">Choose</a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="mt-40 text-5xl sm:text-6xl font-bold w-5/6 mx-auto flex justify-center mb-20">
      Jetzt konfigurieren.
    </div>
    <div type="button" @click="$store.commit('scrollToElement', 'calculator')" class="cursor-pointer mb-40 mx-auto animate-bounce bg-volkert-blue p-2 w-20 h-20 ring-1 ring-slate-900/5 dark:ring-slate-200/20
      shadow-lg rounded-full flex items-center justify-center">
      <svg class="w-12 h-12 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>




    <calculator />




    <!-- Text -->
    <div class="text-lg sm:text-2xl w-5/6 mx-auto flex text-justify text-center mt-40">
      Die vCell wird in ihrer Basisausführung mit dem Cobot Panda vom Hersteller Franka Emika geliefert. Der
      Cobot
      zeichnet sich durch eine einfache grafische
      Bedienoberfläche aus und lässt sich somit auch ohne Programmierkenntnisse programmieren. Der
      Standard-Greifer
      des
      Pandas ist ein Zwei-Backen-Greifer.
      Darüber hinaus sind im Lieferumfang ein Schubladenfach zum Verstauen unterschiedlicher Werkzeuge sowie ein
      Montagetisch zum Spannen von Werkstücken enthalten.
    </div>




    <!-- Robot Info -->
    <div class="antialiased w-5/6 mx-auto mt-40  bg-zinc-900 text-gray-400 p-10 flex flex-col rounded-3xl">

      <div class="text-xl font-semibold mb-20">Roboter</div>

      <!-- Turning Cards -->
      <div class="flex flex-row justify-center items-center gap-6">
        <!-- Robot -->
        <div
          className="relative w-1/2 h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card">
          <!-- front -->
          <div
            className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-zinc-800 transition-all duration-100 delay-200 z-20 hover:opacity-0 ">
            <div class="text-6xl font-bold text-center break-words text-slate-400">
              Robot
            </div>
            <div class="text-2xl font-light text-center mt-4 break-words text-slate-400">
              Spezialisierte Kraftpakete
            </div>
          </div>

          <!-- back  -->
          <div className="absolute inset-0 w-10/11 p-6 flex items-center bg-volkert-blue transition-all z-10 card-back">
            <div>
              <span class="font-bold text-xl text-slate-500 dark:text-slate-400">Eigenschaften </span>
              <ul class="list-none list-inside text-slate-900 dark:text-slate-200 select-text text-slate-400 p-2">
                <li>
                  <div
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg class="w-8 h-6 ml-1 text-gray-500 transition duration-75" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden">
                      <g clip-path="url(#clip0)" transform="translate(-119 -335)">
                        <path class="fill-slate-400"
                          d="M131.226 356.311 131.226 338.4 133.358 340.532C133.636 340.81 134.087 340.81 134.365 340.532 134.643 340.255 134.643 339.804 134.365 339.526L131.011 336.174C130.746 335.896 130.306 335.885 130.028 336.15 130.02 336.158 130.012 336.166 130.004 336.174L126.653 339.526C126.375 339.79 126.364 340.23 126.629 340.508 126.636 340.516 126.644 340.524 126.653 340.532 126.917 340.81 127.357 340.821 127.635 340.556 127.643 340.548 127.651 340.54 127.659 340.532L129.79 338.401 129.79 356.311C129.79 356.708 130.112 357.03 130.509 357.03 130.906 357.03 131.227 356.708 131.227 356.311Z" />
                      </g>
                    </svg>
                    <span class="text-slate-400 ml-4">Spezialisiert auf eine bestimmte Tätigkeit</span>
                  </div>
                </li>
                <li>
                  <div
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg class="w-8 h-8 text-gray-500 transition duration-75 fill-slate-400"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                      overflow="hidden">
                      <g clip-path="url(#clip0)" transform="translate(-113 -368)">
                        <path
                          d="M114.417 385C114.417 385.779 115.054 386.417 115.833 386.417L115.833 383.583C115.054 383.583 114.417 384.221 114.417 385Z" />
                        <path
                          d="M144.167 383.583 144.167 386.417C144.946 386.417 145.583 385.779 145.583 385 145.583 384.221 144.946 383.583 144.167 383.583Z" />
                        <path
                          d="M118.312 379.688 117.958 379.688C117.179 379.688 116.542 380.325 116.542 381.104L116.542 388.896C116.542 389.675 117.179 390.312 117.958 390.312L118.312 390.312C119.092 390.312 119.729 389.675 119.729 388.896L119.729 381.104C119.729 380.325 119.092 379.688 118.312 379.688Z" />
                        <path
                          d="M142.042 379.688 141.688 379.688C140.908 379.688 140.271 380.325 140.271 381.104L140.271 388.896C140.271 389.675 140.908 390.312 141.688 390.312L142.042 390.312C142.821 390.312 143.458 389.675 143.458 388.896L143.458 381.104C143.458 380.325 142.821 379.688 142.042 379.688Z" />
                        <path
                          d="M138.146 376.5 137.438 376.5C136.658 376.5 136.021 377.138 136.021 377.917L136.021 382.875 123.979 382.875 123.979 377.917C123.979 377.138 123.342 376.5 122.562 376.5L121.854 376.5C121.075 376.5 120.438 377.138 120.438 377.917L120.438 392.083C120.438 392.862 121.075 393.5 121.854 393.5L122.562 393.5C123.342 393.5 123.979 392.862 123.979 392.083L123.979 387.125 136.021 387.125 136.021 392.083C136.021 392.862 136.658 393.5 137.438 393.5L138.146 393.5C138.925 393.5 139.562 392.862 139.562 392.083L139.562 377.917C139.562 377.138 138.925 376.5 138.146 376.5Z" />
                      </g>
                    </svg>
                    <span class="text-slate-400 ml-5">Extrem hohe Traglasten</span>
                  </div>
                </li>
                <li>
                  <div
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg class="w-8 h-8 text-gray-500 transition duration-75 fill-slate-400"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                      overflow="hidden">
                      <g clip-path="url(#clip0)" transform="translate(-114 -406)">
                        <path
                          d="M143.962 424.275 142.156 421.194C141.519 420.131 140.492 419.423 139.323 419.175 139.429 418.077 139.252 416.767 138.827 415.421 137.8 412.481 134.329 410.958 134.329 410.958 134.329 410.958 133.94 411.667 133.585 412.729 134.683 413.331 135.852 414.217 136.631 415.527 137.34 416.767 137.8 418.006 137.942 419.104L137.198 419.104C137.021 418.112 136.631 416.979 135.994 415.881 134.435 413.154 130.717 412.375 130.717 412.375 130.717 412.375 129.548 415.987 131.106 418.715 131.283 419.033 131.496 419.352 131.708 419.671 130.752 419.317 129.76 419.14 128.698 419.14 125.333 419.14 122.429 421.052 121.012 423.815 120.8 423.744 120.588 423.708 120.375 423.708 118.817 423.708 117.542 424.983 117.542 426.542 117.542 428.029 118.71 429.269 120.162 429.375 120.588 431.748 122.004 433.767 123.952 435.042L131.354 435.042C131.956 435.042 132.417 434.581 132.417 433.979 132.417 433.377 131.956 432.917 131.354 432.917L128.131 432.917C129.902 432.385 131.177 430.756 131.177 428.844 131.177 426.506 129.265 424.594 126.927 424.594 126.537 424.594 126.183 424.629 125.829 424.735 125.546 424.806 125.262 424.629 125.192 424.346 125.121 424.062 125.298 423.779 125.581 423.708 126.042 423.602 126.502 423.531 126.963 423.531 129.902 423.531 132.275 425.904 132.275 428.844 132.275 430.119 131.815 431.288 131.071 432.208 131.744 432.208 132.488 431.819 133.267 431.288L133.904 434.192C133.975 434.688 134.4 435.042 134.896 435.042 134.967 435.042 135.038 435.042 135.108 435.006 135.569 434.9 135.887 434.51 135.923 434.05L135.958 434.192C136.1 434.688 136.525 435.042 137.021 435.042 137.092 435.042 137.163 435.042 137.233 435.006 137.8 434.865 138.154 434.298 138.048 433.731L136.95 428.631C137.694 428.242 138.402 427.958 139.146 427.958 140.315 427.958 141.483 427.817 142.617 427.533 143.325 427.356 143.892 426.825 144.104 426.152L144.14 426.046C144.352 425.444 144.281 424.806 143.962 424.275Z" />
                      </g>
                    </svg>
                    <span class="text-slate-400 ml-5">Hohe Präzision und hohe Geschwindigkeit</span>
                  </div>
                </li>
              </ul>

              <!-- Arbeitsbereiche -->
              <div class="font-bold text-xl text-slate-400 mt-4">Arbeitsbereiche </div>
              <div class="text-slate-400 ml-4 mt-2">Schweißen, Lackieren, Handhabung, Montage, ...</div>
            </div>
          </div>
        </div>

        <!-- & -->
        <!-- <div class="text-8xl font-light">&</div> -->

        <!-- Cobot -->
        <div
          className="relative w-1/2 h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 card">
          <!-- front -->
          <div
            className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-zinc-800 transition-all duration-100 delay-200 z-20 hover:opacity-0 ">
            <div class="text-6xl font-bold text-center break-words text-slate-400">
              Cobot
            </div>
            <div class="text-2xl font-light text-center mt-4 break-words text-slate-400">
              Flexible Allrounder
            </div>
          </div>

          <!-- back  -->
          <div className="absolute inset-0 w-10/11 p-6 flex items-center bg-volkert-blue transition-all z-10 card-back">
            <div>
              <span class="font-bold text-xl text-slate-500 dark:text-slate-400">Eigenschaften </span>
              <ul class="list-none list-inside text-slate-900 dark:text-slate-200 select-text text-slate-400 p-2">
                <li>
                  <div
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg class="w-8 h-6 ml-1 text-gray-500 transition duration-75 fill-slate-400"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                      overflow="hidden">
                      <g clip-path="url(#clip0)" transform="translate(-688 -334)">
                        <path
                          d="M709.562 339.99C709.562 339.751 709.444 339.529 709.247 339.395L705.974 336.127C705.695 335.844 705.24 335.841 704.957 336.119 704.675 336.398 704.671 336.853 704.95 337.136 704.953 337.139 704.955 337.141 704.958 337.144L707.089 339.271 705.729 339.271C703.085 339.273 700.671 340.775 699.5 343.146 698.329 340.775 695.915 339.273 693.271 339.271L691.912 339.271 694.043 337.144C694.326 336.866 694.331 336.411 694.052 336.128 693.774 335.844 693.319 335.84 693.036 336.119 693.033 336.121 693.03 336.124 693.028 336.127L689.754 339.395C689.556 339.528 689.437 339.751 689.438 339.99 689.438 339.993 689.438 339.995 689.438 339.998 689.438 340.002 689.438 340.004 689.438 340.007 689.437 340.198 689.513 340.382 689.649 340.517L692.994 343.861C693.277 344.139 693.732 344.136 694.01 343.853 694.286 343.573 694.286 343.124 694.01 342.845L691.874 340.708 693.271 340.708C696.313 340.712 698.778 343.177 698.781 346.219L698.781 354.365C698.781 354.762 699.103 355.083 699.5 355.083L699.5 355.083C699.897 355.083 700.219 354.762 700.219 354.365L700.219 346.219C700.222 343.177 702.687 340.712 705.729 340.708L707.126 340.708 704.991 342.845C704.708 343.123 704.705 343.578 704.983 343.861 705.262 344.144 705.717 344.148 706 343.869 706.002 343.867 706.005 343.864 706.008 343.861L709.353 340.517C709.488 340.381 709.563 340.198 709.562 340.007 709.562 340.004 709.562 340.001 709.562 339.998 709.562 339.996 709.562 339.993 709.562 339.99Z" />
                      </g>
                    </svg>
                    <span class="text-slate-400 ml-4">Breitgefächerte Anwendungsmöglichkeiten</span>
                  </div>
                </li>
                <li>
                  <div
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg class="w-8 h-8 text-gray-500 transition duration-75 fill-slate-400"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                      overflow="hidden">
                      <g clip-path="url(#clip0)" transform="translate(-682 -375)">
                        <path
                          d="M709.819 383.09C706.062 382.79 702.56 381.076 700.018 378.294 699.539 377.739 698.701 377.677 698.146 378.156 698.096 378.198 698.05 378.244 698.008 378.294 695.466 381.076 691.964 382.79 688.207 383.09 687.509 383.155 686.977 383.743 686.982 384.445L686.982 387.863C686.982 395.296 691.709 402.095 698.273 406.302 698.724 406.592 699.302 406.592 699.753 406.302 706.316 402.094 711.043 395.296 711.043 387.863L711.043 384.445C711.049 383.743 710.517 383.155 709.819 383.09ZM708.741 387.863C708.741 393.778 705.218 399.745 699.316 403.828L699.013 404.037 698.711 403.828C692.808 399.744 689.284 393.776 689.284 387.863L689.284 385.295 689.732 385.224C693.067 384.697 696.171 383.194 698.653 380.904L699.013 380.572 699.373 380.904C701.854 383.194 704.959 384.697 708.294 385.224L708.741 385.295Z" />
                        <path
                          d="M699.013 382.008C696.554 384.159 693.56 385.606 690.347 386.196L690.347 387.863C690.347 393.327 693.579 398.865 699.013 402.742 704.446 398.866 707.679 393.327 707.679 387.863L707.679 386.196C704.466 385.606 701.472 384.159 699.013 382.008ZM698.103 395.837 694.522 392.255 695.739 391.038 698.103 393.402 702.945 388.56 704.162 389.778Z" />
                      </g>
                    </svg>
                    <span class="text-slate-400 ml-5">Arbeiten Hand in Hand mit dem Mensch – Ohne Schutzzaun
                    </span>
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
                    <span class="text-transparent">Hohe Präzision und hohe Geschwindigkeit</span>
                  </div>
                </li>
              </ul>

              <!-- Arbeitsbereiche -->
              <div class="font-bold text-xl text-slate-400 mt-4">Arbeitsbereiche </div>
              <div class="text-slate-400 ml-4 mt-2">Pick & Place, Montage, Maschinenbestückung, Palettieren, ...</div>
            </div>
          </div>
        </div>
      </div>




      <div class="flex flex-col justify-center items-center gap-6 mt-16">
        <div id="testElement" class="testElement w-4/5 text-center font-semibold text-slate-400">
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














    <!--    Informationszellen    -->
    <!--    Sonderwünsche    -->

    <figure id="extraWishes"
      class="flex bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white mx-auto justify-center rounded-xl p-8 pb-16 w-11/12 sm:w-1/2 mt-40 hover:opacity-90"
      onclick="window.location.href = 'https://www.volkert.net/Kontakt/'">
      <div class="p-8 text-center">
        <div class="text-4xl sm:text-5xl font-semibold mx-auto flex justify-center mt-8 mb-12">Sonderwünsche - kein
          Problem!</div>
        <div class="text-md sm:text-xl font-light mx-auto flex justify-center mb-8">Bauform, Roboter, Programmierung,
          Greifer,
          Spannvorrichtungen,
          Schweißparamter, Schweißnahtverfolgung etc.</div>
        <div class="text-lg sm:text-xl font-bold mx-auto flex justify-center">Sprechen Sie uns einfach an!</div>
      </div>
    </figure>



    <!--    Warum VCell    -->
    <div id="whyVcellHeader" class="sm:w-4/5 mx-auto flex flex-col sm:flex-row justify-center content-center mt-16">
      <figure
        class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 pb-16 w-11/12 sm:w-1/2 sm:mr-5 mt-10">
        <div class="p-8 text-left ">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center ">Warum
            vCell?</div>
          <ul class="list-disc text-md sm:text-xl font-light list-insides ">
            <li>Zeitsparend – Schnell / einfach umrüstbar </li>
            <li>Robust – Einfache und effiziente Konstruktion</li>
            <li>Kompakte Bauform – Transport mit Stapler / Hubwagen</li>
            <li>Flexible Einsatzmöglichkeiten – Schweißen, Handling oder Maschinenbestückung, … </li>
          </ul>
        </div>
      </figure>


      <!--    Warum Volkert    -->
      <figure
        class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl p-8 w-11/12 sm:w-1/2 sm:ml-5 mt-10">
        <div class="p-8 text-left ">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center">Warum
            Volkert?</div>
          <ul class="list-disc text-md sm:text-xl font-light list-insides">
            <li>100% Flexibilität – wir passen uns ihren Bedürfnissen an</li>
            <li>360° Made in Germany – von Entwicklung bis Fertigung</li>
            <li>Höchste Qualität – durch Leidenschaft</li>
            <li>Experten im Schweißbereich</li>
            <li>Schnelle Lieferung</li>
          </ul>
        </div>
      </figure>
    </div>


    <!-- Technical Details -->
    <figure id="technicalDetailsHeader"
      class="flex bg-gray-800 cursor-pointer text-white mx-auto justify-center rounded-xl w-11/12 sm:w-1/2 mt-10">
      <div class="p-8 text-center">
        <div class="p-8 flex justify-center text-center flex-col">
          <div class="text-4xl sm:text-5xl font-semibold mt-8 mb-12 mx-auto flex justify-center text-center ">
            Technische
            Daten</div>
          <div class="text-md sm:text-xl font-semibold text-left">Abmessung in BxLxH</div>
          <div class="text-md sm:text-xl font-light text-left">800 x 1200 x 1800 mm (Kompaktversion)</div>
          <div class="text-md sm:text-xl font-semibold text-left mt-4">Arbeitsbereich</div>
          <div class="text-md sm:text-xl font-light text-left">400 mm³ (Kompaktversion), bis 3200 mm³</div>
        </div>


        <!--    Downloadbutton (nur Klick auf den Text funktioniert)   -->
        <button
          class="bg-gray-300 hover:bg-gray-400 hover:text-white text-gray-800 font-bold py-2 px-4 rounded items-center mt-8 mb-8 mx-auto flex justify-center text-center"
          @click="$store.dispatch('downloadItem')">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a>DOWNLOAD FLYER</a>
        </button>

      </div>
    </figure>





    <!--    Logos der Roboterhersteller    -->
    <!-- <div class="grid w-5/6 mx-auto grid-cols-2 sm:grid-cols-4 gap-4 flex items-center mt-40">
      <div class="mb-4">
        <img src="../assets/yaskawa_logo.jpg" class="max-w-full h-auto" alt="">
      </div>
      <div class="mb-4">
        <img src="../assets/abb_logo.jpg" class="max-w-full h-auto" alt="">
      </div>
      <div class="mb-4">
        <img src="../assets/franka_logo.jpg" class="max-w-full mx-auto h-auto" alt="">
      </div>
      <div class="mb-4">
        <img src="../assets/fanuc_logo.jpg" class="max-w-full h-auto" alt="">
      </div>
    </div> -->



    <!--    Links zu anderen Seiten unserer Homepage    -->
    <div class="text-md sm:text-xl font-bold mx-auto flex justify-center text-center mt-40">
      Wissen Sie schon, was wir neben der VCELL anbieten? Oder wissen Sie, wie wir unsere Qualität garantieren?
    </div>

    <div class="text-md sm:text-xl w-4/6 sm:w-2/6 mx-auto flex flex-row mt-10 mb-40 p-4 gap-6">
      <button
        class="w-1/2 flex-auto bg-transparent hover:bg-gray-400 hover:text-white border border-gray-400 hover:border-transparent rounded-md"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/'">
        Leistungen
      </button>
      <button
        class="w-1/2 flex-auto bg-transparent hover:bg-gray-400 hover:text-white border border-gray-400 hover:border-transparent rounded-md p-4"
        onclick="window.location.href = 'https://www.volkert.net/Leistungen/360-Grad-Made-in-Germany/'">
        360 Grad - Made in Germany
      </button>
    </div>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import CounterSquared from "../components/CounterSquared.vue";
import Calculator from "../components/Calculator.vue";
import VueNumeric from "vue-numeric";


export default {
  name: "Home",
  data() {
    return {
      counter: 0,
      carLabel: "no car",
      elementVisible: false,
    }
  },
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
    counter: require("@/components/Counter.vue").default,
    "counter-squared": require("@/components/CounterSquared.vue").default,
    "calculator": require("@/components/Calculator.vue").default,
    "welding_icon": require("@/assets/icons/welding_icon.vue").default,
    "gripping_icon": require("@/assets/icons/gripping_icon.vue").default,
    "compact_icon": require("@/assets/icons/compact_icon.vue").default,
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





      // const element2 = document.getElementById("testElement-2");
      // const rect2 = element2.getBoundingClientRect();

      // if ((rect2.bottom <= document.documentElement.clientHeight - 300 &&
      //   rect2.left >= 0 &&
      //   rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //   rect2.right <= (window.innerWidth || document.documentElement.clientWidth)) == true) {
      //   console.log("visible")
      //   const element = document.getElementById("testElement-2");
      //   element.style.visibility = "visible";
      // } else {
      //   console.log("unvisible")

      //   const element = document.getElementById("testElement-2");
      //   element.style.visibility = "hidden";
      // }


      // const element3 = document.getElementById("testElement-3");
      // const rect3 = element3.getBoundingClientRect();

      // if ((rect3.bottom <= document.documentElement.clientHeight - 300 &&
      //   rect3.left >= 0 &&
      //   rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      //   rect3.right <= (window.innerWidth || document.documentElement.clientWidth)) == true) {
      //   console.log("visible")
      //   const element = document.getElementById("testElement-3");
      //   element.style.visibility = "visible";
      // } else {
      //   console.log("unvisible")

      //   const element = document.getElementById("testElement-3");
      //   element.style.visibility = "hidden";
      // }



      // const { top, bottom } = element.getBoundingClientRect();
      // const vHeight = (window.innerHeight || document.documentElement.clientHeight);

      // // console.log("middle of screen:");s
      // console.log(
      //   (top > 0 || bottom > 0) &&
      //   top < vHeight
      // );



    }
  }
  // methods: {
  //   sendEmail()
  //   {
  //     var y = {{ $store.getters.cameraAufpreis }};
  //     var x = "mailto:xyz@abc.com?subject=" + y;
  //     window.location = x;

  //   }
  // }
};
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

.title_sm {
  font-weight: light;
  font-size: 28px;
  margin-top: 30px;
  margin-bottom: 8px;
}

.sub-title {
  font-weight: normal;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 80px;
}

.text {
  font-weight: lighter;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.text_normal {
  font-weight: normal;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.text_sm {
  font-weight: lighter;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.bigText {
  font-weight: light;
  font-size: 52px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.bigText_sm {
  font-weight: light;
  font-size: 36px;
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
  font-weight: light;
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

/* ============ flip hover styles ============ */
.card:hover {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.card-back {
  transform: rotateY(180deg);
}

.testElement {
  background-color: transparent;
  font-size: xx-large;
  opacity: 0;
  filter: alpha(opacity=0);
}
</style>
