<template>
  <nav>
    <ul>
      <li v-for="(item, key) in listLinks" v-bind:key="key">
        <router-link :to="item.linkUrl">{{item.linkTitle}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      listLinks: [
        {
          linkTitle: 'home',
          linkUrl: '/',
          key: 1
        },
        {
          linkTitle: 'Product List',
          linkUrl: '/product-list',
          key: 2
        },
        {
          linkTitle: 'link 2',
          linkUrl: '/',
          key: 3
        },
      ]
    }
  }
}
</script>
