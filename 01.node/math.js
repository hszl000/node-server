/**
 * 定义一个模块 math
 *  -在该模块中提供两个方法
 *    add(a,b); // 求两个数的和
 *    mul(a,b); // 求两个数的积
 */

const add = (a, b) => {
  return a + b
}

const mul = (a, b) => {
  return a * b
}

module.exports = {
  add,
  mul
}