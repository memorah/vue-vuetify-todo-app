<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <div v-else class="no-tasks-box">
      <div class="no-tasks">
        <v-icon size="50" color="primary"> mdi-meditation </v-icon>
        <div class="text-h5 primary--text">No tasks</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",

  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
  },
};
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
