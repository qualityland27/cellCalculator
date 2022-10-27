<template>
  <div id="calculator" class="calculator">

    <!--  -->
    <!--  -->
    <!-- TODO: Info Boxen mit Text befüllen - wenn Matthias korrigiert hat -->
    <!-- TODO: Kommentare weg -->
    <!-- TODO: Blender render -->
    <!--  -->
    <!--  -->



    <CookieFreeZone />



    <!-- Conact via Mail and WhatsApp -->
    <div class="fixed bottom-0 left-0 right-0 z-10 flex flex-col pl-1 pb-2 w-max">
      <a href="https://wa.me/49168711573"
        class="bg-green-700 hover:bg-green-800 active:bg-green-900 w-16 h-16 p-4 mb-1 rounded-full flex items-center justify-center ">
        <svg class="fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
          </path>
        </svg>
      </a>
      <a href="mailto:info@volkert.net"
        class="bg-volkert-dark-blue hover:bg-volkert-darker-blue active:bg-volkert-darkest-blue w-16 h-16 p-4 rounded-full flex items-center justify-center">
        <svg class="fill-white w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
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
      <div class="relative">
        <div class="sm:sticky top-20 content-center">
          <!-- Image CVell  -->
          <img alt="Vue" class="logo bg-white" src="../assets/vCell3.png" />

          <div class="">
            <!--    Gesamtpreis   -->
            <div class="price m-0 text-center mr-12">ab {{ $store.getters.price }} €</div>
            <div class="kleingedrucktes text-center mr-12">zzgl. MwSt.</div>
          </div>
        </div>
      </div>


      <!-- 2. Col: Selection -->
      <div class="relative">
        <div class="flex flex-col" @click="$store.commit('show_initial_info')" data-modal-toggle="initialInfo-modaly">

          <!-- Show inital info - on first click you see hint that not everything ist listed -->
          <div id="initialInfo-modal" tabindex="-1"
            class="hidden overflow-y-auot overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
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
                  <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Im Kalkulator sind nicht alle technischen Möglichkeiten gelistet. Bei Bedarf, bitten wir
                    Sie uns direkt zu Kontaktieren.</h3>
                  <!-- <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Bei Bedarf, bitten wir
                    Sie uns direkt zu Kontaktieren.</h3> -->
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
          <!-- Application -->
          <!--  -->
          <div class="flex flex-row justify-between mt-12">
            <div class="text-xl md:text-2xl font-semibold ">Anwendung:</div>
            <!-- Icon and PopUp (Modal) -->
            <InfoModal id="info-application" header="Anwendung" header1="Allgemein"
              text1="Die Robotereinheit kann für verschiedene Zwecke eingesetzt werden. So zählen Schweißen und Handling zu den häufigsten Anwendungsbereichen. Der Grundaufbau der Zelle bleibt bei beiden Anwendungen gleich, es bieten sich je nach Auswahl unterschiedliche Konfigurationsmöglichkeiten."
              text2="" text3="" />
          </div>

          <!-- Application Icons -->
          <div class="grid grid-cols-2 items-center justify-items-center mt-8 gap-6">
            <!-- Welding Button with Icon -->
            <button type="button" class="text-white rounded-lg text-sm p-1.5" data-modal-toggle="small-modal" @click="$store.commit('handle_weldingIconBlk_visible'), $store.commit('reset_checkboxes'),
            $store.commit('calculate_price_checkbox')">
              <!-- Welding Icon gray -->
              <welding_icon v-if="!$store.getters.weldingApplicationSelected" class="w-4/12 h-4/12 mx-auto"
                fillAll="fill-gray-500" />
              <!-- Welding Icon color -->
              <welding_icon v-else class="w-4/12 h-4/12 mx-auto" fillAll="fill-gray-700" line1="fill-volkert-blue" />
            </button>
            <!-- Gripping Button with Icon -->
            <button type="button" class="text-white rounded-lg text-sm p-1.5" data-modal-toggle="small-modal" @click="$store.commit('handle_grippingIconBlk_visible'), $store.commit('reset_checkboxes'),
            $store.commit('calculate_price_checkbox')">
              <!-- Gripping Icon Gray  -->
              <Gripping_icon v-if="!$store.getters.grippingApplicationSelected" class="w-4/12 h-4/12 mx-auto"
                fillAll="fill-gray-500" />
              <!-- Gripping Icon Color -->
              <Gripping_icon v-else class="w-4/12 h-4/12 mx-auto" fillAll="fill-gray-700" line1="fill-volkert-blue"
                line3="fill-volkert-blue" />
            </button>
          </div>



          <!--  -->
          <!-- Size and WorkLoad -->
          <!--  -->
          <div class="flex flex-row justify-between mt-12 mb-4">
            <div class="text-xl md:text-2xl font-semibold ">Größe und Traglast:</div>
            <!-- Icon and PopUp (Modal) -->
            <InfoModal id="info-size-workload" header="Größe und Traglast" header1="Standrd"
              text1="Die vCell wird in kompakter Bauform als Standardmodul angeboten. Diese zeichnet sich durch platzsparende Bauweise und einfachste Transportmöglichkeiten mit Stapler oder Hubwagen aus. Maße vCell Standard: 2600 x 1500 x 2200 mm. In der Standardausführung wird die Zelle mit einem Yaskawa   GP12 / AR1440 mit 12kg Traglast angeboten."
              header2="Mini"
              text2="Zusätzlich ist die vCell Mini in kompakterer Bauform erhältlich. Sie ist ideal für beengte Platzverhältnisse oder für das Handling kleiner Teile. Maße vCell Standard: 1200 x 800 x 2200 mm. Die vCell Mini wird standardmäßig mit dem Panda von ABB IRB 1100 mit 4kg Traglast angeboten."
              header3="Allgemein"
              text3="Bei Ihrer Anfrage werden wir Ihr Projekt analysieren und ggf. Alternativen zu den oben gelisteten Robotern vorschlagen." />
          </div>

          <!-- Size and WorkLoad Radio Buttons (selection) -->
          <!-- Name of Selection is used to calculate price -->
          <Selection name="size" id1="size-standard" text1="Standard" price1="+ 0 €" permanentVisible1="true"
            icon1="vcell_standard_icon" id2="size-mini" text2="Mini" price2="- 9.000 €" unvisibleOnWelding2="true"
            icon2="vcell_compact_icon" />



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
            <div class="mt-2 flex justify-between">
              <div class="text-lg font-medium">Schweißpaket:</div>
              <!-- Icon and PopUp (Modal) -->
              <InfoModal id="info-welding-package" header="Schweißpaket" header1="Allgemein"
                text1="Welches der gängigen Schweißverfahren zum Einsatz kommt, hängt von den Anforderungen an das Bauteil, den Werkstoff und an den Fertigungsprozess ab. Mit der vCell werden üblicherweise Metall-Inertgas- beziehungsweise Metall-Aktivgas-Schweißprozesse (MIG/MAG) oder Wolfram-Inertgas-Prozesse (WIG) automatisiert. Gerne beraten Sie unsere Schweißfachingenieure bei der Auswahl des geeigneten Schweißverfahrens für Ihr Projekt."
                text2="Standardmäßig verbauen wir Stromquellen der Firma Fronius. Sollten Sie eine Stromquelle einer anderen Firma wünschen stellt das kein Problem dar. "
                text3="" />
            </div>

            <!-- Welding Package Radio Buttons (selection) -->
            <!-- Name of Selection is used to calculate price -->
            <Selection name="weldingType" id1="weldingType-none" text1="Eigen" price1="+ 0 €" permanentVisible1="true"
              id2="weldingType-wig" text2="WIG" price2="+ 8.900 €" permanentVisible2="true" id3="wedingType-migmag"
              text3="MIG/MAG" price3="+ 18.500 €" permanentVisible3="true" />



            <!--                                                                              -->
            <!-- Welding Seam Search System-->
            <!--                                                                              -->
            <div class="mt-8 flex justify-between">
              <div class="text-lg font-medium">Schweißnahtsuchsystem:</div>
              <!-- Icon and PopUp -->
              <InfoModal id="info-searchSystem" header="Schweißnahtsuchsystem" header1="Allgmein"
                text1="Für automatisiertes Schweißen werden oftmals Systeme zum Suchen der Naht benötigt. Dabei fährt der Roboter in einer Suchfahrt am Werkstück entlang, während dieser auf das Feedback des entsprechenden Suchsystems wartet."
                header2="Gasdüse"
                text2="Bei der Nahtsuche über die Gasdüse fährt der Roboter langsam an das Werkstück, bis die Gasdüse am Schweißbrenner das Werkstück berührt und ein Stromfluss gemessen werden kann."
                header3="Kamera"
                text3="Bei der Nahtsuche über eine 2D oder 3D Kamera fährt der Roboter kontaktfrei über das Werkstück und Sucht im Regelfall nach einer zuvor festgelegten Kontur. Standard: Wenglor MLWL 131" />
            </div>


            <!-- Size and WorkLoad Radio Buttons (selection) -->
            <!-- Name of Selection is used to calculate price -->
            <Selection name="searchSystem" id1="without-search-system" text1="Ohne" price1="+ 0 €"
              permanentVisible1="true" id2="gas" text2="Gasdüse" price2="+ 1.800 €" permanentVisible2="true"
              id3="camera" text3="Kamera" price3="+ 18.900 €" permanentVisible3="true" />



            <!--  -->
            <!-- exhaust -->
            <!--  -->
            <div class="mt-8 flex justify-between">
              <div class="text-lg font-medium">Absaugung:</div>
              <!-- Icon and PopUp (Modal) -->
              <InfoModal id="info-exhaustSystem" header="Absaugung" header1="Allgemein"
                text1="Beim Schweißen entstehen in der Regel gesundheitsgefährdende Dämpfe. Durch eine Schweißrauchabsaugung können die Dämpfe abgesaugt und gefiltert werden. Welches Filtersystem am wirtschaftlichsten ist hängt vom Schweißprozess, den inkludierten Nebenprozessen (bspl. Schleifen) und den dabei entstehenden Dämpfen und Partikeln ab. Gerne beraten wir sie!"
                header2="Einmalfilter"
                text2="Bei Einmalfilteranlagen werden die Verunreinigungen in einem Wechselfilter gebunden. Geeignet für Rauchabsaugung (feine Partikel) bei Schweißarbeiten.  Der Filter muss als Verschleißteil regelmäßig erneuert werden, sobald die Poren des Filters zugesetzt sind."
                header3="Selbstreinigend"
                text3="Selbstreinige Anlagen verfügen über eine Mechanik zum Reinigen der Filter. Diese Filter eignen für lang andauernde Rauchabsaugung (feine Partikel) sowie Schleifstaubabsaugung bei Schweiß- und Schleifarbeiten (gröbere Partikel)."
                header4="" text4="" />
            </div>

            <!-- Size and WorkLoad Radio Buttons (selection) -->
            <Selection name="exhaustSystem" id1="without-exhausting" text1="Ohne" price1="+ 0 €"
              permanentVisible1="true" id2="oneTime-filter" text2="Mit Einmalfilter" price2="+ 3.800 €"
              permanentVisible2="true" id3="selfCleaning-filter" text3="Selbstreinigend" price3="+ 6.800 €"
              permanentVisible3="true" />
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
            <div class="mt-2 flex justify-between">
              <div class="text-lg font-medium">Greifer:</div>
              <!-- Icon and PopUp (Modal) -->
              <InfoModal id="info-gripper" header="Greifer" header1="Allgemein"
                text1="Das wohl wichtigste Bauteil für automatisiertes Handling ist neben dem Roboter ein passender Greifer. Es gibt eine große Vielfalt an Greifern."
                header2="Parallelgreifer"
                text2="Die Universallösung – das parallele Greifen. Beim parallelen Greifen wird das Werkstück von zwei Fingern gefasst. Die meisten Bauteile können mit den Standardgreifern gegriffen werden. Wenn nicht, passen wir die Ausgestaltung der Finger direkt auf Ihre Bauteile an. Wir drucken diese dann auf unseren 3D-Druckern oder Fräsen diese auf unserem 5-Achs Fräszentrum. Das parallele Greifen wird am häufigsten verbaut und eignet sich für nahezu jede Bauteilform. Standard: Schunk JGP-P 50-1; Schunk JGP-P 100-1."
                header3="Vakuumgreifer"
                text3="Beim Greifen mit Unterdruck können die Bauteile schnell angesaugt und wieder losgelassen werden. Es ermöglicht ein besonders schnelles Handling. Die Bauteile sollten eine glatte oder leicht raue Oberfläche haben. Standard: Schmalz FQE-RXc-120x60"
                :image3="schmalz_logo" 
                header4="Magnetgreifer"
                text4="Das magnetisierte Greifen kann nur für magnetische Bauteile eingesetzt werden. Der Vorteil liegt darin, dass die Position der Teile nicht entscheidend ist. Außerdem können bei geringem Eigengewicht des Greifers verhältnismäßig schwere Bauteile gegriffen werden. Geeignete Bauteilformen für das magnetische Greifen: Bauform nicht entscheidend. Standard: Schunk EMH-DP 036, Schunk EMH-DP 080." />
            </div>


            <!-- Gripper Radio Buttons (selection) -->
            <Selection name="gripper" id1="without-gripper" text1="Eigen" price1="+ 0 €" permanentVisible1="true"
              id2="parallel-gripper" text2="Parallel" price2="+ 1.450 €" permanentVisible2="true" id3="vacuum-gripper"
              text3="Vakuum" price3="+ 2.100 €" permanentVisible3="true" id4="magnetic-gripper" text4="Magnet"
              price4="+ 2.450 €" permanentVisible4="true" />


            <!-- Checkboxes of single or multiple handling pieces -->
            <fieldset name="multipleGrippers" class="mt-4 ml-8">
              <div class="flex items-center mb-4">
                <input id="oneGripper" type="radio" name="countries" value="USA"
                  class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-bslue-300" aria-labelledby="country-option-1"
                  aria-describedby="country-option-1" checked
                  @click="$store.commit('change_gripping', ['gripper', '+ 0 €', '+ 1.450 €', '+ 2.100 €','+ 2.450 €'])">
                <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
                  1 Werkstück ((De)Palettieren)
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input id="twoGrippers" type="radio" name="countries" value="Germany"
                  class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2"
                  aria-describedby="country-option-2"
                  @click="$store.commit('change_gripping', ['gripper', '+ 0 €', '+ 2.900 €', '+ 4.200 €','+ 4.900 €'])">
                <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
                  2 Werkstücke (Be- und Entladen)
                </label>
              </div>
            </fieldset>


            <!--                                                                              -->
            <!-- Measuring Header-->
            <!--                                                                              -->
            <div class="mt-8 flex justify-between">
              <div class="text-lg font-medium">Messstation:</div>
              <!-- Icon and PopUp (Modal) -->
              <InfoModal id="info-measuring" header="Messtation" header1="Allgemein"
                text1="Beim Handling von Bauteilen kann die Anwendung um eine Qualitätsprüfung durch eine Messtation erweitert werden. Diese kann sehr unterschiedliche Merkmale erfassen und prüfen und Ausschuss direkt erkennen. "
                header2="Längenmessung"
                text2="Zum Vermessen von Abständen mit einer Genauigkeit von 0,1mm bieten wir einen kostengünstigen Abstandssensor an. Abweichungen lassen sich mit unserer Software erfassen und verarbeiten. Der Fertigungsprozess lassen sich dann automatisch anpassen. Gemessen wird die Bauteillänge, -höhe oder -durchmesser."
                header3="Optische Prüfung"
                text3="Die optische Prüfung ermittelt die Güte der Oberfläche der Werkstücke. Gemessen wird eine Kontur: 2/3-D Versatz der Werkstückoberfläche wie Schweißperlen, Risse, Dellen, etc."
                header4="" text4="" />
            </div>

            <!-- Measuring Info PupUp (Modal) -->
            <!-- <InfoModal id="info-measuring" header="Greifer" text1="Text Nummer 1 bissle was"
              text2="Das ist der zweite Abschnitt" text3="Extra für Hanna nen dritten Abschnitt kk" /> -->

            <!-- Measuring Radio Buttons (selection) -->
            <Selection name="measuring" id1="without-measuring" text1="Ohne" price1="+ 0 €" permanentVisible1="true"
              id2="length-measuring" text2="Längenmessung" price2="+ 2.350 €" permanentVisible2="true"
              id3="optical-measuring" text3="Optische Prüfung" price3="+ 12.750 €" permanentVisible3="true" />


            <!--                                                                              -->
            <!-- Singualizer Header-->
            <!--                                                                              -->
            <div class="mt-8 flex justify-between">
              <div class="text-lg font-medium">Vereinzler:</div>
              <!-- Icon and PopUp (Modal) -->
              <InfoModal id="info-singualizer" header="Vereinzler" header1="Wendelförderer"
                text1="Schüttgut unterschiedlichster Größe lässt sich mit einem Wendelförderer vereinzeln. Der Roboter kann die vereinzelten Teile im Anschluss Greifen und zum nächsten Bearbeitungsschritt (in der Zelle) befördern. Der Wendelförderer ist eine kostengünstige und bewährte Methode zum Vereinzeln. Die Flexibilität des Systems ist eingeschränkt."
                header2="Kameragestützt"
                text2="Schüttgut lässt sich ebenfalls über ein Kameragestütztes System vereinzeln. Mit einer 3D-Kamera können die Bauteile erkannt und die Koordinaten für den Roboter berechnet werden. Der Vorteil liegt in der Flexibilität des Systems. Die Kamera kann unterschiedliche Teile erkennen und Koordinaten berechnen."
                header3="" text3="" header4="" text4="" />
            </div>


            <!-- Singualizer Radio Buttons (selection) -->
            <Selection name="singualizer" id1="without-singualizer" text1="Ohne" price1="+ 0 €" permanentVisible1="true"
              id2="spiral-conveyor" text2="Wendelförderer" price2="+ 5.450 €" permanentVisible2="true"
              id3="camera-conveyor" text3="Kameragestützt" price3="+ 14.950 €" permanentVisible3="true" />
          </div>






          <!--  -->
          <!-- Software Options -->
          <!--  -->
          <div class="text-xl md:text-2xl font-semibold mt-12 mb-4">Software Optionen:</div>

          <!--                                                                              -->
          <!-- Data Logging Header -->
          <!--                                                                              -->
          <div class="mt-2 flex justify-between">
            <div class="text-lg font-medium">Programmierung:</div>
            <!-- Icon and PopUp (Modal) -->
            <InfoModal id="info-robotProgramming" header="Programmierung" header1="Allgemein"
              text1="Gerne programmieren unsere Softwareentwickler ihre vCell. " header2="Roboter"
              text2="Mit dieser Option können Sie die Programmierung des Roboters Ihrer vCell hinzufügen." />
          </div>


          <!-- Data Logginge Radio Buttons (selection) -->
          <Selection name="robotProgramming" id1="without-programming" text1="Ohne" price1="+ 0 €"
            permanentVisible1="true" id2="with-robot-programming" text2="Roboter" price2="+ 3.600 €"
            permanentVisible2="true" />


          <!--                                                                              -->
          <!-- Data Logging Header -->
          <!--                                                                              -->
          <div class="mt-2 flex justify-between">
            <div class="text-lg font-medium">Datenlogging:</div>
            <!-- Icon and PopUp (Modal) -->
            <InfoModal id="info-dataLogging" header="Datenlogging" header1="Allgemein"
              text1="Je nach Ausführung der Zelle und verbauten Sensoren wird Ihre vCell eine sehr große Menge an Daten erzeugen. Diese Daten können im Zuge der Industrie 4.0 gewinnbringend eingesetzt werden. Wir sorgen mit unserer Schnittstelle, dass ein standardisierter Zugriff auf diese Daten möglich ist. "
              header2="Beispiele" text2="Bauteilmesswerte, die Produktionsmenge, Produktionszeiten usw." />
          </div>


          <!-- Data Logginge Radio Buttons (selection) -->
          <Selection name="dataLogging" id1="without-logging" text1="Ohne" price1="+ 0 €" permanentVisible1="true"
            id2="with-data-logging" text2="Logging" price2="+ 3.900 €" permanentVisible2="true" />








          <!--  -->
          <!-- Services -->
          <!--  -->
          <div class="text-xl md:text-2xl font-semibold mt-12 mb-4">Services:</div>

          <!--                                                                              -->
          <!-- Assembly Service Header -->
          <!--                                                                              -->
          <div class="mt-2 flex justify-between">
            <div class="text-lg font-medium">Montage und Inbetriebnahme:</div>
            <!-- Icon and PopUp (Modal) -->
            <InfoModal id="info-assemblyService" header="Montage und Inbetriebnahme" header1="Allgemein"
              text1="Eins unserer Teams übernimmt die Montage und Inbetriebnahme Ihrer vCell und sorgt für eine gelungene Einbindung in Ihrer Fertigung. Der Preis der Montage und Inbetriebnahme bezieht sich auf den Raum Deutschland." />
          </div>

          <!--  Assembly Service Radio Buttons (selection) -->
          <Selection name="assemblyService" id1="without-assemblyService" text1="Ohne" price1="+ 0 €"
            permanentVisible1="true" id2="with-assemblyService" text2="Mit Montage und Inbetriebnahme"
            price2="+ 2.450 €" permanentVisible2="true" />


          <!--                                                                              -->
          <!-- Production Support Header -->
          <!--                                                                              -->
          <div class="mt-2 flex justify-between">
            <div class="text-lg font-medium">Produktionsbegleitung:</div>
            <!-- Icon and PopUp (Modal) -->
            <InfoModal id="info-productionSupport" header="Produktionsbegleitung" header1="Allgemein"
              text1="Unser Team begleitet Sie gern die ersten Tage nach der Inbetriebnahme durch uns bei der Produktion und steht mit Rat und Tat zur Seite. Der Preis der Produktionsbegleitung bezieht sich auf den Raum Deutschland. " />
          </div>

          <!-- Production Support Radio Buttons (selection) -->
          <Selection name="productionSupport" id1="without-productionSupport" text1="Ohne" price1="+ 0 €"
            permanentVisible1="true" id2="with-1day-productionSupport" text2="1 Tag" price2="+ 800 €"
            permanentVisible2="true" id3="with-2day-productionSupport" text3="2 Tage" price3="+ 1.600 €"
            permanentVisible3="true" />


          <!--                                                                              -->
          <!-- Scooling Header -->
          <!--                                                                              -->
          <div class="mt-2 flex justify-between">
            <div class="text-lg font-medium">Schulung:</div>
            <!-- Icon and PopUp (Modal) -->
            <InfoModal id="info-scooling" header="Schulung" header1="Allgemein"
              text1="Wir schulen Ihre Mitarbeiter auf Ihrer vCell und sorgen dafür, dass Sie die Anlage selbstständig bedienen können. Der Gesamtpreis der Schulung bezieht sich auf bis zu 5 Teilnehmer und bei Ihnen vor Ort." />
          </div>

          <!-- v Radio Buttons (selection) -->
          <Selection name="scooling" id1="without-scooling" text1="Ohne" price1="+ 0 €" permanentVisible1="true"
            id2="with-scooling" text2="Mit Schulung" price2="+ 2.990 €" permanentVisible2="true" />





          <div class="grid grid-cols-2 mt-12 mr-2 mb-2">
            <button class="
              w-full
              rounded-md
              border-solid border-2 border-light-blue-500
              text-black
              h-16 hover:bg-gray-100 hover:border-transparent 
              text-xl" @click="$store.commit('reset_checkboxes'), $store.commit('calculate_price_checkbox')">
              Auswahl zurücksetzen
            </button>
            <button class="
              w-full
              ml-2 
              rounded-md
              border-solid border-2 border-light-blue-500
              text-black
              h-16 hover:bg-gray-100 hover:border-transparent 
              text-xl" @click="$store.commit('printPage')">
              Drucken
            </button>
          </div>

          <Inquiry />


        </div>
      </div>




      <!--    ------------------------------    -->
      <!--    Those are place holders, needed    -->
      <!--    that the image scrolles further    -->
      <!--    ------------------------------    -->
      <div class="relative">
        <div class="w-5/6 mx-auto justify-center content-center sm:mt-40 grid-cols-2">
          <div class="sticky top-0 w-1/2 items-center justify-center mx-4">
          </div>
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
      // elementVisible: true,
      vCell3_Image: vCell3_Image,
      schmalz_logo: schmalz_Image
    }
  },
  components: {
    "vcell_standard_icon": require("@/assets/icons/vcell_standard_icon.vue").default,
    "vcell_compact_icon": require("@/assets/icons/vcell_compact_icon.vue").default,
    "welding_icon": require("@/assets/icons/welding_icon.vue").default,
    "ínfoModal": require("@/components/InfoModal.vue").default,
    InfoModal,
    Gripping_icon,
    Selection,
    CookieFreeZone,
    Inquiry
  },
  // created() {
  //   setTimeout(() => document.getElementById('cookie-free-zone').style.opacity = 0, 3000)
  // }
}
</script>




<style>

</style>
