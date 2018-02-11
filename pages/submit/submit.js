// pages/submit/submit.js
const app = getApp()
const util = require('../../utils/util.js')
const getAllUsersUrl = require('../../config.js').getAllUsersUrl
const getAllCustomersUrl = require('../../config.js').getAllCustomersUrl
const addDemandUrl = require('../../config.js').addDemandUrl

Page({

  /**
     * 页面的初始数据
     */
  data: {
    clearValue:"",
    demandTypes: ["网管","系统"],
    demandTypeIndex:0,
    users: [],
    userNames:[],
    userIndex: 0,
    customers: [],
    customerIndex: 0
  },

  bindDemandTypeChange:function(e){
   this.setData({
     demandTypeIndex:e.detail.value
   }) 
  },

  bindUserChange: function (e) {
    this.setData({
      userIndex: e.detail.value
    })
  },
  
  bindCustomerChange: function (e) {
    this.setData({
      customerIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    var data = {
      id: 0,
      demandCode: e.detail.value.demandCode,
      demandType: e.detail.value.demandType,
      demandDetail: e.detail.value.demandDetail,
      user: this.data.userNames[e.detail.value.user],
      customer: this.data.customers[e.detail.value.customer],
      remarks: e.detail.value.remarks
    }
    var that = this;
    util.requestWithJWT(addDemandUrl, data,"POST",res=>{
      if (res.data.result==="true"){
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        var tempIndex = that.data.userNames.indexOf(app.globalData.userName);
        that.setData({
          clearValue: "",
          demandTypeIndex: 0,
          userIndex: tempIndex,
          customerIndex: 0
        })
      }else{
        wx.showToast({
          title: res.data.reason,
          icon: 'none',
          duration: 2000
        });
      }
    })
    
  },

  onReset: function () {
    var that=this;
    wx.showModal({
      title: '提示',
      content: '是否清除所有信息？',
      confirmColor:'#e51c23',
      success: function (res) {
        if (res.confirm) {
          var tempIndex = that.data.userNames.indexOf(app.globalData.userName);
          that.setData({
            clearValue: "",
            demandTypeIndex:0,
            userIndex: tempIndex,
            customerIndex:0
          })
        }
      }
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
    var that = this;
    util.requestWithJWT(getAllUsersUrl,{},"GET",res=>{
      var tempUsers = [], tempUserNames = [];
      for (var i = 0; i<res.data.length;i++){
        tempUsers[i] = res.data[i].name + "(" + res.data[i].userName + ")";
        tempUserNames[i] = res.data[i].userName;
      }
      var tempIndex = tempUserNames.indexOf(app.globalData.userName);
      that.setData({
        users: tempUsers,
        userNames: tempUserNames,
        userIndex: tempIndex
      })
    })
    util.requestWithJWT(getAllCustomersUrl, {}, "GET", res => {
      var tempCustomers = [];
      for (var i = 0; i < res.data.length; i++) {
        tempCustomers[i] = res.data[i].name;
      }
      that.setData({
        customers: tempCustomers
      })
    })
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