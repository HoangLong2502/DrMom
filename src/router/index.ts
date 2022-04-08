import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import CustomerView from '../views/CustomerView.vue'
import HomeView from '../views/HomeView.vue'
import ListCustomerView from '../components/CustomerView/ListCustomerView.vue'
import AddCustomer from '../components/CustomerView/AddCustomer/AddCustomer.vue'
import DetailCustomer from '../components/CustomerView/DetailCustomer/DetailCustomerView.vue'
import GiftView from '../components/GiftView/GiftView.vue'


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
      },
      {
        path: "/customer/add",
        name: "addcustomer",
        component: AddCustomer
      },
      {
        path: "/customer/:id",
        name: 'customerdetail',
        component: DetailCustomer,
      },
      {
        path: "/gift",
        name: 'gift',
        component: GiftView,
      },
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
]

const router = new VueRouter({
  routes
})

export default router
