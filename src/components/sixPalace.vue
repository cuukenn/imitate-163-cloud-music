<template>
  <div style="margin-top: 10px;">
    <div style="margin-left: 5px"><strong>{{this.title}}></strong></div>
    <grid :cols="3" :col="2">
      <grid-item v-for="(item, index)  in this.list" :key="index" v-if="index<6">
        <one-place :imageUrl="item.picUrl" :description="item.name"
                   @click.native="showPlayList(index)"></one-place>
      </grid-item>
    </grid>
  </div>
</template>
<style lang="less">

</style>
<script>
  import {Grid, GridItem} from 'vux'
  import onePlace from '@/components/onePlace.vue'

  export default {
    components: {
      Grid,
      GridItem,
      onePlace
    },
    props: {
      title: {
        type: String
      },
      list: {
        type: Array
      }
    },
    methods: {
      showPlayList: function (index) {
        this.$router.push({name: 'playListPage', params: {list: this.list[index]}});
      }
    }
  }
</script>
