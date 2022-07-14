<template slot="actions" slot-scope="data">
    <div class="vprint">

        <!-- v-if="!$store.getters.isMobile" -->
        <!-- Separator with navigation -->
        <!-- Text above separator -->
        <div class="w-screen w-11/12 mx-auto justify-center ">
            <!-- Only Displayed if Desktop  -->
            <div class="grid grid-cols-6 items-center mt-8" v-if="!$store.getters.isMobile">
                <div class="text-xl sm:text-4xl text-left"> 3Dental</div>
                <div class="flex flex-row-reverse mt-4 items-center text-xs sm:text-base col-span-5">
                    <button
                        class="text_big ml-8 p-1 px-2 bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent transition ease-in-out delay-300 hover:scale-110"
                        @click="$store.commit('sendPrinterEmail')">Anfrage</button>
                    <div class="text_big ml-8 cursor-pointer"
                        @click="$store.commit('scrollToElement', 'technicalDetails')">
                        Technsiche Daten</div>
                    <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'whyVPrint')">
                        Warum
                        VPrint</div>
                    <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'overview')">
                        Überblick</div>
                </div>
            </div>

            <!-- Only Displayed if Mobile  -->
            <div class="grid grid-cols-2 items-center mt-8 mb-1" v-if="$store.getters.isMobile">
                <div class="text-2xl text-left font-medium"> 3Dental</div>
                <div class="flex flex-row-reverse items-center text-xs mr-2">
                    <!-- Request Button -->
                    <button
                        class="text-xs p-1 p-2 bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent"
                        @click="$store.commit('sendPrinterEmail')">Anfrage
                    </button>
                    <!-- Arrow Down Button -->
                    <button
                        class="text-gray-800 font-bold py-2 px-2 rounded items-center mx-auto flex justify-center text-center"
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

            <!-- Only Displayed if Mobile  -->
            <div class="flex flex-col-reverse mt-4 justify-start text-xs"
                v-if="$store.getters.isMobile & $store.getters.show_mobile_nav_bar">

                <div class="text-xs ml-6 p-4 " @click="$store.commit('scrollToElement', 'technicalDetails')">
                    Technsiche Daten</div>
                <div class="flex-grow border-t border-gray-300 mx-10"></div>
                <div class="text-xs ml-6 p-4 cursor-pointer" @click="$store.commit('scrollToElement', 'whyVPrint')">
                    Warum
                    VPrint</div>
                <div class="flex-grow border-t border-gray-300 mx-10"></div>
                <div class="text-xs ml-6 p-4 cursor-pointer" @click="$store.commit('scrollToElement', 'overview')">
                    Überblick</div>
            </div>
        </div>






        <!-- ------------------------------------------------------------
        1. Section - Intro and Plug and Play 

        From the beginning of printing until printing is finished 
        ------------------------------------------------------------ -->

        <div class="flex flex-col justify-center items-center w-11/12 sm:w-1/2 mx-auto mt-8 sm:mt-20 sm:h-screen">
            <!-- Motto des Druckers: Precision. Never Ending. -->
            <div id="plugAndPlayHeader" class="text-5xl sm:text-6xl font-bold text-center mb-8">
                Precision. Never Ending.</div>

            <!-- Erstes Bild Drucker -->
            <div class="">
                <img alt="Vue" class="logo bg-white" src="../assets/vprint_title_gray.png" />
            </div>
            <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center text-white">Bild drucker Gesamt</div> -->

            <!-- Preisangabe -->
            <div class="mt-4">
                <div class="price font-semibold">Ab 8.990 Euro</div>
            </div>
        </div>







        <!-- Pulg and Play -->
        <!-- Bilder -->
        <div class="flex mx-auto justify-center items-center mt-40">
            <div class="sm:m-8">
                <img src="../assets/icons/usb.png" class="" alt="">
            </div>
            <!-- <div class="m-8">
                <img src="../assets/icons/ethernet.png" class="flex-auto " alt="">
            </div> -->
            <div class="sm:m-8">
                <img src="../assets/icons/wifi.png" class="" alt="">
            </div>
            <div class="sm:m-8">
                <img src="../assets/icons/sdcard.png" class="" alt="">
            </div>
        </div>


        <!-- Plug and Play  - separator and text-->
        <div class="w-11/12 sm:w-1/2 mx-auto justify-center mt-8 flex flex-col">
            <!-- Text above separator -->
            <div class="text-3xl font-light text-left"> Anschlüsse</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="text-3xl font-semibold">USB</div>
                <!-- <div class="text-3xl font-semibold">Ethernet (Netzwerkkabel)</div> -->
                <div class="text-3xl font-semibold">WiFi</div>
                <div class="text-3xl font-semibold">SD-Karte</div>
            </div>
        </div>




        <!-- Display and Touch -->
        <!-- Bild -->
        <img src="../assets/icons/touch.png"
            class="flex-auto w-11/12 sm:w-1/2 items-center mx-auto justify-center mt-40" alt="">

        <!-- Display and Touch -->
        <!-- separator and text-->
        <div class="w-11/12 sm:w-1/2 mx-auto justify-center mt-8 flex flex-col">
            <!-- Text above separator -->
            <div class="text-3xl font-light text-left"> Display</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="text-3xl font-semibold">Einfache Bedienung über Touch</div>
                <div class="text-3xl font-semibold">1024 x 600 Pixel</div>
            </div>
        </div>





        <!-- Header Timelapse -->
        <div
            class="text-5xl sm:text-6xl font-bold flex mt-40 mb-8 w-11/12 items-center mx-auto justify-center text-center">
            Print.
            Whatever you want.
        </div>

        <!-- Timelapse -->
        <div class="w-11/12 sm:w-1/2 justify-center mx-auto mx-auto">
            <img alt="Vue" class="logo bg-white" src="../assets/timelapse.jpg" />
        </div>
        <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center text-white">Video druckt (2 - 3s Timelaps) ; Video endet mit grüner Beleuchtung.</div> -->
        <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center"></div> -->





        <!-- Holding Plate -->
        <!-- Text -->
        <div class="w-11/12 sm:w-1/2 mx-auto justify-center mt-8 flex flex-col  mt-80">
            <!-- Text above separator -->
            <div class="text-3xl font-light text-left">Druckbett</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="text-3xl font-semibold">Temperatursensible Haftplatte zum einfachen Lösen</div>
            </div>
            <div class="flex flex-col mt-4 items-left">
                <div class="text-3xl font-semibold">Herausnehmbar</div>
            </div>
        </div>

        <!-- Holding Plate-->
        <!-- Bilder -->
        <div class="flex sm:w-3/4 mx-auto justify-center items-center">
            <div class="sm:m-8 ">
                <img src="../assets/icons/hot.png" class="flex-auto " alt="">
            </div>
            <div class="sm:m-8 ">
                <img src="../assets/icons/cold.png" class="flex-auto " alt="">
            </div>
        </div>



        <!-- ------------------------------------------------------------
        2. Section - Intelligent Construction

        Technische Details und Rafinessen
        ------------------------------------------------------------ -->



        <!-- Intelligent Construction -->
        <div id="intelligentConstructionHeader"
            class="text-5xl sm:text-6xl font-bold flex mt-20 mb-8 w-11/12 items-center mx-auto justify-center text-center">
            Intelligent.
            Construction.
        </div>

        <!-- Erstes Bild Drucker -->
        <!-- <div class="w-2/3 h-80 bg-gray-800 flex items-center mx-auto justify-center text-white">Bild Housing</div>
        <div class="w-2/3 h-80 bg-gray-800 flex items-center mx-auto justify-center text-white mt-8">Bild Zugänglichkeit
            von allen Seiten</div>
        <div class="w-2/3 h-80 bg-gray-800 flex items-center mx-auto justify-center text-white mt-8">Bild
            Werkzeugschublade</div> -->

        <div class="w-11/12 sm:w-2/3 bg-volkert-blue flex flex-row mx-auto justify-center text-white items-center mt-8">
            <div class="w-1/4 text-xs sm:text-xl font-light flex justify-center">
                Housing
            </div>
            <img src="../assets/housing.png" class="w-3/4 flex-auto " alt="">
        </div>

        <div class="w-11/12 sm:w-2/3 bg-volkert-blue flex flex-row mx-auto justify-center text-white items-center mt-8">
            <img src="../assets/zugänglichkeit.jpg" class="w-3/4 flex-auto " alt="">
            <div class="w-1/4 w-1/4 text-xs sm:text-xl font-light flex justify-center">
                Zugänglich
            </div>
        </div>

        <div class="w-11/12 sm:w-2/3 bg-volkert-blue flex flex-row mx-auto justify-center text-white items-center mt-8">
            <div class="w-1/4 w-1/4 text-xs sm:text-xl font-light flex justify-center">
                Werkzeugfach
            </div>
            <img src="../assets/schublade.jpg" class="w-3/4 flex-auto " alt="">
        </div>




        <!-- Lighting-->
        <!-- Bilder -->
        <div class="flex mx-auto justify-center items-center mt-80">
            <!-- <div class="m-8 ">
                <img src="../assets/icons/green.png" class="flex-auto " alt="">
            </div>
            <div class="m-8 ">
                <img src="../assets/icons/yellow.png" class="flex-auto " alt="">
            </div>
            <div class="m-8 ">
                <img src="../assets/icons/red.png" class="flex-auto " alt="">
            </div> -->
            <div class="m-1 sm:m-8 flex-auto text-white">
                <img src="../assets/green22.png" class="flex-auto" alt="">
            </div>
            <div class=" flex-auto text-white">
                <img src="../assets/blue22.png" class="flex-auto" alt="">
            </div>
            <div class="m-1 sm:m-8 flex-auto text-white">
                <img src="../assets/red22.png" class="flex-auto" alt="">
            </div>
        </div>

        <!-- Lighting -->
        <!-- Text -->
        <div class="w-11/12 sm:w-1/2 mx-auto justify-center mt-8 flex flex-col">
            <!-- Text above separator -->
            <div class="text-3xl font-light text-left">Beleuchtung</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="text-3xl font-semibold">16,7 Mio. Farben (RGB)</div>
                <div class="text-3xl font-semibold">Druckstatusanzeige</div>
            </div>
        </div>




        <!-- Hochwertige Bauteile -->
        <!-- separator and text-->
        <div class="w-11/12 sm:w-1/2 h-screen flex flex-col justify-center mx-auto">
            <div class="columns-3 mt-4">
                <img src="../assets/präzise.jpg" class="py-1" alt="">
                <img src="../assets/langlebig.jpg" class="py-1" alt="">
                <img src="../assets/umweltfreundlich2.jpg" class="py-1" alt="">
            </div>

            <div class="columns-3 mt-2">
                <div class="flex justify-center text-xl sm:text-3xl font-semibold">Päzise.</div>
                <div class="flex justify-center text-xl sm:text-3xl font-semibold">Langlebig.</div>
                <div class="flex justify-center text-xl sm:text-3xl font-semibold">Nachhaltig.</div>
            </div>
        </div>






        <!-- ------------------------------------------------------------
        3. Section - Facts

        Es ist einfach den Drucker zu bedienen
        Der Drucker armortisiert sich schnell 
        ------------------------------------------------------------ -->

        <div class="h-screen">
            <!-- Text -->
            <div
                class="text-5xl sm:text-6xl font-bold flex mt-96 mb-8 w-11/12 items-center mx-auto justify-center mt-40 text-center">
                Du musst kein
                Ingenieur sein. Sondern Zahnarzt.</div>

            <!-- Text: Wir haben die Ingenieurarbeit bereits geleistet -->
            <div class="m-3 w-11/12 sm:w-1/2 items-center mx-auto justify-center">
                <ul class="w-full rounded-lg mt-2 mb-3 ">
                    <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                        <div class="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="ml-2">Die optimalen Druckeinstellungen wurden bereits von uns ermitellt.</span>
                        </div>
                    </li>
                    <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                        <div class="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="ml-2">Das optimale und recylebare Filament liefern wir mit.</span>
                        </div>
                    </li>
                    <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                        <div class="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="ml-2">Die Bediensoftware ist spielend einfach.</span>
                        </div>
                    </li>
                    <!-- <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                    <div class="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="ml-2">Weiteres ....</span>
                    </div>
                </li> -->
                </ul>
            </div>
        </div>





        <!-- Amortisation -->
        <!-- Text -->
        <div class="title_2 flex mt-40 mb-8 w-11/12 items-center mx-auto justify-center">Rentiert sich. Ziemlich
            schnell.</div>

        <!-- Amortisation -->
        <!-- Diagramm -->
        <img src="../assets/icons/amortisation.png"
            class="flex-auto w-11/12 sm:w-1/2 items-center mx-auto justify-center" alt="">


        <!-- Amortisation -->
        <!-- separator and text-->
        <div class="w-11/12 sm:w-1/2 mx-auto justify-center mt-12 flex flex-col">
            <!-- Text above separator -->
            <div class="text-3xl font-light text-left">Amortisation</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="text-3xl font-semibold">Weniger als 3 Jahre*</div>
            </div>
        </div>






        <div class="w-11/12 mx-auto justify-center mt-40 flex flex-col h-screen">

            <!-- Entwicklung und Fertigung -->
            <!-- Text -->
            <div class="text-5xl sm:text-6xl font-bold flex mt-96 mb-8 items-center mx-auto justify-center mt-40">Von
                Profis. Für
                Profis.
            </div>

            <!-- Bilder Greifswald und Freiburg -->
            <div class="w-5/6 mx-auto ">
                <div class="grid grid-rows-2 sm:grid-cols-2 mx-auto items-center mt-8">
                    <div class="">
                        <img alt="Vue" class="logo bg-white" src="../assets/logo_greifswald.png" />
                    </div>
                    <!-- <div class="">
                    <img alt="Vue" class="logo bg-white border-4 border-red-500" src="../assets/logo_freiburg.png" />
                </div> -->
                    <img src="../assets/logo_volkert.png" class="" alt="" />
                </div>
            </div>
        </div>


        <!-- Bild Greifswald -->
        <!-- <img src="../assets/logo_greifswald.png" class="flex-auto w-1/3 items-center mx-auto justify-start mt-8" alt=""> -->

        <!-- Bild Volkert -->
        <!-- <img src="../assets/logo_volkert.png" class="flex-auto w-1/3 items-center mx-auto justify-center mt-8" alt=""> -->







        <!-- Made in Germany -->
        <div class="bg-volkert-blue h-screen mt-40">
            <div class="flex h-full justify-center items-center mx-auto">
                <div class="w-11/12 bg-volkert-blue flex flex-col sm:flex-row justify-center mx-auto mb-4 ">

                    <!-- Germany Map with Volekrt Locations -->
                    <div class="w-11/12 sm:w-1/2 items-center justify-center mx-auto m-8">
                        <img alt="Vue" class="logo bg-volkert-blue" src="../assets/germany_map.png" />
                    </div>

                    <!-- Made in Germany -->
                    <!-- separator and text-->
                    <div
                        class="w-11/12 sm:w-1/2 mx-auto justify-center sm:justify-start flex flex-col text-white sm:mt-24">
                        <!-- Text above separator -->
                        <div class="text-3xl font-light text-left">This product is</div>
                        <!-- separator -->
                        <div class="flex items-center w-full">
                            <div class="flex-auto border-t border-white"></div>
                        </div>
                        <!-- Test below separator -->
                        <div class="flex flex-row mt-4">
                            <!-- <div class="below_separator font-semibold">Made In Germany.</div> -->
                            <div class="text-3xl font-semibold mr-2 text-black">Made </div>
                            <div class="text-3xl font-semibold mr-2 text-red-800">in </div>
                            <div class="text-3xl font-semibold mr-2 text-yellow-500">Germany. </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <!-- Technical Details -->
        <!-- Text -->
        <div id="technicalDetailsHeader"
            class="text-5xl sm:text-6xl font-bold text-center flex mt-40 mb-8 w-11/12 items-center mx-auto justify-center">
            Technische Daten.</div>

        <!-- Amortisation -->
        <!-- separator and text-->

        <!-- Maschinengroeße -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Maschinengröße (B×T×H): </div>
            <!-- <div class="col-span-2 text-3xl font-light">625×500×520 mm</div>
            <div class=""></div> -->
            <div class="sm:col-span-2">
                <img src="../assets/vprint_dimensions.png" class="sm:w-2/3 mx-auto" alt="">
            </div>
        </div>

        <!-- Drucktechnologie -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Drucktechnologie: </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">FFF / FDM</div>
        </div>

        <!-- Druckvolumen -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Druckvolumen (B×T×H): </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">200×200×200 mm</div>
        </div>

        <!-- Druckkopf -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Druckkopf: </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">E3D Hemera Bowden-Extruder</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Filamentdurchmesser: 1,75mm</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Geschwindigkeit Druckkopf: 100 mm/s</div>
        </div>

        <!-- Düse -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Düse: </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Düsendurchmesser: 0,4 mm (wechselbar)</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Maximale Düsentemperatur: 350 °C</div>
        </div>

        <!-- Druckbett -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Druckbett: </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Beheiztes Druckbett mit Glasplatte</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Magnetschnellwechselsystem</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Maximale Temperatur der Platte: 80 °C</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Beheiztes Bettmaterial: Silikon</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Druckbettnivellierung: Autobed-Levelling
                (Selbstkalibrierendes
                System)</div>
        </div>

        <!-- Druckbare Materialien: -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="flex flex-row">
                <div class="text-lg sm:text-3xl font-semibold">Druckbare Materialien</div>
                <div class="text-lg sm:text-3xl font-thin">**</div>
                <div class="text-lg sm:text-3xl font-semibold">:</div>
            </div>

            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">PLA / ABS / HIPS / PC / TPU / TPE / NYLON / PETG /
                ASA /
                PVA /
                Glasfasergefüllt Kohlefaserverstärkt / Metallpartikel gefüllt / Holzgefüllt</div>
        </div>

        <!-- Empfohlene Materialien -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="flex flex-row">
                <div class="text-lg sm:text-3xl font-semibold">Empfohlene Materialien</div>
                <div class="text-lg sm:text-3xl font-thin">***</div>
                <div class="text-lg sm:text-3xl font-semibold">:</div>
            </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">TrayFill Filament V2</div>

        </div>

        <!-- Elektrik -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Elektrik: </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Netzteileingang: 100-240V AC, 50/60Hz 230V @3.3A
            </div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Stromversorgungsausgang: 24V DC, 600 W</div>
        </div>

        <!-- Slicing-Software -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Slicing-Software: </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Ultimaker Cura, Simplify3D</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Unterstützte Dateitypen: STL, OBJ, 3MF</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Unterstütztes Betriebssystem: Windows / iOS /
                Linux</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Konnektivität: WiFi, USB-Anschluss, SD-Karte</div>
        </div>

        <!-- Steuerung am Drucker -->
        <div
            class="w-11/12 sm:w-4/5 mx-auto justify-start sm:justify-center flex-row sm:grid sm:grid-cols-3 background_technical_details">
            <div class="text-lg sm:text-3xl font-semibold">Steuerung am Drucker: </div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">5 Zoll Touchscreen</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Wiederaufnahme des Druckvorgangs nach
                Stromausfall: Ja</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Bildschirmauflösung: 1024 x 600</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Motion Controller: ARM Kortex M7.400 MHz FPU</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Logiksteuerung: Freescale imx6, Quad-Core 1 GHz
                ARM-Prozessor
            </div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Speicher: 16 GB</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Onboard-Flash: 8 GB</div>
            <div class=""></div>
            <div class="sm:col-span-2 text-lg sm:text-3xl font-light">Ports: USB 2.0, SD Karten-Slot, Kaltgerätestecker
                230V</div>
        </div>





        <!-- Kleingedrucktes -->
        <div class="bg-gray-100 mt-10">
            <div class="w-11/12 sm:w-4/5 mx-auto justify-center py-1 pt-8 kleingedrucktes">* Amortisation: Bei
                täglichem
                Druck
                eines Löffels. Es wurden 200 Öffnungstage für eine Praxis angenommen. Der Druck eines Löffels ist
                mit
                1,00 Euro eingegangen. Für einen herkömmlichen Löffel wurden 16,00 Euro kalkuliert.</div>
            <div class="w-11/12 sm:w-4/5 mx-auto justify-center py-1 kleingedrucktes">** Druckbare Materialien: Die
                angegebenen Materialien können grundsätzlich mit diesem Drucker gedruckt werden.
            </div>
            <div class="w-11/12 sm:w-4/5 mx-auto justify-center py-1 kleingedrucktes">*** Empfohlene Materialien:
                Mit
                diesen Filamenten wurden Dauerläufe durchgeführt. Der Drucker inkl. Düse und Druckbett wurden für
                eben
                diese Materialien optimiert.
            </div>
        </div>
    </div>
</template>




<script>
export default {
    
  async mounted() {
    this.$store.commit('isMobile')
}
}
</script>



<style>
/* div {
    margin-bottom: 10px;
  } */
.title_2 {
  font-weight: light;
  font-size: 36px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.title_bold {
  font-weight: bold;
  font-size: 60px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.title_bold_mobile {
    font-weight: bold;
    font-size: 30px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.above_separator {
  font-weight: lighter;
  font-size: 28px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.above_separator_mobile {
    font-weight: lighter;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.below_separator {
  font-weight: normal;
  font-size: 28px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.below_separator_mobile {
    font-weight: normal;
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.text_big {
  font-weight: light;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.text_big_mobile {
    font-weight: light;
    font-size: 13px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.price {
    font-weight: normal;
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
}
.price_mobile {
  font-weight: normal;
  font-size: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.kleingedrucktes {
    font-weight: lighter;
    font-size: 14px;
    color: rgb(63, 63, 63);
    margin-top: 0px;
    margin-bottom: 0px;
}
.kleingedrucktes_mobile {
    font-weight: lighter;
    font-size: 7px;
    color: rgb(63, 63, 63);
    margin-top: 0px;
    margin-bottom: 0px;
}
.background_technical_details {
    background-color: #f3f4f6;
    /*  bg-gray-100 */
    border-radius: 12px;
    margin-top: 8px;
    padding: 12px;
}


.square {
  width: 50%;
  padding-bottom: 50%;
}
</style>
 