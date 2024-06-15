import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramaAgregarView from '../views/ProgramaAgregarView.vue'
import ProgramasEditarView from '@/views/ProgramasEditarView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programas/agregar',
      name: 'programasagregar',
      component: ProgramaAgregarView
    },
    {
      path: '/programas/:id/editar',
      name: 'programas-editar',
      component: ProgramasEditarView
    }
  ]
})

export default router
