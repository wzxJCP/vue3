<template>
  <div style="background-color: #b1b89d">
    <div style="font-size: 24px;font-weight: bold;padding: 20px">
      这是父级页面，可以嵌套其他的子路由页面。
    </div>
    <div style="width: 50%;margin: 30px auto; padding: 20px;border: 1px solid #ccc;background-color: white">
      <RouterView />
    </div>
  </div>

</template>

<script setup>
</script>

<style scoped>
</style>

<!--记得在index.js中修改路由-->