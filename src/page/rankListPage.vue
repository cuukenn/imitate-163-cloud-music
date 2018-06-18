<template>
  <div>
    <link rel="stylesheet" href="../../static/css/iconfont.css">
    <view-box>
      <header class="header" slot="header">
        <x-header>
        </x-header>
      </header>
      <div class="content">
        <x-img :src="this.imgUrl" style="height: 28em;width: 100%;"></x-img>
          <!--<flexbox style="margin-top: 10px">-->
            <!--<flexbox-item>-->
              <!--<div class="fontIcon">-->
                <!--<div-->
                  <!--style="float: left; height: 70px; width: 100%;margin-left: 5%;">-->
                  <!--<div style="height: 3rem; width: 100%"><i-->
                    <!--class="iconfont icon-pinglun"></i></div>-->
                  <!--<div>评论</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</flexbox-item>-->
            <!--<flexbox-item>-->
              <!--<div class="fontIcon">-->
                <!--<div-->
                  <!--style="float: left; height: 70px; width: 100%;margin-left: 5%;">-->
                  <!--<div style="height: 3rem; width: 100%">-->
                    <!--<i class="iconfont icon-iconfontzhizuobiaozhun20"></i>-->
                  <!--</div>-->
                  <!--<div>评论</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</flexbox-item>-->
            <!--<flexbox-item>-->
              <!--<div class="fontIcon">-->
                <!--<div-->
                  <!--style="float: left; height: 70px; width: 100%;margin-left: 5%;">-->
                  <!--<div style="height: 3rem; width: 100%">-->
                    <!--<i class="iconfont icon-download"/>-->
                  <!--</div>-->
                  <!--<div>评论</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</flexbox-item>-->
            <!--<flexbox-item>-->
              <!--<div class="fontIcon">-->
                <!--<div-->
                  <!--style="float: left; height: 70px; width: 100%;margin-left: 5%;">-->
                  <!--<div style="height: 3rem; width: 100%">-->
                    <!--<i-->
                      <!--class="iconfont icon-duoxuankuang1"/>-->
                  <!--</div>-->
                  <!--<div>评论</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</flexbox-item>-->
          <!--</flexbox>-->

        <Group gutter="0">
          <cell
            style="width:100%;border-top-left-radius:0.8rem;border-top-right-radius:0.8rem;"
            title="播放全部">
            <i slot="icon" class="iconfont icon-bofang1"></i>
          </cell>
          <cell-box v-for="(item,index) in this.playList.tracks" :key="index">
            <div id="LB-1" style="height:4rem;width: 100%;" v-on:click="selectList(index)">
              <div style="line-height: 50px;width: 10%; text-indent: 10px;float: left;">{{index+1}}</div>
              <div style="width: 70%;float: left;">
                <div
                  style="float: left; width: 100%; height: 3rem; line-height: 35px;text-indent: 20px;">
                  {{ item.name}}
                </div>
                <div
                  style="float: left; width: 100%;height: 1rem;text-indent: 20px;font-size: 10px;">
                  {{item.ar[0].name}}
                </div>
              </div>
              <div style="float: left; width: 10%; "></div>
              <div style="float: left; width: 10%; "></div>
            </div>
          </cell-box>
        </Group>

      </div>
      <footer slot="bottom">
        <playcontrol></playcontrol>
      </footer>
    </view-box>
  </div>
</template>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';

  .listDesc {
    width: 100%;
    height: 15rem;
    background-color: red;
  }

  .listDescImg {
    width: 40%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    background-color: yellow;
  }

  .listDescImg > img {
    width: 100%;
    height: auto;
  }

  .content {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .listDescContent {
    width: 60%;
    height: 100%;
    float: left;
    box-sizing: border-box;
  }

  .listDescContent > div > img {
    width: 10%;
    height: auto;
    float: left;
  }

  .fontIcon {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
  }

  footer {
    position: fixed;
    width: 100%;
    height: 5rem;
    bottom: 0px;
    left: 0px;
  }
</style>
<script>
  import {ViewBox, XHeader, Flexbox, FlexboxItem, Group, CellBox, Cell, XImg} from 'vux'
  import playcontrol from '@/components/playcontrol.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'playlistPage',
    components: {
      ViewBox,
      XHeader,
      Flexbox, FlexboxItem,
      Group, CellBox, Cell,
      XImg,
      playcontrol
    },
    data: function () {
      return {
        playList: {},
        imgUrl:''
      }
    },
    computed: {
      ...mapGetters([
        'playListData'
      ])
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.playList = vm.$route.params.playList;
        vm.imgUrl = vm.$route.params.imgUrl;
      })
    },
    beforeRouteLeave(to, from, next) {
      this.$vux.loading.hide();
      next();
    },
    methods: {
      ...mapActions([
        'changeplayListData',
        'changeMusic',
        'changeplayIndex',
        'changeStatus',
        'addMusic'
      ]),
      selectList: function (index) {
        let musicList = [];
        this.playList.tracks.forEach((item, index, value) => {
          let obj = {};
          obj.name = item.name;
          obj.author = item.ar[0].name;
          obj.imageUrl = item.al.picUrl;
          obj.url = "";
          obj.id = item.id;
          musicList.push(obj);
        });
        this.$store.dispatch('changeplayListData', musicList);//更改正在播发列表
        let music = musicList[index];
        this.$store.dispatch('changeMusic', music);//分发
        this.$store.dispatch('changeplayIndex', index);//添加到播放列表
        this.$store.dispatch('changeStatus', true);//开始播放
      }
    }
  }
</script>
