// pages/index/index.js
const app = getApp()

Page({
  data: {
    webUrl: ''
  },

  onLoad(options) {
    // 设置网页URL
    this.setData({
      webUrl: `${app.globalData.baseUrl}/home/`
    })
    
    // 设置页面标题
    wx.setNavigationBarTitle({
      title: '血友姐妹会'
    })
  },

  onWebViewLoad(e) {
    console.log('网页加载完成', e)
  },

  onWebViewError(e) {
    console.error('网页加载失败', e)
    wx.showToast({
      title: '网页加载失败',
      icon: 'none'
    })
  },

  onWebViewMessage(e) {
    console.log('收到网页消息', e)
  },

  onShareAppMessage() {
    return {
      title: '血友姐妹会 - 让每一个人流血不流泪',
      path: '/pages/index/index',
      imageUrl: '/images/share.jpg'
    }
  }
})