/**
 * 1.同步文件读取
 * 2.异步文件读取
 * 3.简单文件读取
 *    fs.readFile(path[,option],callback)
 *    fs.readFileSync(path[,option])
 *      - path 要读取文件的路径
 *      - options 读取的选项
 *      - callback 回调函数,通过回调函数将读取到的文件返回
 * 4.流式文件读取
 */

const fs = require('fs')