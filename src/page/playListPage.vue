<template>
  <div>
    <link rel="stylesheet" href="../../static/css/iconfont.css">
    <view-box>
      <header class="header" slot="header">
        <x-header></x-header>
      </header>
      <div class="content">
        <div id="FM" style=" margin-left: 10% ; height: 150px;">
          <x-img default-src="/static/image/default.gif" :src="this.item.picUrl" id="FM-img" style="margin-top: 25px;height: 150px; width:40% ; float: left;background-size: contain ; background-repeat: no-repeat ;background-color: rgba(0,0,0,0.8);-webkit-filter:brightness(1);//兼容不同浏览器
-o-filter:brightness(0.4);
-moz-filter:brightness(0.4);
filter:brightness(0.4);">
          </x-img>
          <div id="FM-zhuanji" style="height: 150px; width:56%;float: left;margin-top: 25px;">
            <div style="font-size: 1.6em;color: white;width: 100%">
              <p v-text="this.item.name  ||''"></p>
              <x-img style="margin-top:20px;float: left; width:auto;height:3em"
                     default-src="/static/image/default.gif" :src="this.playList.creator.avatarUrl"/>
              <p style="margin-top:20px;float: left;font-size: 0.6em;height:4em;line-height: 4em;text-align: center"
                 v-text="this.playList.creator.nickname"></p>
            </div>
          </div>
        </div>
        <flexbox style="margin-top: 10px">
          <flexbox-item>
            <div class="fontIcon">
              <div
                style="float: left; height: 70px; width: 100%;margin-left: 5%;">
                <div style="height: 3rem; width: 100%"><i
                  class="iconfont icon-pinglun"></i></div>
                <div>评论</div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="fontIcon">
              <div
                style="float: left; height: 70px; width: 100%;margin-left: 5%;">
                <div style="height: 3rem; width: 100%">
                  <i class="iconfont icon-iconfontzhizuobiaozhun20"></i>
                </div>
                <div>评论</div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="fontIcon">
              <div
                style="float: left; height: 70px; width: 100%;margin-left: 5%;">
                <div style="height: 3rem; width: 100%">
                  <i class="iconfont icon-download"/>
                </div>
                <div>评论</div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="fontIcon">
              <div
                style="float: left; height: 70px; width: 100%;margin-left: 5%;">
                <div style="height: 3rem; width: 100%">
                  <i
                    class="iconfont icon-duoxuankuang1"/>
                </div>
                <div>评论</div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
        <Group>
          <cell
            style="width:100%;border-top: 1px solid white; border-top-left-radius:0.8rem;border-top-right-radius:0.8rem;"
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
              <div style="float: left; width: 10%; ">xxxx</div>
              <div style="float: left; width: 10%; ">cccc</div>
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
        playList: {
          creator: {
            avatarUrl: "",
            name: ""
          }
        },
        item: {}
      }
    },
    computed: {
      ...mapGetters([
        'playListData'
      ])
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.item = vm.$route.params.list;
        vm.getData();
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
      getData: function () {
        this.$vux.loading.show({
          text: 'Loading'
        })
        let id = this.item.id || 0;
        this.$ajax.get('http://localhost:3000/playlist/detail', {
          params: {
            id: id
          }
        }).then((rs) => {
          this.playList = rs.data.playlist || {};
          this.$vux.loading.hide();
        }).catch(err => {
          this.$vux.toast.show({
            text: '网络出错',
            type: 'warn',
          })
          this.$vux.loading.hide();
        })
      },
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
