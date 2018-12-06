<template>
	<div>
	<header class="mui-bar mui-bar-nav">
      <a class="mui-icon mui-icon-personadd mui-pull-left"></a>
      <span class="mui-title">我的</span>
      <a class="mui-icon mui-icon-gear mui-pull-right"></a>
    </header>
    <div class="user">
    	<img src="../../images/3.jpg">
    	<div class="username">
    		<div class="name">朗姆XX</div>
    		<div class="jies">简介:暂无介绍</div>
    	</div>
    </div>
	<div class="me">
		<span>发表</span>
		<span>关注</span>
		<span>粉丝</span>
	</div>
</div>
</template>

<script>
export default {

  name: 'Member',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.user {
		width:100%;
		background:#fff;
		margin-top:46px;
		display:flex;
		padding:10px;
		img {
			width:50px;
			height:50px;
			border-radius:50%;
			border:1px solid red;
		}
		.username {
			margin:5px 20px;
			.name {
				font-size:15px;
			}
			.jies {
				font-size:10px;
				color:#666;
			}
		}

	}
	.me {
		display :flex;
		justify-content:space-around;
		background:#fff;
		padding:10px 0;
		font-size:10px;
		color:#666;
	}
</style>