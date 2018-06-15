<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div style="overflow-y:scroll" :style="{height:this.height}">
      <link rel="stylesheet" href="../../../static/css/iconfont.css">
      <div id="recommendSwiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="slide in this.swiperSlides" :key="slide">
            <img :src="slide" width="100%"/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <Flexbox style="border-bottom: 1px solid black">
        <FlexboxItem>
          <div class="center" v-on:click="$router.push('/FM')">
            <card>
              <i slot="header"  class="iconfont icon-CN_doubanFM demo"></i>
              <p slot="content">
                <small>私人FM</small>
              </p>
            </card>
          </div>
        </FlexboxItem>
        <FlexboxItem>
          <div v-on:click="$router.push('/everyDayRecmend')" class="center">
            <card>
              <i slot="header"  class="iconfont icon-rili demo"></i>
              <p slot="content">
                <small>每日推荐</small>
              </p>
            </card>
          </div>

        </FlexboxItem>
        <FlexboxItem>
          <div v-on:click="$router.push('/MusicList')" class="center">
            <card>
              <i slot="header"  class="iconfont icon-jiarugedan demo"></i>
              <p slot="content">
                <small>歌单</small>
              </p>
            </card>
          </div>

        </FlexboxItem>
        <FlexboxItem>
          <div v-on:click="$router.push('/RankingList')" class="center">
            <card>
              <i slot="header" class="iconfont icon-paixingbang demo"></i>
              <p slot="content">
                <small>排行榜</small>
              </p>
            </card>

          </div>
        </FlexboxItem>
      </Flexbox>
      <div v-for="(data,index) in this.sixPalacesData" :key="index">
        <six-palaces :list="data.list" :title="data.title"></six-palaces>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .demo {
    border-radius: 25px;
    border: 1px solid red;
    font-size: 25px;
  }

  .center {
    text-align: center;
  }
</style>
<script>
  import sixPalaces from '@/components/sixPalace.vue'
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {
    Flexbox, FlexboxItem,
    Card
  }
    from
      'vux'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      swiper,
      swiperSlide,
      Flexbox, FlexboxItem,
      sixPalaces,
      Card
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          slidesPerView: 1,
          autoplay: {
            delay: 3500,
            disableOnInteration: false
          },
          spaceBetween: 30,
          loop: true
        },
        swiperSlides: [
          "../../../static/image/slide-1.jpg",
          "../../../static/image/slide-2.jpg",
          "../../../static/image/slide-3.jpg",
          "../../../static/image/slide-4.jpg",
          "../../../static/image/slide-6.jpg",
          "../../../static/image/slide-7.jpg",
          "../../../static/image/slide-8.jpg",],
        swiperElm: null
      }
    }
    ,
    computed: {
      ...
        mapGetters([
          'sixPalacesData',
          'recommendHeight'
        ]),
      height:

        function () {
          return this.recommendHeight + 'px';
        }
    }
    ,
    mounted: function () {
      if (!this.swiperElm === null) {
        this.swiperElm = document.querySelector('#recommendSwiper');
        this.$store.dispatch('changerecommendHeight', this.recommendHeight - this.swiperElm.offsetHeight);
      }
    }
    ,
    methods: {
      ...
        mapActions([
          'changerecommendHeight'
        ])
    }
  }
</script>
