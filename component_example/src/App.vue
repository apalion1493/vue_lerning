<template>
  <div id="app">
    <nav-menu></nav-menu>
    <hello-world msg="Hi VUE">
      <template #text-1>
        text 1
      </template>
      <template #text-3>
        text 3
      </template>
      <template #text-2>
        text 2
      </template>
    </hello-world>
    <blog-post
        v-for="post in posts"
        :key="post.id"
        :post="post"
    ></blog-post>
    <product-list></product-list>

    <text-field v-model="model" label="Login"></text-field>
    <p>{{model}}</p>
    <div style="height: 40px;"></div>
    <input type="text" v-model.lazy.trim="textOne">
    <p>{{textOne}}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import NavMenu from "@/components/NavMenu";
import BlogPost from "@/components/BlogPost";
import ProductList from "@/components/ProductList";
import TextField from "@/components/TextField";

const APP_LOG_LIFECYCLE_EVENTS = true;

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavMenu,
    BlogPost,
    ProductList,
    TextField
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      model: '',
      textOne: ''
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
