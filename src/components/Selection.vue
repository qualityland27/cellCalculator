<template>
    <div class="selection">
        <!-- Welding Package Radio Buttons (selection) -->
        <div class="mr-4">
            <ul class="grid gap-6 w-full grid-flow-col auto-cols-fr mr-4">
                <li class="h-full w-full"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding1 || $store.getters.weldingApplicationSelected && unvisibleOnGripping1 || permanentVisible1">
                    <input type="radio" :id="id1" :name="name" :value="id1" class="hidden peer" required=""
                        @click="$store.commit('calculate_price_checkbox')" checked>
                    <label :for="id1"
                        class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">{{ text1 }}</div>
                            <div class="w-full">{{ price1 }}</div>
                        </div>
                    </label>
                </li>
                <li class="h-full w-full"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding2 || $store.getters.weldingApplicationSelected && unvisibleOnGripping2 || permanentVisible2">
                    <input type="radio" :id="id2" :name="name" :value="id2" class="hidden peer"
                        @click="$store.commit('calculate_price_checkbox')">
                    <label :for="id2"
                        class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">{{ text2 }}</div>
                            <div class="w-full">{{ price2 }}</div>
                        </div>
                    </label>
                </li>
                <li class="h-full w-full" v-show="id3"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding3 || $store.getters.weldingApplicationSelected && unvisibleOnGripping3 || permanentVisible3">
                    <input type="radio" :id="id3" :name="name" :value="id3" class="hidden peer"
                        @click="$store.commit('calculate_price_checkbox')">
                    <label :for="id3"
                        class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">{{ text3 }}</div>
                            <div class="w-full">{{ price3 }}</div>
                        </div>
                    </label>
                </li>
                <li class="h-full w-full" v-show="id4"
                    v-if="!$store.getters.weldingApplicationSelected && unvisibleOnWelding4 || $store.getters.weldingApplicationSelected && unvisibleOnGripping4 || permanentVisible4">
                    <input type="radio" :id="id4" :name="name" :value="id4" class="hidden peer"
                        @click="$store.commit('calculate_price_checkbox')">
                    <label :for="id4"
                        class="inline-flex justify-between items-center p-5 w-full h-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-volkert-blue peer-checked:text-volkert-blue">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">{{ text4 }}</div>
                            <div class="w-full">{{ price4 }}</div>
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
        'id1', 'text1', 'price1', 'permanentVisible1', 'unvisibleOnWelding1', 'unvisibleOnGripping1',
        'id2', 'text2', 'price2', 'permanentVisible2', 'unvisibleOnWelding2', 'unvisibleOnGripping2',
        'id3', 'text3', 'price3', 'permanentVisible3', 'unvisibleOnWelding3', 'unvisibleOnGripping3',
        'id4', 'text4', 'price4', 'permanentVisible4', 'unvisibleOnWelding4', 'unvisibleOnGripping4']
}

</script>

<style>
</style>
