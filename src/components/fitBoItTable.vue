<template>
  <div class="fit-booked-interviewed-table">
    <el-table ref="multipleTable"
              :data="itAndBoTableData"
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
                       label="应聘职务"
                       width="120"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="intervietime"
                       label="面试时间"
                       show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="place"
                       label="面试地点"
                       show-overflow-tooltip
                       width="380">
      </el-table-column>
      <el-table-column prop="connection"
                       label="联系人"
                       show-overflow-tooltip>
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
  props: ['interviewedData', 'bookedData'],
  computed: {
    itAndBoTableData () {
      const { path } = this.$route
      if (path === '/set/interviewed') {
        return this.interviewedData
      } else {
        return this.bookedData
      }
    }
  }
}
</script>

<style>
</style>
