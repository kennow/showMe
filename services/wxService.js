
//navigate导航相关
let navigateTo = (url, success, fail) => {
  wx.navigateTo({
    url: url,
    success: function (res) {
      success && success(res);
    },
    fail: function () {
      fail && fail();
    },
    complete: function () {
      // complete
    }
  })
}


let redirectTo = (url, success, fail) => {
  wx.redirectTo({
    url: url,
    success: function (res) {
      success && success(res)
    },
    fail: function () {
      fail && fail();
    }
  })
}

//catch处理相关



/**
 * @界面交互部分
 */

//显示loading加载中
let showLoading = (title,success,fail) => {
  wx.showLoading({
    title,
    mask: true,
    success,
    fail
  })
}
//隐藏loading
let hideLoading = () => {
  wx.hideLoading();
}

//显示toast
let showToast = (title) => {
  wx.showToast({
    title,
    icon: 'loading',
    duration: 2000
  })
}
//隐藏toast
let hideToast = () => {
  wx.hideToast();
}

module.exports  = {
  //导航
  navigateTo,
  redirectTo,
  //界面交互
  showLoading,
  hideLoading,
  showToast,
  hideToast,
  
}