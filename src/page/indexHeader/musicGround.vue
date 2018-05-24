<template>
  <div>
    <tab bar-position="bottom" style="height: 20%">
      <tab-item selected  @on-item-click="onItemClick">推荐</tab-item>
      <tab-item @on-item-click="onItemClick">朋友</tab-item>
      <tab-item @on-item-click="onItemClick">电台</tab-item>
    </tab>
    <router-view style="height: 80%"></router-view>
  </div>
</template>
<script>
  import {Tab, TabItem} from 'vux'

  const rend = new Map();
  rend.set(0, '/musicGround/recommend');
  rend.set(1, '/musicGround/friend');
  rend.set(2, '/musicGround/radioStation');
  export default {
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        index: 0
      }
    },
    methods: {
      switchTabItem(index) {
        console.log('on-before-index-change', index)
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 500)
      },
      onItemClick(index) {
        this.$router.push('/index' + rend.get(index))
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
</style>
