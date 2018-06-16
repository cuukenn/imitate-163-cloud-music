<template>
  <div>
    <view-box>
      <tab bar-position="top">
        <tab-item selected @on-item-click="onItemClick">单曲</tab-item>
        <tab-item @on-item-click="onItemClick">视频</tab-item>
        <tab-item @on-item-click="onItemClick">歌手</tab-item>
        <tab-item @on-item-click="onItemClick">专辑</tab-item>
      </tab>
      <loading v-show="isShow"></loading>
      <Group>
        <cell
          style="width:100%;border-top: 1px solid white; border-top-left-radius:0.8rem;border-top-right-radius:0.8rem;"
          title="播放全部">
          <i slot="icon" class="iconfont icon-bofang1"></i>
        </cell>
        <cell-box v-for="(item,index) in this.dataList" :key="index">
          <div id="LB-1" style="height:4rem;width: 100%;" v-on:click="addToPlay(index)">
            <div style="line-height: 50px;width: 10%; text-indent: 10px;float: left;">{{index+1}}</div>
            <div style="width: 70%;float: left;">
              <div
                style="float: left; width: 100%; height: 3rem; line-height: 35px;text-indent: 20px;">
                {{item.name}}
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

  footer {
    position: fixed;
    width: 100%;
    height: 5rem;
    bottom: 0px;
    left: 0px;
  }
</style>
<script>
  import {
    ViewBox, Tab, TabItem, Group, Cell, CellBox, Loading
  } from 'vux'
  import playcontrol from '@/components/playcontrol.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'SearchResult',
    components: {
      ViewBox,
      playcontrol,
      Tab,
      TabItem,
      Group, Cell, CellBox, Loading
    },
    data: function () {
      return {
        searchType: 1,
        dataList: [],
        value: '',
        isShow: false
      }
    },
    computed: {
      ...mapGetters(
        [
          'playListData'
        ])
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        this.onItemClick();
      })
    },
    created: function () {
      this.value = "";
    }
    ,
    mounted: function () {
      this.onItemClick();
    }
    ,
    methods: {
      ...
        mapActions[
          'changeMusic',
            'changeStatus',
            'addMusic',
            'changeplayIndex'
          ],
      onItemClick:

        function (index) {
          this.value = this.$route.query.search;
          switch (index) {
            case 0:
              this.searchType = 1;
              break;
            case 1:
              this.searchType = 1006;
              break;
            case 2:
              this.searchType = 1000;
              break;
            case 3:
              this.searchType = 100;
              break;
          }
          this.search();
        }

      ,
      search: function () {
        this.isShow = true;
        if (this.value === "") return
        this.$ajax.get('http://localhost:3000/search', {
          params: {
            keywords: this.value,
            type: this.searchType
          }
        }).then((rs) => {
          this.dataList = [];
          if (rs.data.result == {} || rs.data.result == undefined) return;
          let obj = rs.data.result;
          for (let key in  obj) {
            if (obj[key] instanceof Object) {
              this.dataList = obj[key];
              console.log(JSON.stringify(obj[key]))
            }
          }
          this.isShow = false;
        }).catch(err => {
          this.$vux.toast.show({
            text: '网络出错',
            type: 'warn',
          })
          this.$vux.loading.hide();
        })
      }
      ,
      addToPlay: function (index) {
        this.isShow = true;
        let id = this.dataList[index].id;
        let music = new Object();
        this.$ajax.get('http://localhost:3000/music/url', {params: {id: id}})
          .then((rs) => {
            music.url = rs.data.data[0].url;
            music.author = this.dataList[index].artists[0].name;
            music.name = this.dataList[index].name;
            music.imageUrl = this.dataList[index].artists[0].img1v1Url;
            //新建当前播放歌曲
            this.$store.dispatch('changeMusic', music);//分发
            this.$store.dispatch('addMusic', music);//添加到播放列表
            this.$store.dispatch('changeplayIndex', this.playListData.length - 1);//添加到播放列表
            this.$store.dispatch('changeStatus', true);//开始播放

            this.isShow = false;
          });

      }
    }
  }
</script>

