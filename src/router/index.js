import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import MasterLayout from '@/layouts/MasterLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/',
      component: MasterLayout, 
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;