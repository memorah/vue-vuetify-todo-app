<template>
  <v-list class="pt-0" flat>
    <draggable v-model="tasks" handle=".handle">
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
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        this.$store.dispatch("setTasks", value);
      },
    },
  },
  components: {
    "task-component": require("@/components/Todo/TaskComponent.vue").default,
    draggable,
  },
};
</script>

<style></style>
