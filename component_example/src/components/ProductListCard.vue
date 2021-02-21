<template>
  <div class="cardProduct">
    <img class="cardProduct__img" :src="product.imgUrl" :alt="product.imgAlt">
    <router-link :to="{name: 'Product', params: {id: product.id}}">
      {{product.title}}
    </router-link>
    <span class="cardProduct__price">{{product.price}}</span>
    <span class="cardProduct__description">Доступно всего {{product.count}} штук.</span>
    <button type="button">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: 'ProductListCard',
  props: {
    product: {
      type: Object
    }
  },
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
