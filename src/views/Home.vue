<template>
  <div>
    <!-- 主体 -->
    <el-row>
      <!-- 中间列 -->
      <el-col>
        <div class="system-intro">
          <h2>后台管理框架</h2>
          <p><strong>系统首页：</strong>这是管理员或用户登录后首先看到的页面，提供了系统的概览信息，帮助管理员快速了解当前系统的运行状态。<br>
            <strong>数据统计：</strong>此功能模块专注于收集和展示各种统计数据，如图中所示的各部门员工数量和近7天发布文章的数量。通过柱状图和折线图等可视化工具，可以直观地分析数据趋势，做出更明智的决策。<br>
            <strong>文章管理：</strong>这一部分允许管理员对系统中的文章进行创建、编辑、删除和审核等操作。这可能涉及到新闻、公告、博客帖子等内容的管理，确保信息的准确性和及时性。<br>
            <strong>部门管理：</strong>在这里，管理员可以查看和调整组织结构，包括添加、修改或删除部门，以及分配资源和权限给不同的部门。图中显示了各部门的员工数量，这有助于优化人力资源配置。<br>
            <strong>用户管理：</strong>管理员可以通过此功能管理系统的用户账户，包括创建新用户、导入导出员工信息。<br>
            <strong>个人信息：</strong>允许管理员查看和更新自己的个人资料，包括但不限于姓名、邮箱、头像等。<br>
            <strong>修改密码：</strong>提供了一个简单快捷的方式让管理员或用户更改自己的登录密码，增强账户的安全性。<br>
            <strong>退出登录：</strong>当管理员或用户完成工作后，可以使用此选项安全地退出系统，防止未经授权的访问。</p>
        </div>
      </el-col>
      <!-- 右侧列 -->
      <el-col>
        <div class="tech-stack">
          <h3>技术选型</h3>
          <div>
          <h4>后端技术选型：</h4>
          <ul>
            <li>核心框架：Spring Boot</li>
            <li>持久层框架：MyBatis</li>
            <li>数据库连接池：Druid</li>
            <li>工具类：Hutool、Lombok</li>
            <li>数据库：MySQL</li>
          </ul>
        </div>
          <!-- 将前端技术选型移到这里 -->
        <div>
        <h4>前端技术选型：</h4>
          <ul>
            <li>构建工具：Vite</li>
            <li>前端框架：Vue.js</li>
            <li>UI 框架：Element Plus</li>
            <li>HTTP 请求库：Axios</li>
            <li>数据可视化：ECharts</li>
            <li>路由管理：Vue Router</li>
            <li>包管理器：pnpm</li>
          </ul>
         </div>
        </div>
      </el-col>
      <el-col>
        <div class="update-log">
          <h3>更新日志</h3>
          <el-table :data="updateLog" style="width: 100%">
            <el-table-column prop="version" label="版本号"></el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="details" label="更新内容"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data() {
    return {
      updateLog: [
        {
          version: 'v1.8.1',
          date: '2025-07-01',
          details: '所有模块功能均已实现，后续如发现Bug将第一时间修复。'
        },
      ]
    };
  },
};
</script>

<style scoped>
.system-intro,
.tech-stack,
.update-log {
  border: 1px solid #ffffff;
  border-radius: 5px;
}

</style>