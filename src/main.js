import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRellax from 'vue-rellax'
import VueKinesis from 'vue-kinesis'
import VueWow from 'vue-wow'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueKinesis)
Vue.use(VueRellax)
Vue.use(VueWow)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')