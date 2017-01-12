//location.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    point:{
      latitude: 23.114155,
      longitude: 113.318977
    },
    markers: []
  },
  onLoad: function() {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function( res ) {
        //我这里测试获取的数据一直是一样的（TIT创意园），官方接口没真正开放，还是没发布的原因
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        // var point={
        //      latitude: latitude,
        //      longitude: longitude
        // }
        // var markers = [{
        //   latitude: latitude,
        //   longitude: longitude,
        //   name: '地图定位',
        //   desc: '我现在的位置'
        // }];
        // that.setData( markers );
        // that.setData( point );

        wx.openLocation({
          latitude: latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: longitude, // 经度，范围为-180~180，负数表示西经
          scale: 28, // 缩放比例          
        });


      }
    });

  }
})
