// pages/map/map.js
const app = getApp()

Page({
  data: {
    webUrl: ''
  },

  onLoad(options) {
    // 设置网页URL
    this.setData({
      webUrl: `${app.globalData.baseUrl}/map/`
    })
    
    // 设置页面标题
    wx.setNavigationBarTitle({
      title: '诊所地图'
    })
  },

  onWebViewLoad(e) {
    console.log('地图页面加载完成', e)
  },

  onWebViewError(e) {
    console.error('地图页面加载失败', e)
    wx.showToast({
      title: '地图加载失败，请检查网络',
      icon: 'none',
      duration: 3000
    })
  },

  onWebViewMessage(e) {
    console.log('收到地图页面消息', e)
  },

  onShareAppMessage() {
    return {
      title: '血友病诊所地图 - 查找附近可注射的医院',
      path: '/pages/map/map',
      imageUrl: '/images/map-share.jpg'
    }
  }
})