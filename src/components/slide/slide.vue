<template>
    <div class="slide">
        <div class="slide__header">
            <xProgress />
            <div class="slide__user">
                <user />
            </div>
        </div>
        <div class="slide__content">
            <img class="slide__img" src="https://picsum.photos/200" alt="">
            <p>The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
        </div>
        <div class="slide__footer">
            <xButton textButton="Follow" />
        </div>
    </div>
</template>
<script>
import { xProgress } from '../progress'
import { xButton } from '../button'
import { user } from '../user'
export default {
  components: { xProgress, xButton, user }
}
</script>
<style src="./slide.scss" lang="scss" scoped></style>
