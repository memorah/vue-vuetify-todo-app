<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="768">
      <v-img
        class="pa-4 pt-7"
        src="@/assets/header-img.jpg"
        height="220"
        gradient="to top right, rgba(0,0,0,0.8), rgba(0,0,0,0)"
      >
        <v-avatar size="60" class="mb-2">
          <img src="https://i.pravatar.cc/" alt="avatar" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">John Doe</div>
        <div class="white--text text-subtitle-2">Bratislava</div>
      </v-img>

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
      height="220"
      src="@/assets/header-img.jpg"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,0), rgba(0,0,0,.8)"
        ></v-img>
      </template>
      <v-container class="header-container px-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

          <v-spacer></v-spacer>
          <search />
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
<style lang="sass">
.header-container
 max-width: none!important
</style>
