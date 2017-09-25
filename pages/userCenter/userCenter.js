// pages/userCenter/userCenter.js

let WxService = require("../../services/wxService.js");
Page({
  
  data: {},
  
  onLoad: function (options) {
    
  },
  
  onReady: function () {},
  
  onShow: function () {},
  
  onHide: function () {},
  
  onUnload: function () {},
  
  onPullDownRefresh: function () {},
  
  onReachBottom: function () {},
  
  onShareAppMessage: function () {},

  /**
   * @事件部分--页面跳转
   */
  changeMeEvent: function() {
    this.goto(`/pages/changeMe/changeMe`);
  },
  lifePhotoEvent: function(){
    this.goto(`/pages/lifePhotos/lifePhotos`);
  },
  goodArticleEvent: function(){
    this.goto(`/pages/goodArticle/goodArticle`);
  },
  spiritualGrowthEvent: function(){
    this.goto(`/pages/spiritualGrowth/spiritualGrowth`);
  },
  tripEvent: function(){
    this.goto(`/pages/trip/trip`);
  },
  projectsEvent: function(){
    this.goto(`/pages/projects/projects`);
  },
  myGirlEvent: function(){
    this.goto(`/pages/myGirl/myGirl`)
  },
  goto: function(page,success,fail){
    WxService.navigateTo(page, success, fail);
  }
})