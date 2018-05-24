<template>
  <div>
    <div style="height:100%;">

      <view-box ref="viewBox">

        <header slot="header">
          <myheader></myheader>
        </header>
        <router-view></router-view>
        <footer slot="bottom">
          <playcontrol></playcontrol>
        </footer>
      </view-box>
    </div>
  </div>
</template>
<style lang="less" scoped>
  * {
    padding: 0;
    margin: 0;
    border: none;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  footer {
    position: fixed;
    width: 100%;
    height: 48px;
    bottom: 0px;
    left: 0px;
  }
</style>
<script>
  import {Tabbar, TabbarItem, ViewBox} from 'vux'
  import myheader from '@/components/myheader.vue'
  import playcontrol from '@/components/playcontrol.vue'
  import {mapActions} from 'vuex'
  import menuPage from '@/page/menuPage.vue'
  import selectMusicFade from '@/components/selectMusicFade.vue'


  export default {
    components: {
      myheader, playcontrol, ViewBox, menuPage,selectMusicFade
    },
    mounted: function () {
      let height = window.innerHeight - document.querySelector('header').offsetHeight - document.querySelector('footer').offsetHeight;
      this.$store.dispatch('changerecommendHeight', height);
    },
    methods: {
      ...mapActions([
        'changerecommendHeight'
      ])
    }
  }
</script>
