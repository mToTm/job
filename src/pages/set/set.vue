<template>
  <div class="mj-fit clearfix">
    <div class="mj-fit-aside fl">
      <el-menu :default-active="activePath"
               class="el-menu-vertical-demo"
               active-text-color="#2ED775"
               router>
        <el-menu-item index="/set/basicinfo">
          <i class="iconfont icon-gaikuang"></i>
          <span slot="title">公司信息</span>
        </el-menu-item>
        <el-menu-item index="/set/booked">
          <i class="iconfont icon-yuyue"></i>
          <span slot="title">已预约</span>
        </el-menu-item>
        <el-menu-item index="/set/interviewed">
          <i class="iconfont icon-mianshi"></i>
          <span slot="title">已面试</span>
        </el-menu-item>
        <el-menu-item index="/set/mycollection">
          <i class="iconfont icon-wodeshoucang"></i>
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-menu-item index="/set/resumedownloaded">
          <i class="iconfont icon-yixiazaijianli"></i>
          <span slot="title">已下载简历</span>
        </el-menu-item>
        <!-- <el-menu-item index="/set/changepassword">
          <i class="iconfont icon-mimaxiugai"></i>
          <span slot="title">密码修改</span>
        </el-menu-item>
        <el-menu-item index="/set/changephone">
          <i class="iconfont icon-xiugaishoujihao"></i>
          <span slot="title">手机号修改</span>
        </el-menu-item> -->
      </el-menu>
    </div>
    <div class="mj-fit-content fl">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    // 获取需要高亮的哈希值
    activePath () {
      const { path } = this.$route
      const pathArr = path.split('/')
      return pathArr.length === 4 ? '/' + pathArr[1] : path
    }
  }

}
</script>
<style lang="less" scoped>
.mj-fit-aside {
  width: 250px;
  height: 472px;
  border-radius: 10px;
  padding: 36px 47px;
  background-color: #fff;
  box-shadow: 0 0 7px 4px #ebecee;
  margin-right: 22px;
  ul {
    height: 100%;
    li {
      margin-bottom: 28px;
    }
  }
}
.el-menu {
  border: none;
}
.el-menu-item {
  font-size: 16px;
  color: #666666;
  background-color: #fff !important;
  .iconfont {
    font-size: 25px;
    margin-right: 25px;
  }
}
</style>
