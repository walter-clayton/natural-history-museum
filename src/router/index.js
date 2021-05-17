import { createRouter, createWebHashHistory } from 'vue-router'
import MuseumListings from '../components/MuseumListings.vue'
import SpacePage from '../components/SpacePage.vue'

const routes = [
  { path: '/', redirect: '/museum' },
  {
    path: '/museum',
    name: 'MuseumListings',
    component: MuseumListings
  },
  {
    path: '/space',
    name: 'SpacePage',
    component: SpacePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
