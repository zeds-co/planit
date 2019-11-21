import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import router from "./router.js";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDJ3sPnmTBMN1DZGJBX9gxuNg-O9mgHOAo",
    libraries: "geometry,drawing,places"
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
