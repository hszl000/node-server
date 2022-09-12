/**
 * Buffer(缓冲区)
 *    - Buffer的结构和数组很像,操作的方法也和数组类似
 *    - 数组中不能存储二进制文件,而Buffer就是专门用来存储二进制数据
 *    - 使用Buffer不需要引入模块,直接使用即可
 *    - 在Buffer中存储的都是二进制数据,但是都是以16进制的形式显示的
 *      buffer中的每一个元素的范围是从00 - ff
 *      00000000 - 11111111
 * 
 *      计算机 一个0 或 一个1 我们成为1位(bit)
 *  
 *      8bit = 1byte(字节)
 *      1024byte = 1kb
 *      1024kb = 1mb
 *      1024byte = 1kb
 *      1024byte = 1kb
 *      1024byte = 1kb
 *      buffer中的一个元素,占用内存中一个字节
 *  - Buffer的大小一旦确定,则不能修改,Buffer实际上是对底层内存的直接操作
 */

var str = "Hello 林大树"

// 将一个字符串保存到Buffer中

var buf = Buffer.from(str)

// console.log(buf.length) // 占用内存的大小
// console.log(str.length) // 字符串的长度

var buf2 = Buffer.alloc(10) // 10个字节的Buffer
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[3] = 255
console.log(buf2)

// 只要在页面或者控制台输出一定是10进制
// console.log(buf2[2].toString(2))

// for (let i = 0; i < buf2.length; i++) {
//   console.log(buf2[i].toString(16))
// }

// Buffer.allocUnsafe() // 创建一个指定大小的buffer,但是buffer中可能含有敏感数据

var buf3 = Buffer.allocUnsafe(10)

console.log(buf3)

/**
 * Buffer.from() 将一个字符串转换为buffer
 * Buffer.alloc() 创建一个指定大小的Buffer
 * Buffer.allocUnsafe() 创建一个指定大小的Buffer,但是可能包含敏感数据
 * buf.toString() 将缓冲区的数据转换为字符串
 */

var buf4 = Buffer.from('我是一段数据')

console.log(buf4.toString())