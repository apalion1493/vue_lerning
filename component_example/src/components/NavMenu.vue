<template>
  <nav>
    <ul>
      <li v-for="(item, key) in listLinks" v-bind:key="key">
        <a href="#">{{item.linkTitle}}</a>
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
          key: 1
        },
        {
          linkTitle: 'link 1',
          key: 2
        },
        {
          linkTitle: 'link 2',
          key: 3
        },
      ]
    }
  }
}
</script>
