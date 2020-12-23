function asyncExecute (cb, context) {
  return function (res) {
    setTimeout(() => {
      cb.bind(context)(res)
    })
  }
}
class Promise1 {
  constructor (cb) {
    this.cb = cb
    this.status = 'PENDING'
    this.resolve = asyncExecute(this.resolve, this)
    this.reject = asyncExecute(this.reject, this)
    this.response = void(0)
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    this._executeCallback()
  }
  resolve (res) {
    if (this.status !== 'PENDING') {
      throw new Error('promise`s status has been set as this.status')
    }
    this.response = res
    this.resolveCallbacks.forEach((cb) => {
      console.log(res)
      console.log(this)
      this.response = cb(this.response)
    })
  }
  reject (rej) {
    if (this.status !== 'PENDING') {
      throw new Error('promise`s status has been set as this.status')
    }
    this.response = rej
    this.rejectCallbacks.forEach((cb) => {
      this.response = cb(this.response)
    })
  }
  then (resCb) {
    this.resolveCallbacks.push(resCb)
  }
  catch (rejCb) {
    this.rejectCallbacks.push(rejCb)
  }
  _executeCallback () {
    this.cb(this.resolve, this.reject)
  }
}



new Promise1((resolve, reject) => {
  resolve('something')
}).then(res => {
  console.log(res)
})