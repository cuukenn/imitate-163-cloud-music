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
    <panel header="官方版本" :list="list" :type="type"
           @on-img-error="onImgError"></panel>
  </div>
</template>

<i18n>
  Switch the type:
  zh-CN: 切换样式
  List of content with image:
  zh-CN: 图文组合列表
  More:
  zh-CN: 查看更多
</i18n>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
</style>
<script>
  import {Panel, Group, Radio, XHeader} from 'vux'

  export default {
    name: "RankingList",
    components: {
      Panel,
      Group,
      Radio,
      XHeader
    },
    methods: {
      onImgError(item, $event) {
        console.log(item, $event)
      }
    },
    data() {
      return {
        type: '5',
        list: [{
          src: '/static/image/slide-1.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          src: '/static/image/slide-1.jpg',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }]
      }
    }
  }
</script>
