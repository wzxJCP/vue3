<template>
  <div>
    <div class="card" style="margin-bottom: 5px">
      <el-input style="width: 240px; margin-right: 10px" v-model="data.name" placeholder="请输入名称" prefix-icon="Search"></el-input>
      <el-button type="primary">查 询</el-button>
      <el-button type="warning">重 置</el-button>
    </div>
    <div class="card" style="margin-bottom: 5px">
      <el-button type="primary">新 增</el-button>
      <el-button type="warning">批量删除</el-button>
      <el-button type="info">导 入</el-button>
      <el-button type="success">导 出</el-button>
    </div>
    <div class="card" style="margin-bottom: 5px">
      <el-table :data="data.tableData" stripe>
        <el-table-column label="日期" prop="date" />
        <el-table-column label="名称" prop="name" />
        <el-table-column label="地址" prop="address" />
      </el-table>
      <div style="margin: 10px 0">
        <el-pagination
            v-model:current-page="data.pageNum"
            v-model:page-size="data.pageSize"
            :page-sizes="[5, 10, 15, 20]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.total"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {Search}  from "@element-plus/icons-vue";

const data = reactive({
  name: '',
  tableData: [
    {id: 1, date: '2025-05-15', name: '小明', address: '云南昆明'},
    {id: 2, date: '2025-05-15', name: '小张', address: '浙江杭州'},
    {id: 3, date: '2025-05-15', name: '小王', address: '广东深圳'},
  ],
  pageNum: 1,
  pageSize:5,
  total: 55,
})
</script>

<style scoped>
.card {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>