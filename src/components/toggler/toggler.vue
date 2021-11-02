<template>
    <button :class="['toggler', { active: isOpened}]" @click="toggle">
        <span class="toggler__text">{{isOpened ? "Hide" : "Show"}} issues</span>
        <span class="toggler__icon">
            <img src="../../assets/triangle.svg" alt="">
        </span>
    </button>
</template>

<script>
export default {
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>
<style src="./toggler.scss" lang="scss" scoped></style>
