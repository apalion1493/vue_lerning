import Vue from 'vue'
import VueRouter from 'vue-router'
// import * as path from "path";
import Home from "@/views/Home";
import ProductList from "@/components/ProductList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-list',
    name: 'ProductPage',
    component: ProductList

  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
