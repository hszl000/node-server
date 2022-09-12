/**
 * 异步文件写入
 *    fs.open(path, flags[, mode], callback)
 *        - 用来打开一个文件
 *        - 异步调用的方法,结果都是通过回调函数的参数返回的
 *        - 回调函数两个参数:
 *            err 错误对象,如果没有错误则为 null
 *            fd 文件描述符
 *    fs.writeFile(file, data[, options], callback)
 *        - 用来异步写入一个文件
 *    fs.close(fd, callback)
 *        - 用来关闭一个文件
 * 
 */

// 引入 fs 模块
const fs = require('fs')

// 打开文件
fs.open('hello2.txt', 'w', (err, fd) => {
  if (err) return console.log(err)

  console.log(fd)

  fs.write(fd, '老婆我爱你', (err) => {
    if (err) return console.log(err)

    console.log('写入成功')

    // 关闭文件
    fs.close(fd, (err) => {
      if (err) return console.log(err)

      console.log('关闭成功')
    })
  })
})