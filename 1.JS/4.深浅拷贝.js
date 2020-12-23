function getDataType (data) {
  return Object.prototype.toString.call(data).match(/\s(.*)\]$/)[1]
}
function copy (data) {
  if (typeof data === "object" && data) {
    let res = Array.isArray(data) ? [] : {}
    for (key in data) {
      res[key] = copy(data[key])
    }
    return res
  } else {
    return data
  }
}

let o = {a:1, b: {c:2}}
let oc = copy(o)
o.b.c = 3
console.log(oc.b.c)