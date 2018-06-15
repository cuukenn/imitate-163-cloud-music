<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <audio id="audio_play" :src="this.sourceUrl" style="display: none" v-on:ended="playNext()"></audio>
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
      'sourceUrl',
      'playListData',
      'playIndex'
    ]),
    methods: {
      ...mapActions([
        'init',
        'changeplayIndex',
        'changeMusic'
      ]),
      playNext: function () {
        let index = (this.playIndex + 1) % this.playListData.length;
        this.$store.dispatch('changeMusic', this.playListData[index]);
        this.$store.dispatch('changeplayIndex', index);
        this.$store.dispatch('changeStatus', true);
      }
    },
    mounted: function () {
      this.$store.dispatch('init', document.querySelector('audio'));
    }
  }
</script>
