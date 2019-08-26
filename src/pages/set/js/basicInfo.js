import { getBasicInfo, getCity, getInfo, saveBasicInfo } from '@/api/index'
export default {
  data () {
    return {
      // 基本信息的数据
      basicInfo: {
        companyName: '',
        phone: '',
        address: '',
        signature: '',
        city: '',
        reprovince: '',
        webSit: '',
        compSize: '',
        industry: '',
        compType: '',
        phases: '',
        fuli: '',
        companyid: '',
        path: ''
      },
      hrInfo: {
        linkName: '',
        duty: '',
        mobile: '',
        email: '',
        gender: '',
        weixin: '',
        imageUrl: ''
      },
      genderData: [
        {
          value: '1',
          label: '男'
        },
        {
          value: '2',
          label: '女'
        }
      ],
      linkId: '',
      // 上传的图片名称
      picName: [],
      // 遮罩层
      showMask: false,
      // 城份数据
      province: [],
      configData: {
        label: 'regionname',
        children: 'childs',
        value: 'id'
      },
      selectedValue: [],

      // 福利
      welfare: [],
      welfareValue: [],
      dialogImageUrl: '',
      dialogVisible: false,
      // 公司规模数据
      companySize: [],
      // 所属行业
      companyIdustry: [],
      // 类型
      companyType: [],
      // 公司阶段
      companyStage: [],
      // 所处阶段的value值
      hrDialog: false,
      rules: {
        companyName: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        compSize: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        industry: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        compType: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        phases: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        city: [
          {
            required: true,
            trigger: 'change'
          }
        ],
        phone: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        address: [
          {
            required: true,
            trigger: 'blur'
          }
        ]
      },
      hrRules: {
        linkName: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        duty: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        mobile: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        gender: [
          {
            required: true,
            trigger: 'change'
          }
        ]
      }
    }
  },

  methods: {
    // 获取数据
    async getAllInfo () {
      const res = await getBasicInfo(this.linkId)
      console.log(res)
      const { data } = res.data
      const { basicInfo } = this
      for (var key in basicInfo) {
        if (key === 'fuli') {
          this.welfareValue = data[key].split(',')
        } else {
          this.basicInfo[key] = data[key]
        }
      }
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // uploadSuccess (res, file, fileList) {
    //   console.log(res)
    // },
    successUpload (res, file, fileList) {
      // console.log(file)
      console.log(res)
      this.picName.push(res.data)
    },
    showChooseWeal () {
      this.showMask = true
      this.$nextTick(() => {
        document.querySelector('.is-multiple').style.display = 'block'
      })
    },
    // 福利确定按钮
    confirm () {
      this.showMask = false
      this.$nextTick(() => {
        document.querySelector('.is-multiple').style.display = 'none'
      })
    },
    // 点x关闭
    close () {
      this.showMask = false
      this.$nextTick(() => {
        document.querySelector('.is-multiple').style.display = 'none'
      })
    },
    changeCity (value) {
      this.basicInfo.city = value[1]
    },
    // 保存信息
    async saveInfo (basicInfoForm) {
      await this.$refs[basicInfoForm].validate()
      // console.log(111)
      this.basicInfo.city = this.selectedValue[1]
      // console.log(this.basicInfo.city)
      // this.basicInfo.fuli = this.walfareValue.join(',')
      // console.log(this.basicInfo.fuli)
      this.basicInfo.fuli = this.welfareValue
      // console.log(this.welfareValue)
      console.log(this.basicInfo.fuli)
      this.basicInfo.path = this.picName

      const {
        companyName,
        phone,
        address,
        signature,
        city,
        webSit,
        compSize,
        industry,
        phases,
        fuli,
        companyid,
        path,
        compType
      } = this.basicInfo
      const {
        linkName,
        duty,
        mobile,
        email,
        gender,
        weixin,
        imageUrl
      } = this.hrInfo
      // console.log(city)
      // console.log(path)
      const companyData = {
        companyname: companyName,
        phone,
        address,
        signature,
        city,
        websit: webSit,
        compsize: compSize,
        industry,
        phases,
        comptype: compType
      }
      const hrData = {
        companyid,
        id: this.linkId,
        linkname: linkName,
        duty,
        mobile,
        email,
        gender,
        weixin,
        imageUrl
      }

      const res = await saveBasicInfo(companyData, hrData, fuli, path)
      console.log(res)
      if (res.data.code === 0) {
        this.$message({
          message: res.data.message,
          type: 'success',
          duration: 1500
        })
      }
      // 重置表单
      this.$refs[basicInfoForm].resetFields()
      // 重新加载
      this.getAllInfo()
    },
    handleAvatarSuccess (res, file) {
      this.hrInfo.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload () {},
    async saveHrInfo (hrInfoForm) {
      await this.$refs[hrInfoForm].validate()
      const infoRes = localStorage.getItem('info')
      const infoObj = JSON.parse(infoRes)
      infoObj.linkname = this.hrInfo.linkName
      const info = JSON.stringify(infoObj)
      localStorage.setItem('info', info)
      this.hrDialog = false
    }
  },
  async created () {
    const infoRes = localStorage.getItem('info')
    const info = JSON.parse(infoRes)
    // console.log(info)
    // this.hrDialog = true
    if (info.linkname) {
      this.hrDialog = false
    } else {
      this.hrDialog = true
    }
    this.linkId = info.id
    // 公司规模 字典查询
    const comSizeRes = await getInfo('compMember')
    // console.log(comSizeRes)
    this.companySize = comSizeRes.data.data
    // 所属行业
    const comIdustryRes = await getInfo('industry')
    // console.log(comIdustry)
    this.companyIdustry = comIdustryRes.data.data
    // 所属类型
    const comTypeRes = await getInfo('companyTypes')
    // console.log(comTypeRes)
    this.companyType = comTypeRes.data.data
    // 公司阶段
    const comStageRes = await getInfo('phases')
    this.companyStage = comStageRes.data.data
    // 获取福利
    const comWelfareRes = await getInfo('fuli')
    // console.log(comWelfareRes)
    this.welfare = comWelfareRes.data.data
    // 获取基本信息
    this.getAllInfo()
    // 获取城市数据
    const provinceRes = await getCity()
    // console.log(provinceRes)
    this.province = provinceRes.data.data.allCitys
    // 找到父级id
    this.province.forEach(item => {
      item.childs.find(item => {
        if (item.id === this.basicInfo.city) {
          this.basicInfo.reprovince = item.parentid
        }
      })
    })
    // 回显城市
    this.selectedValue.push(this.basicInfo.reprovince, this.basicInfo.city)
  },
  mounted () {
    this.$refs['basicInfoForm'].resetFields()
  }
}
