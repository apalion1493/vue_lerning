<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import App from '@/App'

export default {
  name: 'Home',
  components: {
    App
  }
}
</script>
