<template>
  <div style="margin-top: 10px;">
    <div style="margin-left: 5px"><strong>{{this.title}}></strong></div>
    <grid :cols="3" :col="2">
      <grid-item v-for="(item, index)  in this.list" :key="index">
        <one-place :imageUrl="item.imageUrl" :description="item.description"></one-place>
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
      title:{
        type:String
      },
      list:{
        type:Array
      }
    }
  }
</script>
