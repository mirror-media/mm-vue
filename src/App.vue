<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
body {
    background-color: #EFEFEF;
}
</style>

<script>
import Vue from 'vue'
import router from './router'
import store from './store'
import Meta from 'vue-meta'
import ssrMixin from './libs/ssrMixin'

Vue.use(Meta)
Vue.mixin(ssrMixin)

export default {
  router,
  store,
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s - 鏡傳媒 MirrorMedia'
  }
}
</script>
