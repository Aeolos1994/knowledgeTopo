// 手动实现call\apply\bind
Function.prototype.apply1 = function (thisArg, args) {
  let funcName = new Symbol()
  thisArg[funcName] = this
  let result = thisArg[funcName](args)
  delete thisArg[funcName]
  return result
}

Function.prototype.call1 = function (thisArg, ...args) {
  let funcName = new Symbol()
  thisArg[funcName] = this
  let result = thisArg[funcName](...args)
  delete thisArg[funcName]
  return result
}
let o = {
  name: 123,
  show (p1, p2) {
    console.log(`${this.name} ${p1} ${p2}`)
  }
}
let o1 = {
  name: 312
}
let a = []
console.log(a.slice.call([1,2,3], 1))

Function.prototype.bind = function(thisArg, ...args) {
  let originFunc = this
  return (...params) => {
    originFunc.call(thisArg, ...[...args, ...params])
  }
}