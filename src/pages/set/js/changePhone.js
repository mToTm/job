import { getCode, revisePhoneNum } from '@/api/index'
export default {
  data () {
    return {
      phoneNum: '',
      code: '',
      newPhoneNum: ''
    }
  },
  methods: {
    async sendCode () {
      const res = await getCode(this.phoneNum)
      console.log(res)
      if (res.status === 200) {
        this.$message({
          message: res.data.message,
          type: 'success',
          duration: 800
        })
      }
    },
    async uploadRevise () {
      console.log(111)
      const res = await revisePhoneNum(
        this.phoneNum,
        this.newPhoneNum,
        this.code
      )
      console.log(res)
      if (res.data.code === 0) {
        this.$message({
          message: res.data.message,
          type: 'success',
          duration: 1000
        })
      } else if (res.data.code === 1) {
        this.$message({
          message: res.data.message,
          type: 'warning',
          duration: 1000
        })
      }
    }
  }
}
