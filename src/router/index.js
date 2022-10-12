import Vue from "vue";
import VueRouter from "vue-router";
import ToDo from "../views/ToDo.vue";
import goTo from "vuetify/lib/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "by mackov.dev",
    component: ToDo,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, _from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  goTo(0, { duration: 0 });
});
export default router;
