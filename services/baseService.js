const Promise = require('../vendor/bluebird.js');

let get = (url,data) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url,
      data,
      method: "GET",
      success: function(res){
        resolve(res);
      },
      fail: reject
    });
  });
}


let post = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method: "POST",
      success: function (res) {
        resolve(res);
      },
      fail: reject
    });
  });
}


module.exports = {
  get,
  post
}
