// промисы
/* у промиса есть внутренние свойства: state и result */

// синтаксис
/*
let variable = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри функции-исполнителя.
  resolve или reject вызываются когда приходит результат 
У промиса есть внутренне свойства  обьекта  
state - состояние 
result - вначале undefined затем меняется на value если resolve(value) или на error если результат выполнения reject(error)
}); 

первый аргумент then - успешное выполнение промиса
второй аргумент then - reject промиса 

catch - если надо обработать ошибку 
finally  - выполнение в любом случае 
*/

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'))

// function go() {
//   showCircle(150, 150, 100, (div) => {
//     div.classList.add('message-ball')
//     div.append('Hello, world!')
//   })
// }

// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div')
//   div.style.width = 0
//   div.style.height = 0
//   div.style.left = cx + 'px'
//   div.style.top = cy + 'px'
//   div.className = 'circle'
//   document.body.append(div)
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px'
//       div.style.height = radius * 2 + 'px'

//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler)
//         resolve(div)
//       })
//     }, 0)
//   })
// }

// % - оператор деления без остатка, если число четное - вернет 0 если нет - вернет число которое не достает чтобы поделить на 2 ровно

// function simpleMultiplication(number) {
//   return number % 2 ? number * 9 : number * 8
// }
// simpleMultiplication(16)

// это решение можно было сделать и умнее, умножать на number в зависимости от вычесленного значения

// let a = 'a b'
// console.log(a.replace('a', 'k'))

// function replaceDots(str) {
//   // added the \ to escape special characters
//   // added the g so that replace is run for all occurences in the string
//   str.replace(/\./, '-')
// }
// function printNumber(str) {
//   generateNumber(str)
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('End'))
// }

// printNumber('3')
// printNumber('triuy')

// Функции Promise.all, Promise.allSettled, Promise.any и Promise.race

// Такие функции позволяют сгрупировать выполнение нескольких промисов
// Функция Promise.all() возвращает единый обьект Promise,который обьединяет набор промисов
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, 'Hello')
// })
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'World')
// })
// Promise.all([promise1, promise2]).then((values) => {
//   const [promise1data, promise2data] = values
//   console.log(promise1data, promise2data) // Hello World
// })

// но если хотя бы у одного промиса будет reject - все остальные тоже будут reject

// Promise.allSettled()

// также как и Promise.all() принимает набор промисов и выполняет их как единое целое, но возвращает объект со статусом и результатом промиса:

// const promise1 = new Promise((resolve, reject) => {
//   reject('Непредвиденная ошибка')
//   setTimeout(resolve, 500, 'Hello')
// })
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'World')
// })

// Promise.allSettled([promise1, promise2]).then((values) => {
//   const [promise1data, promise2data] = values
//   console.log(promise1data) // {status: "rejected", reason: "Непредвиденная ошибка"}
//   console.log(promise2data) // {status: "fulfilled", value: "World"}
// })

// Promise.race
// Функция Promise.race() также принимает несколько промисов, только возвращает первый завершенный промис (вне зависимости завершился от успешно или с ошибкой)

// Promise.any
// Функция Promise.any() принимает несколько промисов и возвращает первый успешно завершившийся промис:

// const promise1 = new Promise((resolve, reject) => {
//   reject("error in promise1");
//   setTimeout(resolve, 500, "Hello");
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(resolve, 1000, "World");
// });
// Promise.any([promise1, promise2])
//   .then(value => console.log(value))       // World
//   .catch(error => console.log(error));

// С помощью свойства errors типа AggregateError можно получить в виде массива все ошибки, которые возникли в промисах:

// const promise1 = new Promise((resolve, reject) => {
//   reject('error in promise1')
//   setTimeout(resolve, 500, 'Hello')
// })
// const promise2 = new Promise((resolve, reject) => {
//   reject('error in promise2')
//   setTimeout(resolve, 1000, 'World')
// })
// Promise.any([promise1, promise2])
//   .then((value) => console.log(value))
//   .catch((e) => console.log(e.errors))

// async/await

// async ставится перед  ассинхроннной функцией в которой предпологается будет выполняться одна или несколько ассинхронных задач

// async function funcMane(num) {
//   ;(await num) + num
// }
// funcName(1)
// Оператор await приостанавливает выполнение асинхронной функции, пока объект Promise не возвратить результат.

let s = ['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps', 'aaa']
function twoSort(s) {
  s.sort()
  // console.log(s[0].split('').join('***'))
}

// умнее было бы в одну строчку с sort засунуть и перед этим return поставить
//   return s.sort()[0].split('').join('***');
twoSort(s)

function isIsogram(str) {
  // let arr = str.split(',')

  // for (let idx in str) {
  // let text = str.split(',')
  let filteredArr =
    str
      .toLowerCase()
      .split('')
      .filter((element, index, array) => array.indexOf(element) == index).length == str.length
  return filteredArr
  // text.some(function (v, i, a) {
  //   // debugger
  //   let aoo = a.lastIndexOf(v) != i
  //   console.log(aoo)
  //   return aoo
  // })
  // debugger
  // }
  // for (i = 0; i < arr.length; i++) {
  //   console.log(i)

  // if (str.indexOf(arr[i]) < 0) {
  // } else {
  // }
  // }
}

isIsogram('ab')

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 3000)
//   debugger
// })

// promise.then(function (value) {
//   console.log(`${value}`)
// })

let names = 'The quick brown fox jumps       over the lazy dog.'

// let newNames = names.split('').reverse().join('')
// function reverseWords(str) {
//   let newNames = str.split('').reverse().join('').split('').reverse()
//   console.log(newNames)
//   return newNames
// }
// reverseWords(names)

// let reversedStuff = function (str) {
//   let newReversed = ''
//   for (let i = str.length - 1; i > 0; i--) {
//     newReversed += str[i]
//   }
//   return newReversed
// }


