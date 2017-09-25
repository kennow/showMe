// pages/trip/trip.js
Page({
  data: {
    avatarUrl:'/assets/icons/userImg.png',
    commentsList: [{
      avatarUrl: '/assets/icons/userImg.png',
      nickName: '山花烂漫时',
      commentTime: '2017-09-25 15:03:18',
      commentContent: '我觉得，这是应该是我的评论！',
      commentImageList: [{
        imgSrc: '/assets/images/trip4.jpg'
      }]
    }, {
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJwfOvCXFum9hg72QRBZ8ibZpHTWsNSlRicExaFM1hEtrMImtY1jvhTVboN14JGufNk6CAdicsBAOlRA/0",
      nickName: '山花烂漫时',
      commentTime: '2017-09-25 15:03:18',
      commentContent: '我觉得，这是应该是我的评论！',
      commentImageList: [{
        imgSrc: '/assets/images/trip5.jpg'
      }]
    }]
  },
  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  onShow: function () {
    this.getUserInfo();
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  },
  getUserInfo: function(){
    let _this = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        _this.setData({
          avatarUrl,
          userInfo,
          nickName
        })
      }
    })
  }
})