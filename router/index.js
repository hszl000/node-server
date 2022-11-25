const express = require('express')
const boom = require('boom')
const userRouter = require('./user')
const jwtAuth = require('./jwt')
const Result = require('../models/Result')

// 注册路由
const router = express.Router()

router.use(jwtAuth)

router.get('/', (req, res) => {
  res.send('欢迎你得到来')
})

// user模块下的请求
router.use('/user', userRouter)

/**
 * 集中处理 404 请求中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常数据请求
 */

router.use((req, res, next) => {
  next(boom.notFound('接口不存在'))
})

/**
 * 自定义路由异常处理中间件
 * 之一两点：
 * 第一：方法的参数不能减少
 * 第二：方法必须放在路由之后
 */

router.use((err, req, res, next) => {
  console.log(err.name)
  if (err.name && err.name === 'UnauthorizedError') {
    const { status = 401 } = err
    new Result(null, 'Token 验证失败', {}).jwtError(res.status(status))
  } else {
    const msg = (err && err.message) || '系统错误'
    const statusCode = (err.output && err.output.statusCode) || 500;
    const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message

    new Result(null,msg,{
      error: statusCode,
      errorMsg
    }).fail(res.status(statusCode))
  }
})

module.exports = router