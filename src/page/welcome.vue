<template>
  <div id="welcome" :style="{height:this.height}">
    <a v-on:click="this.dumpToIndex">{{this.time}}s</a>
  </div>
</template>
<style scoped>
  #welcome {
    width: 100%;
    position: relative;
    background: url('../../static/image/test.jpg') no-repeat center center;
    background-size: cover;
  }

  #welcome > a {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-color: grey;
    text-align: center;
    line-height: 30px;

  }
</style>
<script>
  export default {
    name: 'welcome',
    data: function () {
      return {
        time: 3,
        timeC: null,
        height:'0px'
      }
    },
    created: function () {
      this.height=window.innerHeight+'px';
      this.timeC = setInterval(this.decreaseTime, 1000);
    },
    methods: {
      decreaseTime: function () {

        this.time--;
        if (this.time <= 0) {
          clearInterval(this.timeC)
          this.$router.push('/index/musicGround/recommend')
        }
      },
      dumpToIndex: function () {
        this.$router.push('/index/musicGround/recommend')
      }
    }
  }
</script>
