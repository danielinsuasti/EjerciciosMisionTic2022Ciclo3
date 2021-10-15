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
        meta : {
          Administrador : true
        },
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: () => import(/* webpackChunkName: "about" */ '../components/UsuariosDT.vue')

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
    let token = localStorage.getItem('token'); //revisar si el local storage tiene token
    if (!token) { // Preguntamos si no existe el token
      next({
        name: 'Login',
        // query: { redirect: to.fullPath }
      })
    } else {
      //si requiere Administrador
      let auxRol = decode(token); //decodifico el token
      let rolToken = auxRol["rol"];// de todo el token decodificado, obtengo el rol
      if( to.matched.some(record => record.meta.Administrador)){
        if(rolToken ==='Administrador'){ //ademas si el rol es administrador
          next()
        }else{// sino, el token permite entrar a la ruta admin
          next({
            name : 'Admin'
          })
        }

      }else{
        next();
      }
      
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
