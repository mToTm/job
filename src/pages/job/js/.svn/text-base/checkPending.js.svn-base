import JobSearch from '@/components/jobSearch'
import JobTable from '@/components/jobTable'
import Pagination from '@/components/pagination'
import { getPending, delJob } from '@/api/index'
export default {
  data () {
    return {
      jobCheck: [],
      loading: false,
      // 每页的大小
      pageSize: 8,
      // 总页数
      PendingTotalPage: '',
      // 当前页
      page: 1,
      // 搜索条件
      searchText: '',
      selectVal: ''
    }
  },
  components: {
    JobSearch,
    JobTable,
    Pagination
  },
  created () {
    this.getCheckPendingData()
  },
  methods: {
    async getCheckPendingData (curPage = 1, query) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
      this.page = curPage
      this.searchText = query
      const res = await getPending(this.page, this.pageSize, this.searchText)
      if (res.status === 200) {
        this.jobCheck = res.data.data.rows
        this.PendingTotalPage = res.data.data.total
        this.loading = false
      }
    },
    async mulDel () {
      try {
        await this.$confirm('您是否确定删除?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          duration: 1000
        })
        // console.log(111)
        const res = await delJob(this.selectVal)
        console.log(res)
        if (res.data.code === 0) {
          this.getCheckPendingData()
        }
      } catch (e) {}
    },
    receiveVal (value) {
      this.selectVal = value
    }
  }
}
