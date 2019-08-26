<template>
  <div class="job-search">
    <input type="text"
           :placeholder="placeholder"
           v-model="searchText">
    <el-button type="success"
               round
               class="search"
               @click="search">搜索<i class="el-icon-search"></i></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  computed: {
    placeholder () {
      const { path } = this.$route
      if (path === '/set/mycollection' || path === '/set/resumedownloaded') {
        return '请输入姓名'
      } else {
        return '请输入关键字'
      }
    }
  },
  methods: {
    search () {
      this.$emit('getPublishDate', 1, this.searchText)
      this.$emit('getCheckPendingData', 1, this.searchText)
      // 非父子之间传值 pagination
      this.$bus.$emit('searchText', this.searchText)
    }
  }

}
</script>

<style lang="less" scoped>
.job-search {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 26px;
  position: relative;
  margin-bottom: 23px;
  box-shadow: 0 0 7px 4px #ebecee;
  input {
    width: 1026px;
    height: 50px;
    border-radius: 25px;
    padding-left: 31px;
    border: 1px solid #e9e9e9;
  }
  .search {
    width: 232px;
    height: 36px;
    border-radius: 18px;
    background-color: #2ed775;
    border: none;
    font-size: 16px;
    position: absolute;
    top: 22px;
    right: 32px;
    .el-icon-search {
      font-size: 16px;
      margin-left: 8px;
    }
  }
}
</style>
