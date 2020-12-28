// // Proxy
// let o = {
//   a: 1,
//   b: {
//     c : 1
//   }
// }
// let b1 = new Proxy (o.b, {
//   set (obj, property, value) {
//     console.log(obj, property, value)
//   },
//   get (obj, property) {
//     // console.log(obj[property])
//     return Reflect.get(obj, property)
//   }
// })
// let p = new Proxy (o, {
//   set (obj, property, value) {
//     console.log(obj, property, value)
//   },
//   get (obj, property) {
//     console.log(obj[property])
//     // if (property === 'b') {
//     //   return b1
//     // }
//     // return Reflect.get(obj, property)
//   }
// })

// // p.b.c = 2
// // console.log(p.b.c)

// function getDataType (data) {
//   return Object.prototype.toString.call(data).match(/\s(.*)\]$/)[1]
// }

// console.log(p instanceof Object)


let a = {a:1}
Object.defineProperty(a, {
  set () {
    console.log('set')
  }
})
a.b = 1