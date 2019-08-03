const HOST = 'https://bbs.geomen.vip/thtx'
import store from './store'

// 请求封装
function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: HOST + url, // 仅为示例，并非真实的接口地址'https://cq.vxyx.net"
      method: method,
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        ...header
      },
      success: function (res) {
        wx.hideLoading()
        if(res.statusCode === 401) {
          wx.reLaunch({
            url: '../login/main?redirect_url=' + 'user-center'
          })
        } else if (res.statusCode !== 200 && res.statusCode !== 201) {
          reject(res.data)
        } else {
          resolve(res.data.content)
        }
      },
      fail: function (error) {
        wx.hideLoading()
        reject(error)
        throw new Error(error)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

export function get (url, data, headers = {}, auth) {
  if (auth) {
    headers['authorization'] = store.state.token.times + '_' + store.state.token.token
  }
  return request(url, 'GET', data, headers)
}

export function post (url, data, headers = {}, auth = false) {
  if (auth) {
    headers['authorization'] = store.state.token.times + '_' + store.state.token.token
  }
  return request(url, 'POST', data, headers, auth = false)
}

export function remove (url, data, headers = {}, auth) {
  if (auth) {
    headers['authorization'] = store.state.token.times + '_' + store.state.token.token
  }
  return request(url, 'DELETE', data, headers)
}
