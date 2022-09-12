var obj = {}
obj.a = {}

var a = obj.a

a.name = '张三'

a = new Object()

console.log(obj.a.name)
console.log(a.name)