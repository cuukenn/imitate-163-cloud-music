<template>
  <div>
    <x-header>
      <i></i>
    </x-header>
  </div>
</template>
<style lang="less">

</style>
<script>
  import {XHeader,Tab,TabItem,Group,Cell} from 'vux';
  export default {
    name:'myMessage',
    components:{
      XHeader,
      Tab,TabItem,
      Group,Cell
    },
    props:{
      title:{
        type:String
      }
    }
  }
</script>
