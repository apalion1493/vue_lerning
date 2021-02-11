<template>
  <div id="app">
    <NavMenu></NavMenu>
    <HelloWorld msg="Hi VUE">
      Какой то рандомный текст
    </HelloWorld>
    <BlogPost
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
    ></BlogPost>
    <ProductList></ProductList>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import NavMenu from "@/components/NavMenu";
import BlogPost from "@/components/BlogPost";
import ProductList from "@/components/ProductList";

const APP_LOG_LIFECYCLE_EVENTS = true;

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavMenu,
    BlogPost,
    ProductList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  },

  beforeCreate: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeCreate");
    }
  },
  created: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("created");
    }
  },
  beforeMount: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log(" beforeMount");
    }
  },
  mounted: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log(" mounted");
    }
  },
  beforeUpdate: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeUpdate");
    }
  },
  updated: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("updated");
    }
  },
  beforeDestroyed: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeDestroyed ");
    }
  },
  destroyed: function () {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("destroyed");
    }
  }
}
</script>

<style>
#app {

}
</style>
