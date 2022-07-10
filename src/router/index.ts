import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/airport-search',
    name: 'Airport Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AirportSearchView.vue')
  },
  {
    path: '/calculate-distance',
    name: 'Calculate Distance',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalculateDistanceView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
