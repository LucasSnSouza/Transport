import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import FundationView from '../views/FundationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { title: 'Home' }
    },
    {
      path: '/fundation',
      name: 'Fundation',
      component: FundationView,
      meta: { title: 'Fundação' }
    },
  ]
})

export default router
