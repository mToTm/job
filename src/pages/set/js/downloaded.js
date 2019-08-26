import JobSearch from '@/components/jobSearch'
import FitTable from '@/components/fitTable'
import Pagination from '@/components/pagination'
import { getDownloadedList } from '@/api/index'
export default {
  data () {
    return {
      downloadedData: [],
      page: 1,
      pageSize: 8,
      downloadedTotalPage: '',
      linkId: ''
    }
  },
  components: {
    JobSearch,
    FitTable,
    Pagination
  },
  created () {
    const infoRes = localStorage.getItem('info')
    const info = JSON.parse(infoRes)
    this.linkId = info.id
    this.getDownloadedData()
  },
  methods: {
    async getDownloadedData (curPage = 1) {
      this.page = curPage
      const res = await getDownloadedList(this.page, this.pageSize, this.linkId)
      console.log(res)
      this.downloadedData = res.data.data.rows
      this.downloadedTotalPage = res.data.data.total
    }
  }
}
