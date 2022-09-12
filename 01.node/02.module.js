/**
 * 模块化
 */

const md = require('./01.helloNode')
const { add, mul } = require('./math')
const fs = require('fs')

console.log(md)

console.log(add(10, 2), 'add')
console.log(mul(10, 2), 'mul')

console.log(fs, 'fs')
