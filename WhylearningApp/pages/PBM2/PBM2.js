// pages/PBM2/PBM2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PBM2sessionList:[]
  
  },
  // 新建课程
  gotoNewcourse: function () {
    wx.navigateTo({
      url: 'Newcourse/Newcourse'
    })
  },
  // 选择课程
  gotoThiscourse: function(){
    wx.navigateTo({
      url: 'session/session',
    })
  },
  // 加入课程
  joinSession: function(){
    wx.navigateTo({
      url: 'joinSession/joinSession',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    self=this
    console.log("Request session list")
    wx.request({
      url: "https://192.144.204.236/pbm2/sessionlist",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        self.setData({
          PBM2sessionList: res.data.Listdata
        })
      }
    })
  
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