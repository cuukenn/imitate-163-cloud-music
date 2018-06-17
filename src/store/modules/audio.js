//全局播放按钮数据流控制
import axios from 'axios'
import $ from 'jquery'

function startPlay(audioElem, commit) {
  audioElem.addEventListener("canplay", function () {
    commit('updateduration');
    audioElem.play();
  })
  commit('updateduration');
  audioElem.play();
}

function stopPlay(audioElem) {
  audioElem.pause()
}

const state = {
  isPlay: false,
  duration: 0,
  currentTime: 0,
  audioElem: null,
  music: {
    author: '梁静茹',
    name: '人生若只如初见',
    url: '/static/audio/梁静茹 - 人生若只如初见.mp3',
    imageUrl: '/static/image/music-1.jpg'
  }
};

// getters
const getters = {
  isPlay: function (state) {
    return state.isPlay
  },
  sourceUrl: function (state) {
    return state.music.url || "";
  },
  audioElem: function (state) {
    return state.audioElem
  },
  duration: function (state) {
    return state.duration
  },
  currentTime: function (state) {
    return state.currentTime
  },
  music: function (state) {
    return state.music
  }
}

// actions
const actions = {
  init({commit, state}, audioElem) {
    commit('updateaudioElem', audioElem);
    state.audioElem.addEventListener('timeupdate', function () {
      commit('updatecurrentTime', -1);
    })
  },
  changeMusicUrl({commit}, sourceUrl) {
    commit('updatesourceUrl', sourceUrl)
  },
  changeMusic({commit}, music) {
    commit('updateMusic', music)
  },
  changeStatus({commit, state}, isPlay) {
    commit('updateisPlay', isPlay);
    if (isPlay) {
      startPlay(state.audioElem, commit);
    }
    else stopPlay(state.audioElem, commit);
  },
  changecurrentTime({commit}, currentTime) {
    commit('updatecurrentTime', currentTime)
  }
}
// mutations
const mutations = {
  updatesourceUrl(state, SourceUrl = '') {
    state.music.url = SourceUrl
  },
  updateMusic(state, music) {
    if (music.url.length > 0 || music.url !== "") state.music = music;
    else {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/music/url',
        data: {id: (music.id || 0)},
        dataType: 'json',
        async: false,
        success: function (rs) {
          music.url = rs.data[0].url || "";
        }
      })
      state.music = music;
    }
  },
  updateisPlay(state, isPlay = false) {
    state.isPlay = isPlay;
  },
  updateaudioElem(state, audioElem) {
    state.audioElem = audioElem;
  },
  updatecurrentTime(state, currentTime) {
    if (currentTime >= 0) state.audioElem.currentTime = currentTime;
    state.currentTime = state.audioElem.currentTime;
  },
  updateduration(state) {
    state.duration = state.audioElem.duration;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
