<template slot="actions" slot-scope="data">
    <div class="vprint">
        <!-- Separator with navigation -->
        <!-- Text above separator -->
        <div class="grid grid-cols-2 items-center w-11/12 mx-auto justify-center mt-8">
            <div class="title_2 text-left"> 3Dental</div>
            <div class="flex flex-row-reverse mt-4 items-center">
                <button class="text_big ml-8 p-1 px-2 bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent" 
                    @click="$store.commit('sendPrinterEmail')"          >Anfrage</button>
                <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'technicalDetails')" >Technsiche Daten</div>
                <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'whyVPrint')">Warum VPrint</div>
                <div class="text_big ml-8 cursor-pointer" @click="$store.commit('scrollToElement', 'overview')">Überblick</div>
            </div>
        </div>
        <!-- separator -->
        <div class="flex items-center w-11/12 mx-auto justify-center">
            <div class="flex-grow border-t border-gray-900"></div>
        </div>


        <!-- ------------------------------------------------------------
        1. Section - Intro and Plug and Play 

        From the beginning of printing until printing is finished 
        ------------------------------------------------------------ -->


        <!-- Motto des Druckers: Precision. Never Ending. -->
        <div id="plugAndPlayHeader" class="title_bold flex mt-20 mb-8 w-11/12 items-center mx-auto justify-center">Precision. Never Ending.</div>

        <!-- Erstes Bild Drucker -->
        <div class="w-1/2 justify-center mx-auto mx-4">
            <img alt="Vue" class="logo bg-white" src="../assets/vprint_title_gray.png" />
        </div>
        <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center text-white">Bild drucker Gesamt</div> -->


        <!-- Preisangabe -->
        <div class="flex flex-col mt-4 items-center">
            <div class="price font-semibold">Ab 8.900 Euro</div>
        </div>




        <!-- Pulg and Play -->
        <!-- Bilder -->
        <div class="flex mx-auto justify-center items-center mt-40">
            <div class="m-8">
                <img src="../assets/icons/usb.png" class="flex-auto " alt="">
            </div>
            <div class="m-8">
                <img src="../assets/icons/ethernet.png" class="flex-auto " alt="">
            </div>
            <div class="m-8">
                <img src="../assets/icons/wifi.png" class="flex-auto " alt="">
            </div>
            <div class="m-8">
                <img src="../assets/icons/sdcard.png" class="flex-auto " alt="">
            </div>     
            <div class="m-8">
                <img src="../assets/icons/sdcard.png" class="flex-auto " alt="">
            </div> 
        </div>


        <!-- Plug and Play  - separator and text-->
        <div class="w-1/2 mx-auto justify-center mt-8 flex flex-col">
            <!-- Text above separator -->
            <div class="above_separator text-left"> Anschlüsse</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="below_separator font-semibold">USB</div>
                <div class="below_separator font-semibold">Ethernet (Netzwerkkabel)</div>
                <div class="below_separator font-semibold">Wifi</div>
                <div class="below_separator font-semibold">SD-Karte</div>
            </div>
        </div>>


        

        <!-- Display and Touch -->
        <!-- Bild -->
        <img src="../assets/icons/touch.png" class="flex-auto w-1/2 items-center mx-auto justify-center mt-40" alt="">

        <!-- Display and Touch -->
        <!-- separator and text-->
        <div class="w-1/2 mx-auto justify-center mt-8 flex flex-col">
            <!-- Text above separator -->
            <div class="above_separator text-left"> Display</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="below_separator font-semibold">Einfache Bedienung über Touch</div>
                <div class="below_separator font-semibold">HD 1920 x 1080</div>
            </div>
        </div>

        

        <!-- Header Timelapse -->
        <div class="title_2 flex mt-40 mb-8 w-11/12 items-center mx-auto justify-center">Print. Whatever you want.</div>

        <!-- Timelapse -->
        <div class="w-1/2 justify-center mx-auto mx-4">
            <img alt="Vue" class="logo bg-white" src="../assets/timelapse.jpg" />
        </div>
        <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center text-white">Video druckt (2 - 3s Timelaps) ; Video endet mit grüner Beleuchtung.</div> -->
        <!-- <div class="w-1/2 h-96 bg-gray-800 flex items-center mx-auto justify-center"></div> -->





        <!-- Holding Plate -->
        <!-- Text -->
        <div class="w-1/2 mx-auto justify-center mt-8 flex flex-col  mt-80">
            <!-- Text above separator -->
            <div class="above_separator text-left">Kein Kratzen</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="below_separator font-semibold">Temperatursensible Haftplatte</div>
            </div>
        </div>

        <!-- Holding Plate-->
        <!-- Bilder -->
        <div class="flex w-3/4 mx-auto justify-center items-center">
            <div class="m-8 ">
                <img src="../assets/icons/hot.png" class="flex-auto " alt="">
            </div>
            <div class="m-8 ">
                <img src="../assets/icons/cold.png" class="flex-auto " alt="">
            </div>
        </div>



        <!-- ------------------------------------------------------------
        2. Section - Intelligent Construction

        Technische Details und Rafinessen
        ------------------------------------------------------------ -->



        <!-- Intelligent Construction -->
        <div id="intelligentConstructionHeader" class="title_bold flex mt-20 mb-8 w-11/12 items-center mx-auto justify-center">Intelligent. Construction.</div>

        <!-- Erstes Bild Drucker -->
        <div class="w-2/3 h-80 bg-gray-800 flex items-center mx-auto justify-center text-white">Bild Housing</div>
        <div class="w-2/3 h-80 bg-gray-800 flex items-center mx-auto justify-center text-white mt-8">Bild Zugänglichkeit von allen Seiten</div>
        <div class="w-2/3 h-80 bg-gray-800 flex items-center mx-auto justify-center text-white mt-8">Bild Werkzeugschublade</div>




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
            <div class="m-8 flex-auto text-white">Bild Drucker beleuchtet im Dunkeln (Wie in Präsentation)
                <img src="../assets/green.png" class="flex-auto " alt="">
            </div>     
            <div class="m-8 flex-auto text-white">Bild Drucker beleuchtet im Dunkeln (Wie in Präsentation)
                <img src="../assets/yellow.png" class="flex-auto " alt="">
            </div>
            <div class="m-8 flex-auto text-white">Bild Drucker beleuchtet im Dunkeln (Wie in Präsentation)
                <img src="../assets/red.png" class="flex-auto " alt="">
            </div>       
        </div>

        <!-- Lighting -->
        <!-- Text -->
        <div class="w-1/2 mx-auto justify-center mt-8 flex flex-col">
            <!-- Text above separator -->
            <div class="above_separator text-left">Beleuchtung</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="below_separator font-semibold">16,7 Mio. Farben (RGB)</div>
                <div class="below_separator font-semibold">Individuell einstellbar</div>
            </div>
        </div>>







        <!-- Hochwertige Bauteile -->

        <!-- Bild -->
        <!-- <img src="../assets/icons/touch.png" class="flex-auto w-1/2 items-center mx-auto justify-center mt-40" alt=""> -->
        <div class="flex flex-row w-1/2 items-center mx-auto justify-center text-white mt-60">
            <div class="flex-auto h-96 bg-gray-800 mr-8 text-white">Bild Präzise</div>
            <div class="flex-auto h-96 bg-gray-800 mr-8 text-white">Bild langlebig</div>
            <div class="flex-auto h-96 bg-gray-800 mr-8 text-white">Bild umweltschonend</div>
        </div>

        <!-- Hochwertige Bauteile -->
        <!-- separator and text-->
        <div class="w-1/2 mx-auto justify-center mt-8 flex flex-col">
            <!-- Text above separator -->
            <div class="above_separator text-left">Hochwertigste Bauteile</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="below_separator font-semibold">Päzise.</div>
                <div class="below_separator font-semibold">Langlebig.</div>
                <div class="below_separator font-semibold">Umweltschonend.</div>

            </div>
        </div>







        <!-- ------------------------------------------------------------
        3. Section - Facts

        Es ist einfach den Drucker zu bedienen
        Der Drucker armortisiert sich schnell 
        ------------------------------------------------------------ -->

        <!-- Text -->
        <div class="title_bold flex mt-96 mb-8 w-11/12 items-center mx-auto justify-center mt-40">Du musst kein Ingenieur sein. Sondern Zahnarzt.</div>

        <!-- Text: Wir haben die Ingenieurarbeit bereits geleistet -->
        <div class="m-3 w-1/2 items-center mx-auto justify-center">
        <ul class="w-full rounded-lg mt-2 mb-3 ">
            <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                <div class="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="ml-2">Die optimaleen Druckeinstellungen wurden bereits von uns ermitellt.</span>
                </div>
            </li>
            <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                <div class="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="ml-2">Das optimale Filament liefern wir mit.</span>
                </div>
            </li>
            <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                <div class="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="ml-2">Die Bediensoftware ist spielend einfach.</span>
                </div>
            </li>
            <li class="mb-1 p-3 pl-3 bg-gray-100 rounded-lg">
                <div class="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="ml-2">Weiteres ....</span>
                </div>
            </li>
        </ul>
        </div>  





        <!-- Amortisation -->
        <!-- Text -->
        <div class="title_2 flex mt-40 mb-8 w-11/12 items-center mx-auto justify-center">Rentiert sich. Ziemlich schnell.</div>

        <!-- Amortisation -->
        <!-- Diagramm -->
        <img src="../assets/icons/amortisation.png" class="flex-auto w-1/2 items-center mx-auto justify-center" alt="">


        <!-- Amortisation -->
        <!-- separator and text-->
        <div class="w-1/2 mx-auto justify-center mt-12 flex flex-col">
            <!-- Text above separator -->
            <div class="above_separator text-left">Amortisation</div>
            <!-- separator -->
            <div class="flex items-center w-full">
                <div class="flex-auto border-t border-gray-900"></div>
            </div>
            <!-- Test below separator -->
            <div class="flex flex-col mt-4 items-left">
                <div class="below_separator font-semibold">Weniger als 3 Jahre*.</div>
            </div>
        </div>





        <!-- Entwicklung und Fertigung -->
        <!-- Text -->
        <div class="title_bold flex mt-96 mb-8 w-11/12 items-center mx-auto justify-center mt-40">Von Profis. Für Profis</div>

        <!-- Bilder Greifswald und Freiburg -->
        <div class="w-5/6 mx-auto ">
            <div class="grid grid-cols-2 mx-auto mt-8">
                <div class="">
                    <img alt="Vue" class="logo bg-white" src="../assets/logo_greifswald.png" />
                </div>
                <div class="">
                    <img alt="Vue" class="logo bg-white" src="../assets/logo_freiburg.png" />
                </div>
            </div>
        </div>

        <!-- Bild Greifswald -->
        <!-- <img src="../assets/logo_greifswald.png" class="flex-auto w-1/3 items-center mx-auto justify-start mt-8" alt="">> -->

        <!-- Bild Volkert -->
        <img src="../assets/logo_volkert.png" class="flex-auto w-1/3 items-center mx-auto justify-center mt-8" alt="">>

        



        <!-- Made in Germany -->
        <div class="bg-volkert-blue">
            <div class="w-5/6 bg-volkert-blue mx-auto flex mt-40 mb-4 ">

                <!-- Germany Map with Volekrt Locations -->
                <div class="w-1/2 items-center justify-center m-8">
                    <img alt="Vue" class="logo bg-volkert-blue" src="../assets/germany_map.png" />
                </div>

                <!-- Made in Germany -->
                <!-- separator and text-->
                    <div class="w-1/2 mx-auto justify-start mt-12 flex flex-col text-white mt-24">
                        <!-- Text above separator -->
                        <div class="above_separator text-left">This product is</div>
                        <!-- separator -->
                        <div class="flex items-center w-full">
                            <div class="flex-auto border-t border-white"></div>
                        </div>
                        <!-- Test below separator -->
                        <div class="flex flex-row mt-4">
                            <!-- <div class="below_separator font-semibold">Made In Germany.</div> -->
                            <div class="below_separator font-semibold mr-2 text-black">Made </div>
                            <div class="below_separator font-semibold mr-2 text-red-800">in </div>
                            <div class="below_separator font-semibold mr-2 text-yellow-500">Germany. </div>
                        </div>

                    </div>
            </div>
        </div>
 
    </div>
</template>




<script>

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
.above_separator {
  font-weight: lighter;
  font-size: 28px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.below_separator {
  font-weight: normal;
  font-size: 28px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.text_big {
  font-weight: light;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.price {
  font-weight: normal;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}


.square {
  width: 50%;
  padding-bottom: 50%;
}
</style>
