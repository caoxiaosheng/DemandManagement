const util = require('../../utils/util.js')
const getActiveDemandsUrl = require('../../config').getActiveDemandsUrl
const app = getApp()

// pages/problems/problems.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demands:[]
  },

  tapDemand:function(event){
    var demand=null;
    for(var i=0;i<this.data.demands.length;i++){
      if (this.data.demands[i].id === event.currentTarget.dataset.demandId){
        demand = this.data.demands[i];
        break;
      }
    }
    if(demand!==null){
      wx.navigateTo({
        url: '../demand/demand?demand=' + JSON.stringify(demand),
      })
    }
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
    var that=this;
    util.requestWithJWT(getActiveDemandsUrl, null, 'GET', res=>{
      that.setData({ demands:res.data.demands});
    });
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
