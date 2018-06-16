<template>
  <div class="content_selectMusicFade">
    <link rel="stylesheet" href="../../static/css/iconfont.css">
    <flexbox>
      <flexbox-item :span="3/10">
        <i class="iconfont icon-xunhuanbofang" style="padding-left: 10%"></i>
        循环播放
      </flexbox-item>
      <flexbox-item :span="3/10"></flexbox-item>
      <flexbox-item :span="3/10">
        收藏全部
      </flexbox-item>
      <flexbox-item :span="1/10"></flexbox-item>
    </flexbox>
    <flexbox orient="vertical">
      <flexbox-item v-for="(item,indexLocal) in dataList" :key="indexLocal"
                    style="padding-left: 45px;border-bottom: 1px solid #D1D7BD">
        <div v-on:click.stop="selectItemClick(indexLocal)" :class="{selected:indexLocal==playIndex}">
          <p>{{item.name}}-{{item.author}}</p>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>
<style lang="less">
  .content_selectMusicFade {
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    font-size: 1.4rem;
  }

  .hid {
    display: none;
  }

  .selected {
    color: red;
  }
</style>
<script>
  import {Flexbox, FlexboxItem} from 'vux'
  import {mapGetters, mapActions, mapState} from 'vuex'

  export default {
    name: 'selectMusicFade',
    components: {
      Flexbox, FlexboxItem
    },
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({
        dataList: 'playListData',
        show: 'playListIsShow',
        playIndex: 'playIndex'
      })
      // ,
      // ...mapState({
      //   dataList: state => state.dataList
      // })
    },
    methods: {
      ...mapActions([
        'changeMusic',
        'changeStatus',
        'changeplayListIsShow',
        'changeplayIndex'
      ]),
      close: function () {
        this.$store.dispatch('changeplayListIsShow', false);
      },
      selectItemClick: function (index) {
        this.$store.dispatch('changeMusic', this.dataList[index % this.dataList.length]);
        this.$store.dispatch('changeplayIndex', index);
        this.$store.dispatch('changeStatus', true);
      }
    }
  }
</script>
