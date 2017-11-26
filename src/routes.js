export default [
  {
      path:'/signup',
      component: require('./pages/signup.vue')  
  },
  {
      path:'/sign',
      component: require('./pages/sign.vue')
  },
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path:'/main/',
      component: require('./pages/main-page.vue')
  },
  {
      path:'/progress/',
      component : require('./pages/progress-page.vue')
  },
  {
      path:'/profile/',
      component : require('./pages/profile.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
]