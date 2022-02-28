import Vue from 'vue'
import VueRouter from 'vue-router'
import ChartDemo from '../views/ChartsDemo.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
