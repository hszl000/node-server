/**
 * 1.同步文件读取
 * 2.异步文件读取
 * 3.简单文件读取
 *    fs.readFile(path[,option],callback)
 *    fs.readFileSync(path[,option])
 *      - path 要读取文件的路径
 *      - options 读取的选项
 *      - callback 回调函数,通过回调函数将读取到的文件返回(err,data)
 *        err 错误对象
 *        data 读取到的数据，会返回一个Buffer
 * 4.流式文件读取
 */

const fs = require('fs')

const path = 'D:/code/node-server/02.文件系统/测试.jpg'

fs.readFile(path,(err,data)=>{
  if(err) return console.log(err)

  fs.writeFile('hello.jpg',data,(err)=>{
    if(err) return console.log(err)
    console.log('文件写入成功')
  })
})