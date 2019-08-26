import JobSearch from '@/components/jobSearch'
import JobTable from '@/components/jobTable'
import Pagination from '@/components/pagination'
import { getPublishing, delJob } from '@/api/index'
export default {
  data () {
    return {
      // 发布中的数据
      publishData: [],
      loading: false,
      // 每页的大小
      pageSize: 8,
      // 总页数
      totalPage: '',
      // 当前页
      page: 1,
      // 查询条件
      searchText: '',
      selectVal: '',
      checkResumeDialog: false
    }
  },
  components: {
    JobSearch,
    JobTable,
    Pagination
  },
  created () {
    this.getPublishDate()
  },
  methods: {
    // 获得数据
    async getPublishDate (curPage = 1, query) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
      this.page = curPage
      this.searchText = query
      const res = await getPublishing(this.page, this.pageSize, this.searchText)
      // console.log(res)
      if (res.status === 200) {
        this.publishData = res.data.data.rows
        this.totalPage = res.data.data.total
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
          this.getPublishDate()
        }
      } catch (e) {}
    },
    receiveVal (value) {
      this.selectVal = value
    }
  }
}
