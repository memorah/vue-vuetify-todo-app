<template>
  <div class="no-tasks-box">
    <div class="no-tasks">
      <v-icon size="50" color="teal darken-4"> mdi-meditation </v-icon>
      <div class="text-h5 teal--text text--darken-4">No tasks</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.no-tasks-box
  position: absolute
  top: 50%
  left: 50%
  transform: translate( -50%, -50%)
.no-tasks
  display: flex
  flex-direction: column

  align-items: center
  opacity: 0.5
</style>
