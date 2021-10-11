// own map
Array.prototype.myMap = function (callbackFn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    /* call the callback function for every value of this array and       push the returned value into our resulting array
     */
    arr.push(callbackFn(this[i], i, this))
  }
  return arr
}

// let gretArr = ['he', 'lo']
// let test = gretArr.myMap((item) => {
//   return item
// })
// console.log(test)

// own filter

Array.prototype.myFilter = function (callbackFunc) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(this, this[i], i, this)) {
      arr.push(this[i])
    }
  }
}

// own reduce

Array.prototype.myReduce = function (callbackFn, initialValue) {
  var accumulator = initialValue
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callbackFn.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
}

let gretArr = [1, 2]

// let test = gretArr.myReduce(
//   function (previousValue, currentValue, index, array) {
//     // debugger
//     // return previousValue + currentValue
//   },
//   [initial],
// )
let value = gretArr.reduce(function (previousValue, item) {
  debugger
  return previousValue + item
}, 4)
console.log(value)

/* 

previousValue равно или initialValue или просто undefined так как он 

*/
