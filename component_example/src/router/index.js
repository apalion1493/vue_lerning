import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import AllProductPage from "@/views/AllProductPage";
import ProductPage from "@/views/ProductPage";
import NotFound from "@/views/404";
import ProductsFooter from "@/views/ProductsFooter";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-list',
    name: 'ProductsFooter',
    component: ProductsFooter,
    children: [
      {
        path: '',
        name: 'ProductList',
        component: AllProductPage
      },
      {
        path: ':id',
        name: 'Product',
        component: ProductPage
      },
      {
        path: '*/*',
        redirect: {name: 'ProductList'}
      }
    ]
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: AllProductPage
  },
  {
    path: '/product-list/:id',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
