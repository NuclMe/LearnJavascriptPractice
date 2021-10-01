const obj = {}

// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name
// console.log(user)

function isEmpty(obj) {
  for (let key in obj) {
    return console.log(false)
  }
  //   return console.log(true)
}

isEmpty(obj)

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

//  мое решение
// let valuesArray = Object.values(salaries)
// const sum = valuesArray.reduce((prev, user) => prev + user, 0)

let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}
// console.log(sum)

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
}

function multiplyNumeric(menu) {
  for (let prop in menu) {
    if (typeof menu[prop] == 'number') {
      menu[prop] *= 2
    }
  }
  console.log(menu)
}

multiplyNumeric(menu)
