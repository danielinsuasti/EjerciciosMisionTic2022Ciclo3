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
      { //   /admin/usuarios
        path : 'usuarios',
        name : 'Usuarios',
        meta : {
          Administrador : true
        },
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: () => import(/* webpackChunkName: "about" */ '../components/UsuariosDT.vue')

      },
      { //   /admin/categorias
        path : 'categorias',
        name : 'Categorias'
      },
      { //   /admin/articulos
        path : 'articulos',
        name : 'Articulos'
      },
      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => { // De acuerdo al ciclo de vida, significa que antes de cada ruta, revise si existe un tema de autenticacion o no
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token = localStorage.getItem('token')
    if (!token) {
      next({
        name : 'Login',

      })
    } else {//si requiere el administrador
      let auxRol = decode(token)  //primero obtengo el token
      let rolToken = auxRol["rol"]; //de todo el token decodificado, obtengo solo el rol
      if(to.matched.some(record => record.meta.Administrador)){
        if(rolToken === 'Administrador'){
          next()
        }else{
          next({
            name : 'Admin'
          })
        }
      }else {
        next();      
    }
  }     
  }else{
    next() // make sure to always call next()!
  }
})



export default router
