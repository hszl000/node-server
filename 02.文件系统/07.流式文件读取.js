/**
 * 流式文件读取也适合大文件读取，可以分多次将文件读取到内存中
 */

var fs = require('fs')

// const pathRead = '测试.jpg'
const pathRead = 'D:/code/node-server/02.文件系统/测试.txt'
const pathWrite = '测试2.txt'

// 创建一个可读流
const rs = fs.createReadStream(pathRead)

// 创建一个可写流
const ws = fs.createWriteStream(pathWrite)


// 监听流的开启和关闭
rs.once('open',()=>{
  console.log('可读流打开了')
})

rs.once('close',()=>{
  console.log('可读流关闭了')
  ws.close()
})

ws.once('open',()=>{
  console.log('可写流打开了')
})

ws.once('close',()=>{
  console.log('可写流关闭了')
})

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据

rs.on('data',(data)=>{
  // console.log(data)
  ws.write(data)
})