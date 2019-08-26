import { getSurveyData } from '@/api/index'
export default {
  data () {
    return {
      published: '',
      receivedRusume: '',
      hrNews: '',
      hrName: ''
    }
  },
  computed: {
    curTime () {
      let curTime = new Date()
      return this.$moment(curTime).format('A') === 'AM' ? '上午' : '下午'
    }
  },
  async created () {
    const infoRes = localStorage.getItem('info')
    const info = JSON.parse(infoRes)
    const linkId = info.id
    this.hrName = info.linkname
    const res = await getSurveyData(linkId)
    // console.log(res)
    this.hrNews = res.data.data.hrNewsNum
    this.published = res.data.data.positionNum
    this.receivedRusume = res.data.data.resumeNum
  }
}
