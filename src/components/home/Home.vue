<template>
  <div class="hello">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="item.pic">
      </el-carousel-item>
    </el-carousel>
    <h1>我是首页的内容</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      banners: [
        {
          'pic': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541727654&di=41e5e9f1eef2414210a2f4628270ffe7&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F34fae6cd7b899e51ef51f53949a7d933c9950dc4.jpg'
        },
        {
          'pic': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541132941375&di=14af987e9fc8ac518ff42afe5ebfe34c&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fu%2F00%2F02%2F82%2F06%2F5625fb095e20c.jpg'
        },
        {
          'pic': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541132941374&di=2c728a8621e190cc4d6aae4326be046e&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F82%2F57%2F66%2F76c019124c13807e13e7ae5a67bf7e45.jpg'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
