import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
const state = {
  username: ''
}
const mutations = {
  setUsername: (state, username) => {
    state.username = username
    localStorage.setItem('username', username)
  }
}
const getters = {
  username: (state) => localStorage.getItem('username')
}
const actions = {}

export default new vuex.Store({
  state,
  mutations,
  getters,
  actions
})
