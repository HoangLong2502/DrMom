import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import CustomerView from '../views/CustomerView.vue'
import HomeView from '../views/HomeView.vue'
import ListCustomerView from '../components/CustomerView/ListCustomerView.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home1',
    component: CustomerView,
    children: [
      {
        path: "/customer",
        name: 'customer',
        component: ListCustomerView,
      }
    ]
  },
  // {
  //   path: '/customer',
  //   name: 'customerHome',
  //   components: {
  //     default: CustomerView,
  //     list: ListCustomerView,
  //   }
  // },
  {
    path: '/customer/:id',
    name: 'customer',
    component: CustomerView
  },
]

const router = new VueRouter({
  routes
})

export default router
