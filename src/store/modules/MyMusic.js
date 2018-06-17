//我的歌单数据
const state = {
  myMusiclist: {playlist: []}
}

// getters
const getters = {
  myMusiclist: function (state) {
    return state.myMusiclist;
  }
}
// actions
const actions = {
  changemyMusiclist({commit}, myMusiclist) {
    commit('updatemyMusiclist', myMusiclist);
  }
}
// mutations
const mutations = {
  updatemyMusiclist(state, myMusiclist) {
    state.myMusiclist.playlist = myMusiclist;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
