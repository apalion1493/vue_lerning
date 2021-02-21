<template>
  <div>
    <h2>Список товаров</h2>
    <product-list :products="products"/>
  </div>
</template>
<script>
import ProductList from "@/components/ProductList";
import products from "../listData/products";

export default {
  components: {ProductList},
  data() {
    return {
      products
    }
  }
}
</script>

<style scoped>
  h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }
</style>
