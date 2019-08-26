import FitBoItTable from '@/components/fitBoItTable'
import Pagination from '@/components/pagination'
import { getInterviewedList } from '@/api/index'
export default {
  data () {
    return {
      // 已预约的表格数据
      interviewedData: [],
      page: 1,
      pageSize: 8,
      interviewedTotalPage: '',
      linkId: ''
    }
  },
  components: {
    FitBoItTable,
    Pagination
  },
  created () {
    const infoRes = localStorage.getItem('info')
    const info = JSON.parse(infoRes)
    this.linkId = info.id
    this.getInterviewedData()
  },
  methods: {
    async getInterviewedData (curPage = 1) {
      this.page = curPage
      const res = await getInterviewedList(
        this.page,
        this.pageSize,
        this.linkId
      )
      // console.log(res)
      this.interviewedData = res.data.data.rows
      this.interviewedTotalPage = res.data.data.total
    }
  }
}
