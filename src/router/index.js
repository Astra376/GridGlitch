import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CompanyPage from '@/views/CompanyPage.vue';
import CareersPage from '@/views/CareersPage.vue';
import ContactPage from '../views/ContactPage.vue';
import GamesPage from '../views/GamesPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/company', component: CompanyPage },
  { path: '/careers', component: CareersPage },
  { path: '/contact', component: ContactPage },
  { path: '/games', component: GamesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
