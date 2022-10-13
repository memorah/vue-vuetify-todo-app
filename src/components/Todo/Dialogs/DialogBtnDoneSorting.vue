<template>
  <v-btn
    @click="$store.commit('toggleSorting')"
    class="btn-done-sorting"
    color="teal darken-4 white--text"
    >Done Sorting</v-btn
  >
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style lang="sass">
.btn-done-sorting
  position: fixed
  bottom: 20px
  left:50%
  transform: translateX(-50%)
</style>
