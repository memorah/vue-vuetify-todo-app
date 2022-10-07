<template>
  <v-list class="pt-0" flat>
    <task-component
      v-for="task in $store.getters.tasksFiltered"
      :key="task.id"
      :task="task"
    />
  </v-list>
</template>

<script>
export default {
  components: {
    "task-component": require("@/components/Todo/TaskComponent.vue").default,
  },
};
</script>

<style></style>
