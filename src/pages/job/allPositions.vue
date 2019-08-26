<template>
  <div class="mj-all-postions">
    <!-- 搜索框 -->
    <div class="job-search">
      <input type="text"
             placeholder="请输入关键字"
             class="ipt"
             v-model="searchText" />
      <el-button type="success"
                 round
                 class="search"
                 @click="search">搜索<i class="el-icon-search"></i></el-button>
      <div class="status">
        <el-select v-model="statusValue"
                   placeholder="状态">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <!-- 表格 -->
    <div class="all-position-content">
      <JobTable :all-job="allJob"
                v-loading="loading"
                @getAllJobData="getAllJobData"
                @receiveVal="receiveVal">
        <template #title>所有职位</template>
        <template #batchdelete>
          <button @click="mulDel"><i class="el-icon-delete"></i>批量删除</button>
        </template>
        <template #status>
          <el-table-column label="状态"
                           show-overflow-tooltip>
            <template slot-scope="scope">
              <span v-if="scope.row.status === '0'"
                    style="color:#2ed775">发布中</span>
              <span v-else-if="scope.row.status === '1'"
                    style="color:#ff0000">待审核</span>
              <span v-else>已结束</span>
            </template>
          </el-table-column>
        </template>
        <template #checkresume="resume">
          <router-link to=""
                       class="check-resume"
                       v-if="resume.state !== '1'">收到的简历 丨 </router-link>
        </template>

      </JobTable>
      <!-- 分页 -->
      <Pagination :all-position-total-page="allPositionTotalPage"
                  @getAllJobData="getAllJobData"></Pagination>
    </div>

  </div>
</template>

<script src="./js/allPositions.js"></script>
<style lang="less" src="./less/allPositions.less"></style>
