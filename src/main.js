import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRellax from 'vue-rellax'
import VueKinesis from 'vue-kinesis'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import VueScrollTo from 'vue-scrollto'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase } from 'firebase/database'
 

Vue.use(VueKinesis)
Vue.use(VueRellax)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAnimateOnScroll)
Vue.use(VueScrollTo)

const firebaseConfig = {
  apiKey: "AIzaSyDI43sD78E5xtvJT6l3Z836oN2XaBf_6Gg",
  authDomain: "oko-iptics.firebaseapp.com",
  databaseURL: "https://oko-iptics-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oko-iptics",
  storageBucket: "oko-iptics.appspot.com",
  messagingSenderId: "476762270606",
  appId: "1:476762270606:web:d0d58450d3443745f7d2df",
  measurementId: "G-HQ1X1V0C3S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


