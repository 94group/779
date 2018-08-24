import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
const Home = () => import('@/page/home/Home')
const Login = () => import('@/page/login/Login')
const Register = () => import('@/page/register/Register')

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop || document.documentElement.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [{
    path: '/',
    component: App, // 顶层路由，对应index.html
    children: [ // 二级路由。对应App.vue
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      }
    ]}
  ]
})
