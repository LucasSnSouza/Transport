import { createRouter, createWebHistory } from 'vue-router'

import AuthenticationView from '../views/AuthenticationView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Authentication',
      component: AuthenticationView,
      meta: { title: 'Autentificação' }
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: { title: 'Home' }
    },
  ]
})

export default router
