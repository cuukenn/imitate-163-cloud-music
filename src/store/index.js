import Vue from 'vue'
import Vuex from 'vuex'
import audio from './modules/audio'
import sixPalce from './modules/sixPalce'
import recommend from './modules/recommend'
import playList from './modules/playList'
import menuPage from './modules/menuPage'
import MyMusic from './modules/MyMusic'
import login from './modules/login'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    audio,//全局播放器
    sixPalce,//六宫格
    recommend,//
    playList,
    menuPage,
    MyMusic,
    login//保存登陆信息
  },
  strict: debug
})
