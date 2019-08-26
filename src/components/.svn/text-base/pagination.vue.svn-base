<template>
  <div class="mj-pagination fr">
    <el-pagination background
                   layout="prev, pager, next,jumper"
                   :total="total"
                   class="revise-pagination"
                   @current-change="changePage"
                   :page-size="8">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 搜索条件
      searchText: '',
      // 所有职位的搜索条件
      searchVal: '',
      searchStatus: '',
      // 找人才的数据
      name: '',
      // 学历
      education: '',
      experience: '',
      salary: '',
      gender: '',
      // 收件箱
      position: ''
    }
  },
  props: ['totalPage', 'PendingTotalPage', 'allPositionTotalPage', 'resumeListTotalPage', 'inboxTotalPage', 'interviewedTotalPage', 'bookedTotalPage', 'collectionTotalPage', 'downloadedTotalPage'],
  computed: {
    total () {
      const { path } = this.$route
      switch (path) {
        case '/job/publishing':
          return this.totalPage - 0
        case '/job/checkpending':
          return this.PendingTotalPage - 0
        case '/job/allpositions':
          return this.allPositionTotalPage - 0
        case '/resume':
          return this.resumeListTotalPage - 0
        case '/inbox':
          return this.inboxTotalPage - 0
        case '/set/interviewed':
          return this.interviewedTotalPage - 0
        case '/set/booked':
          return this.bookedTotalPage - 0
        case '/set/mycollection':
          return this.collectionTotalPage - 0
        case '/set/resumedownloaded':
          return this.downloadedTotalPage - 0
        default:
          break
      }
      // if (path === '/job/publishing') {
      //   return this.totalPage - 0
      // } else if (path === '/job/checkpending') {
      //   return this.PendingTotalPage - 0
      // } else if (path === '/job/allpositions') {
      //   return this.allPositionTotalPage - 0
      // } else if (path === '/resume') {
      //   return this.resumeListTotalPage - 0
      // } else if (path === '/inbox') {
      //   return this.inboxTotalPage - 0
      // } else if (path === '/set/interviewed') {
      //   return this.interviewedTotalPage - 0
      // }
    }

  },
  methods: {
    changePage (curPage) {
      // console.log(curPage)
      // 父子通讯 修改数据
      this.$emit('getPublishDate', curPage, this.searchText)
      this.$emit('getCheckPendingData', curPage)
      this.$emit('getAllJobData', curPage, this.searchVal, this.searchStatus)
      this.$emit('getResumeTableData', curPage, this.name, this.education, this.experience, this.salary, this.gender)
      this.$emit('getInboxData', curPage, this.name, this.gender, this.experience, this.salary, this.position)
      this.$emit('getInterviewedData', curPage)
      this.$emit('getBookedData', curPage)
      this.$emit('getCollectionData', curPage)
      this.$emit('getDownloadedData', curPage)
    }
  },
  created () {
    this.$bus.$on('searchText', data => {
      console.log(data)

      this.searchText = data
      // 所有职位
      this.searchVal = data.value
      this.searchStatus = data.status
      // 找人才
      console.log(data)
      this.name = data.name
      this.education = data.education
      this.experience = data.experience
      this.salary = data.salary
      this.gender = data.gender
      this.position = data.position
    })
  }
}
</script>

<style lang="less" scoped>
.mj-pagination {
  margin-top: 21px;
}
</style>
