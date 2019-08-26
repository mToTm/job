import JobTable from '@/components/jobTable'
import Pagination from '@/components/pagination'
import { allJob, delJob } from '@/api/index'

export default {
  data () {
    return {
      // status: '待审核',
      options: [
        {
          value: 1,
          label: '待审核'
        },
        {
          value: 0,
          label: '发布中'
        },
        {
          value: 2,
          label: '已结束'
        }
      ],
      // 搜索状态数据
      statusValue: '',
      // 所有职位数据
      allJob: [],
      loading: false,
      // 每页的大小
      pageSize: 8,
      // 总页数
      allPositionTotalPage: '',
      // 当前页
      page: 1,
      // 状态
      status: '',
      // 关键字
      searchText: '',
      selectVal: '',
      checkResumeDialog: false
    }
  },
  components: {
    JobTable,
    Pagination
  },
  created () {
    this.getAllJobData()
  },
  methods: {
    async getAllJobData (curPage = 1, query, status) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
      this.page = curPage
      this.searchText = query
      this.statusValue = status
      const res = await allJob(
        this.page,
        this.pageSize,
        this.searchText,
        this.statusValue
      )
      // console.log(res)
      if (res.status === 200) {
        this.allJob = res.data.data.rows
        this.allPositionTotalPage = res.data.data.total
        this.loading = false
      }
    },
    search () {
      let params = {
        value: this.searchText,
        status: this.statusValue
      }
      this.getAllJobData(1, this.searchText, this.statusValue)
      this.$bus.$emit('searchText', params)
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
          this.getAllJobData()
        }
      } catch (e) {}
    },
    receiveVal (value) {
      this.selectVal = value
    }
  }
}
