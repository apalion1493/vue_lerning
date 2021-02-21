<template>
  <div class="productList">
    <product-list-card class="productCard" :product="product" v-for="product in products" :key="product.id"/>
  </div>
</template>

<script>
import ProductListCard from "@/components/ProductListCard";

export default {
  name: 'ProductList',
  components: {ProductListCard},
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.productList {
  display: flex;
  flex-direction: column;
}
</style>
