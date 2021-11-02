<template>
    <div class="topline">
        <topline />
    </div>
    <main class="main">
      <div class="main__container">
        <post postDate="15 may"/>
      </div>
    </main>
</template>
<script>
import { topline } from '../../components/topline'
import { post } from '../../components/post'
export default {
  name: 'feeds',
  components: {
    topline,
    post
  }
}
</script>
