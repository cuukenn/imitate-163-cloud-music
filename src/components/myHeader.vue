<template>
  <div>
    <link rel="stylesheet" href="static/css/iconfont.css">
    <x-header style="background-color: red;">
      <x-icon slot="overwrite-left" type="navicon" size="35"
              style="fill:#fff;position:relative;top:-8px;left:-3px;" v-on:click="isShowMenu"></x-icon>
      <div slot="overwrite-title">
        <flexbox>
          <flexbox-item>
            <Tab>
              <tabbar-item show-dot style="background-color: red">
                <i v-on:click="showHeaderIndex(0)" slot="icon" class="iconfont icon-yinyue"></i>
              </tabbar-item>
              <tabbar-item show-dot style="background-color: red">
                <i v-on:click="showHeaderIndex(1)" slot="icon" class="iconfont icon-yinle"></i>
              </tabbar-item>
              <tabbar-item show-dot style="background-color: red">
                <i v-on:click="showHeaderIndex(2)" slot="icon" class="iconfont icon-bofang1"></i>
              </tabbar-item>
            </Tab>
          </flexbox-item>
        </flexbox>
      </div>
      <div slot="right" v-on:click="showSearchPage">
        <x-icon type="ios-search-strong" size="25" style="fill:#fff;position:relative;top:-5px;left:-3px;"></x-icon>
      </div>
    </x-header>
    <div v-transfer-dom>
      <popup v-model="show" position="left" width="80%">
        <div class="position-horizontal-demo">
          <menu-page></menu-page>
        </div>
      </popup>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '~vux/src/styles/close.less';

</style>
<script>
  import {
    XHeader,
    Tab,
    TransferDom,
    TabbarItem,
    Flexbox,
    FlexboxItem,
    Popup
  } from 'vux'
  import {mapActions} from 'vuex'
  import menuPage from '@/page/menuPage.vue'
  const headerRender = new Map();
  headerRender.set(0, '/index/myMusic');
  headerRender.set(1, '/index/musicGround/recommend');
  headerRender.set(2, '/index/videoGround');

  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader, TabbarItem, Flexbox, FlexboxItem, Tab, TransferDom, Popup,menuPage
    },
    data() {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        show: false
      }
    },
    methods: {
      ...mapActions([
        'changemenuPageIsShow'
      ]),
      showHeaderIndex: function (index) {
        this.$router.push(headerRender.get(index));
      },
      showSearchPage: function () {
        this.$router.push("/searchPage");
      },
      isShowMenu: function () {
        this.show = true
      }
    }
  }
</script>

<style>
</style>
