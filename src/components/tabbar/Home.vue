<template>
	<div class="app-container">
        <!-- 顶部 Header 区域 -->
    <header class="mui-bar mui-bar-nav">
      <a class="mui-icon mui-icon-camera mui-pull-left"></a>
      <span class="mui-title">关注</span>
      <a class="mui-icon mui-icon-plusempty mui-pull-right"></a>
    </header>
	<!-- 轮播图 -->
<!--   <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
  	<img :src="item.imgUrl">
  </mt-swipe-item>
  </mt-swipe> -->
    <div class="mui-content">
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
           <img src="../../images/1.jpg">
          <div class="mui-media-body">  
            人民日报
            <p>发表于 2016-06-30 15:30</p>
          </div>
        </div>
        <div class="mui-card-content" >
          <div class="mui-card-content-inner">
            包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
          </div>
          <div class="img">
            <img src="../../images/686157d7ly1fxpd3jr0clj222o340u15.jpg" data-preview-src="" data-preview-group="1" height="1035" width="690">
            <img src="../../images/686157d7ly1fxpd41rhufj22c03404qq.jpg" data-preview-src="" data-preview-group="1" height="920" width="690">
            <img src="../../images/686157d7ly1fxpd449lyzj22c03401ky.jpg" data-preview-src="" data-preview-group="1" height="920" width="690">
          </div>
        </div>
       <div class="mui-card-footer">
        <span class="mui-icon mui-icon-compose"></span>
        <span class="mui-icon mui-icon-chatboxes"></span>
        <span class="mui-icon mui-icon-star"></span>
      </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
           <img src="../../images/1.jpg">
          <div class="mui-media-body">  
            新京报
            <p>发表于 2018-12-04 15:30</p>
          </div>
        </div>
        <div class="mui-card-content" >
          <div class="mui-card-content-inner">
            包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
          </div>
          <div class="img">
            <img src="../../images/686157d7ly1fxpd3jr0clj222o340u15.jpg" height="1035" width="690">
            <img src="../../images/686157d7ly1fxpd41rhufj22c03404qq.jpg" height="920" width="690">
            <img src="../../images/686157d7ly1fxpd449lyzj22c03401ky.jpg" height="920" width="690">
          </div>
        </div>
       <div class="mui-card-footer">
        <span class="mui-icon mui-icon-compose"></span>
        <span class="mui-icon mui-icon-chatboxes"></span>
        <span class="mui-icon mui-icon-star"></span>
      </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
           <img src="../../images/1.jpg">
          <div class="mui-media-body">  
            朗姆XX
            <p>发表于 2018-11-24 15:30</p>
          </div>
        </div>
        <div class="mui-card-content" >
          <div class="mui-card-content-inner">
            包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
          </div>
          <div class="video">
            <video :src="videoSrc" id="videoPlay" controls width="100%" height="150"></video>
          </div>
        </div>
       <div class="mui-card-footer">
        <span class="mui-icon mui-icon-compose"></span>
        <span class="mui-icon mui-icon-chatboxes"></span>
        <span class="mui-icon mui-icon-star"></span>
      </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
           <img src="../../images/1.jpg">
          <div class="mui-media-body">  
            轻松搞笑连连看
            <p>发表于 2017-10-30 19:30</p>
          </div>
        </div>
        <div class="mui-card-content" >
          <div class="mui-card-content-inner">
            包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
          </div>
          <div class="img">
            <img src="../../images/686157d7ly1fxpd3jr0clj222o340u15.jpg" height="1035" width="690">
            <img src="../../images/686157d7ly1fxpd41rhufj22c03404qq.jpg" height="920" width="690">
            <img src="../../images/686157d7ly1fxpd449lyzj22c03401ky.jpg" height="920" width="690">
          </div>
        </div>
       <div class="mui-card-footer">
        <span class="mui-icon mui-icon-compose"></span>
        <span class="mui-icon mui-icon-chatboxes"></span>
        <span class="mui-icon mui-icon-star"></span>
      </div>
      </div>
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
           <img src="../../images/1.jpg">
          <div class="mui-media-body">  
            国际在线新闻
            <p>发表于 5分钟前</p>
          </div>
        </div>
        <div class="mui-card-content" >
          <div class="mui-card-content-inner">
            包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
          </div>
          <div class="video">
            <video :src="videoSrc" id="videoPlay" controls width="100%" height="150"></video>
          </div>
        </div>
       <div class="mui-card-footer">
        <span class="mui-icon mui-icon-compose"></span>
        <span class="mui-icon mui-icon-chatboxes"></span>
        <span class="mui-icon mui-icon-star"></span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	lunbotuList:[],
      videoSrc:'../src/video/video.mp4' 
    }
  },
  created () {
  	this.getSlider();
  },
  methods:{
  	getSlider(){
  		this.$http.get("http://xiyangkeji.cn/user/images").then(
  			result=> {
  				this.lunbotuList = result.body.image;
  				
  			}
  			)
  	}
  // 	this.$ajax({
  // 		method:'get',
  // 		url:'http://xiyangkeji.cn/user/images'
  // 	}).then(response=>{
  // 		console.log(response);
  // 	})
  }
}
</script>

<style lang="scss" scoped>
  .app-container {
    overflow-x: hidden;
    padding-bottom: 80px;
  }
  .mui-bar-nav {
    height:40px;
    background:#fff;
    line-height:40px;
    text-align:center;
    .mui-action-back {
    }
    span {
      font-size:15px;
      padding:2px 0;
    }
  }
	.mint-swipe {
    width:800px;
		height:500px;
    margin:50px auto;
  	   .mint-swipe-item {
	    img {
	      width:100%;
	      height:100%;
	    }
	}
	}
  .mui-card-header {
     img {
      border-radius:50%;
      width:30px;
      height:30px;
      border:1px solid orange;
  }
  .title {
    margin-left:10px;
    span:nth-child(1)  {
      color:orange;
      font-size:12px;
    }
    span:nth-child(2) {
      font-size:5px;
      color:#888;
    }
  }
  }
  .img {
    margin-left:15px;
    img {
      width:80px;
      height:80px;
    }
  }
  .video {
     width:90%;
     margin:auto;
     video {
      object-fit:fill;
     }
  }
  .mui-card-footer {
    .mui-icon {
      font-size:18px;
    }
  }
</style>