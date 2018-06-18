<template>
  <div style="background-color: whitesmoke">
    <link rel="stylesheet" href="static/css/iconfont.css">
    <flexbox :gutter="0">
      <flexbox-item :span="3/16">
        <div style="box-sizing: border-box;">
          <img :src="this.music.imageUrl"
               style="height:48px;width:100%;border: 1px whitesmoke solid" v-on:click="this.showPlayIndex"/>
        </div>
      </flexbox-item>
      <flexbox-item :span="6/16">
        <p v-on:click="this.showPlayIndex" style="font-size: 10px">
          <strong>{{this.music.name}}-
            <small>{{this.music.author}}</small>
          </strong>
        </p>
      </flexbox-item>
      <flexbox-item :span="3/16">
        <div v-on:click="this.showPlayIndex" style="width: 100%">&nbsp;</div>
      </flexbox-item>
      <flexbox-item :span="2/16">
        <div v-on:click="this.changePlayStatus">
          <i class="iconfont icon-bofang" style="font-size:25px" :class="{hidden:!this.isPlay}"></i>
          <i class="iconfont icon-bofang1" style="font-size:25px" :class="{hidden:this.isPlay}"></i>
        </div>

      </flexbox-item>
      <flexbox-item :span="2/16">
        <x-icon type="navicon" size="35" style="fill:black;position:relative;top:5px;left:-3px;"
                v-on:click="this.click"></x-icon>
      </flexbox-item>
    </flexbox>
    <div v-transfer-dom>
      <popup v-model="show" position="bottom" max-height="40%" height="40%"
             style="border-top-right-radius: 15px;border-top-left-radius: 15px;">
        <select-music-fade></select-music-fade>
      </popup>
    </div>
    <br/>
  </div>
</template>
<style lang="less">
  @import '~vux/src/styles/close.less';
  @import '~vux/src/styles/1px.less';

  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }

  .hidden {
    display: none;
  }
</style>
<script>
  import {
    Flexbox, FlexboxItem, Divider, XImg,
    Tabbar, TabbarItem, Group, Cell, Tab,
    TransferDom, Popup, XButton
  } from 'vux';
  import {mapGetters, mapActions} from 'vuex'
  import selectMusicFade from '@/components/selectMusicFade.vue'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Flexbox,
      FlexboxItem,
      Divider, XImg,
      Tabbar, TabbarItem, Group, Cell, Tab,
      TransferDom, Popup, XButton, selectMusicFade
    },
    data: function () {
      return {
        show: false
      }
    },
    computed: {
      ...mapGetters([
        'isPlay',
        'music'
      ])
    },
    methods: {
      ...mapActions([
        'changeStatus',
        'changeplayListIsShow'
      ]),
      showPlayIndex: function () {
        this.$router.push({name: 'defaultContent', params: {isPlay: this.isPlay}})
      },
      changePlayStatus: function () {
        this.$store.dispatch('changeStatus', !this.isPlay);
      },
      click: function () {
        // this.$store.dispatch('changeplayListIsShow', true);
        this.show = true;
      }
    }
  }
</script>
