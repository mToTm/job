<template>
  <div class="login">
    <div class="logo"></div>
    <div class="login-content">
      <div class="line">
        <p class="hr">HR登录</p>
      </div>
      <div class="content-left fl">
        <div class="bar">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="验证码登录"
                         name="message">
              <input type="number"
                     placeholder="请输入手机号"
                     class="phone"
                     v-model="mobile">
              <span class="warning"
                    v-if="isShowPhone"><i class="iconfont icon-jinggao"></i>{{mobileTips}}</span>
              <div class="code-content">
                <input type="number"
                       placeholder="请输入验证码"
                       class="code"
                       v-model="code">
                <span class="get-code"
                      @click="gainCode"
                      v-if="isShowGetCode">获取验证码</span>
                <span class="timing"
                      v-if="isShowTime">{{timing}}s</span>
              </div>
              <span class="warning"
                    v-if="isShowCode"><i class="iconfont icon-jinggao"></i>{{codeTips}}</span>
              <button class="btn"
                      @click="mesLogin">登录</button>
            </el-tab-pane>
            <el-tab-pane label="密码登录"
                         name="password">
              <form>
                <input type="text"
                       placeholder="请输入手机号/邮箱"
                       class="email"
                       v-model="mobileOrEmail">
                <span class="warning"
                      v-if="isShowPhone"><i class="iconfont icon-jinggao"></i>{{mobileTips}}</span>
                <input type="password"
                       placeholder="请输入密码"
                       class="password"
                       v-model="password"
                       autocomplete>
                <span class="warning"
                      v-if="isShowPassword"><i class="iconfont icon-jinggao"></i>{{passwordTips}}</span>
              </form>

              <div class="forget clearfix"><span class="forget-password fr">忘记密码？</span></div>
              <button class="btn pass-btn"
                      @click="pasLogin">登录</button>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="content-right fl">
        <div class="wx-title">微信登录</div>
        <div class="qr-code">
          <img :src="qrSrc"
               alt=""
               class="qr-pic">
        </div>
        <p class="info">
          微信扫描二维码登录
          “MANJOB”
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getQr } from '@/api/index'
export default {
  data () {
    return {
      activeName: 'message',
      type: '0',
      mobile: '',
      code: '',
      isShowPhone: false,
      isShowCode: false,
      mobileTips: '',
      codeTips: '',
      mobileOrEmail: '',
      password: '',
      isShowPassword: false,
      passwordTips: '',
      loginId: '',
      timing: 60,
      isShowGetCode: true,
      isShowTime: false
    }
  },
  computed: {
    qrSrc () {
      return 'http://139.196.77.121:8088/common/getQR?content=/hr/QrLogin/' + this.loginId
    }
  },
  async created () {
    const res = await getQr()
    // console.log(res)
    this.loginId = res.data
  },
  methods: {
    handleClick (tab) {
      // console.log(tab)
      this.type = tab.index
      this.isShowPhone = false
      this.isShowPassword = false
      this.isShowCode = false
    },
    gainCode () {
      console.log(111)
      if (this.mobile === '') {
        this.isShowPhone = true
        this.mobileTips = '手机号不能为空！'
        return
      } else {
        this.isShowPhone = false
      }
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
    },
    // async gainCode () {
    //   // console.log(111)
    //   const res = await getCode(this.mobile)
    //   console.log(res)
    //   if (res.data.code === 1) {
    //     this.mobileTips = res.data.message
    //     this.isShowPhone = true
    //   } else if (res.data.code === 0) {
    //     this.isShowPhone = false
    //     this.$message({
    //       message: res.data.message,
    //       type: 'success',
    //       duration: 1000
    //     })
    //   }
    // },
    async mesLogin () {
      if (this.mobile === '') {
        this.isShowPhone = true
        this.mobileTips = '手机号不能为空！'
        return
      }
      // console.log(111)
      const res = await login(this.mobile, this.code, '', this.type)
      console.log(res)
      if (res.data.code === 1) {
        this.codeTips = res.data.message
        this.isShowCode = true
      } else if (res.data.code === 0) {
        localStorage.setItem('info', res.data.data)
        // const info = JSON.parse(res.data.data)
        // localStorage.setItem('token', info.tokenid)
        this.$router.push('/set')
        this.isShowCode = false
        this.isShowPhone = false
      }
    },
    async pasLogin () {
      if (this.password === '') {
        this.isShowPassword = true
        this.passwordTips = '密码不能为空！'
      }
      const res = await login(this.mobileOrEmail, '', this.password, this.type)
      console.log(res)
      if (res.data.code === 1) {
        this.isShowPhone = true
        this.mobileTips = res.data.message
        if (res.data.message === '密码不能为空！') {
          this.isShowPhone = false
        }
        if (res.data.message === '账号或者密码不正确！') {
          this.isShowPassword = true
          this.passwordTips = res.data.message
        }
        if (res.data.message === '手机号码不正确！' && this.password !== '') {
          this.isShowPassword = false
        }
      } else if (res.data.code === 0) {
        localStorage.setItem('info', res.data.data)
        // const info = JSON.parse(res.data.data)
        // localStorage.setItem('token', info.tokenid)
        this.$router.push('/home')
        this.isShowPassword = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: linear-gradient(#24d188 40%, #2ccb6f 10%, #fff 10%);
  overflow: hidden;
  .logo {
    width: 211px;
    height: 53px;
    margin: 0 auto;
    background: url("../../../static/images/logo2.png");
    background-size: 100% 100%;
    margin-top: 135px;
  }
  .login-content {
    width: 700px;
    height: 450px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 42px;
    border-radius: 10px;
    box-shadow: 0 0 7px 2px #f1f1f1;
    padding: 0 57px;
    .line {
      width: 100%;
      height: 46px;
      border-bottom: 1px solid #e8e8e8;
      position: relative;
      margin-bottom: 36px;
      .hr {
        width: 137px;
        text-align: center;
        font-size: 18px;
        color: #999999;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -11px;
        background-color: #fff;
      }
    }
    .bar {
      input[type="number"] {
        width: 360px;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 15px;
      }
      .phone {
        margin-top: 43px;
        margin-bottom: 11px;
      }
      .code-content {
        position: relative;
        .code {
          margin-bottom: 11px;
          margin-top: 36px;
          position: relative;
        }
        .get-code {
          font-size: 14px;
          color: #2ccb6f;
          position: absolute;
          bottom: 25px;
          right: 10px;
          cursor: pointer;
          user-select: none;
        }
        .timing {
          font-size: 14px;
          color: #ccc;
          position: absolute;
          bottom: 25px;
          right: 10px;
        }
      }

      .warning {
        font-size: 14px;
        color: #ff0000;
        .iconfont {
          vertical-align: middle;
          margin-right: 7px;
        }
      }
      .email,
      .password {
        width: 360px;
        border-bottom: 1px solid #e8e8e8;
        padding-bottom: 15px;
        margin-top: 43px;
        margin-bottom: 11px;
      }
      .password {
        margin-top: 36px;
      }
      .btn {
        width: 360px;
        height: 42px;
        background-color: #2ccb6f;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        margin-top: 43px;
        cursor: pointer;
      }
      .forget {
        font-size: 14px;
        color: #2ccb6f;
        cursor: pointer;
      }
      .pass-btn {
        margin-top: 24px;
      }
    }
    .content-right {
      margin-left: 85px;
      .wx-title {
        font-size: 16px;
        color: #000;
        text-align: center;
      }
      .qr-code {
        width: 132px;
        height: 132px;
        margin-top: 17px;
        .qr-pic {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .info {
        width: 136px;
        height: 33px;
        text-align: center;
        font-size: 14px;
        color: #999999;
        margin-top: 18px;
      }
    }
  }
}
</style>
