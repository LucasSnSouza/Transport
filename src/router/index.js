import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import FundationView from '../views/FundationView.vue'
import CompaniesView from '../views/CompaniesView.vue'

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
      meta: { title: 'Fundation' }
    },
    {
      path: '/companies',
      name: 'Companies',
      component: CompaniesView,
      meta: { title: 'Companies' }
    },
  ]
})

export default router
