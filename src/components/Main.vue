<template>
  <div class="main">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/user">文章</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
