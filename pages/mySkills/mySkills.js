// pages/mySkills/mySkills.js
/**
 * @info:本界面的功能，跟新技能列表，获取技能列表
 */
const WxService = require(`../../services/wxService`);
Page({
  data: {
    skillsArray:["react.js","React-Native","微信小程序"],
    isAddSkill: false,
    inputValue:'',
    canSave: false
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
  addSkillEvent: function(){
    this.setData({
      isAddSkill: true
    })
  },
  blurEvent: function(){
    this.data.inputValue && this.data.skillsArray.push(this.data.inputValue);
    if(!this.data.inputValue){
      WxService.showToast("技能不能为空");
      this.setData({
        isAddSkill: false
      })
      return
    }
    this.setData({
      isAddSkill: false,
      skillsArray: this.data.skillsArray,
      inputValue:'',
      canSave: true
    })
  },
  inputEvent: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  }
})