<template>
  <div class="demo">
    <el-input placeholder="请输入内容" v-model="input10" clearable>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      input10: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
