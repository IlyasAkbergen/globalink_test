import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./components/layouts/AuthLayout'),
      children: [
        {
          path: '/login',
          name: 'auth.login',
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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./components/layouts/DashboardLayout'),
      children: [
        {
          path: '/companies',
          name: 'companies',
          component: () => import('./components/Companies'),
        }
      ],
    }
  ]
})