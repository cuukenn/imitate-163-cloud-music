//我的歌单数据
const state = {
  myMusicData: [
    {
      title:'我喜欢音乐',
      titleImg:'/static/image/test1.jpg'
    },
    {
      title:'许嵩的歌',
      titleImg:'/static/image/music-2.jpg'
    },
    {
      title:'梁静茹的歌',
      titleImg:'/static/image/music-1.jpg'
    }
  ]
}

// getters
const getters = {
  myMusicData: function (state) {
    return state.myMusicData;
  }
}
// actions
const actions = {
}
// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
