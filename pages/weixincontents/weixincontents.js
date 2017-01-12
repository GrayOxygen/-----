// pages/weixincontents/weixincontents.js
var app = getApp();
var domain =app.globalData.weixincontents_url+'weixin';
var page = 0;
var pageSize = 10;

Page({
  data: {
    contentArray: [],
    text: null,


    hidden: true,
    scrollTop: 0,
    scrollHeight: 0
  },
  onLoad: function (options) {


    console.log("enter onLoad")


    // 页面初始化 options为页面跳转所带来的参数
    let that = this;

    //获取系统信息，设置默认高度，才能监听滚动事件
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });

    queryList(this);


  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    console.log(33)
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPullDownRefresh: function () {
    console.log("xxx");
    wx.stopPullDownRefresh()
  },

  bindDownLoad: function () {
    //   该方法绑定了页面滑动到底部的事件
    var that = this;
    queryList(that);
  },
  scroll: function (event) {
    console.log("enter scroll")
    console.log(event.detail.scrollTop)
    //   该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。

  },
  refresh: function (event) {
    console.log("enter refresh")
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
    page = 0;
    this.setData({
      contentArray: [],
      scrollTop: 1110
    });
    queryList(this)
  }



})





// 获取数据的方法，具体怎么获取列表数据大家自行发挥
var queryList = function (that, direction) {
  console.log("enter queryList")
  that.setData({
    hidden: false
  });


  wx.request({
    url: domain,
    data: { page: page, pageSize: pageSize },
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function (res) {
      // success
      console.log("my res");
      console.log(res);
      if (res != null && res.data  && res.data.list.length > 0) {
        let curDatas = that.data.contentArray.concat(res.data.list)
        that.setData({ contentArray: curDatas });
      }
      page = page + 1;

      that.setData({
        hidden: true
      });


    },
    fail: function (e) {
      // fail
      console.log("fail")
      console.log(e)
    },
    complete: function () {
      // complete
    }
  })
}