<template>
    <div class="comment">
        <p>
            <span class="comment__username">{{username}}</span>
            {{text}}
        </p>
    </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./comments.scss" lang="scss" scoped></style>
