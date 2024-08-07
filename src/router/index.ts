import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { supabase } from '@/backend/supabase'
import CreateManyStudents from '@/views/CreateManyStudents.vue'
import LandingPage from '@/views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/Auth',
      name: 'AuthView',
      component: AuthView
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/CreateManyStudents',
      name: 'CreateManyStudents',
      component: CreateManyStudents
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { data, error } = await supabase.auth.getUser()
  const user = data?.user

  console.log('Navigation to:', to.path)
  console.log('User data:', user)

  if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
    console.log('User not authenticated, redirecting to login')
    next({ path: '/Login' })
  } else {
    next()
  }
})

export default router
