//  все что внутри обьекта - его свойства

let obj = {
  name: 'alex',
  id: 8,
  ids: 8,
  'likes birds': true,
}

// console.log(obj['likes birds'])

const user = {
  name: 'ololo',
}

user.name = 'Pete'
// console.log(Object.keys(obj).length) - узнать длинну обьекта

// let fruit = prompt('Какой фрукт купить?', 'apple')

// let bag = {
//   [fruit]: [fruit],
// }
// console.log(Object.keys(bag).length)
function makeUser(name, age) {
  return {
    name,
    age,
  }
}

let userName = makeUser('ivan', 22)

// console.log(`${userName.name} ${userName.age}`)

let obje = { name: 'John', age: 30 }
// obje.__proto__ = 5

// console.log(obje.__proto__)
// console.log('age' in obje)

// let vasyaa = { name: 'Вася', age: 25 }
// let petyaa = { name: 'Петя', age: 30 }
// let mashaa = { name: 'Маша', age: 29 }

// let averarr = [vasyaa, petyaa, mashaa]

// function getValues(averarr) {
//   let res = averarr.map((item) => item)
//   console.log(res)
//   return res
// }

// getValues(averarr)

let codes = {
  49: 'Германия',
  41: 'Швейцария',
  44: 'Великобритания',
  // ..,
  1: 'США',
}

for (let code in codes) {
  console.log(code) // 1, 41, 44, 49
}

let user = {}
// присваивание значения свойству
user['likes birds'] = true

// получение значения свойства
alert(user['likes birds']) // true

// 1)  если свойство состоит из строк или чисел то тогда у нему обращаются так ['имя свойства']
// также такой же фокус мы можем проделывать для вычесляемых свойств
// 2)  удалить свойство метод delete            
// 3) проверить существует ли свойство в обьекте .Возаращает булеан
// 4) Перебор свойств объекта: цикл for for (let key in obj). вернет массив ключей 