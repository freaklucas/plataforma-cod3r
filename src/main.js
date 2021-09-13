import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import 'font-awesome/css/font-awesome.css'

import './config/mensagens'

import store from './config/store'
import router from './config/router'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueRouter)

new Vue({
  store,
  router: router,
  render: h => h(App),
}).$mount('#app')
