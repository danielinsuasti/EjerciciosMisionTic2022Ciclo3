import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import decode from "jwt-decode"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: { requiresAuth: true },
    children : [
      { //    /admin/usuarios
        path : 'usuarios',
        name : 'Usuarios',

      },
      { //    /admin/categorias
        path : 'categorias',
        name : 'Categorias',

      },
      { //    /admin/articulos
        path : 'articulos',
        name : 'Articulos',

      },

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => { // De acuerdo al ciclo de vida, nos va a permitir que antes de cada ruta, revise si tiene un tema de autenticacion
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token = decode(localStorage.getItem('token')); //revisar si el local storage tiene token
    if (!token) { // Preguntamos si no existe el token
      next({
        name: 'Login',
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
