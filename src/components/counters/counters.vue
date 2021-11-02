<template>
    <div class="counters">
        <div class="counter star">
            <button class="counters__btn">
                <img src="../../assets/star.svg" alt="">
                <p class="counters__btn-text">Star</p>
            </button>
            <div class="counters__value">{{stars}}</div>
        </div>
        <div class="counter fork">
             <button class="counters__btn">
                <img src="../../assets/repo-forked.svg" alt="">
                <p class="counters__btn-text">Fork</p>
            </button>
             <div class="counters__value">{{forks}}</div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['stars', 'forks']
}
</script>
<style src="./counters.scss" lang="scss" scoped></style>
