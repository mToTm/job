<template>
  <div class="mj-resume">
    <FilterSearch :edu-value="eduValue"
                  @getResumeTableData="getResumeTableData">
      <template v-slot:education>
        <div class="education fl mr">
          <el-select v-model="eduValue"
                     placeholder="学历">
            <el-option v-for="item in eduData"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </div>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:experience>经　　验</template>
      <!-- eslint-disable-next-line -->
      <template v-slot:salary>薪　　资</template>
      <template v-slot:place>
        <div class="place fl mr">
          <el-select v-model="value1"
                     placeholder="工作地点">
            <el-option v-for="item in options1"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
      </template>
    </FilterSearch>
    <div class="resume-content shadow">
      <div class="blank"></div>
      <div class="resume-table">
        <el-table ref="multipleTable"
                  :data="resumeList"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange"
                  border
                  stripe>
          <!-- <el-table-column type="selection"
                           width="55">
          </el-table-column> -->
          <el-table-column label="姓名"
                           width="120">
            <template slot-scope="scope">{{ scope.row.trueName }}</template>
          </el-table-column>
          <el-table-column prop="applyJob"
                           label="应聘职位"
                           width="120">
          </el-table-column>
          <el-table-column prop="expirenceTimeName"
                           label="工作经验"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="salarName"
                           label="薪资要求"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="degreeName"
                           label="学历"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="experience"
                           label="毕业院校"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="experience"
                           label="专业"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="place"
                           label="工作地点"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="status"
                           label="求职状态"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="experience"
                           label="操作"
                           show-overflow-tooltip
                           width="180">
            <router-link to=""
                         class="check-resume"
                         @click.native="showResumeDialog">查看简历 丨 </router-link>
            <router-link to=""
                         class="check-resume">立即沟通</router-link>
          </el-table-column>
        </el-table>
      </div>
      <Pagination :resume-list-total-page="resumeListTotalPage"
                  @getResumeTableData="getResumeTableData"></Pagination>
    </div>
    <!-- 查看简历的对话框 -->
    <el-dialog :visible.sync="checkResumeDialog"
               width="80%">
      <div class="resume-container">
        <div class="name">赵静</div>
        <div class="basic-info">
          <span>女</span>
          <span>35</span>
          <span>本科</span>
          <span>H5前端开发 12k-15k</span>
          <span>已离职，正在找工作</span>
        </div>
        <div class="connection">
          <span>13651847952</span>
          <span>2581117@qq.com</span>
        </div>
        <div class="skill">
          熟练掌握JavaScript，熟悉HTML5/XML/JSON前端开发技术，熟悉DIV CSS布局；能使用原生的js或jQuery制作出页面常用的表现层动态效果,有node.js经验者优先；对浏览器兼容性、代码可维护性、前端性能优化等有深入研究；为人诚实正直，做事认真负责，具有良好的沟通和团队协作能力；
          5、有大型网站前端或移动web开发经验者优先。
        </div>
        <div class="user-photo">
          <img src=""
               alt="">
        </div>
        <div class="work-experienced">
          <div class="resume-title">工作经历</div>
          <div class="company">
            <span class="company-name">上海广亿信息技术有限公司</span>
            <span class="start-end-date">2016.02-2018.09</span>
          </div>
          <div class="position">
            <span>前端开发工程师</span>
            <span>技术部</span>
          </div>
          <div class="work-content">
            <div class="content-title">内容：</div>
            <ul>

              <li>1. 根据产品要求，完成IOS客户端程序的架构设计和技术实现；</li>
              <li>2. 编写测试代码，调试软件功能，完成性能优化；</li>
              <li>3. 解决用户反馈的各类问题，并进行总结和改进；</li>
              <li>4. 根据产品要求，完成IOS客户端程序的架构设计和技术实现；</li>
              <li>5. 编写测试代码，调试软件功能，完成性能优化；</li>
              <li>6. 解决用户反馈的各类问题，并进行总结和改进。</li>

            </ul>
          </div>
          <div class="company">
            <span class="company-name">深圳君银证券投资咨询顾问有限公司上海分公司</span>
            <span class="start-end-date">2012.02-2016.01</span>
          </div>
          <div class="position">
            <span>前端开发工程师</span>
            <span>技术部</span>
          </div>
          <div class="work-content">
            <div class="content-title">内容：</div>
            <ul>

              <li>1. 根据产品要求，完成IOS客户端程序的架构设计和技术实现；</li>
              <li>2. 编写测试代码，调试软件功能，完成性能优化；</li>
              <li>3. 解决用户反馈的各类问题，并进行总结和改进；</li>
              <li>4. 根据产品要求，完成IOS客户端程序的架构设计和技术实现；</li>
              <li>5. 编写测试代码，调试软件功能，完成性能优化；</li>
              <li>6. 解决用户反馈的各类问题，并进行总结和改进。</li>

            </ul>
          </div>
        </div>
        <div class="project-experience">
          <div class="resume-title">项目经验</div>

          <div class="project-name">
            <span class="project-name">某某公司后台软件开发项目</span>
            <span class="time">2012.02-2016.01</span>
          </div>
          <div class="responsibility">
            <div class="res-title">职责：</div>
            <div class="content">
              <ul>
                <li>核心开发主导</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="education">
          <div class="resume-title">教育经历</div>
          <div class="education-experience">
            <ul>
              <li class="college">
                <span class="college-name">武汉华中科技大学</span>
                <span class="college-time">2012.09-2016.07</span>
              </li>
              <li>
                <span class="profession">计算机信息技术</span>
                <span class="diploma">本科</span>
              </li>
              <li class="recollege">
                <span class="college-name">清华大学</span>
                <span class="college-time">2012.09-2016.07</span>
              </li>
              <li class="college-mt">
                <span class="profession">计算机信息技术</span>
                <span class="diploma">硕士</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="download-resume">
          <div class="download">下载简历</div>
          <i class="el-icon-download arrow"></i>
        </div>
      </div>

    </el-dialog>
  </div>
</template>

<script>
import FilterSearch from '@/components/filterSearch'
import Pagination from '@/components/pagination'
import { getResumeList, getInfo } from '@/api/index'
export default {
  data () {
    return {
      // 表格中的数据
      resumeList: [],
      // 当前页
      page: 1,
      // 每页的大小
      pageSize: 8,
      // 总页数
      resumeListTotalPage: '',
      // 选中的数
      multipleSelection: [],
      eduData: [],
      eduValue: '',
      options1: [{
        value: '选项1',
        label: '上海浦东新区'
      }, {
        value: '选项2',
        label: '上海徐汇'
      }, {
        value: '选项3',
        label: '上海闵行'
      }],
      value1: '',
      // 搜索关键字
      searchName: '',
      // 学历
      searchEdu: '',
      searchExpe: '',
      searchSalar: '',
      searchSex: '',
      checkResumeDialog: false

    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    showResumeDialog () {
      console.log(111)
      this.checkResumeDialog = true
    },
    // 获取表格数据
    async getResumeTableData (curPage = 1, name, education, experience, salary, gender) {
      // console.log(curPage)
      // console.log(name)
      this.page = curPage
      this.searchName = name
      this.searchEdu = education
      this.searchExpe = experience
      this.searchSalar = salary
      this.searchSex = gender
      const res = await getResumeList(this.page, this.pageSize, '', this.searchEdu, this.searchExpe, this.searchSalar, this.searchSex, this.searchName)
      console.log(res)
      if (res.status === 200) {
        this.resumeList = res.data.data.rows
        this.resumeListTotalPage = res.data.data.total
      }
    }
  },
  components: {
    FilterSearch,
    Pagination
  },
  async created () {
    this.getResumeTableData()
    // 获取学历
    const eduRes = await getInfo('degree')
    console.log(eduRes)
    this.eduData = eduRes.data.data
  }
}
</script>

<style lang="less" scoped>
.resume-content {
  width: 100%;
  height: 585px;
  background-color: #fff;
  border-radius: 10px;
  padding: 24px 22px;
  .blank {
    width: 100%;
    height: 54px;
  }
  .resume-table {
    a {
      font-size: 14px;
      color: #666666;
    }
  }
}
.resume-container {
  padding: 0 0 49px 140px;
  position: relative;
  .name {
    font-size: 24px;
    color: #000;
  }
  .basic-info {
    margin-top: 28px;
    span {
      color: #000;
      padding: 0 20px;
      &:nth-child(2n) {
        border-left: 2px solid #f1f1f1;
        border-right: 2px solid #f1f1f1;
      }
      &:first-child {
        padding-left: 0;
      }
    }
  }
  .connection {
    margin-top: 30px;
    span {
      font-size: 16px;
      color: #000;
      &:first-child {
        padding-right: 20px;
        border-right: 2px solid #f1f1f1;
      }
      &:last-child {
        padding-left: 20px;
      }
    }
  }
  .skill {
    width: 897px;
    background-color: #fafafa;
    font-size: 14px;
    color: #000;
    padding: 5px 12px;
    border: 1px solid #e8e8e8;
    margin-top: 26px;
    line-height: 32px;
  }
  .user-photo {
    width: 81px;
    height: 81px;
    border-radius: 50%;
    background-color: pink;
    position: absolute;
    top: 43px;
    right: 168px;
  }
  .resume-title {
    width: 99px;
    height: 24px;
    font-size: 20px;
    color: #000;
    padding-left: 16px;
    border-left: 2px solid #2ed775;
    margin-top: 33px;
  }
  .company {
    margin-top: 33px;
    .company-name {
      font-size: 18px;
      color: #000;
      margin-right: 49px;
    }
  }
  .position {
    margin-top: 15px;
    color: #000;
    span:first-child {
      padding-right: 23px;
      border-right: 2px solid #f1f1f1;
    }
    span:last-child {
      padding-left: 23px;
    }
  }
  .work-content {
    margin-top: 12px;
    .content-title {
      font-size: 14px;
      color: #000;
    }
  }
  .project-experience {
    margin-top: 37px;

    .project-name {
      margin-top: 42px;
      .project-name {
        font-size: 18px;
        color: #000;
        margin-right: 32px;
      }
    }
    .responsibility {
      margin-top: 14px;
      .res-title {
        color: #000;
        font-size: 16px;
      }
    }
  }
  .education {
    .college {
      margin-top: 28px;
      margin-bottom: 12px;
    }
    .recollege {
      margin-top: 39px;
      margin-bottom: 12px;
    }
    .college-name {
      font-size: 18px;
      color: #000;
      margin-right: 29px;
    }
    .profession,
    .diploma {
      font-size: 16px;
      color: #000;
    }
    .profession {
      padding-right: 24px;
      border-right: 2px solid #f1f1f1;
    }
    .diploma {
      padding-left: 24px;
    }
  }
  .download-resume {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #2ed775;
    color: #fff;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    top: 50%;
    right: 47px;
    .download {
      margin-top: 19px;
    }
    .arrow {
      font-size: 20px;
    }
  }
}
</style>
