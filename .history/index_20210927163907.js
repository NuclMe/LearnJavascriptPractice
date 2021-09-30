// push - пушит в конец массива инфу.
// Возвращает новую длинну массива

let arr = ["I", "go", "home"];
// console.log(arr.length); // 3
arr.push("to Wakanda");
// console.log(arr.length); // 4
let newArr = ["ololo"];

let arrobj = [{ id: 1 }, { id: 2 }];
let arrsnumbers = [3, 5, 6];
arrsnumbers.push(7);
arrobj.push({ id: 3 });
// console.log(arrobj);
// console.log(arrsnumbers);
// PUSH END

// pop - извлекает из конца массива инфу
// возвращает последний елемент массива или undefined если массив пустой. Изменяет длинну массива и сам массив
let stringArr = ["my", " name", "is", "Serg"];
// console.log(stringArr, stringArr.length); // 4
// console.log(stringArr.pop()); // Serg
// console.log(stringArr, stringArr.length); // 3

// POP END

// shift извлекает первый елемент массива и возвращает этот елемент.Изменяет длинну массива и сам массив

let arrayOfStrings = ["today", "i am", "working"];
// console.log(arrayOfStrings);
// console.log(arrayOfStrings.shift());
// console.log(arrayOfStrings);

// unshift добавляет елемент в начало массива и возвращает новую длинну массива
const shiftarr = [4, 5, 6];
shiftarr.unshift(3);
// console.log(shiftarr);

// Массивы - это те же обьекты
// delete удаляет елементы . Внимание, длинна массива не поменяется, потому что он удаляет значение КЛЮЧА,сам ключ как и был undefined так он и останется

let deletearr = ["hello", "dear", "friend"];
delete deletearr[0];
// console.log(deletearr[0]);
// console.log(deletearr);

// splice умеет добавлять, удалять , заменять елементы массива. Возвращает массив удаленных или добавленых елементов

// Синтаксис
// splice( start) start - индекс елемента с которого нужно стартовать
// splice(start,deleteCount) deleteCount - количество елементов которые нужно убрать со страта
// splice (start,deleteCount,item1) item - елементы которые нужно добавить в массив начиная со start

let spliceArr = [1, 2, 3];

let ololo = spliceArr.splice(0, 2);

// console.log(ololo); // 1,2

let newSpliceArr = ["hello dear friend", "don`t delete me", "please"];

// let newololo = newSpliceArr.splice(1, 1, "слыш", "не удаляй");
// удалить с первого по первый елемент и добавить слыш, не удаляй
let superololo = newSpliceArr.splice(9, 0, "bambaleila");
// console.log(newSpliceArr);

let myFish = ["angel", "clown", "mandarin", "sturgeon"];
// let removed = myFish.splice(1, 0, "drum");
// let removed = myFish.splice(2, 0, "drum", "guitar");
// let removed = myFish.splice(3,1)
// let remove = myFish.splice(2, 1, "trumpet");
// let remove = myFish.splice(0, 2, "parrot", "anemone", "blue");
// let remove = myFish.splice(2, 2);
// let remove = myFish.splice(-2,1);
// let remove = myFish.splice(2)
// console.log(myFish);
// ---- NOTA BENE -----
// если не указать елементы которые добавить в массив то splice по дефолту сделает удаление елементов

// slice - копирует елменты от и до(не включая до). Возвращает новый массив с указанными парметрами
// Синтаксис slice([start],[end]) start и end - два индекса
let arrchka = ["t", "e", "s", "t"];
// console.log(arrchka.slice(0, 2));
// ----- ЕСЛИ СДЕЛАТЬ ПРОСТО ПУСТОЙ slice() - значит мы просто делаем копию массива

// concat - соеденяет массивы, возвращает новый массив
let concatArr = [4, 5, 6, 7];
let anotherConcat = ["heoi"];

// console.log(concatArr.concat(anotherConcat));

// forEach - выполняет указанную функцию один раз для каждого елемента массива. По дефолту вернет undefined.
// синтаксис callback - функция которая будет вызвана для кажлого елемента массива. Она принимает от одного до трех аргументов
// currentValue(обязательный) - текущий обрабатываемый елемент в массиве
// Index(необязательный) - индекс обрабатываемого елемнта в массиве
// array(необязательный ) массив по которому осуществляется проход

// можно еще thisArg передать, this  который используется при вызове функции callback
// Если в метод forEach() был передан параметр thisArg, при вызове callback он будет использоваться в качестве значения this. В противном случае, в качестве значения this будет использоваться значение undefined
// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);

const array1 = ["a", "b", "c"];

// array1.forEach(element => console.log(element));

// Методы поиска в массиве

// indexOf(item,from) - ищет item начиная с индекса from и возвращает индекс на котором был найден искомый елемент. Или -1 если елемента нет
// arr.indexOf(item,from )

// console.log(array1.indexOf('c', 0));

// lastIndexOf - вернет последний раз когда елемент был найден в массиве(индес елемента).
// Синтаксис lastIndexOf(item, index) index - необязательный параметр

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
// console.log(animals.lastIndexOf("Dodo"));

// includes - ищет  item начиная с индекса from если найдет - вернет true

let inclarr = [1, 2, 3];
inclarr.indexOf(2,0)
