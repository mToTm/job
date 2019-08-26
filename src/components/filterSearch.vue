<template>
  <div class="mj-filter-search shadow">
    <div class="filter-input fl">
      <input type="text"
             placeholder="请输入姓名"
             v-model="searchName">
    </div>
    <div class="filter-condition fl clearfix">
      <!-- 职位 -->
      <slot name="position"></slot>
      <!-- <div class="position fl mr">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            职位<i class="el-icon-caret-bottom el-icon--right arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>java工程师</el-dropdown-item>
            <el-dropdown-item>web前端工程师</el-dropdown-item>
            <el-dropdown-item>UI设计师</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div> -->
      <!-- 性别 -->
      <div class="gender fl mr">
        <el-select v-model="genderValue"
                   placeholder="性别">
          <el-option v-for="item in genderData"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </div>
      <!-- 学历 -->
      <slot name="education"></slot>
      <div class="experience fl mr">
        <el-select v-model="expeValue"
                   placeholder="工作经验">
          <el-option v-for="item in expeData"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </div>
      <!-- 薪资 -->
      <div class="salary fl mr">
        <el-select v-model="salaryValue"
                   placeholder="薪资要求">
          <el-option v-for="item in salaryData"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </div>
      <!-- 工作地点 -->
      <slot name="place"></slot>
    </div>
    <div class="filter-btn fr">
      <el-button type="success"
                 round
                 @click="search">搜索<i class="el-icon-search"></i></el-button>
    </div>
  </div>
</template>

<script>
import { getInfo } from '@/api/index'
export default {
  data () {
    return {
      // 搜索姓名
      searchName: '',
      genderData: [{
        value: '1',
        label: '男'
      }, {
        value: '2',
        label: '女'
      }],
      genderValue: '',
      expeData: [],
      expeValue: '',
      salaryData: [],
      salaryValue: ''
    }
  },
  async created () {
    // 获取工作经验
    const expeRes = await getInfo('expirences')
    // console.log(expeRes)
    this.expeData = expeRes.data.data
    // 获取薪资要求
    const salaryRes = await getInfo('sales')
    // console.log(salaryRes)
    this.salaryData = salaryRes.data.data
  },
  props: ['eduValue', 'positionValue'],
  methods: {
    search () {
      // console.log(11)
      this.$emit('getResumeTableData', 1, this.searchName, this.eduValue, this.expeValue, this.salaryValue, this.genderValue)
      this.$emit('getInboxData', 1, this.searchName, this.positionValue, this.genderValue, this.expeValue, this.salaryValue)
      const parmas = {
        name: this.searchName,
        education: this.eduValue,
        experience: this.expeValue,
        salary: this.salaryValue,
        gender: this.genderValue,
        position: this.positionValue
      }
      this.$bus.$emit('searchText', parmas)
    }
  }
}
</script>

<style lang="less" scoped>
.mj-filter-search {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 22px;
  margin-bottom: 23px;
}
.filter-input {
  margin-right: 49px;
  input {
    width: 418px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;
    padding-left: 25px;
    border: 1px solid #e9e9e9;
  }
}
.filter-condition {
  transform: translateY(2px);
}
.el-dropdown-link {
  font-size: 14px;
  cursor: pointer;
  color: #000;
  .arrow-down {
    color: #d8d8d8;
    margin-left: 14px;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.filter-btn {
  .el-button {
    width: 196px;
    height: 40px;
    background-color: #2ed775;
    border: none;
    font-size: 18px;
    i {
      margin-left: 15px;
    }
  }
}
</style>
