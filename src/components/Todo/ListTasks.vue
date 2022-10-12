<template>
  <v-list class="pt-0" flat>
    <draggable :list="$store.getters.tasksFiltered" handle=".handle">
      <task-component
        v-for="task in $store.getters.tasksFiltered"
        :key="task.id"
        :task="task"
    /></draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    "task-component": require("@/components/Todo/TaskComponent.vue").default,
    draggable,
  },
};
</script>

<style></style>
