<template>
  <div style="overflow: hidden;position: relative">
    <previewer ref="previewer" :list="previewerList">
    </previewer>

    <div class="readHeadPoint"></div>
    <div class="readHead" :class="{rotatePlay:this.isPlay}"></div>
    <div id="outerBox"
         :style="{transform:this.deg,backgroundImage:this.imageUrlFormat,height:this.heightFormat,marginTop:this.marginTopFormat,borderRadius:this.borderRadiusFormat}"
         v-on:click="this.showPreviewer">
    </div>
  </div>
</template>
<style lang="less">
  #outerBox {
    box-sizing: border-box;
    width: 60%;
    border: solid 25px black;
    margin: 0 auto;
    background: no-repeat center center;
    background-size: cover;
  }

  .readHead {
    position: absolute;
    width: 200px;
    height: 8px;
    background-color: grey;
    top: 0px;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -webkit-transform-origin: 0 0;
    z-index: 1;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  .rotatePlay {
    transform: rotate(62deg);
    -webkit-transform: rotate(62deg);
    -webkit-transform-origin: 0 0;
  }

  .readHeadPoint {
    position: absolute;
    width: 18px;
    height: 18px;
    border: 3px solid white;
    background-color: grey;
    border-radius: 9px;
    box-sizing: border-box;
    left: 46%;
    top: -9px;
    z-index: 2;
  }
</style>
<script>
  import {Grid, GridItem, Previewer} from 'vux'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Grid,
      GridItem,
      Previewer
    },
    data: function () {
      return {
        deg: "",
        cn: 0,
        width: 0,
        height: 0,
        style: {
          imageUrl: '',
          marginTop: 0,
          width: 0,
          borderRadius: 0
        },
        previewerList: [{
          src: '',
          w: 300,
          h: 300
        }]
      }
    },
    computed: {
      ...mapGetters([
        'isPlay',
        'music'
      ]),
      imageUrlFormat: function () {
        return "url('" + this.music.imageUrl + "')";
      },
      heightFormat: function () {
        return this.style.width + 'px';
      },
      marginTopFormat: function () {
        return (~~(this.height - this.style.width) >> 2) + 'px';
      },
      borderRadiusFormat: function () {
        return (this.style.width >> 1) + 'px';

      },
      step: function () {
        if (this.isPlay) return 1;
        return 0;
      }
    },
    mounted: function () {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.style.width = document.querySelector('#outerBox').offsetWidth;
      this.rotateF();
    },
    methods: {
      rotateF: function () {
        this.cn = this.cn + this.step;
        this.deg = 'rotate(' + (this.cn % 360) + 'deg';
        requestAnimationFrame(this.rotateF);
      },
      showPreviewer: function () {
        if (this.previewerList[0].src !== this.music.imageUrl) {
          this.previewerList[0].src = this.music.imageUrl;
        }
        console.log(this.previewerList)
        this.$refs.previewer.show(0);
      }
    }
  }
</script>
