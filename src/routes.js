import Sign from './pages/sign.vue'
import Signup from './pages/signup.vue'

import Process from './pages/progress-product/process'

import Lupapassword from './pages/lupapassword.vue'

import EditProfile from './pages/profile/editprofile.vue'
import EditKontak from './pages/profile/edit-kontak.vue'
import TambahAlamat from './pages/profile/tambah-alamat.vue'

import Insertproduct from './pages/product/insertproduct'
import DetailBarang from './pages/product/detailproduct'

import Search from './pages/search.vue'
import Cart from './pages/cart.vue'

import Home from './pages/home'



export default [
  {
    path: "/signup",
    component: Signup
  },
  {
    path: "/sign",
    component: Sign
  },
  {
    path: "/main/",
    component: Home,
    name: "home"
  },
  {
    path: "/process/",
    component: Process
  },
  {
    path: "/editprofile/",
    component: EditProfile
  },
  {
    path: "/insertproduct/",
    component: Insertproduct
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: require("./pages/dynamic-route.vue")
  },
  {
    path: "/lupa/",
    component: Lupapassword
  },
  {
    path: "/editkontak/",
    component: EditKontak
  },
  {
    path: "/tambahalamat/",
    component: TambahAlamat
  },
  {
    path: "/detailbarang/",
    component: DetailBarang
  },
  {
    path: "/search/",
    component: Search
  },
  {
    path: "/cart/",
    component: Cart
  },
  {
    path: "/home/",
    component: Home
  },
];
