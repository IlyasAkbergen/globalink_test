import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import VueMask from 'v-mask'
import VeeValidate from 'vee-validate';
import 'vuetify/dist/vuetify.min.css'

// plugins
import './plugins/axios'
import vuetify from "./plugins/vuetify";
import { axiosInstance } from "./plugins/axios";
Vue.use(VueMask);
Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.prototype.$axios = axiosInstance;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');