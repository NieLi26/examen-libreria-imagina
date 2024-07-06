import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LibrosView from '@/views/LibrosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      login: true
    }
  },
  {
    path: '/libros',
    name: 'libros',
    component: LibrosView,
    meta: {
      login: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      login: false
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(( to, from, next ) => {
  const authRequired = to.meta.login
  if ( authRequired ) {
    next("/login")
  }
  next()
})


export default router
