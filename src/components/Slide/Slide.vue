<template>
	<div>
	<!-- 轮播图 -->
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
  	<img :src="item.imgUrl">
  </mt-swipe-item>
  </mt-swipe>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	lunbotuList:[]
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
</style>