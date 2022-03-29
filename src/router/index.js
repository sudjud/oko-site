import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/glasses',
    name: 'Glasses',
    component: () => import('../views/Glasses.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/alg',
    name: 'alg',
    component: () => import('../components/Algs/AlgorithmBlock')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
