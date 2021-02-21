<template>
  <footer>
    <router-view/>
    <footer-component/>
  </footer>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "ProductsFooter",
  components: {FooterComponent}
}
</script>

<style scoped>

</style>
