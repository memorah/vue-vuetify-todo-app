<template>
  <v-snackbar color="teal darken-4" v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn @click="$store.commit('hideSnackbar')" text v-bind="attrs">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {};
</script>

<style lang="sass">
div.v-snack:not(.v-snack--absolute)
  height: 100%
</style>
