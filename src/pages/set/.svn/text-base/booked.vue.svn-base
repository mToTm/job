<template>
  <div class="mj-booked shadow">
    <div class="booked-title clearfix">
      <div class="booked-left fl">已预约</div>
      <div class="booked-right fr">
        <button><i class="el-icon-delete"></i>批量删除</button>
      </div>
    </div>
    <div class="blank"></div>
    <FitBoItTable :booked-data="bookedData"></FitBoItTable>
    <Pagination :booked-total-page="bookedTotalPage"
                @getBookedData="getBookedData"></Pagination>
  </div>
</template>

<script src="./js/booked.js"></script>
<style lang="less" src="./less/booked.less"></style>
