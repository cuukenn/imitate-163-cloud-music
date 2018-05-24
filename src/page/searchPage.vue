<template>
  <div>
    <view-box>
      <!--<flexbox>-->
        <!--<flexbox-item :span="1/8">&leftarrow;</flexbox-item>-->
        <!--<flexbox-item :span="7/8">-->
          <!--<Search auto-fixed="true"></Search>-->
        <!--</flexbox-item>-->
      <!--</flexbox>-->
        <!--<x-header left-options.showBack="true">-->
            <Search :auto-fixed="true"></Search>
        <!--</x-header>-->
    </view-box>
  </div>

</template>
<style lang="less" scoped>

</style>
<script>
  import {ViewBox,Flexbox ,FlexboxItem,Tabbar,XHeader,Search} from 'vux'
  export default {
    name:'searchPage',
    components:{
      ViewBox,Flexbox ,FlexboxItem,Tabbar,XHeader,Search
    },
    data:function(){
      return{
      }
    },
    methods:{

    }
  }
</script>
