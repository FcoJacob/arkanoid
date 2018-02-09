import Vue from 'vue'
import Router from 'vue-router'
import Arkanoid from '@/components/Arkanoid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Arkanoid',
      component: Arkanoid
    }
  ]
})
