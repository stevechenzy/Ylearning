// pages/PBM2/Newcourse/Newcourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseCode:'',
    partNum:'',
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

  },
  // Submit Button Click
  submitbtnClick: function(){
    var self = this;
    console.log("asdf: "+self.data.courseCode + " | " + self.data.partNum)
    wx.request({
      url: "https://192.144.204.236/pbm2/cvs/query/createsession.py",
      data:{
        coursecode: this.data.courseCode,
        partnum: this.data.partNum
      },
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        console.log(res.data)
      }
    })
  },
  //Course Code Input
  courseCodeInput:function(e){
    this.setData({
      courseCode: e.detail.value
    })
  },
  //Participant Value Input
  partNumInput: function (e) {
    this.setData({
      partNum: e.detail.value
    })
  },
})