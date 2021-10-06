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
//   str.replace(/./, '-')
// }

// replaceDots('one.two.three')

// выполение промиса resolve аргумент
// const myPromise = new Promise(function (resolve, reject) {
//   console.log('Выполнение асинхронной операции')
//   resolve('Все чекульбесно выполнено')
//   reject('Переданы некорректные данные,иди ты')
// })

// myPromise.then(function onFulfilled(value) {
//   console.log(`Из промиса получены данные ${value}`)
// })

//  вариация промисов
// const x = 4
// const y = 0

// const myPromise = new Promise(function (resolve, reject) {
//   if (y === 0) {
//     reject('переданы некорректные данные')
//   } else {
//     const z = x / y
//     resolve(z)
//   }
// })

// ассинхронное вычесление результатов выполнения промиса
// const x = 4
// const y = 8
// const myPromise = new Promise(function () {
//   console.log('Выполнение асинхронной операции')
//   const z = x + y
//   console.log(`Результат операции: ${z}`)
// })
// myPromise.then()

// const myPromise = Promise.resolve('Привет мир!')

// myPromise.then((value) => console.log(value))

// Обработка ошибок в Promise
// catch выполняет то значение,которое передается в reject
const myPromise = new Promise(function (resolve, reject) {
  // console.log('Выполнение асинхронной операции')
  // reject('Переданы некорректные данные')
})

myPromise.catch(function (error) {
  console.log(error)
})

// try..catch

/* Условия в  try  а что нужно делать если ерор возникнет то в catch 

const myPromise = new Promise(function(resolve, reject){
    try{
        console.log("Выполнение асинхронной операции");
        getSomeWork();      // вызов не существующей функции
        resolve("Hello world!");
    }
    catch(err){
        reject(`Произошла ошибка: ${err.message}`);
    }
});
myPromise.catch( function(error){
    console.log(error);
});




*/

// Обработка ошибки с помощью функции then
/* 
then() - ее второй параметр представляет обработчик ошибки, который в качестве параметра получает переданное из функции reject значение:

promise
  .then(function(value){
    // получение значения
  },
  function(error){
    // обработка ошибки
  });
*/

// обратока ошибок с помощью catch
/*
function generateNumber(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};
function printNumber(str){
    generateNumber(str)
        .then(value => console.log(value))
        .catch(error => console.log(error)); 
}
printNumber("rty"); // Not a number
printNumber("3");   // 3


если parsed будет равен NaN тогда будет выполнять catch error если будет равен resolve в таком случае будет происходить просто console.log(value)
*/
// когда мы вызваем then то создается новый промис у которого будут свои resolve,reject соответственно мы можем при помощи такого способа создавать цепочки промисов. Можем выполнять несколько синхронных операций подряд, одна за другой

// const helloPromise = new Promise(function (resolve) {
//   resolve('Hello')
// })

// const worldPromise = helloPromise.then(function (value) {
//   // возвращаем новое значение
//   return value + ' World'
// })
// const metanitPromise = worldPromise.then(function (value) {
//   // возвращаем новое значение
//   return value + ' from METANIT.COM'
// })
// metanitPromise.then(function (finalValue) {
//   // получаем финальное значение

//   console.log(finalValue) // Hello World from METANIT.COM
// })

// Возвращаемое Promise из catch
/*
При этом стоит отметить, что, поскольку catch() возвращает объект Promise, то далее также можно продолжить цепочку:
Причем метод then() после catch() будет вызываться, даже если не произошло ошибок и сам метод catch() не выполнялся.

И мы даже можем из функции-обработчика ошибки в catch() также можем передавать некоторое значение и получать через последующий метод then():


function generateNumber(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};
function printNumber(str){
    generateNumber(str)
        .then(value => value * value)
        .then(value => console.log(`Result: ${value}`))
        .catch(error => console.error(error))
        .then(() => console.log("Work has been done"));
}
printNumber("3");   
// Result: 9
// Work has been done

*/

/* 
Метод finally
Кроме методов then() и catch() объект Promise для обработка результата также предоставляет метод finally(). Этот метод выполняется в конце цепочки промисов вне зависимости произошла ошибка или выполнение промиса прошло успешно.
Метод finally() возвращает объект Promise, поэтому после него можно продолжить продолжить цепочку:

*/

function generateNumber(str) {
  return new Promise((resolve, reject) => {
    const parsed = parseInt(str)
    if (isNaN(parsed)) reject('Not a number')
    else resolve(parsed)
  })
}
function printNumber(str) {
  generateNumber(str)
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log('End'))
}

printNumber('3')
printNumber('triuy')

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

const promise1 = new Promise((resolve, reject) => {
  reject('error in promise1')
  setTimeout(resolve, 500, 'Hello')
})
const promise2 = new Promise((resolve, reject) => {
  reject('error in promise2')
  setTimeout(resolve, 1000, 'World')
})
Promise.any([promise1, promise2])
  .then((value) => console.log(value))
  .catch((e) => console.log(e.errors))

// async/await

// async ставится перед  ассинхроннной функцией в которой предпологается будет выполняться одна или несколько ассинхронных задач

async function funcMane(num) {
  ;(await 1) + num
}
funcName(1)
// Оператор await приостанавливает выполнение асинхронной функции, пока объект Promise не возвратить результат.
