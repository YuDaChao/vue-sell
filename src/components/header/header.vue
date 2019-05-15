<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img class="logo" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand" />
          {{seller.name}}
        </div>
        <div class="description">{{seller.description}} / {{seller.deliveryTime}}分钟送达</div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]" />
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right" />
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"/>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right" />
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';

.header
  position relative
  background-color rgba(7, 17, 27, 0.5)
  .content-wrapper
    position relative
    padding 48px 24px 36px 48px
    display flex
    align-items center
    .avatar
      .logo
        width 128px
        height 128px
        border-radius 4px
    .content
      margin-left 32px
      .title
        font-size 32px
        color rgb(255, 255, 255)
        font-weight bold
        line-height 32px
        margin-left 12px
        margin 4px 0 16px
        .brand
          display inline-block
          width 60px
          height 36px
          vertical-align top
          bg-image('images/brand')
          background-size 60px 36px
          background-repeat no-repeat
      .description
        font-size 24px
        color rgb(255, 255, 255)
        font-weight 200
        line-height 24px
        margin-bottom 16px
      .supports
        margin-bottom 4px
        .text
          font-size 20px
          color rgb(255, 255, 255)
          font-weight 200
          line-height 24px
          vertical-align top
        .icon
          display inline-block
          width 24px
          height 24px
          margin-right 8px
          vertical-align top
          background-size 24px 24px
          background-repeat no-repeat
          &.decrease
            bg-image('images/decrease_1')
          &.discount
            bg-image('images/discount_1')
          &.guarantee
            bg-image('images/guarantee_1')
          &.invoice
            bg-image('images/invoice_1')
          &.special
            bg-image('images/special_1')
    .supports-count
      position absolute
      right 24px
      bottom 36px
      padding 14px 16px
      background-color rgba(0, 0, 0, 0.2)
      color rgb(255, 255, 255)
      border-radius 48px
      display flex
      align-items center
      .count
        font-size 20px
        font-weight 200
        line-height 24px
        margin-right 4px
      .icon-keyboard_arrow_right
        font-size 20px
  .bulletin-wrapper
    position relative
    height 56px
    line-height 56px
    padding 0 44px 0 24px
    display flex
    align-items center
    background-color rgba(7, 17, 27, 0.2)
    .bulletin-icon
      flex 0 0 44px
      width 44px
      height 24px
      display inline-block
      bg-image('images/bulletin')
      background-size 44px 24px
      background-repeat no-repeat
    .bulletin-text
      flex 1
      font-size 20px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      color rgb(255, 255, 255)
      line-height 28px
      margin 0 8px 0
    .icon-keyboard_arrow_right
      position absolute
      right 24px
      top 50%
      font-size 20px
      transform translateY(-50%)
      color rgb(255, 255, 255)
  .background
    position absolute
    left 0
    bottom 0
    width 100%
    height 100%
    filter blur(10px)
    z-index -1
</style>
