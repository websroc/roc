import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import mian from '@/views/mian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/mian',
      name: 'mian',
      component: mian
    }
  ]
})
