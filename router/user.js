const express = require('express')
const { user } = require('../db/config')
const Result = require('../models/Result')
const { login, findUser } = require('../services/user')
const { md5, decoded } = require('../utils')
const { PWD_SALT, PRIVATE_KEY, JWT_EXPIRES } = require('../utils/constant')
const { body, validationResult } = require('express-validator')
const boom = require('boom')
const jwt = require('jsonwebtoken')

const router = express.Router()

// 登录
router.post('/login',
  [
    body('userName').isString().withMessage('用户名必须为字符'),
    body('passWord').isString().withMessage('用户名必须为字符'),
  ],
  (req, res, next) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
      const [{ msg }] = err.errors
      next(boom.badRequest(msg))
    } else {
      console.log(err)
      console.log(req.body)
      let { userName, passWord } = req.body

      passWord = md5(`${passWord}${PWD_SALT}`)
      login(userName, passWord).then(user => {
        if (!user || !user.length) {
          new Result('账号或密码错误').fail(res)
        } else {
          // 生成token
          const token = jwt.sign(
            { userName },
            PRIVATE_KEY,
            { expiresIn: JWT_EXPIRES }
          )
          // 收集用户数据
          const [result] = user
          delete result.password
          console.log(user)
          new Result({ token }, '登陆成功').success(res)
        }
      }, err => {
        console.log(err)
      })
    }
  }
)

// 获取用户数据
router.get('/whoami', (req, res) => {
  const { token, jwt: { userName } } = decoded(req)
  if(token && userName){
    findUser(userName).then(user => {
      console.log(user, 'user')
  
      if (user) {
        const params = {
          result: { ...user, roles: user.role?.split(',') },
          token
        }
        new Result(params, '用户信息查询成功').success(res)
      } else {
        new Result('用户信息查询失败').fail(res)
      }
    })
  }
})
router.get('/info', (req, res) => {
  res.json('user info...')
})

// 获取用户权限
router.post('/getUserMenu', (req, res) => {
  res.json({
    error:0,
    msg:'success',
    result:[]
  })
})

module.exports = router