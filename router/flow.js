const express = require('express')
const Result = require('../models/Result')
const { login, findUser } = require('../services/user')
const { body, validationResult } = require('express-validator')
const boom = require('boom')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/getTodoList', (req, res) => {
  res.json({
    error:0,
    msg:'success',
    result:[]
  })
})

module.exports = router