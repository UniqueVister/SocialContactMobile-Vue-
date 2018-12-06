<template>
	<div>
      <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
            <li class="mui-table-view-cell">
                <div class="mui-table">
                    <div class="mui-table-cell mui-col-xs-10">
                        <div class="mui-ellipsis">
                          <img src="../../images/1.jpg">
                          <div class="title">
                            <span>人民日报</span>
                            <span>5分钟前</span>
                          </div>
                           </div>
                           <video :src="videoSrc" id="videoPlay" controls width="100%" height="150"></video>
                        <p class="mui-h6">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，100元等你拿，李明明，申请交行信息卡，100元等你拿</p>
                    </div>
                </div>
            </li>
            <li class="mui-table-view-cell">
                <div class="mui-table">
                    <div class="mui-table-cell mui-col-xs-10">
                        <div class="mui-ellipsis">
                          <img src="../../images/1.jpg">
                          <div class="title">
                            <span>人民日报</span>
                            <span>5分钟前</span>
                          </div>
                           </div>
                           <video :src="videoSrc" id="videoPlay" controls width="100%" height="150"></video>
                        <p class="mui-h6">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，100元等你拿，李明明，申请交行信息卡，100元等你拿</p>
                    </div>
                </div>
            </li>
            <li class="mui-table-view-cell">
                <div class="mui-table">
                    <div class="mui-table-cell mui-col-xs-10">
                        <div class="mui-ellipsis">
                          <img src="../../images/1.jpg">
                          <div class="title">
                            <span>人民日报</span>
                            <span>5分钟前</span>
                          </div>
                           </div>
                           <video :src="videoSrc" id="videoPlay" controls width="100%" height="150"></video>
                        <p class="mui-h6">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，100元等你拿，李明明，申请交行信息卡，100元等你拿</p>
                    </div>
                </div>
            </li>
            <li class="mui-table-view-cell">
                <div class="mui-table">
                    <div class="mui-table-cell mui-col-xs-10">
                        <div class="mui-ellipsis">
                          <img src="../../images/1.jpg">
                          <div class="title">
                            <span>人民日报</span>
                            <span>5分钟前</span>
                          </div>
                           </div>
                           <video :src="videoSrc" id="videoPlay" controls width="100%" height="150"></video>
                        <p class="mui-h6">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，100元等你拿，李明明，申请交行信息卡，100元等你拿</p>
                    </div>
                </div>
            </li>
            <li class="mui-table-view-cell">
                <div class="mui-table">
                    <div class="mui-table-cell mui-col-xs-10">
                        <div class="mui-ellipsis">
                          <img src="../../images/1.jpg">
                          <div class="title">
                            <span>人民日报</span>
                            <span>5分钟前</span>
                          </div>
                           </div>
                           <video :src="videoSrc" id="videoPlay" controls width="100%" height="150"></video>
                        <p class="mui-h6">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，100元等你拿，李明明，申请交行信息卡，100元等你拿</p>
                    </div>
                </div>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	videoSrc:'../src/video/video.mp4'                           
    }
  }
}
</script>

<style lang="scss" scoped>
  .mui-ellipsis {
    display:flex;
    line-height:30px;
     img {
      border-radius:50%;
      width:30px;
      height:30px;
      border:1px solid orange;
  }
  .title {
    margin-left:10px;
    margin-bottom:10px;
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
  video {
  	 object-fit:fill;
  }
</style>