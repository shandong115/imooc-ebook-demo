import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '@/views/ebook/index'
import EbookReader from '@/components/ebook/EbookReader'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'ebook',
    component: Ebook,
    children: [
      {
        path: ':fileName',
        component: EbookReader
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
