import type { RouteRecordRaw } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

export default routes
