<template>
  <div class="about pa-6">
    <h1 class="teal--text text--darken-4">
      About this {{ $store.state.appTitle }} app
    </h1>
    <p>
      I created this app as a Vue.js learning project. I used the following
      tools:
    </p>
    <v-list-item
      color="white"
      v-for="aboutlink in aboutlinks"
      :key="aboutlink.title"
      :href="aboutlink.to"
      target="blank"
    >
      <v-list-item-icon>
        <v-icon color="teal darken-4">{{ aboutlink.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title class="font-weight-bold teal--text text--darken-4">{{
          aboutlink.title
        }}</v-list-item-title>
        <div class="subtitle-2 font-weight-regular">
          {{ aboutlink.subtext }}
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  data: () => ({
    aboutlinks: [
      {
        title: "Vue CLI",
        icon: "mdi-vuejs",
        subtext: "full system for rapid Vue.js development",
        to: "https://cli.vuejs.org/",
      },
      {
        title: "Vue Route",
        icon: "mdi-vuejs",
        subtext: "official library for page navigation in Vue applications",
        to: "https://router.vuejs.org/",
      },
      {
        title: "Vuex",
        icon: "mdi-vuejs",
        subtext:
          "a state management pattern + library for Vue.js applications. I mainly used state, mutations, getters & actions for add, delete, done, update & edit tasks, saerch and filter tasks, show & hide snackbars, set timeout, toggle sorting & conection with localbase.",
        to: "https://vuex.vuejs.org/",
      },
      {
        title: "Vuetify",
        icon: "mdi-vuetify",
        subtext: "Material Design Framework",
        to: "https://vuetifyjs.com/en/",
      },
      {
        title: "Environment Variables",
        icon: "mdi-variable",
        subtext: "global variables that we can use throughout app",
        to: "https://cli.vuejs.org/guide/mode-and-env.html",
      },
      {
        title: "Localbase",
        icon: "mdi-database",
        subtext:
          "offline database with the simplicity & power of Firebase, all stored in the user's browser (in an IndexedDB database)",
        to: "https://www.npmjs.com/package/localbase",
      },
      {
        title: "VueDraggable",
        icon: "mdi-drag-horizontal-variant",
        subtext:
          "Vue component allowing drag-and-drop and synchronization with view model array",
        to: "https://www.npmjs.com/package/vuedraggable",
      },
      {
        title: "Date-fns",
        icon: "mdi-update",
        subtext:
          "simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js",
        to: "https://date-fns.org/",
      },
      {
        title: "Sass",
        icon: "mdi-sass",
        subtext:
          "preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets",
        to: "https://sass-lang.com/",
      },
    ],
  }),
};
</script>
