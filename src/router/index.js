import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import ContactView from '@/views/ContactView.vue';
import AboutMe from '@/views/AboutMe.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView },
    { path: '/about-me', name: 'aboutMe',component: AboutMe},
    { path: '/contact', name: 'contact', component: ContactView }
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