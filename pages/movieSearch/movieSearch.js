
var API_URL = 'http://localhost/v2/movie/search?q='

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[]
  },

  onLoad: function (options) {
  
  },

  searchMovie: function (e) {
   var that = this
    wx.showLoading({
      title: '搜索中...',
    })
    wx.request({
      url: API_URL+e.detail.value,
      header:{
        'content-type':'json'
      },
      success:function(res){
        
        that.setData({
          movieList: res.data.subjects
        })
      },
      fail:function(res){
        wx.showToast({
          icon: 'none',
          title: res.errMsg,
        })
      },complete:function(res){
        wx.hideLoading()
      }
    })
  }
})