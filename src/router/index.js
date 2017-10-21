import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'

import Header from '../components/Header'

// import HomePage from '../pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})
