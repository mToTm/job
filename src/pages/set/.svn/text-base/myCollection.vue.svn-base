<template>
  <div class="mj-my-collection">
    <JobSearch></JobSearch>
    <div class="mj-fit-collection-content shadow">
      <div class="fit-title clearfix">
        <div class="title-left fl">我的收藏</div>
        <div class="title-right fr">
          <button><i class="el-icon-delete"></i>批量删除</button>
        </div>
      </div>
      <div class="blank"></div>
      <FitTable :collection-data="collectionData">
        <template v-slot:del>
          <router-link to=""
                       class="">丨 删除</router-link>
        </template>
      </FitTable>
      <Pagination :collection-total-page="collectionTotalPage"
                  @getCollectionData="getCollectionData"></Pagination>
    </div>
  </div>
</template>

<script src="./js/myCollection.js"></script>
<style lang="less" src="./less/myCollection.less"></style>
