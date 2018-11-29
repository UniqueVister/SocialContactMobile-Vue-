<template>
	<div class="app-container">
    <!-- 顶部 Header 区域 -->
  <mt-header fixed title="测 试"></mt-header>

      <!-- 中间的 路由 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .app-container {
    padding: 20px;
    overflow-x: hidden;
  }


</style>