<template>
  <v-list flat>
    <v-list-item v-for="item in tasksItems" :key="item.id">
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
    tasksItems: [
      {
        id: 1,
        title: "Wake Up",
      },
      {
        id: 2,
        title: "2",
      },
      {
        id: 2,
        title: "3",
      },
    ];
  },
};
</script>
