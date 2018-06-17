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
//歌单界面
import playListPage from '@/page/playListPage.vue'
//侧拉菜单
import freeFlow from '@/page/menuAside/freeFlow.vue'
import game from '@/page/menuAside/game.vue'
import myFriend from '@/page/menuAside/myFriend.vue'
import myMessage from '@/page/menuAside/myMessage.vue'
import neiborhood from '@/page/menuAside/neiborhood.vue'
import shop from '@/page/menuAside/shop.vue'
import skinStyle from '@/page/menuAside/skinStyle.vue'
import timing from '@/page/menuAside/timing.vue'
import VIP from '@/page/menuAside/VIP.vue'
import voiceToMusic from '@/page/menuAside/voiceToMusic.vue'
import login from '@/page/menuAside/login.vue'
import myIndex from '@/page/menuAside/MyIndex.vue'
//音乐界面四个圆圈
import everyDayRecmend from '@/page/RecomendPage/everyDayRecmend.vue'
import FM from '@/page/RecomendPage/FM.vue'
import MusicList from '@/page/RecomendPage/MusicList.vue'
import RankingList from '@/page/RecomendPage/RankingList.vue'

//search页面子路由
import SearchResult from '@/page/SearchResult.vue'
//
import rankListPage from '@/page/rankListPage.vue'

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
      name: 'rankListPage',
      path: '/rankListPage',
      component: rankListPage
    },
    {
      name: 'everyDayRecmend',
      path: '/everyDayRecmend',
      component: everyDayRecmend
    },
    {
      name: 'FM',
      path: '/FM',
      component: FM
    },
    {
      name: 'MusicList',
      path: '/MusicList',
      component: MusicList
    },
    {
      name: 'RankingList',
      path: '/RankingList',
      component: RankingList
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
      component: searchPage,
      children: [
        {
          name: 'SearchResult',
          path: 'SearchResult',
          component: SearchResult
        }]
    },
    {
      path: '/playListPage',
      name: 'playListPage',
      component: playListPage
    },
    {
      name: 'freeFlow',
      path: '/menu/freeFlow',
      component: freeFlow
    },
    {
      name: 'game',
      path: '/menu/game',
      component: game
    },
    {
      name: 'myFriend',
      path: '/menu/myFriend',
      component: myFriend
    },
    {
      name: 'myMessage',
      path: '/menu/myMessage',
      component: myMessage
    },
    {
      name: 'neiborhood',
      path: '/menu/neiborhood',
      component: neiborhood
    },
    {
      name: 'shop',
      path: '/menu/shop',
      component: shop
    },
    {
      name: 'skinStyle',
      path: '/menu/skinStyle',
      component: skinStyle
    },
    {
      name: 'timing',
      path: '/menu/timing',
      component: timing
    },
    {
      name: 'VIP',
      path: '/menu/VIP',
      component: VIP
    },
    {
      name: 'login.vue',
      path: '/menu/login',
      component: login
    },
    {
      name: 'voiceToMusic',
      path: '/menu/voiceToMusic',
      component: voiceToMusic
    },
    {
      name: 'myIndex',
      path: '/menu/myIndex',
      component: myIndex
    }
  ]
})
