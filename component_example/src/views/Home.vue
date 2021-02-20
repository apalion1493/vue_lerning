<template>
  <div>
    <hello-world msg="Hi VUE">
      <template #text-1>
        text 1123
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

    <text-field v-model="model" label="Login"></text-field>
    <p>{{model}}</p>
    <div style="height: 40px;"></div>
    <input type="text" v-model.lazy.trim="textOne">
    <p>{{textOne}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";

import BlogPost from "@/components/BlogPost";
import TextField from "@/components/TextField";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BlogPost,
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
}
</script>
