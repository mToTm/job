<template>
  <div class="mj-interviewed shadow">

    <div class="interviewed-title clearfix">
      <div class="interviewed-left fl">已面试</div>
      <div class="interviewed-right fr">
        <button><i class="el-icon-delete"></i>批量删除</button>
      </div>
    </div>
    <div class="blank"></div>
    <FitBoItTable :interviewed-data="interviewedData"></FitBoItTable>
    <Pagination :interviewed-total-page="interviewedTotalPage"
                @getInterviewedData="getInterviewedData"></Pagination>
  </div>
</template>

<script src="./js/interviewed.js"></script>
<style lang="less" src="./less/interviewed.less"></style>
