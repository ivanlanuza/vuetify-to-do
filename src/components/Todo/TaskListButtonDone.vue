<template>
  <v-btn
    @click="$store.commit('toggleSorting')"
    color="primary"
    class="sorting-button"
  >Done Sorting
  </v-btn>
</template>

<script>
export default {

}
</script>

<style>
    .sorting-button {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%)
    }
</style>