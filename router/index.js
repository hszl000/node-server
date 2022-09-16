const express = require('express')
const boom = require('boom')
const userRouter = require('./user')

const {
  CODE_ERROR
} = require('../utils/constant')

// 注册路由
const router = express.Router()

router.get('/',(req,res)=>{
  res.send('欢迎你得到来')
})

// user模块下的请求
router.use('/user',userRouter)

/**
 * 集中处理 404 请求中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常数据请求
 */

router.use((req,res,next)=>{
  next(boom.notFound('接口不存在'))
})

/**
 * 自定义路由异常处理中间件
 * 之一两点：
 * 第一：方法的参数不能减少
 * 第二：方法必须放在路由之后
 */

router.use((err,req,res,next)=>{
  console.log(err)
  const msg = (err && err.message) || '系统错误'
  const statusCode = (err.output && err.output.statusCode) || 500;
  const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
  
  res.status(statusCode).json({
    code:CODE_ERROR,
    msg,
    error:statusCode,
    errorMsg
  })
})

module.exports = router