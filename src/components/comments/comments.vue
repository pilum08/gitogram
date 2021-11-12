<template>
    <div class="comment">
        <p>
            <span class="comment__username">{{comment_author}}</span>
            {{comment_text}}
        </p>
    </div>
</template>
<script>
export default {
  props: [
    'comment_author',
    'comment_text'
  ]
}
</script>

<style src="./comments.scss" lang="scss" scoped></style>
