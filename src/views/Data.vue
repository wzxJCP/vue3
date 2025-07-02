<template>
  <div>
<!--    <div style="display: flex; grid-gap: 10px">-->
<!--      <div class="card" style="flex: 1; height: 400px" id="bar"></div>-->
<!--      <div class="card" style="flex: 1; height: 400px" id="line"></div>-->
<!--    </div>-->
    <!-- 在Element UI的el-col组件中，:span="12"中的12表示该列在网格系统中所占的宽度。
         Element UI使用的是一个24列的栅格系统，这意味着整个页面被分为24个等宽的列。-->
    <el-row :gutter="10">
      <el-col :span="12" style="margin-bottom: 10px">
        <div class="card" style="padding: 20px; height: 400px" id="bar"></div>
      </el-col>
      <el-col :span="12" style="margin-bottom: 10px">
        <div class="card" style="padding: 20px; height: 400px" id="line"></div>
      </el-col>
      <el-col :span="12" style="margin-bottom: 10px">
        <div class="card" style="padding: 20px; height: 400px" id="pie"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import * as echarts from 'echarts';
import request from "@/utils/request.js";

const barOption = {
  title: {
    text: '各部门员工数量'
  },
  tooltip: {},
  legend:{
    data: ['人数'],
  },
  xAxis: {
    data: []
  },
  yAxis: {},
  series: [
    {
      name: '人数',
      type: 'bar',
      data: [],
      itemStyle: {
        color: function (params) {
          // 取余:0%9=0 1%9==1 2%9==2 9%9==0
          let colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
          // console.log(params.dataIndex);
          return colors[params.dataIndex % colors.length]
        }
      }
    },
  ]
};

const lineOption = {
  title: {
    text: '近7天发布文章的数量'
  },
  tooltip: {},
  legend:{
    trigger: 'item'
  },
  xAxis: {
    data: []
  },
  yAxis: {
    type: 'value',   // 设置 Y 轴为数值型轴，表示数据是数字类型
    interval: 1,     // 设置坐标轴刻度标签的显示间隔为 1，即每个数值都显示一个标签
    axisLabel: {     // 配置 Y 轴刻度标签的样式和行为
      formatter: function (value) {  // 自定义刻度标签的显示格式，接收一个值作为参数
        return Math.round(value);    // 将传入的数值四舍五入为最接近的整数，确保不显示小数
      }
    }
  },

  series: [
    {
      name: '发布数量',
      type: 'line',
      data: [],
      smooth: true,
    },
  ]
};

const pieOption = {
  title: {
    text: '各部门员工数量',
    // subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '员工数量',
      type: 'pie',
      radius: '50%',
      data: [],
      center: ['50%', '50%'],
      label: {
        formatter: '{b}: {@2012} ({d}%)'
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

const data = reactive({

})

onMounted(() => {
  // 接下来的使用就跟之前一样，初始化图表，设置配置项
  const barChart = echarts.init(document.getElementById('bar'))
  request.get('/barData').then(res => {
    // console.log(res.data)
    // 横轴数据
    barOption.xAxis.data = res.data.department;
    // 纵轴数据
    barOption.series[0].data = res.data.count;
    barChart.setOption(barOption);
  })

  // 接下来的使用就跟之前一样，初始化图表，设置配置项
  const lineChart = echarts.init(document.getElementById('line'))
  request.get('/lineData').then(res => {
    // console.log(res.data)
    // 横轴数据
    lineOption.xAxis.data = res.data.date;
    // 纵轴数据
    lineOption.series[0].data = res.data.count;
    lineChart.setOption(lineOption);
  })

  // 饼图
  const pieChart = echarts.init(document.getElementById('pie'))
  request.get('/pieData').then(res => {
    // console.log(res.data)
    // 纵轴数据
    pieOption.series[0].data = res.data
    pieChart.setOption(pieOption);
  })
})
</script>

<style scoped>
.card {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
}
</style>