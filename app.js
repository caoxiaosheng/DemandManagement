//app.js
const loginUrl = require('./config').loginUrl

App({
  globalData: {
    token: null,
    userName:""
  },
  onLaunch: function () {
    wx.login({
      success: res => {
        //发起网络请求
        wx.request({
          url: loginUrl,
          data: {
            code: res.code
          },
          success: res=> {
            if (res.data.result===false) {
              wx.navigateTo({
                url: '../bind/bind'
              })
            } else {
              this.globalData.token = res.data.access_token;
              this.globalData.userName = res.data.userName;
              // 由于网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          }
        })
      }
    })
  }
})

