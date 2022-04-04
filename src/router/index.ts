import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import CustomerView from '../views/CustomerView.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: CustomerView
  },
]

const router = new VueRouter({
  routes
})

export default router
