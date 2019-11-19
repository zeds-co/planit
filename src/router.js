import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import Info from "./views/Info.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Info",
      component: Info
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    { path: "/login", name: "Login", component: Login }
  ]
});
