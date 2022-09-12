/**
 * 简单文件写入
 *    fs.writeFile(file, data[, options], callback)
 *    fs.writeFileSync(file, data[, options])
 *        - file 要操作文件的路径
 *        - data 要写入文件的数据
 *        - options 选项,可以对写入进行一些配置
 *        - callback 当写入完成时的回调
 *        - falg 
 *            r 只读
 *            w 可写
 *            a 追加
 */

// 引入 fs
const fs = require('fs')

fs.writeFile('hello3.txt', '这只通过writeFile写入的内容', { flag: 'a' }, (err) => {
  if (err) return console.log(err)
  console.log('写入成功')
})