<template>
  <div>
    <!--    头部开始 -->
    <div style="height: 60px; background-color: #3c7fff; display: flex; align-items: center">
      <div style="width: 200px; display: flex; align-items: center; padding-left: 15px">
        <img style="width: 40px" src="@/assets/logo.png" alt="">
        <span style="font-size: 22px; color: white; margin-left: 5px">后台管理系统</span>
      </div>
      <div style="flex: 1"></div>
      <div style="width: fit-content; display: flex; align-items: center; padding-right: 10px">
        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" style="width: 40px; height: 40px">
        <span style="color: white; margin-left: 5px">{{ data.user.name }}</span>
      </div>
    </div>
    <!--    头部结束 -->
    <!--    下面部分开始 -->
    <div style="display: flex">
      <!-- 左侧导航菜单开始 -->
      <div  style="width: 200px; border-right: 1px solid #ddd; min-height: calc(100vh - 60px)">
        <!-- :default-openeds="['1']" -->
        <el-menu router :default-active="router.currentRoute.value.path" style="border: 0">
          <el-menu-item index="/manager/home">
          <el-icon><House /></el-icon>
          系统首页
          </el-menu-item>
          <el-menu-item index="/manager/data">
            <el-icon><DataAnalysis /></el-icon>
            数据统计
          </el-menu-item>
          <!-- <el-sub-menu index="1"> 默认展开，↓替换下测试 -->
          <el-sub-menu index="">
            <template #title>
              <el-icon><UserFilled /></el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/manager/admin">管理员信息</el-menu-item>
            <el-menu-item index="/manager/employee">员工信息</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/manager/person">
            <el-icon><User /></el-icon>
            个人信息
          </el-menu-item>
          <el-menu-item index="/manager/password">
            <el-icon><Lock /></el-icon>
            修改密码
          </el-menu-item>
          <el-menu-item @click="logout">
            <el-icon><SwitchButton /></el-icon>
            退出登录
          </el-menu-item>
        </el-menu>
      </div>
      <!-- 左侧导航菜单结束 -->
      <!-- 右侧展示区开始 -->
      <div style="flex: 1; width: 0; background-color: #f5f7ff; padding: 10px">
        <RouterView @updateUser="updateUser" />
      </div>
      <!-- 右侧展示区结束 -->
    </div>
    <!-- 下面部分结束 -->
    <!--  底部  -->
    <el-footer height="40px" class="footer" style="display: flex; justify-content: center; align-items: center;">
      Copyright © 2021-2025 wzx All Rights Reserved.
    </el-footer>
  </div>
</template>

<script setup>
import {DataAnalysis, House, SoldOut, UserFilled} from "@element-plus/icons-vue";
import router from "@/router/index.js";
import { reactive,ref } from "vue";
import Password from "@/views/Password.vue";

const data = reactive({
  user: JSON.parse(localStorage.getItem('xm-pro-user'))
})

const logout = () => {
  localStorage.removeItem('xm-pro-user') //清除当前登录的用户缓存数据
  location.href = '/login' //退出到登录页面
}

const updateUser =  () => {
  data.user = JSON.parse(localStorage.getItem('xm-pro-user'))
}
</script>

<!--当前激活的菜单项（通过添加 .is-active 类来标记）会有特定的背景颜色 (#e6ecf7)，从而让用户清晰地看到哪个菜单项是当前选中的。-->
<style>
.el-menu .is-active {
  background-color: #e6ecf7 !important;
}
.el-sub-menu__title {
  background-color: white !important;
}
</style>