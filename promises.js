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

function simpleMultiplication(number) {
  return number % 2 ? number * 9 : number * 8
}
simpleMultiplication(16)

// это решение можно было сделать и умнее, умножать на number в зависимости от вычесленного значения

// let a = 'a b'
// console.log(a.replace('a', 'k'))

function replaceDots(str) {
  str.replace(/./, '-')
}

replaceDots('one.two.three')
