//菜单
const state = {
  menuPageIsShow: false
}

// getters
const getters = {
  menuPageIsShow: function (state) {
    return state.menuPageIsShow
  }
}
// actions
const actions = {
  changemenuPageIsShow({commit}, menuPageIsShow) {
    commit('updatemenuPageIsShow', menuPageIsShow)
  }
}
// mutations
const mutations = {
  updatemenuPageIsShow(state, menuPageIsShow) {
    state.menuPageIsShow = menuPageIsShow;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
