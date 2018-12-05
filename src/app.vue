<template>
	<div>
    <!-- 中间的 路由 router-view 区域 -->
	<transition>
		<router-view></router-view>
	</transition>

    <!-- tabbar -->
  <nav class="mui-bar mui-bar-tab mui-active">
    <router-link class="mui-tab-item" to="/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item" to="/video">
      <span class="mui-icon mui-icon-videocam"></span>
      <span class="mui-tab-label">视频</span>
    </router-link>
    <router-link class="mui-tab-item" to="/search">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">发现</span>
    </router-link>
    <router-link class="mui-tab-item" to="/message">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">20</span></span>
      <span class="mui-tab-label">消息</span>
    </router-link>
    <router-link class="mui-tab-item" to="/member">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">我的</span>
    </router-link>
  </nav>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  // .v-enter {
  //   opacity: 0;
  //   transform: translateX(100%);
  // }

  // .v-leave-to {
  //   opacity: 0;
  //   transform: translateX(-100%);
  //   position: absolute;
  // }

  // .v-enter-active,
  // .v-leave-active {
  //   transition: all 0.5s ease;
  // }


</style>