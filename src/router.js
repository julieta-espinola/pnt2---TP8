import Vue from 'vue'
import VueRouter from 'vue-router'
import Usuarios from './components/Usuarios.vue'
import Formulario from './components/Formulario.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/', redirect:'/formulario'},
  {path: '/users', component: Usuarios},
  {path: '/formulario', component: Formulario} 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router