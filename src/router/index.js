import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/home')
const Messages = () => import('@/pages/messages/messages')
const Job = () => import('@/pages/job/job')
const Inbox = () => import('@/pages/inbox/inbox')
const Resume = () => import('@/pages/resume/resume')
const Fit = () => import('@/pages/set/set')
const Survey = () => import('@/pages/job/survey')
const Publishing = () => import('@/pages/job/publishing')
const CheckPending = () => import('@/pages/job/checkPending')
const AllPositions = () => import('@/pages/job/allPositions')
const BasicInfo = () => import('@/pages/set/basicInfo')
const MyCollection = () => import('@/pages/set/myCollection')
const ResumeDownloaded = () => import('@/pages/set/downloaded')
const ChangePassword = () => import('@/pages/set/changePassword')
const ChangePhone = () => import('@/pages/set/changePhone')
const Booked = () => import('@/pages/set/booked')
const Interviewed = () => import('@/pages/set/interviewed')
const Post = () => import('@/pages/job/post')
const CheckMore = () => import('@/pages/set/checkMore')
const Login = () => import('@/pages/login/login')
const Receive = () => import('@/pages/job/receive')
Vue.use(Router)

const router = new Router({
  routes: [
    // 默认路由的重定向
    { path: '/login', component: Login },
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Home,
      redirect: '/messages',
      // 子路由
      children: [
        {
          path: '/messages',
          component: Messages
        },
        {
          path: '/job',
          component: Job,
          redirect: '/job/survey',
          children: [
            {
              path: 'survey',
              component: Survey
            },
            {
              path: 'publishing',
              component: Publishing
            },
            {
              path: 'checkpending',
              component: CheckPending
            },
            {
              path: 'allpositions',
              component: AllPositions
            },
            {
              path: 'post',
              component: Post
            },
            {
              path: 'receive',
              component: Receive
            }
          ]
        },
        {
          path: '/inbox',
          component: Inbox
        },
        {
          path: '/resume',
          component: Resume
        },
        {
          path: '/set',
          component: Fit,
          redirect: '/set/basicinfo',
          children: [
            {
              path: 'basicinfo',
              component: BasicInfo
            },
            {
              path: 'mycollection',
              component: MyCollection
            },
            {
              path: 'resumedownloaded',
              component: ResumeDownloaded
            },
            {
              path: 'changepassword',
              component: ChangePassword
            },
            {
              path: 'changephone',
              component: ChangePhone
            },
            {
              path: 'booked',
              component: Booked
            },
            {
              path: 'interviewed',
              component: Interviewed
            }
          ]
        },
        {
          path: '/checkmore',
          component: CheckMore
        }
      ]
    }
  ]
})

// 登录访问控制
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  const token = localStorage.getItem('info')
  // console.log(info)

  if (token) {
    // 登录
    next()
  } else {
    // 没有登录
    next('/login')
  }
})
export default router
