<template>

  <div id="outer_playIndex">
    <link rel="stylesheet" href="static/css/iconfont.css">
    <div id="playIndex_filter" v-bind:style="{height:this.style.height,backgroundImage:this.imageUrlFormat}"></div>
    <ViewBox id="viewBox_playIndex">
      <div slot="header">
        <x-header left-options.showBack="true" style="background-color:rgba(126,116,126,0.8);">
          <p style="font-size: 1.6rem">{{this.music.name}}
            <small v-text="this.music.author" style="font-size: 1.2rem"></small>
          </p>
          <div slot="right"><i size="25" class="iconfont icon-iconfontzhizuobiaozhun20"></i></div>
        </x-header>
      </div>
      <router-view></router-view>
      <div slot="bottom">
        <tabbar style="position: fixed;background-color:rgba(126,116,126,0.6)">
          <flexbox orient="vertical">
            <flexbox-item>
              <flexbox style="margin-bottom: 10px">
                <flexbox-item>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex" v-on:click="this.collect">
                    <i class="iconfont icon-dianzan " style="font-size: 25px" :class="{hidden:!status.isDianZan}"></i>
                    <i class="iconfont icon-dianzan" style="font-size: 25px;color: red;"
                       :class="{hidden:status.isDianZan}"></i>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex"><i class="iconfont icon-icon" style="font-size: 25px"></i></div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex"><i class="iconfont icon-pinglun" style="font-size: 25px"></i></div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex"><i class="iconfont icon-gengduo" style="font-size: 25px"></i></div>
                </flexbox-item>
                <flexbox-item>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item>
              <flexbox>
                <flexbox-item :span="2/10">
                  <div class="flex-demo-playIndex">
                    <small>{{this.cunrentTimeFormat}}</small>
                  </div>
                </flexbox-item>
                <flexbox-item :span="6/10">
                  <div class="flex-demo-playIndex" style="position: relative">
                    <progress style="width: 100%;" class="processbar" :value="this.currentTime" :max="this.totalTime"
                              v-on:click="this.randomProgress"></progress>
                    <div class="circle" :style="{left:this.cirCleLeftFormat}"></div>
                  </div>
                </flexbox-item>
                <flexbox-item :span="2/10">
                  <div class="flex-demo-playIndex">
                    <small>{{this.totalTimeFormat}}</small>
                  </div>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item>
              <flexbox>
                <flexbox-item>
                  <div class="flex-demo-playIndex">
                    <i class="iconfont icon-xunhuanbofang"></i>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex" v-on:click="preMusic"><i class="iconfont icon-houtui"></i></div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex">
                    <i class="iconfont icon-bofang1" style="font-size: 45px" v-on:click="changePlayStatus(true)"
                       :class="{hidden:isPlay}"></i>
                    <i class="iconfont icon-bofang" style="font-size: 45px" v-on:click="changePlayStatus(false)"
                       :class="{hidden:!isPlay}"></i>
                  </div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex" v-on:click="nextMusic"><i class="iconfont icon-qianjin"></i></div>
                </flexbox-item>
                <flexbox-item>
                  <div class="flex-demo-playIndex" v-on:click="this.click">
                    <i class="iconfont icon-gengduo"></i>
                  </div>
                </flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </tabbar>
      </div>
    </ViewBox>
    <div v-transfer-dom>
      <popup v-model="show" position="bottom" max-height="40%" height="40%" style="border-top-right-radius: 15px;border-top-left-radius: 15px;">
        <select-music-fade></select-music-fade>
      </popup>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';

  #outer_playIndex {
    width: 100%;
    position: relative;
  }

  #viewBox_playIndex {
    z-index: 1;
  }

  #playIndex_filter {
    position: absolute;
    width: 100%;
    background: no-repeat center center;
    background-size: cover;
    -webkit-filter: blur(10px);
    filter: blur(30px);
    z-index: -1;
  }

  .flex-demo-playIndex {
    text-align: center;
    color: #fff;
    border-radius: 4px;
    fill: grey;
    background-clip: padding-box;
  }

  .hidden {
    display: none;
  }

  .processbar {
    height: 5px;
    background-color: white;
    color: red;
  }

  .circle {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: grey;
    top: 0.6rem;
    left: 0px;
    box-sizing: border-box;
    border: 2px solid white;
  }

  progress::-webkit-progress-bar {
    background-color: grey;
  }

  progress::-webkit-progress-value {
    background-color: red;
  }

  progress::-moz-progress-bar {
    background-color: red;
  }
</style>
<script>
  import {
    XHeader,
    Tabbar,
    Flexbox, FlexboxItem,
    ViewBox,
    TransferDom, Popup,XButton
  } from 'vux'
  import {mapGetters, mapActions} from 'vuex'
  import selectMusicFade from '@/components/selectMusicFade.vue'

  let index = 0;
  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Tabbar,
      Flexbox, FlexboxItem, ViewBox,
      TransferDom, Popup,XButton,selectMusicFade
    },
    data: function () {
      return {
        localMusic: {
          author: "",
          name: "",
          url: "",
          imageUrl: ''
        },
        elem: {
          progressEle: null
        },
        status: {
          isDianZan: false
        },
        style: {
          height: '0px',
          cirCleLeft: 0
        },
        show:false
      }
    },
    computed: {
      ...mapGetters({
        music: 'music',
        totalTime: 'duration',
        currentTime: 'currentTime',
        ado: 'audioElem',
        isPlay: 'isPlay'
      }),
      cunrentTimeFormat: function () {
        return this.formatTime(this.currentTime);
      },
      totalTimeFormat: function () {
        return this.formatTime(this.totalTime);
      },
      cirCleLeftFormat: function () {
        if (this.elem.progressEle) return (this.currentTime / this.totalTime * this.elem.progressEle.offsetWidth) + 'px';
        else return '0px';
      },
      imageUrlFormat: function () {
        return "url('" + this.music.imageUrl + "')";
      },
    },
    mounted: function () {
      this.style.height = window.innerHeight + 'px';
      this.localMusic = [{
        author: '梁静茹',
        name: '人生若只如初见',
        url: '/static/audio/梁静茹 - 人生若只如初见.mp3',
        imageUrl: '/static/image/music-1.jpg'
      },
        {
          author: '许嵩',
          name: '玫瑰花的葬礼',
          url: '/static/audio/许嵩 - 玫瑰花的葬礼.mp3',
          imageUrl: '/static/image/music-2.jpg'
        },
        {
          author: '许嵩',
          name: '深夜书店',
          url: '/static/audio/许嵩、洛天依 - 深夜书店.mp3',
          imageUrl: '/static/image/test1.jpg'
        }
      ]
      this.$store.dispatch('changeMusic', this.localMusic[index]);
      this.elem.progressEle = document.querySelector('progress');
    },
    methods: {
      ...mapActions([
        'changecurrentTime',
        'changeMusicUrl',
        'changeMusic',
        'changeStatus'
      ]),
      changePlayStatus: function (isPlay) {
        this.$store.dispatch('changeStatus', isPlay);
      },
      randomProgress: function (ev) {
        let evObject = ev || event;
        let x = evObject.offsetX;
        let newC = ~~(x / this.elem.progressEle.offsetWidth * this.totalTime);
        this.$store.dispatch('changecurrentTime', newC);
        // this.$store.commit('updatecurrentTime',newC)
      },
      collect: function () {
        this.status.isDianZan = !this.status.isDianZan;
      },
      nextMusic: function () {
        this.$store.dispatch('changeMusic', this.localMusic[index++ % 3]);
        this.changePlayStatus(true)
      },
      preMusic: function () {
        this.$store.dispatch('changeMusic', this.localMusic[index++ % 3]);
        this.changePlayStatus(true)
      },
      formatTime: function (val) {
        return ~~(val / 60) + ':' + parseInt(val % 60);
      },
      click:function () {
        // this.$store.dispatch('changeplayListIsShow', true);
        this.show=true;
      }
    }
  }
</script>
