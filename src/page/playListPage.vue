<template>
  <div>
    <link rel="stylesheet" href="../../static/css/iconfont.css">
    <view-box>
      <header class="header" slot="header">
        <x-header></x-header>
      </header>
      <div class="content">
        <div id="FM" style=" margin-left: 10% ; height: 150px;">
          <div id="FM-img" style="margin-top: 25px;height: 150px; width:40% ; float: left;background-image: url(/static/image/music-1.jpg);  background-size: contain ; background-repeat: no-repeat ;background-color: rgba(0,0,0,0.8);-webkit-filter:brightness(1);//兼容不同浏览器
-o-filter:brightness(0.4);
-moz-filter:brightness(0.4);
filter:brightness(0.4);">
          </div>
          <div id="FM-zhuanji" style="height: 150px; width:50%;float: left;">
            <div id="ZJ-name"
                 style=" height: 40px; width: 100%;font-family: '楷体';line-height: 40px; font-size: 15px;text-indent: 30px; ">
            </div>
            <div id="ZJ-kongbai" style=" height: 20px; width: 100%;">
            </div>
            <div id="username"
                 style=" height: 40px; width: 100%; font-family: '楷体';line-height: 40px; font-size: 15px;text-indent: 30px;">
              <div style="height: 40px; width: 20%; margin-left: 10%; float: left;"></div>
              <div
                style=" height: 40px; width: 70%;font-family: '楷体';float: left; line-height: 40px; font-size: 15px;text-indent: 30px;">
                风行碧野
              </div>
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
          <cell style="width:100%;border-top: 1px solid white; border-top-left-radius:0.8rem;border-top-right-radius:0.8rem;"
          title="播放全部">
            <i slot="icon" class="iconfont icon-bofang1"></i>
          </cell>
          <cell-box v-for="i in 19" :key="i">
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
  import {ViewBox, XHeader, Flexbox, FlexboxItem, Group, CellBox,Cell} from 'vux'
  import playcontrol from '@/components/playcontrol.vue'

  export default {
    name: 'playlistPage',
    components: {
      ViewBox,
      XHeader,
      Flexbox, FlexboxItem,
      Group, CellBox,Cell,
      playcontrol
    }
  }
</script>
