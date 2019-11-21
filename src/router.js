import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import Info from "./views/Info.vue";
import Map from "./views/Map.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/map/:indexDay",
      name: "Map",
      component: Map
    },
    {
      path: "/",
      name: "Info",
      component: Info
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      props: true
    },
    { path: "/login", name: "Login", component: Login }
  ]
});
