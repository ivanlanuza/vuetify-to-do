<template>
    <v-snackbar
      v-model="$store.state.snackbar.show"
      :timeout="2000"
    >
      {{ $store.state.snackbar.message }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="$store.commit('closeSnackbar')"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {

}
</script>

<style>

</style>