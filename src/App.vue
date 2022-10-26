<template>
  <v-app id="inspire">
    <v-navigation-drawer
      right
      bottom
      v-model="drawer"
      app
      :mobile-breakpoint="768"
      class="menu-drawer"
    >
      <v-list dense nav>
        <v-list-item
          color="white"
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      prominent
      :height="$route.path === '/' ? '238' : '170'"
      src="@/assets/header-img.jpg"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top , rgba(0,0,0,0),rgba(0,77,64,1)"
        ></v-img>
      </template>
      <v-container class="header-container px-0">
        <v-row>
          <search />
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h4 ml-3"
            >{{ $store.state.appTitle }}
            <span class="text-subtitle-2"> by mackov.dev</span></v-app-bar-title
          >
        </v-row>
        <live-date-time />

        <v-row v-if="$route.path === '/'"
          ><field-add-task class="mt-3"
        /></v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "ToDo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
    links: [
      {
        title: "mackov.dev",
        icon: "mdi-link-variant",
        to: "https://mackov.dev",
      },
      {
        title: "Repository",
        icon: "mdi-github",
        to: "https://github.com/memorah/vue-vuetify-todo-app",
      },
    ],
  }),
  mounted() {
    this.$store.dispatch("getTasks");
  },
  components: {
    search: require("@/components/Todo/Tools/SearchTask.vue").default,
    snackbar: require("@/components/Shared/SnackBar.vue").default,
    "live-date-time": require("@/components/Todo/Tools/LiveDateTime.vue")
      .default,
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
  },
};
</script>
<style lang="sass" scoped>
.header-container
 max-width: none!important
.menu-drawer
 background-color: #004D40!important
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled),.theme--light.v-icon
  color: rgba(299, 299, 299, 0.87)
.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile
  min-width: 90%
  left: 5vw
</style>
