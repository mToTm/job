<template>
  <div class="mj-home">
    <HeaderBar></HeaderBar>
    <div class="mj-info w1400">
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerBar'
import Footer from '@/components/footer'
export default {
  data () {
    return {

    }
  },
  components: {
    HeaderBar,
    Footer
  }
}
</script>

<style lang="less" scoped>
.mj-home {
  background-color: #f4f6f8;
  .mj-info {
    padding: 0 24px;
  }
}
</style>
