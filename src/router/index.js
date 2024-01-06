import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrdersView from '../views/OrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: OrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
