<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      <span class="text-1">
        <slot name="text-1"></slot>
      </span>
      <span class="text-2">
        <slot name="text-2"></slot>
      </span>
      <span class="text-3">
        <slot name="text-3"></slot>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
