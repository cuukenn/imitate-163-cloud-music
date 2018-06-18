//六宫格数据
const state = {
  sixPalacesData: [
    {
      title: "推荐歌单",
      list: [
        {
          imageUrl: "static/testImages/4.jpg",
          description: '女生恋爱前一定要懂得这五件事。'
        },
        {
          imageUrl: "static/testImages/5.jpg",
          description: '中国风|青丝梦回山河醉，今日古风不婉约'
        },
        {
          imageUrl: "static/testImages/6.jpg",
          description: '讲真的 - E-Tsing于晴'
        },
        {
          imageUrl: "static/testImages/1.jpg",
          description: '你和我之间，只隔着一首歌的距离'
        },
        {
          imageUrl: "static/testImages/2.jpg",
          description: '谢谢你陪我追过梦，哪怕终点不是你'
        },
        {
          imageUrl: "static/testImages/3.jpg",
          description: '刘若英 热门50单曲'
        }

      ]
    },
    {
      title: "测试用例",
      list: [
        {
          imageUrl: "static/image/music-1.jpg",
          description: '谢谢你陪我追过梦，哪怕终点不是你'
        },
        {
          imageUrl: "static/image/music-2.jpg",
          description: '谢谢你陪我追过梦，哪怕终点不是你'
        },
        {
          imageUrl: "static/image/music-1.jpg",
          description: '谢谢你陪我追过梦，哪怕终点不是你'
        },
        {
          imageUrl: "static/image/music-1.jpg",
          description: '谢谢你陪我追过梦，哪怕终点不是你'
        },
        {
          imageUrl: "static/image/music-2.jpg",
          description: '谢谢你陪我追过梦，哪怕终点不是你'
        },
        {
          imageUrl: "static/image/music-1.jpg",
          description: '谢谢你陪我追过梦，哪怕终点不是你'
        }
      ]
    }
  ]
}

// getters
const getters = {
  sixPalacesData: function (state) {
    return state.sixPalacesData;
  }
}

// actions
const actions = {
  changeSixPalacesData({commit}, sixPalacesData) {
    let flag = false;
    for (let index in state.sixPalacesData) {
      if (state.sixPalacesData[index].title === sixPalacesData.title) {
        flag = true;
        return false;
      }
    }
    if (!flag) {
      commit('updateSixPalacesData', sixPalacesData)
    }

  }
}
// mutations
const mutations = {
  updateSixPalacesData(state, sixPalacesData) {
    state.sixPalacesData = sixPalacesData;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
