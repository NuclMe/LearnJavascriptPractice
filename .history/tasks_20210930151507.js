function findElem() {
  let border = "list-style-imAge";
  let res = border
    .split("-")
    .map(function (item, index) {
      if (index === 0) {
        return item;
      } else {
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
      }
    })
    .join("");

  //   console.log(res);
}
findElem();

/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.
*/
// sort, reverse и splice - не использвать в этой задаче
let arr5 = [0, 1, 2, 3, 4, 5];
function filterRange(arr5, a, b) {
  return arr5.filter((item) => item >= a && item <= b);
}

filterRange(arr5, 1, 5);

/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
*/
let arr = [0, 1, 2, 3, 4, 5];
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] >= b) {
      arr.splice(i, 1);
      i--;
    }
  }
  // console.log(arr);
}

filterRangeInPlace(arr, 1, 4);

let arr2 = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
// arr2.sort().reverse(); это мой рабочий способ
// console.log(arr2);

let arr3 = ["HTML", "JavaScript", "CSS"];

function copyArr(arr3) {
  return arr3.slice().sort();
}

let sorted = copyArr(arr3);
// console.log(arr3);
// console.log(sorted);

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
const sum = new Calculator();
const testAdd = sum.addMethod("/", (a, b) => a / b);
const testCalc = sum.calculate("2 + 8");
console.log(testCalc, testAdd);

// let ask = (questions, yes, no) => {
//   confirm(questions) ? yes() : no();
// };
// ask(
//   "Вы согласны?",
//   () => alert("вы согласились"),
//   () => alert("вы отказались")
// );

let ollo = (a, b) => a + b;
// alert(ollo(2, 2));
let res = ollo(2, 4);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let namesArr = users.map((item) => item.name);
// console.log(namesArr);

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];


function sorting(item){
  item.Fullname = item.surname + ' ' + item
}

let usersMapped = users.map(
  (item) => (item.fullName = item.name + item.surname)
);
// debugger;

console.log(usersMapped);
