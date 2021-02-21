<template>
  <div class="productPage">
    <div class="" v-if="product">
      <div class="cardProduct">
        <img class="cardProduct__img" :src="product.imgUrl" :alt="product.imgAlt">
        <span class="cardProduct__title">{{product.title}}</span>
        <span class="cardProduct__price">{{product.price}}</span>
        <span class="cardProduct__description">Доступно всего {{product.count}} штук.</span>
        <button type="button">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import products from "@/listData/products";

export default {
  data() {
    return {
      product: null
    }
  },
  created() {
    const product = products.find(product => product.id == this.$route.params.id)
    if (product) {
      this.product = product
    }
  }
}
</script>
<style scoped>

.cardProduct {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
  width: 60%;
  margin-bottom: 30px;
}

.cardProduct__img {
  margin-bottom: 20px;
}

</style>
