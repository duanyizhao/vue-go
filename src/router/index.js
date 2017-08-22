import Vue from 'vue'
import Router from 'vue-router'
import Home from 'containers/Home'
import List from 'containers/List'
import Collect from 'containers/Collect'
import Add from 'containers/Add'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '*',
      redirect:'/home'
    }
  ],
  linkActiveClass:'active'
})
