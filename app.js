//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {

          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://test.com/onLogin',
              data: {
                code: res.code
              }
            })



            wx.getUserInfo({
              success: function (res) {
                console.log(res)
                var userInfo = res.userInfo
                var nickName = userInfo.nickName
                var avatarUrl = userInfo.avatarUrl
                var gender = userInfo.gender //性别 0：未知、1：男、2：女 
                var province = userInfo.province
                var city = userInfo.city
                var country = userInfo.country

                that.globalData.userInfo = userInfo;
                typeof cb == "function" && cb(userInfo)
              }
            })



          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });


    }
  },
  getExpressInfo: function (nu, cb) {
    /**
    wx.request({
      url: 'https://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu=' + nu,
      data: {
        x: '',
        y: ''
      },
      header: {
        'apikey': '20038532389455fb0691247cb534cb15'
      },
      success: function (res) {
        // console.log(res.data)

        cb(res.data)
      }
    })
**/
  },
  globalData: {
    userInfo: null,
    weixincontents_url: 
    'https://wanghuiyang.top/work/api/littleWechatApi/' 
  }
})
