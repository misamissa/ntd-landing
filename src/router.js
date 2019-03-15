import Vue from 'vue'
import Router from 'vue-router'
import * as pages from 'src/pages'
Vue.use(Router)

export default () => {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '',
        redirect: '/public',
      }
    ],
  })

  router.addRoutes([
    {
      path: '/public',
      component: pages.PublicPage,
    },
  ])

  return router
}
