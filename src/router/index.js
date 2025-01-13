import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import FundationView from '../views/FundationView.vue'
import CompaniesView from '../views/CompaniesView.vue'
import CompanyView from '../views/CompanyView.vue'
import OperationsView from '../views/OperationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { title: 'Home', goback: false }
    },
    {
      path: '/fundation',
      name: 'Fundation',
      component: FundationView,
      meta: { title: 'Fundation', goback: true }
    },
    {
      path: '/companies',
      name: 'Companies',
      component: CompaniesView,
      meta: { title: 'Companies', goback: true }
    },
    {
      path: '/company',
      name: 'Company',
      component: CompanyView,
      meta: { title: 'Company', goback: true}
    },
    {
      path: '/operations',
      name: 'Operations',
      component: OperationsView,
      meta: { title: 'Operations', goback: true}
    },
  ]
})

export default router
