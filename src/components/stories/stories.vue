<template>
<ul class="stories">
   <li class="stories__item" v-for="picture in pictures" :key="picture.id">
      <storie
 :avatar= "picture.avatar"
 :username="picture.username"
   />
   </li>
</ul>

</template>
<script>
import { storie } from '../storie'
import pictures from '../../pages/feeds/data.json'
export default {
  components: {
    storie
  },
  data () {
    return {
      pictures
    }
  }
}
</script>
<style src="./stories.scss" scoped lang="scss"></style>
