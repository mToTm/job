<template>
  <div class="mj-check-pending">
    <JobSearch @getCheckPendingData="getCheckPendingData"></JobSearch>
    <div class="mj-check-pending-table">
      <JobTable :job-check="jobCheck"
                v-loading="loading"
                @getCheckPendingData="getCheckPendingData"
                @receiveVal="receiveVal">
        <template #title>待审核</template>
        <template #batchdelete>
          <button @click="mulDel"><i class="el-icon-delete"></i>批量删除</button>
        </template>
      </JobTable>
      <Pagination :pending-total-page="PendingTotalPage"
                  @getCheckPendingData="getCheckPendingData"></Pagination>
    </div>
  </div>

</template>

<script src="./js/checkPending.js"></script>
<style lang="less" src="./less/checkPending.less"></style>
