// pages/mymovie/mymovie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "", //留言内容
    images: []   //选中图片
  },
  onContentChange: function (event) {
    //功能:输入双向绑定
    //1:添加参数event
    //2:获取event.detail保存content
    this.setData({
      content: event.detail
    })
  },
  selectImg: function () {
    //功能1:获取用户选中图片交且保存images:{}
    //1:显示加载提示框
    wx.showLoading({
      title: '图片上传中...',
    })
    //2:选择一张图片
    //3:类型
    //4:来源   17:48
    wx.chooseImage({
      count: 1,   //选中数量 1
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        //5:选择功能
        //6:将当前图片保存对象中
        var file = res.tempFilePaths[0];
        this.setData({
          images: file
        })
        //7:隐藏
        wx.hideLoading();
      },
    })
  },
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