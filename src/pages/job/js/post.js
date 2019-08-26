import {
  getInfo,
  getAllProvince,
  getPositionType,
  publishPosition
} from '@/api/index'
export default {
  data () {
    return {
      postForm: {
        positionName: '',
        typeValue: [],
        expeValue: '',
        salaryValue: '',
        eduValue: '',
        provValue: '',
        cityValue: '',
        cateValue: ''
      },
      desc: '',
      inputed: 0,
      expeData: [],
      eduData: [],
      salaryData: [],
      provData: [],
      typeData: [],
      positionType: '',
      // 输入数
      configData: {
        label: 'typename',
        value: 'id'
      },
      companyid: '',
      linkid: '',
      rules: {
        positionName: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        typeValue: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        salaryValue: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        eduValue: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        provValue: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        cityValue: [
          {
            required: true,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  async created () {
    const res = localStorage.getItem('info')
    const info = JSON.parse(res)
    this.companyid = info.companyid
    this.linkid = info.id
    const expeRes = await getInfo('expirences')
    // console.log(expeRes)
    this.expeData = expeRes.data.data
    const eduRes = await getInfo('degree')
    // console.log(eduRes)
    this.eduData = eduRes.data.data
    const salaryRes = await getInfo('sales')
    this.salaryData = salaryRes.data.data
    const provRes = await getAllProvince()
    console.log(provRes)
    this.provData = provRes.data.data
    const typeRes = await getPositionType()
    console.log(typeRes)
    this.typeData = typeRes.data.data
  },
  methods: {
    descInput () {
      // console.log(this.desc.length)
      this.inputed = this.desc.length
    },

    async publish (postForm) {
      await this.$refs[postForm].validate()
      this.positionType = this.postForm.typeValue.pop()

      const res = await publishPosition(
        this.companyid,
        this.linkid,
        this.postForm.positionName,
        this.positionType,
        this.postForm.provValue,
        this.desc,
        this.postForm.expeValue,
        this.postForm.salaryValue,
        this.postForm.eduValue,
        this.postForm.cityValue,
        this.postForm.cateValue
      )
      // console.log(res)
      if (res.data.code === 0) {
        this.$message({
          type: 'success',
          message: res.data.message,
          duration: 1000
        })
      }
    }
  }
}
