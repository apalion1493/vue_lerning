<template>
  <div class="productList">
    <h1>Список продуктов</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <product-list-card
        :title="product.title"
        :price="product.price"
        :img-url="product.imgUrl"
        :img-alt="product.imgAlt"
        :count="product.count"
        @add-to-basket="addToBasket(index)"></product-list-card>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductListCard from "@/components/ProductListCard";

export default {
  name: 'ProductList',
  components: {ProductListCard},
  data() {
    return {
      products: [
        {
          title: 'Продукт 1',
          price: 100,
          imgUrl: 'img1.png',
          imgAlt: 'img 1',
          count: 20
        },
        {
          title: 'Продукт 2',
          price: 200,
          imgUrl: 'img2.png',
          imgAlt: 'img 2',
          count: 40
        },
        {
          title: 'Продукт 3 lorem hgdfjg srdghdfg dfs gsfdg dfg fd',
          price: 300,
          imgUrl: 'img3.png',
          imgAlt: 'img 3',
          count: 60
        }
      ]
    }
  },
  methods: {
    addToBasket(index) {
      alert(index)
    }
  }
}
</script>

<style scoped>
  .productList ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 0;
    margin-left: -10px;
    margin-right: -10px;
  }

  .productList li {
    width: calc(50% - 20px);
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
</style>
