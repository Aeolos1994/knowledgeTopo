function ClassA (arg) {
  this.arg = arg
}
ClassA.prototype.show = function () {
  console.log(this.arg)
}

function ClassB (arg) {
  this.arg = arg
}

let objectA = new ClassA(1)
ClassB.prototype = objectA.__proto__

let objectB = new ClassB(2)
objectB.show()


