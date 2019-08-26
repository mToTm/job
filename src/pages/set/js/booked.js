import FitBoItTable from '@/components/fitBoItTable'
import Pagination from '@/components/pagination'
import { getBookedList } from '@/api/index'
export default {
  data () {
    return {
      bookedData: [],
      page: 1,
      pageSize: 8,
      bookedTotalPage: '',
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
    this.getBookedData()
  },
  methods: {
    async getBookedData (curPage = 1) {
      this.page = curPage
      const res = await getBookedList(this.page, this.pageSize, this.linkId)
      // console.log(res)
      this.bookedData = res.data.data.rows
      this.bookedTotalPage = res.data.data.total
    }
  }
}
