// pages/index/index.js
import{network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // MVC
    var that=this;
    // 请求电影数据
    network.getMovieList({
      success:function(movies){
        that.setData({
          movies:movies
        })
      }
    })
    // 请求电视剧数据
    network.getTVList({
      success:function(tvs){
        that.setData({
          tvs:tvs
        })
      }
    })
    // 综艺数据
    network.getShowList({
      success:function(shows){
        that.setData({
          shows:shows
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