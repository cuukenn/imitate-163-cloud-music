<template>
  <div>
    <header class="header" slot="header">
      <x-header>
        <div slot="overwrite-left" v-on:click="$router.back(-1)">
          <x-icon icon-success-color="white" type="ios-arrow-left" size="1em"></x-icon>
          <div style=" position: absolute;width: 60px;height: 30px;top: 0px;left: 18px;">排行榜</div>
        </div>
      </x-header>
    </header>
    <group title="官方榜">
      <cell-box style="height: 6em;margin-top: 1em" v-for="(item,index) in this.data.imgList"
                :key="index"
                v-if="data.dataList.length>0"
                :link="{name: 'rankListPage',params: {playList:data.dataList[item.index].playlist,imgUrl:item.src}}">
        <flexbox-item :span="1/3">
          <x-img :src="item.src"></x-img>
        </flexbox-item>
        <flexbox-item :span="2/3">
          <flexbox orient="vertical"
                   v-for="(musicItem,musicIndex) in data.dataList[item.index].playlist.tracks "
                   :key="musicIndex"
                   v-if="musicIndex<3">
            <flexbox-item>
              <p style="font-size: 0.8em;width: 100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">
                {{musicIndex+1}}{{musicItem.name}}
              </p>
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </cell-box>
    </group>
  </div>
</template>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
</style>
<script>
  import {Group, Radio, XHeader, CellBox, Flexbox, FlexboxItem, XImg} from 'vux'

  export default {
    name: "RankingList",
    components: {
      Group, CellBox,
      Radio,
      XHeader,
      Flexbox, FlexboxItem,
      XImg
    },
    data() {
      return {
        data: {
          dataList: [],
          imgList: [
            {
              id: 3,
              src: './static/image/rankingList-1.jpg',
              index: 0
            },
            {
              id: 0,
              src: './static/image/rankingList-2.jpg',
              index: 0
            },
            {
              id: 2,
              src: './static/image/rankingList-3.jpg',
              index: 0
            },
            {
              id: 1,
              src: './static/image/rankingList-4.jpg',
              index: 0
            }
          ]
        }
      }
    },
    mounted: function () {
      this.getData();
    },
    methods: {
      onImgError(item, $event) {
        console.log(item, $event)
      },
      getData: function () {
        while (this.data.dataList.length > 0) this.data.dataList.pop();
        this.data.imgList.forEach((item, index, value) => {
          this.$ajax.get('http://localhost:3000/top/list', {params: {idx: item.id}})
            .then((rs) => {
              this.data.dataList.push(rs.data);
              item.index = this.data.dataList.length - 1;
            })
        })
      }
    }
  }
</script>
