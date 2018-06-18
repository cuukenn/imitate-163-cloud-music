//菜单
import axios from 'axios'

const state = {
  user: {
    profile: {nickname: '', avatarUrl: ''}
  },
  isLogin: false,
  // localhost: 'http://10.0.2.2:3000'
  localhost: 'http://127.0.0.1:3000'
}

// getters
const getters = {
  user: function (state) {
    return state.user
  },
  isLogin: function (state) {
    return state.isLogin
  },
  localhost: function (state) {
    return state.localhost
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
