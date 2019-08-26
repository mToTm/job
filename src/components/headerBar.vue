<template>
  <div class="mj-header">
    <!-- eslint-disable -->
    <div class="blank">
      <div class="mj-header-bar w1400">
        <div class="mj-logo"></div>
        <div class="mj-info">
          <div class="mj-user fl">
            <img src="../../static/images/timg (1).jpg"
                 alt=""
                 class="avatar">
            <i class="iconfont icon-renzheng approve"></i>
            <!-- 个人中心 -->
            <div class="mj-profile shadow"
                 v-if="showProfile">
              <ul>
                <li class="profile-li"
                    @click="showProMesDialog">个人信息</li>
                <li class="profile-li"
                    @click="showSetPasDialog">设置密码</li>
                <li class="profile-li"
                    @click="showSetMobDialog">修改手机号</li>
              </ul>
            </div>
          </div>
          <div class="mj-name fl">
            <span @click="isShowProfile">{{name}}</span>
            <i class="el-icon-arrow-down arrow-down"></i>
            <span class="go"
                  @click="approveDialog = true">去认证</span>
          </div>
          <div class="mj-messages fl"
               @click="messageShow = true">
            <router-link to="">
              信息
              <div class="circle"></div>
            </router-link>
          </div>
          <router-link class="mj-exit fl"
                       to=""
                       @click.native="logout"><i class="iconfont icon-tuichu off"></i>退出</router-link>
        </div>
        <!-- 消息列表 -->
        <div class="mj-message shadow"
             v-if="messageShow">
          <i class="el-icon-close message-close"
             @click="messageShow = false"></i>
          <ul class="message-ul">
            <li class="message"><a class="one-txt-cut"
                 href="javascript:;">有人跟你打招呼了，想面试Java职位</a></li>
            <li class="message"><a class="one-txt-cut"
                 href="javascript:;">有人跟你打招呼了，想面试Java职位</a></li>
            <li class="message"><a class="one-txt-cut"
                 href="javascript:;">有人跟你打招呼了，想面试Java职位职位职位</a></li>
            <li class="message"><a class="one-txt-cut"
                 href="javascript:;">有人跟你打招呼了，想面试Java职位</a></li>
            <li class="message"><a class="one-txt-cut"
                 href="javascript:;">有人跟你打招呼了，想面试Java职位职位</a></li>
            <li class="message"><a class="one-txt-cut"
                 href="javascript:;">有人跟你打招呼了，想面试Java职位职位有人跟你打招呼了，想面试Java职位职位有人跟你打招呼了，想面试Java职位职位</a></li>
          </ul>
          <div class="check-more-mes"
               @click="messageShow = false">
            <router-link class="check-more"
                         to="/checkmore">查看更多 ></router-link>
          </div>

        </div>
      </div>
    </div>
    <div class="blank-nav">
      <div class="mj-header-nav w1400">
        <el-menu :default-active="activePath"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 text-color="#000000"
                 active-text-color="#2ED775"
                 :router="true">
          <el-menu-item index="/messages"><i class="fonts iconfont icon-lingdang1"></i>消息</el-menu-item>
          <el-menu-item index="/job"><i class="fonts iconfont icon-zhiwei1"></i>职位管理</el-menu-item>
          <el-menu-item index="/inbox"><i class="fonts iconfont icon-shoujianxiang"></i>收件箱</el-menu-item>
          <el-menu-item index="/resume"><i class="fonts iconfont icon-rencaizhengce ability"></i>找人才</el-menu-item>
          <el-menu-item index="/set"><i class="fonts iconfont icon-icon-test"></i>设置</el-menu-item>
        </el-menu>
      </div>
    </div>
    <!-- 认证的弹框组件 -->
    <div class="approve-dialog">
      <el-dialog title="企业认证"
                 :visible.sync="approveDialog"
                 width="859px">
        <div class="approve-content">
          <div class="upload-business">
            <div class="title">1.上传营业护照</div>
            <div class="add-photo">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                         list-type="picture-card"
                         :on-preview="handlePictureCardPreview"
                         :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%"
                     :src="dialogImageUrl"
                     alt="">
              </el-dialog>
            </div>
          </div>
          <div class="upload-id-card">
            <div class="title">2.上传身份证(正、反面)</div>
            <div class="add-photo">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                         list-type="picture-card"
                         :on-preview="handlePictureCardPreview"
                         :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%"
                     :src="dialogImageUrl"
                     alt="">
              </el-dialog>
            </div>
          </div>
          <!-- 关系证明 -->
          <div class="relation-prove">
            <div class="title">3.关系证明</div>
            <div class="add-photo">
              <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                         list-type="picture-card"
                         :on-preview="handlePictureCardPreview"
                         :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%"
                     :src="dialogImageUrl"
                     alt="">
              </el-dialog>
            </div>
          </div>
          <div class="prove-tips">
            <div class="tips-title">请提供证明您与所在公司的关系，证明文件盖公章后拍照提交！格式如下：</div>
            <div class="tips-content">姓名：xxxxx，身份证号：xxxxx，在xxxxxxxxx公司任职，现负责公司相关招聘业务，特此证明！(<span class="copy">复制</span>)</div>
            <div class="tips-footer">以上内容写好后打印盖公章拍照提交电子版即可！</div>
          </div>
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button type="primary"
                     @click="approveDialog = false">马上认证</el-button>
        </span>
      </el-dialog>
    </div>

    <!-- 个人信息弹框 -->
    <div class="profile-dialog">
      <el-dialog :visible.sync="isShowProfileDialog"
                 width="50%">
        <div class="profile-title">HR个人信息</div>
        <div v-if="isShowUersMes">
          <div class="change">
            <div class="icon"
                 @click="isShowUersMes = false">
              <i class="iconfont icon-xiugai"></i>
              <span class="revise">修改</span>
            </div>
          </div>
          <div class="profile-content">
            <div class="profile-photo">
              <img src="../../static/images/timg (1).jpg"
                   alt=""
                   class="imgs">
            </div>
            <ul class="content-ul">
              <li class="content-li"><span class="li-left">姓　　名：</span><span>{{userInfo.linkname}}</span></li>
              <li class="content-li"><span class="li-left">性　　别：</span><span>{{userInfo.gender}}</span></li>
              <li class="content-li"><span class="li-left">职　　位：</span><span>{{userInfo.duty}}</span></li>
              <li class="content-li"><span class="li-left">联系方式：</span><span>{{userInfo.mobile}}</span></li>
              <li class="content-li"><span class="li-left">邮　　箱：</span><span>{{userInfo.email}}</span></li>
              <li class="content-li"><span class="li-left">微　　信：</span><span>{{userInfo.wexin}}</span></li>
            </ul>
          </div>
        </div>
        <div v-if="!isShowUersMes">
          <div class="profile-content-two">
            <el-form :model="userInfo"
                     ref="hrInfoForm">
              <el-form-item>
                <el-upload class="avatar-uploader"
                           action="https://jsonplaceholder.typicode.com/posts/"
                           :show-file-list="false"
                           :on-success="handleAvatarSuccess"
                           :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl"
                       :src="imageUrl"
                       class="avatar">
                  <i v-else
                     class="iconfont icon-touxiang avatar-uploader-icon"></i>
                </el-upload>
                <div class="upload-photo">上传头像</div>
              </el-form-item>
              <el-form-item label="姓　　名">
                <el-input v-model="userInfo.linkname"></el-input>
              </el-form-item>
              <el-form-item label="性　　别">
                <el-select v-model="userInfo.gender"
                           placeholder="请选择"
                           popper-class="sex-select">
                  <el-option v-for="item in genderData"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="职　　位">
                <el-input v-model="userInfo.duty"></el-input>
                <!-- <el-select v-model="basicInfo.gengder"
                         placeholder="请选择"
                         popper-class="gender-select">
                <el-option v-for="item in genderData"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select> -->
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="userInfo.mobile"></el-input>
              </el-form-item>
              <el-form-item label="邮　　箱">
                <el-input v-model="userInfo.email"></el-input>
              </el-form-item>
              <el-form-item label="微　　信">
                <el-input v-model="userInfo.weixin"></el-input>
              </el-form-item>
              <div class="sava-hr-info"
                   @click="savaUserInfo">保存</div>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>
    <!-- 设置密码弹框 -->
    <div class="password-dialog">
      <el-dialog :visible.sync="isShowPasswordDialog"
                 width="50%">
        <div class="password-title">设置 / 重置密码</div>
        <div class="password-content">
          <div class="now-phone">
            <span class="phone-font">当前手机号：</span><span class="mobile">{{phoneNum}}</span>
          </div>
          <div class="input-content">
            <span class="get-code">获取验证码</span>
            <el-input placeholder="输入验证码"></el-input>
            <el-input placeholder="新密码"></el-input>
            <el-input placeholder="确认密码"></el-input>
          </div>
          <button class="submit">提交</button>
        </div>
      </el-dialog>
    </div>
    <!-- 修改手机号弹框 -->
    <div class="phone-dialog">
      <el-dialog :visible.sync="isShowPhoneDialog"
                 width="50%">
        <div class="phone-title">修改手机号</div>
        <div class="phone-content">
          <div class="now-phone">
            <span class="phone-font">当前手机号：</span><span class="mobile">{{phoneNum}}</span>
          </div>
          <div class="input-content">
            <span class="get-code"
                  @click="sendCode"
                  v-if="isShowGetCode">获取验证码</span>
            <span class="timing"
                  v-if="isShowTime">{{timing}}s</span>
            <el-input placeholder="输入验证码"
                      v-model="code"></el-input>
            <el-input placeholder="输入新手机号"
                      v-model="newPhoneNum"></el-input>
          </div>
          <button class="submit"
                  @click="uploadRevise">提交</button>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import { revisePhoneNum, saveBasicInfo } from '@/api/index'
export default {
  data () {
    return {
      // 认证弹框
      approveDialog: false,
      dialogImageUrl: '',
      dialogVisible: false,
      // 显示消息列表
      messageShow: false,
      name: '',
      showProfile: false,
      isShowUersMes: true,
      isShowProfileDialog: false,
      isShowPasswordDialog: false,
      isShowPhoneDialog: false,
      isShowTime: false,
      isShowGetCode: true,
      userInfo: {
        linkname: '',
        duty: '',
        mobile: '',
        email: '',
        gender: '',
        weixin: ''
      },
      imageUrl: '../../static/images/timg (1).jpg',
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
      phoneNum: '',
      newPhoneNum: '',
      code: '',
      timing: 60
    }
  },
  created () {
    const res = localStorage.getItem('info')
    const info = JSON.parse(res)
    this.name = info.linkname
    this.phoneNum = info.mobile
    for (var key in this.userInfo) {
      this.userInfo[key] = info[key]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },

    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    async logout () {
      try {
        await this.$confirm('您是否确定退出?', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          duration: 1000
        })

        this.$router.push('/login')
        localStorage.removeItem('info')
        this.$message({
          type: 'success',
          message: '退出成功',
          duration: 1000
        })
      } catch (e) {
        this.$message({
          type: 'info',
          message: '已取消退出',
          duration: 1000
        })
      }
    },
    isShowProfile () {
      this.showProfile ? this.showProfile = false : this.showProfile = true
    },
    showProMesDialog () {
      this.showProfile = false
      this.isShowProfileDialog = true
    },
    showSetPasDialog () {
      this.showProfile = false
      this.isShowPasswordDialog = true
    },
    showSetMobDialog () {
      this.showProfile = false
      this.isShowPhoneDialog = true
    },
    handleAvatarSuccess (res, file) {
      this.hrInfo.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload () { },
    async savaUserInfo () {
      this.isShowUersMes = true
      const res = await saveBasicInfo('', this.userInfo)
      console.log(res)
    },
    async sendCode () {
      this.isShowGetCode = false
      this.isShowTime = true
      const timerId = setInterval(() => {
        this.timing--
        if (this.timing === 0) {
          this.isShowGetCode = true
          this.isShowTime = false
          clearInterval(timerId)
        }
      }, 1000)
      // const res = await getCode(this.phoneNum)
      // console.log(res)
      // if (res.status === 200) {
      //   this.$message({
      //     message: res.data.message,
      //     type: 'success',
      //     duration: 800
      //   })
      // }
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
    //  isShowMessage () {
    //   this.messageShow = true
    // },
    // colseMessage () {
    //   this.messageShow = false
    // }

  },
  computed: {
    // 获取需要高亮的哈希值
    activePath () {
      const { path } = this.$route
      const pathArr = path.split('/')
      return pathArr.length === 3 ? '/' + pathArr[1] : path
    }
  }
}
</script>

<style lang="less" scoped>
.mj-header {
  margin-bottom: 20px;
  .blank {
    width: 100%;
    background: rgba(46, 215, 117, 1);
  }
  .blank-nav {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 3px 10px #ebecee;
  }
}
.mj-header-bar {
  height: 60px;
  background: rgba(46, 215, 117, 1);
  padding: 12px 24px;
  position: relative;
  .mj-message {
    width: 349px;
    height: 427px;
    background: #fff;
    position: absolute;
    right: 23px;
    top: 61px;
    z-index: 999;
    padding: 36px 36px 0 38px;
    .message-close {
      font-size: 17px;
      cursor: pointer;
      color: #909399;
      position: absolute;
      top: 6px;
      right: 5px;
      &:hover {
        color: #2ed775;
      }
    }
    .message-ul {
      .message {
        list-style-type: disc !important;
        color: #000;
        font-size: 14px;
        margin-bottom: 40px;
        &:last-child {
          margin-bottom: 0;
        }
        a {
          display: block;
          width: 100%;
          color: #000;
          margin-left: 10px;
        }
      }
    }
    .check-more {
      display: block;
      width: 270px;
      height: 35px;
      color: #2ed775;
      border: 1px solid #2ed775;
      text-align: center;
      line-height: 35px;
      margin: 0 auto;
      margin-top: 17px;
    }
  }

  .mj-logo {
    width: 142px;
    height: 35px;
    float: left;
    background: url("../../static/images/logo.png");
    background-size: 100% 100%;
  }
  .mj-info {
    height: 35px;
    float: right;
    .mj-user {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: skyblue;
      transform: translateY(2px);
      margin-right: 12px;
      position: relative;
      z-index: 2;
      .mj-profile {
        width: 125px;
        height: 141px;
        background-color: #fff;
        position: absolute;
        top: 47px;
        right: -77px;
        padding: 19px 27px 26px 27px;
        font-size: 14px;
        color: #000;
        cursor: pointer;
        user-select: none;
        .profile-li {
          margin-bottom: 21px;
          text-align: center;
          &:last-child {
            margin-bottom: 0px;
          }
          &:hover {
            color: #2dcb70;
          }
        }
      }
      .avatar {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .approve {
        color: #e0e0e0;
        position: absolute;
        top: -3px;
        right: -7px;
        font-size: 14px;
      }
    }
    .mj-name {
      font-size: 16px;
      color: #fff;
      line-height: 35px;
      margin-right: 32px;
      user-select: none;
      position: relative;
      cursor: pointer;
      .arrow-down {
        font-size: 14px;
        vertical-align: middle;
      }
      .go {
        font-size: 12px;
        margin-left: 22px;
      }
    }
    .mj-messages {
      margin-right: 57px;
      a {
        display: block;
        font-size: 13px;
        color: #fff;
        line-height: 35px;
        position: relative;
        .circle {
          width: 7px;
          height: 7px;
          background: rgba(255, 0, 0, 1);
          border-radius: 50%;
          line-height: 16px;
          text-align: center;
          font-size: 12px;
          position: absolute;
          top: 5px;
          right: -5px;
        }
      }
    }
    .mj-exit {
      display: block;
      font-size: 13px;
      line-height: 35px;
      outline: none;
      .off {
        vertical-align: middle;
        font-size: 23px;
        margin-right: 8px;
      }
    }
  }
}
.mj-header-nav {
  height: 110px;
  background-color: #fff;
  .el-menu {
    height: 100%;
    border: none;
    display: flex;
    justify-content: space-between;
    .el-menu-item {
      width: 196px;
      height: 100%;
      font-size: 18px;
      line-height: 110px;
      text-align: center;
      &:hover {
        background-color: #fff;
      }
    }
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid rgba(46, 215, 117, 1);
  }
  // .el-menu-item {
  //   background-color: #f9f9f9 !important;
  // }
  .fonts {
    color: rgba(46, 215, 117, 1);
    font-size: 26px;
    margin-right: 20px;
  }
  .ability {
    font-size: 32px;
  }
}
.approve-content {
  .upload-business {
    margin-left: 48px;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 36px;
    .title {
      font-size: 16px;
      color: #000;
      margin-top: 32px;
      margin-bottom: 18px;
    }
  }
  .upload-id-card {
    margin-left: 48px;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 36px;
    .title {
      font-size: 16px;
      color: #000;
      margin-top: 32px;
      margin-bottom: 18px;
    }
  }
  .relation-prove {
    margin-left: 48px;
    padding-bottom: 44px;
    .title {
      font-size: 16px;
      color: #000;
      margin-top: 32px;
      margin-bottom: 18px;
    }
  }
  .prove-tips {
    margin-left: 48px;
    font-size: 14px;
    color: #666666;
    .tips-content {
      width: 463px;
      height: 61px;
      background-color: #e8e8e8;
      border-radius: 10px;
      padding: 10px 64px 11px 14px;
      font-size: 14px;
      color: #000;
      line-height: 22px;
      margin-top: 10px;
      margin-bottom: 10px;
      .copy {
        color: #2ed775;
        padding: 5px;
      }
    }
  }
}
.profile-dialog {
  .profile-title {
    width: 122px;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
    position: absolute;
    top: 38px;
    left: 45px;
    color: #666666;
  }
  .change {
    overflow: hidden;
    padding-top: 22px;
    .icon {
      float: right;
      color: #2ecc71;
      font-size: 16px;
      margin-right: 22px;
      user-select: none;
      cursor: pointer;
      .icon-xiugai {
        vertical-align: middle;
        font-size: 17px;
        line-height: 22px;
      }
    }
  }
  .profile-content {
    width: 266px;
    margin: 0 auto;
    .profile-photo {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin: 0 auto;
      .imgs {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .content-ul {
      margin-top: 60px;
      .content-li {
        font-size: 16px;
        margin-bottom: 42px;
        color: #666666;
        &:last-child {
          margin-bottom: 0px;
        }
        .li-left {
          color: #000;
          margin-right: 26px;
        }
      }
    }
  }
  .profile-content-two {
    width: 312px;
    margin: 0 auto;
    .el-form-item {
      width: 100%;
      margin-bottom: 16px;
      /deep/.el-form-item__label {
        color: #000;
      }
      .el-input {
        width: 215px;
      }
      .el-select {
        width: 215px;
      }
    }
    .avatar-uploader {
      margin-top: 22px;
      /deep/.el-upload {
        width: 64px;
        height: 64px;
        background-color: #f5f5f5;
        border-radius: 50%;
        margin: 0 auto;
        display: block;
        .avatar-uploader-icon {
          color: #d8d8d8;
          font-size: 30px;
          line-height: 58px;
          text-align: center;
          margin-left: 2px;
        }
        .avatar {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .upload-photo {
      font-size: 14px;
      text-align: center;
    }
    .sava-hr-info {
      width: 83px;
      height: 42px;
      background-color: #2ecc71;
      color: #fff;
      font-size: 16px;
      line-height: 42px;
      text-align: center;
      margin: 0 auto;
      cursor: pointer;
      margin-top: 5px;
    }
  }
}
.password-dialog {
  /deep/.el-dialog {
    border-radius: 5px;
  }
  /deep/.el-dialog__header {
    border-bottom: 1px solid #ebebeb;
  }
  /deep/.el-dialog__body {
    padding-bottom: 84px;
  }
  .password-title {
    width: 122px;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
    position: absolute;
    top: 38px;
    left: 45px;
    color: #666666;
  }
  .password-content {
    width: 388px;
    margin: 0 auto;
    margin-top: 68px;
    .now-phone {
      width: 203px;
      margin: 0 auto;
      text-align: center;
      .phone-font {
        font-size: 14px;
        color: #666666;
      }
      .mobile {
        font-size: 18px;
        color: #000;
      }
    }
    .input-content {
      margin-top: 40px;
      position: relative;
      .get-code {
        font-size: 14px;
        color: #2ed775;
        position: absolute;
        top: 10px;
        right: 22px;
        z-index: 2;
        cursor: pointer;
      }
      /deep/.el-input {
        margin-bottom: 16px;
      }
      /deep/.el-input__inner {
        border-radius: 22px;
      }
    }
    .submit {
      width: 388px;
      height: 44px;
      background-color: #2dcb70;
      color: #fff;
      font-size: 16px;
      border-radius: 22px;
      cursor: pointer;
    }
  }
}
.phone-dialog {
  /deep/.el-dialog {
    border-radius: 5px;
  }
  /deep/.el-dialog__header {
    border-bottom: 1px solid #ebebeb;
  }
  /deep/.el-dialog__body {
    padding-bottom: 143px;
  }
  .phone-title {
    width: 122px;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
    position: absolute;
    top: 38px;
    left: 45px;
    color: #666666;
  }
  .phone-content {
    width: 388px;
    margin: 0 auto;
    margin-top: 68px;
    .now-phone {
      width: 203px;
      margin: 0 auto;
      text-align: center;
      .phone-font {
        font-size: 14px;
        color: #666666;
      }
      .mobile {
        font-size: 18px;
        color: #000;
      }
    }
    .input-content {
      margin-top: 40px;
      position: relative;
      .timing {
        position: absolute;
        z-index: 20;
        top: 12px;
        right: 12px;
      }
      .get-code {
        font-size: 14px;
        color: #2ed775;
        position: absolute;
        top: 10px;
        right: 22px;
        z-index: 2;
        cursor: pointer;
      }
      /deep/.el-input {
        margin-bottom: 16px;
      }
      /deep/.el-input__inner {
        border-radius: 22px;
      }
    }
    .submit {
      width: 388px;
      height: 44px;
      background-color: #2dcb70;
      color: #fff;
      font-size: 16px;
      border-radius: 22px;
      cursor: pointer;
    }
  }
}
</style>
