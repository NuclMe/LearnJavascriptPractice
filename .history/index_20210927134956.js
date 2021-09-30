// push - пушит в конец массива инфу.
// Возвращает новую длинну массива

let arr = ["I", "go", "home"];
console.log(arr.length); // 3
arr.push("to Wakanda");
console.log(arr.length); // 4
let newArr = ["ololo"];

let arrobj = [{ id: 1 }, { id: 2 }];
let arrsnumbers = [3, 5, 6];
arrsnumbers.push(7);
arrobj.push({ id: 3 });
console.log(arrobj);
console.log(arrsnumbers);
// PUSH END

// pop - извлекает из конца массива инфу
// возвращает последний елемент массива или undefined если массив пустой. Изменяет длинну массива и сам массив
let stringArr = ["my", " name", "is", "Serg"];
console.log(stringArr, stringArr.length); // 4
console.log(stringArr.pop()); // Serg
console.log(stringArr, stringArr.length); // 3

// POP END

// shift извлекает первый елемент массива и возвращает этот елемент.Изменяет длинну массива и сам массив

let arrayOfStrings = ["today", "i am", "working"];
console.log(arrayOfStrings);
console.log(arrayOfStrings.shift());
console.log(arrayOfStrings);

// unshift добавляет елемент в начало массива и возвращает новую длинну массива
const shiftarr = [4, 5, 6];
shiftarr.unshift(3);
console.log(shiftarr);

// splice

let deletearr = ["hello", "dear", "friend"];
delete deletearr[]
