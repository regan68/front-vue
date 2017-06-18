import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Demo from '@/Demo';
import Home from '@/main/Home';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
});
