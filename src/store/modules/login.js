//菜单
const state = {
  user: {
    profile: {nickname: '', avatarUrl: ''}
  },
  isLogin: false
}

// getters
const getters = {
  user: function (state) {
    return state.user
  },
  isLogin: function (state) {
    return state.isLogin
  }
}
// actions
const actions = {
  changeuser({commit}, user) {
    commit('updateuser', user)
  }
}
// mutations
const mutations = {
  updateuser(state, user) {
    state.user = user;
    state.isLogin = true;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
