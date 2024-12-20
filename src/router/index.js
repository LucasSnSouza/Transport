import { createRouter, createWebHistory } from 'vue-router'

import AuthenticationView from '../views/AuthenticationView.vue';
import HomeView from '../views/HomeView.vue';
import HangarView from '../views/HangarView.vue';
import SystemView from '../views/SystemView.vue';

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
    {
      path: '/hangar',
      name: 'Hangar',
      component: HangarView,
      meta: { title: 'Hangar' }
    },
    {
      path: '/system',
      name: 'System',
      component: SystemView,
      meta: { title: 'System' }
    },
  ]
})

export default router
