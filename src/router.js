import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Login from '@/views/Login';
import SignUp from '@/views/SignUp';
import MyImages from '@/views/MyImages';
import Cart from '@/views/Cart';
import Payment from '@/views/Payment';
import Index from '@/views/index';



Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/myimages',
      name: 'MyImages',
      component: MyImages,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;