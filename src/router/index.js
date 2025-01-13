import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import FundationView from '../views/FundationView.vue'
import CompaniesView from '../views/CompaniesView.vue'
import CompanyView from '../views/CompanyView.vue'

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
    {
      path: '/company',
      name: 'Company',
      component: CompanyView,
      meta: { title: 'Company' }
    },
  ]
})

export default router
