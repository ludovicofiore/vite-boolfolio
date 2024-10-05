import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/pages/Home.vue'
import Projects from '../components/pages/Projects.vue'
import ProjectDetail from '../components/pages/ProjectDetail.vue'
import Page404 from '../components/pages/Page404.vue'
import Contacts from '../components/pages/contacts.vue'


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
    },

    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts,
    },

    {
      path: '/errore-404',
      name: 'page404',
      component: Page404,
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/errore-404',
    }



  ]
})

export default router
