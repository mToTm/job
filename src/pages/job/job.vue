<template>
  <div class="mj-job clearfix">
    <template v-if="!hideJob">
      <router-view></router-view>
    </template>

    <div class="job-left-aside fl"
         v-if="hideJob">
      <el-menu :default-active="activePath"
               class="el-menu-vertical-demo"
               active-text-color="#2ED775"
               :router="true">
        <el-menu-item index="/job/survey">
          <i class="iconfont icon-gaikuang"></i>
          <span slot="title">概况</span>
        </el-menu-item>
        <el-menu-item index="/job/publishing">
          <i class="iconfont icon-fabu publishing"></i>
          <span slot="title">发布中</span>
        </el-menu-item>
        <el-menu-item index="/job/checkpending">
          <i class="iconfont icon-daishenhe"></i>
          <span slot="title">待审核</span>
        </el-menu-item>
        <el-menu-item index="/job/allpositions">
          <i class="iconfont icon-zhiwei1"></i>
          <span slot="title">所有职位</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="job-right-content fl"
         v-if="hideJob">
      <template v-if="hideJob">
        <router-view></router-view>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hideJob: true
    }
  },
  computed: {
    // 获取需要高亮的哈希值
    activePath () {
      const { path } = this.$route
      const pathArr = path.split('/')
      return pathArr.length === 4 ? '/' + pathArr[1] : path
    }
  },
  watch: {
    $route (to, from) {
      // console.log(to)
      // 解决回退出现的bug
      console.log(to.path)
      if (to.path === '/job/post' || to.path === '/job/receive') {
        this.hideJob = false
      } else {
        this.hideJob = true
      }
    }
  },
  // 防止在post页面刷新出现bug
  created () {
    // console.log(this.$route.path)
    const { path } = this.$route
    if (path === '/job/post' || path === '/job/receive') {
      this.hideJob = false
    }
  }

}
</script>

<style lang="less" scoped>
.job-left-aside {
  width: 250px;
  height: 380px;
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
  color: #666666;
  font-size: 16px;
  background-color: #fff !important;
  .iconfont {
    font-size: 26px;
    margin-right: 25px;
  }
  .publishing {
    font-size: 25px;
  }
}
.job-right-content {
  width: 1078px;
  height: 860px;
}
</style>
