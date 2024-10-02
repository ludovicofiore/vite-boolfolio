import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/Home.vue'
import Projects from '../components/pages/Projects.vue'
import ProjectDetail from '../components/pages/ProjectDetail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/progetti',
      name: 'projects',
      component: Projects,
    },

    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetail',
      component: ProjectDetail,
    }

  ]
})

export default router
