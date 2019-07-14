/**
 * 单线程和异步
 * console.log(100)

setTimeout(() => {
  console.log(200)
}, 2000)

setTimeout(function(){
  console.log(400)
  setTimeout(()=>{
    console.log(500)
  },2000)
})

console.log(300)

setTimeout(()=>{
  console.log(600)
},1000)

console.log(700)
 */

/**
 * 日期知识点
 */

Date.now() //获取当前时间
const dt = new Date();
dt.getTime() //获取毫秒数
dt.getFullYear()  //年
dt.getMonth()   //月 (0-11)
dt.getDate()  //日 (0-31)
dt.getHours() //小时 （0-23）
dt.getMinutes() //分钟 (0-59)
dt.getSeconds() //秒 （0-59）

/**
 * Math对象，平均是、中位数、随机数
 */
Math.random()  //获取随机数 0<x<1 范围的小数