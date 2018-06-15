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
        <cell-box v-for="i in 4" :key="i">
          <div id="LB-1" style="height:4rem;width: 100%;">
            <div style="line-height: 50px;width: 10%; text-indent: 10px;float: left;">{{i}}</div>
            <div style="width: 70%;float: left;">
              <div
                style="float: left; width: 100%; height: 3rem; line-height: 35px;text-indent: 20px;">
                神器白发
              </div>
              <div
                style="float: left; width: 100%;height: 1rem;text-indent: 20px;font-size: 10px;">
                西瓜MM
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
    }
  }
</script>

