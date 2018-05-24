<template>
  <div style="box-sizing: border-box;clear: left">
    <div slot="icon">
      <x-img :default-src="this.imageUrl"></x-img>
    </div>
    <p style="width: 100%;height:30px;overflow: hidden;text-overflow: ellipsis;font-size: 10px" slot="label"
              v-text="this.description"></p>
  </div>
</template>
<style lang="less">

</style>
<script>
  import {XImg} from 'vux'

  export default {
    components: {
      XImg
    },
    props: {
      imageUrl: '',
      description: ''
    }
  }
</script>
