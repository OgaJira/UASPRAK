import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Tugas1 from '../components/Tugas1.vue'
import Tugas4 from '../components/Tugas4.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/tugas1', component: Tugas1 },
  { path: '/tugas4', component: Tugas4 },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
