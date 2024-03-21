import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFound from '../views/notFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true
  },
  {
    path: "/:catchAll(.*)",
    name:'NotFound',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
