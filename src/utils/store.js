// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import { TOKEN, USER_ID, OPEN_ID } from './constants'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: wx.getStorageSync(TOKEN),
    userId: wx.getStorageSync(USER_ID),
    openId: wx.getStorageSync(OPEN_ID),
    address: []
  },
  mutations: {
    refreshToken (state, token) {
      state.token = token
      wx.setStorageSync(TOKEN, token)
    },
    refreshUserId (state, userId) {
      state.userId = userId
      wx.setStorageSync(USER_ID, userId)
    },
    refreshOpenId (state, openId) {
      state.openId = openId
      wx.setStorageSync(OPEN_ID, openId)
    },
    addAddress (state, addr) {
      if (addr) {
        state.address = [addr]
      } else {
        state.address = []
      }
    }
  },
  actions: {
    refreshToken ({commit}, token) {
      return new Promise(function (resolve, reject) {
        commit('refreshToken', token)
      })
    },
    refreshUserId ({commit}, userId) {
      return new Promise(function (resolve, reject) {
        commit('refreshUserId', userId)
      })
    },
    refreshOpenId ({commit}, openId) {
      return new Promise(function (resolve, reject) {
        commit('refreshOpenId', openId)
      })
    },
    addAddress ({commit}, addr) {
      commit('addAddress', addr)
    }
  }
})

export default store
