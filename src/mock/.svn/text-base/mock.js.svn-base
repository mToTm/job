// let Mock = require('mockjs')
// let Random = Mock.Random
// 聊天人员数据
// let listData = () => {
//   let _data = []
//   for (var i = 0; i < 20; i++) {
//     let newList = {
//       id: i,
//       content: Random.csentence(5, 30), //  Random.csentence( min, max )
//       imgSrc: Random.dataImage('50x50', '秀'), // Random.dataImage( size, text ) 生成图片（base64位数据格式）
//       author_name: Random.cname(), // Random.cname() 随机生成中文名
//       date: Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     }
//     _data.push(newList)
//   }
//   return { _data: _data }
// }

// Mock.mock('http://localhost:3000/api/chat_users', 'get', listData)

// // job表格的数据
// let jobPublishing = () => {
//   let jobList = []
//   for (var i = 0; i < 100; i++) {
//     let jobObj = {
//       id: i,
//       position: Random.csentence(5),
//       type: Random.cword('JavaH5UI.NET', 3, 4),
//       year: Random.integer(1, 10),
//       salary: Random.integer(10, 30),
//       education: Random.cword('大专本科硕士', 2),
//       palce: Random.city(),
//       publisDate: Random.date(),
//       endDate: Random.date()
//     }
//     jobList.push(jobObj)
//   }
//   return { jobList: jobList }
// }
// Mock.mock('/api/job_list', 'get', jobPublishing)
// // 待审核
// let jobCheck = () => {
//   let jobList = []
//   for (var i = 0; i < 100; i++) {
//     let jobObj = {
//       id: i,
//       position: Random.csentence(5),
//       type: Random.cword('JavaH5UI.NET', 3, 4),
//       year: Random.integer(1, 10),
//       salary: Random.integer(10, 30),
//       education: Random.cword('大本专科士硕', 2),
//       palce: Random.city(),
//       publisDate: Random.date(),
//       endDate: Random.date()
//     }
//     jobList.push(jobObj)
//   }
//   return { jobList: jobList }
// }
// Mock.mock('/api/job_check', 'get', jobCheck)
// // 所有职位
// let allJob = () => {
//   let jobList = []
//   for (var i = 0; i < 100; i++) {
//     let jobObj = {
//       id: i,
//       position: Random.csentence(5),
//       type: Random.cword('JavaH5UI.NET', 3, 4),
//       year: Random.integer(1, 10),
//       salary: Random.integer(10, 30),
//       education: Random.cword('大本专科士硕', 2),
//       palce: Random.city(),
//       publisDate: Random.date(),
//       endDate: Random.date(),
//       status: Random.cword('待审核发布中发布中', 3)
//     }
//     jobList.push(jobObj)
//   }
//   return { jobList: jobList }
// }
// Mock.mock('/api/job_all', 'get', allJob)

// module.exports = () => {
//   var data = {
//     publishDate: []
//   }

//   for (var i = 0; i < 100; i++) {
//     data.publishDate.push({
//       id: i,
//       position: Random.csentence(5),
//       type: Random.cword('JavaH5', 2, 4),
//       year: Random.integer(1, 10),
//       salary: Random.integer(10, 30),
//       education: Random.cword('大本专科士硕', 2),
//       palce: Random.city(),
//       publisDate: Random.date(),
//       endDate: Random.date()
//     })
//   }

//   return data
// }
// module.exports = () => {
//   // 使用 Mock
//   var data = Mock.mock({
//     'publish_date|100': [
//       {
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         position: '@csentence(5)',
//         type: `@cword('JavaH5', 2, 4)`,
//         year: '@integer(1, 10)',
//         salary: '@integer(10, 30)',
//         education: `@cword('大本专科士硕', 2)`,
//         palce: '@city()',
//         publisDate: '@date()',
//         endDate: '@date()'
//       }
//     ],
//     'check_pending|200': [
//       {
//         'id|+1': 1,
//         position: '@csentence(5)',
//         type: `@cword('JavaH5', 2, 4)`,
//         year: '@integer(1, 10)',
//         salary: '@integer(10, 30)',
//         education: `@cword('大本专科士硕', 2)`,
//         palce: '@city()',
//         publisDate: '@date()',
//         endDate: '@date()'
//       }
//     ],
//     'all_position|300': [
//       {
//         'id|+1': 1,
//         position: '@csentence(5)',
//         type: `@cword('JavaH5', 2, 4)`,
//         year: '@integer(1, 10)',
//         salary: '@integer(10, 30)',
//         education: `@cword('大本专科士硕', 2)`,
//         palce: '@city()',
//         publisDate: '@date()',
//         endDate: '@date()',
//         status: `@cword('待审核发布中发布中', 3)`
//       }
//     ]
//   })
//   // 返回的data会作为json-server的数据
//   return data
// }
