<template>
    <div class="profile">
        <div class="profile__img">
            <img class="profile__pic" :src="src" alt="">
        </div>
        <div class="profile__name">{{profile_name}}</div>
    </div>
</template>
<script>
export default {
  props: ['profile_name', 'src'
  ]
}
</script>
<style src="./profile.scss" lang="scss" scoped></style>
