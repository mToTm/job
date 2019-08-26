<template>
  <div class="mj-change-phone shadow">
    <div class="change-phone-title">手机号修改</div>
    <div class="change-phone-content">
      <input type="number"
             placeholder="输入旧手机号"
             v-model="phoneNum">
      <input type="number"
             placeholder="输入验证码"
             v-model="code">
      <input type="number"
             placeholder="输入新手机号"
             v-model="newPhoneNum">
      <el-button type="success"
                 plain
                 @click="uploadRevise">提交修改</el-button>
      <a class="send-code"
         @click="sendCode">发送验证码</a>
    </div>
  </div>
</template>

<script src="./js/changePhone.js"></script>
<style lang="less" src="./less/changePhone.less"></style>
