const bindUrl = require('../../config').bindUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    clearValue: ""
  },

  formSubmit: function (e) {
    wx.login({
      success: res => {
        //发起网络请求
        wx.request({
          url: bindUrl,
          data: {
            code: res.code,
            userName: e.detail.value.userName,
            password: e.detail.value.password
          },
          success: res => {
            if (res.data.result === false) {
              wx.showToast({
                title: res.data.reason,
                icon: 'none',
                duration: 2000
              })
            } else {
              wx.switchTab({
                url: '../problems/problems'
              })
            }
          }
        })
      }
    })
    this.setData({
      clearValue: ""
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})