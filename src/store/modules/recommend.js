//推荐页面数据
const state = {
  recommendHeight:'202'
}

// getters
const getters = {
  recommendHeight:function (state) {
    return state.recommendHeight
  }
}

// actions
const actions = {
  changerecommendHeight({commit}, recommendHeight) {
    commit('updatecommendHeight', recommendHeight)
  }
}
// mutations
const mutations = {
  updatecommendHeight(state, recommendHeight) {
    state.recommendHeight= recommendHeight
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
