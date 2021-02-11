<template>
  <div class="cardProduct">
    <img class="cardProduct__img" :src="imgUrl" :alt="imgAlt">
    <span class="cardProduct__title">{{title}}</span>
    <span class="cardProduct__price">{{price}}</span>
    <span class="cardProduct__description">Доступно всего {{count}} штук.</span>
    <button type="button" @click="addToBasket">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: 'ProductListCard',
  props: {
    imgAlt: {
      type: String,
      default: 'Описание картинки'
    },
    imgUrl: {
      type: String,
      default: 'NoPhoto.png'
    },
    title: {
      type: String,
      validator(value) {
        return value.length < 30
      }
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addToBasket() {
      this.$emit('addToBasket')
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
    width: 100%;
  }

  .cardProduct__img {
    margin-bottom: 20px;
  }
</style>
