var API_URL = 'http://localhost/v2/movie/top250'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle:'加载中...',
    movieList:[]
  
  },
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '下载内容中...',
    })
    wx.request({
      url: API_URL,
      data: {
        
      },
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res)
        that.setData({pageTitle:res.data.title,
        movieList:res.data.subjects})
      },complete:function(res){
        wx.hideLoading()
      }
      
    })
  }
})