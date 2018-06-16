<template>
  <div>
    <x-header>
    </x-header>
    <tab bar-position="top">
      <tab-item selected @on-item-click="">私信</tab-item>
      <tab-item @on-item-click="">评论</tab-item>
      <tab-item @on-item-click="">@我</tab-item>
      <tab-item @on-item-click="">通知</tab-item>
    </tab>
  </div>
</template>
<style lang="less">

</style>
<script>
  import {XHeader, Tab, TabItem, Group, Cell} from 'vux';

  export default {
    name: 'myMessage',
    components: {
      XHeader,
      Tab, TabItem,
      Group, Cell
    },
    props: {
      title: {
        type: String
      }
    }
  }
</script>
