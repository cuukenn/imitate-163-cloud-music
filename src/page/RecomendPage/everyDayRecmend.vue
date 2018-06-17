<template>
  <div>
    <link rel="stylesheet" href="../../static/css/iconfont.css">
    <view-box>
      <header class="header" slot="header">
        <x-header>
          <div slot="overwrite-left" v-on:click="$router.back(-1)">
            <x-icon icon-success-color="white" type="ios-arrow-left" size="1em"></x-icon>
            <div style=" position: absolute;width: 60px;height: 30px;top: 0px;left: 18px;">每日推荐</div>
          </div>
        </x-header>
      </header>
      <x-img default-src="../../../static/image/slide-1.jpg"></x-img>
      <Group>
        <cell
          style="width:100%;border-top: 1px solid white; border-top-left-radius:0.8rem;border-top-right-radius:0.8rem;"
          title="播放全部">
          <i slot="icon" class="iconfont icon-bofang1"></i>
        </cell>
        <cell-box v-for="(item,index) in this.playList" :key="index">
          <div id="LB-1" style="height:4rem;width: 100%;" v-on:click="selectList(index)">
            <div style="line-height: 50px;width: 10%; text-indent: 10px;float: left;">{{index+1}}</div>
            <div style="width: 70%;float: left;">
              <div
                style="float: left; width: 100%; height: 3rem; line-height: 35px;text-indent: 20px;">
                {{ item.name}}
              </div>
              <div
                style="float: left; width: 100%;height: 1rem;text-indent: 20px;font-size: 10px;">
                {{item.artists[0].name}}
              </div>
            </div>
            <div style="float: left; width: 10%; ">xxxx</div>
            <div style="float: left; width: 10%; ">cccc</div>
          </div>
        </cell-box>
      </Group>
      <footer slot="bottom">
        <playcontrol></playcontrol>
      </footer>
    </view-box>
  </div>
</template>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';

  .vux-x-icon {
    fill: white;
  }

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
  import {mapActions, mapGetters} from 'vuex'
  import playcontrol from '@/components/playcontrol.vue'

  export default {
    name: 'everyDayRecmend',
    components: {
      ViewBox,
      XHeader,
      Flexbox, FlexboxItem,
      Group, CellBox, Cell,
      playcontrol,
      XImg
    },
    data: function () {
      return {
        playList: []
      }
    },
    computed: {
      ...mapGetters([
        'playListData'
      ])
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
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
        this.$ajax.get('http://localhost:3000/recommend/songs').then((rs) => {
          this.playList = rs.data.recommend || {};
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
        this.playList.forEach((item, index, value) => {
          let obj = {};
          obj.name = item.name;
          obj.author = item.artists[0].name;
          obj.imageUrl = item.album.picUrl;
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

