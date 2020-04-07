import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      component: () => import('./components/Test'),
    },
    {

      path: '/auth',
      component: () => import('./components/layouts/AuthLayout'),
      children: [
        {
          path: '/login',
          component: () => import('./components/auth/Login'),
        },
        {
          path: '/register',
          component: () => import('./components/auth/Register'),
        },
        {
          path: '/reset-email',
          component: () => import('./components/auth/ResetEmail'),
        },
        {
          path: '/reset-password',
          component: () => import('./components/auth/ResetPassword'),
        }
      ]
    }
  ]
})