<template>
  <div>
    <card>
      <x-img slot="header" default-src="static/image/default.gif" :src="this.imageUrl"></x-img>
      <p slot="content" v-text="this.description"></p>
    </card>
  </div>
</template>
<style lang="less">

</style>
<script>
  import {XImg, Card} from 'vux'

  export default {
    components: {
      XImg, Card
    },
    props: {
      imageUrl: '',
      description: ''
    }
  }
</script>
