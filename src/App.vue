<template>
  <div id="app">
    <div class="header-wrapper">
      <v-header :seller="seller" />
    </div>
    <div class="tab-wrapper">
      <v-tab />
    </div>
    <router-view/>
  </div>
</template>

<script>
import data from '@/assets/data.json'
import VHeader from '@/components/header/header.vue'
import VTab from '@/components/tab/tab.vue'

export default {
  name: 'app',
  components: {
    VHeader,
    VTab
  },
  data () {
    return {
      seller: data.seller
    }
  },
  mounted () {}
}
</script>

<style lang="stylus">
</style>
