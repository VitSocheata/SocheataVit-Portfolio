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
          component: HomeView,
          meta: {
            title: 'Vit Socheata - Frontend Developer Portfolio',
            description: 'Explore the professional portfolio of Vit Socheata, a Frontend Developer and Computer Science student.'
          }

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

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  let metaTag = document.querySelector('meta[name="description"]');
  if (metaTag && to.meta.description) {
    metaTag.setAttribute('content', to.meta.description);
  }
  
  next();
});

export default router;