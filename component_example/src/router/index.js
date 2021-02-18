import Vue from 'vue'
import VueRouter from 'vue-router'
// import * as path from "path";
import App from "@/App";
import ProductListCard from "@/components/ProductListCard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/:id',
    name: 'ProductPage',
    component: ProductListCard

  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
