<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>

    <v-list v-if="$store.state.tasks.length" class="pt-0" flat>
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
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
  name: "ToDO",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
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
