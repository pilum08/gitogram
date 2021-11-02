<template>
<div class="post">
    <profile name="Josh" />
    <slot> <div class="post__content">
        <h3 class="post__title">Vue.js</h3>
        <p class="post__text">JavaScript framework for building interactive web applications ⚡</p>
        <counters stars="455" forks="125k" />
    </div>
    </slot>
<div class="issues">
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
        <ul class="comments__list">
            <li class="comment__item" v-for="n in 5" :key="n">
                <comments text="Enable performance measuring..." username="John"/>
            </li>
        </ul>
    </div>
</div>
<span class="post__date">{{postDate}}</span>
</div>

</template>
<script>
import { profile } from '../profile'
import { counters } from '../counters'
import { toggler } from '../toggler'
import { comments } from '../comments'
export default {
  components: {
    profile,
    counters,
    toggler,
    comments
  },
  props: [
    'stars',
    'forks',
    'postDate'
  ],
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>
<style src="./post.scss" lang="scss" scoped></style>
