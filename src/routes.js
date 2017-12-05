import About from './pages/about.vue'
import Main from './pages/main-page.vue'
import Sign from './pages/sign.vue'
import Signup from './pages/signup.vue'
import Lupapassword from './pages/lupapassword.vue'
import Insertproduct from './pages/insertproduct.vue'

export default [
  {
      path:'/signup',
      component: Signup
  },
  {
      path:'/sign',
      component: Sign
  },
  {
      path: '/about/',
      component: About
  },
  {
      path: '/form/',
      component: About
  },
  {
      path:'/main/',
      component: Main
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
      path:'/editprofile/',
      component : require('./pages/editprofile.vue')
  },
  {
        path:'/insertproduct/',
        component: Insertproduct
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  },
  {
    path:'/lupa/',
    component: Lupapassword
  },
  
]