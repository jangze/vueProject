import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import HomePage from '@/pages/HomePage'
import NerModel from '@/components/NerModel'
import TrainModel from '@/components/TrainModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: 'nerModel',
          name: 'NerModel',
          component: NerModel
        },
        {
          path: 'trainModel',
          name: 'TrainModel',
          component: TrainModel
        },
        {
          path: 'electicRecord',
          name: 'ElecticRecord',
          component: () => import('@/components/electicRecord.vue')
        }
      ]
    }
  ]
})
