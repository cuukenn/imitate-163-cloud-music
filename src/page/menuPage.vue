<template>
  <div class="menu">
    <link rel="stylesheet" href="../../static/css/iconfont.css">
    <view-box>
      <div slot="header" style="background-color: slategray;height: 180px">
        <div v-show="!this.isLogin" style="position: relative;height: 100%">
          <div style="font-size: 1.6em;">
            <p>登陆网易云音乐</p>
            <p>20k高音质无限下载，手机端多同步</p>
          </div>
          <div style="bottom: 3rem;position: absolute;left: 38%;bottom: 4%">
            <x-button text="立即登陆" action-type="button" :mini="true" link="/menu/login"></x-button>
          </div>
        </div>
      </div>
      <div>
        <Group style="font-size: 1.6rem;">
          <cell v-for="(item,index) in this.list" v-bind:key="index" :title="item.title" is-link
                primary="content" class="fontSize" :link="item.link">
            <i slot="icon" class="iconfont" :class="[item.class]"></i>
          </cell>
        </Group>
      </div>
      <Tabbar slot="bottom" style="position: fixed;width: 80%">
        <Flexbox style="font-size: 1.6rem">
          <FlexboxItem>
            <div>
              <i class="iconfont icon-yejianmoshi"></i>
              夜间模式
            </div>
          </FlexboxItem>
          <FlexboxItem>
            <div>
              <i class="iconfont icon-shezhi"></i>
              设置
            </div>
          </FlexboxItem>
          <FlexboxItem>
            <div>
              <i class="iconfont icon-icon"></i>
              退出
            </div>
          </FlexboxItem>
        </Flexbox>
      </Tabbar>
    </view-box>
  </div>
</template>
<style lang="less" scoped>
  .menu {
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
  }

  .fontSize {
    font-size: 1.4rem;
  }

  .hid {
    display: none;
  }

  .borderTop {
    border-top: 0.2rem solid rgba(187, 187, 187, 0.8);
  }
</style>
<script>
  import {
    ViewBox, Flexbox, FlexboxItem, Tabbar, XButton, TabbarItem,
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  } from 'vux'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'menuPage',
    components: {
      ViewBox, Flexbox, FlexboxItem, Tabbar, XButton, TabbarItem, Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge
    },
    data: function () {
      return {
        list: [
          {
            title: "我的消息",
            class: 'icon-xiaoxi',
            borderTop: false,
            link: '/menu/myMessage'
          },
          {
            title: "VIP会员",
            class: 'icon-huiyuan',
            borderTop: false,
            link: '/menu/VIP'
          },
          {
            title: "商城",
            class: 'icon-mall',
            borderTop: false,
            link: '/menu/shop'
          },
          {
            title: "在线听歌免流量",
            class: 'icon-gongjuxiang',
            borderTop: false,
            link: '/menu/freeFlow'
          },
          {
            title: "我的好友",
            class: 'icon-ren',
            borderTop: true,
            link: '/menu/myFriend'
          },
          {
            title: "附近的人",
            class: 'icon-location',
            borderTop: false,
            link: '/menu/neiborhood'
          },
          {
            title: "个性换肤",
            class: 'icon-yifu',
            borderTop: true,
            link: '/menu/skinStyle'
          },
          {
            title: "听歌拾曲",
            class: 'icon-icon--',
            borderTop: false,
            link: '/menu/voiceToMusic'
          },
          {
            title: "定时停止播放",
            class: 'icon-erji-dingshirenwu',
            borderTop: false,
            link: '/menu/timing'
          },
          {
            title: "扫一扫",
            class: 'icon-saoyisao',
            borderTop: false,
            link: '/menu/timing'
          }
        ],
      }
    }
    ,
    computed: {
      ...
        mapGetters(['isLogin'])
    },
    methods: {
      ...
        mapActions([]),
      clickMenuItem: function () {
        this.$vux.toast.show({
          text: '未完成',
          type: 'warn',
        })
      }
    }
  }
</script>
