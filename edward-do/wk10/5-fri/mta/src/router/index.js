import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
});