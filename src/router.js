import Vue from 'vue'
import Router from 'vue-router'
import Services from './views/Services.vue'
import Home from './views/Home.vue'
//nao sei porque, mas nao usaram extensao .vue
import Login from './views/Login'
import Padaria from './views/Serviços/Alimentos/Padaria'

Vue.use(Router)

export default new Router({
  routes: [
     {
       path: '/home',
       name: 'home',
       component: Home
     },
    {
      path: '/Services',
      name: 'services',
      component: Services
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },

    {
      path: '/Padaria',
      name: 'Padaria',
      component: Padaria
    },
  ]
})
