// pages/search/search.js
const db=wx.cloud.database()
Page({ 


  /**
   * Page initial data
   */
  data: {
    dataObj:""
  
  },
  //查询数据
    getData(){
      //wx.request({
      //  url: 'url',
      //  data:{},
      //  success:res=>{}
      //})
      //console.log(123)

      //  db.collection("demo").get().then(res=>{
      //    this.setData({
      //      dataObj:res.data
      //    })
      //  })

      db.collection("demo").where({
        author:"张三"
      }).get()
      .then(res=>{
        this.setData({
          dataObj:res.data
        })
      })
          
        
    },
    //添加数据
    addData(){
      wx.showLoading({
        title: 'loading',
        mask:true
      })
      db.collection("demo").add({
        data:{
          title:"测试标题2",
          author:"李四",
          content:"testing contenttesting contenttesting contenttesting contenttesting contenttesting contenttesting contenttesting contenttesting content"
        }
      }).then(res=>{
        console.log(res)
        wx.hideLoading()
      })
    },

    // 提交表单
    btnSub(res){
      
      //var title= res.detail.value.title;
      //var author= res.detail.value.author;
      //var content= res.detail.value.content;

      // var {title,author,content} = res.detail.value;
      var resVlu= res.detail.value;
     
      db.collection("demo").add({
        data:resVlu
      }).then(res=>{
        console.log(res)
      }
      )
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