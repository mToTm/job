<template>
  <div class="mj-resume-downloaded">
    <JobSearch></JobSearch>
    <div class="resume-downloaded-content shadow">
      <div class="fit-title clearfix">
        <div class="title-left">已下载过的简历</div>
      </div>
      <div class="blank"></div>
      <FitTable :downloaded-data="downloadedData"></FitTable>
      <Pagination :downloaded-total-page="downloadedTotalPage"
                  @getDownloadedData="getDownloadedData"></Pagination>
    </div>
  </div>
</template>

<script src="./js/downloaded.js"></script>
<style lang="less" src="./less/downloaded.less"></style>
