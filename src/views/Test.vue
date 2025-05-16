<template>
  <div>
    欢迎来到 Test 页！
  </div>
  <div>
    <el-button type="primary" @click="router.back()">返回主页</el-button>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import router from "@/router/index.js";
const data = reactive({
  id: router.currentRoute.value.query.id,
  name: router.currentRoute.value.query.name,
})
console.log('获取到传递过来的id= ' + data.id)
console.log('获取到传递过来的id= ' + data.name)
</script>
