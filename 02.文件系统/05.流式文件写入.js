/**
 * 同步,异步,简单文件写入都不适合大文件写入,性能较差,容易导致内存溢出
 */

const fs = require('fs')


// 流式文件写入

// 创建一个可写流
/**
 * fs.createWriteStream(path[, options])
 *    - 可以用来创建一个可写流
 *    - path 文件的路径
 *    - options 配置的参数
 * 
 */

const ws = fs.createWriteStream('hello4.txt')

// 可以通过监听流的open和close时间来监听流的打开和关闭

/**
 * on(事件字符串,回调函数)
 *    - 可以为对象绑定事件
 * 
 * on(事件字符串,回调函数)
 *    - 可以为对象绑定一次性的事件,该事件将会在触发一次之后自动失效
 */


ws.once('open', () => {
  console.log('流打开了')
})

ws.once('close', () => {
  console.log('流打关闭了')
})

// 通过 ws 向文件中输出内容
ws.write('111');
ws.write('222');
ws.write('333');
ws.write('444');
ws.write('555');
ws.write('666');

ws.close()