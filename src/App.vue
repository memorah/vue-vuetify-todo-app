<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        src="@/assets/header-img.jpg"
        height="170"
        gradient="to top right, rgba(0,0,0,.1), rgba(0,0,0,.7)"
      ></v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      prominent
      height="170"
      src="@/assets/header-img.jpg"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.7), rgba(0,0,0,.1)"
        ></v-img>
      </template>
      <v-container class="px-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h4 ml-3"
            >ToDo
            <span class="text-subtitle-2"> by mackov.dev</span></v-app-bar-title
          >
        </v-row>
        <live-date-time />

        <v-row> </v-row>
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
  }),
  components: {
    search: require("@/components/Todo/Tools/SearchTask.vue").default,
    snackbar: require("@/components/Shared/SnackBar.vue").default,
    "live-date-time": require("@/components/Todo/Tools/LiveDateTime.vue")
      .default,
  },
};
</script>
<style scoped>
v-img.menu-img {
  background-position: right;
}
</style>
