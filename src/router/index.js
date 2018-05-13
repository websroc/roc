import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import mian from '@/views/mian'
import welcome from '@/views/welcome/welcome'
import user from '@/views/user/user'

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
      component: mian,
      redirect: {path: 'welcome'},
      children: [{
        path: '/welcome',
        name: 'welcome',
        component: welcome
      },
      {
        path: '/user',
        name: 'user',
        component: user
      }
      ]
    }
  ]
})
