<template>

    <!-- Separator with navigation -->
    <div class="grid grid-cols-2 items-center w-11/12 mx-auto justify-center mt-8">
        <div class="title_2 text-left">3Dental</div>
        <div class="flex flex-row-reverse mt-4 items-center">
            <button class="text_big ml-8 p-1 flex-auto bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent ">Anfrage</button>
            <div class="text_big ml-8">Technsiche Daten</div>
            <div class="text_big ml-8">Warum VPrint</div>
            <div class="text_big ml-8">Überblick</div>
        </div>
    </div>

    <!-- <div class="flex flex-row w-11/12 mx-auto ">
        <div class="basis-1/4 items-centers justify-start">3Dental</div>
        <div class="basis-3/4 flex flex-row-reverse items-center justify-end">
            <button class="text_big ml-8 p-1 flex-auto bg-volkert-blue rounded-md text-white hover:bg-volkert-dark-blue hover:border-transparent ">Anfrage</button>
            <div class="text_big ml-8">Technsiche Daten</div>
            <div class="text_big ml-8">Warum VPrint</div>
            <div class="text_big ml-8">Überblick</div>
        </div>
    </div> -->
    
    <div class="flex items-center w-11/12 mx-auto justify-center">
        <div class="flex-grow border-t border-gray-900"></div>
    </div>



    <div class="title_bold flex mt-20 w-11/12 items-center mx-auto justify-center">Precision. Never Ending.</div>


    <div class="w-3/4 h-96 bg-gray-800 flex  items-center mx-auto justify-center"></div>



    <!-- VPrint - Hier kommt die geilste Webseite von Volkert hin. -->
    <div class="bg-volkert-blue">
        <div class="mx-auto flex justify-center content-center mt-24 mb-4">
            <div class="mr-12 mt-12 mb-12 text-white">
                <div class="title">VPrint</div>
                <div class="text">Hier kommt die geilste Webseite von Volkert hin.</div>
            </div>

            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 mt-12 justify-center content-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> -->

            <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 mt-12 justify-center content-center text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>







</template>



<script>
// import tailwindConfig from './../../tailwind.config'

// const blue = tailwindConfig.theme.extend.colors['volkert-blue']

// export default {
//   name: "PageNotFound",
//   created() {
//     document.body.style.backgroundColor = blue;
//   },
// };
</script>



<style>
/* div {
    margin-bottom: 10px;
  } */
.title_2 {
  font-weight: light;
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.title_bold {
  font-weight: bold;
  font-size: 60px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.text_big {
  font-weight: light;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
