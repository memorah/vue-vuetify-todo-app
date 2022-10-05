<template>
  <v-list class="pt-0" flat>
    <div>
      <v-text-field
        v-model="newTaskTitle"
        @click:append="addTask"
        @keyop.enter="addTask"
        class="pa-3"
        outlined
        label="Add Task"
        append-icon="mdi-plus"
        hide-details
        clearable
      ></v-text-field>
      <v-list-item
        v-for="task in tasks"
        :key="task.id"
        @click="doneTask(task.id)"
        :class="{ 'green lighten-5': task.done }"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-decoration-line-through': task.done }"
              >{{ task.title }}</v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-action>
            <v-btn @click.stop="deleteTask(task.id)" icon>
              <v-icon color="primary lighten-1">mdi-delete-forever</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      newTaskTitle: "",
      tasks: [
        {
          id: 1,
          title: "Wake Up",
          done: false,
        },
        {
          id: 2,
          title: "Get bananas",
          done: false,
        },
        {
          id: 3,
          title: "Eat bananas",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTask);
    },

    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
