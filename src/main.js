import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import router from "./router.js";

import GAuth from "vue-google-oauth2";

const gauthOption = {
  clientId: "CLIENT_ID.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account"
};

Vue.use(GAuth, gauthOption);
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
