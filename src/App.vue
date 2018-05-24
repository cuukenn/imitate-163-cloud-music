<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <audio id="audio_play" :src="this.sourceUrl"
           style="display: none" loop></audio>
  </div>
</template>
<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    computed: mapGetters([
      'sourceUrl'
    ]),
    methods: {
      ...mapActions([
        'init'
      ])
    },
    mounted: function () {
      this.$store.dispatch('init', document.querySelector('audio'));
    }
  }
</script>
