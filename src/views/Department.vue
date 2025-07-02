<template>
  <div>
    <div class="card" style="margin-bottom: 5px">
      <el-input style="width: 240px; margin-right: 10px" v-model="data.deptName" placeholder="请输入部门名称" prefix-icon="Search"></el-input>
      <el-button type="primary" @click="load">查 询</el-button>
      <el-button type="warning" @click="reset">重 置</el-button>
    </div>
    <div class="card" style="margin-bottom: 5px">
      <el-button type="primary" @click="handleAdd">新 增</el-button>
      <el-button type="warning" @click="deleteByIds(ids)">批量删除</el-button>
    </div>
    <div class="card" style="margin-bottom: 5px">
      <el-table :data="data.tableData" stripe @selection-change="handleSelectionChange" index="">
        <el-table-column type="selection" width="55"/>
        <el-table-column label="部门" prop="deptName" />
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button @click="handleUpdate(scope.row)" type="primary" :icon="Edit" circle></el-button>
            <el-button @click="del(scope.row)" type="danger" :icon="Delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 10px">
        <el-pagination
            @size-change="load"
            @current-change="load"
            v-model:current-page="data.pageNum"
            v-model:page-size="data.pageSize"
            :page-sizes="[5, 10, 15, 20]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.total"
        />
      </div>
    </div>
    <el-dialog v-model="data.formVisible" title="编辑部门信息" width="500" destroy-on-close>
      <el-form ref="formRef" :rules="data.rules" :model="data.form" style="padding-right: 40px; padding-top: 20px" label-width="80px">
        <el-form-item label="名称" prop="deptName">
          <el-input v-model="data.form.deptName" autocomplete="off" placeholder="请输入部门名称"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="data.formVisible = false">取 消</el-button>
          <el-button type="primary" @click="save">保 存</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {reactive,ref} from "vue";
import {Delete, Edit, Search} from "@element-plus/icons-vue";
import request from "@/utils/request.js";
import {ElMessage, ElMessageBox} from "element-plus";

const data = reactive({
  deptName: null,
  tableData: [],
  pageNum: 1,
  pageSize:10,
  total: 0,
  formVisible: false,
  form: {},
  ids: [],
  rules: {
    deptName: [
        { required: true, message: "请输入名称", trigger: "blur" },
    ],
  }
})

const formRef = ref();

const load = () => {
  request.get('/department/selectPage', { // ?pageNum=0$pageSize=10
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      deptName: data.deptName,
    }
  }).then(res => {
    // console.log(res.data)
    data.tableData = res.data.list
    data.total = res.data.total
  })
}
load()

const reset = () => {
  data.deptName = null
  load()
}

const handleAdd = () => {
  data.formVisible = true
  data.form = {}
}

const save = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      data.form.id ? update() : add()
    }
  })
}

const add = () => {
  request.post('/department/add', data.form).then(res => {
    if (res.code === '200') {
      data.formVisible = false
      ElMessage.success('新增成功！')
      load()
    } else {
      ElMessage.error('res.msg')
    }
  }).catch(() => {
})
}

const handleUpdate = (row) => {
  data.form = JSON.parse(JSON.stringify(row))
  data.formVisible = true
}

const update = () => {
  request.put('/department/update', data.form).then(res => {
    if (res.code === '200') {
      data.formVisible = false
      ElMessage.success('更新成功！')
      load()
    } else {
      ElMessage.error('res.msg')
    }
  })
}

const del = (row) => {
  ElMessageBox.confirm(`是否确认删除部门为 ${row.deptName} 的数据？`, '删除确认', { type: 'warning' }).then(() => {
    request.delete('/department/deleteById/' + row.id).then(res => {
      if (res.code === '200') {
        ElMessage.success('删除成功！')
        load()
      } else {
        ElMessage.error('res.msg')
      }
    })
  }).catch(() => {
  // 可选：处理取消操作
  ElMessage.info('已取消删除！')
  })
}

const handleSelectionChange = (row) => {
  data.ids = row.map(row => row.id)
  console.log(data.ids)
}

const deleteByIds = () => {
  if (data.ids.length === 0) {
    ElMessage.warning('请先选择要删除的数据')
    return
  }
  ElMessageBox.confirm(`是否确认批量删除编号为 ${data.ids} 的数据？`, '批量删除确认', { type: 'warning' }).then(() => {
    request.delete('/department/deleteByIds', {data: data.ids}).then(res => {
      if (res.code === '200') {
        ElMessage.success('批量删除成功！')
        load()
      } else {
        ElMessage.error(res.msg)
      }
    })
  }).catch(() => {
    ElMessage.info('已取消批量删除！')
  })
}
</script>

<style scoped>
.card {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>