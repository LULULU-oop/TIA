const db=wx.cloud.database()
Page({
  data: {
    dataObj:"",
    array: ['none','busniess management', 'math', 'computer science', 'chinese'],
    objectArray: [
      {id: 0, name: 'none'},
      {id: 1, name: 'busniess management'},
      {id: 2, name: 'math'},
      {id: 3, name: 'computer science'},
      {id: 4, name: 'chinese'}
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })    
  },

  addData(){    
    db.collection("box").add({
      data:{
        subject:"index",
      }
    }).then(res=>{
      console.log(res)
    })
  },

  
  
  


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})