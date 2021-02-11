<template>
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: ['post'],
}
</script>
