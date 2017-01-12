// pages/weixincontents/article/article.js
var articleUrl = "https://v.juhe.cn/weixin/redirect";
var app = getApp();
var domain = app.globalData.weixincontents_url + 'singleArticle';

Page({
  data: {
    contentArray: null

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数


    // 页面初始化 options为页面跳转所带来的参数
    let that = this;
    wx.request({
      url: domain,
      data: { url: articleUrl + "?wid=" + options.id },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        if (res != null && res.data) {
          that.setData({ contentArray: res.data });
        }

      },
      fail: function (e) {
        // fail
        console.log("fail")
      },
      complete: function () {
        // complete
        console.log("complete")
      }
    })

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  enterArticle: function (e) {
    console.log(e);
  }




})



