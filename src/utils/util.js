// import api from '@/utils/api'
import { post } from './request'
import { PARENT_USER_ID } from '@/utils/constants';
import store from './store'

/**
 * 微信登录
 * @returns {Promise<any>}
 * @constructor
 */
function login () {
  console.log('login -------------------')
  return new Promise(function (resolve, reject) {
    console.log('login -------------------')
    wx.login({
      success: (res) => {
        console.log(res)
        if (res.code) {
          console.log('resolve')
          resolve(res.code)
        }
      },
      fail: (err) => {
        console.log(555555555555555)
        reject(err)
      }
    })
    console.log('login -------------------')
  })
}

// 调用微信获取用户详细信息 button权限
function UserInfo () {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.userInfo']) {
          reject({
            errMsg: 'authorize:error'
          })
        }
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            withCredentials: true,
            success: res => resolve(res),
            fail: err => reject(err)
          })
        }
      },
      fail: res => {
        console.log(23749729479)
        console.log(res)
      }
    })
  })
}

/**
 * 微信用户详细信息
 * @returns {Promise<any>}
 */
function getUserInfo () {
  return new Promise((resolve, reject) => {
    let code = null
    return util.login().then(res => {
      console.log(res)
      code = res
      return util.UserInfo()
    }).then(userRes => {
      const userInfo = userRes.userInfo
      console.log(userInfo)
      console.log('zuihou')
      util.showLoading('登录中...')
      const requestBody = {
        code,
        appid: 'wxa2e9c927fb91d502',
        avatar: userInfo.avatarUrl,
        gender: userInfo.gender,
        name: userInfo.nickName
      }
      const _PARENT_USER_ID = wx.getStorageSync(PARENT_USER_ID)
      if (_PARENT_USER_ID) {
        requestBody.upUid = _PARENT_USER_ID
      }
      post('/user/login', requestBody).then(res => {
        console.log('登录成功了啊！！！！！！！！')
        console.log(res)
        const token = res.token
        const userId = res.userId
        store.dispatch('refreshToken', token)
        store.dispatch('refreshUserId', userId)
        resolve(res.token)
        util.hideLoading()
        util.toast('登录成功！')
      }).catch(err => {
        console.log(err)
      })
    }).catch(error => {
      reject(error)
    })
  })
}

// 封装toast方法
function toast (title = '提示', icon = 'success', duration = 1000, mask = true) {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title: title,
      icon: icon,
      duration: duration,
      mask: mask,
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}

// 封装loading状态方法
function showLoading (title = '加载中', mask = true) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: title,
      success: res => resolve(res),
      fail: err => reject(err)
    })
  })
}

// 封装隐藏loading状态方法
function hideLoading () {
  wx.hideLoading()
}

// 导航栏loading
function showNavBarLoad () {
  wx.showNavigationBarLoading()
}

// 导航栏loading隐藏
function hideNavBarLoad () {
  wx.hideNavigationBarLoading()
}

const util = {
  login,
  UserInfo,
  getUserInfo,
  showLoading,
  hideLoading,
  showNavBarLoad,
  hideNavBarLoad,
  toast
}

export default util
