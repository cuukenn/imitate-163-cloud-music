import Vue from 'vue'
import Router from 'vue-router'
//欢迎界面和主界面
import index from '@/page/index.vue'
import welcome from '@/page/welcome.vue'
//主界面三个分区
import musicGround from '@/page/indexHeader/musicGround.vue'
import myMusic from '@/page/indexHeader/myMusic.vue'
import videoGround from '@/page/indexHeader/videoGround.vue'
//中间音乐界面三个分区
import recommend from '@/page/indexTab/recommend.vue'
import radioStation from '@/page/indexTab/radioStation.vue'
import friend from '@/page/indexTab/friend.vue'
//播放界面
import playIndex from '@/page/playIndex.vue'
//播放界面内容区
import defaultContent from '@/page/playIndexContent/defaultContent.vue'
import lyricsContent from '@/page/playIndexContent/lyricsContent.vue'
//搜索界面
import searchPage from '@/page/searchPage.vue'
Vue.use(Router)

const musicGroundRouter = [
  {
    name: 'friend',
    path: 'friend',
    component: friend
  },
  {
    name: 'radioStation',
    path: 'radioStation',
    component: radioStation
  },
  {
    name: 'recommend',
    path: 'recommend',
    component: recommend
  }
];
const playIndexContentRouter = [
  {
    name: 'defaultContent',
    path: 'defaultContent',
    component: defaultContent
  },
  {
    name: 'lyricsContent',
    path: 'lyricsContent',
    component: lyricsContent
  }
];
export default new Router({
  routes: [
    {
      name: 'welcome',
      path: '/',
      component: welcome
    },
    {
      name: 'index',
      path: '/index',
      component: index,
      children: [
        {
          name: 'musicGround',
          path: 'musicGround',
          component: musicGround,
          children: musicGroundRouter
        },
        {
          name: 'myMusic',
          path: 'myMusic',
          component: myMusic
        },
        {
          name: 'videoGround',
          path: 'videoGround',
          component: videoGround
        }
      ]
    },
    {
      path: '/playIndex',
      name: 'playIndex',
      component: playIndex,
      children: playIndexContentRouter
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    }
  ]
})
