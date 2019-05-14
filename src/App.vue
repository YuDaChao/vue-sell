<template>
  <div id="app">
    <div class="header-wrapper">
      <v-header />
    </div>
    <div class="tab-wrapper">
      <v-tab />
    </div>
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/header/header.vue'
import VTab from '@/components/tab/tab.vue'

export default {
  name: 'app',
  components: {
    VHeader,
    VTab
  }
}
</script>

<style lang="stylus">
</style>
