//正在播放列表
const state = {
  playListData: [
    {
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
    },
    {
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
    },
    {
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
  ],
  playListIsShow: false
}

// getters
const getters = {
  playListData: function (state) {
    return state.playListData;
  },
  playListIsShow: function (state) {
    return state.playListIsShow;
  }
}
// actions
const actions = {
  changeplayListIsShow({commit}, playListIsShow) {
    commit('updateplayListIsShow', playListIsShow)
  }
}
// mutations
const mutations = {
  updateplayListIsShow(state, playListIsShow) {
    state.playListIsShow = playListIsShow;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
