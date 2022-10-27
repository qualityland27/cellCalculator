<template>

    <!-- Modal toggle -->
    <button class="flex-auto font-bold bg-volkert-blue rounded-md text-white h-16 hover:bg-volkert-dark-blue
        hover:border-transparent text-xl" type="button" data-modal-toggle="inquiry-modal"
        @click="$store.commit('handle_modal_byID', 'inquiry-modal'), $store.commit('create_inquiry_message')">
        Unverbindliche Anfrage
    </button>


    <!-- Main modal -->
    <div id="inquiry-modal" tabindex="-1" aria-hidden="true"
        class="hidden auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex "
        aria-modal="true" role="dialog">
        <div class="relative p-4 w-1/2 h-full md:h-auto mx-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="inquiry-modal" @click="$store.commit('handle_modal_byID', 'inquiry-modal')">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Ihre unverbindliche Anfrage</h3>
                    <form class="space-y-6" action="#" @submit.prevent="$store.commit('sendmail_wiht_mailjs')">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label for="firstName"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
                                <input type="firstName" name="firstName" id="firstName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Vorname" required="">
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label for="Nachname"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vorname</label>
                                <input type="lastName" name="lastName" id="lastName"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Nachname" required="">
                            </div>
                        </div>
                        <div>
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com" required="">
                        </div>
                        <!-- <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required="">
                        </div> -->
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label for="inquiry-message"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nachricht</label>
                                <textarea name="inquiry-message"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white h-48"
                                    id="inquiry-message">

                                </textarea>
                                <p class="text-gray-400 text-xs italic">Fügen Sie gerne ein paar Informationn zu Ihrem
                                    Projekt hinzu, damit wir uns ein besseres Bild machen können.</p>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="copy" type="checkbox" value=""
                                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                                </div>
                                <label for="copy" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ich
                                    möchte eine
                                    Kopie der Nachricht</label>
                            </div>
                            <!-- <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                Password?</a> -->
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Versenden</button>
                        <div class="flex justify-between">
                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Problems?
                                <a href="#" @click="$store.commit('sendEmail_with_clientsDefaultProgram')"
                                    class="text-blue-700 hover:underline dark:text-blue-500">Send via
                                    Mail-Program like Outlook</a>
                            </div>
                            <img src="../assets/logo_volkert_weiss.png" class="flex-shrink h-3" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}

</script>

<style>
</style>
