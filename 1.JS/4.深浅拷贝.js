// JSON.stringify & JSON.parse进行深拷贝时会有什么问题？
// 这种方式进行深拷贝时会忽略function、undefined、Symbol

// 手动实现一个深拷贝
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


function leftSideOfTree(root) {
  let i = 0, node = {...root, floor: 0}, nodes = [],res = []
  while (node) {
    res[node.floor] || res.push(node.value)
    node.left && nodes.push({...node.left, floor: node.floor + 1})
    node.right && nodes.push({...node.right, floor: node.floor + 1})
    node = nodes[i++]
  }
}