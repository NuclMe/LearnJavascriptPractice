function changeName(names) {
  // console.log(1 + 2)
  let newReverse = ''
  for (let i = names.length - 1; i > 0; i--) {
    newReverse += names[i]
  }
  // console.log(newReverse)
  return newReverse
}

// changeName()

// changeName(names)

let names = 'New string, same results.'
function wordsReverse(names) {
  let words = names.split('')
  let res = []
  for (var i = 0; i < words.length; i++) {
    // res.push(words[i].split('').reverse().join(''))
    // console.log(words[i].split('').reverse().join(''))
  }
  return res.join(' ')
}

function wordReverse(names) {
  let makeArr = names.split('')
  // console.log(typeof makeArr)
}

wordsReverse(names)
let str = 'mama'
const textToBinary = (str = '') => {
  let res = ''
  res = str.split('').map((item) => {
    return char.charCodeAt(0).toString(2)
  })
}
