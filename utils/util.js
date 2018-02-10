const app = getApp()

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function requestWithJWT(url, data, method, successHandler){
  if (app.globalData.token) {
    myrequest(url, data, method, successHandler);
  } else {
    app.userInfoReadyCallback = res => {
      myrequest(url, data, method, successHandler);
    }
  }
}

function myrequest(url, data, method, successHandler) {
  wx.request({
    url: url,
    data: data,
    method: method,
    header: {
      'Authorization': 'Bearer ' + app.globalData.token // 默认值
    },
    success: function (res) {
      if (res.statusCode == 200) {
        successHandler(res);
      } else {
        wx.showToast({
          title: res.statusCode,
          icon: 'none',
          duration: 2000
        })
      }
    },
    fail: function (errMsg) {
      wx.showToast({
        title: errMsg.errMsg,
        icon: 'none',
        duration: 2000
      });
    }
  })
}

module.exports = {
  formatTime: formatTime,
  requestWithJWT: requestWithJWT
}
