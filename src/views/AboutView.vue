<template>
  <div class="about pa-6">
    <h1>About this {{ $store.state.appTitle }} app</h1>
    <p>
      I created this app as a Vue.js learning project. I used the following
      tools:
    </p>
    <v-list-item
      color="white"
      v-for="link in links"
      :key="link.title"
      :href="link.to"
      target="blank"
    >
      <v-list-item-icon>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ link.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ link.subtext }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <p>Vue CLI, a full system for rapid Vue.js development</p>
    <p>Vue Route, a official library for page navigation in Vue applications</p>
    <p>Vuex, a state management pattern + library for Vue.js applications.</p>
    <p>Vuetify - Material Design Framework</p>
    <p>
      Environment Variables, a global variables that we can use throughout app
    </p>
    <p>
      Localbase, a offline database with the simplicity & power of Firebase, all
      stored in the user's browser (in an IndexedDB database).
    </p>
    <p>
      VueDraggable, a Vue component allowing drag-and-drop and synchronization
      with view model array.
    </p>
    <p>
      Date-fns, a simple and consistent toolset for manipulating JavaScript
      dates in a browser & Node.js.
    </p>
    <p>
      Sass, a preprocessor scripting language that is interpreted or compiled
      into Cascading Style Sheets
    </p>
  </div>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        title: "Vue CLI",
        icon: "mdi-vuejs",
        subtext: "full system for rapid Vue.js development",
        to: "/mackov-dev",
      },
      {
        title: "Vue Route",
        icon: "mdi-vuejs",
        subtext: "official library for page navigation in Vue applications",
        to: "https://github.com/memorah/vue-vuetify-todo-app",
      },
      {
        title: "Vuex",
        icon: "mdi-vuejs",
        subtext:
          "a state management pattern + library for Vue.js applications.</p>",
        to: "https://github.com/memorah/vue-vuetify-todo-app",
      },
      {
        title: "Vuetify",
        icon: "mdi-vuetify",
        subtext: "Material Design Framework",
        to: "https://github.com/memorah/vue-vuetify-todo-app",
      },
      {
        title: "Environment Variables",
        icon: "mdi-variable",
        subtext: "global variables that we can use throughout app",
        to: "https://github.com/memorah/vue-vuetify-todo-app",
      },
      {
        title: "Localbase",
        icon: "mdi-database",
        subtext:
          "offline database with the simplicity & power of Firebase, all stored in the user's browser (in an IndexedDB database)",
        to: "",
      },
      {
        title: "VueDraggable",
        icon: "mdi-drag-horizontal-variant",
        subtext:
          "Vue component allowing drag-and-drop and synchronization with view model array",
        to: "",
      },
      {
        title: "Date-fns",
        icon: "mdi-github",
        subtext:
          "simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js",
        to: "",
      },
      {
        title: "Sass",
        icon: "mdi-github",
        subtext:
          "preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets",
        to: "",
      },
    ],
  }),
};
</script>
