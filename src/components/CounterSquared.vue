<template>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> =
    {{ $store.getters.counterSquared }}

    <div class="bg-red-900 w-96 h-96">

    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style>

</style>
