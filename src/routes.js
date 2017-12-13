import About from './pages/about.vue'
import Main from './pages/main-page.vue'
import Sign from './pages/sign.vue'
import Signup from './pages/signup.vue'
import Progress from './pages/progress-page.vue'
import Lupapassword from './pages/lupapassword.vue'
import Insertproduct from './pages/insertproduct.vue'
import Profile from './pages/profile.vue'
import EditProfile from './pages/editprofile.vue'
import EditKontak from './pages/edit-kontak.vue'
import TambahAlamat from './pages/tambah-alamat.vue'

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
      component : Progress
  },
  {
      path:'/profile/',
      component : Profile
  },
  {
      path:'/editprofile/',
      component : EditProfile
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
  {
      path: '/editkontak/',
      component: EditKontak
  },
  {
      path: '/tambahalamat/',
      component: TambahAlamat
  }
  
]