import Vue from "vue";
import App from "./App.vue";
import store from "@/store/index";
import MyRouter from "./router";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
const newRouter = new VueRouter({
  routes: MyRouter,
});
Vue.config.productionTip = false;

let app = new Vue({
  store,
  router: newRouter,
  render: (h) => h(App),
});

app.$mount("#app");

import "bootstrap/dist/css/bootstrap.css";
