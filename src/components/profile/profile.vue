<template>
    <div class="profile">
        <div class="profile__img">
            <img src="../../assets/Oval.png" alt="">
        </div>
        <div class="profile__name">{{name}}</div>
    </div>
</template>
<script>
export default {
  props: ['name']
}
</script>
<style src="./profile.scss" lang="scss" scoped></style>
