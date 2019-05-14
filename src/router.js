import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/goods/goods.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('./views/comments/comments.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./views/shop/shop.vue')
    }
  ]
})
