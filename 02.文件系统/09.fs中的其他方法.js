/**
 * fs.existsSync(path)
 *    - 检查一个文件是否存在
 */

const fs = require('fs')

// const isExists = fs.existsSync('hello.jpg')

// console.log(isExists)

/**
 * fs.stat(path,callback)
 * fs.statSync(path)
 *    - 获取文件的状态
 * 
 * Stats {
  dev: 494964070,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 3377699720584286,
  size: 47188,
  blocks: 96,
  atimeMs: 1663045482714.9146,
  mtimeMs: 1663045476506.2021,
  ctimeMs: 1663045476506.2021,
  birthtimeMs: 1663045476505.2097,
  atime: 2022-09-13T05:04:42.715Z,
  mtime: 2022-09-13T05:04:36.506Z,
  ctime: 2022-09-13T05:04:36.506Z,
  birthtime: 2022-09-13T05:04:36.505Z
}
* size 文件的大小
* isFile() 是否是一个文件
* isDirectory() 是否是一个文件夹（目录）
 */

// fs.stat('hello.jpg',(err,stats)=>{
//   if(err)return console.log(err)

//   console.log(stats.isDirectory())
// })
// const stat = fs.statSync('hello.jpg')

// console.log(stat)

/**
 * fs.unlink(path,callback)
 * fs.unlinkSync(path)
 *    - 删除文件
 */

// fs.unlink('hello4.txt',(err)=>{
//   if(err) return console.log(err)

//   console.log('删除成功')
// })

/**
 * fs.readdir(path[,options],callback)
 * fs.readdirSync(path[,options])
 *    - 读取文件夹中的结构
 *      files是一个字符串的数组，每一个元素就是一个文件夹或者文件的名字
 */

// fs.readdir('../../node-server',(err,files)=>{
//   if(err) return console.log(err)

//   console.log(files)
// })

/**
 * fs.truncate(path[,mode],callback)
 * fs.truncateSync(path,len)
 *    - 截断文件
 */

//  fs.truncateSync('hello2.txt',10)

/**
 * fs.mkdir(path[,mode],callback)
 * fs.mkdirSync(path[,mode])
 *    - 创建一个目录
 */

// fs.mkdirSync('hello')

/**
 * fs.rmdir(path,callback)
 * fs.rmdirSync(path)
 *    - 删除一个目录
 */

// fs.rmdirSync('hello')

/**
 * fs.rename(oldPath,newPath,callback)
 * fs.renameSync(oldPath,newPath)
 *    - 文件重命名
 */

// fs.renameSync('hello3.txt','hello4.txt')

/**
 * fs.watchFile(filename[,option],listener)
 *    - 监视文件的修改
 *    - 参数：
 *        filename 要监视文件的一个名字
 *        opions 配置选项
 *        listener 回调函数，当文件发生变化时会执行
 *          curr 当前文件的状态
 *          prev 修改前文件的状态
 *              - 这两个对象都是stats对象
 */

 fs.watchFile('hello2.txt',{interval:1000},(curr,prev)=>{
  console.log('修改前文件大小：',prev.size)
  console.log('修改后文件大小：',curr.size)
 })