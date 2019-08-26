<template>
  <div class="mj-fit-table">
    <el-table ref="multipleTable"
              :data="setTableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
              border
              stripe>
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column label="姓名"
                       width="120">
        <template slot-scope="scope">{{ scope.row.truename }}</template>
      </el-table-column>
      <el-table-column prop="title"
                       label="职位名称"
                       width="120"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="salary"
                       label="薪资要求"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="status"
                       label="求职状态"
                       show-overflow-tooltip
                       width="150">
      </el-table-column>
      <el-table-column prop="education"
                       label="学历"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address"
                       label="工作经验"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="place"
                       label="工作地点"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作"
                       show-overflow-tooltip
                       width="150">
        <router-link to=""
                     class="check-resume">查看简历</router-link>
        <slot name="del"></slot>
        <!-- <router-link to=""
                     class="">丨 删除</router-link> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {

      multipleSelection: []
    }
  },

  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  },
  props: ['collectionData', 'downloadedData'],
  computed: {
    setTableData () {
      const { path } = this.$route
      if (path === '/set/mycollection') {
        return this.collectionData
      } else {
        return this.downloadedData
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mj-fit-table {
  a {
    font-size: 14px;
    color: #666666;
  }
}
</style>
