<template>
  <div class="mj-inbox">
    <FilterSearch :position-value="positionValue"
                  @getInboxData="getInboxData">
      <template v-slot:position>
        <div class="position fl mr">
          <el-select v-model="positionValue"
                     placeholder="职位">
            <el-option v-for="item in positionData"
                       :key="item.id"
                       :label="item.title"
                       :value="item.title">
            </el-option>
          </el-select>
        </div>
      </template>
    </FilterSearch>
    <div class="inbox-content shadow">
      <div class="blank"></div>
      <div class="inbox-table">
        <el-table ref="multipleTable"
                  :data="inboxList"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange"
                  border
                  stripe>
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column label="姓名"
                           width="120">
            <template slot-scope="scope">{{ scope.row.trueName }}</template>
          </el-table-column>
          <el-table-column prop="title"
                           label="职位名称"
                           width="150"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="salarname"
                           label="薪资要求"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="salary"
                           label="学历"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="salary"
                           label="工作经验"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="ability"
                           label="擅长"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="createtime"
                           label="投递时间"
                           show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop=""
                           label="操作"
                           show-overflow-tooltip
                           width="220">
            <template slot-scope="scope">
              <router-link to=""
                           class="check-resume"
                           @click.native="showResumeDialog">查看简历 丨 </router-link>
              <router-link to=""
                           class=""
                           @click.native="showInterviewDialog(scope.row)">邀请面试 丨 </router-link>
              <router-link to=""
                           class=""
                           @click.native="del(scope.row.id)">删除</router-link>
            </template>

          </el-table-column>
        </el-table>
      </div>
      <Pagination :inbox-total-page="inboxTotalPage"
                  @getInboxData="getInboxData"></Pagination>
    </div>
    <!-- 查看简历的对话框 -->
    <el-dialog :visible.sync="checkResumeDialog"
               width="80%">
      <div class="resume-content">
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
    <!-- 邀请面试的对话框 -->
    <el-dialog :visible.sync="isShowInterviewDialog"
               width="80%">
      <div class="interview-content">
        <div class="interview-title">邀请面试</div>
        <div class="interview-calendar">
          <Calendar @choseDay="choseDay"
                    @changeMonth="changeMonth"></Calendar>
        </div>
        <div class="interview-time">
          <el-radio v-model="timeValue"
                    v-for="item in timeData"
                    :key="item"
                    :label="item">预约 <div class="time">{{item}}</div><i class="iconfont icon-xuanzhong1"></i>
          </el-radio>

        </div>
        <div class="interview-info">
          <div class="name"><span>联系人：</span><input class="content"
                   v-model="linkName"></div>
          <div class="phone-number"><span>电&nbsp;&nbsp;&nbsp;话：</span><input class="content"
                   v-model="phone">
          </div>
          <div class="address"><span>地&nbsp;&nbsp;&nbsp;址：</span><input v-model="address"
                   class="content">
          </div>
          <div class="instruction">
            <textarea name=""
                      placeholder="补充说明..."
                      class="supplement"
                      v-model="title"></textarea>
          </div>
        </div>
        <div class="send-interview"><button class="confirm"
                  @click="sendInterv">发送邀请</button></div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import FilterSearch from '@/components/filterSearch'
import Pagination from '@/components/pagination'
import Calendar from 'vue-calendar-component'
import { getInboxList, getAllPosition, interview, delResume } from '@/api/index'
export default {
  data () {
    return {
      positionData: [],
      positionValue: '',
      // 表格数据
      inboxList: [],
      // 当前页
      page: 1,
      // 每页大小
      pageSize: 8,
      // 总页数
      inboxTotalPage: '',
      // 多选数据
      multipleSelection: [],
      // 查看简历的对话框
      checkResumeDialog: false,
      // 要求面试的对话框
      isShowInterviewDialog: false,
      timeData: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'],
      title: '',
      timeValue: '',
      // 搜索关键字
      searchName: '',
      // 学历
      searchEdu: '',
      searchExpe: '',
      searchSalar: '',
      searchSex: '',
      searchJob: '',
      hrId: '',
      linkName: '',
      phone: '',
      address: '',
      userId: '',
      positionId: '',
      date: ''
    }
  },

  methods: {
    // 获取收件箱列表数据
    async getInboxData (curPage = 1, name, position, gender, experience, salary) {
      this.page = curPage
      this.searchName = name
      this.searchJob = position
      this.searchSex = gender
      this.searchExpe = experience
      this.searchSalar = salary
      const res = await getInboxList(this.page, this.pageSize, this.searchName, this.searchSex, this.searchExpe, this.searchSalar, this.searchJob, this.hrId)
      console.log(res)
      this.inboxList = res.data.data.rows
      this.inboxTotalPage = res.data.data.total
    },
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
    showInterviewDialog ({ id, positionId }) {
      // console.log(value)
      this.userId = id
      this.positionId = positionId
      this.isShowInterviewDialog = true
    },
    // 选择了哪天
    choseDay (data) {
      // console.log(1222)
      // console.log(data)
      this.date = data.replace(/\//g, '-')
      // console.log(date)
    },
    // 切换月份
    changeMonth (data) {
      console.log(data)
    },
    async sendInterv () {
      // console.log(111)
      const intervieTime = this.date + ' ' + this.timeValue
      // console.log(intervieTime)
      const { userId, positionId, title, linkName, phome, address, hrId } = this
      const data = {
        intervieTime,
        userId,
        positionId,
        title,
        linkName,
        phome,
        address,
        hrId
      }
      const res = await interview(data)
      console.log(res)
      if (res.data.code === 0) {
        this.$message({
          message: res.data.message,
          type: 'success',
          duration: 600
        })
      }
      this.isShowInterviewDialog = false
      // 重置数据
    },
    async del (id) {
      // console.log(id)
      try {
        await this.$confirm('您是否确定删除?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          duration: 1000
        })
        const ids = []
        ids.push(id)
        const res = await delResume(ids)
        console.log(res)
        if (res.data.code === 0) {
          this.getInboxData()
        }
      } catch (e) { }
    }

  },

  components: {
    FilterSearch,
    Pagination,
    Calendar
  },
  async created () {
    const infoRes = localStorage.getItem('info')
    const info = JSON.parse(infoRes)
    this.hrId = info.id
    this.getInboxData()
    const positionRes = await getAllPosition()
    console.log(positionRes)
    this.positionData = positionRes.data.data
  }

}
</script>

<style lang="less" scoped>
.position .el-dropdown {
  color: #000;
  cursor: pointer;
  i {
    color: #d8d8d8;
    margin-left: 14px;
  }
}
.inbox-content {
  width: 100%;
  height: 585px;
  background-color: #fff;
  border-radius: 10px;
  padding: 24px 22px;
  .blank {
    width: 100%;
    height: 54px;
  }
  .inbox-table {
    a {
      font-size: 14px;
      color: #666666;
      outline: none;
    }
  }
}
.resume-content {
  padding: 0 0 92px 140px;
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
    height: 115px;
    background-color: #fafafa;
    font-size: 14px;
    color: #000;
    padding: 26px 30px;
    border: 1px solid #e8e8e8;
    margin-top: 26px;
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
    margin-top: 31px;
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
    margin-top: 23px;
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
      margin-top: 28px;
      .res-title {
        color: #000;
        font-size: 16px;
      }
    }
  }
  .education {
    .college {
      margin-top: 28px;
      margin-bottom: 25px;
    }
    .recollege {
      margin-top: 39px;
      margin-bottom: 25px;
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
.interview-content {
  padding-bottom: 175px;
  .interview-title {
    color: #000;
    font-size: 22px;
    text-align: center;
  }
  .interview-calendar {
    margin-top: 40px;
    .wh_container {
      max-width: 793px;
    }
  }
  .interview-time {
    max-width: 793px;
    margin: 0 auto;
    margin-top: 19px;
    margin-bottom: 13px;
    .time {
      margin-top: 12px;
    }
    .icon-xuanzhong1 {
      position: absolute;
      top: -2px;
      right: -2px;
      display: none;
      font-size: 25px;
    }
  }
  .interview-info {
    .name,
    .phone-number,
    .address {
      width: 793px;
      height: 47px;
      border: 1px solid #e8e8e8;
      margin: 0 auto;
      margin-bottom: 19px;
      padding-left: 25px;
      line-height: 47px;
      color: #999999;
      border-radius: 5px;
      .content {
        width: 600px;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        color: #000;
      }
    }
    .instruction {
      width: 793px;
      height: 76px;
      margin: 0 auto;
      .supplement {
        width: 793px;
        height: 76px;
        border-color: #e8e8e8;
        user-select: none;
        resize: none;
        outline: none;
        padding-left: 20px;
        padding-top: 15px;
        border-radius: 5px;
      }
    }
  }
  .send-interview {
    width: 799px;
    height: 47px;
    margin: 0 auto;
    margin-top: 19px;
    .confirm {
      width: 170px;
      height: 47px;
      background-color: #2ed775;
      color: #fff;
      font-size: 18px;
      display: block;
      margin: 0 auto;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
