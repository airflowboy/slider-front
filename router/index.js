import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import KakaoCallback from '../pages/Kakao-callback.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/kakao-callback',
    name: 'KakaoCallback',
    component: KakaoCallback
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router