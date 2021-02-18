<template>
  <div class="textFiled">
    <label for="">{{label}}
      <input type="text"
              :value="value"
              @input="input">
    </label>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  computed: {},
  methods: {
    input(e) {
      let value = e.target.value;
      this.$emit('input', value)
    }
  }

}
</script>

<style scoped>

</style>
