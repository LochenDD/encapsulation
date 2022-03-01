import Vue from 'vue'
import VueRouter from 'vue-router'
import ChartDemo from '../views/ChartsDemo.vue'
import PaginationDemo from '../views/PaginationDemo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/remoteSelectDemo'
  },
  {
    path: '/chartDemo',
    name: 'chartDemo',
    component: ChartDemo
  },
  {
    path: '/remoteSelectDemo',
    name: 'remoteSelectDemo',
    component: () => import('@/views/RemoteSelectDemo')
  },
  {
    path: '/paginationDemo',
    name: 'paginationDemo',
    component: PaginationDemo
  }
]

const router = new VueRouter({
  routes
})

export default router
