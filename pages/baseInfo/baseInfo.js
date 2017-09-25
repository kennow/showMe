// pages/baseInfo/baseInfo.js
const WxService = require('../../services/wxService');
Page({
  data: {
    name:'',
    phone:'',
    email:'',
    birthDay:'',
    sex:'',
    array: ['男', '女'],
    index: 0,
    time: '08:30',
    date: '2016-09-26'
  },
  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  onShow: function () {
  
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
  /**
   * @验证以及输入相关事件
   */
  inputNameEvent: function(e){
    let name = e.detail.value;
    this.setData({
      name: name
    })
  },
  blurNameEvent: function(){
    if (!this.data.name){
      WxService.showToast("姓名不能为空")
    }else if (!/^[A-Za-z0-9_\u4e00-\u9fa5]{3,16}$/.test(this.data.name)){
      WxService.showToast("姓名格式不正确");
    }
  },

  inputPhoneEvent: function(e){
    let phone = e.detail.value;
    this.setData({
      phone: phone
    })
  },
  blurPhoneEvent: function(){
    if(!this.data.phone){
      WxService.showToast("手机号不为空");
    }else if(!/^1[345678]\d{9}$/.test(this.data.phone) ){
      WxService.showToast("号码填写不正确");
    }
  },

  inputEmailEvent: function(e){
    let email = e.detail.value;
    this.setData({
      email:email
    })
  },
  blurEmailEvent: function(e){
    if (!this.data.email) {
      WxService.showToast("邮箱不为空");
    } else if (!/^1[345678]\d{9}$/.test(this.data.phone)) {
      WxService.showToast("邮箱填写不正确");
    }
  },
  /**
   * @导航相关事件
   */
  myPositionEvent: function(){
    this.goto("/pages/myPosition/myPosition");
  },
  mySpeakEvent: function(){
    this.goto("/pages/mySpeak/mySpeak");
  },
  jobIntentionEvent: function(){
    this.goto("/pages/jobIntention/jobIntention");
  },
  mySkillEvent: function(){
    this.goto("/pages/mySkills/mySkills");
  },
  goto: function (page, success, fail){
    WxService.navigateTo(page, success, fail);
  },
  /**
   * @picker监听器
   */
  //选择日期
  listenPickerChange: function(e){
    this.setData({
      birthDay:e.detail.value
    })
  },
  //性别选择
  listenerPickerSelected: function (e) {
    this.setData({
      index: e.detail.value
    });
  }, 
})