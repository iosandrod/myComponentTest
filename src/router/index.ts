import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
