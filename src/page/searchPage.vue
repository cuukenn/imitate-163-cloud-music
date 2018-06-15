<template>
  <div>
    <view-box>
      <Search :auto-fixed="true" @on-change="search()" v-model="value" :results="results"
              @on-result-click="itemSelect()">
        <div slot="left" style="height: 100%;text-align: center;line-height: 28px;"
             v-on:click="$router.back(-1);">返回
        </div>
      </Search>
      <router-view></router-view>
      <footer slot="bottom">
        <playcontrol></playcontrol>
      </footer>
    </view-box>
  </div>

</template>
<style lang="less" scoped>
  footer {
    position: fixed;
    width: 100%;
    height: 5rem;
    bottom: 0px;
    left: 0px;
  }
</style>
<script>
  import {ViewBox, Flexbox, FlexboxItem, Tabbar, XHeader, Search} from 'vux'
  import playcontrol from '@/components/playcontrol.vue'

  export default {
    name: 'searchPage',
    components: {
      ViewBox, Flexbox, FlexboxItem, Tabbar, XHeader, Search, playcontrol
    },
    data: function () {
      return {
        value: "",
        results: []
      }
    },
    methods: {
      search: function () {
        this.$ajax.get('http://localhost:3000/search', {params: {keywords: this.value, limit: 10}}).then((rs) => {
          this.results = [];
          if (rs.data.result == {} || rs.data.result == undefined) return;
          let songs = rs.data.result.songs;
          songs.forEach((item, index, input) => {
            item.title = item.name;
            this.results.push(item);
          })
        })
      },
      itemSelect: function (item) {
        this.$router.replace({path: '/searchPage/SearchResult', query: {search: this.value}});
      }
    }
  }
</script>
