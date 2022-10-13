<template>
  <div>
    <v-list-item
      @click="$store.dispatch('doneTask', task.id)"
      :class="{ 'teal lighten-5': task.done }"
      color="teal darken-4"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.done"
            color="teal darken-4"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
          >
            {{ task.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text class="d-flex justify-space-between">
            <v-icon small class="pr-1">mdi-alarm-check</v-icon>
            {{ task.dueDate | niceDate }}</v-list-item-action-text
          >
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn color="teal darken-4" icon class="handle">
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  props: ["task"],
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM dd");
      //=> 'Oct 7'
    },
  },

  components: {
    "task-menu": require("@/components/Todo/TaskMenu.vue").default,
  },
};
</script>

<style lang="sass">
.sortable-ghost
  opacity: 0
</style>
