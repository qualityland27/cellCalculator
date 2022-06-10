import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VCell from '../views/VCell.vue'
import VPrint from '../views/VPrint.vue'
import About from '../views/About.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vcell',
    name: 'VCell',
    component: VCell
  },
  {
    path: '/vprint',
    name: 'VPrint',
    component: VPrint
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //component: About
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
   },
]

const router = createRouter({
  history: createWebHistory(),
  
  routes
})

export default router
