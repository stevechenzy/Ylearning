// pages/PBM2/joinSession/joinSession.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sessionName:'',
    partName:'',
    wxid:'nowtesting',
    email:'',
    orgCode:'',
  },
  //输入Session Name
  sessionNameInput: function (e) {
    this.setData({
      sessionName: e.detail.value
    })
  },
  //输入Participant Name
  partNameInput: function (e) {
    this.setData({
      partName: e.detail.value
    })
  },
  //输入email
  emailInput: function (e) {
    this.setData({
      email: e.detail.value
    })
  },
  //输入Organization Code
  orgCodeInput: function (e) {
    this.setData({
      orgCode: e.detail.value
    })
  },
  // Submit Button Click
  submitbtnClick: function () {
    var self = this;
    console.log("sending: " + self.data.sessionName + " | " + self.data.partName + " | " + self.data.wxid + " | " + self.data.email + " | " + self.data.orgCode)
    wx.request({
      url: "https://192.144.204.236/pbm2/joinsession",
      data: {
        sessionname: this.data.sessionName,
        partname: this.data.partName,
        wxid: this.data.wxid,
        email: this.data.email,
        orgcode: this.data.orgCode
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
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