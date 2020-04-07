import Vue from 'vue'
import Vuetify from 'vuetify';
import App from './App.vue'
import router from './router'
import store from './store';
import VueMask from 'v-mask'
import 'vuetify/dist/vuetify.min.css'

// plugins
import './plugins/axios'

Vue.use(VueMask);
Vue.use(Vuetify);
// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');