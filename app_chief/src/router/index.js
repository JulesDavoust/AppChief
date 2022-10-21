import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import chiefProfil from '../views/chiefProfilView.vue'
import login from '../views/loginView.vue'
import loginContinue from '../views/loginContinue.vue'
import registerationChief from '../views/registerationChiefView.vue'
import registerationUser from '../views/registerationUserView.vue'
import registerView from '../views/registerView.vue'
import userProfil from '../views/userProfilView.vue'

const routes = [
  {
    path:'/',
    name:'BasicHome',
    component: () =>import('../views/BasicHomeView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chief',
    name: 'Chief',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FindAChief.vue')
  },
  {
    path: '/chiefprofil',
    name: 'Chief profil',
    component: chiefProfil
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/logincontinue',
    name: 'logincontinue',
    component: loginContinue
  },
  {
    path: '/registerationchief',
    name: 'Chief registeration',
    component: registerationChief
  },
  {
    path: '/registerationuser',
    name: 'User registeration',
    component: registerationUser
  },
  {
    path: '/userprofil',
    name: 'User profil',
    component: userProfil
  },
  {
    path: '/register',
    name: 'register',
    component: registerView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
