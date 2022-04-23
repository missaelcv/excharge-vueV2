import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '@/views/HomeComponent'
import AboutComponet from '@/views/AboutComponet'
import ErrorComponent from '@/views/ErrorComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routers:
  [{
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/AboutComponet',
    name: 'AboutComponet',
    component: AboutComponet
  },
  {
    path: '/ErrorComponent ',
    name: 'ErrorComponent ',
    component: ErrorComponent
  }
  ]
})
