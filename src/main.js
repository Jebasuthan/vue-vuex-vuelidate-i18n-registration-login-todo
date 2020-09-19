import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import i18n from './i18n'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/lib/css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
