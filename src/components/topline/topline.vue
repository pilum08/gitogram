<template>
    <div class="c-topline">
        <div class="x-container">
            <div class="headline">
                <slot name="headline">
                    <div class="headline__wrapper">
                    <logo />
                    <xMenu />
                    </div>
                    </slot>
            </div>
            <div class="content">
                 <slot name="content">
                     <stories />
                 </slot>
            </div>
        </div>
    </div>
</template>
<script>
import { xMenu } from '../xMenu'
import { logo } from '../logo'
import { stories } from '../stories'

export default {
  name: 'topline',
  components: {
    logo,
    xMenu,
    stories

  }

}
</script>
<style lang="scss" src="./topline.scss" scoped></style>
