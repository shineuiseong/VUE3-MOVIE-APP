import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie',
      component: Movie,
    },
    {
      path: '/about',
      component: About,
    },
  ],
})
