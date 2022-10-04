import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Login.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeView,

  },
  {
    path: '/about',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/quienes',
    name: 'quienes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuienesView.vue')
  },
  {
    path: '/pacientes',
    name: 'pacientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PacienteView.vue')
  },
  {
    path: '/medico',
    name: 'medico',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MedicoView.vue')
  }
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
