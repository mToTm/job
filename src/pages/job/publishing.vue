<template>
  <div class="mj-publishing">
    <JobSearch @getPublishDate="getPublishDate"></JobSearch>
    <div class="publishing-content">
      <JobTable :publish-data="publishData"
                v-loading="loading"
                @getPublishDate="getPublishDate"
                @receiveVal="receiveVal">
        <template #batchrefresh>
          <button><i class="el-icon-refresh"></i>批量刷新</button>
        </template>
        <template #batchdelete>
          <button @click="mulDel"><i class="el-icon-delete"></i>批量删除</button>
        </template>
        <template #checkresume>
          <router-link to="/job/receive"
                       class="check-resume">收到的简历 丨 </router-link>
        </template>
      </JobTable>
      <Pagination :total-page="totalPage"
                  @getPublishDate="getPublishDate"></Pagination>
    </div>

  </div>

</template>

<script src="./js/publishing.js"></script>
<style lang="less" src="./less/publishing.less"></style>
