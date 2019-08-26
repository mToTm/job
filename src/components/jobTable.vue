<template>
  <div class="mj-job-table">
    <div class="publishing-table">
      <div class="publishing">
        <div class="publishing-left fl">
          <slot name="title">发布中</slot>
        </div>
        <div class="publishing-right fr">
          <router-link class="post"
                       to="/job/post"><i class="el-icon-edit"></i>发布职位</router-link>
          <slot name="batchrefresh"></slot>
          <!-- <button><i class="el-icon-refresh"></i>批量刷新</button> -->
          <slot name="batchdelete"></slot>
          <!-- <button><i class="el-icon-delete"></i>批量删除</button> -->
        </div>
      </div>
      <div class="blank"></div>
      <div class="job-table">
        <el-table ref="multipleTable"
                  :data="jobTableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  class="mj-table"
                  @selection-change="handleSelectionChange"
                  stripe
                  border>
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column label="职位名称"
                           width="90"
                           show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>
          <el-table-column prop="type"
                           label="技术类别"
                           width="100">
          </el-table-column>
          <el-table-column prop="expirenceName"
                           label="工作年限"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="salarName"
                           label="薪资待遇"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="degreeName"
                           label="学历要求"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="regionName"
                           label="工作地点"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="publishTime"
                           label="发布日期"
                           width="95"
                           :formatter="dateFormat"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="endDate"
                           label="结束日期"
                           width="95"
                           show-overflow-tooltip>
          </el-table-column>
          <!-- 状态的插槽 -->
          <slot name="status">
          </slot>
          <el-table-column prop="address"
                           label="操作"
                           width="200">
            <!-- <router-link to=""
                         class="check-resume">查看简历 丨 </router-link> -->
            <template slot-scope="scope">
              <slot name="checkresume"
                    :state="scope.row.status"></slot>
              <router-link to=""
                           class="">编辑 丨 </router-link>
              <router-link to=""
                           class="delate"
                           @click.native="del(scope.row.id)">删除</router-link>
            </template>

          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>

<script>
import { delJob } from '@/api/index'
export default {
  data () {
    return {
      multipleSelection: []
    }
  },
  props: ['publishData', 'jobCheck', 'allJob'],
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      const selectArr = []
      this.multipleSelection = val
      this.multipleSelection.forEach(item => {
        selectArr.push(item.id)
      })
      // console.log(selectArr)
      this.$emit('receiveVal', selectArr)
    },
    // 格式化日期
    dateFormat (row) {
      // console.log(row)
      let date = row.publishTime
      if (date === 'undefined') {
        return ''
      }
      return this.$moment(date).format('YYYY-MM-DD')
    },
    async del (id) {
      // console.log(id)
      try {
        await this.$confirm('您是否确定删除?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          duration: 1000
        })
        const ids = []
        ids.push(id)
        const res = await delJob(ids)
        // console.log(res)
        if (res.data.code === 0) {
          this.$emit('getAllJobData')
          this.$emit('getPublishDate')
          this.$emit('getCheckPendingData')
        }
      } catch (e) { }
    }

  },
  computed: {
    // 接收不同props进行渲染
    jobTableData () {
      const { path } = this.$route
      if (path === '/job/publishing') {
        return this.publishData
      } else if (path === '/job/checkpending') {
        return this.jobCheck
      } else {
        return this.allJob
      }
    }
  }
}
</script>

<style lang="less" scoped>
.publishing-table {
  .publishing {
    width: 100%;
    height: 58px;
    border-bottom: 1px solid #dbdbdb;
    padding: 12px 0;
    .publishing-left {
      font-size: 16px;
      color: #000000;
      line-height: 39px;
    }
    .publishing-right {
      transform: translateY(4px);
      .post {
        display: inline-block;
        width: 114px;
        height: 30px;
        font-size: 12px;
        text-align: center;
        line-height: 30px;
        color: #000000;
        border-radius: 5px;
        border: 1px solid #2ed775;
        &:hover {
          color: #2ed775;
        }
      }
      button {
        width: 114px;
        height: 30px;
        font-size: 12px;
        color: #000000;
        border-radius: 5px;
        border: 1px solid #2ed775;
        background-color: #fff;
        &:hover {
          color: #2ed775;
        }
        &:focus {
          color: #2ed775;
        }
        &:nth-child(2) {
          margin-left: 15px;
          margin-right: 15px;
        }
        i {
          font-size: 15px;
          vertical-align: middle;
          margin-right: 8px;
        }
      }
    }
  }
  .blank {
    width: 100%;
    height: 47px;
  }
  .job-table {
    // margin-bottom: 21px;
    .mj-table {
      font-size: 14px;
      color: #000000;
    }
    a {
      font-size: 14px;
      color: #666666;
      outline: none;
    }
  }
}
</style>
