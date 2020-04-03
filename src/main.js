import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Sweet Alert
import 'sweetalert2'
// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// FontAwesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
