// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line
// import mock from './mock/mock'

// 导入element-ui
import ElementUI from 'element-ui'
// 引入momentjs
import moment from 'moment'
// 导入element-ui的样式文件
import 'element-ui/lib/theme-chalk/index.css'
// 导入重置elementui的样式
import '../static/css/resetele.less'
// 导入字体图标
import '../static/fonts/iconfont.css'
// 导入自己的样式
import '../static/css/reset.less'
// 导入axios的配置文件
// eslint-disable-next-line
// 挂载到实例上
Vue.prototype.$moment = moment
Vue.prototype.$bus = new Vue()
// 安装插件
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
