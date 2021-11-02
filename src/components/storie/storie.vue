<template>
  <button class="user">
      <div class="user__avatar">
          <img :src="avatar" class="user__avatar-pic" alt="">
      </div>
      <div class="user__name">{{username}}</div>
  </button>
</template>
<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./storie.scss" scoped lang="scss"></style>
