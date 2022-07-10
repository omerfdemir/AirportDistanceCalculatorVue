import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";

Vue.config.productionTip = false;

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;

const options = {
  // You can set your default options here
};

Vue.use(Toast, options);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
