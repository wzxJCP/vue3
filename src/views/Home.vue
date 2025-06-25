<template>
  <div style="margin-bottom: 20px">
    <RouterLink to="/test">通过RouterLink跳转到Test.vue</RouterLink> |
    <a href="/test">通过a标签跳转到Test.vue</a>
  </div>
  <div>
    <el-button type="primary" @click="router.push('/test')">puth跳转到新的test页面</el-button>
    <el-button type="primary" @click="router.replace('/test')">replace跳转到新的test页面</el-button>
  </div><br>
  <div style="margin-bottom: 20px">
    <!-- 方法一 -->
<!--    <el-button type="primary" @click="router.push('/test?id=2&name=小茗同学')">路由传参id=2&name=小茗同学</el-button>-->
    <!-- 方法二 -->
    <el-button type="primary" @click="router.push({path:'/manager/test',query:{id:2,name:'小茗同学'}})">路由传参id=2&name=小茗同学</el-button>
  </div>
  <hr style="border: none; border-top: 2px solid #ff5900;">
  <div style="margin-bottom: 20px" >
  <el-input v-model="data.input" style="width: 240px" placeholder="请输入内容" /> {{data.input}} <br>
    <el-input v-model="data.input" style="width: 240px" placeholder="请输入内容" disabled/> {{data.input}}<br>
    <el-input style="width: 240px" placeholder="请输入内容" :prefix-icon="Calendar"/><br>
    <el-input style="width: 240px" placeholder="请输入内容" :suffix-icon="Search"/><br>
    <el-input v-model="data.t" style="width: 240px" placeholder="请输入内容" type="textarea"/> <br>
  </div>
  <hr style="border: none; border-top: 2px solid #37ff00;">
  <div style="margin-bottom: 20px">
    <el-select
        clearable
        multiple
        value-key="id"
        v-model="data.value"
        placeholder="请选择"
        size="large"
        style="width: 240px"
    >
      <el-option
          v-for="item in data.options"
          :key="item.id"
          :label="item.label"
          :value="item.name"
      />
    </el-select>{{data.value}}
  </div>
  <hr style="border: none; border-top: 2px solid #37ff00;">
  <div style="margin: 20px 0">
    <el-radio-group v-model="data.sex">
      <el-radio value="男">男</el-radio>
      <el-radio value="女">女</el-radio>
    </el-radio-group><span style="margin-left: 50px">:{{data.sex}}</span>
    <!-- 按钮样式-->
    <el-radio-group style="margin-left: 100px" v-model="data.tag" size="large">
      <el-radio-button label="New York" value="1" />
      <el-radio-button label="Washington" value="2" />
      <el-radio-button label="Los Angeles" value="3" />
      <el-radio-button label="Chicago" value="4" />
    </el-radio-group>
  </div>
  <hr style="border: none; border-top: 2px solid #37ff00;">
<!--  <div>-->
<!--    <el-checkbox-group v-model="dada.checkList">-->
<!--      <el-checkbox label="Option 1" size="large" />-->
<!--      <el-checkbox label="Option 2" />-->
<!--      <el-checkbox label="Option 3" size="small" />-->
<!--      </el-checkbox-group>-->
<!--  </div>-->
  <div style="margin: 20px 0">
    <el-checkbox-group v-model="data.checkList">
      <el-checkbox v-for="item in data.options" :key="item.id" :value="item.name" :label="item.label" />
    </el-checkbox-group>
    <span style="margin-left: 20px">{{data.checkList}}</span>
  </div>
    <!-- 其他内容 加分割线 -->
    <hr style="border: none; border-top: 2px solid #37ff00;">
  <div style="margin: 20px 0">
    <img src="@/assets/logo.svg" alt="" style="width: 100px">
    <el-image :src="img" alt="" style="width: 80px" :preview-src-list="[img,'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg']"/>
  </div>
  <hr style="border: none; border-top: 2px solid red;">
  <div style="margin: 20px 0">
    <el-carousel height="180px" style="width: 320px">
      <el-carousel-item v-for="item in data.imgs" :key="item">
        <img style="width: 100%;height:100%" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <hr style="border: none; border-top: 2px solid red;">
  <div style="margin: 20px 0">
    <el-date-picker
        v-model="data.date"
        type="date"
        placeholder="Pick a day"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
    />{{data.date}}
    <el-date-picker
        style="margin-left: 100px"
        v-model="data.date1"
        type="datetime"
        placeholder="Pick a day"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD HH:mm:ss"
    />{{data.date1}}
    <el-date-picker
        v-model="data.daterange"
        type="datetimerange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
    />{{data.daterange?.length ? data.daterange[0] : ''}} {{data.daterange?.length ? data.daterange[1] : ''}}
  </div>
  <hr style="border: none; border-top: 2px solid red;">
  <div>
    <el-table :data="data.tableData" height="250" style="width: 100%" stripe border>
      <el-table-column prop="date" label="Date" width="180" header-align="center"/>
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="Edit">
        <template #default="scope">
          <el-button type="primary" @click="edit(scope.row)">
            <el-icon><Edit /></el-icon>
          </el-button>
          <el-button type="danger" @click="del(scope.row.id)">
            <el-icon><Delete /></el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <hr style="border: none; border-top: 2px solid red;">
  <!-- 分页 -->
  <div style="margin: 10px 0">
    <el-pagination
        v-model:current-page="data.currentPage"
        v-model:page-size="data.pageSize"
        :page-sizes="[5, 10, 15, 20]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="8"
    />
  </div>
  <el-dialog v-model="data.dislogVisible" title="编辑行对象" width="500">
    <div style="padding: 20px">
      <div style="margin-bottom: 10px">日期：{{ data.row.date }}</div>
      <div style="margin-bottom: 10px">名称：{{ data.row.date }}</div>
      <div>地址：{{data.row.address}}</div>
    </div>
  </el-dialog>
</template>

<script setup>
import { reactive } from 'vue'
import {Calendar, Delete, Edit, Search} from '@element-plus/icons-vue'
import img from '@/assets/logo.svg'
import lun1 from '@/assets/lun1.jpg'
import lun2 from '@/assets/lun2.jpg'
import lun3 from '@/assets/lun3.jpg'
import router from '@/router/index.js'
import request from "@/utils/request.js";
const data = reactive({
  input: '签收单收到',
  t: '才能够共和国啊实打实大搜索根深蒂固手打干撒代发王企鹅啊实打实大师大师大沙发沙发沙发沙发问起过短发激发光',
  value: '',
  options: [{id: 1,label:'苹果', name:'苹果1'},{id: 2,label:'香蕉', name:'香蕉'},
    {id: 3,label:'桃子', name:'桃子'},{id: 4,label:'苹果', name:'苹果2'}],
  sex: '男',
  tag: '3',
  checkList: [],
  imgs:[lun1,lun2,lun3],
  date: '',
  date1: '',
  daterange: null,
  currentPage: 1,
  pageSize: 5,
  tableData: [
      {id:1,date:'2025-05-15', name:'小明', address:'云南昆明'},
    {id:2,date:'2025-05-15', name:'小张', address:'浙江杭州'},
    {id:3,date:'2025-05-15', name:'小王', address:'广东深圳'},
    {id:4,date:'2025-05-15', name:'小王', address:'广东深圳'},
    {id:5,date:'2025-05-15', name:'小王', address:'广东深圳'},
    {id:6,date:'2025-05-15', name:'小王', address:'广东深圳'},
    {id:7,date:'2025-05-15', name:'小王', address:'广东深圳'},
    {id:8,date:'2025-05-15', name:'小王', address:'广东深圳'}],
  dislogVisible: false,
  row: null,
  employeesList: [],
})

// 使用 request 对象发起一个 GET 请求到指定的 URL
request.get('/employee/selectAll').then(res => {
  // 请求成功后执行此回调函数，res 是服务器返回的数据
  // 将响应结果打印到控制台，用于调试查看完整返回内容
  console.log(res);
  // 将服务器返回的数据部分（通常是 res.data）赋值给 data.employeesList
  // 假设 data 是 Vue 组件中的 data 属性或类似的状态管理对象
  data.employeesList = res.data;
  // 打印赋值后的 employeesList 数据，确认数据是否正确接收和存储
  console.log(data.employeesList);
});

const del = (id) => {
  alert("确定删除ID=" + id + "的数据？")
}
const edit = (row) => {
  data.row = row
  data.dislogVisible = true
}
</script>

<style scoped>
</style>
<script setup lang="ts">
</script>