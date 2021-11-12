<template>
    <div class="topline">
        <topline />
    </div>
    <main class="main">
      <div class="main__container">
        <ul class="list">
          <li class="item" v-for="item in items" :key="item.id" >
            <post
              :post_title="item.full_name"
              :post_date="item.created_at"
              :avatar="item.owner.avatar_url"
              :post_text="item.description"
              :username="item.name"
              :stars="item.stargazers_count"
              :forks="item.forks_count"
            />
          </li>
        </ul>
        <post />
      </div>
    </main>
</template>
<script>
import { topline } from '../../components/topline'
import { post } from '../../components/post'
import * as api from '../../api'
export default {
  name: 'feeds',
  components: {
    topline,
    post
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }

}
</script>
