const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./constant')

const md5 = (s) => {
  // 注意参数要为 String 类型，否则会出错
  return crypto.createHash('md5')
    .update(String(s)).digest('hex')
}

const decoded = (req) => {
  let token = req.get('Authorization')
  if (token.includes('Bearer ')) {
    token = token.replace('Bearer ', '')
  }
  return {
    jwt: jwt.verify(token, PRIVATE_KEY, { algorithms: ["HS256"] }),
    token
  }
}

module.exports = {
  md5,
  decoded
}