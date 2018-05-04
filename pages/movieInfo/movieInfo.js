var API_URL ='https://api.douban.com/v2/movie/subject/'
API_URL = 'http://localhost/v2/movie/subject/'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that = this
  wx.request({
    url: API_URL+options.id,
    // url: API_URL + "1292052",
    header:{
      'content-type':'json'
    },
    success:function(res){
      // console.log(res)
      that.setData({ movieInfo:res.data})
    },
    fail:function(res){
      console.log(res)
    }
  })
  }
})