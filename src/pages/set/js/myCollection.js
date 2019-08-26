import JobSearch from '@/components/jobSearch'
import FitTable from '@/components/fitTable'
import Pagination from '@/components/pagination'
import { getCollectionList } from '@/api/index'
export default {
  data () {
    return {
      collectionData: [],
      page: 1,
      pageSize: 8,
      collectionTotalPage: '',
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
    this.getCollectionData()
  },
  methods: {
    async getCollectionData (curPage = 1) {
      this.page = curPage
      const res = await getCollectionList(this.page, this.pageSize, this.linkId)
      console.log(res)
      this.collectionData = res.data.data.rows
      this.collectionTotalPage = res.data.data.total
    }
  }
}
