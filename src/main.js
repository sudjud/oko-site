import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRellax from 'vue-rellax'
import VueKinesis from 'vue-kinesis'
import VueWow from 'vue-wow'


Vue.use(VueKinesis)
Vue.use(VueRellax)
Vue.use(VueWow)
 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')