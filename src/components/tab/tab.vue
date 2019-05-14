<template>
  <div class="tab border-1px">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/comments">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/shop">商家</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';

.tab
  display flex
  height 80px
  border-bottom-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex 1
    flex-center()
    font-size 28px
    line-height 28px
    color rgb(77, 85, 93)
</style>
