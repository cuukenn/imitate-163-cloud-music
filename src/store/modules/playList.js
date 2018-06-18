//正在播放列表
const state = {
  playListData: [
    {
      author: '梁静茹',
      name: '人生若只如初见',
      url: 'static/audio/music-1.mp3',
      imageUrl: 'static/image/music-1.jpg'
    },
    {
      author: '许嵩',
      name: '玫瑰花的葬礼',
      url: 'static/audio/music-2.mp3',
      imageUrl: 'static/image/music-2.jpg'
    },
    {
      author: '许嵩',
      name: '深夜书店',
      url: 'static/audio/music-3.mp3',
      imageUrl: 'static/image/test1.jpg'
    }
  ],
  playListIsShow: false,
  playIndex: 0
}
// getters
const getters = {
  playListData: function (state) {
    return state.playListData;
  },
  playListIsShow: function (state) {
    return state.playListIsShow;
  },
  playIndex: function (state) {
    return state.playIndex;
  }
}
// actions
const actions = {
  changeplayListIsShow({commit}, playListIsShow) {
    commit('updateplayListIsShow', playListIsShow)
  },
  changeplayIndex({commit}, playIndex) {
    commit('updateplayIndex', playIndex)
  },
  addMusic({commit, state}, music) {
    let flag = false;
    for (let index in state.playListData) {
      if (state.playListData[index].author === music.author && state.playListData[index].name === music.name) {
        flag = true;
        return false;
      }
    }
    if (!flag) {
      commit('addMusicMutation', music)
    }
  },
  changeplayListData({commit}, playListData) {
    commit('updateplayListData', playListData)
  }
}
// mutations
const mutations = {
  updateplayListData(state, playListData) {
    //不采用直接赋值是因为v-for指令不支持列表赋值更新
    while (state.playListData.length > 0) state.playListData.pop();
    state.playListData = state.playListData.concat(playListData);
  },
  updateplayIndex(state, playIndex) {
    state.playIndex = playIndex;
  },
  updateplayListIsShow(state, playListIsShow) {
    state.playListIsShow = playListIsShow;
  },
  addMusicMutation(state, music) {
    state.playListData.push(music);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
