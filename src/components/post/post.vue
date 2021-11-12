<template>
<div class="post">
    <profile :profile_name="username" :src="avatar" />
    <slot> <div class="post__content">
        <h3 class="post__title">{{post_title}}</h3>
        <p class="post__text">{{post_text}}</p>
        <counters :stars="stars" :forks="forks"/>
    </div>
    </slot>
<div class="issues">
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
        <ul class="comments__list">
            <li class="comment__item" v-for="comment in comments" :key="comment.issues_url">
                <comments />
            </li>
        </ul>
    </div>
</div>
<span class="post__date">{{this.date}}</span>
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
    'post_title',
    'post_date',
    'username',
    'post_text',
    'stars',
    'forks',
    'post_comment',
    'avatar',
    'comments'

  ],
  computed: {
    buttons () {
      return [
        {
          type: 'star',
          label: 'Star',
          value: this.stars
        },
        {
          type: 'fork',
          label: 'Fork',
          value: this.forks
        }
      ]
    },
    date () {
      const months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
      ]
      const getPostDate = new Date(this.post_date)
      return [getPostDate.getDate(), months[getPostDate.getMonth()]].join(' ')
    }
  },
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
