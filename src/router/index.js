import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Dining from '../components/services/Dining.vue'
import Events from '../components/services/Events.vue'
import Spa from '../components/services/Spa.vue'
import AdminDashboard from '../components/mgmt/AdminDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dining',
      name: 'dining',
      component: Dining
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/spa',
      name: 'spa',
      component: Spa
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
