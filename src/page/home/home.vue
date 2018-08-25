<template>
  <div>
    <head-top signin='home'>
      <span slot='logo' signin='home' class="head_logo" @click="reload"></span>
    </head-top>
    <div>图片list</div>
  </div>
</template>
<script>
import {setCookie} from '@/config/util.js'
import HeadTop from '@/page/head/HeadTop'
export default {
  data () {
    return {
    }
  },
  components: {
    HeadTop
  },
  computed: {},
  methods: {
    reload () {
      window.location.reload()
    }
  }
}
</script>
<style lang="scss">
@import '../../style/mixin.scss';
.head_logo{
  @include ct;
  @include wh(6rem, 100%);
  @include backimg('/static/img/94club.png')
}
</style>
