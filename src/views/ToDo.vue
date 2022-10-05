<template>
  <v-list flat>
    <v-list-item v-for="task in tasks" :key="task.id">
      <template v-slot:default="{ active }">
        <v-list-item-action>
          <v-checkbox :input-value="active"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ task.title }}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Wake Up",
        },
        {
          id: 2,
          title: "Get bananas",
        },
        {
          id: 2,
          title: "Eat bananas",
        },
      ],
    };
  },
};
</script>
