<template>
  <div>
    <!--    头部开始 -->
    <div style="height: 60px; background-color: #3c7fff">
    </div>
    <!--    头部结束 -->
    <!--    下面部分开始 -->
    <div style="display: flex">
      <!-- 左侧导航菜单开始 -->
      <div  style="width: 200px; border-right: 1px solid #ddd; min-height: calc(100vh - 60px)">
        <el-menu style="border: 0">
          <el-menu-item>系统首页</el-menu-item>
          <el-menu-item>数据统计</el-menu-item>
        </el-menu>
      </div>
      <!-- 左侧导航菜单结束 -->
      <!-- 右侧展示区开始 -->
      <div style="flex: 1; width: 0; background-color: #f5f7ff; padding: 10px">
        <RouterView />
      </div>
      <!-- 右侧展示区结束 -->
    </div>
    <!-- 下面部分结束 -->
  </div>
</template>

<script setup>
</script>
<style>

</style>