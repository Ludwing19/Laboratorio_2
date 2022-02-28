import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Se importan los alert
import VueSweetalert2 from "vue-sweetalert2";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// se importan los alerts
import "sweetalert2/dist/sweetalert2.min.css";

import "animate.css";


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Los alert
Vue.use(VueSweetalert2);


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
