<template>
    <div class="selection">
        <!-- Welding Package Radio Buttons (selection) -->
        <div class="mr-4">
            <ul class="grid gap-6 w-full grid-flow-col auto-cols-fr mr-4">
                <li class="h-full w-full"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding1 || $store.getters.weldingApplicationSelected && unvisibleOnGripping1 || permanentVisible1">
                    <!-- 
                    ATTETION: Starting from Input-Tag the price functions search for: Sibling, FirstChild, LastChild, LastChild 
                    -->
                    <input type="radio" :id="id1" :name="name" :value="id1" class="hidden peer" required=""
                        @click="$store.commit('calculate_price_checkbox')" checked>
                    <label :for="id1"
                        class="inline-flex flex justify-start p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 stroke-gray-500 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue peer-checked:stroke-volkert-blue">
                        <div class="flex flex-row justify-start items-center gap-4">
                            <component class="w-18 h-18" :is="icon1"></component>
                            <div class="flex flex-col">
                                <div class="w-full text-lg font-semibold">{{ text1 }}</div>
                                <div title="price" class="w-full">{{ price1 }}</div>
                            </div>
                        </div>
                        <!-- <div class="block">
                            <div class="w-full text-lg font-semibold">{{ text1 }}</div>
                            <div class="w-full">{{ price1 }}</div>
                        </div> -->
                    </label>
                </li>
                <li class="h-full w-full"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding2 || $store.getters.weldingApplicationSelected && unvisibleOnGripping2 || permanentVisible2">
                    <!-- 
                    ATTETION: Starting from Input-Tag the price functions search for: Sibling, FirstChild, LastChild, LastChild 
                    -->
                    <input type="radio" :id="id2" :name="name" :value="id2" class="hidden peer"
                        @click="$store.commit('calculate_price_checkbox')">
                    <label :for="id2"
                        class="inline-flex flex justify-start p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 stroke-gray-500 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue peer-checked:stroke-volkert-blue">
                        <div class="flex flex-row justify-start items-center gap-4">
                            <component class="w-18 h-18" :is="icon2"></component>
                            <div class="flex flex-col">
                                <div class="w-full text-lg font-semibold">{{ text2 }}</div>
                                <div title="price" class="w-full">{{ price2 }}</div>
                            </div>
                        </div>
                    </label>
                </li>
                <li class="h-full w-full" v-show="id3"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding3 || $store.getters.weldingApplicationSelected && unvisibleOnGripping3 || permanentVisible3">
                    <!-- 
                    ATTETION: Starting from Input-Tag the price functions search for: Sibling, FirstChild, LastChild, LastChild 
                    -->
                    <input type="radio" :id="id3" :name="name" :value="id3" class="hidden peer"
                        @click="$store.commit('calculate_price_checkbox')">
                    <label :for="id3"
                        class="inline-flex flex justify-start p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 stroke-gray-500 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue peer-checked:stroke-volkert-blue">
                        <div class="flex flex-row justify-start items-center gap-4">
                            <!-- <div class="w-18 h-18" is="vcell_standard_icon" /> -->
                            <div class="flex flex-col">
                                <div class="w-full text-lg font-semibold">{{ text3 }}</div>
                                <div title="price" class="w-full">{{ price3 }}</div>
                            </div>
                        </div>
                    </label>
                </li>
                <li class="h-full w-full" v-show="id4"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding4 || $store.getters.weldingApplicationSelected && unvisibleOnGripping4 || permanentVisible4">
                    <!-- 
                    ATTETION: Starting from Input-Tag the price functions search for: Sibling, FirstChild, LastChild, LastChild 
                    -->
                    <input type="radio" :id="id4" :name="name" :value="id4" class="hidden peer"
                        @click="$store.commit('calculate_price_checkbox')">
                    <label :for="id4"
                        class="inline-flex flex justify-start p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 stroke-gray-500 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue peer-checked:stroke-volkert-blue">
                        <div class="flex flex-row justify-start items-center gap-4">
                            <!-- <div class="w-18 h-18" is="vcell_standard_icon" /> -->
                            <div class="flex flex-col">
                                <div class="w-full text-lg font-semibold">{{ text4 }}</div>
                                <div title="price" class="w-full">{{ price4 }}</div>
                            </div>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name',
        'id1', 'text1', 'price1', 'permanentVisible1', 'unvisibleOnWelding1', 'unvisibleOnGripping1', 'icon1',
        'id2', 'text2', 'price2', 'permanentVisible2', 'unvisibleOnWelding2', 'unvisibleOnGripping2', 'icon2',
        'id3', 'text3', 'price3', 'permanentVisible3', 'unvisibleOnWelding3', 'unvisibleOnGripping3', 'icon3',
        'id4', 'text4', 'price4', 'permanentVisible4', 'unvisibleOnWelding4', 'unvisibleOnGripping4', 'icon4'
        ],
components: {
    "vcell_standard_icon": require("@/assets/icons/vcell_standard_icon.vue").default,
    "vcell_compact_icon": require("@/assets/icons/vcell_compact_icon.vue").default,
}}

</script>

<style>
</style>
