<template>
    <!-- Button with Icon -->
    <div class="flex justify-between">
        <button type="button"
            class="mr-4 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            :data-modal-toggle="id" @click="$store.commit('handle_modal_byID', { id })">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span class="sr-only">Close modal</span>
        </button>
    </div>
    <!-- Welding Package Info PupUp (Modal) -->
    <div :id="id" tabindex="-1" @click="$store.commit('handle_modal_byID', { id })"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full w-1/2 h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-gray-500 rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex justify-between items-center p-5 rounded-t border-b">
                    <h3 class="text-xl font-medium text-white">
                        {{ header }}
                    </h3>
                    <button type="button"
                        class="text-white bg-transparent hover:bg-gray-500 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        :data-modal-toggle="id">
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
                    <p class="font-bold text-white">
                        {{ header1 }}
                    </p>
                    <a class="text-base leading-relaxed text-white">
                        {{ text1 }}
                    </a>
                    <p class="font-bold text-white">
                        {{ header2 }}
                    </p>
                    <a class="text-base leading-relaxed text-white">
                        {{ text2 }}
                    </a>
                    <p class="font-bold text-white">
                        {{ header3 }}
                    </p>
                    <a class="text-base leading-relaxed text-white">
                        {{ text3 }}
                    </a>
                    <p class="font-bold text-white">
                        {{ header4 }}
                    </p>
                    <a class="text-base leading-relaxed text-white">
                        {{ text4 }}
                    </a>
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

</template>

<script>
export default {
    props: ['id', 'header', 'header1', 'text1', 'header2', 'text2', 'header3', 'text3', 'header4', 'text4']
}

</script>

<style>
</style>
