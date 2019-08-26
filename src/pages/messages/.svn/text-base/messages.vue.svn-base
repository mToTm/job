<template>
  <div class="mj-messages clearfix">
    <div class="mj-left-aside">
      <div class="mj-category">
        <router-link class="all-job"
                     to="">全部职位</router-link>
        <i class="el-icon-arrow-down"></i>
        <router-link class="tip talking"
                     to="">沟通中</router-link>
        <!-- <router-link class="tip booked"
                     to="">已预约</router-link> -->
      </div>
      <div class="mj-all-talk">
        <div class="all-talk">
          <i class="el-icon-search"></i>
          <span class="entire">全部对话</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="record"
             ref="productListScroll">
          <ul>

            <li :class="{active: activeId === item.id}"
                v-for="item in chatUsers"
                :key="item.id"
                @click="showChat(item.id)">
              <!-- 头像部分 -->
              <div class="photo fl">
                <img :src="item.imgSrc"
                     alt=""
                     class="head-portrait">
              </div>
              <!-- 聊天人员部分 -->
              <div class="worker-info fr">
                <div class="introduce clearfix">
                  <div class="name fl">{{item.linkName}}</div>
                  <div class="time fr">{{item.date}}</div>
                </div>
                <div class="content one-txt-cut">{{item.content}}</div>
              </div>
            </li>
            <!-- <li class="clearfix">
              <div class="photo fl"></div>
              <div class="worker-info fr">
                <div class="introduce clearfix">
                  <div class="name fl">代征钏</div>
                  <div class="time fr">14:10</div>
                </div>
                <div class="content">能和您沟通一下么？我...</div>
              </div>
            </li>
            <li class="clearfix">
              <div class="photo fl"></div>
              <div class="worker-info fr">
                <div class="introduce clearfix">
                  <div class="name fl">代征钏</div>
                  <div class="time fr">14:10</div>
                </div>
                <div class="content">能和您沟通一下么？我...</div>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="mj-right-aside fl">
      <div class="intervied">
        <!-- <router-link to="">已面试</router-link> -->
      </div>
      <div class="chat">
        <div class="chat-now">
          <div class="chatting clearfix">
            <div class="chat-photo fl"></div>
            <div class="chat-info fl">
              <div class="chat-name">陈高见</div>
              <div class="chat-job">曾任:上海易正软件服务有限公司 丨 web前端</div>
            </div>
          </div>
        </div>
        <div class="chat-message"></div>
        <div class="chat-input">
          <textarea name=""
                    class="send-message"></textarea>
          <i class="iconfont icon-xiaolian smile"></i>
          <i class="iconfont icon-changyongyu common-word"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import { getChatUsers } from '@/api/index'
export default {
  data () {
    return {
      chatUsers: [],
      activeId: -1,
      page: 1,
      pageSize: 10,
      linkId: ''
    }
  },
  async created () {
    const infoRes = localStorage.getItem('info')
    const info = JSON.parse(infoRes)
    this.linkId = info.id
    const res = await getChatUsers(this.page, this.pageSize, this.linkId)
    console.log(res)
    this.chatUsers = res.data.data
    let that = this
    // 融云初始化
    /* eslint-disable */
    RongIMLib.RongIMClient.init('k51hidwqk44ub') // ------------------------------重要填写appkey
    that.beforeIm() // 设置监听，必须先设置监听，再连接
    that.nowIm() // 连接融云
    // getChatUsers().then(res => {
    //   console.log(res)
    //   this.chatUsers = res.data._data
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.productListScroll, {
    //         click: true
    //       })
    //     } else {
    //       this.scroll.refresh()
    //     }
    //   })
    // })
    // this.$http.get('/api/chat_users').then(res => {
    //   // console.log(res.data)
    //   this.chatUsers = res.data._data
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.productListScroll, {
    //         click: true
    //       })
    //     } else {
    //       this.scroll.refresh()
    //     }
    //   })
    // })
  },
  methods: {
    beforeIm () {
      let that = this
      // 连接状态监听器
      RongIMClient.setConnectionStatusListener({
        onChanged: function (status) {
          // status 标识当前连接状态
          switch (status) {
            case RongIMLib.ConnectionStatus.CONNECTED:
              console.log('链接成功')
              break
            case RongIMLib.ConnectionStatus.CONNECTING:
              console.log('正在链接')
              break
            case RongIMLib.ConnectionStatus.DISCONNECTED:
              console.log('断开连接')
              break
            case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
              console.log('其他设备登录')
              break
            case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
              console.log('域名不正确')
              break
            case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
              console.log('网络不可用')
              break
          }
        }
      })

      // 消息监听器
      RongIMClient.setOnReceiveMessageListener({
        // 接收到的消息
        onReceived: function (message) {
          // 判断消息类型
          switch (message.messageType) {
            case RongIMClient.MessageType.TextMessage:
              // message.content.content => 文字内容
              break;
            case RongIMClient.MessageType.VoiceMessage:
              // message.content.content => 格式为 AMR 的音频 base64
              break;
            case RongIMClient.MessageType.ImageMessage:
              // message.content.content => 图片缩略图 base64
              // message.content.imageUri => 原图 URL
              break;
            case RongIMClient.MessageType.LocationMessage:
              // message.content.latiude => 纬度
              // message.content.longitude => 经度
              // message.content.content => 位置图片 base64
              break;
            case RongIMClient.MessageType.RichContentMessage:
              // message.content.content => 文本消息内容
              // message.content.imageUri => 图片 base64
              // message.content.url => 原图 URL
              break;
            case RongIMClient.MessageType.InformationNotificationMessage:
              // do something
              break;
            case RongIMClient.MessageType.ContactNotificationMessage:
              // do something
              break;
            case RongIMClient.MessageType.ProfileNotificationMessage:
              // do something
              break;
            case RongIMClient.MessageType.CommandNotificationMessage:
              // do something
              break;
            case RongIMClient.MessageType.CommandMessage:
              // do something
              break;
            case RongIMClient.MessageType.UnknownMessage:
              // do something
              break;
            default:
            // do something
          }
        }
      });
    },
    nowIm () {
      // 自己的token------从接口获取，写到缓存
      let token = 'WhZosL9HRN46cHoMbomrRpDQLX9JJu9D16zVEKy14YdiOdQh6QJ9CqlDvOqH3hnLkeu/zPZm0jLiCrgcF/iQ1h+E4zAYQx9uwrupVgczGgSKALuKjU4ueqG+FgwLuYqJkRpB4vEXKa0='// "WzrthC5f4UfuiI7dIwCQ5fwtGfqCdobpowIZkcQnj8PQOQuAJb/nIi1ayzGFwJguvbQZxbJH3x0=";
      RongIMClient.connect(token, {
        onSuccess: function (userId) {
          console.log('Connect successfully. ' + userId)
        },
        onTokenIncorrect: function () {
          console.log('token 无效')
        },
        onError: function (errorCode) {
          let info = ''
          switch (errorCode) {
            case RongIMLib.ErrorCode.TIMEOUT:
              info = '超时'
              break
            case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
              info = '不可接受的协议版本'
              break
            case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
              info = 'appkey不正确'
              break
            case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
              info = '服务器不可用'
              break
          }
          console.log(info)
        }
      })
    },
    send () {
      let msg = new RongIMLib.TextMessage({ content: 'hello RongCloud!', extra: '附加信息' });
      let conversationType = RongIMLib.ConversationType.PRIVATE; // 单聊, 其他会话选择相应的消息类型即可
      let targetId = 'user1'; // 目标 Id 需要每个人的目标ID
      RongIMClient.getInstance().sendMessage(conversationType, targetId, msg, {
        onSuccess: function (message) {
          // message 为发送的消息对象并且包含服务器返回的消息唯一 Id 和发送消息时间戳
          console.log('Send successfully');
        },
        onError: function (errorCode, message) {
          let info = '';
          switch (errorCode) {
            case RongIMLib.ErrorCode.TIMEOUT:
              info = '超时';
              break;
            case RongIMLib.ErrorCode.UNKNOWN:
              info = '未知错误';
              break;
            case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
              info = '在黑名单中，无法向对方发送消息';
              break;
            case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
              info = '不在讨论组中';
              break;
            case RongIMLib.ErrorCode.NOT_IN_GROUP:
              info = '不在群组中';
              break;
            case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
              info = '不在聊天室中';
              break;
          }
          console.log('发送失败: ' + info + errorCode);
        }
      });
    }
  }

}
</script>

<style lang="less" scoped>
.mj-left-aside {
  width: 250px;
  float: left;
  margin-right: 22px;
}
.mj-category {
  margin-bottom: 18px;
  .all-job {
    font-size: 14px;
    color: #000;
  }
  .tip {
    font-size: 14px;
    color: #999999;
  }
  .talking {
    margin-left: 40px;
    margin-right: 40px;
    color: #2ed775;
  }
  .el-icon-arrow-down {
    color: rgba(221, 221, 221, 1);
  }
}
.mj-all-talk {
  width: 100%;
  background-color: #f9f9f9;
  box-shadow: 0 0 7px 4px #ebecee;
  border-radius: 10px;
  .all-talk {
    text-align: center;
    height: 56px;
    line-height: 56px;
    .el-icon-search {
      font-size: 23px;
      vertical-align: middle;
      color: rgba(221, 221, 221, 1);
    }
    .entire {
      font-size: 16px;
      color: #000;
      margin-left: 30px;
      margin-right: 13px;
      user-select: none;
    }
  }
  .record {
    width: 100%;
    background: #fff;
    height: 782px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    li {
      padding: 17px 14px;
      cursor: pointer;
      overflow: hidden;
      &.active {
        background-color: #f4f6f8;
      }
      &:hover {
        background: #f4f6f8;
      }
      .photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: skyblue;
        .head-portrait {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .worker-info {
        width: 155px;
        .introduce {
          height: 21px;
          margin-bottom: 11px;
          .name {
            font-size: 16px;
            color: #000;
          }
          .time {
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
            line-height: 21px;
          }
        }
        .content {
          font-size: 14px;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
}
.mj-right-aside {
  .intervied {
    height: 20px;
    font-size: 14px;
    margin-bottom: 17px;
    a {
      color: rgba(153, 153, 153, 1);
    }
  }
  .chat {
    width: 1078px;
    height: 838px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 7px 4px #ebecee;
    .chat-now {
      width: 100%;
      height: 81px;
      border-bottom: 1px solid #dbdbdb;
      padding: 18px 33px;
      .chat-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: skyblue;
        margin-right: 21px;
      }
      .chat-name {
        font-size: 16px;
        color: #000;
        margin-bottom: 11px;
      }
      .chat-job {
        font-size: 14px;
        color: #999999;
      }
    }
    .chat-message {
      width: 100%;
      height: 562px;
      border-bottom: 1px solid #dbdbdb;
    }
    .chat-input {
      position: relative;
      .send-message {
        width: 100%;
        height: 193px;
        outline: none;
        resize: none;
        border: none;
        font-size: 16px;
        padding-left: 18px;
        padding-top: 62px;
      }
      .iconfont {
        font-size: 28px;
        color: #dddddd;
        position: absolute;
        cursor: pointer;
      }
      .smile {
        top: 21px;
        left: 20px;
      }
      .common-word {
        left: 70px;
        top: 21px;
      }
    }
  }
}
</style>
